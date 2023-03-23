package com.ttt.TicTacToeAPI.controller;


import com.ttt.TicTacToeAPI.model.Board;
import com.ttt.TicTacToeAPI.model.Bot;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class MainController {
    @PostMapping
    public int GetBoard(@RequestBody Board inputBoard) {
        // Create hashmap to represent response

        // Take board from body of URL, then put it in the board
        Board board = inputBoard;

        // Create bot
        Bot bot = new Bot('O');

        // Set symbol of bot in board object
        board.setSymbol(bot.getSymbol());

        // Choose random position for Bot
        int position = bot.makeMove(board);

        return position;

    }
}

