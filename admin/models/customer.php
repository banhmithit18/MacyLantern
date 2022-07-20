<?
 Class customer
 {
  private $customer_address;
  public function GetCustomerAddress(){
   return $this->customer_address;
  }
  public function SetCustomerAddress($customer_address){
   $this->name = $customer_address;
  }

  private $customer_age;
  public function GetCustomerAge(){
   return $this->customer_age;
  }
  public function SetCustomerAge($customer_age){
   $this->name = $customer_age;
  }

  private $customer_email;
  public function GetCustomerEmail(){
   return $this->customer_email;
  }
  public function SetCustomerEmail($customer_email){
   $this->name = $customer_email;
  }

  private $customer_gender;
  public function GetCustomerGender(){
   return $this->customer_gender;
  }
  public function SetCustomerGender($customer_gender){
   $this->name = $customer_gender;
  }

  private $customer_id;
  public function GetCustomerId(){
   return $this->customer_id;
  }
  public function SetCustomerId($customer_id){
   $this->name = $customer_id;
  }

  private $customer_name;
  public function GetCustomerName(){
   return $this->customer_name;
  }
  public function SetCustomerName($customer_name){
   $this->name = $customer_name;
  }

  private $customer_phone;
  public function GetCustomerPhone(){
   return $this->customer_phone;
  }
  public function SetCustomerPhone($customer_phone){
   $this->name = $customer_phone;
  }

  public function __construct()
  {
  
  }
 }
?>