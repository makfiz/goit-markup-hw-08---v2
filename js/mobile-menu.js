(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");

  menuBtnRef.addEventListener("click", () => {
    
    const isMenuOpen =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;
      menuBtnRef.classList.toggle("is-open");
    
    menuBtnRef.setAttribute("aria-expanded", !isMenuOpen);
    mobileMenuRef.classList.toggle("is-open");

    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  });

})();