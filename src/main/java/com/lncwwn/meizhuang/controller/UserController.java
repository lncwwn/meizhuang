package com.lncwwn.meizhuang.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

/**
 * Created with idea community version.
 *
 * @author victor.li
 * @date 5/19/15
 */
@Controller
@RequestMapping("/user")
public class UserController {

    @RequestMapping("/login")
    public ModelAndView index() {
        return new ModelAndView("user/login");
    }

    /**
     * User register controller
     * @return
     */
    @RequestMapping(value = "/register", method = RequestMethod.GET)
    public ModelAndView register() {
        return new ModelAndView("user/register");
    }

}
