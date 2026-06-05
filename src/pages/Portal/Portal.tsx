import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { User, Users, Briefcase, Lock, ArrowLeft, ArrowRight, Building, X, Send, Eye, EyeOff, GraduationCap } from 'lucide-react';
import './Portal.css';
import { AnimatePresence, motion } from 'framer-motion';

const roles = [
  { id: 'student', title: 'Student', icon: <User size={24} />, desc: 'Access your coursework, grades, and campus resources.' },
  { id: 'parent', title: 'Parent', icon: <Users size={24} />, desc: 'Track academic progress, fee payments, and announcements.' },
  { id: 'staff', title: 'Staff', icon: <Briefcase size={24} />, desc: 'Manage classes, student records, and administrative tools.' },
  { id: 'alumni', title: 'Alumni', icon: <GraduationCap size={24} />, desc: 'Connect with fellow graduates and access transcripts.' },
];

export default function Portal() {
  const { role } = useParams<{ role: string }>();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showSupport, setShowSupport] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [issueType, setIssueType] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [supportContactMethod, setSupportContactMethod] = useState<'email' | 'phone'>('email');
  const [showPassword, setShowPassword] = useState(false);

  const issueOptions = [
    { value: 'access', label: 'Account Access / Login Issue' },
    { value: 'bug', label: 'Report a Bug' },
    { value: 'general', label: 'General Inquiry' }
  ];

  const getRoleDetails = () => {
    switch (role) {
      case 'student':
        return { 
          title: 'Student Portal', 
          subtitle: 'Access your coursework, grades, and campus resources', 
          icon: <User size={32} />, 
          label: 'Email ID', 
          placeholder: 'e.g. student@jpmcollege.ac.in',
          type: 'email'
        };
      case 'parent':
        return { 
          title: 'Parent Portal', 
          subtitle: 'Track academic progress, fee payments, and announcements', 
          icon: <Users size={32} />, 
          label: 'Registered Mobile Number', 
          placeholder: '+91 00000 00000' 
        };
      case 'staff':
        return { 
          title: 'Faculty & Staff Portal', 
          subtitle: 'Manage classes, student records, and administrative tools', 
          icon: <Briefcase size={32} />, 
          label: 'Employee ID', 
          placeholder: 'e.g. EMP-1042' 
        };
      case 'alumni':
        return { 
          title: 'Alumni Portal', 
          subtitle: 'Connect with fellow graduates, access transcripts, and view alumni events', 
          icon: <GraduationCap size={32} />, 
          label: 'Registered Email ID', 
          placeholder: 'e.g. alumni@example.com',
          type: 'email'
        };
      default:
        return null;
    }
  };

  const details = getRoleDetails();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert('Login logic will be connected to Supabase');
    }, 1200);
  };

  return (
    <div className="portal">
      <div className="portal__left">
        {!role ? (
          <div className="portal__content portal__content--roles">
            <div className="portal__header">
              <h1 className="portal__title">Welcome to JPM</h1>
              <p className="portal__subtitle">Please select your role to access your portal.</p>
            </div>
            
            <div className="portal__grid">
              {roles.map((r) => (
                <button
                  key={r.id}
                  className="portal-card"
                  onClick={() => navigate(`/portal/${r.id}`)}
                >
                  <div className="portal-card__icon">{r.icon}</div>
                  <div className="portal-card__body">
                    <h3 className="portal-card__title">{r.title}</h3>
                    <p className="portal-card__desc">{r.desc}</p>
                  </div>
                  <div className="portal-card__arrow">
                    <ArrowRight size={16} />
                  </div>
                </button>
              ))}
            </div>
            <button className="portal__main-back-btn" onClick={() => navigate('/')}>
              <ArrowLeft size={16} /> Back to Main Website
            </button>
          </div>
        ) : (
          <>
            <Link to="/portal" className="portal__back">
              <ArrowLeft size={16} /> Back to roles
            </Link>
            <div className="portal__content">
              <div className="portal__icon-wrapper">
                {details?.icon}
              </div>
              <h1 className="portal__title">{details?.title}</h1>
              <p className="portal__subtitle">{details?.subtitle}</p>

              <form className="portal__form" onSubmit={handleLogin}>
                <div className="portal__field">
                  <label>{details?.label}</label>
                  <input type={details?.type || (role === 'parent' ? 'tel' : 'text')} placeholder={details?.placeholder} required />
                </div>
                
                <div className="portal__field">
                  <label>Password</label>
                  <div className="portal__input-icon">
                    <Lock size={16} className="portal__input-icon-left" />
                    <input 
                      type={showPassword ? "text" : "password"} 
                      placeholder="Enter your password" 
                      required 
                    />
                    <button 
                      type="button" 
                      className="portal__input-icon-toggle" 
                      onClick={() => setShowPassword(!showPassword)}
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                </div>
                
                <div className="portal__options">
                  <label className="portal__checkbox">
                    <input type="checkbox" /> Remember me
                  </label>
                  <button type="button" className="portal__forgot" onClick={() => setShowForgotPassword(true)}>Forgot Password?</button>
                </div>

                <button type="submit" className="portal__submit btn btn-primary" disabled={loading}>
                  {loading ? 'Authenticating...' : 'Secure Login'}
                </button>
              </form>
              
              <div className="portal__footer">
                Need help accessing your account? <button type="button" className="portal__support-link" onClick={() => setShowSupport(true)}>Contact IT Support</button>
              </div>
            </div>
          </>
        )}
      </div>

      {/* IT Support Modal */}
      <AnimatePresence>
        {showSupport && (
          <div className="support-modal">
            <motion.div
              className="support-modal__backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowSupport(false)}
            />
            <motion.div
              className="support-modal__content"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
            >
              <button className="support-modal__close" onClick={() => setShowSupport(false)} aria-label="Close modal">
                <X size={20} />
              </button>

              <div className="support-modal__header">
                <h2 className="support-modal__title">IT Support Desk</h2>
                <p className="support-modal__subtitle">Raise a ticket to report an issue or request access.</p>
              </div>

              <form 
                className="support-modal__form" 
                onSubmit={(e) => { 
                  e.preventDefault(); 
                  alert('Support ticket raised successfully! Our team will contact you shortly.'); 
                  setShowSupport(false); 
                }}
              >
                <div className="portal__field" style={{ position: 'relative' }}>
                  <label>Issue Type</label>
                  <div 
                    className={`support-modal__custom-select ${isDropdownOpen ? 'open' : ''}`}
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  >
                    <span className={issueType ? 'selected' : 'placeholder'}>
                      {issueType ? issueOptions.find(o => o.value === issueType)?.label : 'Select an option'}
                    </span>
                    <div className="support-modal__custom-arrow"></div>
                  </div>
                  
                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div 
                        className="support-modal__custom-options"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.15 }}
                      >
                        {issueOptions.map((opt) => (
                          <div 
                            key={opt.value} 
                            className={`support-modal__custom-option ${issueType === opt.value ? 'active' : ''}`}
                            onClick={() => {
                              setIssueType(opt.value);
                              setIsDropdownOpen(false);
                            }}
                          >
                            {opt.label}
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="portal__field">
                  <label>Contact Details</label>
                  <div className="support-modal__radio-group">
                    <label className="support-modal__radio">
                      <input 
                        type="radio" 
                        name="contactMethod" 
                        checked={supportContactMethod === 'email'} 
                        onChange={() => setSupportContactMethod('email')} 
                      /> 
                      Email Address
                    </label>
                    <label className="support-modal__radio">
                      <input 
                        type="radio" 
                        name="contactMethod" 
                        checked={supportContactMethod === 'phone'} 
                        onChange={() => setSupportContactMethod('phone')} 
                      /> 
                      Phone Number
                    </label>
                  </div>
                  <input 
                    type={supportContactMethod === 'email' ? 'email' : 'tel'} 
                    placeholder={supportContactMethod === 'email' ? 'Enter your email' : 'Enter your mobile number'} 
                    required 
                  />
                </div>

                <div className="portal__field">
                  <label>Describe the Issue</label>
                  <textarea placeholder="Please provide details about the issue you are facing..." required rows={4} className="support-modal__textarea"></textarea>
                </div>

                <button type="submit" className="support-modal__submit btn btn-primary">
                  <Send size={16} /> Submit Ticket
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Forgot Password Modal */}
      <AnimatePresence>
        {showForgotPassword && (
          <div className="support-modal">
            <motion.div
              className="support-modal__backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowForgotPassword(false)}
            />
            <motion.div
              className="support-modal__content"
              style={{ maxWidth: '400px' }}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
            >
              <button className="support-modal__close" onClick={() => setShowForgotPassword(false)} aria-label="Close modal">
                <X size={20} />
              </button>

              <div className="support-modal__header">
                <h2 className="support-modal__title">Reset Password</h2>
                <p className="support-modal__subtitle">Enter your registered details to receive a password reset link.</p>
              </div>

              <form 
                className="support-modal__form" 
                onSubmit={(e) => { 
                  e.preventDefault(); 
                  alert('Password reset link sent! Please check your inbox or messages.'); 
                  setShowForgotPassword(false); 
                }}
              >
                <div className="portal__field">
                  <label>{details?.label}</label>
                  <input 
                    type={details?.type || (role === 'parent' ? 'tel' : 'text')} 
                    placeholder={details?.placeholder} 
                    required 
                  />
                </div>

                <button type="submit" className="support-modal__submit btn btn-primary">
                  <Send size={16} /> Send Reset Link
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className="portal__right">
        <div className="portal__right-content">
          <div className="portal__brand">
            <img src="/images/jpm_logo.png" alt="JPM College Logo" className="portal__logo" />
            <h2 className="portal__right-title">Excellence in Education</h2>
            <p className="portal__right-desc">
              Welcome to the digital campus of <span className="font-grople">JPM Arts and Science College</span>. 
              Our unified portal provides secure access to all your academic and administrative tools.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
