package com.boot.mock.manager;

import java.util.List;

import com.boot.mock.domain.entity.User;

public interface UserManager {
	
	Integer batchAddUser( List<User> recordList)  throws Exception;
}
