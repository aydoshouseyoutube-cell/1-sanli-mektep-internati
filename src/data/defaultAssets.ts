// High-fidelity SVG illustration for the school building with Karakalpakstan state colors and school signage
export const DEFAULT_SCHOOL_PHOTO = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="1200" height="675">
  <defs>
    <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#1E3A8A"/>
      <stop offset="45%" stop-color="#3B82F6"/>
      <stop offset="85%" stop-color="#93C5FD"/>
      <stop offset="100%" stop-color="#E0F2FE"/>
    </linearGradient>
    <linearGradient id="buildingWall" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="70%" stop-color="#F1F5F9"/>
      <stop offset="100%" stop-color="#E2E8F0"/>
    </linearGradient>
    <linearGradient id="blueAccent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#1E40AF"/>
      <stop offset="50%" stop-color="#2563EB"/>
      <stop offset="100%" stop-color="#1D4ED8"/>
    </linearGradient>
    <linearGradient id="goldRoof" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#D97706"/>
      <stop offset="50%" stop-color="#F59E0B"/>
      <stop offset="100%" stop-color="#B45309"/>
    </linearGradient>
    <linearGradient id="glass" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#BAE6FD"/>
      <stop offset="50%" stop-color="#7DD3FC"/>
      <stop offset="100%" stop-color="#38BDF8"/>
    </linearGradient>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="115%">
      <feDropShadow dx="0" dy="12" stdDeviation="15" flood-color="#0F172A" flood-opacity="0.25"/>
    </filter>
  </defs>

  <!-- Sky -->
  <rect width="1200" height="675" fill="url(#skyGrad)"/>
  
  <!-- Clouds & Sun rays -->
  <circle cx="1020" cy="110" r="65" fill="#FEF08A" opacity="0.8"/>
  <ellipse cx="250" cy="120" rx="140" ry="40" fill="#FFFFFF" opacity="0.3"/>
  <ellipse cx="320" cy="105" rx="90" ry="35" fill="#FFFFFF" opacity="0.4"/>
  <ellipse cx="800" cy="140" rx="160" ry="45" fill="#FFFFFF" opacity="0.25"/>

  <!-- Ground & Forecourt -->
  <rect y="480" width="1200" height="195" fill="#E2E8F0"/>
  <path d="M 0 540 L 1200 540 L 1200 675 L 0 675 Z" fill="#CBD5E1"/>
  <!-- Paving lines -->
  <line x1="300" y1="540" x2="200" y2="675" stroke="#94A3B8" stroke-width="2"/>
  <line x1="600" y1="540" x2="600" y2="675" stroke="#94A3B8" stroke-width="2"/>
  <line x1="900" y1="540" x2="1000" y2="675" stroke="#94A3B8" stroke-width="2"/>

  <!-- Lawn & Flower beds -->
  <rect x="80" y="500" width="300" height="40" rx="6" fill="#15803D" opacity="0.85"/>
  <rect x="820" y="500" width="300" height="40" rx="6" fill="#15803D" opacity="0.85"/>
  <circle cx="120" cy="510" r="5" fill="#F43F5E"/>
  <circle cx="180" cy="515" r="5" fill="#FBBF24"/>
  <circle cx="260" cy="510" r="5" fill="#F43F5E"/>
  <circle cx="860" cy="512" r="5" fill="#FBBF24"/>
  <circle cx="940" cy="516" r="5" fill="#F43F5E"/>
  <circle cx="1020" cy="510" r="5" fill="#FBBF24"/>

  <!-- Left Building Wing -->
  <rect x="120" y="240" width="300" height="260" rx="4" fill="url(#buildingWall)" stroke="#CBD5E1" stroke-width="2" filter="url(#shadow)"/>
  <rect x="120" y="225" width="300" height="18" fill="url(#blueAccent)"/>
  <!-- Windows Wing 1 (3 floors x 4 windows) -->
  <g fill="url(#glass)" stroke="#94A3B8" stroke-width="2">
    <!-- Floor 3 -->
    <rect x="150" y="260" width="45" height="55" rx="3"/><rect x="220" y="260" width="45" height="55" rx="3"/><rect x="290" y="260" width="45" height="55" rx="3"/><rect x="360" y="260" width="45" height="55" rx="3"/>
    <!-- Floor 2 -->
    <rect x="150" y="340" width="45" height="55" rx="3"/><rect x="220" y="340" width="45" height="55" rx="3"/><rect x="290" y="340" width="45" height="55" rx="3"/><rect x="360" y="340" width="45" height="55" rx="3"/>
    <!-- Floor 1 -->
    <rect x="150" y="420" width="45" height="55" rx="3"/><rect x="220" y="420" width="45" height="55" rx="3"/><rect x="290" y="420" width="45" height="55" rx="3"/><rect x="360" y="420" width="45" height="55" rx="3"/>
  </g>

  <!-- Right Building Wing -->
  <rect x="780" y="240" width="300" height="260" rx="4" fill="url(#buildingWall)" stroke="#CBD5E1" stroke-width="2" filter="url(#shadow)"/>
  <rect x="780" y="225" width="300" height="18" fill="url(#blueAccent)"/>
  <!-- Windows Wing 2 -->
  <g fill="url(#glass)" stroke="#94A3B8" stroke-width="2">
    <!-- Floor 3 -->
    <rect x="810" y="260" width="45" height="55" rx="3"/><rect x="880" y="260" width="45" height="55" rx="3"/><rect x="950" y="260" width="45" height="55" rx="3"/><rect x="1020" y="260" width="45" height="55" rx="3"/>
    <!-- Floor 2 -->
    <rect x="810" y="340" width="45" height="55" rx="3"/><rect x="880" y="340" width="45" height="55" rx="3"/><rect x="950" y="340" width="45" height="55" rx="3"/><rect x="1020" y="340" width="45" height="55" rx="3"/>
    <!-- Floor 1 -->
    <rect x="810" y="420" width="45" height="55" rx="3"/><rect x="880" y="420" width="45" height="55" rx="3"/><rect x="950" y="420" width="45" height="55" rx="3"/><rect x="1020" y="420" width="45" height="55" rx="3"/>
  </g>

  <!-- Central Main Block (Taller & Grand) -->
  <rect x="380" y="180" width="440" height="320" rx="6" fill="#FFFFFF" stroke="#94A3B8" stroke-width="3" filter="url(#shadow)"/>
  
  <!-- Pediment / Roof Banner with Gold Trim -->
  <polygon points="370,180 600,120 830,180" fill="url(#blueAccent)"/>
  <polygon points="380,180 600,125 820,180" fill="url(#goldRoof)" opacity="0.3"/>
  
  <!-- School Signage Banner -->
  <rect x="410" y="195" width="380" height="42" rx="4" fill="url(#blueAccent)"/>
  <rect x="413" y="198" width="374" height="36" rx="3" fill="none" stroke="#F59E0B" stroke-width="1.5"/>
  <text x="600" y="222" font-family="Arial, sans-serif" font-weight="bold" font-size="14" fill="#FFFFFF" text-anchor="middle" letter-spacing="1">1-SANLÍ QÁNIGELESTIRILGEN MEKTEP-INTERNATÍ</text>

  <!-- State Emblem Plaque Placeholder -->
  <circle cx="600" cy="155" r="20" fill="#F59E0B" stroke="#FFFFFF" stroke-width="2"/>
  <circle cx="600" cy="155" r="16" fill="#1E3A8A"/>
  <polygon points="600,143 604,151 613,153 607,159 608,167 600,163 592,167 593,159 587,153 596,151" fill="#FBBF24"/>

  <!-- Grand Central Columns -->
  <rect x="430" y="250" width="24" height="230" fill="#F8FAFC" stroke="#CBD5E1"/>
  <rect x="510" y="250" width="24" height="230" fill="#F8FAFC" stroke="#CBD5E1"/>
  <rect x="666" y="250" width="24" height="230" fill="#F8FAFC" stroke="#CBD5E1"/>
  <rect x="746" y="250" width="24" height="230" fill="#F8FAFC" stroke="#CBD5E1"/>

  <!-- Upper Center Windows -->
  <g fill="url(#glass)" stroke="#64748B" stroke-width="2">
    <rect x="470" y="255" width="260" height="90" rx="4"/>
    <line x1="556" y1="255" x2="556" y2="345"/>
    <line x1="644" y1="255" x2="644" y2="345"/>
    <line x1="470" y1="300" x2="730" y2="300"/>
  </g>

  <!-- Main Entrance / Glass Portico -->
  <rect x="540" y="375" width="120" height="105" rx="3" fill="#0F172A"/>
  <rect x="545" y="380" width="52" height="98" fill="url(#glass)" opacity="0.9"/>
  <rect x="603" y="380" width="52" height="98" fill="url(#glass)" opacity="0.9"/>
  <circle cx="590" cy="435" r="3" fill="#F59E0B"/>
  <circle cx="610" cy="435" r="3" fill="#F59E0B"/>

  <!-- Entrance Steps -->
  <polygon points="500,480 700,480 740,510 460,510" fill="#CBD5E1" stroke="#94A3B8"/>
  <polygon points="480,495 720,495 735,510 465,510" fill="#E2E8F0"/>

  <!-- Flagpole & Karakalpakstan / Uzbekistan Flag Concept -->
  <line x1="280" y1="170" x2="280" y2="500" stroke="#64748B" stroke-width="4"/>
  <circle cx="280" cy="170" r="5" fill="#F59E0B"/>
  <!-- Flying flag -->
  <path d="M 282 175 Q 315 168 350 178 L 350 215 Q 315 205 282 215 Z" fill="#0284C7"/>
  <path d="M 282 215 Q 315 205 350 215 L 350 220 Q 315 210 282 220 Z" fill="#DC2626"/>
  <path d="M 282 220 Q 315 210 350 220 L 350 240 Q 315 230 282 240 Z" fill="#16A34A"/>
  <circle cx="300" cy="190" r="6" fill="#FBBF24"/>

  <!-- Landscaping Trees -->
  <!-- Tree Left -->
  <rect x="50" y="370" width="16" height="140" fill="#78350F"/>
  <ellipse cx="58" cy="350" rx="45" ry="70" fill="#15803D" opacity="0.9"/>
  <ellipse cx="65" cy="330" rx="35" ry="50" fill="#16A34A" opacity="0.9"/>
  <!-- Tree Right -->
  <rect x="1130" y="370" width="16" height="140" fill="#78350F"/>
  <ellipse cx="1138" cy="350" rx="45" ry="70" fill="#15803D" opacity="0.9"/>
  <ellipse cx="1130" cy="330" rx="35" ry="50" fill="#16A34A" opacity="0.9"/>
</svg>
`)}`;

// Professional teacher / director placeholder avatars
export const DEFAULT_DIRECTOR_PHOTO = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 450" width="400" height="450">
  <rect width="400" height="450" fill="#F1F5F9"/>
  <circle cx="200" cy="150" r="70" fill="#1E3A8A"/>
  <path d="M 100 370 C 100 270, 300 270, 300 370 Z" fill="#1E40AF"/>
  <rect x="175" y="270" width="50" height="100" fill="#FFFFFF"/>
  <polygon points="190,280 210,280 205,360 195,360" fill="#D97706"/>
  <text x="200" y="415" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#334155" text-anchor="middle">Mektep direktorı</text>
</svg>
`)}`;

export const DEFAULT_TEACHER_PHOTO = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 450" width="400" height="450">
  <rect width="400" height="450" fill="#F8FAFC"/>
  <circle cx="200" cy="150" r="65" fill="#3B82F6"/>
  <path d="M 110 380 C 110 280, 290 280, 290 380 Z" fill="#1D4ED8"/>
  <text x="200" y="420" font-family="Arial, sans-serif" font-size="16" fill="#64748B" text-anchor="middle">Ustaz fotosúwreti</text>
</svg>
`)}`;

export const DEFAULT_NEWS_PHOTO = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 380" width="600" height="380">
  <rect width="600" height="380" fill="#0F172A"/>
  <rect x="20" y="20" width="560" height="340" rx="8" fill="#1E293B" stroke="#334155"/>
  <circle cx="300" cy="160" r="50" fill="#2563EB" opacity="0.3"/>
  <path d="M 285 140 L 325 160 L 285 180 Z" fill="#60A5FA"/>
  <text x="300" y="260" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#E2E8F0" text-anchor="middle">1-sanlı Qánigelestirilgen mektep-internatı</text>
  <text x="300" y="290" font-family="Arial, sans-serif" font-size="14" fill="#94A3B8" text-anchor="middle">Jańalıqlar hám is-sharalar fotosúwreti</text>
</svg>
`)}`;
