<?php

if (!defined('INTERNAL')) {
  exit('will not allow direct access');
}

$bodyData = getBodyData();

if (empty($bodyData['id'])) {
  throw new Exception('did not receive ID from bodyData');
}

$id = intval($bodyData['id']);

if ($id <= 0) {
  throw new Exception('id is not greater 0');
}

print($id);

if (!empty($_SESSION['cartId'])) {
  $cartId = $_SESSION['cartId'];
} else {
  $cartId = false;
}

$selectQuery = "SELECT `price` FROM `products` WHERE `id` = $id";
$result = mysqli_query($conn, $selectQuery);

if (!$result) {
  throw new Exception('error in cart_add query' . mysqli_error($conn));
}

$output = [];

if (mysqli_num_rows($result) === 0) {
  throw new Exception("error id: $id");
}

$productData;
// $intPrice = $productData['']
// $productData = [];
while ($row = mysqli_fetch_assoc($result)) {
  $row['id'] = intval($row['id']);
  $row['price'] = intval($row['price']);
  // $row['price'] = number_format(($row['price'] / 100), 2); - this is causing issues with number formatting.
  $productData = $row;
}

$transactionResult = mysqli_query($conn, 'START TRANSACTION');

if (!$transactionResult) {
  throw new Exception('could not start transaction' . mysqli_error($conn));
}

if (!$cartId) {
  $insertQuery = "INSERT INTO `cart` SET created=NOW()";
  $insertResult = mysqli_query($conn, $insertQuery);
  if (!$insertResult) {
    throw new Exception('invalid query for insert' . mysqli_error($conn));
  }
  if (mysqli_affected_rows($conn) === 0) {
    throw new Exception('cart did not get added');
  }
  $cartId = $_SESSION['cartId'] = mysqli_insert_id($conn);
}

$cartItemsInsertQuery = "INSERT INTO `cartItems`
    SET `productID` = $id, `count` = 1, `price` = {$productData['price']}, `added`=NOW(), `cartID` = $cartId
    ON DUPLICATE KEY UPDATE
    `count` = `count` + 1";

$cartItemsResult = mysqli_query($conn, $cartItemsInsertQuery);

if (!$cartItemsResult) {
  throw new Exception('invalid items query' . mysqli_error($conn));
}

if (mysqli_affected_rows($conn) === 0) {
  mysqli_query($conn, 'ROLLBACK');
  throw new Exception('unable to insert/update cart items');
}

$transactionResult = mysqli_query($conn, 'COMMIT');

?>
