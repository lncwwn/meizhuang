package com.lncwwn.meizhuang.web.controller;

import com.lncwwn.meizhuang.core.pojo.User;
import org.springframework.web.context.request.RequestAttributes;
import org.springframework.web.context.request.RequestContextHolder;

/**
 * Basic controller
 *
 * @author victor.li
 * @date 5/29/15
 */
public class BasicController {

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

}
