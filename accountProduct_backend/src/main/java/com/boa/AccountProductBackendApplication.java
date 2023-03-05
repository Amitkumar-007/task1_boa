package com.boa;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class AccountProductBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(AccountProductBackendApplication.class, args);
		System.out.println("Server started and hello");
	}

}
