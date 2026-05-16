'use client'
import React from 'react';
import { 
  BookOpen, 
  MapPin, 
  HeartHandshake, 
  ShieldCheck, 
  Sparkles, 
  Users, 
  MountainSnow,
  GraduationCap,
  Leaf,
  CalendarCheck,
  Building,
  Phone,
  Quote
} from 'lucide-react';

export default function AboutUsSection() {
  return (
    <section id="history" className="relative w-full py-24 lg:py-32 bg-slate-50 dark:bg-[#0a0a0a] text-slate-900 dark:text-slate-100 font-sans overflow-hidden transition-colors duration-500">
      
      {/* Abstract Background Elements for Depth */}
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-orange-500/5 dark:bg-orange-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[50rem] h-[50rem] bg-amber-500/5 dark:bg-yellow-500/5 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.03] dark:opacity-[0.05] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="text-center max-w-3xl mx-auto mb-20 space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 dark:bg-orange-500/10 text-orange-700 dark:text-orange-400 font-semibold text-sm border border-orange-200 dark:border-orange-500/20">
            <MountainSnow className="w-4 h-4" />
            <span>ગિરનારની ગોદમાં શૈક્ષણિક ધામ</span>
          </div>
          <h2 className="text-4xl sm:border sm:rounded-full py-5 md:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
            છાત્રાલય પરિચય અને અમારા <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">પ્રેરણાસ્ત્રોત</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
            શિક્ષણ, શિસ્ત અને સંસ્કારોનું પવિત્ર સંગમ, જ્યાં ચારણ સમાજના યુવાનોનું ભવિષ્ય ઘડાય છે.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Side: Girish Aapa Image & Badges */}
          <div className="lg:col-span-5 relative group">
            {/* Soft Glow behind image */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-amber-600 rounded-[2.5rem] blur-2xl opacity-20 dark:opacity-30 group-hover:opacity-40 transition-opacity duration-700"></div>
            
            <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden border-2 border-white dark:border-white/10 shadow-2xl bg-slate-200 dark:bg-slate-800">
              {/* Image Loading / Fallback area */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-100 dark:bg-slate-900 text-slate-400">
                <Users className="w-16 h-16 opacity-50 mb-4" />
                <p>છબી લોડ થઈ રહી છે...</p>
              </div>
              
              {/* Actual Image */}
              <img 
                src="/images/girishaapa.png" 
                alt="પરમ પૂજ્ય ગિરીશ આપા" 
                className="absolute inset-0 w-full h-full object-cover object-top z-10 transition-transform duration-700 group-hover:scale-105"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />

              {/* Inner Gradient for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10 pointer-events-none"></div>
              
              {/* Profile Nameplate */}
              <div className="absolute bottom-0 left-0 w-full p-4 sm:p-8 z-20">
                <p className="text-orange-400 font-bold tracking-wider text-xs sm:text-sm mb-1 uppercase">છાત્રાલય સંચાલક</p>
                <h3 className="text-xl min-[400px]:text-2xl min-[640px]:text-3xl  font-black text-white mb-2">પૂજ્ય ગિરીશ આપા (મોડ)</h3>
                <p className="text-slate-300 text-xs sm:text-sm font-medium flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-orange-400" /> પિતાતુલ્ય માર્ગદર્શક અને વ્યવસ્થાપક
                </p>
              </div>
            </div>

            {/* Floating Connection Badge */}
        <div className="absolute z-10  top-3 left-[50%] transform translate-x-[-50%] ">
                {/* <Quote className="w-6 h-6 text-orange-500 mb-2" /> */}
                <p className="font-extrabold text-base min-[400px]:text-lg min-[600px]:text-xl leading-tight tracking-wider text-center text-nowrap text-[#ffffffc9]">
                  &ldquo; ચારણ એક ધારણ &rdquo;
                </p>
              </div>
          </div>

          {/* Right Side: Detailed Prose & Info Accordions */}
          <div className="lg:col-span-7 space-y-10">
            
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
                સેવા, સમર્પણ અને સંસ્કારોનું સંગમ
              </h3>
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                જૂનાગઢમાં કાર્યરત <strong className="text-orange-600 dark:text-orange-400">શ્રી કાનજીભાઈ નાગૈયા ચારણ કુમાર છાત્રાલય</strong> માત્ર એક રહેવાની વ્યવસ્થા નથી, પરંતુ ચારણ સમાજના તેજસ્વી વિદ્યાર્થીઓ માટે સંસ્કાર અને શિસ્તનું વિદ્યાલય છે. આ સંસ્થાનું સંચાલન ગિરીશ આપા (મોડ) દ્વારા અત્યંત નિષ્ઠા અને વાત્સલ્યપૂર્વક કરવામાં આવે છે.
              </p>
            </div>

            <div className="grid gap-6">
              
              {/* Card 1: Father Figure */}
              <div className="p-6 rounded-3xl bg-white dark:bg-[#111] border border-slate-200 dark:border-slate-800 shadow-sm hover:border-orange-300 dark:hover:border-orange-500/50 transition-colors flex gap-5 group">
                <div className="shrink-0 mt-1">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                    <HeartHandshake className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">પિતાતુલ્ય માર્ગદર્શક</h4>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    ગિરીશ આપા માત્ર એક મેનેજર નથી, પરંતુ વિદ્યાર્થીઓ માટે એક માર્ગદર્શક છે. દૂરના ગામડાઓથી આવતા બાળકોની ભણતરની પ્રગતિ અને સ્વાસ્થ્યનું ધ્યાન રાખવું એ તેમની પ્રાથમિકતા રહે છે.
                  </p>
                </div>
              </div>

              {/* Card 2: Sonal Maa's Blessing */}
              <div className="p-6 rounded-3xl bg-white dark:bg-[#111] border border-slate-200 dark:border-slate-800 shadow-sm hover:border-amber-300 dark:hover:border-amber-500/50 transition-colors flex gap-5 group">
                <div className="shrink-0 mt-1">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 dark:bg-amber-500/10 flex items-center justify-center text-amber-600 dark:text-amber-400 group-hover:scale-110 transition-transform">
                    <Sparkles className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">સોનલ મા ના આશીર્વાદ અને વારસો</h4>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    સોનલ મા ના પરિવાર સાથે જોડાયેલા હોવાથી ગિરીશ આપામાં સહજ રીતે સેવાભાવ જોવા મળે છે. તેમના વહીવટમાં નિયમોની સાથે 'માતૃત્વ' અને 'વાત્સલ્ય' નું અદભુત પ્રતિબિંબ છે.
                  </p>
                </div>
              </div>

              {/* Card 3: Discipline */}
              <div className="p-6 rounded-3xl bg-white dark:bg-[#111] border border-slate-200 dark:border-slate-800 shadow-sm hover:border-green-300 dark:hover:border-green-500/50 transition-colors flex gap-5 group">
                <div className="shrink-0 mt-1">
                  <div className="w-12 h-12 rounded-2xl bg-green-50 dark:bg-green-500/10 flex items-center justify-center text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform">
                    <Leaf className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">શિસ્ત અને નૈતિક મૂલ્યો</h4>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    ચારણ સમાજમાં શિસ્તનું વિશેષ મહત્વ છે. અહીં રહેતા વિદ્યાર્થીઓ આધુનિક શિક્ષણની સાથે નૈતિક મૂલ્યો અને સામાજિક જવાબદારીઓના પાઠ પણ શીખે છે.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="py-12 border-y border-slate-200 dark:border-slate-800/50 relative">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white text-center mb-16">📜 ઇતિહાસ અને ગૌરવશાળી યાત્રા</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative border-l-2 border-orange-200 dark:border-orange-900/50 pl-8 ml-4 md:ml-0 space-y-12">
              
              <div className="relative">
                <div className="absolute -left-[41px] top-1 bg-orange-500 rounded-full w-5 h-5 ring-4 ring-slate-50 dark:ring-[#0a0a0a]"></div>
                <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-orange-600 dark:text-orange-400 font-bold text-sm tracking-wider uppercase mb-2 block">૩૦ જૂન, ૧૯૭૦</span>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">સ્થાપના અને પ્રારંભ</h3>
                  <p className="text-slate-600 dark:text-slate-400">પરમ પૂજ્ય આઈશ્રી સોનબાઇ મા (મઢડા) ના પાવન હસ્તે ચારણ સમાજના વિદ્યાર્થીઓ માટે જૂનાગઢ ખાતે આ બોર્ડિંગની સ્થાપના કરવામાં આવી.</p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-[41px] top-1 bg-orange-500 rounded-full w-5 h-5 ring-4 ring-slate-50 dark:ring-[#0a0a0a]"></div>
                <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-orange-600 dark:text-orange-400 font-bold text-sm tracking-wider uppercase mb-2 block">૩૧ મે, ૧૯૭૪</span>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">ઐતિહાસિક તૂલા વિધિ</h3>
                  <p className="text-slate-600 dark:text-slate-400">છાત્રાલયની આ જ પાવન જગ્યા પર સોનલ માં ની તૂલા વિધિનો ભવ્ય કાર્યક્રમ યોજાયો હતો, જે એક ઐતિહાસિક ક્ષણ હતી.</p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-[41px] top-1 bg-orange-500 rounded-full w-5 h-5 ring-4 ring-slate-50 dark:ring-[#0a0a0a]"></div>
                <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-orange-600 dark:text-orange-400 font-bold text-sm tracking-wider uppercase mb-2 block">વર્ષ ૨૦૨૦</span>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">સુવર્ણયાત્રા પૂર્ણ</h3>
                  <p className="text-slate-600 dark:text-slate-400">છાત્રાલયે તેની 50 વર્ષની સુવર્ણયાત્રા સફળતાપૂર્વક પૂર્ણ કરી. અનેક પેઢીઓના વિદ્યાર્થીઓની સોનેરી યાદો આ સંસ્થા સાથે જોડાયેલી છે.</p>
                </div>
              </div>

            </div>
          </div>
        </div>



      </div>
    
    </section>
  );
}