"use client";

import React from "react";
import { Sparkles, Flame, Flower2 } from "lucide-react";

export default function SonalMaaPrathanaPage() {
  const prathanaStanzas = [
    [
      "હે ચારણી સુખ કારિણી, બ્રહ્મચારિણી આયે શરણ",
      "સચ્ચિદાનંદે શારદે, મંગલમયી પ્રણમેં ચરણ જ ..... હે ચારણી",
    ],
    [
      "અંબિકે આવડ આશપૂર્ણા, હૈ તુમ્હારે બાલ હમ",
      "જગતારિણી અદ્યહારિણી, કુરૂ પ્રણતકી પ્રતિપાલ તુમ..... હે ચારણી",
    ],
    [
      "હમ ક્યો પતિત હો ગયે જબ હો, પતિત પાવની માત તુમ",
      "હમ ક્યો અશાંત અરુ અશુચિ જબ હો, શાંતિ શુચિદા માત તુમ..... હે ચારણી",
    ],
    [
      "પૂર્વજ સદ્શ નિતિ પથિક હો, માતૃ ભૂમિ કે ભક્ત હમ",
      "શૂરે ઉદાર અરુ સત્ય વક્તા, અમૃતમયી અનુરક્ત હમ..... હે ચારણી",
    ],
    [
      "દ્રઢ વીર-વૃતિ સબક બંને, અરુ પઢે શમ-દમ પાઠ હમ",
      "અગ્નિ પરીક્ષામેં અડગ બન, બઢે સંયમ બાટ હમ..... હે ચારણી",
    ],
    [
      "યમ યાતના હો નર્ક દુઃખ, કર્તવ્ય પથ છોડે ન હમ",
      "દમ દમ તુમ્હારા જપ જપેં, મર મિટે મુખ મોડે ન હમ..... હે ચારણી",
    ],
    [
      "આશિષ ઉચ્ચારો અન્નપૂર્ણા, શ્રી ચરણ મેં લીન હો મન",
      "હમ હૃદય સિંચો અમૃત ‘સોનલ’ પ્રેમ મયી લાગી લગન..... હે ચારણી",
    ],
  ];

  return (
    <div className="relative min-h-screen mt-10 sm:mt-30 bg-[#FCFAF5] dark:bg-[#050505] text-slate-900 dark:text-slate-100 font-sans overflow-hidden transition-colors duration-500 pt-24 pb-20 lg:pt-32 lg:pb-32">
      
      {/* Divine Ambient Background */}
      <div className="absolute top-[-10%] left-[50%] -translate-x-1/2 w-[80vw] h-[50vh] bg-gradient-to-b from-amber-500/10 to-transparent dark:from-orange-600/10 rounded-[100%] blur-[100px] pointer-events-none"></div>
      
      {/* Texture Overlay for manuscript feel */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.04] dark:opacity-[0.06] pointer-events-none mix-blend-overlay"></div>

      <div className="max-w-5xl mx-auto px-2 min-[500px]:px-4 min-[640px]:px-6 min-[1024px]:px-8 relative z-10">
        
        {/* Title Section */}
        <div className="text-center mb-12 sm:mb-20 space-y-6">
          <div className="flex justify-center items-center gap-1.5 sm:gap-3 mb-4">
            <span className="h-px w-6 sm:h-[2px] sm:w-12 bg-gradient-to-r from-transparent to-amber-500/60"></span>
            <Flame className="w-4 h-4 sm:w-6 sm:h-6 text-orange-500 animate-pulse" />
            <span className="h-px w-6  sm:h-[2px] sm:w-12 bg-gradient-to-l from-transparent to-amber-500/60"></span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-7xl py-1 font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-amber-600 via-orange-500 to-red-600 dark:from-yellow-400 dark:via-orange-400 dark:to-red-500 leading-tight pb-2 drop-shadow-sm">
            હે ચારણી સુખ કારિણી
          </h1>
          <p className="text-xs min-[640px]:text-xl min-[1024px]:text-2xl text-amber-800/70 dark:text-amber-200/70 font-semibold tracking-widest">
            (ઢાળ : શ્રી રામચંદ્ર કૃપાળુ ભજમન)
          </p>
        </div>

        {/* Sacred Frame Outer (Double Border Effect) */}
        <div className="relative p-2 sm:p-4 rounded-[2.5rem] sm:rounded-[3.5rem] bg-gradient-to-b from-amber-100 to-orange-50 dark:from-amber-900/40 dark:to-orange-950/20 border border-amber-200 dark:border-amber-800/50 shadow-[0_20px_60px_-15px_rgba(245,158,11,0.15)] dark:shadow-[0_20px_60px_-15px_rgba(245,158,11,0.05)]">
          
          {/* Sacred Frame Inner */}
          <div className="relative p-6 sm:p-12 lg:p-20 rounded-[2rem] sm:rounded-[3rem] bg-[#FFFCF6] dark:bg-[#0A0A0A] border-[1.5px] border-amber-200/60 dark:border-amber-700/30 overflow-hidden">
            
            {/* Corner Ornaments (CSS Based) */}
            <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-amber-400/40 dark:border-amber-600/40 rounded-tl-xl"></div>
            <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-amber-400/40 dark:border-amber-600/40 rounded-tr-xl"></div>
            <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-amber-400/40 dark:border-amber-600/40 rounded-bl-xl"></div>
            <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-amber-400/40 dark:border-amber-600/40 rounded-br-xl"></div>

            {/* --- દોહા Section --- */}
            <div className="relative text-center mb-16 sm:mb-24">
              <h2 className="inline-flex items-center justify-center gap-3 px-6 py-2 mb-8 rounded-full bg-amber-50 dark:bg-amber-950/30 border border-amber-100 dark:border-amber-900/50">
                <Flower2 className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                <span className="text-base min-[500px]:text-xl min-[640px]:text-2xl font-bold text-amber-800 dark:text-amber-300 tracking-widest">॥ દોહા ॥</span>
                <Flower2 className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              </h2>
              <div className="max-w-3xl mx-auto">
                <p className="text-xs min-[440px]:text-sm min-[545px]:text-base min-[678px]:text-lg min-[768px]:text-[1.35rem] min-[1024px]:text-[1.6rem] font-extrabold text-slate-800 dark:text-slate-200 leading-[2.2] sm:leading-[2.5]">
                  કરણી ભરણી હરણી તુમ, વરણી વેદ વિખ્યાત;<br />
                  અશરણ શરણી અંબિકે, નમો ધરણી જગ માત
                </p>
              </div>
            </div>

            {/* Elegant Divider */}
            <div className="flex justify-center items-center gap-3 sm:gap-6 my-10 sm:my-16 opacity-80">
              <div className="h-px sm:h-[1.5px] w-24 sm:w-40 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
              <Sparkles className="w-4 h-4 sm:w-6 sm:h-6 text-amber-500 animate-pulse" />
              <div className="h-px sm:h-[1.5px] w-24 sm:w-40 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
            </div>

            {/* --- પ્રાર્થના Section --- */}
            <div className="relative text-center mb-16">
              <h2 className="inline-flex items-center justify-center gap-3 px-6 py-2 mb-4 rounded-full bg-amber-50 dark:bg-amber-950/30 border border-amber-100 dark:border-amber-900/50">
                <Flower2 className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                <span className="text-base min-[500px]:text-xl min-[640px]:text-2xl font-bold text-amber-800 dark:text-amber-300 tracking-widest">॥ પ્રાર્થના ॥</span>
                <Flower2 className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              </h2>
              <p className="text-[10px] min-[500px]:text-xs min-[640px]:text-lg text-amber-700/60 dark:text-amber-400/60 font-medium mb-12">
                (રાગ ભૈરવી)
              </p>

              {/* Stanzas Rendering */}
              <div className="space-y-5 min-[500px]:space-y-12 min-[640px]:space-y-16 max-w-4xl mx-auto max-[600px]:-mx-6">
                {prathanaStanzas.map((lines, index) => (
                  <div 
                    key={index} 
                    className="group transition-all duration-500 hover:-translate-y-1"
                  >
                    <p className="text-[11px] min-[440px]:text-sm min-[545px]:text-base min-[678px]:text-lg min-[768px]:text-[1.35rem] min-[1024px]:text-[1.6rem] font-bold text-slate-700 dark:text-slate-300 leading-relaxed min-[640px]:leading-[2.2] group-hover:text-amber-700 dark:group-hover:text-amber-300 transition-colors">
                      {lines[0]}<br />
                      <span className="opacity-90">{lines[1]}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* --- લેખક/કર્તા Section --- */}
            <div className="mt-10 sm:mt-20 pt-10 relative text-center">
               <div className="absolute top-0 left-[20%] right-[20%] h-[1px] bg-gradient-to-r from-transparent via-amber-300 dark:via-amber-700/50 to-transparent"></div>
              
              <div className="inline-block p-4 sm:p-6 rounded-2xl bg-gradient-to-b from-amber-50 to-transparent dark:from-amber-900/10 border border-amber-100 dark:border-amber-800/30">
                <p className="text-base sm:text-xl lg:text-2xl font-black text-slate-800 dark:text-slate-200 tracking-wide">
                  કર્તા : <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600 dark:from-amber-400 dark:to-orange-500">પ. પૂ. આઈ શ્રી સોનલમાં (મઢડા)</span>
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}