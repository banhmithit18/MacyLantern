<?php include("../includes/header.php") ?>
<?php require("../controllers/product_detail_controller.php") ?>
<?php
$product = null;
$product_detail = null;
$product_review = null;
$product_image = null;
$num_review = 0;
$average_star = 0;
if (isset($_SESSION['product'])) {
  $product = $_SESSION['product'];
}
if (isset($_SESSION['product_detail'])) {
  $product_detail = $_SESSION['product_detail'];
}
if (isset($_SESSION['product_image'])) {
  $product_image = $_SESSION['product_image'];
}
if (isset($_SESSION['product_review'])) {
  $product_review = $_SESSION['product_review'];
}
if (isset($_SESSION['num_review'])) {
  $num_review = $_SESSION['num_review'];
}
if (isset($_SESSION['average_star'])) {
  $average_star = $_SESSION['average_star'];
}
?>
<!-- change style navigation -->
<style>
  #qodef-page-outer {
    margin-top: 0px;
  }

  .qodef-page-title .qodef-m-content {
    padding-top: 0px;
  }

  .woocommerce-product-gallery {
    opacity: 1 !important;
  }
</style>
<div id="qodef-page-outer">
  <div class="qodef-page-title qodef-m qodef-title--standard-with-breadcrumbs qodef-title-text--left">
    <div class="qodef-m-inner">
      <div class="qodef-m-content qodef-content-grid">
        <div itemprop="breadcrumb" class="qodef-breadcrumbs">
          <a itemprop="url" class="qodef-breadcrumbs-link" href="index.php"><span itemprop="title">Home</span></a><span class="qodef-breadcrumbs-separator"></span><a itemprop="url" class="qodef-breadcrumbs-link" href="product.php"><span itemprop="title">Shop</span></a><span class="qodef-breadcrumbs-separator"></span><span itemprop="title" class="qodef-breadcrumbs-current"><?php if ($product != null) {
                                                                                                                                                                                                                                                                                                                                                                                          echo $product[0]['product_name'];
                                                                                                                                                                                                                                                                                                                                                                                        } ?></span>
        </div>
      </div>
    </div>
  </div>

  <div id="qodef-page-inner" class="qodef-content-grid">
    <main id="qodef-page-content" class="qodef-grid qodef-layout--template qodef--no-bottom-space">
      <div class="qodef-grid-inner clear">
        <div class="qodef-page-border--left"></div>
        <div class="qodef-page-border--right"></div>
        <div id="qodef-woo-page" class="qodef-grid-item qodef--single qodef-popup--magnific-popup qodef-magnific-popup qodef-popup-gallery">
          <div class="woocommerce-notices-wrapper"></div>
          <!--product content-->
          <div id="product-162" style="padding-top:1%" class="product type-product post-162 status-publish first instock product_cat-anniversary product_tag-supplies product_tag-set product_tag-table has-post-thumbnail shipping-taxable purchasable product-type-simple">
            <div class="qodef-woo-single-inner">
              <!-- product main image-->
              <?php
              if ($product_image != null) {
                $html = '<div class="qodef-woo-single-image"><div class="woocommerce-product-gallery woocommerce-product-gallery--with-images woocommerce-product-gallery--columns-3 images qodef-position--below" data-columns="3" style="opacity: 0;transition: opacity 0.25s ease-in-out;"><figure class="woocommerce-product-gallery__wrapper">';
                for ($i = 0; $i < count($product_image); $i++) {
                  $image_path = substr($product_image[$i]['image_path'], 3);
                  if ($i == 0) {
                    $html = $html . ' <div data-thumb="' . $image_path . '" data-thumb-alt="e" class="woocommerce-product-gallery__image">';
                    $html = $html . ' <a href="' . $image_path . '"><img width="800" height="978" src="' . $image_path . '" class="wp-post-image" alt="e" loading="lazy" title="shop-img-1" data-caption="" data-src="' . $image_path . '" data-large_image="' . $image_path . '" data-large_image_width="800" data-large_image_height="978" /></a></div>';
                    $html = $html .  '<div class="qodef-woo-thumbnails-wrapper">';
                  } else {
                    $html = $html . '<div data-thumb="' . $image_path . '" data-thumb-alt="d" class="woocommerce-product-gallery__image"><a href="' . $image_path . '"><img width="600" height="715" src="' . $image_path . '" class="" alt="d" loading="lazy" title="shop-1-img-3" data-caption="" data-src="' . $image_path . '" data-large_image="' . $image_path . '" data-large_image_width="600" data-large_image_height="715" /></a></div>';
                  }
                }
                $html = $html . '</div></figure></div></div>';
                echo $html;
              }
              ?>
              <div class="summary entry-summary">
                <h2 class="qodef-woo-product-title product_title entry-title">
                  <?php if ($product != null) {
                    echo $product[0]['product_name'];
                  } ?>
                </h2>
                <!--rating star-->
                <div class="woocommerce-product-rating">
                  <div class="qodef-woo-ratings qodef-m">
                    <div class="qodef-m-inner">
                      <!--star inactive-->
                      <div class="qodef-m-star qodef--initial">
                        <span class="qodef-icon-elegant-icons icon_star_alt"></span><span class="qodef-icon-elegant-icons icon_star_alt"></span><span class="qodef-icon-elegant-icons icon_star_alt"></span><span class="qodef-icon-elegant-icons icon_star_alt"></span><span class="qodef-icon-elegant-icons icon_star_alt"></span>
                      </div>
                      <!--star active-->
                      <div class="qodef-m-star qodef--active" style="width: <?php echo $average_star; ?>%">
                        <span class="qodef-icon-elegant-icons icon_star"></span><span class="qodef-icon-elegant-icons icon_star"></span><span class="qodef-icon-elegant-icons icon_star"></span><span class="qodef-icon-elegant-icons icon_star"></span><span class="qodef-icon-elegant-icons icon_star"></span>
                      </div>
                    </div>
                  </div>
                  <!--count review-->
                  <a id="review-redict" href="#reviews" style="position:relative" class="woocommerce-review-link" rel="nofollow">(<?php echo $num_review; ?> customer review)</a>
                </div>
                <!--contact // price-->
                <p class="price">
                  <a href="contact-us.php?product_id=<?php echo $_SESSION['product_id'] ?>" class="woocommerce-Price-amount amount"><bdi>Contact us </bdi></a>
                </p>
                <!--product description sum-->
                <div class="woocommerce-product-details__short-description">
                  <p>
                    <?php if ($product != null) {
                      echo preg_split('#\r?\n#', ltrim($product[0]['product_description']), 2)[0];
                    } ?>
                  </p>
                </div>
              </div>
            </div>
            <div class="woocommerce-tabs wc-tabs-wrapper">
              <!--product tabs-->
              <ul class="tabs wc-tabs" role="tablist">
                <li class="description_tab" id="tab-title-description" role="tab" aria-controls="tab-description">
                  <a href="#tab-description"> Description </a>
                </li>
                <li class="additional_information_tab" id="tab-title-additional_information" role="tab" aria-controls="tab-additional_information">
                  <a href="#tab-additional_information">
                    Additional information
                  </a>
                </li>
                <li class="reviews_tab" id="tab-title-reviews" role="tab" aria-controls="tab-reviews">
                  <a href="#tab-reviews"> Reviews (<?php echo $num_review; ?>) </a>
                </li>
              </ul>

              <!-- product description-->
              <div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content wc-tab" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
                <h2>Description</h2>
                <p>
                  <?php if ($product != null) {
                    echo $product[0]['product_description'];
                  } ?>
                </p>
              </div>
              <!-- product another information-->
              <div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--additional_information panel entry-content wc-tab" id="tab-additional_information" role="tabpanel" aria-labelledby="tab-title-additional_information">
                <h2>Additional information</h2>
                <table class="woocommerce-product-attributes shop_attributes">
                  <?php
                  if ($product_detail != null) {
                    for ($i = 0; $i < count($product_detail); $i++) {
                      $name = $product_detail[$i]['product_detail_name'];
                      $value = $product_detail[$i]['product_detail_value'];
                      $html = '<tr class="woocommerce-product-attributes-item woocommerce-product-attributes-item--dimensions">';
                      $html = $html . ' <th class="woocommerce-product-attributes-item__label">' . $name . '</th>';
                      $html = $html . '<td class="woocommerce-product-attributes-item__value">' . $value . '</td></tr>';
                      echo $html;
                    }
                  }
                  ?>
                </table>
              </div>
              <!--comment-->
              <div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--reviews panel entry-content wc-tab" id="tab-reviews" role="tabpanel" aria-labelledby="tab-title-reviews">
                <!--review detail-->
                <div id="reviews" class="woocommerce-Reviews">
                  <div id="comments">
                    <!--count review-->
                    <h2 class="woocommerce-Reviews-title">
                      <?php echo $num_review ?> review for <span><?php if ($product != null) {
                                                                    echo $product[0]['product_name'];
                                                                  } ?></span>
                    </h2>
                    <!--comment list-->
                    <ol class="commentlist">
                      <!--comment-->
                      <?php
                      if ($product_review != null) {
                        for ($i = 0; $i < count($product_review); $i++) {
                          $review_name = $product_review[$i]['customer_name'];
                          $review_comment = $product_review[$i]['review_comment'];
                          $review_star = $product_review[$i]['review_star'] * 20;
                          $review_time = date_format(date_create($product_review[$i]['review_time']), "M d, Y");
                          $html = '<li class="review even thread-even depth-1" id="li-comment-5">
                                      <div id="comment-5" class="comment_container">
                                        <img data-del="avatar" src="../img/review/default_avatar.png" class="avatar pp-user-avatar avatar-60 photo" height="60" width="60" />
                                        <div class="comment-text">
                                          <div class="qodef-woo-ratings qodef-m">
                                            <div class="qodef-m-inner">
                                              <div class="qodef-m-star qodef--initial">
                                                <span class="qodef-icon-elegant-icons icon_star_alt"></span><span class="qodef-icon-elegant-icons icon_star_alt"></span><span class="qodef-icon-elegant-icons icon_star_alt"></span><span class="qodef-icon-elegant-icons icon_star_alt"></span><span class="qodef-icon-elegant-icons icon_star_alt"></span>
                                              </div>
                                              <div class="qodef-m-star qodef--active" style="width: ' . $review_star . '%">
                                                <span class="qodef-icon-elegant-icons icon_star"></span><span class="qodef-icon-elegant-icons icon_star"></span><span class="qodef-icon-elegant-icons icon_star"></span><span class="qodef-icon-elegant-icons icon_star"></span><span class="qodef-icon-elegant-icons icon_star"></span>
                                              </div>
                                            </div>
                                          </div>
                                          <p class="meta">
                                            <strong class="woocommerce-review__author">' . $review_name . '</strong>
                                            <span class="woocommerce-review__dash">&ndash;</span>
                                            <time class="woocommerce-review__published-date">' . $review_time . '</time>
                                          </p>
                                          <div class="description">
                                            <p>
                                            ' . $review_comment . '                              
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </li>';
                          echo $html;
                        }
                      }
                      ?>
                    </ol>
                    <nav class="woocommerce-pagination">
                      <?php
                      if (isset($_SESSION['number_of_page'])) {
                        $product_id = $_SESSION['product_id'];
                        $current_page = $_SESSION['current_page'];
                        $page = $_SESSION['number_of_page'];
                        $start_point = 1;
                        $end_point = $page;
                        $pre_flag = false;
                        $next_flag = false;
                        if ($page > 7) {
                          $num_page_next = $page - $current_page;
                          $num_page_pre = $current_page - 1;
                          if ($num_page_next > 2 && $num_page_pre > 2) {
                            $pre_flag = true;
                            $next_flag = true;
                            $start_point = $current_page - 1;
                            $end_point = $current_page + 1;
                          } else if ($num_page_pre <= 2 && $num_page_next > 2) {
                            $next_flag = true;
                            $start_point = 1;
                            $end_point = $current_page + 4 - $num_page_pre;
                          } else if ($num_page_pre > 2 && $num_page_next <= 2) {
                            $pre_flag = true;
                            $start_point = $current_page - 4 + $num_page_next;
                            $end_point = $page;
                          }
                        }
                        if ($pre_flag == true) {
                          echo '<a id="changePage" class="page-numbers" href="product-detail.php?product_id=' . $product_id . '&page=01">01</a>';
                          echo '<a class="page-numbers" href="">...</a>';
                        }
                        for ($i = $start_point; $i <= $end_point; $i++) {
                          $page_num = '';
                          if ($i < 10) {
                            $page_num = '0' . $i;
                          } else {
                            $page_num =  $i;
                          }
                          if ($i == $current_page) {
                            echo '<a id="changePage" class="page-numbers current" href="product-detail.php?product_id=' . $product_id . '&page=' . $i . '">' . $page_num . '</a>';
                          } else {
                            echo '<a id="changePage" class="page-numbers" href="product-detail.php?product_id=' . $product_id . '&page=' . $i . '">' . $page_num . '</a>';
                          }
                        }

                        if ($next_flag == true) {
                          echo '<a class="page-numbers" href="">...</a>';
                          $i = 0;
                          if ($page < 10) {
                            $i = '0' . $page;
                          } else {
                            $i = $page;
                          }
                          echo '<a id="changePage" class="page-numbers" href="product-detail.php?product_id=' . $product_id . '&page=' . $page . '">' . $i . '</a>';
                        }
                      }
                      ?>

                    </nav>
                  </div>
                  <div id="review_form_wrapper">
                    <div id="review_form">
                      <div id="respond" class="comment-respond">
                        <span id="reply-title" class="comment-reply-title">Add a review</span>
                        <form action="product-detail.php?function=add-review&product_id=<?php echo $_SESSION['product_id'] ?>#reviews" method="post" id="commentform" class="comment-form">
                          <p class="comment-notes">
                            <span id="email-notes">Your email address will not be published.</span>
                            Required fields are marked
                            <span class="required">*</span>
                          </p>
                          <div class="comment-form-rating">
                            <label for="rating">Your rating&nbsp;<span class="required">*</span></label>
                            <select name="rating" id="rating" required>
                              <option value="">Rate&hellip;</option>
                              <option value="5">Perfect</option>
                              <option value="4">Good</option>
                              <option value="3">Average</option>
                              <option value="2">Not that bad</option>
                              <option value="1">Very poor</option>
                            </select>
                          </div>
                          <p class="comment-form-comment">
                            <label for="comment">Your review&nbsp;<span class="required">*</span></label><textarea id="comment" name="comment" cols="45" rows="8" required></textarea>
                          </p>
                          <p class="comment-form-author">
                            <label for="author">Name&nbsp;<span class="required">*</span></label><input id="author" name="author" type="text" value="" size="30" required />
                          </p>
                          <p class="comment-form-email">
                            <label for="email">Email&nbsp;<span class="required">*</span></label><input id="email" name="email" type="email" value="" size="30" pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,4}$" required />
                          </p>
                          <input id="product_id" name="product_id" type="hidden" value="<?php echo $_SESSION['product_id']?>" />
                          <p class="form-submit">
                            <input name="submmit" type="submit" id="submit" class="submit" value="Submit"/>
                          </p>
                        </form>
                      </div>
                    </div>

                  </div>
                  <div class="clear"></div>
                </div>
              </div>
            </div>
            <section class="related products">
              <h2>Related products</h2>
              <!--product layout-->
              <div class="qodef-woo-product-list qodef-item-layout--info-below">
                <!--product grid-->
                <ul class="products columns-3">
                  <?php 
                    $product_relative =  $_SESSION['product_relative'];
                    if($product_relative != null){
                      for($i = 0; $i < count($product_relative); $i++){
                        $product_name = $product_relative[$i]['product_name'];
                        $product_id = $product_relative[$i]['product_id'];
                        $image_path = substr($product_relative[$i]['image_path'], 3);
                        $html = ' <li class="product type-product post-256 status-publish first outofstock product_cat-simple product_tag-supplies product_tag-handmade product_tag-set has-post-thumbnail shipping-taxable purchasable product-type-simple">
                                    <div class="qodef-woo-product-inner">
                                      <div class="qodef-woo-product-image">
                                        <img width="600" height="734" src="'.$image_path.'" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="c" loading="lazy"  />
                                        <div class="qodef-woo-product-image-inner">
                                          <a href="product-detail.php?product_id='.$product_id.'" data-quantity="1" class="button product_type_simple" rel="nofollow">Read more</a>
                                        </div>
                                      </div>
                                      <div class="qodef-woo-product-content">
                                        <h5 class="qodef-woo-product-title woocommerce-loop-product__title">'.$product_name.'</h5>
                                        <span class="price"><span class="woocommerce-Price-amount amount"><bdi>Contact us</bdi></span></span>
                                      </div>
                                      <a href="product-detail.php?product_id='.$product_id.'" class="woocommerce-LoopProduct-link woocommerce-loop-product__link"></a>
                                    </div>
                                  </li>';
                        echo $html;
                      }
                    }
                  ?>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  </div>
</div>
<?php
include('../includes/footer.php');
?>
<script>
  window.addEventListener('load', function() {
    var isPaginate = <?php echo isset($_SESSION['isPaginate']) ? "true" : "false"; ?>;
    if (isPaginate == true) {
      document.getElementById("review-redict").click();
    }
    var star_1 = document.getElementsByClassName('star-1')[0];
    var star_2 = document.getElementsByClassName('star-2')[0];
    var star_3 = document.getElementsByClassName('star-3')[0];
    var star_4 = document.getElementsByClassName('star-4')[0];
    var star_5 = document.getElementsByClassName('star-5')[0];

    star_1.addEventListener("click", function() {
      var flag = false;
      if (star_1.classList.contains("active")) {
        flag = true
      }
      setTimeout(function() {
        if (flag == true) {
          star_1.className = "star-1";
        }
      }, 100);
    })

    star_2.addEventListener("click", function() {
      var flag = false;
      if (star_2.classList.contains("active")) {
        flag = true
      }
      setTimeout(function() {
        if (flag == true) {
          star_2.className = "star-2";
        }
      }, 100);
    })

    star_3.addEventListener("click", function() {
      var flag = false;
      if (star_3.classList.contains("active")) {
        flag = true
      }
      setTimeout(function() {
        if (flag == true) {
          star_3.className = "star-3";
        }
      }, 100);
    })

    star_4.addEventListener("click", function() {
      var flag = false;
      if (star_4.classList.contains("active")) {
        flag = true
      }
      setTimeout(function() {
        if (flag == true) {
          star_4.className = "star-4";
        }
      }, 100);
    })

    star_5.addEventListener("click", function() {
      var flag = false;
      if (star_5.classList.contains("active")) {
        flag = true
      }
      setTimeout(function() {
        if (flag == true) {
          star_5.className = "star-5";
        }
      }, 100);
    })
  })

</script>