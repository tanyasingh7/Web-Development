<!DOCTYPE html>
<html>
<head>
  <title> Search </title>
</head>
<body>
<?php
$search = $_POST['sc'];
$productfile = "products.txt";
$file = fopen("products.txt", "r") or die("Sorry cannot read file!");
$flag = FALSE;
$name = "";
while(!(feof($file))){
$line= fgets($file);
$line = rtrim($line);
$info = explode(":", $line);
if ($search == $info[0]){
$flag = TRUE;
break;
}
}
if ($flag)
	{
    // info[0] - search
    // info[1] - product name
    // info[2] - product description
    // info[3] - product quantity
    // info[4] - product price
  if($info[1]=="The Offical Tanya Singh Hoodie"){
    $name = "hoodies";
  }
  elseif ($info[1]=="The Offical Tanya Singh Short Sleeve T-Shirt"){
    $name = "short sleeve t-shirts";
  }
  elseif ($info[1]=="The Offical Tanya Singh Long Sleeve T-Shirt"){
    $name = "long sleeve t-shirts";
  }
  elseif ($info[1]=="The Offical Tanya Singh Mug"){
    $name = "mugs";
  }
  elseif ($info[1]=="The Offical Tanya Singh Tote Bag"){
    $name = "tote bags";
  }
  elseif ($info[1]=="The Offical Tanya Singh Baseball Hat"){
    $name = "baseball hats";
  }
  else {
    $name = "products";
  }
  echo "<div id='pinfo'>";
  print("<p id='found'>Item Found!");
  print("<p id='pname'>Product Name: $info[1]");
  print("<p id='pprice'>Product Price: $info[4]");
  print("<p id='pdescription'>Product Description: $info[2]");
  print("<p id='pquantity'>Product Quantity: $info[3] $name left");
  print("<p id='below'>Buy $info[1] below!");
  echo "</div>";
  }

else
{
  echo "<div id='nfinfo'>";
  print("<p id='nfsearch'>You searched for: $search");
  print("<p id='notfound'>Unfortunately, we are unable to find that item! Try a different name or feel free to browse the website to see if any of our other products interest you!");
  echo "</div>";
}
include	"products.html";
?>
</body>
</html>
