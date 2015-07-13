package com.lncwwn.meizhuang.core.service.impl;

import com.lncwwn.meizhuang.core.dao.UserDao;
import com.lncwwn.meizhuang.core.pojo.User;
import com.lncwwn.meizhuang.core.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.SQLException;
import java.util.Date;
import java.util.List;

/**
 * implemented <code>IUserService</code> interface
 *
 * @author victor.li
 * @date 5/21/15
 */
@Service
public class UserService implements IUserService {

    @Autowired
    private UserDao userDao;

    @Override
    public User getById(long id) {
        String sql = "select * from tb_user where id = ?";
        try {
            return userDao.find(User.class, sql, id);
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return null;
    }

    /**
     * get user by nick
     * @param nick
     * @return
     */
    @Override
    public User getByNick(String nick) {
        String sql = "select * from tb_user where nick = ?";
        try {
            return userDao.find(User.class, sql, nick);
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return null;
    }

    /**
     * get user by email
     * @param email
     * @return
     */
    public User getByEmail(String email) {
        String sql = "select * from tb_user where email = ?";
        try {
            return userDao.find(User.class, sql, email);
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return null;
    }

    @Override
    public List<User> getUsers() {
        String sql = "select * from tb_user";
        try {
            return userDao.findAll(User.class, sql);
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return null;
    }

    @Override
    public boolean create(User user) {
        String sql = "insert into tb_user (nick, email, password, joined) values (?, ?, ?, ?)";
//        String name = user.getName();
        String nick = user.getNick();
        String email = user.getEmail();
//        String phone = user.getPhone();
        String password = user.getPassword();
        try {
            if (userDao.insert(sql, nick, email, password, new Date()) > 0) {
                return true;
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return false;
    }
}
