<?php 
 
 $conn=mysqli_connect('localhost','root','adish1234','sorboixform');

 //check connectiom
 if(mysqli_connect_errno())
 {
     //connection failed
     echo 'failed to connect to MYSQL '.mysqli_connect_errno();
 }

?>