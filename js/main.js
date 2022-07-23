$(document).ready(function() {
	$('.directions__tabs-triggers-item').click(function(e){
		e.preventDefault();

		$('.directions__tabs-triggers-item').removeClass('directions__tabs-triggers-item--active');
		$('.directions__tabs-item').removeClass('directions__tabs-item--active');

		$(this).addClass('directions__tabs-triggers-item--active');

		$($(this).attr('href')).addClass('directions__tabs-item--active');
	});
	$('.directions__tabs-triggers-item').click();

	$('.projects__carousel').slick({
		infinite: true,
		autoplay: 3000,
		slidesToShow: 4,
		slidesToScroll: 4,
		dots: false,
		arrows: false,
		responsive: [
		{
      breakpoint: 1025,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 560,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
  ]
	});


	$('.reviews__carousel').slick({

		prevArrow:'<button type="button" class="slick-prev"><img src="img/icons/comment-leftArrow.png"></button>',
		nextArrow:'<button type="button" class="slick-next"><img src="img/icons/comment-rightArrow.png"></button>',
	});

	$('.header__menu-burger').on('click', function(){
		$('.header__menu-list').addClass('header__menu-list--active');
	});
	$('.header__menu-list').on('click', function(){
		$('.header__menu-list').removeClass('header__menu-list--active');
	});
	
	$('.footer__body-pannel-wrapper').on('click', function() {
		$(this).toggleClass('footer__body-pannel-wrapper--active').next().slideToggle();
	});
});