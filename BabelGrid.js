"use strict";

var clickScroll = document.querySelectorAll(".scroll-js");
var htmlInit = document.querySelector(".html-js-init");
var animaScrollImg = document.querySelectorAll(".img-anima");
function startAnimaScroll(event) {
  animaScrollImg.forEach(function (item) {
    item.classList.remove("anima-ativado");
  });
  animaScrollImg[event].classList.add("anima-ativado");
  console.log(animaScrollImg);
}
clickScroll.forEach(function (item, i) {
  item.addEventListener("click", function () {
    startAnimaScroll(i);
  });
});
function startInitHtml() {
  htmlInit.classList.add("anima-ativado");
}
startInitHtml();
var eventCardBody = document.querySelectorAll("#click-overview");
var ativaInfoHtmlOverview = document.querySelectorAll("#text-info-html");
var ativaInfoCssOverview = document.querySelectorAll("#text-info-css");
var ativaInfoJavaScriptOverview = document.querySelectorAll("#text-info-javascript");
var ativaInfoSassOverview = document.querySelectorAll("#text-info-sass");
var ativaInfoReactOverview = document.querySelectorAll("#text-info-react");
var ativaInfoGitOverview = document.querySelectorAll("#text-info-git");
function ativaInfoHtml(event) {
  ativaInfoHtmlOverview.forEach(function (item) {
    item.style.display = "none";
  });
  ativaInfoHtmlOverview[event].style.display = "block";
}
function ativaInfoCss(event) {
  ativaInfoCssOverview.forEach(function (item) {
    item.style.display = "none";
  });
  ativaInfoCssOverview[event].style.display = "block";
}
function ativaInfoJavaScript(event) {
  ativaInfoJavaScriptOverview.forEach(function (item) {
    item.style.display = "none";
  });
  ativaInfoJavaScriptOverview[event].style.display = "block";
}
function ativaInfoSass(event) {
  ativaInfoSassOverview.forEach(function (item) {
    item.style.display = "none";
  });
  ativaInfoSassOverview[event].style.display = "block";
}
function ativaInfoReact(event) {
  ativaInfoReactOverview.forEach(function (item) {
    item.style.display = "none";
  });
  ativaInfoReactOverview[event].style.display = "block";
}
function ativaInfoGit(event) {
  ativaInfoGitOverview.forEach(function (item) {
    item.style.display = "none";
  });
  ativaInfoGitOverview[event].style.display = "block";
}
eventCardBody.forEach(function (item, i) {
  item.addEventListener("click", function () {
    ativaInfoHtml(i);
    ativaInfoCss(i);
    ativaInfoJavaScript(i);
    ativaInfoSass(i);
    ativaInfoReact(i);
    ativaInfoGit(i);
  });
});
var initHtmlSobre = document.querySelector(".init-sobre-html");
var initHtmlCuriosidade = document.querySelector(".init-curiosidade-html");
var initHtmlAtualizacao = document.querySelector(".init-atualizacao-html");
var initCssSobre = document.querySelector(".init-sobre-css");
var initCssCuriosidade = document.querySelector(".init-curiosidade-css");
var initCssAtualizacao = document.querySelector(".init-atualizacao-css");
var initJavaScriptSobre = document.querySelector(".init-sobre-javascript");
var initJavaScriptCuriosidade = document.querySelector(".init-curiosidade-javascript");
var initJavaScriptAtualizacao = document.querySelector(".init-atualizacao-javascript");
var initSassSobre = document.querySelector(".init-sobre-sass");
var initSassCuriosidade = document.querySelector(".init-curiosidade-sass");
var initSassAtualizacao = document.querySelector(".init-atualizacao-sass");
var initReactSobre = document.querySelector(".init-sobre-react");
var initReactCuriosidade = document.querySelector(".init-curiosidade-react");
var initReactAtualizacao = document.querySelector(".init-atualizacao-react");
var initGitSobre = document.querySelector(".init-sobre-git");
var initGitCuriosidade = document.querySelector(".init-curiosidade-git");
var initGitAtualizacao = document.querySelector(".init-atualizacao-git");
function startInit() {
  initHtmlSobre.style.display = "block";
  initCssSobre.style.display = "block";
  initJavaScriptSobre.style.display = "block";
  initSassSobre.style.display = "block";
  initReactSobre.style.display = "block";
  initGitSobre.style.display = "block";
}
startInit();
var flexCardHtml = document.querySelector(".js-flex-card-html");
var flexCardCss = document.querySelector(".js-flex-card-css");
var flexCardJavaScript = document.querySelector(".js-flex-card-javascript");
var flexCardSass = document.querySelector(".js-flex-card-sass");
var flexCardReact = document.querySelector(".js-flex-card-react");
var flexCardGit = document.querySelector(".js-flex-card-git");
function startInitCardOverview() {
  flexCardCss.style.display = "none";
  flexCardJavaScript.style.display = "none";
  flexCardSass.style.display = "none";
  flexCardReact.style.display = "none";
  flexCardGit.style.display = "none";
}
startInitCardOverview();
function hadlleClickHtml() {
  flexCardHtml.style.display = "block";
  flexCardCss.style.display = "none";
  flexCardJavaScript.style.display = "none";
  flexCardSass.style.display = "none";
  flexCardReact.style.display = "none";
  flexCardGit.style.display = "none";
}
function hadlleClickCss() {
  flexCardCss.style.display = "block";
  flexCardHtml.style.display = "none";
  flexCardJavaScript.style.display = "none";
  flexCardSass.style.display = "none";
  flexCardReact.style.display = "none";
  flexCardGit.style.display = "none";
}
function hadlleClickJavaScript() {
  flexCardJavaScript.style.display = "block";
  flexCardHtml.style.display = "none";
  flexCardCss.style.display = "none";
  flexCardSass.style.display = "none";
  flexCardReact.style.display = "none";
  flexCardGit.style.display = "none";
}
function hadlleClickSass() {
  flexCardSass.style.display = "block";
  flexCardHtml.style.display = "none";
  flexCardJavaScript.style.display = "none";
  flexCardReact.style.display = "none";
  flexCardCss.style.display = "none";
  flexCardGit.style.display = "none";
}
function hadlleClickReact() {
  flexCardReact.style.display = "block";
  flexCardHtml.style.display = "none";
  flexCardJavaScript.style.display = "none";
  flexCardCss.style.display = "none";
  flexCardSass.style.display = "none";
  flexCardGit.style.display = "none";
}
function hadlleClickGit() {
  flexCardGit.style.display = "block";
  flexCardHtml.style.display = "none";
  flexCardJavaScript.style.display = "none";
  flexCardCss.style.display = "none";
  flexCardSass.style.display = "none";
  flexCardReact.style.display = "none";
}
