package com.fengniaojx.mock.manager;

import java.util.List;

import com.fengniaojx.mock.domain.entity.User;

public interface UserManager {
	
	Integer batchAddUser( List<User> recordList)  throws Exception;
}
