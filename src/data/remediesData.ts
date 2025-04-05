
export interface Remedy {
  id: string;
  title: {
    en: string;
    hi: string;
  };
  category: string;
  ingredients: {
    en: string[];
    hi: string[];
  };
  method: {
    en: string[];
    hi: string[];
  };
  effectiveness: number; // 1-5
  timeToResult: string;
  postedBy: string;
  likes: number;
  saves: number;
  comments: number;
  image?: string;
}

export const remedies: Remedy[] = [
  {
    id: '1',
    title: {
      en: 'Turmeric Milk for Cold and Cough',
      hi: 'सर्दी-खांसी के लिए हल्दी वाला दूध'
    },
    category: 'health',
    ingredients: {
      en: [
        '1 cup milk',
        '1/2 teaspoon turmeric powder',
        '1/4 teaspoon black pepper',
        '1 teaspoon honey'
      ],
      hi: [
        '1 कप दूध',
        '1/2 छोटी चम्मच हल्दी पाउडर',
        '1/4 छोटी चम्मच काली मिर्च',
        '1 छोटी चम्मच शहद'
      ]
    },
    method: {
      en: [
        'Heat the milk in a small saucepan until it begins to simmer.',
        'Add turmeric powder and black pepper, stir well.',
        'Let it simmer for 2-3 minutes on low heat.',
        'Remove from heat and add honey when it cools down a bit.',
        'Drink while still warm, preferably before bedtime.'
      ],
      hi: [
        'दूध को एक छोटे बर्तन में गर्म करें जब तक कि वह उबलने न लगे।',
        'हल्दी पाउडर और काली मिर्च डालें, अच्छी तरह मिलाएं।',
        'धीमी आंच पर 2-3 मिनट तक उबलने दें।',
        'आंच से हटाकर थोड़ा ठंडा होने पर शहद मिलाएं।',
        'गुनगुना ही पिएं, विशेषकर सोने से पहले।'
      ]
    },
    effectiveness: 4,
    timeToResult: '1-2 days',
    postedBy: 'Sharma Daadi',
    likes: 234,
    saves: 112,
    comments: 46,
    image: '/turmeric-milk.jpg'
  },
  {
    id: '2',
    title: {
      en: 'Neem and Turmeric Face Pack for Acne',
      hi: 'मुंहासों के लिए नीम और हल्दी का फेस पैक'
    },
    category: 'skin_hair',
    ingredients: {
      en: [
        '2 tablespoons neem powder',
        '1 teaspoon turmeric powder',
        '1 tablespoon yogurt',
        '1 teaspoon honey'
      ],
      hi: [
        '2 बड़े चम्मच नीम पाउडर',
        '1 छोटी चम्मच हल्दी पाउडर',
        '1 बड़ा चम्मच दही',
        '1 छोटी चम्मच शहद'
      ]
    },
    method: {
      en: [
        'Mix neem powder and turmeric powder in a bowl.',
        'Add yogurt and honey to form a smooth paste.',
        'Cleanse your face and apply the paste evenly.',
        'Let it dry for 15-20 minutes.',
        'Rinse with lukewarm water and pat dry.',
        'Apply 2-3 times a week for best results.'
      ],
      hi: [
        'एक कटोरे में नीम पाउडर और हल्दी पाउडर मिलाएं।',
        'दही और शहद मिलाकर एक चिकना पेस्ट बनाएं।',
        'अपना चेहरा साफ करें और पेस्ट को समान रूप से लगाएं।',
        '15-20 मिनट तक सूखने दें।',
        'गुनगुने पानी से धोएं और हल्के हाथों से सुखाएं।',
        'सबसे अच्छे परिणामों के लिए सप्ताह में 2-3 बार लगाएं।'
      ]
    },
    effectiveness: 5,
    timeToResult: '2 weeks',
    postedBy: 'Gupta Aunty',
    likes: 456,
    saves: 301,
    comments: 87,
    image: '/neem-pack.jpg'
  },
  {
    id: '3',
    title: {
      en: 'Fenugreek Seeds for Hair Growth',
      hi: 'बालों के विकास के लिए मेथी के बीज'
    },
    category: 'skin_hair',
    ingredients: {
      en: [
        '2 tablespoons fenugreek seeds',
        '1 cup water',
        '2 tablespoons coconut oil'
      ],
      hi: [
        '2 बड़े चम्मच मेथी के बीज',
        '1 कप पानी',
        '2 बड़े चम्मच नारियल का तेल'
      ]
    },
    method: {
      en: [
        'Soak fenugreek seeds in water overnight.',
        'In the morning, grind them to form a paste.',
        'Mix the paste with coconut oil.',
        'Apply to your scalp and hair from roots to tips.',
        'Leave it on for 30-45 minutes.',
        'Rinse with a mild shampoo.',
        'Use 2 times a week for best results.'
      ],
      hi: [
        'मेथी के बीजों को रात भर पानी में भिगोएं।',
        'सुबह उन्हें पीसकर पेस्ट बना लें।',
        'पेस्ट को नारियल के तेल के साथ मिलाएं।',
        'अपने स्कैल्प और बालों पर जड़ों से नोक तक लगाएं।',
        '30-45 मिनट तक लगा रहने दें।',
        'मृदु शैम्पू से धो लें।',
        'सर्वोत्तम परिणामों के लिए सप्ताह में 2 बार उपयोग करें।'
      ]
    },
    effectiveness: 4,
    timeToResult: '1 month',
    postedBy: 'Patel Naani',
    likes: 321,
    saves: 189,
    comments: 53,
    image: '/fenugreek.jpg'
  },
  {
    id: '4',
    title: {
      en: 'Ginger Tea for Indigestion',
      hi: 'अपच के लिए अदरक वाली चाय'
    },
    category: 'health',
    ingredients: {
      en: [
        '1 inch fresh ginger',
        '1 cup water',
        '1/2 teaspoon tea leaves (optional)',
        '1/2 teaspoon honey'
      ],
      hi: [
        '1 इंच ताजा अदरक',
        '1 कप पानी',
        '1/2 छोटी चम्मच चाय की पत्ती (वैकल्पिक)',
        '1/2 छोटी चम्मच शहद'
      ]
    },
    method: {
      en: [
        'Grate or crush the fresh ginger.',
        'Boil water in a small pot.',
        'Add ginger and tea leaves (if using).',
        'Simmer for 5 minutes.',
        'Strain and add honey when slightly cooled.',
        'Drink while warm, preferably after meals.'
      ],
      hi: [
        'ताजे अदरक को कद्दूकस करें या कुचल लें।',
        'एक छोटे बर्तन में पानी उबालें।',
        'अदरक और चाय की पत्तियां डालें (अगर उपयोग कर रहे हैं)।',
        '5 मिनट तक धीमी आंच पर पकाएं।',
        'छानकर थोड़ा ठंडा होने पर शहद मिलाएं।',
        'गुनगुना पिएं, विशेषकर खाने के बाद।'
      ]
    },
    effectiveness: 5,
    timeToResult: 'immediate',
    postedBy: 'Verma Daadi',
    likes: 187,
    saves: 95,
    comments: 32,
    image: '/ginger-tea.jpg'
  },
  {
    id: '5',
    title: {
      en: 'Carom Seeds Water for Gas Relief',
      hi: 'गैस की समस्या के लिए अजवाइन का पानी'
    },
    category: 'health',
    ingredients: {
      en: [
        '1 teaspoon carom seeds (ajwain)',
        '1 cup water'
      ],
      hi: [
        '1 छोटी चम्मच अजवाइन',
        '1 कप पानी'
      ]
    },
    method: {
      en: [
        'Boil a cup of water.',
        'Add carom seeds to it.',
        'Cover and steep for 5-10 minutes.',
        'Strain and drink while warm.',
        'Best taken after meals or as needed for gas relief.'
      ],
      hi: [
        'एक कप पानी उबालें।',
        'इसमें अजवाइन डालें।',
        'ढककर 5-10 मिनट तक उबलने दें।',
        'छानकर गुनगुना पिएं।',
        'खाने के बाद या गैस की समस्या होने पर पिएं।'
      ]
    },
    effectiveness: 5,
    timeToResult: '15-30 minutes',
    postedBy: 'Sharma Chaachi',
    likes: 249,
    saves: 142,
    comments: 38,
    image: '/carom-seeds.jpg'
  },
  {
    id: '6',
    title: {
      en: 'Traditional Ubtan for Glowing Skin',
      hi: 'निखरी त्वचा के लिए पारंपरिक उबटन'
    },
    category: 'skin_hair',
    ingredients: {
      en: [
        '2 tablespoons gram flour (besan)',
        '1 teaspoon turmeric powder',
        '1 tablespoon yogurt',
        'Few drops of lemon juice',
        '1 teaspoon rose water'
      ],
      hi: [
        '2 बड़े चम्मच बेसन',
        '1 छोटी चम्मच हल्दी पाउडर',
        '1 बड़ा चम्मच दही',
        'कुछ बूंदें नींबू का रस',
        '1 छोटी चम्मच गुलाब जल'
      ]
    },
    method: {
      en: [
        'Mix gram flour and turmeric powder in a bowl.',
        'Add yogurt, lemon juice, and rose water.',
        'Mix well to form a smooth paste.',
        'Apply evenly on face and neck.',
        'Let it dry for 15-20 minutes.',
        'Moisten fingers with water and gently scrub in circular motions.',
        'Rinse with cool water.',
        'Use twice a week for best results.'
      ],
      hi: [
        'एक कटोरे में बेसन और हल्दी पाउडर मिलाएं।',
        'दही, नींबू का रस और गुलाब जल डालें।',
        'अच्छी तरह मिलाकर चिकना पेस्ट बनाएं।',
        'चेहरे और गर्दन पर समान रूप से लगाएं।',
        '15-20 मिनट तक सूखने दें।',
        'उंगलियों को पानी से गीला करें और धीरे-धीरे गोलाकार गति में रगड़ें।',
        'ठंडे पानी से धो लें।',
        'सर्वोत्तम परिणामों के लिए सप्ताह में दो बार उपयोग करें।'
      ]
    },
    effectiveness: 4,
    timeToResult: '2 weeks',
    postedBy: 'Agarwal Daadi',
    likes: 412,
    saves: 237,
    comments: 68,
    image: '/ubtan.jpg'
  },
];

export const categories = [
  { id: 'health', name: { en: 'Health', hi: 'स्वास्थ्य' }, icon: 'Pill' },
  { id: 'skin_hair', name: { en: 'Skin & Hair', hi: 'त्वचा और बाल' }, icon: 'Sparkles' },
  { id: 'kitchen', name: { en: 'Kitchen Hacks', hi: 'रसोई के टिप्स' }, icon: 'Utensils' },
  { id: 'baby_care', name: { en: 'Baby Care', hi: 'शिशु देखभाल' }, icon: 'Baby' },
  { id: 'seasonal', name: { en: 'Seasonal', hi: 'मौसमी' }, icon: 'Calendar' },
];

export const getRemediesByCategory = (categoryId: string): Remedy[] => {
  return remedies.filter(remedy => remedy.category === categoryId);
};

export const getRemedyById = (id: string): Remedy | undefined => {
  return remedies.find(remedy => remedy.id === id);
};
