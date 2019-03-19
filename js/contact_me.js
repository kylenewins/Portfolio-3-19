$(function() {

  // $("#contactForm input,#contactForm textarea").jqBootstrapValidation({
  //   preventSubmit: true,
  //   submitError: function($form, event, errors) {
  //     // additional error messages or events
  //   },
  //   submitSuccess: function($form, event) {
  //     event.preventDefault(); // prevent default submit behaviour
  //     // get values from FORM
  //     var name = $("input#name").val();
  //     var email = $("input#email").val();
  //     var phone = $("input#phone").val();
  //     var message = $("textarea#message").val();
  //     var firstName = name; // For Success/Failure Message
  //     // Check for white space in name for Success/Fail message
  //     if (firstName.indexOf(' ') >= 0) {
  //       firstName = name.split(' ').slice(0, -1).join(' ');
  //     }
  //     $this = $("#sendMessageButton");
  //     $this.prop("disabled", true); // Disable submit button until AJAX call is complete to prevent duplicate messages
  //     $.ajax({
  //       url: "././mail/contact_me.php",
  //       type: "POST",
  //       data: {
  //         name: name,
  //         phone: phone,
  //         email: email,
  //         message: message
  //       },
  //       cache: false,
  //       success: function() {
  //         // Success message
  //         $('#success').html("<div class='alert alert-success'>");
  //         $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
  //           .append("</button>");
  //         $('#success > .alert-success')
  //           .append("<strong>Your message has been sent. </strong>");
  //         $('#success > .alert-success')
  //           .append('</div>');
  //         //clear all fields
  //         $('#contactForm').trigger("reset");
  //       },
  //       error: function() {
  //         // Fail message
  //         $('#success').html("<div class='alert alert-danger'>");
  //         $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
  //           .append("</button>");
  //         $('#success > .alert-danger').append($("<strong>").text("Sorry " + firstName + ", it seems that my mail server is not responding. Please try again later!"));
  //         $('#success > .alert-danger').append('</div>');
  //         //clear all fields
  //         $('#contactForm').trigger("reset");
  //       },
  //       complete: function() {
  //         setTimeout(function() {
  //           $this.prop("disabled", false); // Re-enable submit button when AJAX call is complete
  //         }, 1000);
  //       }
  //     });
  //   },
  //   filter: function() {
  //     return $(this).is(":visible");
  //   },
  // });

  // $("a[data-toggle=\"tab\"]").click(function(e) {
  //   e.preventDefault();
  //   $(this).tab("show");
  // });
  var mailgun = require("mailgun-js");
  var api_key = '6a1d089557850e574f5dbc4bbc3ba853-985b58f4-8dfb2153';
  var DOMAIN = 'sandbox0ded74ca72344a4f8f3903d02864effc.mailgun.org';
  var mailgun = require('mailgun-js')({apiKey: api_key, domain: DOMAIN});
  
  
  $("#sendMessageButton").on("click", function(event){
  event.preventDefault()
  
  var data = {
      from: 'Mailgun Sandbox <postmaster@sandbox0ded74ca72344a4f8f3903d02864effc.mailgun.org>',
      to: 'Kyle Newins <kylenewins@gmail.com>',
      subject: 'Hello Kyle Newins',
      text: 'Congratulations Kyle Newins, you just sent an email with Mailgun!  You are truly awesome!'
    };
    
    mailgun.messages().send(data, function (error, body) {
      console.log(body);
    });
  
  })
});

/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
  $('#success').html('');
});
