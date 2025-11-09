import { useState } from 'react';
import { Gift, ArrowRight } from 'lucide-react';

interface SurpriseSectionProps {
  onNext: () => void;
}

export default function SurpriseSection({ onNext }: SurpriseSectionProps) {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-amber-50 via-pink-50 to-rose-100 py-12 px-6 relative overflow-hidden">
      <div className="absolute top-20 left-1/4 text-5xl opacity-20 animate-spin-slow">🤍</div>
      <div className="absolute bottom-32 right-1/4 text-6xl opacity-20 animate-spin-slow animation-delay-2">🤍</div>

      <div className="text-center z-10 max-w-2xl animate-fade-in-up">
        {!revealed ? (
          <div
            onClick={() => setRevealed(true)}
            className="cursor-pointer transform hover:scale-105 transition-all duration-300"
          >
            <div className="bg-white rounded-3xl shadow-2xl p-16 hover:shadow-3xl transition-shadow">
              <Gift className="w-32 h-32 text-pink-400 mx-auto mb-6 animate-bounce" />
              <p className="text-2xl text-gray-700 font-medium">
                Sürprizi görmek için tıkla
              </p>
            </div>
          </div>
        ) : (
          <div className="animate-fade-in-up">
            <div className="bg-white rounded-3xl shadow-2xl p-8 mb-8 border-4 border-pink-200 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-pink-100 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-pink-100 to-transparent"></div>

              <div className="relative z-10">
                <div className="flex justify-center gap-4 mb-6">
                  <span className="text-6xl">🤍</span>
                  <span className="text-6xl">🤍</span>
                  <span className="text-6xl">🤍</span>
                </div>

                <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-4 sm:p-6 md:p-8 flex items-center justify-center min-h-[300px]">
                  {/* BURAYA FOTOĞRAF EKLENDİ */}
                  <img
                    src="https://i.imgur.com/fDBTEYF.jpeg" // Fotoğrafın yolu (public klasöründe varsayıldı)
                    alt="Senin için özel bir anı" // Erişilebilirlik için alt metni
                    className="max-w-full h-auto rounded-xl shadow-lg border-2 border-pink-200 object-cover max-h-[400px]" 
                  />
                </div>

                <div className="flex justify-center gap-4 mt-6">
                  <span className="text-6xl">🤍</span>
                  <span className="text-6xl">🤍</span>
                  <span className="text-6xl">🤍</span>
                </div>
              </div>
            </div>

            <button
              onClick={onNext}
              className="group px-10 py-4 bg-pink-500 text-white rounded-full font-medium text-lg shadow-lg hover:shadow-2xl hover:bg-pink-600 transform hover:scale-105 transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                Son Mesaj
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}