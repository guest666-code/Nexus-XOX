import { useState } from 'react';

const WINNING_COMBINATIONS = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
];

export const useGame = () => {
  const [board, setBoard] = useState(Array(9).fill(''));
  const [isXNext, setIsXNext] = useState(true);

  // 🎵 Ses Efektlerini Tanımlıyoruz
  const playSound = (soundName) => {
    // Ses dosyalarının src/assets/ altında olduğunu varsayıyoruz
    const audio = new Audio(`/src/assets/${soundName}`);
    audio.volume = 0.4; // %40 ses seviyesi (kulak tırmalamasın)
    audio.play().catch((e) => console.log("Ses oynatılamadı:", e));
  };

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

  const makeMove = (index) => {
    // Eğer oyuncu dolu bir kareye tıklarsa hata sesini çal
    if (board[index]) {
      playSound('error.mp3');
      return;
    }

    // Oyun zaten bittiyse tıklamaya izin verme
    if (winner) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? 'X' : 'O';
    
    // 📊 Yeni tahta durumuna göre kazananı hemen kontrol et
    const gameResult = checkWinner(newBoard);

    if (gameResult.winner) {
      // 🎉 Biri kazandıysa zafer sesini patlat
      playSound('win.mp3');
    } else {
      // 🎯 Normal hamle yapıldıysa tıklama sesini çal
      playSound('click.mp3');
    }

    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

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
