// ACET Interactive Application Logic
document.addEventListener('DOMContentLoaded', () => {
  initApp();
});

let currentLanguage = 'en';

function initApp() {
  renderCourses('all');
  renderFacilities('all');
  renderCampusGallery('all');
  renderNotices();
  renderReviews();
  renderFaqs();
  initFeeCalculator();
  setupEventListeners();
  initCounters();

  // Initialize AOS if available
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic'
    });
  }
}

// -------------------------------------------------------------
// Animated Number Counters on Scroll
// -------------------------------------------------------------
function initCounters() {
  const counterElements = document.querySelectorAll('[data-counter]');
  if (!counterElements.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseFloat(el.getAttribute('data-counter'));
        const prefix = el.getAttribute('data-prefix') || '';
        const suffix = el.getAttribute('data-suffix') || '';
        const isDecimal = el.getAttribute('data-decimal') === 'true';

        let current = 0;
        const duration = 1800;
        const stepTime = 25;
        const steps = duration / stepTime;
        const increment = target / steps;

        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          el.innerText = `${prefix}${isDecimal ? current.toFixed(1) : Math.floor(current).toLocaleString('en-IN')}${suffix}`;
        }, stepTime);

        obs.unobserve(el);
      }
    });
  }, { threshold: 0.3 });

  counterElements.forEach(el => observer.observe(el));
}

// -------------------------------------------------------------
// Language Switcher
// -------------------------------------------------------------
function toggleLanguage() {
  currentLanguage = currentLanguage === 'en' ? 'hi' : 'en';
  const langBtn = document.getElementById('langToggleBtn');
  const langBtnMobile = document.getElementById('langToggleBtnMobile');
  
  if (currentLanguage === 'hi') {
    if (langBtn) langBtn.innerHTML = '<i class="fa-solid fa-language text-amber-500 mr-1.5"></i> English';
    if (langBtnMobile) langBtnMobile.innerHTML = '<i class="fa-solid fa-language text-amber-500 mr-1.5"></i> English';
    document.querySelectorAll('[data-hi]').forEach(el => {
      el.dataset.en = el.dataset.en || el.innerText;
      el.innerText = el.dataset.hi;
    });
    showToast('भाषा सफलतापूर्वक हिंदी में बदली गई', 'info');
  } else {
    if (langBtn) langBtn.innerHTML = '<i class="fa-solid fa-language text-amber-500 mr-1.5"></i> हिंदी';
    if (langBtnMobile) langBtnMobile.innerHTML = '<i class="fa-solid fa-language text-amber-500 mr-1.5"></i> हिंदी';
    document.querySelectorAll('[data-en]').forEach(el => {
      if (el.dataset.en) {
        el.innerText = el.dataset.en;
      }
    });
    showToast('Language switched to English', 'info');
  }
}

// -------------------------------------------------------------
// Real Campus Gallery & Lightbox Viewer
// -------------------------------------------------------------
function renderCampusGallery(filter = 'all') {
  const container = document.getElementById('campusGalleryContainer');
  if (!container) return;

  let items = ACET_DATA.campusGallery || [];
  if (filter !== 'all') {
    items = items.filter(g => g.category === filter);
  }

  container.innerHTML = items.map((item, idx) => `
    <div class="gallery-card group bg-slate-900 rounded-3xl overflow-hidden shadow-lg border border-slate-200/80 hover-lift relative" 
         data-aos="fade-up" data-aos-delay="${(idx % 4) * 100}"
         onclick="openLightbox('${item.image}', '${item.title.replace(/'/g, "\\'")}', '${item.description.replace(/'/g, "\\'")}')">
      
      <div class="h-64 sm:h-72 w-full overflow-hidden bg-slate-950 relative">
        <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy">
        <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-85 group-hover:opacity-95 transition-opacity"></div>
      </div>

      <!-- Tag Badge -->
      <span class="absolute top-4 left-4 bg-blue-950/90 text-amber-300 backdrop-blur-md px-3 py-1 text-[11px] font-bold rounded-lg border border-amber-400/30 shadow-md">
        <i class="fa-solid fa-camera mr-1"></i> ${item.tag}
      </span>

      <!-- Expand Icon Button -->
      <div class="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-amber-500 hover:text-slate-950">
        <i class="fa-solid fa-expand text-xs"></i>
      </div>

      <!-- Details Overlay -->
      <div class="absolute bottom-0 inset-x-0 p-5 text-white">
        <h4 class="text-base font-bold text-white group-hover:text-amber-300 transition-colors mb-1 leading-snug">
          ${item.title}
        </h4>
        <p class="text-xs text-slate-300 line-clamp-2 leading-relaxed">
          ${item.description}
        </p>
      </div>
    </div>
  `).join('');
}

function filterCampusGallery(category, btnElement) {
  document.querySelectorAll('.gallery-tab').forEach(b => {
    b.classList.remove('bg-blue-950', 'text-white', 'shadow');
    b.classList.add('bg-slate-100', 'text-slate-700');
  });
  if (btnElement) {
    btnElement.classList.add('bg-blue-950', 'text-white', 'shadow');
    btnElement.classList.remove('bg-slate-100', 'text-slate-700');
  }
  renderCampusGallery(category);
}

function openLightbox(src, title, desc) {
  const modal = document.getElementById('lightboxModal');
  const imgEl = document.getElementById('lightboxImg');
  const titleEl = document.getElementById('lightboxTitle');
  const descEl = document.getElementById('lightboxDesc');

  if (modal && imgEl) {
    imgEl.src = src;
    if (titleEl) titleEl.innerText = title;
    if (descEl) descEl.innerText = desc;

    modal.classList.remove('hidden');
    modal.classList.add('flex');
  }
}

function closeLightbox() {
  const modal = document.getElementById('lightboxModal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

// -------------------------------------------------------------
// Course Rendering & Details Modal
// -------------------------------------------------------------
function renderCourses(filter = 'all') {
  const container = document.getElementById('coursesContainer');
  if (!container) return;

  let filtered = ACET_DATA.courses;
  if (filter === 'btech') {
    filtered = ACET_DATA.courses.filter(c => c.degree.includes('B.Tech'));
  } else if (filter === 'pharmacy') {
    filtered = ACET_DATA.courses.filter(c => c.degree.includes('Pharmacy'));
  } else if (filter === 'pg') {
    filtered = ACET_DATA.courses.filter(c => c.degree.includes('Postgraduate') || c.degree.includes('Management'));
  } else if (filter === 'diploma') {
    filtered = ACET_DATA.courses.filter(c => c.degree.includes('Diploma'));
  }

  container.innerHTML = filtered.map((c, idx) => `
    <div class="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm hover-lift flex flex-col justify-between group" data-aos="fade-up" data-aos-delay="${(idx % 4) * 100}">
      <div>
        <div class="flex items-center justify-between mb-4">
          <div class="w-12 h-12 rounded-2xl bg-gradient-to-tr ${c.accent} text-white flex items-center justify-center text-xl shadow-md group-hover:scale-110 transition-transform">
            <i class="fa-solid ${c.icon}"></i>
          </div>
          <span class="text-xs font-semibold px-2.5 py-1 bg-slate-100 text-slate-700 rounded-full border border-slate-200">
            ${c.duration}
          </span>
        </div>

        <span class="text-xs font-bold uppercase tracking-wider text-amber-600 block mb-1">
          ${c.degree}
        </span>
        <h3 class="text-lg font-bold text-slate-900 group-hover:text-blue-900 transition-colors mb-2 leading-snug">
          ${c.name}
        </h3>
        <p class="text-sm text-slate-600 mb-4 line-clamp-2 leading-relaxed">
          ${c.description}
        </p>

        <div class="space-y-1.5 mb-5 bg-slate-50/80 p-3 rounded-2xl border border-slate-100 text-xs text-slate-600">
          <div class="flex items-center justify-between">
            <span class="text-slate-500"><i class="fa-solid fa-users mr-1 text-slate-400"></i> Annual Intake:</span>
            <span class="font-semibold text-slate-800">${c.intake}</span>
          </div>
          <div class="flex items-center justify-between">
            <span class="text-slate-500"><i class="fa-solid fa-indian-rupee-sign mr-1 text-slate-400"></i> Annual Tuition:</span>
            <span class="font-bold text-emerald-700">₹${c.annualFee.toLocaleString('en-IN')}/yr*</span>
          </div>
        </div>
      </div>

      <div class="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
        <button onclick="openCourseModal('${c.id}')" class="text-xs font-bold text-blue-900 hover:text-amber-600 flex items-center gap-1 transition-colors">
          Curriculum <i class="fa-solid fa-arrow-right text-[10px]"></i>
        </button>
        <button onclick="openAdmissionModal('${c.id}')" class="text-xs font-bold bg-blue-900 hover:bg-blue-800 text-white px-4 py-2 rounded-xl shadow-sm transition-all hover:shadow hover:-translate-y-0.5">
          Apply Now
        </button>
      </div>
    </div>
  `).join('');
}

function filterCourses(category, btnElement) {
  document.querySelectorAll('.course-tab').forEach(b => {
    b.classList.remove('bg-blue-950', 'text-white', 'shadow');
    b.classList.add('bg-slate-100', 'text-slate-700');
  });
  if (btnElement) {
    btnElement.classList.add('bg-blue-950', 'text-white', 'shadow');
    btnElement.classList.remove('bg-slate-100', 'text-slate-700');
  }
  renderCourses(category);
}

function openCourseModal(courseId) {
  const course = ACET_DATA.courses.find(c => c.id === courseId);
  if (!course) return;

  const modal = document.getElementById('courseModal');
  const content = document.getElementById('courseModalContent');

  content.innerHTML = `
    <div class="p-6 md:p-8">
      <div class="flex items-start justify-between border-b border-slate-100 pb-5 mb-6">
        <div>
          <span class="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200 inline-block mb-2">
            ${course.degree} • ${course.duration}
          </span>
          <h2 class="text-2xl font-bold text-slate-900">${course.name}</h2>
          <p class="text-sm text-slate-500 mt-1">${course.hindiName}</p>
        </div>
        <button onclick="closeModal('courseModal')" class="text-slate-400 hover:text-slate-600 p-2 rounded-lg hover:bg-slate-100">
          <i class="fa-solid fa-xmark text-xl"></i>
        </button>
      </div>

      <div class="space-y-6">
        <div>
          <h4 class="text-sm font-bold uppercase tracking-wider text-slate-500 mb-2">Program Overview</h4>
          <p class="text-sm text-slate-700 leading-relaxed">${course.description}</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="bg-blue-50/60 p-4 rounded-xl border border-blue-100">
            <span class="text-xs font-bold text-blue-900 uppercase block mb-1">
              <i class="fa-solid fa-graduation-cap mr-1 text-blue-600"></i> Eligibility Criteria
            </span>
            <p class="text-xs text-slate-700 leading-normal">${course.eligibility}</p>
          </div>
          <div class="bg-emerald-50/60 p-4 rounded-xl border border-emerald-100">
            <span class="text-xs font-bold text-emerald-900 uppercase block mb-1">
              <i class="fa-solid fa-file-invoice-dollar mr-1 text-emerald-600"></i> Standardized State Fee
            </span>
            <p class="text-base font-bold text-emerald-800">₹${course.annualFee.toLocaleString('en-IN')} <span class="text-xs font-normal text-slate-600">/ academic year</span></p>
            <p class="text-[11px] text-slate-500 mt-0.5">Approved under UP Fee Regulatory Committee &amp; AKTU guidelines.</p>
          </div>
        </div>

        <div>
          <h4 class="text-sm font-bold uppercase tracking-wider text-slate-500 mb-2.5">Key Curriculum &amp; Lab Highlights</h4>
          <ul class="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-slate-700">
            ${course.highlights.map(h => `
              <li class="flex items-start gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                <i class="fa-solid fa-circle-check text-emerald-600 mt-0.5"></i>
                <span>${h}</span>
              </li>
            `).join('')}
          </ul>
        </div>
      </div>

      <div class="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
        <div class="text-xs text-slate-500">
          <i class="fa-solid fa-phone mr-1 text-amber-600"></i> Admission Helpline: <strong class="text-slate-800">+91 95682 00064</strong>
        </div>
        <div class="flex items-center gap-3">
          <button onclick="closeModal('courseModal')" class="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900">
            Close
          </button>
          <button onclick="closeModal('courseModal'); openAdmissionModal('${course.id}')" class="px-5 py-2.5 bg-blue-900 hover:bg-blue-800 text-white text-xs font-bold rounded-xl shadow-md transition-all">
            Proceed with Application
          </button>
        </div>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

// -------------------------------------------------------------
// Facilities & Campus Showcase
// -------------------------------------------------------------
function renderFacilities(filter = 'all') {
  const container = document.getElementById('facilitiesContainer');
  if (!container) return;

  let list = ACET_DATA.facilities;
  if (filter !== 'all') {
    list = ACET_DATA.facilities.filter(f => f.category === filter);
  }

  container.innerHTML = list.map((f, idx) => `
    <div class="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover-lift flex flex-col group" data-aos="fade-up" data-aos-delay="${(idx % 3) * 100}">
      <div class="relative h-52 overflow-hidden bg-slate-900">
        <img src="${f.image}" alt="${f.title}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108" loading="lazy">
        <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
        <span class="absolute top-3.5 left-3.5 bg-blue-950/90 text-amber-300 backdrop-blur-md px-3 py-1 text-[11px] font-bold rounded-lg shadow-sm border border-amber-400/20">
          <i class="fa-solid ${f.icon} mr-1"></i> ${f.tag}
        </span>
      </div>
      <div class="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 class="text-base font-bold text-slate-900 mb-1.5 group-hover:text-blue-900 transition-colors">
            ${f.title}
          </h3>
          <p class="text-xs text-slate-600 leading-relaxed mb-4">
            ${f.description}
          </p>
        </div>
        <div class="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
          <span><i class="fa-solid fa-location-dot text-amber-500 mr-1"></i> Sasni Gate Campus</span>
          <span class="text-emerald-700 font-semibold"><i class="fa-solid fa-check mr-0.5"></i> Active Access</span>
        </div>
      </div>
    </div>
  `).join('');
}

function filterFacilities(category, btnElement) {
  document.querySelectorAll('.facility-tab').forEach(b => {
    b.classList.remove('bg-blue-950', 'text-white', 'shadow');
    b.classList.add('bg-slate-100', 'text-slate-700');
  });
  if (btnElement) {
    btnElement.classList.add('bg-blue-950', 'text-white', 'shadow');
    btnElement.classList.remove('bg-slate-100', 'text-slate-700');
  }
  renderFacilities(category);
}

// -------------------------------------------------------------
// Live Notices & Bulletin
// -------------------------------------------------------------
function renderNotices() {
  const container = document.getElementById('noticesContainer');
  if (!container) return;

  container.innerHTML = ACET_DATA.notices.map(n => `
    <div class="flex items-start gap-3 p-3.5 rounded-2xl hover:bg-slate-50 border border-slate-100 transition-all group cursor-pointer hover:border-blue-200" onclick="downloadNotice('${n.title}')">
      <div class="flex-shrink-0 w-12 text-center bg-blue-50 text-blue-950 rounded-xl p-1.5 border border-blue-100">
        <span class="text-[10px] font-bold uppercase block text-blue-800">${n.category}</span>
        <i class="fa-solid fa-file-pdf text-amber-600 text-sm mt-0.5"></i>
      </div>
      <div class="flex-1 min-w-0">
        <div class="flex items-center gap-2 mb-1">
          <span class="text-[11px] text-slate-400"><i class="fa-regular fa-clock mr-1"></i>${n.date}</span>
          ${n.isNew ? '<span class="text-[10px] font-bold px-1.5 py-0.2 bg-red-100 text-red-600 rounded">NEW</span>' : ''}
        </div>
        <h4 class="text-xs font-semibold text-slate-800 group-hover:text-blue-900 transition-colors line-clamp-2">
          ${n.title}
        </h4>
      </div>
      <div class="text-slate-400 group-hover:text-blue-900 text-xs">
        <i class="fa-solid fa-download"></i>
      </div>
    </div>
  `).join('');
}

function downloadNotice(title) {
  showToast(`Initiating download for circular: "${title}"`, 'info');
}

// -------------------------------------------------------------
// Reviews & Grievance Redressal
// -------------------------------------------------------------
function renderReviews() {
  const container = document.getElementById('reviewsContainer');
  if (!container) return;

  container.innerHTML = ACET_DATA.reviews.map((r, idx) => `
    <div class="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm hover-lift flex flex-col justify-between" data-aos="fade-up" data-aos-delay="${(idx % 2) * 150}">
      <div>
        <div class="flex items-center justify-between mb-3">
          <div class="flex items-center gap-3">
            <img src="${r.avatar}" alt="${r.author}" class="w-10 h-10 rounded-full object-cover border border-slate-200" onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(r.author)}&background=0D8ABC&color=fff'">
            <div>
              <h4 class="text-sm font-bold text-slate-900 leading-tight">${r.author}</h4>
              <p class="text-[11px] text-slate-500">${r.role}</p>
            </div>
          </div>
          <span class="text-[11px] font-semibold px-2.5 py-0.5 bg-amber-50 text-amber-800 rounded-md border border-amber-200">
            ${r.badge}
          </span>
        </div>

        <div class="flex items-center gap-1 text-amber-500 text-xs mb-3">
          ${Array.from({length: 5}, (_, i) => `<i class="fa-${i < r.rating ? 'solid' : 'regular'} fa-star"></i>`).join('')}
          <span class="text-slate-400 text-[11px] ml-1.5">${r.date}</span>
        </div>

        <p class="text-xs text-slate-700 leading-relaxed italic mb-4">
          "${r.comment}"
        </p>
      </div>

      <div class="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100">
        ${r.tags.map(t => `
          <span class="text-[10px] bg-slate-100 text-slate-600 px-2.5 py-0.5 rounded-full font-medium">
            #${t}
          </span>
        `).join('')}
      </div>
    </div>
  `).join('');
}

// -------------------------------------------------------------
// Transparent Fee Calculator
// -------------------------------------------------------------
function initFeeCalculator() {
  const courseSelect = document.getElementById('calcCourse');
  if (!courseSelect) return;

  courseSelect.innerHTML = ACET_DATA.courses.map(c => `
    <option value="${c.id}" data-fee="${c.annualFee}">${c.name} (₹${c.annualFee.toLocaleString('en-IN')}/yr)</option>
  `).join('');

  calculateFee();
}

function calculateFee() {
  const courseSelect = document.getElementById('calcCourse');
  const quotaSelect = document.getElementById('calcQuota');
  const hostelSelect = document.getElementById('calcHostel');

  if (!courseSelect || !quotaSelect || !hostelSelect) return;

  const selectedCourseId = courseSelect.value;
  const course = ACET_DATA.courses.find(c => c.id === selectedCourseId) || ACET_DATA.courses[0];
  const baseTuition = course.annualFee;

  let examFee = 7500;
  let cautionDeposit = 3000; // one time refundable
  let labDevFee = 4500;
  let scholarshipDiscount = 0;

  const quota = quotaSelect.value;
  if (quota === 'merit') {
    scholarshipDiscount = Math.round(baseTuition * 0.25); // 25% Merit waiver
  } else if (quota === 'sc_st_up') {
    scholarshipDiscount = Math.round(baseTuition * 0.70); // UP Post-Matric fee reimbursement
  } else if (quota === 'girl_child') {
    scholarshipDiscount = 5000;
  }

  let hostelFee = 0;
  if (hostelSelect.value === 'seater3') {
    hostelFee = 48000;
  } else if (hostelSelect.value === 'seater2') {
    hostelFee = 58000;
  } else if (hostelSelect.value === 'bus') {
    hostelFee = 14000; // Local Aligarh / Sasni Gate transport
  }

  const netTuition = Math.max(0, baseTuition - scholarshipDiscount);
  const totalPayable = netTuition + examFee + cautionDeposit + labDevFee + hostelFee;

  // Update UI Elements
  document.getElementById('breakdownTuition').innerText = `₹${baseTuition.toLocaleString('en-IN')}`;
  document.getElementById('breakdownExam').innerText = `₹${examFee.toLocaleString('en-IN')}`;
  document.getElementById('breakdownLab').innerText = `₹${labDevFee.toLocaleString('en-IN')}`;
  document.getElementById('breakdownCaution').innerText = `₹${cautionDeposit.toLocaleString('en-IN')} (Refundable)`;
  document.getElementById('breakdownDiscount').innerText = scholarshipDiscount > 0 ? `- ₹${scholarshipDiscount.toLocaleString('en-IN')}` : '₹0';
  document.getElementById('breakdownHostel').innerText = hostelFee > 0 ? `₹${hostelFee.toLocaleString('en-IN')}` : '₹0 (Day Scholar)';
  document.getElementById('breakdownTotal').innerText = `₹${totalPayable.toLocaleString('en-IN')}`;
}

// -------------------------------------------------------------
// FAQs
// -------------------------------------------------------------
function renderFaqs() {
  const container = document.getElementById('faqsContainer');
  if (!container) return;

  container.innerHTML = ACET_DATA.faqs.map((faq, index) => `
    <div class="border border-slate-200 rounded-2xl overflow-hidden bg-white" data-aos="fade-up" data-aos-delay="${index * 75}">
      <button class="w-full text-left p-4.5 font-semibold text-slate-800 hover:text-blue-900 flex items-center justify-between transition-colors faq-trigger" onclick="toggleFaq(${index})">
        <span class="text-sm font-bold flex items-center gap-2">
          <i class="fa-solid fa-circle-question text-amber-600 text-xs"></i>
          ${faq.q}
        </span>
        <i class="fa-solid fa-chevron-down text-xs text-slate-400 transition-transform duration-200" id="faq-icon-${index}"></i>
      </button>
      <div class="hidden px-5 pb-4.5 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50" id="faq-content-${index}">
        ${faq.a}
      </div>
    </div>
  `).join('');
}

function toggleFaq(index) {
  const content = document.getElementById(`faq-content-${index}`);
  const icon = document.getElementById(`faq-icon-${index}`);
  if (!content) return;

  const isHidden = content.classList.contains('hidden');
  if (isHidden) {
    content.classList.remove('hidden');
    icon.classList.add('rotate-180');
  } else {
    content.classList.add('hidden');
    icon.classList.remove('rotate-180');
  }
}

// -------------------------------------------------------------
// Admission Application Modal (4-step Wizard)
// -------------------------------------------------------------
let admissionCurrentStep = 1;

function openAdmissionModal(preselectedCourse = '') {
  admissionCurrentStep = 1;
  const modal = document.getElementById('admissionModal');
  const courseSelect = document.getElementById('appCourse');
  
  if (courseSelect) {
    courseSelect.innerHTML = ACET_DATA.courses.map(c => `
      <option value="${c.id}" ${c.id === preselectedCourse ? 'selected' : ''}>${c.name} (${c.degree})</option>
    `).join('');
  }

  showAdmissionStep(1);
  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function showAdmissionStep(step) {
  admissionCurrentStep = step;
  for (let s = 1; s <= 4; s++) {
    const el = document.getElementById(`admissionStep${s}`);
    const indicator = document.getElementById(`stepIndicator${s}`);
    if (el) el.classList.toggle('hidden', s !== step);
    if (indicator) {
      if (s <= step) {
        indicator.classList.remove('bg-slate-200', 'text-slate-600');
        indicator.classList.add('bg-blue-900', 'text-white');
      } else {
        indicator.classList.add('bg-slate-200', 'text-slate-600');
        indicator.classList.remove('bg-blue-900', 'text-white');
      }
    }
  }

  const nextBtn = document.getElementById('admissionNextBtn');
  const printBtn = document.getElementById('admissionPrintBtn');
  if (nextBtn && printBtn) {
    if (step === 4) {
      nextBtn.classList.add('hidden');
      printBtn.classList.remove('hidden');
    } else {
      nextBtn.classList.remove('hidden');
      nextBtn.innerText = step === 3 ? 'Generate Application Slip' : 'Continue Next';
      printBtn.classList.add('hidden');
    }
  }
}

function nextAdmissionStep() {
  if (admissionCurrentStep === 1) {
    const name = document.getElementById('appName')?.value.trim();
    const phone = document.getElementById('appPhone')?.value.trim();
    if (!name || !phone) {
      showToast('Please provide your name and contact phone number', 'error');
      return;
    }
  }
  if (admissionCurrentStep < 3) {
    showAdmissionStep(admissionCurrentStep + 1);
  } else if (admissionCurrentStep === 3) {
    submitAdmissionApplication();
  }
}

function prevAdmissionStep() {
  if (admissionCurrentStep > 1) {
    showAdmissionStep(admissionCurrentStep - 1);
  }
}

function submitAdmissionApplication() {
  const name = document.getElementById('appName')?.value || 'Student Candidate';
  const phone = document.getElementById('appPhone')?.value || '+91 95682 00064';
  const email = document.getElementById('appEmail')?.value || 'candidate@acetup.org';
  const courseId = document.getElementById('appCourse')?.value;
  const course = ACET_DATA.courses.find(c => c.id === courseId) || ACET_DATA.courses[0];
  
  const regId = 'ACET-2026-' + Math.floor(100000 + Math.random() * 900000);
  const dateStr = new Date().toLocaleDateString('en-IN', {
    day: 'numeric', month: 'short', year: 'numeric'
  });

  const slipContainer = document.getElementById('applicationSlipContainer');
  if (slipContainer) {
    slipContainer.innerHTML = `
      <div id="printable-area" class="border-2 border-dashed border-blue-900/40 rounded-3xl p-6 bg-slate-50 relative">
        <div class="flex items-center justify-between border-b border-slate-300 pb-4 mb-4">
          <div class="flex items-center gap-3">
            <img src="${ACET_DATA.institution.officialLogo}" alt="ACET Emblem" class="w-14 h-14 rounded-full object-contain border border-slate-300">
            <div>
              <h3 class="text-sm font-bold text-blue-950 uppercase tracking-wide">Aligarh College Of Engineering &amp; Technology</h3>
              <p class="text-[11px] text-slate-500">Affiliated to AKTU Lucknow | Approved by AICTE New Delhi | Code: 096</p>
            </div>
          </div>
          <div class="text-right">
            <span class="text-[11px] font-bold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-md border border-emerald-300">
              PROVISIONAL REGISTRATION
            </span>
            <p class="text-[11px] text-slate-500 mt-1">Date: ${dateStr}</p>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-3 text-xs mb-4">
          <div><span class="text-slate-500">Registration Number:</span> <strong class="text-blue-900 font-mono">${regId}</strong></div>
          <div><span class="text-slate-500">Candidate Name:</span> <strong class="text-slate-900">${name}</strong></div>
          <div><span class="text-slate-500">Contact Number:</span> <strong class="text-slate-900">${phone}</strong></div>
          <div><span class="text-slate-500">Email Address:</span> <strong class="text-slate-900">${email}</strong></div>
          <div><span class="text-slate-500">Program Applied:</span> <strong class="text-amber-800">${course.name}</strong></div>
          <div><span class="text-slate-500">Standard Annual Fee:</span> <strong class="text-emerald-700">₹${course.annualFee.toLocaleString('en-IN')}/yr</strong></div>
        </div>

        <div class="bg-amber-50/80 p-3 rounded-xl border border-amber-200 text-[11px] text-amber-900 mb-4">
          <i class="fa-solid fa-circle-info mr-1"></i>
          <strong>Next Steps:</strong> Please visit the ACET Admissions Office (Mathura Bypass Rd, Sasni Gate, Aligarh) with this registration slip, original marksheets, and passport size photos within 7 working days.
        </div>

        <div class="flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-slate-200">
          <span>Admissions Helpline: +91 95682 00064 / 095682 00010</span>
          <span>Online Portal: acetup.org</span>
        </div>
      </div>
    `;
  }

  showAdmissionStep(4);
  showToast(`Application successfully generated! ID: ${regId}`, 'success');
}

function printApplicationSlip() {
  window.print();
}

// -------------------------------------------------------------
// Grievance Redressal & Review Submission
// -------------------------------------------------------------
function submitGrievance(event) {
  event.preventDefault();
  const name = document.getElementById('grievanceName')?.value;
  const message = document.getElementById('grievanceMsg')?.value;

  if (!name || !message) {
    showToast('Please fill out all required fields.', 'error');
    return;
  }

  const token = 'GRV-' + Math.floor(1000 + Math.random() * 9000);
  
  showToast(`Feedback / Grievance submitted successfully! Reference Token: ${token}`, 'success');
  event.target.reset();

  const successBox = document.getElementById('grievanceSuccessAlert');
  if (successBox) {
    successBox.classList.remove('hidden');
    document.getElementById('grievanceTokenDisplay').innerText = token;
  }
}

function submitNewReview(event) {
  event.preventDefault();
  const author = document.getElementById('newReviewAuthor')?.value;
  const role = document.getElementById('newReviewRole')?.value;
  const rating = parseInt(document.getElementById('newReviewRating')?.value) || 5;
  const comment = document.getElementById('newReviewComment')?.value;

  if (!author || !comment) {
    showToast('Please enter your name and comments', 'error');
    return;
  }

  const newRev = {
    id: 'rev-' + (ACET_DATA.reviews.length + 1),
    author: author,
    role: role || 'Community Member',
    avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(author)}&background=0D8ABC&color=fff`,
    rating: rating,
    date: 'Just now',
    badge: 'Recent Review',
    comment: comment,
    tags: ["Student Voice", "Feedback"]
  };

  ACET_DATA.reviews.unshift(newRev);
  renderReviews();
  closeModal('writeReviewModal');
  showToast('Thank you for your valuable review!', 'success');
  event.target.reset();
}

// -------------------------------------------------------------
// Modal Helpers
// -------------------------------------------------------------
function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  }
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

// -------------------------------------------------------------
// Search Functionality
// -------------------------------------------------------------
function openSearchModal() {
  openModal('searchModal');
  const searchInput = document.getElementById('siteSearchInput');
  if (searchInput) {
    setTimeout(() => searchInput.focus(), 100);
  }
}

function handleSearch(query) {
  const q = query.toLowerCase().trim();
  const resultsContainer = document.getElementById('searchResultsContainer');
  if (!resultsContainer) return;

  if (!q) {
    resultsContainer.innerHTML = '<p class="text-xs text-slate-400 p-4 text-center">Type a keyword to search programs, labs, faculty, notices...</p>';
    return;
  }

  const matches = [];

  // Search courses
  ACET_DATA.courses.forEach(c => {
    if (c.name.toLowerCase().includes(q) || c.description.toLowerCase().includes(q) || c.degree.toLowerCase().includes(q)) {
      matches.push({
        type: 'Program',
        title: c.name,
        subtitle: `${c.degree} • ₹${c.annualFee.toLocaleString('en-IN')}/yr`,
        action: () => { closeModal('searchModal'); openCourseModal(c.id); }
      });
    }
  });

  // Search gallery
  ACET_DATA.campusGallery.forEach(g => {
    if (g.title.toLowerCase().includes(q) || g.description.toLowerCase().includes(q)) {
      matches.push({
        type: 'Campus Photo',
        title: g.title,
        subtitle: g.tag,
        action: () => { closeModal('searchModal'); location.href = '#campus-gallery'; }
      });
    }
  });

  // Search notices
  ACET_DATA.notices.forEach(n => {
    if (n.title.toLowerCase().includes(q)) {
      matches.push({
        type: 'Notice',
        title: n.title,
        subtitle: n.date,
        action: () => { closeModal('searchModal'); downloadNotice(n.title); }
      });
    }
  });

  if (matches.length === 0) {
    resultsContainer.innerHTML = `<p class="text-xs text-slate-500 p-4 text-center">No results found for "${query}". Try searching "B.Tech", "Pharmacy", "AC lab", or "fee".</p>`;
    return;
  }

  resultsContainer.innerHTML = matches.map((m, idx) => `
    <div class="p-3 hover:bg-slate-50 rounded-xl cursor-pointer border-b border-slate-100 flex items-center justify-between" onclick="searchResultActions[${idx}]()">
      <div>
        <span class="text-[10px] font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 uppercase">${m.type}</span>
        <h4 class="text-xs font-bold text-slate-900 mt-1">${m.title}</h4>
        <p class="text-[11px] text-slate-500">${m.subtitle}</p>
      </div>
      <i class="fa-solid fa-arrow-right text-xs text-slate-400"></i>
    </div>
  `).join('');

  window.searchResultActions = matches.map(m => m.action);
}

// -------------------------------------------------------------
// Toast Alerts
// -------------------------------------------------------------
function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  const colors = {
    success: 'bg-emerald-900 text-white border-emerald-700',
    error: 'bg-rose-900 text-white border-rose-700',
    info: 'bg-blue-950 text-white border-blue-800'
  };

  const icons = {
    success: 'fa-circle-check text-emerald-400',
    error: 'fa-circle-exclamation text-rose-400',
    info: 'fa-circle-info text-amber-400'
  };

  toast.className = `flex items-center gap-3 px-4 py-3 rounded-2xl border shadow-xl text-xs font-medium transform transition-all duration-300 translate-y-2 opacity-0 ${colors[type] || colors.info}`;
  toast.innerHTML = `
    <i class="fa-solid ${icons[type] || icons.info}"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.remove('translate-y-2', 'opacity-0');
  }, 10);

  setTimeout(() => {
    toast.classList.add('opacity-0', 'translate-y-2');
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// -------------------------------------------------------------
// Event Listeners & Global Setup
// -------------------------------------------------------------
function setupEventListeners() {
  const mobileBtn = document.getElementById('mobileMenuBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const closeMobileDrawer = document.getElementById('closeMobileDrawer');

  if (mobileBtn && mobileDrawer) {
    mobileBtn.addEventListener('click', () => {
      mobileDrawer.classList.toggle('hidden');
    });
  }

  if (closeMobileDrawer && mobileDrawer) {
    closeMobileDrawer.addEventListener('click', () => {
      mobileDrawer.classList.add('hidden');
    });
  }

  document.querySelectorAll('.modal-backdrop').forEach(backdrop => {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) {
        backdrop.classList.add('hidden');
        backdrop.classList.remove('flex');
      }
    });
  });

  window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      openSearchModal();
    }
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-backdrop').forEach(m => {
        m.classList.add('hidden');
        m.classList.remove('flex');
      });
      closeLightbox();
    }
  });
}
