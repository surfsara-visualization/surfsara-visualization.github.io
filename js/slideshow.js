var slideIndex = 0;
var slideCount;
var slideRun = true;

function plusSlides(n)
{
  slideIndex = (slideIndex + n) % slideCount;
  slideRun = false;
  showSlides();
}

function currentSlide(n)
{
  slideIndex = n;
  slideRun = false;
  showSlides();
}

function showSlides()
{
  console.log(slideIndex, slideRun);

  var slides = $('.slideshow-slides');
  var dots = $('.slideshow-dot');

  slides.css('display', 'none');
  dots.removeClass('slideshow-active');

  slides.eq(slideIndex).css('display', 'block');
  dots.eq(slideIndex).addClass('slideshow-active');

  if (slideRun)
  {
    slideIndex = (slideIndex + 1) % slideCount;
    setTimeout(showSlides, 6000);
  }
}

$(function() {

  slideCount = $('.slideshow-slides').length;

  showSlides();

});
