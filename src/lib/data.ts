// src/lib/data.ts

export const profile = {
  name: 'Ghazala Rahman',
  shortName: 'GR',
  title: 'PhD Research Scholar (Biotechnology)',
  institute: 'IIT Hyderabad',
  email: 'bo22resch11001@iith.ac.in',
  phone: '+91-##########',
  orcid: '0009-0007-9137-0777',
  location: 'IIT Hyderabad, Kandi, Telangana 502285, India',
  thesis: 'The mechanobiological role of Caveolin-1 in breast tumor progression using the zebrafish xenograft model',
  about: [
    'I am a dedicated and self-motivated research scholar with a deep passion for uncovering the mechanobiological mechanisms that drive cancer progression. My doctoral work at IIT Hyderabad sits at the fascinating intersection of cell biology, biophysics, and cancer therapeutics.',
    'My current research focuses on the protein Caveolin-1 — a key scaffolding component of caveolae — and its role in remodeling the mechanical microenvironment of breast tumors. By leveraging the zebrafish xenograft model, I bridge in vivo dynamics with molecular mechanobiology to develop therapeutic strategies.',
  ],
  researchFocus: [
    'Zebrafish Xenograft Model',
    'Breast Cancer',
    'Caveolin-1',
    'Mechanobiology',
    'Caveolae',
    'Channel Proteins',
    'Tumor Microenvironment',
    'T-Type Ca²⁺ Channels',
  ],
}

export const education = [
  {
    degree: 'Doctor of Philosophy (PhD)',
    field: 'Biotechnology',
    institution: 'IIT Hyderabad',
    period: '2022 – 2027 (Pursuing)',
    description: 'Research thesis on the mechanobiological role of Caveolin-1 in breast tumor progression using the zebrafish xenograft model. Supervised at the Department of Biotechnology.',
    highlights: ['GATE Qualified', 'CSIR-NET (LS)', 'JICA Exchange 2026'],
  },
  {
    degree: 'Master of Science (MSc)',
    field: 'Animal Biology & Biotechnology',
    institution: 'University of Hyderabad',
    period: '2020 – 2022',
    description: 'Specialized in animal cell biology, molecular biology, and biotechnology. Master\'s project focused on calcium channel modulation and cancer metastasis.',
    cgpa: '8.69',
    achievement: 'Gold Medallist – MSc Topper',
  },
  {
    degree: 'Bachelor of Science (BSc)',
    field: 'Zoology',
    institution: 'Ravenshaw University, Cuttack',
    period: '2017 – 2020',
    description: 'Built a strong foundation in life sciences, zoology, and biological systems. Graduated with distinction.',
    cgpa: '9.2',
  },
]

export const research = [
  {
    title: 'PhD Research Project',
    lab: 'Cancer Biology & Mechanobiology Lab, Department of Biotechnology',
    institution: 'IIT Hyderabad',
    period: '2022 – Present',
    description: 'Investigating the mechanobiological role of Caveolin-1 in breast tumor progression. Key activities: zebrafish tumor xenograft model development, microinjection, mammalian cell culture (MCF-7, MDA-MB-231), western blotting, immunofluorescence microscopy, qPCR profiling of caveolae markers, and LC-MS/MS pharmacokinetic studies with doxorubicin.',
    tags: ['Zebrafish Model', 'Caveolin-1', 'Microinjection', 'LC-MS/MS', 'Western Blot'],
  },
  {
    title: "Master's Research Project",
    lab: 'Department of Animal Biology & Biotechnology',
    institution: 'University of Hyderabad',
    period: '2020 – 2022',
    description: 'Investigated T-type calcium channels (Cav3.1, Cav3.2) in breast cancer cell proliferation and migration. Explored pharmacological modulation of calcium influx pathways and downstream effects on tumor cell behavior. Contributed to two peer-reviewed publications.',
    tags: ['T-Type Ca²⁺ Channels', 'Cell Migration', 'Pharmacology', 'Breast Cancer'],
  },
]

export const skills = {
  lab: [
    { name: 'Mammalian Cell Culture', icon: '🧫', proficiency: 0.95 },
    { name: 'Zebrafish Handling', icon: '🐟', proficiency: 0.92 },
    { name: 'Microinjection', icon: '💉', proficiency: 0.88 },
    { name: 'PCR / qPCR', icon: '🧬', proficiency: 0.93 },
    { name: 'Western Blot', icon: '⚗️', proficiency: 0.9 },
    { name: 'Immunofluorescence', icon: '🔬', proficiency: 0.87 },
    { name: 'LC-MS/MS', icon: '📊', proficiency: 0.82 },
  ],
  software: [
    { name: 'ImageJ / FIJI', icon: '🖥️', proficiency: 0.9 },
    { name: 'GraphPad Prism', icon: '📈', proficiency: 0.92 },
    { name: 'OriginPro', icon: '📉', proficiency: 0.85 },
  ],
}

export const publications = [
  {
    number: '01',
    title: 'Development and Validation of an LC-MS/MS Method for the Determination of Doxorubicin Uptake in Zebrafish',
    journal: 'Journal of Pharmaceutical and Biomedical Analysis (JPBA) · Elsevier',
    year: '2025',
    tags: ['LC-MS/MS', 'Doxorubicin', 'Zebrafish', 'Pharmacokinetics', 'Method Validation'],
  },
  {
    number: '02',
    title: 'Calcium Signaling and Cancer Metastasis: Mechanisms, Pathways, and Therapeutic Implications',
    journal: 'Biochimica et Biophysica Acta – Cancer (BBAC) · Elsevier',
    year: '2025',
    tags: ['Calcium Signaling', 'Cancer Metastasis', 'Review', 'Therapeutic Targets'],
  },
  {
    number: '03',
    title: 'T-Type Calcium Channel Modulation in Breast Cancer Cell Proliferation and Migration',
    journal: 'Cells · MDPI',
    year: '2023',
    tags: ['T-Type Channels', 'Cav3.1 / Cav3.2', 'Breast Cancer', 'Cell Proliferation'],
  },
]

export const patent = {
  number: '549695',
  title: 'Lipid Nanocochleates Incorporating Hydrophobic Metformin for Enhanced Bioavailability and Targeted Drug Delivery',
  year: '2024',
  description: 'A novel formulation of lipid nanocochleates — spiral-shaped lipid-based nano-delivery systems — engineered to encapsulate hydrophobic metformin. The invention addresses bioavailability challenges and enables targeted delivery of metformin to cancer cells, potentially repurposing this diabetes drug as an anti-tumor therapeutic with improved pharmacokinetic profiles.',
  tags: ['Nanocochleates', 'Drug Delivery', 'Metformin', 'Cancer Therapeutics', 'Lipid Nanoparticles'],
}

export const achievements = [
  {
    icon: '🏆',
    title: 'GATE 2022 – AIR 385',
    description: 'Secured All India Rank 385 in the Graduate Aptitude Test in Engineering (Life Sciences), enabling admission to IIT Hyderabad\'s PhD program.',
    year: '2022',
  },
  {
    icon: '🎖️',
    title: 'CSIR-NET (Life Sciences)',
    description: 'Qualified the Council of Scientific and Industrial Research – National Eligibility Test, one of India\'s most competitive research fellowships.',
    year: '2022',
  },
  {
    icon: '🥇',
    title: 'Gold Medal – MSc Topper',
    description: 'Awarded Gold Medal for academic excellence as the top-ranking student in MSc Animal Biology & Biotechnology at the University of Hyderabad.',
    year: '2022',
  },
  {
    icon: '🌏',
    title: 'JICA Friendship 2.0 – Japan Research Exchange',
    description: 'Selected for the prestigious Japan International Cooperation Agency (JICA) research exchange program for international collaborative research in Japan.',
    year: '2026',
  },
]

export const conferences = [
  { event: 'National Symposium on Biotechnology', type: 'Poster Presentation', venue: 'IIT Hyderabad', year: '2023' },
  { event: 'International Conference on Molecular Sciences (ICMS)', type: 'Oral / Poster Presentation', venue: 'University of Hyderabad', year: '2024' },
  { event: 'HySci – Science Conclave', type: 'Research Presentation', venue: 'IIT Hyderabad', year: '2024' },
]

export const floatingKeywords = [
  'Caveolin-1', 'Zebrafish', 'Breast Cancer', 'Mechanobiology', 'cAMP',
  'ROCK', 'ECM', 'Integrin', 'Doxorubicin', 'Caveolae', 'qPCR',
  'Western Blot', 'Tumor', 'Microenvironment', 'Calcium', 'Metastasis',
  'Xenograft', 'Apoptosis', 'Proliferation', 'Migration', 'Angiogenesis',
  'Signaling', 'Phosphorylation', 'Cytoskeleton', 'Biomarker',
]
