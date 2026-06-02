self.addEventListener('push', function(event) {
    const data = event.data ? event.data.json() : {};
    const title = data.title || "خبر عائلي جديد";
    const options = {
        body: data.body || "اضغط لمشاهدة الخبر العائلي الجديد الآن.",
        icon: '🏡',
        badge: '🏡'
    };
    event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    event.waitUntil(
        clients.openWindow('/')
    );
});
