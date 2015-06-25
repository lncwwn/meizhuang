package com.lncwwn.meizhuang.pojo;

import java.io.Serializable;
import java.util.Date;

/**
 * 用户作品
 *
 * @author victor.li
 * @date 5/20/15
 */
public class Work implements Serializable {

    private long id;
    // 作品所有者
    private long user;
    private String name;
    private String description;
    // 作品图片链接
    private String address;
    // 作品可定价
    private Double price;
    // 是否售完
    private boolean sellOut;
    // 作品所属艺术馆
    private long gallery;
    private Date created;
    private Date updated;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public long getUser() {
        return user;
    }

    public void setUser(long user) {
        this.user = user;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }
    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public boolean isSellOut() {
        return sellOut;
    }

    public void setSellOut(boolean sellOut) {
        this.sellOut = sellOut;
    }

    public long getGallery() {
        return gallery;
    }

    public void setGallery(long gallery) {
        this.gallery = gallery;
    }

    public Date getCreated() {
        return created;
    }

    public void setCreated(Date created) {
        this.created = created;
    }

    public Date getUpdated() {
        return updated;
    }

    public void setUpdated(Date updated) {
        this.updated = updated;
    }
}
