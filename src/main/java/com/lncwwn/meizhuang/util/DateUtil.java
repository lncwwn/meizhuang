package com.lncwwn.meizhuang.util;

import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * util to operate Date class
 *
 * @author victor.li
 * @date 5/22/15
 */
public class DateUtil {

    private DateUtil() {}

    private static SimpleDateFormat sdf = new SimpleDateFormat();

    /**
     * get now
     * @return
     */
    public static String now() {
        Date date = new Date();
        return format(date, "yyyyMMdd HH:mm:ss");
    }

    /**
     * format date
     * @param date
     * @param fmt
     * @return
     */
    public static String format(Date date, String fmt) {
        sdf.applyPattern(fmt);
        return sdf.format(date);
    }

}
