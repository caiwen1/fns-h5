package com.fengniaojx.mock.dao;


import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.fengniaojx.mock.domain.entity.User;

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