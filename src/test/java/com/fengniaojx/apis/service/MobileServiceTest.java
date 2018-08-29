package com.fengniaojx.apis.service;

import java.util.ArrayList;
import java.util.List;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.transaction.annotation.Transactional;

import com.fengniaojx.mock.Application;
import com.fengniaojx.mock.Properties;
import com.fengniaojx.mock.domain.entity.User;
import com.fengniaojx.mock.domain.query.MobileQuery;
import com.fengniaojx.mock.service.MobileService;
import com.fengniaojx.mock.service.UserService;


@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(classes=Application.class)
public class MobileServiceTest {
    
    private static final Logger LOGGER = LoggerFactory.getLogger(MobileServiceTest.class);
  
    @Autowired
	private MobileService mobileService;
	@Autowired
	private Properties properties;
	@Autowired
	private UserService userService;
    
    // 在测试开始前初始化工作    
    @Before
    public void setup() {    
    }    
    
    @Test
    public void getMobileTest() throws Exception {
    	String iphone = "13816117471";
    	MobileQuery query = new MobileQuery(properties.getMobileUrl(),iphone,properties.getMobileKey());
        try {
        	LOGGER.info("Mobile：" + mobileService.getMobile(query));
		} catch (Exception e) {
			e.printStackTrace();
		}
    }
    
    @Test
    public void insertForTest()  throws Exception {
    	Long start = System.currentTimeMillis();
    	for (int i = 0; i < 20; i++) {
    		addUser(i);
		}
    	
    	Long end = System.currentTimeMillis();
    	LOGGER.info("for方式10000条数据共耗时:" + (end - start ) + "ms");
    }

    @Transactional
	private void addUser(int i) {
		for (int j = 1; j < 500; j++) {
    		User user = new User();
    		user.setUserId(i * j);
    		user.setUserName("testFor"+i * j);
    		user.setPassword("pwdFor"+i * j);
    		user.setPhone("13817371883");
    		userService.addUser(user);
		}
	}
    
    @Test
    public void insertBatchTest()  throws Exception {
    	Long start = System.currentTimeMillis();
    	List<User> recordList = new ArrayList<User>(10000);
    	for (int i = 10001; i < 20001; i++) {
    		User user = new User();
    		user.setUserId(i);
    		user.setUserName("testBatch"+i);
    		user.setPassword("pwdBatch"+i);
    		user.setPhone("13831339199");
    		recordList.add(user);
		}
    	userService.batchAddUser(recordList);
    	Long end = System.currentTimeMillis();
    	LOGGER.info("batch方式10000条数据共耗时:" + (end - start ) + "ms");
    }
}
