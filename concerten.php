<?php

error_reporting(E_ALL);
ini_set("display_errors", 1);

// Create connection
$conn = new mysqli("localhost", "root", "root", "concerten");

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$sql = "SELECT artiest FROM artiesten WHERE artiest LIKE '" . $_GET['data'] . "%';";
$result = $conn->query($sql);
while($row = $result->fetch_assoc()) {
    echo "<p>" . $row['artiest'] . "</p>";
}

?>