import React from 'react';
import Square from './Square';

interface BoardProps {
  board: string[];
  onClick: (index: number) => void;
  winningLine: number[] | null;
}

const Board: React.FC<BoardProps> = ({ board, onClick, winningLine }) => {
  return (
    <div className="relative p-4 bg-nexusDark/60 border border-nexusPurple/30 rounded-2xl shadow-[0_0_30px_rgba(99,102,241,0.15)] backdrop-blur-sm">
      {/* 3x3 Oyun Izgarası */}
      <div className="grid grid-cols-3 gap-3 w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96">
        {board.map((value, index) => {
          // Eğer bu kare kazanan kombinasyonun içindeyse parlaması için işaretliyoruz
          const isWinningSquare = winningLine?.includes(index) || false;

          return (
            <Square
              key={index}
              value={value}
              onClick={() => onClick(index)}
              isWinning={isWinningSquare}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Board;
