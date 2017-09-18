<?php 


  $name = $_REQUEST['name'];
  $from = $_REQUEST['from'];
  $body = $_REQUEST['body'];


  $to = "arthur.schoenfeld@gmail.com"; //recipient 
 // $to = "hiro@mrhiro.com"; //recipient 

  $subject = "RIA Emails"; //subject 
  $header = "From: ". $name . " <" . $from . ">\r\n";

  if (mail($to, $subject, $body, $header)){
    echo 'Your email has been sent!';
  } else {
    echo 'Error: something went wrong.';
  }

?>
