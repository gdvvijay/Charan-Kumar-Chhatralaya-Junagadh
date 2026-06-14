"use client";

import React, { useState, useMemo } from 'react';
import {
  Search, Filter, Plus, X, MapPin, BookOpen, User,
  Calendar, Phone, Edit, LogOut, ChevronLeft, ChevronRight,
  CheckCircle, GraduationCap, Landmark, IndianRupee, Banknote, CreditCard
} from 'lucide-react';

const STUDENT_TYPES = {
  school:    { label: "શાળા (School)",          labelShort: "School",    color: "violet"  },
  college:   { label: "કૉલેજ (College)",         labelShort: "College",   color: "sky"     },
  govt_prep: { label: "સ. પરીક્ષા (Govt Prep)", labelShort: "Govt Prep", color: "orange"  },
};

const TYPE_COLOR = {
  school:    { bg: "bg-violet-50 dark:bg-violet-500/10", text: "text-violet-600 dark:text-violet-400", border: "border-violet-100 dark:border-violet-500/20", iconColor: "text-violet-500" },
  college:   { bg: "bg-sky-50 dark:bg-sky-500/10",       text: "text-sky-600 dark:text-sky-400",       border: "border-sky-100 dark:border-sky-500/20",       iconColor: "text-sky-500"    },
  govt_prep: { bg: "bg-orange-50 dark:bg-orange-500/10", text: "text-orange-600 dark:text-orange-400", border: "border-orange-100 dark:border-orange-500/20", iconColor: "text-orange-500" },
};

const GUJARATI_MONTHS = [
  "જાન્યુઆરી","ફેબ્રુઆરી","માર્ચ","એપ્રિલ","મે","જૂન",
  "જુલાઈ","ઓગસ્ટ","સપ્ટેમ્બર","ઓક્ટોબર","નવેમ્બર","ડિસેમ્બર"
];

// ─── Helpers ─────────────────────────────────────────────────────────────────

const seededRand = (seed) => { let x = Math.sin(seed + 1) * 10000; return x - Math.floor(x); };

// ડાયનેમિક રોકાણ ગણતરી
const calculateDuration = (admissionDate, leaveDate) => {
  const start = new Date(admissionDate);
  const end   = leaveDate ? new Date(leaveDate) : new Date();
  if (isNaN(start.getTime()) || isNaN(end.getTime())) return "માહિતી ઉપલબ્ધ નથી";
  
  let years  = end.getFullYear() - start.getFullYear();
  let months = end.getMonth()    - start.getMonth();
  if (months < 0) { years--; months += 12; }
  if (years === 0 && months === 0) return "૧ મહિનાથી ઓછો સમય";
  
  const parts = [];
  if (years  > 0) parts.push(`${years} વર્ષ`);
  if (months > 0) parts.push(`${months} મહિના`);
  return parts.join(" અને ");
};

const formatDate = (dateString) => {
  if (!dateString) return "-";
  const d = new Date(dateString);
  if (isNaN(d.getTime())) return dateString;
  return new Intl.DateTimeFormat('gu-IN', { day:'2-digit', month:'short', year:'numeric' }).format(d);
};

// ફી હિસ્ટ્રી ડમી ડેટા જનરેટર
const generatePaymentRecords = (admissionDate, leaveDate, seed) => {
  const start = new Date(admissionDate);
  const end   = leaveDate ? new Date(leaveDate) : new Date();
  const records = [];
  let currentYear = start.getFullYear();
  let endYear = end.getFullYear();
  let paymentId = 1;

  const paymentMethods = ["Online", "Cash"];

  for (let y = currentYear; y <= endYear; y++) {
    const timesPaidThisYear = Math.floor(seededRand(seed + y) * 4) + 1; 
    for (let i = 0; i < timesPaidThisYear; i++) {
      const month = Math.floor(seededRand(seed + y + i * 7) * 12);
      const day = Math.floor(seededRand(seed + y + i * 11) * 28) + 1;
      const pDate = new Date(y, month, day);
      
      if (pDate >= start && pDate <= end) {
        const amounts = [1500, 2000, 3000, 5000, 7500];
        const amt = amounts[Math.floor(seededRand(seed + pDate.getTime()) * amounts.length)];
        const method = paymentMethods[Math.floor(seededRand(seed + pDate.getTime() + 1) * paymentMethods.length)];
        records.push({
          id: `pay-${y}-${paymentId++}`,
          date: pDate.toISOString().split('T')[0],
          year: y,
          monthIndex: pDate.getMonth(),
          amount: amt,
          method: method
        });
      }
    }
  }
  return records.sort((a, b) => new Date(b.date) - new Date(a.date));
};

// ─── Mock Data ────────────────────────────────────────────────────────────────

const VILLAGES = ["રાજકોટ","જૂનાગઢ","જામનગર","ભાવનગર","પોરબંદર","અમરેલી","ગીર સોમનાથ","કચ્છ"];
const TYPE_KEYS = Object.keys(STUDENT_TYPES);
const STANDARDS = ["8", "9", "10", "11 Arts", "11 Science", "12 Arts", "12 Science"];
const COLLEGE_YEARS = ["1st Year", "2nd Year", "3rd Year", "4th Year", "Masters"];

const generateMockStudents = () => {
  return Array.from({ length: 45 }, (_, i) => {
    const n = i + 1;
    const adYear     = 2020 + Math.floor(seededRand(n * 31) * 5);
    const adMonth    = Math.floor(seededRand(n * 37) * 12) + 1;
    const admDate    = `${adYear}-${String(adMonth).padStart(2,'0')}-15`;
    const isSTStudent = n % 4 === 0;
    const sType      = TYPE_KEYS[Math.floor(seededRand(n * 41) * 3)];

    let standard = "";
    let collegeYear = "";
    if (sType === "school") standard = STANDARDS[Math.floor(seededRand(n * 71) * STANDARDS.length)];
    if (sType === "college") collegeYear = COLLEGE_YEARS[Math.floor(seededRand(n * 73) * COLLEGE_YEARS.length)];

    const payments = generatePaymentRecords(admDate, null, n * 100);

    return {
      id:           `STU${String(n).padStart(3,'0')}`,
      photoUrl:     `/api/placeholder/150/150?text=S${n}`,
      fullNameGu:   `વિદ્યાર્થી નામ ${n}`,
      fullNameEn:   `Student Name ${n}`,
      studentType:  sType,
      standard,
      collegeYear,
      villageGu:    VILLAGES[Math.floor(seededRand(n * 59) * VILLAGES.length)],
      roomNumber:   `${Math.floor(seededRand(n * 61) * 10) + 1}`,
      admissionDate: admDate,
      isSTStudent,
      payments,
      parentNameGu: `વાલીનું નામ ${n}`,
      contactNumber:`+91 98${String(Math.floor(seededRand(n * 67) * 100000000)).padStart(8,'0')}`,
      studentContactNumber: n % 3 !== 0 ? `+91 97${String(Math.floor(seededRand(n * 69) * 100000000)).padStart(8,'0')}` : "", 
      password: "first", // Default password
    };
  });
};

const INITIAL_STUDENTS = generateMockStudents();

// ─── Sub Components ────────────────────────────────────────────────────────
function StudentTypeIcon({ type, className = "w-4 h-4" }) {
  if (type === "college")   return <GraduationCap className={className} />;
  if (type === "govt_prep") return <Landmark className={className} />;
  return <BookOpen className={className} />;
}

// ─── Fee Payments Panel ──────────────────────────────────
function FeeRecordsPanel({ student, onAddPayment }) {
  const [viewYear, setViewYear] = useState(() => {
    if (student.payments && student.payments.length > 0) return student.payments[0].year;
    return new Date().getFullYear();
  });

  const allYears = student.payments ? [...new Set(student.payments.map(p => p.year))].sort((a, b) => b - a) : [];
  const filteredPayments = student.payments ? student.payments.filter(p => p.year === viewYear) : [];
  const yearTotal = filteredPayments.reduce((sum, p) => sum + p.amount, 0);

  return (
    <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
      <div className="flex items-center justify-between mb-5 flex-wrap gap-2">
        <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
          ફી ચૂકવણીની નોંધ
        </h3>
        <button 
          onClick={() => onAddPayment(student.id)}
          className="px-3 py-1.5 text-xs font-bold bg-[#FFAF03] hover:bg-amber-500 text-white rounded-lg transition-colors flex items-center gap-1"
        >
          <Plus className="w-3.5 h-3.5" />
          નવી ફી નોંધો
        </button>
      </div>

      {allYears.length > 0 ? (
        <>
          {/* Year tabs */}
          <div className="flex items-center gap-2 mb-4 flex-wrap">
            {allYears.map(yr => (
              <button key={yr} onClick={() => setViewYear(yr)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  viewYear === yr
                    ? "bg-[#FFAF03] text-white shadow-sm"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-orange-50 dark:hover:bg-[#FFAF03]/10"
                }`}>{yr}
              </button>
            ))}
          </div>

          <div className="flex items-center justify-between gap-4 mb-4 text-xs font-semibold text-slate-500 dark:text-slate-400 flex-wrap p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
              વર્ષ {viewYear} માં કુલ <strong>{filteredPayments.length} વખત</strong> ફી જમા થઈ છે
            </span>
            <span className="flex items-center gap-1.5 text-slate-900 dark:text-white">
              વર્ષની કુલ રકમ: <strong className="text-[#FFAF03] text-sm">₹{yearTotal.toLocaleString('en-IN')}</strong>
            </span>
          </div>

          {/* Payments List */}
          <div className="space-y-2.5">
            {filteredPayments.map((payment) => {
              const isCash = payment.method?.toLowerCase() === 'cash';
              
              return (
                <div key={payment.id}
                  className="flex items-center justify-between bg-white dark:bg-slate-900/50 rounded-xl px-4 py-3.5 border border-slate-100 dark:border-slate-800 shadow-sm relative overflow-hidden group"
                >
                  {isCash && <div className="absolute top-0 left-0 w-1 h-full bg-teal-500"></div>}
                  
                  <div className="flex items-center gap-3 pl-1">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${isCash ? 'bg-teal-50 dark:bg-teal-500/10 text-teal-500' : 'bg-blue-50 dark:bg-blue-500/10 text-blue-500'}`}>
                      {isCash ? <Banknote className="w-4 h-4" /> : <CreditCard className="w-4 h-4" />}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900 dark:text-white leading-tight">
                        {GUJARATI_MONTHS[payment.monthIndex]} {payment.year}
                      </p>
                      <p className="text-[11px] font-semibold text-slate-400 mt-0.5">
                        તારીખ: {formatDate(payment.date)}
                      </p>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="text-base font-black text-slate-900 dark:text-white">
                      ₹{payment.amount.toLocaleString('en-IN')}
                    </p>
                    <span className={`inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[9px] font-bold uppercase mt-1 ${isCash ? 'bg-teal-100 text-teal-700 dark:bg-teal-500/20 dark:text-teal-400 border border-teal-200 dark:border-teal-500/30' : 'bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400 border border-blue-200 dark:border-blue-500/30'}`}>
                      {isCash ? 'રોકડ (Cash)' : `ઓનલાઈન (${payment.method || 'UPI'})`}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <p className="text-sm text-slate-400 dark:text-slate-500 text-center py-8 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-dashed border-slate-200 dark:border-slate-700">
          આ વિદ્યાર્થીનો કોઈ ફી પેમેન્ટ રેકોર્ડ નથી.
        </p>
      )}
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function StudentDirectory() {
  const [students, setStudents]               = useState(INITIAL_STUDENTS);
  const [searchQuery, setSearchQuery]         = useState("");
  const [roomFilter, setRoomFilter]           = useState("all");
  const [typeFilter, setTypeFilter]           = useState("all");
  const [currentPage, setCurrentPage]         = useState(1);
  const [selectedStudent, setSelectedStudent] = useState(null);
  
  // Modals state
  const [isFormOpen, setIsFormOpen]                 = useState(false);
  const [editingStudent, setEditingStudent]         = useState(null);
  const [formStudentType, setFormStudentType]       = useState("school"); // For dynamic fields in form
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [paymentStudentId, setPaymentStudentId]     = useState(null);

  const STUDENTS_PER_PAGE = 30;

  const uniqueRooms = useMemo(() => {
    const rooms = new Set(students.map(s => s.roomNumber));
    return ["all", ...Array.from(rooms).sort((a, b) => parseInt(a) - parseInt(b))];
  }, [students]);

  const filteredStudents = useMemo(() => {
    const q = searchQuery.toLowerCase();
    return students.filter(s =>
      (s.fullNameGu.includes(searchQuery) || s.fullNameEn.toLowerCase().includes(q) || s.villageGu.includes(searchQuery)) &&
      (roomFilter   === "all" || s.roomNumber === roomFilter) &&
      (typeFilter   === "all" || s.studentType === typeFilter)
    );
  }, [students, searchQuery, roomFilter, typeFilter]);

  const totalPages        = Math.ceil(filteredStudents.length / STUDENTS_PER_PAGE) || 1;
  const paginatedStudents = filteredStudents.slice(
    (currentPage - 1) * STUDENTS_PER_PAGE,
    currentPage * STUDENTS_PER_PAGE
  );

  // 1. Add / Update Student Profile
  const handleSaveStudent = (formData) => {
    const isNewST = formData.isSTStudent === "true";

    // Clean up unnecessary fields based on student type
    if (formData.studentType !== 'school') delete formData.standard;
    if (formData.studentType !== 'college') delete formData.collegeYear;

    if (editingStudent) {
      setStudents(prev => prev.map(s =>
        s.id !== editingStudent.id ? s
          : { ...s, ...formData, isSTStudent: isNewST }
      ));
      
      // Update selectedStudent in detail view instantly
      if (selectedStudent?.id === editingStudent.id) {
        setSelectedStudent(prev => ({ ...prev, ...formData, isSTStudent: isNewST }));
      }
    } else {
      const newId = `STU${String(students.length + 1).padStart(3,'0')}`;
      setStudents(prev => [{
        ...formData, id: newId,
        photoUrl: `/api/placeholder/150/150?text=${(formData.fullNameEn||'S').split(' ')[0]}`,
        isSTStudent: isNewST, 
        payments: [],
        password: "first" // Add default password for new students
      }, ...prev]);
    }
    setIsFormOpen(false);
    setEditingStudent(null);
  };

  const openForm = (student = null) => {
    setEditingStudent(student);
    setFormStudentType(student?.studentType || "school");
    setIsFormOpen(true);
  };

  // 2. Add New Fee Payment Logic
  const handleAddPaymentClick = (studentId) => {
      setPaymentStudentId(studentId);
      setIsPaymentModalOpen(true);
  };

  const handleSavePayment = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const amount = parseInt(data.get('amount'), 10);
    const dateStr = data.get('date');
    const method = data.get('method');

    if (!amount || !dateStr || !method) return;

    const d = new Date(dateStr);
    const newPayment = {
      id: `pay-${Date.now()}`,
      date: dateStr,
      year: d.getFullYear(),
      monthIndex: d.getMonth(),
      amount: amount,
      method: method
    };

    setStudents(prev => prev.map(s => {
      if (s.id === paymentStudentId) {
        const updatedPayments = [...s.payments, newPayment].sort((a, b) => new Date(b.date) - new Date(a.date));
        const updatedStudent = { ...s, payments: updatedPayments };
        
        // Update selectedStudent view instantly
        if (selectedStudent?.id === s.id) {
          setSelectedStudent(updatedStudent);
        }
        return updatedStudent;
      }
      return s;
    }));

    setIsPaymentModalOpen(false);
    setPaymentStudentId(null);
  };

  const activePaymentStudent = students.find(s => s.id === paymentStudentId);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0a0a0a] text-slate-900 dark:text-slate-100 font-sans p-4 sm:p-6 lg:p-8 transition-colors duration-300">

      {/* ── Header ── */}
      <div className="max-w-7xl mx-auto px-3 lg:px-6 mb-8 mt-40">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
          <div>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white mb-2 tracking-tight">
              વિદ્યાર્થી <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFAF03] to-amber-500">યાદી</span>
            </h1>
            <p className="text-slate-600 dark:text-slate-400 font-medium">
              શ્રી કાનજીભાઈ નાગૈયા ચારણ કુમાર છાત્રાલય
            </p>
          </div>
          <button onClick={() => openForm()}
            className="w-full md:w-auto px-6 py-3.5 bg-gradient-to-r from-[#FFAF03] to-amber-500 hover:opacity-90 text-white rounded-2xl font-bold transition-all shadow-lg hover:shadow-[#FFAF03]/25 flex items-center justify-center gap-2 group"
          >
            <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform" />
            નવો વિદ્યાર્થી ઉમેરો
          </button>
        </div>

        {/* Filters */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-2xl shadow-sm flex flex-col sm:flex-row gap-4 items-center justify-between flex-wrap">
          <div className="relative w-full sm:w-80">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-400" />
            </div>
            <input type="text" placeholder="નામ અથવા ગામ શોધો..." value={searchQuery}
              onChange={e => { setSearchQuery(e.target.value); setCurrentPage(1); }}
              className="w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#FFAF03]/50 dark:text-white"
            />
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto flex-wrap">
            <select value={typeFilter} onChange={e => { setTypeFilter(e.target.value); setCurrentPage(1); }}
              className="px-4 py-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#FFAF03]/50 dark:text-white font-medium appearance-none">
              <option value="all">બધા પ્રકાર</option>
              {Object.entries(STUDENT_TYPES).map(([k,v]) => <option key={k} value={k}>{v.labelShort}</option>)}
            </select>
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-slate-400 shrink-0" />
              <select value={roomFilter} onChange={e => { setRoomFilter(e.target.value); setCurrentPage(1); }}
                className="px-4 py-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#FFAF03]/50 dark:text-white font-medium appearance-none">
                <option value="all">બધા રૂમ</option>
                {uniqueRooms.filter(r => r !== 'all').map(room => <option key={room} value={room}>રૂમ {room}</option>)}
              </select>
            </div>
            <div className="px-4 py-2.5 bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 rounded-xl text-sm font-bold whitespace-nowrap border border-indigo-100 dark:border-indigo-500/20 shrink-0">
              કુલ: {filteredStudents.length}
            </div>
          </div>
        </div>
      </div>

      {/* ── Grid ── */}
      <div className="max-w-7xl mx-auto px-3 lg:px-6">
        {filteredStudents.length === 0 ? (
          <div className="text-center py-20 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2rem]">
            <User className="w-16 h-16 text-slate-300 dark:text-slate-700 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">કોઈ માહિતી મળી નથી</h3>
            <p className="text-slate-500 dark:text-slate-400">કૃપા કરીને અન્ય નામ શોધો.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {paginatedStudents.map(student => {
              const tc   = TYPE_COLOR[student.studentType] ?? TYPE_COLOR.school;
              const info = STUDENT_TYPES[student.studentType];
              return (
                <div key={student.id} onClick={() => setSelectedStudent(student)}
                  className="group bg-white dark:bg-white/5 border border-slate-200 dark:border-slate-800 rounded-[2rem] p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden relative"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#FFAF03]/5 rounded-full blur-xl group-hover:bg-[#FFAF03]/10 transition-colors pointer-events-none" />
                  <div className="flex items-center gap-4 mb-4 relative z-10">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-slate-100 dark:border-slate-800 shrink-0">
                      <img src={student.photoUrl} alt={student.fullNameEn} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white text-lg leading-tight group-hover:text-[#FFAF03] dark:group-hover:text-[#FFAF03] transition-colors line-clamp-1">
                        {student.fullNameGu}
                      </h3>
                      <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-0.5">{student.fullNameEn}</p>
                    </div>
                  </div>

                  <div className="space-y-2.5 mt-5">
                    <div className={`flex items-center text-sm ${tc.bg} p-2 rounded-xl border ${tc.border}`}>
                      <StudentTypeIcon type={student.studentType} className={`w-4 h-4 ${tc.iconColor} mr-2.5 shrink-0`} />
                      <span className={`font-semibold ${tc.text}`}>
                        {info?.labelShort}
                        {student.studentType === 'school' && student.standard ? ` - ધોરણ ${student.standard}` : ''}
                        {student.studentType === 'college' && student.collegeYear ? ` - ${student.collegeYear}` : ''}
                      </span>
                    </div>
                    <div className="flex items-center text-sm text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-900/50 p-2 rounded-xl">
                      <MapPin className="w-4 h-4 text-[#FFAF03] mr-2.5 shrink-0" />
                      <span className="font-medium truncate">{student.villageGu}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-900/50 p-2 rounded-xl">
                      <div className="flex items-center">
                        <LogOut className="w-4 h-4 text-[#FFAF03] mr-2.5 shrink-0 rotate-180" />
                        <span className="font-medium">રૂમ</span>
                      </div>
                      <span className="font-black text-slate-900 dark:text-white">{student.roomNumber}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-12">
            <button onClick={() => setCurrentPage(p => Math.max(1, p - 1))} disabled={currentPage === 1}
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-1">
              {[...Array(totalPages)].map((_, i) => {
                if (totalPages > 7 && i > 2 && i < totalPages - 2 && i + 1 !== currentPage) {
                  if (i === 3) return <span key={i} className="px-2 py-2 text-slate-400">...</span>;
                  return null;
                }
                return (
                  <button key={i} onClick={() => setCurrentPage(i + 1)}
                    className={`w-10 h-10 rounded-xl text-sm font-bold transition-all ${
                      currentPage === i + 1
                        ? "bg-[#FFAF03] text-white shadow-md"
                        : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 border border-transparent hover:border-slate-200 dark:hover:border-slate-700"
                    }`}>{i + 1}</button>
                );
              })}
            </div>
            <button onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} disabled={currentPage === totalPages}
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>

      {/* ── Detail Modal ── */}
      {selectedStudent && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setSelectedStudent(null)} />
          <div className="relative bg-white dark:bg-[#111] border border-slate-200 dark:border-slate-800 rounded-[2.5rem] shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto custom-scrollbar flex flex-col animate-in fade-in zoom-in-95 duration-300">
            <div className="h-32 sm:h-40 bg-gradient-to-r from-[#FFAF03] to-amber-500 relative shrink-0">
              <button onClick={() => setSelectedStudent(null)}
                className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full backdrop-blur-md">
                <X className="w-5 h-5" />
              </button>
              <button onClick={() => openForm(selectedStudent)}
                className="absolute top-4 right-16 px-4 py-2 bg-white/20 hover:bg-white/30 text-white text-sm font-bold rounded-full backdrop-blur-md flex items-center gap-2 border border-white/20">
                <Edit className="w-4 h-4" /> અપડેટ
              </button>
            </div>

            <div className="px-6 sm:px-10 pb-10 relative -mt-16 sm:-mt-20">
              <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-end mb-8">
                <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-white dark:border-[#111] shadow-xl overflow-hidden bg-white dark:bg-slate-800 shrink-0 relative z-10">
                  <img src={selectedStudent.photoUrl} alt="Student" className="w-full h-full object-cover" />
                </div>
                <div className="text-center sm:text-left flex-grow">
                  <div className="flex items-center justify-center sm:justify-start gap-2 mb-2 flex-wrap">
                    <span className="px-3 py-1 rounded-full text-[11px] font-black uppercase bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                      {selectedStudent.id}
                    </span>
                    {(() => {
                      const tc = TYPE_COLOR[selectedStudent.studentType] ?? TYPE_COLOR.school;
                      return (
                        <span className={`px-3 py-1 rounded-full text-[11px] font-black uppercase ${tc.bg} ${tc.text} border ${tc.border}`}>
                          {STUDENT_TYPES[selectedStudent.studentType]?.labelShort}
                        </span>
                      );
                    })()}
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">{selectedStudent.fullNameGu}</h2>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mt-1">{selectedStudent.fullNameEn}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider border-b border-slate-100 dark:border-slate-800 pb-2">છાત્રાલયની માહિતી</h3>
                  <div className="flex items-start gap-3">
                    {(() => { const tc = TYPE_COLOR[selectedStudent.studentType] ?? TYPE_COLOR.school; return (
                      <div className={`p-2.5 ${tc.bg} rounded-xl ${tc.iconColor} shrink-0`}><StudentTypeIcon type={selectedStudent.studentType} className="w-5 h-5" /></div>
                    ); })()}
                    <div>
                      <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase">પ્રકાર</p>
                      <p className="text-base font-bold text-slate-900 dark:text-white">
                        {STUDENT_TYPES[selectedStudent.studentType]?.label}
                        {selectedStudent.studentType === 'school' && selectedStudent.standard ? ` (ધોરણ ${selectedStudent.standard})` : ''}
                        {selectedStudent.studentType === 'college' && selectedStudent.collegeYear ? ` (${selectedStudent.collegeYear})` : ''}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2.5 bg-indigo-50 dark:bg-indigo-500/10 rounded-xl text-indigo-500 shrink-0"><LogOut className="w-5 h-5 rotate-180" /></div>
                    <div>
                      <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase">રૂમ</p>
                      <p className="text-base font-bold text-slate-900 dark:text-white">{selectedStudent.roomNumber}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2.5 bg-[#FFAF03]/10 dark:bg-[#FFAF03]/20 rounded-xl text-[#FFAF03] shrink-0"><Calendar className="w-5 h-5" /></div>
                    <div>
                      <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase">રોકાણ</p>
                      <p className="text-sm font-bold text-slate-900 dark:text-white">પ્રવેશ: {formatDate(selectedStudent.admissionDate)}</p>
                      <p className="text-sm font-black text-[#FFAF03] mt-1.5 bg-[#FFAF03]/10 px-2 py-1 rounded inline-block">
                        {calculateDuration(selectedStudent.admissionDate)}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider border-b border-slate-100 dark:border-slate-800 pb-2">અન્ય માહિતી</h3>
                  
                  {selectedStudent.isSTStudent && (
                    <div className="flex items-start gap-3">
                      <div className="p-2.5 bg-blue-50 dark:bg-blue-500/10 rounded-xl text-blue-500 shrink-0"><User className="w-5 h-5" /></div>
                      <div>
                        <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase">શ્રેણી</p>
                        <p className="text-base font-bold text-blue-600 dark:text-blue-400">ST — ગીર વિસ્તાર</p>
                      </div>
                    </div>
                  )}
                  <div className="flex items-start gap-3">
                    <div className="p-2.5 bg-sky-50 dark:bg-sky-500/10 rounded-xl text-sky-500 shrink-0"><MapPin className="w-5 h-5" /></div>
                    <div>
                      <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase">ગામ / શહેર</p>
                      <p className="text-base font-bold text-slate-900 dark:text-white">{selectedStudent.villageGu}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">સંપર્ક માહિતી</h3>
                <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row gap-6 justify-start items-start sm:items-center flex-wrap">
                  <div className="flex items-center gap-4 pr-4 border-b sm:border-b-0 sm:border-r border-slate-200 dark:border-slate-700 pb-4 sm:pb-0">
                    <div className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-sm"><User className="w-6 h-6 text-slate-400" /></div>
                    <div>
                      <p className="text-xs font-bold text-slate-500 uppercase">વાલીનું નામ</p>
                      <p className="text-base font-bold text-slate-900 dark:text-white">{selectedStudent.parentNameGu}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 pr-4 border-b sm:border-b-0 sm:border-r border-slate-200 dark:border-slate-700 pb-4 sm:pb-0">
                    <div className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-sm"><Phone className="w-6 h-6 text-slate-400" /></div>
                    <div>
                      <p className="text-xs font-bold text-slate-500 uppercase">વાલીનો સંપર્ક</p>
                      <p className="text-base font-bold text-slate-900 dark:text-white">{selectedStudent.contactNumber}</p>
                    </div>
                  </div>
                  {selectedStudent.studentContactNumber && (
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-sm"><Phone className="w-6 h-6 text-[#FFAF03]" /></div>
                      <div>
                        <p className="text-xs font-bold text-slate-500 uppercase">વિદ્યાર્થીનો સંપર્ક</p>
                        <p className="text-base font-bold text-slate-900 dark:text-white">{selectedStudent.studentContactNumber}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <FeeRecordsPanel student={selectedStudent} onAddPayment={handleAddPaymentClick} />
            </div>
          </div>
        </div>
      )}

      {/* ── 1. Profile Add/Edit Form Modal ── */}
      {isFormOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setIsFormOpen(false)} />
          <div className="relative bg-white dark:bg-[#111] border border-slate-200 dark:border-slate-800 rounded-[2.5rem] shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col animate-in slide-in-from-bottom-8 duration-300">
            <div className="p-6 sm:p-8 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between sticky top-0 bg-white/95 dark:bg-[#111]/95 backdrop-blur-md rounded-t-[2.5rem] z-20">
              <h2 className="text-2xl font-black text-slate-900 dark:text-white">
                {editingStudent ? "માહિતી અપડેટ" : "નવો વિદ્યાર્થી"}
              </h2>
              <button onClick={() => setIsFormOpen(false)} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full">
                <X className="w-6 h-6 text-slate-500 dark:text-slate-400" />
              </button>
            </div>

            <div className="p-6 sm:p-8 overflow-y-auto custom-scrollbar">
              <form onSubmit={e => {
                e.preventDefault();
                const data = Object.fromEntries(new FormData(e.target).entries());
                handleSaveStudent(data);
              }} className="space-y-8">

                <div className="space-y-4">
                  <h3 className="text-sm font-bold text-[#FFAF03] uppercase border-b border-[#FFAF03]/20 pb-2">પ્રાથમિક માહિતી</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5 ml-1">વિદ્યાર્થીનું નામ (ગુ.) *</label>
                      <input name="fullNameGu" defaultValue={editingStudent?.fullNameGu} required className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#FFAF03] outline-none" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5 ml-1">Full Name (English) *</label>
                      <input name="fullNameEn" defaultValue={editingStudent?.fullNameEn} required className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#FFAF03] outline-none" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5 ml-1">ગામ / શહેર *</label>
                      <input name="villageGu" defaultValue={editingStudent?.villageGu} required className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#FFAF03] outline-none" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5 ml-1">ST (ગીર) રાહત?</label>
                      <select name="isSTStudent" defaultValue={editingStudent?.isSTStudent ? "true" : "false"}
                        className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#FFAF03] outline-none">
                        <option value="false">ના — General</option>
                        <option value="true">હા — ST રાહત</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-sm font-bold text-[#FFAF03] uppercase border-b border-[#FFAF03]/20 pb-2">વિદ્યાર્થી પ્રકાર / છાત્રાલય</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5 ml-1">પ્રકાર *</label>
                      <select name="studentType" value={formStudentType} onChange={(e) => setFormStudentType(e.target.value)}
                        className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#FFAF03] outline-none">
                        {Object.entries(STUDENT_TYPES).map(([k,v]) => <option key={k} value={k}>{v.label}</option>)}
                      </select>
                    </div>
                    
                    {/* Conditionally rendered Standard / College Year Input */}
                    {formStudentType === 'school' && (
                      <div>
                        <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5 ml-1">ધોરણ (Standard) *</label>
                        <input name="standard" defaultValue={editingStudent?.standard} required placeholder="દા.ત. 10, 12 Science"
                          className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#FFAF03] outline-none" />
                      </div>
                    )}

                    {formStudentType === 'college' && (
                      <div>
                        <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5 ml-1">કોલેજનું વર્ષ (Year) *</label>
                        <input name="collegeYear" defaultValue={editingStudent?.collegeYear} required placeholder="દા.ત. 1st Year, SY"
                          className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#FFAF03] outline-none" />
                      </div>
                    )}

                    <div>
                      <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5 ml-1">રૂમ *</label>
                      <input name="roomNumber" defaultValue={editingStudent?.roomNumber} required
                        className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#FFAF03] outline-none" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5 ml-1">પ્રવેશ તારીખ *</label>
                      <input type="date" name="admissionDate"
                        defaultValue={editingStudent?.admissionDate}
                        required
                        className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#FFAF03] outline-none" />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-sm font-bold text-[#FFAF03] uppercase border-b border-[#FFAF03]/20 pb-2">સંપર્ક માહિતી</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5 ml-1">વાલીનું નામ *</label>
                      <input name="parentNameGu" defaultValue={editingStudent?.parentNameGu} required
                        className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#FFAF03] outline-none" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5 ml-1">વાલીનો સંપર્ક *</label>
                      <input name="contactNumber" defaultValue={editingStudent?.contactNumber} required
                        className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#FFAF03] outline-none" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5 ml-1">વિદ્યાર્થીનો સંપર્ક (જો હોય તો)</label>
                      <input name="studentContactNumber" defaultValue={editingStudent?.studentContactNumber} placeholder="+91..."
                        className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#FFAF03] outline-none" />
                    </div>
                  </div>
                </div>

                <div className="pt-6 sticky bottom-0 bg-white dark:bg-[#111] border-t border-slate-100 dark:border-slate-800 flex justify-end gap-4 pb-2">
                  <div className="flex-1 max-w-[200px] flex items-center">
                     <p className="text-[10px] sm:text-xs text-slate-400">નવા વિદ્યાર્થી માટે ડિફોલ્ટ પાસવર્ડ <strong className="text-[#FFAF03]">first</strong> રહેશે.</p>
                  </div>
                  <button type="button" onClick={() => setIsFormOpen(false)}
                    className="px-6 py-3 font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl">
                    રદ
                  </button>
                  <button type="submit"
                    className="px-8 py-3 bg-gradient-to-r from-[#FFAF03] to-amber-500 hover:opacity-90 text-white font-bold rounded-xl shadow-lg">
                    સાચવો
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* ── 2. Add Fee Payment Modal ── */}
      {isPaymentModalOpen && activePaymentStudent && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setIsPaymentModalOpen(false)} />
          <div className="relative bg-white dark:bg-[#111] border border-slate-200 dark:border-slate-800 rounded-[2rem] shadow-2xl w-full max-w-sm flex flex-col animate-in zoom-in-95 duration-200">
            <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-black text-slate-900 dark:text-white">નવી ફી નોંધો</h3>
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-0.5">{activePaymentStudent.fullNameGu}</p>
              </div>
              <button onClick={() => setIsPaymentModalOpen(false)} className="p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full">
                <X className="w-5 h-5 text-slate-500" />
              </button>
            </div>
            
            <form onSubmit={handleSavePayment} className="p-5 space-y-5">
              <div>
                <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5 ml-1">ચૂકવેલ રકમ (₹) *</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <IndianRupee className="h-4 w-4 text-slate-400" />
                  </div>
                  <input type="number" name="amount" required min="1" placeholder="ઉદા. 2000"
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white rounded-xl focus:ring-2 focus:ring-[#FFAF03] outline-none text-lg font-bold" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5 ml-1">પેમેન્ટની રીત *</label>
                <select name="method" required
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white rounded-xl focus:ring-2 focus:ring-[#FFAF03] outline-none font-medium">
                  <option value="Cash">રોકડ (Cash)</option>
                  <option value="Online">ઓનલાઈન (Online)</option>
                </select>
              </div>
              
              <div>
                <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5 ml-1">જમા તારીખ *</label>
                <input type="date" name="date" required
                  defaultValue={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white rounded-xl focus:ring-2 focus:ring-[#FFAF03] outline-none" />
              </div>

              <div className="pt-2 flex justify-end gap-3">
                <button type="button" onClick={() => setIsPaymentModalOpen(false)}
                  className="px-4 py-2.5 text-sm font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl">
                  રદ
                </button>
                <button type="submit"
                  className="px-5 py-2.5 text-sm bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white font-bold rounded-xl shadow-lg flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" /> ફી જમા કરો
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{__html:`
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background-color: #cbd5e1; border-radius: 20px; }
        .dark .custom-scrollbar::-webkit-scrollbar-thumb { background-color: #334155; }
      `}} />
    </div>
  );
}