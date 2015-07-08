package com.lncwwn.meizhuang.service.impl;

import com.lncwwn.meizhuang.dao.CategoryDao;
import com.lncwwn.meizhuang.pojo.Category;
import com.lncwwn.meizhuang.service.ICategoryService;
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
