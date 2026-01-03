document.addEventListener("DOMContentLoaded", () => {
  // URLパラメータからIDを取得
  const urlParams = new URLSearchParams(window.location.search);
  const projectId = urlParams.get("id");

  if (!projectId || typeof projectsData === "undefined") {
    console.error("Project ID or Data not found.");
    return;
  }

  // データ検索
  const project = projectsData.find((p) => p.id === projectId);

  if (project) {
    // --- 基本情報の反映 ---
    // ヘッダー背景 (detailHeaderがある場合)
    const headerEl = document.getElementById("detailHeader");
    if (headerEl && project.banner) {
        // グラデーションと画像を重ねる
        headerEl.style.background = `linear-gradient(to top, rgba(0,0,0,0.8), transparent), url(${project.banner}) no-repeat center center/cover`;
    }

    const titleEl = document.getElementById("detailTitle");
    if (titleEl) titleEl.textContent = project.title;

    const dateEl = document.getElementById("detailDate");
    if (dateEl) dateEl.textContent = project.date;

    const catEl = document.getElementById("detailCategory");
    if (catEl) catEl.textContent = project.category;

    // タグ
    const tagContainer = document.getElementById("detailTags");
    if (tagContainer) {
      tagContainer.innerHTML = "";
      if (project.tags) {
        project.tags.forEach((tag) => {
          const span = document.createElement("div");
          span.className = "meta-tag";
          span.innerHTML = `<i class="${tag.icon}"></i> ${tag.text}`;
          tagContainer.appendChild(span);
        });
      }
    }

    // --- コンテンツの反映 (innerHTMLで改行タグなどを許可) ---
    const setHtml = (id, content) => {
      const el = document.getElementById(id);
      if (el) el.innerHTML = content || "";
    };

    setHtml("detailOverview", project.overview);
    setHtml("detailFeatures", project.features);
    setHtml("detailTechnology", project.technology);
    setHtml("detailChallenges", project.challenges);
    setHtml("detailLearned", project.learned);

    // --- サイドバー情報 ---
    // リンク
    const linkContainer = document.getElementById("projectLinks");
    if (linkContainer) {
      linkContainer.innerHTML = "";
      if (project.links) {
        project.links.forEach((link) => {
          const a = document.createElement("a");
          a.className = "play-btn";
          a.href = link.url;
          a.target = "_blank"; // 別タブで開く
          a.innerHTML = `<i class="${link.icon}"></i> ${link.label}`;
          linkContainer.appendChild(a);
        });
      }
    }

    // 使用技術リスト
    const techList = document.getElementById("usageTechList");
    if (techList) {
      techList.innerHTML = "";
      if (project.usageTech) {
        project.usageTech.forEach((tech) => {
          const li = document.createElement("li");
          li.textContent = tech;
          techList.appendChild(li);
        });
      }
    }

    // 関連作品
    const relatedList = document.getElementById("relatedWorks");
    if (relatedList) {
      relatedList.innerHTML = "";
      if (project.relatedWorks) {
        // ID文字列の配列からオブジェクトを探す
        project.relatedWorks.forEach((relId) => {
          const relProject = projectsData.find((p) => p.id === relId);
          if (relProject) {
            const li = document.createElement("li");
            li.style.marginBottom = "0.5rem";
            
            const a = document.createElement("a");
            a.href = `detail.html?id=${relProject.id}`;
            a.textContent = `▶ ${relProject.title}`;
            a.style.fontWeight = "bold";
            a.style.textDecoration = "underline";
            
            li.appendChild(a);
            relatedList.appendChild(li);
          }
        });
      }
    }

    // --- ギャラリー生成 & モーダル機能 ---
    const galleryDiv = document.getElementById("detailGallery");
    const modal = document.getElementById("imageModal");
    const modalImg = modal ? modal.querySelector("img") : null;
    const prevBtn = modal ? modal.querySelector(".modal-prev") : null;
    const nextBtn = modal ? modal.querySelector(".modal-next") : null;
    const closeBtn = modal ? modal.querySelector(".modal-close") : null;

    let modalIframe = null; // 動画用iframe保持
    let currentGalleryIndex = 0;
    // ギャラリーアイテムのリスト（生成後に格納）
    let galleryItemsData = [];

    if (galleryDiv && project.gallery) {
      galleryDiv.innerHTML = "";
      galleryItemsData = project.gallery; // データ配列を保持

      project.gallery.forEach((item, index) => {
        const div = document.createElement("div");
        div.className = "gallery-item";
        
        // 動画(YouTube)の場合
        if (item.type === "youtube") {
          div.classList.add("video");
          const img = document.createElement("img");
          img.src = `https://img.youtube.com/vi/${item.id}/hqdefault.jpg`;
          div.appendChild(img);
        } else {
          // 画像の場合
          const img = document.createElement("img");
          // オブジェクト形式 {src: "...", imgStyle: "..."} か 文字列 "..." かに対応
          const src = typeof item === "object" ? item.src : item;
          img.src = src;
          // サムネのスタイル調整があれば適用
          if (typeof item === "object" && item.imgStyle) {
             img.style.cssText = item.imgStyle;
          }
          div.appendChild(img);
        }

        // クリックイベント
        div.addEventListener("click", () => {
          openModal(index);
        });

        galleryDiv.appendChild(div);
      });
    }

    // モーダルを開く関数
    function openModal(index) {
      if (!modal) return;
      currentGalleryIndex = index;
      const item = galleryItemsData[currentGalleryIndex];

      // 既存のiframeがあれば削除
      if (modalIframe) {
        modalIframe.remove();
        modalIframe = null;
      }

      if (item.type === "youtube") {
        // 動画モード
        if (modalImg) modalImg.style.display = "none";
        
        modalIframe = document.createElement("iframe");
        modalIframe.src = `https://www.youtube.com/embed/${item.id}?autoplay=1&rel=0`;
        modalIframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
        modalIframe.allowFullscreen = true;
        // スタイル適用（CSSクラスに合わせるか直接指定）
        modalIframe.style.maxWidth = "90%";
        modalIframe.style.maxHeight = "80vh";
        modalIframe.style.border = "5px solid white";
        modalIframe.style.borderRadius = "10px";
        
        // modal内のimgの隣などに挿入したいが、簡単のためmodalにappendして位置調整
        // ただし矢印などはabsoluteなので重なりに注意
        modal.appendChild(modalIframe);

      } else {
        // 画像モード
        if (modalImg) {
          const src = typeof item === "object" ? item.src : item;
          modalImg.src = src;
          modalImg.style.display = "block";
        }
      }

      modal.classList.add("active");
    }

    // モーダルを閉じる関数
    function closeModal() {
      if (!modal) return;
      modal.classList.remove("active");
      // iframe削除（再生停止）
      if (modalIframe) {
        modalIframe.remove();
        modalIframe = null;
      }
      // 画像クリア
      if (modalImg) {
        modalImg.src = "";
      }
    }

    // 前後移動
    function showNext(direction) {
        if(galleryItemsData.length === 0) return;
        let nextIndex = currentGalleryIndex + direction;
        if(nextIndex < 0) nextIndex = galleryItemsData.length - 1;
        if(nextIndex >= galleryItemsData.length) nextIndex = 0;
        openModal(nextIndex);
    }

    // イベントリスナー設定（要素が存在する場合のみ）
    if (prevBtn) {
        prevBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            showNext(-1);
        });
    }
    if (nextBtn) {
        nextBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            showNext(1);
        });
    }
    if (closeBtn) {
        closeBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            closeModal();
        });
    }
    if (modal) {
        modal.addEventListener("click", (e) => {
            // 背景クリックで閉じる (imgやiframe, btn以外)
            if (e.target === modal) {
                closeModal();
            }
        });
    }

    // キーボード操作
    document.addEventListener("keydown", (e) => {
        if (!modal || !modal.classList.contains("active")) return;
        if (e.key === "Escape") closeModal();
        if (e.key === "ArrowLeft") showNext(-1);
        if (e.key === "ArrowRight") showNext(1);
    });

  } else {
    // プロジェクトが見つからない場合
    const container = document.querySelector(".container");
    if (container) {
      container.innerHTML = "<p style='text-align:center; padding:3rem;'>Project Not Found.</p>";
    }
  }
});