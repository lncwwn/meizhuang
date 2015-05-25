package com.lncwwn.meizhuang.api;

import com.lncwwn.meizhuang.facade.impl.UserFacade;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * define user api
 *
 * @author victor.li
 * @date 5/20/15
 */
@Controller
public class UserApi {

    @Autowired
    private UserFacade userFacade;

    /**
     * user register api
     * @return
     */
    @RequestMapping(value = "user/register", method = RequestMethod.POST)
    public Object register(String params) {
        //userFacade.register();
        return null;
    }

}
