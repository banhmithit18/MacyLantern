<?
class banner{
    private $banner_id;
    public function GetBannerId(){
     return $this->banner_id;
    }
    public function SetBannerId($banner_id){
     $this->name = $banner_id;
    }

    private $banner_content;
    public function GetBannerContent(){
     return $this->banner_content;
    }
    public function SetBannerContent($banner_content){
     $this->name = $banner_content;
    }
    
    private $banner_link;
    public function GetBannerLink(){
     return $this->banner_link;
    }
    public function SetBannerLink($banner_link){
     $this->name = $banner_link;
    }

    private $banner_piority;
    public function GetBannerPiority(){
     return $this->banner_piority;
    }
    public function SetBannerPiority($banner_piority){
     $this->name = $banner_piority;
    }

    private $banner_status;
    public function GetBannerStatus(){
     return $this->banner_status;
    }
    public function SetBannerStatus($banner_status){
     $this->name = $banner_status;
    }

    private $banner_title;
    public function GetBannerTitle(){
     return $this->banner_title;
    }
    public function SetBannerTitle($banner_title){
     $this->name = $banner_title;
    }

    private $banner_type;
    public function GetBannerType(){
     return $this->banner_type;
    }
    public function SetBannerType($banner_type){
     $this->name = $banner_type;
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