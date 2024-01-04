"use client";
import TicTacBoard from "./tictactoe/board";
import { useState, useEffect } from "react";
import React from "react";

export default function Game() {
  return (
    <div className="h-full p-8">
      <h1 className="text-center ">tictactoe game page</h1>
      <TicTacBoard />
    </div>
  );
}
