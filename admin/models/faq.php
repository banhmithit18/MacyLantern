<?
Class faq
{
private $faq_answer;
public function GetFaqAnswer(){
 return $this->faq_answer;
}
public function SetFaqAnswer($faq_answer){
 $this->name = $faq_answer; 
}

private $faq_id;
public function GetFaqId(){
 return $this->faq_id;
}
public function SetFaqId($faq_id){
 $this->name = $faq_id;
}

private $faq_piority;
public function GetFaqPiority(){
 return $this->faq_piority;
}
public function SetFaqPiority($faq_piority){
 $this->name = $faq_piority;
}

private $faq_question;
public function GetFaqQuestion(){
 return $this->faq_question;
}
public function SetFaqQuestion($faq_question){
 $this->name = $faq_question;
}

private $faq_status;
public function GetFaqStatus(){
 return $this->faq_status;
}
public function SetFaqStatus($faq_status){
 $this->name = $faq_status;
}

public function __construct()
{

}
}
?>