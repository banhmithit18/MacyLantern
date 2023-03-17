<?php
require_once('../ultis/DBConnection.php');
require_once('../admin/models/customer.php');
require_once('../admin/models/contact_us.php');

$_SESSION['product_id'] = null;
$function = "";
if (isset($_REQUEST['product_id'])) {
    $product_id = $_REQUEST['product_id'] == null ? 0 : $_REQUEST['product_id'];
    $_SESSION['product_id']  = $product_id;   
}
if (isset($_REQUEST['function'])) {
    $function = $_REQUEST['function'] == null ? '' : $_REQUEST['function'];
}

if($function == "contact"){
    $name = $_REQUEST['name'] == null ? 0 : $_REQUEST['name'];
    $email = $_REQUEST['email'] == null ? '' : $_REQUEST['email'];
    $message = $_REQUEST['message'] == null ? '' : $_REQUEST['message'];
    $product_id = $_REQUEST['product_id'] == null ? 0 : $_REQUEST['product_id'];
    $db = new DBConnection();
    if($email != '' && $name != '' && $message != ''){
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
            $customer->customer_name = $name;
            $customer->customer_phone = null;
            $db->Create($customer);
            $customer = getCustomer($email);
            $customer_id = $customer[0]['customer_id'];        
        }
        $contact_us = new contact_us();
        $contact_us->SetCustomerId($customer_id);
        $contact_us->SetContactUsMessage($message);
        $contact_us->SetProductId(null); 
        if($product_id != 0){
            $contact_us->SetProductId($product_id); 
        }
        $db->Create($contact_us);
        if($product_id != 0){   
            echo '<script type="text/javascript">window.location = "product-detail.php?product_id='.$product_id.'#"</script>';
        }else{
            echo '<script type="text/javascript">window.location = "index.php"</script>';
        }
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
?>