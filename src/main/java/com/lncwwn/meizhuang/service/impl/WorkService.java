package com.lncwwn.meizhuang.service.impl;

import com.lncwwn.meizhuang.dao.WorkDao;
import com.lncwwn.meizhuang.pojo.Work;
import com.lncwwn.meizhuang.service.IWorkService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.SQLException;
import java.util.Date;
import java.util.List;

/**
 * Created with idea community version.
 *
 * @author victor.li
 * @date 7/2/15
 */
@Service
public class WorkService implements IWorkService {

    @Autowired
    private WorkDao workDao;

    @Override
    public List<Work> list(Long userId, Integer offset, Integer limit) {
        List<Work> works = null;
        try {
            if (null != userId) {
                String sql = "select * from tb_work where user_id = ? order by created limit ?, ?";
                works = workDao.findAll(Work.class, sql, userId, offset, limit);
            } else {
                String sql = "select * from tb_work order by created limit ?, ?";
                works = workDao.findAll(Work.class, sql, offset, limit);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return works;
    }

    @Override
    public boolean publish(Work work) {
        if (null != work) {
            String sql = "insert into tb_work (user_id, name, description, address, " +
                    "price, sell_out, created, gallery_id) values (?, ?, ?, ?, ?, ?, ?, ?)";
            Long userId = work.getUser();
            String name = work.getName();
            String description = work.getDescription();
            String address = work.getAddress();
            Double price = work.getPrice();
            String priceStr = price.toString();
            Boolean sellOut = work.isSellOut();
            Date created = new Date();
            Long galleryId = work.getGallery();
            try {
                long effected = workDao.insert(sql, userId, name, description, address, priceStr, sellOut, created, galleryId);
                if (effected > 0) return true;
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }

        return false;

    }

}
