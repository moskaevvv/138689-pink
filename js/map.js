"use strict";

var yandexMap = document.querySelector(".page-footer__yandex-map")
var script = document.createElement("script");
script.src = "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A115a0f048015ab1bec2ca91b18fdbf826bb761c616c6c0482f143ef205a0f323&amp;width=100%25&amp;height=100%&amp;lang=ru_RU&amp;scroll=true";
yandexMap.appendChild(script);

script.onload = function() {
  var pinSearch = setInterval(function() {
    var mapPin = document.querySelector(".ymaps-2-1-56-svg-icon");
    var mapTopToolbar = document.querySelector(".ymaps-2-1-56-controls__toolbar");
    mapPin.style.backgroundImage = 'url("img/icon-map-marker.svg")';
    mapPin.style.width = "36px";
    mapPin.style.height = "36px";
    mapPin.style.left = "-18px";
    mapPin.style.top = "-18px";
    mapPin.style.backgroundRepeat = "no-repeat";
    mapPin.style.backgroundSize = "100% 100%";
    mapTopToolbar.style.display = "none";
    console.clear();
  }, 500);

  var pinSearchStop = setTimeout(function() {
    clearInterval(pinSearch);
  }, 7000);
}
