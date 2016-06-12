<?php
header('Content-Type : text/xml');
echo '<?xml version="1.0" encoding="UTF-8" standalone="yes" ?>';


echo '<response>';

	//$food=$_GET['food'];
	$food='tun';
	$foodArray=array('tuna','beef','bacon');
	
	if(in_array($food,$foodArray))
		echo 'We do have '.$food.'!';
	elseif($food=='')
		echo 'Enter a food';
		else
			echo 'We don\'t have '.$food;
echo '</response>';


?>