'use client'
import React from 'react';
import { MapPin, PhoneCall, Mail, Clock, Send, MessageSquare, ArrowRight } from 'lucide-react';

const ContactAndLocation = () => {
  return (
    <section id="contact-location" className="relative w-full py-24 lg:py-32 bg-slate-50 dark:bg-[#0a0a0a] text-slate-900 dark:text-slate-100 font-sans overflow-hidden transition-colors duration-500">
      
      {/* Background Decorative Blur */}
      <div className="absolute top-1/4 right-0 w-[40rem] h-[40rem] bg-orange-500/5 dark:bg-orange-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[50rem] h-[50rem] bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-[120px] -translate-x-1/4 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.03] dark:opacity-[0.05] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 dark:bg-orange-500/10 text-orange-700 dark:text-orange-400 font-semibold text-sm border border-orange-200 dark:border-orange-500/20 shadow-sm">
            <MessageSquare className="w-4 h-4" aria-hidden="true" />
            <span>અમારો સંપર્ક કરો</span>
          </div>
          <h2 className="text-4xl sm:border sm:rounded-full py-5 md:text-5xl sm:w-fit sm:px-20 sm:mx-auto font-black tracking-tight text-slate-900 dark:text-white leading-tight">
            સંપર્ક અને <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">સ્થળ</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
            છાત્રાલયમાં પ્રવેશ, દાન, અથવા અન્ય કોઈપણ માહિતી માટે તમે નીચે આપેલી વિગતો દ્વારા અમારો સંપર્ક કરી શકો છો. અમે તમને મદદ કરવા હંમેશા તત્પર છીએ.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Contact Info (Bento Grid) - Spanning 5 cols */}
          <div className="lg:col-span-5 flex flex-col gap-4 sm:gap-6">
            
            {/* Address Box (Full Width) */}
            <div className="group relative p-6 sm:p-8 rounded-[2rem] bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-2xl group-hover:bg-orange-500/10 transition-colors pointer-events-none"></div>
              <div className="relative z-10 flex items-start gap-5">
                <div className="p-3.5 bg-orange-50 dark:bg-orange-500/10 rounded-2xl text-orange-600 dark:text-orange-400 shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">સરનામું</h4>
                  <p className="text-lg font-bold text-slate-900 dark:text-white leading-relaxed">
                    આઈશ્રી સોનલ માઁ ચારણ સભા સંચાલિત,<br />
                    શ્રી કાનજીભાઈ નાગૈયા કુમાર છાત્રાલય,<br />
                    બિલખા રોડ, ITI ની નજીક,<br />
                    મેઘાણી નગર, જૂનાગઢ,<br />
                    ગુજરાત - ૩૬૨૦૦૧.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 sm:gap-6 flex-grow">
              {/* Phone Box */}
              <a href="tel:+919824288852" className="group relative p-6 sm:p-8 rounded-[2rem] bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col justify-center">
                <div className="relative z-10 flex items-center gap-5">
                  <div className="p-3.5 bg-blue-50 dark:bg-blue-500/10 rounded-2xl text-blue-600 dark:text-blue-400 shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <PhoneCall className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">ટ્રસ્ટ હેલ્પલાઇન</h4>
                    <p className="text-xl font-black text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      +91 98242 88852
                    </p>
                  </div>
                </div>
              </a>

              {/* Office Hours Box */}
              <div className="group relative p-6 sm:p-8 rounded-[2rem] bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col justify-center">
                <div className="relative z-10 flex items-center gap-5">
                  <div className="p-3.5 bg-emerald-50 dark:bg-emerald-500/10 rounded-2xl text-emerald-600 dark:text-emerald-400 shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">કાર્યાલય સમય</h4>
                    <p className="text-xl font-black text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      ૨૪/૭ કાર્યરત
                    </p>
                    <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mt-1">* રજાના દિવસોમાં પણ ખુલ્લું</p>
                  </div>
                </div>
              </div>
            </div>
            
          </div>

          {/* Right Column: Contact Form - Spanning 7 cols */}
          <div className="lg:col-span-7">
            <div className="relative h-full overflow-hidden rounded-[2.5rem] bg-slate-900 p-8 sm:p-10 shadow-2xl border border-slate-800">
              
              {/* Form Background Gradients */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>

              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">સંદેશ મોકલો</h3>
                <p className="text-slate-400 text-sm font-medium mb-8">
                  તમારો પ્રશ્ન અથવા મંતવ્ય અમને મોકલો, અમારી ટીમ ટૂંક સમયમાં તમારો સંપર્ક કરશે.
                </p>

                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name Input */}
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-bold text-slate-300 ml-1">પૂરું નામ *</label>
                      <input 
                        type="text" 
                        id="name" 
                        placeholder="દા.ત. વિજય ગઢવી" 
                        className="w-full bg-slate-950/50 border border-slate-700/50 text-white rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all placeholder:text-slate-600"
                        required
                      />
                    </div>
                    {/* Phone Input */}
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-bold text-slate-300 ml-1">મોબાઇલ નંબર *</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        placeholder="+91 XXXXX XXXXX" 
                        className="w-full bg-slate-950/50 border border-slate-700/50 text-white rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all placeholder:text-slate-600"
                        required
                      />
                    </div>
                  </div>

                  {/* Subject Input */}
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-bold text-slate-300 ml-1">વિષય (Subject)</label>
                    <input 
                      type="text" 
                      id="subject" 
                      placeholder="તમારો વિષય જણાવો (દા.ત. પ્રવેશ બાબતે)" 
                      className="w-full bg-slate-950/50 border border-slate-700/50 text-white rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all placeholder:text-slate-600"
                    />
                  </div>

                  {/* Message Input */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-bold text-slate-300 ml-1">તમારો સંદેશ *</label>
                    <textarea 
                      id="message" 
                      rows="4"
                      placeholder="અહીં તમારી માહિતી લખો..." 
                      className="w-full bg-slate-950/50 border border-slate-700/50 text-white rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all placeholder:text-slate-600 resize-none"
                      required
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button 
                    type="submit" 
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-base rounded-full shadow-[0_8px_30px_rgb(249,115,22,0.2)] hover:shadow-[0_8px_30px_rgb(249,115,22,0.3)] transition-all transform hover:-translate-y-1 group"
                  >
                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    સંદેશ મોકલો
                  </button>
                </form>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactAndLocation;