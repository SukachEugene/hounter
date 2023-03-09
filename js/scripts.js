


// let headerHeight = document.getElementById("header").offsetHeight;
// let bannerMargin = document.getElementsByClassName("block-one-right-part-banner-container")[0].style.marginTop = "-"+headerHeight+"px";

// console.log(headerHeight);




// ----------- Sliders -----------

$('.slider-one').slick({
  slide: '.slider-one-element',
  slidesToShow: 3,
  arrows: false,
  dots: false,
  variableWidth: true,

  // centerMode: true,
  // infinite: false,

});




$('.slider-two').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  swipeToSlide: true,
  Infinity: true,
  variableWidth: true,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 3,
        variableWidth: false,
      },
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        variableWidth: false,
      },
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        variableWidth: false,
      }
    }
  ]
});

var filter_house = true;
var filter_villa = false;
var filter_apartment = false;

$('.slider-two').slick('slickFilter', '.house');

$('.filter-house').on('click', function () {
  if (filter_house === false) {
    $('.slider-two').slick('slickUnfilter');
    $('.slider-two').slick('slickFilter', '.house');

    filter_house = true;
    filter_villa = false;
    filter_apartment = false;

  } else {

    $('.slider-two').slick('slickUnfilter');
    filter_house = false;
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

  } else {
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


let slider_buttons = document.getElementsByClassName("slider-two-button");

for (i = 0; i < slider_buttons.length; i++) {
  slider_buttons[i].addEventListener('click', getStyleToSliderButtons, false);
}

let slider_buttons_nav = document.getElementsByClassName("slider-two-button-nav");

for (i = 0; i < slider_buttons_nav.length; i++) {
  slider_buttons_nav[i].addEventListener('click', getStyleToSliderArrows, false);
}

let buttons = document.getElementsByClassName("slaider-two-filters-icon-svg");
let arrows = document.getElementsByClassName("slaider-two-nav-arrows-icon-svg");



function getStyleToSliderButtons() {
  if (this.classList.contains("slider-two-button")) {

    if (this.classList.contains("active")) {
      this.classList.remove('active');
      this.querySelector('.active').classList.remove('active');

    } else {
      elements = document.querySelectorAll('.active');
      // console.log(elements);
      elements.forEach((element) => {
        element.classList.remove('active');
      });

      this.classList.add('active');
      this.querySelector('.slaider-two-filters-icon-svg').classList.add('active');
    }
  }

}

function getStyleToSliderArrows() {
  if (this.classList.contains("slider-two-button-nav")) {

    if (!this.classList.contains("active")) {

      for (i = 0; i < slider_buttons_nav.length; i++) {
        slider_buttons_nav[i].classList.remove('active');
      }

      for (i = 0; i < arrows.length; i++) {
        arrows[i].classList.remove('active');
      }

      this.classList.add('active');
      this.querySelector('.slaider-two-nav-arrows-icon-svg').classList.add('active');
    }
  }
}



$('.slider-four').slick({
  variableWidth: true,
  centerMode: true,
  infinite: true,
  slidesToShow: 3,
  centerPadding: '8vw',
  initialSlide: 2,
  dots: true,

  responsive: [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
        variableWidth: false,
      }
    }
  ]
});




// ----------- Video -----------


window.document.onkeydown = function (e) {

  if (e.keyCode == 27) {
    popup_close();
  }
}

function popup_open() {
  var lightBoxVideo = document.getElementById("housetour-video");
  // window.scrollTo(0, 0);
  document.getElementById('popup-container').style.display = 'block';
  document.getElementById('fade').style.display = 'block';
  lightBoxVideo.play();
}

function popup_close() {
  var lightBoxVideo = document.getElementById("housetour-video");
  document.getElementById('popup-container').style.display = 'none';
  document.getElementById('fade').style.display = 'none';
  lightBoxVideo.pause();
}







// ----------- Subscribe form -----------

// localStorage.clear();

let subscribeForm = document.getElementById('subscribe-form');
subscribeForm.addEventListener('submit', subscribeMail);

function subscribeMail(e) {
  e.preventDefault();
  let email = document.getElementById("email").value;
  if (email != '') {
    localStorage.setItem('subscribed-email', email);
  }
}



function checkIfEmailStorageIsEmpty() {
  return localStorage.getItem('subscribed-email') == null;
}



let emailForm = document.getElementById('subscribe-form');
let emailAdress = document.getElementById('subscribed-email-container');

emailForm.addEventListener('submit', (event) => {
  if (!checkIfEmailStorageIsEmpty()) {

    emailForm.style.display = 'none';

    let text = document.getElementById('block-six-heder');
    text.innerHTML = 'Thanks for your subscribe!';

    let email = document.getElementById('subscribed-email');
    email.innerHTML = localStorage.getItem('subscribed-email');

    emailAdress.style.display = 'block';
  }
});



window.addEventListener('DOMContentLoaded', checkSubscribed);

function checkSubscribed() {

  if (!checkIfEmailStorageIsEmpty()) {

    console.log(checkIfEmailStorageIsEmpty());
    console.log(localStorage.getItem('subscribed-email'));

    emailForm.style.display = 'none';

    let text = document.getElementById('block-six-heder');
    text.innerHTML = 'Thanks for your subscribe!';

    let email = document.getElementById('subscribed-email');
    email.innerHTML = localStorage.getItem('subscribed-email');

    emailAdress.style.display = 'block';
  }
}



// ----------- Burger menu -----------

function menuSwitch() {
  let links = document.getElementById('main-nav-links');
  let openButton = document.getElementById('open-main-nav');
  let closeButton = document.getElementById('close-main-nav');
  
  if (links.className === 'show') {
    links.className = 'hide';
    openButton.className = 'show';
    closeButton.className = 'hide';
  } else {
    links.className = 'show';
    openButton.className = 'hide';
    closeButton.className = 'show';
  }
}





// let color_spot_element = document.getElementById('color-spot-element');

// function clearSelection() {
//   if(dcolor_sp .selection && document.selection.empty) {
//       document.selection.empty();
//   } else if(window.getSelection) {
//       var sel = window.getSelection();
//       sel.removeAllRanges();
//   }
// }