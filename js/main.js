$('.medical_carsoule').slick({
    centerMode: true,
    centerPadding: '10px',
    slidesToShow: 4,
    slidesToscroll: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    responsive: [
      
        {
            breakpoint: 1250,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: '0px',
              slidesToShow: 3
            }
          },
        {
            breakpoint: 995,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: '0px',
              slidesToShow: 2
            }
          },
        {
          breakpoint: 650,
          settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '0px',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            centerMode: true,
            centerPadding: '0px',
            slidesToShow: 1
          }
        }
      ]
  });
  // createSlick();
  // $(window).on( 'resize', createSlick );
