// hide-show content, on click
/*
$('#hide').click(function () {
    $('.container').hide();
});

$('#show').click(function () {
    $('.container').show();
});

$("#toggle").click(function () {
    $('.container').toggle();
});
*/

// hide-show content, on click
$('#hide').click(function () {
    // $('.container').fadeOut();
    $('.container').slideUp(3000);
});

$('#show').click(function () {
    // $('.container').fadeIn();
    $('.container').slideDown();
});

$("#toggle").click(function () {
    $('.container').fadeToggle(2000);
    // $('.container').slideToggle(2000);
});


// * making sticky menu/ navbar
var navOff = $('.main_menu').offset().top;
// alert(navbar);

$(window).scroll(function () {
    var scrolling = $(this).scrollTop();
    if (scrolling > navOff) {
        $('.main_menu').addClass('sticky_menu');
    }

    else {
        $('.main_menu').removeClass('sticky_menu');
    }
});

// * making back to top button
$('.back_to_top').click(function () {
    $('html, body').animate({
        scrollTop: 0,
    },2000)
})