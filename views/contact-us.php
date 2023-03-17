<?php include("../includes/header.php") ?>
<?php require("../controllers/contact_us_controller.php") ?>

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
                <h5 class="qodef-m-title entry-title">Contact us</h5>
                <div itemprop="breadcrumb" class="qodef-breadcrumbs">
                    <a itemprop="url" class="qodef-breadcrumbs-link" href="index.php"><span itemprop="title">Home</span></a><span class="qodef-breadcrumbs-separator"></span><span itemprop="title" class="qodef-breadcrumbs-current">Contact us</span>
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


                    <div class="qodef-content-grid">
                        <div class="vc_row wpb_row vc_row-fluid vc_custom_1574162719440">
                            <div class="wpb_column vc_column_container vc_col-sm-12">
                                <div class="vc_column-inner">
                                    <div class="wpb_wrapper">
                                        <div class="qodef-shortcode qodef-m qodef-section-title qodef-alignment--center">
                                            <p class="qodef-m-subtitle">
                                                Ready to get in touch?
                                            </p>
                                            <h2 class="qodef-m-title">Make a Request</h2>
                                        </div>
                                        <div class="vc_empty_space" style="height: 48px">
                                            <span class="vc_empty_space_inner"></span>
                                        </div>
                                        <div role="form" class="wpcf7" id="wpcf7-f31-p15-o1" lang="en-US" dir="ltr">
                                            <div class="screen-reader-response">
                                                <p role="status" aria-live="polite" aria-atomic="true"></p>
                                                <ul></ul>
                                            </div>
                                            <form action="contact-us.php?function=contact" method="post" class="wpcf7-form init" data-status="init">
                                                <div class="qodef-grid qodef-layout--template">
                                                    <div class="qodef-grid-inner">
                                                        <div class="qodef-grid-item qodef-col--6">
                                                            <span class="wpcf7-form-control-wrap your-name"><input type="text" name="name" value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder="Name" required/></span>
                                                        </div>
                                                        <div class="qodef-grid-item qodef-col--6">
                                                            <span class="wpcf7-form-control-wrap your-email"><input type="email" name="email" value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email" aria-required="true" aria-invalid="false" placeholder="Email" pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,4}$" required /></span>
                                                        </div>
                                                        <div class="qodef-grid-item qodef-col--12">
                                                            <span class="wpcf7-form-control-wrap your-message">
                                                                <textarea name="message" cols="40" rows="10" class="wpcf7-form-control wpcf7-textarea" aria-invalid="false" placeholder="Message"  required> </textarea>
                                                            </span>
                                                        </div>
                                                        <input id="product_id" name="product_id" type="hidden" value="<?php echo $_SESSION['product_id']?>" />
                                                        <div class="qodef-grid-item qodef-col--12" style="margin-top: 27px; text-align: center">
                                                            <button type="submit" class="wpcf7-form-control wpcf7-submit qodef-size--large qodef-button qodef-size--normal qodef-type--filled qodef-m">
                                                                <span class="qodef-m-text">Get in touch</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="wpcf7-response-output" aria-hidden="true"></div>
                                            </form>
                                        </div>
                                        <br>
                                        <br>
                                        <div class="qodef-shortcode qodef-m qodef-section-title qodef-alignment--center">
                                            <p class="qodef-m-subtitle">
                                                Or contact us though social media
                                            </p>

                                            <a class="qodef-m-subtitle" target="_blank" rel="noopener" href="<?php echo $fb; ?>">Facebook</a>
                                            <a class="qodef-m-subtitle" style="padding: 50px ;" target="_blank" rel="noopener" href="<?php echo $pin; ?>">Pinterest</a>
                                            <a class="qodef-m-subtitle" target="_blank" rel="noopener" href="<?php echo $ins; ?>">Instagram</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
        </main>
    </div>
</div>

<?php include('../includes/footer.php') ?>