package com.lncwwn.meizhuang.api;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.lncwwn.meizhuang.pojo.Work;
import com.lncwwn.meizhuang.service.IWorkService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

/**
 * 作品API
 *
 * @author victor.li
 * @date 7/2/15
 */
@Controller
@RequestMapping("/work")
public class WorkApi extends BasicApi {

    @Autowired
    private IWorkService workService;

    /**
     * 获取作品列表
     * @param limit
     * @return
     */
    @RequestMapping(value = "/list", method = RequestMethod.GET)
    public List<Work> list(Integer limit) {
        return null;
    }

    /**
     * 获取指定用户的作品列表
     * @param limit
     * @param userId
     * @return
     */
    public List<Work> list(Integer limit, Long userId) {
        return null;
    }

    /**
     * 发布新的作品
     */
    @RequestMapping(value = "/publish", method = RequestMethod.POST)
    @ResponseBody
    public String publish(String params) {
        if (null != params && !params.isEmpty()) {
            JSONObject p = JSON.parseObject(params);
            Long userId = p.getLong("userId");
            String name = p.getString("name");
            String description = p.getString("description");
            String address = p.getString("address");
            Double price = p.getDouble("price");
            Boolean sellOut = p.getBoolean("sellOut");
            Long galleryId = p.getLong("galleryId");
            System.out.println(sellOut);
            Work work = new Work();
            work.setUser(userId);
            work.setName(name);
            work.setDescription(description);
            work.setAddress(address);
            work.setPrice(price);
            work.setSellOut(sellOut);
            work.setGallery(galleryId);

            if (workService.publish(work)) {
                return handler(1, "publish success", "success");
            }
        }

        return handler(2, "publish error", "error");
    }

}
