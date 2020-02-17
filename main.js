$(".portfolio__btn").click(function() {
    if ($(this).attr("filter") != "all") {
        $(".items > div*[filter !='" + $(this).attr('filter') + "']").fadeOut(350);
        $(".items > div*[filter ='" + $(this).attr('filter') + "']").fadeIn(350);
    } else {
        $(".items > div").fadeIn(350);
    }
});

$('.multiple-items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    transition: 5000,
    arrows: false,
    dots: true,
    dotsClass: "dots-style",
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 400,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }

    ]

});
//menu
$('ul.menu a[href^="#"').click(function() {
    var target = $(this).attr("href");
    $('html, body').animate({
        scrollTop: $(target).position().top
    }, 300);
    $('ul.menu a[href^="#"').css({ 'color': '#212121' });
    $(this).css({
        'color': '#004bee'
    });
    return false;
});

//menu
$(window).scroll(function() {
    if ($(this).scrollTop() != 0) {
        $('.up').fadeIn();
    } else $('.up').fadeOut();


});
$(".up").click(function() {
    $('html, body').animate({
        scrollTop: 0
    }, 650);

});
$('.menu__icon').click(function() {
    $('nav').slideToggle(500);

    $('ul.menu').css({
        'display': 'flex',
        'flex-direction': 'column',
        'height': '100%',

    });
    $('.menu__item').css({
        'margin-top': "20px"
    });
    if ($('.menu__icon').html() == '<i class="fas fa-bars"></i>') {
        $(this).html('<i class="fas fa-times"></i>');
    } else {
        $(this).html('<i class="fas fa-bars"></i>');
    }
    $('#toTop').hide();
    $('.menu li a').click(function() {
        $('nav').fadeOut(500);
        $('.menu__icon').html('<i class="fas fa-bars"></i>');
    });

    $("body").toggleClass("block");


});

// var itemBlock = document.getElementsByClassName("item__distance");
// itemBlock.onmousenter = function() {
//     this.classList.add("hide");
// };

// $(".item__distance img, .Item__distance span").addClass("active");
// $(".item__distance, .Item__distance span").addClass("hide")