import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Users, Briefcase, X, ArrowRight, ArrowLeft, Lock } from 'lucide-react';
import './RoleModal.css';

interface RoleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const roles = [
  { id: 'student', title: 'Student', icon: <User size={24} />, desc: 'Access your coursework, grades, and campus resources.' },
  { id: 'parent', title: 'Parent', icon: <Users size={24} />, desc: 'Track academic progress, fee payments, and announcements.' },
  { id: 'staff', title: 'Staff', icon: <Briefcase size={24} />, desc: 'Manage classes, student records, and administrative tools.' },
];

export default function RoleModal({ isOpen, onClose }: RoleModalProps) {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  // Reset state when modal closes
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => setSelectedRole(null), 300);
    }
  }, [isOpen]);

  const handleClose = () => {
    onClose();
  };

  const getRoleFields = (roleId: string) => {
    switch (roleId) {
      case 'student': return { label: 'Admission Number', type: 'text', placeholder: 'e.g. JPM-2026-001', title: 'Student Portal' };
      case 'parent': return { label: 'Registered Mobile Number', type: 'tel', placeholder: '+91 00000 00000', title: 'Parent Portal' };
      case 'staff': return { label: 'Employee ID', type: 'text', placeholder: 'e.g. EMP-1042', title: 'Faculty & Staff Portal' };
      default: return { label: 'Username', type: 'text', placeholder: 'Enter username', title: 'Portal' };
    }
  };

  const activeRoleData = selectedRole ? getRoleFields(selectedRole) : null;
  const activeRoleObj = roles.find(r => r.id === selectedRole);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="role-modal">
          <motion.div
            className="role-modal__backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          />
          
          <motion.div
            className="role-modal__content"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            <button className="role-modal__close" onClick={handleClose} aria-label="Close modal">
              <X size={20} />
            </button>
            
            <AnimatePresence mode="wait">
              {!selectedRole ? (
                <motion.div 
                  key="role-selection"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="role-modal__header">
                    <h2 className="role-modal__title">Welcome to JPM</h2>
                    <p className="role-modal__subtitle">Please select your role to access your portal.</p>
                  </div>

                  <div className="role-modal__grid">
                    {roles.map((role, i) => (
                      <motion.button
                        key={role.id}
                        className="role-card"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05 + 0.1 }}
                        onClick={() => setSelectedRole(role.id)}
                      >
                        <div className="role-card__icon">{role.icon}</div>
                        <div className="role-card__body">
                          <h3 className="role-card__title">{role.title}</h3>
                          <p className="role-card__desc">{role.desc}</p>
                        </div>
                        <div className="role-card__arrow">
                          <ArrowRight size={16} />
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div 
                  key="login-form"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.2 }}
                >
                  <button className="role-modal__back" onClick={() => setSelectedRole(null)}>
                    <ArrowLeft size={16} /> Back to roles
                  </button>

                  <div className="role-modal__header" style={{ marginBottom: '24px' }}>
                    <div className="role-modal__header-icon">
                      {activeRoleObj?.icon}
                    </div>
                    <h2 className="role-modal__title">{activeRoleData?.title}</h2>
                    <p className="role-modal__subtitle">Enter your credentials to securely log in.</p>
                  </div>

                  <form className="role-modal__form" onSubmit={(e) => { e.preventDefault(); alert('Login logic to be implemented with Supabase'); }}>
                    <div className="role-modal__field">
                      <label>{activeRoleData?.label}</label>
                      <input type={activeRoleData?.type} placeholder={activeRoleData?.placeholder} required />
                    </div>
                    
                    <div className="role-modal__field">
                      <label>Password</label>
                      <div className="role-modal__input-icon">
                        <Lock size={16} />
                        <input type="password" placeholder="Enter your password" required />
                      </div>
                    </div>
                    
                    <div className="role-modal__options">
                      <label className="role-modal__checkbox">
                        <input type="checkbox" /> Remember me
                      </label>
                      <a href="#" className="role-modal__forgot">Forgot Password?</a>
                    </div>

                    <button type="submit" className="role-modal__submit btn btn-primary">
                      Log In securely
                    </button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
