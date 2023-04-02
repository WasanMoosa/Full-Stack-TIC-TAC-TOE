package com.ttt.TicTacToeAPI;

import com.ttt.TicTacToeAPI.service.Notification;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


@SpringBootApplication
public class TicTacToeApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(TicTacToeApiApplication.class, args);
//		Notification.sendNotification("Hi, finally I reach here!");
	}

}
