import $ from 'jquery';
import 'slick-carousel';

$(document).ready( function () {

  $(window).scroll(function() {
    if ($(this).scrollTop() > 0) {
      $('.header').addClass('active');
      $('.header-item a').addClass('active');
      $('.header-logo').addClass('active');
    } else {
      $('.header').removeClass('active');
      $('.header-item a').removeClass('active');
      $('.header-logo').removeClass('active');
    }
  });

  $('.nav').on('click', 'a', function(e) {
    e.preventDefault();
    var id = $(this).attr('href');
    $('body,html').animate({scrollTop: $(id).offset().top - 56}, 1000);
  });

  $('.header-logo').click(function() {
     $('body,html').animate({scrollTop: 0}, 1000);
  });

	$('.hamburger').on('click', function(e) {
    e.preventDefault();
    $('.nav').slideToggle();
    $(this).toggleClass('active');
  });

  $(window).resize(function() {
    if($(window).width() > 760 && $('.nav').is(':hidden')) {
      $('.nav').removeAttr('style');
    }
  });

  $('.clients-slider').slick({
    speed: 500,
    slidesToShow: 1,
    adaptiveHeight: true,
    arrows: false,
    dots: true
  });

});