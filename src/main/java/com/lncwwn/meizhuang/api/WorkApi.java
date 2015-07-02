package com.lncwwn.meizhuang.api;

import com.lncwwn.meizhuang.pojo.Work;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

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
     * @param nick
     * @return
     */
    public List<Work> list(Integer limit, String nick) {
        return null;
    }

    /**
     * 发布新的作品
     */
    @RequestMapping(value = "/publish", method = RequestMethod.POST)
    public void publish(Work work, String nick) {

    }

}
