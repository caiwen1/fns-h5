package com.boot.mock.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping
public class TestController {

    @RequestMapping("/index")
    public String index(){
    	return "/index";
    }
    
    @RequestMapping("/demo")
    public String demo(){
    	return "/demo";
    }
}
