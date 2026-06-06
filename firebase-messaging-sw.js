// firebase-messaging-sw.js - مستقبل الإشعارات الخلفي السحابي
importScripts("https://www.gstatic.com/firebasejs/12.14.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/12.14.0/firebase-messaging-compat.js");

const firebaseConfig = {
    apiKey: "AIzaSyATSMFKx4jUo_Duw0FtD5HO_M69O7A55o0",
    projectId: "fnews-7525e",
    appId: "1:1023530532546:web:cbc1be1753237179bd455b"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// محرك قنص التنبيه وعرضه على شاشة القفل فوراً حتى لو كان التطبيق مغلقاً كلياً
messaging.onBackgroundMessage((payload) => {
    console.log("🔔 تم استقبال إشارة بث خلفية حية:", payload);
    
    const notificationTitle = payload.data.title || payload.notification.title || "🏡 منصة الأخبار العائلية";
    const notificationOptions = {
        body: payload.data.body || payload.notification.body || "هناك مستجدات عائلية جديدة، افتح التطبيق لمطالعتها.",
        icon: "logo.png",
        badge: "logo.png",
        vibrate: [200, 100, 200],
        data: {
            click_action: payload.data.link || "https://martadha3li.github.io/3aellha/"
        }
    };

    return self.registration.showNotification(notificationTitle, notificationOptions);
});

// التعامل مع نقرة المستخدم على الإشعار لفتح التطبيق فوراُ
self.addEventListener('notificationclick', (event) => {
    event.notification.close();
    const targetUrl = event.notification.data.click_action || "https://martadha3li.github.io/3aellha/";
    
    event.waitUntil(
        clients.matchAll({ type: 'window', includeUncontrolled: true }).then((windowClients) => {
            for (let i = 0; i < windowClients.length; i++) {
                const client = windowClients[i];
                if (client.url === targetUrl && 'focus' in client) {
                    return client.focus();
                }
            }
            if (clients.openWindow) {
                return clients.openWindow(targetUrl);
            }
        })
    );
});
