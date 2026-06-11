import React from 'react';
import { HeartHandshake, Award, Medal, Crown, MapPin, ArrowRight, ShieldCheck } from 'lucide-react';

const DonorsAndSupporters = () => {
  // દાતાઓની માહિતી (Placeholders)
  const topDonors = [
    {
      id: 1,
      name: 'સ્વ. રામભાઈ ગઢવી',
      village: 'જૂનાગઢ',
      type: 'મુખ્ય ભૂમિ દાતા',
      badge: 'Platinum',
      icon: Crown,
      color: 'text-amber-500',
      bgLight: 'bg-amber-50 dark:bg-amber-500/10',
      gradient: 'from-amber-400 to-orange-500',
      image: '/api/placeholder/200/200',
      desc: 'છાત્રાલયના નિર્માણ માટે મુખ્ય જમીન અને પ્રારંભિક માળખાગત સુવિધા માટે અમૂલ્ય યોગદાન.'
    },
    {
      id: 2,
      name: 'શ્રી કાનજીભાઈ નાગૈયા',
      village: 'અમદાવાદ',
      type: 'આજીવન આશ્રયદાતા',
      badge: 'Platinum',
      icon: Crown,
      color: 'text-amber-500',
      bgLight: 'bg-amber-50 dark:bg-amber-500/10',
      gradient: 'from-amber-400 to-orange-500',
      image: '/api/placeholder/200/200',
      desc: 'જેમના નામ પરથી આ છાત્રાલય ઓળખાય છે, તેવા સંસ્થાના મુખ્ય આધારસ્તંભ અને માર્ગદર્શક.'
    },
    {
      id: 3,
      name: 'શ્રીમતી મણીબેન ચારણ',
      village: 'રાજકોટ',
      type: 'મુખ્ય ભવન દાતા',
      badge: 'Platinum',
      icon: Crown,
      color: 'text-amber-500',
      bgLight: 'bg-amber-50 dark:bg-amber-500/10',
      gradient: 'from-amber-400 to-orange-500',
      image: '/api/placeholder/200/200',
      desc: 'વિદ્યાર્થીઓ માટે નવા અને આધુનિક રહેણાંક ભવનના નિર્માણમાં વિશેષ આર્થિક સહયોગ.'
    }
  ];

  const valuedSupporters = [
    {
      id: 4,
      name: 'શ્રી લક્ષ્મણભાઈ મોડ',
      village: 'સુરત',
      type: 'ગ્રંથાલય સહયોગી',
      icon: Medal,
      color: 'text-orange-500',
      image: '/api/placeholder/150/150'
    },
    {
      id: 5,
      name: 'શ્રી ભીમશીભાઈ ગઢવી',
      village: 'જામનગર',
      type: 'અન્નક્ષેત્ર દાતા',
      icon: Award,
      color: 'text-orange-500',
      image: '/api/placeholder/150/150'
    },
    {
      id: 6,
      name: 'શ્રી પ્રતાપભાઈ ચારણ',
      village: 'ભાવનગર',
      type: 'શૈક્ષણિક સહયોગી',
      icon: ShieldCheck,
      color: 'text-orange-500',
      image: '/api/placeholder/150/150'
    },
    {
      id: 7,
      name: 'શ્રી દેવરાજભાઈ ગઢવી',
      village: 'કચ્છ',
      type: 'રમત-ગમત દાતા',
      icon: Award,
      color: 'text-orange-500',
      image: '/api/placeholder/150/150'
    }
  ];

  return (
    <section id="donors-supporters" className="relative w-full py-24 lg:py-32 bg-slate-50 dark:bg-[#0a0a0a] text-slate-900 dark:text-slate-100 font-sans overflow-hidden transition-colors duration-500">
      
      {/* Background Decorative Blur */}
      <div className="absolute top-1/3 left-0 w-[50rem] h-[50rem] bg-orange-500/5 dark:bg-orange-500/10 rounded-full blur-[120px] -translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[40rem] h-[40rem] bg-amber-500/5 dark:bg-yellow-500/5 rounded-full blur-[100px] translate-y-1/4 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.03] dark:opacity-[0.05] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24 space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 font-semibold text-sm border border-amber-200 dark:border-amber-500/20 shadow-sm">
            <HeartHandshake className="w-4 h-4" aria-hidden="true" />
            <span>આપણા ભામાશા</span>
          </div>
          <h2 className="text-4xl sm:border sm:rounded-full py-5 md:text-5xl sm:w-fit sm:px-20 sm:mx-auto font-black tracking-tight text-slate-900 dark:text-white leading-tight">
            દાતાશ્રીઓ અને <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">સહયોગીઓ</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
            જેમના ઉદાર અને નિઃસ્વાર્થ સહયોગથી આ સંસ્થાનો પાયો સિંચાયો છે અને હજારો વિદ્યાર્થીઓનું ભવિષ્ય ઉજ્જવળ બન્યું છે, તેવા સમાજના રત્નો સમાન આપણા દાતાશ્રીઓ.
          </p>
        </div>

        {/* Top Featured Donors (3 Column Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {topDonors.map((donor) => (
            <div 
              key={donor.id}
              className="group relative pt-12"
            >
              <div className="relative h-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] p-8 pt-16 shadow-lg hover:shadow-orange-500/20 transition-all duration-500 text-center flex flex-col">
                
                {/* Profile Image (Overlapping Top) */}
                <div className="absolute -top-12 left-1/2 -translate-x-1/2">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white dark:border-slate-900 shadow-xl bg-slate-100 dark:bg-slate-800 relative z-10 group-hover:scale-105 transition-transform duration-500">
                      <img src={donor.image} alt={donor.name} className="w-full h-full object-cover" />
                    </div>
                    {/* Glowing effect behind image */}
                    <div className="absolute inset-0 bg-orange-400 blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
                  </div>
                  {/* Badge Icon */}
                  <div className={`absolute -bottom-2 -right-2 p-2 rounded-full bg-gradient-to-r ${donor.gradient} text-white shadow-md border-2 border-white dark:border-slate-900 z-20`}>
                    <donor.icon className="w-4 h-4" />
                  </div>
                </div>

                <div className="mb-2">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${donor.bgLight} ${donor.color}`}>
                    {donor.type}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {donor.name}
                </h3>
                
                <div className="flex items-center justify-center gap-1.5 text-slate-500 dark:text-slate-400 text-sm font-medium mb-4">
                  <MapPin className="w-3.5 h-3.5" />
                  {donor.village}
                </div>

                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                  {donor.desc}
                </p>

                {/* Decorative Hover Border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-orange-500/30 rounded-[2.5rem] pointer-events-none transition-colors duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Valued Supporters (4 Column Grid for smaller profiles) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {valuedSupporters.map((supporter) => (
            <div 
              key={supporter.id}
              className="group flex items-center gap-4 p-4 rounded-3xl bg-white/60 dark:bg-white/5 border border-slate-200 dark:border-white/5 shadow-sm hover:shadow-md hover:border-orange-200 dark:hover:border-orange-500/30 transition-all duration-300 cursor-default"
            >
              <div className="relative shrink-0">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-slate-100 dark:border-slate-800">
                  <img src={supporter.image} alt={supporter.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="absolute -bottom-1 -right-1 bg-slate-50 dark:bg-slate-900 p-1 rounded-full shadow-sm">
                  <supporter.icon className={`w-3.5 h-3.5 ${supporter.color}`} />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white truncate">
                  {supporter.name}
                </h4>
                <div className="flex items-center gap-1 mt-0.5">
                  <span className="text-xs font-medium text-orange-600 dark:text-orange-400 truncate">
                    {supporter.type}
                  </span>
                  <span className="text-slate-300 dark:text-slate-600 mx-1">•</span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 truncate">
                    {supporter.village}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Honorable Mention Note & Action */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-orange-50 dark:bg-orange-500/10 border border-orange-200 dark:border-orange-500/20 rounded-2xl p-6 max-w-3xl">
            <p className="text-sm sm:text-base text-orange-800 dark:text-orange-300 font-medium leading-relaxed mb-4">
              *અહીં માત્ર કેટલાક પ્રમુખ દાતાશ્રીઓના નામ દર્શાવેલ છે. સંસ્થાને પ્રત્યક્ષ કે પરોક્ષ રીતે નાનો-મોટો સહયોગ આપનાર દરેક દાતા અમારા માટે પૂજનીય છે અને અમે તેમના ઋણી છીએ.
            </p>
            <button className="inline-flex items-center gap-2 px-6 py-2.5 bg-white dark:bg-slate-900 border border-orange-200 dark:border-orange-500/30 rounded-full text-sm font-bold text-orange-600 dark:text-orange-400 hover:bg-orange-500 hover:text-white dark:hover:bg-orange-500 transition-colors group shadow-sm">
              સંપૂર્ણ દાતા યાદી જુઓ
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default DonorsAndSupporters;