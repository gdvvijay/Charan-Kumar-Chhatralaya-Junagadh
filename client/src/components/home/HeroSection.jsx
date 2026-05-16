import {
  BookOpen,
  Phone,
  MapPin,
  Building,
  History,
  ArrowRight,
  ShieldCheck,
  Star,
  Users,
} from "lucide-react";

export default function HeroSection() {
  const establishmentDate = new Date("1970-06-30");

  const today = new Date();

  let years = today.getFullYear() - establishmentDate.getFullYear();

  const hasHadAnniversary =
    today.getMonth() > establishmentDate.getMonth() ||
    (today.getMonth() === establishmentDate.getMonth() &&
      today.getDate() >= establishmentDate.getDate());

  if (!hasHadAnniversary) {
    years--;
  }

  const toGujaratiNumber = (num) => {
    const gujaratiDigits = ["૦", "૧", "૨", "૩", "૪", "૫", "૬", "૭", "૮", "૯"];

    return num
      .toString()
      .split("")
      .map((digit) => gujaratiDigits[digit] || digit)
      .join("");
  };
  function JourneyText() {
    return (
      <span>
        {toGujaratiNumber(years)} વર્ષની સુવર્ણ યાત્રા (સ્થાપના: ૩૦ જૂન, ૧૯૭૦)
      </span>
    );
  }

  return (
    <section className="relative min-h-screen w-full font-sans overflow-hidden transition-colors duration-500 bg-slate-50 dark:bg-[#0a0a0a] mt-30">
      {/* Ambient Background Glows */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-orange-600/20 dark:bg-orange-600/20 blur-[120px] mix-blend-normal opacity-50 dark:opacity-40 animate-pulse duration-1000"></div>
        <div className="absolute top-[20%] -right-[20%] w-[60vw] h-[60vw] rounded-full bg-yellow-500/20 dark:bg-amber-500/10 blur-[150px] mix-blend-normal opacity-50 dark:opacity-30"></div>
      </div>

      <div className="relative z-10 container mx-auto px-3 lg:px-6 py-20 min-h-screen flex flex-col justify-center">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* LEFT COLUMN - TEXT CONTENT */}
          <div className="lg:col-span-7 flex flex-col gap-8 text-center lg:text-left">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100/80 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 font-medium text-[10px] sm:text-xs w-max mx-auto lg:mx-0 border border-orange-200 dark:border-orange-800/50 backdrop-blur-sm shadow-sm">
              <History className="w-4 h-4" />
              <JourneyText />
            </div>

            {/* Title Section */}
            <div className="space-y-6">
              <h2 className="text-sm md:text-base font-semibold text-gray-600 dark:text-gray-400 tracking-wide">
                આઈશ્રી સોનલ ચારણ સભા એજ્યુકેશન એન્ડ ચેરિટેબલ ટ્રસ્ટ સંચાલિત
              </h2>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white leading-[1.2] lg:leading-[1.15]">
                શ્રી કાનજીભાઈ નાગૈયા <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-400 dark:from-orange-400 dark:to-yellow-300">
                  ચારણ કુમાર છાત્રાલય
                </span>
              </h1>
              <p className="text-sm sm:text-base md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
                પરમ પૂજ્ય <strong>આઈશ્રી સોનબાઇ મા (મઢડા)</strong> ના આશીર્વાદથી
                સ્થાપિત, ચારણ સમાજના વિદ્યાર્થીઓ માટે શિક્ષણ, સંસ્કાર અને
                પ્રગતિનું આદર્શ ધામ.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-5 mt-2 justify-center lg:justify-start">
              <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-500 hover:to-amber-400 text-white rounded-2xl font-bold text-base sm:text-lg transition-all shadow-[0_8px_30px_rgb(234,88,12,0.25)] hover:shadow-[0_8px_30px_rgb(234,88,12,0.4)] flex items-center justify-center gap-3 transform hover:-translate-y-1">
                <Phone className="w-5 h-5" />
                <span>+91 98242 88852</span>
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-white/50 dark:bg-white/5 text-gray-900 dark:text-white border border-gray-200 dark:border-white/10 hover:bg-white dark:hover:bg-white/10 backdrop-blur-md rounded-2xl font-bold text-base sm:text-lg transition-all flex items-center justify-center gap-3 group">
                વધુ જાણો
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-orange-500 group-hover:translate-x-1 transition-all" />
              </button>
            </div>

            {/* Info Grid (Bento Style) */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
              <div className="p-5 rounded-2xl bg-white/60 dark:bg-white/5 border border-gray-100 dark:border-white/5 backdrop-blur-sm flex flex-col gap-2 hover:bg-white dark:hover:bg-white/10 transition-colors">
                <Building className="w-7 h-7 text-orange-500 mb-1" />
                <h4 className="text-base sm:text-xl md:text-2xl font-black text-gray-900 dark:text-white">
                  ૩૩
                </h4>
                <p className="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400">
                  નવા આધુનિક રૂમ
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-white/60 dark:bg-white/5 border border-gray-100 dark:border-white/5 backdrop-blur-sm flex flex-col gap-2 hover:bg-white dark:hover:bg-white/10 transition-colors">
                <BookOpen className="w-7 h-7 text-amber-500 mb-1" />
                <h4 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 dark:text-white mt-1">
                  ગ્રંથાલય
                </h4>
                <p className="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400">
                  અદ્યતન સુવિધા
                </p>
              </div>
              <div className="col-span-2 md:col-span-1 p-5 rounded-2xl bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30 border border-orange-100 dark:border-orange-500/20 backdrop-blur-sm flex flex-col gap-2">
                <Users className="w-7 h-7 text-orange-600 dark:text-orange-400 mb-1" />
                <h4 className="text-base sm:text-lg lg:text-xl font-bold text-orange-900 dark:text-orange-100 mt-1">
                  પૂજ્ય ગીરીશ આપા
                </h4>
                <p className="text-xs sm:text-sm font-medium text-orange-700/80 dark:text-orange-300/80">
                  માર્ગદર્શન અને સંચાલન
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - IMAGE SECTION */}
          <div className="lg:col-span-5 relative flex justify-center items-center mt-10 lg:mt-0">
            {/* Majestic Glow behind the image */}
            <div className="absolute inset-0 bg-gradient-to-t from-orange-500/30 via-amber-400/20 to-transparent blur-3xl rounded-full scale-90 mix-blend-screen"></div>

            {/* Main Image Container - Glassmorphism Card */}
            <div className="relative w-full max-w-lg rounded-[2.5rem] p-3 bg-[#a1614f68] dark:bg-white/5 border border-white/40 dark:border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-xl group">
              <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden bg-gray-900">
                <img
                  src="/images/sonalmaaImage.png"
                  alt="પરમ પૂજ્ય આઈશ્રી સોનબાઇ મા"
                  className="w-full h-full object-cover object-top scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Subtle Inner Shadow/Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>

                {/* Content over image */}
                <div className="absolute bottom-0 left-0 w-full p-3 sm:p-6 md:p-8 text-left">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white drop-shadow-lg mb-1 sm:mb-2">
                    આઈ શ્રી સોનબાઇ માં
                  </h3>
                  <div className="flex items-center gap-2 text-orange-300 font-medium text-xs sm:text-sm mb-2 sm:mb-4">
                    <MapPin className="w-4 h-4" />
                    <span>મઢડા • પ્રેરણામૂર્તિ</span>
                  </div>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed border-l-2 border-orange-500 pl-3">
                    "જે સમાજમાં શિક્ષણ નથી, તે સમાજનું ભવિષ્ય અંધકારમય છે."
                  </p>
                </div>
              </div>

              {/* Decorative Corner Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-orange-400 to-amber-600 rounded-full blur-2xl opacity-50 dark:opacity-40"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-tr from-yellow-400 to-orange-500 rounded-full blur-2xl opacity-40 dark:opacity-30"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
