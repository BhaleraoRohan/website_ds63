// Owl carousel
$('.owl-partners').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

$('.owl-projects').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
// $('.owl-projects').owlCarousel({
//     loop:true,
//     nav: true,
//     nav:true,
//     autoplay:false,
//     items:1,
//     margin:10,
//     autoHeight:false,  
// })

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    animateOut: 'slideOutDown',
    animateIn: 'flipInX',
    items: 1,
    margin: 30,
    stagePadding: 30,
    smartSpeed: 450,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
})