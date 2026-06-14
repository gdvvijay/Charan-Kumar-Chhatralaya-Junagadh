"use client";

import React, { useState, useEffect } from 'react';
import { 
  CreditCard, History, IndianRupee, CheckCircle, 
  User, Calendar, MapPin, AlertCircle, ChevronRight, 
  Loader2, LogOut, Phone, Key, Eye, EyeOff, Lock, Banknote
} from 'lucide-react';

// ─── 1. Mock Data (For Frontend Simulation) ──────────────────────────────────
// વાસ્તવિક MERN એપમાં આ ડેટા MongoDB માંથી આવશે અને પાસવર્ડ Bcrypt થી હેશ (Hashed) થયેલો હશે.
let MOCK_STUDENTS_DB = [
  {
    id: "STU001",
    nameGu: "રવિ ચારણ",
    nameEn: "Ravi Charan",
    room: "12",
    type: "College (2nd Year)",
    village: "જૂનાગઢ",
    phones: ["9824288852", "9724288852"], // [Parent Phone, Student Phone]
    password: "first", // Default password
    payments: [
      { id: "txn_89731", date: "2025-06-15", amount: 5000, status: "success", method: "UPI" },
      { id: "txn_cash_1", date: "2025-08-20", amount: 2000, status: "success", method: "Cash" },
      { id: "txn_82345", date: "2025-10-10", amount: 3000, status: "success", method: "Card" }
    ]
  },
  {
    id: "STU002",
    nameGu: "મયુર ગઢવી",
    nameEn: "Mayur Gadhvi",
    room: "05",
    type: "School (12th Science)",
    village: "રાજકોટ",
    phones: ["9123456789"], // Only Parent Phone
    password: "first",
    payments: [
      { id: "txn_91234", date: "2025-07-01", amount: 15000, status: "success", method: "Net Banking" },
      { id: "txn_cash_2", date: "2025-09-05", amount: 5000, status: "success", method: "Cash" }
    ]
  }
];

// ─── 2. Main Page Component ──────────────────────────────────────────────────
export default function FeeCollectionPage() {
  // Auth States
  const [student, setStudent] = useState(null);
  const [loginPhone, setLoginPhone] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [authError, setAuthError] = useState("");
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  // Change Password States
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const [pwdForm, setPwdForm] = useState({ current: "", new: "", confirm: "" });
  const [pwdError, setPwdError] = useState("");
  const [pwdSuccess, setPwdSuccess] = useState("");

  // Payment States
  const [payAmount, setPayAmount] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  // ─── Auth Handlers ─────────────────────────────────────────────────────────
  const handleLogin = (e) => {
    e.preventDefault();
    setAuthError("");
    setIsAuthenticating(true);

    setTimeout(() => {
      // Find user where input phone is in the phones array AND password matches
      const user = MOCK_STUDENTS_DB.find(s => 
        s.phones.includes(loginPhone) && s.password === loginPassword
      );

      if (user) {
        setStudent(user);
        setLoginPhone("");
        setLoginPassword("");
      } else {
        setAuthError("મોબાઈલ નંબર અથવા પાસવર્ડ ખોટો છે.");
      }
      setIsAuthenticating(false);
    }, 1000);
  };

  const handleLogout = () => {
    setStudent(null);
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
    setPwdError("");
    setPwdSuccess("");

    if (pwdForm.current !== student.password) {
      setPwdError("વર્તમાન પાસવર્ડ ખોટો છે.");
      return;
    }
    if (pwdForm.new !== pwdForm.confirm) {
      setPwdError("નવો પાસવર્ડ અને કન્ફર્મ પાસવર્ડ સમાન નથી.");
      return;
    }
    if (pwdForm.new.length < 5) {
      setPwdError("નવો પાસવર્ડ ઓછામાં ઓછો 5 અક્ષરનો હોવો જોઈએ.");
      return;
    }

    // Update Mock DB
    const studentIndex = MOCK_STUDENTS_DB.findIndex(s => s.id === student.id);
    if (studentIndex > -1) {
      MOCK_STUDENTS_DB[studentIndex].password = pwdForm.new;
      setStudent({ ...student, password: pwdForm.new });
      setPwdSuccess("પાસવર્ડ સફળતાપૂર્વક બદલાઈ ગયો છે!");
      setTimeout(() => {
        setIsPasswordModalOpen(false);
        setPwdForm({ current: "", new: "", confirm: "" });
        setPwdSuccess("");
      }, 2000);
    }
  };

  // ─── Payment Handlers ──────────────────────────────────────────────────────
  const handlePayment = (e) => {
    e.preventDefault();
    if (!payAmount || Number(payAmount) <= 0) return;

    setIsProcessing(true);

    setTimeout(() => {
      const newPayment = {
        id: `txn_${Math.floor(Math.random() * 100000)}`,
        date: new Date().toISOString().split('T')[0],
        amount: Number(payAmount),
        status: "success",
        method: "Online"
      };

      setStudent(prev => ({
        ...prev,
        payments: [newPayment, ...prev.payments] // Add to top of history
      }));
      
      setPayAmount("");
      setIsProcessing(false);
      setPaymentSuccess(true);

      setTimeout(() => setPaymentSuccess(false), 5000);
    }, 2000);
  };

  // ─── Derived Data ──────────────────────────────────────────────────────────
  const totalPaid = student?.payments.reduce((sum, p) => sum + p.amount, 0) || 0;

  return (
    <div className="min-h-screen mt-30 bg-slate-50 dark:bg-[#0a0a0a] text-slate-900 dark:text-slate-100 font-sans pt-28 pb-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-orange-500/5 dark:bg-orange-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute top-40 left-0 w-[30rem] h-[30rem] bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-[100px] -translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 dark:bg-orange-500/10 text-orange-700 dark:text-orange-400 font-semibold text-sm border border-orange-200 dark:border-orange-500/20 shadow-sm">
            <IndianRupee className="w-4 h-4" />
            <span>ફી વ્યવસ્થાપન</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
            વિદ્યાર્થી <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">ફી પોર્ટલ</span>
          </h1>
        </div>

        {/* ─── Login Screen ─── */}
        {!student ? (
          <div className="max-w-md mx-auto bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] shadow-xl border border-slate-200 dark:border-slate-800 animate-in fade-in zoom-in-95 duration-500 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl"></div>
             
             <div className="text-center mb-8 relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-4 shadow-lg shadow-orange-500/20">
                  <Lock className="w-8 h-8" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">સુરક્ષિત લોગીન</h2>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
                  વિદ્યાર્થી અથવા વાલીનો નોંધાયેલ મોબાઈલ નંબર અને પાસવર્ડ દાખલ કરો.
                </p>
             </div>

             <form onSubmit={handleLogin} className="space-y-5 relative z-10">
                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 ml-1">મોબાઈલ નંબર</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-slate-400" />
                    </div>
                    <input 
                      type="tel" 
                      value={loginPhone}
                      onChange={(e) => setLoginPhone(e.target.value)}
                      placeholder="98XXXXXX52" 
                      className="w-full pl-11 pr-4 py-3.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl text-base focus:outline-none focus:ring-2 focus:ring-orange-500/50 dark:text-white transition-all font-medium tracking-wide"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 ml-1">પાસવર્ડ</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Key className="h-5 w-5 text-slate-400" />
                    </div>
                    <input 
                      type={showPassword ? "text" : "password"} 
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      placeholder="તમારો પાસવર્ડ દાખલ કરો" 
                      className="w-full pl-11 pr-12 py-3.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl text-base focus:outline-none focus:ring-2 focus:ring-orange-500/50 dark:text-white transition-all font-medium"
                      required
                    />
                    <button 
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-orange-500 transition-colors"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>

                {authError && (
                  <p className="text-red-500 text-sm font-medium mt-3 flex items-center gap-1.5 p-3 bg-red-50 dark:bg-red-500/10 rounded-xl">
                    <AlertCircle className="w-4 h-4 shrink-0" /> {authError}
                  </p>
                )}

                <button 
                  type="submit" 
                  disabled={isAuthenticating}
                  className="w-full py-4 bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-500 hover:to-amber-400 text-white rounded-2xl font-black text-lg transition-transform hover:-translate-y-1 shadow-[0_8px_30px_rgb(234,88,12,0.25)] flex items-center justify-center gap-2 disabled:opacity-70 disabled:hover:translate-y-0 mt-6"
                >
                  {isAuthenticating ? <Loader2 className="w-5 h-5 animate-spin" /> : 'લોગીન કરો'}
                </button>

                <p className="text-xs text-center text-slate-400 mt-4">
                  ડિફોલ્ટ પાસવર્ડ: <strong>first</strong> (લોગીન કર્યા પછી બદલી શકાશે)
                </p>
             </form>
          </div>
        ) : (
          /* ─── Logged In Dashboard ─── */
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-500 space-y-8">
            
            {/* Top Bar Actions */}
            <div className="flex flex-wrap items-center justify-between gap-4 bg-white/60 dark:bg-slate-900/60 backdrop-blur-md p-4 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-sm">
               <div className="flex items-center gap-3">
                 <div className="w-10 h-10 bg-orange-100 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 rounded-full flex items-center justify-center">
                   <User className="w-5 h-5" />
                 </div>
                 <div>
                   <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">સ્વાગત છે,</p>
                   <p className="text-sm font-black text-slate-900 dark:text-white leading-none">{student.nameGu}</p>
                 </div>
               </div>
               
               <div className="flex items-center gap-3 w-full sm:w-auto">
                 <button 
                   onClick={() => setIsPasswordModalOpen(true)}
                   className="flex-1 sm:flex-none px-4 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm font-bold rounded-xl transition-colors flex items-center justify-center gap-2"
                 >
                   <Key className="w-4 h-4" /> પાસવર્ડ બદલો
                 </button>
                 <button 
                   onClick={handleLogout}
                   className="flex-1 sm:flex-none px-4 py-2 bg-red-50 hover:bg-red-100 dark:bg-red-500/10 dark:hover:bg-red-500/20 text-red-600 dark:text-red-400 text-sm font-bold rounded-xl transition-colors flex items-center justify-center gap-2"
                 >
                   <LogOut className="w-4 h-4" /> લોગઆઉટ
                 </button>
               </div>
            </div>

            {/* Student Profile Card */}
            <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-6 sm:p-8 shadow-xl border border-slate-200 dark:border-slate-800 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-500/5 rounded-full blur-3xl"></div>
              
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 relative z-10">
                <div className="w-24 h-24 rounded-full border-4 border-slate-100 dark:border-slate-800 bg-slate-200 dark:bg-slate-800 overflow-hidden shrink-0">
                  <img src={`/api/placeholder/150/150?text=${student.nameEn.charAt(0)}`} alt="Profile" className="w-full h-full object-cover" />
                </div>
                
                <div className="text-center sm:text-left flex-grow">
                  <div className="inline-block px-3 py-1 mb-2 rounded-full text-xs font-bold uppercase tracking-wider bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-500/20">
                    ID: {student.id}
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mb-1">{student.nameGu}</h2>
                  <p className="text-slate-500 dark:text-slate-400 font-medium text-sm sm:text-base mb-4">{student.nameEn}</p>
                  
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-sm font-medium text-slate-600 dark:text-slate-300">
                    <span className="flex items-center gap-1.5 bg-slate-50 dark:bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-100 dark:border-slate-700">
                      <User className="w-4 h-4 text-orange-500" /> {student.type}
                    </span>
                    <span className="flex items-center gap-1.5 bg-slate-50 dark:bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-100 dark:border-slate-700">
                      <MapPin className="w-4 h-4 text-orange-500" /> રૂમ ન. {student.room}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              
              {/* Left Column: Stats & Payment */}
              <div className="md:col-span-6 lg:col-span-5 space-y-6">
                
                {/* Total Paid Card */}
                <div className="bg-emerald-50 dark:bg-emerald-500/5 border border-emerald-200 dark:border-emerald-500/20 rounded-[2rem] p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-emerald-100 dark:bg-emerald-500/20 rounded-lg text-emerald-600 dark:text-emerald-400">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <p className="text-emerald-700 dark:text-emerald-400 text-sm font-bold uppercase tracking-wider">કુલ ભરેલી ફી</p>
                  </div>
                  <p className="text-4xl font-black text-emerald-600 dark:text-emerald-500 flex items-center mt-4">
                    <IndianRupee className="w-7 h-7 mr-1" />{totalPaid.toLocaleString('en-IN')}
                  </p>
                </div>

                {/* Make Payment Box */}
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2rem] p-6 shadow-lg relative overflow-hidden">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-white shadow-md">
                      <CreditCard className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">ઓનલાઈન પેમેન્ટ કરો</h3>
                  </div>

                  {paymentSuccess ? (
                    <div className="bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 rounded-2xl p-6 text-center animate-in zoom-in-95">
                      <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center text-white mx-auto mb-4 shadow-lg shadow-emerald-500/30">
                        <CheckCircle className="w-8 h-8" />
                      </div>
                      <h4 className="text-lg font-black text-emerald-700 dark:text-emerald-400 mb-2">પેમેન્ટ સફળ રહ્યું!</h4>
                      <p className="text-sm font-medium text-emerald-600 dark:text-emerald-500/80">તમારી ફી સફળતાપૂર્વક જમા થઈ ગઈ છે. રસીદ ઇતિહાસમાં જોવા મળશે.</p>
                    </div>
                  ) : (
                    <form onSubmit={handlePayment} className="space-y-5">
                      <div>
                        <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 ml-1">રકમ દાખલ કરો (₹)</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <IndianRupee className="h-5 w-5 text-slate-400" />
                          </div>
                          <input 
                            type="number" 
                            min="100"
                            value={payAmount}
                            onChange={(e) => setPayAmount(e.target.value)}
                            placeholder="દા.ત. 5000" 
                            className="w-full pl-11 pr-4 py-4 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl text-lg font-black focus:outline-none focus:ring-2 focus:ring-orange-500/50 dark:text-white transition-all"
                            required
                          />
                        </div>
                      </div>
                      <button 
                        type="submit" 
                        disabled={isProcessing}
                        className="w-full py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl font-black text-lg transition-transform hover:-translate-y-1 shadow-lg flex items-center justify-center gap-2 disabled:opacity-70 disabled:hover:translate-y-0"
                      >
                        {isProcessing ? (
                          <><Loader2 className="w-5 h-5 animate-spin" /> પ્રોસેસિંગ...</>
                        ) : (
                          <>પેમેન્ટ કરો <ChevronRight className="w-5 h-5" /></>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </div>

              {/* Right Column: History Section */}
              <div className="md:col-span-6 lg:col-span-7">
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2rem] p-6 shadow-lg h-full">
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
                    <div className="p-2 bg-indigo-50 dark:bg-indigo-500/10 rounded-lg text-indigo-500">
                      <History className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">પેમેન્ટ ઇતિહાસ</h3>
                  </div>

                  {student.payments.length > 0 ? (
                    <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                      {student.payments.map((payment) => {
                        const isCash = payment.method.toLowerCase() === 'cash';
                        return (
                          <div key={payment.id} className="bg-slate-50 dark:bg-slate-950/50 border border-slate-100 dark:border-slate-800 rounded-2xl p-4 transition-colors hover:border-slate-200 dark:hover:border-slate-700 relative overflow-hidden group">
                            {isCash && <div className="absolute top-0 left-0 w-1 h-full bg-teal-500"></div>}
                            
                            <div className="flex justify-between items-start mb-2 pl-1">
                              <div className="flex items-center gap-2">
                                <span className="font-black text-slate-900 dark:text-white text-lg">
                                  ₹{payment.amount.toLocaleString('en-IN')}
                                </span>
                                {isCash ? (
                                  <span className="bg-teal-100 text-teal-700 dark:bg-teal-500/20 dark:text-teal-400 px-2 py-0.5 rounded text-[10px] font-bold uppercase flex items-center gap-1 border border-teal-200 dark:border-teal-500/30">
                                    <Banknote className="w-3 h-3" /> રોકડ (Cash)
                                  </span>
                                ) : (
                                  <span className="bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400 px-2 py-0.5 rounded text-[10px] font-bold uppercase flex items-center gap-1 border border-blue-200 dark:border-blue-500/30">
                                    <CreditCard className="w-3 h-3" /> ઓનલાઈન ({payment.method})
                                  </span>
                                )}
                              </div>
                              <span className="bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400 px-2 py-0.5 rounded text-[10px] font-bold uppercase flex items-center gap-1">
                                <CheckCircle className="w-3 h-3" /> સફળ
                              </span>
                            </div>
                            
                            <div className="flex justify-between items-center text-xs font-medium text-slate-500 dark:text-slate-400 pl-1 mt-3 pt-3 border-t border-slate-200 dark:border-slate-800">
                              <span className="flex items-center gap-1">
                                <Calendar className="w-3.5 h-3.5" /> {new Date(payment.date).toLocaleDateString('gu-IN')}
                              </span>
                              <span className="font-mono text-[10px]">TXN: {payment.id}</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="text-center py-10">
                      <AlertCircle className="w-10 h-10 text-slate-300 dark:text-slate-700 mx-auto mb-3" />
                      <p className="text-sm font-medium text-slate-500 dark:text-slate-400">કોઈ પેમેન્ટ રેકોર્ડ નથી.</p>
                    </div>
                  )}
                </div>
              </div>

            </div>
          </div>
        )}
      </div>

      {/* ─── Change Password Modal ─── */}
      {isPasswordModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setIsPasswordModalOpen(false)}></div>
          <div className="bg-white dark:bg-slate-900 w-full max-w-md rounded-[2rem] p-6 sm:p-8 relative z-10 shadow-2xl border border-slate-200 dark:border-slate-800 animate-in zoom-in-95">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
              <Key className="w-6 h-6 text-orange-500" /> પાસવર્ડ બદલો
            </h3>
            
            {pwdSuccess ? (
              <div className="text-center py-6">
                <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-bold text-emerald-700 dark:text-emerald-400">{pwdSuccess}</h4>
              </div>
            ) : (
              <form onSubmit={handleChangePassword} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1 ml-1">વર્તમાન પાસવર્ડ</label>
                  <input 
                    type="password" 
                    value={pwdForm.current}
                    onChange={(e) => setPwdForm({...pwdForm, current: e.target.value})}
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-orange-500/50 dark:text-white outline-none"
                    required 
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1 ml-1">નવો પાસવર્ડ</label>
                  <input 
                    type="password" 
                    value={pwdForm.new}
                    onChange={(e) => setPwdForm({...pwdForm, new: e.target.value})}
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-orange-500/50 dark:text-white outline-none"
                    required 
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1 ml-1">કન્ફર્મ નવો પાસવર્ડ</label>
                  <input 
                    type="password" 
                    value={pwdForm.confirm}
                    onChange={(e) => setPwdForm({...pwdForm, confirm: e.target.value})}
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-orange-500/50 dark:text-white outline-none"
                    required 
                  />
                </div>
                
                {pwdError && <p className="text-red-500 text-xs font-bold ml-1">{pwdError}</p>}
                
                <div className="pt-4 flex gap-3">
                  <button 
                    type="button" 
                    onClick={() => setIsPasswordModalOpen(false)}
                    className="flex-1 py-3 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold rounded-xl"
                  >
                    રદ
                  </button>
                  <button 
                    type="submit" 
                    className="flex-1 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl shadow-md"
                  >
                    સેવ કરો
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {/* For custom scrollbar in history */}
      <style dangerouslySetInnerHTML={{__html:`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background-color: #cbd5e1; border-radius: 10px; }
        .dark .custom-scrollbar::-webkit-scrollbar-thumb { background-color: #334155; }
      `}} />
    </div>
  );
}