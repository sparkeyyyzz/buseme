import { Heart } from 'lucide-react';

export default function FinalMessage() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-pink-100 via-rose-50 to-amber-50 py-12 px-4 md:px-6 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute text-4xl md:text-6xl animate-float-rose"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${10 + Math.random() * 6}s`,
            }}
          >
            🤍
          </div>
        ))}
      </div>

      <div className="text-center z-10 max-w-4xl animate-fade-in-up">
        <div className="mb-6 md:mb-8">
          <Heart className="w-16 h-16 md:w-24 md:h-24 text-pink-500 mx-auto animate-pulse" fill="currentColor" />
        </div>

        <h1
          className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-relaxed mb-8 md:mb-12 glow-text px-4"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          <span className="text-pink-500 text-xl md:text-2xl lg:text-3xl">ÇOKÇA LOVE</span>
          <br />
          <br />Seninle her dakikayı kıymetli kılmak istiyorum. Seninle iyiyi, kötüyü, her şeyi paylaşmak istiyorum.
          <br />
          <br />
          <span className="text-pink-500">
            Bana bir şans verdin ve ben bu şansı çöpe atmayacağım. Seni seviyorum - gerçekten, derinlemesine, seninle yaşamımın geri kalanında olmak isteyecek kadar.
          </span>
          <br />
          <br />
          Lütfen, bana güven. Lütfen, benimle ol. Lütfen, beni sev.
        </h1>

        <div className="flex justify-center gap-3 md:gap-4 mb-8">
          <span className="text-5xl md:text-7xl animate-bounce animation-delay-1">🤍</span>
          <span className="text-5xl md:text-7xl animate-bounce animation-delay-2">🤍</span>
          <span className="text-5xl md:text-7xl animate-bounce animation-delay-3">🤍</span>
        </div>

        <div className="mt-8 md:mt-12">
          <p className="text-gray-600 text-base md:text-lg" style={{ fontFamily: "'Dancing Script', cursive" }}>
            - Ahmet 
            ✨ Seninle Sonsuza Kadar ✨
💕 🌹 💕 🌹 💕
          </p>
        </div>
      </div>
    </div>
  );
}
