
$(document).ready(function(){
    $('.slider-one').slick({
      slide: '.slider-one-element',
      slidesToShow: 2.5,
        arrows: false,
        dots: false,
        infinite: false,
        variableWidth: true,

    });
 
  });






  $('.slider-two').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    Infinity: false,
  });
  
  var filter_house = true;
  var filter_villa= false;
  var filter_apartment = false;
  
  $('.filter-house').on('click', function(){
    if (filter_house === false) {
      $('.slider-two').slick('slickFilter',':even');
    //   $(this).text('Unfilter Slides');
      ffilter_house = true;
    } else {
      $('.slider-two').slick('slickUnfilter');
    //   $(this).text('Filter Slides');
      filter_house = false;
    }
  });

  $('.filter-villa').on('click', function(){
    if (filter_villa === false) {
      $('.slider-two').slick('slickFilter',':even');
      ffilter_villa = true;
    } else {
      $('.slider-two').slick('slickUnfilter');
      filter_villa = false;
    }
  });






  $('.slider-four').slick({
    centerMode: true,
    infinite: false,
    // centerPadding: '10%',
    initialSlide: 1,
 
    slidesToShow: 3,
    dots: true,
  });
          

  $('.slider-test').slick({
    centerMode: true,
    infinite: false,
    slidesToShow: 3,
    dots: true,
    arrows: false,
  });
      