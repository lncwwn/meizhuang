package com.lncwwn.meizhuang.service.impl;

import com.lncwwn.meizhuang.pojo.Work;
import com.lncwwn.meizhuang.service.IWorkService;

import java.util.List;

/**
 * Created with idea community version.
 *
 * @author victor.li
 * @date 7/2/15
 */
public class WorkService implements IWorkService {


    @Override
    public List<Work> list(String nick) {
        if (null != nick && !nick.isEmpty()) {
            return null;
        }

        return null;
    }

    @Override
    public void publish(Work work, String nick) {

    }

}
