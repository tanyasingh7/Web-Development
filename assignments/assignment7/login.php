<!DOCTYPE html>
<html>
<head>
  <title> Log In </title>
</head>
<body>
  <?php

  $user = $_POST['user'];
  $pass = $_POST['pass'];
  $flag = FALSE;

  $myfile = "users.txt";
  $file = fopen("users.txt", "r") or die("Error accessing file!");

  while (!(feof($file))){
    $line = fgets($file);
    $line = rtrim($line);
    $info = explode(":",$line);
    if (($user == $info[0]) && ($pass == $info[1])){
      $flag = TRUE;
      break;
    }
  }
if($flag){
  print("Thank You For Signing In, $user");
}
else {
  print("Invalid Credentials! Please Try Again.")
}

include "products.html";
   ?>

 </body>
 </html>
