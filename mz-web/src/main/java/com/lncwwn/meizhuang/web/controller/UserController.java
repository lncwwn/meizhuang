package com.lncwwn.meizhuang.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpSession;

/**
 * User controller.
 *
 * @author victor.li
 * @date 5/19/15
 */
@Controller
@RequestMapping("/user")
public class UserController extends BasicController {

    @RequestMapping(value = {"/login"}, method = RequestMethod.GET)
    public ModelAndView login() {
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

    @RequestMapping(value = "/logout/{nick}", method = RequestMethod.GET)
    public ModelAndView logout(HttpSession session, @PathVariable String nick) {
        session.invalidate();
        return new ModelAndView("redirect:/");
    }

    /**
     * user's profile page
     * @param id
     * @return
     */
    @RequestMapping(value = {"/{id}"}, method = RequestMethod.GET)
    public ModelAndView profile(@PathVariable long id) {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("user/profile");

        return mv;
    }

}
