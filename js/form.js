"use strict";

var submitButton = document.querySelector(".form__button--submit-button");
var modalsLayout = document.querySelector(".form__modals");
var modalDone = document.querySelector(".form__modal--done");
var modalError = document.querySelector(".form__modal--error");
var modalDoneButton = modalDone.querySelector("button");
var modalErorButton = modalError.querySelector("button");
var form = document.querySelector(form);

submitButton.onclick = function() {
  modalsLayout.classList.remove("invisible");
};

modalErorButton.onclick = function() {
  modalsLayout.classList.add("invisible");
}
