
$('.explore_carsoul').slick({
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 4,
    slidesToscroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    responsive: [

      {
        breakpoint:1200,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 3
        }
      },
        {
            breakpoint:991,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: '0px',
              slidesToShow: 2
            }
          },
          {
            breakpoint:767,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: '0px',
              slidesToShow: 1
            }
          },
         
      ]
  });

