$(document).ready(function() {

  $('header').hide().delay(500).fadeIn(700);
	$('nav').hide().delay(500).fadeIn(2500);

	$('.links').eq(2).on('click', function() {
		$('section').empty();
    $('links').empty();
    $('section').addClass('video');
		var $video = '<iframe width="560" height="315" src="https://www.youtube.com/embed/foi2y5D3amA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    $('section').html("<br><br>I wish this was me <br><br>"+$video);
	})

	$('.links').eq(1).on('click', function() {
		$('.links').removeClass('selected');
		$(this).addClass('selected');
		$('section').empty();
    $('links').empty();
    $('#button').empty();
    $('#more').empty();
    $('section').addClass('img');
		var $image = '<img src="me.png">';
	  $('section').html("<br><br> "+$image);



	})

	$('.links').eq(0).on('click', function() {
		$('.links').removeClass('selected');
		$(this).addClass('selected');
		$('section').empty();
    $('links').empty();
    $('section').addClass('text');
    var $p1 = 'Tanya Singh is a current sophomore at New York University. She is currently pursuing a major in Computer Science and a minor in both Web Programming and Cyber Security.'
    var $p2 = "Born and raised in Boston, Massachusetts, Tanya is a huge Boston sports fan Her favorite team being the Patriots. While Tanya loves New York City, Boston will always be her pride and joy."
    var $p3 = "Tanya has an unhealthy obsession for Spongebob Squarepants. No one knows where it was stemmed from, as her favorite show growing up was The Fairly Odd Parents and The Suite Life of Zack and Cody. She also enjoyed Arthur, Dragon Tales, The Berenstain Bears, and many others."
    var $p4 = "Tanya's current favorite shows include The Office, Revenge, Parks and Recreation, Shameless, and New Girl. She's basically just a basic, average teenaged girl. She's also clearly very narcissistic as she has made way too many of her Web Dev assignments about herself."
    var $p5 = "Tanya's favorite color is purple. Her favorite food is mashed potatoes. She loves to sleep and misses way too many classes!"
    var $p6 = " "
		$('section').html('<br><br>'+$p1+'<br>'+$p2+'<br><br><br>'+$p6);
    var r= $('<input type="button" value="Read More"/>');
    $("#button").append(r);
    });
    $("#button").on('click',function(){
      var $p3 = "Tanya has an unhealthy obsession for Spongebob Squarepants. No one knows where it was stemmed from, as her favorite show growing up was The Fairly Odd Parents and The Suite Life of Zack and Cody. She also enjoyed Arthur, Dragon Tales, The Berenstain Bears, and many others."
      var $p4 = "Tanya's current favorite shows include The Office, Revenge, Parks and Recreation, Shameless, and New Girl. She's basically just a basic, average teenaged girl. She's also clearly very narcissistic as she has made way too many of her Web Dev assignments about herself."
      var $p5 = "Tanya's favorite color is purple. Her favorite food is mashed potatoes. She also loves to sleep."
      var $img = '<img src="spongebob.png">';
       $('#more').html('<br><br><br>'+$p3+"<br>"+$p4+"<br>"+$p5+"<br><br>"+$img);
});
});
