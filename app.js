
(function ($) {
    $(document).ready(function () {

         $('#tog').click(function () {
             $('.nav').slideToggle(1000);
         })


         // for to-top buttom 
         $('.to-top a').click(function () {
             $('html, body').animate({
                 'scrollTop': 0
             }, 2000);
             return false;
         })

         // for to-top button heid and show
         $(window).scroll(function () {
             if ($(window).scrollTop() > 500) {
                 $('.to-top a').show();
             } else {
                 $('.to-top a').hide();
             }
         })










         

    })
})(jQuery)