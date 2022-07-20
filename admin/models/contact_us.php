<?
 Class contact_us
 {
 private $contact_us_id;
 public function GetContactUsId(){
  return $this->contact_us_id;
 }
 public function SetContactUsId($contact_us_id){
  $this->name = $contact_us_id;
 }

 private $contact_us_message;
 public function GetContactUsMessage(){
  return $this->contact_us_message;
 }
 public function SetContactUsMessage($contact_us_message){
  $this->name = $contact_us_message;
 }

 private $contact_us_status;
 public function GetContactUsStatus(){
  return $this->contact_us_status;
 }
 public function SetContactUsStatus($contact_us_status){
  $this->name = $contact_us_status;
 }

 private $customer_id;
 public function GetCustomerId(){
  return $this->customer_id;
 }
 public function SetCustomerId($customer_id){
  $this->name = $customer_id;
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