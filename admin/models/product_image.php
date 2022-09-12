<?php
class product_image
{
  

    public $product_id;
    public function GetProductId(){
     return $this->product_id;
    }
    public function SetProductId($product_id){
     $this->product_id = $product_id;
    }

    public $image_id;
    public function GetImageId(){
     return $this->image_id;
    }
    public function SetImageId($image_id){
     $this->image_id = $image_id;
    }

    public function __construct()
    {
    
    }
}
?>