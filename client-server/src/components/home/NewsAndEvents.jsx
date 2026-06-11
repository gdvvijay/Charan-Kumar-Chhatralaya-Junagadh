'use client'
import React, { useMemo } from "react";
import { Calendar, MapPin, Clock, ArrowRight, Sparkles } from "lucide-react";

const NewsAndEvents = () => {
  const sortedEvents = useMemo(() => {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth(); // 0 to 11
    const currentYear = currentDate.getFullYear();

    // વર્ષને ગુજરાતી આંકડામાં ફેરવવાનું ફંક્શન
    const toGujaratiNumerals = (num) => {
      const gujaratiDigits = ["૦", "૧", "૨", "૩", "૪", "૫", "૬", "૭", "૮", "૯"];
      return num
        .toString()
        .split("")
        .map((digit) => gujaratiDigits[digit] || digit)
        .join("");
    };

    const gujaratiMonths = [
      "જાન્યુઆરી", "ફેબ્રુઆરી", "માર્ચ", "એપ્રિલ", "મે", "જૂન", 
      "જુલાઈ", "ઓગસ્ટ", "સપ્ટેમ્બર", "ઓક્ટોબર", "નવેમ્બર", "ડિસેમ્બર"
    ];
    
    const shortGujaratiMonths = [
      "જાન્યુ", "ફેબ્રુ", "માર્ચ", "એપ્રિલ", "મે", "જૂન", 
      "જુલાઈ", "ઓગસ્ટ", "સપ્ટે", "ઓક્ટો", "નવે", "ડિસે"
    ];

    const allEvents = [
      {
        id: "republic",
        month: 0,
        dayNum: 26,
        dayStr: "૨૬",
        title: "પ્રજાસત્તાક દિનની શાનદાર ઉજવણી",
        desc: "રાષ્ટ્રધ્વજ ફરકાવીને અને દેશભક્તિના ગીતો સાથે છાત્રાલયમાં પ્રજાસત્તાક દિનની ગૌરવપૂર્ણ ઉજવણી.",
        category: "રાષ્ટ્રીય તહેવાર",
        color: "text-blue-600 dark:text-blue-400",
        bg: "bg-blue-100 dark:bg-blue-500/20",
        border: "group-hover:border-blue-500/50",
        time: "સવારે ૮:૩૦ કલાકે",
        location: "છાત્રાલય પટાંગણ",
        image: "/images/26-01-celebration.png",
      },
      {
        id: "holi",
        month: 2,
        dayNum: 15, // Approximate date for Holi
        dayStr: "૧૫", // Display date placeholder
        title: "હોળી-ધૂળેટી પર્વ",
        desc: "વિદ્યાર્થીઓ વચ્ચે ભાઈચારા અને રંગોના પર્વ હોળી-ધૂળેટીની ઉત્સાહભેર ઉજવણી.",
        category: "સામાજિક",
        color: "text-pink-600 dark:text-pink-400",
        bg: "bg-pink-100 dark:bg-pink-500/20",
        border: "group-hover:border-pink-500/50",
        time: "સવારે ૯:૦૦ કલાકે",
        location: "છાત્રાલય ગ્રાઉન્ડ",
        image: "/images/holi-dhuleti-celebration.png",
      },
      {
        id: "foundation",
        month: 5, // June is index 5
        dayNum: 30,
        dayStr: "૩૦",
        title: "છાત્રાલય સ્થાપના દિવસ",
        desc: "દર વર્ષે ૩૦ જૂનના રોજ છાત્રાલયના સ્થાપના દિવસ નિમિત્તે વિશેષ પૂજા, કથા અને મહાપ્રસાદનું આયોજન.",
        category: "વાર્ષિક મહોત્સવ",
        color: "text-orange-600 dark:text-orange-400",
        bg: "bg-orange-100 dark:bg-orange-500/20",
        border: "group-hover:border-orange-500/50",
        time: "સવારે ૯:૦૦ કલાકે",
        location: "શ્રી સોનલ માઁ મંદિર, છાત્રાલય",
        image: "/images/30-06-celebration.png",
      },
      {
        id: "independence",
        month: 7, // Aug is 7
        dayNum: 15,
        dayStr: "૧૫",
        title: "સ્વાતંત્ર્ય દિનની ઉજવણી",
        desc: "૧૫મી ઓગસ્ટે રાષ્ટ્રધ્વજ ફરકાવીને શહીદોને શ્રદ્ધાંજલિ અને દેશભક્તિના સાંસ્કૃતિક કાર્યક્રમો.",
        category: "રાષ્ટ્રીય તહેવાર",
        color: "text-emerald-600 dark:text-emerald-400",
        bg: "bg-emerald-100 dark:bg-emerald-500/20",
        border: "group-hover:border-emerald-500/50",
        time: "સવારે ૮:૩૦ કલાકે",
        location: "છાત્રાલય પટાંગણ",
        image: "/images/15-08-celebration.png",
      },
      {
        id: "navratri",
        month: 9, // Oct is 9
        dayNum: 10, // Approx
        dayStr: "૧૦", // Approx display
        title: "ભવ્ય નવરાત્રી મહોત્સવ",
        desc: "છાત્રાલયના વિશાળ પ્રાંગણમાં ભાઈઓ માટે પરંપરાગત રાસ-ગરબા અને નવરાત્રી મહોત્સવનું આયોજન.",
        category: "સાંસ્કૃતિક",
        color: "text-purple-600 dark:text-purple-400",
        bg: "bg-purple-100 dark:bg-purple-500/20",
        border: "group-hover:border-purple-500/50",
        time: "સાંજે ૮:૦૦ કલાકે",
        location: "છાત્રાલય ગ્રાઉન્ડ",
        image: "/images/navratri-celebration.png",
      },
      {
        id: "diwali",
        month: 10, // Nov is 10
        dayNum: 5, // Approx
        dayStr: "૦૫", // Approx display
        title: "દિવાળી અને નૂતન વર્ષ સ્નેહમિલન",
        desc: "દિવાળીના પાવન પર્વે દીપ પ્રાગટ્ય અને નૂતન વર્ષ નિમિત્તે વિદ્યાર્થીઓનું પારિવારિક સ્નેહમિલન.",
        category: "ધાર્મિક/સામાજિક",
        color: "text-amber-600 dark:text-amber-400",
        bg: "bg-amber-100 dark:bg-amber-500/20",
        border: "group-hover:border-amber-500/50",
        time: "સાંજે ૭:૦૦ કલાકે",
        location: "છાત્રાલય પટાંગણ",
        image: "/images/diwali-celebration.png",
      },
    ];

    // ક્રોનોલોજી પ્રમાણે શોર્ટિંગ
    allEvents.sort((a, b) => a.month - b.month || a.dayNum - b.dayNum);

    // ડાયનેમિક કેલ્ક્યુલેશન: આવનારા કાર્યક્રમો
    const upcomingEvents = allEvents.filter((e) => e.month >= currentMonth);
    const pastEvents = allEvents.filter((e) => e.month < currentMonth);

    // આવનારા કાર્યક્રમો આજ વર્ષના રહેશે
    const processedUpcoming = upcomingEvents.map(e => ({
      ...e,
      year: currentYear,
      yearStr: toGujaratiNumerals(currentYear),
      fullMonthStr: gujaratiMonths[e.month],
      shortMonthStr: shortGujaratiMonths[e.month]
    }));

    // પતી ગયેલા કાર્યક્રમો હવે આવતા વર્ષે આવશે
    const processedPast = pastEvents.map(e => ({
      ...e,
      year: currentYear + 1,
      yearStr: toGujaratiNumerals(currentYear + 1),
      fullMonthStr: gujaratiMonths[e.month],
      shortMonthStr: shortGujaratiMonths[e.month]
    }));

    // લિસ્ટને મર્જ કરીએ (આવનારા પહેલા, પછી બાકીના)
    const finalSortedEvents = [...processedUpcoming, ...processedPast];

    // જે સૌથી પહેલો છે, તે આપણો 'આગામી કાર્યક્રમ' (Next Event) છે
    if (finalSortedEvents.length > 0) {
      finalSortedEvents[0].isNext = true;
    }

    return finalSortedEvents;
  }, []);

  return (
    <section
      id="news-events"
      className="relative w-full py-24 lg:py-32 bg-slate-50 dark:bg-[#0a0a0a] text-slate-900 dark:text-slate-100 font-sans overflow-hidden transition-colors duration-500"
    >
      {/* Background Decorative Blur */}
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-orange-500/5 dark:bg-orange-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[50rem] h-[50rem] bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.03] dark:opacity-[0.05] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-5 mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 dark:bg-orange-500/10 text-orange-700 dark:text-orange-400 font-semibold text-sm border border-orange-200 dark:border-orange-500/20 shadow-sm">
            <Calendar className="w-4 h-4" aria-hidden="true" />
            <span>ઉજવણી અને મહોત્સવ</span>
          </div>
          <h2 className="text-4xl sm:border sm:rounded-full py-5 md:text-5xl sm:w-fit sm:px-20 sm:mx-auto font-black tracking-tight text-slate-900 dark:text-white leading-tight">
            આગામી વાર્ષિક <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">કાર્યક્રમો</span>
          </h2>
          <p className="max-w-2xl text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
            અમારા છાત્રાલયમાં શિક્ષણની સાથે સાથે દરેક નાના-મોટા રાષ્ટ્રીય તહેવારો, સામાજિક અને સાંસ્કૃતિક કાર્યક્રમોની ભવ્ય ઉજવણી કરવામાં આવે છે.
          </p>
        </div>

        {/* Dynamic Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {sortedEvents.map((event) => (
            <div
              key={event.id}
              className={`group flex flex-col bg-white dark:bg-slate-900 rounded-[2rem] border ${
                event.isNext 
                  ? "border-orange-400 shadow-[0_8px_30px_rgb(249,115,22,0.15)] dark:shadow-[0_8px_30px_rgb(249,115,22,0.2)] scale-[1.02]" 
                  : "border-slate-200 dark:border-slate-800 shadow-sm"
              } overflow-hidden hover:-translate-y-2 hover:shadow-xl transition-all duration-500`}
            >
              {/* Event Banner Image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Gradient Overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-80"></div>

                {/* "Next Event" Glowing Badge */}
                {event.isNext && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xs font-bold px-4 py-2 rounded-full flex items-center gap-1.5 shadow-lg border border-orange-400/50 animate-pulse">
                    <Sparkles className="w-4 h-4" /> સૌથી નજીકનો કાર્યક્રમ
                  </div>
                )}

                {/* Category & Date Block over Image */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                  <span className={`px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider rounded-lg backdrop-blur-md border border-white/20 shadow-sm ${event.bg} ${event.color}`}>
                    {event.category}
                  </span>
                  
                  {/* Calendar Date Square */}
                  <div className="flex flex-col items-center justify-center bg-white/95 dark:bg-slate-900/95 backdrop-blur-md text-slate-900 dark:text-white rounded-xl w-16 h-16 shadow-lg border border-white/20 group-hover:bg-orange-50 dark:group-hover:bg-orange-500/20 transition-colors">
                    <span className="text-2xl font-black leading-none group-hover:text-orange-600 dark:group-hover:text-orange-400">{event.dayStr}</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest mt-1 text-slate-500 dark:text-slate-400">{event.shortMonthStr}</span>
                  </div>
                </div>
              </div>

              {/* Event Content Body */}
              <div className="p-6 sm:p-8 flex flex-col flex-grow relative">
                
                {/* Hover Top Border effect */}
                <div className={`absolute top-0 left-0 w-full h-1 ${event.isNext ? 'bg-orange-500' : 'bg-transparent group-hover:bg-orange-500/50'} transition-colors duration-300`}></div>

                <div className="flex items-center justify-between mb-3">
                  <h3 className={`text-xl font-bold transition-colors ${event.isNext ? 'text-orange-600 dark:text-orange-400' : 'text-slate-900 dark:text-white group-hover:text-orange-500 dark:group-hover:text-orange-400'}`}>
                    {event.title}
                  </h3>
                </div>
                
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 flex-grow line-clamp-3 leading-relaxed">
                  {event.desc}
                </p>
                
                <div className="flex flex-col gap-3 pt-5 border-t border-slate-100 dark:border-slate-800/80">
                  <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-500 dark:text-slate-400">
                    <div className="p-1.5 rounded-full bg-orange-50 dark:bg-orange-500/10 text-orange-500">
                      <Clock className="w-3.5 h-3.5" />
                    </div>
                    <span>{event.fullMonthStr}, {event.yearStr} • {event.time}</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-500 dark:text-slate-400">
                    <div className="p-1.5 rounded-full bg-orange-50 dark:bg-orange-500/10 text-orange-500">
                      <MapPin className="w-3.5 h-3.5" />
                    </div>
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View Details Call-to-action */}
        <div className="mt-16 text-center">
          <button className="inline-flex items-center gap-2 px-8 py-3.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full text-sm font-bold text-slate-700 dark:text-slate-300 hover:bg-orange-500 hover:text-white hover:border-orange-500 dark:hover:bg-orange-500 dark:hover:border-orange-500 transition-all shadow-sm group">
            વધુ માહિતી અને તસવીરો જુઓ
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default NewsAndEvents;