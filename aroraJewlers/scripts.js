$(function() {
  let imageSwapper = function() {
    if ($(window).width() < 800) {
      document.querySelector(".galleryImageOne").src =
        "./images/mobileImages/image-2.png";
      document.querySelector(".galleryImageTwo").src =
        "./images/mobileImages/image-2-copy.png";
      document.querySelector(".handCraftedImage").src =
        "./images/mobileImages/image-6.png";
    } else if ($(window).width() > 800) {
      document.querySelector(".galleryImageOne").src = "./images/image-2.png";
      document.querySelector(".galleryImageTwo").src =
        "./images/image-2-copy.png";
      document.querySelector(".handCraftedImage").src = "./images/image-6.png";
    }
  };
  imageSwapper();
  $(function() {
    $(window).resize(imageSwapper);
  });
});

// let pageWidth = window.outerWidth;

// let listen = window.addEventListener("resize", imageSwapOnResize(pageWidth));

// function imageSwapOnResize(param) {
//   //   window.outerWidth;
//   //   let width = window.outerWidth;
//   if (param < 800) {
//     document.querySelector(".galleryImageOne").src =
//       "./images/mobileImages/image-2.png";
//     document.querySelector(".galleryImageTwo").src =
//       "./images/mobileImages/image-2-copy.png";
//   } else if (param > 800) {
//     document.querySelector(".galleryImageOne").src = "./images/image-2.png";
//     document.querySelector(".galleryImageTwo").src =
//       "./images/image-2-copy.png";
//   }
// }
// listen();
// imageSwapOnResize();

// function myFunction() {
//   var w = window.outerWidth;
//   var h = window.outerHeight;
//   var txt = "Window size: width=" + w + ", height=" + h;
//   document.getElementById("demo").innerHTML = txt;
//   console.log(txt);
// }

// myFunction();

// window.innerWidth;
// document.getElementById("demo").innerHTML = "Width: " + w + "<br>Height: " + h;

// document.addEventListener("DOMContentLoaded", function(event) {
//   //do work
// });

// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onresize
