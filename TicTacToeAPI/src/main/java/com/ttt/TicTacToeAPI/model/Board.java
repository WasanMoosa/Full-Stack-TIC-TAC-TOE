package com.ttt.TicTacToeAPI.model;

import java.util.Scanner;

/**
 * This is a board class, its responsibilities are:
 * 1)Show the grid board of the game.
 * 2)know if someone win
 * 3)put the symbol in the board
 * 4)notify if the board is full
 */
public class Board {
    private char[] grid = new char[9];
    private char symbol;

    // Get grid
    public char[] getGrid() {
        return grid;
    }

    // Set Symbol

    public void setSymbol(char symbol) {
        this.symbol = symbol;
    }

    public void changePosition(int randomMove) {
        grid[randomMove]=symbol;

    }
    public void setGrid(char[] grid){
        this.grid=grid;
    }

}