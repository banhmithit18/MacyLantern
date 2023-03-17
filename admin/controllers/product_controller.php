<?php 
session_start();
require_once('../ultis/DBConnection.php');
require_once('../models/log.php');
require_once('../models/product.php');
require_once('../models/product_image.php');
require_once('../models/product_detail.php');
require_once('../models/image.php');

//get function from ajax
$function = "";
if (isset($_REQUEST['function'])) {
    $function = $_REQUEST['function'];
}

//function get all product
if ($function == "get_product") {
    $sql = "SELECT * FROM product";
    $db = new DBConnection();
    $result = $db->Retrive($sql);
    echo json_encode($result);
}

if ($function == "get_image") {
    $product_id = $_REQUEST['product_id'] == "" ? 0 : $_REQUEST['product_id'];
    $sql = "SELECT * FROM product_image JOIN image ON product_image.image_id = image.image_id WHERE product_id = $product_id";
    $db = new DBConnection();
    $result = $db->Retrive($sql);
    echo json_encode($result);
}

if ($function == "get_detail") {
    $product_id = $_REQUEST['product_id'] == "" ? 0 : $_REQUEST['product_id'];
    $sql = "SELECT * FROM product_detail WHERE product_id = $product_id";
    $db = new DBConnection();
    $result = $db->Retrive($sql);
    echo json_encode($result);
}

if ($function == "save_product_edit") {
    $product_id = $_REQUEST['product_id'] == "" ? 0 : $_REQUEST['product_id'];
    $product_name = $_REQUEST['product_name'] == "" ? "" : $_REQUEST['product_name'];
    $product_description = $_REQUEST['product_description'] == "" ? "" : $_REQUEST['product_description'];
    $product_priority = $_REQUEST['product_priority'] == "" ? 0 : $_REQUEST['product_priority'];
    $category_id = $_REQUEST['category_id'] == "" ? 0 : $_REQUEST['category_id'];
    $product_status = $_REQUEST['product_status'] == "" ? 0 : $_REQUEST['product_status'];

    $product = new product();
    $product->product_name = $product_name;
    $product->product_description = $product_description;
    $product->product_priority = $product_priority;
    $product->category_id = $category_id;
    $product->product_status = $product_status;

    $db = new DBConnection();
    if ($db->Update($product, $product_id)) {
        WriteLog("Update product", "Upadate product with id: $product_id");
        echo json_encode(array("status" => "1", "response" => "Product has not been updated successfully", "error" => ""));
    } else {
        echo json_encode(array("status" => "0", "response" => "Product has not been updated successfully", "error" => "Cannot update product, please try again !"));
    }
}

if ($function == "delete_product") {
    $product_id = $_REQUEST['product_id'] == "" ? 0 : $_REQUEST['product_id'];
    $product = new product();
    $product->product_id = $product_id;
    $db = new DBConnection();


    if ($db->Delete($product)) {
        WriteLog("Delete product", "Delete product with id: $product_id");
        echo json_encode(array("status" => "1", "response" => "Product has not been deleted successfully", "error" => ""));
    } else {
        echo json_encode(array("status" => "0", "response" => "Product has not been deleted successfully", "error" => "Cannot delete product, please check if product has been used !"));
    }
}

if ($function == "save_detail") {
    $product_id = $_REQUEST['product_id'] == "" ? 0 : $_REQUEST['product_id'];
    $product_detail = $_REQUEST['product_detail'] == "" ? null : $_REQUEST['product_detail'];
    //delete old detail
    $sql = "DELETE FROM product_detail WHERE product_id = $product_id";
    $db = new DBConnection();
    $db->Retrive($sql);
    foreach ($product_detail as $detail) {
        if($detail == null)
        {
            continue;
        }
        $product_detail_obj = new product_detail();
        $product_detail_obj->product_id = $product_id;
        $product_detail_obj->product_detail_name = $detail['product_detail_name'];
        $product_detail_obj->product_detail_status = 1;
        $product_detail_obj->product_detail_value = $detail['product_detail_value'];
        $db->Create($product_detail_obj);
    }
    WriteLog("Update product detail", "Upadate product detail with product id = $product_id");
    echo json_encode(array("status" => "1", "response" => "Product detail been updated successfully", "error" => ""));
}


if ($function == "save_image_edit") {
    $product_id = $_REQUEST['product_id'] == "" ? 0 : $_REQUEST['product_id'];
    $product_image_count = $_REQUEST['product_image_count'] == "" ? 0 : $_REQUEST['product_image_count'];
    $product_image_delete = $_REQUEST['product_image_delete'] == "" ? null : $_REQUEST['product_image_delete'];
    $sql = "select image_path from image join product_image on image.image_id = product_image.image_id where product_id = $product_id";
    $db = new DBConnection();
    $result = $db->Retrive($sql);
    $image_name = array();
    $image_product_id[] = null;

    $product_image_delete_arr = explode(",", $product_image_delete);
    foreach ($product_image_delete_arr as $item_delete) {
        if ($item_delete == null) {
            continue;
        }
        $pi = new product_image();
        $pi->product_image_id = $item_delete;
        $db->Delete($pi);
    }

    foreach ($result as $item) {
        //get image name from path
        $image_name[] = substr($item['image_path'], strrpos($item['image_path'], '/') + 1);
    }
    for ($i = 0; $i < $product_image_count; $i++) {
        //get file
        $file = $_FILES['product_image_' . $i];
        $product_image_id = $_REQUEST['product_image_id_' . $i] == "" ? 0 : $_REQUEST['product_image_id_' . $i];
        //check if file name is exist in array
        if (in_array($file['name'], $image_name)) {
            continue;
        }
        if ($file != null) {
            //check if has product image id 
            if ($product_image_id != 0) {
                $return = UploadImage($file, $product_id, false);
                if ($return['status'] == true) {
                    $sql = "select image.image_id,image_path,image_status from product_image join image on product_image.image_id = image.image_id where product_image_id = $product_image_id";
                    $Result = $db->Retrive($sql);
                    $image = new image();
                    $image->image_id = $Result[0]['image_id'];
                    $image->image_path =  $return['image_path'];
                    $image->image_status = $Result[0]['image_status'];
                    $db->Update($image, $image->image_id);;
                }
            } else {
                $return = UploadImage($file, $product_id, true);
                if ($return['status'] == true) {
                    array_push($image_product_id, $return['image_id']);
                } else {
                    $product = new Product();
                    $product->product_id = $product_id;
                    //delete product
                    $db->Delete($product);
                    echo json_encode(array("status" => "0", "response" => "Image has not been uploaded successfully", "error" => $return['error']));
                    die();
                    break;
                }
            }
        }
        foreach ($image_product_id as $image_id) {
            $product_image = new product_image();
            $product_image->product_id = $product_id;
            $product_image->image_id = $image_id;
            $db->Create($product_image);
        }
    }
    WriteLog("Update product image", "Update product image with product id " . $product_id);
    echo json_encode(array("status" => "1", "response" => "Image has been uploaded successfully"));
}

if ($function == "add_product") {
    //get data from ajax
    $product_name = $_POST['product_name'] == null ? "" : $_POST['product_name'];
    $product_priority = $_POST['product_priority'] == null ? 999 : $_POST['product_priority'];
    $category_id = $_POST['category_id'] == null ? 0 : $_POST['category_id'];
    $product_status = $_POST['product_status'] == null ? 0 : $_POST['product_status'];
    $product_detail = $_POST['product_detail'] == null ? "" : $_POST['product_detail'];
    $product_description = $_POST['product_description'] == null ? "" : $_POST['product_description'];
    $product_image_count = $_POST['product_image_count'] == null ? 0 : $_POST['product_image_count'];
    //step 1 : add product
    $product = new Product();
    $product->product_name = $product_name;
    $product->product_priority = $product_priority;
    $product->category_id = $category_id;
    $product->product_status = $product_status;
    $product->product_description = $product_description;
    $db = new DBConnection();
    if ($db->Create($product)) {
        //get last id product
        $product_id = $db->GetLastId("product");
        $image_product_id[] = null;
        //step 2 : add image product

        for ($i = 0; $i < $product_image_count; $i++) {
            //get file
            $file = $_FILES['product_image_' . $i];
            if ($file != null) {
                $return = UploadImage($file, $product_id, true);
                if ($return['status'] == "1") {
                    array_push($image_product_id, $return['image_id']);
                } else {
                    $product = new Product();
                    $product->product_id = $product_id;
                    //delete product
                    $db->Delete($product);
                    echo json_encode(array("status" => "0", "response" => "Image has not been uploaded successfully", "error" => $return['error']));
                    die();
                    break;
                }
            }
        }
        foreach ($image_product_id as $image_id) {
            if ($image_id == null) {
                continue;
            }
            $product_image = new product_image();
            $product_image->product_id = $product_id;
            $product_image->image_id = $image_id;
            $db->Create($product_image);
        }

        //step 3 : add product detail
        $product_detail = json_decode($product_detail);
        foreach ($product_detail as $detail) {
            $product_detail_obj = new product_detail();
            $product_detail_obj->product_id = $product_id;
            $product_detail_obj->product_detail_name = $detail->product_detail_name;
            $product_detail_obj->product_detail_status = 1;
            $product_detail_obj->product_detail_value = $detail->product_detail_value;
            $db->Create($product_detail_obj);
        }
        WriteLog("Add product", "Add product with product_id = " . $product_id);
        echo json_encode(array("status" => "1", "response" => "Product has been added successfully"));
    } else {
        echo json_encode(array("status" => "0", "response" => "Product has not been saved successfully", "error" => $e->getMessage()));
    }
}

function UploadImage($imgae, $product_id, $create)
{
    $image_path = "../../img/product/";
    $file = $imgae;
    $file_name = $file['name'];
    $file_tmp = $file['tmp_name'];
    $file_error = $file['error'];
    $file_ext = explode('.', $file_name);
    $file_ext = strtolower(end($file_ext));
    $allowed = array('jpg', 'jpeg', 'png');
    if (in_array($file_ext, $allowed)) {
        if ($file_error === 0) {
            //genarate time stamp with blog id
            $time_stamp =   $product_id ."_".time();
            $file_name_new = $time_stamp . "." . $file_ext;
            $file_destination = $image_path . $file_name_new;
            move_uploaded_file($file_tmp, $file_destination);
            $path = $file_destination;
            if ($create == true) {
                return array("image_id" => CreateImage($path), "status" => "1", "error" => "");
            } else {
                return array("image_path" => $path, "status" => "1", "error" => "");
            }
        } else {
            return array("image_id" => "", "status" => "0", "error" => "There was an error uploading your file");
        }
    } else {
        return array("image_id" => "", "status" => "0", "error" => "You cannot upload files of this type");
    }
}

function CreateImage($image_path)
{
    $image = new Image();
    $image->SetImagePath($image_path);
    $image->SetImageStatus(1);
    $db = new DBConnection();
    $db->Create($image);
    $image_id = $db->GetLastId("image");
    return $image_id;
}

function WriteLog($log_name, $log_detail)
{
    //create log object
    $log = new log();
    $log->SetLogDetail($log_detail);
    $log->SetLogName($log_name);
    date_default_timezone_set('Asia/Ho_Chi_Minh');
    $log->SetLogTime(date("Y-m-d H:i:s"));
    $log->SetUserId($_SESSION['user_id']);
    //create database object
    $db = new DBConnection();
    $db->Create($log);
}
