$(document).ready(function() {

  $("#header").hide().delay(500).fadeIn(4000);
  $("#bottom").hide().delay(500).fadeIn(6000);
  $("#registerform").hide();
  $("#loginform").hide();
  $("#main").hide();
  $("#menu2").hide();


  $("#newbutton").click(function(){
    $("#registerform").show();
    $("#loginform").hide();
    $("#mid").hide();
    $("#main").show();
  });

  $("#loginbutton").click(function(){
    $("#loginform").show();
    $("#registerform").hide();
    $("#mid").hide();
    $("#main").show();
  });

$("#r").click(function(){
  $("#registerform").show();
  $("#loginform").hide();
});
$("#l").click(function(){
  $("#registerform").hide();
  $("#loginform").show();
});

});
