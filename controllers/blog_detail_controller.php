<?php
require_once('../ultis/DBConnection.php');
require_once('../admin/models/blog.php');
$_SESSION['blog'] = null;
$_SESSION['blog_id'] = 0;
if (isset($_REQUEST['blog_id'])) {
    $blog_id = $_REQUEST['blog_id'] == null ? 0 : $_REQUEST['blog_id'];
    $_SESSION['blog_id']  = $blog_id;
}

getBlog($blog_id);
getContent();


function getBlog($blog_id)
{
    $sql = "SELECT * FROM blog WHERE blog_status = '1' AND blog_id = '$blog_id'";
    $db = new DBConnection();
    $result = $db->Retrive($sql);
    if (!empty($result)) {
        $_SESSION['blog'] = $result;
    }
}
function getContent()
{
    $blog = $_SESSION['blog'];
    if ($blog != null) {
        $content_path = substr($blog[0]['blog_content_path'], 3);
        $file = fopen($content_path, "r");
        $content = fread($file, filesize($content_path));
        fclose($file);
        $blog[0]['blog_content'] = $content;
        $_SESSION['blog'] = $blog;
    }
}
