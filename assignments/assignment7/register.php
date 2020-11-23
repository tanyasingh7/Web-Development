<!DOCTYPE html>
<html>
<head>
  <title> Register </title>
</head>
<body>
  <?php

$user = $_POST['user'];
$pass = $_POST['pass'];

$myfile = "users.txt";
$afile = fopen("users.txt", "a") or die("Error accessing file!");
$line = $user.":".$pass."\n";
fwrite($afile, $line);
fclose($afile);
print("Thank You For Registering $user!");

  ?>
</body>
</html>
