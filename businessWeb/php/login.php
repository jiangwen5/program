<?php
    header("Content-Type: application/json");
    header("Access-Control-Allow-Origin:*");
    include "public/connect_db.php";
    $json = json_decode(file_get_contents("php://input"));
    $username = $json -> username;
    $password = $json -> password;
    $coon = new db();
    $sql = "select * from shop_user WHERE username='$username' and  password='$password'";
    $rows = $coon -> Query($sql, 2);
    if($rows) {
      $arr = array("code" => "200", "msg"=>"", "data"=>array("id"=>$rows["id"], "token"=>"1234567899", "atavar"=> "http://www.aaa.com/path/a.png"));
    } else {
      $arr = array("code" => "1000", "msg" => "用户名或密码输入错误");
    }
    echo json_encode($arr);
  ?>