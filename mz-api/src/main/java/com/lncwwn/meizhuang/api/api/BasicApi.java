package com.lncwwn.meizhuang.api.api;

import com.alibaba.fastjson.JSON;
import com.lncwwn.meizhuang.basic.pojo.User;
import org.springframework.web.context.request.RequestAttributes;
import org.springframework.web.context.request.RequestContextHolder;

import java.util.HashMap;
import java.util.Map;

/**
 * Api基类
 *
 * @author victor.li
 * @date 5/20/15
 */
public class BasicApi {

    protected User getLoginUser(String nick) {
        User user = (User) RequestContextHolder.getRequestAttributes()
                .getAttribute(nick, RequestAttributes.SCOPE_GLOBAL_SESSION);
        return user;
    }

    protected void setLoginUser(String nick, User user) {
        RequestContextHolder.getRequestAttributes()
                .setAttribute(nick, user, RequestAttributes.SCOPE_GLOBAL_SESSION);
    }

    protected void removeLoginUser(String nick) {
        RequestContextHolder.getRequestAttributes()
                .removeAttribute(nick, RequestAttributes.SCOPE_GLOBAL_SESSION);
    }

    protected String handler(int code, String msg, Object data) {
        Map<String, Object> obj = new HashMap<>();
        obj.put("code", code);
        obj.put("msg", msg);
        obj.put("data", data);

        return JSON.toJSONString(obj);
    }

}
