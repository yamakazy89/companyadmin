<?php 
	session_start();
	error_reporting(E_ALL);

	if(!isset($indexonly)){
		header("location:index.php");
		exit();
	}
	
	$requesturi = explode("/", parse_url($_SERVER['PHP_SELF'], PHP_URL_PATH));
	
	$basepage = "index.php";
	
	$requestedpage = "";
	$pageindex = "";
	$baseurl = "http://".$_SERVER["HTTP_HOST"];
	foreach($requesturi as $k=>$v){
		
		if($basepage == $v){
			$pageindex = $k+1;
			break;
		}
		$baseurl .=$v."/"; 
		
	}
	//print_r($requesturi[$pageindex]);
	$title = $_page  = $requesturi[$pageindex] ?? "dashboard";
	ob_start();
	include ("pages/".$_page.".php");
	$content = ob_get_clean();
	//$_SESSION["currentpage"] = $_page;
	$js = "scripts/".$_page.".js";
		
	

?>