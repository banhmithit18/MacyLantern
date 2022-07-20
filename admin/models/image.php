<?
Class image
{
private $image_id;
public function GetImageId(){
 return $this->image_id;
}
public function SetImageId($image_id){
 $this->name = $image_id;
}

private $image_path;
public function GetImagePath(){
 return $this->image_path;
}
public function SetImagePath($image_path){
 $this->name = $image_path;
}

private $image_status;
public function GetImageStatus(){
 return $this->image_status;
}
public function SetImageStatus($image_status){
 $this->name = $image_status;
}

public function __construct()
{

}
}
?>