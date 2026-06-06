import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import './AdmissionsPage.css';

// ─── Types ───────────────────────────────────────────────────────────
interface FormData {
  fullName: string;
  dob: string;
  gender: string;
  mobile: string;
  email: string;
  programme: string;
  category: string;
  income: string;
  address: string;
}

interface MeritData {
  boardName: string;
  yearOfPassing: string;
  subjects: string;
  totalObtained: string;
  totalMax: string;
  entranceScore: string;
}

interface CounsellingData {
  date: string;
  session: string;
}

interface FeeData {
  paymentMethod: string;
  declared: boolean;
}

interface UploadedDocs {
  [key: string]: string | null;
}

// ─── Step Config ─────────────────────────────────────────────────────
const STEPS = [
  { step: '01', title: 'Online Application', icon: '📝' },
  { step: '02', title: 'Document Submission', icon: '📂' },
  { step: '03', title: 'Merit Evaluation', icon: '📊' },
  { step: '04', title: 'Counselling & Allotment', icon: '🤝' },
  { step: '05', title: 'Fee Payment & Enrolment', icon: '🎓' },
];

const PROGRAMMES = [
  'B.Com Co-operation',
  'B.Com Finance & Taxation',
  'B.Com Logistics',
  'BA English',
  'BBA',
  'BCA',
  'BSW',
  'BTTM',
  'M.Com Finance & Taxation',
  'MSc Computer Science',
  'MA English',
  'MA HRM',
  'MSW',
];

const DOCUMENTS = [
  { key: 'mark10', icon: '📄', name: '10th Mark Sheet', desc: 'PDF or Image accepted', accept: 'image/*,.pdf' },
  { key: 'mark12', icon: '📄', name: '12th / Plus Two Mark Sheet', desc: 'PDF or Image accepted', accept: 'image/*,.pdf' },
  { key: 'tc', icon: '📃', name: 'Transfer Certificate', desc: 'PDF only', accept: '.pdf' },
  { key: 'community', icon: '🏛️', name: 'Community Certificate', desc: 'PDF only', accept: '.pdf' },
  { key: 'income', icon: '💰', name: 'Income Certificate', desc: 'PDF only', accept: '.pdf' },
  { key: 'photo', icon: '🖼️', name: 'Passport Photo', desc: 'JPG or PNG (max 200KB)', accept: 'image/*' },
];

const COUNSELLING_DATES = [
  { day: '14', month: 'July', year: '2026', value: '2026-07-14' },
  { day: '16', month: 'July', year: '2026', value: '2026-07-16' },
  { day: '18', month: 'July', year: '2026', value: '2026-07-18' },
];

// ─── CheckSVG ─────────────────────────────────────────────────────────
function CheckSVG({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

// ─── Main Component ───────────────────────────────────────────────────
export default function AdmissionsPage() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [refNum] = useState(() => Math.floor(10000000 + Math.random() * 90000000).toString());
  const mainRef = useRef<HTMLDivElement>(null);

  // Form states
  const [formData, setFormData] = useState<FormData>({
    fullName: '', dob: '', gender: '', mobile: '', email: '',
    programme: '', category: '', income: '', address: '',
  });
  const [uploadedDocs, setUploadedDocs] = useState<UploadedDocs>({});
  const [meritData, setMeritData] = useState<MeritData>({
    boardName: '', yearOfPassing: '', subjects: '', totalObtained: '', totalMax: '', entranceScore: '',
  });
  const [counsellingData, setCounsellingData] = useState<CounsellingData>({ date: '', session: '' });
  const [feeData, setFeeData] = useState<FeeData>({ paymentMethod: 'online', declared: false });

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const scrollToTop = () => {
    mainRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const goNext = () => {
    if (currentStep < 4) {
      setCurrentStep((s) => s + 1);
      setTimeout(scrollToTop, 50);
    }
  };

  const goPrev = () => {
    if (currentStep > 0) {
      setCurrentStep((s) => s - 1);
      setTimeout(scrollToTop, 50);
    }
  };

  const handleSubmit = () => {
    if (!feeData.declared) {
      alert('Please accept the declaration to submit your application.');
      return;
    }
    setSubmitted(true);
  };

  const pct = (() => {
    const obt = parseFloat(meritData.totalObtained);
    const max = parseFloat(meritData.totalMax);
    if (!isNaN(obt) && !isNaN(max) && max > 0) return Math.min(100, (obt / max) * 100);
    return 0;
  })();

  const slideVariants = {
    initial: (dir: number) => ({ opacity: 0, x: dir > 0 ? 40 : -40 }),
    animate: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -40 : 40 }),
  };

  // ─── Step 1: Online Application ──────────────────────────────────
  const renderStep1 = () => (
    <div>
      <div className="adm-form-grid">
        <div className="adm-field">
          <label className="adm-label">Full Name<span>*</span></label>
          <input className="adm-input" type="text" placeholder="As per 10th certificate" value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} />
        </div>
        <div className="adm-field">
          <label className="adm-label">Date of Birth<span>*</span></label>
          <input className="adm-input" type="date" value={formData.dob}
            onChange={(e) => setFormData({ ...formData, dob: e.target.value })} />
        </div>
        <div className="adm-field">
          <label className="adm-label">Gender<span>*</span></label>
          <select className="adm-select" value={formData.gender}
            onChange={(e) => setFormData({ ...formData, gender: e.target.value })}>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="adm-field">
          <label className="adm-label">Mobile Number<span>*</span></label>
          <input className="adm-input" type="tel" placeholder="+91 00000 00000" value={formData.mobile}
            onChange={(e) => setFormData({ ...formData, mobile: e.target.value })} />
        </div>
        <div className="adm-field">
          <label className="adm-label">Email Address<span>*</span></label>
          <input className="adm-input" type="email" placeholder="yourname@email.com" value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
        </div>
        <div className="adm-field">
          <label className="adm-label">Programme Applying For<span>*</span></label>
          <select className="adm-select" value={formData.programme}
            onChange={(e) => setFormData({ ...formData, programme: e.target.value })}>
            <option value="">Select Programme</option>
            {PROGRAMMES.map((p) => <option key={p} value={p}>{p}</option>)}
          </select>
        </div>
        <div className="adm-field">
          <label className="adm-label">Category<span>*</span></label>
          <select className="adm-select" value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}>
            <option value="">Select Category</option>
            <option value="General">General</option>
            <option value="OBC">OBC</option>
            <option value="SC">SC</option>
            <option value="ST">ST</option>
          </select>
        </div>
        <div className="adm-field">
          <label className="adm-label">Annual Family Income</label>
          <select className="adm-select" value={formData.income}
            onChange={(e) => setFormData({ ...formData, income: e.target.value })}>
            <option value="">Select Income Range</option>
            <option value="below1">Below ₹1,00,000</option>
            <option value="1to2.5">₹1,00,000 – ₹2,50,000</option>
            <option value="2.5to5">₹2,50,000 – ₹5,00,000</option>
            <option value="above5">Above ₹5,00,000</option>
          </select>
        </div>
        <div className="adm-field adm-field--full">
          <label className="adm-label">Address<span>*</span></label>
          <textarea className="adm-textarea" placeholder="Door No., Street, City, District, State – PIN Code"
            value={formData.address}
            onChange={(e) => setFormData({ ...formData, address: e.target.value })} />
        </div>
      </div>
    </div>
  );

  // ─── Step 2: Document Submission ─────────────────────────────────
  const renderStep2 = () => (
    <div>
      <div className="adm-merit-info" style={{ marginBottom: 24 }}>
        <div className="adm-merit-info-icon">📋</div>
        <div className="adm-merit-info-text">
          <h4>Document Requirements</h4>
          <p>Upload certified copies of all required documents. Accepted formats: PDF, JPG, PNG. Maximum file size: 2MB per document.</p>
        </div>
      </div>
      <div className="adm-doc-grid">
        {DOCUMENTS.map((doc) => {
          const isUploaded = !!uploadedDocs[doc.key];
          return (
            <div key={doc.key} className={`adm-doc-box${isUploaded ? ' uploaded' : ''}`}>
              <div className="adm-doc-icon">{doc.icon}</div>
              <div className="adm-doc-name">{doc.name}</div>
              <div className="adm-doc-desc">{doc.desc}</div>
              <label className="adm-doc-file-label">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" />
                </svg>
                {isUploaded ? 'Change File' : 'Choose File'}
                <input type="file" accept={doc.accept}
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) setUploadedDocs((prev) => ({ ...prev, [doc.key]: file.name }));
                  }} />
              </label>
              <span className={`adm-doc-status ${isUploaded ? 'uploaded' : 'not-uploaded'}`}>
                {isUploaded ? `✓ ${uploadedDocs[doc.key]}` : 'Not Uploaded'}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );

  // ─── Step 3: Merit Evaluation ─────────────────────────────────────
  const renderStep3 = () => (
    <div>
      <div className="adm-merit-info">
        <div className="adm-merit-info-icon">ℹ️</div>
        <div className="adm-merit-info-text">
          <h4>How Merit is Calculated</h4>
          <p>Admission is based on your 12th standard aggregate percentage. For Science programmes, relevant subject scores are considered. Entrance exam scores (KEAM/KMAT) may provide additional weightage for certain programmes.</p>
        </div>
      </div>
      <div className="adm-form-grid">
        <div className="adm-field">
          <label className="adm-label">12th Board Name<span>*</span></label>
          <input className="adm-input" type="text" placeholder="e.g. Kerala HSE, CBSE, ISC" value={meritData.boardName}
            onChange={(e) => setMeritData({ ...meritData, boardName: e.target.value })} />
        </div>
        <div className="adm-field">
          <label className="adm-label">Year of Passing<span>*</span></label>
          <select className="adm-select" value={meritData.yearOfPassing}
            onChange={(e) => setMeritData({ ...meritData, yearOfPassing: e.target.value })}>
            <option value="">Select Year</option>
            {[2026, 2025, 2024, 2023, 2022, 2021, 2020].map((y) => (
              <option key={y} value={y}>{y}</option>
            ))}
          </select>
        </div>
        <div className="adm-field adm-field--full">
          <label className="adm-label">Subject Combination<span>*</span></label>
          <input className="adm-input" type="text" placeholder="e.g. Commerce with Computer Science" value={meritData.subjects}
            onChange={(e) => setMeritData({ ...meritData, subjects: e.target.value })} />
        </div>
        <div className="adm-field">
          <label className="adm-label">Total Marks Obtained<span>*</span></label>
          <input className="adm-input" type="number" placeholder="e.g. 920" value={meritData.totalObtained}
            onChange={(e) => setMeritData({ ...meritData, totalObtained: e.target.value })} />
        </div>
        <div className="adm-field">
          <label className="adm-label">Total Maximum Marks<span>*</span></label>
          <input className="adm-input" type="number" placeholder="e.g. 1000" value={meritData.totalMax}
            onChange={(e) => setMeritData({ ...meritData, totalMax: e.target.value })} />
        </div>
        <div className="adm-field adm-field--full">
          <label className="adm-label">Percentage</label>
          <input className="adm-input" type="text" readOnly value={pct > 0 ? `${pct.toFixed(2)}%` : ''} placeholder="Auto-calculated" />
        </div>
        <div className="adm-field adm-field--full">
          <label className="adm-label">Entrance Exam Score (Optional)</label>
          <input className="adm-input" type="text" placeholder="e.g. KEAM Rank: 1245 / KMAT Score: 78" value={meritData.entranceScore}
            onChange={(e) => setMeritData({ ...meritData, entranceScore: e.target.value })} />
        </div>
      </div>
      {pct > 0 && (
        <div className="adm-pct-bar-wrap">
          <div className="adm-pct-bar-label">
            <span>Calculated Percentage</span>
            <span className="adm-pct-value">{pct.toFixed(2)}%</span>
          </div>
          <div className="adm-pct-bar-track">
            <motion.div
              className="adm-pct-bar-fill"
              initial={{ width: 0 }}
              animate={{ width: `${pct}%` }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            />
          </div>
        </div>
      )}
    </div>
  );

  // ─── Step 4: Counselling & Allotment ─────────────────────────────
  const renderStep4 = () => (
    <div>
      <p style={{ fontSize: 14, color: 'var(--text-secondary)', marginBottom: 20, lineHeight: 1.7 }}>
        Select your preferred counselling date and session. Attendance is mandatory for seat allotment. Bring all original documents to the counselling session.
      </p>
      <label className="adm-label" style={{ marginBottom: 12, display: 'block' }}>Preferred Counselling Date<span style={{ color: '#e53e3e' }}>*</span></label>
      <div className="adm-date-cards">
        {COUNSELLING_DATES.map((d) => (
          <div key={d.value} className={`adm-date-card${counsellingData.date === d.value ? ' selected' : ''}`}
            onClick={() => setCounsellingData({ ...counsellingData, date: d.value })}>
            <div className="adm-date-card-day">{d.day}</div>
            <div className="adm-date-card-month">{d.month}</div>
            <div className="adm-date-card-year">{d.year}</div>
          </div>
        ))}
      </div>
      <label className="adm-label" style={{ marginBottom: 12, display: 'block' }}>Preferred Session<span style={{ color: '#e53e3e' }}>*</span></label>
      <div className="adm-session-row">
        {[
          { value: 'morning', icon: '🌅', label: 'Morning Session', time: '10:00 AM – 1:00 PM' },
          { value: 'afternoon', icon: '☀️', label: 'Afternoon Session', time: '2:00 PM – 5:00 PM' },
        ].map((s) => (
          <div key={s.value} className={`adm-session-card${counsellingData.session === s.value ? ' selected' : ''}`}
            onClick={() => setCounsellingData({ ...counsellingData, session: s.value })}>
            <div className="adm-session-icon">{s.icon}</div>
            <div>
              <div className="adm-session-label">{s.label}</div>
              <div className="adm-session-time">{s.time}</div>
            </div>
          </div>
        ))}
      </div>
      <label className="adm-label" style={{ marginBottom: 12, display: 'block' }}>Documents to Bring</label>
      <div className="adm-bring-cards">
        {[
          { icon: '📄', text: 'All original mark sheets (10th & 12th)' },
          { icon: '🏛️', text: 'Community Certificate (original)' },
          { icon: '💰', text: 'Income Certificate (original)' },
          { icon: '📃', text: 'Transfer Certificate from previous institution' },
          { icon: '🖼️', text: '4 passport-size photographs (recent)' },
          { icon: '🪪', text: 'Government-issued ID proof (Aadhaar / Voter ID)' },
        ].map((item, i) => (
          <div key={i} className="adm-bring-card">
            <div className="adm-bring-card-icon">{item.icon}</div>
            <div className="adm-bring-card-text">{item.text}</div>
          </div>
        ))}
      </div>
      <div className="adm-alert">
        <div className="adm-alert-icon">⚠️</div>
        <div>
          <h4>Important Notes</h4>
          <ul>
            <li>Late arrivals will not be accommodated for counselling. Please arrive 15 minutes early.</li>
            <li>Original documents must be produced. Photocopies alone will not be accepted.</li>
            <li>Seat allotment is strictly based on merit rank and programme availability.</li>
            <li>Once a seat is allotted, it cannot be changed during the same counselling round.</li>
          </ul>
        </div>
      </div>
    </div>
  );

  // ─── Step 5: Fee Payment & Enrolment ────────────────────────────
  const renderStep5 = () => (
    <div>
      <table className="adm-fee-table">
        <thead>
          <tr>
            <th>Fee Component</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {[
            { label: 'Application Fee', amount: '₹500' },
            { label: 'Tuition Fee', amount: 'As per programme' },
            { label: 'University Affiliation Fee', amount: '₹2,500' },
            { label: 'Special Fee (Library, Lab, Sports)', amount: '₹1,200' },
          ].map((row) => (
            <tr key={row.label}>
              <td>{row.label}</td>
              <td>{row.amount}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Total Payable Now (Excluding Tuition)</td>
            <td>₹4,200 + Tuition</td>
          </tr>
        </tfoot>
      </table>
      <label className="adm-label" style={{ marginBottom: 12, display: 'block' }}>Payment Method</label>
      <div className="adm-pay-methods">
        {[
          { value: 'online', icon: '💳', label: 'Online Payment', desc: 'UPI / Net Banking / Cards' },
          { value: 'bank', icon: '🏦', label: 'Bank Transfer', desc: 'NEFT / RTGS to college account' },
          { value: 'dd', icon: '📑', label: 'Demand Draft', desc: 'In favour of "JPM College"' },
        ].map((m) => (
          <div key={m.value} className={`adm-pay-card${feeData.paymentMethod === m.value ? ' selected' : ''}`}
            onClick={() => setFeeData({ ...feeData, paymentMethod: m.value })}>
            <div className="adm-pay-card-icon">{m.icon}</div>
            <div className="adm-pay-card-label">{m.label}</div>
            <div className="adm-pay-card-desc">{m.desc}</div>
          </div>
        ))}
      </div>
      <label className="adm-declaration" onClick={() => setFeeData((f) => ({ ...f, declared: !f.declared }))}>
        <input type="checkbox" checked={feeData.declared} onChange={() => {}} />
        <span className="adm-declaration-text">
          I hereby declare that all information provided in this application is true and correct to the best of my knowledge.
          I understand that any false information may result in the cancellation of my admission without prior notice.
          I agree to abide by all rules and regulations of <strong>JPM Arts &amp; Science College</strong>.
        </span>
      </label>
    </div>
  );

  // ─── Render each step's body ──────────────────────────────────────
  const stepRenderers = [renderStep1, renderStep2, renderStep3, renderStep4, renderStep5];

  // ─── Success Modal ────────────────────────────────────────────────
  const SuccessModal = () => (
    <motion.div
      className="adm-success-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <motion.div
        className="adm-success-modal"
        initial={{ opacity: 0, scale: 0.85, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className="adm-success-check"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 260, damping: 20 }}
        >
          <CheckSVG size={36} />
        </motion.div>
        <h2 className="adm-success-title">Application Submitted!</h2>
        <p className="adm-success-ref">Your Application Reference Number</p>
        <p className="adm-success-ref-num">JPM-{refNum}</p>
        <div className="adm-success-next">
          <h4>What happens next?</h4>
          <ul>
            <li>You will receive an acknowledgement SMS and email within 24 hours.</li>
            <li>Our admissions team will verify your documents within 3–5 working days.</li>
            <li>Shortlisted candidates will be notified for the counselling session.</li>
            <li>Bring all original documents on the counselling date for verification.</li>
          </ul>
        </div>
        <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}
          onClick={() => navigate('/')}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
          Back to Home
        </button>
      </motion.div>
    </motion.div>
  );

  return (
    <>
      <Navbar />
      <div className="adm-page" ref={mainRef}>
        {/* ─── Hero ─────────────────────────────────────────────── */}
        <section className="adm-hero">
          <div className="adm-hero-blob adm-hero-blob--1" />
          <div className="adm-hero-blob adm-hero-blob--2" />
          <div className="container">
            <motion.div
              className="adm-hero-content"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
            >
              <button className="adm-back-btn" onClick={() => navigate('/')}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 12H5M12 5l-7 7 7 7" />
                </svg>
                Back to Home
              </button>
              <div className="adm-hero-tag">Admissions 2026–27</div>
              <h1 className="adm-hero-title">Start Your Application</h1>
              <p className="adm-hero-subtitle">
                Seats are limited for the 2026–27 academic year. Complete your online application now to secure your spot at JPM Arts &amp; Science College.
              </p>
              <div className="adm-hero-chips">
                {['NAAC B++ Accredited', 'MG University Affiliated', 'Govt. Aided'].map((chip) => (
                  <span key={chip} className="adm-hero-chip">{chip}</span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ─── Body ─────────────────────────────────────────────── */}
        <div className="adm-body">
          <div className="container">
            <div className="adm-layout">
              {/* Left — Stepper + Step Content */}
              <div>
                {/* Step Tracker */}
                <motion.div
                  className="adm-tracker"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <div className="adm-tracker-inner">
                    {STEPS.map((s, i) => {
                      const status = i < currentStep ? 'completed' : i === currentStep ? 'active' : '';
                      return (
                        <div
                          key={s.step}
                          className={`adm-step-item ${status}`}
                          onClick={() => i <= currentStep && setCurrentStep(i)}
                        >
                          <div className="adm-step-circle">
                            {i < currentStep ? <CheckSVG size={15} /> : s.step}
                          </div>
                          <div className="adm-step-title">{s.title}</div>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>

                {/* Step Panel */}
                <AnimatePresence mode="wait" custom={currentStep}>
                  <motion.div
                    key={currentStep}
                    className="adm-step-card"
                    custom={currentStep}
                    variants={slideVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.32, ease: [0.4, 0, 0.2, 1] }}
                  >
                    {/* Card Header */}
                    <div className="adm-step-card-header">
                      <div className="adm-step-card-icon">{STEPS[currentStep].icon}</div>
                      <div>
                        <div className="adm-step-card-num">Step {STEPS[currentStep].step} of 05</div>
                        <div className="adm-step-card-title">{STEPS[currentStep].title}</div>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="adm-step-body">
                      {stepRenderers[currentStep]()}

                      {/* Navigation buttons */}
                      <div className="adm-step-actions">
                        {currentStep > 0 && (
                          <button className="adm-btn-prev" onClick={goPrev}>
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M19 12H5M12 5l-7 7 7 7" />
                            </svg>
                            Previous
                          </button>
                        )}
                        {currentStep < 3 && (
                          <button className="btn btn-primary" onClick={goNext}>
                            Save &amp; Continue
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                          </button>
                        )}
                        {currentStep === 3 && (
                          <button className="btn btn-primary" onClick={goNext}>
                            Confirm Slot
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                          </button>
                        )}
                        {currentStep === 4 && (
                          <button
                            className="btn btn-gold"
                            onClick={handleSubmit}
                            style={{ opacity: feeData.declared ? 1 : 0.65 }}
                          >
                            🎓 Submit Application
                          </button>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Right — Sidebar */}
              <aside className="adm-sidebar">
                {/* Contact Card */}
                <div className="adm-sidebar-card">
                  <div className="adm-sidebar-card-header">
                    <h3>📞 Admissions Contact</h3>
                  </div>
                  <div className="adm-sidebar-card-body">
                    <div className="adm-contact-item">
                      <div className="adm-contact-icon">✉️</div>
                      <div>
                        <div className="adm-contact-label">Email</div>
                        <div className="adm-contact-value">admissions@jpmcollege.ac.in</div>
                      </div>
                    </div>
                    <div className="adm-contact-item">
                      <div className="adm-contact-icon">📞</div>
                      <div>
                        <div className="adm-contact-label">Phone</div>
                        <div className="adm-contact-value">04825 – 234 567</div>
                      </div>
                    </div>
                    <div className="adm-contact-item">
                      <div className="adm-contact-icon">🕘</div>
                      <div>
                        <div className="adm-contact-label">Office Hours</div>
                        <div className="adm-contact-value">Mon–Fri, 9 AM – 5 PM</div>
                      </div>
                    </div>
                  </div>
                  <div className="adm-helpline">
                    <div className="adm-helpline-icon">🆘</div>
                    <div>
                      <div className="adm-helpline-label">Admissions Helpline</div>
                      <div className="adm-helpline-num">1800-XXX-XXXX (Toll Free)</div>
                    </div>
                  </div>
                </div>

                {/* Important Dates */}
                <div className="adm-sidebar-card">
                  <div className="adm-sidebar-card-header">
                    <h3>📅 Important Dates</h3>
                  </div>
                  <div className="adm-sidebar-card-body">
                    <div className="adm-dates-list">
                      {[
                        { label: 'Application Opens', val: '1 June 2026' },
                        { label: 'Last Date to Apply', val: '30 June 2026', urgent: true },
                        { label: 'Merit List Publication', val: '5 July 2026' },
                        { label: 'Counselling Starts', val: '14 July 2026' },
                        { label: 'Enrolment Deadline', val: '25 July 2026', urgent: true },
                        { label: 'Classes Commence', val: '1 August 2026' },
                      ].map((d) => (
                        <div key={d.label} className={`adm-date-item${d.urgent ? ' urgent' : ''}`}>
                          <span className="adm-date-item-label">{d.label}</span>
                          <span className="adm-date-item-val">{d.val}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Download Prospectus */}
                <div className="adm-sidebar-card">
                  <div className="adm-sidebar-card-header">
                    <h3>📖 Prospectus</h3>
                  </div>
                  <div className="adm-sidebar-card-body">
                    <p style={{ fontSize: 13, color: 'var(--text-secondary)', marginBottom: 14, lineHeight: 1.6 }}>
                      Download the college prospectus for detailed programme information, fee structure, and facilities.
                    </p>
                    <button className="adm-prospect-btn">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" />
                      </svg>
                      Download Prospectus 2026–27
                    </button>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>

        <Footer />
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {submitted && <SuccessModal />}
      </AnimatePresence>
    </>
  );
}
