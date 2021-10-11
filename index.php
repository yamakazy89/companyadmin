<?php 
$indexonly = true;
include("functions.php");

?>
<!DOCTYPE html>
<html>

<?php require("inc/head.php"); ?>
<body id="page-top">

    <!-- Page Wrapper -->
    <div id="wrapper">
 	<div id="preloader"></div>



        <!-- Sidebar -->
		<?php require("inc/sidebar.php"); ?>
		<div id="content-wrapper" class="d-flex flex-column">
		<!-- Main Content -->
            <div id="content">
			<?php require("inc/nav.php"); ?>

        <!-- End of Sidebar -->
			<?=$content?>
        <!-- Content Wrapper -->
        <!-- End of Content Wrapper -->

			</div>
		</div>
    </div>
    <!-- End of Page Wrapper -->

    <!-- Scroll to Top Button-->
    <a class="scroll-to-top rounded" href="#page-top">
        <i class="fas fa-angle-up"></i>
    </a>

    

  
	<?php require("inc/scripts.php"); ?>

</body>
</html>