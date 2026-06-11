import React from 'react';
import { Target, BookOpen, ShieldCheck, Users, Sparkles, HeartHandshake, Eye } from 'lucide-react';

const AimsAndValues = () => {
  const coreValues = [
    {
      id: 1,
      title: 'ઉચ્ચ શિક્ષણ',
      desc: 'ચારણ સમાજના યુવાનોને શ્રેષ્ઠ શૈક્ષણિક વાતાવરણ પૂરું પાડી તેમને કારકિર્દીના ઉચ્ચ શિખરો સર કરવા સક્ષમ બનાવવા.',
      icon: BookOpen,
      color: 'text-blue-500',
      bg: 'bg-blue-50 dark:bg-blue-500/10',
      border: 'group-hover:border-blue-500/50'
    },
    {
      id: 2,
      title: 'શિસ્ત અને સંસ્કાર',
      desc: 'માત્ર પુસ્તકીયું જ્ઞાન જ નહીં, પરંતુ નૈતિક મૂલ્યો, વડીલોનો આદર અને કઠોર શિસ્તનું સિંચન કરવું.',
      icon: ShieldCheck,
      color: 'text-emerald-500',
      bg: 'bg-emerald-50 dark:bg-emerald-500/10',
      border: 'group-hover:border-emerald-500/50'
    },
    {
      id: 3,
      title: 'સામાજિક એકતા',
      desc: '"ચારણ એક ધારણ" ની ભાવના સાથે સમાજના તમામ વર્ગના વિદ્યાર્થીઓમાં ભાઈચારો અને સંગઠન કેળવવું.',
      icon: Users,
      color: 'text-orange-500',
      bg: 'bg-orange-50 dark:bg-orange-500/10',
      border: 'group-hover:border-orange-500/50'
    },
    {
      id: 4,
      title: 'આધ્યાત્મિક વિકાસ',
      desc: 'આઈશ્રી સોનલ માઁ ના આદર્શો પર ચાલીને, નિયમિત પ્રાર્થના અને ધાર્મિક ઉત્સવો થકી આધ્યાત્મિક ચેતના જગાવવી.',
      icon: Sparkles,
      color: 'text-purple-500',
      bg: 'bg-purple-50 dark:bg-purple-500/10',
      border: 'group-hover:border-purple-500/50'
    }
  ];

  return (
    <section id="aims-values" className="relative w-full py-24 lg:py-32 bg-slate-50 dark:bg-[#0a0a0a] text-slate-900 dark:text-slate-100 font-sans overflow-hidden transition-colors duration-500">
      
      {/* Background Decorative Blur */}
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-orange-500/5 dark:bg-orange-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[50rem] h-[50rem] bg-amber-500/5 dark:bg-yellow-500/5 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.03] dark:opacity-[0.05] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 dark:bg-orange-500/10 text-orange-700 dark:text-orange-400 font-semibold text-sm border border-orange-200 dark:border-orange-500/20 shadow-sm">
            <Target className="w-4 h-4" aria-hidden="true" />
            <span>અમારું લક્ષ્ય</span>
          </div>
          <h2 className="text-4xl sm:border sm:rounded-full py-5 md:text-5xl sm:w-fit sm:px-20 sm:mx-auto font-black tracking-tight text-slate-900 dark:text-white leading-tight">
            ઉદ્દેશ્ય અને <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">મૂલ્યો</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
            ચારણ સમાજના યુવાનોનું સર્વાંગી ઘડતર કરી તેમને એક જવાબદાર, સંસ્કારી અને સફળ નાગરિક બનાવવા એ જ અમારું પરમ લક્ષ્ય છે.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Vision & Mission (Spanning 5 cols) */}
          <div className="xl:col-span-5 flex flex-col gap-6">
            {/* Vision Card */}
            <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950 p-8 sm:p-10 shadow-2xl border border-slate-800 h-full flex flex-col justify-center group">
              <div className="absolute top-0 right-0 w-48 h-48 bg-orange-500/10 rounded-full blur-3xl pointer-events-none"></div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-orange-500/20 flex items-center justify-center mb-6 border border-orange-500/30 text-orange-400">
                  <Eye className="w-7 h-7" />
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">અમારું વિઝન (Vision)</h3>
                <p className="text-slate-300 text-lg leading-relaxed font-medium">
                  "જે સમાજમાં શિક્ષણ નથી, તે સમાજનું ભવિષ્ય અંધકારમય છે." - આઈશ્રી સોનબાઇ મા ના આ દિવ્ય વિચારને સાર્થક કરી, ચારણ સમાજના છેવાડાના ગામના વિદ્યાર્થીને પણ આધુનિક શિક્ષણ અને સંસ્કાર આપી રાષ્ટ્ર નિર્માણમાં ભાગીદાર બનાવવો.
                </p>
              </div>

              {/* Decorative Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-orange-500/20 rounded-[2.5rem] pointer-events-none transition-colors duration-500"></div>
            </div>
          </div>

          {/* Right Column: Core Values Grid (Spanning 7 cols) */}
          <div className="xl:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {coreValues.map((value) => (
              <div 
                key={value.id}
                className={`group relative p-6 sm:p-8 rounded-[2rem] bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden ${value.border}`}
              >
                <div className="relative z-10">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${value.bg} ${value.color} group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors">
                    {value.title}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed font-medium">
                    {value.desc}
                  </p>
                </div>
                
                {/* Hover Glow Effect */}
                <div className={`absolute -bottom-8 -right-8 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${value.bg.split(' ')[0]}`}></div>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom Call to Action or Trust Info */}
        <div className="mt-16 sm:mt-20">
          <div className="relative overflow-hidden rounded-[2rem] bg-orange-50 dark:bg-orange-500/5 border border-orange-200 dark:border-orange-500/20 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white dark:bg-slate-900 rounded-full shadow-sm text-orange-500 shrink-0">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">સંસ્થાને સહયોગ આપો</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm font-medium mt-1">
                  આપનું નાનું યોગદાન કોઈ તેજસ્વી વિદ્યાર્થીનું ભવિષ્ય બદલી શકે છે.
                </p>
              </div>
            </div>
            <button className="shrink-0 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-bold text-sm shadow-md hover:shadow-lg transition-transform hover:-translate-y-1">
              સંપર્ક કરો
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AimsAndValues;