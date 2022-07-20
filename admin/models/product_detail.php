<?
Class product_detail
{
private $product_detail_id;
public function GetProductDetailId(){
 return $this->product_detail_id;
}
public function SetProductDetailId($product_detail_id){
 $this->name = $product_detail_id;
}

private $product_detail_name;
public function GetProductDetailName(){
 return $this->product_detail_name;
}
public function SetProductDetailName($product_detail_name){
 $this->name = $product_detail_name;
}

private $product_detail_status;
public function GetProductDetailStatus(){
 return $this->product_detail_status;
}
public function SetProductDetailStatus($product_detail_status){
 $this->name = $product_detail_status;
}

private $product_detail_value;
public function GetProductDetailValue(){
 return $this->product_detail_value;
}
public function SetProductDetailValue($product_detail_value){
 $this->name = $product_detail_value;
}

private $product_id;
public function GetProductId(){
 return $this->product_id;
}
public function SetProductId($product_id){
 $this->name = $product_id;
}

public function __construct()
{

}
}
?>