// main.js

// 経験カードのアコーディオン制御
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
  const featuredContainer = document.getElementById('featuredProject');
  if (!featuredContainer || typeof projectsData === 'undefined') return;

  const project = projectsData[currentProjectIndex];
  if (!project) return;

  const imgEl = document.getElementById('featuredImage');
  if (imgEl) {
    imgEl.src = project.banner;
    imgEl.alt = `${project.title}のイメージ`;
    imgEl.style.cssText = project.imgStyle || "";
  }

  const titleEl = document.getElementById('featuredTitle');
  if (titleEl) titleEl.textContent = project.title;

  const descEl = document.getElementById('featuredDesc');
  if (descEl) descEl.innerHTML = project.overview.substring(0, 80) + "...";

  const linkEl = document.getElementById('detailLink');
  if (linkEl) linkEl.href = `detail.html?id=${project.id}`;

  const tagsContainer = document.getElementById('featuredTags');
  if (tagsContainer) {
    tagsContainer.innerHTML = '';
    const tagsToShow = project.tags ? project.tags.slice(0, 3) : [];
    tagsToShow.forEach(tag => {
      const tagSpan = document.createElement('span');
      tagSpan.className = 'tag';
      tagSpan.innerHTML = `<i class="${tag.icon}"></i> ${tag.text}`;
      tagsContainer.appendChild(tagSpan);
    });
  }
}

function animateFeaturedProject() {
  const container = document.getElementById('featuredProject');
  if (!container) return;
  container.classList.add('fade-out');
  setTimeout(() => {
    updateFeaturedProject();
    container.classList.remove('fade-out');
    container.classList.add('fade-in');
    setTimeout(() => { container.classList.remove('fade-in'); }, 500);
  }, 500);
}

// スキル生成
function generateSkills() {
  const container = document.querySelector("#skills .skills-container");
  if (!container || typeof skillData === 'undefined') return;
  
  container.innerHTML = '';

  skillData.forEach(cat => {
    const card = document.createElement("div");
    card.className = "skill-card";
    const h3 = document.createElement("h3");
    h3.innerHTML = `<i class="fas fa-code"></i> ${cat.category}`;
    card.appendChild(h3);

    cat.skills.forEach(skill => {
      const item = document.createElement("div");
      item.className = "skill-item";
      const label = document.createElement("div");
      label.className = "skill-label";
      label.innerHTML = `<span>${skill.name}</span> <span style="color:var(--primary)">${skill.level}%</span>`;
      
      const barBg = document.createElement("div");
      barBg.className = "progress-bg";
      const bar = document.createElement("div");
      bar.className = "progress-bar";
      setTimeout(() => { bar.style.width = `${skill.level}%`; }, 200);

      barBg.appendChild(bar);
      item.appendChild(label);
      item.appendChild(barBg);
      card.appendChild(item);
    });
    container.appendChild(card);
  });
}

// インターンシップセクション生成（アコーディオン形式）
function generateInternships() {
  const container = document.getElementById("internshipList");
  if (!container || typeof internshipData === 'undefined') return;

  container.innerHTML = '';

  internshipData.forEach(intern => {
    const card = document.createElement("div");
    card.className = "intern-card";

    // Header (常に表示)
    const header = document.createElement("div");
    header.className = "intern-header";
    header.style.cursor = "pointer";
    header.innerHTML = `
      <div class="intern-icon"><i class="${intern.icon || 'fas fa-briefcase'}"></i></div>
      <div class="intern-meta" style="flex:1;">
        <h3 class="intern-company">${intern.company}</h3>
        <p class="intern-period">${intern.period}</p>
      </div>
      <div class="accordion-icon"><i class="fas fa-chevron-down"></i></div>
    `;

    // Body (初期状態は非表示)
    const body = document.createElement("div");
    body.className = "intern-body";
    body.style.maxHeight = "0";
    body.style.overflow = "hidden";
    body.style.transition = "max-height 0.4s ease, opacity 0.4s ease";
    body.style.opacity = "0";

    body.innerHTML = `
      <div style="padding-top: 1rem;">
        <p class="intern-role"><strong><i class="fas fa-user-tag"></i> ${intern.role}</strong></p>
        <p class="intern-desc">${intern.description}</p>
        <div class="intern-contribution">
          ${intern.contribution}
        </div>
      </div>
    `;

    // クリックイベント
    header.addEventListener('click', () => {
        const icon = header.querySelector('.accordion-icon i');
        if (body.style.maxHeight === '0px' || !body.style.maxHeight) {
            // 開く
            body.style.maxHeight = body.scrollHeight + "px";
            body.style.opacity = "1";
            icon.classList.remove('fa-chevron-down');
            icon.classList.add('fa-chevron-up');
        } else {
            // 閉じる
            body.style.maxHeight = "0px";
            body.style.opacity = "0";
            icon.classList.remove('fa-chevron-up');
            icon.classList.add('fa-chevron-down');
        }
    });

    card.appendChild(header);
    card.appendChild(body);
    container.appendChild(card);
  });
}

// 経験（History）生成（アコーディオン形式）
function generateExperiences() {
  const container = document.getElementById("experienceList");
  if (!container || typeof experienceData === 'undefined') return;

  container.innerHTML = '';

  experienceData.forEach(exp => {
    const item = document.createElement("div");
    item.className = "history-item";
    
    // Header (Title area)
    const header = document.createElement("div");
    header.className = "history-header";
    header.style.cursor = "pointer";
    header.style.display = "flex";
    header.style.justifyContent = "space-between";
    header.style.alignItems = "center";
    
    const yearBadge = `<span class="year-badge">${exp.yearTitle}</span>`;
    const titleHtml = `<h3 class="history-title" style="margin:0;">${yearBadge} ${exp.title || ''}</h3>`;
    
    header.innerHTML = `
        <div style="display:flex; align-items:center;">${titleHtml}</div>
        <div class="accordion-icon"><i class="fas fa-chevron-down"></i></div>
    `;

    // Body (Content area)
    const body = document.createElement("div");
    body.className = "history-content";
    body.style.maxHeight = "0";
    body.style.overflow = "hidden";
    body.style.transition = "max-height 0.4s ease, opacity 0.4s ease";
    body.style.opacity = "0";
    
    let descHtml = '';
    exp.textList.forEach(text => { descHtml += `<p>${text}</p>`; });
    let tagsHtml = '<div class="history-tags">';
    if (exp.tags) {
      exp.tags.forEach(tag => { tagsHtml += `<span class="mini-tag">#${tag}</span>`; });
    }
    tagsHtml += '</div>';

    body.innerHTML = `
      <div style="padding-top: 1rem;">
        ${descHtml}
        ${tagsHtml}
      </div>
    `;

    // Click Event
    header.addEventListener("click", () => {
        const icon = header.querySelector(".accordion-icon i");
        if (body.style.maxHeight === "0px" || !body.style.maxHeight) {
             body.style.maxHeight = body.scrollHeight + "px";
             body.style.opacity = "1";
             icon.classList.remove("fa-chevron-down");
             icon.classList.add("fa-chevron-up");
        } else {
             body.style.maxHeight = "0px";
             body.style.opacity = "0";
             icon.classList.remove("fa-chevron-up");
             icon.classList.add("fa-chevron-down");
        }
    });

    item.appendChild(header);
    item.appendChild(body);
    container.appendChild(item);
  });
}

document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById('featuredProject') && typeof projectsData !== 'undefined') {
      updateFeaturedProject();
      const prevBtn = document.getElementById('prevProject');
      const nextBtn = document.getElementById('nextProject');
      if (prevBtn) prevBtn.addEventListener('click', () => {
        currentProjectIndex = (currentProjectIndex - 1 + projectsData.length) % projectsData.length;
        animateFeaturedProject();
      });
      if (nextBtn) nextBtn.addEventListener('click', () => {
        currentProjectIndex = (currentProjectIndex + 1) % projectsData.length;
        animateFeaturedProject();
      });
      setInterval(() => {
        currentProjectIndex = (currentProjectIndex + 1) % projectsData.length;
        animateFeaturedProject();
      }, 6000);
    }

    generateSkills();
    generateInternships();
    generateExperiences();
});