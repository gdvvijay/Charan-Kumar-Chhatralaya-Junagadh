import React from 'react';
import { GraduationCap, CalendarCheck, HeartHandshake, MountainSnow, Users } from 'lucide-react';

const ActivitiesSection = () => {
  const activities = [
    {
      id: 1,
      title: "શૈક્ષણિક પ્રવૃત્તિઓ",
      description: "સોનલમા ટ્રસ્ટ સ્કોલરશિપ, કારકિર્દી માર્ગદર્શન સેમિનાર અને હોશિયાર વિદ્યાર્થીઓને પ્રોત્સાહન આપવા વિવિધ કાર્યક્રમો.",
      icon: GraduationCap,
      colorClass: "text-indigo-600 dark:text-indigo-400",
      bgClass: "bg-indigo-50 dark:bg-indigo-500/10",
      borderHoverClass: "hover:border-indigo-500/50"
    },
    {
      id: 2,
      title: "સામાજિક ઉત્સવો",
      description: "૨૬મી જાન્યુઆરીએ પ્રજાસત્તાક દિનની શાનદાર ઉજવણી અને નવરાત્રી ઉત્સવ  દરમિયાન ભવ્ય ગરબાનું આયોજન.",
      icon: CalendarCheck,
      colorClass: "text-pink-600 dark:text-pink-400",
      bgClass: "bg-pink-50 dark:bg-pink-500/10",
      borderHoverClass: "hover:border-pink-500/50"
    },
    {
      id: 3,
      title: "સમૂહ લગ્નોત્સવ",
      description: "૨૦૧૮માં શ્રી ચારણ-ગઢવી સમાજનો ૧૨મો ભવ્ય સમૂહ લગ્નોત્સવ આ જ છાત્રાલયના વિશાળ પ્રાંગણમાં યોજાયો હતો.",
      icon: HeartHandshake,
      colorClass: "text-red-600 dark:text-red-400",
      bgClass: "bg-red-50 dark:bg-red-500/10",
      borderHoverClass: "hover:border-red-500/50"
    },
    {
      id: 4,
      title: "સાંસ્કૃતિક મહત્વ",
      description: "જૂનાગઢ એ ગિરનારની ગોદમાં વસેલું શહેર છે. ચારણોની સત્ય અને ન્યાયની પરંપરાને આ છાત્રાલય આધુનિક શિક્ષણ સાથે જોડે છે.",
      icon: MountainSnow,
      colorClass: "text-orange-600 dark:text-orange-400",
      bgClass: "bg-orange-100 dark:bg-orange-500/20",
      borderHoverClass: "hover:border-orange-500/50",
      isGradient: true
    },
    {
      id: 5,
      title: "એકતાનું પ્રતિક",
      description: "વિવિધ ગામોના બાળકો એક છત નીચે રહીને ભાઈચારાની ભાવના કેળવે છે, જે સમાજની ભવિષ્યની પેઢીને મજબૂત બનાવે છે.",
      icon: Users,
      colorClass: "text-blue-600 dark:text-blue-400",
      bgClass: "bg-blue-100 dark:bg-blue-500/20",
      borderHoverClass: "hover:border-blue-500/50",
      isGradient: true
    },
    {
      id: 6,
      title: "શૈક્ષણિક પ્રદાન",
      description: "આર્થિક રીતે નબળા પરંતુ તેજસ્વી વિદ્યાર્થીઓને શહેર કક્ષાનું શિક્ષણ મેળવવા માટે પ્લેટફોર્મ અને સુવિધા પૂરી પાડે છે.",
      icon: GraduationCap, // Reused icon as per original HTML structure
      colorClass: "text-green-600 dark:text-green-400",
      bgClass: "bg-green-100 dark:bg-green-500/20",
      borderHoverClass: "hover:border-green-500/50",
      isGradient: true
    }
  ];

  return (
    <section id="activities" className="w-full bg-slate-50 dark:bg-[#0a0a0a] text-slate-900 dark:text-slate-100 font-sans transition-colors duration-500 selection:bg-indigo-200 dark:selection:bg-indigo-900">
      <div className="space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative z-10">
        
        
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-4xl sm:border sm:rounded-full py-5 md:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
            પ્રવૃત્તિઓ અને <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">સાંસ્કૃતિક મૂલ્યો</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg font-medium">
            શિક્ષણની સાથે સાથે સામાજિક જવાબદારી અને સાંસ્કૃતિક વારસાનું જતન કરતી વિવિધ પ્રવૃત્તિઓ.
          </p>
        </div>

        {}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity) => (
            <div 
              key={activity.id} 
              className={`
                group p-6 sm:p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-sm 
                hover:shadow-xl transition-all duration-300 hover:-translate-y-1
                ${activity.borderHoverClass}
                ${activity.isGradient 
                  ? 'bg-gradient-to-br from-slate-100 to-slate-50 dark:from-slate-900/80 dark:to-slate-900/40' 
                  : 'bg-white dark:bg-white/5'}
              `}
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${activity.bgClass} ${activity.colorClass}`}>
                <activity.icon className="w-7 h-7" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                {activity.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                {activity.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ActivitiesSection
