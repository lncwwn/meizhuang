package com.lncwwn.meizhuang.controller;

import com.lncwwn.meizhuang.pojo.User;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpSession;

/**
 * index controller.
 *
 * @author victor.li
 * @date 2015/05/19
 */
@Controller
public class IndexController extends BasicController {

    @RequestMapping({"/", "/index"})
    public ModelAndView index(HttpSession session) {
        ModelAndView mv = new ModelAndView();
        User user = (User) session.getAttribute("user");

        mv.setViewName("index");
        mv.addObject("user", user);

        return mv;
    }

}
