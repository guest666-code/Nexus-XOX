import React from 'react';
import Board from '../components/Board';
import Button from '../components/Button';
import { useGame } from '../hooks/useGame';

interface GameRoomProps {
  roomCode: string;
  role: 'host' | 'guest';
  onLeaveRoom: () => void;
}

const GameRoom: React.FC<GameRoomProps> = ({ roomCode, role, onLeaveRoom }) => {
  const { board, isXNext, winner, winningLine, isDraw, makeMove, resetGame } = useGame();

  // Ev sahibi (host) X, katılan misafir (guest) ise O sembolüdür
  const mySymbol = role === 'host' ? 'X' : 'O';
  const currentTurnSymbol = isXNext ? 'X' : 'O';
  const isMyTurn = mySymbol === currentTurnSymbol;

  return (
    <div className="flex flex-col items-center justify-center min-h-[85vh] px-4 py-6">
      
      {/* Üst Bilgi Paneli: Oda Kodu ve Roller */}
      <div className="w-full max-w-md bg-nexusDark/60 border border-nexusPurple/20 rounded-2xl p-4 mb-6 flex flex-col sm:flex-row items-center justify-between gap-4 backdrop-blur-sm">
        <div>
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">Oda Kodu</span>
          <span className="text-2xl font-orbit font-bold text-nexusNeon tracking-wider select-all cursor-pointer" title="Kopyalamak için tıkla">
            {roomCode}
          </span>
        </div>
        <div className="text-center sm:text-right">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">Senin Sembolün</span>
          <span className={`text-xl font-orbit font-bold ${mySymbol === 'X' ? 'text-nexusNeon' : 'text-amber-400'}`}>
            {mySymbol} ({role === 'host' ? 'Kurucu' : 'Misafir'})
          </span>
        </div>
      </div>

      {/* Oyun Durum Bildirimi */}
      <div className="mb-6 text-center h-12 flex items-center justify-center">
        {winner ? (
          <h2 className={`text-3xl font-orbit font-bold tracking-wide animate-bounce ${winner === mySymbol ? 'text-emerald-400 drop-shadow-[0_0_10px_rgba(52,211,153,0.5)]' : 'text-rose-400'}`}>
            {winner === mySymbol ? '🎉 KAZANDIN!' : '❌ KAYBETTİN!'}
          </h2>
        ) : isDraw ? (
          <h2 className="text-3xl font-orbit font-bold text-amber-400 tracking-wide">
            🤝 BERABERE!
          </h2>
        ) : (
          <p className="text-lg font-medium text-slate-300">
            {isMyTurn ? (
              <span className="text-nexusNeon font-bold animate-pulse">👉 Senin Sıran! Hamleni Yap.</span>
            ) : (
              <span className="text-slate-400">Rakibin hamlesi bekleniyor...</span>
            )}
          </p>
        )}
      </div>

      {/* 3x3 Oyun Tahtası */}
      {/* Not: Online tam senkronizasyon (Socket.io/Firebase) entegre edilene kadar lokalde tıklanabilir durumda bırakılmıştır */}
      <div className={isMyTurn && !winner && !isDraw ? 'pointer-events-auto' : 'pointer-events-none opacity-80'}>
        <Board board={board} onClick={makeMove} winningLine={winningLine} />
      </div>

      {/* Alt Kontrol Butonları */}
      <div className="mt-8 flex flex-wrap gap-4 justify-center w-full max-w-sm">
        {(winner || isDraw) && (
          <Button variant="primary" onClick={resetGame} className="flex-1">
            YENİDEN BAŞLAT
          </Button>
        )}
        <Button variant="danger" onClick={onLeaveRoom} className={winner || isDraw ? 'flex-1' : 'w-full'}>
          ODADAN ÇIK
        </Button>
      </div>

    </div>
  );
};

export default GameRoom;

