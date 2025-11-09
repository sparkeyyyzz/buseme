import { useState, useRef } from 'react';
import { Heart, Sparkles } from 'lucide-react';

interface InteractiveQuestionProps {
  onNext: () => void;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  type: 'firework' | 'rose';
  duration: number;
}

export default function InteractiveQuestion({ onNext }: InteractiveQuestionProps) {
  const [clickCount, setClickCount] = useState(0);
  const [showFinalButton, setShowFinalButton] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [showAffirmation, setShowAffirmation] = useState(false); 
  const particleIdRef = useRef(0);

  const messages = [
    "Düşüneceğim 💫",
    "Emin misin?",
    "Gerçekten mi?",
    "Son kararın mı?",
    "Neden",
    "Bunu bana yapma…"
  ];

  const handleMaybeClick = () => {
    if (clickCount < messages.length - 1) {
      setClickCount(clickCount + 1);
    } else {
      setShowFinalButton(true);
    }
  };

  const handleYesClick = () => {
    createExplosion();
    setShowAffirmation(true); 
    
    setTimeout(() => {
      onNext();
    }, 4000); 
  };

  const createExplosion = () => {
    const newParticles: Particle[] = [];

    for (let i = 0; i < 50; i++) {
      newParticles.push({
        id: particleIdRef.current++,
        x: 48 + Math.random() * 4,
        y: 48 + Math.random() * 4,
        type: Math.random() > 0.5 ? 'firework' : 'rose',
        duration: 2.5 + Math.random() * 1.5,
      });
    }

    setParticles(newParticles);

    setTimeout(() => {
      setParticles([]);
    }, 4500);
  };

  const yesButtonScale = 1 + (clickCount * 0.3);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-pink-50 via-rose-100 to-amber-50 relative overflow-hidden">
      {/* ... (Arka plan kalpleri ve Partikül Renderlama kısmı değişmedi) ... */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-pink-300 animate-float-rose"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${20 + Math.random() * 30}px`,
              height: `${20 + Math.random() * 30}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
              opacity: 0.15,
            }}
            fill="currentColor"
          />
        ))}
      </div>

      {particles.map((particle) => (
        <div
          key={particle.id}
          className="fixed pointer-events-none"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animation: `explode-${particle.id} ${particle.duration}s ease-out forwards`,
            fontSize: particle.type === 'firework' ? '2rem' : '1.5rem',
            zIndex: 50,
          }}
        >
          {particle.type === 'firework' ? '✨' : '🌹'}
        </div>
      ))}

      {/* ... (CSS/Animasyonlar kısmı değişmedi) ... */}
      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.5s ease-out forwards;
        }

        ${particles.map((p) => {
          const angle = Math.random() * 360;
          const distance = 100 + Math.random() * 100;
          const tx = Math.cos((angle * Math.PI) / 180) * distance;
          const ty = Math.sin((angle * Math.PI) / 180) * distance;
          
          return `
            @keyframes explode-${p.id} {
              0% {
                opacity: 1;
                transform: translate(0, 0) scale(1);
              }
              50% {
                opacity: 0.8; 
                transform: translate(${tx/2}px, ${ty/2}px) scale(1.2);
              }
              100% {
                opacity: 0;
                transform: translate(${tx}px, ${ty}px) scale(0.2);
              }
            }
          `;
        }).join('')}

        @keyframes ping-once {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.2); opacity: 0.7; }
        }
        .animate-ping-once {
          animation: ping-once 1.5s ease-out forwards;
        }
      `}</style>
      
      {showAffirmation ? (
        <div className="text-center z-20 px-4 md:px-6 animate-fade-in-up">
          <Heart className="w-16 h-16 md:w-24 md:h-24 text-pink-500 mx-auto mb-6 animate-ping-once" fill="currentColor" />
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white p-6 rounded-xl bg-pink-500 shadow-2xl" style={{ fontFamily: "'Playfair Display', serif" }}>
            Beni affedeceğini biliyordum minik şeyyyy :^3
          </h2>
        </div>
      ) : showFinalButton ? (
        <button
          onClick={handleYesClick}
          className="fixed inset-0 w-full h-full bg-pink-500 text-white font-bold flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 cursor-pointer hover:bg-pink-600 transition-all duration-500 animate-bounce-in z-50 px-6"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          <span className="text-5xl md:text-6xl lg:text-8xl">Evet</span>
          <Heart className="w-16 h-16 md:w-20 md:h-20 lg:w-32 lg:h-32" fill="currentColor" />
        </button>
      ) : (
        <div className="text-center z-10 px-4 md:px-6 animate-fade-in-up w-full max-w-4xl">
          <Sparkles className="w-12 h-12 md:w-16 md:h-16 text-pink-400 mx-auto mb-6 animate-pulse" />

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 md:mb-12 text-gray-800" style={{ fontFamily: "'Playfair Display', serif" }}>
            Barışalım mı?
          </h2>

          <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center items-center">
            {/* EVET BUTONU (Başlangıç boyutu daha küçük, click ile büyüyor) */}
            <button
              onClick={handleYesClick}
              className="group bg-pink-500 text-white rounded-full font-semibold shadow-xl hover:shadow-2xl hover:bg-pink-600 transition-all duration-500 ease-out order-1 md:order-none"
              style={{
                // Başlangıç değerleri daha düşük yapıldı
                transform: `scale(${1.5 + (clickCount * 0.3)})`, // clickCount 0 iken 1
                padding: `${0.6 + (clickCount * 0.2)}rem ${1.5 + (clickCount * 0.5)}rem`, // Başlangıçta daha küçük padding
                fontSize: `${0.9 + (clickCount * 0.15)}rem`, // Başlangıçta daha küçük font
              }}
            >
              <span className="flex items-center gap-2 whitespace-nowrap">
                Evet
                <Heart className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" style={{
                  // Kalp ikonu başlangıçta daha küçük
                  width: `${1 + (clickCount * 0.3)}rem`, 
                  height: `${1 + (clickCount * 0.3)}rem`,
                }} />
              </span>
            </button>

            {/* DÜŞÜNECEĞİM BUTONU (Daha da küçültüldü) */}
            <button
              onClick={handleMaybeClick}
              // Daha küçük padding ve font size değerleri
              className="w-auto px-3 md:px-4 py-1 md:py-2 bg-white text-pink-500 rounded-full font-semibold text-xs md:text-sm shadow-md hover:shadow-lg border border-pink-200 transform hover:scale-105 transition-all duration-300 order-2 md:order-none"
            >
              {messages[clickCount]}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}