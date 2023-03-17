<?php 
require_once('../ultis/DBConnection.php');
$_SESSION['faq'] = null;
getFAQ();
function getFAQ(){
    $sql = "SELECT * FROM faq WHERE faq_status = '1' ORDER BY faq_priority";
    $db = new DBConnection();
    $result = $db->Retrive($sql);
    if(!empty($result)){
        $_SESSION['faq'] = $result;
    }
}
?>