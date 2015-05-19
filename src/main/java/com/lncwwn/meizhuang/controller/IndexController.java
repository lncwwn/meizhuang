package com.lncwwn.meizhuang.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

/**
 * Created with idea community version.
 * @author victor.li
 * @date 2015/05/19
 */
@Controller
public class IndexController {

    @RequestMapping({"/", "/index"})
    public ModelAndView index() {
        return new ModelAndView("index");
    }

}
