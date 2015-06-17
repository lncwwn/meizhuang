/**
 * login module
 * @author victor li
 * @date 2015/05/26
 */
define(['jquery', 'bootstrap', 'common'], function($, bootstrap, common) {

    /**
     * 收集登录表单参数
     */
    function collectParams() {
        var params = {};
        params.nick = $('input[name="nick"]').val();
        params.password = $('input[name="password"]').val();

        return params;
    }

    /**
     * 验证登录表单参数
     */
    function verifyParams(params) {
        var verify = {pass: false};
        if (!params.nick) {
            verify.msg = '请输入昵称';
        }
        if (!params.password) {
            verify.msg = '请输入密码';
        }
        if (verify.msg) {
            return verify;
        }

        return params;
    }

    /**
     * 提交登录请求
     */
    function login(params) {
        var url = base + '/user/login';
        $.post(url, 'params=' + JSON.stringify(params), function(data) {
            if (data) {
                data = JSON.parse(data);
                if (data.code === 1) {
                    location.href = base + '/';
                } else {
                    common.warn(data.msg);
                }
            }
        });
    }
$('#js-alert-modal').modal('show');
    $('body').on('click', 'button', function(e) {
        e.preventDefault();
    }).on('click', '.js-user-login-btn', function(e) {
        var params = collectParams();
        params = verifyParams(params);
        if (params.pass === false) {
            alert(params.msg);
            return;
        }
        login(params);
    });

});
