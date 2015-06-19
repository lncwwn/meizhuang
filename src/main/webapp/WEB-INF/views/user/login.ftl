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
        <div class="main" id="js-login-form">
            <!--form class="form-area" action="${base}/user/register/" method="post">
                <h3>用户登录</h3>
                <input type="text" class="form-control" name="nick" placeholder="用户名" autofocus="true">
                <input type="password" class="form-control" name="password" placeholder="密码">
                <div class="checkbox">
                    <label>
                        <input type="checkbox" name="remember"> 记住我
                    </label>
                </div>
                <button class="btn btn-default btn-primary btn-block js-user-login-btn"> 登录</button>
                <div class="form-bottom">
                    <a href="${base}/user/register">注册帐号</a> 或者 <a href="${base}/user/change_password">修改密码</a>
                </div>
            </form-->
        </div>
    </div>
    <#include "/common/common.ftl" />
</body>
<script src="${base}/static/build/common.js"></script>
<script src="${base}/static/build/login.js"></script>
</html>