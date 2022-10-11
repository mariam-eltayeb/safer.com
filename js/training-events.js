// featured organizer slider
$('.posts_carsoul').slick({
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 3,
    slidesToscroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    responsive: [
      {
        breakpoint:1000,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 2
        }
      },
      {
        breakpoint:700,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 1
        }
      },
      ]
  });
  // createSlick();
  // $(window).on( 'resize', createSlick );
