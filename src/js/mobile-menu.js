const btnMobileMenu = document.getElementById("btn-mobile-menu");

btnMobileMenu.addEventListener("click", () => {
  const expandedClass = "mobile-expanded";
  const mainMenuContainer = document.getElementById("main-nav-container");
  mainMenuContainer.classList.toggle(expandedClass);

  btnMobileMenu.setAttribute(
    "aria-expanded",
    mainMenuContainer.classList.contains(expandedClass),
  );
});
