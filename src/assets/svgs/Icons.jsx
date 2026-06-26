export const LogoIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect width="32" height="32" rx="8" fill="url(#logo-grad)"/>
    <path d="M8 16 L16 8 L24 16 L16 24 Z" fill="none" stroke="white" strokeWidth="1.5"/>
    <circle cx="16" cy="16" r="3.5" fill="white"/>
    <defs>
      <linearGradient id="logo-grad" x1="0" y1="0" x2="32" y2="32">
        <stop stopColor="#00D4FF"/>
        <stop offset="1" stopColor="#7C3AED"/>
      </linearGradient>
    </defs>
  </svg>
);

export const PipelineIcon = ({ color = "#00D4FF" }) => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="8" cy="20" r="5" stroke={color} strokeWidth="1.8" fill="none"/>
    <circle cx="32" cy="20" r="5" stroke={color} strokeWidth="1.8" fill="none"/>
    <path d="M13 20 H27" stroke={color} strokeWidth="1.8" strokeDasharray="3 2"/>
    <circle cx="20" cy="12" r="4" stroke={color} strokeWidth="1.8" fill="none" opacity="0.6"/>
    <path d="M20 16 V20" stroke={color} strokeWidth="1.5" opacity="0.6"/>
    <circle cx="20" cy="28" r="4" stroke={color} strokeWidth="1.8" fill="none" opacity="0.4"/>
    <path d="M20 20 V24" stroke={color} strokeWidth="1.5" opacity="0.4"/>
  </svg>
);

export const AIIcon = ({ color = "#7C3AED" }) => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <polygon points="20,4 36,12 36,28 20,36 4,28 4,12" stroke={color} strokeWidth="1.8" fill="none"/>
    <circle cx="20" cy="20" r="6" fill={color} opacity="0.2"/>
    <circle cx="20" cy="20" r="3" fill={color}/>
    <path d="M20 14 V17M20 23 V26M14 20 H17M23 20 H26" stroke={color} strokeWidth="1.5"/>
  </svg>
);

export const MeshIcon = ({ color = "#10B981" }) => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="8"  cy="8"  r="3.5" stroke={color} strokeWidth="1.8" fill="none"/>
    <circle cx="32" cy="8"  r="3.5" stroke={color} strokeWidth="1.8" fill="none"/>
    <circle cx="8"  cy="32" r="3.5" stroke={color} strokeWidth="1.8" fill="none"/>
    <circle cx="32" cy="32" r="3.5" stroke={color} strokeWidth="1.8" fill="none"/>
    <circle cx="20" cy="20" r="4"   stroke={color} strokeWidth="1.8" fill="none"/>
    <path d="M11 8 H17M23 8 H29M11 32 H17M23 32 H29" stroke={color} strokeWidth="1.4" opacity="0.6"/>
    <path d="M8 11 V17M8 23 V29M32 11 V17M32 23 V29" stroke={color} strokeWidth="1.4" opacity="0.6"/>
    <path d="M11 11 L17 17M23 23 L29 29M29 11 L23 17M17 23 L11 29" stroke={color} strokeWidth="1.2" opacity="0.35"/>
  </svg>
);

export const MonitorIcon = ({ color = "#F59E0B" }) => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="5" y="8" width="30" height="20" rx="3" stroke={color} strokeWidth="1.8" fill="none"/>
    <path d="M13 28 L11 34M27 28 L29 34M8 34 H32" stroke={color} strokeWidth="1.5"/>
    <polyline points="9,22 14,18 18,20 23,14 28,17 31,15" stroke={color} strokeWidth="1.6" fill="none"/>
    <circle cx="23" cy="14" r="2.5" fill={color} opacity="0.8"/>
  </svg>
);

export const ShieldIcon = ({ color = "#EC4899" }) => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M20 4 L34 10 L34 22 C34 29 20 36 20 36 C20 36 6 29 6 22 L6 10 Z" stroke={color} strokeWidth="1.8" fill="none"/>
    <path d="M14 20 L18 24 L26 16" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="8" cy="8" r="7.5" stroke="#10B981" strokeWidth="1"/>
    <path d="M5 8.5L7 10.5L11 6" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const ChevronDown = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M4 6.5L9 11.5L14 6.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const StarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="#F59E0B" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M7 1L8.73 5.13H13.19L9.73 7.8L11.09 12L7 9.27L2.91 12L4.27 7.8L0.81 5.13H5.27L7 1Z"/>
  </svg>
);

export const MenuIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M3 6H19M3 11H19M3 16H19" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);

export const CloseIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M5 5L17 17M17 5L5 17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);
