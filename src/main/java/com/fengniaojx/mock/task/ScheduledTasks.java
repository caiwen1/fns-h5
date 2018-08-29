package com.fengniaojx.mock.task;

import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import com.fengniaojx.mock.Properties;
import com.fengniaojx.mock.domain.query.MobileQuery;
import com.fengniaojx.mock.service.MobileService;

@Component
public class ScheduledTasks {
	
	@Autowired
	private MobileService mobileService;
	@Autowired
	private Properties properties;
	
    private static final SimpleDateFormat dateFormat = new SimpleDateFormat("HH:mm:ss");

    @Scheduled(cron="0 2 10 ? * *")
    public void reportCurrentTime() {
        System.out.println("现在时间：" + dateFormat.format(new Date()));
    }
    
    @Scheduled(cron="0 19 13 ? * *")
    public void getMobile() {
    	String iphone = "13816117471";
    	MobileQuery query = new MobileQuery(properties.getMobileUrl(),iphone,properties.getMobileKey());
        try {
			System.out.println("Mobile：" + mobileService.getMobile(query));
		} catch (Exception e) {
			e.printStackTrace();
		}
    }

}