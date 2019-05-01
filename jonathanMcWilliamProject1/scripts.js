$(function() {
  let imageSwapper = function() {
    if ($(window).width() < 700) {
      document.querySelector(".galleryImageOne").src =
        "./images/mobileImages/image-2.png";
      document.querySelector(".galleryImageTwo").src =
        "./images/mobileImages/image-2-copy.png";
      document.querySelector(".handCraftedImage").src =
        "./images/mobileImages/image-6.png";
    } else if ($(window).width() > 700) {
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
