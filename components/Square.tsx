"use client";

type Props = {
  value: "X" | "O" | null;
  onClick: () => void;
  isWinning?: boolean;
};

export default function Square({ value, onClick, isWinning }: Props) {
  return (
    <button
      onClick={onClick}
      aria-label={`Square ${value ?? "empty"}`}
      className={
        [
          "w-20 h-20 md:w-28 md:h-28",
          "border border-gray-400/60",
          "flex items-center justify-center",
          "text-2xl md:text-4xl font-bold",
          "transition",
          isWinning ? "bg-green-100" : "hover:bg-gray-100",
          "disabled:opacity-50",
        ].join(" ")
      }
    >
      {value}
    </button>
  );
}
