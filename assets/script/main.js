// main.js

function closeOthers(openedCard) {
  document.querySelectorAll(".experience-card.active").forEach(c => {
      if (c !== openedCard) {
      c.classList.remove("active");
      }
  });
}

// 現在表示中のプロジェクトインデックス
let currentProjectIndex = 0;

// フィーチャードプロジェクトを更新する関数
function updateFeaturedProject() {
  const project = projectsData[currentProjectIndex];

  // 要素を更新
  document.getElementById('featuredImage').src = project.banner;
  document.getElementById('featuredImage').alt = `${project.title}のイメージ`;
  if (project.imgStyle) {
    document.getElementById('featuredImage').style.cssText = project.imgStyle;
  }
  document.querySelector('.featured-project-title').textContent = project.title;
  document.getElementById('featuredDesc').textContent = project.desc;
  document.getElementById('detailLink').href = `detail.html?id=${project.id}`;

  // タグを更新
  const tagsContainer = document.getElementById('featuredTags');
  tagsContainer.innerHTML = '';

  project.tags.forEach(tag => {
    const tagSpan = document.createElement('span');
    tagSpan.className = 'featured-tag';
    tagSpan.innerHTML = `<i class="${tag.icon}"></i> ${tag.text}`;
    tagsContainer.appendChild(tagSpan);
  });
}

// 既存の updateFeaturedProject をラップしてアニメーション付きに
function animateFeaturedProject() {
  const container = document.querySelector('.featured-project');
  // まずフェードアウト
  container.classList.add('fade-out');
  
  // トランジション完了後（0.5s）に内容更新してフェードイン
  setTimeout(() => {
    updateFeaturedProject();
    // fade-out を外して fade-in を付与
    container.classList.remove('fade-out');
    container.classList.add('fade-in');

    // 再びクラスをリセット（必要なら）
    setTimeout(() => {
      container.classList.remove('fade-in');
    }, 500);
  }, 500);
}


// 既存のコードの先頭あたりに関数を追加
function generateSkills() {
  const container = document.querySelector("#skills .skills-container");
  skillData.forEach(cat => {
    // カテゴリ枠
    const catDiv = document.createElement("div");
    catDiv.className = "skill-category";

    // 見出し
    const h3 = document.createElement("h3");
    h3.textContent = cat.category;
    catDiv.appendChild(h3);

    // スキル一覧
    const ul = document.createElement("ul");
    ul.className = "skill-list";

    cat.skills.forEach(skill => {
      const li = document.createElement("li");
      li.className = "skill-item";

      // ヘッダー部分
      const header = document.createElement("div");
      header.className = "skill-header";
      const nameSpan = document.createElement("span");
      nameSpan.className = "skill-name";
      nameSpan.textContent = skill.name;
      const bar = document.createElement("div");
      bar.className = "skill-bar";
      const level = document.createElement("div");
      level.className = "skill-level";
      level.style.width = skill.level + "%";

      bar.appendChild(level);
      header.appendChild(nameSpan);
      header.appendChild(bar);
      li.appendChild(header);

      // 詳細部分
      const detail = document.createElement("div");
      detail.className = "skill-detail";
      detail.textContent = skill.detail;
      li.appendChild(detail);

      ul.appendChild(li);
    });

    catDiv.appendChild(ul);
    container.appendChild(catDiv);
  });
}

document.addEventListener("DOMContentLoaded", () => {
    // スキルの自動生成
    generateSkills();
    const featuredProject = document.getElementById('featured-work');
    if (featuredProject) {
      updateFeaturedProject();
      
      document.getElementById('prevProject').addEventListener('click', () => {
        currentProjectIndex = (currentProjectIndex - 1 + projectsData.length) % projectsData.length;
        updateFeaturedProject();
      });
          
      document.getElementById('nextProject').addEventListener('click', () => {
        currentProjectIndex = (currentProjectIndex + 1) % projectsData.length;
        updateFeaturedProject();
      });
      
      // 5秒ごとにランダム切り替えもアニメーション付きに
      setInterval(() => {
        currentProjectIndex = Math.floor(Math.random() * projectsData.length);
        animateFeaturedProject();
      }, 5000);
    }

    // =============== 1) 作品集の自動生成 ===============
    const portfolioList = document.getElementById("portfolioList");
    if (portfolioList) {
        // projectsData をループしてHTML要素を生成
        projectsData.forEach(project => {
        // 親要素
        const itemDiv = document.createElement("div");
        itemDiv.className = "portfolio-item";

        // 画像部分
        const imageDiv = document.createElement("div");
        imageDiv.className = "portfolio-image";
        const img = document.createElement("img");
        img.src = project.banner;
        img.alt = `${project.title}のサムネイル`;
        if (project.imgStyle) {
            img.style.cssText = project.imgStyle;
        }
        imageDiv.appendChild(img);

        // 情報部分
        const infoDiv = document.createElement("div");
        infoDiv.className = "portfolio-info";

        // タグを表示するためのコンテナを追加
        if (project.tags && project.tags.length > 0) {
          const tagsContainer = document.createElement("div");
          tagsContainer.className = "portfolio-tags";
          
          // タグを最大3つまで表示
          const tagsToShow = project.tags.slice(0, 3);
          
          tagsToShow.forEach(tag => {
              const tagSpan = document.createElement("span");
              tagSpan.className = "tag";
              tagSpan.innerHTML = `<i class="${tag.icon}"></i> ${tag.text}`;
              tagsContainer.appendChild(tagSpan);
          });
          
          infoDiv.appendChild(tagsContainer);
        }

        const titleEl = document.createElement("h3");
        titleEl.className = "portfolio-title";
        titleEl.textContent = project.title;

        const descP = document.createElement("p");
        descP.className = "portfolio-desc";
        descP.textContent = project.desc;

        // リンク
        const linkA = document.createElement("a");
        linkA.className = "portfolio-link";
        linkA.href = `./detail.html?id=${project.id}`;  // detail.html?id=xxx でもOK
        linkA.textContent = "詳細を見る →";

        // 要素をまとめて構築
        infoDiv.appendChild(titleEl);
        infoDiv.appendChild(descP);
        infoDiv.appendChild(linkA);

        itemDiv.appendChild(imageDiv);
        itemDiv.appendChild(infoDiv);

        // 親のportfolioListに追加
        portfolioList.appendChild(itemDiv);
        });
    }

    // =============== 2) 経験・エピソードの自動生成 ===============
    // HTML側に <div class="experiences" id="experienceList"> を用意するとよりわかりやすい
    // 今回は <div class="experiences"> しかないので querySelector を使う例
    const experienceContainer = document.querySelector(".experiences");
    if (experienceContainer) {
        experienceData.forEach(exp => {
        // 1つの経験カードを生成
        const cardDiv = document.createElement("div");
        cardDiv.className = "experience-card";

        // カード内のheader部分
        const headerDiv = document.createElement("div");
        headerDiv.className = "card-header";
        const h3El = document.createElement("h3");
        h3El.className = "card-title";
        h3El.textContent = exp.yearTitle; // 例）"2018年：初めてのゲーム制作"
        headerDiv.appendChild(h3El);

        // カード本文
        const bodyDiv = document.createElement("div");
        bodyDiv.className = "card-body";

        // 複数行のテキスト
        exp.textList.forEach(textItem => {
            const pEl = document.createElement("p");
            pEl.className = "card-text";
            // HTMLを含む場合は innerHTML
            pEl.innerHTML = textItem; 
            bodyDiv.appendChild(pEl);
        });

        // タグの生成
        const tagsDiv = document.createElement("div");
        tagsDiv.className = "card-tags";

        exp.tags.forEach(tag => {
            const spanTag = document.createElement("span");
            spanTag.className = "tag";
            spanTag.textContent = tag;
            tagsDiv.appendChild(spanTag);
        });

        bodyDiv.appendChild(tagsDiv);

        // クリックイベント（アコーディオン）
        headerDiv.addEventListener("click", () => {
            cardDiv.classList.toggle("active");
            closeOthers(cardDiv);
        });

        // まとめてcardDivに入れる
        cardDiv.appendChild(headerDiv);
        cardDiv.appendChild(bodyDiv);

        // 全体の経験セクションに追加
        experienceContainer.appendChild(cardDiv);
        });
    }

     // トグル機能
    document.querySelectorAll('.info-group h3').forEach(function(header) {
        header.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    });

    // スムーズスクロール
    document.querySelectorAll('nav a').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            window.scrollTo({
                top: targetElement.offsetTop - 60,
                behavior: 'smooth'
            });
        });
    });

    const backToTopBtn = document.querySelector(".back-to-top");
  
    // スクロールイベントでボタンの表示／非表示を切り替える
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) { // 300px以上スクロールしたら表示
        backToTopBtn.style.display = "flex";
      } else {
        backToTopBtn.style.display = "none";
      }
    });

    // クリック時にスムーズスクロールでページ先頭へ戻る
    backToTopBtn.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
});