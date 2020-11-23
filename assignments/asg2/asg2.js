var prizes
var text
var i
var length

// Change Style - DONE
function changeColor (color) {
  document.body.style.background= color;
}

function changeStyle() {
  document.getElementById("Header").innerHTML = "Party Mode!";
  document.getElementById("Header").style.fontSize='72px';
  document.getElementById("Header").style.fontFamily = "Bangers, cursive";
  document.getElementById("Header").style.color = 'Yellow';
  changeColor('#ff0dbf');
}

//Random Prize

function randarray() {

var prizes = ["- Lollipop","- Cookie", "- Chocolate Bar","- Cupcake","- Brownie"];
var text = ("You could win a..."+"<br>"+"<br>")
var i;
for (i = 0; i < prizes.length; i++)
  text += prizes[i] + "<br>";

document.getElementById("option").innerHTML = text;
var randomPrize = prizes[Math.floor(Math.random()*prizes.length)];
console.log(randomPrize);
//document.getElementbyId("prize").innerHTML += randomPrize;
document.getElementById("prize").innerHTML="<br>"+"You won a " +randomPrize.substring(2)+"!!!!!";
}

//Swap Paragraph - DONE
function swapT() {
  var p1obj = document.getElementById("p1");
  var p2obj = document.getElementById("p2");
  var temp = p1obj.innerHTML;
  p1obj.innerHTML = p2obj.innerHTML;
  p2obj.innerHTML = temp;

}
//Swap Image

function swapImg() {
  var img1obj = document.getElementById("img1");
  var img2obj = document.getElementById("img2");
  var temp=img1obj.src;
  img1obj.src=img2obj.src;
  img2obj.src=temp;
}

// New Document

function newDoc() {
  var img3Width = document.getElementById("img3").style.width;
  var img3Height = document.getElementById("img3").style.height;
  var text="Image Properties"+"<br>"+"<br>"+"Width: "+img3Width+"<br>"+"Height: "+img3Height;
  var d=new Date();
  var day=d.getDay();
  console.log(day);
  var dayArray=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
  var dow = dayArray[day]
  console.log(dow);
  var date=d.getDate();
  console.log(date);
  var month=d.getMonth();
  var monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var fullMonth = monthArray[month]
  console.log(fullMonth);
  var year=d.getFullYear();
  var fullDate = "Today is:"+"<br>"+dow+", "+fullMonth+" "+date+", "+year
  console.log(year);
  console.log(img3Width);
  console.log(img3Height);
  document.open()
    document.write("<DOCTYPE><html><head><link rel='stylesheet' type='text/css' href='style.css'></head><body><p>"+fullDate+"</p><h2>Spongebob Squarepants</h2><p><img src='img/source.gif'></p><p>"+text+"</p> <p> A square yellow sponge named SpongeBob SquarePants lives in a pineapple with his pet snail, Gary, in the city of Bikini Bottom on the floor of the Pacific Ocean. He works as a fry cook at the Krusty Krab. During his time off, SpongeBob has a knack for attracting trouble with his starfish best friend, Patrick. Arrogant octopus Squidward Tentacles, SpongeBob's neighbor, dislikes SpongeBob because of his childlike behavior. </p> </body></html>")
    document.close();
}

function convert() {
  var temp1 = document.getElementById('convert').value;
  var temp2 = (((temp1-32)*5)/9);
  console.log(temp2)
var text = document.getElementById('value');

text.value=temp2;
}


//Converter
