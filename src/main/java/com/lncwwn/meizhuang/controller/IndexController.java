package com.lncwwn.meizhuang.controller;

import com.lncwwn.meizhuang.pojo.User;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

/**
 * index controller.
 *
 * @author victor.li
 * @date 2015/05/19
 */
@Controller
public class IndexController extends BasicController {

    @RequestMapping({"/", "/index"})
    public ModelAndView index() {
        ModelAndView mv = new ModelAndView();
        User user = getLoginUser("victor");
        mv.addObject("currentUser", user);

        mv.setViewName("index");

        return mv;
    }

}
