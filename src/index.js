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
