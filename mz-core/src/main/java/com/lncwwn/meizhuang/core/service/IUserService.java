package com.lncwwn.meizhuang.core.service;

import com.lncwwn.meizhuang.basic.pojo.User;

import java.util.List;

/**
 * Created with idea community version.
 *
 * @author victor.li
 * @date 5/21/15
 */
public interface IUserService {

    User getById(long id);

    User getByNick(String nick);

    List<User> getUsers();

    boolean create(User user);

}
