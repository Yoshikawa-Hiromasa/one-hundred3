const menuButton = document.querySelector(".header__menu-button");
const headerRight = document.querySelector(".header__right");
const menuLinks = document.querySelectorAll(".header__menu a, .header__btn");

// スマホ表示でナビゲーションを開閉する処理です。
if (menuButton && headerRight) {
  menuButton.addEventListener("click", () => {
    const isOpen = headerRight.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      headerRight.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}

const recruitmentJobs = document.querySelectorAll(".recruitment-job");
const jobPanel = document.querySelector(".recruitment-job-panel");
const jobPanelLabel = document.querySelector(".recruitment-job-panel__label");
const jobPanelTitle = document.querySelector(".recruitment-job-panel__title");
const jobPanelText = document.querySelector(".recruitment-job-panel__text");

// 募集職種をクリックしたとき、PCでは下の詳細パネルだけを切り替えます。
recruitmentJobs.forEach((job) => {
  const button = job.querySelector(".recruitment-job__head");
  const icon = job.querySelector(".recruitment-job__icon");
  const title = job.querySelector(".recruitment-job__title");
  const detail = job.querySelector(".recruitment-job__detail p");

  if (!button || !icon || !title || !detail || !jobPanel || !jobPanelLabel || !jobPanelTitle || !jobPanelText) return;

  button.setAttribute("aria-expanded", "false");

  button.addEventListener("click", () => {
    const isOpen = job.classList.contains("is-open");
    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    recruitmentJobs.forEach((item) => {
      const itemButton = item.querySelector(".recruitment-job__head");
      const itemIcon = item.querySelector(".recruitment-job__icon");

      item.classList.remove("is-open");
      if (itemButton) itemButton.setAttribute("aria-expanded", "false");
      if (itemIcon) itemIcon.textContent = "＋";
    });

    if (isMobile && isOpen) {
      jobPanelLabel.textContent = "職種を選択すると詳細が表示されます";
      jobPanelTitle.textContent = "募集職種の詳細";
      jobPanelText.textContent = "気になる職種をクリックして、仕事内容をご確認ください。";
      return;
    }

    job.classList.add("is-open");
    button.setAttribute("aria-expanded", "true");
    icon.textContent = "－";
    jobPanelLabel.textContent = "選択中の職種";
    jobPanelTitle.textContent = title.textContent;
    jobPanelText.textContent = detail.textContent.trim();
  });
});
