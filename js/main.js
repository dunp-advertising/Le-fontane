// initialize jQuery plugins
$(window).load(function() {
  

  // flexslider
  $('.flexslider').flexslider({
    animation: "slide"
  }); 


  // css3pie
  if (window.PIE) {
    $('.container-header-social .fa').each(function() {
      PIE.attach(this);
    });
  }


  // dropdown toggle on hover
  $('.dropdown-toggle').dropdownHover();




  // jquery-placeholder polyfill
  $('input, textarea').placeholder();


  $( ".datepicker" ).datepicker();

});
