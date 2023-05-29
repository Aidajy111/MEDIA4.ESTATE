$('.burger-btn-wrapper').click(function() {
    $('.menu-header').addClass('active')
    $('.closes').click(function() {
        $('.menu-header').removeClass('active')
    })
})


$(document).ready(function(){
    $('.slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        speed: 1000,
        responsive: [
            {

                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    variableWidth: true,                    
                }

            }
        ]
    })
    

    $(function(){
        $("#twenty-wrap").twentytwenty({
            no_overlay: true,
        });
        $("#twenty-wrap-2").twentytwenty({
            no_overlay: true,
        });
        $("#twenty-wrap-3").twentytwenty({
            no_overlay: true,
        });
    });
})
// const loader = document.querySelector('.preloader')
// window.addEventListener('load', ()=> {
//     loader.classList.add('hide')
//     setTimeOut(()=>{
//         loader.remove()
//     }, 600)
// })

function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('element-show');
      }
    });
  }
  let options = {
    threshold: [0.5] };
    let observer = new IntersectionObserver(onEntry, options);
    let elements = document.querySelectorAll('.element-animation');
    for (let elm of elements) {
        observer.observe(elm);
}


$('.close-btn').on('click', function() {
    $('.overlay-slider').removeClass('active');

})


