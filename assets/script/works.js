document.addEventListener('DOMContentLoaded', () => {
  const portfolioList = document.getElementById('portfolioList');
  const loadingIndicator = document.getElementById('loadingIndicator');
  const noDataMessage = document.getElementById('noDataMessage');
  const filterButtonsContainer = document.getElementById('filterButtons');
  const backToTopBtn = document.querySelector(".back-to-top") || document.getElementById("backToTop");

  // プロジェクトデータが読み込まれているか確認
  if (typeof projectsData === 'undefined') {
      console.error("projectsData is not loaded.");
      if (loadingIndicator) loadingIndicator.textContent = "Data Load Error";
      return;
  }

  // フィルタリング機能の初期化
  function initFilter() {
      if (!filterButtonsContainer) return;

      const categories = ['All', 'ゲーム', 'アプリ', 'アート'];
      filterButtonsContainer.innerHTML = '';

      categories.forEach(cat => {
          const btn = document.createElement("button");
          btn.className = `filter-btn ${cat === 'All' ? 'active' : ''}`;
          btn.textContent = cat;
          btn.setAttribute('data-filter', cat);
          
          btn.addEventListener("click", () => {
              // ボタンのアクティブ切り替え
              document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
              btn.classList.add("active");

              filterProjects(cat);
          });
          filterButtonsContainer.appendChild(btn);
      });
  }

  // プロジェクトのフィルタリングと表示
  function filterProjects(category) {
      if (!portfolioList) return;
      
      const items = portfolioList.querySelectorAll('.work-card'); // works.htmlのクラス名に合わせる
      let visibleCount = 0;

      items.forEach(item => {
          const itemCats = item.getAttribute('data-categories');
          if (category === 'All' || (itemCats && itemCats.includes(category))) {
              item.style.display = "flex";
              // アニメーション再発火のためにクラスを付け外し
              item.classList.remove('animate-in');
              void item.offsetWidth; // リフロー
              item.classList.add('animate-in');
              visibleCount++;
          } else {
              item.style.display = "none";
          }
      });

      if (noDataMessage) {
          noDataMessage.style.display = visibleCount === 0 ? "block" : "none";
      }
  }

  // 作品リストの生成
  function generateWorks() {
      if (!portfolioList) return;

      portfolioList.innerHTML = '';
      
      projectsData.forEach(project => {
          const card = document.createElement("div");
          card.className = "work-card cartridge"; // カセット風クラスを追加
          
          // カテゴリ処理
          const cats = project.category ? project.category.split('/').map(s => s.trim()) : [];
          card.setAttribute('data-categories', cats.join(','));

          // タグ処理
          const tagsHtml = project.tags ? project.tags.slice(0, 3).map(t => 
              `<span class="mini-tag"><i class="${t.icon}"></i> ${t.text}</span>`
          ).join('') : '';

          // カテゴリバッジ処理
          const catBadges = cats.map(c => `<span>${c}</span>`).join('');

          // 画像スタイルの適用 (ここを修正)
          const imgStyleAttr = project.imgStyle ? `style="${project.imgStyle}"` : "";

          card.innerHTML = `
              <div class="cartridge-header">
                  <div class="cartridge-label"></div>
                  <div class="cartridge-lines"></div>
              </div>
              <div class="card-thumb">
                  <img src="${project.banner}" alt="${project.title}" loading="lazy" ${imgStyleAttr}>
                  <div class="cat-badges">${catBadges}</div>
              </div>
              <div class="card-body">
                  <h3 class="work-title">${project.title}</h3>
                  <div class="work-tags">${tagsHtml}</div>
                  <p class="work-desc">${project.overview ? project.overview.substring(0, 40) + '...' : ''}</p>
                  <a href="detail.html?id=${project.id}" class="work-link">VIEW WORK</a>
              </div>
              <div class="cartridge-footer">
                  <div class="grip-lines"></div>
              </div>
          `;
          
          // アニメーション用クラス
          card.classList.add('animate-in');
          portfolioList.appendChild(card);
      });

      if (loadingIndicator) loadingIndicator.style.display = "none";
      portfolioList.style.display = "grid";
  }

  // 初期化実行
  generateWorks();
  initFilter();

  // トップへ戻るボタンの制御（要素が存在する場合のみ）
  if (backToTopBtn) {
      window.addEventListener("scroll", () => {
          if (window.scrollY > 300) {
              backToTopBtn.classList.add("visible");
              backToTopBtn.style.display = "flex";
          } else {
              backToTopBtn.classList.remove("visible");
              // アニメーション完了後に非表示にするなどの処理があればここで行う
          }
      });

      backToTopBtn.addEventListener("click", (e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
      });
  }
});