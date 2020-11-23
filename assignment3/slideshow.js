

// Application #2 - Slide Show Application
var imagearray = ["img/11.jpg","img/12.jpg","img/13.jpg","img/14.jpg","img/15.jpg","img/16.jpg","img/17.jpg","img/18.jpg","img/19.jpg","img/20.jpg","img/21.jpg"];

var count=0;
var myFlag;
function start()
{

if (count == imagearray.length)
{
 count=0;
}

document.images[0].src= imagearray[count];
document.images[0].style.width="800px";
document.images[0].style.height="500px";
count++;
myFlag = setTimeout(start, 500)
}

function stop()
{
	clearTimeout(myFlag)
}
