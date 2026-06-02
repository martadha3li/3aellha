self.addEventListener('install', function(event) {
    self.skipWaiting();
});

self.addEventListener('activate', function(event) {
    event.waitUntil(clients.claim());
});

// الاستماع لحدث التنبيه المباشر الآتي من لوحة تحكم الأدمن
self.addEventListener('message', function(event) {
    if (event.data && event.data.type === 'NEW_NEWS') {
        const title = event.data.title || "🏡 خبر عائلي جديد!";
        const body = event.data.body || "اضغط لمشاهدة التفاصيل والمناسبة العائلية الجديدة.";
        
        const options = {
            body: body,
            icon: 'logo.png',
            badge: 'logo.png',
            vibrate: [200, 100, 200],
            data: { url: '.' }
        };

        event.waitUntil(
            self.registration.showNotification(title, options)
        );
    }
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
