$(document).ready(function(){
    AOS.init();

    $('.portfolio-card').on('click', function(){
        var $cardNum = $(this).attr('data-number')
        var $imgSrc = $('.portfolio-modal').eq($cardNum).find('img').attr('data-img');

        $('.modal-container').fadeIn();

        $('.portfolio-modal').eq($cardNum).find('img').attr('src', $imgSrc);

        $('.portfolio-modal').eq($cardNum).find('.portfolio-close').fadeIn();

        console.log($cardNum);


    });

    $('.portfolio-close').on('click', function(){
        $('.modal-container').fadeOut();
        $(this).prev().attr('src', '');
        $(this).fadeOut();
    });

    $('.fullscreen-nav ul a').on('click', function(){
        $('.fullscreen-nav').fadeOut();
    });

    $('.burger-wrapper').on('click', function(){
        $('.fullscreen-nav').fadeIn();
    });

});