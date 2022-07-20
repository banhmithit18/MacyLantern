<?
Class review
{
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

private $review_comment;
public function GetReviewComment(){
 return $this->review_comment;
}
public function SetReviewComment($review_comment){
 $this->name = $review_comment;
}

private $review_id;
public function GetReviewId(){
 return $this->review_id;
}
public function SetReviewId($review_id){
 $this->name = $review_id;
}

private $review_star;
public function GetReviewStar(){
 return $this->review_star;
}
public function SetReviewStar($review_star){
 $this->name = $review_star;
}

private $review_status;
public function GetReviewStatus(){
 return $this->review_status;
}
public function SetReviewStatus($review_status){
 $this->name = $review_status;
}

private $review_time;
public function GetReviewTime(){
 return $this->review_time;
}
public function SetReviewTime($review_time){
 $this->name = $review_time;
}

public function __construct()
{

}
}
?>