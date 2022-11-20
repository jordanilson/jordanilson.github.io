"use strict";

var linksInternos = document.querySelectorAll('.js-menu-ul-li a[href^="#"]');
function sectionScroll(event) {
  event.preventDefault();
  var href = event.currentTarget.getAttribute("href");
  var section = document.querySelector(href);
  var top = section.offsetTop;
  window.scrollTo({
    top: top
  });
}
linksInternos.forEach(function (item) {
  item.addEventListener("click", sectionScroll);
});
