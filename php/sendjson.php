<?php
// The most simple way!
// Read the file
$theFile = file_get_contents('../json/slideshowdata.json') or die ('There was an error opening file!');
// Send the correct header for a JSON data
header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json');
// Show the file
echo $theFile;
?>
