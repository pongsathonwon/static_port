//responsive navbar logi
const menuBtn = document.getElementById("mobile-toggle");
const sidebar = document.getElementById("sidebar");
const toggle = () => {
  sidebar.classList.toggle("translate-x-[100%]");
  menuBtn.classList.toggle("close");
};

menuBtn.addEventListener("click", () => {
  toggle();
});

sidebar.addEventListener("blur", () => toggle());
// render project

window.addEventListener("load", () => {
  const projectData = [
    {
      title: "golden",
      content:
        "This is web application to serve backoffice management running on <em>Angular</em>. purpose. My client, a family gold bussiness, has a pain point from previous software.",
      tags: [{ name: "angular", color: "chip-red" }],
    },
    {
      title: "demon sandbox project",
      content:
        "This is my final sandbox project from skoodio web development bootcamp. Focus on web and web application.",
      tags: [{ name: "react", color: "chip-blue" }],
    },
    {
      title: "Demo easy e-commerce",
      content:
        "This is my demo project on landing page and backoffice management. Tech stack are <em>react</em> as UI framework and <em>firebase</em> as a backend.",
      tags: [
        { name: "react", color: "chip-blue" },
        { name: "firebase", color: "chip-yellow" },
      ],
    },
  ];
  const createChip = (tags) => {
    let result = "";
    tags.forEach(
      ({ name, color }) =>
        (result += `<div class="chip ${color}">${name}</div>`)
    );
    return result;
  };
  const createProject = ({ title, content, tags }) => {
    return `        <div class="project">
              <div class="img-slider">
                <img src="../asset/placeholder.jpg" />
              </div>
              <div class="flex flex-col gap-large md:w-2/3">
                <div class="h-full border-bot hover:border-none">
                  <a
                    class="rounded-md p-4 border-none h-full content-ctrl hover:bg-primary-2/40"
                    href="./notfoun.html"
                  >
                    <!--top section-->
                    <div class="flex justify-between items-center">
                      <h4>${title}</h4>
                      <div>
                        <span>MORE</span>
                        <i
                          class="fa-solid fa-chevron-right text-sm animate-next"
                        ></i>
                      </div>
                    </div>
                    <p class="line-clamp-3 md:line-clamp-none">
                    ${content} Click to
                      see more.
                    </p>
    
                    <div
                      class="flex flex-row justify-end items-center gap-2 mt-auto"
                    >
                    ${createChip(tags)}
                    </div>
                  </a>
                </div>
              </div>
            </div>`;
  };
  try {
    const contentSectionEle = document.getElementById("skill");
    if (!contentSectionEle) return;
    projectData.forEach(
      (p) => (contentSectionEle.innerHTML += createProject(p))
    );
  } catch (err) {
    if (!(err instanceof Error)) {
      console.info(err);
    }
    console.error(err);
  }
});
//dark/light theme
const saveTheme = () => localStorage.setItem("theme", "dark");
const clearTheme = () => localStorage.removeItem("theme");
const getLocalTheme = () => localStorage.getItem("theme") === "dark";
const toggleThemeBtn = () =>
  document
    .getElementById("theme-indicator")
    .classList.toggle("-translate-x-1/2");

window.addEventListener("load", () => {
  const bodyEleClass = document.getElementById("portfolio").classList;

  let isLocalDarkTheme = getLocalTheme();
  if (isLocalDarkTheme) {
    bodyEleClass.add("dark");
    toggleThemeBtn();
    return;
  }
  const isSystemDarkTheme = this.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  const isBodyDarkTheme = bodyEleClass.value.includes("dark");
  if (isSystemDarkTheme && isBodyDarkTheme) {
    saveTheme();
    toggleThemeBtn();
    return;
  }
  if (isSystemDarkTheme && !isBodyDarkTheme) {
    bodyEleClass.add("dark");
    saveTheme();
    toggleThemeBtn();
    return;
  }
  if (!isSystemDarkTheme && isBodyDarkTheme) {
    bodyEleClass.remove("dark");
    clearTheme();
    toggleThemeBtn();
    return;
  }
  if (!isSystemDarkTheme && !isBodyDarkTheme) return;
});

const themeBtnEle = document.getElementById("theme-btn");
themeBtnEle.addEventListener("click", () => {
  let isLocalDark = getLocalTheme();
  const bodyEleClass = document.getElementById("portfolio").classList;
  if (isLocalDark) {
    bodyEleClass.toggle("dark");
    clearTheme();
    isLocalDark = false;
  } else {
    bodyEleClass.toggle("dark");
    saveTheme();
    isLocalDark = true;
  }
  toggleThemeBtn();
});
