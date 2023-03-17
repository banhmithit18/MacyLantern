<?php
session_start();
require_once('../ultis/DBConnection.php');
require_once('../models/log.php');
require_once('../models/customer.php');
$function = "";

//get function from ajax 
if (isset($_REQUEST['function'])) {
    $function = $_REQUEST['function'];
}

//function get customer from database
if ($function == "get_customer") {
    $db = new DBConnection();
    $sql = "SELECT * FROM customer ORDER BY customer_id desc";
    $result = $db->Retrive($sql);
    echo json_encode($result);
    die();
}

//function check customername exist or not
function CheckExist($value, $type)
{
    $db = new DBConnection();
    if ($type == "email") {
        $sql = "SELECT * FROM customer WHERE customer_email = '$value'";
    } else if ($type == "phone") {
        $sql = "SELECT * FROM customer WHERE customer_phone = '$value'";
    }
    $result = $db->Retrive($sql);
    if ($result == "") {
        return false;
    } else {
        return true;
    }
}

//function delete customer from database
if ($function == "delete_customer") {
    $customer_id = $_REQUEST['customer_id'];
    $customer = new customer();
    $customer->customer_id = $customer_id;
    $db = new DBConnection();
    if($result = $db->Delete($customer)){
        $log = new Log();
        $log->log_detail = "Delete customer with id = $customer_id";
        $log->log_time = date("Y-m-d H:i:s");
        $log->user_id = $_SESSION['user_id'];
        $log->log_name = "Delete customer";
        $db->Create($log);
        $return_message = (array('status' => '1', 'response' => 'Customer has been deleted !', 'error' => ''));
        echo json_encode($return_message);
        die();
    }
    else
    {
        $return_message = (array('status' => '0', 'response' => 'Cannot delete customer', 'error' => 'Cannot delete customer, please check if customer has any reivew or order'));
        echo json_encode($return_message);
        die();
    }
    
}

//function add customer to database
if ($function == "add_customer") {
    $customer = new customer();
    //validate
    $customer_address = $_POST['customer_address'] == null ? "" : $_POST['customer_address'];
    $customer_phone = $_POST['customer_phone'] == null ? "" : $_POST['customer_phone'];
    $customer_email = $_POST['customer_email'] == null ? "" : $_POST['customer_email'];
    $customer_age = $_POST['customer_age'] == null ? "" : $_POST['customer_age'];
    $customer_gender = $_POST['customer_gender'] == null ? 0 : $_POST['customer_gender'];
    $customer_name = $_POST['customer_name'] == null ? "" : $_POST['customer_name'];
    if ($check_exist = CheckExist($customer_email, "email")) {
        $return_message = (array('status' => '0', 'response' => 'Email already exist', 'error' => 'Email already exist'));
        echo json_encode($return_message);
        die();
    }

    //create entity
    $customer->customer_address = $customer_address;
    $customer->customer_age = $customer_age;
    $customer->customer_email = $customer_email;
    $customer->customer_gender = $customer_gender;
    $customer->customer_name = $customer_name;
    $customer->customer_phone = $customer_phone;
    //insert
    $db = new DBConnection();;
    try {
        $db->Create($customer);
        $log = new Log();
        $log->log_name = "Add customer";
        $log->log_detail = "Add customer $customer_name";
        $log->user_id = $_SESSION['user_id'];
        date_default_timezone_set('Asia/Ho_Chi_Minh');
        $date = date('Y-m-d H:i:s');
        $log->log_time = $date;
        $db->Create($log);
    }catch (Exception $e) {
        $return_message = (array('status' => '0', 'response' => 'Error', 'error' => $e->getMessage()));
        echo json_encode($return_message);
        die();
    }

    $return_message = (array('status' => '1', 'response' => 'Customer has been added', 'error' => '', 'customer_data' => $customer));
    echo json_encode($return_message);
    die();
}

//function update customer to database
if ($function == "update_customer") {
    $customer = new customer();
    //validate
    $customer_id = $_POST['customer_id'] == null ? 0 : $_POST['customer_id'];
    $customer_address = $_POST['customer_address'] == null ? "" : $_POST['customer_address'];
    $customer_phone = $_POST['customer_phone'] == null ? "" : $_POST['customer_phone'];
    $customer_email = $_POST['customer_email'] == null ? "" : $_POST['customer_email'];
    $customer_age = $_POST['customer_age'] == null ? "" : $_POST['customer_age'];
    $customer_gender = $_POST['customer_gender'] == null ? 0 : $_POST['customer_gender'];
    $customer_name = $_POST['customer_name'] == null ? "" : $_POST['customer_name'];

    //create ent
    $customer->customer_address = $customer_address;
    $customer->customer_age = $customer_age;
    $customer->customer_email = $customer_email;
    $customer->customer_gender = $customer_gender;
    $customer->customer_name = $customer_name;
    $customer->customer_phone = $customer_phone;

    //create ent old customer\
    $db = new DBConnection();
    $result  = $db -> Retrive("SELECT * FROM customer WHERE customer_id = $customer_id");

    if($result[0]['customer_email'] != $customer_email){
        $check_exist = CheckExist($customer_email, "email");
        if($check_exist){
            $return_message = (array('status' => '0', 'response' => 'Email already exist', 'error' => 'Email already exist'));
            echo json_encode($return_message);
            die();
        }
    }
    //update
    $db = new DBConnection();;
    if ($db->Update($customer, $customer_id)) {
            $log = new Log();
            $log->log_name = "Update customer";
            $log->log_detail = "Update customer with id= $customer_id";
            $log->user_id = $_SESSION['user_id'];
            date_default_timezone_set('Asia/Ho_Chi_Minh');
            $date = date('Y-m-d H:i:s');
            $log->log_time = $date;
            $db->Create($log);
            $return_message = (array('status' => '1', 'response' => 'Customer has been updated', 'error' => ''));
            echo json_encode($return_message);
            die();
        
    }
    die();
}

