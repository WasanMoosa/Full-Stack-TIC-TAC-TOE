package com.ttt.TicTacToeAPI.service;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.ClientResponse;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

import java.util.HashMap;
import java.util.Map;

public class Notification {
        public static void sendNotification(String message){
            WebClient webClient = WebClient.create("https://hooks.slack.com");
            // Prepare the JSON body as a Map or any other object
            Map<String, String> jsonBody = new HashMap<>();
            jsonBody.put("text", message);

            // Send the POST request with the JSON body
            Mono<ClientResponse> responseMono = webClient.post()
                    .uri("/services/T04E34E42QZ/B04UFUEPW15/FytA5C4FTqNGrrqyY3h5m2BA")
                    .bodyValue(jsonBody)
                    .exchangeToMono(response -> Mono.just(response));

            // Get the response and process it
            ClientResponse response = responseMono.block();
            if (response != null) {
                System.out.println("Status Code: " + response.statusCode());
                String responseBody = response.bodyToMono(String.class).block();
                System.out.println("Response Body: " + responseBody);
            }
        }
    }
