import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Toast configuration
export const toastConfig = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: false,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
  style: {
    backgroundColor: '#ffffff',
    color: '#1f2937',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    padding: '16px 20px',
    marginBottom: '16px',
    borderLeft: '4px solid #4f46e5',
    transition: 'all 0.3s ease',
  },
  bodyStyle: {
    margin: '0',
    padding: '0',
    fontSize: '14px',
    lineHeight: '1.5',
  },
  progressStyle: {
    background: 'linear-gradient(to right, #4f46e5, #7c3aed)',
    height: '3px',
  },
};

// Custom toast functions
export const showSuccessToast = (message) => {
  toast.success(message, {
    ...toastConfig,
    icon: '✅',
    style: {
      ...toastConfig.style,
      borderLeft: '4px solid #10b981',
    },
  });};

export const showErrorToast = (message) => {
  toast.error(message, {
    ...toastConfig,
    icon: '❌',
    style: {
      ...toastConfig.style,
      borderLeft: '4px solid #ef4444',
    },
  });
};

export default toast;
