<?php
session_start();
require_once('../ultis/DBConnection.php');
require_once('../models/log.php');
require_once('../models/review.php');
require_once('../controlles/login.php');


$function = "";
if (isset($_REQUEST['function'])) {
    $function = $_REQUEST['function'];
}
if($function == "get_review"){
    $db = new DBConnection();
    $sql = "SELECT product.product_id, product.product_name, 
    customer.customer_id,customer.customer_name,customer.customer_email, customer.customer_phone,
    review.review_id, review.review_comment, review.review_status, review.review_time,review.review_star
    FROM `review` 
    join product on product.product_id = review.product_id
    join customer on review.customer_id = customer.customer_id";
    $result = $db->Retrive($sql);
    echo json_encode($result);
    die();
}
if($function == 'update_review')
{
    $review_id = $_REQUEST['review_id'];
    $review_status = $_REQUEST['review_status'];
    $review = new review();
    $review->review_id = $review_id;
    $db = new DBConnection();
    $sql =  "Update review set review_status = $review_status where review_id = $review_id";
    if($db->Retrive($sql))
    {
        $log = new Log();
        $log->log_detail = "Update status review with id = $review_id";
        $log->log_time = date("Y-m-d H:i:s");
        $log->user_id = $_SESSION['user_id'];
        $log->log_name = "Update review";
        $db->Create($log);
        if($review_status == 1)
        {
            $return_message = (array('status' => '1', 'response' => 'Review has been show', 'error' => ''));
        }
        else
        {
            $return_message = (array('status' => '1', 'response' => 'Review has been hide', 'error' => ''));
        }
        echo json_encode($return_message);
        die();
    }
    else
    {
        $return_message = (array('status' => '0', 'response' => 'Cannot update review, please try again', 'error' => 'Cannot update review, please try again'));
        echo json_encode($return_message);
        die();
    }
}
?>