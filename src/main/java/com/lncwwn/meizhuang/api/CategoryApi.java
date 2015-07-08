package com.lncwwn.meizhuang.api;

import com.lncwwn.meizhuang.pojo.Category;
import com.lncwwn.meizhuang.service.ICategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

/**
 * Created with idea community version.
 *
 * @author victor.li
 * @date 7/8/15
 */
@Controller
@RequestMapping("/category")
public class CategoryApi extends BasicApi {

    @Autowired
    private ICategoryService categoryService;

    @RequestMapping(value = "/list", method = RequestMethod.GET, produces = "text/html;charset=UTF-8")
    @ResponseBody
    public String categories() {
        List<Category> categories = categoryService.categories();
        return handler(1, "success", categories);
    }

}
