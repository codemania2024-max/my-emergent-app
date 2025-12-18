jQuery(function ($) {
    


        
$(".lazy").lazyload();





            $(".sub_slider").owlCarousel({
                navigation: true,
                loop: true,
                margin: 30,
                navText: ['',''],
                nav: false,
                autoplay:  true,
                mouseDrag: true,
                touchDrag: true,
                paginationSpeed: 1000,
                lazyLoad: true,
                autoplayTimeout: 4000,
                autoplayHoverPause: false,
                smartSpeed: 1000,
                navSpeed: 1000,
                dotsSpeed: 1000,
                autoPlaySpeed: 1000,
                autoHeight: false,
                responsive: {
                    0: {
                        items: 2
                    },
                    640: {
                        items: 4
                    },
                    769: {
                        items: 6
                    }
                },
            });



             jQuery('.tab').hide();
    
                jQuery('ul.tabs li').click(function(){
                    $(this).find('span').addClass('active');
                    $(this).siblings().find('span').removeClass('active');
                    jQuery('.tab').hide();
                    jQuery(jQuery('.tab')[jQuery(this).index()]).show();
                }).first().trigger('click');



  });