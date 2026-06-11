import React from 'react';
import { Quote, Trophy, GraduationCap, Briefcase, Stethoscope, Landmark, Star, ArrowRight } from 'lucide-react';

const SuccessStories = () => {
  const testimonials = [
    {
      id: 1,
      name: 'ડૉ. મયુર ગઢવી',
      designation: 'M.D. Physician',
      batch: 'બેચ: ૨૦૧૦-૧૨',
      icon: Stethoscope,
      color: 'from-orange-500 to-amber-500',
      textColor: 'text-orange-500',
      bgLight: 'bg-orange-50 dark:bg-orange-500/10',
      image: '/api/placeholder/400/400', // અહી વિદ્યાર્થીનો ફોટો આવશે
      quote: 'છાત્રાલયની શિસ્ત, સવારની આરતી અને ગિરીશ આપાના સતત માર્ગદર્શને મને એક ડૉક્ટર તરીકે સમાજની સેવા કરવા સક્ષમ બનાવ્યો છે. અહીનું પવિત્ર વાતાવરણ મારી સફળતાનો મજબૂત પાયો છે.',
      featured: true
    },
    {
      id: 2,
      name: 'રવિ ચારણ',
      designation: 'GPSC Class-1 Officer',
      batch: 'બેચ: ૨૦૧૪-૧૬',
      icon: Landmark,
      color: 'from-blue-500 to-indigo-500',
      textColor: 'text-blue-500',
      bgLight: 'bg-blue-50 dark:bg-blue-500/10',
      image: '/api/placeholder/200/200',
      quote: 'નાના ગામડામાંથી આવીને અધિકારી બનવાનું સપનું આ છાત્રાલયે જ પૂરું કર્યું છે. અહીંનું સ્પર્ધાત્મક વાતાવરણ અને સિનિયર્સનો સાથ અદ્ભુત છે.',
      featured: false
    },
    {
      id: 3,
      name: 'સંજયભાઈ મોડ',
      designation: 'Software Engineer (USA)',
      batch: 'બેચ: ૨૦૧૧-૧૪',
      icon: Briefcase,
      color: 'from-emerald-500 to-teal-500',
      textColor: 'text-emerald-500',
      bgLight: 'bg-emerald-50 dark:bg-emerald-500/10',
      image: '/api/placeholder/200/200',
      quote: 'વિદેશમાં ઉચ્ચ પદ પર પહોંચવા પાછળ બોર્ડિંગમાં શીખેલી મહેનત, સાદગી અને સાતત્ય જ સૌથી વધુ કામ આવ્યા છે.',
      featured: false
    },
    {
      id: 4,
      name: 'કિશન ગઢવી',
      designation: 'સફળ ઉદ્યોગપતિ',
      batch: 'બેચ: ૨૦૦૮-૧૧',
      icon: Trophy,
      color: 'from-purple-500 to-pink-500',
      textColor: 'text-purple-500',
      bgLight: 'bg-purple-50 dark:bg-purple-500/10',
      image: '/api/placeholder/200/200',
      quote: 'સંસ્કાર સાથે શિક્ષણ - આ સૂત્ર મેં અહીં જીવતા શીખ્યું. આજે મારો પોતાનો બિઝનેસ છે, જેનો સંપૂર્ણ યશ આ સંસ્થાને જાય છે.',
      featured: false
    },
    {
      id: 5,
      name: 'હિતેશ ચારણ',
      designation: 'પ્રોફેસર (યુનિવર્સિટી)',
      batch: 'બેચ: ૨૦૧૫-૧૮',
      icon: GraduationCap,
      color: 'from-rose-500 to-red-500',
      textColor: 'text-rose-500',
      bgLight: 'bg-rose-50 dark:bg-rose-500/10',
      image: '/api/placeholder/200/200',
      quote: 'માતૃસંસ્થાએ મને જે જ્ઞાન આપ્યું છે, તે જ આજે હું અન્ય વિદ્યાર્થીઓને આપી રહ્યો છું. સોનલ માઁની કૃપા હંમેશા રહી છે.',
      featured: false
    }
  ];

  const featuredStory = testimonials.find(t => t.featured);
  const otherStories = testimonials.filter(t => !t.featured);

  return (
    <section id="success-stories" className="relative w-full py-24 lg:py-32 bg-white dark:bg-[#0a0a0a] text-slate-900 dark:text-slate-100 font-sans overflow-hidden transition-colors duration-500">
      
      {/* Background Decorative Blur */}
      <div className="absolute top-1/4 left-0 w-[40rem] h-[40rem] bg-orange-500/5 dark:bg-orange-500/10 rounded-full blur-[120px] -translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-[40rem] h-[40rem] bg-amber-500/5 dark:bg-yellow-500/5 rounded-full blur-[120px] translate-x-1/3 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20 space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 dark:bg-orange-500/10 text-orange-700 dark:text-orange-400 font-semibold text-sm border border-orange-200 dark:border-orange-500/20 shadow-sm">
            <Star className="w-4 h-4 fill-orange-500" aria-hidden="true" />
            <span>ગૌરવગાથા</span>
          </div>
          <h2 className="text-4xl sm:border sm:rounded-full py-5 md:text-5xl sm:w-fit sm:mx-auto sm:px-20 font-black tracking-tight text-slate-900 dark:text-white leading-tight">
            સંસ્થાના ગૌરવવંતા <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">રત્નો</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
            છાત્રાલયના સંસ્કાર, શિસ્ત અને શિક્ષણ થકી સમાજનું ગૌરવ વધારનાર આપણા કેટલાક તેજસ્વી તારલાઓના અનુભવો.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Featured Story (Left Side - spanning 5 columns) */}
          <div className="lg:col-span-5 h-full">
            <div className="group relative h-full flex flex-col p-8 sm:p-10 rounded-[2.5rem] bg-slate-900 border border-slate-800 overflow-hidden shadow-2xl hover:shadow-orange-500/20 transition-all duration-500">
              
              {/* Background Elements */}
              <div className="absolute top-0 right-0 p-8 opacity-10 transform translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform duration-700">
                <Quote size={180} className="text-orange-500" rotate={180} />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-orange-950/40 pointer-events-none"></div>

              {/* Content */}
              <div className="relative z-10 flex-grow flex flex-col">
                <div className="mb-8 relative">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-4 border-slate-800 bg-slate-800 shadow-xl group-hover:border-orange-500/50 transition-colors duration-300">
                    <img src={featuredStory.image} alt={featuredStory.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute -bottom-3 -right-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white p-2 rounded-full shadow-lg border-2 border-slate-900">
                    <featuredStory.icon className="w-5 h-5" />
                  </div>
                </div>

                <Quote className="w-10 h-10 text-orange-400 mb-6 opacity-50" />
                
                <p className="text-base sm:text-2xl text-slate-200 font-medium leading-relaxed mb-8 flex-grow">
                  "{featuredStory.quote}"
                </p>

                <div className="mt-auto pt-6 border-t border-slate-800">
                  <h3 className="text-2xl font-bold text-white mb-1">{featuredStory.name}</h3>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-orange-400 font-medium">{featuredStory.designation}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700"></span>
                    <span className="text-slate-400 text-sm">{featuredStory.batch}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Grid of Other Stories (Right Side - spanning 7 columns) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {otherStories.map((story) => (
              <div 
                key={story.id} 
                className="group relative flex flex-col p-6 sm:p-8 rounded-[2rem] bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                {/* Large Background Quote */}
                <div className="absolute bottom-4 right-4 opacity-[0.03] dark:opacity-5 group-hover:scale-110 transition-transform duration-500 pointer-events-none">
                  <Quote size={100} className="text-slate-900 dark:text-white" />
                </div>

                {/* Profile & Badge */}
                <div className="flex items-center gap-4 mb-6 relative z-10">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white dark:border-slate-800 shadow-md">
                      <img src={story.image} alt={story.name} className="w-full h-full object-cover" />
                    </div>
                    <div className={`absolute -bottom-1 -right-1 p-1.5 rounded-full bg-white dark:bg-slate-900 shadow-sm border border-slate-100 dark:border-slate-800 ${story.textColor}`}>
                      <story.icon className="w-3.5 h-3.5" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white">{story.name}</h4>
                    <span className={`inline-flex items-center text-xs font-bold px-2 py-0.5 rounded-md mt-1 ${story.bgLight} ${story.textColor}`}>
                      {story.designation}
                    </span>
                  </div>
                </div>

                {/* Testimonial */}
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4 flex-grow relative z-10">
                  "{story.quote}"
                </p>

                {/* Batch Info */}
                <div className="mt-auto pt-4 border-t border-slate-100 dark:border-white/5 relative z-10 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                    {story.batch}
                  </span>
                </div>
                
                {/* Hover Glow Border */}
                <div className={`absolute inset-0 border-2 border-transparent group-hover:border-${story.textColor.split('-')[1]}-500/30 rounded-[2rem] pointer-events-none transition-colors duration-500`}></div>
              </div>
            ))}
          </div>

        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-full text-base font-bold text-slate-700 dark:text-slate-300 hover:bg-orange-50 dark:hover:bg-white/10 hover:text-orange-600 dark:hover:text-orange-400 transition-all shadow-sm group">
            વધુ ગૌરવગાથા વાંચો
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default SuccessStories;