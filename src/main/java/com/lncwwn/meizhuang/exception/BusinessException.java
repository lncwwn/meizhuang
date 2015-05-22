package com.lncwwn.meizhuang.exception;

/**
 * system business exception
 *
 * @author victor.li
 * @date 5/22/15
 */
public class BusinessException extends RuntimeException {

    public BusinessException() {
        super();
    }

    public BusinessException(String message) {
        super(message);
    }

    public BusinessException(String message, Throwable cause) {
        super(message, cause);
    }

    public BusinessException(Throwable cause) {
        super(cause);
    }

}
