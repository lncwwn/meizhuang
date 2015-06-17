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
                    <#if (!Session["user"]?exists)>
                        <li><a href="${base}/user/login/">登录</a></li>
                    <#else>
                    <#assign user = Session["user"]>
                        <li>
                            <a href="${base}/user/${Session["user"].id}" title="${Session["user"].nick}">
                                <#if (Session["user"].nick?length > 5)>
                                    ${Session["user"].nick?substring(0, 5)}...
                                <#else>
                                    ${Session["user"].nick}
                                </#if>
                            </a>
                        </li>
                        <li><a href="${base}/user/logout/${Session["user"].nick}">退出</a></li>
                    </#if>
                </ul>
            </div>
        </div>
    </div>
</div>