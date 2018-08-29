package com.fengniaojx.mock;


import org.mybatis.spring.annotation.MapperScan;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
@MapperScan("com.fengniaojx.mock.dao")//将项目中对应的mapper类的路径加进来就可以了
public class Application {
    private static final Logger logger = LoggerFactory.getLogger(Application.class);

    private static ConfigurableApplicationContext applicationContext;

    public static void main(String[] args) {
        try {
            SpringApplication.run(Application.class, args);
            logger.error("#####  程序启动 -  SUCCESS  #####");
        } catch (Exception e) {
            logger.error("#####  程序启动失败  #####", e);
            System.exit(0);
        }
    }
}
