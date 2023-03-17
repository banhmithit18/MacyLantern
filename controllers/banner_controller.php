<?php
require_once('../ultis/DBConnection.php');

$_SESSION['banners'] = null;
getBanner();
function getBanner(){
    $sql = "SELECT banner.*, image.image_path FROM banner JOIN image ON banner.image_id = image.image_id AND banner.banner_status = '1' ORDER BY banner.banner_priority";
    $db = new DBConnection();
    $result = $db->Retrive($sql);
    if(!empty($result)){
        $_SESSION['banners'] = $result;
    }
}
?>