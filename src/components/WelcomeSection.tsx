import { Heart } from 'lucide-react';

interface WelcomeSectionProps {
  onNext: () => void;
}

export default function WelcomeSection({ onNext }: WelcomeSectionProps) {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-pink-100 via-rose-50 to-amber-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float-rose"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          >
            <div className="text-4xl">🤍</div>
          </div>
        ))}
      </div>

      <div className="text-center z-10 px-6">
        <div className="mb-8 flex justify-center">
          <Heart className="w-16 h-16 text-pink-400 animate-pulse" fill="currentColor" />
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-gray-800 typewriter"          style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>
          Buse, senin için özel bir şey hazırladım...
        </h1>

        <button
          onClick={onNext}
          className="group relative px-10 py-4 bg-white text-pink-500 rounded-full font-medium text-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
        >
          <span className="flex items-center gap-2">
            Başlayalım
            <Heart className="w-5 h-5 group-hover:fill-current transition-all" />
          </span>
        </button>
      </div>
    </div>
  );
}
