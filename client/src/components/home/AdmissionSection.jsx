"use client";

import React from 'react';
import { 
  FileText, 
  FileBadge, 
  ReceiptIndianRupee, 
  Info, 
  CheckCircle2,
  PhoneCall,
  Download,
  ShieldCheck,
  Building,
  BookOpen,
  MapPin,
  Phone
} from 'lucide-react';

/* STREAMING_CHUNK:Defining main AdmissionSection component... */
export default function AdmissionSection() {
  return (
    <section id="admission" className="relative w-full py-24 lg:py-32 bg-slate-50 dark:bg-[#0a0a0a] text-slate-900 dark:text-slate-100 font-sans overflow-hidden transition-colors duration-500">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-[40rem] h-[40rem] bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-[100px] -translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[50rem] h-[50rem] bg-orange-500/5 dark:bg-orange-500/10 rounded-full blur-[120px] translate-y-1/3 translate-x-1/4 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.03] dark:opacity-[0.05] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20 space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 dark:bg-orange-500/10 text-orange-700 dark:text-orange-400 font-semibold text-sm border border-orange-200 dark:border-orange-500/20 shadow-sm">
            <FileText className="w-4 h-4" />
            <span>પ્રવેશ અને નિયમો</span>
          </div>
          <h2 className="text-4xl sm:border sm:rounded-full py-5 md:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
            પ્રવેશ પ્રક્રિયા અને <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">ફી માળખું</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
            શ્રી કાનજીભાઈ નાગૈયા ચારણ કુમાર છાત્રાલયમાં પ્રવેશ મેળવવા ઈચ્છતા વિદ્યાર્થીઓએ નીચે મુજબની પ્રક્રિયા અને ફીની વિગતો ધ્યાનમાં લેવાની રહેશે.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-16">
          
          {/* Left Column: Admission Process Timeline */}
          <div className="lg:col-span-5 space-y-8">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3 mb-8">
              <span className="w-8 h-8 rounded-lg bg-orange-100 dark:bg-orange-500/20 flex items-center justify-center text-orange-600 dark:text-orange-400">
                <FileBadge className="w-5 h-5" />
              </span>
              જરૂરી પ્રક્રિયા
            </h3>

            <div className="relative border-l-2 border-orange-200 dark:border-orange-900/50 pl-8 ml-4 md:ml-0 space-y-10">
              
              {/* Step 1 */}
              <div className="relative group">
                <div className="absolute -left-[41px] top-1 bg-white dark:bg-[#0a0a0a] border-4 border-orange-500 rounded-full w-5 h-5 transition-transform group-hover:scale-125"></div>
                <div className="bg-white dark:bg-white/5 p-6 rounded-[2rem] border border-slate-100 dark:border-white/5 shadow-sm hover:shadow-md transition-all group-hover:-translate-y-1">
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                    <span className="text-orange-500">૧.</span> પ્રવેશ ફોર્મ
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    છાત્રાલયની કચેરી પરથી પ્રાપ્ત પ્રવેશ ફોર્મ સંપૂર્ણ વિગતો સાથે ભરીને જમા કરાવવું અનિવાર્ય છે.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative group">
                <div className="absolute -left-[41px] top-1 bg-white dark:bg-[#0a0a0a] border-4 border-orange-500 rounded-full w-5 h-5 transition-transform group-hover:scale-125"></div>
                <div className="bg-white dark:bg-white/5 p-6 rounded-[2rem] border border-slate-100 dark:border-white/5 shadow-sm hover:shadow-md transition-all group-hover:-translate-y-1">
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                    <span className="text-orange-500">૨.</span> કાયદેસરના દસ્તાવેજો
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-3">
                    ઓળખ અને રહેઠાણના પુરાવા તરીકે નીચે મુજબના જરૂરી દસ્તાવેજોની ઝેરોક્ષ નકલ જોડવી:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" /> આધાર કાર્ડ
                    </li>
                    <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" /> શાળા/કોલેજનું આઈ-કાર્ડ
                    </li>
                    <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" /> જાતિનો દાખલો
                    </li>
                  </ul>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative group">
                <div className="absolute -left-[41px] top-1 bg-white dark:bg-[#0a0a0a] border-4 border-orange-500 rounded-full w-5 h-5 transition-transform group-hover:scale-125"></div>
                <div className="bg-white dark:bg-white/5 p-6 rounded-[2rem] border border-slate-100 dark:border-white/5 shadow-sm hover:shadow-md transition-all group-hover:-translate-y-1">
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                    <span className="text-orange-500">૩.</span> ફીની ચુકવણી
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    પસંદ કરેલા પ્લાન મુજબની ફી સંસ્થામાં જમા કરાવી પહોંચ મેળવવી.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Fee Structure Cards */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3 mb-8">
              <span className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-500/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                <ReceiptIndianRupee className="w-5 h-5" />
              </span>
              ફી નું માળખું
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Plan 1: Monthly */}
              <div className="bg-white dark:bg-white/5 border border-slate-200 dark:border-slate-800 rounded-[2rem] p-6 hover:border-indigo-500/50 hover:shadow-xl transition-all duration-300 flex flex-col relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl group-hover:bg-indigo-500/10 transition-colors"></div>
                <div className="relative z-10">
                  <h4 className="text-lg font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">માસિક (Monthly)</h4>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-3xl font-black text-slate-900 dark:text-white">₹ ૨,૦૦૦</span>
                    <span className="text-slate-500 dark:text-slate-400 font-medium">/ મહિનો</span>
                  </div>
                  <div className="w-full h-px bg-slate-100 dark:bg-slate-800 my-4"></div>
                  <div className="mt-auto">
                    <p className="text-sm text-slate-600 dark:text-slate-400 font-medium flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span> સામાન્ય વિદ્યાર્થીઓ માટે
                    </p>
                    <p className="text-sm text-slate-400 dark:text-slate-500 mt-2 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-200 dark:bg-slate-700"></span> ST રાહત: ઉપલબ્ધ નથી
                    </p>
                  </div>
                </div>
              </div>

              {/* Plan 2: Half Yearly */}
              <div className="bg-white dark:bg-white/5 border border-slate-200 dark:border-slate-800 rounded-[2rem] p-6 hover:border-orange-500/50 hover:shadow-xl transition-all duration-300 flex flex-col relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-2xl group-hover:bg-orange-500/10 transition-colors"></div>
                <div className="relative z-10">
                  <h4 className="text-lg font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">૬ મહિના (Half Sem)</h4>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-3xl font-black text-slate-900 dark:text-white">₹ ૭,૫૦૦</span>
                    <span className="text-slate-500 dark:text-slate-400 font-medium">/ ૬ માસ</span>
                  </div>
                  <div className="w-full h-px bg-slate-100 dark:bg-slate-800 my-4"></div>
                  <div className="mt-auto space-y-3">
                    <div className="bg-slate-50 dark:bg-slate-800/50 p-3 rounded-xl border border-slate-100 dark:border-slate-800">
                      <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mb-1">ગીર વિસ્તારના (ST) વિદ્યાર્થીઓ માટે:</p>
                      <p className="text-lg font-bold text-orange-600 dark:text-orange-400">₹ ૨,૫૦૦</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Plan 3: Full Year (Highlighted) */}
              <div className="md:col-span-2 bg-gradient-to-br from-indigo-900 via-slate-900 to-slate-950 rounded-[2rem] p-1 shadow-2xl relative overflow-hidden transform md:-rotate-1 hover:rotate-0 transition-transform duration-300">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                  <div className="absolute top-[-50%] right-[-20%] w-[100%] h-[100%] rounded-full bg-orange-500/20 blur-3xl"></div>
                </div>
                
                <div className="relative z-10 bg-slate-900/40 backdrop-blur-xl rounded-[1.8rem] p-6 sm:p-8 h-full flex flex-col md:flex-row items-center md:items-center justify-between gap-6 border border-white/10">
                  <div className="w-full md:w-auto">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-wider mb-4 border border-orange-500/30">
                      સૌથી લોકપ્રિય
                    </div>
                    <h4 className="text-xl font-bold text-slate-300 uppercase tracking-wider mb-2">વાર્ષિક (Full Year)</h4>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl sm:text-5xl font-black text-white">₹ ૧૫,૦૦૦</span>
                      <span className="text-slate-400 font-medium">/ વર્ષ</span>
                    </div>
                  </div>
                  
                  <div className="w-full md:w-auto flex-shrink-0 bg-white/10 border border-white/20 p-5 rounded-2xl md:min-w-[240px]">
                    <p className="text-sm text-orange-300 font-medium mb-1 flex items-center gap-2">
                      <Info className="w-4 h-4" /> ગીર વિસ્તારના (ST) માટે
                    </p>
                    <div className="text-3xl font-black text-white">
                      ₹ ૫,૦૦૦
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Notification Banner */}
            <div className="mt-6 bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-900/50 rounded-[1.5rem] p-5 flex items-start gap-4">
              <Info className="w-6 h-6 text-orange-500 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm sm:text-base font-bold text-orange-900 dark:text-orange-300 mb-1">આર્થિક રાહતની નોંધ</h4>
                <p className="text-sm text-orange-800 dark:text-orange-400/80 leading-relaxed">
                  ગીર વિસ્તારના અનુસૂચિત જનજાતિ (ST) ના વિદ્યાર્થીઓને શિક્ષણમાં પ્રોત્સાહન આપવા માટે સંસ્થા દ્વારા ફીમાં ખાસ આર્થિક રાહત આપવામાં આવે છે. વધુ માહિતી માટે કાર્યાલયનો સંપર્ક કરવો.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-4 border-t border-slate-200 dark:border-slate-800">
              <a 
                href="tel:+919824288852" 
                className="flex-1 px-6 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl font-bold text-center transition-transform hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-5 h-5" />
                હેલ્પલાઇન સંપર્ક
              </a>
              <button 
                className="flex-1 px-6 py-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-2xl font-bold text-center transition-all hover:-translate-y-1 hover:border-orange-500 hover:text-orange-600 dark:hover:text-orange-400 flex items-center justify-center gap-2 group"
              >
                <Download className="w-5 h-5 text-slate-400 group-hover:text-orange-500" />
                પ્રવેશ ફોર્મ (PDF)
              </button>
            </div>

          </div>
        </div>

        {/* BOTTOM SECTION: Rules and Contact Info Block */}
        <div className="mt-10 relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-indigo-900 via-slate-900 to-slate-950 p-4 pt-5 sm:p-8 md:p-12 shadow-2xl border border-indigo-500/20">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Rules Section */}
            <div className="space-y-6 text-white">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">📝 પ્રવેશ અને નિયમો</h2>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <ShieldCheck className="w-7 h-7 text-orange-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-base sm:text-lg mb-1">પાત્રતા</strong>
                    <span className="text-slate-300 text-sm sm:text-base leading-relaxed block">
                      આ છાત્રાલય માત્ર ચારણ સમાજના કુમાર (છોકરાઓ) માટે જ છે.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Building className="w-7 h-7 text-orange-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-lg mb-1">અન્ય શાખા</strong>
                    <span className="text-slate-300 leading-relaxed block">
                      આ ટ્રસ્ટ દ્વારા માત્ર જૂનાગઢમાં જ નહીં, પરંતુ ખંભાળિયા સહિત ગુજરાતના અન્ય અનેક સ્થળોએ શૈક્ષણિક સંસ્થાઓ અને છાત્રાલયોનું સફળ સંચાલન કરવામાં આવે છે.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <BookOpen className="w-7 h-7 text-orange-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-lg mb-1">રૂબરૂ મુલાકાત</strong>
                    <span className="text-slate-300 leading-relaxed block">
                      ઉપર જણાવેલ પ્રક્રિયા મુજબ, ફોર્મ જમા કરાવવા અને એડમિશન કન્ફર્મ કરવા માટે વિદ્યાર્થીએ પોતાના વાલી સાથે જરૂરી દસ્તાવેજો લઈને છાત્રાલયની રૂબરૂ મુલાકાત લેવાની રહેશે.
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Contact Info Card */}
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-5 min-[400px]:p-6 min-[640px]:p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <Phone className="w-6 h-6 text-orange-400" />
                સંપર્ક માહિતી
              </h3>
              
              <div className="space-y-8">
                {/* Address */}
                <div className="flex items-start gap-5">
                  <div className="p-3.5 bg-white/10 rounded-full shrink-0 border border-white/10">
                    <MapPin className="w-6 h-6 text-orange-300" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 font-semibold uppercase tracking-wider mb-2">સરનામું</p>
                    <p className="text-white text-lg font-medium leading-relaxed">
                      આઈશ્રી સોનલ માઁ ચારણ સભા સંચાલિત <br/>
                      શ્રી કાનજીભાઈ નાગૈયા કુમાર છાત્રાલય, <br/>
                      મેઘાણી નગર, જૂનાગઢ.
                    </p>
                  </div>
                </div>

                {/* Helpline */}
                <div className="flex items-start gap-5">
                  <div className="p-3.5 bg-orange-500/20 rounded-full shrink-0 border border-orange-500/30">
                    <Phone className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 font-semibold uppercase tracking-wider mb-2">ટ્રસ્ટ હેલ્પલાઇન</p>
                    <a href="tel:+919824288852" className="block text-2xl sm:text-3xl font-black text-white hover:text-orange-400 transition-colors mb-2">
                      +91 98242 88852
                    </a>
                    <p className="text-xs text-slate-400 bg-slate-900/50 inline-block px-3 py-1.5 rounded-lg border border-slate-700/50">
                      * નોંધ: આ નંબર સમગ્ર ટ્રસ્ટની પ્રવૃત્તિઓ માટે છે.
                    </p>
                  </div>
                </div>

                <a 
                  href="tel:+919824288852"
                  className="w-full mt-2 py-4 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-lg rounded-2xl shadow-lg transition-transform hover:-translate-y-1 flex justify-center items-center gap-3"
                >
                  <Phone className="w-5 h-5" /> 
                  પ્રવેશ માટે સંપર્ક કરો
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}