<?php
class product_detail
{


public $product_detail_name;
public function GetProductDetailName(){
 return $this->product_detail_name;
}
public function SetProductDetailName($product_detail_name){
 $this->product_detail_name = $product_detail_name;
}

public $product_detail_status;
public function GetProductDetailStatus(){
 return $this->product_detail_status;
}
public function SetProductDetailStatus($product_detail_status){
 $this->product_detail_status = $product_detail_status;
}

public $product_detail_value;
public function GetProductDetailValue(){
 return $this->product_detail_value;
}
public function SetProductDetailValue($product_detail_value){
 $this->product_detail_value = $product_detail_value;
}

public $product_id;
public function GetProductId(){
 return $this->product_id;
}
public function SetProductId($product_id){
 $this->product_id = $product_id;
}

public function __construct()
{

}
}
?>