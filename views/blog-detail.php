<?php include("../includes/header.php") ?>
<?php require("../controllers/blog_detail_controller.php") ?>

<?php
$blog_title = "";
$blog_content ="";
if (isset($_SESSION['blog'])) {
    $blog = $_SESSION['blog'];
    $blog_title = $blog[0]['blog_title'];
    $blog_content =$blog[0]['blog_content'];
}

?>
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
                <div itemprop="breadcrumb" class="qodef-breadcrumbs">
                    <a itemprop="url" class="qodef-breadcrumbs-link" href="index.php"><span itemprop="title">Home</span></a><span class="qodef-breadcrumbs-separator"></span><span itemprop="title" class="qodef-breadcrumbs-current"><?php echo $blog_title; ?></span></span>
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

                    <br><br>
                    <div class="qodef-grid-inner clear">
                        <div class="qodef-grid-item qodef-page-content-section qodef-col--12">
                            <div class="qodef-blog qodef-m qodef--single">
                                <article class="qodef-blog-item qodef-e post-1471 post type-post status-publish format-standard has-post-thumbnail hentry category-essentials tag-ideas">
                                    <div class="qodef-e-inner">
                                        <div class="qodef-e-content">
                                            <div class="qodef-e-text">
                                                <!-- title -->
                                                <h3 itemprop="name" class="qodef-e-title entry-title">
                                                <?php echo $blog_title; ?>
                                                </h3>
                                                <!-- content -->
                                                <div class="vc_row wpb_row vc_row-fluid">
                                                    <div class="wpb_column vc_column_container vc_col-sm-12">
                                                        <div class="vc_column-inner vc_custom_1574156518805">
                                                            <div class="wpb_wrapper">
                                                                <div class="wpb_text_column wpb_content_element">
                                                                    <div class="wpb_wrapper">
                                                                        <p>
                                                                        <?php echo $blog_content; ?>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
        </main>
    </div>
</div>

<?php include('../includes/footer.php') ?>