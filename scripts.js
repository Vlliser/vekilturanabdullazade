/* ============================================
   TURAN ABDULLAZADƏ - VƏKİL
   Main JavaScript
   ============================================ */

/* ---- TRANSLATIONS ---- */
const translations = {
  az: {
    // Nav
    nav_practice: "Fəaliyyət",
    nav_about: "Haqqında",
    nav_testimonials: "Rəylər",
    nav_certificates: "Sertifikatlar",
    nav_media: "Media",
    nav_consultation: "Məsləhət",
    nav_contact: "Əlaqə",
    nav_cta: "Əlaqə saxla",

    // Hero
    hero_badge: "Aktiv qəbul",
    hero_eyebrow: "Bakı şəhəri • Azərbaycan",
    hero_title1: "Abdullazadə",
    hero_title2: "Turan",
    hero_role: "Vəkil",
    hero_desc: "Hüquqi problemlərinizdə yanınızdayam. Ailə, cinayət, əmlak və inzibati hüquq sahələrində 7 illik təcrübə ilə hüquqlarınızı qoruyuram.",
    hero_cta: "Məsləhət al",
    hero_whatsapp: "WhatsApp",
    hero_stat1_num: "7",
    hero_stat1_label: "il təcrübə",
    hero_stat2_num: "200+",
    hero_stat2_label: "uğurlu iş",
    hero_stat3_num: "4",
    hero_stat3_label: "hüquq sahəsi",

    // Practice
    practice_label: "Fəaliyyət istiqamətləri",
    practice_title: "Hüquqi xidmətlər",
    practice_desc: "Vəkillik fəaliyyətimin əsas istiqamətlərini aşağıda görə bilərsiniz. Hər bir sahədə fərdi yanaşma ilə hüquqlarınızı müdafiə edirəm.",
    p1_name: "Ailə hüququ",
    p1_brief: "Boşanma, aliment, uşağa qəyyumluq, əmlakın bölünməsi məsələlərini peşəkarcasına həll edirəm.",
    p2_name: "Cinayət hüququ",
    p2_brief: "Cinayət prosesinin bütün mərhələlərində müdafiə. İttisham olunan şəxsin hüquqlarının qorunması.",
    p3_name: "İnzibati hüquq",
    p3_brief: "Dövlət orqanlarının qərarlarının etiraz edilməsi, inzibati pozuntulara görə müdafiə.",
    p4_name: "Əmlak hüququ",
    p4_brief: "Daşınmaz əmlak alqı-satqısı, mülkiyyət hüququ mübahisələri, icarə müqavilələri.",
    p5_name: "Publik hüquq",
    p5_brief: "İctimai və dövlət orqanları ilə bağlı hüquqi məsələlər, vətəndaş hüquqlarının müdafiəsi.",
    p6_name: "Müqavilə hüququ",
    p6_brief: "Müqavilələrin hazırlanması, nəzərdən keçirilməsi, pozuntu hallarında hüquqi müdafiə.",
    p7_name: "Miras hüququ",
    p7_brief: "Vərəsəlik mübahisələri, vəsiyyətnamin icrasının nəzarəti, miras paylarının müəyyənləşdirilməsi.",
    p8_name: "İş hüququ",
    p8_brief: "İşçi hüquqlarının müdafiəsi, işdən haqsız çıxarılma, əmək müqaviləsi mübahisələri.",

    // About
    about_label: "Haqqımda",
    about_title: "Hüquq — mənim\npeyşəm və missiyam",
    about_text1: "Mən Abdullazadə Turan Elşad oğluyam — Azərbaycan Respublikasının lisenziyalı vəkili. 7 illik vəkillik fəaliyyətim ərzində yüzlərlə müvəkkilin hüquqlarını müdafiə etmişəm.",
    about_text2: "İşimi həm peşə, həm də missiya kimi qəbul edirəm. Hər bir işə ciddi və məsuliyyətlə yanaşır, müvəkkillərimin maraqlarını ön planda tuturam.",
    about_info_exp_label: "Vəkillik müddəti",
    about_info_exp_val: "7 il",
    about_info_bureau_label: "Vəkil bürosu",
    about_info_bureau_val: "Bakı 20 saylı Vəkil Bürosu",
    about_info_district_label: "Fəaliyyət rayonu",
    about_info_district_val: "Nərimanov r-nu, Bakı",
    about_info_edu_label: "Təhsil",
    about_info_edu_val: "Ali hüquq təhsili",
    about_langs_label: "Xarici dillər",
    lang_az: "Azərbaycan",
    lang_ru: "Rus",
    lang_en: "İngilis",
    lang_tr: "Türk",

    // Stats
    stat1_num: "7+",
    stat1_label: "İl təcrübə",
    stat2_num: "200+",
    stat2_label: "Uğurlu iş",
    stat3_num: "4",
    stat3_label: "Hüquq sahəsi",
    stat4_num: "24/7",
    stat4_label: "Əlaqə imkanı",

    // Testimonials
    testimonials_label: "Müvəkkillərin rəyləri",
    testimonials_title: "Onlar bizə etibar etdi",

    // Certificates
    certs_label: "Sertifikatlar",
    certs_title: "Peşəkar inkişaf",
    certs_note: "Bu bölmə tezliklə əlavə sertifikatlarla doldurulacaq",

    // Media
    media_label: "Media çıxışları",
    media_title: "Mətbuatda Turan Abdullazadə",
    media_note: "Bu bölmə real media çıxışları əlavə edildikdə yenilənəcək",

    // Consultation
    consult_label: "Məsləhət",
    consult_title: "Məsləhətə yazılın",
    consult_desc: "Hüquqi problemlərinizdə kömək etməyə hazıram. Əlaqə formasını doldurun, qısa zamanda sizinlə əlaqə saxlayacağam.",
    consult_feat1_title: "Məxfi məlumatlar",
    consult_feat1_desc: "Müvəkkilin bütün məlumatları tam məxfilik çərçivəsindədir",
    consult_feat2_title: "Fərdi yanaşma",
    consult_feat2_desc: "Hər iş fərdi olaraq araşdırılır",
    consult_feat3_title: "Sürətli cavab",
    consult_feat3_desc: "24 saat ərzində cavab zəmanəti",
    form_title: "Formu doldurun",
    form_subtitle: "WhatsApp üzərindən dərhal əlaqə",
    form_name_label: "Ad, Soyad",
    form_name_ph: "Adınızı daxil edin",
    form_phone_label: "Telefon",
    form_phone_ph: "+994 XX XXX XX XX",
    form_subject_label: "Hüquq sahəsi",
    form_subject_ph: "Seçin...",
    form_message_label: "Məsələnin qısa izahı",
    form_message_ph: "Probleminizdən qısaca yazın...",
    form_submit: "WhatsApp-a göndər",

    // Contact
    contact_label: "Əlaqə",
    contact_title: "Bizimlə əlaqə",
    contact_phone_label: "Telefon",
    contact_email_label: "E-poçt",
    contact_address_label: "Ünvan",
    contact_address_val: "Bakı ş., Nərimanov r., Sabit Rəhman küç. 35, mən. 40",
    contact_bureau_label: "Vəkil bürosu",
    contact_bureau_val: "Bakı şəhəri 20 saylı Vəkil Bürosu",
    contact_hours_label: "Qəbul saatları",
    contact_hours_val: "B.e – Cümə: 09:00 – 18:00",

    // Footer
    footer_desc: "Azərbaycan Respublikasının lisenziyalı vəkili. Hüquqi problemlərinizdə yanınızdayam.",
    footer_links_label: "Keçidlər",
    footer_contact_label: "Əlaqə",
    footer_copy: "© 2024 Abdullazadə Turan. Bütün hüquqlar qorunur."
  },

  ru: {
    nav_practice: "Практика",
    nav_about: "О себе",
    nav_testimonials: "Отзывы",
    nav_certificates: "Сертификаты",
    nav_media: "Медиа",
    nav_consultation: "Консультация",
    nav_contact: "Контакты",
    nav_cta: "Связаться",
    hero_badge: "Принимает клиентов",
    hero_eyebrow: "Баку, Азербайджан",
    hero_title1: "Абдуллазаде",
    hero_title2: "Туран",
    hero_role: "Адвокат",
    hero_desc: "Нахожусь рядом в юридических вопросах. Защищаю ваши права в сферах семейного, уголовного, имущественного и административного права с 7-летним опытом.",
    hero_cta: "Получить консультацию",
    hero_whatsapp: "WhatsApp",
    hero_stat1_num: "7",
    hero_stat1_label: "лет практики",
    hero_stat2_num: "200+",
    hero_stat2_label: "успешных дел",
    hero_stat3_num: "4",
    hero_stat3_label: "сферы права",
    practice_label: "Направления практики",
    practice_title: "Юридические услуги",
    practice_desc: "Ниже представлены основные направления моей адвокатской деятельности. В каждой сфере применяю индивидуальный подход к защите ваших прав.",
    p1_name: "Семейное право",
    p1_brief: "Развод, алименты, опека над детьми, раздел имущества — решаю профессионально.",
    p2_name: "Уголовное право",
    p2_brief: "Защита на всех стадиях уголовного процесса. Охрана прав обвиняемого.",
    p3_name: "Административное право",
    p3_brief: "Обжалование решений госорганов, защита по административным правонарушениям.",
    p4_name: "Имущественное право",
    p4_brief: "Купля-продажа недвижимости, споры о праве собственности, договоры аренды.",
    p5_name: "Публичное право",
    p5_brief: "Правовые вопросы, связанные с государственными органами, защита прав граждан.",
    p6_name: "Договорное право",
    p6_brief: "Составление, проверка договоров, правовая защита при нарушениях.",
    p7_name: "Наследственное право",
    p7_brief: "Наследственные споры, контроль исполнения завещания, определение долей.",
    p8_name: "Трудовое право",
    p8_brief: "Защита прав работников, незаконное увольнение, трудовые споры.",
    about_label: "Обо мне",
    about_title: "Право — моя\nпрофессия и миссия",
    about_text1: "Я — Абдуллазаде Туран Эльшад оглу, лицензированный адвокат Азербайджанской Республики. За 7 лет адвокатской практики я защищал права сотен клиентов.",
    about_text2: "Воспринимаю свою работу как профессию и миссию одновременно. К каждому делу подхожу серьёзно и ответственно, ставя интересы клиента на первый план.",
    about_info_exp_label: "Стаж адвокатуры",
    about_info_exp_val: "7 лет",
    about_info_bureau_label: "Адвокатское бюро",
    about_info_bureau_val: "Адвокатское бюро №20 г. Баку",
    about_info_district_label: "Район деятельности",
    about_info_district_val: "Нариманов р-н, Баку",
    about_info_edu_label: "Образование",
    about_info_edu_val: "Высшее юридическое",
    about_langs_label: "Иностранные языки",
    lang_az: "Азербайджанский",
    lang_ru: "Русский",
    lang_en: "Английский",
    lang_tr: "Турецкий",
    stat1_num: "7+",
    stat1_label: "Лет практики",
    stat2_num: "200+",
    stat2_label: "Успешных дел",
    stat3_num: "4",
    stat3_label: "Сферы права",
    stat4_num: "24/7",
    stat4_label: "Доступность",
    testimonials_label: "Отзывы клиентов",
    testimonials_title: "Они доверились нам",
    certs_label: "Сертификаты",
    certs_title: "Профессиональное развитие",
    certs_note: "Этот раздел будет пополнен реальными сертификатами",
    media_label: "Медиавыступления",
    media_title: "Туран Абдуллазаде в прессе",
    media_note: "Раздел будет обновлён при добавлении реальных медиавыступлений",
    consult_label: "Консультация",
    consult_title: "Запишитесь на консультацию",
    consult_desc: "Готов помочь в решении юридических вопросов. Заполните форму, и я свяжусь с вами в ближайшее время.",
    consult_feat1_title: "Конфиденциальность",
    consult_feat1_desc: "Все данные клиента защищены полной конфиденциальностью",
    consult_feat2_title: "Индивидуальный подход",
    consult_feat2_desc: "Каждое дело рассматривается индивидуально",
    consult_feat3_title: "Быстрый ответ",
    consult_feat3_desc: "Гарантия ответа в течение 24 часов",
    form_title: "Заполните форму",
    form_subtitle: "Мгновенная связь через WhatsApp",
    form_name_label: "Имя, Фамилия",
    form_name_ph: "Введите ваше имя",
    form_phone_label: "Телефон",
    form_phone_ph: "+994 XX XXX XX XX",
    form_subject_label: "Сфера права",
    form_subject_ph: "Выберите...",
    form_message_label: "Краткое описание вопроса",
    form_message_ph: "Кратко опишите вашу проблему...",
    form_submit: "Отправить в WhatsApp",
    contact_label: "Контакты",
    contact_title: "Свяжитесь с нами",
    contact_phone_label: "Телефон",
    contact_email_label: "E-mail",
    contact_address_label: "Адрес",
    contact_address_val: "г. Баку, Нариманов р-н, ул. Сабита Рахмана 35, кв. 40",
    contact_bureau_label: "Адвокатское бюро",
    contact_bureau_val: "Адвокатское бюро №20 г. Баку",
    contact_hours_label: "Часы приёма",
    contact_hours_val: "Пн – Пт: 09:00 – 18:00",
    footer_desc: "Лицензированный адвокат Азербайджанской Республики. Всегда рядом в ваших юридических вопросах.",
    footer_links_label: "Навигация",
    footer_contact_label: "Контакты",
    footer_copy: "© 2024 Абдуллазаде Туран. Все права защищены."
  },

  en: {
    nav_practice: "Practice",
    nav_about: "About",
    nav_testimonials: "Reviews",
    nav_certificates: "Certificates",
    nav_media: "Media",
    nav_consultation: "Consultation",
    nav_contact: "Contact",
    nav_cta: "Get in touch",
    hero_badge: "Now accepting clients",
    hero_eyebrow: "Baku, Azerbaijan",
    hero_title1: "Abdullazade",
    hero_title2: "Turan",
    hero_role: "Attorney at Law",
    hero_desc: "Protecting your rights with dedication and expertise. 7 years of experience in family, criminal, property, and administrative law.",
    hero_cta: "Get consultation",
    hero_whatsapp: "WhatsApp",
    hero_stat1_num: "7",
    hero_stat1_label: "Years of practice",
    hero_stat2_num: "200+",
    hero_stat2_label: "Successful cases",
    hero_stat3_num: "4",
    hero_stat3_label: "Legal specialties",
    practice_label: "Areas of practice",
    practice_title: "Legal services",
    practice_desc: "Below are the key areas of my legal practice. I apply an individual approach in each field to protect your rights effectively.",
    p1_name: "Family Law",
    p1_brief: "Divorce, alimony, child custody, asset division — professionally resolved.",
    p2_name: "Criminal Law",
    p2_brief: "Defense at all stages of criminal proceedings. Protection of the accused's rights.",
    p3_name: "Administrative Law",
    p3_brief: "Challenging government decisions, defense in administrative violations.",
    p4_name: "Property Law",
    p4_brief: "Real estate transactions, ownership disputes, lease agreements.",
    p5_name: "Public Law",
    p5_brief: "Legal matters involving public authorities, civil rights protection.",
    p6_name: "Contract Law",
    p6_brief: "Drafting, reviewing contracts, legal protection upon breach.",
    p7_name: "Inheritance Law",
    p7_brief: "Inheritance disputes, will execution oversight, share determination.",
    p8_name: "Labor Law",
    p8_brief: "Employee rights protection, wrongful dismissal, employment disputes.",
    about_label: "About me",
    about_title: "Law — my\nprofession & mission",
    about_text1: "I am Abdullazade Turan Elshad oglu — a licensed attorney of the Republic of Azerbaijan. Over 7 years of legal practice, I have defended the rights of hundreds of clients.",
    about_text2: "I treat my work as both a profession and a mission. I approach each case with seriousness and responsibility, placing my clients' interests first.",
    about_info_exp_label: "Legal experience",
    about_info_exp_val: "7 years",
    about_info_bureau_label: "Law office",
    about_info_bureau_val: "Baku Law Office No. 20",
    about_info_district_label: "Service area",
    about_info_district_val: "Narimanov dist., Baku",
    about_info_edu_label: "Education",
    about_info_edu_val: "Higher legal education",
    about_langs_label: "Foreign languages",
    lang_az: "Azerbaijani",
    lang_ru: "Russian",
    lang_en: "English",
    lang_tr: "Turkish",
    stat1_num: "7+",
    stat1_label: "Years of practice",
    stat2_num: "200+",
    stat2_label: "Successful cases",
    stat3_num: "4",
    stat3_label: "Legal specialties",
    stat4_num: "24/7",
    stat4_label: "Availability",
    testimonials_label: "Client reviews",
    testimonials_title: "They trusted us",
    certs_label: "Certificates",
    certs_title: "Professional development",
    certs_note: "This section will be updated with real certificates",
    media_label: "Media appearances",
    media_title: "Turan Abdullazade in the press",
    media_note: "This section will be updated with real media appearances",
    consult_label: "Consultation",
    consult_title: "Book a consultation",
    consult_desc: "Ready to help with your legal issues. Fill out the form and I will contact you shortly.",
    consult_feat1_title: "Confidentiality",
    consult_feat1_desc: "All client data is fully protected and confidential",
    consult_feat2_title: "Individual approach",
    consult_feat2_desc: "Every case is handled individually",
    consult_feat3_title: "Fast response",
    consult_feat3_desc: "Guaranteed response within 24 hours",
    form_title: "Fill the form",
    form_subtitle: "Instant connection via WhatsApp",
    form_name_label: "Name, Surname",
    form_name_ph: "Enter your name",
    form_phone_label: "Phone",
    form_phone_ph: "+994 XX XXX XX XX",
    form_subject_label: "Legal area",
    form_subject_ph: "Select...",
    form_message_label: "Brief description",
    form_message_ph: "Briefly describe your issue...",
    form_submit: "Send via WhatsApp",
    contact_label: "Contact",
    contact_title: "Get in touch",
    contact_phone_label: "Phone",
    contact_email_label: "E-mail",
    contact_address_label: "Address",
    contact_address_val: "Baku, Narimanov dist., Sabit Rahman st. 35, apt. 40",
    contact_bureau_label: "Law office",
    contact_bureau_val: "Baku Law Office No. 20",
    contact_hours_label: "Office hours",
    contact_hours_val: "Mon – Fri: 09:00 – 18:00",
    footer_desc: "Licensed attorney of the Republic of Azerbaijan. Here to help with your legal matters.",
    footer_links_label: "Navigation",
    footer_contact_label: "Contact",
    footer_copy: "© 2024 Abdullazade Turan. All rights reserved."
  }
};

/* ---- STATE ---- */
let currentLang = localStorage.getItem('lang') || 'az';

/* ---- PRELOADER ---- */
function hidePreloader() {
  const pl = document.getElementById('preloader');
  if (pl && !pl.classList.contains('hidden')) pl.classList.add('hidden');
}
document.addEventListener('DOMContentLoaded', () => { setTimeout(hidePreloader, 800); });
window.addEventListener('load', () => { setTimeout(hidePreloader, 400); });
setTimeout(hidePreloader, 3000);

/* ---- NAVBAR SCROLL ---- */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) navbar.classList.add('scrolled');
  else navbar.classList.remove('scrolled');
  updateActiveNav();
});

function updateActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const scrollPos = window.scrollY + 100;
  sections.forEach(sec => {
    const top = sec.offsetTop;
    const bottom = top + sec.offsetHeight;
    const link = document.querySelector(`.nav-links a[href="#${sec.id}"]`);
    if (link) {
      if (scrollPos >= top && scrollPos < bottom) link.classList.add('active');
      else link.classList.remove('active');
    }
  });
}

/* ---- MOBILE MENU ---- */
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobile-menu');
burger.addEventListener('click', () => {
  burger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
  document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
});
document.querySelectorAll('#mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    burger.classList.remove('open');
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  });
});

/* ---- LANGUAGE SWITCHER ---- */
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  const t = translations[lang];

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = t[key];
      } else if (el.tagName === 'OPTION' && el.value === '') {
        el.textContent = t[key];
      } else {
        el.innerHTML = t[key].replace(/\n/g, '<br>');
      }
    }
  });

  // Update all lang buttons
  document.querySelectorAll('.lang-btn, .mobile-lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  document.documentElement.lang = lang;
}

document.querySelectorAll('.lang-btn, .mobile-lang-btn').forEach(btn => {
  btn.addEventListener('click', () => setLanguage(btn.getAttribute('data-lang')));
});

/* ---- COUNTER ANIMATION ---- */
function animateCounter(el) {
  const target = parseFloat(el.getAttribute('data-count'));
  const suffix = el.getAttribute('data-suffix') || '';
  const prefix = el.getAttribute('data-prefix') || '';
  const duration = 1800;
  const start = performance.now();
  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = Math.floor(eased * target);
    el.textContent = prefix + value + suffix;
    if (progress < 1) requestAnimationFrame(update);
    else el.textContent = prefix + target + suffix;
  }
  requestAnimationFrame(update);
}

/* ---- SCROLL REVEAL ---- */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      // Animate counters
      const counters = entry.target.querySelectorAll('[data-count]');
      counters.forEach(c => animateCounter(c));
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// Also observe stat items directly
const statObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const counters = entry.target.querySelectorAll('[data-count]');
      counters.forEach(c => animateCounter(c));
      statObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });
document.querySelectorAll('.stats-grid, .hero-stats').forEach(el => statObserver.observe(el));

/* ---- CONSULTATION FORM → WHATSAPP ---- */
const consultForm = document.getElementById('consult-form');
if (consultForm) {
  consultForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('f-name').value.trim();
    const phone = document.getElementById('f-phone').value.trim();
    const subject = document.getElementById('f-subject').value;
    const message = document.getElementById('f-message').value.trim();

    const t = translations[currentLang];
    const text = `👋 Salam, Turan bəy!\n\n📋 *Məsləhət üçün müraciət:*\n\n👤 Ad: ${name}\n📞 Telefon: ${phone}\n⚖️ Sahə: ${subject}\n💬 Məsələ: ${message}`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/994709807807?text=${encoded}`, '_blank');
  });
}

/* ---- INIT ---- */
setLanguage(currentLang);
