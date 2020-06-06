$(document).ready(function () {
    $('.menu-btn').on('click',function (e) { 
        e.preventDefault();
        $('.navbar ul').toggleClass('show-menu');
    });
    //行動裝置漢堡選單

    $('.top-icon').on('click',function (e) { 
        e.preventDefault();
        $('html,body').animate({
            scrollTop:0
          },300);
    });
    //右下角scrollTop

    $('.order-menu a').click(function (e) { 
        $(this).addClass('active').parent().siblings().find('a').removeClass('active');
    });
    //order頁面，左側menu點選後變色效果

    $('.plus-cart').click(function (e) { 
        $(this).toggleClass('active');    
    });
    //order頁面，"加入購物車"點選後變色效果

    $('.heart-icon').click(function (e) { 
        $(this).toggleClass('far fa-heart heart-icon').toggleClass('fas fa-heart heart-icon');  
    });
    //order頁面，產品左上"♥"點選後變色效果

});