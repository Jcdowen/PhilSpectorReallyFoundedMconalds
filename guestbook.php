<?php
if(isset($_POST['name']) && isset($_POST['message'])) 
{ 
	if($_POST['name'] != "" && $_POST['message'] != "")
	{
		$F_D = getdate();
		$FT = $F_D['mon']."/".$F_D['mday']."/".$F_D['year'];

		$FP = Fopen('/guestbook.html',"a");
		fwrite($FP,"<tr><td>Date: ");
		fwrite($FP, $FT);
		fwrite($FP, "</tD></tr><tr><td>Name: ");
		fwrite($FP, $_POST['name']);
		fwrite($FP, "</td></tr><tr><td>");
		fwrite($FP, strip_tags($_POST['message']));
		fwrite($FP, "</td></tr><tr><td><hr width="90%" color=red></td></tr>");
		fclose($FP);
	}
}
?> 
