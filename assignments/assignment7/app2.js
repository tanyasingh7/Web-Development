var obj= document.forms[1];
obj.addEventListener("submit", function(e)
{
  var len = obj.elements.length;
for (var i=0; i < len -2; i++){
    if ((obj.elements[i].value == "") || (obj.elements[i].value == null))
     {
      if (i>18 && i!=23 && i!=29){
       alert("ERROR: Make sure to input " + receiptelements[i]);
       obj.elements[i].focus();
       obj.elements[i].select();
       obj.elements[i].style.backgroundColor="red";
       e.preventDefault();
       return;
     }

      }
else if ((i == 28 ) && (obj.elements[i].value.length != 5)  )
{

alert("Make sure to input 5 digits for " + receiptelements[i]);
obj.elements[i].focus();
obj.elements[i].select();
obj.elements[i].style.backgroundColor="red";
e.preventDefault();
return;
}
else if(i==28){
for(var j=0;j<5;j++){
 var zip = obj.elements[i].value;
 if (isNaN(zip[j])){
   alert("Make sure zipcode only contains digits (0-9)");
   bj.elements[i].focus();
   obj.elements[i].select();
   obj.elements[i].style.backgroundColor="red";
   e.preventDefault();
   return;
 }
}
}

else if ((i == 22 ) && (obj.elements[i].value.indexOf("@") == -1)  )
{

alert("ERROR: Your email should include a '@' ");
obj.elements[i].focus();
obj.elements[i].select();
obj.elements[i].style.backgroundColor="red";
e.preventDefault();
return;
}
else if ((i == 22 ) && (obj.elements[i].value.indexOf(".") == -1)  )
{

alert("ERROR: Your email should include a period.");
obj.elements[i].focus();
obj.elements[i].select();
obj.elements[i].style.backgroundColor="red";
e.preventDefault();
return;
}
else if ((i==31) && (obj.elements[i].value.length != 16))
{
alert("ERROR: Invalid credit card number. Credit card number must be 16 digits. Do not include any dashes or spaces.");
obj.elements[i].focus();
obj.elements[i].select();
obj.elements[i].style.backgroundColor="red";
e.preventDefault();
return;
}
else if (shippingbool == false){
alert("Please select a shipping method!");
obj.elements[12].focus();
obj.elements[12].style.backgroundColor="red";
e.preventDefault();
return;
}

else
{
document.getElementById('receipt_header').innerHTML= "Receipt"
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
 var fullDate = dow+", "+fullMonth+" "+date+", "+year;
 console.log(year);
var firstname = obj.elements[19].value;
var lastname = obj.elements[20].value;
var phonenumber = obj.elements[21].value;
var email = obj.elements[22].value;
var address = obj.elements[24].value;
var city = obj.elements[25].value;
var country = obj.elements[26].value;
var state = obj.elements[27].value;
var zipcode = obj.elements[28].value;
var ccname = obj.elements[30].value;
var ccnumber = obj.elements[31].value;
var cclastfour = ccnumber.substring(ccnumber.length-4);
console.log('last four:',cclastfour);
var ccdate = obj.elements[32].value;
var cccode = obj.elements[33].value;

}
}
})

document.getElementById("receipt_header").innerHTML= "Order Confirmation";
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
 var fullDate = dow+", "+fullMonth+" "+date+", "+year;
 console.log(year);
document.getElementById("date").innerHTML= fullDate;
document.getElementById("billheader").innerHTML= "Billed To: ";
document.getElementById("rname").innerHTML= (lastname+", "+firstname);
document.getElementById("raddress").innerHTML= (address);
document.getElementById("rsecondaddress").innerHTML= (city+', '+state+' '+zipcode);
document.getElementById("rcountry").innerHTML= (country);
document.getElementById("purchasedheader").innerHTML= "Items Purchased: ";
if (hoodiequantity!=0){
document.getElementById("rhoodie").innerHTML= "["+hoodiequantity+"]"+"    "+hoodiename+"    "+"-"+"$"+hoodiesubtotal;
document.getElementById("rhoodiesize").innerHTML=("Size: "+hoodiesize);

}
if (tshirtquantity!=0){
document.getElementById("rtshirt").innerHTML= "["+tshirtquantity+"]"+"    "+tshirtname+"    "+"-"+"$"+tshirtsubtotal;
document.getElementById("rtshirtsize").innerHTML=("Size: "+tshirtsize);

}
if (longsleevequantity!=0){
document.getElementById("rlongsleeve").innerHTML= "["+longsleevequantity+"]"+"    "+longsleevename+"    "+"-"+"$"+longsleevesubtotal;
document.getElementById("rlongsleevesize").innerHTML=("Size: "+longsleevesize);
}
if (mugquantity!=0){
document.getElementById("rmug").innerHTML= "["+mugquantity+"]"+"    "+mugname+"    "+"-"+"$"+mugsubtotal;
document.getElementById("rmugsize").innerHTML=("Size: "+mugsize);

}
if (totebagquantity!=0){
document.getElementById("rtote").innerHTML= "["+totebagquantity+"]"+"    "+totename+"    "+"-"+"$"+totebagsubtotal;
document.getElementById("rtotesize").innerHTML=("Size: "+totesize);

}
if (hatquantity!=0){
document.getElementById("rhat").innerHTML="["+hatquantity+"]"+"    "+hatname+"    "+"-"+"$"+hatsubtotal;
document.getElementById("rhatsize").innerHTML=("Size: "+hatsize);

}
document.getElementById("shippingheader").innerHTML= "Shipping:"+"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"+"+$"+shipping;
document.getElementById("rgrandtotal").innerHTML= ("Grand Total: $"+grandtotal);
document.getElementById("shippingdetails").innerHTML= ("Shipping Details");
document.getElementById("sname").innerHTML= (firstname + " "+lastname);
document.getElementById("semail").innerHTML= (email);
document.getElementById("sphone").innerHTML= (phonenumber);
document.getElementById("saddress").innerHTML= (address);
document.getElementById("sadresstwo").innerHTML= (city+', '+state+' '+zipcode);
document.getElementById("scountry").innerHTML= (country);
document.getElementById("paymentdetails").innerHTML= ("Payment Details");
document.getElementById("pname").innerHTML= (ccname);
document.getElementById("pccinfo").innerHTML= ("XXXX-XXXX-XXXX-"+cclastfour);
document.getElementById("pccdate").innerHTML= (ccdate);
document.getElementById("thanks").innerHTML= ("Thanks For Shopping With Tanya!!!");
