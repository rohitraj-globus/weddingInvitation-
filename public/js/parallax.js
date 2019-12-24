$(window).resize(function(){
  section1DivResize();
});

$(window).load(function(){
  section1DivResize();
});

$(window).scroll(function() {
  var heights = $(window).width()/1.73 -43; 
  if( $(window).scrollTop() >= heights ){
    $("#rr_navigation").css({"top": 0 }) ;
    $("#rr_navigation").css({"position": 'fixed' }) ;
  }else{
    section1DivResize();
    $("#rr_navigation").css({"position": 'absolute' }) ;
  }
  parallax();
});

function section1DivResize() {
  console.log($(window).width());
  var heights = $(window).width()/1.73 ; 
  console.log(heights);
    $(".rr_staticParallax1").css({"height": heights }) ;
    $(".rr_staticParallax2").css({"height": heights }) ;
    //show hide mobile/desktop header
    if($(window).width()<675){
      $(".rr_menuContainer").removeClass("hide");
      $("#rr_navigation").addClass("hide");
    }else{
      $(".rr_menuContainer").addClass("hide");
      $("#rr_navigation").removeClass("hide");
      $("#rr_navigation").css({"top": (heights-50) }) ;
    }
}

function toggleMenu() {
  $(".menu").toggleClass("open");
  $(".rr_mobileMenu").toggleClass("hide");
  /*var menu = document.querySelector('.menu');
        if(menu.classList.contains("open")){component.set("v.openMobileNavMenu",false);}
        else{ component.set("v.openMobileNavMenu",true); }
        menu.classList.toggle('open');*/
}

/* Image Carousel */
var slideIndex = 1;
showSlides(slideIndex);

setInterval(function(){ 
  slideIndex++;
  showSlides(slideIndex);
  console.log("test") ;
}, 5000);  // Change image every 5 seconds

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

/* Image Carousel */

/*  digital clock */
var clock;
$(document).ready(function() {
  // Grab the current date
  var currentDate = new Date();

    // Set some date in the future. In this case, it's always Jan 1
    var futureDate  = new Date(2020,00,17);

    // Calculate the difference in seconds between the future and current date
    var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;

  // Instantiate a coutdown FlipClock
  clock = $('.clock').FlipClock(diff, {
    clockFace: 'DailyCounter',
    countdown: true
  });
});
/*  digital clock */



function parallax() {
var wScroll = $(window).scrollTop();
console.log("wScroll-"+wScroll)
  $('.rr_parallax--bg').css('background-position', 'center ' + (wScroll*0.96)+'px');
}

function openCurtainEffect(family) {
  $(".cover-left").css("left","-50%");
  $(".cover-right").css("right","-50%");
  if(family==="bridesmaides"){
    $(".bridesmaidesFamily").removeClass("hide");
    //$("#groomsmen").addClass("hide");
  }else{
    $(".groomsmenFamily").removeClass("hide");
    //$("#rr_navigation").addClass("hide");
  }
}

function closeFamily(family) {
  $(".cover-left").css("left","0px");
  $(".cover-right").css("right","0px");
  if(family==="bridesmaides"){
    $(".bridesmaidesFamily").addClass("hide");
  }else{
    $(".groomsmenFamily").addClass("hide");
  }
}