<?php include("../includes/header.php") ?>
<?php require("../controllers/faq_controller.php") ?>

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
                <h5 class="qodef-m-title entry-title">FAQS</h5>
                <div itemprop="breadcrumb" class="qodef-breadcrumbs">
                    <a itemprop="url" class="qodef-breadcrumbs-link" href="index.php"><span itemprop="title">Home</span></a><span class="qodef-breadcrumbs-separator"></span><span itemprop="title" class="qodef-breadcrumbs-current">FAQS</span>
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
                    <?php
                    $faq = $_SESSION['faq'];
                    if ($faq != null) {
                        for ($i = 0; $i < count($faq); $i++) {
                            if ($i > 0) {
                                echo ' <div class="line"></div>';
                            }
                            $a = $faq[$i]['faq_answer'];
                            $q = $faq[$i]['faq_question'];
                            $html = '<div class="faq-one">
                                            <h5 class="faq-page" style="color:darkblue">' . $q . '</h5>
                                            <div class="faq-body">
                                                <h6>' . $a . '</h6>
                                            </div>
                                        </div>';
                            echo $html;
                        }
                    }
                    ?>
                </div>
            </div>
        </main>
    </div>
</div>

<?php include("../includes/footer.php") ?>