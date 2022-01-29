export default () => {
  const JUMP_TIMEOUT = 400;
  let header = document.querySelector(`.js-header`);
  let menuToggler = document.querySelector(`.js-menu-toggler`);
  let menuLinks = document.querySelectorAll(`.js-menu-link`);

  if (menuToggler) {
    menuToggler.addEventListener(`click`, function () {
      if (header.classList.contains(`page-header--menu-opened`)) {
        header.classList.remove(`page-header--menu-opened`);
        document.body.classList.remove(`menu-opened`);
      } else {
        header.classList.add(`page-header--menu-opened`);
        document.body.classList.add(`menu-opened`);
      }
    });
  }

  for (let i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener(`click`, function (e) {
      e.preventDefault();

      let activeMenuLink = document.querySelector(`.js-menu-link.active`);
      activeMenuLink.classList.remove(`active`);
      let activeScreen = document.querySelector(`.screen.active`);
      activeScreen.classList.remove(`active`);

      setTimeout(() => {
        window.location.href = e.target.href;
      }, JUMP_TIMEOUT);

      if (window.innerWidth < 1025) {
        header.classList.remove(`page-header--menu-opened`);
        document.body.classList.remove(`menu-opened`);
      }
    });
  }
};
