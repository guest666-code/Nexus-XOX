import React, { useState } from 'react';
import Lobby from './views/Lobby';
import GameRoom from './views/GameRoom';

function App() {
  const [currentRoom, setCurrentRoom] = useState(null);
  const [playerRole, setPlayerRole] = useState(null);

  const handleJoinRoom = (roomCode, role) => {
    setCurrentRoom(roomCode);
    setPlayerRole(role);
  };

  const handleLeaveRoom = () => {
    setCurrentRoom(null);
    setPlayerRole(null); // Doğrusu bu şekilde olmalı
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-nexusDark text-white">
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-nexusPurple to-transparent opacity-50" />

      <main className="flex-grow container mx-auto flex items-center justify-center">
        {currentRoom && playerRole ? (
          <GameRoom 
            roomCode={currentRoom} 
            role={playerRole} 
            onLeaveRoom={handleLeaveRoom} 
          />
        ) : (
          <Lobby onJoinRoom={handleJoinRoom} />
        )}
      </main>

      <footer className="py-4 text-center text-xs font-orbit tracking-widest text-slate-600 border-t border-slate-900/40">
        NEXUS XOX &copy; {new Date().getFullYear()} // POWERED BY SGM
      </footer>
    </div>
  );
}

export default App;
