<?php 
session_start ();
if(!isset($_SESSION['user_id']))                            
 {
    header("Location: ../views/login.php"); 
 }
?>
    
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8 without BOM" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="" />
        <title>Admin</title>
        <link href="//cdn.datatables.net/1.12.1/css/jquery.dataTables.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css">
        <link href="../css/styles.css" rel="stylesheet" />
        <script src="https://use.fontawesome.com/releases/v6.1.0/js/all.js" crossorigin="anonymous" defer></script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery-confirm/3.3.2/jquery-confirm.min.css">


    </head>
    <body class="sb-nav-fixed">
        <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
            <!-- Navbar Brand-->
            <a class="navbar-brand ps-3" href="index.html">Admin</a>
            <!-- Sidebar Toggle-->
            <button class="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><i class="fas fa-bars"></i></button>
            <!-- Navbar-->
            <div class="d-none d-md-inline-block form-inline"></div>
        <ul class="navbar-nav ml-auto">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button"   data-toggle="dropdown" aria-expanded="false"><i class="fas fa-user fa-fw"></i></a>
                    <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href="#" data-toggle="modal" data-target="#modal-user-change-information">Change information</a></li>
                        <li><a class="dropdown-item" href="#" data-toggle="modal" data-target="#modal-user-change-password">Change password</a></li>                      
                        <li><hr class="dropdown-divider" /></li>
                        <li><a class="dropdown-item" id="logout">Logout</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
        <div id="layoutSidenav">
            <div id="layoutSidenav_nav">
                <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                    <div class="sb-sidenav-menu">
                        <div class="nav">
                            <div class="sb-sidenav-menu-heading">Core</div>
                            <a class="nav-link" href="index.html">
                                <div class="sb-nav-link-icon"><i class="fas fa-tachometer-alt"></i></div>
                                Dashboard
                            </a>
                            <div class="sb-sidenav-menu-heading">Interface</div>
                            <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                                <div class="sb-nav-link-icon"><i class="fas fa-columns"></i></div>
                                Pages
                                <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                            </a>
                            <div class="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                                <nav class="sb-sidenav-menu-nested nav">
                                    <a class="nav-link" href="../views/contact_us.php">Contact</a>
                                    <a class="nav-link" href="../views/product.php">Product</a>
                                    <a class="nav-link" href="../views/blog.php">Blog</a>
                                    <a class="nav-link" href="../views/contact_us.php">Review</a>
                                    <a class="nav-link" href="../views/customer.php">Customer</a>
                                    <a class="nav-link" href="../views/banner.php">Banner</a>
                                    <a class="nav-link" href="../views/faq.php">FAQ</a>
                                    <a class="nav-link" href="../views/category.php">Category</a>
                                    <a class="nav-link" href="../views/image.php">Image</a>
                                    <a class="nav-link" href="../views/user.php">User</a>
                                    <a class="nav-link" href="../views/log.php">Log</a>
                                    <a class="nav-link" href="../views/about_us.php">About us</a>
                                </nav>
                            </div>
                       
                            <div class="sb-sidenav-menu-heading">Addons</div>
                            <a class="nav-link" href="charts.html">
                                <div class="sb-nav-link-icon"><i class="fas fa-chart-area"></i></div>
                                Charts
                            </a>
                            <a class="nav-link" href="tables.html">
                                <div class="sb-nav-link-icon"><i class="fas fa-table"></i></div>
                                Tables
                            </a>
                        </div>
                    </div>
                    <div class="sb-sidenav-footer">
                        <div class="small">Logged in as:</div>
                        <?php  echo $_SESSION['user_username']; ?>
                    </div>
                </nav>
            </div>
            <div id="layoutSidenav_content">
