const menuToggle = document.getElementById("mobile-menu");
const navList = document.GetElementById("nav-list");

menuToggle.addEventListener("click", () => {
  navList.classList.toggle("active");
})
