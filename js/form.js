"use strict";

var submitButton = document.querySelector(".form__button--submit-button");
var modalError = document.querySelector(".form__modal--error");
var modalErorButton = modalError.querySelector("button");

submitButton.onclick = function() {
  modalError.classList.remove("hidden");
};

modalErorButton.onclick = function() {
  modalError.classList.add("hidden");
}
