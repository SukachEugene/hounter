
$(document).ready(function () {
  $('.slider-one').slick({
    slide: '.slider-one-element',
    slidesToShow: 3,
    arrows: false,
    dots: false,
    infinite: true,
    variableWidth: true,

  });

});









$('.slider-two').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  swipeToSlide: true,
  Infinity: true,
  variableWidth: true,
  initialSlide: 0,
});

var filter_house = true;
var filter_villa = false;
var filter_apartment = false;

// let house_svg = document.getElementById("filter-house");
// let villa_svg = document.getElementById("filter-villa");
// let apartment_svg = document.getElementById("filter-apartment");


$('.slider-two').slick('slickFilter', '.house');

$('.filter-house').on('click', function () {
  if (filter_house === false) {
    $('.slider-two').slick('slickUnfilter');
    $('.slider-two').slick('slickFilter', '.house');

    filter_house = true;
    filter_villa = false;
    filter_apartment = false;

    // house_svg.classList.add('active')

  }
  else {
    $('.slider-two').slick('slickUnfilter');
    filter_house = false;

    // house_svg.classList.remove('active')
  }
});

$('.filter-villa').on('click', function () {
  if (filter_villa === false) {
    $('.slider-two').slick('slickUnfilter');
    $('.slider-two').slick('slickFilter', '.villa');

    filter_villa = true;
    filter_house = false;
    filter_apartment = false;

  }
  else {
    $('.slider-two').slick('slickUnfilter');
    filter_villa = false;
  }
});

$('.filter-apartment').on('click', function () {
  if (filter_apartment === false) {
    $('.slider-two').slick('slickUnfilter');
    $('.slider-two').slick('slickFilter', '.apartment');

    filter_apartment = true;
    filter_villa = false;
    filter_house = false;

  }
  else {
    $('.slider-two').slick('slickUnfilter');
    filter_apartment = false;
  }
});


$('.right-scroll-button').on('click', function () {
  $('.slider-two').slick('slickNext');
});

$('.left-scroll-button').on('click', function () {
  $('.slider-two').slick('slickPrev');
});


let buttons = document.getElementsByClassName("slaider-two-filters-icon-svg");

window.onclick = e => {
  if (e.target.classList.contains("slider-two-button")) {
    
    if (e.target.classList.contains("active")) {
      e.target.classList.remove('active');
      e.target.querySelector('.active').classList.remove('active');
    } else {

      elements = document.querySelectorAll('.active');
      console.log(elements);
      elements.forEach((element) => {
        element.classList.remove('active');
      });

      e.target.classList.add('active');
      e.target.querySelector('.slaider-two-filters-icon-svg').classList.add('active');
    }
  } else if (e.target.classList.contains("slider-two-button-nav")) {

    if (!e.target.classList.contains("active")) {

      elements = document.querySelectorAll('.active');
      console.log(elements);
      elements.forEach((element) => {
        element.classList.remove('active');
      });

      e.target.classList.add('active');
      e.target.querySelector('.slaider-two-nav-arrows-icon-svg').classList.add('active');
    }
  } else if (e.target.classList.contains("slaider-two-nav-arrows-icon-svg")) {
    console.log ('AAA');
  }


}




// var filter_house = true;
// var filter_villa= false;
// var filter_apartment = false;

// const house_button = document.getElementById('filter-house');
// const villa_button = document.getElementById('filter-villa');
// const apartment_button = document.getElementById('filter-apartment');

// $('.slider-two').slick('slickFilter','.house');
// house_button.className = "red";
// villa_button.className = "blue";
// apartment_button.className = "blue";


// $('.filter-house').on('click', function(){
//   if (filter_house === false) {
//     $('.slider-two').slick('slickUnfilter');
//     $('.slider-two').slick('slickFilter','.house');

//     filter_house = true;
//     filter_villa= false;
//     filter_apartment = false;

//     house_button.className = "red";
//     villa_button.className = "blue";
//     apartment_button.className = "blue";

//   } 
//   else {
//     $('.slider-two').slick('slickUnfilter');
//     filter_house = false;
//     house_button.className = "red";
//   }
// });

// $('.filter-villa').on('click', function(){
//   if (filter_villa === false) {
//     console.log('2-1');
//     $('.slider-two').slick('slickUnfilter');
//     $('.slider-two').slick('slickFilter','.villa');
//     ffilter_villa = true;
//     filter_house= false;
//     filter_apartment = false;

//   } else {
//     console.log('2-2');
//     $('.slider-two').slick('slickUnfilter');
//     filter_villa = false;
//   }
// });

// $('.filter-apartment').on('click', function(){
//   if (filter_apartment === false) {
//     console.log('3-1');
//     $('.slider-two').slick('slickUnfilter');
//     $('.slider-two').slick('slickFilter','apartment');
//     filter_apartment = true;
//   } else {
//     console.log('3-2');
//     $('.slider-two').slick('slickUnfilter');
//     filter_apartment = false;
//   }
// });






$('.slider-four').slick({
  variableWidth: true,
  centerMode: true,
  infinite: true,
  slidesToShow: 3,
  centerPadding: '8vw',
  initialSlide: 2,
  dots: true,
});





  // $('.slider-test').slick({
  //   variableWidth: true,
  //   centerMode: true,
  //   infinite: false,
  //   slidesToShow: 3,
  //   centerPadding: '8vw',
  //   initialSlide: 1,
  //   dots: true,
  // });
