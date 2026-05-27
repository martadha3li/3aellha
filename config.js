// config.js - Ver: 206-9
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// [الربط المركزي المعتمد] - ضع بيانات مشروع فايربيس الخاص بك هنا بدقة
const firebaseConfig = {
    apiKey: "ضع_هنا_API_KEY",
    authDomain: "ضع_هنا_AUTH_DOMAIN",
    projectId: "ضع_هنا_PROJECT_ID",
    storageBucket: "ضع_هنا_STORAGE_BUCKET",
    messagingSenderId: "ضع_هنا_MESSAGING_SENDER_ID",
    appId: "ضع_هنا_APP_ID"
};

// تهيئة الخدمة والاتصال بقاعدة البيانات السحابية بشكل صريح
const app = initializeApp(firebaseConfig);

// تصدير متغير db ليكون متاحاً للاستدعاء الفوري في بقية ملفات المنصة
export const db = getFirestore(app);
