import Board from "@/components/Board";

export default function Home() {
  return (
    <main className="min-h-dvh flex flex-col items-center justify-center gap-6 p-6 bg-gradient-to-br from-indigo-100 via-white to-purple-100">
      <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 drop-shadow-sm">
        Tic-Tac-Toe
      </h1>
      <p className="opacity-80 text-sm md:text-base text-center text-slate-600 max-w-md">
        Two-player local game — built with Next.js App Router + Tailwind.
      </p>

      {/* Game board */}
      <div className="bg-white/90 backdrop-blur rounded-2xl shadow-lg p-6">
        <Board />
      </div>

      <footer className="text-xs opacity-70 mt-6 text-slate-700">
        Built by Sonia Akter Hira
      </footer>
    </main>
  );
}
