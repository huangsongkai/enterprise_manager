package com.example.demo.config;

import org.springframework.boot.context.embedded.ConfigurableEmbeddedServletContainer;
import org.springframework.boot.context.embedded.EmbeddedServletContainerCustomizer;
import org.springframework.boot.web.servlet.ErrorPage;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpStatus;

/**
 * Created by huang on 2017/11/13.
 */
@Configuration
public class WebConfig {
    @Bean
    public EmbeddedServletContainerCustomizer containerCustomizer() {

        return new EmbeddedServletContainerCustomizer() {
            @Override
            public void customize(ConfigurableEmbeddedServletContainer container) {
                container.addErrorPages (new ErrorPage(HttpStatus.NOT_FOUND, "/404"));
                container.addErrorPages (new ErrorPage(HttpStatus.INTERNAL_SERVER_ERROR, "/500"));
                container.addErrorPages (new ErrorPage(HttpStatus.FORBIDDEN,"/403"));
            }
        };
    }
}