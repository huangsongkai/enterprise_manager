package com.example.demo.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@Configuration
public class JumpConfig extends WebMvcConfigurerAdapter {
    static {
        System.out.println("JumpConfigAdapter");
    }
    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        registry.addViewController("/register").setViewName("user/register");//跳转注册页面
       // registry.addViewController("/inputsDirectory").setViewName("inputsDirectory/inputsDirectory");//农资销售企业
        registry.addViewController("/enterpriseDirectory").setViewName("enterpriseDirectory/enterpriseDirectory");//销售企业
        registry.addViewController("/blackListDirectory").setViewName("blackListDirectory/blackListDirectory");//黑名单管理
    }
}