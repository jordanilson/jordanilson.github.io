"use strict";

var eventEfeitoSobre = document.querySelector(".js-efeito-sobre");
var eventEfeitoCuriosidade = document.querySelector(".js-efeito-curiosidade");
var eventEfeitoAtualizacao = document.querySelector(".js-efeito-atualizacao");
function hadleClickSobre() {
  eventEfeitoSobre.classList.add("ativa-efeito");
  eventEfeitoCuriosidade.classList.remove("ativa-efeito");
  eventEfeitoAtualizacao.classList.remove("ativa-efeito");
}
function hadleClickCuriosidade() {
  eventEfeitoCuriosidade.classList.add("ativa-efeito");
  eventEfeitoSobre.classList.remove("ativa-efeito");
  eventEfeitoAtualizacao.classList.remove("ativa-efeito");
}
function hadleClickAtualizacao() {
  eventEfeitoAtualizacao.classList.add("ativa-efeito");
  eventEfeitoCuriosidade.classList.remove("ativa-efeito");
  eventEfeitoSobre.classList.remove("ativa-efeito");
}
function EfeitoAtivado() {
  eventEfeitoSobre.classList.add("ativa-efeito");
}
EfeitoAtivado();
