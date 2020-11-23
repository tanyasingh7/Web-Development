// Application #1 - Random Image Application
window.onload = randimage;

function randimage(){
var imga = new Array("img/1.jpg","img/2.jpg","img/3.jpg","img/4.png","img/5.png","img/6.jpg","img/7.jpeg","img/8.jpeg");
var randnum = Math.floor(Math.random() * imga.length);
document.images[0].src= imga[randnum];
}

var imagearray = ["img/11.jpg","img/12.jpg","img/13.jpg","img/14.jpg","img/15.jpg","img/16.jpg","img/17.jpg","img/18.jpg","img/19.jpg","img/20.jpg","img/21.jpg"];
