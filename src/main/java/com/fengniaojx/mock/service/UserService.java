package com.fengniaojx.mock.service;


import java.util.List;

import com.fengniaojx.mock.domain.entity.User;

public interface UserService {

    int addUser(User user);

    List<User> findAllUser(int pageNum, int pageSize);
    
    Integer batchAddUser( List<User> recordList)  throws Exception;
}
