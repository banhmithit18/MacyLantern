<?php include("../includes/header.php") ?>
<?php require("../controllers/blog_controller.php") ?>

<style>
    #qodef-page-outer {
        margin-top: 0px;
    }

    .qodef-page-title .qodef-m-content {
        padding-top: 0px;
    }
</style>
<div id="qodef-page-outer">
    <div class="qodef-page-title qodef-m qodef-title--standard-with-breadcrumbs qodef-title-text--left">
        <div class="qodef-m-inner">
            <div class="qodef-m-content qodef-content-grid">
                <h5 class="qodef-m-title entry-title">Blog</h5>
                <div itemprop="breadcrumb" class="qodef-breadcrumbs">
                    <a itemprop="url" class="qodef-breadcrumbs-link" href="index.php"><span itemprop="title">Home</span></a><span class="qodef-breadcrumbs-separator"></span><span itemprop="title" class="qodef-breadcrumbs-current">Blog</span>
                </div>
            </div>
        </div>
    </div>
    <div id="qodef-page-inner" class="qodef-content-grid">
        <main id="qodef-page-content" class="qodef-grid qodef-layout--template qodef--no-bottom-space">
            <div class="qodef-grid-inner clear">
                <div class="qodef-page-border--left"></div>
                <div class="qodef-page-border--right"></div>
                <div class="qodef-content--left-side qodef-content-side">
                    <div class="qodef-content-side-holder-outer">
                        <div id="nav_menu-5" class="widget widget_nav_menu" data-area="content-side-area">
                            <div class="menu-about-us-container">
                                <ul id="menu-about-us" class="menu">
                                    <li id="menu-item-271" class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item menu-item-271">
                                        <a href="about-us.php" aria-current="page">About us</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="qodef-content--right-side qodef-content-side">
                    <div class="qodef-content-side-holder-outer">
                        <div id="nav_menu-6" class="widget widget_nav_menu" data-area="content-side-area">
                            <div class="menu-contact-us-container">
                                <ul id="menu-contact-us" class="menu">
                                    <li id="menu-item-272" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-272">
                                        <a href="contact-us.php">Contact us</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="qodef-woo-page" class="qodef-grid-item qodef-page-content-section qodef-col--12 qodef--list">
                    <header class="woocommerce-products-header"></header>
                    <div class="woocommerce-notices-wrapper"></div>

                    <div class="vc_row">
                        <div class='vc_col-sm-8'>
                            <div class="qodef-woo-results">
                                <p class="woocommerce-result-count">
                                    <?php
                                    $number_of_blog = $_SESSION['number_of_blog'];
                                    (int)  $number_of_blog_of_page = $_SESSION['number_of_blog_of_page'];
                                    $start_blog_index = $_SESSION['start_blog_index'];
                                    (int) $current_page = $_SESSION['current_page'];
                                    $end_blog_index = $number_of_blog_of_page + (($current_page -1) *10);
                                    echo 'Showing ' . $start_blog_index . "-" . $end_blog_index . " of " . $number_of_blog . " results";
                                    ?>
                                </p>
                            </div>
                        </div>
                        <div class="vc_col-sm-4">
                            <div id="search-2" class="widget widget_search" data-area="main-sidebar">
                                <form role="search" method="get" class="qodef-search-form" action="">
                                    <label for="qodef-search-form-629f91e2d1b7b" class="screen-reader-text">Search for:</label>
                                    <div class="qodef-search-form-inner clear">
                                        <input type="search" id="qodef-search-form-629f91e2d1b7b" class="qodef-search-form-field" value="<?php $name = "";if (isset($_SESSION['name'])) {$name = $_SESSION['name']; echo $name; }?>" name="name" placeholder="Search" title="Search for:" />
                                        <button type="submit" class="qodef-search-form-button"><span class="qodef-icon-elegant-icons icon_search"></span></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <?php
                        $blogs = $_SESSION['blogs'];
                        if($blogs != null){
                            for($i = 0 ; $i < count($blogs) ; $i++){
                                $blog_title = $blogs[$i]['blog_title'];
                                $blog_content = $blogs[$i]['blog_content'];
                                $s = substr($blog_content, 0, 350);
                                $blog_contnet_shorten = substr($s, 0, strrpos($s, ' '));
                                $image_path = substr($blogs[$i]['image_path'], 3);
                                $blog_id = $blogs[$i]['blog_id'];
                                $html = '<div class="blog-list">
                                            <br>
                                            <div class="vc_row">
                                                <div class="vc_col-sm-3">
                                                    <img src="'.$image_path.'" height="100">
                                                </div>
                                                <div class="vc_col-sm-9">
                                                    <div class="vc_row">
                                                        <h4 style="margin:0px"> <a href="blog-detail.php?blog_id='.$blog_id.'">'.$blog_title.'</a></h4>
                                                    </div>
                                                    <div class="vc_row">'.$blog_contnet_shorten.'.....<a href="blog-detail.php?blog_id='.$blog_id.'">Read more</a></div>
                                                </div>
                                                <hr>
                                            </div>
                                            </br>
                                            <div class="line"></div>
                                            </br>
                                        </div>';
                                echo $html;
                            }
                        }
                    ?>
                    <nav class="woocommerce-pagination">
                        <?php 
                        $name = "";
                        if (isset($_SESSION['name'])) {
                            $name = $_SESSION['name'];
                        }
                        $number_of_page = $_SESSION['number_of_page'];
                        $current_page = $_SESSION['current_page'];
                        echo '<a class="previous page-numbers stepPage" href="blog.php?current_page='.$current_page.'&number_of_page='.$number_of_page.'&page=previous&name='.$name.'"><span class="qodef-icon-linea-icons icon-arrows-left"></span></a>';                      
                        ?> 
                        <?php

                        $name = "";
                        if (isset($_SESSION['name'])) {
                            $name = $_SESSION['name'];
                        }
                        if (isset($_SESSION['number_of_page'])) {
                            $current_page = $_SESSION['current_page'];
                            $page = $_SESSION['number_of_page'];
                            $start_point = 1 ;
                            $end_point = $page;
                            $pre_flag = false;
                            $next_flag = false;
                            if($page > 7  ){
                                $num_page_next = $page - $current_page;
                                $num_page_pre = $current_page - 1;
                                if($num_page_next > 2 && $num_page_pre > 2){
                                    $pre_flag = true;
                                    $next_flag = true;
                                    $start_point = $current_page -1;
                                    $end_point = $current_page +1;
                                }else if($num_page_pre <= 2 && $num_page_next > 2){
                                    $next_flag = true;
                                    $start_point = 1;
                                    $end_point = $current_page +4-$num_page_pre;
                                }else if($num_page_pre > 2 && $num_page_next <= 2){
                                    $pre_flag = true;
                                    $start_point = $current_page -4+ $num_page_next;
                                    $end_point = $page;
                                }
                            }
                            if($pre_flag == true){
                                echo '<a class="page-numbers" href="blog.php?page=01&name='.$name.'">01</a>';
                                echo '<a class="page-numbers" href="">...</a>';
                            }
                            for ($i = $start_point; $i <= $end_point; $i++) {
                                $page_num = '';
                                if ($i < 10) {
                                    $page_num = '0' . $i;
                                }else{
                                    $page_num =  $i;
                                }                                
                                if($i == $current_page){
                                    echo '<a class="page-numbers current" href="blog.php?page='.$i.'&name='.$name.'">' . $page_num . '</a>';
                                }else{
                                    echo '<a class="page-numbers" href="blog.php?page='.$i.'&name='.$name.'">' . $page_num . '</a>';
                                }                              
                            }
                            if($next_flag == true){
                                echo '<a class="page-numbers" href="">...</a>';
                                $i = 0;
                                if($page <10){
                                    $i = '0'.$page;
                                }else{
                                    $i = $page;
                                }
                                echo '<a class="page-numbers" href="blog.php?page='.$page.'&name='.$name.'">'.$i.'</a>';                                
                            }
                        }
                        ?>
                        <?php 
                        $name = "";
                        if (isset($_SESSION['name'])) {
                            $name = $_SESSION['name'];
                        }
                        $number_of_page = $_SESSION['number_of_page'];
                        $current_page = $_SESSION['current_page'];             
                            echo '<a class="previous page-numbers stepPage" href="blog.php?current_page='.$current_page.'&number_of_page='.$number_of_page.'&page=next&name='.$name.'"><span class="qodef-icon-linea-icons icon-arrows-right"></span></a>';
                        ?>                   
                    </nav>
                </div>
        </main>
    </div>
</div>

<?php include('../includes/footer.php') ?>