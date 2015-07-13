package com.lncwwn.meizhuang.core.service;


import com.lncwwn.meizhuang.core.pojo.Category;

import java.util.List;

/**
 * Created with idea community version.
 *
 * @author victor.li
 * @date 7/8/15
 */
public interface ICategoryService {

    /**
     * load categories
     *
     * @return
     */
    List<Category> categories();

}
