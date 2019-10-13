<?php

// if (defined('INTERNAL')) {
//   exit('will not allow direct access - cart_get');
// }

if (empty($_SESSION['cartId'])) {
  print(json_encode([]));
  exit;
}

$cartId = intval($_SESSION['cartId']);

$query = "SELECT p.`id`, c.`count`, p.`name`, c.`price`, p.`shortDescription`,
            (SELECT `url`
            FROM `images` AS i
            WHERE p.`id` = i.`productId` LIMIT 1) AS images
            FROM `cartItems` AS c
            JOIN `products` AS p
                ON c.`productID` = p.`id`
            WHERE c.`cartID` = $cartId";
$result = mysqli_query($conn, $query);

if (!$result) {
  throw new Exception('invalid cart_get query' . mysqli_error($conn));
}

$output = [];

while ($row = mysqli_fetch_assoc($result)) {
  $row['id'] = intval($row['id']);
  $row['price'] = intval($row['price']);
  $output[] = $row;
}

print(json_encode($output));

?>
