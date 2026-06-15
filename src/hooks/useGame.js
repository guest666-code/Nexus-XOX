import { useState } from 'react';

// XOX oyununda kazanma kombinasyonları (Satırlar, Sütunlar ve Çaprazlar)
const WINNING_COMBINATIONS = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // Yataylar
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // Dikeyler
  [0, 4, 8], [2, 4, 6]             // Çaprazlar
];

export const useGame = () => {
  const [board, setBoard] = useState(Array(9).fill(''));
  const [isXNext, setIsXNext] = useState(true);

  // Kazanan çizgiyi yakalamak için (Örn: [0, 1, 2])
  const checkWinner = (currentBoard) => {
    for (const combination of WINNING_COMBINATIONS) {
      const [a, b, c] = combination;
      if (currentBoard[a] && currentBoard[a] === currentBoard[b] && currentBoard[a] === currentBoard[c]) {
        return { winner: currentBoard[a], line: combination };
      }
    }
    return { winner: null, line: null };
  };

  const { winner, line: winningLine } = checkWinner(board);
  const isDraw = !winner && board.every((square) => square !== '');

  // Kareye tıklama fonksiyonu
  const makeMove = (index) => {
    // Kare doluysa veya oyun bittiyse hamle yapma
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? 'X' : 'O';
    
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  // Oyunu sıfırlama (Rövanş)
  const resetGame = () => {
    setBoard(Array(9).fill(''));
    setIsXNext(true);
  };

  return {
    board,
    isXNext,
    winner,
    winningLine,
    isDraw,
    makeMove,
    resetGame
  };
};
