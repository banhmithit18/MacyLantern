<?php
require_once('../ultis/DBConnection.php');
require_once('../admin/models/product.php');
require_once('../admin/models/product_image.php');
require_once('../admin/models/product_detail.php');
require_once('../admin/models/image.php');
require_once('../admin/models/review.php');
require_once('../admin/models/customer.php');

$_SESSION['product'] = null;
$_SESSION['product_detail'] = null;
$_SESSION['product_image'] = null;
$_SESSION['product_review'] = null;
$_SESSION['product_relative'] = null;
$_SESSION['num_review'] = null;
$_SESSION['average_star'] = null;
$_SESSION['product_id'] = 0;
$_SESSION['current_page'] = 1;
$_SESSION['number_of_page'] = 0;
if(isset($_SESSION['isPaginate'])){
    unset($_SESSION['isPaginate']);
}
$product_id = 0;
$page = 1;
$function = '';
if (isset($_REQUEST['product_id'])) {
    $product_id = $_REQUEST['product_id'] == null ? 0 : $_REQUEST['product_id'];
    $_SESSION['product_id']  = $product_id;   
}
if (isset($_REQUEST['page'])) {
    $page = $_REQUEST['page'] == null ? 1 : $_REQUEST['page'];
    $_SESSION['current_page'] = $page;
    $_SESSION['isPaginate'] = true;
}
if (isset($_REQUEST['function'])) {
    $function = $_REQUEST['function'] == null ? '' : $_REQUEST['function'];
}
   
getProduct($product_id);
getProductDetail($product_id);
getProductImg($product_id);
countAllReivew($product_id);
getProductReview($product_id,$page);
getRelativeProduct($product_id);


function getProductDetail($product_id){
    $sql = "SELECT * FROM product_detail WHERE product_detail_status = '1' AND product_id = '".$product_id."' ORDER BY product_detail.product_detail_id";
    $db = new DBConnection();
    $result = $db->Retrive($sql);
    if (!empty($result)) {
        $_SESSION['product_detail'] = $result;
    }
}

function countAllReivew($product_id){
    $sql = "SELECT COUNT(*) AS COUNT FROM review WHERE product_id = '".$product_id."' and review_status = '1'";
    $db = new DBConnection();
    $result = $db->Retrive($sql);
    if (!empty($result)) {
        $total = $result[0]['COUNT'];
        $_SESSION['num_review'] = $total;
        $_SESSION['number_of_page'] = ceil($total / 10);

    }
}

function getProductReview($product_id,$page){
    $sql = "SELECT * FROM review JOIN customer ON review.customer_id = customer.customer_id WHERE  review.review_status = '1' AND review.product_id = '".$product_id."' ORDER BY review.review_id DESC LIMIT 10 OFFSET " . ($page - 1) * 10;
    $db = new DBConnection();
    $result = $db->Retrive($sql);
    if (!empty($result)) {
        $_SESSION['product_review'] = $result;
        $totalStar = 0 ;
        for($i = 0 ; $i< count($result) ; $i++){
            $totalStar += $result[$i]['review_star'];
        }
        $avg = $totalStar/(count($result)*5) *100;
        $_SESSION['average_star'] = $avg;
    }
}
function getProductImg($product_id){
    $sql = "SELECT * FROM image JOIN product_image ON image.image_id = product_image.image_id JOIN product ON product.product_id = product_image.product_id WHERE image.image_status = '1' AND product.product_id = '".$product_id."' ORDER BY image.image_id";
    $db = new DBConnection();
    $result = $db->Retrive($sql);
    if (!empty($result)) {
        $_SESSION['product_image'] = $result;
    }
}
function getProduct($product_id){
    $sql = "SELECT * FROM product WHERE product_id ='".$product_id."'";
    $db = new DBConnection();
    $result = $db->Retrive($sql);
    if (!empty($result)) {
        $_SESSION['product'] = $result;
    }
}
if($function == "add-review"){
    $rating = $_REQUEST['rating'] == null ? 0 : $_REQUEST['rating'];
    $comment = $_REQUEST['comment'] == null ? '' : $_REQUEST['comment'];
    $author = $_REQUEST['author'] == null ? '' : $_REQUEST['author'];
    $email = $_REQUEST['email'] == null ? '' : $_REQUEST['email'];
    $product_id = $_REQUEST['product_id'] == null ? 0 : $_REQUEST['product_id'];
    $db = new DBConnection();
    if($email != '' && $author != '' && $comment != '' && $product_id != 0){
        $customer_id = 0;
        $customer = getCustomer($email);
        if($customer != null){
            $customer_id = $customer[0]['customer_id'];        
        }else{
            $customer = new customer();
            $customer->customer_address = null;
            $customer->customer_age = null;
            $customer->customer_email = $email;
            $customer->customer_gender = 0;
            $customer->customer_name = $author;
            $customer->customer_phone = null;
            $db->Create($customer);
            $customer = getCustomer($email);
            $customer_id = $customer[0]['customer_id'];        
        }
        $review = new review();
        $review->SetCustomerId($customer_id);
        $review->SetProductId($product_id);
        $review->SetReviewComment($comment);
        $review->SetReviewStar($rating);
        $review->SetReviewStatus(1);
        $review->SetReviewTime(date('Y-m-d H:i:s'));
        $db->Create($review);   
        echo '<script type="text/javascript">window.location = "product-detail.php?product_id='.$product_id.'#reviews"</script>';
    }
}
function getCustomer($email){
    $sql = "SELECT * FROM customer WHERE customer_email = '$email'";
    $db = new DBConnection();
    $result = $db->Retrive($sql);
    if(!empty($result)){
        return $result;
    }
    return null;
}

function getRelativeProduct($product_id){
    $sql = "SELECT product.*, image.image_path, min(image.image_id) FROM product JOIN product_image ON product.product_id = product_image.product_id JOIN image ON image.image_id = product_image.image_id AND image.image_status = '1' JOIN category ON category.category_id = product.category_id AND category.category_status = '1'
    WHERE product.product_status = '1' AND category.category_id = (SELECT category_id FROM product WHERE product_id = '$product_id') AND product.product_id != '$product_id'  GROUP BY product.product_id LIMIT 3";
    $db = new DBConnection();
    $result = $db->Retrive(($sql));
    if(!empty($result)){
        $_SESSION['product_relative'] = $result;    
    }
}
