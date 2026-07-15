import React, { useState, useEffect, useRef, useMemo } from "react";

/* ============================= المحتوى التعليمي ============================= */

const CURRICULUM = [
  {
    id: "stage-0",
    title: "الأساسيات",
    subtitle: "لغة الفيزياء وأدواتها",
    color: "#B8622B",
    lessons: [
      {
        id: "l-0-1",
        title: "ما هي الفيزياء؟",
        summary: "الكميات، الوحدات، والقياس",
        content: [
          "الفيزياء هي محاولة الإنسان لفهم قواعد اللعبة التي يعمل بها الكون: كيف تتحرك الأشياء، وكيف تتفاعل، ولماذا تسلك السلوك الذي نراه. كل ظاهرة نلاحظها — من سقوط تفاحة إلى دوران المجرات — تخضع لعدد محدود نسبيًا من القوانين.",
          "كل كمية فيزيائية تُقاس بوحدة. النظام الدولي (SI) يعتمد على سبع وحدات أساسية أهمها: المتر (m) للطول، الكيلوغرام (kg) للكتلة، الثانية (s) للزمن، والأمبير (A) للتيار الكهربائي. أي كمية أخرى — كالسرعة أو القوة أو الطاقة — هي تركيب من هذه الوحدات الأساسية.",
          "عند التعامل مع أرقام كبيرة جدًا أو صغيرة جدًا نستخدم الصيغة العلمية، مثل كتلة الإلكترون التي تُكتب 9.11×10⁻³¹ kg بدلاً من كتابة عشرين خانة عشرية. هذا ليس تجميلًا، بل ضرورة عملية تجعل الحسابات ممكنة.",
        ],
        formulas: ["1 km = 10³ m", "1 نانوثانية = 10⁻⁹ s"],
        quiz: {
          q: "أي مما يلي وحدة أساسية في النظام الدولي؟",
          options: ["نيوتن", "جول", "كيلوغرام", "واط"],
          correct: 2,
          explain: "الكيلوغرام وحدة أساسية، بينما النيوتن والجول والواط وحدات مشتقة من الوحدات الأساسية.",
        },
      },
      {
        id: "l-0-2",
        title: "الكميات القياسية والمتجهة",
        summary: "الفرق بين المقدار والاتجاه",
        content: [
          "الكمية القياسية (Scalar) تُوصف بمقدارها فقط، مثل الكتلة أو الزمن أو درجة الحرارة. أما الكمية المتجهة (Vector) فتحتاج مقدارًا واتجاهًا معًا لوصفها بالكامل، مثل السرعة أو القوة أو الإزاحة.",
          "الفرق بين المسافة والإزاحة مثال جيد: إذا مشيت 5 أمتار للأمام ثم 5 أمتار للخلف، فالمسافة الكلية 10 أمتار، لكن الإزاحة صفر لأنك عدت لنقطة البداية. المسافة كمية قياسية، والإزاحة كمية متجهة.",
          "تُجمع المتجهات هندسيًا لا حسابيًا؛ متجهان بنفس المقدار لكن باتجاهين متعاكسين يُلغي أحدهما الآخر عند الجمع. هذا المبدأ هو أساس كل تحليل للقوى والحركة لاحقًا.",
        ],
        formulas: ["الإزاحة = موضع نهائي − موضع ابتدائي"],
        quiz: {
          q: "سيارة قطعت 3 كم شمالاً ثم 3 كم جنوباً. ما مقدار إزاحتها؟",
          options: ["6 كم", "صفر", "3 كم", "1.5 كم"],
          correct: 1,
          explain: "عادت السيارة لنقطة البداية، فالإزاحة (كمتجه) تساوي صفرًا رغم أن المسافة المقطوعة 6 كم.",
        },
      },
    ],
  },
  {
    id: "stage-1",
    title: "الحركة",
    subtitle: "الحركيات (Kinematics)",
    color: "#2E6E62",
    lessons: [
      {
        id: "l-1-1",
        title: "الحركة في خط مستقيم",
        summary: "الموضع، السرعة، والتسارع",
        content: [
          "الموضع يحدد أين يقع الجسم، والسرعة تصف معدل تغيّر الموضع، والتسارع يصف معدل تغيّر السرعة. الثلاثة مترابطة: التسارع هو مشتقة السرعة، والسرعة هي مشتقة الموضع بالنسبة للزمن.",
          "عندما يكون التسارع ثابتًا (كما في السقوط الحر تقريبًا)، يمكن استخدام معادلات الحركة الثلاث لربط الموضع والسرعة والزمن دون الحاجة للتفاضل والتكامل.",
          "إشارة التسارع لا تعني بالضرورة 'تباطؤ' أو 'تسارع' بالمعنى اليومي؛ تسارع سالب يعني فقط أنه في الاتجاه المعاكس للسرعة الموجبة المفترضة، وقد يزيد السرعة أو ينقصها حسب اتجاه الحركة.",
        ],
        formulas: ["v = v₀ + at", "x = x₀ + v₀t + ½at²", "v² = v₀² + 2a(x − x₀)"],
        quiz: {
          q: "سيارة تبدأ من السكون وتتسارع بمعدل 4 m/s² لمدة 3 ثوانٍ. ما سرعتها النهائية؟",
          options: ["7 m/s", "12 m/s", "4 m/s", "24 m/s"],
          correct: 1,
          explain: "v = v₀ + at = 0 + (4×3) = 12 m/s.",
        },
      },
      {
        id: "l-1-2",
        title: "الحركة في بعدين: المقذوفات",
        summary: "استقلالية الحركة الأفقية والرأسية",
        content: [
          "أي جسم يُقذف في الفضاء (كرة، مقذوف، قفزة) يتحرك في مسار قطع مكافئ نتيجة الجاذبية. المفتاح لفهم هذه الحركة هو أن المكوّن الأفقي والمكوّن الرأسي للحركة مستقلان تمامًا عن بعضهما.",
          "أفقيًا: لا توجد قوة (نهمل مقاومة الهواء)، فالسرعة الأفقية تبقى ثابتة طوال الرحلة. رأسيًا: الجاذبية تسحب الجسم للأسفل بتسارع ثابت g ≈ 9.8 m/s²، تمامًا كما لو كان الجسم يسقط سقوطًا حرًا.",
          "لهذا يمكن معالجة كل محور بمعادلات الحركة المستقيمة بشكل منفصل، ثم دمج النتيجتين لإيجاد المسار الكلي، المدى، والزمن الكلي في الهواء.",
        ],
        formulas: ["vₓ = v₀ₓ (ثابتة)", "v_y = v₀y − gt", "المدى = v₀² sin(2θ) / g"],
        quiz: {
          q: "لماذا يبقى المكوّن الأفقي لسرعة المقذوف ثابتًا (بإهمال مقاومة الهواء)؟",
          options: [
            "لأن الجاذبية تؤثر بالتساوي على المحورين",
            "لعدم وجود أي قوة أفقية مؤثرة",
            "لأن السرعة الرأسية تلغي الأفقية",
            "لأن الزمن ثابت",
          ],
          correct: 1,
          explain: "الجاذبية تؤثر رأسيًا فقط، فلا توجد قوة تغيّر السرعة الأفقية، وبذلك تبقى ثابتة طوال الحركة.",
        },
      },
      {
        id: "l-1-3",
        title: "قوانين نيوتن الثلاثة",
        summary: "أساس الميكانيكا الكلاسيكية",
        content: [
          "القانون الأول (القصور الذاتي): الجسم يبقى ساكنًا أو متحركًا بسرعة ثابتة ما لم تؤثر عليه قوة محصلة غير صفرية. هذا يعني أن الحركة المنتظمة لا تحتاج 'سببًا مستمرًا' — السكون والحركة المنتظمة حالتان متكافئتان فيزيائيًا.",
          "القانون الثاني: القوة المحصلة تساوي حاصل ضرب الكتلة في التسارع (F = ma). هذا القانون كمّي: كلما زادت الكتلة قلّ التسارع الناتج عن نفس القوة، وهذا هو جوهر مفهوم 'القصور الذاتي' ككمية عددية.",
          "القانون الثالث: لكل فعل ردّ فعل مساوٍ له في المقدار ومعاكس في الاتجاه. القوتان تؤثران على جسمين مختلفين، ولهذا لا تلغي إحداهما الأخرى أبدًا، رغم شيوع هذا الخطأ الشائع.",
        ],
        formulas: ["ΣF = ma", "F₁₂ = −F₂₁"],
        quiz: {
          q: "صندوق كتلته 10 kg تؤثر عليه قوة محصلة مقدارها 20 N. ما تسارعه؟",
          options: ["200 m/s²", "0.5 m/s²", "2 m/s²", "10 m/s²"],
          correct: 2,
          explain: "a = F/m = 20/10 = 2 m/s².",
        },
      },
      {
        id: "l-1-4",
        title: "الشغل والطاقة",
        summary: "مبدأ حفظ الطاقة",
        content: [
          "الشغل يُنجَز عندما تتحرك قوة جسمًا مسافة ما في اتجاه تأثيرها. الطاقة هي القدرة على إنجاز شغل، وتُقاس بنفس وحدة الشغل: الجول.",
          "الطاقة الحركية ترتبط بحركة الجسم، والطاقة الكامنة ترتبط بموضعه في مجال قوة (كالجاذبية) أو بحالة تشوّهه (كنابض مضغوط). في غياب قوى الاحتكاك، يتحول أحد الشكلين إلى الآخر دون أن يضيع أي مقدار منهما.",
          "قانون حفظ الطاقة من أعمق القوانين في الفيزياء: الطاقة لا تُستحدث ولا تُفنى، بل تتحول من صورة إلى أخرى. حتى الاحتكاك لا 'يُفني' الطاقة، بل يحوّلها إلى حرارة تتبدد.",
        ],
        formulas: ["W = F·d·cosθ", "KE = ½mv²", "PE = mgh"],
        quiz: {
          q: "كرة كتلتها 2 kg تسقط من ارتفاع 5 m. ما طاقتها الكامنة عند القمة تقريبًا؟ (g=10)",
          options: ["10 J", "100 J", "50 J", "20 J"],
          correct: 2,
          explain: "PE = mgh = 2×10×5 = 100 J — تأكد من الحساب: 2×10=20، 20×5=100 J.",
        },
      },
      {
        id: "l-1-5",
        title: "الزخم والتصادمات",
        summary: "الكمية التي لا تتغير أبدًا في نظام معزول",
        content: [
          "الزخم هو حاصل ضرب الكتلة في السرعة، ويُعبّر عن 'كمية الحركة' التي يحملها الجسم. في أي نظام معزول (لا تؤثر عليه قوى خارجية)، يبقى الزخم الكلي ثابتًا مهما حدث من تصادمات داخلية.",
          "في التصادم المرن، تُحفظ الطاقة الحركية أيضًا إلى جانب الزخم (كتصادم كرات بلياردو تقريبًا). أما في التصادم غير المرن، فيُحفظ الزخم فقط بينما يتحول جزء من الطاقة الحركية إلى حرارة أو صوت أو تشوّه.",
          "هذا المبدأ يفسر لماذا يرتد مسدس عند إطلاقه، ولماذا يشعر لاعب الهوكي بالدفع عند اصطدامه بلاعب آخر: الزخم المفقود من جسم يظهر بالضبط كزخم مكتسب لجسم آخر.",
        ],
        formulas: ["p = mv", "Σp قبل = Σp بعد (نظام معزول)"],
        quiz: {
          q: "ماذا يبقى ثابتًا دائمًا في كل أنواع التصادمات ضمن نظام معزول؟",
          options: ["الطاقة الحركية فقط", "الزخم الكلي", "السرعة الفردية لكل جسم", "لا شيء يبقى ثابتًا"],
          correct: 1,
          explain: "الزخم الكلي محفوظ دومًا في نظام معزول، أما الطاقة الحركية فتُحفظ فقط في التصادمات المرنة.",
        },
      },
    ],
  },
  {
    id: "stage-2",
    title: "الحرارة",
    subtitle: "الديناميكا الحرارية",
    color: "#8A4B9F",
    lessons: [
      {
        id: "l-2-1",
        title: "درجة الحرارة والحرارة",
        summary: "الفرق بين مفهومين يُخلط بينهما كثيرًا",
        content: [
          "درجة الحرارة مقياس لمتوسط الطاقة الحركية لجزيئات المادة، بينما الحرارة هي الطاقة المنتقلة بين جسمين بسبب فرق درجة الحرارة بينهما. كوب ماء صغير وحوض سباحة قد يكون لهما نفس درجة الحرارة، لكن الحوض يحتوي طاقة حرارية أكبر بكثير.",
          "تنتقل الحرارة بثلاث طرق: التوصيل (عبر التلامس المباشر بين الجزيئات)، الحمل (عبر حركة السوائل أو الغازات)، والإشعاع (عبر موجات كهرومغناطيسية، ولا يحتاج وسطًا ماديًا — ولهذا تصلنا حرارة الشمس عبر الفراغ).",
          "السعة الحرارية النوعية تحدد كمية الحرارة اللازمة لرفع درجة حرارة كتلة معينة من مادة بمقدار درجة واحدة. الماء له سعة حرارية عالية جدًا، ولهذا تعتدل درجة حرارة المناطق الساحلية مقارنة بالمناطق الصحراوية.",
        ],
        formulas: ["Q = mcΔT"],
        quiz: {
          q: "لماذا قد يكون لجسمين نفس درجة الحرارة لكن طاقة حرارية مختلفة؟",
          options: [
            "هذا مستحيل فيزيائيًا",
            "لأن الطاقة الحرارية تعتمد أيضًا على الكتلة والسعة الحرارية",
            "لأن درجة الحرارة لا علاقة لها بالطاقة",
            "لأن أحدهما صلب والآخر سائل دائمًا",
          ],
          correct: 1,
          explain: "درجة الحرارة تصف متوسط طاقة الجزيء الواحد، أما الطاقة الحرارية الكلية فتعتمد على عدد الجزيئات (الكتلة) ونوع المادة.",
        },
      },
      {
        id: "l-2-2",
        title: "قوانين الديناميكا الحرارية",
        summary: "لماذا لا توجد آلة مثالية",
        content: [
          "القانون الأول هو صياغة لحفظ الطاقة يشمل الحرارة: التغيّر في الطاقة الداخلية لنظام يساوي الحرارة المضافة إليه ناقص الشغل الذي ينجزه النظام على محيطه.",
          "القانون الثاني ربما الأعمق أثرًا في الفيزياء كلها: الإنتروبيا (مقياس العشوائية أو اللاتنظيم) في نظام معزول لا تنقص أبدًا مع الزمن. هذا يفسر لماذا تنتقل الحرارة تلقائيًا من الساخن إلى البارد وليس العكس، ولماذا لا يمكن لأي آلة تحويل كل الحرارة إلى شغل بكفاءة 100%.",
          "هذا القانون هو أيضًا سبب وجود 'اتجاه للزمن' في الفيزياء: معظم قوانين الحركة الأساسية قابلة للعكس رياضيًا، لكن الزيادة الحتمية في الإنتروبيا هي ما يجعلنا نميّز الماضي عن المستقبل.",
        ],
        formulas: ["ΔU = Q − W"],
        quiz: {
          q: "وفق القانون الثاني للديناميكا الحرارية، ماذا يحدث لإنتروبيا نظام معزول مع الزمن؟",
          options: ["تنقص دائمًا", "تبقى ثابتة دائمًا", "لا تنقص أبدًا (تزيد أو تبقى ثابتة)", "تتذبذب عشوائيًا بلا نمط"],
          correct: 2,
          explain: "الإنتروبيا الكلية لنظام معزول لا يمكن أن تنقص؛ إما تزيد أو تبقى ثابتة في الحالة المثالية العكوسة.",
        },
      },
    ],
  },
  {
    id: "stage-3",
    title: "الموجات والصوت",
    subtitle: "كيف تنتقل الاضطرابات عبر الوسط",
    color: "#1F6FB2",
    lessons: [
      {
        id: "l-3-1",
        title: "خصائص الموجات",
        summary: "الطول الموجي، التردد، والسرعة",
        content: [
          "الموجة هي انتقال للطاقة عبر وسط (أو الفراغ في حالة الضوء) دون انتقال المادة نفسها بشكل دائم؛ جزيئات الماء عند مرور موجة بحرية تتذبذب مكانها تقريبًا ولا 'تسافر' مع الموجة.",
          "الطول الموجي هو المسافة بين قمتين متتاليتين، والتردد هو عدد الدورات الكاملة في الثانية، والسرعة تربط بينهما. الموجات المستعرضة (كالضوء) تهتز عموديًا على اتجاه انتشارها، بينما الموجات الطولية (كالصوت) تهتز بموازاة اتجاه انتشارها.",
          "عند التقاء موجتين في نفس المكان يحدث تداخل: تراكب بنّاء يقوّي الموجة الناتجة عند تطابق القمم، أو تراكب هدّام يُضعفها عند تطابق قمة مع قاع. هذا المبدأ أساس ظواهر مثل حلقات الألوان على فقاعة الصابون.",
        ],
        formulas: ["v = fλ", "T = 1/f"],
        quiz: {
          q: "موجة صوتية ترددها 200 Hz وسرعتها 340 m/s. ما طولها الموجي؟",
          options: ["1.7 m", "0.59 m", "68000 m", "140 m"],
          correct: 0,
          explain: "λ = v/f = 340/200 = 1.7 m.",
        },
      },
      {
        id: "l-3-2",
        title: "الصوت وظاهرة دوبلر",
        summary: "لماذا تتغيّر نبرة صفارة سيارة الإسعاف",
        content: [
          "الصوت موجة طولية ميكانيكية تحتاج وسطًا ماديًا (هواء، ماء، صلب) لتنتقل، ولهذا لا ينتقل الصوت في الفراغ كما يحدث في المشاهد السينمائية عن الفضاء.",
          "ظاهرة دوبلر تصف التغيّر الظاهري في تردد الموجة عندما يكون المصدر أو الراصد في حركة نسبية. عندما تقترب سيارة إسعاف، تنضغط موجاتها الصوتية أمامها فيرتفع التردد المسموع (نغمة أحدّ)، وعندما تبتعد تتمدد الموجات فينخفض التردد.",
          "نفس المبدأ يُستخدم فلكيًا: الانزياح نحو الأحمر في ضوء المجرات البعيدة هو دليل رئيسي على أن الكون يتمدد، لأن المجرات تبتعد عنا فيزداد الطول الموجي لضوئها.",
        ],
        formulas: ["f' = f × (v ± v_راصد)/(v ∓ v_مصدر)"],
        quiz: {
          q: "لماذا ترتفع نبرة صفارة سيارة مقتربة منك؟",
          options: [
            "لأن السائق يزيد شدة الصوت",
            "لأن الموجات الصوتية تنضغط أمام المصدر المتحرك فيزيد تردّدها الظاهري",
            "لأن الهواء يسخن أمام السيارة",
            "هذا وهم سمعي لا علاقة فيزيائية له",
          ],
          correct: 1,
          explain: "اقتراب المصدر يقلّص المسافة بين القمم المتتالية للموجة، فيرتفع التردد الذي يصل للراصد — هذا جوهر ظاهرة دوبلر.",
        },
      },
    ],
  },
  {
    id: "stage-4",
    title: "الكهرباء والمغناطيسية",
    subtitle: "القوة التي تشغّل حضارتنا الحديثة",
    color: "#C2472F",
    lessons: [
      {
        id: "l-4-1",
        title: "الشحنة والمجال الكهربائي",
        summary: "من قانون كولوم إلى مفهوم المجال",
        content: [
          "الشحنة الكهربائية خاصية أساسية للمادة، ولها نوعان فقط: موجبة وسالبة. الشحنات المتشابهة تتنافر والمختلفة تتجاذب، والشحنة الكلية في نظام معزول محفوظة دائمًا — لا تُستحدث ولا تُفنى، بل تنتقل فقط.",
          "قانون كولوم يصف القوة بين شحنتين نقطيتين: تتناسب طرديًا مع حاصل ضرب الشحنتين وعكسيًا مع مربع المسافة بينهما، بنفس الصياغة الرياضية تقريبًا لقانون الجذب العام لنيوتن.",
          "بدلاً من التفكير في تأثير مباشر عن بُعد، يُفضَّل الفيزيائيون مفهوم المجال: الشحنة تُنشئ 'مجالًا كهربائيًا' في الفضاء المحيط بها، وأي شحنة أخرى تدخل هذا المجال 'تشعر' بقوة بسببه. هذا المفهوم أصبح حجر الأساس لفهم كل القوى الأساسية لاحقًا.",
        ],
        formulas: ["F = kq₁q₂/r²", "E = F/q"],
        quiz: {
          q: "إذا تضاعفت المسافة بين شحنتين نقطيتين، ماذا يحدث للقوة بينهما؟",
          options: ["تتضاعف", "تصبح ربع القيمة", "تصبح نصف القيمة", "لا تتغيّر"],
          correct: 1,
          explain: "القوة تتناسب عكسيًا مع مربع المسافة، فتضاعف المسافة يجعل القوة (1/2)² = ¼ من قيمتها الأصلية.",
        },
      },
      {
        id: "l-4-2",
        title: "الدارات الكهربائية",
        summary: "الجهد، التيار، والمقاومة",
        content: [
          "التيار الكهربائي هو معدل تدفق الشحنة عبر موصل، ويُقاس بالأمبير. الجهد هو فرق الطاقة الكامنة الكهربائية لكل وحدة شحنة بين نقطتين، وهو ما 'يدفع' الشحنات للحركة، تمامًا كفرق الارتفاع الذي يدفع الماء للجريان.",
          "قانون أوم يربط هذه الكميات الثلاث: التيار المار في موصل يتناسب طرديًا مع الجهد المطبق وعكسيًا مع مقاومة الموصل. المقاومة تعتمد على نوع المادة، طولها، ومساحة مقطعها.",
          "في الدارة التوالي، يمرّ نفس التيار عبر كل العناصر وتتوزع الجهود، بينما في دارة التوازي يبقى الجهد ثابتًا عبر كل فرع ويتوزع التيار. هذا الفرق يحدد كيف تُصمَّم دارات الإضاءة المنزلية بحيث لا يعتمد مصباح على عمل الآخر.",
        ],
        formulas: ["V = IR", "P = IV"],
        quiz: {
          q: "مقاومة قيمتها 10 Ω يمر فيها تيار 2 A. ما الجهد عبرها؟",
          options: ["5 V", "20 V", "12 V", "0.2 V"],
          correct: 1,
          explain: "V = IR = 2×10 = 20 V.",
        },
      },
      {
        id: "l-4-3",
        title: "المغناطيسية والحث الكهرومغناطيسي",
        summary: "الرابط الذي وحّد الكهرباء والمغناطيسية والضوء",
        content: [
          "أي شحنة متحركة تُنشئ مجالًا مغناطيسيًا، وأي مجال مغناطيسي متغيّر يُنشئ مجالًا كهربائيًا — هذا الترابط العميق بين الكهرباء والمغناطيسية اكتشفه فاراداي وصاغه ماكسويل رياضيًا بشكل كامل.",
          "الحث الكهرومغناطيسي هو مبدأ توليد جهد كهربائي في موصل نتيجة تغيّر الفيض المغناطيسي المحيط به، سواء بتحريك مغناطيس بالقرب من ملف أو بتغيير شدة المجال نفسه. هذا المبدأ هو أساس عمل كل مولّد كهربائي في العالم تقريبًا.",
          "معادلات ماكسويل أظهرت أن الضوء نفسه ما هو إلا موجة كهرومغناطيسية متذبذبة، ما وحّد ثلاث ظواهر كانت تُعامَل كمنفصلة تمامًا: الكهرباء، المغناطيسية، والضوء — أحد أعظم الاختزالات في تاريخ العلم.",
        ],
        formulas: ["EMF = −dΦ/dt"],
        quiz: {
          q: "ما المبدأ الذي يشغّل معظم المولّدات الكهربائية في العالم؟",
          options: [
            "التفاعل الكيميائي المباشر",
            "الحث الكهرومغناطيسي: تغيّر الفيض المغناطيسي يولّد جهدًا",
            "قانون كولوم للشحنات الساكنة",
            "الطاقة الحرارية المباشرة فقط",
          ],
          correct: 1,
          explain: "دوران ملف داخل مجال مغناطيسي (أو العكس) يغيّر الفيض المغناطيسي عبره باستمرار، فيولّد جهدًا كهربائيًا متجددًا — هذا أساس المولّدات.",
        },
      },
    ],
  },
  {
    id: "stage-5",
    title: "الضوء والبصريات",
    subtitle: "من الانعكاس إلى طبيعة الضوء المزدوجة",
    color: "#D6A62A",
    lessons: [
      {
        id: "l-5-1",
        title: "الانعكاس والانكسار",
        summary: "كيف تُشكَّل المرايا والعدسات الصور",
        content: [
          "الانعكاس هو ارتداد الضوء عن سطح، ويحكمه قانون بسيط: زاوية السقوط تساوي زاوية الانعكاس، وكلاهما تُقاس من العمود المقام على السطح. هذا القانون هو أساس عمل كل المرايا المسطحة والمقعرة والمحدبة.",
          "الانكسار هو انحناء مسار الضوء عند انتقاله بين وسطين مختلفي الكثافة البصرية، بسبب تغيّر سرعته. قانون سنل يربط زوايا السقوط والانكسار بمعامل الانكسار لكل وسط، وهو ما يفسر لماذا يبدو القلم منكسرًا داخل كوب ماء.",
          "عند زاوية سقوط كبيرة كفاية عند الانتقال من وسط أكثر كثافة إلى أقل كثافة، يحدث انعكاس كلي داخلي بدلاً من الانكسار — هذا هو المبدأ الذي تعمل به الألياف الضوئية لنقل البيانات لمسافات هائلة بأقل فقد ممكن.",
        ],
        formulas: ["n₁ sinθ₁ = n₂ sinθ₂"],
        quiz: {
          q: "ما المبدأ الفيزيائي الذي تعمل به الألياف الضوئية؟",
          options: ["الانعكاس الكلي الداخلي", "التفرّق اللوني", "الاستقطاب", "الحيود"],
          correct: 0,
          explain: "الضوء يُحبَس داخل قلب الألياف عبر انعكاسات كلية داخلية متكررة، فينتقل لمسافات طويلة دون أن يخرج عبر الجدران.",
        },
      },
      {
        id: "l-5-2",
        title: "الطبيعة المزدوجة للضوء",
        summary: "موجة أم جسيم؟",
        content: [
          "لقرون طويلة تنازع العلماء حول طبيعة الضوء: هل هو تيار من الجسيمات كما اقترح نيوتن، أم موجة كما أثبتت تجربة يانغ للشقين المزدوجين بأنماط التداخل المميزة للموجات؟",
          "أظهر أينشتاين في تفسيره للتأثير الكهروضوئي أن الضوء يتصرف أحيانًا كحزم منفصلة من الطاقة تُسمى الفوتونات، وهذا لا يمكن تفسيره بنموذج الموجة الكلاسيكية وحده — ونال جائزة نوبل على هذا التفسير تحديدًا، لا على النسبية.",
          "الإجابة الحديثة: الضوء (وكل المادة في الواقع) يملك طبيعة مزدوجة موجة-جسيم، تظهر إحداهما أو الأخرى حسب طريقة القياس نفسها. هذا الاكتشاف كان أحد أهم البذور التي أدت لولادة ميكانيكا الكم.",
        ],
        formulas: ["E = hf"],
        quiz: {
          q: "ماذا أظهر تفسير أينشتاين للتأثير الكهروضوئي؟",
          options: [
            "أن الضوء موجة بحتة فقط",
            "أن الضوء يحمل طاقته في حزم منفصلة (فوتونات)",
            "أن الضوء لا يحمل طاقة",
            "أن سرعة الضوء متغيرة حسب الراصد",
          ],
          correct: 1,
          explain: "فسّر أينشتاين انبعاث الإلكترونات من سطح معدني بافتراض أن الضوء يُنقل في وحدات طاقة منفصلة E=hf، وهي الفوتونات.",
        },
      },
    ],
  },
  {
    id: "stage-6",
    title: "الفيزياء الحديثة",
    subtitle: "النسبية والكم",
    color: "#5B3A9B",
    lessons: [
      {
        id: "l-6-1",
        title: "النسبية الخاصة",
        summary: "لماذا الزمن ليس مطلقًا",
        content: [
          "بنى أينشتاين النسبية الخاصة على فرضيتين بسيطتين في ظاهرهما: قوانين الفيزياء واحدة في كل الأطر المرجعية العاطلة (غير المتسارعة)، وسرعة الضوء في الفراغ ثابتة لكل الراصدين بغض النظر عن سرعة مصدرها أو الراصد نفسه.",
          "الفرضية الثانية تحديدًا تقود لنتائج تصادم الحدس: إذا كانت سرعة الضوء ثابتة دائمًا، فلا بد أن الزمن والمسافة أنفسهما يتغيّران بين الراصدين المتحركين نسبيًا. الزمن يتمدد (يمرّ أبطأ) للأجسام سريعة الحركة من منظور راصد ساكن، والأطوال تنكمش في اتجاه الحركة.",
          "أشهر نتيجة لهذه النظرية هي معادلة تكافؤ الكتلة والطاقة، التي تُظهر أن الكتلة نفسها صورة مكثفة جدًا من الطاقة — وهذا المبدأ هو ما يشغّل الشمس والمفاعلات النووية على حد سواء.",
        ],
        formulas: ["E = mc²", "t' = t/√(1−v²/c²)"],
        quiz: {
          q: "وفق النسبية الخاصة، ماذا يحدث لمرور الزمن بالنسبة لجسم يتحرك بسرعة قريبة من سرعة الضوء، من منظور راصد ساكن؟",
          options: ["يمرّ الزمن أسرع", "يمرّ الزمن أبطأ (تمدد الزمن)", "لا يتأثر الزمن إطلاقًا", "يتوقف الزمن نهائيًا لكل السرعات"],
          correct: 1,
          explain: "تمدد الزمن يعني أن الساعة المتحركة بسرعة عالية تبدو للراصد الساكن وكأنها تدق أبطأ من ساعته الخاصة.",
        },
      },
      {
        id: "l-6-2",
        title: "مقدمة في ميكانيكا الكم",
        summary: "عالم الاحتمالات في المقياس دون الذري",
        content: [
          "في المقياس دون الذري، تتوقف مفاهيمنا الكلاسيكية عن المسار المحدد والقياس الدقيق عن الصلاحية. الجسيمات مثل الإلكترون لا تملك موضعًا وسرعة محددين في آن واحد بدقة مطلقة، بل توصف بدالة موجية تعطي احتمالية وجودها في مكان ما.",
          "مبدأ عدم اليقين لهايزنبرغ يصوغ هذا الحد رياضيًا: كلما زادت دقة معرفتنا بموضع جسيم، قلّت بالضرورة دقة معرفتنا بزخمه، والعكس صحيح. هذا ليس قصورًا في أدوات القياس، بل خاصية أساسية للطبيعة نفسها.",
          "من أغرب نتائج ميكانيكا الكم أن فعل القياس نفسه يؤثر على النظام المُقاس؛ قبل القياس يوجد الجسيم في تراكب من عدة احتمالات معًا، وعند القياس 'ينهار' هذا التراكب إلى نتيجة واحدة محددة. هذا السلوك تحقق منه تجريبيًا آلاف المرات رغم غرابته الفلسفية.",
        ],
        formulas: ["Δx · Δp ≥ ħ/2"],
        quiz: {
          q: "ماذا يقول مبدأ عدم اليقين لهايزنبرغ؟",
          options: [
            "لا يمكن أبدًا قياس أي كمية فيزيائية",
            "كلما زادت دقة معرفة الموضع، قلّت بالضرورة دقة معرفة الزخم",
            "الإلكترونات لا تتحرك إطلاقًا",
            "القياس لا يؤثر على النظام أبدًا",
          ],
          correct: 1,
          explain: "هناك حد أدنى أساسي وغير قابل للتجاوز في دقة معرفة زوج من الكميات المترافقة كالموضع والزخم في آنٍ واحد.",
        },
      },
    ],
  },
];

const ALL_LESSONS = CURRICULUM.flatMap((s) => s.lessons.map((l) => ({ ...l, stageId: s.id })));
const TOTAL_LESSONS = ALL_LESSONS.length;

/* ============================= أدوات مساعدة ============================= */

const STORAGE_KEY = "physics-progress";

function useProgress() {
  const [completed, setCompleted] = useState({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setCompleted(JSON.parse(raw));
    } catch (e) {
      // لا يوجد تقدم محفوظ بعد
    } finally {
      setLoaded(true);
    }
  }, []);

  const markDone = (lessonId, correct) => {
    setCompleted((prev) => {
      const next = { ...prev, [lessonId]: { done: true, correct } };
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch (e) {}
      return next;
    });
  };

  const reset = () => {
    setCompleted({});
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {}
  };

  return { completed, markDone, reset, loaded };
}

/* ============================= مكوّنات الواجهة ============================= */

function TrajectoryPath({ stages, activeStageIdx, progressRatio }) {
  // مسار يحاكي قطعًا مكافئًا (مسار مقذوف) — إشارة بصرية لموضوع الحركة في الفيزياء
  const w = 320;
  const h = 130;
  const n = stages.length;
  const points = stages.map((_, i) => {
    const x = 20 + (i / (n - 1)) * (w - 40);
    const y = h - 20 - Math.sin((i / (n - 1)) * Math.PI) * (h - 55);
    return { x, y };
  });
  const path = points
    .map((p, i) => (i === 0 ? `M ${p.x} ${p.y}` : `L ${p.x} ${p.y}`))
    .join(" ");

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto" aria-hidden="true">
      <path d={path} fill="none" stroke="#D8CFBC" strokeWidth="2" strokeDasharray="1 7" strokeLinecap="round" />
      <path
        d={path}
        fill="none"
        stroke="#B8622B"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray="500"
        strokeDashoffset={500 - 500 * progressRatio}
        style={{ transition: "stroke-dashoffset 0.6s ease" }}
      />
      {points.map((p, i) => (
        <g key={i}>
          <circle
            cx={p.x}
            cy={p.y}
            r={i === activeStageIdx ? 7 : 5}
            fill={i <= activeStageIdx ? stages[i].color : "#EFE8D8"}
            stroke={i === activeStageIdx ? "#1F2A44" : "#C9BFA8"}
            strokeWidth={i === activeStageIdx ? 2 : 1}
          />
        </g>
      ))}
    </svg>
  );
}

function ProgressRing({ ratio, size = 46 }) {
  const stroke = 4;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  return (
    <svg width={size} height={size} className="shrink-0">
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#E7DFCC" strokeWidth={stroke} />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke="#B8622B"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeDasharray={c}
        strokeDashoffset={c - c * ratio}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
        style={{ transition: "stroke-dashoffset 0.5s ease" }}
      />
      <text x="50%" y="52%" textAnchor="middle" dominantBaseline="middle" fontSize="12" fontFamily="'JetBrains Mono', monospace" fill="#1F2A44">
        {Math.round(ratio * 100)}٪
      </text>
    </svg>
  );
}

function Quiz({ lesson, onAnswered, savedState }) {
  const [selected, setSelected] = useState(savedState ? savedState.selected : null);
  const [revealed, setRevealed] = useState(!!savedState);

  const choose = (idx) => {
    if (revealed) return;
    setSelected(idx);
    setRevealed(true);
    onAnswered(idx === lesson.quiz.correct, idx);
  };

  return (
    <div className="mt-6 rounded-xl border border-[#E2D9C4] bg-[#FBF8F0] p-5">
      <p className="text-[11px] tracking-widest text-[#8A6D4C] font-semibold mb-2" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
        اختبار سريع
      </p>
      <p className="text-[#1F2A44] font-bold mb-4 leading-relaxed">{lesson.quiz.q}</p>
      <div className="grid gap-2">
        {lesson.quiz.options.map((opt, idx) => {
          const isCorrect = idx === lesson.quiz.correct;
          const isSelected = idx === selected;
          let cls = "border-[#E2D9C4] bg-white hover:border-[#B8622B]";
          if (revealed && isCorrect) cls = "border-[#2E6E62] bg-[#EAF3EF]";
          else if (revealed && isSelected && !isCorrect) cls = "border-[#C2472F] bg-[#FBEBE7]";
          return (
            <button
              key={idx}
              onClick={() => choose(idx)}
              disabled={revealed}
              className={`text-right rounded-lg border px-4 py-3 text-sm text-[#2B2A26] transition-colors ${cls} ${revealed ? "cursor-default" : "cursor-pointer"}`}
            >
              {opt}
            </button>
          );
        })}
      </div>
      {revealed && (
        <div className="mt-4 text-sm leading-relaxed text-[#4A4638] bg-[#F3EEDF] rounded-lg p-3 border border-[#E2D9C4]">
          <span className="font-bold text-[#1F2A44]">
            {selected === lesson.quiz.correct ? "إجابة صحيحة. " : "إجابة غير دقيقة. "}
          </span>
          {lesson.quiz.explain}
        </div>
      )}
    </div>
  );
}

/* ============================= التطبيق الرئيسي ============================= */

export default function PhysicsApp() {
  const { completed, markDone, reset, loaded } = useProgress();
  const [currentId, setCurrentId] = useState(ALL_LESSONS[0].id);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const currentLesson = ALL_LESSONS.find((l) => l.id === currentId);
  const currentStage = CURRICULUM.find((s) => s.id === currentLesson.stageId);
  const currentIdx = ALL_LESSONS.findIndex((l) => l.id === currentId);
  const stageIdx = CURRICULUM.findIndex((s) => s.id === currentStage.id);

  const doneCount = Object.keys(completed).length;
  const overallRatio = TOTAL_LESSONS ? doneCount / TOTAL_LESSONS : 0;

  const goTo = (id) => {
    setCurrentId(id);
    setSidebarOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goNext = () => {
    if (currentIdx < ALL_LESSONS.length - 1) goTo(ALL_LESSONS[currentIdx + 1].id);
  };
  const goPrev = () => {
    if (currentIdx > 0) goTo(ALL_LESSONS[currentIdx - 1].id);
  };

  return (
    <div dir="rtl" className="min-h-screen w-full bg-[#F7F3E8] text-[#2B2A26]" style={{ fontFamily: "'Tajawal', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@500;700;800&family=Tajawal:wght@400;500;700&family=JetBrains+Mono:wght@400;600&display=swap');
        .font-display { font-family: 'Cairo', sans-serif; }
        ::selection { background: #E8C9AE; }
      `}</style>

      {/* الرأس */}
      <header className="sticky top-0 z-30 bg-[#F7F3E8]/95 backdrop-blur border-b border-[#E2D9C4]">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
          <button
            onClick={() => setSidebarOpen((v) => !v)}
            className="lg:hidden rounded-lg border border-[#E2D9C4] px-3 py-2 text-sm font-bold text-[#1F2A44]"
          >
            المسار
          </button>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#1F2A44] flex items-center justify-center text-[#F7F3E8] font-display font-bold text-sm">
              φ
            </div>
            <h1 className="font-display font-extrabold text-lg text-[#1F2A44]">فيزياء، من الصفر</h1>
          </div>
          <ProgressRing ratio={overallRatio} />
        </div>
      </header>

      <div className="max-w-6xl mx-auto flex gap-6 px-4 py-6">
        {/* الشريط الجانبي: المسار التعليمي */}
        <aside
          className={`fixed lg:sticky top-16 lg:top-20 right-0 lg:right-auto h-[calc(100vh-4rem)] lg:h-fit w-[85%] max-w-xs lg:w-72 shrink-0 bg-[#F7F3E8] lg:bg-transparent z-20 transition-transform duration-300 overflow-y-auto pb-10 ${
            sidebarOpen ? "translate-x-0" : "translate-x-full lg:translate-x-0"
          }`}
        >
          <div className="px-1 mb-4">
            <TrajectoryPath stages={CURRICULUM} activeStageIdx={stageIdx} progressRatio={overallRatio} />
            <p className="text-xs text-[#8A6D4C] text-center -mt-2" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              {doneCount} / {TOTAL_LESSONS} درسًا مكتملًا
            </p>
          </div>

          {CURRICULUM.map((stage, sIdx) => (
            <div key={stage.id} className="mb-4">
              <div className="flex items-center gap-2 px-2 mb-1.5">
                <span className="w-2 h-2 rounded-full" style={{ background: stage.color }} />
                <p className="font-display font-bold text-sm text-[#1F2A44]">{stage.title}</p>
              </div>
              <div className="flex flex-col gap-1">
                {stage.lessons.map((lesson) => {
                  const isActive = lesson.id === currentId;
                  const isDone = !!completed[lesson.id];
                  return (
                    <button
                      key={lesson.id}
                      onClick={() => goTo(lesson.id)}
                      className={`text-right rounded-lg px-3 py-2 text-sm flex items-center justify-between gap-2 transition-colors ${
                        isActive ? "bg-[#1F2A44] text-[#F7F3E8]" : "hover:bg-[#EFE8D8] text-[#3A3730]"
                      }`}
                    >
                      <span className="leading-snug">{lesson.title}</span>
                      {isDone && (
                        <span
                          className={`text-xs shrink-0 ${isActive ? "text-[#D8CFBC]" : "text-[#2E6E62]"}`}
                          style={{ fontFamily: "'JetBrains Mono', monospace" }}
                        >
                          ✓
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}

          {doneCount > 0 && (
            <button
              onClick={reset}
              className="mx-2 mt-2 text-xs text-[#8A6D4C] underline underline-offset-2 hover:text-[#C2472F]"
            >
              إعادة ضبط التقدّم
            </button>
          )}
        </aside>

        {sidebarOpen && (
          <div className="fixed inset-0 bg-black/30 z-10 lg:hidden" onClick={() => setSidebarOpen(false)} />
        )}

        {/* المحتوى الرئيسي */}
        <main className="flex-1 min-w-0">
          <div className="mb-5">
            <p
              className="text-xs font-semibold tracking-widest mb-1"
              style={{ color: currentStage.color, fontFamily: "'JetBrains Mono', monospace" }}
            >
              {currentStage.title} · {currentStage.subtitle}
            </p>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#1F2A44] leading-tight">
              {currentLesson.title}
            </h2>
            <p className="text-[#8A6D4C] text-sm mt-1">{currentLesson.summary}</p>
          </div>

          <article className="bg-white rounded-2xl border border-[#E2D9C4] p-5 sm:p-7 shadow-[0_1px_0_#00000008]">
            {currentLesson.content.map((p, i) => (
              <p key={i} className="text-[15px] leading-8 text-[#2B2A26] mb-4 last:mb-0">
                {p}
              </p>
            ))}

            {currentLesson.formulas && currentLesson.formulas.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-2">
                {currentLesson.formulas.map((f, i) => (
                  <span
                    key={i}
                    dir="ltr"
                    className="inline-block rounded-lg bg-[#1F2A44] text-[#F7F3E8] px-3 py-1.5 text-sm"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {f}
                  </span>
                ))}
              </div>
            )}

            <Quiz
              key={currentLesson.id}
              lesson={currentLesson}
              savedState={completed[currentLesson.id] ? { selected: null } : null}
              onAnswered={(correct) => markDone(currentLesson.id, correct)}
            />
          </article>

          {/* التنقل */}
          <div className="flex items-center justify-between mt-6 gap-3">
            <button
              onClick={goPrev}
              disabled={currentIdx === 0}
              className="rounded-lg border border-[#E2D9C4] px-4 py-2.5 text-sm font-bold text-[#1F2A44] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#EFE8D8]"
            >
              → الدرس السابق
            </button>
            <span className="text-xs text-[#8A6D4C]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              {currentIdx + 1} / {TOTAL_LESSONS}
            </span>
            <button
              onClick={goNext}
              disabled={currentIdx === ALL_LESSONS.length - 1}
              className="rounded-lg bg-[#1F2A44] px-4 py-2.5 text-sm font-bold text-[#F7F3E8] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#2A3A5C]"
            >
              الدرس التالي ←
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
