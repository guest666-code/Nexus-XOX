import React, { useState } from 'react';
import Lobby from './views/Lobby';
import GameRoom from './views/GameRoom';

function App() {
  // Kullanıcının aktif olarak hangi odada olduğunu ve rolünü tutan stateler
  const [currentRoom, setCurrentRoom] = useState<string | null>(null);
  const [playerRole, setPlayerRole] = useState<'host' | 'guest' | null>(null);

  // Lobiden bir odaya giriş yapıldığında tetiklenen fonksiyon
  const handleJoinRoom = (roomCode: string, role: 'host' | 'guest') => {
    setCurrentRoom(roomCode);
    setPlayerRole(role);
  };

  // Oyuncu odadan çıktığında lobiyi geri getiren fonksiyon
  const handleLeaveRoom = () => {
    setCurrentRoom(null);
    playerRole(null);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between">
      {/* Üst İnce Dekoratif Çizgi */}
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-nexusPurple to-transparent opacity-50" />

      {/* Dinamik Ekran Yönetimi */}
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

      {/* Minimalist Alt Bilgi (Footer) */}
      <footer className="py-4 text-center text-xs font-orbit tracking-widest text-slate-600 border-t border-slate-900/40">
        NEXUS XOX &copy; {new Date().getFullYear()} // POWERED BY SGM
      </footer>
    </div>
  );
}

export default App;

