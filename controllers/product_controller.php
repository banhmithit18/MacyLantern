<?php
require_once('../ultis/DBConnection.php');
require_once('../admin/models/product.php');
require_once('../admin/models/product_image.php');
require_once('../admin/models/product_detail.php');
require_once('../admin/models/image.php');
$_SESSION['number_of_product'] = 0;
$_SESSION['number_of_product_of_page'] = 0;
$_SESSION['number_of_page'] = 0;
$_SESSION['start_product_index'] = 0;
$_SESSION['products'] = null;
$_SESSION['current_page'] = 1;
$_SESSION['category'] = null;
$_SESSION['category_id'] = "";
$_SESSION['name'] = "";

$page = 1;
if (isset($_REQUEST['page'])) {
    $page = $_REQUEST['page'] == null ? 1 : $_REQUEST['page']; 
    if($page == "previous"){
        $current_page = $_REQUEST['current_page']; 
        $number_of_page = $_REQUEST['number_of_page'] ;
        if($current_page != 1){
            $page = $current_page -1;
        }
        else{
            $page = 1;
        }
    }else if($page == "next"){
        $current_page = $_REQUEST['current_page']; 
        $number_of_page = $_REQUEST['number_of_page'] ;
        if($current_page != $number_of_page ){
            $page = $current_page + 1;
        }
        else{
            $page = $current_page;
        }
    }

    $_SESSION['current_page'] = $page;
}
$category = "";
$name = "";
if (isset($_GET['category'])) {
    $category = $_GET['category'] == null ? "" : $_GET['category'];
    $_SESSION['category_id'] = $category;
}
if (isset($_REQUEST['name'])) {
    $name = $_REQUEST['name'] == null ? "" : $_REQUEST['name'];
    $_SESSION['name'] = $name;
}
getNumberOfProduct($category, $name);
getNumberOfPage();
getCategory();
getProduct($page, $category, $name);

function getNumberOfProduct($category, $name)
{
    $sql = "SELECT count(*) AS number_of_product FROM product JOIN category on category.category_id = product.category_id and category.category_status = '1' WHERE product_status = 1 and category.category_id like '%" . $category . "%' and product.product_name like '%" . $name . "%'";
    $db = new DBConnection();
    $result = $db->Retrive($sql);
    $_SESSION['number_of_product'] = $result[0]['number_of_product'];
}
function getNumberOfPage()
{
    $number_of_product =   $_SESSION['number_of_product'];
    $number_of_page = ceil($number_of_product / 25);
    $_SESSION['number_of_page'] = $number_of_page;
}
function getProduct($page, $category, $name)
{
    $sql = "SELECT product.*, image.image_path, min(image.image_id) FROM product JOIN product_image ON product.product_id = product_image.product_id JOIN image ON image.image_id = product_image.image_id AND image.image_status = 1 JOIN category on category.category_id = product.category_id and category.category_status = '1'";
    $sql = $sql . "WHERE product.product_status = 1 and category.category_id like '%" . $category . "%' and product.product_name like '%" . $name . "%' GROUP BY product.product_id LIMIT 25 OFFSET " . ($page - 1) * 25;
    $db = new DBConnection();
    $result = $db->Retrive($sql);
    if (!empty($result)) {
        $_SESSION['number_of_product_of_page'] = count($result);
        $_SESSION['products'] = $result;
        $_SESSION['start_product_index'] = $page == 1 ? 1 : ($page-1) * 25 + 1;
    }
}
function getCategory()
{
    $sql = "SELECT COUNT(product_id) quantity, category.category_id, category.category_name FROM product JOIN category ON category.category_id = product.category_id WHERE product_status = '1' AND category_status = '1' GROUP BY category.category_id, category.category_name";
    $db = new DBConnection();
    $result = $db->Retrive($sql);
    if (!empty($result)) {
        $_SESSION['category'] = $result;
    }
}
