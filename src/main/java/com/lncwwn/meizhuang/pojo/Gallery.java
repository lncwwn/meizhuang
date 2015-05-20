package com.lncwwn.meizhuang.pojo;

import java.io.Serializable;

/**
 * 用户个人艺术馆，用户可创建自己的个人艺术馆用于展示自己的作品
 *
 * @author victor.li
 * @date 5/20/15
 */
public class Gallery implements Serializable {

    private long id;
    private String name;
    // 艺术馆所有者
    private long user;
    private String address;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public long getUser() {
        return user;
    }

    public void setUser(long user) {
        this.user = user;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }
}
