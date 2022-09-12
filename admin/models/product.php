<?php
class product
{
public $category_id;
public function GetCategoryId(){
 return $this->category_id;
}
public function SetCategoryId($category_id){
 $this->category_id = $category_id;
}

public $product_description;
public function GetProductDescription(){
 return $this->product_description;
}
public function SetProductDescription($product_description){
 $this->product_description = $product_description;
}



public $product_name;
public function GetProductName(){
 return $this->product_name;
}
public function SetProductName($product_name){
 $this->product_name = $product_name;
}

public $product_status;
public function GetProductStatus(){
 return $this->product_status;
}
public function SetProductStatus($product_status){
 $this->product_status = $product_status;
}

public function __construct()
{

}
}
?>