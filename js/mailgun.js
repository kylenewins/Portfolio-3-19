$(function(){
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
})
