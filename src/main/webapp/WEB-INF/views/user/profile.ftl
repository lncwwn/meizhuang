<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="${base}/static/css/lib/bootstrap.min.css" type="text/css" rel="stylesheet">
    <link href="${base}/static/css/lib/bootstrap-theme.min.css" type="text/css" rel="stylesheet">
    <link href="${base}/static/css/basic.css" type="text/css" rel="stylesheet">
    <title>个人主页|美桩网</title>
</head>
<body>
    <div class="container-fluid">
        <#include "/common/header.ftl" />
        <div class="main">

        </div>
    </div>
    <#include "/common/common.ftl" />
</body>
<script type="text/javascript" data-main="${base}/static/js/main" src="${base}/static/js/lib/require.js"></script>
<script data-module="profile"></script>
</html>