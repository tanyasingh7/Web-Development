// Application #1 - Random Image Application
window.onload = randimage;

function randimage(){
var imga = new Array("img/1.jpg","img/2.jpg","img/3.jpg","img/4.png","img/5.png","img/6.jpg","img/7.jpeg","img/8.jpeg");
var randnum = Math.floor(Math.random() * imga.length);
document.images[0].src= imga[randnum];
}

var imagearray = ["img/11.jpg","img/12.jpg","img/13.jpg","img/14.jpg","img/15.jpg","img/16.jpg","img/17.jpg","img/18.jpg","img/19.jpg","img/20.jpg","img/21.jpg"];

// Application #2 - Slide Show Application
var count=0;
var myFlag;
function start()
{

if (count == imagearray.length)
{
 count=0;
}

document.images[1].src= imagearray[count];
document.images[1].style.width="800px";
document.images[1].style.height="500px";
count++;
myFlag = setTimeout(start, 500)
}

function stop()
{
	clearTimeout(myFlag)
}


var imgArray = new Array();

imgArray[0] = new Image();
imgArray[0].src = 'img/dice_1.gif';

imgArray[1] = new Image();
imgArray[1].src = 'img/dice_2.gif';

imgArray[2] = new Image();
imgArray[2].src = 'img/dice_3.gif';

imgArray[3] = new Image();
imgArray[3].src = 'img/dice_4.gif';

imgArray[4] = new Image();
imgArray[4].src = 'img/dice_5.gif';

imgArray[5] = new Image();
imgArray[5].src = 'img/dice_6.gif';

// Application #3 - Simple Crap Game (Dice game based on luck)

function crap() {
  var bet=document.getElementById('dice').value;
  var dice1 = Math.floor(Math.random() * 6) + 1;
  var dice2 = Math.floor(Math.random() * 6) + 1;
  var total=dice1+dice2;
  document.images[2].src="img/dice_" + dice1 + ".gif";
  document.images[3].src="img/dice_" + dice2 + ".gif";
  if (total==7 || total == 11){
    document.getElementById("result").innerHTML = "You Won!";
  }
  else if(total == 3 || total ==2 || total == 12){
  document.getElementById("result").innerHTML = "Sorry! Not only did you lose the game, but you also lost your bet! You lost $"+bet;
} else{
  document.getElementById("result").innerHTML='Roll again!'
}
}

//Application #4 - NYU Holiday Calendar Application
function calendar(){
  var dateobj=document.getElementById('calendar').value;
  var dateobj= new Date(dateobj);
  var month = dateobj.getMonth() + 1;
  var year = dateobj.getFullYear();
  var day = dateobj.getDate()+1;
  console.log(month);
  console.log(year);
  console.log(day);
var montharray = ['January','February','March','April','May','June','July','August','September','October','November','December'];
var month1 = dateobj.getMonth();
if(month1 ==0){
  month1 = montharray[0];
  console.log(month1);
}
else if(month1 ==1){
  month1 = montharray[1];
  console.log(month1);
}
else if(month1 ==2){
  month1 = montharray[2];
  console.log(month1);
}
else if(month1 ==3){
  month1 = montharray[3];
  console.log(month1);
}
else if(month1 ==4){
  month1 = montharray[4];
  console.log(month1);
}
else if(month1 ==5){
  month1 = montharray[5];
  console.log(month1);
}
else if(month1 ==6){
  month1 = montharray[6];
  console.log(month1);
}
else if(month1 ==7){
  month1 = montharray[7];
  console.log(month1);
}
else if(month1 ==8){
  month1 = montharray[8];
  console.log(month1);
}
else if(month1 ==9){
  month1 = montharray[9];
  console.log(month1);
}
else if(month1 ==10){
  month1 = montharray[10];
  console.log(month1);
}
else if(month1 ==11){
  month1 = montharray[11];
  console.log(month1);
}
else if(month1 ==12){
  month1 = montharray[12];
  console.log(month1);
}

if (year > 2020 || year < 2019){
  document.getElementById('output').innerHTML = month1+" "+day+", "+year+" falls outside the range of dates for which data is available.";
}
else if (year==2019 && month>=1 && month<=8){
    document.getElementById('output').innerHTML = month1+" "+day+", "+year+" falls outside the range of dates for which data is available.";
}
else if(year==2020 && month>8){
    document.getElementById('output').innerHTML = month1+" "+day+", "+year+" falls outside the range of dates for which data is available.";
}
else if(month<9 && year==2019){
    document.getElementById('output').innerHTML = month1+" "+day+", "+year+" falls outside the range of dates for which data is available.";
    }
    else{
      console.log('valid');
      if(month>8 && year==2020){
        document.getElementById('output').innerHTML = month1+" "+day+", "+year+" falls outside the range of dates for which data is available.";
      }
      else {
        console.log('valid');
      }
        if(month==9){
          if(day==2){
          document.getElementById('output').innerHTML = "September 2, 2019 is Labor Day. This is an NYU Holiday. No Classes Scheduled.";
          document.images[4].src="img/laborday.jpg";
          document.getElementById('output2').innerHTML = "[Image obtained from https://www.grammarly.com/blog/why-do-we-call-it-labor-day/]"
          }
          else{
            document.getElementById('output').innerHTML = month1+" "+day+", "+year+" is not a school holiday at NYU.";
          }
        }
        else if(month==10){
            if(day==14){
            document.getElementById('output').innerHTML = "October 14, 2019 is Fall Recess. This is an NYU Holiday. No classes scheduled.";
            document.images[4].src="img/fallrecess.jpg";
            document.getElementById('output2').innerHTML = "[Image obtained from https://www.swedesboro-woolwich.com/site/default.aspx?PageType=3&ModuleInstanceID=5611&ViewID=7b97f7ed-8e5e-4120-848f-a8b4987d588f&RenderLoc=0&FlexDataID=10845&PageID=1]"
          }
          else{
            document.getElementById('output').innerHTML = month1+" "+day+", "+year+" is not a school holiday at NYU."
          }
        }
        else if(month==11){
          if(day==27){
            document.getElementById('output').innerHTML = "November 27, 2019 is Thanksgiving Recess. No Classes Scheduled.";
            document.images[4].src="img/thanksgiving.jpg";
            document.getElementById('output2').innerHTML = "[Image obtained from https://www.theholidayspot.com/thanksgiving/]"
          }
          else if(day == 28 || day == 29){
            document.getElementById('output').innerHTML = "November "+day+", 2019 is Thanksgiving Recess. This is an NYU Holiday. No Classes Scheduled. ";
            document.images[4].src="img/thanksgiving.jpg";
            document.getElementById('output2').innerHTML = "[Image obtained from https://www.theholidayspot.com/thanksgiving/]"
          }
          else {
            document.getElementById('output').innerHTML = month1+" "+day+", "+year+" is not a school holiday at NYU."
          }
        }
        else if(month==12){
          if(day>20 && day<32){
            document.getElementById('output').innerHTML = "December "+day+ ", 2019 is Winter Recess. This is an NYU Holiday. No Classes Scheduled";
            document.images[4].src="img/winter.png";
            document.getElementById('output2').innerHTML = "[Image obtained from https://www.smoothusa.com/2018/12/21/winter-recess-has-begun/]"
          }
          else{
            document.getElementById('output').innerHTML = month1+" "+day+", "+year+" is not a school holiday at NYU."

          }
        }
        else if(month==1){
          if(day==1){
          document.getElementById('output').innerHTML = "January 1, 2019 is Winter Recess. This is an NYU Holiday. No Classes Scheduled.";
          document.images[4].src="img/winter.png";
          document.getElementById('output2').innerHTML = "[Image obtained from https://www.smoothusa.com/2018/12/21/winter-recess-has-begun/]"
        }
          else if(day>1 && day<6){
            document.getElementById('output').innerHTML = month1+" "+day+", "+year+" is Winter Recess. However, the University is open. No Classes Scheduled.";
            document.images[4].src="img/winter.png";
            document.getElementById('output2').innerHTML = "[Image obtained from https://www.smoothusa.com/2018/12/21/winter-recess-has-begun/]"
          }
          else if(day==20){
              document.getElementById('output').innerHTML = month1+" "+day+", "+year+" is Martin Luther King Day. This is an NYU Holiday. No Classes Scheduled.";
              document.images[4].src="img/mlk.jpg";
              document.getElementById('output2').innerHTML = "[Image obtained from https://wpde.com/news/local/martin-luther-king-jr-day-local-events]"
          }

          else{
              document.getElementById('output').innerHTML = month1+" "+day+", "+year+" is not a school holiday at NYU.";
          }
        }
        else if (month==2){
          if(day==17){
              document.getElementById('output').innerHTML = month1+" "+day+", "+year+ " is President's Day. This is an NYU Holiday. No Classes Scheduled.";
              document.images[4].src="img/presidents.jpeg";
              document.getElementById('output2').innerHTML = "[Image obtained from https://www.wflx.com/2019/02/18/heres-what-is-open-closed-presidents-day/]"

          }
          else{
              document.getElementById('output').innerHTML = month1+" "+day+", "+year+" is not a school holiday at NYU.";
          }
        }
        else if (month==3){
          if (day>15 && day<23){
              document.getElementById('output').innerHTML = month1+" "+day+", "+year+" is Spring Break. No Classes Scheduled.";
              document.images[4].src="img/spring.png";
              document.getElementById('output2').innerHTML = "[Image obtained from http://clipart-library.com/spring-break-cliparts.html]"

          }
          else{
            document.getElementById('output').innerHTML = month1+" "+day+", "+year+" is not a school holiday at NYU.";
          }

        }
        else if (month==4){
          document.getElementById('output').innerHTML = month1+" "+day+", "+year+" is not a school holiday at NYU.";
                }
        else if (month==5){
          if (day ==25){
            document.getElementById('output').innerHTML = month1+" "+day+", "+year+" is Memorial Day. This is an NYU holiday. No classes scheduled.";
            document.images[4].src="img/memorial.jpeg";
            document.getElementById('output2').innerHTML = "[Image obtained from http://mentalfloss.com/article/27858/10-things-remember-about-memorial-day]"

          }
          else{
            document.getElementById('output').innerHTML = month1+" "+day+", "+year+" is not a school holiday at NYU.";
          }
        }
        else if (month==6){
          document.getElementById('output').innerHTML = month1+" "+day+", "+year+" is not a school holiday at NYU.";
        }
        else if (month==7){
          if (day==3){
            document.getElementById('output').innerHTML = month1+" "+day+", "+year+" is the observance of Independence Day. This is an NYU holiday. No classes scheduled.";
            document.images[4].src="img/independence.jpg";
            document.getElementById('output2').innerHTML = "[Image obtained from https://kvoa.com/news/local-news/2019/07/04/list-of-4th-of-july-events/]"

          }
          else if (day==4){
            document.getElementById('output').innerHTML = month1+" "+day+", "+year+" is Independence Day.";
            document.images[4].src="img/independence.jpg";
            document.getElementById('output2').innerHTML = "[Image obtained from https://kvoa.com/news/local-news/2019/07/04/list-of-4th-of-july-events/]"

          }
          else{
            document.getElementById('output').innerHTML = month1+" "+day+", "+year+" is not a school holiday at NYU.";
          }
        }
        else if (month==8){
          document.getElementById('output').innerHTML = month1+" "+day+", "+year+" is not a school holiday at NYU.";
        }
        else{
          document.getElementById('output').innerHTML = month1+" "+day+", "+year+" is not a school holiday at NYU.";
        }
          }

          }














  //var holiday=[
// //[0,0][0,1]
// //month, date, year
// [9,[2],2019,'labor day'],
// //[1,0]
// [10,[14],2019]
// ]
// for(var i=0;i<holiday.length;i++){
//   if(mm==holiday[i][0] ) //check for month
//   if(holiday[i][1].includes(dd) ) // check for dates
