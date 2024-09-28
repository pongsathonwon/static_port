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
        "This is web application to serve backoffice management running on <em>Angular</em>. My client, a family gold business, has a pain point from previous software.",
      tags: [{ name: "angular", color: "chip-red" }],
      img: {
        desktop: {
          path: "../asset/golden/golden1.png",
          alt: "destop placeholder img",
        },
        mobile: { path: "../asset/golden/golden2.png" },
      },
    },
    {
      title: "Demo ecommerce",
      content:
        "This is my demo project on landing page and backoffice management. Tech stack are <em>react</em> as UI framework and <em>firebase</em> as a backend.",
      tags: [
        { name: "react", color: "chip-blue" },
        { name: "firebase", color: "chip-yellow" },
      ],
      img: {
        desktop: {
          path: "../asset/ecommerce/ecommerce1.png",
          alt: "destop placeholder img",
        },
        mobile: { path: "../asset/ecommerce/ecommerce2.png" },
      },
    },
    {
      title: "Demo backoffice",
      content:
        "This is my demo project on CMS. This project focus on manage stocks and users of e-coomerce project. Tech stack are <em>react</em> as UI framework and <em>firebase</em> as a backend.",
      tags: [
        { name: "react", color: "chip-blue" },
        { name: "firebase", color: "chip-yellow" },
      ],
      img: {
        desktop: {
          path: "../asset/backoffice/backoffice1.png",
          alt: "destop placeholder img",
        },
        mobile: { path: "../asset/backoffice/backoffice2.png" },
      },
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
  const createImg = ({ desktop, mobile }) => {
    return `<div
            class="grid grid-cols-12 grid-rows-8 p-4 bg-primary-2/10 rounded-md md:w-1/2"
          >
            <div
              class="col-start-1 col-span-full row-start-1 row-span-11 flex items-center"
            >
              <img
                src="${desktop.path}"
                class="rounded-md shadow-md shadow-primary-2/20"
                alt="${desktop.alt}"
              />
            </div>
            <div
              class="col-start-10 col-span-full row-start-1 row-span-full flex items-center"
            >
              <img
                src="${mobile.path}"
                class="rounded-md shadow-md shadow-primary-2/20"
                alt="${mobile.alt}"
              />
            </div>
          </div>`;
  };
  const createProject = ({ title, content, tags, img }) => {
    return `<div class="project">
              ${createImg(img)}
              <div class="flex flex-col md:w-1/2">
                <div class="h-full border-bot hover:border-none">
                  <a
                    class="rounded-md p-4 border-none h-full flex flex-col hover:bg-primary-2/10"
                    href="./notfoun.html"
                  >
                    <h4>${title}</h4>
                    <p class="mt-2 mb-4">
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
