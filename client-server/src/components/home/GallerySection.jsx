'use client'

import React, { useState, useEffect, useCallback } from 'react';
import { ImageIcon, Film, Clock, PlayCircle, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

const GallerySection = () => {
  const [activeTab, setActiveTab] = useState('historical');
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  // Calculate dynamic years
  const establishmentYear = 1970;
  const currentYear = new Date().getFullYear();
  const yearsOfHistory = currentYear - establishmentYear;
  const toGujaratiNumerals = (num) => {
    const gujaratiDigits = ['૦', '૧', '૨', '૩', '૪', '૫', '૬', '૭', '૮', '૯'];
    return num.toString().split('').map(digit => gujaratiDigits[digit] || digit).join('');
  };
  const dynamicYearsGujarati = toGujaratiNumerals(yearsOfHistory);

  // Gallery Data
  const galleryData = [
    {
      id: 1,
      type: 'photo',
      category: 'historical',
      src: '/images/boarding-establishment-1.png',
      title: 'સ્થાપના દિવસની ઝલક',
      desc: '૩૦મી જૂન, ૧૯૭૦ના રોજ છાત્રાલયના પ્રારંભિક દિવસની અમૂલ્ય ક્ષણ.',
      date: '૩૦ જૂન, ૧૯૭૦',
      colSpan: 'lg:col-span-6 sm:col-span-2', // Large featured image
    },
    {
      id: 2,
      type: 'photo',
      category: 'historical',
      src: '/images/boarding-establishment-2.png',
      title: 'આઈશ્રી સોનબાઇ મા',
      desc: 'છાત્રાલયના ઉદ્ઘાટન પ્રસંગે પૂજ્ય આઈશ્રી સોનબાઇ મા (મઢડા).',
      date: '૩૦ જૂન, ૧૯૭૦',
      colSpan: 'lg:col-span-6 sm:col-span-1', // Medium portrait image
    },
    {
      id: 3,
      type: 'photo',
      category: 'historical',
      src: '/images/boarding-establishment-3.png',
      title: 'સમાજનું એકત્રીકરણ',
      desc: 'ઉદ્ઘાટન સમારોહમાં ઉપસ્થિત સમાજના અગ્રણીઓ અને સ્વયંસેવકો.',
      date: '૩૦ જૂન, ૧૯૭૦',
      colSpan: 'lg:col-span-4 sm:col-span-1', // Small bottom row
    },
    {
      id: 4,
      type: 'photo',
      category: 'historical',
      src: '/images/boarding-establishment-4.png',
      title: 'ઐતિહાસિક ઉદ્ઘાટન',
      desc: 'ચારણ સમાજના યુવાનો માટે શિક્ષણના નવા દ્વાર ખૂલ્યા તે દિવસ.',
      date: '૩૦ જૂન, ૧૯૭૦',
      colSpan: 'lg:col-span-4 sm:col-span-1', // Small bottom row
    },
    {
      id: 5,
      type: 'photo',
      category: 'historical',
      src: '/images/boarding-establishment-5.png',
      title: 'પ્રથમ દિવસની સ્મૃતિ',
      desc: 'છાત્રાલયના નિર્માણ અને પ્રારંભિક કાર્યક્રમની પવિત્ર સ્મૃતિ.',
      date: '૩૦ જૂન, ૧૯૭૦',
      colSpan: 'lg:col-span-4 sm:col-span-1', // Small bottom row
    },
    // Placeholder for Video Tab
    {
      id: 6,
      type: 'video',
      category: 'video',
      src: '/api/placeholder/800/600',
      thumbnail: true,
      title: '૫૦ વર્ષની સુવર્ણયાત્રા (ડૉક્યુમેન્ટરી)',
      desc: 'છાત્રાલયના ૫૦ વર્ષ પૂર્ણ થવા પર વિશેષ વિડીયો.',
      date: '૨૦૨૦',
      colSpan: 'lg:col-span-6 sm:col-span-1',
    },
    {
      id: 7,
      type: 'video',
      category: 'video',
      src: '/api/placeholder/800/600',
      thumbnail: true,
      title: '૧૨મો સમૂહ લગ્નોત્સવ',
      desc: '૨૦૧૮ માં યોજાયેલ ભવ્ય સમૂહ લગ્નોત્સવની ઝલક.',
      date: '૨૦૧૮',
      colSpan: 'lg:col-span-6 sm:col-span-1',
    }
  ];

  const filteredData = activeTab === 'all' 
    ? galleryData 
    : galleryData.filter(item => item.category === activeTab);

  // Lightbox photos only (filtering out videos for the simple image lightbox)
  const lightboxImages = filteredData.filter(item => item.type === 'photo');

  // Handle Keyboard Navigation for Lightbox
  const handleKeyDown = useCallback((e) => {
    if (lightboxIndex === -1) return;
    if (e.key === 'ArrowLeft') {
      setLightboxIndex((prev) => (prev > 0 ? prev - 1 : lightboxImages.length - 1));
    } else if (e.key === 'ArrowRight') {
      setLightboxIndex((prev) => (prev < lightboxImages.length - 1 ? prev + 1 : 0));
    } else if (e.key === 'Escape') {
      setLightboxIndex(-1);
    }
  }, [lightboxIndex, lightboxImages.length]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (lightboxIndex !== -1) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [lightboxIndex]);

  return (
    <section id="gallery" className="relative w-full py-24 lg:py-32 bg-slate-50 dark:bg-[#0a0a0a] text-slate-900 dark:text-slate-100 font-sans overflow-hidden transition-colors duration-500">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-20 left-0 w-[40rem] h-[40rem] bg-orange-500/5 dark:bg-orange-500/10 rounded-full blur-[100px] -translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-20 right-0 w-[50rem] h-[50rem] bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-[120px] translate-x-1/3 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.03] dark:opacity-[0.05] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16 space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 dark:bg-orange-500/10 text-orange-700 dark:text-orange-400 font-semibold text-sm border border-orange-200 dark:border-orange-500/20 shadow-sm">
            <Clock className="w-4 h-4" aria-hidden="true" />
            <span>સ્મૃતિચિત્રો અને વિડીયો</span>
          </div>
          <h2 className="text-4xl sm:border sm:rounded-full py-5 md:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
            ઐતિહાસિક અને સુવર્ણ <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">ક્ષણો</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
            શ્રી કાનજીભાઈ નાગૈયા ચારણ કુમાર છાત્રાલયના {dynamicYearsGujarati} વર્ષના ગૌરવશાળી ઇતિહાસની ઝલક અને કેટલીક અવિસ્મરણીય સ્મૃતિઓ.
          </p>
        </div>

        {/* Tabs Filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12">
          {[
            { id: 'all', label: 'બધા', icon: Maximize2 },
            { id: 'historical', label: 'ઐતિહાસિક તસવીરો', icon: Clock },
            { id: 'video', label: 'વિડીયો', icon: Film },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 shadow-sm ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-orange-600 to-amber-500 text-white shadow-orange-500/25 scale-105'
                  : 'bg-white dark:bg-white/5 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/10 hover:bg-orange-50 dark:hover:bg-white/10'
              }`}
            >
              <tab.icon className={`w-4 h-4 ${activeTab === tab.id ? 'text-white' : 'text-orange-500 dark:text-orange-400'}`} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Masonry / Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8">
          {filteredData.map((item, index) => (
            <div 
              key={item.id} 
              className={`group relative overflow-hidden rounded-2xl sm:rounded-[2rem] bg-slate-200 dark:bg-slate-800 border border-slate-200 dark:border-white/10 shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer ${item.colSpan}`}
              onClick={() => {
                if (item.type === 'photo') {
                  // Find index in the lightbox array
                  const actualIndex = lightboxImages.findIndex(img => img.id === item.id);
                  setLightboxIndex(actualIndex);
                } else {
                  alert("Video Player Integration (Placeholder)");
                }
              }}
            >
              {/* Image / Video Thumbnail */}
              <div className={`w-full h-full min-h-[250px] ${item.colSpan.includes('lg:col-span-8') || item.colSpan.includes('lg:col-span-6') ? 'lg:min-h-[450px]' : 'lg:min-h-[300px]'}`}>
                 {item.type === 'photo' ? (
                   <img 
                      src={item.src} 
                      alt={item.alt || item.title} 
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-in-out"
                      loading="lazy"
                   />
                 ) : (
                   <div className="w-full h-full relative bg-slate-800">
                      <img src={item.src} alt={item.title} className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/40 group-hover:bg-orange-500/80 transition-colors">
                           <PlayCircle className="w-8 h-8 text-white ml-1" />
                        </div>
                      </div>
                   </div>
                 )}
              </div>

              {/* Overlay Gradients */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
              
              {/* Content Box */}
              <div className="absolute bottom-0 left-0 w-full p-2 min-[400px]:p-6 min-[640px]:p-8 transform sm:translate-y-14 group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex items-center gap-2 mb-1 min-[400px]:mb-2 min-[640px]:mb-3">
                  <span className="px-3 py-1 text-[6px] sm:text-[8px] md:text-[10px] lg:text-xs font-bold uppercase tracking-wider text-orange-100 bg-orange-500/40 backdrop-blur-md rounded-full border border-orange-400/30">
                    {item.date}
                  </span>
                  {item.type === 'photo' ? (
                    <span className="flex items-center gap-1.5 px-3 py-1 text-[6px] sm:text-[8px] md:text-[10px] lg:text-xs font-semibold text-slate-200 bg-slate-900/40 backdrop-blur-md rounded-full border border-white/10">
                      <ImageIcon className="w-2 sm:w-3.5 h-2 sm:h-3.5" /> ફોટો
                    </span>
                  ) : (
                     <span className="flex items-center gap-1.5 px-3 py-1 text-[6px] sm:text-[8px] md:text-[10px] lg:text-xs font-semibold text-slate-200 bg-slate-900/40 backdrop-blur-md rounded-full border border-white/10">
                      <Film className="w-2 sm:w-3.5 h-2 sm:h-3.5" /> વિડીયો
                    </span>
                  )}
                </div>
                <h3 className="text-sm sm:text-xl md:text-2xl font-bold text-white sm:mb-2 drop-shadow-md">
                  {item.title}
                </h3>
                <p className="text-slate-300 text-[9px] max-sm:mb-3 sm:text-sm font-medium line-clamp-2 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State Fallback */}
        {filteredData.length === 0 && (
          <div className="text-center py-20 bg-white/5 backdrop-blur-sm rounded-[2rem] border border-slate-200 dark:border-white/10">
             <ImageIcon className="w-16 h-16 text-slate-400 mx-auto mb-4 opacity-50" />
             <h3 className="text-xl font-bold text-slate-600 dark:text-slate-300">આ કેટેગરીમાં હાલ કોઈ મીડિયા ઉપલબ્ધ નથી.</h3>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== -1 && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl">
          
          {/* Close Button */}
          <button 
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-white hover:bg-orange-500 transition-colors z-[110]"
            onClick={() => setLightboxIndex(-1)}
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Controls */}
          {lightboxImages.length > 1 && (
            <>
              <button 
                className="absolute left-4 sm:left-8 p-3 rounded-full bg-white/10 text-white hover:bg-orange-500 transition-colors z-[110]"
                onClick={() => setLightboxIndex((prev) => (prev > 0 ? prev - 1 : lightboxImages.length - 1))}
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              
              <button 
                className="absolute right-4 sm:right-8 p-3 rounded-full bg-white/10 text-white hover:bg-orange-500 transition-colors z-[110]"
                onClick={() => setLightboxIndex((prev) => (prev < lightboxImages.length - 1 ? prev + 1 : 0))}
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            </>
          )}

          {/* Main Image Container */}
          <div className="relative w-full h-full max-w-6xl max-h-[85vh] flex flex-col items-center justify-center p-4 sm:p-12 animate-in fade-in zoom-in duration-300">
            <img 
              src={lightboxImages[lightboxIndex].src} 
              alt={lightboxImages[lightboxIndex].title}
              className="max-w-full max-h-full object-contain rounded-xl shadow-2xl border border-white/10"
            />
            
            {/* Caption */}
            <div className="absolute bottom-4 sm:bottom-12 left-0 right-0 text-center px-4">
               <div className="inline-block bg-black/60 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/10">
                 <h4 className="text-white text-lg sm:text-xl font-bold mb-1">
                   {lightboxImages[lightboxIndex].title}
                 </h4>
                 <p className="text-slate-300 text-sm">
                   {lightboxImages[lightboxIndex].date} • {lightboxImages[lightboxIndex].desc}
                 </p>
               </div>
            </div>
          </div>

          {/* Image Counter */}
          <div className="absolute top-8 left-8 text-white/60 font-medium tracking-widest text-sm">
             {lightboxIndex + 1} / {lightboxImages.length}
          </div>
        </div>
      )}

    </section>
  );
};

export default GallerySection;