/**
 * user register module
 * @author victor li
 * @date 2015/05/20
 */
define(['jquery'], function($) {

    'use strict';

    /**
     * user register
     */
    function register(params) {
        var url = base + "/user/register";
        $.post(url, 'params=' + JSON.stringify(params), function(data) {
            console.log(data);
        });
    }

    function collectParams() {
        var params = {};
        params.nick = $('input[name="nick"]').val();
        params.password = $('input[name="password"]').val();
        params.passwordConfirm = $('input[name="password_confirm"]').val();
        params.email = $('input[name="email"]').val();

        return params;
    }

    function verifyParams(params) {
        var verify = {pass: false};
        if (!params.nick) {
            verify.msg = '请输入您的昵称';
        }
        if (!params.password) {
            verify.msg = '请输入您的密码';
        }
        if (!params.passwordConfirm) {
            verify.msg = '请再次输入您的密码';
        }
        if (!params.email) {
            verify.msg = '请输入您的邮箱地址';
        }
        if (params.password && params.passwordConfirm && params.password !== params.passwordConfirm) {
            verify.msg = '两次输入的密码不匹配';
        }
        if (verify.msg) {
            return verify;
        }

        return params;
    }

    $('body').on('click', 'button', function(e) {
        e.preventDefault();
    }).on('click', '.js-user-register-btn', function(e) {
        e.preventDefault();
        var params = collectParams();
        params = verifyParams(params);
        if (params.pass === false) {
            alert(params.msg);
            return;
        }
        register(params);
    });

});