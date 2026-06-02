// الاستماع لحدث جلب البيانات وتحديثات الخلفية لمتصفح الآيفون Safari
self.addEventListener('install', function(event) {
    self.skipWaiting();
});

self.addEventListener('activate', function(event) {
    event.waitUntil(clients.claim());
});

// استقبال حدث التنبيه وعرضه بشكل مستقل على شاشة القفل
self.addEventListener('push', function(event) {
    let title = "منصة الأخبار العائلية";
    let body = "هناك خبر ومناسبة عائلية جديدة تم نشرها الآن!";
    
    if (event.data) {
        try {
            const data = event.data.json();
            title = data.title || title;
            body = data.body || body;
        } catch (e) {
            body = event.data.text() || body;
        }
    }

    const options = {
        body: body,
        icon: 'logo.png',
        badge: 'logo.png',
        data: { url: '/' },
        vibrate: [200, 100, 200]
    };

    event.waitUntil(
        self.registration.showNotification(title, options)
    );
});

// فتح التطبيق فور نقر المستخدم على الإشعار في شاشة قفل الجوال
self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    event.waitUntil(
        clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function(clientList) {
            if (clientList.length > 0) {
                return clientList[0].focus();
            }
            return clients.openWindow(event.notification.data.url);
        })
    );
});
