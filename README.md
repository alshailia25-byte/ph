# فيزياء، من الصفر — تطبيق جوال

مشروع جاهز يحوّل تطبيق الويب إلى تطبيق جوال حقيقي (أندرويد + iOS) باستخدام Capacitor.
أنا (Claude) ما بقدر أشغّل npm أو Xcode أو Android Studio من عندي، فالخطوات التالية لازم تنفّذها على جهازك.

## المتطلبات على جهازك
- Node.js (نسخة 18 أو أحدث) — نزّله من nodejs.org
- لأندرويد: Android Studio
- لـ iOS: جهاز Mac + Xcode (لازم Mac، ما فيه بديل على ويندوز/لينكس)

## الخطوات

### 1) تثبيت الحزم
افتح Terminal داخل مجلد المشروع ونفّذ:
```
npm install
```

### 2) بناء نسخة الويب
```
npm run build
```
هاد بينشئ مجلد `dist` وهو اللي Capacitor بيغلّفه داخل التطبيق.

### 3) إضافة منصّتي أندرويد و iOS
```
npx cap add android
npx cap add ios
```

### 4) مزامنة الكود مع المشروعين الأصليين
كل مرة تعدّل بالكود وتعمل build من جديد، لازم تعمل:
```
npm run build
npx cap sync
```

### 5) فتح المشروع وتشغيله

**أندرويد:**
```
npx cap open android
```
هيفتح Android Studio — اضغط Run ▶ على محاكي أو جهاز حقيقي متوصل بالـ USB.

**iOS (يحتاج Mac):**
```
npx cap open ios
```
هيفتح Xcode — اختر جهازك أو محاكي واضغط Run ▶.
أول مرة لازم تسجّل حساب Apple Developer مجاني (للتجربة على جهازك) أو مدفوع (39$/سنة تقريبًا) للنشر على App Store.

### 6) النشر على المتاجر
- **Google Play**: من Android Studio، Build → Generate Signed Bundle، بعدين ترفعه على [Google Play Console](https://play.google.com/console) (رسوم تسجيل مرة وحدة ~25$).
- **App Store**: من Xcode، Product → Archive، بعدين ترفعه عبر App Store Connect (يحتاج اشتراك Apple Developer السنوي).

## ملاحظات
- التقدّم بيتحفظ محليًا على الجهاز عبر `localStorage`، مافي حاجة لسيرفر أو قاعدة بيانات.
- لو حبيت تجرب التطبيق بسرعة كموقع ويب عادي قبل التغليف: `npm run dev` وافتح الرابط اللي بيطلعلك.
- الأيقونة الافتراضية لسا مش موجودة — تقدر تضيف أيقونتك عبر أداة [Capacitor Assets](https://capacitorjs.com/docs/guides/splash-screens-and-icons).
