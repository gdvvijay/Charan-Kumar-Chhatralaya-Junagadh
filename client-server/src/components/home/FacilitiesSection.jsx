import React from 'react';
import { 
  BookOpen, 
  Building2, 
  UtensilsCrossed, 
  Droplets, 
  Users, 
  Sparkles, 
  Trophy, 
  CheckCircle2,
  Settings2,
  Laptop
} from 'lucide-react';

/* STREAMING_CHUNK:Defining Facilities Data */
const facilitiesData = [
  {
    id: 1,
    title: "આધુનિક ગ્રંથાલય (Library)",
    description: "વિદ્યાર્થીઓના એકાગ્રતાપૂર્વક અભ્યાસ માટે અત્યંત આધુનિક અને શાંત વાતાવરણ.",
    icon: <BookOpen className="w-7 h-7" />,
    colorTheme: "indigo",
    features: ["૫૦ પર્સનલ ડેસ્ક (Personal Desks)", "૨ AC ની સુવિધા", "પ્રોપર અને અનુકૂળ લાઇટિંગ"]
  },
  {
    id: 2,
    title: "નવું રહેણાંક બિલ્ડિંગ",
    description: "હવા-ઉજાસવાળા અને આધુનિક ઢબે તૈયાર કરાયેલા નવા રહેણાંક રૂમ્સ.",
    icon: <Building2 className="w-7 h-7" />,
    colorTheme: "orange",
    features: ["કુલ ૩૩ વિશાળ રૂમ", "દરેક રૂમમાં ૨ સીલિંગ ફેન", "આધુનિક અને સ્વચ્છ વોશરૂમ્સ"]
  },
  {
    id: 3,
    title: "ભોજન અને રસોડું",
    description: "વિદ્યાર્થીઓના સ્વાસ્થ્યને ધ્યાનમાં રાખીને શુદ્ધ, સાત્વિક અને પૌષ્ટિક આહાર.",
    icon: <UtensilsCrossed className="w-7 h-7" />,
    colorTheme: "green",
    features: ["વિશાળ અને સુવ્યવસ્થિત કિચન", "હાઇજેનિક ફૂડ ક્વોલિટી", "વિશાળ ડાઇનિંગ એરિયા"]
  },
  {
    id: 4,
    title: "અવિરત જળ સુવિધા",
    description: "છાત્રાલય સંકુલમાં પીવાના તેમજ વપરાશના પાણીની ક્યારેય અછત ન સર્જાય તેવી વ્યવસ્થા.",
    icon: <Droplets className="w-7 h-7" />,
    colorTheme: "blue",
    features: ["૧ ફૂટવેલ (Footwell)", "૧ ટ્યુબવેલ (Tubewell)", "૨૪ કલાક શુદ્ધ પાણી"]
  },
  {
    id: 5,
    title: "આધ્યાત્મિક વાતાવરણ",
    description: "સંસ્કાર અને આધ્યાત્મિકતાનું સિંચન કરવા માટે પવિત્ર અને ભક્તિમય માહોલ.",
    icon: <Sparkles className="w-7 h-7" />,
    colorTheme: "amber",
    features: ["શ્રી સોનલ માઁનું ભવ્ય મંદિર", "સવાર-સાંજ સામૂહિક પ્રાર્થના", "સંસ્કાર અને એકતાનું સિંચન"]
  },
  {
    id: 6,
    title: "રમત-ગમત અને મેદાન",
    description: "વિદ્યાર્થીઓના શારીરિક વિકાસ અને મનોરંજન માટે રમત-ગમતની વિશાળ સુવિધા.",
    icon: <Trophy className="w-7 h-7" />,
    colorTheme: "rose",
    features: ["વિશાળ સાઈઝનું પ્લેગ્રાઉન્ડ", "ક્રિકેટ અને અન્ય રમતો", "હરિયાળો અને શાંત બગીચો"]
  },
  {
    id: 7,
    title: "મહેમાન ગૃહ (Visitor Rooms)",
    description: "બહારગામથી આવતા વિદ્યાર્થીઓના વાલીઓ અને અતિથિઓ માટે રહેવાની ઉત્તમ સગવડ.",
    icon: <Users className="w-7 h-7" />,
    colorTheme: "purple",
    features: ["અલગ-અલગ ગેસ્ટ રૂમ્સ", "વાલીઓ માટે આરામદાયક રોકાણ", "સંપૂર્ણ પ્રાઇવસી"]
  },
  {
    id: 8,
    title: "વહીવટી કાર્યાલય (Office)",
    description: "વિદ્યાર્થીઓના પ્રવેશ, ફી અને અન્ય વહીવટી કામગીરી માટે સુવ્યવસ્થિત અને આધુનિક ઓફિસ.",
    icon: <Laptop className="w-7 h-7" />,
    colorTheme: "teal",
    features: ["ઝડપી અને સરળ પ્રવેશ પ્રક્રિયા", "માહિતી અને માર્ગદર્શન", "ફી અને દસ્તાવેજ વ્યવસ્થાપન"]
  }
];

/* STREAMING_CHUNK:Helper function for dynamic tailwind classes */
const getColorClasses = (colorTheme) => {
  const colorMap = {
    indigo: {
      bg: "bg-indigo-50 dark:bg-indigo-500/10",
      text: "text-indigo-600 dark:text-indigo-400",
      borderHover: "hover:border-indigo-500/50"
    },
    orange: {
      bg: "bg-orange-50 dark:bg-orange-500/10",
      text: "text-orange-600 dark:text-orange-400",
      borderHover: "hover:border-orange-500/50"
    },
    green: {
      bg: "bg-green-50 dark:bg-green-500/10",
      text: "text-green-600 dark:text-green-400",
      borderHover: "hover:border-green-500/50"
    },
    blue: {
      bg: "bg-blue-50 dark:bg-blue-500/10",
      text: "text-blue-600 dark:text-blue-400",
      borderHover: "hover:border-blue-500/50"
    },
    amber: {
      bg: "bg-amber-50 dark:bg-amber-500/10",
      text: "text-amber-600 dark:text-amber-400",
      borderHover: "hover:border-amber-500/50"
    },
    rose: {
      bg: "bg-rose-50 dark:bg-rose-500/10",
      text: "text-rose-600 dark:text-rose-400",
      borderHover: "hover:border-rose-500/50"
    },
    purple: {
      bg: "bg-purple-50 dark:bg-purple-500/10",
      text: "text-purple-600 dark:text-purple-400",
      borderHover: "hover:border-purple-500/50"
    },
    teal: {
      bg: "bg-teal-50 dark:bg-teal-500/10",
      text: "text-teal-600 dark:text-teal-400",
      borderHover: "hover:border-teal-500/50"
    }
  };
  return colorMap[colorTheme] || colorMap.indigo;
};

/* STREAMING_CHUNK:Rendering Main Component */
export default function FacilitiesSection() {
  return (
    <div className="w-full bg-slate-50 dark:bg-[#0a0a0a] text-slate-900 dark:text-slate-100 font-sans transition-colors duration-500 selection:bg-indigo-200 dark:selection:bg-indigo-900">
      
      {/* Facilities Section */}
      <section id="facilities" className="relative w-full py-24 lg:py-32 overflow-hidden">
        
        {/* Background Decorative Blur Elements (Matching existing site) */}
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-[100px] -translate-y-1/3 translate-x-1/4 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[50rem] h-[50rem] bg-emerald-500/5 dark:bg-emerald-500/5 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.03] dark:opacity-[0.05] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Heading (Matching the "પ્રવૃત્તિઓ અને સાંસ્કૃતિક મૂલ્યો" style) */}
             <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20 space-y-5">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 dark:bg-orange-500/10 text-orange-700 dark:text-orange-400 font-semibold text-sm border border-orange-200 dark:border-orange-500/20 shadow-sm">
              <Settings2 className="w-4 h-4" />
              <span>અદ્યતન સગવડો</span>
            </div>
            <h2 className="text-4xl md:text-5xl sm:border sm:rounded-full py-5 font-black tracking-tight text-slate-900 dark:text-white leading-tight">
              આધુનિક ઇન્ફ્રાસ્ટ્રક્ચર અને <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">સુવિધાઓ</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
              સંસ્થા દ્વારા વિદ્યાર્થીઓના સર્વાંગી વિકાસ, આરામદાયક રોકાણ અને ઉચ્ચ શિક્ષણ માટે ઊભી કરાયેલ અદ્યતન સગવડો.
            </p>
          </div>

          {/* Grid Layout (Matching the 3-column activities grid style) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {facilitiesData.map((facility) => {
              const theme = getColorClasses(facility.colorTheme);
              
              return (
                <div 
                  key={facility.id} 
                  className={`group p-6 sm:p-8 bg-white dark:bg-white/5 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl ${theme.borderHover} transition-all duration-300 hover:-translate-y-1 flex flex-col h-full`}
                >
                  {/* Icon Container (Matching the activities icon style) */}
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${theme.bg} ${theme.text}`}>
                    {facility.icon}
                  </div>
                  
                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                    {facility.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm mb-6 flex-grow">
                    {facility.description}
                  </p>

                  {/* Specific Features List */}
                  <ul className="space-y-3 mt-auto pt-4 border-t border-slate-100 dark:border-slate-800/50">
                    {facility.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300 leading-tight">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </div>
  );
}
