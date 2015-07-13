package com.lncwwn.meizhuang.cloud.core;

import com.lncwwn.meizhuang.cloud.config.QiNiuConfig;
import com.qiniu.util.Auth;
import org.springframework.beans.factory.annotation.Autowired;

/**
 * provides QiNiu support
 *
 * @author victor.li
 * @date 7/11/15
 */
public class QiNiuSupport {

    @Autowired
    private QiNiuConfig qiNiuConfig;

    private Auth auth = Auth.create(qiNiuConfig.getAccessKey(), qiNiuConfig.getSecretKey());

}
