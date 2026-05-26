// header.js
function createGlobalHeader() {
    if (document.getElementById('iosAppHeader')) return;

    const headerHTML = `
    <style>
        #iosAppHeader {
            position: fixed;
            top: 0; left: 0; right: 0;
            height: 60px;
            background: rgba(255, 255, 255, 0.85);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border-bottom: 0.5px solid #dbdbdb;
            z-index: 400000;
            display: flex;
            align-items: center;
            justify-content: center;
            direction: rtl;
        }
        .header-title-text {
            font-size: 17px;
            font-weight: 700;
            color: #000000;
            letter-spacing: -0.5px;
        }
    </style>
    <div id="iosAppHeader">
        <span class="header-title-text">📸 أخبار العائلة</span>
    </div>
    `;
    document.body.insertAdjacentHTML('afterbegin', headerHTML);
}

// التشغيل التلقائي والمباشر
createGlobalHeader();
