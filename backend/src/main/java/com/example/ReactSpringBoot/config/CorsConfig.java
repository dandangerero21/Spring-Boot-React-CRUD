package com.example.ReactSpringBoot.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

@Configuration
public class CorsConfig {

    @Bean
    public CorsFilter corsFilter() {
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        CorsConfiguration config = new CorsConfiguration();
        
        // Allow all origins (for development)
        config.addAllowedOriginPattern("*");
        
        // Allow all headers
        config.addAllowedHeader("*");
        
        // Allow all HTTP methods (GET, POST, PUT, DELETE, OPTIONS)
        config.addAllowedMethod("*");
        
        // Don't require credentials for CORS (allows wildcard origins)
        config.setAllowCredentials(false);
        
        // Apply CORS configuration to all paths
        source.registerCorsConfiguration("/**", config);
        
        return new CorsFilter(source);
    }
}

