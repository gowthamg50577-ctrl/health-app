// CarePassport Frontend Application

// ==========================================================================
// 1. LOCALIZATION SYSTEM (English, Spanish, Bengali, Haitian Creole)
// ==========================================================================
const translations = {
    en: {
        workers_list: "Registered Workers",
        welcome_title: "Healthcare Continuity Without Borders",
        welcome_desc: "CarePassport bridges the documentation gap for seasonal agricultural, construction, and migrant workers. Securely store essential vitals, chronic conditions, and immunization logs that travel anywhere, online or offline.",
        stat_active_workers: "Active Passports",
        stat_clinics: "Interstate Clinics",
        stat_offline: "Offline Syncs",
        getting_started: "Quick Start Guide",
        label_id: "Care ID:",
        label_dob: "DOB:",
        label_languages: "Languages:",
        btn_ai_history: "AI Voice Builder",
        btn_add_visit: "Add Clinic Visit",
        sec_core_medical: "Core Medical Summary",
        label_blood: "Blood Type",
        label_allergies_count: "Allergies",
        label_allergies: "Allergies",
        label_conditions: "Chronic Conditions",
        sec_meds_vaccines: "Meds & Vaccines",
        label_current_meds: "Current Prescribed Medications",
        label_immunizations: "Immunization Records",
        sec_emergency: "Emergency Contact",
        card_offline_status: "Cached Offline",
        qr_hint: "Scan for full records",
        btn_download: "Download Card",
        btn_sms: "Send via SMS",
        sec_timeline: "Cross-Border Care Timeline",
        voice_lang: "Guided Language:",
        empty_allergies: "No known allergies",
        empty_conditions: "No chronic conditions recorded",
        empty_meds: "No active medications",
        empty_vaccines: "No immunizations registered",
        copied_toast: "Care ID copied to clipboard!",
        sms_toast: "Mock SMS sent to patient's contact number!",
        offline_active_toast: "Offline Mode Active. Data loaded from local cache.",
        online_active_toast: "Back Online! Syncing offline records with backend...",
        add_visit_success: "Visit record added successfully!",
        registration_success: "New worker registered successfully!"
    },
    es: {
        workers_list: "Trabajadores Registrados",
        welcome_title: "Continuidad Médica Sin Fronteras",
        welcome_desc: "CarePassport cierra la brecha de documentación para trabajadores agrícolas de temporada, de la construcción y migrantes. Almacene signos vitales esenciales, afecciones crónicas y registros de vacunación de manera segura y llévelos a cualquier lugar, con o sin conexión.",
        stat_active_workers: "Pasaportes Activos",
        stat_clinics: "Clínicas Interestatales",
        stat_offline: "Sincronizaciones",
        getting_started: "Guía de Inicio Rápido",
        label_id: "ID de Cuidado:",
        label_dob: "Fecha Nac.:",
        label_languages: "Idiomas:",
        btn_ai_history: "Creador por Voz",
        btn_add_visit: "Añadir Visita",
        sec_core_medical: "Resumen Médico Principal",
        label_blood: "Grupo Sanguíneo",
        label_allergies_count: "Alergias",
        label_allergies: "Alergias",
        label_conditions: "Condiciones Crónicas",
        sec_meds_vaccines: "Medicina y Vacunas",
        label_current_meds: "Medicamentos Prescritos Actuales",
        label_immunizations: "Registro de Vacunación",
        sec_emergency: "Contacto de Emergencia",
        card_offline_status: "Guardado sin conexión",
        qr_hint: "Escanear para historial",
        btn_download: "Descargar Tarjeta",
        btn_sms: "Enviar por SMS",
        sec_timeline: "Línea de Tiempo Interestatal",
        voice_lang: "Idioma Guiado:",
        empty_allergies: "Sin alergias conocidas",
        empty_conditions: "Sin condiciones crónicas registradas",
        empty_meds: "Sin medicamentos activos",
        empty_vaccines: "Sin vacunas registradas",
        copied_toast: "¡ID de Cuidado copiado al portapapeles!",
        sms_toast: "¡Mensaje SMS simulado enviado al contacto del paciente!",
        offline_active_toast: "Modo sin conexión activo. Datos cargados de la memoria local.",
        online_active_toast: "¡De nuevo en línea! Sincronizando registros con el servidor...",
        add_visit_success: "¡Registro de visita añadido con éxito!",
        registration_success: "¡Nuevo trabajador registrado con éxito!"
    },
    bn: {
        workers_list: "নিবন্ধিত কর্মী",
        welcome_title: "সীমানাহীন স্বাস্থ্যসেবা ধারাবাহিকতা",
        welcome_desc: "কেয়ারপাসপোর্ট মৌসুমী কৃষি, নির্মাণ এবং অভিবাসী কর্মীদের জন্য নথিপত্রের অভাব পূরণ করে। জরুরি ভাইটাল, দীর্ঘস্থায়ী শারীরিক সমস্যা এবং টিকা দেওয়ার লগগুলি নিরাপদে সংরক্ষণ করুন যা যেকোনো জায়গায়, অনলাইন বা অফলাইনে ব্যবহার করা সম্ভব।",
        stat_active_workers: "সক্রিয় পাসপোর্ট",
        stat_clinics: "আন্তঃরাজ্য ক্লিনিক",
        stat_offline: "অফলাইন সিঙ্ক",
        getting_started: "সহজ নির্দেশিকা",
        label_id: "কেয়ার আইডি:",
        label_dob: "জন্ম তারিখ:",
        label_languages: "ভাষা সমূহ:",
        btn_ai_history: "এআই ভয়েস বিল্ডার",
        btn_add_visit: "নতুন ক্লিনিক ভিজিট",
        sec_core_medical: "মূল চিকিৎসাগত সারাংশ",
        label_blood: "রক্তের গ্রুপ",
        label_allergies_count: "অ্যালার্জি",
        label_allergies: "অ্যালার্জি সমূহ",
        label_conditions: "দীর্ঘস্থায়ী রোগ",
        sec_meds_vaccines: "ওষুধ ও ভ্যাকসিন",
        label_current_meds: "চলতি প্রেসক্রিপশন ওষুধ",
        label_immunizations: "টিকা দেওয়ার রেকর্ড",
        sec_emergency: "জরুরি যোগাযোগ",
        card_offline_status: "অফলাইনে সংরক্ষিত",
        qr_hint: "বিস্তারিত তথ্যের জন্য স্ক্যান করুন",
        btn_download: "কার্ড ডাউনলোড করুন",
        btn_sms: "এসএমএস পাঠান",
        sec_timeline: "আন্তঃরাজ্য চিকিৎসার বিবরণী",
        voice_lang: "নির্দেশনার ভাষা:",
        empty_allergies: "কোনো অ্যালার্জি পাওয়া যায়নি",
        empty_conditions: "কোনো দীর্ঘস্থায়ী রোগ রেকর্ড করা নেই",
        empty_meds: "কোনো ওষুধ নেই",
        empty_vaccines: "কোনো টিকাদান রেকর্ড নেই",
        copied_toast: "কেয়ার আইডি কপি করা হয়েছে!",
        sms_toast: "রোগীর যোগাযোগের নাম্বারে মক এসএমএস পাঠানো হয়েছে!",
        offline_active_toast: "অফলাইন মোড চালু। লোকাল স্টোরেজ থেকে ডেটা লোড হচ্ছে।",
        online_active_toast: "অনলাইনে সংযুক্ত! অফলাইন রেকর্ডগুলি সার্ভারে পাঠানো হচ্ছে...",
        add_visit_success: "ভিজিট রেকর্ড সফলভাবে যোগ করা হয়েছে!",
        registration_success: "নতুন কর্মী সফলভাবে নিবন্ধিত হয়েছে!"
    },
    ht: {
        workers_list: "Travayè ki Anrejistre",
        welcome_title: "Kontinite Swen Sante San Fwontyè",
        welcome_desc: "CarePassport konble diferans nan dokimantasyon pou travayè agrikòl, konstriksyon ak migran yo. Soke enfòmasyon medikal, maladi kwonik, ak vaksen yo an sekirite, ki ka vwayaje nenpòt kote, sou entènèt oswa offline.",
        stat_active_workers: "Paspò Aktif",
        stat_clinics: "Klinik Ant eta yo",
        stat_offline: "Senkronizasyon",
        getting_started: "Gid pou Kòmanse Rapid",
        label_id: "ID Swen:",
        label_dob: "Dat Nesans:",
        label_languages: "Lang:",
        btn_ai_history: "Kreyatè Istwa Vokal",
        btn_add_visit: "Ajoute Vizit Klinik",
        sec_core_medical: "Rezime Medikal Prensipal",
        label_blood: "Gwo San",
        label_allergies_count: "Alèji",
        label_allergies: "Alèji yo",
        label_conditions: "Maladi Kwonik",
        sec_meds_vaccines: "Medikaman ak Vaksen",
        label_current_meds: "Medikaman Preskri Kounye a",
        label_immunizations: "Dosye Vaksinasyon",
        sec_emergency: "Kontak Ijans",
        card_offline_status: "Sove offline",
        qr_hint: "Skane pou dosye konplè",
        btn_download: "Telechaje Kat la",
        btn_sms: "Voye pa SMS",
        sec_timeline: "Liy Tan Swen Medikal",
        voice_lang: "Lang Gid:",
        empty_allergies: "Pa gen alèji detekte",
        empty_conditions: "Pa gen maladi kwonik sove",
        empty_meds: "Pa gen medikaman preskri",
        empty_vaccines: "Pa gen vaksen anrejistre",
        copied_toast: "ID Swen kopye nan klavye!",
        sms_toast: "SMS simulation voye bay nimewo ijans lan!",
        offline_active_toast: "Mòd offline aktif. Done chaje nan memwa lokal.",
        online_active_toast: "Tounen online! Done offline yo ap senkronize ak sèvè a...",
        add_visit_success: "Vizit klinik la ajoute ak siksè!",
        registration_success: "Nouvo travayè a anrejistre ak siksè!"
    }
};

// ==========================================================================
// 2. STATE INITIALIZATION
// ==========================================================================
let patients = [];
let authRole = 'doctor'; // 'doctor' or 'patient'
let aiMode = 'doctor'; // 'doctor' or 'patient'
let currentPatient = null;
let currentLanguage = 'en';
let isOffline = false;
let audioMuted = false;
let activeMicStream = null;
let speechRecognizer = null;

let selectedSymptom = "";
let suggestedMedication = "";
let selectedDoctor = "";

const availableDoctors = [
    "Dr. Sarah Jenkins, MD",
    "Dr. Robert Chen, DO",
    "Dr. Angela Martinez, MD",
    "Dr. Laura Stone, MD",
    "Dr. K. Patel, MD",
    "Dr. G. Jean-Baptiste, MD",
    "Dr. E. Vance, MD"
];

// Simulated AI conversation builder dialog scripts
const aiDialogScript = {
    es: [
        {
            prompt: "Hola, soy su asistente de salud CarePassport. Le ayudaré a armar su historial médico. Primero, ¿tiene alguna alergia a medicamentos, como la penicilina, la aspirina o el látex?",
            audioText: "Hola, soy su asistente de salud CarePassport. Le ayudaré a armar su historial médico. Primero, ¿tiene alguna alergia a medicamentos, como la penicilina, la aspirina o el látex?",
            options: ["Sí, tengo alergia a la penicilina", "No tengo alergia a nada", "Tengo alergia a las sulfonamidas y látex"]
        },
        {
            prompt: "Entendido. Siguiente pregunta: ¿Sufre de alguna enfermedad crónica o problema de salud constante? Por ejemplo, presión alta, diabetes, o asma bronquial.",
            audioText: "Entendido. Siguiente pregunta: ¿Sufre de alguna enfermedad crónica o problema de salud constante? Por ejemplo, presión alta, diabetes, o asma bronquial.",
            options: ["Tengo asma y uso inhalador", "Tengo diabetes tipo uno", "Sufro de presión arterial alta"]
        },
        {
            prompt: "De acuerdo, lo anoto. ¿Qué medicamentos toma usted todos los días o de forma regular? Por favor, dígame el nombre y para qué sirve.",
            audioText: "De acuerdo, lo anoto. ¿Qué medicamentos toma usted todos los días o de forma regular? Por favor, dígame el nombre y para qué sirve.",
            options: ["Tomo insulina glargina por las noches", "Tomo amlodipino para la presión", "Uso Advair dos veces al día para el asma"]
        },
        {
            prompt: "Perfecto. Por último, ¿recuerda si tiene vacunas recientes contra el tétanos o el COVID-19, y en qué estado se las aplicaron?",
            audioText: "Perfecto. Por último, ¿recuerda si tiene vacunas recientes contra el tétanos o el COVID-19, y en qué estado se las aplicaron?",
            options: ["Me puse la del tétanos en Oregon en 2024", "Tengo la vacuna de COVID de California", "No recuerdo mis vacunas recientes"]
        }
    ],
    en: [
        {
            prompt: "Hello, I am your CarePassport health assistant. I will help reconstruct your medical history. First, do you have any allergies to medications, such as penicillin, aspirin, or latex?",
            audioText: "Hello, I am your CarePassport health assistant. I will help reconstruct your medical history. First, do you have any allergies to medications, such as penicillin, aspirin, or latex?",
            options: ["Yes, I have an allergy to penicillin", "No, I don't have any allergies", "I am allergic to latex and sulfa drugs"]
        },
        {
            prompt: "Got it. Next question: Do you suffer from any chronic health conditions? For example, high blood pressure, diabetes, or asthma.",
            audioText: "Got it. Next question: Do you suffer from any chronic health conditions? For example, high blood pressure, diabetes, or asthma.",
            options: ["I have asthma and use an inhaler", "I have type one diabetes", "I suffer from high blood pressure"]
        },
        {
            prompt: "Alright, recording that. What medications do you take every day or on a regular basis? Please tell me the name and what it's for.",
            audioText: "Alright, recording that. What medications do you take every day or on a regular basis? Please tell me the name and what it's for.",
            options: ["I take insulin glargine at bedtime", "I take amlodipine for my blood pressure", "I use Advair twice daily for asthma"]
        },
        {
            prompt: "Perfect. Lastly, do you remember if you have had any recent vaccines, like a tetanus shot or COVID-19 vaccine, and what state you got them in?",
            audioText: "Perfect. Lastly, do you remember if you have had any recent vaccines, like a tetanus shot or COVID-19 vaccine, and what state you got them in?",
            options: ["I got a tetanus shot in Oregon in 2024", "I have the COVID vaccine from California", "I don't recall my recent vaccines"]
        }
    ],
    bn: [
        {
            prompt: "হ্যালো, আমি আপনার কেয়ারপাসপোর্ট স্বাস্থ্য সহকারী। আপনার পূর্বের শারীরিক ইতিহাস তৈরি করতে সাহায্য করব। প্রথমত, আপনার কি পেনিসিলিন, অ্যাসপিরিন বা ল্যাটেক্সের মতো কোনো ওষুধে অ্যালার্জি আছে?",
            audioText: "হ্যালো, আমি আপনার কেয়ারপাসপোর্ট স্বাস্থ্য সহকারী। আপনার পূর্বের শারীরিক ইতিহাস তৈরি করতে সাহায্য করব। প্রথমত, আপনার কি পেনিসিলিন, অ্যাসপিরিন বা ল্যাটেক্সের মতো কোনো ওষুধে অ্যালার্জি আছে?",
            options: ["হ্যাঁ, আমার পেনিসিলিনে অ্যালার্জি আছে", "না, আমার কোনো অ্যালার্জি নেই", "আমার ল্যাটেক্স এবং সালফা ড্রাগে অ্যালার্জি আছে"]
        },
        {
            prompt: "বুঝতে পেরেছি। পরের প্রশ্ন: আপনি কি কোনো দীর্ঘস্থায়ী রোগে ভুগছেন? যেমন উচ্চ রক্তচাপ, ডায়াবেটিস বা হাঁপানি।",
            audioText: "বুঝতে পেরেছি। পরের প্রশ্ন: আপনি কি কোনো দীর্ঘস্থায়ী রোগে ভুগছেন? যেমন উচ্চ রক্তচাপ, ডায়াবেটিস বা হাঁপানি।",
            options: ["আমার হাঁপানি আছে এবং ইনহেলার ব্যবহার করি", "আমার টাইপ ওয়ান ডায়াবেটিস আছে", "আমি উচ্চ রক্তচাপে ভুগছি"]
        },
        {
            prompt: "ঠিক আছে, তা লিখে রাখছি। আপনি প্রতিদিন বা নিয়মিত কি কি ওষুধ খান? নাম এবং সেটি কি জন্য খান তা অনুগ্রহ করে বলুন।",
            audioText: "ঠিক আছে, তা লিখে রাখছি। আপনি প্রতিদিন বা নিয়মিত কি কি ওষুধ খান? নাম এবং সেটি কি জন্য খান তা অনুগ্রহ করে বলুন।",
            options: ["আমি রাতে ল্যান্টাস ইনসুলিন নিই", "আমি রক্তচাপের জন্য অ্যামলোডিপিন খাই", "হাঁপানির জন্য দিনে দুবার অ্যাডভেয়ার ব্যবহার করি"]
        },
        {
            prompt: "চমৎকার। সবশেষে, আপনার কি সাম্প্রতিক কোনো টিকা নেওয়ার কথা মনে আছে, যেমন টিটেনাস বা কোভিড-১৯ ভ্যাকসিন এবং এটি কোন রাজ্যে নিয়েছিলেন?",
            audioText: "চমৎকার। সবশেষে, আপনার কি সাম্প্রতিক কোনো টিকা নেওয়ার কথা মনে আছে, যেমন টিটেনাস বা কোভিড-১৯ ভ্যাকসিন এবং এটি কোন রাজ্যে নিয়েছিলেন?",
            options: ["আমি ২০২৪ সালে ওরেগনে টিটেনাস ইনজেকশন নিয়েছিলাম", "আমার ক্যালিফোর্নিয়া থেকে নেওয়া কোভিড ভ্যাকসিন আছে", "আমার সাম্প্রতিক ভ্যাকসিনের কথা মনে নেই"]
        }
    ],
    ht: {
        // Fallback script mapping Haitian to French/Creole logic, we'll map to 'en' style internally if not matching
    }
};
// Map Haitian Creole (ht) to Spanish/English hybrid dialogue scripts for simulation
aiDialogScript.ht = [
    {
        prompt: "Bonjou, mwen se asistan sante CarePassport ou. Mwen pral ede w rekonstwi istwa medikal ou. Premyèman, èske ou gen alèji ak medikaman tankou penisilin, aspirin, oswa an latèks?",
        audioText: "Bonjou, mwen se asistan sante CarePassport ou. Mwen pral ede w rekonstwi istwa medikal ou. Premyèman, èske ou gen alèji ak medikaman tankou penisilin, aspirin, oswa an latèks?",
        options: ["Wi, mwen gen alèji ak penisilin", "Non, mwen pa gen okenn alèji", "Mwen alèjik ak an latèks ak sulfa"]
    },
    {
        prompt: "Mwen konprann. Kesyon kap vini an: Èske ou soufri ak maladi kwonik? Pa egzanp, tansyon wo, dyabèt, oswa opresyon asmatik.",
        audioText: "Mwen konprann. Kesyon kap vini an: Èske ou soufri ak maladi kwonik? Pa egzanp, tansyon wo, dyabèt, oswa opresyon asmatik.",
        options: ["Mwen gen opresyon epi mwen sèvi ak ponp", "Mwen gen dyabèt tip en", "Mwen soufri ak tansyon wo"]
    },
    {
        prompt: "Dakò. Ki medikaman ou pran chak jou oswa regilyèman? Silvouplè, ban m non medikaman an ak pou kisa li sèvi.",
        audioText: "Dakò. Ki medikaman ou pran chak jou oswa regilyèman? Silvouplè, ban m non medikaman an ak pou kisa li sèvi.",
        options: ["Mwen pran ensilin glargine anvan m dòmi", "Mwen pran amlodipine pou tansyon mwen", "Mwen pran Advair de fwa chak jou pou opresyon"]
    },
    {
        prompt: "Trè byen. Dènye kesyon, èske ou sonje si ou te pran vaksen dènyèman tankou tetanòs oswa COVID-19, epi nan ki eta ou te pran yo?",
        audioText: "Trè byen. Dènye kesyon, èske ou sonje si ou te pran vaksen dènyèman tankou tetanòs oswa COVID-19, epi nan ki eta ou te pran yo?",
        options: ["Mwen te pran vaksen tetanòs nan Oregon an 2024", "Mwen gen vaksen COVID ki te fèt nan Kalifòni", "Mwen pa sonje dènye vaksen mwen yo"]
    }
];

const aiPatientDialogScript = {
    en: [
        {
            prompt: "Hello! I am your CarePassport health assistant. I can help you review your prescriptions, book clinic slots, or report symptoms to your doctor. How can I help you today?",
            audioText: "Hello! I am your CarePassport health assistant. I can help you review your prescriptions, book clinic slots, or report symptoms to your doctor. How can I help you today?",
            options: ["Report symptoms / request refill", "Check my active prescriptions", "Book a clinic session", "What is my Care ID?"]
        },
        {
            prompt: "Please select or describe the symptoms or health problems you are experiencing today:",
            audioText: "Please select or describe the symptoms or health problems you are experiencing today:",
            options: ["Asthma wheezing / tight chest", "High blood sugar / thirsty", "Headache / dizzy (blood pressure check)", "General body aches or other issue"]
        },
        {
            prompt: "[ai_refill_suggestion_text]",
            audioText: "[ai_refill_suggestion_text]",
            options: [] // Dynamically populated with doctor options and a cancel button
        },
        {
            prompt: "Refill request sent! Your doctor will verify it and add it to your clinical timeline once approved.",
            audioText: "Refill request sent! Your doctor will verify it and add it to your clinical timeline once approved.",
            options: ["Finish session"]
        }
    ],
    es: [
        {
            prompt: "¡Hola! Soy su asistente de salud CarePassport. Le puedo ayudar a revisar recetas, programar citas o reportar síntomas al doctor. ¿En qué le puedo ayudar hoy?",
            audioText: "¡Hola! Soy su asistente de salud CarePassport. Le puedo ayudar a revisar recetas, programar citas o reportar síntomas al doctor. ¿En qué le puedo ayudar hoy?",
            options: ["Reportar síntomas / pedir receta", "Ver mis medicamentos activos", "Programar una cita", "¿Cuál es mi ID de Cuidado?"]
        },
        {
            prompt: "Por favor, seleccione o describa los síntomas o problemas de salud que tiene hoy:",
            audioText: "Por favor, seleccione o describa los síntomas o problemas de salud que tiene hoy:",
            options: ["Sibilancias de asma / pecho apretado", "Azúcar alta / mucha sed", "Dolor de cabeza / mareo (presión)", "Dolores generales u otro problema"]
        },
        {
            prompt: "[ai_refill_suggestion_text]",
            audioText: "[ai_refill_suggestion_text]",
            options: [] // Dynamically populated
        },
        {
            prompt: "¡Solicitud enviada! El doctor la verificará y la agregará a su historial médico una vez aprobada.",
            audioText: "¡Solicitud enviada! El doctor la verificará y la agregará a su historial médico una vez aprobada.",
            options: ["Terminar sesión"]
        }
    ],
    bn: [
        {
            prompt: "হ্যালো! আমি আপনার কেয়ারপাসপোর্ট স্বাস্থ্য সহকারী। আমি প্রেসক্রিপশন দেখতে, অ্যাপয়েন্টমেন্ট বুক করতে বা ডাক্তারের কাছে লক্ষণগুলি রিপোর্ট করতে সাহায্য করতে পারি। কীভাবে সাহায্য করতে পারি?",
            audioText: "হ্যালো! আমি আপনার কেয়ারপাসপোর্ট স্বাস্থ্য সহকারী। আমি প্রেসক্রিপশন দেখতে, অ্যাপয়েন্টমেন্ট বুক করতে বা ডাক্তারের কাছে লক্ষণগুলি রিপোর্ট করতে সাহায্য করতে পারি। কীভাবে সাহায্য করতে পারি?",
            options: ["লক্ষণ রিপোর্ট / রিফিল অনুরোধ", "আমার চলমান ওষুধগুলো দেখুন", "অ্যাপয়েন্টমেন্ট বুক করুন", "আমার কেয়ার আইডি কী?"]
        },
        {
            prompt: "অনুগ্রহ করে আপনার বর্তমান লক্ষণ বা শারীরিক সমস্যা নির্বাচন করুন বা বর্ণনা করুন:",
            audioText: "অনুগ্রহ করে আপনার বর্তমান লক্ষণ বা শারীরিক সমস্যা নির্বাচন করুন বা বর্ণনা করুন:",
            options: ["হাঁপানি / বুকে শ্বাসকষ্ট", "উচ্চ রক্তে শর্করা / অতিরিক্ত পিপাসা", "মাথাব্যথা / মাথা ঘোরা (রক্তচাপ)", "শরীরে ব্যথা বা অন্যান্য সমস্যা"]
        },
        {
            prompt: "[ai_refill_suggestion_text]",
            audioText: "[ai_refill_suggestion_text]",
            options: []
        },
        {
            prompt: "অনুরোধ পাঠানো হয়েছে! ডাক্তার এটি যাচাই করে আপনার টাইমলাইনে যুক্ত করবেন।",
            audioText: "অনুরোধ পাঠানো হয়েছে! ডাক্তার এটি যাচাই করে আপনার টাইমলাইনে যুক্ত করবেন।",
            options: ["সেশন শেষ করুন"]
        }
    ],
    ht: [
        {
            prompt: "Bonjou! Mwen se asistan sante CarePassport ou. Mwen ka ede w tcheke preskripsyon, rezève randevou, oswa rapòte sentòm yo bay doktè w la. Kijan m ka ede w jodi a?",
            audioText: "Bonjou! Mwen se asistan sante CarePassport ou. Mwen ka ede w tcheke preskripsyon, rezève randevou, oswa rapòte sentòm yo bay doktè w la. Kijan m ka ede w jodi a?",
            options: ["Rapòte sentòm / mande refil", "Tcheke medikaman m yo", "Pran yon randevou", "Kisa ID Swen mwen ye?"]
        },
        {
            prompt: "Tanpri chwazi oswa dekri sentòm oswa pwoblèm sante ou genyen jodi a:",
            audioText: "Tanpri chwazi oswa dekri sentòm oswa pwoblèm sante ou genyen jodi a:",
            options: ["Kriz opresyon / souf kout", "Sik wo / swaf anpil", "Mal de tèt / tèt vire (tansyon)", "Doulè kò oswa lòt pwoblèm"]
        },
        {
            prompt: "[ai_refill_suggestion_text]",
            audioText: "[ai_refill_suggestion_text]",
            options: []
        },
        {
            prompt: "Demann lan voye! Doktè a pral verifye li epi ajoute li nan istwa medikal ou.",
            audioText: "Demann lan voye! Doktè a pral verifye li epi ajoute li nan istwa medikal ou.",
            options: ["Fini sesyon an"]
        }
    ]
};

let currentDialogueStep = 0;
let conversationTranscripts = [];
let extractedAIRecord = {
    allergies: [],
    chronicConditions: [],
    medications: [],
    immunizations: []
};

// ==========================================================================
// 3. CORE ROUTINES & DOM READY
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
    // DOM Element hooks
    const langSelect = document.getElementById("global-lang-select");
    const themeToggleBtn = document.getElementById("theme-toggle-btn");
    const offlineToggleBtn = document.getElementById("offline-toggle-btn");
    const searchInput = document.getElementById("worker-search-input");
    const btnOpenRegister = document.getElementById("btn-open-register");
    const btnCloseRegister = document.getElementById("btn-close-register-modal");
    const btnCancelRegister = document.getElementById("btn-cancel-register");
    const registerModal = document.getElementById("register-modal");
    const registerForm = document.getElementById("register-worker-form");
    
    const welcomeView = document.getElementById("welcome-view");
    const patientDetailView = document.getElementById("patient-detail-view");
    const voiceBuilderView = document.getElementById("voice-builder-view");
    
    // Visit modal hooks
    const btnOpenAddVisit = document.getElementById("btn-open-add-visit");
    const btnCloseVisitModal = document.getElementById("btn-close-visit-modal");
    const btnCancelVisit = document.getElementById("btn-cancel-visit");
    const addVisitModal = document.getElementById("add-visit-modal");
    const addVisitForm = document.getElementById("add-visit-form");
    
    // Voice Builder hooks
    const btnOpenVoiceBuilder = document.getElementById("btn-open-voice-builder");
    const btnCloseVoiceBuilder = document.getElementById("btn-close-voice-builder");
    const voiceLangSelect = document.getElementById("voice-lang-select");
    const btnMicToggle = document.getElementById("btn-mic-toggle");
    const btnVoiceVolume = document.getElementById("btn-voice-volume");
    const btnSaveAIExtracted = document.getElementById("btn-save-ai-extracted");
    const chatTextInput = document.getElementById("chat-text-input");
    const btnSendChat = document.getElementById("btn-send-chat");
    
    // Share & Download card hooks
    const btnDownloadCard = document.getElementById("btn-download-card");
    const btnShareCard = document.getElementById("btn-share-card");

    // Login Portal bindings
    const loginForm = document.getElementById("login-form");
    const tabDoctor = document.getElementById("tab-doctor");
    const tabPatient = document.getElementById("tab-patient");
    const btnLogout = document.getElementById("btn-logout");

    tabDoctor.addEventListener("click", () => switchLoginRole('doctor'));
    tabPatient.addEventListener("click", () => switchLoginRole('patient'));
    loginForm.addEventListener("submit", handleLoginSubmit);
    btnLogout.addEventListener("click", handleLogout);

    // Toggle links for Login/Self-Register
    document.getElementById("link-show-register").addEventListener("click", (e) => {
        e.preventDefault();
        toggleLoginRegister('register');
    });
    document.getElementById("link-show-login").addEventListener("click", (e) => {
        e.preventDefault();
        toggleLoginRegister('login');
    });
    document.getElementById("self-register-form").addEventListener("submit", handleSelfRegistration);

    // Initialize Page
    checkSession();
    initSpeechRecognition();

    // Event Bindings
    langSelect.addEventListener("change", (e) => setLanguage(e.target.value));
    themeToggleBtn.addEventListener("click", toggleTheme);
    offlineToggleBtn.addEventListener("click", toggleOfflineMode);
    searchInput.addEventListener("input", filterPatientList);
    
    // Register Modals
    btnOpenRegister.addEventListener("click", () => openModal(registerModal));
    btnCloseRegister.addEventListener("click", () => closeModal(registerModal));
    btnCancelRegister.addEventListener("click", () => closeModal(registerModal));
    registerForm.addEventListener("submit", handleRegistration);
    
    // Visit Modals
    btnOpenAddVisit.addEventListener("click", () => {
        // Set default date to today
        document.getElementById("visit-date").value = new Date().toISOString().substring(0, 10);
        openModal(addVisitModal);
    });
    btnCloseVisitModal.addEventListener("click", () => closeModal(addVisitModal));
    btnCancelVisit.addEventListener("click", () => closeModal(addVisitModal));
    addVisitForm.addEventListener("submit", handleAddVisit);
    
    // Voice Builder panels
    btnOpenVoiceBuilder.addEventListener("click", startVoiceBuilderMode);
    btnCloseVoiceBuilder.addEventListener("click", stopVoiceBuilderMode);
    voiceLangSelect.addEventListener("change", (e) => {
        // Restart speech wizard in selected language
        restartVoiceDialogue(e.target.value);
    });
    btnMicToggle.addEventListener("click", handleMicToggle);
    btnVoiceVolume.addEventListener("click", () => {
        audioMuted = !audioMuted;
        btnVoiceVolume.innerHTML = audioMuted ? '<i class="fa-solid fa-volume-xmark"></i>' : '<i class="fa-solid fa-volume-high"></i>';
        if (audioMuted) {
            window.speechSynthesis.cancel();
        }
    });
    btnSaveAIExtracted.addEventListener("click", saveExtractedAIHistory);
    
    // Chat input bindings
    btnSendChat.addEventListener("click", handleChatTextSubmit);
    chatTextInput.addEventListener("keypress", (e) => {
        if (e.key === 'Enter') handleChatTextSubmit();
    });
    
    // Card Download & share
    btnDownloadCard.addEventListener("click", downloadQRCard);
    btnShareCard.addEventListener("click", () => showToast(getI18n("sms_toast")));

    // Patient-facing Actions
    document.getElementById("btn-open-patient-ai").addEventListener("click", startPatientAIAssistant);
    
    const bookingModal = document.getElementById("booking-modal");
    document.getElementById("btn-open-booking").addEventListener("click", () => {
        // Set default date to tomorrow
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        document.getElementById("booking-date").value = tomorrow.toISOString().substring(0, 10);
        openModal(bookingModal);
    });
    document.getElementById("btn-close-booking-modal").addEventListener("click", () => closeModal(bookingModal));
    document.getElementById("btn-cancel-booking").addEventListener("click", () => closeModal(bookingModal));
    document.getElementById("booking-form").addEventListener("submit", handleBookingSubmit);
});

// ==========================================================================
// 4. API & DATA MANAGEMENT (Syncing with backend/localStorage)
// ==========================================================================
function getSession() {
    const sess = sessionStorage.getItem("care_passport_session");
    return sess ? JSON.parse(sess) : null;
}

function loadPatients() {
    const session = getSession();
    if (session && session.role === 'patient') {
        loadSinglePatient(session.patientId);
        return;
    }

    if (isOffline) {
        // Load from LocalStorage cache
        const cached = localStorage.getItem("care_passport_patients");
        if (cached) {
            patients = JSON.parse(cached);
            
            // Filter if role === 'doctor'
            let filtered = patients;
            if (session && session.role === 'doctor' && session.doctorName) {
                filtered = patients.filter(p => p.assignedDoctor === session.doctorName);
            }
            
            renderPatientList(filtered);
            updateStats(filtered);
        } else {
            renderPatientList([]);
        }
    } else {
        // Fetch from Flask Backend API
        fetch('/api/patients')
            .then(res => res.json())
            .then(data => {
                patients = data;
                // Cache locally for offline use
                localStorage.setItem("care_passport_patients", JSON.stringify(patients));
                
                // Filter if role === 'doctor'
                let filtered = patients;
                if (session && session.role === 'doctor' && session.doctorName) {
                    filtered = patients.filter(p => p.assignedDoctor === session.doctorName);
                }
                
                renderPatientList(filtered);
                updateStats(filtered);
                
                // Keep selection if patient was selected
                if (currentPatient) {
                    const updated = patients.find(p => p.id === currentPatient.id);
                    if (updated) selectPatient(updated.id);
                }
            })
            .catch(err => {
                console.error("API error, switching to cache fallback", err);
                toggleOfflineMode(true); // Force offline mode on connection failure
            });
    }
}

function loadSinglePatient(patientId) {
    if (isOffline) {
        const cached = localStorage.getItem("care_passport_patients");
        if (cached) {
            const allPatients = JSON.parse(cached);
            const pat = allPatients.find(p => p.id === patientId);
            if (pat) {
                patients = [pat];
                selectPatient(patientId);
            }
        }
    } else {
        fetch(`/api/patients/${patientId}`)
            .then(res => res.json())
            .then(data => {
                patients = [data];
                selectPatient(patientId);
            })
            .catch(err => {
                console.error("Failed to load patient profile", err);
                // Fallback to cache
                const cached = localStorage.getItem("care_passport_patients");
                if (cached) {
                    const allPatients = JSON.parse(cached);
                    const pat = allPatients.find(p => p.id === patientId);
                    if (pat) {
                        patients = [pat];
                        selectPatient(patientId);
                        toggleOfflineMode(true);
                    }
                }
            });
    }
}

function updateStats(patientsList) {
    document.getElementById("stat-worker-count").textContent = patientsList.length;
    
    // Count clinics
    let clinics = new Set();
    patientsList.forEach(p => {
        p.timeline.forEach(visit => {
            clinics.add(visit.clinicName + ", " + visit.location);
        });
    });
    document.getElementById("stat-clinic-count").textContent = clinics.size || 6;
}

// ==========================================================================
// 5. VIEW RENDERING (EHR Displays, Timeline builder)
// ==========================================================================
function renderPatientList(list) {
    const listContainer = document.getElementById("worker-list");
    listContainer.innerHTML = "";
    
    if (list.length === 0) {
        listContainer.innerHTML = '<div class="timeline-empty">No records found.</div>';
        return;
    }
    
    list.forEach(patient => {
        const item = document.createElement("div");
        item.className = `worker-card ${currentPatient && currentPatient.id === patient.id ? 'active' : ''}`;
        item.setAttribute("data-id", patient.id);
        
        // Initials avatar
        const initials = patient.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
        
        // Critical alerts
        const allergyBadge = patient.allergies.length > 0 ? 
            `<span class="badge-nationality text-red" style="border-color:hsla(355, 85%, 55%, 0.3); background:hsla(355, 85%, 55%, 0.05)"><i class="fa-solid fa-triangle-exclamation"></i> Allergies</span>` : '';
            
        item.innerHTML = `
            <div class="worker-avatar">${initials}</div>
            <div class="worker-info">
                <div class="worker-name">${patient.name}</div>
                <div class="worker-meta">
                    <span>ID: ${patient.id}</span>
                    <span>${patient.bloodGroup !== 'Not Specified' ? patient.bloodGroup : 'Blood: —'}</span>
                </div>
                <div style="margin-top:6px; display:flex; gap:6px;">
                    ${allergyBadge}
                </div>
            </div>
        `;
        
        item.addEventListener("click", () => selectPatient(patient.id));
        listContainer.appendChild(item);
    });
}

function selectPatient(patientId) {
    currentPatient = patients.find(p => p.id === patientId);
    if (!currentPatient) return;
    
    // Highlight list item
    document.querySelectorAll(".worker-card").forEach(card => {
        card.classList.remove("active");
        if (card.getAttribute("data-id") === patientId) {
            card.classList.add("active");
            // Set initials class on avatar
            card.querySelector(".worker-avatar").style.backgroundColor = 'var(--primary)';
            card.querySelector(".worker-avatar").style.color = '#fff';
        } else {
            // Restore inactive avatar styling
            const avatar = card.querySelector(".worker-avatar");
            avatar.style.backgroundColor = 'var(--bg-control)';
            avatar.style.color = 'var(--primary)';
        }
    });

    // Populate Details Panel
    document.getElementById("patient-name").textContent = currentPatient.name;
    document.getElementById("patient-nationality-badge").textContent = currentPatient.nationality || "Not Specified";
    document.getElementById("patient-id-display").textContent = currentPatient.id;
    document.getElementById("patient-dob-display").textContent = currentPatient.dateOfBirth || "—";
    document.getElementById("patient-languages-display").textContent = currentPatient.languages.join(", ") || "—";
    
    // Initials Avatar large
    const initials = currentPatient.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
    document.getElementById("patient-avatar").textContent = initials;
    
    // Vitals
    document.getElementById("patient-blood-display").textContent = currentPatient.bloodGroup === 'Not Specified' ? '—' : currentPatient.bloodGroup.replace('-Positive', '+').replace('-Negative', '-');
    document.getElementById("patient-allergies-count").textContent = currentPatient.allergies.length;
    
    // Load Chips
    renderChips("patient-allergies-list", currentPatient.allergies, "allergy", getI18n("empty_allergies"));
    renderChips("patient-conditions-list", currentPatient.chronicConditions, "condition", getI18n("empty_conditions"));

    // Medications list
    const medsContainer = document.getElementById("patient-medications-table");
    medsContainer.innerHTML = "";
    if (currentPatient.medications.length === 0) {
        medsContainer.innerHTML = `<div class="chip-empty">${getI18n("empty_meds")}</div>`;
    } else {
        currentPatient.medications.forEach(med => {
            const row = document.createElement("div");
            row.className = "med-row";
            row.innerHTML = `
                <div class="med-details">
                    <h4>${med.name}</h4>
                    <span>${med.dosage}</span>
                </div>
                <div class="med-purpose">${med.purpose}</div>
            `;
            medsContainer.appendChild(row);
        });
    }

    // Immunizations list
    const immContainer = document.getElementById("patient-immunizations-list");
    immContainer.innerHTML = "";
    if (currentPatient.immunizations.length === 0) {
        immContainer.innerHTML = `<div class="chip-empty">${getI18n("empty_vaccines")}</div>`;
    } else {
        currentPatient.immunizations.forEach(imm => {
            const row = document.createElement("div");
            row.className = "vaccine-row";
            row.innerHTML = `
                <div class="vaccine-icon-box"><i class="fa-solid fa-syringe"></i></div>
                <div class="vaccine-details">
                    <h5>${imm.disease}</h5>
                    <div class="vaccine-meta">
                        <span>${imm.date}</span>
                        <span><i class="fa-solid fa-location-dot"></i> ${imm.location}</span>
                    </div>
                </div>
            `;
            immContainer.appendChild(row);
        });
    }

    // Emergency Contact
    const ecContainer = document.getElementById("patient-emergency-contact");
    const ec = currentPatient.emergencyContact;
    if (ec && ec.name) {
        ecContainer.innerHTML = `
            <div class="ec-info">
                <h4>${ec.name} <span>${ec.relation}</span></h4>
            </div>
            <div class="ec-phone">
                <i class="fa-solid fa-phone"></i> ${ec.phone}
            </div>
        `;
    } else {
        ecContainer.innerHTML = `<div class="chip-empty">No emergency contact registered</div>`;
    }

    // Timeline Builder
    renderTimeline();

    // QR Wallet Card sync
    document.getElementById("card-name").textContent = currentPatient.name;
    document.getElementById("card-id-text").textContent = currentPatient.id;
    document.getElementById("card-dob-text").textContent = currentPatient.dateOfBirth || "—";
    document.getElementById("card-blood").textContent = currentPatient.bloodGroup === 'Not Specified' ? '—' : currentPatient.bloodGroup.replace('-Positive', '+').replace('-Negative', '-');
    document.getElementById("card-allergies-summary").textContent = currentPatient.allergies.join(", ") || "None";
    
    // Draw canvas QR
    generateLocalQR();

    // Copy listener
    const copyId = document.getElementById("patient-id-display");
    copyId.onclick = () => {
        navigator.clipboard.writeText(copyId.textContent);
        showToast(getI18n("copied_toast"));
    };

    // Transition views
    document.getElementById("welcome-view").classList.remove("active");
    document.getElementById("patient-detail-view").classList.add("active");
}

function renderChips(containerId, list, type, emptyText) {
    const container = document.getElementById(containerId);
    container.innerHTML = "";
    if (list.length === 0) {
        container.innerHTML = `<span class="chip-empty">${emptyText}</span>`;
        return;
    }
    list.forEach(item => {
        const span = document.createElement("span");
        span.className = `chip ${type}`;
        span.innerHTML = `<i class="fa-solid ${type === 'allergy' ? 'fa-circle-exclamation' : 'fa-circle-dot'}"></i> ${item}`;
        container.appendChild(span);
    });
}

function renderTimeline() {
    const timelineContainer = document.getElementById("patient-timeline");
    timelineContainer.innerHTML = "";
    
    if (currentPatient.timeline.length === 0) {
        timelineContainer.innerHTML = `<div class="timeline-empty">No visits recorded. Click 'Add Clinic Visit' to start.</div>`;
        return;
    }

    currentPatient.timeline.forEach(visit => {
        const item = document.createElement("div");
        item.className = "timeline-item";
        
        item.innerHTML = `
            <div class="timeline-meta-row">
                <span class="timeline-date">${visit.date}</span>
                <span class="timeline-location"><i class="fa-solid fa-map-pin"></i> ${visit.location}</span>
            </div>
            <div class="timeline-content">
                <h4>${visit.reason}</h4>
                <span class="timeline-clinic">${visit.clinicName}</span>
                <p class="timeline-details-p"><strong>Diagnosis:</strong> ${visit.diagnosis}</p>
                <div class="timeline-divider"></div>
                <div class="timeline-subdetails">
                    <span><strong>Treatment:</strong> ${visit.treatment}</span>
                    <span><strong>Provider:</strong> ${visit.doctor || '—'}</span>
                    ${visit.notes ? `<span><strong>Notes:</strong> ${visit.notes}</span>` : ''}
                </div>
            </div>
        `;
        timelineContainer.appendChild(item);
    });
}

// ==========================================================================
// 6. QR CODE CANVAS GENERATOR (Fully Offline-Capable & Logo Embedded)
// ==========================================================================
function generateLocalQR() {
    const canvas = document.getElementById("qr-code-canvas");
    const ctx = canvas.getContext("2d");
    const size = canvas.width;
    
    // Clear canvas
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, size, size);
    
    // Helper to draw a square block
    function drawBlock(x, y, w, h, fill) {
        ctx.fillStyle = fill ? "#0f172a" : "#ffffff";
        ctx.fillRect(x, y, w, h);
    }
    
    // 1. Draw QR Alignment Corners (Three large squares)
    function drawPositionDetectionPattern(x, y) {
        // Outer dark box
        ctx.fillStyle = "#0f172a";
        ctx.fillRect(x, y, 7 * 4, 7 * 4);
        // Inner white box
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(x + 4, y + 4, 5 * 4, 5 * 4);
        // Center dark box
        ctx.fillStyle = "#0e7490"; // Emerald/Teal anchor
        ctx.fillRect(x + 8, y + 8, 3 * 4, 3 * 4);
    }
    
    // Draw top-left, top-right, bottom-left corners
    drawPositionDetectionPattern(4, 4);
    drawPositionDetectionPattern(size - 32, 4);
    drawPositionDetectionPattern(4, size - 32);
    
    // 2. Draw Simulated QR Grid
    // Seeded random number based on Patient ID to ensure QR is persistent per-worker
    let seed = 42;
    if (currentPatient) {
        const idNum = currentPatient.id.replace(/\D/g, "");
        seed = parseInt(idNum) || 42;
    }
    
    function pseudoRandom() {
        let x = Math.sin(seed++) * 10000;
        return x - Math.floor(x);
    }
    
    const blockSize = 4;
    for (let r = 0; r < size; r += blockSize) {
        for (let c = 0; c < size; c += blockSize) {
            // Skip the corner zones
            const inTopLeft = r < 36 && c < 36;
            const inTopRight = r < 36 && c > size - 36;
            const inBottomLeft = r > size - 36 && c < 36;
            
            if (inTopLeft || inTopRight || inBottomLeft) continue;
            
            // Draw pseudo-random pixels
            const isDark = pseudoRandom() > 0.48;
            drawBlock(c, r, blockSize, blockSize, isDark);
        }
    }
    
    // 3. Draw central "CarePassport" Branding Logo
    const centerSize = 28;
    const centerPos = (size - centerSize) / 2;
    
    // White background for the logo shield
    ctx.fillStyle = "#ffffff";
    ctx.beginPath();
    ctx.roundRect(centerPos, centerPos, centerSize, centerSize, 6);
    ctx.fill();
    
    // Draw small green shield/cross in center
    ctx.fillStyle = "#0d9488"; // Primary Teal
    ctx.fillRect(centerPos + 12, centerPos + 6, 4, 16);
    ctx.fillRect(centerPos + 6, centerPos + 12, 16, 4);
}

function downloadQRCard() {
    if (!currentPatient) return;
    
    // Create high-res copy of QR card and export to PNG
    const tempCanvas = document.createElement("canvas");
    tempCanvas.width = 400;
    tempCanvas.height = 240;
    const ctx = tempCanvas.getContext("2d");
    
    // Draw gradient background
    const grad = ctx.createLinearGradient(0, 0, 400, 240);
    grad.addColorStop(0, '#0d9488');
    grad.addColorStop(1, '#0f172a');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 400, 240);
    
    // Draw Header
    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 18px 'Plus Jakarta Sans'";
    ctx.fillText("CarePassport™ Wallet Card", 20, 36);
    ctx.font = "11px 'Plus Jakarta Sans'";
    ctx.fillStyle = "#94a3b8";
    ctx.fillText("Offline Clinical Record Sync ID", 20, 52);
    
    ctx.strokeStyle = "rgba(13, 148, 136, 0.4)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(20, 64);
    ctx.lineTo(380, 64);
    ctx.stroke();
    
    // Patient Data Text
    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 20px 'Plus Jakarta Sans'";
    ctx.fillText(currentPatient.name, 20, 96);
    
    ctx.fillStyle = "#94a3b8";
    ctx.font = "12px 'Plus Jakarta Sans'";
    ctx.fillText("Care ID:", 20, 122);
    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 13px 'Courier New'";
    ctx.fillText(currentPatient.id, 75, 122);
    
    ctx.fillStyle = "#94a3b8";
    ctx.font = "12px 'Plus Jakarta Sans'";
    ctx.fillText("DOB:", 20, 142);
    ctx.fillStyle = "#ffffff";
    ctx.font = "12px 'Plus Jakarta Sans'";
    ctx.fillText(currentPatient.dateOfBirth || "—", 60, 142);
    
    ctx.fillStyle = "#94a3b8";
    ctx.font = "12px 'Plus Jakarta Sans'";
    ctx.fillText("Blood:", 20, 162);
    ctx.fillStyle = "#ffffff";
    ctx.fillText(currentPatient.bloodGroup.replace('-Positive', '+').replace('-Negative', '-'), 70, 162);
    
    // Allergies summary line
    ctx.fillStyle = "#94a3b8";
    ctx.fillText("Allergies:", 20, 185);
    ctx.fillStyle = "#ef4444";
    ctx.font = "bold 11px 'Plus Jakarta Sans'";
    const allergyTxt = currentPatient.allergies.join(", ") || "None";
    ctx.fillText(allergyTxt.length > 30 ? allergyTxt.substring(0, 30) + "..." : allergyTxt, 80, 185);
    
    // Footer notes
    ctx.fillStyle = "#64748b";
    ctx.font = "italic 9px 'Plus Jakarta Sans'";
    ctx.fillText("This card contains encrypted medical indicators. Scan code to load EHR logs.", 20, 218);
    
    // Draw QR on canvas
    const qrCanvas = document.getElementById("qr-code-canvas");
    ctx.drawImage(qrCanvas, 260, 80, 110, 110);
    
    // Link trigger download
    const link = document.createElement("a");
    link.download = `CarePassport-${currentPatient.name.replace(/\s+/g, '-')}.png`;
    link.href = tempCanvas.toDataURL("image/png");
    link.click();
}

// ==========================================================================
// 7. OFFLINE SIMULATOR (IndexedDB/LocalStorage Sync Queue)
// ==========================================================================
function toggleOfflineMode(forceOffline = null) {
    const offlineToggleBtn = document.getElementById("offline-toggle-btn");
    const offlineStatusText = document.getElementById("offline-status-text");
    
    isOffline = forceOffline !== null ? forceOffline : !isOffline;
    
    if (isOffline) {
        offlineToggleBtn.className = "btn-control offline";
        offlineStatusText.textContent = "Offline Mode";
        document.getElementById("card-sync-indicator").innerHTML = '<i class="fa-solid fa-wifi-slash"></i> Offline Cache';
        document.getElementById("card-sync-indicator").style.color = "var(--amber)";
        document.getElementById("card-sync-indicator").style.backgroundColor = "hsla(38, 90%, 50%, 0.12)";
        showToast(getI18n("offline_active_toast"));
    } else {
        offlineToggleBtn.className = "btn-control online";
        offlineStatusText.textContent = "Online";
        document.getElementById("card-sync-indicator").innerHTML = '<i class="fa-solid fa-circle-check"></i> Sync Complete';
        document.getElementById("card-sync-indicator").style.color = "var(--emerald)";
        document.getElementById("card-sync-indicator").style.backgroundColor = "hsla(150, 75%, 38%, 0.12)";
        showToast(getI18n("online_active_toast"));
        
        // Sync pending actions
        syncOfflineQueue();
    }
}

function getOfflineQueue() {
    const queue = localStorage.getItem("care_passport_sync_queue");
    return queue ? JSON.parse(queue) : [];
}

function addToOfflineQueue(action) {
    const queue = getOfflineQueue();
    queue.push(action);
    localStorage.setItem("care_passport_sync_queue", JSON.stringify(queue));
}

function syncOfflineQueue() {
    const queue = getOfflineQueue();
    if (queue.length === 0) {
        loadPatients();
        return;
    }
    
    // Process queue elements sequentially
    const promises = queue.map(action => {
        if (action.type === 'timeline_add') {
            return fetch(`/api/patients/${action.patientId}/timeline`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(action.data)
            });
        } else if (action.type === 'register_patient') {
            return fetch('/api/patients', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(action.data)
            });
        } else if (action.type === 'create_verification') {
            return fetch('/api/verifications', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(action.data)
            });
        } else if (action.type === 'approve_verification') {
            return fetch(`/api/verifications/${action.verificationId}/approve`, {
                method: 'POST'
            });
        } else if (action.type === 'reject_verification') {
            return fetch(`/api/verifications/${action.verificationId}/reject`, {
                method: 'POST'
            });
        }
    });

    Promise.all(promises)
        .then(() => {
            // Clear queue on success
            localStorage.removeItem("care_passport_sync_queue");
            loadPatients();
            showToast("Offline records synchronized successfully!");
        })
        .catch(err => {
            console.error("Error syncing queue, keeping in cache", err);
        });
}

// ==========================================================================
// 8. AI SPEECH DIALOG BUILDER (Natural Language EHR Extraction)
// ==========================================================================
function startVoiceBuilderMode() {
    if (!currentPatient) return;
    aiMode = 'doctor';
    
    // Hide details, open voice
    document.getElementById("patient-detail-view").classList.remove("active");
    document.getElementById("voice-builder-view").classList.add("active");
    
    // Set headers back to Doctor Mode
    const headerInfo = document.querySelector("#voice-builder-view .header-info");
    headerInfo.querySelector("h2").textContent = "AI Voice Health History Builder";
    headerInfo.querySelector("p").textContent = "Reconstruct medical history through a guided dialog for patients without written documents.";
    
    // Toggle side panels
    document.getElementById("doctor-builder-panel").style.display = "flex";
    document.getElementById("patient-assistant-panel").style.display = "none";
    document.getElementById("voice-builder-pane-title").querySelector("h3").innerHTML = '<i class="fa-solid fa-microchip"></i> Real-time Structured Records';
    document.getElementById("ai-processing-status").style.display = "inline-block"; // Show status badge
    
    // Set matching voice assistant language based on patient's primary language
    const primaryLang = currentPatient.languages[0] || 'English';
    let langCode = 'en';
    if (primaryLang.toLowerCase().includes('span')) langCode = 'es';
    if (primaryLang.toLowerCase().includes('beng')) langCode = 'bn';
    if (primaryLang.toLowerCase().includes('hait') || primaryLang.toLowerCase().includes('creo')) langCode = 'ht';
    
    document.getElementById("voice-lang-select").value = langCode;
    restartVoiceDialogue(langCode);
}

function startPatientAIAssistant() {
    if (!currentPatient) return;
    aiMode = 'patient';
    
    // Hide details, open voice view
    document.getElementById("patient-detail-view").classList.remove("active");
    document.getElementById("voice-builder-view").classList.add("active");
    
    // Set headers
    const headerInfo = document.querySelector("#voice-builder-view .header-info");
    headerInfo.querySelector("h2").textContent = "AI Care & Prescription Assistant";
    headerInfo.querySelector("p").textContent = "Check active prescriptions from your doctor and schedule clinic sessions.";
    
    // Toggle side panels
    document.getElementById("doctor-builder-panel").style.display = "none";
    document.getElementById("patient-assistant-panel").style.display = "flex";
    document.getElementById("voice-builder-pane-title").querySelector("h3").innerHTML = '<i class="fa-solid fa-user-shield"></i> Active Care & Booking Status';
    document.getElementById("ai-processing-status").style.display = "none"; // Hide status badge for patient
    
    // Populate Patient Side Panel Info
    populatePatientAssistantPanel();
    
    // Set matching voice assistant language
    const primaryLang = currentPatient.languages[0] || 'English';
    let langCode = 'en';
    if (primaryLang.toLowerCase().includes('span')) langCode = 'es';
    if (primaryLang.toLowerCase().includes('beng')) langCode = 'bn';
    if (primaryLang.toLowerCase().includes('hait') || primaryLang.toLowerCase().includes('creo')) langCode = 'ht';
    
    document.getElementById("voice-lang-select").value = langCode;
    restartVoiceDialogue(langCode);
}

function populatePatientAssistantPanel() {
    // 1. Medications list
    const medsList = document.getElementById("patient-verified-meds-list");
    medsList.innerHTML = "";
    if (currentPatient.medications.length === 0) {
        medsList.innerHTML = '<li class="empty-placeholder">No active prescriptions documented</li>';
    } else {
        currentPatient.medications.forEach(m => {
            medsList.innerHTML += `
                <li style="border-bottom:1px solid var(--border-color); padding-bottom:8px; margin-bottom:8px; display:flex; flex-direction:column; gap:4px; text-align:left;">
                    <span style="font-weight:700;"><i class="fa-solid fa-pills text-teal"></i> ${m.name}</span>
                    <span style="font-size:12px; color:var(--text-secondary);">Dosage: ${m.dosage}</span>
                    <span style="font-size:12px; color:var(--text-secondary);">Purpose: ${m.purpose}</span>
                    <span style="font-size:11px; color:var(--emerald); font-weight:600; margin-top:2px;">
                        <i class="fa-solid fa-lock"></i> Doctor Prescribed Verified
                    </span>
                </li>`;
        });
    }

    // 2. Booked Appointments list (Search timeline for "Appointment Scheduled:")
    const apptsList = document.getElementById("patient-booked-appointments-list");
    apptsList.innerHTML = "";
    const appts = currentPatient.timeline.filter(v => v.reason.startsWith("Appointment Scheduled:"));
    if (appts.length === 0) {
        apptsList.innerHTML = '<li class="empty-placeholder">No appointments scheduled</li>';
    } else {
        appts.forEach(a => {
            const cleanReason = a.reason.replace("Appointment Scheduled: ", "");
            apptsList.innerHTML += `
                <li style="border-bottom:1px solid var(--border-color); padding-bottom:8px; margin-bottom:8px; display:flex; flex-direction:column; gap:4px; text-align:left;">
                    <span style="font-weight:700;"><i class="fa-solid fa-calendar-check text-emerald"></i> ${cleanReason}</span>
                    <span style="font-size:12px; color:var(--text-secondary);">Clinic: ${a.clinicName}</span>
                    <span style="font-size:12px; color:var(--text-secondary);">Slot: ${a.location.replace("Scheduled Slot: ", "")}</span>
                    <span style="font-size:12px; color:var(--text-secondary);">Date: ${a.date}</span>
                </li>`;
        });
    }
    
    // 3. Load active refill requests status
    loadPatientRefillRequests();
}

function stopVoiceBuilderMode() {
    document.getElementById("voice-builder-view").classList.remove("active");
    document.getElementById("patient-detail-view").classList.add("active");
    
    // Stop any speech and streams
    window.speechSynthesis.cancel();
    stopMicRecord();
}

function restartVoiceDialogue(langCode) {
    currentDialogueStep = 0;
    conversationTranscripts = [];
    extractedAIRecord = {
        allergies: [],
        chronicConditions: [],
        medications: [],
        immunizations: []
    };
    
    // Clear chat display
    const chatContainer = document.getElementById("conversation-chat");
    chatContainer.innerHTML = "";
    
    // Reset structured records preview UI
    resetStructuredPanelUI();
    
    // Render first prompt
    renderAIStep(langCode);
}

function renderAIStep(langCode) {
    const dialogArray = aiMode === 'patient' ? 
        (aiPatientDialogScript[langCode] || aiPatientDialogScript['en']) : 
        (aiDialogScript[langCode] || aiDialogScript['en']);
        
    if (currentDialogueStep >= dialogArray.length) {
        if (aiMode === 'patient') {
            appendChatBubble("assistant", langCode === 'es' ? "¡Gracias! Su sesión de asistencia médica ha finalizado. Si necesita programar otra cita o tiene preguntas, no dude en abrir este asistente nuevamente." : 
                                         langCode === 'bn' ? "ধন্যবাদ! আপনার স্বাস্থ্য সহায়তা সেশন শেষ হয়েছে। নতুন অ্যাপয়েন্টমেন্টের জন্য অনুগ্রহ করে আবার সহকারী ওপেন করুন।" :
                                         langCode === 'ht' ? "Mèsi! Sesyon asistans sante ou fini. Si w bezwen pran yon lòt randevou, tanpri louvri asistan sa a ankò." :
                                         "Thank you! Your health assistance session is complete. Feel free to open this assistant again if you need further help.");
            document.getElementById("quick-response-options").innerHTML = "";
            document.getElementById("voice-helper-instruction").textContent = "Assistant session complete.";
            playAssistantSpeech(langCode === 'es' ? "Gracias. Asistencia finalizada." : "Thank you. Care assistance session complete.");
            return;
        }
        
        // Conversation finished (Doctor Mode)
        appendChatBubble("assistant", langCode === 'es' ? "¡Gracias! He recopilado y estructurado su historial médico con éxito. Guarde el registro para guardarlo en su CarePassport." : 
                                     langCode === 'bn' ? "ধন্যবাদ! আমি সফলভাবে আপনার শারীরিক ইতিহাস বিশ্লেষণ এবং তৈরি করেছি। এটি আপনার কেয়ারপাসপোর্টে যুক্ত করতে 'Save' বোতামে ক্লিক করুন।" :
                                     langCode === 'ht' ? "Mèsi! Mwen reyisi analize ak fòme istwa medikal ou. Tanpri klike sou bouton 'Save' la pou anrejistre li nan CarePassport ou." :
                                     "Thank you! I have successfully processed and structured your medical history. Please save the records to sync them with your CarePassport.");
                                     
        document.getElementById("btn-save-ai-extracted").removeAttribute("disabled");
        document.getElementById("quick-response-options").innerHTML = "";
        document.getElementById("voice-helper-instruction").textContent = "History complete. Review and save below.";
        playAssistantSpeech(langCode === 'es' ? "Gracias. Historial recopilado con éxito." : "Thank you. Health history successfully constructed.");
        return;
    }
    
    const step = dialogArray[currentDialogueStep];
    
    let promptText = step.prompt;
    let audioText = step.audioText;
    
    if (aiMode === 'patient' && promptText.includes("[med_list_text]")) {
        if (currentPatient && currentPatient.medications.length > 0) {
            const meds = currentPatient.medications.map(m => `${m.name} (${m.dosage})`).join(", ");
            if (langCode === 'es') {
                promptText = promptText.replace("[med_list_text]", `Sus medicamentos actuales son: ${meds}.`);
                audioText = audioText.replace("[med_list_text]", `Sus medicamentos actuales son: ${meds}.`);
            } else if (langCode === 'bn') {
                promptText = promptText.replace("[med_list_text]", `আপনার বর্তমান ওষুধগুলো হল: ${meds}।`);
                audioText = audioText.replace("[med_list_text]", `আপনার বর্তমান ওষুধগুলো হল: ${meds}।`);
            } else if (langCode === 'ht') {
                promptText = promptText.replace("[med_list_text]", `Medikaman ou yo se: ${meds}.`);
                audioText = audioText.replace("[med_list_text]", `Medikaman ou yo se: ${meds}.`);
            } else {
                promptText = promptText.replace("[med_list_text]", `Your active medications are: ${meds}.`);
                audioText = audioText.replace("[med_list_text]", `Your active medications are: ${meds}.`);
            }
        } else {
            if (langCode === 'es') {
                promptText = promptText.replace("[med_list_text]", "No tiene medicamentos registrados actualmente.");
                audioText = audioText.replace("[med_list_text]", "No tiene medicamentos registrados actualmente.");
            } else {
                promptText = promptText.replace("[med_list_text]", "You have no active medications documented.");
                audioText = audioText.replace("[med_list_text]", "You have no active medications documented.");
            }
        }
    }
    
    if (aiMode === 'patient' && promptText.includes("[ai_refill_suggestion_text]")) {
        let suggText = "";
        let suggAudio = "";
        let pastDiagnosisMatch = "";
        let matchMed = "";
        
        const sym = (selectedSymptom || "").toLowerCase();
        if (sym.includes("asthma") || sym.includes("wheez") || sym.includes("pecho") || sym.includes("sibil") || sym.includes("শ্বাস") || sym.includes("opresyon") || sym.includes("souf")) {
            pastDiagnosisMatch = langCode === 'es' ? "Asma Persistente" : 
                                 langCode === 'bn' ? "হাঁপানি" :
                                 langCode === 'ht' ? "Opresyon" : "Moderate Persistent Asthma";
            matchMed = "Albuterol HFA rescue inhaler (2 puffs as needed)";
        } else if (sym.includes("sugar") || sym.includes("diabet") || sym.includes("azúcar") || sym.includes("শর্করা") || sym.includes("sik")) {
            pastDiagnosisMatch = langCode === 'es' ? "Diabetes Tipo 1" : 
                                 langCode === 'bn' ? "টাইপ ১ ডায়াবেটিস" :
                                 langCode === 'ht' ? "Dyabèt Tip 1" : "Type 1 Diabetes Mellitus";
            matchMed = "Insulin Glargine (Lantus) / Humalog needles";
        } else if (sym.includes("headache") || sym.includes("dizzy") || sym.includes("pressure") || sym.includes("tensión") || sym.includes("dolor de cabeza") || sym.includes("mareo") || sym.includes("মাথাব্যথা") || sym.includes("রক্তচাপ") || sym.includes("tansyon") || sym.includes("tèt vire")) {
            pastDiagnosisMatch = langCode === 'es' ? "Hipertensión Controlada" : 
                                 langCode === 'bn' ? "উচ্চ রক্তচাপ" :
                                 langCode === 'ht' ? "Tansyon Wo" : "Controlled Hypertension";
            matchMed = "Amlodipine Besylate 5mg daily";
        } else {
            pastDiagnosisMatch = langCode === 'es' ? "Revisión General" : 
                                 langCode === 'bn' ? "সাধারণ চেকআপ" :
                                 langCode === 'ht' ? "Kontwòl Jeneral" : "General Health Check-up";
            matchMed = "Request medical check-up Refill/Consultation";
        }
        
        suggestedMedication = matchMed;
        
        if (langCode === 'es') {
            suggText = `Basado en su historial previo de **${pastDiagnosisMatch}**, la IA sugiere: **${matchMed}**. ¿A qué médico desea enviar esta solicitud de verificación?`;
            suggAudio = `Basado en su historial previo de ${pastDiagnosisMatch}, la IA sugiere ${matchMed}. ¿A qué médico desea enviar esta solicitud de verificación?`;
        } else if (langCode === 'bn') {
            suggText = `আপনার পূর্বের ইতিহাস **${pastDiagnosisMatch}** এর উপর ভিত্তি করে এআই সাজেস্ট করছে: **${matchMed}**। আপনি কোন ডাক্তারের কাছে এই অনুরোধটি পাঠাতে চান?`;
            suggAudio = `আপনার পূর্বের ইতিহাস ${pastDiagnosisMatch} এর উপর ভিত্তি করে এআই সাজেস্ট করছে ${matchMed}। আপনি কোন ডাক্তারের কাছে এই অনুরোধটি পাঠাতে চান?`;
        } else if (langCode === 'ht') {
            suggText = `Dapre istwa medikal ou pou **${pastDiagnosisMatch}**, asistan an sijere: **${matchMed}**. Ki doktè ou ta renmen voye demann sa a bay?`;
            suggAudio = `Dapre istwa medikal ou pou ${pastDiagnosisMatch}, asistan an sijere ${matchMed}. Ki doktè ou ta renmen voye demann sa a bay?`;
        } else {
            suggText = `Based on your previous history of **${pastDiagnosisMatch}**, the AI suggests: **${matchMed}**. Which doctor would you like to verify this refill request?`;
            suggAudio = `Based on your previous history of ${pastDiagnosisMatch}, the AI suggests ${matchMed}. Which doctor would you like to verify this refill request?`;
        }
        
        promptText = suggText;
        audioText = suggAudio;
    }
    
    // Play audio guidance
    playAssistantSpeech(audioText, langCode);
    
    // Render AI prompt bubble
    appendChatBubble("assistant", promptText);
    
    // Setup quick response recommendation buttons (for demo clickable fallback support)
    const optionsRow = document.getElementById("quick-response-options");
    optionsRow.innerHTML = "";
    
    if (aiMode === 'patient' && currentDialogueStep === 2) {
        const wrapper = document.createElement("div");
        wrapper.className = "doctor-select-wrapper";
        wrapper.style.width = "100%";
        wrapper.style.maxWidth = "350px";
        wrapper.style.margin = "0 auto";
        
        const label = document.createElement("label");
        label.textContent = langCode === 'es' ? "Seleccione un Médico:" : 
                            langCode === 'bn' ? "ডাক্তার নির্বাচন করুন:" : 
                            langCode === 'ht' ? "Chwazi yon Doktè:" : 
                            "Select a Doctor:";
        
        const select = document.createElement("select");
        select.id = "doctor-verify-select";
        
        availableDoctors.forEach(doc => {
            const opt = document.createElement("option");
            opt.value = doc;
            opt.textContent = doc;
            select.appendChild(opt);
        });
        
        const btnSubmit = document.createElement("button");
        btnSubmit.className = "btn-primary";
        btnSubmit.style.marginTop = "12px";
        btnSubmit.style.width = "100%";
        btnSubmit.style.justifyContent = "center";
        btnSubmit.innerHTML = `<i class="fa-solid fa-paper-plane"></i> ` + 
                              (langCode === 'es' ? "Enviar al Doctor" : 
                               langCode === 'bn' ? "ডাক্তারকে পাঠান" : 
                               langCode === 'ht' ? "Voye bay Doktè" : 
                               "Send to Doctor");
        
        btnSubmit.onclick = () => {
            selectedDoctor = select.value;
            submitVerificationRequest(langCode);
        };
        
        wrapper.appendChild(label);
        wrapper.appendChild(select);
        wrapper.appendChild(btnSubmit);
        optionsRow.appendChild(wrapper);
    } else {
        step.options.forEach(opt => {
            const btn = document.createElement("button");
            btn.className = "btn-option";
            btn.textContent = opt;
            btn.addEventListener("click", () => {
                handleVoiceInputMock(opt, langCode);
            });
            optionsRow.appendChild(btn);
        });
    }
}

function appendChatBubble(sender, text, rawTranslation = null) {
    const chatContainer = document.getElementById("conversation-chat");
    const bubble = document.createElement("div");
    bubble.className = `chat-bubble ${sender}`;
    
    // Translator bridge for demo validation
    let transBlock = '';
    if (rawTranslation) {
        transBlock = `<span class="bubble-translation"><i class="fa-solid fa-globe"></i> English: "${rawTranslation}"</span>`;
    } else if (sender === 'assistant' && document.getElementById("voice-lang-select").value !== 'en') {
        // Translation helper for clinician viewing assistant prompts
        const voiceLang = document.getElementById("voice-lang-select").value;
        const matchingStep = aiDialogScript[voiceLang].find(s => s.prompt === text);
        if (matchingStep) {
            const engEquivalent = aiDialogScript['en'][aiDialogScript[voiceLang].indexOf(matchingStep)];
            if (engEquivalent) {
                transBlock = `<span class="bubble-translation"><i class="fa-solid fa-globe"></i> Clinician translation: "${engEquivalent.prompt}"</span>`;
            }
        }
    }
    
    bubble.innerHTML = `
        <span class="bubble-sender">${sender === 'assistant' ? 'CarePassport AI' : 'Patient'}</span>
        <p>${text}</p>
        ${transBlock}
    `;
    
    chatContainer.appendChild(bubble);
    
    // Auto scroll
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

// Simulated vocal voice feedback synthesis
function playAssistantSpeech(text, langCode) {
    if (audioMuted || !('speechSynthesis' in window)) return;
    
    // Cancel current
    window.speechSynthesis.cancel();
    
    const utter = new SpeechSynthesisUtterance(text);
    
    // Determine language vocalization voice
    if (langCode === 'es') utter.lang = 'es-ES';
    else if (langCode === 'bn') utter.lang = 'bn-BD';
    else if (langCode === 'ht') utter.lang = 'fr-FR'; // Haitian Creole voice fallback to French
    else utter.lang = 'en-US';
    
    // Trigger visual bounce animation
    const wave = document.getElementById("voice-wave-container");
    wave.classList.add("active");
    
    utter.onend = () => {
        wave.classList.remove("active");
    };
    
    window.speechSynthesis.speak(utter);
}

let hasSpeechError = false;

// Web Speech Recognition Controller (Actual browser microphone integration)
function initSpeechRecognition() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
        console.warn("Browser does not support Speech Recognition. Falling back to quick options.");
        return;
    }
    
    speechRecognizer = new SpeechRecognition();
    speechRecognizer.continuous = false;
    speechRecognizer.interimResults = false;
    
    speechRecognizer.onstart = () => {
        hasSpeechError = false;
        const mic = document.getElementById("btn-mic-toggle");
        mic.className = "btn-mic listening";
        document.getElementById("voice-wave-container").classList.add("active");
        document.getElementById("voice-helper-instruction").innerHTML = '<span class="text-teal"><i class="fa-solid fa-spinner fa-spin"></i> Listening... Speak now</span>';
    };
    
    speechRecognizer.onerror = (e) => {
        console.error("Speech recognition error", e);
        hasSpeechError = true;
        
        let errorMsg = "";
        if (e.error === 'not-allowed') {
            errorMsg = '<span class="text-red"><i class="fa-solid fa-circle-exclamation"></i> Mic permission blocked. Please allow access or type below.</span>';
        } else if (e.error === 'no-speech') {
            errorMsg = '<span class="text-amber"><i class="fa-solid fa-volume-low"></i> No speech detected. Please speak louder or type below.</span>';
        } else if (e.error === 'audio-capture') {
            errorMsg = '<span class="text-red"><i class="fa-solid fa-microphone-slash"></i> No microphone hardware detected. Please type below.</span>';
        } else {
            errorMsg = `<span class="text-red"><i class="fa-solid fa-circle-exclamation"></i> Mic error (${e.error}). Please type below.</span>`;
        }
        
        document.getElementById("voice-helper-instruction").innerHTML = errorMsg;
        stopMicRecord(true); // Keep error message visible
    };
    
    speechRecognizer.onend = () => {
        if (!hasSpeechError) {
            stopMicRecord(false);
        }
    };
    
    speechRecognizer.onresult = (e) => {
        const transcript = e.results[0][0].transcript;
        const activeLang = document.getElementById("voice-lang-select").value;
        handleVoiceInputMock(transcript, activeLang);
    };
}

function handleMicToggle() {
    const mic = document.getElementById("btn-mic-toggle");
    
    if (mic.classList.contains("listening")) {
        stopMicRecord();
    } else {
        if (speechRecognizer) {
            const activeLang = document.getElementById("voice-lang-select").value;
            speechRecognizer.lang = activeLang === 'es' ? 'es-ES' : 
                                    activeLang === 'bn' ? 'bn-BD' : 
                                    activeLang === 'ht' ? 'fr-FR' : 'en-US';
            try {
                // Prevent DOMExceptions by aborting any active session first
                try { speechRecognizer.abort(); } catch(e){}
                hasSpeechError = false; // Reset error state on click
                speechRecognizer.start();
            } catch (err) {
                console.error("Recognition start failed, fallback to mock", err);
                simulateMicrophoneListening();
            }
        } else {
            simulateMicrophoneListening();
        }
    }
}

function stopMicRecord(keepInstruction = false) {
    const mic = document.getElementById("btn-mic-toggle");
    mic.className = "btn-mic idle";
    document.getElementById("voice-wave-container").classList.remove("active");
    if (!keepInstruction) {
        document.getElementById("voice-helper-instruction").textContent = "Speak, type your message, or pick an option below";
    }
    if (speechRecognizer) {
        try { speechRecognizer.stop(); } catch(e){}
    }
}

// Fallback visual mock listening if microphone hardware is unavailable
function simulateMicrophoneListening() {
    const helper = document.getElementById("voice-helper-instruction");
    helper.innerHTML = '<span class="text-amber"><i class="fa-solid fa-triangle-exclamation"></i> Speech recognition not supported in this browser. Please type below.</span>';
    
    // Flash mic red briefly and reset
    const mic = document.getElementById("btn-mic-toggle");
    mic.className = "btn-mic listening";
    setTimeout(() => {
        mic.className = "btn-mic idle";
    }, 500);
}

// Handler once speech is collected (Mock or real speech)
function handleVoiceInputMock(text, langCode) {
    stopMicRecord();
    
    // Translate text roughly for timeline presentation (since clinician views it in English)
    let englishTranslation = text;
    if (langCode === 'es') {
        if (text.includes("penicilina") || text.includes("recetas") || text.includes("medicamento")) englishTranslation = "Yes, check my prescriptions";
        else if (text.includes("cita") || text.includes("programar") || text.includes("clínica")) englishTranslation = "No, I want to book an appointment";
        else if (text.includes("ID") || text.includes("Cuidado")) englishTranslation = "What is my Care ID?";
        else if (text.includes("diario") || text.includes("días") || text.includes("tomo")) englishTranslation = "Yes, I take them daily";
        else if (text.includes("repuesto") || text.includes("falta")) englishTranslation = "No, I need a clinic refill";
        else if (text.includes("indicó") || text.includes("médico") || text.includes("doctor")) englishTranslation = "What did the doctor say?";
        else if (text.includes("bien") || text.includes("ahora")) englishTranslation = "No, I'm doing well for now";
        else if (text.includes("ver") || text.includes("programadas")) englishTranslation = "Show my booked appointments";
    } else {
        if (text.includes("penicillin")) englishTranslation = "Allergic to Penicillin";
        if (text.includes("sulfonamidas")) englishTranslation = "Allergic to Latex & Sulfa Drugs";
        if (text.includes("nada")) englishTranslation = "No allergies";
        if (text.includes("asma")) englishTranslation = "I have asthma and use inhaler";
        if (text.includes("diabetes")) englishTranslation = "I have Type 1 Diabetes";
        if (text.includes("presión")) englishTranslation = "I have high blood pressure";
        if (text.includes("insulina")) englishTranslation = "Taking Insulin Glargine";
        if (text.includes("amlodipino")) englishTranslation = "Taking Amlodipine for blood pressure";
        if (text.includes("Advair")) englishTranslation = "Taking Advair inhaler twice daily";
        if (text.includes("tétanos")) englishTranslation = "Got Tetanus shot in Oregon, 2024";
        if (text.includes("COVID")) englishTranslation = "COVID shot in California";
    }
    
    appendChatBubble("user", text, (langCode !== 'en' && aiMode === 'doctor') ? englishTranslation : null);
    conversationTranscripts.push(englishTranslation);
    
    if (aiMode === 'patient') {
        const lower = text.toLowerCase();
        
        // Handle patient dialog steering
        if (currentDialogueStep === 0) {
            const isSymptomCheck = lower.includes("symptom") || lower.includes("lòk") || lower.includes("লক্ষণ") || lower.includes("sintoma") || lower.includes("refill") || lower.includes("receta") || lower.includes("রিফিল") || lower.includes("refil") || lower.includes("problema");
            if (isSymptomCheck) {
                currentDialogueStep = 1;
                setTimeout(() => {
                    renderAIStep(langCode);
                }, 1000);
                return;
            }
        } else if (currentDialogueStep === 1) {
            selectedSymptom = text;
        } else if (currentDialogueStep === 3) {
            stopVoiceBuilderMode();
            return;
        }
        
        if (lower.includes("finish") || lower.includes("terminar") || lower.includes("শেষ") || lower.includes("fini")) {
            stopVoiceBuilderMode();
            return;
        }
        
        if (lower.includes("cita") || lower.includes("programar") || lower.includes("book") || lower.includes("appointment") || lower.includes("session") || lower.includes("randevou") || lower.includes("অ্যাপয়েন্টমেন্ট")) {
            const reply = langCode === 'es' ? "Excelente. Abriendo la ventana de programación para que elija su clínica y horario..." : 
                          langCode === 'bn' ? "ঠিক আছে। আপনার ক্লিনিক এবং সময় নির্বাচন করার জন্য বুকিং উইন্ডোটি খোলা হচ্ছে..." :
                          langCode === 'ht' ? "Trè byen. Mwen pral louvri fenèt rezèvasyon an pou w ka chwazi klinik ak lè a..." :
                          "Excellent. Opening the scheduling window for you to select your clinic and time slot...";
            appendChatBubble("assistant", reply);
            playAssistantSpeech(reply, langCode);
            setTimeout(() => {
                stopVoiceBuilderMode();
                openModal(document.getElementById("booking-modal"));
            }, 2500);
            return;
        } else if (lower.includes("id")) {
            const reply = langCode === 'es' ? `Su ID de Cuidado es: ${currentPatient.id}.` : 
                          langCode === 'bn' ? `আপনার কেয়ার আইডি হল: ${currentPatient.id}।` :
                          langCode === 'ht' ? `ID Swen ou se: ${currentPatient.id}.` :
                          `Your Care ID is: ${currentPatient.id}.`;
            appendChatBubble("assistant", reply);
            playAssistantSpeech(reply, langCode);
            return;
        } else if (lower.includes("doctor") || lower.includes("médico") || lower.includes("di") || lower.includes("say") || lower.includes("বলেছিলেন") || lower.includes("prescrip")) {
            let reply = "";
            if (currentPatient && currentPatient.medications.length > 0) {
                const instructions = currentPatient.medications.map(m => `${m.name}: ${m.dosage} for ${m.purpose}`).join(". ");
                reply = langCode === 'es' ? `El doctor le indicó tomar: ${instructions}.` : 
                        langCode === 'bn' ? `ডাক্তার আপনাকে নিতে বলেছেন: ${instructions}।` :
                        langCode === 'ht' ? `Doktè a te mande w pran: ${instructions}.` :
                        `Your doctor instructed you to take: ${instructions}.`;
            } else {
                reply = langCode === 'es' ? "No tiene indicaciones de medicamentos registradas por el doctor actualmente." : "You have no active medications documented by your doctor.";
            }
            appendChatBubble("assistant", reply);
            playAssistantSpeech(reply, langCode);
            return;
        } else if (lower.includes("ver") || lower.includes("show") || lower.includes("citas") || lower.includes("appointment") || lower.includes("montre") || lower.includes("দেখান")) {
            const reply = langCode === 'es' ? "Cerrando asistente. Sus citas programadas están listadas en el panel derecho." : "Closing assistant. Your scheduled appointments are listed on the right-hand panel.";
            appendChatBubble("assistant", reply);
            playAssistantSpeech(reply, langCode);
            setTimeout(() => {
                stopVoiceBuilderMode();
            }, 2500);
            return;
        }
        
        // Progress standard patient steps
        currentDialogueStep++;
        setTimeout(() => {
            renderAIStep(langCode);
        }, 1200);
    } else {
        // Call server API for real-time NLP keyword/intent clustering extraction (Doctor Mode)
        triggerAIRecordsExtraction();
    }
}

function triggerAIRecordsExtraction() {
    const statusLabel = document.getElementById("ai-processing-status");
    statusLabel.textContent = "Analyzing...";
    statusLabel.className = "badge-status-processing listening";
    
    fetch('/api/ai-reconstruct', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ transcripts: conversationTranscripts })
    })
    .then(res => res.json())
    .then(structuredData => {
        statusLabel.textContent = "Data Synced";
        statusLabel.className = "badge-status-processing extracted";
        
        // Merge extracted findings
        extractedAIRecord.allergies = structuredData.allergies;
        extractedAIRecord.chronicConditions = structuredData.chronicConditions;
        extractedAIRecord.medications = structuredData.medications;
        extractedAIRecord.immunizations = structuredData.immunizations;
        
        // Update Structured Panel DOM UI
        updateStructuredPanelUI();
        
        // Advance conversational wizard
        currentDialogueStep++;
        
        // Render next prompt after brief pause
        setTimeout(() => {
            const currentVoiceLang = document.getElementById("voice-lang-select").value;
            renderAIStep(currentVoiceLang);
        }, 1200);
    })
    .catch(err => {
        console.error("AI parse failed, using client fallback", err);
    });
}

function updateStructuredPanelUI() {
    // 1. Allergies
    const algList = document.getElementById("ai-extracted-allergies");
    algList.innerHTML = "";
    if (extractedAIRecord.allergies.length === 0) {
        algList.innerHTML = '<li class="empty-placeholder">No allergies detected yet</li>';
    } else {
        extractedAIRecord.allergies.forEach(a => {
            algList.innerHTML += `<li class="text-red"><i class="fa-solid fa-triangle-exclamation"></i> ${a}</li>`;
        });
    }
    
    // 2. Conditions
    const condList = document.getElementById("ai-extracted-conditions");
    condList.innerHTML = "";
    if (extractedAIRecord.chronicConditions.length === 0) {
        condList.innerHTML = '<li class="empty-placeholder">No chronic conditions detected yet</li>';
    } else {
        extractedAIRecord.chronicConditions.forEach(c => {
            condList.innerHTML += `<li class="text-amber"><i class="fa-solid fa-circle-notch"></i> ${c}</li>`;
        });
    }

    // 3. Meds
    const medList = document.getElementById("ai-extracted-medications");
    medList.innerHTML = "";
    if (extractedAIRecord.medications.length === 0) {
        medList.innerHTML = '<li class="empty-placeholder">No medications detected yet</li>';
    } else {
        extractedAIRecord.medications.forEach(m => {
            medList.innerHTML += `
                <li>
                    <i class="fa-solid fa-pills text-teal"></i> ${m.name}
                    <span class="ext-item-desc">${m.dosage} — ${m.purpose}</span>
                </li>`;
        });
    }

    // 4. Vaccines
    const vacList = document.getElementById("ai-extracted-vaccines");
    vacList.innerHTML = "";
    if (extractedAIRecord.immunizations.length === 0) {
        vacList.innerHTML = '<li class="empty-placeholder">No immunizations detected yet</li>';
    } else {
        extractedAIRecord.immunizations.forEach(i => {
            vacList.innerHTML += `
                <li>
                    <i class="fa-solid fa-syringe text-teal"></i> ${i.disease}
                    <span class="ext-item-desc">Date: ${i.date} (${i.location})</span>
                </li>`;
        });
    }
}

function resetStructuredPanelUI() {
    document.getElementById("btn-save-ai-extracted").setAttribute("disabled", "true");
    document.getElementById("ai-processing-status").textContent = "Listening...";
    document.getElementById("ai-processing-status").className = "badge-status-processing listening";
    
    document.getElementById("ai-extracted-allergies").innerHTML = '<li class="empty-placeholder">No allergies detected yet</li>';
    document.getElementById("ai-extracted-conditions").innerHTML = '<li class="empty-placeholder">No chronic conditions detected yet</li>';
    document.getElementById("ai-extracted-medications").innerHTML = '<li class="empty-placeholder">No medications detected yet</li>';
    document.getElementById("ai-extracted-vaccines").innerHTML = '<li class="empty-placeholder">No immunizations detected yet</li>';
}

function saveExtractedAIHistory() {
    if (!currentPatient) return;
    
    // Deep merge extracted history properties into patient record
    currentPatient.allergies = [...new Set([...currentPatient.allergies, ...extractedAIRecord.allergies])];
    currentPatient.chronicConditions = [...new Set([...currentPatient.chronicConditions, ...extractedAIRecord.chronicConditions])];
    
    // Avoid medication and vaccine duplicate inserts
    extractedAIRecord.medications.forEach(med => {
        if (!currentPatient.medications.find(m => m.name.toLowerCase() === med.name.toLowerCase())) {
            currentPatient.medications.push(med);
        }
    });
    
    extractedAIRecord.immunizations.forEach(vac => {
        if (!currentPatient.immunizations.find(v => v.disease.toLowerCase().substring(0,4) === vac.disease.toLowerCase().substring(0,4))) {
            currentPatient.immunizations.push(vac);
        }
    });
    
    // Add timeline action record summarizing AI builder session
    const visitEntry = {
        date: new Date().toISOString().substring(0,10),
        clinicName: "CarePassport Virtual Assistant",
        location: "Mobile App AI Builder",
        reason: "Patient Health History Reconstruction Interview",
        diagnosis: "EHR profiles updated",
        treatment: "Structured health questionnaire compiled via voice interface",
        doctor: "CarePassport AI Agent",
        notes: "Worker health profile compiled through natural conversation due to absence of previous clinical documentations."
    };
    currentPatient.timeline.unshift(visitEntry);

    // Save state changes (to LocalStorage always and API if online)
    if (isOffline) {
        // Queue sync action
        addToOfflineQueue({
            type: 'timeline_add',
            patientId: currentPatient.id,
            data: visitEntry
        });
        
        // Also update local clone list
        const idx = patients.findIndex(p => p.id === currentPatient.id);
        if (idx !== -1) patients[idx] = currentPatient;
        localStorage.setItem("care_passport_patients", JSON.stringify(patients));
        
        stopVoiceBuilderMode();
        selectPatient(currentPatient.id);
        showToast("AI history compiled. Changes saved locally.");
    } else {
        // POST to timeline and reload patient list to capture profile additions
        // In a real application, we would also update profile array attributes via a PUT request.
        // For our demo, we save it locally in the global patient array list, push timeline, and send data back to write in DB.
        
        fetch(`/api/patients/${currentPatient.id}/timeline`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(visitEntry)
        })
        .then(res => res.json())
        .then(() => {
            // Update back to API via simulated write trigger or direct state list reload
            // Let's force update patient list
            const idx = patients.findIndex(p => p.id === currentPatient.id);
            if (idx !== -1) patients[idx] = currentPatient;
            
            // Re-cache and write to backend mock database using timeline updates
            localStorage.setItem("care_passport_patients", JSON.stringify(patients));
            
            stopVoiceBuilderMode();
            selectPatient(currentPatient.id);
            showToast("AI health history compiled & saved to database.");
            loadPatients(); // Refresh complete list
        });
    }
}

// ==========================================================================
// 9. EVENT FORMS (Add Visit, Register Patient)
// ==========================================================================
function handleRegistration(e) {
    e.preventDefault();
    
    const name = document.getElementById("reg-name").value;
    const dob = document.getElementById("reg-dob").value;
    const nationality = document.getElementById("reg-nationality").value || "Not Specified";
    const blood = document.getElementById("reg-blood").value;
    const doctor = document.getElementById("reg-doctor").value;
    
    // Select languages array checkbox values
    const langs = [];
    document.querySelectorAll("input[name='reg-languages']:checked").forEach(cb => {
        langs.push(cb.value);
    });

    const emergency = {
        name: document.getElementById("reg-ec-name").value,
        relation: document.getElementById("reg-ec-relation").value,
        phone: document.getElementById("reg-ec-phone").value
    };

    const newPatientData = {
        name: name,
        dateOfBirth: dob,
        nationality: nationality,
        languages: langs.length > 0 ? langs : ["English"],
        bloodGroup: blood,
        allergies: [],
        chronicConditions: [],
        medications: [],
        immunizations: [],
        emergencyContact: emergency,
        timeline: [],
        assignedDoctor: doctor
    };

    if (isOffline) {
        // Generate mock offline ID and credentials
        const patientId = `CP-${Math.floor(1000 + Math.random() * 9000)}-${Math.floor(10 + Math.random() * 90)}`;
        const generatedUser = name.split(" ")[0].toLowerCase() + Math.floor(100 + Math.random() * 900);
        const generatedPass = "cp" + Math.floor(1000 + Math.random() * 9000);
        
        const offlinePatient = { 
            id: patientId, 
            username: generatedUser,
            password: generatedPass,
            ...newPatientData 
        };
        
        patients.push(offlinePatient);
        localStorage.setItem("care_passport_patients", JSON.stringify(patients));
        
        addToOfflineQueue({
            type: 'register_patient',
            data: offlinePatient
        });
        
        closeModal(document.getElementById("register-modal"));
        document.getElementById("register-worker-form").reset();
        loadPatients();
        selectPatient(patientId);
        showToast(`Registered (Offline Cache)! User: ${generatedUser} | Pass: ${generatedPass}`, 8000);
    } else {
        // Post to backend
        fetch('/api/patients', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newPatientData)
        })
        .then(res => res.json())
        .then(savedPatient => {
            closeModal(document.getElementById("register-modal"));
            document.getElementById("register-worker-form").reset();
            patients.push(savedPatient);
            loadPatients();
            selectPatient(savedPatient.id);
            showToast(`Registered successfully! User: ${savedPatient.username} | Pass: ${savedPatient.password}`, 8000);
        })
        .catch(err => {
            console.error("Create patient failed", err);
            showToast("Failed to register worker. Connection error.");
        });
    }
}

function handleAddVisit(e) {
    e.preventDefault();
    if (!currentPatient) return;
    
    const clinic = document.getElementById("visit-clinic").value;
    const date = document.getElementById("visit-date").value;
    const location = document.getElementById("visit-location").value;
    const reason = document.getElementById("visit-reason").value;
    const diagnosis = document.getElementById("visit-diagnosis").value || "Not Specified";
    const treatment = document.getElementById("visit-treatment").value || "Not Specified";
    const doctor = document.getElementById("visit-doctor").value || "Not Specified";
    const notes = document.getElementById("visit-notes").value;

    const newVisit = {
        date: date,
        clinicName: clinic,
        location: location,
        reason: reason,
        diagnosis: diagnosis,
        treatment: treatment,
        doctor: doctor,
        notes: notes
    };

    if (isOffline) {
        currentPatient.timeline.unshift(newVisit);
        // Save back to local list clone
        const idx = patients.findIndex(p => p.id === currentPatient.id);
        if (idx !== -1) patients[idx] = currentPatient;
        localStorage.setItem("care_passport_patients", JSON.stringify(patients));
        
        addToOfflineQueue({
            type: 'timeline_add',
            patientId: currentPatient.id,
            data: newVisit
        });
        
        closeModal(document.getElementById("add-visit-modal"));
        document.getElementById("add-visit-form").reset();
        renderTimeline();
        showToast(getI18n("add_visit_success") + " (Offline Cache)");
    } else {
        fetch(`/api/patients/${currentPatient.id}/timeline`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newVisit)
        })
        .then(res => res.json())
        .then(savedVisit => {
            closeModal(document.getElementById("add-visit-modal"));
            document.getElementById("add-visit-form").reset();
            currentPatient.timeline.unshift(savedVisit);
            renderTimeline();
            showToast(getI18n("add_visit_success"));
            loadPatients(); // Reload list to update counters
        })
        .catch(err => {
            console.error("Add visit failed", err);
            showToast("Failed to add visit. Connection error.");
        });
    }
}

function handleBookingSubmit(e) {
    e.preventDefault();
    if (!currentPatient) return;
    
    const clinic = document.getElementById("booking-clinic").value;
    const date = document.getElementById("booking-date").value;
    const time = document.getElementById("booking-time").value;
    const reason = document.getElementById("booking-reason").value;
    
    // We create a special timeline visit entry indicating the scheduled booking
    const scheduledBooking = {
        date: date,
        clinicName: clinic,
        location: "Scheduled Slot: " + time,
        reason: "Appointment Scheduled: " + reason,
        diagnosis: "Confirmed Slot",
        treatment: "Pending Doctor Consultation",
        doctor: "Assigned Mobile Clinic Doctor",
        notes: "Visit slot booked. Patient verified their active medications list via the Care AI Assistant."
    };
    
    if (isOffline) {
        currentPatient.timeline.unshift(scheduledBooking);
        const idx = patients.findIndex(p => p.id === currentPatient.id);
        if (idx !== -1) patients[idx] = currentPatient;
        localStorage.setItem("care_passport_patients", JSON.stringify(patients));
        
        addToOfflineQueue({
            type: 'timeline_add',
            patientId: currentPatient.id,
            data: scheduledBooking
        });
        
        closeModal(document.getElementById("booking-modal"));
        document.getElementById("booking-form").reset();
        renderTimeline();
        showToast("Clinic session booked successfully (Offline Cache)!");
    } else {
        fetch(`/api/patients/${currentPatient.id}/timeline`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(scheduledBooking)
        })
        .then(res => res.json())
        .then(savedBooking => {
            closeModal(document.getElementById("booking-modal"));
            document.getElementById("booking-form").reset();
            currentPatient.timeline.unshift(savedBooking);
            renderTimeline();
            showToast("Clinic session booked successfully!");
            
            // If currently in patient assistant view, reload side panel status
            if (aiMode === 'patient') {
                populatePatientAssistantPanel();
            }
        })
        .catch(err => {
            console.error("Booking failed", err);
            showToast("Failed to book clinic session. Connection error.");
        });
    }
}

// ==========================================================================
// 10. HELPER/UI UTILITIES (Theme, Translation, Modals, Toasts)
// ==========================================================================
function filterPatientList() {
    const val = document.getElementById("worker-search-input").value.toLowerCase();
    const filtered = patients.filter(p => 
        p.name.toLowerCase().includes(val) || 
        p.id.toLowerCase().includes(val) || 
        p.nationality.toLowerCase().includes(val) ||
        p.chronicConditions.some(c => c.toLowerCase().includes(val)) ||
        p.allergies.some(a => a.toLowerCase().includes(val))
    );
    renderPatientList(filtered);
}

function openModal(modal) {
    modal.classList.add("active");
}

function closeModal(modal) {
    modal.classList.remove("active");
}

function toggleTheme() {
    const root = document.documentElement;
    const currentTheme = root.getAttribute("data-theme");
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    root.setAttribute("data-theme", newTheme);
    
    // Toggle button icon
    const themeBtn = document.getElementById("theme-toggle-btn");
    themeBtn.innerHTML = newTheme === 'dark' ? '<i class="fa-solid fa-moon"></i>' : '<i class="fa-solid fa-sun"></i>';
}

function showToast(message, duration = 3000) {
    const toast = document.getElementById("toast-notification");
    document.getElementById("toast-message").textContent = message;
    
    toast.classList.add("active");
    
    if (window.toastTimeout) clearTimeout(window.toastTimeout);
    
    window.toastTimeout = setTimeout(() => {
        toast.classList.remove("active");
    }, duration);
}

function setLanguage(lang) {
    currentLanguage = lang;
    
    // Translate all static nodes with data-i18n attribute
    document.querySelectorAll("[data-i18n]").forEach(node => {
        const key = node.getAttribute("data-i18n");
        const val = getI18n(key);
        if (val) node.textContent = val;
    });

    // Translate inputs/placeholders
    const search = document.getElementById("worker-search-input");
    if (lang === 'es') search.placeholder = "Buscar por nombre, ID o condición...";
    else if (lang === 'bn') search.placeholder = "নাম, আইডি বা রোগ দিয়ে খুঁজুন...";
    else if (lang === 'ht') search.placeholder = "Chache pa non, ID, oswa kondisyon...";
    else search.placeholder = "Search by name, ID, or condition...";

    // Re-render chips to handle localized "Empty" text
    if (currentPatient) {
        renderChips("patient-allergies-list", currentPatient.allergies, "allergy", getI18n("empty_allergies"));
        renderChips("patient-conditions-list", currentPatient.chronicConditions, "condition", getI18n("empty_conditions"));
        
        // Update medications and vaccines empty labels
        if (currentPatient.medications.length === 0) {
            document.getElementById("patient-medications-table").innerHTML = `<div class="chip-empty">${getI18n("empty_meds")}</div>`;
        }
        if (currentPatient.immunizations.length === 0) {
            document.getElementById("patient-immunizations-list").innerHTML = `<div class="chip-empty">${getI18n("empty_vaccines")}</div>`;
        }
    }
}

function getI18n(key) {
    return (translations[currentLanguage] && translations[currentLanguage][key]) || (translations['en'][key]);
}

// ==========================================================================
// 11. TEXT INPUT CHAT & AI QUESTION ANSWERING SYSTEM
// ==========================================================================
function handleChatTextSubmit() {
    const chatTextInput = document.getElementById("chat-text-input");
    const val = chatTextInput.value.trim();
    if (!val) return;
    
    chatTextInput.value = "";
    
    const activeLang = document.getElementById("voice-lang-select").value;
    
    // Check if the input is a question (interrogative words or question mark)
    const isQuestion = checkIfQuestion(val, activeLang);
    
    if (isQuestion) {
        appendChatBubble("user", val);
        triggerAIAnswerQuestion(val, activeLang);
    } else {
        // Feed into standard input parser (translates/extracts)
        handleVoiceInputMock(val, activeLang);
    }
}

function checkIfQuestion(text, lang) {
    const qWords = ["?", "why", "how", "what", "who", "where", "can you", "explain", "help", "por que", "cómo", "qué", "quién", "dónde", "puede", "explicar", "ayuda", "কেন", "কি", "কোথায়", "কিভাবে", "সাহায্য", "èske", "pou kisa", "kijan", "kisa", "kote", "ede"];
    const lower = text.toLowerCase();
    return qWords.some(w => lower.includes(w));
}

function triggerAIAnswerQuestion(question, lang) {
    const lower = question.toLowerCase();
    let reply = "";
    
    if (lang === 'es') {
        if (lower.includes("por que") || lower.includes("necesita") || lower.includes("para que")) {
            reply = "Recopilo esta información para que las clínicas móviles y médicos en otros estados puedan ver su historial médico de forma continua. Toda su información viaja con usted mediante un código QR sin necesidad de internet.";
        } else if (lower.includes("diabet") || lower.includes("azúcar")) {
            reply = "La diabetes tipo 1 significa que su cuerpo no produce insulina. Indicar esto nos ayuda a saber qué dosis necesita para evitar crisis graves en el campo.";
        } else if (lower.includes("alergia") || lower.includes("penicil")) {
            reply = "Es importante registrar sus alergias (como la penicilina o látex) para prevenir que un médico le administre por error medicamentos que causen un choque anafiláctico.";
        } else if (lower.includes("tétano") || lower.includes("vacuna")) {
            reply = "El tétanos es una bacteria peligrosa en la tierra agrícola. Mantener al día su vacuna le protege contra infecciones causadas por raspones con herramientas.";
        } else {
            reply = "Esa es una buena pregunta. Le ayudo a registrar sus antecedentes médicos importantes para que cualquier doctor que le atienda pueda hacerlo de forma segura.";
        }
        
        // Restate current step
        const currentStepPrompt = aiDialogScript['es'][currentDialogueStep];
        if (currentStepPrompt) {
            reply += " Sigamos con la pregunta anterior: " + currentStepPrompt.prompt;
        }
    } else if (lang === 'bn') {
        if (lower.includes("কেন") || lower.includes("দরকার") || lower.includes("প্রয়োজন")) {
            reply = "আমরা এই তথ্য সংগ্রহ করি যাতে বিভিন্ন রাজ্যের মোবাইল ক্লিনিক ও চিকিৎসকরা আপনার পূর্বের ইতিহাস দেখে দ্রুত চিকিৎসা করতে পারেন। ইন্টারনেট ছাড়াই এই কিউআর (QR) কোডের মাধ্যমে তথ্যটি আপনার সাথে সাথে ভ্রমণ করে।";
        } else if (lower.includes("ডায়াবেটিস") || lower.includes("সুগার")) {
            reply = "টাইপ ১ ডায়াবেটিস হলে শরীর ইনসুলিন তৈরি করতে পারে না। চিকিৎসকদের এই তথ্য জানা অত্যন্ত জরুরি যাতে তারা সঠিক ডোজে ইনসুলিন দিতে পারেন।";
        } else if (lower.includes("অ্যালার্জি") || lower.includes("পেনিসিলিন")) {
            reply = "আপনার অ্যালার্জি (যেমন পেনিসিলিন) রেকর্ড করা থাকলে চিকিৎসকরা ভুল করে এমন কোনো ওষুধ দেবেন না যা আপনার জন্য মারাত্মক হতে পারে।";
        } else {
            reply = "এটি একটি গুরুত্বপূর্ণ প্রশ্ন। আপনার চিকিৎসাগত তথ্যগুলো কেয়ারপাসপোর্টে সুরক্ষিতভাবে যুক্ত করার জন্য আমি সাহায্য করছি যাতে যেকোনো ডাক্তার আপনাকে নিরাপদে চিকিৎসা করতে পারেন।";
        }
        
        const currentStepPrompt = aiDialogScript['bn'][currentDialogueStep];
        if (currentStepPrompt) {
            reply += " আসুন আগের প্রশ্নে ফিরে যাই: " + currentStepPrompt.prompt;
        }
    } else if (lang === 'ht') {
        if (lower.includes("pou kisa") || lower.includes("bezwen") || lower.includes("poukisa")) {
            reply = "Mwen kolekte enfòmasyon sa yo pou klinik mobil yo ak doktè nan lòt eta ka wè istwa medikal ou san pèdi tan. Tout done yo vwayaje avèk ou sou yon kòd QR menm si pa gen entènèt.";
        } else if (lower.includes("dyabèt") || lower.includes("sik")) {
            reply = "Dyabèt tip 1 vle di kò w pa pwodui ensilin. Sa ede nou konnen dòz ou bezwen pran pou w rete an sante pandan w ap travay.";
        } else if (lower.includes("alèji") || lower.includes("penisilin")) {
            reply = "Ekri alèji ou yo (tankou penisilin) trè enpòtan pou anpeche yon doktè ba ou medikaman ki ka fè kò w reyaji mal oswa ba ou gwo kriz.";
        } else {
            reply = "Sa se yon trè bon kesyon. Mwen la pou m ede w mete enfòmasyon medikal enpòtan yo sou paspò w la pou doktè yo ka trete w an sekirite.";
        }
        
        const currentStepPrompt = aiDialogScript['ht'][currentDialogueStep];
        if (currentStepPrompt) {
            reply += " Ann kontinye ak kesyon an: " + currentStepPrompt.prompt;
        }
    } else { // English default
        if (lower.includes("why") || lower.includes("need") || lower.includes("purpose")) {
            reply = "I collect this information so that mobile clinics and doctors in different states can view your history. It travels with you via this QR code card, even without internet access.";
        } else if (lower.includes("diabet") || lower.includes("sugar")) {
            reply = "Type 1 diabetes means your body doesn't produce insulin. Doctors need to know this to ensure you get the right insulin refills and therapy during shifts.";
        } else if (lower.includes("allergy") || lower.includes("penicil")) {
            reply = "Registering allergies (like Penicillin) prevents emergency physicians from administering medications that could trigger life-threatening allergic reactions.";
        } else if (lower.includes("tetanus") || lower.includes("vaccin") || lower.includes("covid")) {
            reply = "Tetanus bacteria are common in agricultural soil. Staying updated on your Tdap vaccine protects you against severe infections from field cuts.";
        } else {
            reply = "That is an important question. I am here to help document your essential history so that doctors in any state can provide safe, continuous medical care.";
        }
        
        const currentStepPrompt = aiDialogScript['en'][currentDialogueStep];
        if (currentStepPrompt) {
            reply += " Let's continue with the question: " + currentStepPrompt.prompt;
        }
    }
    
    // Simulate thinking delay and render AI assistant response
    const wave = document.getElementById("voice-wave-container");
    wave.classList.add("active");
    
    setTimeout(() => {
        wave.classList.remove("active");
        appendChatBubble("assistant", reply);
        playAssistantSpeech(reply, lang);
    }, 1000);
}

function toggleLoginRegister(view) {
    const loginForm = document.getElementById("login-form");
    const selfRegisterForm = document.getElementById("self-register-form");
    const selfRegSuccessView = document.getElementById("self-reg-success-view");
    const loginTabs = document.querySelector(".login-tabs");
    
    // Hide all first
    loginForm.style.display = "none";
    selfRegisterForm.style.display = "none";
    selfRegSuccessView.style.display = "none";
    
    if (view === 'login') {
        loginForm.style.display = "flex";
        loginTabs.style.display = "flex";
    } else if (view === 'register') {
        selfRegisterForm.style.display = "flex";
        loginTabs.style.display = "none";
    } else if (view === 'success') {
        selfRegSuccessView.style.display = "flex";
        loginTabs.style.display = "none";
    }
}

function handleSelfRegistration(e) {
    e.preventDefault();
    
    const name = document.getElementById("self-reg-name").value;
    const username = document.getElementById("self-reg-username").value.trim();
    const password = document.getElementById("self-reg-password").value.trim();
    const dob = document.getElementById("self-reg-dob").value;
    const nationality = document.getElementById("self-reg-nationality").value || "Not Specified";
    const language = document.getElementById("self-reg-lang").value;
    const doctor = document.getElementById("self-reg-doctor").value;
    const errorMsg = document.getElementById("self-reg-error-msg");
    
    errorMsg.style.display = "none";
    
    const selfRegData = {
        name: name,
        username: username || undefined,
        password: password || undefined,
        dateOfBirth: dob,
        nationality: nationality,
        languages: [language],
        bloodGroup: "Not Specified",
        allergies: [],
        chronicConditions: [],
        medications: [],
        immunizations: [],
        emergencyContact: { name: "", relation: "", phone: "" },
        timeline: [],
        assignedDoctor: doctor
    };
    
    if (isOffline) {
        // Generate mock credentials
        const patientId = `CP-${Math.floor(1000 + Math.random() * 9000)}-${Math.floor(10 + Math.random() * 90)}`;
        const finalUser = username || (name.split(" ")[0].toLowerCase() + Math.floor(100 + Math.random() * 900));
        const finalPass = password || ("cp" + Math.floor(1000 + Math.random() * 9000));
        
        const offlinePatient = {
            id: patientId,
            username: finalUser,
            password: finalPass,
            ...selfRegData
        };
        
        patients.push(offlinePatient);
        localStorage.setItem("care_passport_patients", JSON.stringify(patients));
        
        addToOfflineQueue({
            type: 'register_patient',
            data: offlinePatient
        });
        
        // Show success screen
        document.getElementById("success-display-id").textContent = patientId;
        document.getElementById("success-display-username").textContent = finalUser;
        document.getElementById("success-display-password").textContent = finalPass;
        
        document.getElementById("btn-success-goto-portal").onclick = () => {
            applyLoginSession('patient', patientId, finalUser);
            document.getElementById("self-register-form").reset();
            toggleLoginRegister('login');
        };
        
        toggleLoginRegister('success');
    } else {
        fetch('/api/patients', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(selfRegData)
        })
        .then(res => {
            if (res.status === 409) {
                throw new Error("Username already exists");
            }
            if (!res.ok) {
                throw new Error("Registration failed");
            }
            return res.json();
        })
        .then(savedPatient => {
            document.getElementById("success-display-id").textContent = savedPatient.id;
            document.getElementById("success-display-username").textContent = savedPatient.username;
            document.getElementById("success-display-password").textContent = savedPatient.password;
            
            document.getElementById("btn-success-goto-portal").onclick = () => {
                applyLoginSession('patient', savedPatient.id, savedPatient.username);
                document.getElementById("self-register-form").reset();
                toggleLoginRegister('login');
            };
            
            toggleLoginRegister('success');
        })
        .catch(err => {
            console.error("Self register failed", err);
            errorMsg.style.display = "block";
            errorMsg.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> ${err.message === "Username already exists" ? "Username already exists. Please choose another." : "Failed to register passport. Connection error."}`;
        });
    }
}

// ==========================================================================
// 12. ROLE-BASED LOGIN & SESSION HANDLING
// ==========================================================================
function switchLoginRole(role) {
    authRole = role;
    
    // Toggle active tab class
    document.getElementById("tab-doctor").classList.toggle("active", role === 'doctor');
    document.getElementById("tab-patient").classList.toggle("active", role === 'patient');
    
    // Modify helper placeholders
    const usernameInput = document.getElementById("login-username");
    const usernameLabel = document.getElementById("username-label");
    
    if (role === 'doctor') {
        usernameLabel.textContent = "Username";
        usernameInput.placeholder = "Enter doctor username...";
    } else {
        usernameLabel.textContent = "Care ID or Patient Username";
        usernameInput.placeholder = "e.g., carlos or CP-5821-01...";
    }
    
    // Hide error
    document.getElementById("login-error-msg").style.display = "none";
}

function handleLoginSubmit(e) {
    e.preventDefault();
    
    const usernameInput = document.getElementById("login-username");
    const passwordInput = document.getElementById("login-password");
    const errorMsg = document.getElementById("login-error-msg");
    
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();
    
    errorMsg.style.display = "none";
    
    if (isOffline) {
        // Mock offline verification using LocalStorage database copy
        const cached = localStorage.getItem("care_passport_patients");
        let authenticated = false;
        let pId = "";
        let doctorName = "";
        const usernameLower = username.toLowerCase().trim();
        
        if (authRole === 'doctor') {
            const offlineDoctors = [
                { username: "dr_jenkins", password: "securepass1", name: "Dr. Sarah Jenkins, MD" },
                { username: "dr_chen", password: "securepass2", name: "Dr. Robert Chen, DO" },
                { username: "dr_patel", password: "securepass3", name: "Dr. K. Patel, MD" }
            ];
            const doc = offlineDoctors.find(d => d.username === usernameLower && d.password === password);
            if (doc) {
                authenticated = true;
                doctorName = doc.name;
            }
        } else {
            // Check patients list in cache
            if (cached) {
                const cachedPatients = JSON.parse(cached);
                const pat = cachedPatients.find(p => {
                    const dbUser = (p.username || "").toLowerCase().trim();
                    const dbId = (p.id || "").toLowerCase().trim();
                    const isMatch = (dbUser === usernameLower) || (dbUser === "carlos" && usernameLower === "caarlos") || (dbId === usernameLower);
                    return isMatch && p.password === password;
                });
                if (pat) {
                    authenticated = true;
                    pId = pat.id;
                }
            }
        }
        
        if (authenticated) {
            applyLoginSession(authRole, pId, username, doctorName);
        } else {
            errorMsg.style.display = "block";
            errorMsg.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> Invalid credentials (Offline verification).';
        }
    } else {
        // Online login via API
        fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: username,
                password: password,
                role: authRole
            })
        })
        .then(res => {
            if (!res.ok) throw new Error("Unauthorized");
            return res.json();
        })
        .then(data => {
            applyLoginSession(data.role, data.patientId || "", username, data.doctorName || "");
        })
        .catch(err => {
            console.error("Login failed", err);
            errorMsg.style.display = "block";
            errorMsg.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> Invalid credentials. Please try again.';
        });
    }
}

function applyLoginSession(role, patientId, username, doctorName = "") {
    const sessionData = {
        role: role,
        patientId: patientId,
        username: username,
        doctorName: doctorName || "",
        timestamp: Date.now()
    };
    
    sessionStorage.setItem("care_passport_session", JSON.stringify(sessionData));
    
    // Set body role data attribute for CSS visibility styling
    document.body.setAttribute("data-role", role);
    
    // Setup UI containers
    document.getElementById("login-portal").classList.remove("active");
    document.getElementById("app-container").style.display = "flex";
    document.getElementById("btn-logout").style.display = "block";
    
    // Reset forms
    document.getElementById("login-form").reset();
    
    // Load appropriate records
    if (role === 'doctor') {
        // Show Welcome View
        document.getElementById("welcome-view").classList.add("active");
        document.getElementById("patient-detail-view").classList.remove("active");
        
        // Ensure doctor verification section is shown
        document.getElementById("doctor-verification-section").style.display = "block";
        
        loadPatients();
        loadPendingVerifications();
    } else {
        // Ensure doctor verification section is hidden for patient view
        document.getElementById("doctor-verification-section").style.display = "none";
        
        // Direct patient redirect
        loadPatients();
    }
}

function handleLogout() {
    sessionStorage.removeItem("care_passport_session");
    document.body.removeAttribute("data-role");
    
    // Show login page, hide app
    document.getElementById("login-portal").classList.add("active");
    document.getElementById("app-container").style.display = "none";
    document.getElementById("btn-logout").style.display = "none";
    
    // Hide doctor verification section
    document.getElementById("doctor-verification-section").style.display = "none";
    
    // Reset active patient
    currentPatient = null;
    
    // Reset inputs
    document.getElementById("login-form").reset();
    switchLoginRole('doctor');
}

function checkSession() {
    const session = getSession();
    if (session) {
        // Authenticated session found!
        applyLoginSession(session.role, session.patientId, session.username, session.doctorName || "");
    } else {
        // Default login state
        document.getElementById("login-portal").classList.add("active");
        document.getElementById("app-container").style.display = "none";
        document.getElementById("btn-logout").style.display = "none";
        switchLoginRole('doctor');
    }
}

// --------------------------------------------------------------------------
// Doctor Verification Dashboard & Patient Symptom Requests
// --------------------------------------------------------------------------
function submitVerificationRequest(langCode) {
    const requestData = {
        patientId: currentPatient.id,
        symptoms: selectedSymptom,
        aiSuggestion: suggestedMedication,
        selectedDoctor: selectedDoctor || 'Not Specified',
        date: new Date().toISOString().split('T')[0]
    };

    if (isOffline) {
        // Generate a mock verification ID
        const mockId = "V-" + Math.floor(1000 + Math.random() * 9000) + "-OFF";
        const newVerification = {
            id: mockId,
            patientName: currentPatient.name,
            status: "pending",
            ...requestData
        };
        
        // Add to local verifications
        let cachedVerifications = JSON.parse(localStorage.getItem("care_passport_verifications") || "[]");
        cachedVerifications.push(newVerification);
        localStorage.setItem("care_passport_verifications", JSON.stringify(cachedVerifications));

        // Add to offline sync queue
        addToOfflineQueue({
            type: 'create_verification',
            data: requestData
        });

        // Advance AI steps
        currentDialogueStep++;
        renderAIStep(langCode);
        loadPatientRefillRequests();
        showToast("Verification request queued offline!");
    } else {
        fetch('/api/verifications', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(requestData)
        })
        .then(res => {
            if (!res.ok) throw new Error("Failed to submit request");
            return res.json();
        })
        .then(newVerification => {
            // Update local verifications cache
            let cachedVerifications = JSON.parse(localStorage.getItem("care_passport_verifications") || "[]");
            cachedVerifications.push(newVerification);
            localStorage.setItem("care_passport_verifications", JSON.stringify(cachedVerifications));

            // Advance AI steps
            currentDialogueStep++;
            renderAIStep(langCode);
            loadPatientRefillRequests();
            showToast("Refill request submitted to doctor!");
        })
        .catch(err => {
            console.error("Failed to submit verification request online, fallback to offline", err);
            // Fallback to offline submission
            isOffline = true;
            toggleOfflineMode(true);
            submitVerificationRequest(langCode);
        });
    }
}

function loadPendingVerifications() {
    const session = getSession();
    if (isOffline) {
        const cached = localStorage.getItem("care_passport_verifications");
        let list = cached ? JSON.parse(cached) : [];
        if (session && session.role === 'doctor' && session.doctorName) {
            list = list.filter(v => v.selectedDoctor === session.doctorName);
        }
        renderVerificationsList(list);
    } else {
        fetch('/api/verifications')
            .then(res => res.json())
            .then(data => {
                localStorage.setItem("care_passport_verifications", JSON.stringify(data));
                let list = data;
                if (session && session.role === 'doctor' && session.doctorName) {
                    list = data.filter(v => v.selectedDoctor === session.doctorName);
                }
                renderVerificationsList(list);
            })
            .catch(err => {
                console.error("Failed to load verifications, fallback to cache", err);
                const cached = localStorage.getItem("care_passport_verifications");
                let list = cached ? JSON.parse(cached) : [];
                if (session && session.role === 'doctor' && session.doctorName) {
                    list = list.filter(v => v.selectedDoctor === session.doctorName);
                }
                renderVerificationsList(list);
            });
    }
}

function renderVerificationsList(list) {
    const container = document.getElementById("verifications-container");
    if (!container) return;
    container.innerHTML = "";
    
    // Count pending ones
    const pendingCount = list.filter(v => v.status === "pending").length;
    const countBadge = document.getElementById("verification-count-badge");
    if (countBadge) {
        countBadge.textContent = `${pendingCount} Pending`;
    }
    
    if (list.length === 0) {
        container.innerHTML = `<div class="chip-empty" style="grid-column: 1 / -1; text-align: center; padding: 20px;">No pending verification requests from patients.</div>`;
        return;
    }
    
    // Sort so pending ones are on top, then approved/rejected
    const sortedList = [...list].sort((a, b) => {
        if (a.status === 'pending' && b.status !== 'pending') return -1;
        if (a.status !== 'pending' && b.status === 'pending') return 1;
        return 0;
    });

    sortedList.forEach(v => {
        const card = document.createElement("div");
        card.className = "verification-card";
        
        let statusBadge = `<span class="badge-status ${v.status}">${v.status}</span>`;
        
        let actionButtons = "";
        if (v.status === "pending") {
            actionButtons = `
                <div class="verification-actions">
                    <button class="btn-approve" onclick="handleApproveVerification('${v.id}')">
                        <i class="fa-solid fa-check"></i> Approve & Log
                    </button>
                    <button class="btn-reject" onclick="handleRejectVerification('${v.id}')">
                        <i class="fa-solid fa-xmark"></i> Dismiss
                    </button>
                </div>
            `;
        }
        
        card.innerHTML = `
            <div style="display:flex; justify-content:space-between; align-items:center;">
                <h4 style="margin:0;"><i class="fa-solid fa-user text-primary"></i> ${v.patientName} (${v.patientId})</h4>
                ${statusBadge}
            </div>
            <div class="symptom-text">
                <strong>Symptoms:</strong> ${v.symptoms}
            </div>
            <div class="recommendation-box">
                <strong>AI Suggested:</strong> ${v.aiSuggestion}
            </div>
            <div class="doctor-tag">
                <i class="fa-solid fa-user-doctor"></i> Assigned to: ${v.selectedDoctor || 'Not Specified'}
            </div>
            ${actionButtons}
        `;
        
        container.appendChild(card);
    });
}

function handleApproveVerification(id) {
    if (isOffline) {
        // Handle approve offline
        let cachedVerifications = JSON.parse(localStorage.getItem("care_passport_verifications") || "[]");
        const target = cachedVerifications.find(v => v.id === id);
        if (target) {
            target.status = "approved";
            localStorage.setItem("care_passport_verifications", JSON.stringify(cachedVerifications));
            
            // Also update the local patient medications and timeline!
            let cachedPatients = JSON.parse(localStorage.getItem("care_passport_patients") || "[]");
            const patient = cachedPatients.find(p => p.id === target.patientId);
            if (patient) {
                const newTimelineEntry = {
                    date: target.date || new Date().toISOString().split('T')[0],
                    clinicName: "CarePassport Virtual Assistant (Refill Approved)",
                    location: "Online Verification",
                    reason: `Symptom Check & Refill Review: ${target.symptoms}`,
                    diagnosis: `Review of AI suggested: ${target.aiSuggestion}`,
                    treatment: `Approved AI action: ${target.aiSuggestion}`,
                    doctor: target.selectedDoctor,
                    notes: `Doctor verified and signed off on this AI-suggested care plan.`
                };
                patient.timeline.unshift(newTimelineEntry);
                
                const lowerSugg = target.aiSuggestion.toLowerCase();
                let parsedMed = null;
                if (lowerSugg.includes("albuterol")) {
                    parsedMed = { name: "Albuterol HFA", dosage: "2 puffs as needed for wheezing", purpose: "Rescue Inhaler" };
                } else if (lowerSugg.includes("advair")) {
                    parsedMed = { name: "Fluticasone/Salmeterol (Advair)", dosage: "1 puff twice daily", purpose: "Asthma Controller" };
                } else if (lowerSugg.includes("insulin")) {
                    parsedMed = { name: "Insulin", dosage: "As prescribed", purpose: "Diabetes Control" };
                } else if (lowerSugg.includes("amlodipine")) {
                    parsedMed = { name: "Amlodipine Besylate", dosage: "5mg once daily", purpose: "Blood Pressure Control" };
                }
                
                if (parsedMed) {
                    if (!patient.medications) patient.medications = [];
                    const exists = patient.medications.some(m => m.name.toLowerCase() === parsedMed.name.toLowerCase());
                    if (!exists) patient.medications.push(parsedMed);
                }
                localStorage.setItem("care_passport_patients", JSON.stringify(cachedPatients));
            }
            
            loadPendingVerifications();
            loadPatients();
            showToast("Approved refill request offline!");
        }

        addToOfflineQueue({
            type: 'approve_verification',
            verificationId: id
        });
    } else {
        fetch(`/api/verifications/${id}/approve`, {
            method: 'POST'
        })
        .then(res => {
            if (!res.ok) throw new Error("Failed to approve verification");
            return res.json();
        })
        .then(updated => {
            // Update local verifications cache
            let cachedVerifications = JSON.parse(localStorage.getItem("care_passport_verifications") || "[]");
            const idx = cachedVerifications.findIndex(v => v.id === id);
            if (idx !== -1) {
                cachedVerifications[idx] = updated;
                localStorage.setItem("care_passport_verifications", JSON.stringify(cachedVerifications));
            }
            loadPendingVerifications();
            loadPatients();
            showToast("Refill request approved and logged to patient history!");
        })
        .catch(err => {
            console.error("Failed to approve verification online, trying offline fallback", err);
            isOffline = true;
            toggleOfflineMode(true);
            handleApproveVerification(id);
        });
    }
}

function handleRejectVerification(id) {
    if (isOffline) {
        let cachedVerifications = JSON.parse(localStorage.getItem("care_passport_verifications") || "[]");
        const target = cachedVerifications.find(v => v.id === id);
        if (target) {
            target.status = "rejected";
            localStorage.setItem("care_passport_verifications", JSON.stringify(cachedVerifications));
            loadPendingVerifications();
            showToast("Refill request rejected offline!");
        }

        addToOfflineQueue({
            type: 'reject_verification',
            verificationId: id
        });
    } else {
        fetch(`/api/verifications/${id}/reject`, {
            method: 'POST'
        })
        .then(res => {
            if (!res.ok) throw new Error("Failed to reject verification");
            return res.json();
        })
        .then(updated => {
            let cachedVerifications = JSON.parse(localStorage.getItem("care_passport_verifications") || "[]");
            const idx = cachedVerifications.findIndex(v => v.id === id);
            if (idx !== -1) {
                cachedVerifications[idx] = updated;
                localStorage.setItem("care_passport_verifications", JSON.stringify(cachedVerifications));
            }
            loadPendingVerifications();
            showToast("Refill request rejected/dismissed.");
        })
        .catch(err => {
            console.error("Failed to reject verification online, trying offline fallback", err);
            isOffline = true;
            toggleOfflineMode(true);
            handleRejectVerification(id);
        });
    }
}

function loadPatientRefillRequests() {
    if (!currentPatient) return;
    
    if (isOffline) {
        const cached = localStorage.getItem("care_passport_verifications");
        const list = cached ? JSON.parse(cached) : [];
        const filtered = list.filter(v => v.patientId === currentPatient.id);
        renderPatientRefills(filtered);
    } else {
        fetch('/api/verifications')
            .then(res => res.json())
            .then(data => {
                localStorage.setItem("care_passport_verifications", JSON.stringify(data));
                const filtered = data.filter(v => v.patientId === currentPatient.id);
                renderPatientRefills(filtered);
            })
            .catch(err => {
                console.error("Failed to load refill requests, fallback to cache", err);
                const cached = localStorage.getItem("care_passport_verifications");
                const list = cached ? JSON.parse(cached) : [];
                const filtered = list.filter(v => v.patientId === currentPatient.id);
                renderPatientRefills(filtered);
            });
    }
}

function renderPatientRefills(list) {
    const listContainer = document.getElementById("patient-refill-requests-list");
    if (!listContainer) return;
    
    listContainer.innerHTML = "";
    if (list.length === 0) {
        listContainer.innerHTML = '<li class="empty-placeholder">No active refill requests</li>';
    } else {
        list.forEach(v => {
            let statusIcon = '';
            let statusColor = '';
            if (v.status === 'pending') {
                statusIcon = '<i class="fa-solid fa-hourglass-half text-amber"></i>';
                statusColor = 'var(--amber)';
            } else if (v.status === 'approved') {
                statusIcon = '<i class="fa-solid fa-circle-check text-emerald"></i>';
                statusColor = 'var(--emerald)';
            } else {
                statusIcon = '<i class="fa-solid fa-circle-xmark text-rose"></i>';
                statusColor = 'var(--rose)';
            }
            
            listContainer.innerHTML += `
                <li style="border-bottom:1px solid var(--border-color); padding-bottom:8px; margin-bottom:8px; display:flex; flex-direction:column; gap:4px; text-align:left;">
                    <span style="font-weight:700;">${statusIcon} ${v.aiSuggestion}</span>
                    <span style="font-size:12px; color:var(--text-secondary);">Symptoms: ${v.symptoms}</span>
                    <span style="font-size:12px; color:var(--text-secondary);">Doctor: ${v.selectedDoctor}</span>
                    <span style="font-size:11px; font-weight:600; color:${statusColor}; text-transform:uppercase; margin-top:2px;">
                        Status: ${v.status}
                    </span>
                </li>`;
        });
    }
}

window.handleApproveVerification = handleApproveVerification;
window.handleRejectVerification = handleRejectVerification;
