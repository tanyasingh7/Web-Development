$(document).ready(function(){
	$('#button1').on('click',function(){
    $("#special").css("color", "green");
    $(".highlight").css("background-color", "yellow");
    $("p").css("background-color", "black");
    $("p").css("color", "white");
    $("p").css("font-size", "6px");
    var loop = function(){
      $("p").each(function(){
        alert($(this).text())

        });
};
setTimeout(loop, 150);
//used setTimeout so that the style changes before the alerts appear

  });

  $('#button2').on('click',function(){
    $("#special").css("color", "black");
    $(".highlight").css("background-color", "#429CB4");
    $("p").css("background-color", "#429CB4");
    $("p").css("color", "black");
    $("p").css("font-size", "16px");

});
});
