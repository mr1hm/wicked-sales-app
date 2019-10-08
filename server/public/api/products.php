<?php

require_once 'functions.php';
require_once 'db_connection.php';

set_exception_handler('error_handler');

startUp();

if (empty($_GET['id'])) {
  $whereClause
}

$query = "SELECT * FROM `products`";
$result = mysqli_query($conn, $query);

if (!$result) {
  throw new Exception('error in query' . mysqli_error($conn));
}

$output = [];

if (mysqli_num_rows($result) === 0) {
  print($output);
} else {
  while ($row = mysqli_fetch_assoc($result)) {
    $output['data'][] = $row;
  }
}

$json_output = json_encode($output);
print($json_output);

?>
