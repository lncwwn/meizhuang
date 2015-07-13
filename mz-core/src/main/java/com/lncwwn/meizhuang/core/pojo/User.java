package com.lncwwn.meizhuang.core.pojo;

import java.io.Serializable;
import java.util.Date;

/**
 * 用户
 *
 * @author victor.li
 * @date 5/20/15
 */
public class User implements Serializable {

    private long id;
    private String nick;
    private String name;
    private String email;
    private String phone;
    private String password;
    private Date joined;
    private Date updated;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getNick() {
        return nick;
    }

    public void setNick(String nick) {
        this.nick = nick;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Date getJoined() {
        return joined;
    }

    public void setJoined(Date joined) {
        this.joined = joined;
    }

    public Date getUpdated() {
        return updated;
    }

    public void setUpdated(Date updated) {
        this.updated = updated;
    }
}
