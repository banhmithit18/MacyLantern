<?
Class product_image
{
    private $product_image_id;
    public function GetProductImageId(){
     return $this->product_image_id;
    }
    public function SetProductImageId($product_image_id){
     $this->name = $product_image_id;
    }

    private $product_id;
    public function GetProductId(){
     return $this->product_id;
    }
    public function SetProductId($product_id){
     $this->name = $product_id;
    }

    private $image_id;
    public function GetImageId(){
     return $this->image_id;
    }
    public function SetImageId($image_id){
     $this->name = $image_id;
    }

    public function __construct()
    {
    
    }
}
?>