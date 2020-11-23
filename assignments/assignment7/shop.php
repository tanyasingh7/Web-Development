<!DOCTYPE html>
<html>
<head>
<title> Receipt </title>
</head>
<body>
<?php
include "products.html";
$hoodiesize = $_POST['hoodiesize'];
print($hoodiesize);

$line = "";

print("<h2> Thank you for shopping with us! The following is what you have entered!");

foreach ($_POST as $key => $value)
{
$line .= $value . ":";

// print key and values to users

print("$key: $value ");
}

// add \n to end of the line

$line .= "\n";

// open the file to store data in with append operation
$filea = fopen("shop.txt","a") or die("can't open file");


// write/store line into file
fwrite($filea, $line);

// close the file
fclose($filea);
print('tanya find a way to open this is another page');
print('just try to see if there is anyway i can mantain the javascript receipt');


?>

</body>
</html>
