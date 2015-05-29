package com.lncwwn.meizhuang.dao;

import org.apache.commons.dbutils.QueryRunner;
import org.apache.commons.dbutils.handlers.BeanHandler;
import org.apache.commons.dbutils.handlers.BeanListHandler;
import org.apache.commons.dbutils.handlers.ScalarHandler;
import org.springframework.beans.factory.annotation.Autowired;

import javax.sql.DataSource;
import java.sql.SQLException;
import java.util.List;

/**
 * basic dao
 *
 * @author victor.li
 * @date 5/21/15
 */

public class BasicDao<T> {

    @Autowired
    private DataSource dataSource;
    @Autowired
    private QueryRunner queryRunner;

    /**
     * find bean from database with query condition
     * @param clazz
     * @param sql
     * @param params
     * @return
     * @throws SQLException
     */
    public T find(Class<T> clazz, String sql, Object... params) throws SQLException {
        return queryRunner.query(sql, new BeanHandler<T>(clazz), params);
    }

    /**
     * find all beans from database with query condition
     * @param clazz
     * @param sql
     * @param params
     * @return
     * @throws SQLException
     */
    public List<T> findAll(Class<T> clazz, String sql, Object... params) throws SQLException {
        return queryRunner.query(sql, new BeanListHandler<T>(clazz), params);
    }

    /**
     * single insert
     * @param sql
     * @return
     * @throws SQLException
     */
    public Long insert(String sql, Object... params) throws SQLException {
        return queryRunner.insert(sql, new ScalarHandler<Long>(1), params);
    }

    /**
     * batch insert
     * @param sql
     * @param params
     * @return
     * @throws SQLException
     */
    public Integer batchInsert(String sql, Object[]... params) throws SQLException {
        return queryRunner.insertBatch(sql, new ScalarHandler<>(1), params);
    }

}
