$(function () {
  $('.design_slider').slick({
    dots: false,
    slidesToShow: 4,
    variableWidth: true,
    prevArrow:
      '<img class="arrow arrow-left" src="images/arrow-left.svg" alt="arrow-left.svg" />',
    nextArrow:
      '<img class="arrow arrow_right" src="images/arrow-right.svg" alt="arrow-right.svg" />',
  });
});
