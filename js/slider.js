$('.close-btn').on('click', function() {
    $('.overlay-slider').removeClass('active');
    $('.wrapper-slider-track').html('')
    $('.wrapper-slider-track').css('transform', 'translateX(0px)')
    positions = 0
})

const clickElemMainWrapper = $('.cliks-elem-wrapper');

clickElemMainWrapper.on('click', function(){
    $('.overlay-slider').addClass('active');
    let childElem = $(this).children('.cliks-elem').children('img')
    for(let item = 0; item <  childElem.length; item++){
        $('.wrapper-slider-track').prepend('<div class="slid-item active"><img src="'+childElem[item].getAttribute('src')+'" alt=""></div>');
        
    }
})
$('.next-btn').click(function(){
    let widthSlidTrck = $('.wrapper-slider')
    scrolNext(widthSlidTrck.width())
})
$('.prev-btn').click(function() {
    let widthSlidTrck = $('.wrapper-slider')
    scrolPrev(widthSlidTrck.width())
})
const scrolNext = (width) => {
    positions += width
    $('.wrapper-slider-track').css('transform', 'translateX(-'+positions+'px)')


    if(positions == width * $('.slid-item').length) {
        $('.wrapper-slider-track').css('transform', 'translateX(0px)')
        positions = 0
    }
}
let positions = 0

const scrolPrev = (width)=> {
    positions -= width
    $('.wrapper-slider-track').css('transform', 'translateX(-'+positions+'px)')


    if(positions == 0) {
        $('.wrapper-slider-track').css('transform', 'translateX(0px)')
        positions = 0
    }
}