$(document).ready(function() {
  $("#mm").click(function(){
    window.location.href = "index.html";
  });
  $("#lbut2").click(function(){
    window.location.href = "login.html";
  });
  $("#rbut2").click(function(){
    window.location.href = "register.html";
  });
});
var obj= document.forms[1];
obj.addEventListener("submit", function(e){
var grandtotal = 0;
var shipping=0;
var hoodiequantity= document.getElementById('hoodiequantity');
hoodiequantity.addEventListener("change",hoodiesubtotal);
hoodiequantity.addEventListener("change",total);
hoodiequantity.addEventListener("change",total);

// var obj= document.forms[1];
// obj.addEventListener("submit", function(e){
//   e.preventDefault();
//   hoodiesubtotal();
//   tshirtsubtotal();
//   longsleevesubtotal();
//   mugsubtotal();
//   totesubtotal();
//   hatsubtotal();
//   total();
//   shippingprice();
//   receipt();
//   });

function hoodiesubtotal()
{
var obj= document.forms[1];
obj.addEventListener("submit", function(e){
var price = 45;
var qt1 = parseFloat(hoodiequantity.value);
total= qt1 * parseFloat(price);
grandtotal = grandtotal + total+shipping;
document.getElementById('hoodieresult').innerHTML= "Subtotal Price: $" + total;
console.log("hoodie total is " + total);
e.preventDefault();
return;
});
}

var tshirtquantity= document.getElementById('tshirtquantity');
tshirtquantity.addEventListener("change", tshirtsubtotal);
tshirtquantity.addEventListener("change", total);

function tshirtsubtotal(){
var price = 15;
var qt1 = parseFloat(tshirtquantity.value);
total= qt1 * parseFloat(price);
grandtotal = grandtotal + total+shipping;
document.getElementById('tshirtresult').innerHTML= "Subtotal Price: $" + total;
console.log("tshirt total is " + total);
e.preventDefault();
return;
}

var longsleevequantity= document.getElementById("longsleevequantity");
longsleevequantity.addEventListener("change", longsleevesubtotal);
longsleevequantity.addEventListener("change", total);

function longsleevesubtotal(){
var price = 30;
var qt1 = parseFloat(longsleevequantity.value);
total= qt1 * parseFloat(price);
grandtotal = grandtotal + total+shipping;
document.getElementById('longsleeveresult').innerHTML= "Subtotal Price: $" + total;
console.log("longsleeve total is " + total);
e.preventDefault();
return;
}
var mugquantity= document.getElementById("mugquantity");
mugquantity.addEventListener("change", mugsubtotal);
mugquantity.addEventListener("change", total);

function mugsubtotal(){
var price = 20;
var qt1 = parseFloat(mugquantity.value);
total= qt1 * parseFloat(price);
grandtotal = grandtotal + total+shipping;
document.getElementById('mugresult').innerHTML= "Subtotal Price: $" + total;
console.log("mug total is " + total);
e.preventDefault();
return;
}

var totebagquantity= document.getElementById("totebagquantity");
totebagquantity.addEventListener("change", totesubtotal);
totebagquantity.addEventListener("change", total);

function totesubtotal(){
var price = 25;
var qt1 = parseFloat(totebagquantity.value);
total= qt1 * parseFloat(price);
grandtotal = grandtotal + total+shipping;
document.getElementById('totebagresult').innerHTML= "Subtotal Price: $" + total;
console.log("totebag total is " + total);
e.preventDefault();
return;
}

var hatquantity= document.getElementById("hatquantity");
hatquantity.addEventListener("change", hatsubtotal);
hatquantity.addEventListener("change", total);

function hatsubtotal(){
var price = 25;
var qt1 = parseFloat(hatquantity.value);
total= qt1 * parseFloat(price);
grandtotal = grandtotal + total+shipping;
document.getElementById('hatresult').innerHTML= "Subtotal Price: $" + total;
console.log("hat total is " + total);
e.preventDefault();
return;
}

function total() {
  var hoodieq = parseFloat(hoodiequantity.value);
  var hoodieprice = hoodieq * 45;
  console.log(hoodieprice);
  var tshirtq = parseFloat(tshirtquantity.value);
  var tshirtprice = tshirtq * 15;
  console.log(tshirtprice);
  var longsleeveq= parseFloat(longsleevequantity.value);
  var longsleeveprice = longsleeveq * 30;
  console.log(longsleeveprice);
  var mugq = parseFloat(mugquantity.value);
  var mugprice = mugq * 20;
  console.log(mugprice);
  var totebagq= parseFloat(totebagquantity.value);
  var totebagprice = totebagq * 25;
  console.log(totebagprice);
  var hatq = parseFloat(hatquantity.value);
  var hatprice = hatq * 25;
  console.log(hatprice);
  grandtotal = hoodieprice + tshirtprice + longsleeveprice + mugprice + totebagprice + hatprice;

  if(shipping == 0){
    document.getElementById('grandtotal2').innerHTML= "Grand Total: $" + grandtotal;
    e.preventDefault();
    return;
  }
  else{
    grandtotal3 = grandtotal + shipping;
    document.getElementById('grandtotal2').innerHTML= "Grand Total: $" + grandtotal3;
    e.preventDefault();
    return;
  }
  }

var shippingbool = false;
function shippingprice(){
  if(document.getElementById("shipping1").checked){
    shipping=document.getElementById("shipping1").value;
    console.log("shipping is", shipping);
    shipping = 15.99;
    grandtotal2 = grandtotal +  15.99;
    shippingbool = true;
    e.preventDefault();
    return;
  }
  else if (document.getElementById("shipping2").checked){
    shipping=document.getElementById("shipping2").value;
    console.log("shipping is", shipping);
    shipping = 7.99;
    grandtotal2 = grandtotal +  7.99;
    shippingbool = true;
    e.preventDefault();
    return;
  }
  else if (document.getElementById("shipping3").checked){
    shipping=document.getElementById("shipping3").value;
    console.log("shipping is", shipping);
    shipping = 2.99;
    grandtotal2 = grandtotal +  2.99;
    shippingbool = true;
    e.preventDefault();
    return;
  }
  document.getElementById("shippingresult").value = shipping;
  document.getElementById('grandtotal2').innerHTML= "Grand Total: $" + grandtotal2;
  return shipping;
  return grandtotal2;
  e.preventDefault();
  return;
}

function receipt() {
   var receiptelements = ['','hoodie quantity','','tshirt quantity','', 'long sleeve quantity','','mug quantity','', 'bag quantity','','hat quantity','','shipping methtod','','','','','','first name','last name','phone number','email','','address','city','country','state','zip code','','the full name on your credit card','credit card number','expiration date','security code','credit card type'];
   var len = obj.length;
   //variables for first form inputs (products)

   //hoodie Size
   var hoodiesize;
   var hs = document.getElementById("hoodiesize");
	 var hoodiesize = hs.options[hs.selectedIndex].text;
   console.log('hoodiesize: ',hoodiesize);
   var hoodiesize;

   //hoodie quantity
   var hoodiequantity;
   var hq = document.getElementById("hoodiequantity");
	 var hoodiequantity = hq.value;
   console.log('hoodiequant: ',hoodiequantity);
   var hoodiesubtotal = 45 * hoodiequantity;
   console.log('hoodie sp: ',hoodiesubtotal)

   //Hoodie Name
   var hoodiename;
   hoodiename = "The Official Tanya Singh Hoodie ($45)";

   //tshirt size
   var tshirtsize;
   var ts = document.getElementById("tshirtsize");
	 var tshirtsize = ts.options[ts.selectedIndex].text;
   console.log('tshirtsize: ',tshirtsize);

   //tshirt quantity
   var tshirtquantity;
   var tq = document.getElementById("tshirtquantity");
	 var tshirtquantity = tq.value;
   console.log('tshirtquant: ',tshirtquantity);
   var tshirtsubtotal = 15 * tshirtquantity;
   console.log('tshirt sp: ',tshirtsubtotal)


   //tshirt Name
   var tshirtname;
   tshirtname = "The Official Tanya Singh Short Sleeve T-Shirt ($15)";

   //longsleeve size
   var longsleevesize;
   var lss = document.getElementById("longsleevesize");
   var longsleevesize = lss.options[lss.selectedIndex].text;
   console.log('longsleeve size: ',longsleevesize);

   //longsleeve quantity
   var longsleevequantity;
   var lsq = document.getElementById("longsleevequantity");
   var longsleevequantity = lsq.value;
   console.log('long sleeve quant: ',longsleevequantity);
   var longsleevesubtotal = 30 * longsleevequantity;
   console.log('longsleeve sp: ',longsleevesubtotal)

   //longsleeve Name
   var longsleevename;
   longsleevename = "The Official Tanya Singh Long Sleeve T-Shirt ($30)";


   //mug quantity
   var mq = document.getElementById("mugquantity");
   var mugquantity = mq.value;
   console.log('mugquant: ',mugquantity);
   var mugsubtotal = 20 * mugquantity;
   console.log('mug sp: ',mugsubtotal)
   //mug Name
   var mugname;
   mugname = "The Official Tanya Singh Mug ($20)";
   mugsize = "One Size";


   //tote quantity
   var tbq = document.getElementById("totebagquantity");
   var totebagquantity = tbq.value;
   console.log('totequant: ',totebagquantity);
   var totebagsubtotal = 25 * totebagquantity;
   console.log('totebag sp: ',totebagsubtotal)

   //tote Name
   var totename;
   totename = "The Official Tanya Singh Tote Bag ($25)";
   totesize = 'One Size';

   //hat quantity
   var hq = document.getElementById("hatquantity");
   var hatquantity = hq.value;
   console.log('hatquant: ',hatquantity);
   var hatsubtotal = 25 * hatquantity;
   console.log('hat sp: ',hatsubtotal)

   //hat Name
   var hatname;
   hatname = "The Official Tanya Singh Baseball Hat ($25)";
   hatsize ="One Size";

   //shipping method
   console.log('shippping:',shipping);

   //grandtotal
   var grandtotal = hatsubtotal+totebagsubtotal+mugsubtotal+tshirtsubtotal+longsleevesubtotal+hoodiesubtotal+shipping;
   console.log('gt:',grandtotal);

   //variables for second form inputs
   var text = "";
   var firstname;
   var lastname;
   var address;
   var city;
   var state;
   var zipcode;
// obj.elements[30].focus();
// obj.elements[30].style.backgroundColor="red";

   for (var i=0; i < len -2; i++){
       if ((obj.elements[i].value == "") || (obj.elements[i].value == null))
        {
           if(i!=23 && i!=29){
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
}

document.getElementById("receipt_header").innerHTML= "Order Confirmation";
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


}

};

});
