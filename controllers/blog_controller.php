<?php 
require_once('../ultis/DBConnection.php');
require_once('../admin/models/blog.php');

$_SESSION['number_of_blog'] = 0;
$_SESSION['number_of_blog_of_page'] = 0;
$_SESSION['number_of_page'] = 0;
$_SESSION['start_blog_index'] = 0;
$_SESSION['blogs'] = null;
$_SESSION['current_page'] = 1;
$_SESSION['name'] = "";

$page = 1;
if (isset($_REQUEST['page'])) {
    $page = $_REQUEST['page'] == null ? 1 : $_REQUEST['page']; 
    if($page == "previous"){
        $current_page = $_REQUEST['current_page']; 
        $number_of_page = $_REQUEST['number_of_page'] ;
        if($current_page != 1){
            $page = $current_page -1;
        }
        else{
            $page = 1;
        }
    }else if($page == "next"){
        $current_page = $_REQUEST['current_page']; 
        $number_of_page = $_REQUEST['number_of_page'] ;
        if($current_page != $number_of_page ){
            $page = $current_page + 1;
        }
        else{
            $page = $current_page;
        }
    }

    $_SESSION['current_page'] = $page;
}
$name = "";
if (isset($_GET['name'])) {
    $name = $_GET['name'] == null ? "" : $_GET['name'];
    $_SESSION['name'] = $name;
}
getNumberOfBLog($name);
getNumberOfPage();
getBlog($page, $name);
getContent();

function getNumberOfBlog( $name)
{
    $sql = "SELECT count(*) AS number_of_blog FROM blog LEFT JOIN image ON image.image_id = blog.image_id WHERE blog_status = 1 AND blog.blog_title LIKE '%" . $name . "%'";
    $db = new DBConnection();
    $result = $db->Retrive($sql);
    $_SESSION['number_of_blog'] = $result[0]['number_of_blog'];
}
function getNumberOfPage()
{
    $number_of_blog =  $_SESSION['number_of_blog'];
    $number_of_page = ceil($number_of_blog / 10);
    $_SESSION['number_of_page'] = $number_of_page;
}
function getBlog($page, $name)
{
    $sql = "SELECT blog.* , image.image_path FROM blog LEFT JOIN image ON image.image_id = blog.image_id WHERE blog_status = 1 AND blog.blog_title LIKE '%$name%' LIMIT 10 OFFSET ". ($page - 1) * 10;
    $db = new DBConnection();
    $result = $db->Retrive($sql);
    if (!empty($result)) {
        $_SESSION['number_of_blog_of_page'] = count($result);
        $_SESSION['blogs'] = $result;
        $_SESSION['start_blog_index'] = $page == 1 ? 1 : ($page-1) * 10 + 1;
    }
}
function getContent(){
    $blogs = $_SESSION['blogs'];
    if($blogs != null){
        for($i = 0 ; $i< count($blogs); $i++){           
            $content_path = substr($blogs[$i]['blog_content_path'], 3);
            $file = fopen($content_path, "r");
            $content = fread($file, filesize($content_path));
            fclose($file);
            $blogs[$i]['blog_content'] = $content;
            $_SESSION['blogs'] = $blogs;
        }
    }
}
