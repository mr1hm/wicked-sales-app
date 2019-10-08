<?php

require_once 'functions.php';
set_exception_handler('error_handler');
require_once 'db_connection.php';

startUp();

$whereClause = '';

if (!empty($_GET['id'])) {
  if (!is_numeric($_GET['id'])) {
    throw new Exception('id must be an int');
  }
  $id = intval($_GET['id']);
  $whereClause = " WHERE `id` = $id";
}

$query = "SELECT * FROM `products` $whereClause";
$result = mysqli_query($conn, $query);

if (!$result) {
  throw new Exception('error in query' . mysqli_error($conn));
}

$output = [];

if (mysqli_num_rows($result) === 0 && $id !== false) {
  throw new Exception("invalid id: $id");
} else {
  while ($row = mysqli_fetch_assoc($result)) {
    $row['price'] = intval($row['price']);
    $output['data'][] = $row;
  }
}

$json_output = json_encode($output);
print($json_output);

?>
