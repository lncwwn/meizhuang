package com.lncwwn.meizhuang.api;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.lncwwn.meizhuang.facade.impl.UserFacade;
import com.lncwwn.meizhuang.pojo.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * define user api
 *
 * @author victor.li
 * @date 5/20/15
 */
@Controller
@RequestMapping("/user")
public class UserApi extends BasicApi {

    @Autowired
    private UserFacade userFacade;

    /**
     * user register api
     * @return json string
     */
    @RequestMapping(value = "/register", method = RequestMethod.POST)
    @ResponseBody
    public String register(String params) {
        if (null == params) {
            return handler(2, "error", false);
        }
        JSONObject p = JSON.parseObject(params);
        String nick = p.getString("nick");
//        String name = p.getString("name");
        String password = p.getString("password");
        String email = p.getString("email");
        User user = new User();
        user.setNick(nick);
        user.setPassword(password);
//        user.setName(name);
        user.setEmail(email);
        if (userFacade.register(user)) {
            return handler(1, "success", true);
        }

        return handler(2, "error", false);
    }

}
