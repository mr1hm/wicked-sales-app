<?php

require_once 'db_connection.php';
require_once 'functions.php';

set_exception_handler('error_handler');

startUp();

$query = "SELECT * FROM `products`";
$result = mysqli_query($conn, $query);

if (!$result) {
  print('error in query' . mysqli_error($conn));
  exit;
}

$output = [];

if (mysqli_num_rows($result) === 0) {
  exit('no data available');
} else {
  while ($row = mysqli_fetch_assoc($result)) {
    $output['data'][] = $row;
  }
}

$json_output = json_encode($output);
print($json_output);

?>
