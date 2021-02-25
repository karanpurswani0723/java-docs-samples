package com.example.java;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories
public class UserTransactionApp {

    public static void main(String[] args) {

        SpringApplication.run(UserTransactionApp.class, args);

    }
}
