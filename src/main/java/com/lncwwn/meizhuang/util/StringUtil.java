package com.lncwwn.meizhuang.util;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * util to operate string
 *
 * @author victor.li
 * @date 5/21/15
 */
public class StringUtil {

    private StringUtil() {}

    /**
     * check the input string is numeric
     *
     * @param input
     * @return
     */
    private static boolean isNumeric(String input) {
        Pattern pattern = Pattern.compile("^\\d+|\\d+\\.\\d+$");
        Matcher matcher = pattern.matcher(input);
        return matcher.matches();
    }

    /**
     * check the input string is percent number
     *
     * @param input
     * @return
     */
    private static boolean isPercent(String input) {
        Pattern pattern = Pattern.compile("^(\\d+|\\d+\\.\\d+)\\%$");
        Matcher matcher = pattern.matcher(input);
        return matcher.matches();
    }

    /**
     * check the input string is an integer
     * @param input
     * @return
     */
    private static boolean isInteger(String input) {
        Pattern pattern = Pattern.compile("^\\d+$");
        Matcher matcher = pattern.matcher(input);
        return matcher.matches();
    }

    /**
     * check the input string is an valid email
     *
     * @param input
     * @return
     */
    public static boolean isEmail(String input) {
        Pattern pattern = Pattern.compile("^\\w+\\@\\w+\\.\\w+$");
        Matcher matcher = pattern.matcher(input);
        return matcher.matches();
    }

}
