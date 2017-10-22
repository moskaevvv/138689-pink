'use strict';
var headerBlock = document.querySelector('.page-header');
var menuToggle = document.querySelector('.page-header__toggle');

window.onload = function() {
  headerBlock.classList.add('page-header--compact');
};

menuToggle.onclick = function() {
  headerBlock.classList.toggle('page-header--compact');
  menuToggle.classList.toggle('page-header__toggle--to-close');
};
