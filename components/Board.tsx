"use client";

import { useMemo, useState } from "react";
import Square from "./Square";

type Player = "X" | "O";

type Winner = { player: Player; line: number[] } | null;

export default function Board() {
  const [squares, setSquares] = useState<Array<Player | null>>(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const winner: Winner = useMemo(() => calculateWinner(squares), [squares]);
  const isDraw = !winner && squares.every((s) => s !== null);

  function handleClick(i: number) {
    if (squares[i] || winner) return;
    const next = squares.slice();
    next[i] = xIsNext ? "X" : "O";
    setSquares(next);
    setXIsNext(!xIsNext);
  }

  function restart() {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  }

  const status = winner
    ? `Winner: ${winner.player}`
    : isDraw
    ? "It's a draw!"
    : `Next player: ${xIsNext ? "X" : "O"}`;

  return (
    <div className="flex flex-col items-center gap-4">
      <div
        className="px-4 py-2 rounded-xl border text-sm md:text-base bg-white/60 backdrop-blur supports-[backdrop-filter]:bg-white/40"
        role="status"
        aria-live="polite"
      >
        {status}
      </div>

      <div className="grid grid-cols-3">
        {squares.map((value, idx) => (
          <Square
            key={idx}
            value={value}
            onClick={() => handleClick(idx)}
            isWinning={!!winner?.line.includes(idx)}
          />
        ))}
      </div>

      <div className="flex gap-3 mt-2">
        <button
          onClick={restart}
          className="px-4 py-2 rounded-xl border shadow-sm hover:shadow transition text-sm md:text-base"
        >
          Restart
        </button>
        <button
          onClick={() => {
            if (confirm("Reset the board?")) restart();
          }}
          className="px-4 py-2 rounded-xl border shadow-sm hover:shadow transition text-sm md:text-base"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

function calculateWinner(sq: Array<Player | null>): Winner {
  const lines: number[][] = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (const [a, b, c] of lines) {
    if (sq[a] && sq[a] === sq[b] && sq[a] === sq[c]) {
      return { player: sq[a], line: [a, b, c] } as Winner;
    }
  }
  return null;
}