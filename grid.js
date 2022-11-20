const clickScroll = document.querySelectorAll(".scroll-js");
const htmlInit = document.querySelector(".html-js-init");
const animaScrollImg = document.querySelectorAll(".img-anima");
function startAnimaScroll(event) {
  animaScrollImg.forEach((item) => {
    item.classList.remove("anima-ativado");
  });
  animaScrollImg[event].classList.add("anima-ativado");
  console.log(animaScrollImg);
}
clickScroll.forEach((item, i) => {
  item.addEventListener("click", () => {
    startAnimaScroll(i);
  });
});

function startInitHtml() {
  htmlInit.classList.add("anima-ativado");
}
startInitHtml();

const eventCardBody = document.querySelectorAll("#click-overview");
const ativaInfoHtmlOverview = document.querySelectorAll("#text-info-html");
const ativaInfoCssOverview = document.querySelectorAll("#text-info-css");
const ativaInfoJavaScriptOverview = document.querySelectorAll(
  "#text-info-javascript"
);
const ativaInfoSassOverview = document.querySelectorAll("#text-info-sass");
const ativaInfoReactOverview = document.querySelectorAll("#text-info-react");
const ativaInfoGitOverview = document.querySelectorAll("#text-info-git");

function ativaInfoHtml(event) {
  ativaInfoHtmlOverview.forEach((item) => {
    item.style.display = "none";
  });
  ativaInfoHtmlOverview[event].style.display = "block";
}

function ativaInfoCss(event) {
  ativaInfoCssOverview.forEach((item) => {
    item.style.display = "none";
  });
  ativaInfoCssOverview[event].style.display = "block";
}
function ativaInfoJavaScript(event) {
  ativaInfoJavaScriptOverview.forEach((item) => {
    item.style.display = "none";
  });
  ativaInfoJavaScriptOverview[event].style.display = "block";
}

function ativaInfoSass(event) {
  ativaInfoSassOverview.forEach((item) => {
    item.style.display = "none";
  });
  ativaInfoSassOverview[event].style.display = "block";
}

function ativaInfoReact(event) {
  ativaInfoReactOverview.forEach((item) => {
    item.style.display = "none";
  });
  ativaInfoReactOverview[event].style.display = "block";
}

function ativaInfoGit(event) {
  ativaInfoGitOverview.forEach((item) => {
    item.style.display = "none";
  });
  ativaInfoGitOverview[event].style.display = "block";
}

eventCardBody.forEach((item, i) => {
  item.addEventListener("click", () => {
    ativaInfoHtml(i);
    ativaInfoCss(i);
    ativaInfoJavaScript(i);
    ativaInfoSass(i);
    ativaInfoReact(i);
    ativaInfoGit(i);
  });
});

const initHtmlSobre = document.querySelector(".init-sobre-html");
const initHtmlCuriosidade = document.querySelector(".init-curiosidade-html");
const initHtmlAtualizacao = document.querySelector(".init-atualizacao-html");

const initCssSobre = document.querySelector(".init-sobre-css");
const initCssCuriosidade = document.querySelector(".init-curiosidade-css");
const initCssAtualizacao = document.querySelector(".init-atualizacao-css");

const initJavaScriptSobre = document.querySelector(".init-sobre-javascript");
const initJavaScriptCuriosidade = document.querySelector(
  ".init-curiosidade-javascript"
);
const initJavaScriptAtualizacao = document.querySelector(
  ".init-atualizacao-javascript"
);

const initSassSobre = document.querySelector(".init-sobre-sass");
const initSassCuriosidade = document.querySelector(".init-curiosidade-sass");
const initSassAtualizacao = document.querySelector(".init-atualizacao-sass");

const initReactSobre = document.querySelector(".init-sobre-react");
const initReactCuriosidade = document.querySelector(".init-curiosidade-react");
const initReactAtualizacao = document.querySelector(".init-atualizacao-react");

const initGitSobre = document.querySelector(".init-sobre-git");
const initGitCuriosidade = document.querySelector(".init-curiosidade-git");
const initGitAtualizacao = document.querySelector(".init-atualizacao-git");

function startInit() {
  initHtmlSobre.style.display = "block";
  initCssSobre.style.display = "block";
  initJavaScriptSobre.style.display = "block";
  initSassSobre.style.display = "block";
  initReactSobre.style.display = "block";
  initGitSobre.style.display = "block";
}
startInit();

const flexCardHtml = document.querySelector(".js-flex-card-html");
const flexCardCss = document.querySelector(".js-flex-card-css");
const flexCardJavaScript = document.querySelector(".js-flex-card-javascript");
const flexCardSass = document.querySelector(".js-flex-card-sass");
const flexCardReact = document.querySelector(".js-flex-card-react");
const flexCardGit = document.querySelector(".js-flex-card-git");

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
