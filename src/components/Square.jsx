import React from 'react';

interface SquareProps {
  value: string;
  onClick: () => void;
  isWinning: boolean;
}

const Square: React.FC<SquareProps> = ({ value, onClick, isWinning }) => {
  // X ve O harfleri için farklı neon renk stilleri
  const textStyle = value === 'X' 
    ? 'text-nexusNeon drop-shadow-[0_0_8px_rgba(0,245,255,0.6)]' 
    : 'text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.6)]';

  // Eğer kare kazanan çizgideyse arka planı parlatıyoruz
  const bgStyle = isWinning
    ? 'bg-emerald-500/20 border-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.4)]'
    : 'bg-slate-900/40 border-nexusPurple/20 hover:border-nexusNeon/50 hover:bg-slate-800/60';

  return (
    <button
      onClick={onClick}
      disabled={value !== ''} // Eğer kare doluysa tekrar tıklanamaz
      className={`w-full h-full border-2 rounded-xl flex items-center justify-center text-4xl sm:text-5xl font-orbit font-bold transition-all duration-200 transform active:scale-95 ${bgStyle}`}
    >
      <span className={`animate-[scaleIn_0.2s_ease-out] ${textStyle}`}>
        {value}
      </span>
    </button>
  );
};

export default Square;
