package com.lncwwn.meizhuang.api;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * Created with idea community version.
 *
 * @author victor.li
 * @date 5/20/15
 */
@Controller
public class UserApi {

    /**
     * user register api
     * @return
     */
    @RequestMapping(value = "user/register", method = RequestMethod.POST)
    public Object register(String params) {
        return null;
    }

}
