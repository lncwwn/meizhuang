package com.lncwwn.meizhuang.basic.pojo;

import java.io.Serializable;

/**
 * 盆景类目
 *
 * @author victor.li
 * @date 7/8/15
 */
public class Category implements Serializable {

    private int id;
    private String name;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

}
