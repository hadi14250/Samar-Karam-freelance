const modifiers = {
  elSiteHeaderOpen: "header--open",
};

const elSiteHeader = document.querySelector(".header");
const elSiteHeaderToggler = document.querySelector(".header__toggler");

if (elSiteHeaderToggler) {
  elSiteHeaderToggler.addEventListener("click", function () {
    elSiteHeader.classList.toggle(modifiers.elSiteHeaderOpen);
  });
}
