// navbar.js
function createGlobalNavbar() {
    if (document.getElementById('iosAppNavbar')) return;

    const navbarHTML = `
    <style>
        #iosAppNavbar {
            position: fixed;
            bottom: 0; left: 0; right: 0;
            height: 65px;
            background: rgba(255, 255, 255, 0.92);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border-top: 0.5px solid #dbdbdb;
            z-index: 400000;
            display: flex;
            justify-content: space-around;
            align-items: center;
            direction: rtl;
            padding-bottom: env(safe-area-inset-bottom); /* لدعم هواتف الآيفون الحديثة */
        }
        .nav-item-btn {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-decoration: none;
            color: #8e8e93;
            font-size: 10px;
            font-weight: 600;
            background: none;
            border: none;
            cursor: pointer;
        }
        .nav-item-btn.active-nav {
            color: #007AFF;
        }
        .nav-icon-style {
            font-size: 22px;
            margin-bottom: 2px;
        }
    </style>
    <div id="iosAppNavbar">
        <a href="news.html" class="nav-item-btn" id="navNews">
            <span class="nav-icon-style">📰</span>
            <span>الرئيسية</span>
        </a>
        <a href="login.html" class="nav-item-btn" id="navAdmin">
            <span class="nav-icon-style">⚙️</span>
            <span>الإدارة</span>
        </a>
    </div>
    `;
    document.body.insertAdjacentHTML('beforeend', navbarHTML);

    // تلوين الزر النشط تلقائياً بحسب اسم الصفحة الحالية
    const currentPath = window.location.pathname;
    if (currentPath.includes('news.html') || currentPath.includes('add_news.html')) {
        document.getElementById('navNews').classList.add('active-nav');
    } else if (currentPath.includes('login.html')) {
        document.getElementById('navAdmin').classList.add('active-nav');
    }
}

createGlobalNavbar();
