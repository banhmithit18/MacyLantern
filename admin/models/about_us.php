<?php
class about_us{
    private $about_us_id;
    public function GetAboutUsId(){
     return $this->about_us_id;
    }
    public function setAboutUsId($about_us_id){
     $this->name = $about_us_id;
    }
    
    private $about_us_path;
    public function FunctionGetName(){
     return $this->about_us_path;
    }
    public function FunctionSetname($about_us_path){
     $this->name = $about_us_path;
    }

    public function __construct()
    {
        
    }
}
?> 