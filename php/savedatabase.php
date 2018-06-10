<?php
// A very simple php file to save the data into the database

// Include the config for the database
include "dbconfig.php";

// First, get the variables
$data = json_decode(file_get_contents('php://input'), true);

$name = $data["name"];
$email = $data["email"];

// Second, create the response array to convert to JSON
$response = array(
  "errors" => false,
  "errors_string" => array(),
  "correct" => false,
);

// Them, let's find if they are ok or not (double test, first on client, second on server side)
if (!$name) {
  $response["errors"] = true;
  array_push($response["errors_string"], "Name can't be empty.");
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  $response["errors"] = true;
  array_push($response["errors_string"], "The email is not correct.");
}

// if there's no errors (or maybe can be one more? xD)
if (sizeof($response["errors_string"]) == 0) {
  // Conect to the database
  $conn = new mysqli($dbhost, $dbuser, $dbpass, $dbdatabase);
  if ($conn -> connect_error) {
    // This is the worst error and must be show on the logs of the web service!
    die("Database connection failed: " . $conn -> connect_error);
  }
  // Creating the query (an easy insert)
  $sql = "INSERT INTO users (username, email) VALUES ('" . $name . "', '" . $email . "')";
  if ($conn -> query($sql) === true) {
    // Everything is ok
    $response["correct"] = true;
  } else {
    // The only common error it's that user existes so...
    $response["errors"] = true;
    array_push($response["errors_string"], "User exists");
  }
  // Disconnect from database (always!)
  $conn -> close();
} else {
  // There was errors! There was errors! There was errors!
  // I knoe that it comes true before, but who knows...
  $response["errors"] = true;
}

// Set the response as a JSON
$responseJSON = json_encode($response);
// Now the headers
header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json');
// And the data
echo $responseJSON;
?>
