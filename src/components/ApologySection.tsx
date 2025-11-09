import { ArrowRight } from 'lucide-react';

interface ApologySectionProps {
  onNext: () => void;
}

export default function ApologySection({ onNext }: ApologySectionProps) {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-rose-50 via-pink-50 to-cream-100 py-12 px-6 relative overflow-hidden">
      <div className="absolute top-10 left-10 text-6xl opacity-20 animate-float-rose">🤍</div>
      <div className="absolute bottom-20 right-20 text-5xl opacity-20 animate-float-rose animation-delay-2">🤍</div>
      <div className="absolute top-1/2 right-10 text-4xl opacity-20 animate-float-rose animation-delay-4">🤍</div>

      <div className="max-w-3xl bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-10 md:p-16 animate-fade-in-up">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800" style={{ fontFamily: "'Playfair Display', serif" }}>
          Sana Birkaç Şey Söylemek İstiyorum
        </h2>

        <div className="space-y-6 text-gray-700 text-lg leading-relaxed" style={{ fontFamily: "'Playfair Display', serif" }}>
          <p className="text-xl">Buse,</p>

          <p>
            Dün gece olanları düşündüm ve şunu fark ettim:<br />
            Ben her şeyi bozmayı başaran bir Windows XP'yim… ama sen benim en güzel güncellememsin.
          </p>

          <p>
            Mulliri'de seni görünce beynim:<br />
            <span className="italic">"Ahmet, cool davran."</span><br />
            Ben: cool davranamam, çünkü karşımda Buse var??
          </p>

          <p>
            Club gecemizde radarım tamamen sende kilitliydi. Resmen "BuseLock-on" sistemine sahiptim.<br />
            Ve o ilk öpüşmede…<br />
            Kalbim: TAK TAK TAK<br />
            Ben: <span className="italic">"Sakin ol Ahmet, kız anlayacak."</span>
          </p>

          <p>
            Buse…<br />
            Seni güldürmek, mutlu etmek, rahat hissettirmek istiyorum.<br />
            Gerekirse her gün sana rapor yollarım:<br />
            <span className="font-bold">"Günün Buse'yi Mutlu Etme Görevi: Tamamlandı ✅"</span>
          </p>

          <p>
            Beni affet demiyorum…<br />
            Ama <span className="font-bold">"bunu telafi etmeme izin ver"</span> diyorum.<br />
            Söz veriyorum, güncelleme sonrası bambaşka bir Ahmet var. 💫
          </p>
        </div>

        <div className="flex justify-center mt-10">
          <button
            onClick={onNext}
            className="group px-10 py-4 bg-pink-400 text-white rounded-full font-medium text-lg shadow-lg hover:shadow-2xl hover:bg-pink-500 transform hover:scale-105 transition-all duration-300"
          >
            <span className="flex items-center gap-2">
              Devam Et
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
