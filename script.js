$(document).ready(function () {
    /* Navbar */
    $('.menu').click(function () {
        $(this).toggleClass('open')
    })
    /* ICONS SLIDE */
    var time = 25000
    $('.icons-slider .icons').css('animationDuration', `${time}ms`);
    var icons = $('.icons-slider .icons').get(0)
    var iconsClone = icons.cloneNode('true')
    $(iconsClone).addClass('copy');
    $(icons).parent().append(iconsClone);
    $(icons).css({ 'animationName': 'slide' })
    $(iconsClone).css({ 'animationName': 'slide', 'animationDelay': `${time / 2}ms` })

}
);