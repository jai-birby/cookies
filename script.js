/*

  How to start the local server

  this is after meta in html file 

*/

/*
  1. Give image ID
  2. Reference image ID in JS
  3. Add on press listener to reference
  4. Change image
*/

let cookieClose1Img = document.getElementById("cookieClose1Img");
const originalImage1Src = "img/cookie_close_1.png";
const newImage1Src = "img/cookie_open_1.png";
const audio1 = new Audio("sounds/crumble1.mp3");

function clickFunctionality(cookie, newImg, originalImg, audio) {
  cookie.addEventListener("pointerdown", function (e) {
    cookie.src = newImg;
    audio.play();
    e.preventDefault();
  });
  cookie.addEventListener("pointerup", function (e) {
    cookie.src = originalImg;
    audio.pause();
    e.preventDefault();
  });
}

clickFunctionality(cookieClose1Img, newImage1Src, originalImage1Src, audio1);

// cookieClose1Img.addEventListener("mousedown", function () {
//   cookieClose1Img.src = newImage1Src;
//   audioOpen.play();
// });
// cookieClose1Img.addEventListener("mouseup", function () {
//   cookieClose1Img.src = originalImage1Src;
//   audioOpen.pause();
// });

let cookieClose2Img = document.getElementById("cookieClose2Img");
const originalImage2Src = "img/cookie_close_2.png";
const newImage2Src = "img/cookie_open_2.png";
const audio2 = new Audio("sounds/cumble2.mp3");
clickFunctionality(cookieClose2Img, newImage2Src, originalImage2Src, audio2);

let cookieClose3Img = document.getElementById("cookieClose3Img");
const originalImage3Src = "img/cookie_close_3.png";
const newImage3Src = "img/cookie_open_3.png";
const audio3 = new Audio("sounds/crumble3.mp3");
clickFunctionality(cookieClose3Img, newImage3Src, originalImage3Src, audio3);

let cookieClose4Img = document.getElementById("cookieClose4Img");
const originalImage4Src = "img/cookie_close_4.png";
const newImage4Src = "img/cookie_open_4.png";
const audio4 = new Audio("sounds/crumble4.mp3");
clickFunctionality(cookieClose4Img, newImage4Src, originalImage4Src, audio4);

let cookieClose5Img = document.getElementById("cookieClose5Img");
const originalImage5Src = "img/cookie_close_5.png";
const newImage5Src = "img/cookie_open_5.png";
const audio5 = new Audio("sounds/crumble5.mp3");
clickFunctionality(cookieClose5Img, newImage5Src, originalImage5Src, audio5);

let cookieClose6Img = document.getElementById("cookieClose6Img");
const originalImage6Src = "img/cookie_close_6.png";
const newImage6Src = "img/cookie_open_6.png";
const audio6 = new Audio("sounds/crumble6.mp3");
clickFunctionality(cookieClose6Img, newImage6Src, originalImage6Src, audio6);
