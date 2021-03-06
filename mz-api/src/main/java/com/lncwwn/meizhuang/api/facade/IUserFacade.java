package com.lncwwn.meizhuang.api.facade;

import com.lncwwn.meizhuang.basic.pojo.User;

/**
 * Created with idea community version.
 *
 * @author victor.li
 * @date 5/21/15
 */
public interface IUserFacade {

    /**
     * user login
     * @param user
     * @return
     */
    User login(User user);

    /**
     * user register
     * @param user
     * @return
     */
    boolean register(User user);

    boolean logout(User user);

    boolean changePassword(User user);

}
