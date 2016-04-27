<?
/* Subject and email variables */

	$emailSubject = 'Customer Message';
	$webMaster = 'norgias@gmail.com';


/* Gathering data variables */	

	$emailField = $_POST['email'];
	$nameField = $_POST['name'];
	$messageField = $_POST['message'];
	$subjectField = $_POST['subject'];

	$body = <<<EOD<br><hr><br>
	Email: $email <br>
	Name: $name <br>
	Subject: $subject <br>
	Message: $message <br>
	EOD;

	$headers = "from: $email\r\n";
	$headers .= "Content-type: tex/html\r\n";
	$send = mail($webMaster, $emailSubject, $body, $headers);

/* Results rendered as HTML */

	$theResults = <<<EOD<!DOCTYPE html>
<html>
<head>
	<meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

    <style type="text/css">

    h1 {
    	color: red;
    }



    </style>

</head>
<body>
<h1>Thank you for choosing Nani Extensions and taking the time to contact us! We will get back to you as quickly as possible</h1>
	

</body>


</html>EOD;
echo "$theResults";




?>