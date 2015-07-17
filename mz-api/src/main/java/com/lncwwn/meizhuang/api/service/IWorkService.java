package com.lncwwn.meizhuang.api.service;

import com.lncwwn.meizhuang.basic.pojo.Work;

import java.util.List;

/**
 * Created with idea community version.
 *
 * @author victor.li
 * @date 7/2/15
 */
public interface IWorkService {

    List<Work> list(Long userId, Integer offset, Integer limit);

    boolean publish(Work work);

}
