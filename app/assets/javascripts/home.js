$(document).ready(function(){
  "use strict";

  $('[data-toggle="tooltip"]').tooltip();

  $('.page-scroll a').bind('click', function(event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
          scrollTop: ($($anchor.attr('href')).offset().top - 50)
      }, 1250, 'easeInOutExpo');
      event.preventDefault();
  });

  $('body').scrollspy({
      target: '.navbar-fixed-top',
      offset: 51
  });

  $('.navbar-collapse ul li a').click(function(){
          $('.navbar-toggle:visible').click();
  });

  $('#mainNav').affix({
      offset: {
          top: 100
      }
  })

  $(function() {
      $("body").on("input propertychange", ".floating-label-form-group", function(e) {
          $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
      }).on("focus", ".floating-label-form-group", function() {
          $(this).addClass("floating-label-form-group-with-focus");
      }).on("blur", ".floating-label-form-group", function() {
          $(this).removeClass("floating-label-form-group-with-focus");
      });
  });



  $(function() {

      $("a[data-toggle=\"tab\"]").click(function(e) {
          e.preventDefault();
          $(this).tab("show");
      });
  });

  // When clicking on Full hide fail/success boxes
  $('#name').focus(function() {
      $('#success').html('');
  });

  // Validar email
  $("#email").on("input", function(){
    var email = $("#email").val();
    var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (!filter.test(email)) {
      $(this).css('color', 'red');
    } else {
      $(this).css('color', '#555555');
      $(".invalid-email").empty();
    }
  });

  $('#submit-contact').click(function() {
    var email = $("#email").val();
    var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (!filter.test(email)) {
      alert("Debes ingresar un correo electrónico válido")
    }
  });

});
