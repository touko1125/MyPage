// detail.js
  
  document.addEventListener("DOMContentLoaded", () => {
      const detailHeader = document.getElementById("detailHeader");
      if (detailHeader) {
        // URLパラメータから? id=xxx を取得
        const urlParams = new URLSearchParams(window.location.search);
        const projectId = urlParams.get("id");
  
        console.log(projectId);
    
        // projectsDataから該当IDのオブジェクトを探す
        const project = projectsData.find(p => p.id === projectId);
    
        if (project) {
          // タイトルやバナーなどの反映
          detailHeader.style.backgroundImage = `url(${project.banner})`;
          detailHeader.style.backgroundSize = "cover";
          detailHeader.style.backgroundPosition = "center";
    
          document.getElementById("detailTitle").textContent = project.title;
          document.getElementById("detailDate").textContent = `完成日: ${project.date}`;
          document.getElementById("detailCategory").textContent = `カテゴリ: ${project.category}`;
    
          // タグ (icon + text)
          const tagContainer = document.getElementById("detailTags");
          project.tags.forEach(tag => {
            const span = document.createElement("span");
            span.className = "tag";
            span.innerHTML = `<i class="${tag.icon}"></i> ${tag.text}`;
            tagContainer.appendChild(span);
          });
    
          // 概要や技術情報などを innerHTML で差し込み
          document.getElementById("detailOverview").innerHTML = project.overview;
          document.getElementById("detailTechnology").innerHTML = project.technology;
          document.getElementById("detailFeatures").innerHTML = project.features;
          document.getElementById("detailChallenges").innerHTML = project.challenges;
          document.getElementById("detailLearned").innerHTML = project.learned;
    
          // 使用技術（usageTech）リストをサイドバー等に反映する例
          const usageTechList = document.getElementById("usageTechList");
          if (usageTechList && project.usageTech) {
            project.usageTech.forEach(tech => {
              const li = document.createElement("li");
              li.textContent = tech;
              usageTechList.appendChild(li);
            });
          }
    
          // ギャラリー
          const galleryDiv = document.getElementById("detailGallery");
          if (galleryDiv && project.gallery) {
            project.gallery.forEach(item => {
              const galleryItem = document.createElement("div");
              galleryItem.className = "gallery-item";
              if (item.type === "youtube") {            // ★ YouTube はサムネイルを置く
                galleryItem.dataset.type = "youtube";
                galleryItem.dataset.id   = item.id;
                galleryItem.classList.add("video");
                const img = document.createElement("img");
                img.src = `https://img.youtube.com/vi/${item.id}/hqdefault.jpg`;
                galleryItem.appendChild(img);
              } else {                                  // ★ 通常画像
                const img = document.createElement("img");
                img.src = (typeof item === "object") ? item.src : item;
                if (item.imgStyle) img.style.cssText = item.imgStyle;
                galleryItem.appendChild(img);
              }
  
              galleryDiv.appendChild(galleryItem);
            });
          }
  
          // --------------- ギャラリー拡大表示 ---------------
          const modal      = document.getElementById("imageModal");
          if (modal) {
            const modalImg = modal.querySelector("img");
            let   modalIframe = null; // ★ 動画用
            const prevBtn  = modal.querySelector(".modal-prev");
            const nextBtn  = modal.querySelector(".modal-next");
  
            // ギャラリー画像ノードリストを取得し配列化
            const galleryItems = Array.from(document.querySelectorAll("#detailGallery .gallery-item"));
            let current = 0;
  
            // モーダルを開く関数
            function openModal(index){
              current = index;
              // ★ データ属性から画像か動画かを判定
              const item = galleryItems[current];
              const type = item.dataset.type;
              
              if(type === "youtube"){
                // 画像を隠し、iframe を生成
                modalImg.style.display = "none";
                if(modalIframe) modalIframe.remove();      // 既存があれば削除
                modalIframe = document.createElement("iframe");
                modalIframe.src = `https://www.youtube.com/embed/${item.dataset.id}?autoplay=1&rel=0`;
                modalIframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
                modalIframe.allowFullscreen = true;
                modalIframe.style.maxWidth  = "80vw";
                modalIframe.style.maxHeight = "85vh";
                modalIframe.style.border    = "5px solid white";
                modalIframe.style.borderRadius = "20px";
                modalIframe.style.boxShadow = "0 0 0 3px var(--primary-color)";
                modal.appendChild(modalIframe);
              }else{
                if(modalIframe){ modalIframe.remove(); modalIframe = null; }
                modalImg.src = item.querySelector("img").src;
                modalImg.style.display = "block";
              }
            
              /* 1) まず表示だけ先に行う */
              modal.style.display = "flex";
            
              /* 2) 次フレームで .active を付与（＝アニメ開始）*/
              requestAnimationFrame(() => modal.classList.add("active"));
            }
            // モーダルを閉じる
            function closeModal(){ 
              modal.classList.remove("active"); 
              if(modalIframe){                    // ★ 再生停止用に iframe を破棄
                modalIframe.remove(); modalIframe = null;
              }
              // アニメーションが終わったら display:none に戻す
              setTimeout(() => (modal.style.display = "none"), 350);
            }
  
            // 画像クリックでオープン
            galleryItems.forEach((it, idx) => {
              it.addEventListener("click", e => {
                e.stopPropagation();
                openModal(idx);
              });
            });
  
            // 左右へ移動
            function show(offset){
              current = (current + offset + galleryItems.length) % galleryItems.length;
              openModal(current);
            }
            prevBtn.addEventListener("click", e => { e.stopPropagation(); show(-1); });
            nextBtn.addEventListener("click", e => { e.stopPropagation(); show(+1); });
  
            // 背景クリック or Esc で閉じる
            modal.addEventListener("click", closeModal);
            window.addEventListener("keydown", e => {
              if(!modal.classList.contains("active")) return;
              if(e.key === "Escape") closeModal();
              if(e.key === "ArrowLeft")  show(-1);
              if(e.key === "ArrowRight") show(+1);
            });
          }
    
          // リンク (links)
          const linkSection = document.getElementById("projectLinks");
          if (linkSection && project.links) {
            project.links.forEach(link => {
              const a = document.createElement("a");
              a.className = "project-link";
              a.href = link.url;
              a.innerHTML = `<i class="${link.icon}"></i> ${link.label}`;
              linkSection.appendChild(a);
            });
          }
    
          // 関連作品（relatedWorks）
          const relatedList = document.getElementById("relatedWorks");
          if (relatedList && project.relatedWorks) {
            project.relatedWorks.forEach(rel => {
              const li = document.createElement("li");
              li.className = "related-item";
    
              // サムネ画像
              const img = document.createElement("img");
              img.src = rel.thumb;
              img.alt = rel.title;
              img.className = "related-thumb";
    
              // タイトル + desc
              const infoDiv = document.createElement("div");
              infoDiv.className = "related-info";
    
              const h4 = document.createElement("h4");
              h4.textContent = rel.title;
              const p = document.createElement("p");
              p.textContent = rel.desc;
    
              infoDiv.appendChild(h4);
              infoDiv.appendChild(p);
    
              // detail.html?id=XXX へ飛ばしたい場合
              li.addEventListener("click", () => {
                window.location.href = `detail.html?id=${rel.id}`;
              });
    
              li.appendChild(img);
              li.appendChild(infoDiv);
              relatedList.appendChild(li);
            });
          }
    
        } else {
          // 該当プロジェクトがなければメッセージなど
          detailHeader.innerHTML = "<p>該当する作品データが見つかりません。</p>";
        }
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