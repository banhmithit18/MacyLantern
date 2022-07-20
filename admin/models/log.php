<?
Class log
{
private $log_detail;
public function GetLogDetail(){
 return $this->log_detail;
}
public function SetLogDetail($log_detail){
 $this->name = $log_detail;
}

private $log_id;
public function GetLogId(){
 return $this->log_id;
}
public function SetLogId($log_id){
 $this->name = $log_id;
}

private $log_name;
public function GetLogName(){
 return $this->log_name;
}
public function SetLogName($log_name){
 $this->name = $log_name;
}

private $log_time;
public function GetLogTime(){
 return $this->log_time;
}
public function SetLogTime($log_time){
 $this->name = $log_time;
}

private $user_id;
public function GetUserId(){
 return $this->user_id;
}
public function SetUserId($user_id){
 $this->name = $user_id;
}
public function __construct()
{

}
}
?>