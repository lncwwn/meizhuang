package com.lncwwn.meizhuang.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.context.request.RequestAttributes;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.servlet.ModelAndView;

/**
 * Created with idea community version.
 *
 * @author victor.li
 * @date 2015/05/19
 */
@Controller
public class IndexController {

    @RequestMapping({"/", "/index"})
    public ModelAndView index() {
        System.out.println(RequestContextHolder.getRequestAttributes().getAttribute("victor", RequestAttributes.SCOPE_GLOBAL_SESSION));
        return new ModelAndView("index");
    }

}
