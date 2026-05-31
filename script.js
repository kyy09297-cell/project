// رسالة تنبيه عند الدخول
window.onload = function () {
    alert("مرحبًا بكم في موقع تمر القصيم 🌴");
    greeting();
    
    // إضافة رسالة تفاعلية ذكية عند زيارة صفحة فريق العمل
    if (window.location.pathname.includes("about.html")) {
        console.log("مرحباً بكم في صفحة من نحن - فريق عمل متجر تمور خلاص القصيم!");
    }
};

// رسالة ترحيبية حسب الوقت
function greeting() {
    let hour = new Date().getHours();
    let message = document.getElementById("welcomeMessage");

    if (message) {
        if (hour < 12) {
            message.innerHTML = "☀️ صباح الخير، أهلاً بكم في موقع تمر القصيم";
        } else {
            message.innerHTML = "🌙 مساء الخير، أهلاً بكم في موقع تمر القصيم";
        }
    }
}

// زر عرض أسماء المصممات
function showDesigners() {
    alert(
        "مصممات الموقع:\n" +
        "وجن القحطاني\n" +
        "ليان السلمي\n" +
        "حلا الشريف\n" +
        "أسيل الحربي\n" +
        "مريم السهلي\n" +
        "كنزي البلوي\n\n" +
        "بإشراف المعلمة: ندى محمدعدنان خياط"
    );
}

// تفاعل بسيط عن فوائد التمر
function showBenefits() {
    let benefitsElement = document.getElementById("benefits");
    if (benefitsElement) {
        benefitsElement.innerHTML = "🌴 تمر القصيم غني بالألياف، يمنح الطاقة، ويحتوي على فيتامينات ومعادن مفيدة للجسم.";
    }
}
