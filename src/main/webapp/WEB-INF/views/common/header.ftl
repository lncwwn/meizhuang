<script type="text/javascript">
    var base = "${base}";
</script>
<div class="header">
    <div class="navbar min-height mz-navbar" role="navigation">
        <div class="container-fluid">
            <div class="navbar-header">
                <a class="navbar-brand" href="${base}/">美桩网</a>
            </div>
            <div class="collapse navbar-collapse">
                <ul class="nav navbar-nav">
                    <li><a href="javascript:;">我的艺术馆</a></li>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                    <#if (!Session["currentUser"]?exists)>
                        <li><a href="${base}/user/login/"><span class="glyphicon glyphicon-log-in" aria-hidden="true"></span> 登录</a></li>
                    <#else>
                    <#assign user = Session["currentUser"]>
                        <li><a href="${base}/user/${Session["currentUser"].id}"><span class="glyphicon glyphicon-user" aria-hidden="true"></span> ${Session["currentUser"].nick}</a></li>
                        <li><a href="${base}/user/login/"><span class="glyphicon glyphicon-log-out" aria-hidden="true"></span> 退出</a></li>
                    </#if>
                </ul>
            </div>
        </div>
    </div>
</div>