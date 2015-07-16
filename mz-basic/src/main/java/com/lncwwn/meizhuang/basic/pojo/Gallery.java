package com.lncwwn.meizhuang.basic.pojo;

import java.io.Serializable;
import java.util.Date;

/**
 * 用户个人艺术馆，用户可创建自己的个人艺术馆用于展示自己的作品
 *
 * @author victor.li
 * @date 5/20/15
 */
public class Gallery implements Serializable {

    private long id;
    // 艺术馆名称
    private String name;
    // 艺术馆所有者
    private long user;
    private GalleryType type;
    private Date created;

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

    public GalleryType getType() {
        return type;
    }

    public void setType(GalleryType type) {
        this.type = type;
    }

    public Date getCreated() {
        return created;
    }

    public void setCreated(Date created) {
        this.created = created;
    }

    /**
     * Gallery类型
     */
    enum GalleryType {
        Material(1), // 原料型
        SemiFinished(2), // 半成品型号
        Finished(3); // 成品型

        private int code;

        private GalleryType(int code) {
            this.code = code;
        }

        @Override
        public String toString() {
            return String.valueOf(this.code);
        }
    }

}
