<?php
  header('Access-Control-Allow-Origin: *');	
  header('application/json');
  $m = $_GET['radarloc'];
  $path = 'img2/'.$m;
  $files = [];
    $handle = @opendir('./' . $path . '/');

    while ($file = @readdir($handle))
      ("." !== $file && ".." !== $file) && array_push($files, $file);
    @closedir($handle);
    sort($files);
  unset($handle,$ext,$file,$path,$_POST);
  echo json_encode($files);

  //sort($files); 
    //uksort($files, "strnatcasecmp");
?>