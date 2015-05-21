package com.lncwwn.meizhuang.facade.impl;

import com.lncwwn.meizhuang.facade.IUserFacade;
import com.lncwwn.meizhuang.pojo.User;
import com.lncwwn.meizhuang.service.impl.UserService;
import com.lncwwn.meizhuang.util.StringUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

/**
 * Created with idea community version.
 *
 * @author victor.li
 * @date 5/21/15
 */
@Component
public class UserFacade implements IUserFacade {

    @Autowired
    private UserService userService;


    @Override
    public boolean login(User user) {
        String nick = user.getNick();
        if (null == nick || nick.isEmpty())
            return false;
        User u = userService.getByNick(nick);
        if (null != u) {
            if (u.getPassword().equals(user.getPassword())) {
                return true;
            }
        }

        return false;
    }

    /**
     * validate register params
     *
     * @param user
     * @return
     */
    public boolean validate(User user) {
        if (null != user) {
            String nick = user.getNick();
            String email = user.getEmail();
            String password = user.getPassword();
            if (null == nick || nick.isEmpty()) return false;
            if (null == email || email.isEmpty() || !StringUtil.isEmail(email)) return false;
            if (null != password && !(password.isEmpty()) &&
                    password.length() > 6 && password.length() < 18) return false;
            return true;
        }

        return false;
    }

    @Override
    public boolean register(User user) {
        if (validate(user)) {
            String nick = user.getNick();
            User u = userService.getByNick(nick);
            if (null != u) {
                return false;
            }
        }

        return false;
    }

    @Override
    public boolean logout(User user) {
        return false;
    }

    @Override
    public boolean changePassword(User user) {
        return false;
    }
}
