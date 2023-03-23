package com.ttt.TicTacToeAPI.model;

import java.util.ArrayList;
import java.util.Random;

public class Bot {
    private int randomRow;
    private int randomColumn;
    private char symbol;

    public Bot(char symbol) {
        this.symbol = symbol;
    }

    public int makeMove(Board inputboard) {
        Board board = inputboard;
        Random random = new Random();
        int randomMove = 0;
        boolean correctPostion = false;


        while (!correctPostion) {
            // Generate random numbers from 0 to 2 to represent row and column indices
            randomMove = random.nextInt(9);

            if ((inputboard.getGrid()[randomMove] == ' ')) {
                correctPostion = true;
            }

        }
        return randomMove;
    }

    // Get symbol
    public char getSymbol() {
        return symbol;
    }


}
