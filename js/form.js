"use strict";

var submitButton = document.querySelector(".rectangle-button--submit-button");
var modalError = document.querySelector(".modal--error");
var modalErorButton = modalError.querySelector(".modal__button--close");

submitButton.onclick = function() {
  modalError.classList.remove("modal--hidden");
};

modalErorButton.onclick = function() {
  modalError.classList.add("modal--hidden");
}
