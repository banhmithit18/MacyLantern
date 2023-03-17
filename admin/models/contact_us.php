<?php
 class contact_us
 {
 

 public $contact_us_messenger;
 public function GetContactUsMessage(){
  return $this->contact_us_messenger;
 }
 public function SetContactUsMessage($contact_us_messenger){
  $this->contact_us_messenger = $contact_us_messenger;
 }

 public $customer_id;
 public function GetCustomerId(){
  return $this->customer_id;
 }
 public function SetCustomerId($customer_id){
  $this->customer_id = $customer_id;
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