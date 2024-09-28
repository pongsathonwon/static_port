const projectData = [
  {
    title: "golden",
    content:
      "This is web application to serve backoffice management running on <em>Angular</em>. purpose. My client, a family gold bussiness, has a pain point from previous software.",
    tags: [{ name: "angular", color: "chip-red" }],
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
  {
    title: "Demo backoffice",
    content:
      "This is my demo project on CMS. This project focus on manage stocks and users of e-coomerce project. Tech stack are <em>react</em> as UI framework and <em>firebase</em> as a backend.",
    tags: [
      { name: "react", color: "chip-blue" },
      { name: "firebase", color: "chip-yellow" },
    ],
  },
];
const createChip = (tags) => {
  let result = "";
  tags.forEach(
    ({ name, color }) => (result += `<div class="chip ${color}">${name}</div>`)
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
export const createContentHTML = () => {
  let result = "";
  projectData.forEach((p) => (result += createProject(p)));
  console.log(result);
  return result;
};
