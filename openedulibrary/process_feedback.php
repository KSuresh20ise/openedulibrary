<?php
// Retrieve form data
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// Store feedback data in the database or file
// Example using MySQLi extension
$servername = 'your-database-server';
$username = 'your-username';
$password = 'your-password';
$dbname = 'your-database-name';

// Create a connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die('Connection failed: ' . $conn->connect_error);
}

// Prepare and execute the SQL statement
$sql = "INSERT INTO feedback (name, email, message) VALUES ('$name', '$email', '$message')";
if ($conn->query($sql) === true) {
    echo 'Thank you for your feedback!';
} else {
    echo 'Error: ' . $sql . '<br>' . $conn->error;
}

// Close the connection
$conn->close();
?>