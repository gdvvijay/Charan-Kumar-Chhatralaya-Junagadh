"use client";

import React, { useState } from 'react';
import { 
  ShieldCheck, Lock, User, Key, Eye, EyeOff, 
  Loader2, AlertCircle, ChevronRight, ArrowLeft
} from 'lucide-react';
// Next.js router for redirection after successful login
// import { useRouter } from 'next/navigation'; 

export default function AdminLoginPage() {
  // const router = useRouter();
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (error) setError('');
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // ─── Mock Authentication ─────────────────────────────────────────────────
    // વાસ્તવિક MERN એપમાં અહીં તમે axios.post('/api/admin/login', formData) કોલ કરશો.
    setTimeout(() => {
      if (formData.username === 'admin' && formData.password === 'admin123') {
        setSuccess(true);
        // વાસ્તવિક એપમાં: 
        // localStorage.setItem('adminToken', response.data.token);
        // router.push('/students'); // Redirect to admin dashboard/students page
      } else {
        setError('યુઝરનેમ અથવા પાસવર્ડ ખોટો છે.');
      }
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen mt-35 bg-slate-50 dark:bg-[#0a0a0a] text-slate-900 dark:text-slate-100 font-sans flex items-center justify-center p-4 relative overflow-hidden transition-colors duration-300">
      
      {/* ── Background Ambient Effects ── */}
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-orange-500/10 dark:bg-orange-500/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none animate-pulse duration-1000"></div>
      <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-indigo-500/10 dark:bg-indigo-500/20 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>

      <div className="w-full max-w-lg relative z-10">
        
        {/* Back Button (Optional - to go back to home) */}
        <a href="/" className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 dark:text-slate-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors mb-6 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> 
          મુખપૃષ્ઠ પર પાછા ફરો
        </a>

        {/* ── Login Card ── */}
        <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-[2.5rem] p-8 sm:p-10 shadow-2xl border border-white dark:border-slate-800 relative overflow-hidden animate-in fade-in zoom-in-95 duration-500">
          
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-orange-500 to-amber-500"></div>

          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 dark:from-indigo-600 dark:to-indigo-800 rounded-2xl flex items-center justify-center text-white mx-auto mb-5 shadow-lg shadow-indigo-500/30">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mb-2 tracking-tight">વહીવટી પેનલ</h1>
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
              છાત્રાલય સંચાલન (Admin) માટે સુરક્ષિત લોગીન
            </p>
          </div>

          {success ? (
            <div className="text-center py-6 animate-in zoom-in">
              <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h2 className="text-xl font-bold text-emerald-700 dark:text-emerald-400 mb-2">લોગીન સફળ!</h2>
              <p className="text-sm text-emerald-600 dark:text-emerald-500/80 font-medium">તમને ડેશબોર્ડ પર રીડાયરેક્ટ કરવામાં આવી રહ્યા છે...</p>
            </div>
          ) : (
            <form onSubmit={handleLogin} className="space-y-5">
              
              {/* Username Input */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 ml-1 uppercase tracking-wider">યુઝરનેમ (Username)</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-slate-400" />
                  </div>
                  <input 
                    type="text" 
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    placeholder="તમારું યુઝરનેમ દાખલ કરો" 
                    className="w-full pl-11 pr-4 py-3.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl text-base focus:outline-none focus:ring-2 focus:ring-indigo-500/50 dark:text-white transition-all font-medium"
                    required
                  />
                </div>
              </div>

              {/* Password Input */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 ml-1 uppercase tracking-wider">પાસવર્ડ (Password)</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Key className="h-5 w-5 text-slate-400" />
                  </div>
                  <input 
                    type={showPassword ? "text" : "password"} 
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="તમારો પાસવર્ડ દાખલ કરો" 
                    className="w-full pl-11 pr-12 py-3.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl text-base focus:outline-none focus:ring-2 focus:ring-indigo-500/50 dark:text-white transition-all font-medium"
                    required
                  />
                  <button 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-indigo-500 transition-colors"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              {/* Error Message */}
              {error && (
                <div className="p-3 bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 rounded-xl flex items-center gap-2 text-red-600 dark:text-red-400 animate-in shake">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <p className="text-xs font-bold">{error}</p>
                </div>
              )}

              {/* Submit Button */}
              <button 
                type="submit" 
                disabled={isLoading}
                className="w-full py-4 mt-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl font-black text-base transition-transform hover:-translate-y-1 shadow-lg flex items-center justify-center gap-2 disabled:opacity-70 disabled:hover:translate-y-0 group"
              >
                {isLoading ? (
                  <><Loader2 className="w-5 h-5 animate-spin" /> ચકાસણી ચાલુ છે...</>
                ) : (
                  <>
                    <Lock className="w-4 h-4" /> લોગીન કરો <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>

            </form>
          )}

          {/* Bottom Note */}
          {!success && (
            <div className="mt-8 text-center border-t border-slate-100 dark:border-slate-800 pt-6">
              <p className="text-[10px] sm:text-xs font-semibold text-slate-400 dark:text-slate-500">
                અનધિકૃત ઍક્સેસ પ્રતિબંધિત છે. સિસ્ટમની સુરક્ષા માટે તમારો IP લોગ થઈ રહ્યો છે.
              </p>
            </div>
          )}
        </div>
        
        {/* Helper Note for testing */}
        <div className="mt-6 text-center">
          <p className="text-xs text-slate-400">
            Testing credentials: <br/> Username: <strong>admin</strong> | Password: <strong>admin123</strong>
          </p>
        </div>

      </div>
    </div>
  );
}