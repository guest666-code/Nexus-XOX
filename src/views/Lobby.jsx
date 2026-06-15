import React, { useState } from 'react';
import Button from '../components/Button';

interface LobbyProps {
  onJoinRoom: (roomCode: string, role: 'host' | 'guest') => void;
}

const Lobby: React.FC<LobbyProps> = ({ onJoinRoom }) => {
  const [inputCode, setInputCode] = useState('');

  // 6 Haneli Rastgele Davet Kodu Üretme (Büyük Harf ve Sayılar)
  const generateRoomCode = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }
    return result;
  };

  // Oda Oluşturma Butonuna Basıldığında
  const handleCreateRoom = () => {
    const newRoomCode = generateRoomCode();
    // Odayı kuran kişi 'host' (Ev Sahibi) rolünde başlar
    onJoinRoom(newRoomCode, 'host');
  };

  // Var Olan Odaya Katılma Butonuna Basıldığında
  const handleJoinRoom = (e: React.FormEvent) => {
    e.preventDefault();
    // Kodun 6 haneli olmasını ve boş olmamasını kontrol ediyoruz
    const formattedCode = inputCode.trim().toUpperCase();
    if (formattedCode.length === 6) {
      // Katılan kişi 'guest' (Misafir) rolünde başlar
      onJoinRoom(formattedCode, 'guest');
    } else {
      alert('Lütfen geçerli bir 6 haneli oda kodu girin!');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4">
      {/* Nexus XOX Başlık / Logo */}
      <div className="text-center mb-10">
        <h1 className="text-5xl md:text-6xl font-orbit font-bold text-white tracking-widest drop-shadow-[0_0_15px_rgba(99,102,241,0.5)]">
          NEXUS <span className="text-nexusNeon">XOX</span>
        </h1>
        <p className="text-slate-400 mt-2 text-sm md:text-base tracking-wide">
          6 Haneli Davet Kodu İle Çevrimiçi Meydan Oku
        </p>
      </div>

      {/* Lobi Kartı */}
      <div className="w-full max-w-md p-8 bg-nexusDark/80 border border-nexusPurple/30 rounded-2xl shadow-[0_0_40px_rgba(99,102,241,0.2)] backdrop-blur-md">
        
        {/* Seçenek 1: Oda Oluştur */}
        <div className="flex flex-col text-center pb-6 border-b border-slate-800">
          <h2 className="text-lg font-orbit font-semibold text-slate-300 mb-3">Yeni Bir Oyun Başlat</h2>
          <Button variant="primary" onClick={handleCreateRoom}>
            ODA OLUŞTUR
          </Button>
        </div>

        {/* Seçenek 2: Odaya Katıl */}
        <div className="flex flex-col pt-6">
          <h2 className="text-lg font-orbit font-semibold text-slate-300 text-center mb-3">Bir Odaya Katıl</h2>
          <form onSubmit={handleJoinRoom} className="space-y-4">
            <input
              type="text"
              maxLength={6}
              value={inputCode}
              onChange={(e) => setInputCode(e.target.value.toUpperCase())}
              placeholder="6 HANELİ KODU GİRİN"
              className="w-full px-4 py-3 bg-slate-900/90 border-2 border-nexusPurple/20 rounded-xl font-orbit text-center text-xl tracking-widest text-nexusNeon placeholder-slate-600 focus:outline-none focus:border-nexusNeon/70 transition-all uppercase"
            />
            <Button variant="secondary" type="submit" className="w-full">
              ODAYA KATIL
            </Button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Lobby;
