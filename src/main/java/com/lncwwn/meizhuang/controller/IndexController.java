package com.lncwwn.meizhuang.controller;

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
        System.out.println(getLoginUser("victor").getEmail());
        return new ModelAndView("index");
    }

}
