(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobilMenuRef = document.querySelector("[data-menu]");
  menuBtnRef.addEventListener("click", () => {
    menuBtnRef.classList.toggle("is-open");
    mobilMenuRef.classList.toggle("is-open");


  });
})();


