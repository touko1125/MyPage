document.addEventListener('DOMContentLoaded', () => {
    const portfolioList       = document.getElementById('portfolioList');
    const loadingIndicator    = document.getElementById('loadingIndicator');
    const noDataMessage       = document.getElementById('noDataMessage');
    const backToTopBtn        = document.getElementById('backToTop');
    const filterButtonsContainer = document.getElementById('filterButtons');
  
    // ローディング表示
    loadingIndicator.style.display = 'flex';
    portfolioList.style.display    = 'none';
  
    // 対応するカテゴリ一覧を定義（順番もこの配列順に表示されます）
    const ALL_CATEGORIES = ['ゲーム','アプリ','ウェブ','アート'];
  
    // フィルターボタンを生成
    function generateCategoryFilters() {
      // 「すべて」ボタン
      const allBtn = document.createElement('button');
      allBtn.className = 'filter-button active';
      allBtn.setAttribute('data-filter', 'all');
      allBtn.innerHTML = '<i class="fas fa-th-large"></i> すべて';
      filterButtonsContainer.appendChild(allBtn);
  
      // 各カテゴリボタン
      ALL_CATEGORIES.forEach(cat => {
        const btn = document.createElement('button');
        btn.className = 'filter-button';
        btn.setAttribute('data-filter', cat);
  
        // アイコンは例として
        let icon = 'fas fa-folder';
        if (cat === 'ゲーム') icon = 'fas fa-gamepad';
        if (cat === 'アプリ') icon = 'fas fa-mobile-alt';
        if (cat === 'ウェブ') icon = 'fas fa-globe';
        if (cat === 'アート') icon = 'fas fa-paint-brush';
  
        btn.innerHTML = `<i class="${icon}"></i> ${cat}`;
        filterButtonsContainer.appendChild(btn);
      });
    }
  
    // ポートフォリオアイテムを生成
    function generatePortfolioItems(projects) {
      portfolioList.innerHTML = '';
      if (projects.length === 0) {
        noDataMessage.style.display = 'block';
        return;
      }
      noDataMessage.style.display = 'none';
  
      projects.forEach(project => {
        const item = document.createElement('div');
        item.className = 'portfolio-item';
  
        // project.category は "ウェブ / アプリ" のような文字列、スラッシュで複数カテゴリを持つ想定
        const cats = project.category
          .split('/')
          .map(s => s.trim())
          .filter(c => ALL_CATEGORIES.includes(c));
        // data-categories 属性にカンマ区切りで保持
        item.setAttribute('data-categories', cats.join(','));
  
        // カテゴリバッジ（複数表示）
        const badgeContainer = document.createElement('div');
        badgeContainer.className = 'category-badge';
        cats.forEach(c => {
          let icon = 'fas fa-folder';
          if (c === 'ゲーム') icon = 'fas fa-gamepad';
          if (c === 'アプリ') icon = 'fas fa-mobile-alt';
          if (c === 'ウェブ') icon = 'fas fa-globe';
          if (c === 'アート') icon = 'fas fa-paint-brush';
          const span = document.createElement('span');
          span.innerHTML = `<i class="${icon}"></i> ${c}`;
          badgeContainer.appendChild(span);
        });
  
        // 画像・タイトルなど既存の組み立て
        const imageEl = document.createElement('img');
        imageEl.src = project.banner;
        imageEl.alt = project.title;
        if (project.imgStyle) imageEl.style.cssText = project.imgStyle;
  
        const dateBadge = document.createElement('div');
        dateBadge.className = 'date-badge';
        dateBadge.innerHTML = `<i class="far fa-calendar-alt"></i> ${project.date}`;
  
        const info = document.createElement('div');
        info.className = 'portfolio-info';
        info.innerHTML = `
          <h3 class="portfolio-title">${project.title}</h3>
          <div class="portfolio-tags">${project.tags.slice(0,3).map(tag =>
            `<span class="tag"><i class="${tag.icon}"></i> ${tag.text}</span>`
          ).join('')}</div>
          <a class="portfolio-link" href="detail.html?id=${project.id}"><i class="fas fa-eye"></i> 詳細を見る</a>
        `;
  
        item.appendChild(badgeContainer);
  
        const imgContainer = document.createElement('div');
        imgContainer.className = 'portfolio-image';
        imgContainer.appendChild(imageEl);
        imgContainer.appendChild(dateBadge);
        item.appendChild(imgContainer);
  
        item.appendChild(info);
        portfolioList.appendChild(item);
      });
    }
  
    // フィルタリング設定
    function setupFiltering() {
        document.querySelectorAll('.filter-button').forEach(btn => {
          btn.addEventListener('click', () => {
            // ボタンのアクティブ切り替え
            document.querySelectorAll('.filter-button').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
      
            const filter = btn.getAttribute('data-filter');
            // filter が 'all' なら全件、それ以外なら該当カテゴリを含むプロジェクトのみ取得
            const filtered = (filter === 'all')
              ? projectsData
              : projectsData.filter(project => {
                  const cats = project.category
                    .split('/')
                    .map(s => s.trim());
                  return cats.includes(filter);
                });
      
            // 再描画
            generatePortfolioItems(filtered);
          });
        });
      }
  
    // 初期化（擬似API呼び出し）
    setTimeout(() => {
      loadingIndicator.style.display = 'none';
      portfolioList.style.display    = 'grid';
      generateCategoryFilters();
      generatePortfolioItems(projectsData);
      setupFiltering();
      lazyLoadImages();
      adjustLayout();
    }, 800);

    // スクロールイベントでトップに戻るボタンの表示/非表示を切り替え
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
        backToTopBtn.classList.add('visible');
        } else {
        backToTopBtn.classList.remove('visible');
        }
    });

    // トップに戻るボタンのクリックイベント
    backToTopBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
        top: 0,
        behavior: 'smooth'
        });
    });

    // 画像の遅延読み込み機能
    function lazyLoadImages() {
        const images = document.querySelectorAll('.portfolio-image img');
        
        if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
            if (entry.isIntersecting) {
                const image = entry.target;
                if (image.dataset.src) {
                image.src = image.dataset.src;
                image.removeAttribute('data-src');
                }
                imageObserver.unobserve(image);
            }
            });
        });
        
        images.forEach(image => {
            imageObserver.observe(image);
        });
        } else {
        // IntersectionObserverが利用できない場合のフォールバック
        images.forEach(image => {
            if (image.dataset.src) {
            image.src = image.dataset.src;
            image.removeAttribute('data-src');
            }
        });
        }
    }

    // ウィンドウがリサイズされたときにレイアウトを調整
    window.addEventListener('resize', () => {
        adjustLayout();
    });

    // レイアウト調整関数
    function adjustLayout() {
        // 小さな画面でのスクロール可能なフィルターボタンの処理
        const filterSection = document.querySelector('.filter-section');
        const windowWidth = window.innerWidth;
        
        if (windowWidth <= 480) {
        // 小さな画面では横スクロール可能なフィルターバーになる
        const activeButton = filterSection.querySelector('.filter-button.active');
        if (activeButton) {
            // アクティブなボタンが見えるようにスクロール
            filterSection.scrollLeft = activeButton.offsetLeft - filterSection.offsetWidth / 2 + activeButton.offsetWidth / 2;
        }
        }
    }

    // 初期レイアウト調整
    adjustLayout();
    });