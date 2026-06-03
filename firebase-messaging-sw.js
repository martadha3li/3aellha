// استيراد حزم المراسلة المستقلة في ملقم الويب
importScripts('https://www.gstatic.com/firebasejs/12.14.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/12.14.0/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyATSMFKx4jUo_Duw0FtD5HO_M69O7A55o0",
    projectId: "fnews-7525e",
    appId: "1:1023530532546:web:cbc1be1753237179bd455b"
});

const messaging = firebase.messaging();

// 🔔 الاستماع المباشر في خلفية النظام لعرض الإشعارات حتى لو كانت الشاشة مغلقة تماماً
messaging.onBackgroundMessage(function(payload) {
    console.log('وصل إشعار في الخلفية:', payload);
    const title = payload.notification.title || "🏡 منصة الأخبار العائلية";
    const options = {
        body: payload.notification.body || "هناك تحديث عائلي جديد، اضغط للمشاهدة.",
        icon: 'logo.png',
        badge: 'logo.png',
        data: { url: '.' }
    };
    return self.registration.showNotification(title, options);
});

self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    event.waitUntil(
        clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function(clientList) {
            if (clientList.length > 0) return clientList[0].focus();
            return clients.openWindow(event.notification.data.url);
        })
    );
});
