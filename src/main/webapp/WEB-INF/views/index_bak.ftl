<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="${base}/static/css/lib/bootstrap.min.css" type="text/css" rel="stylesheet">
    <link href="${base}/static/css/lib/bootstrap-theme.min.css" type="text/css" rel="stylesheet">
    <link href="${base}/static/css/basic.css" type="text/css" rel="stylesheet">
    <title>美桩网</title>
</head>
<body>
    <div class="container-fluid">
        <#include "/common/header.ftl" />
        <div class="main">
        </div>
    </div>
</body>
<script type="text/javascript">
    var MZ = MZ || {};
    MZ.base = '${base}';
</script>
<script type="text/javascript" src="${base}/static/build/common.js"></script>
<script type="text/javascript" src="${base}/static/build/app.js"></script>
</html>
