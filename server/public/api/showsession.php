<?php

require_once 'functions.php';
session_start();
set_exception_handler('error_handler');

require_once 'db_connection.php';

print_r($_SESSION);

?>
