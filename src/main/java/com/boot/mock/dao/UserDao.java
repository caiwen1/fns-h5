package com.boot.mock.dao;


import java.util.List;

import com.boot.mock.domain.entity.User;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface UserDao extends AbstractListDao<UserDao>{
    int deleteByPrimaryKey(Integer userId);

    int insert(User record);

    int insertSelective(User record);

    User selectByPrimaryKey(Integer userId);

    int updateByPrimaryKeySelective(User record);

    int updateByPrimaryKey(User record);

    List<User> selectAllUser();
}