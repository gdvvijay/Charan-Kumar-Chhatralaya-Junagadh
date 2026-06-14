"use client";

import React, { useState, useEffect } from "react";
import {
  User,
  MapPin,
  Phone,
  GraduationCap,
  Landmark,
  BookOpen,
  CheckCircle2,
  AlertCircle,
  FileText,
  CreditCard,
  ShieldCheck,
  ChevronRight,
  Loader2,
  UploadCloud
} from "lucide-react";

// --- Constants ---
const STUDENT_TYPES = {
  school: { label: "શાળા (School)", icon: BookOpen },
  college: { label: "કૉલેજ (College)", icon: GraduationCap },
  govt_prep: { label: "સ. પરીક્ષા (Govt Prep)", icon: Landmark },
};

const FEE_PLANS = {
  monthly: { id: "monthly", label: "માસિક (Monthly)", amount: 2000, stAmount: 2000, hasRelief: false },
  half_yearly: { id: "half_yearly", label: "૬ મહિના (Half Sem)", amount: 7500, stAmount: 3000, hasRelief: true },
  yearly: { id: "yearly", label: "વાર્ષિક (Full Year)", amount: 15000, stAmount: 6000, hasRelief: true },
};

export default function AdmissionForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // ડાયનેમિક શૈક્ષણિક વર્ષની ગણતરી
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();
  const startYear = currentMonth >= 4 ? currentYear : currentYear - 1; // મે મહિના (index 4) કે ત્યારબાદ નવું શૈક્ષણિક વર્ષ
  const academicYear = `${startYear}-${(startYear + 1).toString().slice(-2)}`;

  // Form State matching StudentDirectory structure
  const [formData, setFormData] = useState({
    fullNameGu: "",
    fullNameEn: "",
    villageGu: "",
    isSTStudent: "false",
    studentType: "college",
    parentNameGu: "",
    contactNumber: "",
    altContactNumber: "",
    selectedPlan: "yearly",
    aadharNumber: "",
    studentPhone: "",
  });

  const [feePreview, setFeePreview] = useState(FEE_PLANS.yearly.amount);

  // Dynamically calculate fee based on ST category and selected plan
  useEffect(() => {
    const plan = FEE_PLANS[formData.selectedPlan];
    if (formData.isSTStudent === "true" && plan.hasRelief) {
      setFeePreview(plan.stAmount);
    } else {
      setFeePreview(plan.amount);
    }
  }, [formData.selectedPlan, formData.isSTStudent]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call to backend (MERN stack)
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    // In a real app, you would send `formData` to your Next.js API route here
  };

  // --- Success State UI ---
  if (isSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-[#0a0a0a] p-4">
        <div className="max-w-md w-full bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl p-8 md:p-12 text-center border border-slate-200 dark:border-slate-800 animate-in zoom-in duration-500">
          <div className="w-24 h-24 bg-emerald-100 dark:bg-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-12 h-12" />
          </div>
          <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-4">ફોર્મ જમા થઈ ગયું!</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
            તમારું પ્રવેશ ફોર્મ સફળતાપૂર્વક સબમિટ કરવામાં આવ્યું છે. સંસ્થા દ્વારા ટૂંક સમયમાં તમારો સંપર્ક કરવામાં આવશે. 
            કૃપા કરીને રૂબરૂ મુલાકાત વખતે જરૂરી દસ્તાવેજો સાથે રાખો.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="w-full py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl font-bold transition-transform hover:-translate-y-1 shadow-lg"
          >
            મુખ્ય પેજ પર પાછા ફરો
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen mt-30 bg-slate-50 dark:bg-[#0a0a0a] text-slate-900 dark:text-slate-100 font-sans py-12 lg:py-24 transition-colors duration-500 relative">
      
      {/* Background Decorative Elements Wrapper 
          (Moved overflow-hidden here to preserve position:sticky for the sidebar) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-[40rem] h-[40rem] bg-[#FFAF03]/5 dark:bg-[#FFAF03]/10 rounded-full blur-[100px] -translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[50rem] h-[50rem] bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-[120px] translate-y-1/3 translate-x-1/4 pointer-events-none"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 dark:bg-[#FFAF03]/10 text-orange-700 dark:text-[#FFAF03] font-semibold text-sm border border-orange-200 dark:border-[#FFAF03]/20 shadow-sm">
            <FileText className="w-4 h-4" />
            <span>પ્રવેશ વર્ષ {academicYear}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
            ઓનલાઈન <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFAF03] to-amber-500">પ્રવેશ ફોર્મ</span>
          </h1>
          <p className="text-slate-600 dark:text-slate-400 font-medium text-lg">
            શ્રી કાનજીભાઈ નાગૈયા ચારણ કુમાર છાત્રાલય
          </p>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Main Form Fields (Left Column) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* 1. Personal Information */}
            <div className="bg-white dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200 dark:border-slate-800 rounded-[2rem] p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6 border-b border-slate-100 dark:border-slate-800 pb-4">
                <div className="p-2 bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 rounded-xl">
                  <User className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">વિદ્યાર્થીની માહિતી</h2>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-600 dark:text-slate-400 mb-2">વિદ્યાર્થીનું પૂરું નામ (ગુજરાતીમાં) <span className="text-red-500">*</span></label>
                  <input type="text" name="fullNameGu" value={formData.fullNameGu} onChange={handleChange} required placeholder="ઉદા. ગઢવી રાહુલભાઈ શામળદાસ"
                    className="w-full bg-slate-50 dark:bg-[#0a0a0a] border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-[#FFAF03] outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-600 dark:text-slate-400 mb-2">Full Name (English) <span className="text-red-500">*</span></label>
                  <input type="text" name="fullNameEn" value={formData.fullNameEn} onChange={handleChange} required placeholder="e.g. Gadhvi Rahulbhai S."
                    className="w-full bg-slate-50 dark:bg-[#0a0a0a] border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-[#FFAF03] outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-600 dark:text-slate-400 mb-2">ગામ / શહેર <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
                    <input type="text" name="villageGu" value={formData.villageGu} onChange={handleChange} required placeholder="ગામનું નામ"
                      className="w-full pl-12 bg-slate-50 dark:bg-[#0a0a0a] border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-[#FFAF03] outline-none transition-all" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-600 dark:text-slate-400 mb-2">આધાર કાર્ડ નંબર <span className="text-red-500">*</span></label>
                  <input type="text" name="aadharNumber" value={formData.aadharNumber} onChange={handleChange} required pattern="[0-9]{12}" maxLength="12" placeholder="12 આંકડાનો નંબર"
                    className="w-full bg-slate-50 dark:bg-[#0a0a0a] border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-[#FFAF03] outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-600 dark:text-slate-400 mb-2">વિદ્યાર્થીનો સંપર્ક નંબર <span className="text-slate-400 font-normal text-xs">(વૈકલ્પિક)</span></label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
                    <input type="tel" name="studentPhone" value={formData.studentPhone} onChange={handleChange} pattern="[0-9]{10}" maxLength="10" placeholder="10 આંકડાનો નંબર (જો હોય તો)"
                      className="w-full pl-12 bg-slate-50 dark:bg-[#0a0a0a] border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-[#FFAF03] outline-none transition-all" />
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Educational Details & Category */}
            <div className="bg-white dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200 dark:border-slate-800 rounded-[2rem] p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6 border-b border-slate-100 dark:border-slate-800 pb-4">
                <div className="p-2 bg-orange-50 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 rounded-xl">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">શૈક્ષણિક માહિતી અને શ્રેણી</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-600 dark:text-slate-400 mb-2">અભ્યાસનો પ્રકાર <span className="text-red-500">*</span></label>
                  <div className="grid grid-cols-1 gap-3">
                    {Object.entries(STUDENT_TYPES).map(([key, { label, icon: Icon }]) => (
                      <label key={key} className={`flex items-center p-3 rounded-xl border cursor-pointer transition-all ${formData.studentType === key ? 'bg-orange-50 dark:bg-[#FFAF03]/10 border-[#FFAF03] text-orange-700 dark:text-[#FFAF03]' : 'bg-slate-50 dark:bg-[#0a0a0a] border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600'}`}>
                        <input type="radio" name="studentType" value={key} checked={formData.studentType === key} onChange={handleChange} className="sr-only" />
                        <Icon className={`w-5 h-5 mr-3 ${formData.studentType === key ? 'text-[#FFAF03]' : 'text-slate-400'}`} />
                        <span className="font-semibold text-sm">{label}</span>
                        {formData.studentType === key && <CheckCircle2 className="w-4 h-4 ml-auto text-[#FFAF03]" />}
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-600 dark:text-slate-400 mb-2">શ્રેણી (ST ગીર વિસ્તાર રાહત) <span className="text-red-500">*</span></label>
                  <div className="space-y-3">
                    <label className={`flex items-center p-4 rounded-xl border cursor-pointer transition-all ${formData.isSTStudent === "false" ? 'bg-indigo-50 dark:bg-indigo-500/10 border-indigo-500 text-indigo-700 dark:text-indigo-400' : 'bg-slate-50 dark:bg-[#0a0a0a] border-slate-200 dark:border-slate-700'}`}>
                      <input type="radio" name="isSTStudent" value="false" checked={formData.isSTStudent === "false"} onChange={handleChange} className="sr-only" />
                      <div className={`w-4 h-4 rounded-full border flex items-center justify-center mr-3 ${formData.isSTStudent === "false" ? 'border-indigo-500' : 'border-slate-400'}`}>
                        {formData.isSTStudent === "false" && <div className="w-2 h-2 bg-indigo-500 rounded-full" />}
                      </div>
                      <span className="font-semibold text-sm">સામાન્ય (General)</span>
                    </label>
                    <label className={`flex items-start p-4 rounded-xl border cursor-pointer transition-all ${formData.isSTStudent === "true" ? 'bg-emerald-50 dark:bg-emerald-500/10 border-emerald-500 text-emerald-700 dark:text-emerald-400' : 'bg-slate-50 dark:bg-[#0a0a0a] border-slate-200 dark:border-slate-700'}`}>
                      <input type="radio" name="isSTStudent" value="true" checked={formData.isSTStudent === "true"} onChange={handleChange} className="sr-only" />
                      <div className={`w-4 h-4 rounded-full border flex items-center justify-center mr-3 mt-0.5 ${formData.isSTStudent === "true" ? 'border-emerald-500' : 'border-slate-400'}`}>
                        {formData.isSTStudent === "true" && <div className="w-2 h-2 bg-emerald-500 rounded-full" />}
                      </div>
                      <div>
                        <span className="font-semibold text-sm block">હા, ST (ગીર વિસ્તાર)</span>
                        <span className="text-xs opacity-80 mt-1 block">ફી માં ખાસ આર્થિક રાહત લાગુ પડશે. (પ્રમાણપત્ર ફરજિયાત)</span>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Guardian Details */}
            <div className="bg-white dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200 dark:border-slate-800 rounded-[2rem] p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6 border-b border-slate-100 dark:border-slate-800 pb-4">
                <div className="p-2 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-xl">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">વાલીની માહિતી</h2>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="sm:col-span-2">
                  <label className="block text-sm font-bold text-slate-600 dark:text-slate-400 mb-2">વાલીનું પૂરું નામ <span className="text-red-500">*</span></label>
                  <input type="text" name="parentNameGu" value={formData.parentNameGu} onChange={handleChange} required placeholder="ઉદા. શામળદાસ રામભાઈ ગઢવી"
                    className="w-full bg-slate-50 dark:bg-[#0a0a0a] border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-[#FFAF03] outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-600 dark:text-slate-400 mb-2">મુખ્ય સંપર્ક નંબર <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
                    <input type="tel" name="contactNumber" value={formData.contactNumber} onChange={handleChange} required pattern="[0-9]{10}" maxLength="10" placeholder="10 આંકડાનો નંબર"
                      className="w-full pl-12 bg-slate-50 dark:bg-[#0a0a0a] border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-[#FFAF03] outline-none transition-all" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-600 dark:text-slate-400 mb-2">વૈકલ્પિક સંપર્ક નંબર</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
                    <input type="tel" name="altContactNumber" value={formData.altContactNumber} onChange={handleChange} pattern="[0-9]{10}" maxLength="10" placeholder="(Optional)"
                      className="w-full pl-12 bg-slate-50 dark:bg-[#0a0a0a] border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-[#FFAF03] outline-none transition-all" />
                  </div>
                </div>
              </div>
            </div>

            {/* File Upload Notice */}
            <div className="bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 rounded-[1.5rem] p-5 flex items-start gap-4">
              <UploadCloud className="w-6 h-6 text-indigo-500 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-indigo-900 dark:text-indigo-300 mb-1">દસ્તાવેજો વિશે નોંધ</h4>
                <p className="text-sm text-indigo-800 dark:text-indigo-400/80 leading-relaxed">
                  ઓનલાઈન ફોર્મ ભર્યા પછી, રૂબરૂ મુલાકાત વખતે પાસપોર્ટ સાઇઝનો ફોટો, આધાર કાર્ડની ઝેરોક્ષ, અને માર્કશીટ/જાતિનો દાખલો (જો લાગુ પડતો હોય) લાવવો ફરજિયાત છે.
                </p>
              </div>
            </div>

          </div>

          {/* Fee Calculation Sidebar (Right Column) */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-27 lg:self-start">
            <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-[#111] rounded-[2rem] p-1 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFAF03]/20 rounded-full blur-3xl"></div>
              
              <div className="relative z-10 bg-slate-900/40 backdrop-blur-xl rounded-[1.8rem] p-6 h-full border border-white/10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-white/10 text-white rounded-xl backdrop-blur-sm">
                    <CreditCard className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white uppercase tracking-wider">ફી માળખું</h3>
                </div>

                <div className="space-y-4 mb-8">
                  <label className="block text-sm font-medium text-slate-300 mb-2">પેમેન્ટ પ્લાન પસંદ કરો:</label>
                  {Object.entries(FEE_PLANS).map(([key, plan]) => (
                    <label key={key} className={`block p-4 rounded-xl border cursor-pointer transition-all ${formData.selectedPlan === key ? 'bg-[#FFAF03]/10 border-[#FFAF03] shadow-[0_0_15px_rgba(255,175,3,0.15)]' : 'bg-white/5 border-white/10 hover:bg-white/10'}`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <input type="radio" name="selectedPlan" value={key} checked={formData.selectedPlan === key} onChange={handleChange} className="sr-only" />
                          <div className={`w-4 h-4 rounded-full border flex items-center justify-center mr-3 ${formData.selectedPlan === key ? 'border-[#FFAF03]' : 'border-slate-500'}`}>
                            {formData.selectedPlan === key && <div className="w-2 h-2 bg-[#FFAF03] rounded-full" />}
                          </div>
                          <span className="font-bold text-white text-sm">{plan.label}</span>
                        </div>
                      </div>
                    </label>
                  ))}
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-5 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#FFAF03] to-amber-500"></div>
                  <p className="text-sm font-medium text-slate-400 mb-1">ચૂકવવાપાત્ર અંદાજિત રકમ</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-black text-white">₹ {feePreview.toLocaleString('en-IN')}</span>
                    <span className="text-slate-400 text-sm">/ {formData.selectedPlan === 'monthly' ? 'મહિનો' : formData.selectedPlan === 'half_yearly' ? '૬ માસ' : 'વર્ષ'}</span>
                  </div>
                  {formData.isSTStudent === "true" && FEE_PLANS[formData.selectedPlan].hasRelief && (
                    <div className="mt-3 inline-flex items-center gap-1.5 px-2.5 py-1 bg-emerald-500/20 text-emerald-400 text-[11px] font-bold rounded-md border border-emerald-500/30">
                      <CheckCircle2 className="w-3.5 h-3.5" /> ST (ગીર) રાહત લાગુ
                    </div>
                  )}
                  {formData.isSTStudent === "true" && !FEE_PLANS[formData.selectedPlan].hasRelief && (
                    <div className="mt-3 inline-flex items-center gap-1.5 px-2.5 py-1 bg-slate-800 text-slate-400 text-[11px] font-bold rounded-md border border-slate-700">
                      <AlertCircle className="w-3.5 h-3.5" /> માસિક પ્લાનમાં રાહત નથી
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-8 py-4 bg-gradient-to-r from-[#FFAF03] to-amber-500 hover:from-amber-500 hover:to-orange-500 text-white font-bold text-lg rounded-2xl shadow-[0_10px_20px_-10px_rgba(255,175,3,0.5)] transition-all transform hover:-translate-y-1 flex justify-center items-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" /> પ્રક્રિયા ચાલી રહી છે...
                    </>
                  ) : (
                    <>
                      ફોર્મ સબમિટ કરો <ChevronRight className="w-5 h-5" />
                    </>
                  )}
                </button>
                <p className="text-center text-xs text-slate-400 mt-4 opacity-80">
                  સબમિટ કરવાથી તમે સંસ્થાના નિયમો સાથે સંમત થાઓ છો.
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}