/*$('.owl-carousel').owlCarousel({
    loop:true,
    margin:50,
    nav:true,
    items:3,
    dots:false,
    center:true,
    slideTransition:"ease-in-out",
    /*autoplay:10000,
    smartSpeed:1000,
    
    responsive:{
        0:{
            items:5
        },
        600:{
            items:4
        },
        1000:{
            items:1
        }
    }
})
var slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("serv_show");
    var dots = document.getElementsByClassName("serv");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "flex";
    dots[slideIndex - 1].className += " active";
}*/
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    items:1,
    dots:false,
    center:true,
    slideTransition:"ease-in-out",
    /*autoplay:10000,*/
    smartSpeed:1000,

})


