<?php include("../includes/header.php") ?>
<?php require("../controllers/product_controller.php") ?>
<!-- change style navigation -->
<style>
    #qodef-page-outer {
        margin-top: 0px;
    }

    .qodef-page-title .qodef-m-content {
        padding-top: 0px;
    }

    @media only screen and (max-width: 680px) {
        .reponsive-name {
            font-size: 20px;
        }
    }

    @media only screen and (min-width: 768px) and (max-width: 800px) {
        .select-category {
            border: none !important;
            font-size: 13px !important;
        }

        .qodef-search-form-field {
            border: none !important;
            font-size: 13px !important;
        }

        .select-category:focus {
            border: none !important;
        }

        .qodef-search-form-field:active {
            border: none !important;
        }

        .select-category:active {
            border: none !important;
        }

        .qodef-search-form-field:focus {
            border: none !important;
        }
    }
    @media only screen and (max-width: 500px) {
        .stepPage{
            display: none;
        }
    }
    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
        -webkit-box-shadow: 0 0 0 30px white inset !important;
    }

    .select-category {
        height: 45px;
        font-family: Montserrat, sans-serif;
        font-size: 15px;
        line-height: 29px;
        font-weight: 400;
        color: #bdb5aa;
        border: none;
        outline: none;
        scroll-behavior: smooth;
        border-bottom: 1px solid #3e3930;
    }

    .select-category:focus {
        border: none;
        outline: none;
        scroll-behavior: smooth;
        color: #776f60;
        border-bottom: 1px solid #3e3930;
    }

    .select-category:active {
        border: none;
        outline: none;
        scroll-behavior: smooth;
        color: #776f60;
        border-bottom: 1px solid #3e3930;
    }
</style>
<div id="qodef-page-outer">
    <div class="qodef-page-title qodef-m qodef-title--standard-with-breadcrumbs qodef-title-text--left">
        <div class="qodef-m-inner">
            <div class="qodef-m-content qodef-content-grid">
                <h5 class="qodef-m-title entry-title">Shop</h5>
                <div itemprop="breadcrumb" class="qodef-breadcrumbs">
                    <a itemprop="url" class="qodef-breadcrumbs-link" href="index.php"><span itemprop="title">Home</span></a><span class="qodef-breadcrumbs-separator"></span><span itemprop="title" class="qodef-breadcrumbs-current">Shop</span>
                </div>
            </div>
        </div>
    </div>
    <!-- product go here-->
    <div id="qodef-page-inner" class="qodef-content-grid">
        <main id="qodef-page-content" class="qodef-grid qodef-layout--template qodef--no-bottom-space">
            <div class="qodef-grid-inner clear">
                <div class="qodef-page-border--left"></div>
                <div class="qodef-page-border--right"></div>
                <div id="qodef-woo-page" class="qodef-grid-item qodef-page-content-section qodef-col--12 qodef--list">
                    <header class="woocommerce-products-header"></header>
                    <div class="woocommerce-notices-wrapper"></div>
                    <div class="vc_row">
                        <div class='vc_col-sm-4'>
                            <div class="qodef-woo-results">
                                <p class="woocommerce-result-count">
                                    <?php
                                    $current_page = $_SESSION['current_page'];
                                    $number_of_product = $_SESSION['number_of_product'];
                                    $number_of_product_of_page = $_SESSION['number_of_product_of_page'];
                                    $start_product_index = $_SESSION['start_product_index'];
                                    $end_product_index = $number_of_product_of_page + (($current_page -1) *10);

                                    echo 'Showing ' . $start_product_index . "-" . $end_product_index . " of " . $number_of_product . " results";
                                    ?>
                                </p>
                            </div>
                        </div>
                        <div class='vc_col-sm-4'>
                            <div class="qodef-woo-results">
                                <select class="select-category" onchange="location = this.value;">
                                    <option>Select cateogory</option>
                                    <option value="product.php">All</option>
                                    <?php
                                    if (isset($_SESSION['category'])) {
                                        $category = $_SESSION['category'];
                                        for ($i = 0; $i < count($category); $i++) {
                                            $category_name = $category[$i]['category_name'];
                                            $category_id = $category[$i]['category_id'];
                                            $category_quantity = $category[$i]['quantity'];
                                            $html = '<option value="product.php?category=' . $category_id . '">' . $category_name . '  (' . $category_quantity . ')</option>';
                                            echo $html;
                                        }
                                    }
                                    ?>
                                </select>
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

                    <!-- show product -->
                    <div class="qodef-woo-product-list qodef-item-layout--info-below">
                        <!-- product grid -->
                        <ul class="products columns-3">
                            <?php
                            if (isset($_SESSION['products'])) {
                                $products = $_SESSION['products'];
                                for ($i = 0; $i < count($products); $i++) {
                                    $product_name = $products[$i]['product_name'];
                                    $product_id = $products[$i]['product_id'];
                                    $image_path = substr($products[$i]['image_path'], 3);
                                    $html = '<li class="product type-product post-162 status-publish first instock product_cat-anniversary product_tag-supplies product_tag-set product_tag-table has-post-thumbnail shipping-taxable purchasable product-type-simple">';
                                    $html = $html . '<div class="qodef-woo-product-inner">';
                                    $html = $html . '<div class="qodef-woo-product-image">';
                                    $html = $html . '<img width="600" height="734" src="' . $image_path . '" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="e" loading="lazy" />';
                                    $html = $html . '<div class="qodef-woo-product-image-inner"><a href="product-detail.php?product_id=' . $product_id . '" class="button product_type_simple add_to_cart_button ajax_add_to_cart" >Detail</a></div></div>';
                                    $html = $html . '<div class="qodef-woo-product-content"><h5 class="qodef-woo-product-title woocommerce-loop-product__title reponsive-name">' . $product_name . '</h5><span class="price"><span class="woocommerce-Price-amount amount"><bdi>Contact us</bdi></span></span></div>';
                                    $html = $html . '<a href="product-detail.php?product_id=' . $product_id . '" class="woocommerce-LoopProduct-link woocommerce-loop-product__link"></a></div></li> ';
                                    echo $html;
                                }
                            }
                            ?>
                        </ul>
                    </div>
                    <nav class="woocommerce-pagination">
                        <?php 
                        $name = "";
                        if (isset($_SESSION['name'])) {
                            $name = $_SESSION['name'];
                        }
                        $number_of_page = $_SESSION['number_of_page'];
                        $current_page = $_SESSION['current_page'];
                        if (isset($_SESSION['category_id'])) {                      
                            $category = $_SESSION['category_id'];
                            echo '<a class="previous page-numbers stepPage" href="product.php?current_page='.$current_page.'&number_of_page='.$number_of_page.'&category='.$category.'&page=previous&name='.$name.'"><span class="qodef-icon-linea-icons icon-arrows-left"></span></a>';
                        }else{
                            echo '<a class="previous page-numbers stepPage" href="product.php?current_page='.$current_page.'&number_of_page='.$number_of_page.'&page=previous&name='.$name.'"><span class="qodef-icon-linea-icons icon-arrows-left"></span></a>';
                        }
                        ?> 
                        <?php
                        $category  = "";
                        if (isset($_SESSION['category_id'])) {
                            $category = $_SESSION['category_id'];
                        }
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
                                if($category != ""){
                                    echo '<a class="page-numbers" href="product.php?category='.$category.'&page=01&name='.$name.'">01</a>';
                                }else{
                                    echo '<a class="page-numbers" href="product.php?page=01&name='.$name.'">01</a>';
                                }
                                echo '<a class="page-numbers" href="">...</a>';
                            }
                            for ($i = $start_point; $i <= $end_point; $i++) {
                                $page_num = '';
                                if ($i < 10) {
                                    $page_num = '0' . $i;
                                }else{
                                    $page_num =  $i;
                                }                                
                                if($category == ""){
                                    if($i == $current_page){
                                        echo '<a class="page-numbers current" href="product.php?page='.$i.'&name='.$name.'">'. $page_num . '</a>';
                                    }else{
                                        echo '<a class="page-numbers" href="product.php?page='.$i.'&name='.$name.'">'. $page_num . '</a>';
                                    }
                                }else{
                                    if($i == $current_page){
                                        echo '<a class="page-numbers current" href="product.php?category='.$category.'&page='.$i.'&name='.$name.'">' . $page_num . '</a>';
                                    }else{
                                        echo '<a class="page-numbers" href="product.php?category='.$category.'&page='.$i.'&name='.$name.'">' . $page_num . '</a>';
                                    }
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
                                if($category != ""){
                                    echo '<a class="page-numbers" href="product.php?category='.$category.'&page='.$page.'&name='.$name.'">'.$i.'</a>';
                                }else{
                                    echo '<a class="page-numbers" href="product.php?page='.$page.'&name='.$name.'">'.$i.'</a>';
                                }
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
                        if (isset($_SESSION['category_id'])) {                           
                            $category = $_SESSION['category_id'];
                            echo '<a class="previous page-numbers stepPage" href="product.php?current_page='.$current_page.'&number_of_page='.$number_of_page.'&category='.$category.'&page=next&name='.$name.'"><span class="qodef-icon-linea-icons icon-arrows-right"></span></a>';
                        }else{
                            echo '<a class="previous page-numbers stepPage" href="product.php?current_page='.$current_page.'&number_of_page='.$number_of_page.'&page=next&name='.$name.'"><span class="qodef-icon-linea-icons icon-arrows-right"></span></a>';
                        }
                        ?>                   
                    </nav>
                </div>
            </div>
        </main>
    </div>
</div>
<?php include("../includes/footer.php") ?>
<script src="../js/product.js"></script>