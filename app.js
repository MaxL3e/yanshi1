const jobs = [
  ["甲板水手", "在线中", "上海港-新加坡集装箱航线", "2026-05-08", "集装箱船", "甲板部", "18000-22000/月", "值班水手证", 36],
  ["船长", "在线中", "宁波港-鹿特丹远洋干散货项目", "2026-05-07", "散货船", "管理级", "85000-98000/月", "甲类船长证", 18],
  ["大副", "草稿", "青岛港-釜山近洋班轮项目", "2026-05-06", "集装箱船", "管理级", "52000-62000/月", "甲类大副证", 0],
  ["轮机长", "在线中", "舟山港-中东油化品航线", "2026-05-03", "油化船", "轮机部", "80000-92000/月", "甲类轮机长证", 21],
  ["三管轮", "在线中", "广州港-雅加达多用途船项目", "2026-05-01", "多用途船", "轮机部", "26000-32000/月", "三管轮适任证", 44],
  ["电子电气员", "在线中", "天津港-欧洲滚装船项目", "2026-04-29", "滚装船", "电气部", "42000-52000/月", "ETO证书", 12],
  ["厨师", "已下线", "厦门港-东南亚客滚船项目", "2026-04-25", "客滚船", "事务部", "16000-21000/月", "船舶厨师证", 29],
  ["水手长", "在线中", "上海港-澳大利亚散货航线", "2026-04-22", "散货船", "甲板部", "26000-34000/月", "高级值班水手证", 31],
  ["二副", "在线中", "大连港-日本冷藏船项目", "2026-04-20", "冷藏船", "驾驶部", "36000-46000/月", "甲类二副证", 16],
  ["机工", "在线中", "深圳港-马尼拉支线项目", "2026-04-18", "集装箱船", "轮机部", "17000-23000/月", "值班机工证", 52],
  ["船舶保安员", "已下线", "连云港-东非杂货船项目", "2026-04-10", "杂货船", "安全管理", "22000-28000/月", "SSO证书", 24],
  ["实习三副", "在线中", "青岛港-东南亚训练航线", "2026-04-05", "集装箱船", "驾驶部", "8000-12000/月", "三副白皮书", 47]
];

const statusClass = {
  "在线中": "online",
  "已下线": "offline",
  "草稿": "pending"
};

const resumes = [
  ["陈海明", "甲板水手", "上海港-新加坡集装箱航线", "值班水手证 / 四小证", "8年", "138****6721", "2026-05-13 09:24", "新投递"],
  ["李建航", "船长", "宁波港-鹿特丹远洋干散货项目", "甲类船长证", "18年", "139****8452", "2026-05-13 10:02", "已查看"],
  ["王志远", "轮机长", "舟山港-中东油化品航线", "甲类轮机长证", "16年", "136****2197", "2026-05-12 16:45", "已联系"],
  ["赵启帆", "三管轮", "广州港-雅加达多用途船项目", "三管轮适任证", "5年", "137****5530", "2026-05-12 14:18", "新投递"],
  ["孙明杰", "电子电气员", "天津港-欧洲滚装船项目", "ETO证书", "7年", "135****7814", "2026-05-12 11:37", "已查看"],
  ["周海涛", "水手长", "上海港-澳大利亚散货航线", "高级值班水手证", "11年", "152****9086", "2026-05-11 18:21", "已联系"],
  ["刘成", "机工", "深圳港-马尼拉支线项目", "值班机工证", "6年", "188****3149", "2026-05-11 13:09", "新投递"],
  ["郑一鸣", "二副", "大连港-日本冷藏船项目", "甲类二副证", "9年", "186****4207", "2026-05-10 15:56", "已查看"]
];

const resumeStatusClass = {
  "新投递": "online",
  "已查看": "pending",
  "已联系": "running"
};

const jobRows = document.querySelector("#jobRows");
const resumeRows = document.querySelector("#resumeRows");
const drawer = document.querySelector("#drawer");
const closeDrawer = document.querySelector("#closeDrawer");
const pageTitle = document.querySelector("#pageTitle");
const pageDescription = document.querySelector("#pageDescription");
const navButtons = document.querySelectorAll(".side-nav button[data-view]");
const viewPanels = document.querySelectorAll(".view-panel");

function renderRows() {
  jobRows.innerHTML = jobs.map((job, index) => {
    const [name, status, project, publish, vessel, department, salary, certificate, resumes] = job;
    return `
      <tr>
        <td><input type="checkbox"></td>
        <td>${index + 1}</td>
        <td>${name}</td>
        <td><span class="status ${statusClass[status]}">${status}</span></td>
        <td>${project}</td>
        <td>${publish}</td>
        <td><span class="type-pill">${vessel}</span></td>
        <td>${department}</td>
        <td>${salary}</td>
        <td>${certificate}</td>
        <td>${resumes}</td>
        <td>
          <div class="row-actions">
            <button data-index="${index}">详情</button>
            <button>编辑</button>
            <button>发布</button>
          </div>
        </td>
      </tr>
    `;
  }).join("");
}

function renderResumeRows() {
  resumeRows.innerHTML = resumes.map((resume, index) => {
    const [name, jobName, project, certificate, seaAge, phone, submittedAt, status] = resume;
    return `
      <tr>
        <td><input type="checkbox"></td>
        <td>${index + 1}</td>
        <td>${name}</td>
        <td>${jobName}</td>
        <td>${project}</td>
        <td>${certificate}</td>
        <td>${seaAge}</td>
        <td>${phone}</td>
        <td>${submittedAt}</td>
        <td><span class="status ${resumeStatusClass[status]}">${status}</span></td>
        <td>
          <div class="row-actions">
            <button>查看</button>
            <button>联系</button>
            <button>入库</button>
          </div>
        </td>
      </tr>
    `;
  }).join("");
}

const viewCopy = {
  jobs: ["招聘信息发布", "以航线为主线发布海员招聘信息，集中收集报名简历并同步到平台。"],
  resumes: ["招聘简历收集", "集中查看从各招聘岗位投递过来的海员信息，快速筛选并联系候选人。"],
  talent: ["海员人才库", "沉淀海员人才信息，支撑后续招聘检索和复用。"]
};

function setActiveView(view, updateHash = true) {
  const nextView = viewCopy[view] ? view : "jobs";
  navButtons.forEach((item) => item.classList.toggle("active", item.dataset.view === nextView));
  viewPanels.forEach((panel) => panel.classList.toggle("active", panel.id === `${nextView}View`));
  pageTitle.textContent = viewCopy[nextView][0];
  pageDescription.textContent = viewCopy[nextView][1];
  if (updateHash) {
    history.replaceState(null, "", `#${nextView}`);
  }
}

navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setActiveView(button.dataset.view);
  });
});

window.addEventListener("hashchange", () => {
  setActiveView(location.hash.replace("#", ""), false);
});

jobRows.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-index]");
  if (!button) return;
  const job = jobs[Number(button.dataset.index)];
  document.querySelector("#drawerTitle").textContent = job[0];
  document.querySelector("#drawerProject").textContent = job[2];
  document.querySelector("#drawerSalary").textContent = job[6];
  document.querySelector("#drawerDegree").textContent = job[7];
  drawer.classList.add("open");
  drawer.setAttribute("aria-hidden", "false");
});

closeDrawer.addEventListener("click", () => {
  drawer.classList.remove("open");
  drawer.setAttribute("aria-hidden", "true");
});

renderRows();
renderResumeRows();
setActiveView(location.hash.replace("#", ""), false);
