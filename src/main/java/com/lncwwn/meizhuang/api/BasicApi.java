package com.lncwwn.meizhuang.api;

import com.alibaba.fastjson.JSON;

import java.util.HashMap;
import java.util.Map;

/**
 * Api基类
 *
 * @author victor.li
 * @date 5/20/15
 */
public class BasicApi {

    protected String handler(int code, String msg, Object data) {
        Map<String, Object> obj = new HashMap<String, Object>();
        obj.put("code", code);
        obj.put("msg", msg);
        obj.put("data", data);

        return JSON.toJSONString(obj);
    }

}
