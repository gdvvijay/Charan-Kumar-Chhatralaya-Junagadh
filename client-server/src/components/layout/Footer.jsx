'use client';
import React from 'react';
import { 
  MapPin, 
  PhoneCall, 
  Mail, 
  ChevronRight, 
  GraduationCap
} from 'lucide-react';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const quickLinks = [
    { name: 'મુખપૃષ્ઠ', href: '/' },
    { name: 'ઇતિહાસ અને સ્થાપના', href: '#history' },
    { name: 'આધુનિક સુવિધાઓ', href: '#facilities' },
    { name: 'પ્રવૃત્તિઓ અને ઉત્સવો', href: '#activities' },
    { name: 'આગામી કાર્યક્રમો', href: '#news-events' },
    { name: 'ગૌરવગાથા (Alumni)', href: '#success-stories' },
  ];

  const infoLinks = [
    { name: 'ઉદ્દેશ્ય અને મૂલ્યો', href: '#aims-values' },
    { name: 'સંસ્થાના દાતાશ્રીઓ', href: '#donors-supporters' },
    { name: 'પ્રવેશ પ્રક્રિયા અને નિયમો', href: '#admission' },
    { name: 'ફી માળખું (Fees)', href: '#admission' },
    { name: 'સંપર્ક અને સ્થળ', href: '#contact-location' },
  ];

  const socialLinks = [
    { icon: FaFacebook,  href: '#', label: 'Facebook',  hover: 'hover:bg-blue-600 hover:border-blue-600'  },
    { icon: FaInstagram, href: '#', label: 'Instagram', hover: 'hover:bg-pink-600 hover:border-pink-600'  },
    { icon: FaYoutube,   href: '#', label: 'YouTube',   hover: 'hover:bg-red-600 hover:border-red-600'   },
    { icon: FaTwitter,   href: '#', label: 'Twitter',   hover: 'hover:bg-sky-500 hover:border-sky-500'   },
  ];

  return (
    <footer className="relative w-full bg-slate-50 dark:bg-slate-950 text-slate-700 dark:text-slate-200 pt-16 md:pt-20 pb-8 border-t border-slate-200 dark:border-slate-800/50 overflow-hidden font-sans z-10 transition-colors duration-500">

      {/* Background glows */}
      <div className="absolute top-0 left-1/4 w-[35rem] h-[35rem] bg-orange-500/10 rounded-full blur-[140px] pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-[35rem] h-[35rem] bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none translate-y-1/3" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-8 relative z-10">

        <div className="grid grid-cols-2 lg:grid-cols-12 gap-y-12 gap-x-6 sm:gap-x-8 xl:gap-x-10 mb-16 items-start">

          {/* ── Brand ── */}
          <div className="col-span-2 lg:col-span-4 flex flex-col text-left xl:pr-6">
            <div className="flex flex-col sm:flex-row items-center min-[500px]:items-start min-[640px]:items-center gap-4 mb-6">
              <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center shadow-[0_8px_30px_rgb(249,115,22,0.25)] shrink-0 transition-transform hover:scale-105 duration-500">
                <GraduationCap className="w-8 h-8 lg:w-9 lg:h-9 text-white" />
              </div>
              <div>
                <h3 className="text-lg max-[500px]:-mx-4 min-[400px]:text-xl sm:text-2xl lg:text-[1.7rem] xl:text-[1.9rem] font-black text-slate-900 dark:text-white leading-tight tracking-tight mt-2 sm:mt-0 drop-shadow-sm transition-colors">
                  શ્રી કાનજીભાઈ નાગૈયા
                  <br className="hidden sm:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-400 to-amber-500 dark:from-orange-400 dark:via-orange-300 dark:to-amber-500">
                    {' '}ચારણ કુમાર છાત્રાલય
                  </span>
                </h3>
              </div>
            </div>

            <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed mb-8 max-w-md max-[500px]:mx-auto max-[500px]:text-center transition-colors">
              પરમ પૂજ્ય આઈશ્રી સોનબાઇ મા (મઢડા) ના આશીર્વાદથી સ્થાપિત, ચારણ સમાજના
              વિદ્યાર્થીઓ માટે શિક્ષણ, સંસ્કાર અને પ્રગતિનું આદર્શ ધામ.
            </p>

            <div className="flex justify-center min-[500px]:justify-start items-center gap-3 sm:gap-4">
              {socialLinks.map((social, index) => {
                const SocialIcon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className={`group w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700/80 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-white dark:hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(249,115,22,0.2)] backdrop-blur-md ${social.hover}`}
                  >
                    <SocialIcon className="w-[1.2rem] h-[1.2rem] sm:w-[1.4rem] sm:h-[1.4rem] group-hover:scale-110 transition-transform duration-300" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* ── Quick Links ── */}
          <div className="col-span-1 lg:col-span-2 flex flex-col text-left">
            <SectionHeading>ઝડપી લિંક્સ</SectionHeading>
            <ul className="space-y-3 sm:space-y-4 md:space-y-5">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="group flex items-center text-sm sm:text-[1.05rem] lg:text-[1.10rem] font-medium text-slate-600 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-400 transition-all duration-300"
                  >
                    <ChevronRight className="w-4 h-4 sm:w-[1.4rem] sm:h-[1.4rem] mr-1.5 sm:mr-2 opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] text-orange-500 shrink-0" />
                    <span className="transform group-hover:translate-x-1 sm:group-hover:translate-x-2 transition-transform duration-300">
                      {link.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Info Links ── */}
          <div className="col-span-1 lg:col-span-3 flex flex-col text-left">
            <SectionHeading>સંસ્થા વિશે</SectionHeading>
            <ul className="space-y-3 sm:space-y-4 md:space-y-5">
              {infoLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="group flex items-center text-sm sm:text-[1.05rem] lg:text-[1.10rem] font-medium text-slate-600 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-400 transition-all duration-300"
                  >
                    <ChevronRight className="w-4 h-4 sm:w-[1.4rem] sm:h-[1.4rem] mr-1.5 sm:mr-2 opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] text-orange-500 shrink-0" />
                    <span className="transform group-hover:translate-x-1 sm:group-hover:translate-x-2 transition-transform duration-300">
                      {link.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact ── */}
          <div className="col-span-2 lg:col-span-3 flex flex-col w-full text-left">
            <SectionHeading>સંપર્ક વિગત</SectionHeading>
            <ul className="space-y-5 lg:space-y-6">

              <li className="flex items-start gap-3 sm:gap-4 lg:gap-5 group transition-transform duration-300 hover:translate-x-2">
                <MapPin className="w-5 h-5 sm:w-[1.4rem] sm:h-[1.4rem] lg:w-[1.7rem] lg:h-[1.7rem] text-orange-500 shrink-0 mt-0.5 lg:mt-0 drop-shadow-md group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors" />
                <span className="text-sm sm:text-base lg:text-[1.05rem] text-slate-600 dark:text-slate-300 leading-relaxed group-hover:text-slate-900 dark:group-hover:text-white transition-colors cursor-default">
                  બિલખા રોડ, ITI ની નજીક,<br />
                  મેઘાણી નગર, જૂનાગઢ,<br />
                  ગુજરાત - ૩૬૨૦૦૧
                </span>
              </li>

              <li className="group">
                <a href="tel:+919824288852" className="flex items-center gap-3 sm:gap-4 lg:gap-5 transition-transform duration-300 hover:translate-x-2">
                  <PhoneCall className="w-5 h-5 sm:w-[1.3rem] sm:h-[1.3rem] lg:w-[1.5rem] lg:h-[1.5rem] text-orange-500 shrink-0 group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors drop-shadow-md" />
                  <span className="text-sm sm:text-base lg:text-[1.05rem] font-medium text-slate-600 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300 tracking-wide">
                    +91 98242 88852
                  </span>
                </a>
              </li>

              <li className="group overflow-hidden">
                <a href="mailto:info@charanboarding.org" className="flex items-center gap-3 sm:gap-4 lg:gap-5 transition-transform duration-300 hover:translate-x-2">
                  <Mail className="w-5 h-5 sm:w-[1.4rem] sm:h-[1.4rem] lg:w-[1.6rem] lg:h-[1.6rem] text-orange-500 shrink-0 group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors drop-shadow-md" />
                  <span className="text-sm sm:text-base lg:text-[1.05rem] font-medium text-slate-600 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300 break-all">
                    info@charanboarding.org
                  </span>
                </a>
              </li>

            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700/60 to-transparent mb-6 sm:mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-4 pb-7 sm:pb-8">
          <p className="text-sm text-slate-600 dark:text-slate-500 text-center sm:text-left font-medium">
            &copy; {new Date().getFullYear()} શ્રી કાનજીભાઈ નાગૈયા ચારણ કુમાર છાત્રાલય.{' '}
            <span className="block min-[400px]:inline mt-1 sm:mt-0">સર્વાધિકાર સુરક્ષિત.</span>
          </p>
          <div className="flex items-center gap-2">
            <span className="h-px w-6 bg-gradient-to-r from-orange-500/0 to-orange-500/70" />
            <span className="text-sm sm:text-base font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500 dark:from-orange-400 dark:via-amber-400 dark:to-orange-400 whitespace-nowrap">
              ।। વંદે સોનલ માતરમ્ ।।
            </span>
            <span className="h-px w-6 bg-gradient-to-l from-orange-500/0 to-orange-500/70" />
          </div>
        </div>

      </div>
    </footer>
  );
};

/* Reusable section heading */
const SectionHeading = ({ children }) => (
  <h4 className="text-slate-900 dark:text-white text-lg sm:text-xl lg:text-xl xl:text-2xl font-bold mb-5 sm:mb-6 md:mb-8 flex items-center gap-2.5 drop-shadow-sm transition-colors">
    <span className="w-1.5 h-5 sm:h-6 bg-gradient-to-t from-orange-500 to-amber-400 rounded-full inline-block shadow-[0_0_8px_rgb(249,115,22,0.4)] shrink-0" />
    {children}
  </h4>
);

export default Footer;