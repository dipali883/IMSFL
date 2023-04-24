import 'slick-carousel';

export class App{

  init() {

    $('.large-slider').slick({
      dots: false,
      arrows: false,
      infinite: true,
      speed: 300,
      autoplay: true,
      slidesToShow: 1,
      responsive: [
          {
              breakpoint: 768,
              settings: {
                  arrows: true
              }
          }
      ]
  });

  /* related products slider */
  $('.logos-slider').slick({
      dots: false,
      arrows: false,
      infinite: false,
      speed: 400,
      autoplay: true,
      slidesToShow: 4,
      responsive: [
          {
              breakpoint: 1200,
              settings: {
                  slidesToShow: 4,
                  arrows: false,
              }
          },
          {
              breakpoint: 1024,
              settings: {
                  slidesToShow: 3,
              }
          },
          {
              breakpoint: 768,
              settings: {
                  slidesToShow: 2,
              }
          },
          {
            breakpoint: 555,
            settings: {
                slidesToShow: 1,
            }
        }
      ]
  });


  // hero-slider

  $('.hero-slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    autoplay: true,
    slidesToShow: 1,
    responsive: [{
        breakpoint: 767,
        settings: {
            dots: false,
            adaptiveHeight: true,
        }
    }]
  });

//   testimonial slider
  $('.testimonial-slider').slick({
    dots: true,
    arrows: true,
    infinite: true,
    speed: 300,
    autoplay: true,
    slidesToShow: 1,
  });


  // hero-slider

  $('.protect-slider').slick({
    dots: true,
    arrows: true,
    infinite: true,
    speed: 300,
    autoplay: true,
    slidesToShow: 1,
    responsive: [{
        breakpoint: 767,
        settings: {
            dots: false,
            arrows:false,
            adaptiveHeight: true,
        }
    }]
  });


  }

  slickSLider (){

  }

}