    // ===========================
// TREK BIKES — images.js
// Inline SVG bike illustrations, one per model.
// Each SVG is injected into .card-img-wrap inside every .bike-card
// ===========================

const bikeIllustrations = {

  // ── MOUNTAIN ───────────────────────────────────────────────

  "Marlin": `<svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="mg1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#dbeafe"/><stop offset="100%" stop-color="#bfdbfe"/>
      </linearGradient>
    </defs>
    <rect width="320" height="180" fill="url(#mg1)"/>
    <!-- rear wheel --><circle cx="90" cy="130" r="38" fill="none" stroke="#1d4ed8" stroke-width="6"/>
    <circle cx="90" cy="130" r="28" fill="none" stroke="#1d4ed8" stroke-width="2" stroke-dasharray="4 6"/>
    <circle cx="90" cy="130" r="6" fill="#1d4ed8"/>
    <!-- front wheel --><circle cx="230" cy="130" r="38" fill="none" stroke="#1d4ed8" stroke-width="6"/>
    <circle cx="230" cy="130" r="28" fill="none" stroke="#1d4ed8" stroke-width="2" stroke-dasharray="4 6"/>
    <circle cx="230" cy="130" r="6" fill="#1d4ed8"/>
    <!-- frame --><polyline points="90,130 115,75 160,80 190,130" fill="none" stroke="#1e40af" stroke-width="5" stroke-linejoin="round"/>
    <line x1="115" y1="75" x2="160" y2="130" stroke="#1e40af" stroke-width="4"/>
    <line x1="160" y1="80" x2="230" y2="130" stroke="#1e40af" stroke-width="5"/>
    <line x1="160" y1="80" x2="170" y2="50" stroke="#1e40af" stroke-width="4"/>
    <!-- fork --><line x1="230" y1="130" x2="215" y2="75" stroke="#1e40af" stroke-width="4"/>
    <line x1="215" y1="75" x2="170" y2="50" stroke="#1e40af" stroke-width="4"/>
    <!-- handlebar --><line x1="170" y1="50" x2="188" y2="42" stroke="#1e40af" stroke-width="4"/>
    <line x1="180" y1="38" x2="192" y2="48" stroke="#1e40af" stroke-width="3"/>
    <!-- saddle --><line x1="115" y1="75" x2="105" y2="55" stroke="#1e40af" stroke-width="3"/>
    <rect x="93" y="48" width="26" height="6" rx="3" fill="#1e40af"/>
    <!-- suspension fork detail --><rect x="210" y="75" width="6" height="20" rx="2" fill="#93c5fd"/>
    <!-- label --><text x="20" y="25" font-family="sans-serif" font-size="11" font-weight="700" fill="#1e40af" opacity="0.5">MARLIN</text>
  </svg>`,

  "Roscoe": `<svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="rg1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#dcfce7"/><stop offset="100%" stop-color="#bbf7d0"/>
    </linearGradient></defs>
    <rect width="320" height="180" fill="url(#rg1)"/>
    <!-- fat rear wheel --><circle cx="88" cy="128" r="42" fill="none" stroke="#15803d" stroke-width="9"/>
    <circle cx="88" cy="128" r="30" fill="none" stroke="#15803d" stroke-width="2" stroke-dasharray="5 5"/>
    <circle cx="88" cy="128" r="6" fill="#15803d"/>
    <!-- fat front wheel --><circle cx="232" cy="128" r="42" fill="none" stroke="#15803d" stroke-width="9"/>
    <circle cx="232" cy="128" r="30" fill="none" stroke="#15803d" stroke-width="2" stroke-dasharray="5 5"/>
    <circle cx="232" cy="128" r="6" fill="#15803d"/>
    <!-- frame --><polyline points="88,128 114,72 162,78 192,128" fill="none" stroke="#166534" stroke-width="6" stroke-linejoin="round"/>
    <line x1="114" y1="72" x2="162" y2="128" stroke="#166534" stroke-width="5"/>
    <line x1="162" y1="78" x2="232" y2="128" stroke="#166534" stroke-width="6"/>
    <line x1="162" y1="78" x2="172" y2="46" stroke="#166534" stroke-width="5"/>
    <line x1="232" y1="128" x2="216" y2="72" stroke="#166534" stroke-width="5"/>
    <line x1="216" y1="72" x2="172" y2="46" stroke="#166534" stroke-width="4"/>
    <line x1="172" y1="46" x2="192" y2="38" stroke="#166534" stroke-width="4"/>
    <line x1="182" y1="34" x2="196" y2="44" stroke="#166534" stroke-width="3"/>
    <line x1="114" y1="72" x2="104" y2="50" stroke="#166534" stroke-width="3"/>
    <rect x="92" y="43" width="28" height="7" rx="3" fill="#166534"/>
    <text x="20" y="25" font-family="sans-serif" font-size="11" font-weight="700" fill="#166534" opacity="0.5">ROSCOE</text>
  </svg>`,

  "X-Caliber": `<svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="xg1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#cffafe"/><stop offset="100%" stop-color="#a5f3fc"/>
    </linearGradient></defs>
    <rect width="320" height="180" fill="url(#xg1)"/>
    <circle cx="90" cy="130" r="38" fill="none" stroke="#0e7490" stroke-width="5"/>
    <circle cx="90" cy="130" r="6" fill="#0e7490"/>
    <circle cx="232" cy="130" r="38" fill="none" stroke="#0e7490" stroke-width="5"/>
    <circle cx="232" cy="130" r="6" fill="#0e7490"/>
    <!-- XC aggressive geometry --><polyline points="90,130 112,68 165,74 195,130" fill="none" stroke="#0c4a6e" stroke-width="5" stroke-linejoin="round"/>
    <line x1="112" y1="68" x2="165" y2="130" stroke="#0c4a6e" stroke-width="4"/>
    <line x1="165" y1="74" x2="232" y2="130" stroke="#0c4a6e" stroke-width="5"/>
    <line x1="165" y1="74" x2="174" y2="44" stroke="#0c4a6e" stroke-width="4"/>
    <line x1="232" y1="130" x2="218" y2="70" stroke="#0c4a6e" stroke-width="4"/>
    <line x1="218" y1="70" x2="174" y2="44" stroke="#0c4a6e" stroke-width="4"/>
    <line x1="174" y1="44" x2="195" y2="35" stroke="#0c4a6e" stroke-width="4"/>
    <line x1="112" y1="68" x2="100" y2="46" stroke="#0c4a6e" stroke-width="3"/>
    <rect x="88" y="39" width="28" height="6" rx="3" fill="#0c4a6e"/>
    <!-- spokes detail --><line x1="90" y1="92" x2="90" y2="130" stroke="#0e7490" stroke-width="1.5" opacity="0.4"/>
    <line x1="68" y1="110" x2="112" y2="150" stroke="#0e7490" stroke-width="1.5" opacity="0.4"/>
    <line x1="52" y1="130" x2="128" y2="130" stroke="#0e7490" stroke-width="1.5" opacity="0.4"/>
    <line x1="232" y1="92" x2="232" y2="130" stroke="#0e7490" stroke-width="1.5" opacity="0.4"/>
    <text x="20" y="25" font-family="sans-serif" font-size="11" font-weight="700" fill="#0c4a6e" opacity="0.5">X-CALIBER</text>
  </svg>`,

  "Procaliber": `<svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="pg1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ede9fe"/><stop offset="100%" stop-color="#ddd6fe"/>
    </linearGradient></defs>
    <rect width="320" height="180" fill="url(#pg1)"/>
    <!-- carbon finish detail --><rect x="0" y="0" width="320" height="180" fill="url(#pg1)" opacity="0.5"/>
    <circle cx="90" cy="132" r="37" fill="none" stroke="#7c3aed" stroke-width="5"/>
    <circle cx="90" cy="132" r="25" fill="none" stroke="#7c3aed" stroke-width="1.5" opacity="0.5"/>
    <circle cx="90" cy="132" r="6" fill="#7c3aed"/>
    <circle cx="232" cy="132" r="37" fill="none" stroke="#7c3aed" stroke-width="5"/>
    <circle cx="232" cy="132" r="25" fill="none" stroke="#7c3aed" stroke-width="1.5" opacity="0.5"/>
    <circle cx="232" cy="132" r="6" fill="#7c3aed"/>
    <!-- lightweight carbon frame --><polyline points="90,132 110,66 166,72 196,132" fill="none" stroke="#5b21b6" stroke-width="4" stroke-linejoin="round"/>
    <line x1="110" y1="66" x2="166" y2="132" stroke="#5b21b6" stroke-width="3.5"/>
    <line x1="166" y1="72" x2="232" y2="132" stroke="#5b21b6" stroke-width="4.5"/>
    <line x1="166" y1="72" x2="175" y2="42" stroke="#5b21b6" stroke-width="3.5"/>
    <line x1="232" y1="132" x2="218" y2="68" stroke="#5b21b6" stroke-width="3.5"/>
    <line x1="218" y1="68" x2="175" y2="42" stroke="#5b21b6" stroke-width="3.5"/>
    <line x1="175" y1="42" x2="198" y2="32" stroke="#5b21b6" stroke-width="3.5"/>
    <line x1="110" y1="66" x2="98" y2="44" stroke="#5b21b6" stroke-width="3"/>
    <rect x="86" y="37" width="26" height="6" rx="3" fill="#5b21b6"/>
    <!-- carbon texture hint --><line x1="130" y1="80" x2="160" y2="120" stroke="#a78bfa" stroke-width="1" opacity="0.4"/>
    <line x1="140" y1="78" x2="170" y2="118" stroke="#a78bfa" stroke-width="1" opacity="0.4"/>
    <text x="20" y="25" font-family="sans-serif" font-size="11" font-weight="700" fill="#5b21b6" opacity="0.5">PROCALIBER</text>
  </svg>`,

  "Supercaliber": `<svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="sg1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#fee2e2"/><stop offset="100%" stop-color="#fecaca"/>
      </linearGradient>
    </defs>
    <rect width="320" height="180" fill="url(#sg1)"/>
    <!-- FULL SUSPENSION rear shock --><ellipse cx="148" cy="108" rx="8" ry="18" fill="#dc2626" opacity="0.7"/>
    <circle cx="90" cy="132" r="37" fill="none" stroke="#dc2626" stroke-width="6"/>
    <circle cx="90" cy="132" r="6" fill="#dc2626"/>
    <circle cx="232" cy="132" r="37" fill="none" stroke="#dc2626" stroke-width="6"/>
    <circle cx="232" cy="132" r="6" fill="#dc2626"/>
    <!-- world cup frame --><polyline points="90,132 112,70 165,76" fill="none" stroke="#991b1b" stroke-width="5" stroke-linejoin="round"/>
    <polyline points="165,76 192,105 165,132 120,132 90,132" fill="none" stroke="#991b1b" stroke-width="4" stroke-linejoin="round"/>
    <line x1="165" y1="76" x2="232" y2="132" stroke="#991b1b" stroke-width="5"/>
    <line x1="165" y1="76" x2="174" y2="44" stroke="#991b1b" stroke-width="4"/>
    <line x1="232" y1="132" x2="217" y2="70" stroke="#991b1b" stroke-width="4"/>
    <line x1="217" y1="70" x2="174" y2="44" stroke="#991b1b" stroke-width="4"/>
    <line x1="174" y1="44" x2="196" y2="34" stroke="#991b1b" stroke-width="4"/>
    <line x1="112" y1="70" x2="100" y2="46" stroke="#991b1b" stroke-width="3"/>
    <rect x="88" y="39" width="26" height="7" rx="3.5" fill="#991b1b"/>
    <!-- gold accent --><circle cx="165" cy="105" r="5" fill="#f59e0b" stroke="#991b1b" stroke-width="1.5"/>
    <text x="20" y="25" font-family="sans-serif" font-size="11" font-weight="700" fill="#991b1b" opacity="0.5">SUPERCALIBER</text>
  </svg>`,

  "Top Fuel": `<svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="tg1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fef9c3"/><stop offset="100%" stop-color="#fde68a"/>
    </linearGradient></defs>
    <rect width="320" height="180" fill="url(#tg1)"/>
    <ellipse cx="148" cy="108" rx="7" ry="16" fill="#d97706" opacity="0.8"/>
    <circle cx="90" cy="132" r="37" fill="none" stroke="#d97706" stroke-width="5.5"/>
    <circle cx="90" cy="132" r="6" fill="#d97706"/>
    <circle cx="232" cy="132" r="37" fill="none" stroke="#d97706" stroke-width="5.5"/>
    <circle cx="232" cy="132" r="6" fill="#d97706"/>
    <polyline points="90,132 112,72 165,78" fill="none" stroke="#92400e" stroke-width="5" stroke-linejoin="round"/>
    <polyline points="165,78 190,108 163,132 118,132 90,132" fill="none" stroke="#92400e" stroke-width="4" stroke-linejoin="round"/>
    <line x1="165" y1="78" x2="232" y2="132" stroke="#92400e" stroke-width="5"/>
    <line x1="165" y1="78" x2="174" y2="46" stroke="#92400e" stroke-width="4"/>
    <line x1="232" y1="132" x2="218" y2="70" stroke="#92400e" stroke-width="4"/>
    <line x1="218" y1="70" x2="174" y2="46" stroke="#92400e" stroke-width="4"/>
    <line x1="174" y1="46" x2="196" y2="36" stroke="#92400e" stroke-width="4"/>
    <line x1="112" y1="72" x2="100" y2="48" stroke="#92400e" stroke-width="3"/>
    <rect x="88" y="41" width="26" height="7" rx="3" fill="#92400e"/>
    <circle cx="165" cy="107" r="5" fill="#f59e0b" stroke="#92400e" stroke-width="1.5"/>
    <text x="20" y="25" font-family="sans-serif" font-size="11" font-weight="700" fill="#92400e" opacity="0.5">TOP FUEL</text>
  </svg>`,

  "Fuel EX": `<svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="fg1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#dbeafe"/><stop offset="100%" stop-color="#bfdbfe"/>
    </linearGradient></defs>
    <rect width="320" height="180" fill="url(#fg1)"/>
    <ellipse cx="145" cy="110" rx="8" ry="18" fill="#2563eb" opacity="0.7"/>
    <circle cx="88" cy="132" r="38" fill="none" stroke="#2563eb" stroke-width="6"/>
    <circle cx="88" cy="132" r="6" fill="#2563eb"/>
    <circle cx="232" cy="132" r="38" fill="none" stroke="#2563eb" stroke-width="6"/>
    <circle cx="232" cy="132" r="6" fill="#2563eb"/>
    <polyline points="88,132 112,70 166,76" fill="none" stroke="#1e40af" stroke-width="5" stroke-linejoin="round"/>
    <polyline points="166,76 192,110 164,132 118,132 88,132" fill="none" stroke="#1e40af" stroke-width="4" stroke-linejoin="round"/>
    <line x1="166" y1="76" x2="232" y2="132" stroke="#1e40af" stroke-width="5"/>
    <line x1="166" y1="76" x2="176" y2="44" stroke="#1e40af" stroke-width="4"/>
    <line x1="232" y1="132" x2="218" y2="70" stroke="#1e40af" stroke-width="4"/>
    <line x1="218" y1="70" x2="176" y2="44" stroke="#1e40af" stroke-width="4"/>
    <line x1="176" y1="44" x2="198" y2="34" stroke="#1e40af" stroke-width="4"/>
    <line x1="112" y1="70" x2="100" y2="46" stroke="#1e40af" stroke-width="3"/>
    <rect x="88" y="39" width="26" height="7" rx="3" fill="#1e40af"/>
    <circle cx="166" cy="109" r="5" fill="#60a5fa" stroke="#1e40af" stroke-width="2"/>
    <text x="20" y="25" font-family="sans-serif" font-size="11" font-weight="700" fill="#1e40af" opacity="0.5">FUEL EX</text>
  </svg>`,

  "Remedy": `<svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="remg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#dcfce7"/><stop offset="100%" stop-color="#bbf7d0"/>
    </linearGradient></defs>
    <rect width="320" height="180" fill="url(#remg)"/>
    <ellipse cx="145" cy="112" rx="9" ry="20" fill="#16a34a" opacity="0.8"/>
    <circle cx="87" cy="134" r="39" fill="none" stroke="#16a34a" stroke-width="7"/>
    <circle cx="87" cy="134" r="6" fill="#16a34a"/>
    <circle cx="233" cy="134" r="39" fill="none" stroke="#16a34a" stroke-width="7"/>
    <circle cx="233" cy="134" r="6" fill="#16a34a"/>
    <polyline points="87,134 112,68 168,74" fill="none" stroke="#14532d" stroke-width="6" stroke-linejoin="round"/>
    <polyline points="168,74 195,112 166,134 118,134 87,134" fill="none" stroke="#14532d" stroke-width="5" stroke-linejoin="round"/>
    <line x1="168" y1="74" x2="233" y2="134" stroke="#14532d" stroke-width="6"/>
    <line x1="168" y1="74" x2="178" y2="42" stroke="#14532d" stroke-width="5"/>
    <line x1="233" y1="134" x2="218" y2="68" stroke="#14532d" stroke-width="5"/>
    <line x1="218" y1="68" x2="178" y2="42" stroke="#14532d" stroke-width="4"/>
    <line x1="178" y1="42" x2="200" y2="32" stroke="#14532d" stroke-width="4"/>
    <line x1="112" y1="68" x2="100" y2="44" stroke="#14532d" stroke-width="3"/>
    <rect x="88" y="37" width="26" height="7" rx="3" fill="#14532d"/>
    <circle cx="168" cy="111" r="6" fill="#4ade80" stroke="#14532d" stroke-width="2"/>
    <text x="20" y="25" font-family="sans-serif" font-size="11" font-weight="700" fill="#14532d" opacity="0.5">REMEDY</text>
  </svg>`,

  "Slash": `<svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="slg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f1f5f9"/><stop offset="100%" stop-color="#e2e8f0"/>
    </linearGradient></defs>
    <rect width="320" height="180" fill="url(#slg)"/>
    <!-- slash diagonal energy line --><line x1="0" y1="40" x2="320" y2="140" stroke="#dc2626" stroke-width="2" opacity="0.15"/>
    <ellipse cx="143" cy="114" rx="10" ry="22" fill="#dc2626" opacity="0.9"/>
    <!-- mixed wheel: larger rear --><circle cx="86" cy="135" r="40" fill="none" stroke="#111" stroke-width="7"/>
    <circle cx="86" cy="135" r="6" fill="#111"/>
    <!-- smaller front 27.5 --><circle cx="232" cy="136" r="35" fill="none" stroke="#111" stroke-width="7"/>
    <circle cx="232" cy="136" r="6" fill="#111"/>
    <!-- slack enduro frame --><polyline points="86,135 115,66 170,70" fill="none" stroke="#dc2626" stroke-width="6" stroke-linejoin="round"/>
    <polyline points="170,70 198,114 168,135 120,135 86,135" fill="none" stroke="#dc2626" stroke-width="5" stroke-linejoin="round"/>
    <line x1="170" y1="70" x2="232" y2="136" stroke="#dc2626" stroke-width="6"/>
    <line x1="170" y1="70" x2="180" y2="38" stroke="#dc2626" stroke-width="5"/>
    <line x1="232" y1="136" x2="215" y2="66" stroke="#dc2626" stroke-width="5"/>
    <line x1="215" y1="66" x2="180" y2="38" stroke="#dc2626" stroke-width="4"/>
    <line x1="180" y1="38" x2="204" y2="28" stroke="#dc2626" stroke-width="4"/>
    <line x1="115" y1="66" x2="102" y2="42" stroke="#dc2626" stroke-width="3"/>
    <rect x="90" y="35" width="28" height="7" rx="3" fill="#dc2626"/>
    <circle cx="170" cy="113" r="7" fill="#fff" stroke="#dc2626" stroke-width="2.5"/>
    <text x="20" y="25" font-family="sans-serif" font-size="11" font-weight="700" fill="#dc2626" opacity="0.6">SLASH</text>
  </svg>`,

  "Session": `<svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="seg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#111827"/><stop offset="100%" stop-color="#1f2937"/>
    </linearGradient></defs>
    <rect width="320" height="180" fill="url(#seg)"/>
    <!-- DH vibes: orange accents --><ellipse cx="143" cy="116" rx="10" ry="24" fill="#f97316" opacity="0.9"/>
    <circle cx="86" cy="136" r="40" fill="none" stroke="#f97316" stroke-width="8"/>
    <circle cx="86" cy="136" r="28" fill="none" stroke="#f97316" stroke-width="1" opacity="0.3"/>
    <circle cx="86" cy="136" r="6" fill="#f97316"/>
    <circle cx="234" cy="136" r="40" fill="none" stroke="#f97316" stroke-width="8"/>
    <circle cx="234" cy="136" r="28" fill="none" stroke="#f97316" stroke-width="1" opacity="0.3"/>
    <circle cx="234" cy="136" r="6" fill="#f97316"/>
    <!-- DH slack geometry --><polyline points="86,136 118,62 172,66" fill="none" stroke="#fb923c" stroke-width="6" stroke-linejoin="round"/>
    <polyline points="172,66 200,116 170,136 122,136 86,136" fill="none" stroke="#fb923c" stroke-width="5" stroke-linejoin="round"/>
    <line x1="172" y1="66" x2="234" y2="136" stroke="#fb923c" stroke-width="7"/>
    <line x1="172" y1="66" x2="182" y2="36" stroke="#fb923c" stroke-width="5"/>
    <line x1="234" y1="136" x2="216" y2="64" stroke="#fb923c" stroke-width="6"/>
    <line x1="216" y1="64" x2="182" y2="36" stroke="#fb923c" stroke-width="5"/>
    <line x1="182" y1="36" x2="208" y2="26" stroke="#fb923c" stroke-width="4"/>
    <line x1="118" y1="62" x2="104" y2="40" stroke="#fb923c" stroke-width="3"/>
    <rect x="92" y="33" width="28" height="7" rx="3" fill="#fb923c"/>
    <circle cx="172" cy="115" r="7" fill="#f97316" stroke="#1f2937" stroke-width="2"/>
    <text x="20" y="25" font-family="sans-serif" font-size="11" font-weight="700" fill="#f97316" opacity="0.7">SESSION</text>
  </svg>`,

  "Stache": `<svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="stg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fef3c7"/><stop offset="100%" stop-color="#fde68a"/>
    </linearGradient></defs>
    <rect width="320" height="180" fill="url(#stg)"/>
    <!-- plus sized wide tires --><circle cx="88" cy="130" r="40" fill="none" stroke="#92400e" stroke-width="10"/>
    <circle cx="88" cy="130" r="6" fill="#92400e"/>
    <circle cx="232" cy="130" r="40" fill="none" stroke="#92400e" stroke-width="10"/>
    <circle cx="232" cy="130" r="6" fill="#92400e"/>
    <polyline points="88,130 112,70 166,76 196,130" fill="none" stroke="#78350f" stroke-width="5" stroke-linejoin="round"/>
    <line x1="112" y1="70" x2="166" y2="130" stroke="#78350f" stroke-width="4"/>
    <line x1="166" y1="76" x2="232" y2="130" stroke="#78350f" stroke-width="5"/>
    <line x1="166" y1="76" x2="176" y2="44" stroke="#78350f" stroke-width="4"/>
    <line x1="232" y1="130" x2="216" y2="70" stroke="#78350f" stroke-width="4"/>
    <line x1="216" y1="70" x2="176" y2="44" stroke="#78350f" stroke-width="4"/>
    <line x1="176" y1="44" x2="198" y2="34" stroke="#78350f" stroke-width="4"/>
    <line x1="112" y1="70" x2="100" y2="46" stroke="#78350f" stroke-width="3"/>
    <rect x="88" y="39" width="28" height="7" rx="3" fill="#78350f"/>
    <text x="20" y="25" font-family="sans-serif" font-size="11" font-weight="700" fill="#78350f" opacity="0.5">STACHE</text>
  </svg>`,

  "Farley": `<svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="fag" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#e0f2fe"/><stop offset="100%" stop-color="#bae6fd"/>
    </linearGradient></defs>
    <rect width="320" height="180" fill="url(#fag)"/>
    <!-- snow/ice texture --><circle cx="50" cy="30" r="3" fill="white" opacity="0.6"/>
    <circle cx="180" cy="20" r="2" fill="white" opacity="0.6"/>
    <circle cx="280" cy="45" r="4" fill="white" opacity="0.6"/>
    <circle cx="120" cy="160" r="3" fill="white" opacity="0.5"/>
    <!-- ultra fat tires --><circle cx="86" cy="130" r="44" fill="none" stroke="#0369a1" stroke-width="14"/>
    <circle cx="86" cy="130" r="6" fill="#0369a1"/>
    <circle cx="234" cy="130" r="44" fill="none" stroke="#0369a1" stroke-width="14"/>
    <circle cx="234" cy="130" r="6" fill="#0369a1"/>
    <polyline points="86,130 112,68 166,74 196,130" fill="none" stroke="#075985" stroke-width="5" stroke-linejoin="round"/>
    <line x1="112" y1="68" x2="166" y2="130" stroke="#075985" stroke-width="4"/>
    <line x1="166" y1="74" x2="234" y2="130" stroke="#075985" stroke-width="5"/>
    <line x1="166" y1="74" x2="176" y2="42" stroke="#075985" stroke-width="4"/>
    <line x1="234" y1="130" x2="218" y2="68" stroke="#075985" stroke-width="4"/>
    <line x1="218" y1="68" x2="176" y2="42" stroke="#075985" stroke-width="4"/>
    <line x1="176" y1="42" x2="198" y2="32" stroke="#075985" stroke-width="4"/>
    <line x1="112" y1="68" x2="100" y2="44" stroke="#075985" stroke-width="3"/>
    <rect x="88" y="37" width="28" height="7" rx="3" fill="#075985"/>
    <text x="20" y="25" font-family="sans-serif" font-size="11" font-weight="700" fill="#075985" opacity="0.5">FARLEY</text>
  </svg>`,

  "Wahoo": `<svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="wag" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fce7f3"/><stop offset="100%" stop-color="#fbcfe8"/>
    </linearGradient></defs>
    <rect width="320" height="180" fill="url(#wag)"/>
    <!-- slightly smaller 24" wheels --><circle cx="92" cy="132" r="34" fill="none" stroke="#db2777" stroke-width="5"/>
    <circle cx="92" cy="132" r="6" fill="#db2777"/>
    <circle cx="228" cy="132" r="34" fill="none" stroke="#db2777" stroke-width="5"/>
    <circle cx="228" cy="132" r="6" fill="#db2777"/>
    <polyline points="92,132 114,76 162,82 190,132" fill="none" stroke="#be185d" stroke-width="5" stroke-linejoin="round"/>
    <line x1="114" y1="76" x2="162" y2="132" stroke="#be185d" stroke-width="4"/>
    <line x1="162" y1="82" x2="228" y2="132" stroke="#be185d" stroke-width="5"/>
    <line x1="162" y1="82" x2="170" y2="52" stroke="#be185d" stroke-width="4"/>
    <line x1="228" y1="132" x2="214" y2="74" stroke="#be185d" stroke-width="4"/>
    <line x1="214" y1="74" x2="170" y2="52" stroke="#be185d" stroke-width="3.5"/>
    <line x1="170" y1="52" x2="190" y2="42" stroke="#be185d" stroke-width="3.5"/>
    <line x1="114" y1="76" x2="104" y2="54" stroke="#be185d" stroke-width="3"/>
    <rect x="92" y="47" width="24" height="6" rx="3" fill="#be185d"/>
    <text x="20" y="25" font-family="sans-serif" font-size="11" font-weight="700" fill="#be185d" opacity="0.5">WAHOO</text>
  </svg>`,

  "Precaliber": `<svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="preg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fef9c3"/><stop offset="100%" stop-color="#fef08a"/>
    </linearGradient></defs>
    <rect width="320" height="180" fill="url(#preg)"/>
    <!-- small kids wheels --><circle cx="96" cy="134" r="30" fill="none" stroke="#ca8a04" stroke-width="5"/>
    <circle cx="96" cy="134" r="6" fill="#ca8a04"/>
    <circle cx="224" cy="134" r="30" fill="none" stroke="#ca8a04" stroke-width="5"/>
    <circle cx="224" cy="134" r="6" fill="#ca8a04"/>
    <polyline points="96,134 116,80 158,86 184,134" fill="none" stroke="#a16207" stroke-width="4.5" stroke-linejoin="round"/>
    <line x1="116" y1="80" x2="158" y2="134" stroke="#a16207" stroke-width="4"/>
    <line x1="158" y1="86" x2="224" y2="134" stroke="#a16207" stroke-width="4.5"/>
    <line x1="158" y1="86" x2="166" y2="58" stroke="#a16207" stroke-width="3.5"/>
    <line x1="224" y1="134" x2="210" y2="78" stroke="#a16207" stroke-width="3.5"/>
    <line x1="210" y1="78" x2="166" y2="58" stroke="#a16207" stroke-width="3.5"/>
    <line x1="166" y1="58" x2="184" y2="48" stroke="#a16207" stroke-width="3.5"/>
    <line x1="116" y1="80" x2="106" y2="58" stroke="#a16207" stroke-width="3"/>
    <rect x="94" y="51" width="24" height="6" rx="3" fill="#a16207"/>
    <text x="20" y="25" font-family="sans-serif" font-size="11" font-weight="700" fill="#a16207" opacity="0.5">PRECALIBER</text>
  </svg>`,

  // ── ROAD & GRAVEL ──────────────────────────────────────────

  "Madone": `<svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="madog" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fef2f2"/><stop offset="100%" stop-color="#fee2e2"/>
    </linearGradient></defs>
    <rect width="320" height="180" fill="url(#madog)"/>
    <!-- aero road bike: dropped bars, narrow tires --><circle cx="88" cy="128" r="35" fill="none" stroke="#dc2626" stroke-width="4"/>
    <circle cx="88" cy="128" r="6" fill="#dc2626"/>
    <circle cx="232" cy="128" r="35" fill="none" stroke="#dc2626" stroke-width="4"/>
    <circle cx="232" cy="128" r="6" fill="#dc2626"/>
    <!-- aero frame tubes --><polyline points="88,128 108,72 160,76 192,128" fill="none" stroke="#991b1b" stroke-width="5" stroke-linejoin="round"/>
    <line x1="108" y1="72" x2="160" y2="128" stroke="#991b1b" stroke-width="4"/>
    <line x1="160" y1="76" x2="232" y2="128" stroke="#991b1b" stroke-width="5"/>
    <line x1="160" y1="76" x2="168" y2="48" stroke="#991b1b" stroke-width="4"/>
    <line x1="232" y1="128" x2="216" y2="68" stroke="#991b1b" stroke-width="4"/>
    <line x1="216" y1="68" x2="168" y2="48" stroke="#991b1b" stroke-width="4"/>
    <!-- drop bars --><path d="M168,48 L188,40 Q198,36 200,46" fill="none" stroke="#991b1b" stroke-width="3.5"/>
    <line x1="108" y1="72" x2="96" y2="52" stroke="#991b1b" stroke-width="3"/>
    <rect x="84" y="45" width="24" height="5" rx="2.5" fill="#991b1b"/>
    <text x="20" y="25" font-family="sans-serif" font-size="11" font-weight="700" fill="#991b1b" opacity="0.5">MADONE</text>
  </svg>`,

  "Émonda": `<svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="emg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f3e8ff"/><stop offset="100%" stop-color="#e9d5ff"/>
    </linearGradient></defs>
    <rect width="320" height="180" fill="url(#emg)"/>
    <!-- ultra light climbing bike --><circle cx="88" cy="128" r="35" fill="none" stroke="#7c3aed" stroke-width="3.5"/>
    <circle cx="88" cy="128" r="6" fill="#7c3aed"/>
    <circle cx="232" cy="128" r="35" fill="none" stroke="#7c3aed" stroke-width="3.5"/>
    <circle cx="232" cy="128" r="6" fill="#7c3aed"/>
    <!-- lightweight thin tubes --><polyline points="88,128 106,70 158,74 190,128" fill="none" stroke="#5b21b6" stroke-width="3.5" stroke-linejoin="round"/>
    <line x1="106" y1="70" x2="158" y2="128" stroke="#5b21b6" stroke-width="3"/>
    <line x1="158" y1="74" x2="232" y2="128" stroke="#5b21b6" stroke-width="4"/>
    <line x1="158" y1="74" x2="166" y2="46" stroke="#5b21b6" stroke-width="3.5"/>
    <line x1="232" y1="128" x2="216" y2="66" stroke="#5b21b6" stroke-width="3.5"/>
    <line x1="216" y1="66" x2="166" y2="46" stroke="#5b21b6" stroke-width="3"/>
    <path d="M166,46 L188,38 Q198,34 200,44" fill="none" stroke="#5b21b6" stroke-width="3"/>
    <line x1="106" y1="70" x2="94" y2="50" stroke="#5b21b6" stroke-width="3"/>
    <rect x="82" y="43" width="24" height="5" rx="2.5" fill="#5b21b6"/>
    <text x="20" y="25" font-family="sans-serif" font-size="11" font-weight="700" fill="#5b21b6" opacity="0.5">ÉMONDA</text>
  </svg>`,

  "Domane": `<svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="dog" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#dbeafe"/><stop offset="100%" stop-color="#bfdbfe"/>
    </linearGradient></defs>
    <rect width="320" height="180" fill="url(#dog)"/>
    <circle cx="88" cy="128" r="35" fill="none" stroke="#2563eb" stroke-width="4.5"/>
    <circle cx="88" cy="128" r="6" fill="#2563eb"/>
    <circle cx="232" cy="128" r="35" fill="none" stroke="#2563eb" stroke-width="4.5"/>
    <circle cx="232" cy="128" r="6" fill="#2563eb"/>
    <!-- isospeed comfort decoupler visual --><rect x="104" y="74" width="8" height="14" rx="2" fill="#93c5fd" opacity="0.9"/>
    <polyline points="88,128 108,76 160,80 192,128" fill="none" stroke="#1e40af" stroke-width="5" stroke-linejoin="round"/>
    <line x1="108" y1="76" x2="160" y2="128" stroke="#1e40af" stroke-width="4"/>
    <line x1="160" y1="80" x2="232" y2="128" stroke="#1e40af" stroke-width="5"/>
    <line x1="160" y1="80" x2="168" y2="50" stroke="#1e40af" stroke-width="4"/>
    <line x1="232" y1="128" x2="216" y2="70" stroke="#1e40af" stroke-width="4"/>
    <line x1="216" y1="70" x2="168" y2="50" stroke="#1e40af" stroke-width="4"/>
    <path d="M168,50 L190,42 Q200,38 200,48" fill="none" stroke="#1e40af" stroke-width="3.5"/>
    <line x1="108" y1="76" x2="96" y2="54" stroke="#1e40af" stroke-width="3"/>
    <rect x="84" y="47" width="24" height="5" rx="2.5" fill="#1e40af"/>
    <text x="20" y="25" font-family="sans-serif" font-size="11" font-weight="700" fill="#1e40af" opacity="0.5">DOMANE</text>
  </svg>`,

  "Checkpoint": `<svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="chg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#dcfce7"/><stop offset="100%" stop-color="#bbf7d0"/>
    </linearGradient></defs>
    <rect width="320" height="180" fill="url(#chg)"/>
    <!-- slightly wider gravel tires --><circle cx="88" cy="128" r="36" fill="none" stroke="#16a34a" stroke-width="6"/>
    <circle cx="88" cy="128" r="6" fill="#16a34a"/>
    <circle cx="232" cy="128" r="36" fill="none" stroke="#16a34a" stroke-width="6"/>
    <circle cx="232" cy="128" r="6" fill="#16a34a"/>
    <!-- cargo mounts --><circle cx="145" cy="100" r="3" fill="#16a34a" opacity="0.6"/>
    <circle cx="140" cy="85" r="3" fill="#16a34a" opacity="0.6"/>
    <polyline points="88,128 110,72 162,76 192,128" fill="none" stroke="#14532d" stroke-width="5" stroke-linejoin="round"/>
    <line x1="110" y1="72" x2="162" y2="128" stroke="#14532d" stroke-width="4"/>
    <line x1="162" y1="76" x2="232" y2="128" stroke="#14532d" stroke-width="5"/>
    <line x1="162" y1="76" x2="170" y2="48" stroke="#14532d" stroke-width="4"/>
    <line x1="232" y1="128" x2="216" y2="68" stroke="#14532d" stroke-width="4"/>
    <line x1="216" y1="68" x2="170" y2="48" stroke="#14532d" stroke-width="4"/>
    <path d="M170,48 L192,38 Q202,34 202,44" fill="none" stroke="#14532d" stroke-width="3.5"/>
    <line x1="110" y1="72" x2="98" y2="50" stroke="#14532d" stroke-width="3"/>
    <rect x="86" y="43" width="24" height="5" rx="2.5" fill="#14532d"/>
    <text x="20" y="25" font-family="sans-serif" font-size="11" font-weight="700" fill="#14532d" opacity="0.5">CHECKPOINT</text>
  </svg>`,

  "Checkmate": `<svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="cmg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#cffafe"/><stop offset="100%" stop-color="#a5f3fc"/>
    </linearGradient></defs>
    <rect width="320" height="180" fill="url(#cmg)"/>
    <circle cx="88" cy="128" r="35" fill="none" stroke="#0891b2" stroke-width="5"/>
    <circle cx="88" cy="128" r="6" fill="#0891b2"/>
    <circle cx="232" cy="128" r="35" fill="none" stroke="#0891b2" stroke-width="5"/>
    <circle cx="232" cy="128" r="6" fill="#0891b2"/>
    <polyline points="88,128 108,70 160,74 190,128" fill="none" stroke="#0c4a6e" stroke-width="5" stroke-linejoin="round"/>
    <line x1="108" y1="70" x2="160" y2="128" stroke="#0c4a6e" stroke-width="4"/>
    <line x1="160" y1="74" x2="232" y2="128" stroke="#0c4a6e" stroke-width="5"/>
    <line x1="160" y1="74" x2="168" y2="44" stroke="#0c4a6e" stroke-width="4"/>
    <line x1="232" y1="128" x2="216" y2="66" stroke="#0c4a6e" stroke-width="4"/>
    <line x1="216" y1="66" x2="168" y2="44" stroke="#0c4a6e" stroke-width="4"/>
    <path d="M168,44 L190,36 Q200,32 200,42" fill="none" stroke="#0c4a6e" stroke-width="3.5"/>
    <line x1="108" y1="70" x2="96" y2="50" stroke="#0c4a6e" stroke-width="3"/>
    <rect x="84" y="43" width="24" height="5" rx="2.5" fill="#0c4a6e"/>
    <text x="20" y="25" font-family="sans-serif" font-size="11" font-weight="700" fill="#0c4a6e" opacity="0.5">CHECKMATE</text>
  </svg>`,

  "Boone": `<svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="bog" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fef3c7"/><stop offset="100%" stop-color="#fde68a"/>
    </linearGradient></defs>
    <rect width="320" height="180" fill="url(#bog)"/>
    <!-- cx clearance tires --><circle cx="88" cy="128" r="36" fill="none" stroke="#b45309" stroke-width="7"/>
    <circle cx="88" cy="128" r="6" fill="#b45309"/>
    <circle cx="232" cy="128" r="36" fill="none" stroke="#b45309" stroke-width="7"/>
    <circle cx="232" cy="128" r="6" fill="#b45309"/>
    <polyline points="88,128 110,70 162,74 192,128" fill="none" stroke="#92400e" stroke-width="5" stroke-linejoin="round"/>
    <line x1="110" y1="70" x2="162" y2="128" stroke="#92400e" stroke-width="4"/>
    <line x1="162" y1="74" x2="232" y2="128" stroke="#92400e" stroke-width="5"/>
    <line x1="162" y1="74" x2="170" y2="46" stroke="#92400e" stroke-width="4"/>
    <line x1="232" y1="128" x2="216" y2="68" stroke="#92400e" stroke-width="4"/>
    <line x1="216" y1="68" x2="170" y2="46" stroke="#92400e" stroke-width="4"/>
    <path d="M170,46 L192,38 Q202,34 202,44" fill="none" stroke="#92400e" stroke-width="3.5"/>
    <line x1="110" y1="70" x2="98" y2="50" stroke="#92400e" stroke-width="3"/>
    <rect x="86" y="43" width="24" height="5" rx="2.5" fill="#92400e"/>
    <text x="20" y="25" font-family="sans-serif" font-size="11" font-weight="700" fill="#92400e" opacity="0.5">BOONE</text>
  </svg>`,

  "Crockett": `<svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="crg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f3f4f6"/><stop offset="100%" stop-color="#e5e7eb"/>
    </linearGradient></defs>
    <rect width="320" height="180" fill="url(#crg)"/>
    <circle cx="88" cy="128" r="36" fill="none" stroke="#4b5563" stroke-width="7"/>
    <circle cx="88" cy="128" r="6" fill="#4b5563"/>
    <circle cx="232" cy="128" r="36" fill="none" stroke="#4b5563" stroke-width="7"/>
    <circle cx="232" cy="128" r="6" fill="#4b5563"/>
    <polyline points="88,128 110,70 162,74 192,128" fill="none" stroke="#374151" stroke-width="5" stroke-linejoin="round"/>
    <line x1="110" y1="70" x2="162" y2="128" stroke="#374151" stroke-width="4"/>
    <line x1="162" y1="74" x2="232" y2="128" stroke="#374151" stroke-width="5"/>
    <line x1="162" y1="74" x2="170" y2="46" stroke="#374151" stroke-width="4"/>
    <line x1="232" y1="128" x2="216" y2="68" stroke="#374151" stroke-width="4"/>
    <line x1="216" y1="68" x2="170" y2="46" stroke="#374151" stroke-width="4"/>
    <path d="M170,46 L192,38 Q202,34 202,44" fill="none" stroke="#374151" stroke-width="3.5"/>
    <line x1="110" y1="70" x2="98" y2="50" stroke="#374151" stroke-width="3"/>
    <rect x="86" y="43" width="24" height="5" rx="2.5" fill="#374151"/>
    <text x="20" y="25" font-family="sans-serif" font-size="11" font-weight="700" fill="#374151" opacity="0.5">CROCKETT</text>
  </svg>`,

  "Speed Concept": `<svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="scg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fee2e2"/><stop offset="100%" stop-color="#fecaca"/>
    </linearGradient></defs>
    <rect width="320" height="180" fill="url(#scg)"/>
    <!-- TT/triathlon: aero everything --><circle cx="88" cy="130" r="34" fill="none" stroke="#dc2626" stroke-width="4"/>
    <circle cx="88" cy="130" r="6" fill="#dc2626"/>
    <circle cx="232" cy="130" r="34" fill="none" stroke="#dc2626" stroke-width="4"/>
    <circle cx="232" cy="130" r="6" fill="#dc2626"/>
    <!-- deep section aero wheels --><circle cx="88" cy="130" r="26" fill="none" stroke="#dc2626" stroke-width="2" opacity="0.4"/>
    <circle cx="232" cy="130" r="26" fill="none" stroke="#dc2626" stroke-width="2" opacity="0.4"/>
    <!-- TT geometry: very low, long --><polyline points="88,130 104,78 155,76 188,130" fill="none" stroke="#991b1b" stroke-width="4.5" stroke-linejoin="round"/>
    <line x1="104" y1="78" x2="155" y2="130" stroke="#991b1b" stroke-width="4"/>
    <line x1="155" y1="76" x2="232" y2="130" stroke="#991b1b" stroke-width="5"/>
    <line x1="155" y1="76" x2="162" y2="52" stroke="#991b1b" stroke-width="4"/>
    <line x1="232" y1="130" x2="218" y2="70" stroke="#991b1b" stroke-width="4"/>
    <line x1="218" y1="70" x2="162" y2="52" stroke="#991b1b" stroke-width="4"/>
    <!-- aero cockpit/bullhorn bars --><path d="M162,52 L188,44 L194,52 L188,52" fill="none" stroke="#991b1b" stroke-width="3.5"/>
    <line x1="104" y1="78" x2="94" y2="56" stroke="#991b1b" stroke-width="3"/>
    <rect x="82" y="49" width="24" height="5" rx="2.5" fill="#991b1b"/>
    <text x="20" y="25" font-family="sans-serif" font-size="11" font-weight="700" fill="#991b1b" opacity="0.5">SPEED CONCEPT</text>
  </svg>`,

  // ── HYBRID ─────────────────────────────────────────────────

  "FX": `<svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="fxg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#dbeafe"/><stop offset="100%" stop-color="#bfdbfe"/>
    </linearGradient></defs>
    <rect width="320" height="180" fill="url(#fxg)"/>
    <circle cx="88" cy="128" r="35" fill="none" stroke="#2563eb" stroke-width="4"/>
    <circle cx="88" cy="128" r="6" fill="#2563eb"/>
    <circle cx="232" cy="128" r="35" fill="none" stroke="#2563eb" stroke-width="4"/>
    <circle cx="232" cy="128" r="6" fill="#2563eb"/>
    <!-- flat bar hybrid --><polyline points="88,128 110,74 162,78 190,128" fill="none" stroke="#1e40af" stroke-width="5" stroke-linejoin="round"/>
    <line x1="110" y1="74" x2="162" y2="128" stroke="#1e40af" stroke-width="4"/>
    <line x1="162" y1="78" x2="232" y2="128" stroke="#1e40af" stroke-width="5"/>
    <line x1="162" y1="78" x2="170" y2="50" stroke="#1e40af" stroke-width="4"/>
    <line x1="232" y1="128" x2="216" y2="70" stroke="#1e40af" stroke-width="4"/>
    <line x1="216" y1="70" x2="170" y2="50" stroke="#1e40af" stroke-width="4"/>
    <!-- flat handlebar --><line x1="160" y1="48" x2="182" y2="48" stroke="#1e40af" stroke-width="4"/>
    <line x1="110" y1="74" x2="98" y2="52" stroke="#1e40af" stroke-width="3"/>
    <rect x="86" y="45" width="24" height="5" rx="2.5" fill="#1e40af"/>
    <text x="20" y="25" font-family="sans-serif" font-size="11" font-weight="700" fill="#1e40af" opacity="0.5">FX</text>
  </svg>`,

  "Verve": `<svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="vg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#dcfce7"/><stop offset="100%" stop-color="#bbf7d0"/>
    </linearGradient></defs>
    <rect width="320" height="180" fill="url(#vg)"/>
    <circle cx="88" cy="128" r="35" fill="none" stroke="#16a34a" stroke-width="4.5"/>
    <circle cx="88" cy="128" r="6" fill="#16a34a"/>
    <circle cx="232" cy="128" r="35" fill="none" stroke="#16a34a" stroke-width="4.5"/>
    <circle cx="232" cy="128" r="6" fill="#16a34a"/>
    <!-- comfort upright geometry --><polyline points="88,128 108,80 158,78 188,128" fill="none" stroke="#14532d" stroke-width="5" stroke-linejoin="round"/>
    <line x1="108" y1="80" x2="158" y2="128" stroke="#14532d" stroke-width="4"/>
    <line x1="158" y1="78" x2="232" y2="128" stroke="#14532d" stroke-width="5"/>
    <line x1="158" y1="78" x2="162" y2="52" stroke="#14532d" stroke-width="4"/>
    <line x1="232" y1="128" x2="216" y2="72" stroke="#14532d" stroke-width="4"/>
    <line x1="216" y1="72" x2="162" y2="52" stroke="#14532d" stroke-width="4"/>
    <!-- upright comfort bar --><line x1="158" y1="50" x2="176" y2="46" stroke="#14532d" stroke-width="4"/>
    <line x1="108" y1="80" x2="94" y2="56" stroke="#14532d" stroke-width="3"/>
    <rect x="82" y="49" width="24" height="5" rx="2.5" fill="#14532d"/>
    <text x="20" y="25" font-family="sans-serif" font-size="11" font-weight="700" fill="#14532d" opacity="0.5">VERVE</text>
  </svg>`,

  // ── GENERIC ELECTRIC (reused for e-bikes) ──────────────────
  "Rail+":                 `<svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="elg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#fefce8"/><stop offset="100%" stop-color="#fef9c3"/></linearGradient></defs><rect width="320" height="180" fill="url(#elg)"/><text x="148" y="60" text-anchor="middle" font-size="28" opacity="0.25">⚡</text><ellipse cx="145" cy="110" rx="9" ry="20" fill="#d97706" opacity="0.9"/><circle cx="88" cy="132" r="39" fill="none" stroke="#d97706" stroke-width="7"/><circle cx="88" cy="132" r="6" fill="#d97706"/><circle cx="232" cy="132" r="39" fill="none" stroke="#d97706" stroke-width="7"/><circle cx="232" cy="132" r="6" fill="#d97706"/><polyline points="88,132 112,70 167,76" fill="none" stroke="#92400e" stroke-width="5" stroke-linejoin="round"/><polyline points="167,76 194,110 165,132 120,132 88,132" fill="none" stroke="#92400e" stroke-width="4" stroke-linejoin="round"/><line x1="167" y1="76" x2="232" y2="132" stroke="#92400e" stroke-width="5"/><line x1="167" y1="76" x2="177" y2="44" stroke="#92400e" stroke-width="4"/><line x1="232" y1="132" x2="217" y2="70" stroke="#92400e" stroke-width="4"/><line x1="217" y1="70" x2="177" y2="44" stroke="#92400e" stroke-width="4"/><line x1="177" y1="44" x2="200" y2="34" stroke="#92400e" stroke-width="4"/><line x1="112" y1="70" x2="100" y2="46" stroke="#92400e" stroke-width="3"/><rect x="90" y="37" width="26" height="7" rx="3" fill="#92400e"/><rect x="115" y="108" width="30" height="10" rx="3" fill="#d97706" opacity="0.7"/><text x="20" y="25" font-family="sans-serif" font-size="11" font-weight="700" fill="#92400e" opacity="0.5">RAIL+</text></svg>`,

  "Fuel EXe":              `<svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="exe" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#fee2e2"/><stop offset="100%" stop-color="#fecaca"/></linearGradient></defs><rect width="320" height="180" fill="url(#exe)"/><text x="148" y="60" text-anchor="middle" font-size="28" opacity="0.2">⚡</text><ellipse cx="145" cy="110" rx="9" ry="20" fill="#dc2626" opacity="0.9"/><circle cx="88" cy="132" r="39" fill="none" stroke="#dc2626" stroke-width="7"/><circle cx="88" cy="132" r="6" fill="#dc2626"/><circle cx="232" cy="132" r="39" fill="none" stroke="#dc2626" stroke-width="7"/><circle cx="232" cy="132" r="6" fill="#dc2626"/><polyline points="88,132 112,70 167,76" fill="none" stroke="#991b1b" stroke-width="5" stroke-linejoin="round"/><polyline points="167,76 194,110 165,132 120,132 88,132" fill="none" stroke="#991b1b" stroke-width="4" stroke-linejoin="round"/><line x1="167" y1="76" x2="232" y2="132" stroke="#991b1b" stroke-width="5"/><line x1="167" y1="76" x2="177" y2="44" stroke="#991b1b" stroke-width="4"/><line x1="232" y1="132" x2="217" y2="70" stroke="#991b1b" stroke-width="4"/><line x1="217" y1="70" x2="177" y2="44" stroke="#991b1b" stroke-width="4"/><line x1="177" y1="44" x2="200" y2="34" stroke="#991b1b" stroke-width="4"/><line x1="112" y1="70" x2="100" y2="46" stroke="#991b1b" stroke-width="3"/><rect x="90" y="37" width="26" height="7" rx="3" fill="#991b1b"/><rect x="115" y="108" width="30" height="10" rx="3" fill="#dc2626" opacity="0.7"/><text x="20" y="25" font-family="sans-serif" font-size="11" font-weight="700" fill="#991b1b" opacity="0.5">FUEL EXe</text></svg>`,

  // Generic e-bike SVG template function for remaining e-bikes
};

// ── GENERIC TEMPLATES for models not individually illustrated ─

function genericMTBSvg(name, color1, color2, textColor, suspension = false) {
  const shock = suspension ? `<ellipse cx="145" cy="110" rx="8" ry="18" fill="${color1}" opacity="0.8"/>` : '';
  const rear = suspension
    ? `<polyline points="88,132 112,70 167,76" fill="none" stroke="${color2}" stroke-width="5" stroke-linejoin="round"/><polyline points="167,76 194,110 165,132 120,132 88,132" fill="none" stroke="${color2}" stroke-width="4" stroke-linejoin="round"/>`
    : `<polyline points="88,130 112,72 165,78 194,130" fill="none" stroke="${color2}" stroke-width="5" stroke-linejoin="round"/><line x1="112" y1="72" x2="165" y2="130" stroke="${color2}" stroke-width="4"/>`;
  return `<svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="gen${name.replace(/\s/g,'')}" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="${color1}22"/><stop offset="100%" stop-color="${color1}44"/></linearGradient></defs>
    <rect width="320" height="180" fill="url(#gen${name.replace(/\s/g,'')})"/>
    <text x="148" y="62" text-anchor="middle" font-size="26" opacity="0.18">⚡</text>
    ${shock}
    <circle cx="88" cy="132" r="38" fill="none" stroke="${color1}" stroke-width="6"/>
    <circle cx="88" cy="132" r="6" fill="${color1}"/>
    <circle cx="232" cy="132" r="38" fill="none" stroke="${color1}" stroke-width="6"/>
    <circle cx="232" cy="132" r="6" fill="${color1}"/>
    ${rear}
    <line x1="167" y1="76" x2="232" y2="132" stroke="${color2}" stroke-width="5"/>
    <line x1="167" y1="76" x2="177" y2="44" stroke="${color2}" stroke-width="4"/>
    <line x1="232" y1="132" x2="217" y2="70" stroke="${color2}" stroke-width="4"/>
    <line x1="217" y1="70" x2="177" y2="44" stroke="${color2}" stroke-width="4"/>
    <line x1="177" y1="44" x2="200" y2="34" stroke="${color2}" stroke-width="4"/>
    <line x1="112" y1="70" x2="100" y2="46" stroke="${color2}" stroke-width="3"/>
    <rect x="90" y="37" width="26" height="7" rx="3" fill="${color2}"/>
    <rect x="115" y="108" width="32" height="10" rx="3" fill="${color1}" opacity="0.6"/>
    <text x="20" y="25" font-family="sans-serif" font-size="10" font-weight="700" fill="${textColor}" opacity="0.5">${name.toUpperCase()}</text>
  </svg>`;
}

function genericRoadSvg(name, color1, color2) {
  return `<svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="gr${name.replace(/\s/g,'')}" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="${color1}22"/><stop offset="100%" stop-color="${color1}44"/></linearGradient></defs>
    <rect width="320" height="180" fill="url(#gr${name.replace(/\s/g,'')})"/>
    <circle cx="88" cy="128" r="35" fill="none" stroke="${color1}" stroke-width="4.5"/>
    <circle cx="88" cy="128" r="6" fill="${color1}"/>
    <circle cx="232" cy="128" r="35" fill="none" stroke="${color1}" stroke-width="4.5"/>
    <circle cx="232" cy="128" r="6" fill="${color1}"/>
    <polyline points="88,128 108,72 160,76 190,128" fill="none" stroke="${color2}" stroke-width="4.5" stroke-linejoin="round"/>
    <line x1="108" y1="72" x2="160" y2="128" stroke="${color2}" stroke-width="4"/>
    <line x1="160" y1="76" x2="232" y2="128" stroke="${color2}" stroke-width="4.5"/>
    <line x1="160" y1="76" x2="168" y2="48" stroke="${color2}" stroke-width="4"/>
    <line x1="232" y1="128" x2="216" y2="68" stroke="${color2}" stroke-width="4"/>
    <line x1="216" y1="68" x2="168" y2="48" stroke="${color2}" stroke-width="4"/>
    <path d="M168,48 L190,40 Q200,36 200,46" fill="none" stroke="${color2}" stroke-width="3.5"/>
    <line x1="108" y1="72" x2="96" y2="50" stroke="${color2}" stroke-width="3"/>
    <rect x="84" y="43" width="24" height="5" rx="2.5" fill="${color2}"/>
    <text x="20" y="25" font-family="sans-serif" font-size="10" font-weight="700" fill="${color2}" opacity="0.5">${name.toUpperCase()}</text>
  </svg>`;
}

// Fill in remaining models with generated SVGs
const generatedIllustrations = {
  "Fuel+":                  genericMTBSvg("Fuel+", "#2563eb", "#1e40af", "#1e40af", true),
  "Powerfly Full Suspension":genericMTBSvg("Powerfly FS", "#16a34a", "#14532d", "#14532d", true),
  "Slash+":                 genericMTBSvg("Slash+", "#dc2626", "#991b1b", "#991b1b", true),
  "Domane+":                genericRoadSvg("Domane+", "#2563eb", "#1e40af"),
  "FX+":                    genericRoadSvg("FX+", "#2563eb", "#1e40af"),
  "Verve+":                 genericRoadSvg("Verve+", "#16a34a", "#14532d"),
  "Checkpoint+":            genericRoadSvg("Checkpoint+", "#16a34a", "#14532d"),
  "Fetch+":                 genericMTBSvg("Fetch+", "#374151", "#1f2937", "#1f2937", false),
  "Charter+":               genericMTBSvg("Charter+", "#0891b2", "#0c4a6e", "#0c4a6e", false),
  "Townie Go!":             genericRoadSvg("Townie Go!", "#f59e0b", "#92400e"),
  "Townie Path Go!":        genericRoadSvg("Townie Path Go!", "#16a34a", "#14532d"),
  "Vale Go!":               genericRoadSvg("Vale Go!", "#7c3aed", "#5b21b6"),
  "Loft Go!":               genericRoadSvg("Loft Go!", "#ec4899", "#be185d"),
  "Loft":                   genericRoadSvg("Loft", "#0891b2", "#075985"),
  "920":                    genericRoadSvg("920", "#b45309", "#78350f"),
  "1120":                   genericRoadSvg("1120", "#374151", "#1f2937"),
  "Sprocket":               genericRoadSvg("Sprocket", "#16a34a", "#14532d"),
  "Service":                genericRoadSvg("Service", "#374151", "#1f2937"),
  "CheckOUT":               genericRoadSvg("CheckOUT", "#0891b2", "#075985"),
};

// Merge all
const allIllustrations = { ...bikeIllustrations, ...generatedIllustrations };

// ── INJECT INTO CARDS ────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.bike-card');

  cards.forEach(card => {
    const nameEl = card.querySelector('.card-name');
    if (!nameEl) return;
    const name = nameEl.textContent.trim();
    const svg  = allIllustrations[name];
    if (!svg) return;

    const imgWrap = card.querySelector('.card-img-wrap');
    if (imgWrap) imgWrap.innerHTML = svg;
  });
});