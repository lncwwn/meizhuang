package com.lncwwn.meizhuang.service;

import com.lncwwn.meizhuang.pojo.User;

import java.util.List;

/**
 * Created with idea community version.
 *
 * @author victor.li
 * @date 5/21/15
 */
public interface IUserService {

    User getById(long id);

    /**
     * find user by string type param
     * @param param
     * @return
     */
    User getByParam(String... param);

    List<User> getUsers();

}
