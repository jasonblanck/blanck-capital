export const flagshipPlates = [
  {
    id: 'neuralink',
    plateNumber: 'PLATE I',
    name: 'Neuralink',
    sysTag: 'SYS-01',
    domain: 'Brain-Computer Interface / Neurotech',
    stage: 'Pre-IPO',
    location: 'Austin, TX',
    status: 'Clinical Trials Active',
    subsystem: 'N1 1,024-Channel Array & R1 Robotic Surgeon',
    leadership: 'Elon Musk, Jared Birchall, DJ Seo',
    url: 'https://neuralink.com/',
    mission: 'Neuralink is developing ultra-high bandwidth brain-machine interfaces to connect humans and computers. By creating a fully implantable, cosmetically invisible wireless BCI, Neuralink aims to restore autonomy to individuals with neurological conditions and unlock human cognitive bandwidth.',
    milestones: [
      { date: '2024.Q1', text: 'PRIME Study: First human patient (Noland Arbaugh) controls digital devices seamlessly via neural thought.' },
      { date: '2024.Q3', text: 'Second patient (Alex) successfully implanted; 1,000+ electrode threads actively recording single-neuron action potentials.' },
      { date: '2025.Q1', text: 'FDA Breakthrough Device Designation awarded for Blindsight visual prosthesis and 4,096-channel N2 thread architecture.' }
    ],
    wireframeType: 'bci'
  },
  {
    id: 'figure',
    plateNumber: 'PLATE II',
    name: 'Figure AI',
    sysTag: 'SYS-02',
    domain: 'Autonomous Humanoid Robotics',
    stage: 'Series C',
    location: 'Sunnyvale, CA',
    status: 'Commercial Fleet Deployed',
    subsystem: 'Figure 02 Bipedal Kinematic Frame & End-to-End VLM',
    leadership: 'Brett Adcock (Founder & CEO)',
    url: 'https://www.figure.ai/',
    mission: 'Figure AI builds general-purpose humanoid robots designed to work alongside humans in manufacturing, logistics, and warehousing. Operating with high-torque electric actuators and onboard vision-language intelligence, Figure 02 achieves human-level dexterity and physical reasoning.',
    milestones: [
      { date: '2024.Q2', text: 'Figure 01 deployed at BMW Spartanburg plant, executing autonomous sheet metal placement with sub-millimeter precision.' },
      { date: '2024.Q4', text: 'Unveiled Figure 02 featuring 10x onboard neural compute, integrated speech processing, and 16-DoF ergonomic hands.' },
      { date: '2025.Q2', text: 'Series C financing finalized; manufacturing production scaled for tier-1 automotive and industrial logistics lines.' }
    ],
    wireframeType: 'robotics'
  },
  {
    id: 'shield-ai',
    plateNumber: 'PLATE III',
    name: 'Shield AI',
    sysTag: 'SYS-03',
    domain: 'Defense AI Autonomy & Hivemind',
    stage: 'Private / Growth',
    location: 'San Diego, CA',
    status: 'DoD Operational / IDIQ',
    subsystem: 'Hivemind Edge AI Flight Software & V-BAT VTOL Swarm',
    leadership: 'Ryan Tseng, Brandon Tseng, Andrew Rider',
    url: 'https://shield.ai/',
    mission: 'Shield AI is building the world\'s leading AI pilot for military aviation. Powered by Hivemind—a self-driving flight autonomy stack that operates without GPS, communications, or human teleoperation—Shield AI enables uncrewed air swarms to operate in contested GPS-denied environments.',
    milestones: [
      { date: '2024.Q2', text: 'Demonstrated first-ever autonomous multi-aircraft jet dogfight in DARPA ACE program using Hivemind software.' },
      { date: '2024.Q4', text: 'V-BAT Teams autonomous swarm deployment validated with US Navy and Special Operations Command.' },
      { date: '2025.Q1', text: 'Expanded DoD IDIQ contract for Hivemind AI pilot integration across tactical uncrewed fighter platforms.' }
    ],
    wireframeType: 'defense'
  },
  {
    id: 'starlab',
    plateNumber: 'PLATE IV',
    name: 'Starlab Space',
    sysTag: 'SYS-04',
    domain: 'Commercial Space Station / Orbital Infra',
    stage: 'Habitat M1 / Pre-Launch',
    location: 'Houston, TX',
    status: 'Station Architecture Approved',
    subsystem: 'Stainless Steel Pressure Vessel & SpaceX Starship Fairing',
    leadership: 'Voyager Space, Airbus, Mitsubishi Corp, MDA Space',
    url: 'https://starlab-space.com/',
    mission: 'Starlab Space is an international joint venture creating a continuously inhabited, commercial space station to succeed the International Space Station. Designed to deploy in a single launch aboard SpaceX Starship, Starlab houses advanced microgravity research labs and automated industrial payloads.',
    milestones: [
      { date: '2024.Q1', text: 'Selected SpaceX Starship as launch vehicle for single-mission orbital deployment of the Starlab primary module.' },
      { date: '2024.Q3', text: 'Airbus Defence & Space and Mitsubishi Corporation expanded joint venture equity investment and systems design.' },
      { date: '2025.Q2', text: 'Completed NASA Commercial LEO Destinations (CLD) Milestone Review; ground test pressure vessel fabrication underway.' }
    ],
    wireframeType: 'space'
  }
];

export const secondaryHoldings = [
  {
    name: 'Anthropic',
    category: 'Artificial Intelligence',
    badge: 'Private · Series H',
    desc: 'Frontier AI research and public benefit company building safe, steerable, and highly capable AI models including Claude.',
    url: 'https://www.anthropic.com/',
    logo: 'logos/Anthropic_logo.svg.png'
  },
  {
    name: 'Kalshi',
    category: 'Prediction Markets',
    badge: 'Private · Series B',
    desc: 'Regulated event contracts platform offering institutional-grade hedging and real-time probabilistic economic forecasting.',
    url: 'https://kalshi.com/',
    logo: 'logos/polymarket-1.svg'
  },
  {
    name: 'Perplexity AI',
    category: 'AI Search & Knowledge',
    badge: 'Private · Series C',
    desc: 'The AI-native conversational answer engine challenging legacy search through real-time web retrieval and citation synthesis.',
    url: 'https://www.perplexity.ai/',
    logo: 'logos/Perplexity_AI_logo.svg.png'
  },
  {
    name: 'Polymarket',
    category: 'Prediction Markets',
    badge: 'Private · Series B',
    desc: 'The world\'s largest decentralized prediction market platform providing real-time odds on global politics, economics, and events.',
    url: 'https://polymarket.com/',
    logo: 'logos/polymarket-1.svg'
  },
  {
    name: 'SandboxAQ',
    category: 'Quantum & AI Security',
    badge: 'Private',
    desc: 'Enterprise software platform applying AI and post-quantum cryptography to security, materials science, and bio-simulation.',
    url: 'https://www.sandboxaq.com/',
    logo: 'logos/SandboxAQ-Logo-Accent-Color-Black.png'
  },
  {
    name: 'Hermeus',
    category: 'Defense & Hypersonics',
    badge: 'Private',
    desc: 'Developing reusable hypersonic aircraft for defense and commercial transport powered by turbine-based combined cycle engines.',
    url: 'https://www.hermeus.com/',
    logo: 'logos/hermeusnew.png'
  },
  {
    name: 'Cob',
    category: 'Consumer & Food',
    badge: 'Portfolio Co.',
    desc: 'Co-founded by Novak Djokovic, producing ultra-clean, nutrient-dense snack foods free from artificial additives and refined sugars.',
    url: 'https://cobfoods.com/',
    logo: 'logos/COBLOGO.png'
  },
  {
    name: 'Drumroll Snacks',
    category: 'Consumer & Food',
    badge: 'Portfolio Co.',
    desc: 'Better-for-you nutrition brand disrupting the bakery aisle with high-protein, low-sugar donuts and mini muffins.',
    url: 'https://eatdrumroll.com/',
    logo: 'logos/Drumroll-Logo-New.png'
  },
  {
    name: 'Liquid Death',
    category: 'Consumer & Brands',
    badge: 'Private',
    desc: 'Healthy beverage brand packaged in infinitely recyclable aluminum cans with high-voltage branding and rapid global scaling.',
    url: 'https://liquiddeath.com/',
    logo: 'logos/Liquid-Death-Logo-2026.png'
  },
  {
    name: 'Longshot Space',
    category: 'Aerospace & Launch',
    badge: 'Private · Seed',
    desc: 'Pioneering ultra-low-cost orbital launch using ground-based kinetic accelerator cannons for heavy cargo transport.',
    url: 'https://www.longshotspace.com/',
    logo: 'logos/longnew.png'
  },
  {
    name: 'Superpower',
    category: 'Healthcare & Longevity',
    badge: 'Private',
    desc: 'Personalized preventive medicine platform offering whole-body biomarker testing, AI diagnostics, and longevity protocols.',
    url: 'https://superpower.com/',
    logo: 'logos/Superpower_Logo.png'
  },
  {
    name: 'L3 Campus',
    category: 'Real Estate & Housing',
    badge: 'Portfolio Co.',
    desc: 'Premier student housing developer creating modern, amenity-rich residential communities near flagship university campuses.',
    url: 'https://l3campus.com/',
    logo: 'logos/l3.png'
  }
];

export const allHoldingsList = [
  { name: 'Amulet Scientific', url: 'https://www.amuletscientific.com/' },
  { name: 'Ancient Crunch', url: 'https://ancientcrunch.com/' },
  { name: 'Anthropic', url: 'https://www.anthropic.com/' },
  { name: 'Arka', url: 'https://www.arkacompute.com/' },
  { name: 'Autopilot', url: 'https://www.joinautopilot.com/landing' },
  { name: 'BTR NATION', url: 'https://www.btrnation.com/' },
  { name: 'Cob', url: 'https://cobfoods.com/' },
  { name: 'College House', url: 'https://collegehouse.com/' },
  { name: 'DRUMROLL SNACKS', url: 'https://eatdrumroll.com/' },
  { name: 'Figure AI', url: 'https://www.figure.ai/' },
  { name: 'Firestorm', url: 'https://launchfirestorm.com/' },
  { name: 'GHIA', url: 'https://drinkghia.com/' },
  { name: 'Hermeus', url: 'https://www.hermeus.com/' },
  { name: 'Intactis Bio', url: 'https://www.intactis.bio/' },
  { name: 'Kalshi', url: 'https://kalshi.com/' },
  { name: 'L3 Campus', url: 'https://l3campus.com/' },
  { name: 'Liquid Death', url: 'https://liquiddeath.com/' },
  { name: 'Longshot Space', url: 'https://www.longshotspace.com/' },
  { name: 'Miramar (405 W 206th)', url: 'https://rentmiramar.com/' },
  { name: 'Neuma', url: 'https://www.crunchbase.com/organization/neuma-78d1' },
  { name: 'NEURALINK', url: 'https://neuralink.com/' },
  { name: 'New York Atlantics Padel', url: 'https://www.newyorkatlantics.com/' },
  { name: 'Perplexity AI', url: 'https://www.perplexity.ai/' },
  { name: 'Polymarket', url: 'https://polymarket.com/' },
  { name: 'Quantinuum', url: 'https://www.quantinuum.com/' },
  { name: 'Repurpose', url: 'https://repurpose.com/' },
  { name: 'Ripple', url: 'https://ripple.com/' },
  { name: 'SandboxAQ', url: 'https://www.sandboxaq.com/' },
  { name: 'Shield AI', url: 'https://shield.ai/' },
  { name: 'Soctera', url: 'https://www.soctera.com/' },
  { name: 'SPRING & MULBERRY INC.', url: 'https://springandmulberry.com/' },
  { name: 'Starlab Space', url: 'https://starlab-space.com/' },
  { name: 'StateHouse Columbus', url: 'https://statehousecolumbus.com/' },
  { name: 'Superpower', url: 'https://superpower.com/' },
  { name: 'Voyager Space', url: 'https://voyagertechnologies.com/' }
];

export const tickerLogos = [
  { name: 'Amulet Scientific', src: 'logos/amulet2.png' },
  { name: 'Ancient Crunch', src: 'logos/ACNEW.webp', hasText: true },
  { name: 'Anthropic', src: 'logos/Anthropic_logo.svg.png' },
  { name: 'Arka', src: 'logos/arka.png' },
  { name: 'Autopilot', src: 'logos/autopilot.png' },
  { name: 'Cob', src: 'logos/COBLOGO.png' },
  { name: 'Drumroll Snacks', src: 'logos/Drumroll-Logo-New.png' },
  { name: 'Figure AI', src: 'logos/figure.webp' },
  { name: 'Firestorm', src: 'logos/firestorm.png' },
  { name: 'GHIA', src: 'logos/ghia.png' },
  { name: 'Hermeus', src: 'logos/hermeusnew.png' },
  { name: 'Intactis Bio', src: 'logos/intactis_bio.png' },
  { name: 'L3 Campus', src: 'logos/l3.png' },
  { name: 'Liquid Death', src: 'logos/Liquid-Death-Logo-2026.png' },
  { name: 'Longshot Space', src: 'logos/longnew.png' },
  { name: 'Neuma', src: 'logos/NEUMA.png' },
  { name: 'Neuralink', src: 'logos/Neuralink_logo.svg.png' },
  { name: 'New York Atlantics', src: 'logos/newyorkanew.png' },
  { name: 'Perplexity AI', src: 'logos/Perplexity_AI_logo.svg.png' },
  { name: 'Polymarket', src: 'logos/polymarket-1.svg' },
  { name: 'Repurpose', src: 'logos/repurpose.png' },
  { name: 'Ripple', src: 'logos/Ripple_logo.svg.png' },
  { name: 'SandboxAQ', src: 'logos/SandboxAQ-Logo-Accent-Color-Black.png' },
  { name: 'Shield AI', src: 'logos/shieldai.png' },
  { name: 'Soctera', src: 'logos/soctera.png' },
  { name: 'Spring & Mulberry', src: 'logos/springnew.png' },
  { name: 'Starlab Space', src: 'logos/Starlab_logo.png' },
  { name: 'Superpower', src: 'logos/Superpower_Logo.png' }
];

export const investmentQuotes = [
  { quote: "The stock market is a device for transferring money from the impatient to the patient.", author: "Warren Buffett" },
  { quote: "It's not supposed to be easy. Anyone who finds it easy is stupid.", author: "Charlie Munger" },
  { quote: "Risk comes from not knowing what you're doing.", author: "Warren Buffett" },
  { quote: "Invert, always invert. Turn a situation or problem upside down. Look at it backward.", author: "Charlie Munger" },
  { quote: "Our favorite holding period is forever.", author: "Warren Buffett" },
  { quote: "Show me the incentive and I'll show you the outcome.", author: "Charlie Munger" },
  { quote: "The most important quality for an investor is temperament, not intellect.", author: "Warren Buffett" },
  { quote: "It is remarkable how much long-term advantage people like us have gotten by trying to be consistently not stupid, instead of trying to be very intelligent.", author: "Charlie Munger" }
];
