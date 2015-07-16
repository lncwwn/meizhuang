package com.lncwwn.meizhuang.core.service.impl;

import com.lncwwn.meizhuang.basic.pojo.Category;
import com.lncwwn.meizhuang.core.service.ICategoryService;
import com.lncwwn.meizhuang.db.dao.CategoryDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.SQLException;
import java.util.List;

/**
 * Created with idea community version.
 *
 * @author victor.li
 * @date 7/8/15
 */
@Service
public class CategoryService implements ICategoryService {

    @Autowired
    private CategoryDao categoryDao;

    @Override
    public List<Category> categories() {
        String sql = "select * from tb_category";
        List<Category> categories = null;
        try {
            categories = categoryDao.findAll(Category.class, sql);
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return categories;
    }

}
