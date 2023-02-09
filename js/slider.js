const swiper = new swiper('.swiper-container' , {
    speed: 800,
    loop: true,
    breakpoints: {
        576:{
            slidesperview : 1
        },
        768:{
            slidesperview: 2
        },
        1200:{
            slidesperview: 3
        },
    }
})