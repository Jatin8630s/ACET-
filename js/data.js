// ACET College Master Data & Configuration
const ACET_DATA = {
  institution: {
    nameEn: "Aligarh College Of Engineering & Technology",
    nameHi: "अलीगढ़ कॉलेज ऑफ़ इंजीनियरिंग & टेक्नोलॉजी",
    mottoEn: "Education is the foundation upon which we build our future",
    mottoSanskrit: "अभियांत्रिक विज्ञानम् लोक कल्याण साधनम्",
    taglineEn: "Nurturing Engineering, Technology & Healthcare Excellence Since 2001",
    taglineHi: "2001 से इंजीनियरिंग, तकनीकी एवं फार्मेसी शिक्षा का प्रतिष्ठित संस्थान",
    shortName: "ACET Aligarh",
    code: "096 (AKTU College Code)",
    officialLogo: "assets/acet_official_logo.jpg",
    groupInstitutes: [
      "Aligarh College of Engineering & Technology (Estd. 2001)",
      "Aligarh College of Pharmacy (Estd. 2006)"
    ],
    affiliations: [
      "Approved by AICTE, Ministry of Education, Govt. of India",
      "Affiliated to Dr. A.P.J. Abdul Kalam Technical University (AKTU), Lucknow",
      "Approved by Pharmacy Council of India (PCI) for Pharmacy programs",
      "Approved by Board of Technical Education (BTE), Uttar Pradesh",
      "ISO 9001:2015 Certified Institution"
    ],
    address: {
      campus: "3 KM From Sasni Gate, Mathura Bypass Road, Aligarh, Uttar Pradesh 202002",
      cityOffice: "Court of Wards Compound, Gandhi Park, Aligarh - 202001",
      plusCode: "R3W3+49 Aligarh, Uttar Pradesh",
      landmark: "Sasni Gate, Mathura Bypass Road",
      city: "Aligarh",
      state: "Uttar Pradesh",
      pincode: "202002",
      mapEmbedUrl: "https://maps.google.com/maps?q=Aligarh+College+of+Engineering+and+Technology+Mathura+Bypass+Aligarh&t=&z=14&ie=UTF8&iwloc=&output=embed",
      googleMapsLink: "https://maps.google.com/?q=Aligarh+College+Of+Engineering+%26+Technology+Sasni+Gate+Aligarh"
    },
    contact: {
      phone: "+91 95682 00064",
      phoneRaw: "09568200064",
      helplineNumbers: [
        "+91 95682 00064",
        "+91 95682 00010",
        "+91 95682 00063",
        "+91 95682 00071",
        "+91 70170 43771"
      ],
      tollFree: "1800-120-ACET (2238)",
      email: "info@acetup.org",
      admissionsEmail: "admissions@acetup.org",
      website: "http://www.acetup.org/",
      timings: "Closed · Opens 8:30 AM Mon (Mon - Sat: 8:30 AM – 4:30 PM, Sun: Closed)"
    },
    stats: {
      rating: "3.2",
      reviewCount: 212,
      yearsExcellence: "24+",
      studentsEnrolled: "4,200+",
      alumniNetwork: "15,000+",
      placementRate: "86%",
      highestPackage: "₹14.5 LPA",
      averagePackage: "₹4.8 LPA",
      corporatePartners: "80+"
    }
  },

  // Real Campus Photographs & Campus Gallery
  campusGallery: [
    {
      id: "gal-1",
      title: "Main Academic Block & Administrative Portico",
      titleHi: "मुख्य शैक्षणिक भवन एवं प्रशासनिक प्रवेश द्वार",
      category: "campus",
      image: "assets/campus_front.jpg",
      tag: "Real Campus View",
      description: "Original view of the prestigious multistory ACET academic building, elegant glass portico, landscaped driveway, and manicured flora."
    },
    {
      id: "gal-2",
      title: "Full Academic Campus & Admission Center",
      titleHi: "संपूर्ण कॉलेज परिसर एवं प्रवेश भवन",
      category: "campus",
      image: "assets/campus_banner.jpg",
      tag: "Official Campus Block",
      description: "State-of-the-art academic wings housing B.Tech, MBA, MCA, BBA, BCA, B.Pharma & Polytechnic wings along Mathura Bypass Road."
    },
    {
      id: "gal-3",
      title: "Official ACET Crest & Insignia",
      titleHi: "अधिकृत कॉलेज प्रतीक चिन्ह (मुद्रा)",
      category: "emblem",
      image: "assets/acet_official_logo.jpg",
      tag: "Official Seal",
      description: "The revered insignia embodying 'अभियांत्रिक विज्ञानम् लोक कल्याण साधनम्' with the wheel of progress, satellite communications, and computing."
    },
    {
      id: "gal-4",
      title: "Centralized Air-Conditioned Computer Labs",
      titleHi: "वातानुकूलित आधुनिक कंप्यूटर लैब",
      category: "labs",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1000&q=80",
      tag: "Upgraded 2026",
      description: "Modern climate-controlled computer center featuring 200+ Intel Core i7 systems with high-speed gigabit fiber internet."
    },
    {
      id: "gal-5",
      title: "Clean & Green 15-Acre Botanical Lawns",
      titleHi: "15 एकड़ हरा-भरा प्रदूषण मुक्त परिसर",
      category: "campus",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1000&q=80",
      tag: "Eco Campus",
      description: "Praised by visitors: 'Well maintained Infrastructure, Clean and green plants' providing a peaceful academic atmosphere."
    },
    {
      id: "gal-6",
      title: "Mechanical & Robotics Heavy Workshops",
      titleHi: "मैकेनिकल और रोबोटिक्स वर्कशॉप",
      category: "labs",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80",
      tag: "Hands-on Engineering",
      description: "Heavy machinery workshops, CNC machines, lathe bays, foundry and automotive engines for practical training."
    },
    {
      id: "gal-7",
      title: "Dr. APJ Central Digital Library",
      titleHi: "केंद्रीय डिजिटल पुस्तकालय",
      category: "library",
      image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1000&q=80",
      tag: "45,000+ Books",
      description: "Vast collection of reference volumes, technical publications, IEEE e-journals, and silent study zones."
    },
    {
      id: "gal-8",
      title: "Sports Arena & Athletic Grounds",
      titleHi: "विशाल खेल मैदान एवं खेलकूद सुविधाएं",
      category: "sports",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=80",
      tag: "Sports & Athletics",
      description: "Cricket pitch, football turf, volleyball, badminton court and annual athletic festivals (ACET Spardha)."
    }
  ],

  notices: [
    {
      id: "N-2026-01",
      date: "Nov 20, 2026",
      title: "AKTU Odd Semester Examination 2026-27 Schedule Released",
      category: "Examination",
      isNew: true,
      file: "AKTU_Exam_Schedule_2026.pdf"
    },
    {
      id: "N-2026-02",
      date: "Nov 18, 2026",
      title: "Direct Admission & Counseling 2026-27: Engineering, Pharmacy, Management & Computer Applications",
      category: "Admissions",
      isNew: true,
      file: "Admission_Scholarship_2026.pdf"
    },
    {
      id: "N-2026-03",
      date: "Nov 15, 2026",
      title: "Modernized High-Performance Air-Conditioned Lab 3 & 4 with 100+ Core i7 Desktops",
      category: "Infrastructure",
      isNew: true,
      file: "Lab_Upgrade_Circular.pdf"
    },
    {
      id: "N-2026-04",
      date: "Nov 10, 2026",
      title: "Campus Placement Drive: TCS, Tech Mahindra, Infosys & Pharma Healthcare registrations",
      category: "Placements",
      isNew: false,
      file: "Placement_Drive_Nov2026.pdf"
    },
    {
      id: "N-2026-05",
      date: "Nov 05, 2026",
      title: "Standardized State Fee Schedule & UP Post-Matric Scholarship Window Notification",
      category: "Administration",
      isNew: false,
      file: "Fee_Policy_Transparency.pdf"
    }
  ],

  courses: [
    {
      id: "btech-cse",
      name: "B.Tech in Computer Science & Engineering",
      hindiName: "बी.टेक - कंप्यूटर साइंस एंड इंजीनियरिंग",
      degree: "Undergraduate (B.Tech)",
      duration: "4 Years (8 Semesters)",
      intake: "120 Seats",
      annualFee: 55000,
      icon: "fa-laptop-code",
      accent: "from-blue-600 to-indigo-700",
      description: "Comprehensive curriculum covering Artificial Intelligence, Full-Stack Development, Data Structures, Cloud Computing, and Cybersecurity with dedicated smart lab access.",
      eligibility: "10+2 with Physics, Mathematics & Chemistry/CS with min 45% (40% for SC/ST) or JEE Main / CUET-UG score.",
      highlights: [
        "Brand new centralized Air-Conditioned AI & Coding Labs",
        "100 Mbps dedicated gigabit leased line campus",
        "Industry certifications in Python, AWS & Full-Stack",
        "Dedicated placement bootcamps from 6th semester"
      ]
    },
    {
      id: "btech-aiml",
      name: "B.Tech in Artificial Intelligence & Machine Learning",
      hindiName: "बी.टेक - आर्टिफिशियल इंटेलिजेंस & मशीन लर्निंग",
      degree: "Undergraduate (B.Tech)",
      duration: "4 Years (8 Semesters)",
      intake: "60 Seats",
      annualFee: 58000,
      icon: "fa-brain",
      accent: "from-purple-600 to-indigo-800",
      description: "Specialized futuristic engineering program covering Deep Learning, Natural Language Processing, Computer Vision, Robotics, and Big Data Analytics.",
      eligibility: "10+2 with PCM minimum 45% or valid JEE / AKTU Entrance counseling.",
      highlights: [
        "GPU-powered workstations & Deep Learning Sandbox",
        "Collaborative projects with tech industry mentors",
        "Hands-on ML model deployment workshops",
        "High placement demand across top IT firms"
      ]
    },
    {
      id: "btech-me",
      name: "B.Tech in Mechanical Engineering",
      hindiName: "बी.टेक - मैकेनिकल इंजीनियरिंग",
      degree: "Undergraduate (B.Tech)",
      duration: "4 Years (8 Semesters)",
      intake: "60 Seats",
      annualFee: 48000,
      icon: "fa-cogs",
      accent: "from-amber-600 to-orange-700",
      description: "Hands-on foundation in Thermal Engineering, CAD/CAM, Robotics, Automotive Design, and modern manufacturing technology.",
      eligibility: "10+2 with PCM minimum 45% or 3-Year Engineering Diploma for Lateral Entry (2nd year).",
      highlights: [
        "Well-equipped Machine Shop & CNC simulation lab",
        "Automotive design software (AutoCAD, SolidWorks, ANSYS)",
        "Industrial internships with manufacturing units in UP/NCR",
        "Eligible for UP Govt Fee Reimbursement Schemes"
      ]
    },
    {
      id: "btech-ce",
      name: "B.Tech in Civil Engineering",
      hindiName: "बी.टेक - सिविल इंजीनियरिंग",
      degree: "Undergraduate (B.Tech)",
      duration: "4 Years (8 Semesters)",
      intake: "60 Seats",
      annualFee: 48000,
      icon: "fa-building-columns",
      accent: "from-emerald-600 to-teal-800",
      description: "Focus on Structural Engineering, Geotechnical Labs, Smart City Infrastructure, Surveying, and Environmental Engineering.",
      eligibility: "10+2 with Physics, Mathematics & Chemistry min 45% or Polytechnic Diploma in Civil.",
      highlights: [
        "Advanced Surveying Lab with Total Station & GPS",
        "Concrete testing & Environmental engineering facilities",
        "Field trips and on-site construction internships",
        "Guidance for GATE and State Engineering Services"
      ]
    },
    {
      id: "btech-ece",
      name: "B.Tech in Electronics & Communication",
      hindiName: "बी.टेक - इलेक्ट्रॉनिक्स & कम्युनिकेशन",
      degree: "Undergraduate (B.Tech)",
      duration: "4 Years (8 Semesters)",
      intake: "60 Seats",
      annualFee: 48000,
      icon: "fa-microchip",
      accent: "from-cyan-600 to-blue-700",
      description: "Explore VLSI Design, Embedded Systems, IoT, Microwave Engineering, and 5G Wireless Networks with real-world circuit testing.",
      eligibility: "10+2 with PCM min 45%.",
      highlights: [
        "Modern VLSI & Embedded systems training lab",
        "Microcontroller programming & Arduino/Raspberry Pi suites",
        "Telecom and networking lab kits",
        "Lucrative career paths in Core Electronics & IT"
      ]
    },
    {
      id: "bpharma",
      name: "Bachelor of Pharmacy (B.Pharma)",
      hindiName: "बैचलर ऑफ़ फार्मेसी (बी.फार्मा) - अलीगढ़ कॉलेज ऑफ़ फार्मेसी",
      degree: "Pharmacy (PCI Approved)",
      duration: "4 Years (8 Semesters)",
      intake: "60 Seats",
      annualFee: 62000,
      icon: "fa-prescription-bottle-medical",
      accent: "from-teal-600 to-emerald-800",
      description: "Approved by Pharmacy Council of India (PCI). Covers Pharmaceutics, Pharmacology, Medicinal Chemistry, and Hospital Pharmacy with sophisticated formulation labs.",
      eligibility: "10+2 with Physics, Chemistry, and Biology/Mathematics with minimum 45%.",
      highlights: [
        "PCI & AKTU Approved Program running since 2006",
        "Advanced formulation & pharmacology analysis laboratories",
        "Direct placements in pharma giants: Sun Pharma, Cipla, Mankind",
        "Registered Pharmacist license eligibility upon graduation"
      ]
    },
    {
      id: "dpharma",
      name: "Diploma in Pharmacy (D.Pharma)",
      hindiName: "डिप्लोमा इन फार्मेसी (डी.फार्मा)",
      degree: "Pharmacy (PCI & BTE UP)",
      duration: "2 Years",
      intake: "60 Seats",
      annualFee: 45000,
      icon: "fa-capsules",
      accent: "from-emerald-700 to-green-900",
      description: "Quick 2-year practical healthcare diploma preparing students for retail pharmacy, hospital dispensary management, and wholesale licensing.",
      eligibility: "10+2 with Science stream (PCB or PCM).",
      highlights: [
        "Approved by PCI New Delhi & BTE UP",
        "Hospital clinical training included in syllabus",
        "Immediate eligibility for Medical Retail License",
        "Affordable fee structure with state scholarship eligibility"
      ]
    },
    {
      id: "mba",
      name: "Master of Business Administration (MBA)",
      hindiName: "मास्टर ऑफ़ बिज़नेस एडमिनिस्ट्रेशन (एम.बी.ए.)",
      degree: "Postgraduate (MBA)",
      duration: "2 Years (4 Semesters)",
      intake: "60 Seats",
      annualFee: 52000,
      icon: "fa-chart-pie",
      accent: "from-rose-600 to-pink-700",
      description: "Dual specializations in Marketing, Finance, Human Resource Management, and Information Technology designed to cultivate ethical business leaders.",
      eligibility: "Recognized Bachelor's Degree in any discipline with minimum 50% (45% for reserved category).",
      highlights: [
        "Case-study methodology & live corporate simulations",
        "Summer internship placement support in top corporations",
        "Soft skills, personality development & leadership labs",
        "Executive lecture series by regional business leaders"
      ]
    },
    {
      id: "bba",
      name: "Bachelor of Business Administration (BBA)",
      hindiName: "बैचलर ऑफ़ बिज़नेस एडमिनिस्ट्रेशन (बी.बी.ए.)",
      degree: "Undergraduate (Management)",
      duration: "3 Years (6 Semesters)",
      intake: "60 Seats",
      annualFee: 32000,
      icon: "fa-briefcase",
      accent: "from-indigo-600 to-purple-700",
      description: "Early management foundation covering Principles of Management, Financial Accounting, Digital Marketing, and Business Communication.",
      eligibility: "10+2 passed in any stream with min 45%.",
      highlights: [
        "Ideal launching pad for corporate careers or MBA",
        "Corporate visit tours and entrepreneurship cell",
        "Hands-on presentations and business model workshops",
        "Affordable fees with flexible installment schedules"
      ]
    },
    {
      id: "mca",
      name: "Master of Computer Applications (MCA)",
      hindiName: "मास्टर ऑफ़ कंप्यूटर एप्लीकेशन (एम.सी.ए.)",
      degree: "Postgraduate (MCA)",
      duration: "2 Years (4 Semesters)",
      intake: "60 Seats",
      annualFee: 50000,
      icon: "fa-terminal",
      accent: "from-slate-700 to-slate-900",
      description: "Advanced computing education focusing on Enterprise Software Development, Cloud Architecture, Mobile Apps, and Data Engineering.",
      eligibility: "BCA / B.Sc (CS/IT) / B.Com / BA with Mathematics at 10+2 or Graduation level with min 50%.",
      highlights: [
        "Full-stack development in MERN, Java Enterprise, and Python",
        "6-month live capstone project with industry partners",
        "Dedicated placement assistance in software firms",
        "Access to advanced research publications & IEEE papers"
      ]
    },
    {
      id: "bca",
      name: "Bachelor of Computer Applications (BCA)",
      hindiName: "बैचलर ऑफ़ कंप्यूटर एप्लीकेशन (बी.सी.ए.)",
      degree: "Undergraduate (IT)",
      duration: "3 Years (6 Semesters)",
      intake: "60 Seats",
      annualFee: 34000,
      icon: "fa-code",
      accent: "from-sky-600 to-blue-700",
      description: "Practical bachelor's degree in computer programming, database administration, web development, and software engineering.",
      eligibility: "10+2 with Mathematics / CS preferred with min 45%.",
      highlights: [
        "Daily lab sessions in air-conditioned computer center",
        "Training in Python, C++, Java, JavaScript & MySQL",
        "Direct pathway to MCA or software developer jobs",
        "Industry capstone projects"
      ]
    },
    {
      id: "polytechnic",
      name: "Polytechnic Diploma in Engineering",
      hindiName: "पॉलीटेक्निक डिप्लोमा (मैकेनिकल / सिविल / इलेक्ट्रिकल)",
      degree: "Diploma (BTE UP)",
      duration: "3 Years (6 Semesters)",
      intake: "180 Seats",
      annualFee: 32000,
      icon: "fa-wrench",
      accent: "from-teal-600 to-emerald-700",
      description: "State-approved technical diploma course providing direct practical skill development in Mechanical (Production), Civil, and Electrical streams.",
      eligibility: "10th pass with Science and Mathematics with min 35% or JEECUP examination rank.",
      highlights: [
        "Approved by Board of Technical Education (BTE), UP",
        "Direct practical laboratory training from Semester 1",
        "Pathway to B.Tech 2nd Year (Lateral Entry) after completion",
        "Affordable fee structure with state scholarship eligibility"
      ]
    }
  ],

  facilities: [
    {
      id: "campus-entrance",
      title: "Prestigious Academic Building & Portico",
      titleHi: "मुख्य प्रशासनिक भवन एवं भव्य प्रवेश द्वार",
      category: "campus",
      tag: "Real Campus Photo",
      icon: "fa-building-columns",
      image: "assets/campus_front.jpg",
      description: "Actual photograph of the impressive multi-story ACET college campus with its central glass portico, landscaped driveways, and manicured green hedges."
    },
    {
      id: "green-campus",
      title: "Lush Green 15-Acre Eco-Campus",
      titleHi: "15 एकड़ हरा-भरा इको-कैंपस",
      category: "campus",
      tag: "Green & Well-Maintained",
      icon: "fa-leaf",
      image: "assets/campus_banner.jpg",
      description: "Clean, scenic environment with well-maintained gardens, mature trees, shaded walkways, and open recreational lawns praised by visitors for serene academic learning."
    },
    {
      id: "computer-center",
      title: "Modern Air-Conditioned Computing Center",
      titleHi: "आधुनिक वातानुकूलित कंप्यूटर सेंटर",
      category: "labs",
      tag: "Newly Upgraded 2026",
      icon: "fa-desktop",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80",
      description: "Fully modernized air-conditioned computer laboratories equipped with 200+ Intel Core i7 workstations, high-speed 100 Mbps fiber internet, and licensed CAD/programming tools."
    },
    {
      id: "central-library",
      title: "Dr. APJ Central Digital Library",
      titleHi: "केंद्रीय डिजिटल पुस्तकालय",
      category: "library",
      tag: "Knowledge Hub",
      icon: "fa-book-open",
      image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80",
      description: "Vast collection of over 45,000+ technical volumes, national and international journal subscriptions, DELNET digital database, and quiet reading halls."
    },
    {
      id: "workshops",
      title: "Mechanical & Robotics Heavy Workshops",
      titleHi: "मैकेनिकल और रोबोटिक्स वर्कशॉप",
      category: "labs",
      tag: "Hands-on Engineering",
      icon: "fa-gears",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
      description: "Comprehensive engineering workshops with Lathe machines, Foundry, Carpentry, Welding shops, and automated CNC testing rigs."
    },
    {
      id: "sports-complex",
      title: "Sports Complex & Athletic Grounds",
      titleHi: "खेल मैदान और एथलेटिक सुविधाएं",
      category: "sports",
      tag: "Fitness & Spirit",
      icon: "fa-volleyball",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
      description: "Full-sized cricket ground, football arena, badminton courts, table tennis, and annual intra-college athletic tournaments (ACET SPARDHA)."
    }
  ],

  recruiters: [
    { name: "Tata Consultancy Services (TCS)", logo: "TCS" },
    { name: "Infosys Technologies", logo: "INFOSYS" },
    { name: "Wipro Technologies", logo: "WIPRO" },
    { name: "Tech Mahindra", logo: "TECH MAHINDRA" },
    { name: "HCL Technologies", logo: "HCL" },
    { name: "Cognizant", logo: "COGNIZANT" },
    { name: "Capgemini", logo: "CAPGEMINI" },
    { name: "Larsen & Toubro (L&T)", logo: "L&T INFRA" },
    { name: "Paytm Payments", logo: "PAYTM" },
    { name: "Genpact", logo: "GENPACT" },
    { name: "Cipla Healthcare", logo: "CIPLA" },
    { name: "Sun Pharma", logo: "SUN PHARMA" }
  ],

  reviews: [
    {
      id: "rev-1",
      author: "Er. Amit Sharma",
      role: "Alumnus (B.Tech CSE - Batch 2023) | Software Engineer",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80",
      rating: 5,
      date: "2 months ago",
      badge: "Verified Alumnus",
      comment: "Well maintained Infrastructure, Clean and green plants all around the campus. The faculty in Computer Science department guided us thoroughly for competitive programming and campus placements. Great campus life!",
      tags: ["Infrastructure", "Clean & Green", "Computer Labs"]
    },
    {
      id: "rev-2",
      author: "Pooja Verma",
      role: "Current Student (B.Tech CSE 3rd Year)",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
      rating: 4,
      date: "3 weeks ago",
      badge: "Current Student",
      comment: "Honest review: Earlier in summers the computer lab AC was a genuine issue, but the management recently installed central air conditioning in lab 3 and 4 with high-speed internet. Faculty in technical subjects are very supportive.",
      tags: ["Computer Labs", "Academics", "Recent Upgrade"]
    },
    {
      id: "rev-3",
      author: "Er. Mohit Saxena",
      role: "B.Tech Mechanical (Batch 2022) | Quality Engineer",
      avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=120&q=80",
      rating: 4,
      date: "4 months ago",
      badge: "Verified Alumnus",
      comment: "The mechanical workshop practicals gave me great industry readiness. The lush green garden during breaks is very peaceful. ACET provides the best affordable technical education around Sasni Gate Mathura Bypass area.",
      tags: ["Workshops", "Green Campus", "Affordable"]
    },
    {
      id: "rev-4",
      author: "Student Welfare & Grievance Redressal Cell",
      role: "Official Institutional Response & Transparency Advisory",
      avatar: "assets/acet_official_logo.jpg",
      rating: 5,
      date: "Updated Nov 2026",
      badge: "Official Notice",
      comment: "ACET Management has enacted strict standardized fee schedules strictly in accordance with AKTU / UP Fee Regulatory Committee. All students pay transparent state-approved tuition fees with zero hidden charges. We have also installed modern Air Conditioning in Computer Labs and established a 24x7 Student Helpdesk.",
      tags: ["Fee Transparency", "Lab AC Upgrade", "Helpdesk"]
    }
  ],

  faqs: [
    {
      q: "Where is Aligarh College of Engineering & Technology (ACET) located?",
      a: "ACET is located on Mathura Bypass Road, Sasni Gate, Aligarh, Uttar Pradesh (Pin: 202002), 3 km from Sasni Gate and 5 km from Aligarh Railway Junction. Our City Office is situated at Court of Wards Compound, Gandhi Park, Aligarh - 202001."
    },
    {
      q: "Which degrees and programs are offered at ACET?",
      a: "ACET offers B.Tech (CSE, AI&ML, ME, Civil, ECE), B.Pharma & D.Pharma (via Aligarh College of Pharmacy, PCI approved), MBA, MCA, BBA, BCA, and Polytechnic Engineering Diplomas."
    },
    {
      q: "Which university is ACET affiliated with?",
      a: "ACET is approved by AICTE (All India Council for Technical Education), New Delhi, and permanently affiliated with Dr. A.P.J. Abdul Kalam Technical University (AKTU Lucknow, College Code: 096). Pharmacy courses are approved by PCI, and Diploma courses are affiliated with BTE UP."
    },
    {
      q: "Is the fee structure uniform and transparent?",
      a: "Yes! ACET strictly adheres to the state-regulated fee structure governed by the UP State Fee Regulatory Committee and AKTU. You can calculate your transparent fee online on this website."
    },
    {
      q: "What scholarships are available for students?",
      a: "Students are eligible for the Uttar Pradesh Post-Matric Scholarship Scheme (covering full or partial tuition fees for eligible SC/ST/OBC/General EWS candidates). ACET also offers merit scholarships for students scoring above 80% in 10+2."
    },
    {
      q: "What are the official helpline contact numbers for admissions?",
      a: "You can reach our admissions cell directly at 095682 00064, 095682 00010, 095682 00063, 095682 00071, or 070170 43771."
    }
  ]
};
