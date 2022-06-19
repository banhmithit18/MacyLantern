<!DOCTYPE html>
<html lang="en-US">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=yes" />
  <title>Macy Latern</title>

  <link rel="dns-prefetch" href="http://fonts.googleapis.com/" />
  <link rel="icon" href="img/logo.png">
  <link rel="stylesheet" href="css/style.css" type="text/css" media="all" />

  <style id="banquet-style-inline-css" type="text/css">
    #qodef-page-outer {
      margin-top: -105px;
    }

    @media only screen and (max-width: 1024px) {
      #qodef-page-outer {
        margin-top: -70px;
      }
    }

    #qodef-page-inner {
      padding: 0px;
    }

    .qodef-page-title .qodef-m-content {
      padding-top: 105px;
    }

    @media only screen and (max-width: 1024px) {
      .qodef-page-title .qodef-m-content {
        padding-top: 70px;
      }
    }
  </style>
  <script type="text/javascript" src="js/jquery.minaf6c.js" id="jquery-core-js"></script>
  <script type="text/javascript" src="js/jquery-migrate.mind617.js" id="jquery-migrate-js"></script>
  <script type="text/javascript" src="js/rbtools.min49c2.js" id="tp-tools-js"></script>
  <script type="text/javascript" src="js/rs6.min49c2.js" id="revmin-js"></script>
  <script type="text/javascript" src="js/jquery.blockUI.mina19f.js" id="jquery-blockui-js"></script>
  <script type="text/javascript" src="js/flatpickr.min69c8.js" id="ppress-flatpickr-js"></script>
  <script type="text/javascript" src="js/select2.min69c8.js" id="ppress-select2-js"></script>
  <script type="text/javascript">
    function setREVStartSize(e) {
      //window.requestAnimationFrame(function() {
      window.RSIW =
        window.RSIW === undefined ? window.innerWidth : window.RSIW;
      window.RSIH =
        window.RSIH === undefined ? window.innerHeight : window.RSIH;
      try {
        var pw = document.getElementById(e.c).parentNode.offsetWidth,
          newh;
        pw = pw === 0 || isNaN(pw) ? window.RSIW : pw;
        e.tabw = e.tabw === undefined ? 0 : parseInt(e.tabw);
        e.thumbw = e.thumbw === undefined ? 0 : parseInt(e.thumbw);
        e.tabh = e.tabh === undefined ? 0 : parseInt(e.tabh);
        e.thumbh = e.thumbh === undefined ? 0 : parseInt(e.thumbh);
        e.tabhide = e.tabhide === undefined ? 0 : parseInt(e.tabhide);
        e.thumbhide = e.thumbhide === undefined ? 0 : parseInt(e.thumbhide);
        e.mh =
          e.mh === undefined || e.mh == "" || e.mh === "auto" ?
          0 :
          parseInt(e.mh, 0);
        if (e.layout === "fullscreen" || e.l === "fullscreen")
          newh = Math.max(e.mh, window.RSIH);
        else {
          e.gw = Array.isArray(e.gw) ? e.gw : [e.gw];
          for (var i in e.rl)
            if (e.gw[i] === undefined || e.gw[i] === 0) e.gw[i] = e.gw[i - 1];
          e.gh =
            e.el === undefined ||
            e.el === "" ||
            (Array.isArray(e.el) && e.el.length == 0) ?
            e.gh :
            e.el;
          e.gh = Array.isArray(e.gh) ? e.gh : [e.gh];
          for (var i in e.rl)
            if (e.gh[i] === undefined || e.gh[i] === 0) e.gh[i] = e.gh[i - 1];

          var nl = new Array(e.rl.length),
            ix = 0,
            sl;
          e.tabw = e.tabhide >= pw ? 0 : e.tabw;
          e.thumbw = e.thumbhide >= pw ? 0 : e.thumbw;
          e.tabh = e.tabhide >= pw ? 0 : e.tabh;
          e.thumbh = e.thumbhide >= pw ? 0 : e.thumbh;
          for (var i in e.rl) nl[i] = e.rl[i] < window.RSIW ? 0 : e.rl[i];
          sl = nl[0];
          for (var i in nl)
            if (sl > nl[i] && nl[i] > 0) {
              sl = nl[i];
              ix = i;
            }
          var m =
            pw > e.gw[ix] + e.tabw + e.thumbw ?
            1 :
            (pw - (e.tabw + e.thumbw)) / e.gw[ix];
          newh = e.gh[ix] * m + (e.tabh + e.thumbh);
        }
        if (window.rs_init_css === undefined)
          window.rs_init_css = document.head.appendChild(
            document.createElement("style")
          );
        document.getElementById(e.c).height = newh + "px";
        window.rs_init_css.innerHTML +=
          "#" + e.c + "_wrapper { height: " + newh + "px }";
      } catch (e) {
        console.log("Failure at Presize of Slider:" + e);
      }
      //});
    }
  </script>
  <style type="text/css" id="wp-custom-css">
    .qodef-ft-logo {
      width: 120px;
    }

    @media only screen and (max-width: 680px) {
      .qodef-page-title.qodef-title--standard-with-breadcrumbs .qodef-breadcrumbs {
        line-height: 22px;
      }
    }
  </style>
  <style type="text/css" data-type="vc_shortcodes-custom-css">
    .vc_custom_1576588215247 {
      padding-top: 89px !important;
      padding-bottom: 107px !important;
    }

    .vc_custom_1572862193493 {
      padding-top: 0px !important;
      padding-bottom: 0px !important;
    }

    .vc_custom_1572862520397 {
      padding-top: 0px !important;
      padding-bottom: 0px !important;
    }

    .vc_custom_1572862193493 {
      padding-top: 0px !important;
      padding-bottom: 0px !important;
    }

    .vc_custom_1576674800955 {
      padding-top: 10px !important;
      padding-bottom: 142px !important;
    }

    .vc_custom_1575039864738 {
      padding-top: 546px !important;
      padding-bottom: 0px !important;
    }

    .vc_custom_1576674023077 {
      padding-top: 150px !important;
      padding-bottom: 73px !important;
    }

    .vc_custom_1574162719440 {
      padding-top: 110px !important;
      padding-bottom: 48px !important;
    }

    .vc_custom_1576674237460 {
      padding-top: 86px !important;
    }

    .vc_custom_1574757340369 {
      padding-top: 26px !important;
      padding-bottom: 35px !important;
    }

    .vc_custom_1576745358927 {
      margin-top: -10px !important;
      padding-top: 0px !important;
      padding-right: 25% !important;
      padding-bottom: 0px !important;
      padding-left: 25% !important;
    }

    .vc_custom_1576766550468 {
      padding-top: 0px !important;
      padding-right: 8.1% !important;
      padding-bottom: 0px !important;
    }

    .vc_custom_1577090295829 {
      padding-top: 0px !important;
      padding-right: 32% !important;
      padding-bottom: 67px !important;
      padding-left: 8.2% !important;
    }

    .vc_custom_1576766761946 {
      padding-top: 0px !important;
      padding-right: 8.2% !important;
      padding-bottom: 67px !important;
      padding-left: 33% !important;
    }

    .vc_custom_1576853684780 {
      padding-top: 0px !important;
      padding-bottom: 0px !important;
      padding-left: 8.1% !important;
    }

    .vc_custom_1576766746075 {
      padding-top: 0px !important;
      padding-right: 8.1% !important;
      padding-bottom: 0px !important;
    }

    .vc_custom_1577090330011 {
      padding-top: 0px !important;
      padding-right: 32% !important;
      padding-bottom: 67px !important;
      padding-left: 8.2% !important;
    }

    .vc_custom_1576668595581 {
      padding-bottom: 18px !important;
    }

    .vc_custom_1573042186472 {
      margin-top: -28px !important;
    }
  </style>
</head>


<body class="home page-template page-template-page-full-width page-template-page-full-width-php page page-id-15 theme-banquet qode-framework-1.1.3 woocommerce-no-js qodef-back-to-top--enabled qodef-content-grid-1300 qodef-content-behind-header qodef--page-has-borders qodef-header--dark qodef-header--standard qodef-header-appearance--none qodef-mobile-header--standard qodef-drop-down-second--full-width banquet-core-1.1 banquet-1.1 wpb-js-composer js-comp-ver-6.3.0 vc_responsive qodef-header-standard--center qodef-search--fullscreen">
  <div id="qodef-page-wrapper">
    <header id="qodef-page-header">
      <div id="qodef-page-header-inner">
        <a class="qodef-header-logo-link qodef-height--not-set" href="../index.html" rel="home">
          <img width="202" height="60" src="img/logo.png" class="qodef-header-logo-image qodef--main" alt="logo main" />
          <img width="202" height="60" src="img/logo.png" class="qodef-header-logo-image qodef--dark" alt="logo dark" loading="lazy" />
          <img width="202" height="60" src="img/logo.png" class="qodef-header-logo-image qodef--light" alt="logo main" loading="lazy" />
        </a>
        <nav class="qodef-header-navigation" role="navigation" aria-label="Top Menu">
          <ul id="qodef-main-navigation-menu" class="menu">
            <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children qodef-menu-item--narrow">
              <a href="#"><span class="qodef-menu-item-inner"><span class="qodef-menu-item-text text-color">Home</span></span></a><span class="qodef-menu-arrow"></span>
            </li>
            <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children qodef-menu-item--narrow">
              <a href="#"><span class="qodef-menu-item-inner"><span class="qodef-menu-item-text text-color">Products</span></span></a><span class="qodef-menu-arrow"></span>
            </li>
            <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children qodef-menu-item--narrow">
              <a href="#"><span class="qodef-menu-item-inner"><span class="qodef-menu-item-text text-color">About us</span></span></a><span class="qodef-menu-arrow"></span>
            </li>
            <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children qodef-menu-item--narrow">
              <a href="#"><span class="qodef-menu-item-inner"><span class="qodef-menu-item-text text-color">FAQs</span></span></a><span class="qodef-menu-arrow"></span>
            </li>
            <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children qodef-menu-item--narrow">
              <a href="#"><span class="qodef-menu-item-inner"><span class="qodef-menu-item-text text-color">Contact us</span></span></a><span class="qodef-menu-arrow"></span>
            </li>
            <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children qodef-menu-item--narrow">
              <a href="#"><span class="qodef-menu-item-inner"><span class="qodef-menu-item-text text-color">Blogs</span></span></a><span class="qodef-menu-arrow"></span>
            </li>
          </ul>
        </nav>
        <div class="qodef-widget-holder">
          <div id="banquet_core_side_area_opener-2" class="widget widget_banquet_core_side_area_opener qodef-header-widget-area-one" data-area="header-widget-one">
            <a itemprop="url" class="qodef-side-area-opener qodef-side-area-opener--predefined" data-hover-color="#ffffff" style="color: #ffffff" href="#">
              <span class="qodef-lines"><span class="qodef-line qodef-line-1"></span><span class="qodef-line qodef-line-2"></span></span>
            </a>
          </div>
        </div>
      </div>
    </header>
    <!--  header for mobile/tablet -->
    <header id="qodef-page-mobile-header">
      <div id="qodef-page-mobile-header-inner">
        <a itemprop="url" class="qodef-mobile-header-logo-link" href="../index.html" rel="home">
        <img src="img/logo.png" class="qodef-header-logo-image qodef--main" alt="logo main" />

          <img width="202" height="60" src="img/logo.png" class="qodef-header-logo-image qodef--dark" alt="logo dark" loading="lazy" />
          <img width="202" height="60" src="img/logo.png" class="qodef-header-logo-image qodef--light" alt="logo light" loading="lazy" /></a><a id="qodef-mobile-header-opener" href="#">
          <span class="qodef-lines">
            <span class="qodef-line qodef-line-1"></span>
            <span class="qodef-line qodef-line-2"></span>
          </span>
        </a>
        <nav id="qodef-mobile-header-navigation" class="qodef-m" role="navigation" aria-label="Mobile Menu">
          <div class="qodef-m-inner">
            <ul id="qodef-mobile-header-navigation-menu" class="qodef-content-grid">
              <li class="menu-item menu-item-type-custom menu-item-object-custom qodef-menu-item--narrow">
                <a href="#"><span class="qodef-menu-item-inner">Home</span></a><span class="qodef-menu-arrow"></span>
              </li>
              <li class="menu-item menu-item-type-custom menu-item-object-custom qodef-menu-item--narrow">
                <a href="#"><span class="qodef-menu-item-inner">Products</span></a><span class="qodef-menu-arrow"></span>
              </li>
              <li class="menu-item menu-item-type-custom menu-item-object-custom qodef-menu-item--narrow">
                <a href="#"><span class="qodef-menu-item-inner">About us</span></a><span class="qodef-menu-arrow"></span>
              </li>
              <li class="menu-item menu-item-type-custom menu-item-object-custom qodef-menu-item--narrow">
                <a href="#"><span class="qodef-menu-item-inner">FAQs</span></a><span class="qodef-menu-arrow"></span>
              </li>
              <li class="menu-item menu-item-type-custom menu-item-object-custom qodef-menu-item--narrow">
                <a href="#"><span class="qodef-menu-item-inner">Contact us</span></a><span class="qodef-menu-arrow"></span>
              </li>
              <li class="menu-item menu-item-type-custom menu-item-object-custom qodef-menu-item--narrow">
                <a href="#"><span class="qodef-menu-item-inner">Blogs</span></a><span class="qodef-menu-arrow"></span>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>

    <div id="qodef-page-outer">
      <div id="qodef-page-inner" class="qodef-content-full-width">
        <div class="qodef-page-border--left"></div>
        <div class="qodef-page-border--right"></div>
        <div id="side-navigation">
          <div class="qodef-content--left-side qodef-content-side">
            <div class="qodef-content-side-holder-outer">
              <div id="nav_menu-5" class="widget widget_nav_menu" data-area="content-side-area">
                <div class="menu-about-us-container">
                  <ul id="menu-about-us" class="menu">
                    <li id="menu-item-271" class="menu-item menu-item-type-custom menu-item-object-custom"><a href="../about-us/index.html">About us</a></li>
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
                    <li id="menu-item-272" class="menu-item menu-item-type-custom menu-item-object-custom"><a href="../press-awards/index.html">Contact us</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>