<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="${base}/static/css/lib/bootstrap.min.css" type="text/css" rel="stylesheet">
    <link href="${base}/static/css/lib/bootstrap-theme.min.css" type="text/css" rel="stylesheet">
    <link href="${base}/static/css/basic.css" type="text/css" rel="stylesheet">
    <title>用户注册|美桩网</title>
</head>
<body>
    <div class="container-fluid">
        <#include "/common/header.ftl" />
        <div class="main">
            <form class="form-area" action="${base}/user/signup/" method="post">
                <h3>用户注册</h3>
                <input type="text" class="form-control" name="name" placeholder="用户名" autofocus="true">
                <input type="password" class="form-control" name="password" placeholder="密码">
                <input type="password" class="form-control" name="password_confirm" placeholder="再次输入密码">
                <input type="text" class="form-control" name="email" placeholder="邮箱帐号">
                <button class="btn btn-default btn-primary btn-block" type="submit">注册</button>
                <div class="form-bottom">
                    已有账户? <a href="${base}/user/login">立即登录</a>
                </div>
            </form>
        </div>
    </div>
</body>