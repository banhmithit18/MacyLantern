<?
Class product
{
private $category_id;
public function GetCategoryId(){
 return $this->category_id;
}
public function SetCategoryId($category_id){
 $this->name = $category_id;
}

private $product_description;
public function GetProductDescription(){
 return $this->product_description;
}
public function SetProductDescription($product_description){
 $this->name = $product_description;
}

private $product_id;
public function GetProductId(){
 return $this->product_id;
}
public function SetProductId($product_id){
 $this->name = $product_id;
}

private $product_name;
public function GetProductName(){
 return $this->product_name;
}
public function SetProductName($product_name){
 $this->name = $product_name;
}

private $product_status;
public function GetProductStatus(){
 return $this->product_status;
}
public function SetProductStatus($product_status){
 $this->name = $product_status;
}

public function __construct()
{

}
}
?>