const linksInternos = document.querySelectorAll('.js-menu-ul-li a[href^="#"]');
function sectionScroll(event) {
  event.preventDefault();
  const href = event.currentTarget.getAttribute("href");
  const section = document.querySelector(href);
  const top = section.offsetTop;
  window.scrollTo({
    top: top,
  });
}
linksInternos.forEach((item) => {
  item.addEventListener("click", sectionScroll);
});
