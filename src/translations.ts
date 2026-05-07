export type Language = 'fr' | 'ar';

export const translations = {
  fr: {
    nav: {
      home: 'Accueil',
      products: 'Produits',
      about: 'À Propos',
      agencies: 'Nos Agences',
      contact: 'Contact',
      quote: 'Devis Gratuit',
    },
    hero: {
      badge: 'Qualité & Tradition',
      title: "Tuile Baraka – L'Excellence pour votre",
      titleAccent: 'Toit',
      description: 'Spécialiste marocain du qrmid de haute qualité. Nous allions savoir-faire traditionnel et technologies modernes pour protéger votre foyer durablement.',
      ctaPrimary: 'Découvrir nos produits',
      ctaSecondary: 'Nous contacter',
    },
    products: {
      title: 'Nos Collections de Tuiles',
      description: 'Une large gamme de formes, de textures et de couleurs pour s\'adapter à tous les styles architecturaux du Maroc.',
      viewDetails: 'Voir les détails',
      categories: {
        classique: 'Classique',
        contemporain: 'Contemporain',
        tradition: 'Tradition',
        authentique: 'Authentique',
        premium: 'Premium',
        finition: 'Finition',
      },
      items: {
        nova: {
          name: 'TUILE KLINKER NOVA',
          desc: 'La tuile ultra-moderne offrant une esthétique épurée et une résistance exceptionnelle aux chocs thermiques.',
          features: ['Technologie Klinker', 'Absorption d\'eau < 5%', 'Résistance gel élevée', 'Garantie 50 ans'],
          specs: { 
            length: '447 mm', 
            width: '255 mm', 
            weight: '3,750 Kg',
            unitsPerM2: '11,5 – 12,5 uds',
            unitsPerPalette: '240 / 256 uds',
            usefulLength: '385 mm',
            usefulWidth: '220 mm',
            avgLongOverlap: '62 mm',
            avgTransOverlap: '35 mm',
            longPureau: '380 mm',
            transPureau: '355 – 385 mm',
            transAssemblyGap: '6 mm',
            slope: '19º – 35%'
          },
          colors: [
            { name: 'Vermouth', hex: '#b23a2b' },
            { name: 'Noir', hex: '#000000' }
          ]
        },
        marseillaise: {
          name: 'Tuile Klinker Marseillaise',
          desc: 'La robustesse de la gamme Klinker alliée au design intemporel de la tuile de Marseille.',
          features: ['Double emboîtement', 'Étanchéité renforcée', 'Haut rendement', 'Antigélive'],
          specs: { 
            length: '456 mm', 
            width: '270 mm', 
            weight: '3,650 Kg',
            unitsPerM2: '10,8 uds',
            unitsPerPalette: '210 / 280 uds',
            usefulLength: '386 mm',
            usefulWidth: '231 mm',
            avgLongOverlap: '66 mm',
            avgTransOverlap: '44 mm',
            theoreticalPureau: '386 mm',
            longPureau: '370 – 397 mm',
            transPureau: '3 mm',
            slope: '19º – 35%'
          },
          colors: [
            { name: 'Vermouth', hex: '#b23a2b' },
            { name: 'Noir', hex: '#000000' }
          ]
        },
        mixta: {
          name: 'TUILE KLINKER 11 (MIXTA)',
          desc: 'Polyvalence et élégance pour une tuile qui s\'adapte à toutes les inclinaisons de toit.',
          features: ['Polyvalence de pose', 'Design galbé', 'Aspect traditionnel', 'Solidité extrême'],
          specs: { 
            length: '447 mm', 
            width: '255 mm', 
            weight: '3,750 Kg',
            unitsPerM2: '11,5 – 12,5 uds',
            unitsPerPalette: '240 uds',
            usefulLength: '385 mm',
            usefulWidth: '220 mm',
            avgLongOverlap: '62 mm',
            avgTransOverlap: '35 mm',
            theoreticalPureau: '380 mm',
            longPureau: '355 – 385 mm',
            transPureau: '220 – 225 mm',
            slope: '19º – 35%'
          },
          colors: [
            { name: 'Vermouth', hex: '#b23a2b' },
            { name: 'Noir', hex: '#000000' }
          ]
        },
        plate: {
          name: 'TUILE KLINKER PLATE',
          desc: 'L\'élégance architecturale absolue, parfaite pour les designs contemporains minimalistes.',
          features: ['Surface lisse', 'Pose joint croisé', 'Design architecte', 'Format grand moule'],
          specs: { 
            length: '447 mm', 
            width: '255 mm', 
            weight: '3,750 Kg',
            unitsPerM2: '11,5 – 12,5 uds',
            unitsPerPalette: '240 uds',
            usefulLength: '385 mm',
            usefulWidth: '220 mm',
            avgLongOverlap: '62 mm',
            avgTransOverlap: '35 mm',
            theoreticalPureau: '380 mm',
            longPureau: '355 – 385 mm',
            transPureau: '220 – 225 mm',
            slope: '19º – 35%'
          },
          colors: [
            { name: 'Vermouth', hex: '#b23a2b' },
            { name: 'Noir', hex: '#000000' }
          ]
        },
        ardoise: {
          name: 'Tuile Ardoise',
          desc: 'L\'élégance du gris anthracite pour un toit distingué et durable.',
          features: ['Élégance premium', 'Finition ardoise', 'Très longue durée', 'Aspect naturel'],
          specs: { length: '416 mm', width: '404 mm', weight: '3,30 Kg' },
          colors: [
            { name: 'Vermouth', hex: '#b23a2b' },
            { name: 'Noir', hex: '#000000' }
          ]
        },
        accessoires: {
          name: 'Accessoires de Toit',
          desc: 'Faîtières, rives et chatières pour une finition impeccable et une ventilation optimale.',
          features: ['Finition complète', 'Ventilation toiture', 'Étanchéité rives', 'Harmonie esthétique'],
          specs: { length: '416 mm', width: '404 mm', weight: '3,30 Kg' },
          colors: [
            { name: 'Vermouth', hex: '#b23a2b' },
            { name: 'Noir', hex: '#000000' }
          ]
        },
      },
      labels: {
        length: 'Longueur',
        width: 'Largeur',
        weight: 'Poids',
        unitsPerM2: 'Unités/m²',
        unitsPerPalette: 'Unités/palette',
        usefulLength: 'Longueur utile',
        usefulWidth: 'Largeur utile',
        avgLongOverlap: 'Recouvrement longitudinal moyen',
        avgTransOverlap: 'Recouvrement transversal moyen',
        theoreticalPureau: 'Pureau théorique',
        longPureau: 'Pureau longitudinal',
        transPureau: 'Pureau transversal',
        transAssemblyGap: 'Jeu d’assemblage transversal',
        slope: 'Pente minimale',
        specs: 'Spécifications Techniques',
        colors: 'Couleurs Disponibles'
      },
    },
    integratedSystems: {
      title: 'Systèmes de Toitures Intégrées',
      description: 'Découvrez nos solutions techniques avancées pour une toiture performante, durable et parfaitement isolée.',
      badge: 'Guide Technique',
      cta: 'Consulter nos experts',
    },
    about: {
      title: "Plus qu'un toit, une protection pour votre",
      titleAccent: 'Patrimoine',
      description: 'Fondée sur des valeurs de qualité et de confiance, Tuile Baraka s\'est imposée comme le leader de la couverture au Maroc. Nos tuiles sont conçues pour résister aux climats les plus rudes, du soleil brûlant de Marrakech aux pluies du Nord.',
      features: {
        durability: { title: 'Durabilité', desc: 'Résistance aux intempéries.' },
        tradition: { title: 'Tradition', desc: 'Savoir-faire artisanal.' },
        guarantee: { title: 'Garantie', desc: 'Certifié et garanti 30 ans.' },
      },
      cta: 'L\'excellence architecturale',
      history: {
        title: "L'excellence architecturale",
        content: "L'excellence architecturale commence par la qualité des spécificités. Dans le monde de la construction, ce sont les détails qui font la différence. Chez Tuile Baraka, nous sommes pleinement conscients de la valeur du temps, de la qualité et des normes techniques. C’est pourquoi nous avons sélectionné pour vous une gamme de tuiles certifiées selon les normes européennes, conçues pour résister aux défis climatiques et offrir à vos projets une longévité accrue ainsi qu’une esthétique intemporelle. Ensemble, nous bâtissons les monuments de demain.",
        milestones: []
      },
    },
    agencies: {
      title: 'Nos Agences au Maroc',
      description: 'Retrouvez-nous dans nos points de vente stratégiques pour un accompagnement personnalisé.',
      mapPlaceholder: 'Carte Interactive des Agences',
      mapLoading: 'Chargement de Google Maps...',
    },
    contact: {
      title: 'Contactez-nous',
      description: 'Une question ? Un projet de construction ou de rénovation ? Nos experts sont à votre écoute pour vous conseiller et vous établir un devis gratuit.',
      info: {
        phone: 'Téléphone',
        phoneValue: '+212 07 07 15 55 53 / +212 66 15 83 520',
        email: 'Email',
        emailValue: 'Tuilebaraka@gmail.com',
        address: 'Siège Social',
        addressValue: 'Avenue des FAR, Tour Atlas, Casablanca',
      },
      form: {
        name: 'Nom Complet',
        namePlaceholder: 'Votre nom',
        email: 'Email',
        emailPlaceholder: 'votre@email.com',
        subject: 'Sujet',
        subjects: ['Demande de devis', 'Renseignement technique', 'Devenir partenaire', 'Autre'],
        message: 'Message',
        messagePlaceholder: 'Comment pouvons-nous vous aider ?',
        submit: 'Envoyer le message',
        whatsapp: 'Contactez-nous sur WhatsApp',
      },
    },
    footer: {
      links: ['Mentions Légales', 'Politique de Confidentialité', 'CGV'],
      rights: 'Tous droits réservés.',
    },
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      products: 'منتجاتنا',
      about: 'من نحن',
      agencies: 'فروعنا',
      contact: 'اتصل بنا',
      quote: 'طلب عرض سعر مجاني',
    },
    hero: {
      badge: 'الجودة والأصالة',
      title: 'تيل بركة – التميز والجمال لـ',
      titleAccent: 'سقف منزلك',
      description: 'متخصصون مغاربة في القرميد عالي الجودة. نجمع بين الخبرة التقليدية والتقنيات الحديثة لحماية منزلك بشكل مستدام.',
      ctaPrimary: 'اكتشف منتجاتنا',
      ctaSecondary: 'اتصل بنا',
    },
    products: {
      title: 'مجموعات القرميد لدينا',
      description: 'مجموعة واسعة من الأشكال والألوان لتناسب جميع الأنماط المعمارية في المغرب.',
      viewDetails: 'عرض التفاصيل',
      categories: {
        classique: 'كلاسيكي',
        contemporain: 'عصري',
        tradition: 'تقليدي',
        authentique: 'أصيل',
        premium: 'فاخر',
        finition: 'لمسات نهائية',
      },
      items: {
        nova: {
          name: 'قرميد كلينكر نوفا',
          desc: 'قرميد فائق الحداثة يتميز بجمالية نقية ومقاومة استثنائية لصدمات الحرارة.',
          features: ['تقنية الكلينكر', 'امتصاص الماء أقل من 5%', 'مقاومة عالية للصقيع', 'ضمان 50 سنة'],
          specs: { 
            length: '447 مم', 
            width: '255 مم', 
            weight: '3,750 كجم',
            unitsPerM2: '11,5 – 12,5 قطعة',
            unitsPerPalette: '240 / 256 قطعة',
            usefulLength: '385 مم',
            usefulWidth: '220 مم',
            avgLongOverlap: '62 مم',
            avgTransOverlap: '35 مم',
            longPureau: '380 مم',
            transPureau: '355 – 385 مم',
            transAssemblyGap: '6 مم',
            slope: '19º – 35%'
          },
          colors: [
            { name: 'لون الفرميذ', hex: '#b23a2b' },
            { name: 'أسود', hex: '#000000' }
          ]
        },
        marseillaise: {
          name: 'قرميد كلينكر مرسيليا',
          desc: 'متانة مجموعة الكلينكر مدمجة مع التصميم الخالد لقرميد مرسيليا.',
          features: ['تعشيق مزدوج', 'عزل معزز', 'كفاءة عالية', 'مقاوم للصقيع'],
          specs: { 
            length: '456 مم', 
            width: '270 مم', 
            weight: '3,650 كجم',
            unitsPerM2: '10,8 قطعة',
            unitsPerPalette: '210 / 280 قطعة',
            usefulLength: '386 مم',
            usefulWidth: '231 مم',
            avgLongOverlap: '66 مم',
            avgTransOverlap: '44 مم',
            theoreticalPureau: '386 مم',
            longPureau: '370 – 397 مم',
            transPureau: '3 مم',
            slope: '19º – 35%'
          },
          colors: [
            { name: 'لون الفرميذ', hex: '#b23a2b' },
            { name: 'أسود', hex: '#000000' }
          ]
        },
        mixta: {
          name: 'قرميد كلينكر 11 (ميكستا)',
          desc: 'تعدد الاستخدامات والأناقة لقطعة قرميد تتكيف مع جميع ميولات الأسطح.',
          features: ['تعدد طرق التركيب', 'تصميم منحني', 'مظهر تقليدي', 'صلابة فائقة'],
          specs: { 
            length: '447 مم', 
            width: '255 مم', 
            weight: '3,750 كجم',
            unitsPerM2: '11,5 – 12,5 قطعة',
            unitsPerPalette: '240 قطعة',
            usefulLength: '385 مم',
            usefulWidth: '220 مم',
            avgLongOverlap: '62 مم',
            avgTransOverlap: '35 مم',
            theoreticalPureau: '380 مم',
            longPureau: '355 – 385 مم',
            transPureau: '220 – 225 مم',
            slope: '19º – 35%'
          },
          colors: [
            { name: 'لون الفرميذ', hex: '#b23a2b' },
            { name: 'أسود', hex: '#000000' }
          ]
        },
        plate: {
          name: 'قرميد كلينكر مسطح',
          desc: 'أناقة معمارية مطلقة، مثالي للتصاميم المعاصرة والبسيطة.',
          features: ['سطح أملس', 'تركيب متقاطع', 'تصميم معماري', 'قالب كبير'],
          specs: { 
            length: '447 مم', 
            width: '255 مم', 
            weight: '3,750 كجم',
            unitsPerM2: '11,5 – 12,5 قطعة',
            unitsPerPalette: '240 قطعة',
            usefulLength: '385 مم',
            usefulWidth: '220 مم',
            avgLongOverlap: '62 مم',
            avgTransOverlap: '35 مم',
            theoreticalPureau: '380 مم',
            longPureau: '355 – 385 مم',
            transPureau: '220 – 225 مم',
            slope: '19º – 35%'
          },
          colors: [
            { name: 'لون الفرميذ', hex: '#b23a2b' },
            { name: 'أسود', hex: '#000000' }
          ]
        },
        ardoise: {
          name: 'قرميد الأردواز',
          desc: 'أناقة اللون الرمادي الداكن لسقف متميز ومتين.',
          features: ['أناقة فاخرة', 'مظهر الأردواز', 'عمر طويل جداً', 'مظهر طبيعي'],
          specs: { length: '416 مم', width: '404 مم', weight: '3,30 كجم' },
          colors: [
            { name: 'لون الفرميذ', hex: '#b23a2b' },
            { name: 'أسود', hex: '#000000' }
          ]
        },
        accessoires: {
          name: 'إكسسوارات السقف',
          desc: 'كل ما تحتاجه لإنهاء مثالي وتهوية ممتازة لسقفك.',
          features: ['لمسات نهائية كاملة', 'تهوية السقف', 'عزل الحواف', 'تناسق جمالي'],
          specs: { length: '416 مم', width: '404 مم', weight: '3,30 كجم' },
          colors: [
            { name: 'لون الفرميذ', hex: '#b23a2b' },
            { name: 'أسود', hex: '#000000' }
          ]
        },
      },
      labels: {
        length: 'الطول',
        width: 'العرض',
        weight: 'الوزن',
        unitsPerM2: 'عدد القطع/م²',
        unitsPerPalette: 'عدد القطع/المنصة',
        usefulLength: 'الطول المفيد',
        usefulWidth: 'العرض المفيد',
        avgLongOverlap: 'متوسط التداخل الطولي',
        avgTransOverlap: 'متوسط التداخل العرضي',
        theoreticalPureau: 'المسافة النظرية بين العوارض',
        longPureau: 'المسافة الطولية بين العوارض',
        transPureau: 'المسافة العرضية بين العوارض',
        transAssemblyGap: 'فجوة التجميع العرضية',
        slope: 'أقل ميل مسموح',
        specs: 'المواصفات التقنية',
        colors: 'الألوان المتاحة'
      },
    },
    integratedSystems: {
      title: 'أنظمة الأسطح المتكاملة',
      description: 'اكتشف حلولنا التقنية المتقدمة للحصول على سقف عالي الأداء ومتين ومعزول تماماً.',
      badge: 'الدليل التقني',
      cta: 'استشر خبرائنا',
    },
    about: {
      title: 'أكثر من مجرد سقف، حماية لـ',
      titleAccent: 'تراثك',
      description: 'تأسست تيل بركة على قيم الجودة والثقة، وأصبحت الرائدة في مجال تغطية الأسطح في المغرب. قرميدنا مصمم لمقاومة أقسى الظروف المناخية.',
      features: {
        durability: { title: 'المتانة', desc: 'مقاومة للعوامل الجوية.' },
        tradition: { title: 'الأصالة', desc: 'خبرة حرفية متوارثة.' },
        guarantee: { title: 'الضمان', desc: 'معتمد ومضمون لمدة 30 عاماً.' },
      },
      cta: 'التميز المعماري',
      history: {
        title: 'التميز المعماري',
        content: 'التميز المعماري يبدأ بجودة الخصوصيات. في عالم البناء، التفاصيل هي التي تصنع الفارق. في تيل بركة، ندرك تماماً قيمة الوقت والجودة والمعايير التقنية. لهذا السبب اخترنا لكم مجموعة من القرميد المعتمد وفق المعايير الأوروبية، المصمم لمقاومة التحديات المناخية ومنح مشاريعكم عمراً أطول وجمالية خالدة. معاً، نبني معالم الغد.',
        milestones: []
      },
    },
    agencies: {
      title: 'فروعنا في المغرب',
      description: 'تجدوننا في نقاط بيع استراتيجية لمرافقتكم في مشاريعكم.',
      mapPlaceholder: 'خريطة تفاعلية للفروع',
      mapLoading: 'جاري تحميل الخريطة...',
    },
    contact: {
      title: 'اتصل بنا',
      description: 'لديك سؤال؟ مشروع بناء أو ترميم؟ خبراؤنا في خدمتكم لتقديم المشورة وعرض سعر مجاني.',
      info: {
        phone: 'الهاتف',
        phoneValue: '+212 07 07 15 55 53 / +212 66 15 83 520',
        email: 'البريد الإلكتروني',
        emailValue: 'Tuilebaraka@gmail.com',
        address: 'المقر الرئيسي',
        addressValue: 'شارع القوات المسلحة الملكية، برج أطلس، الدار البيضاء',
      },
      form: {
        name: 'الاسم الكامل',
        namePlaceholder: 'اسمك الكريم',
        email: 'البريد الإلكتروني',
        emailPlaceholder: 'votre@email.com',
        subject: 'الموضوع',
        subjects: ['طلب عرض سعر', 'استفسار تقني', 'شراكة', 'أخرى'],
        message: 'الرسالة',
        messagePlaceholder: 'كيف يمكننا مساعدتك؟',
        submit: 'إرسال الرسالة',
        whatsapp: 'تواصل معنا عبر واتساب',
      },
    },
    footer: {
      links: ['إشعار قانوني', 'سياسة الخصوصية', 'الشروط العامة'],
      rights: 'جميع الحقوق محفوظة.',
    },
  },
};
