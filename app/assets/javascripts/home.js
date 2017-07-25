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
    }
  });

  // $('#submit-contact').click(function() {
  //   var email = $("#contact-email").val();
  //   var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
  //   if (!filter.test(email)) {
  //     alert("Debes ingresar un correo electrónico válido")
  //   } else {
  //
  //   }
  // });




  $(function() {

    $("#contactForm input,#contactForm textarea").jqBootstrapValidation({
      preventSubmit: true,
      submitError: function($form, event, errors) {
        $('#success').html("");
      },
      submitSuccess: function($form, event) {
        // Prevent spam click and default submit behaviour
        $("#btnSubmit").attr("disabled", true);
        $("#btnSubmit").html("<div class='loader'></div>");
        event.preventDefault();

        // get values from FORM
        var name = $("input#name").val();
        var email = $("input#email").val();
        var phone = $("input#phone").val();
        var message = $("textarea#message").val();
        var firstName = name; // For Success/Failure Message
        // Check for white space in name for Success/Fail message
        if (firstName.indexOf(' ') >= 0) {
          firstName = name.split(' ')[0];
        }

        var request_url = $form.attr('data-url');
        $.ajax({
          url: request_url,
          type: "POST",
          data: {
            name: name,
            phone: phone,
            email: email,
            message: message
          },
          cache: false,
          success: function() {
            // Enable button & show success message
            $("#btnSubmit").attr("disabled", false);
            $("#btnSubmit").html("Enviar");
            $('#success').html("<div class='alert alert-success'>");
            $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
            .append("</button>");
            $('#success > .alert-success')
            .append("<strong>Tu mensaje fue enviado exitosamente. </strong>");
            $('#success > .alert-success')
            .append('</div>');

            //clear all fields
            $('#contactForm').trigger("reset");
          },
          error: function() {
            // Fail message
            $('#success').html("<div class='alert alert-danger'>");
            $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
            .append("</button>");
            $('#success > .alert-danger').append("<strong>Perdón " + firstName + ", en estos momentos mi servidor de correo no está respondiendo. Por favor inténtalo de nuevo más tarde o escríbeme un correo a sedelacerda@uc.cl");
            $('#success > .alert-danger').append('</div>');
            //clear all fields
            $('#contactForm').trigger("reset");
          },
        });
      },
      filter: function() {
        return $(this).is(":visible");
      },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
      e.preventDefault();
      $(this).tab("show");
    });
  });

  // When clicking on Full hide fail/success boxes
  $('#name').focus(function() {
    $('#success').html('');
  });

});
