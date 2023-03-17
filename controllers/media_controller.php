<?php 
require_once('../ultis/DBConnection.php');
$_SESSION['media'] = null;
$_SESSION['logo'] = null;

getMedia();
getLogo();

function getMedia(){
    $sql = "SELECT * FROM media";
    $db = new DBConnection();
    $result = $db->Retrive($sql);
    if(!empty($result)){
        $_SESSION['media'] = $result;
    }
}
function getLogo(){
    $db = new DBConnection();
    $sql = "SELECT logo.*, image.image_path FROM logo JOIN image ON image.image_id = logo.image_id WHERE image.image_status = '1'";
    $result = $db->Retrive($sql);
    if(!empty($result)){
        $_SESSION['logo'] = $result;
    }
}
