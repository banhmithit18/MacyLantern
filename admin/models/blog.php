<?
Class Blog{
    private $blog_content;
    public function GetBlogContent(){
     return $this->blog_content;
    }
    public function SetBlogContent($blog_content){
     $this->name = $blog_content;
    }

    private $blog_id;
    public function GetBlogId(){
     return $this->blog_id;
    }
    public function SetBlogId($blog_id){
     $this->name = $blog_id;
    }

    private $blog_piority;
    public function GetBlogPiority(){
     return $this->blog_piority;
    }
    public function SetBlogPiority($blog_piority){
     $this->name = $blog_piority;
    }

    private $blog_status;
    public function GetBlogStatus(){
     return $this->blog_status;
    }
    public function SetBlogStatus($blog_status){
     $this->name = $blog_status;
    }

    private $blog_title;
    public function GetBlogTitle(){
     return $this->blog_title;
    }
    public function SetBlogTitle($blog_title){
     $this->name = $blog_title;
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