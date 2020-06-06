<?php  
 require('config.php');

 
$inputmail = $_POST['email'];
$inputsubject = $_POST['subject'];
$inputmessage = $_POST['message'];
$statusMsg='';


//uploading image or document

$targetDir = "uploadedimages/";
$fileName = basename($_FILES["file"]["name"]);
$targetFilePath = $targetDir . $fileName;


if(isset($_POST["submit"]) && !empty($_FILES["file"]["name"])){
        // Upload file to server
        if(move_uploaded_file($_FILES["file"]["tmp_name"], $targetFilePath)){
            // Insert image file name into database
            $insert = $conn->query("INSERT INTO requests( emailid , subject, message, image) VALUES('$inputmail' , '$inputsubject' , '$inputmessage' , '".$fileName."')");
            
        }else{
            $statusMsg = "Sorry, there was an error uploading your file.";
        }
   
}
else
{
    $statusMsg="Please choose a file";
}

// Display status message
echo $statusMsg;





?>


<html>
    <body>
    
        <h2>REQUEST MESSAGE</h2>
        <h4>Query From:  <?php echo $_POST['email']; ?></h4>
        <h4>Subject:  <?php echo $_POST['subject']; ?></h4>
        <h4>Message:  <?php echo $_POST['message']; ?></h4>
        
        
        
    </body>
</html>