<?
Class category
{
 private $category_id;
 public function GetCategoryId(){
  return $this->category_id;
 }
 public function SetCategoryId($category_id){
  $this->name = $category_id;
 }

 private $category_name;
 public function GetCategoryName(){
  return $this->category_name;
 }
 public function SetCategoryName($category_name){
  $this->name = $category_name;
 }

 private $category_status;
 public function GetCategoryStatus(){
  return $this->category_status;
 }
 public function SetCategoryStatus($category_status){
  $this->name = $category_status;
 }

 public function __construct()
 {
  
 }
}
?>