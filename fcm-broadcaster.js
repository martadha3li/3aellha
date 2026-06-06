// fcm-broadcaster.js - محرك البث السحابي المستقل للأجهزة المشفرة
import { getDocs, collection } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-firestore.js";

export async function broadcastNotification(db, category, title, text) {
    try {
        // 1. جلب رموز الأجهزة النشطة للعائلة من Firestore
        const tokenSnap = await getDocs(collection(db, "fcm_tokens"));
        if (tokenSnap.empty) {
            console.warn("⚠️ لم يتم العثور على أي أجهزة مسجلة في كوليكشن fcm_tokens.");
            return;
        }
        
        let tokensList = [];
        tokenSnap.forEach(doc => { 
            if(doc.data().token) tokensList.push(doc.data().token); 
        });

        // 2. صياغة التنبيه الموحد الموجه لكافة الأنظمة
        const payload = {
            title: `📁 خبر جديد في: ${category}`,
            body: title || text || "قم بفتح التطبيق لمطالعة المستجدات العائلية الفورية.",
            icon: "https://martadha3li.github.io/3aellha/logo.png",
            link: "https://martadha3li.github.io/3aellha/",
            tokens: tokensList
        };

        // 3. التمرير السريع عبر بوابة البث المستقلة لتخطي قيود المزامنة الاستاتيكية
        const response = await fetch("https://fcm-pwa-gateway.vercel.app/api/broadcast", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        });

        if (response.ok) {
            console.log(`🔔 نجاح: تم ترحيل البث بنجاح إلى ${tokensList.length} جهاز عائلي.`);
        } else {
            console.error("❌ استجابة البوابة الوسيطة غير مستقرة.");
        }
    } catch (error) {
        console.error("🚨 فشل محرك البث المستقل في إيصال التنبيه:", error);
    }
}
