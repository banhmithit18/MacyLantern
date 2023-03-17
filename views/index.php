<?php include("../includes/header.php") ?>
<?php require("../controllers/banner_controller.php") ?>

<!-- change color navigation bar -->
<style>
  .text-color {
    color: #fff;
  }

  .qodef-header--dark #qodef-page-header .qodef-header-navigation>ul>li>a {
    color: #FFF;
  }

  .qodef-header--dark .qodef-side-area-opener.qodef-side-area-opener--predefined .qodef-line {
    background-color: #FFF;
  }

  @media screen and (min-width: 0) {
    #quote-content {
      font-size: 25px;
    }

    #quote-author {
      font-size: 15px;
    }
  }

  @media screen and (min-width: 500px) {
    #quote-content {
      font-size: 50px;
    }

    #quote-author {
      font-size: 25px;
    }
  }
</style>

<div id="qodef-page-outer">
  <div id="qodef-page-inner" class="qodef-content-full-width">
    <div class="qodef-page-border--left"></div>
    <div class="qodef-page-border--right"></div>
    <main id="qodef-page-content" class="qodef-grid qodef-layout--template">
      <div class="qodef-grid-inner clear">
        <div class="qodef-grid-item qodef-page-content-section qodef-col--12">
          <div class="vc_row wpb_row vc_row-fluid vc_row-o-full-height vc_row-o-columns-middle vc_row-flex">
            <div class="wpb_column vc_column_container vc_col-sm-12">
              <div class="vc_column-inner">
                <div class="wpb_wrapper">
                  <p class="rs-p-wp-fix"></p>
                  <rs-module-wrap id="rev_slider_1_1_wrapper" data-source="gallery" style="
                            background: transparent;
                            padding: 0;
                            background-image: url(img/banner/banner_3.jpeg);
                            background-repeat: no-repeat;
                            background-size: cover;
                            background-position: center center;
                          ">
                    <rs-module id="rev_slider_1_1" data-version="6.2.22">
                      <rs-slides>
                        <?php
                        $banners = $_SESSION['banners'];
                        if ($banners != null) {
                          for ($i = 0; $i < count($banners); $i++) {
                            $banner_type = $banners[$i]['banner_type'];
                            if ($banner_type == "1") {
                              $banner_title = $banners[$i]['banner_title'];
                              $banner_link = $banners[$i]['banner_link'];
                              $image_path = substr($banners[$i]['image_path'], 3);
                              $html = '<rs-slide data-key="rs-' . ($i + 1) . '" data-title="Slide" data-anim="ei:d;eo:d;s:1000;r:0;t:fade;sl:0;">
                                        <img src="' . $image_path . '" alt="x" title="h1-slider-img-2" width="1920" height="1100" data-panzoom="d:10000;ss:105%;se:100%;" class="rev-slidebg" data-no-retina />
                                        <rs-layer id="slider-1-slide-4-layer-1" data-type="text" data-xy="x:c;xo:0,7px,0,0;y:m;yo:-47px,-43px,11px,1px;" data-text="w:normal;s:115,95,80,50;l:100,100,85,55;a:center;" data-dim="w:943px,696px,502px,394px;" data-basealign="slide" data-rsp_o="off" data-rsp_bd="off" data-frame_0="y:50;" data-frame_1="st:200;sp:800;" data-frame_999="o:0;st:w;sR:7790;" style="
                                                  z-index: 12;
                                                  font-family: Cormorant Garamond;
                                                  font-style: italic;
                                                ">' . $banner_title . ' </rs-layer>
                                        <rs-layer id="slider-1-slide-4-layer-2" data-type="text" data-xy="x:c;y:m;yo:154px,146px,157px,136px;" data-text="s:20,15,11,6;l:25,19,14,8;" data-basealign="slide" data-rsp_o="off" data-rsp_bd="off" data-frame_0="y:50;" data-frame_1="st:300;sp:800;" data-frame_999="o:0;st:w;sR:7610;" style="z-index: 13; font-family: Roboto"><a class="qodef-shortcode qodef-m qodef-button qodef-layout--outlined qodef-html--link" href="' . $banner_link . '" target="_self" data-hover-color="#3e3930" data-hover-background-color="#ffffff" data-hover-border-color="#ffffff" style="
                                                color: #ffffff;
                                                border-color: #ffffff;
                                                padding: 7px 42px;
                                              ">
                                          <span class="qodef-m-text">Read more</span>
                                        </a>
                                        </rs-layer>
                                        </rs-slide>';
                              echo $html;
                            }
                          }
                        }
                        ?>
                      </rs-slides>
                    </rs-module>
                    <script type="text/javascript">
                      setREVStartSize({
                        c: "rev_slider_1_1",
                        rl: [1920, 1700, 1025, 767],
                        el: [1100, 768, 960, 720],
                        gw: [1300, 1100, 1025, 480],
                        gh: [1100, 768, 960, 720],
                        type: "standard",
                        justify: "",
                        layout: "fullscreen",
                        offsetContainer: "",
                        offset: "",
                        mh: "0",
                      });
                      var revapi1, tpj;

                      function revinit_revslider11() {
                        jQuery(function() {
                          tpj = jQuery;
                          revapi1 = tpj("#rev_slider_1_1");
                          if (
                            revapi1 == undefined ||
                            revapi1.revolution == undefined
                          ) {
                            revslider_showDoubleJqueryError(
                              "rev_slider_1_1"
                            );
                          } else {
                            revapi1.revolution({
                              sliderLayout: "fullscreen",
                              visibilityLevels: "1920,1700,1025,767",
                              gridwidth: "1300,1100,1025,480",
                              gridheight: "1100,768,960,720",
                              perspectiveType: "local",
                              editorheight: "1100,768,960,720",
                              responsiveLevels: "1920,1700,1025,767",
                              progressBar: {
                                disableProgressBar: true
                              },
                              navigation: {
                                onHoverStop: false,
                                arrows: {
                                  enable: true,
                                  tmp: '<span><svg x="0px" y="0px"	 width="42.829px" height="72.992px" viewBox="0 0 42.829 72.992" enable-background="new 0 0 42.829 72.992" xml:space="preserve">	<g>		<line fill="none" stroke="#FFFFFF" stroke-linecap="round" stroke-linejoin="round" x1="42.329" y1="36.496" x2="0.5" y2="0.5"/>					<line fill="none" stroke="#FFFFFF" stroke-linecap="round" stroke-linejoin="round" x1="0.5" y1="72.492" x2="42.329" y2="36.496"/>	</g></g></svg></span>',
                                  style: "banquetsvg",
                                  hide_onmobile: true,
                                  hide_under: "1025px",
                                  left: {
                                    h_offset: 30,
                                  },
                                  right: {
                                    anim: "zoomin",
                                    h_offset: 30,
                                  },
                                },
                                bullets: {
                                  enable: true,
                                  tmp: "",
                                  style: "custombullets2",
                                  hide_over: "1025px",
                                  space: 11,
                                },
                              },
                              fallbacks: {
                                allowHTML5AutoPlayOnAndroid: true,
                              },
                            });
                          }
                        });
                      } // End of RevInitScript
                      var once_revslider11 = false;
                      if (document.readyState === "loading") {
                        document.addEventListener(
                          "readystatechange",
                          function() {
                            if (
                              (document.readyState === "interactive" ||
                                document.readyState === "complete") &&
                              !once_revslider11
                            ) {
                              once_revslider11 = true;
                              revinit_revslider11();
                            }
                          }
                        );
                      } else {
                        once_revslider11 = true;
                        revinit_revslider11();
                      }
                    </script>

                  </rs-module-wrap>
                </div>
              </div>
            </div>
          </div>

          <!--quote -->
          <div class="qodef-content-grid">
            <div class="vc_row wpb_row vc_row-fluid wpb_animate_when_almost_visible   vc_custom_1576588215247 vc_row-o-content-middle vc_row-flex qodef-content-alignment-center">
              <div class="wpb_column vc_column_container vc_col-sm-12">
                <div class="vc_column-inner">
                  <div class="wpb_wrapper">
                    <div class="wpb_single_image wpb_content_element vc_align_center">
                      <figure class="wpb_wrapper vc_figure">
                        <div class="vc_single_image-wrapper vc_box_border_grey">
                          <img width="48" height="42" src="../img/quote.png" class="vc_single_image-img attachment-full" alt="e" loading="lazy" />
                        </div>
                      </figure>
                    </div>
                    <div class="vc_row wpb_row vc_inner vc_row-fluid">
                      <div class="wpb_column vc_column_container vc_col-sm-12">
                        <div class="vc_column-inner vc_custom_1576745358927">
                          <div class="wpb_wrapper">
                            <div class="wpb_text_column wpb_content_element">
                              <div class="wpb_wrapper">
                                <h3 id="quote-content">
                                  Alohamora wand elf parchment, Wingardium Leviosa hippogriff, house dementors betrayal.
                                </h3>
                              </div>
                            </div>
                            <div class="wpb_text_column wpb_content_element">
                              <div class="wpb_wrapper">
                                <h6 id="quote-author">Macy Mai</h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- content -->
          <?php
          $banners = $_SESSION['banners'];
          if ($banners != null) {
            $flag = true;
            for ($i = 0; $i < count($banners); $i++) {
              $banner_type = $banners[$i]['banner_type'];
              if ($banner_type == "2") {
                $banner_title = $banners[$i]['banner_title'];
                $banner_link = $banners[$i]['banner_link'];
                $banner_content = $banners[$i]['banner_content'];
                $image_path = substr($banners[$i]['image_path'], 3);
                $html = "";
                if ($flag) {
                  $flag = false;
                  $html = '<div class="vc_row wpb_row vc_row-fluid vc_custom_1572862193493 vc_row-o-content-middle vc_row-flex qodef-content-alignment-left">
                <div class="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-6 vc_col-md-12">
                  <div class="vc_column-inner vc_custom_1576766550468">
                    <div class="wpb_wrapper">
                      <div class="qodef-shortcode qodef-m qodef-stacked-images qodef-layout--default qodef-stack--bottom">
                        <div class="qodef-m-images">
                          <div class="qodef-e-main-image-holder">
                            <div class="qodef-e-main-image-zoom-holder">
                              <img width="1300" height="1123" src="' . $image_path . '" class="qodef-e-main-image" alt="x" loading="lazy" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-6 vc_col-md-12">
                  <div class="vc_column-inner vc_custom_1577090295829">
                    <div class="wpb_wrapper">
                      <div class="qodef-shortcode qodef-m qodef-section-title qodef-alignment--left">
                        <h4 class="qodef-m-title">' . $banner_title . '</h4>
                        <p class="qodef-m-text">
                        ' . $banner_content . '
                        </p>
                      </div>
                      <div class="vc_empty_space" style="height: 24px">
                        <span class="vc_empty_space_inner"></span>
                      </div>
                      <a class="qodef-shortcode qodef-m qodef-button qodef-layout--textual qodef-html--link" href="' . $banner_link . '" target="_self">
                        <span class="qodef-m-text">Read more</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>';
                } else {
                  $flag = true;
                  $html = '<div class="vc_row wpb_row vc_row-fluid vc_custom_1572862520397 vc_row-o-content-middle vc_row-flex qodef-content-alignment-left">
                <div class="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-6 vc_col-md-12">
                  <div class="vc_column-inner vc_custom_1576766761946">
                    <div class="wpb_wrapper">
                      <div class="qodef-shortcode qodef-m  qodef-section-title qodef-alignment--left ">
                        <h4 class="qodef-m-title">
                        ' . $banner_title . ' </h4>
                        <p class="qodef-m-text">
                        ' . $banner_content . '
                        </p>
                      </div>
                      <div class="vc_empty_space" style="height: 24px"><span class="vc_empty_space_inner"></span></div><a class="qodef-shortcode qodef-m  qodef-button qodef-layout--textual  qodef-html--link" href="' . $banner_link . '" target="_self">
                        <span class="qodef-m-text">Read more</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-6 vc_col-md-12">
                  <div class="vc_column-inner vc_custom_1576853684780">
                    <div class="wpb_wrapper">
                      <div class="qodef-shortcode qodef-m  qodef-stacked-images qodef-layout--default qodef-stack--bottom">
                        <div class="qodef-m-images">
                          <div class="qodef-e-main-image-holder">
                            <div class="qodef-e-main-image-zoom-holder">
                              <img width="1300" height="1123" src="' . $image_path . '" class="qodef-e-main-image" alt="x" loading="lazy" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>';
                }
                echo $html;
              }
            }
          }
          ?>

          <!--get in touch-->
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
                              <span class="wpcf7-form-control-wrap your-name"><input type="text" name="name" value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder="Name" required /></span>
                            </div>
                            <div class="qodef-grid-item qodef-col--6">
                              <span class="wpcf7-form-control-wrap your-email"><input type="email" name="email" value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email" aria-required="true" aria-invalid="false" placeholder="Email" pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,4}$" required /></span>
                            </div>
                            <div class="qodef-grid-item qodef-col--12">
                              <span class="wpcf7-form-control-wrap your-message">
                                <textarea name="message" cols="40" rows="10" class="wpcf7-form-control wpcf7-textarea" aria-invalid="false" placeholder="Message" required> </textarea>
                              </span>
                            </div>
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</div>


<?php include "../includes/footer.php" ?>