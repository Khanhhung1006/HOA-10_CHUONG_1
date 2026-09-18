import { TheorySectionData, Flashcard, QuizQuestion } from '../../types';

export const lesson10Theory: TheorySectionData = {
  id: 'bai-10',
  chapterId: 'chuong-3',
  title: 'Bài 10: Hợp chất hữu cơ và hoá học hữu cơ',
  objectives: [
    'Nêu được khái niệm hợp chất hữu cơ và hoá học hữu cơ; đặc điểm chung của các hợp chất hữu cơ.',
    'Phân loại được hợp chất hữu cơ (hydrocarbon và dẫn xuất của hydrocarbon).',
    'Nêu được khái niệm nhóm chức và một số loại nhóm chức cơ bản ($-OH$, $-CHO$, $>C=O$, $-COOH$, $-COO-$, $-NH_2$, $-O-$, $-X$).',
    'Sử dụng được bảng tín hiệu phổ hồng ngoại (IR) để xác định một số nhóm chức cơ bản.'
  ],
  summary: 'Hợp chất hữu cơ là hợp chất của carbon (trừ $CO$, $CO_2$, muối carbonate, cyanide, carbide,...). Hoá học hữu cơ là ngành hoá học chuyên nghiên cứu các hợp chất hữu cơ. Hợp chất hữu cơ chủ yếu có liên kết cộng hoá trị, nhiệt độ sôi và nhiệt độ nóng chảy thấp, dễ cháy và phản ứng thường xảy ra chậm tạo ra hỗn hợp sản phẩm.',
  coreKnowledge: [
    {
      heading: '1. Khái niệm hợp chất hữu cơ và hoá học hữu cơ',
      points: [
        'Hợp chất hữu cơ là các hợp chất của carbon (trừ $CO$, $CO_2$, muối $CO_3^{2-}$, $HCO_3^-$, $CN^-$, $carbide$ như $CaC_2$, $Al_4C_3$,...).',
        'Hoá học hữu cơ là ngành hoá học chuyên nghiên cứu về các hợp chất hữu cơ (cấu tạo, tính chất, điều chế và ứng dụng).'
      ]
    },
    {
      heading: '2. Đặc điểm chung của các hợp chất hữu cơ',
      points: [
        'Thành phần nguyên tố: Nhất thiết phải chứa carbon, thường có hydrogen, oxygen, nitrogen, ngoài ra còn có halogen, sulfur, phosphorus,...',
        'Liên kết hoá học: Chủ yếu là liên kết cộng hoá trị (liên kết $C-C$, $C-H$, $C-O$, $C-N$,...).',
        'Tính chất vật lí: Thường có nhiệt độ nóng chảy và nhiệt độ sôi thấp (dễ bay hơi), ít tan hoặc không tan trong nước, tan nhiều trong các dung môi hữu cơ (như benzene, ether, acetone,...).',
        'Tính chất hoá học: Hầu hết dễ cháy, kém bền với nhiệt. Phản ứng hoá học của hợp chất hữu cơ thường xảy ra chậm, không hoàn toàn, theo nhiều hướng khác nhau tạo ra hỗn hợp sản phẩm (cần đun nóng hoặc có xúc tác).'
      ]
    },
    {
      heading: '3. Phân loại hợp chất hữu cơ',
      points: [
        'Hydrocarbon: Là hợp chất hữu cơ chỉ chứa hai nguyên tố carbon ($C$) và hydrogen ($H$). Được chia thành alkane (như $CH_4$), alkene (như $CH_2=CH_2$), alkyne (như $CH \equiv CH$), arene (như $C_6H_6$),...',
        'Dẫn xuất của hydrocarbon: Là hợp chất hữu cơ thu được khi thay thế một hay nhiều nguyên tử hydrogen trong phân tử hydrocarbon bằng nguyên tử hoặc nhóm nguyên tử khác. Phân loại gồm dẫn xuất halogen ($CH_3Cl$), alcohol ($C_2H_5OH$), aldehyde ($CH_3CHO$), carboxylic acid ($CH_3COOH$),...'
      ]
    },
    {
      heading: '4. Nhóm chức trong phân tử hợp chất hữu cơ',
      points: [
        'Khái niệm: Nhóm chức là nguyên tử hoặc nhóm nguyên tử trong phân tử gây ra những tính chất hoá học đặc trưng của hợp chất hữu cơ.',
        'Một số nhóm chức cơ bản:',
        '- Dẫn xuất halogen: nhóm chức $-X$ ($F, Cl, Br, I$). Ví dụ: $CH_3Cl$ (chloromethane).',
        '- Alcohol: nhóm chức $-OH$ (hydroxy). Ví dụ: $C_2H_5OH$ (ethanol).',
        '- Aldehyde: nhóm chức $-CHO$. Ví dụ: $CH_3CHO$ (acetaldehyde/ethanal).',
        '- Ketone: nhóm chức $>C=O$ (carbonyl). Ví dụ: $CH_3COCH_3$ (acetone/propanone).',
        '- Carboxylic acid: nhóm chức $-COOH$ (carboxyl). Ví dụ: $CH_3COOH$ (acetic acid/ethanoic acid).',
        '- Ester: nhóm chức $-COO-$. Ví dụ: $CH_3COOCH_3$ (methyl acetate).',
        '- Amine: nhóm chức $-NH_2$ (amino). Ví dụ: $CH_3NH_2$ (methanamine).',
        '- Ether: nhóm chức $-O-$. Ví dụ: $CH_3OCH_3$ (dimethyl ether).'
      ]
    },
    {
      heading: '5. Phổ hồng ngoại (IR) và xác định nhóm chức',
      points: [
        'Phương pháp phổ hồng ngoại (IR) dùng để nghiên cứu cấu tạo phân tử hợp chất hữu cơ thông qua sự hấp thụ bức xạ hồng ngoại của các liên kết.',
        'Số sóng hấp thụ đặc trưng của một số liên kết / nhóm chức trên phổ IR (đơn vị: $cm^{-1}$):',
        '- Nhóm $-OH$ (alcohol): $3500 - 3200\ cm^{-1}$ (peak rộng, mạnh).',
        '- Nhóm $-NH$ (amine): $3300 - 3000\ cm^{-1}$.',
        '- Nhóm $-C=O$ (carbonyl trong aldehyde, ketone, carboxylic acid, ester): $1750 - 1650\ cm^{-1}$ (peak nhọn, mạnh).',
        '- Nhóm $-OH$ (carboxylic acid): $3300 - 2500\ cm^{-1}$ (peak rất rộng).',
        '- Liên kết $C-H$: $3000 - 2800\ cm^{-1}$.'
      ]
    }
  ],
  formulas: [
    {
      name: 'Công thức tổng quát Hydrocarbon',
      latex: 'C_xH_y',
      description: 'Chất hữu cơ chỉ gồm nguyên tố C và H'
    },
    {
      name: 'Công thức tổng quát Dẫn xuất chứa C, H, O',
      latex: 'C_xH_yO_z',
      description: 'Hợp chất chứa carbon, hydrogen và oxygen'
    }
  ],
  keyConcepts: [
    {
      term: 'Hợp chất hữu cơ',
      definition: 'Hợp chất của carbon trừ CO, CO2, muối carbonate, cyanide, carbide,...'
    },
    {
      term: 'Nhóm chức',
      definition: 'Nguyên tử hoặc nhóm nguyên tử gây ra tính chất hoá học đặc trưng của hợp chất hữu cơ.'
    },
    {
      term: 'Phổ hồng ngoại (IR)',
      definition: 'Phương pháp vật lí ghi lại đồ thị độ truyền qua (%) theo số sóng (cm^-1) giúp xác định các nhóm chức có mặt trong phân tử.'
    }
  ],
  examples: [
    {
      title: 'Ví dụ 1: Phân loại chất hữu cơ',
      content: 'Cho các chất sau: $CH_4$, $C_2H_5OH$, $CO_2$, $CH_3COOH$, $CaCO_3$, $CH_3Cl$. Chất nào là hợp chất hữu cơ?',
      solution: 'Các hợp chất hữu cơ gồm: $CH_4$ (hydrocarbon), $C_2H_5OH$, $CH_3COOH$, $CH_3Cl$ (dẫn xuất hydrocarbon). $CO_2$ và $CaCO_3$ là hợp chất vô cơ.'
    },
    {
      title: 'Ví dụ 2: Dự đoán nhóm chức bằng phổ IR',
      content: 'Một hợp chất X có công thức phân tử $C_3H_6O$. Phổ IR của X xuất hiện tín hiệu hấp thụ mạnh tại $1715\ cm^{-1}$ và không có tín hiệu hấp thụ trong vùng $3500 - 3200\ cm^{-1}$. Dự đoán nhóm chức của X.',
      solution: 'Tín hiệu $1715\ cm^{-1}$ đặc trưng cho nhóm $>C=O$ (carbonyl). Không có hấp thụ $3500 - 3200\ cm^{-1}$ nên không có nhóm $-OH$. Vậy X có chứa nhóm chức ketone hoặc aldehyde.'
    }
  ],
  commonMistakes: [
    {
      mistake: 'Coi tất cả các hợp chất chứa nguyên tố Carbon đều là hợp chất hữu cơ.',
      correction: 'Cần loại trừ $CO$, $CO_2$, $H_2CO_3$, muối $CO_3^{2-}$, $HCO_3^-$, $CN^-$, các muối $carbide$ ($CaC_2, Al_4C_3$) vì chúng mang tính chất của hợp chất vô cơ.',
      why: 'Các chất này có cấu tạo và tính chất đặc trưng của hoá học vô cơ.'
    }
  ],
  memoryTips: [
    'Mẹo nhớ nhóm chức: Alcohol có $-OH$, Aldehyde có $-CHO$, Acid có $-COOH$, Ester có $-COO-$, Amine có $-NH_2$.',
    'Nhớ tín hiệu IR: $C=O$ nhọn sắc ở khoảng $1700\ cm^{-1}$, $-OH$ tù rộng ở trên $3200\ cm^{-1}$.'
  ],
  glossary: [
    {
      term: 'Hydrocarbon',
      meaning: 'Hợp chất hữu cơ tạo bởi 2 nguyên tố C và H.'
    },
    {
      term: 'Dẫn xuất hydrocarbon',
      meaning: 'Hợp chất hữu cơ ngoài C, H còn chứa các nguyên tố khác như O, N, S, Halogen,...'
    }
  ],
  reviewChecklist: [
    'Phân biệt được hợp chất hữu cơ và hợp chất vô cơ.',
    'Nêu được 4 đặc điểm chung của hợp chất hữu cơ.',
    'Nhận biết được các nhóm chức cơ bản trong công thức cấu tạo.',
    'Tra cứu và nhận diện tín hiệu nhóm chức trên phổ IR.'
  ]
};

export const lesson10Flashcards: Flashcard[] = [
  {
    id: 'fc-10-1',
    lessonId: 'bai-10',
    category: 'huu-co',
    front: 'Hợp chất hữu cơ là gì?',
    back: 'Là hợp chất của carbon (trừ $CO$, $CO_2$, muối carbonate, cyanide, carbide,...).'
  },
  {
    id: 'fc-10-2',
    lessonId: 'bai-10',
    category: 'huu-co',
    front: 'Nguyên tố nào nhất thiết phải có trong hợp chất hữu cơ?',
    back: 'Nguyên tố Carbon ($C$).'
  },
  {
    id: 'fc-10-3',
    lessonId: 'bai-10',
    category: 'huu-co',
    front: 'Liên kết hoá học chủ yếu trong hợp chất hữu cơ là gì?',
    back: 'Liên kết cộng hoá trị.'
  },
  {
    id: 'fc-10-4',
    lessonId: 'bai-10',
    category: 'huu-co',
    front: 'Đặc điểm về độ tan của đa số hợp chất hữu cơ?',
    back: 'Thường ít tan hoặc không tan trong nước, tan tốt trong các dung môi hữu cơ.'
  },
  {
    id: 'fc-10-5',
    lessonId: 'bai-10',
    category: 'huu-co',
    front: 'Đặc điểm tốc độ phản ứng của hợp chất hữu cơ?',
    back: 'Thường xảy ra chậm, không hoàn toàn, theo nhiều hướng khác nhau tạo ra hỗn hợp sản phẩm.'
  },
  {
    id: 'fc-10-6',
    lessonId: 'bai-10',
    category: 'huu-co',
    front: 'Hydrocarbon là gì?',
    back: 'Là hợp chất hữu cơ mà trong phân tử chỉ chứa 2 nguyên tố Carbon ($C$) và Hydrogen ($H$).'
  },
  {
    id: 'fc-10-7',
    lessonId: 'bai-10',
    category: 'huu-co',
    front: 'Dẫn xuất của hydrocarbon là gì?',
    back: 'Là hợp chất hữu cơ thu được khi thay thế một hay nhiều nguyên tử $H$ trong hydrocarbon bằng nguyên tử/nhóm nguyên tử khác.'
  },
  {
    id: 'fc-10-8',
    lessonId: 'bai-10',
    category: 'nhom-chuc',
    front: 'Nhóm chức là gì?',
    back: 'Là nguyên tử hoặc nhóm nguyên tử gây ra những tính chất hoá học đặc trưng của hợp chất hữu cơ.'
  },
  {
    id: 'fc-10-9',
    lessonId: 'bai-10',
    category: 'nhom-chuc',
    front: 'Nhóm chức của Alcohol là gì?',
    back: 'Nhóm $-OH$ (hydroxy).'
  },
  {
    id: 'fc-10-10',
    lessonId: 'bai-10',
    category: 'nhom-chuc',
    front: 'Nhóm chức của Carboxylic acid là gì?',
    back: 'Nhóm $-COOH$ (carboxyl).'
  },
  {
    id: 'fc-10-11',
    lessonId: 'bai-10',
    category: 'nhom-chuc',
    front: 'Nhóm chức của Aldehyde là gì?',
    back: 'Nhóm $-CHO$.'
  },
  {
    id: 'fc-10-12',
    lessonId: 'bai-10',
    category: 'nhom-chuc',
    front: 'Nhóm chức của Ketone là gì?',
    back: 'Nhóm $>C=O$ (carbonyl).'
  },
  {
    id: 'fc-10-13',
    lessonId: 'bai-10',
    category: 'nhom-chuc',
    front: 'Nhóm chức của Ester là gì?',
    back: 'Nhóm $-COO-$.'
  },
  {
    id: 'fc-10-14',
    lessonId: 'bai-10',
    category: 'nhom-chuc',
    front: 'Tín hiệu phổ IR của nhóm $>C=O$ nằm ở vùng nào?',
    back: 'Vùng $1750 - 1650\ cm^{-1}$ (peak nhọn, cường độ mạnh).'
  },
  {
    id: 'fc-10-15',
    lessonId: 'bai-10',
    category: 'nhom-chuc',
    front: 'Tín hiệu phổ IR của nhóm $-OH$ trong Alcohol nằm ở vùng nào?',
    back: 'Vùng $3500 - 3200\ cm^{-1}$ (peak tù, rộng).'
  }
];

export const lesson10Quizzes: QuizQuestion[] = [
  {
    id: 'q-10-1',
    lessonId: 'bai-10',
    question: 'Hợp chất nào sau đây là hợp chất hữu cơ?',
    options: [
      { id: 'A', text: '$CO_2$' },
      { id: 'B', text: '$CaCO_3$' },
      { id: 'C', text: '$CH_4$' },
      { id: 'D', text: '$Al_4C_3$' }
    ],
    correctAnswer: 'C',
    explanation: '$CH_4$ (methane) là hợp chất hữu cơ thuộc loại hydrocarbon. Các chất $CO_2$, $CaCO_3$, $Al_4C_3$ là hợp chất vô cơ.',
    difficulty: 'NhanBiet',
    source: 'SGK Hoá học 11 - Bài 10'
  },
  {
    id: 'q-10-2',
    lessonId: 'bai-10',
    question: 'Đặc điểm chung nào sau đây KHÔNG đúng với hợp chất hữu cơ?',
    options: [
      { id: 'A', text: 'Thành phần phân tử nhất thiết phải chứa nguyên tố carbon.' },
      { id: 'B', text: 'Liên kết hoá học chủ yếu là liên kết ion.' },
      { id: 'C', text: 'Thường có nhiệt độ sôi và nhiệt độ nóng chảy thấp.' },
      { id: 'D', text: 'Thường kém bền với nhiệt và dễ cháy.' }
    ],
    correctAnswer: 'B',
    explanation: 'Liên kết hoá học trong phân tử hợp chất hữu cơ chủ yếu là liên kết cộng hoá trị, không phải liên kết ion.',
    difficulty: 'NhanBiet',
    source: 'SBT Hoá học 11 - Bài 10'
  },
  {
    id: 'q-10-3',
    lessonId: 'bai-10',
    question: 'Dãy gồm các chất đều thuộc loại hydrocarbon là:',
    options: [
      { id: 'A', text: '$CH_4, C_2H_4, C_2H_5OH$' },
      { id: 'B', text: '$CH_4, C_2H_6, C_6H_6$' },
      { id: 'C', text: '$C_2H_2, CH_3Cl, C_3H_8$' },
      { id: 'D', text: '$C_6H_6, CH_3COOH, C_2H_4$' }
    ],
    correctAnswer: 'B',
    explanation: 'Hydrocarbon là hợp chất hữu cơ chỉ gồm 2 nguyên tố C và H. Dãy B gồm $CH_4, C_2H_6, C_6H_6$ đều chỉ chứa C và H.',
    difficulty: 'NhanBiet',
    source: 'SBT Hoá học 11 - Bài 10'
  },
  {
    id: 'q-10-4',
    lessonId: 'bai-10',
    question: 'Nhóm chức là gì?',
    options: [
      { id: 'A', text: 'Là nhóm nguyên tử làm cho chất dễ tan trong nước.' },
      { id: 'B', text: 'Là nguyên tử hoặc nhóm nguyên tử gây ra những tính chất hoá học đặc trưng của hợp chất hữu cơ.' },
      { id: 'C', text: 'Là nhóm nguyên tử quyết định khối lượng phân tử của chất.' },
      { id: 'D', text: 'Là nhóm nguyên tử giúp hợp chất hữu cơ phản ứng cực nhanh.' }
    ],
    correctAnswer: 'B',
    explanation: 'Theo định nghĩa SGK: Nhóm chức là nguyên tử hoặc nhóm nguyên tử trong phân tử gây ra những tính chất hoá học đặc trưng của hợp chất hữu cơ.',
    difficulty: 'NhanBiet',
    source: 'SGK Hoá học 11 - Bài 10'
  },
  {
    id: 'q-10-5',
    lessonId: 'bai-10',
    question: 'Hợp chất $C_2H_5OH$ chứa nhóm chức nào sau đây?',
    options: [
      { id: 'A', text: '$-CHO$' },
      { id: 'B', text: '$-COOH$' },
      { id: 'C', text: '$-OH$' },
      { id: 'D', text: '$-NH_2$' }
    ],
    correctAnswer: 'C',
    explanation: '$C_2H_5OH$ (ethanol) chứa nhóm $-OH$ (hydroxy), đặc trưng cho lớp hợp chất alcohol.',
    difficulty: 'NhanBiet',
    source: 'SGK Hoá học 11 - Bài 10'
  },
  {
    id: 'q-10-6',
    lessonId: 'bai-10',
    question: 'Hợp chất $CH_3COOH$ thuộc loại hợp chất nào?',
    options: [
      { id: 'A', text: 'Alcohol' },
      { id: 'B', text: 'Aldehyde' },
      { id: 'C', text: 'Carboxylic acid' },
      { id: 'D', text: 'Ester' }
    ],
    correctAnswer: 'C',
    explanation: '$CH_3COOH$ chứa nhóm $-COOH$ nên thuộc lớp hợp chất Carboxylic acid (acetic acid).',
    difficulty: 'NhanBiet',
    source: 'SBT Hoá học 11 - Bài 10'
  },
  {
    id: 'q-10-7',
    lessonId: 'bai-10',
    question: 'Trên phổ hồng ngoại (IR), tín hiệu hấp thụ đặc trưng của nhóm carbonyl ($>C=O$) xuất hiện ở vùng số sóng nào?',
    options: [
      { id: 'A', text: '$3500 - 3200\ cm^{-1}$' },
      { id: 'B', text: '$1750 - 1650\ cm^{-1}$' },
      { id: 'C', text: '$3000 - 2800\ cm^{-1}$' },
      { id: 'D', text: '$1200 - 1000\ cm^{-1}$' }
    ],
    correctAnswer: 'B',
    explanation: 'Liên kết $C=O$ trong nhóm carbonyl có tín hiệu hấp thụ mạnh, nhọn trong vùng $1750 - 1650\ cm^{-1}$.',
    difficulty: 'ThongHieu',
    source: 'SGK Hoá học 11 - Bài 10'
  },
  {
    id: 'q-10-8',
    lessonId: 'bai-10',
    question: 'Tín hiệu hấp thụ rộng trong vùng $3500 - 3200\ cm^{-1}$ trên phổ IR đặc trưng cho liên kết nào?',
    options: [
      { id: 'A', text: 'Liên kết $O-H$ của alcohol' },
      { id: 'B', text: 'Liên kết $C=O$ của aldehyde' },
      { id: 'C', text: 'Liên kết $C-Cl$ của dẫn xuất halogen' },
      { id: 'D', text: 'Liên kết $C=C$ của alkene' }
    ],
    correctAnswer: 'A',
    explanation: 'Liên kết $O-H$ trong alcohol hấp thụ bức xạ hồng ngoại tạo ra peak rộng mạnh ở vùng $3500 - 3200\ cm^{-1}$.',
    difficulty: 'ThongHieu',
    source: 'SBT Hoá học 11 - Bài 10'
  },
  {
    id: 'q-10-9',
    lessonId: 'bai-10',
    question: 'Cho các hợp chất hữu cơ: (1) $CH_3CH_2OH$, (2) $CH_3CHO$, (3) $CH_3COCH_3$, (4) $CH_3COOH$. Chất nào chứa nhóm chức aldehyde?',
    options: [
      { id: 'A', text: '(1)' },
      { id: 'B', text: '(2)' },
      { id: 'C', text: '(3)' },
      { id: 'D', text: '(4)' }
    ],
    correctAnswer: 'B',
    explanation: '(2) $CH_3CHO$ chứa nhóm $-CHO$ là nhóm chức của aldehyde.',
    difficulty: 'ThongHieu',
    source: 'SBT Hoá học 11 - Bài 10'
  },
  {
    id: 'q-10-10',
    lessonId: 'bai-10',
    question: 'Phản ứng của các hợp chất hữu cơ thường có đặc điểm:',
    options: [
      { id: 'A', text: 'Xảy ra rất nhanh và chỉ tạo ra một sản phẩm duy nhất.' },
      { id: 'B', text: 'Xảy ra chậm, không hoàn toàn, tạo ra hỗn hợp nhiều sản phẩm.' },
      { id: 'C', text: 'Xảy ra tức thì ở nhiệt độ phòng mà không cần xúc tác.' },
      { id: 'D', text: 'Là phản ứng trao đổi ion giữa các điện tích trái dấu.' }
    ],
    correctAnswer: 'B',
    explanation: 'Do liên kết trong hợp chất hữu cơ chủ yếu là liên kết cộng hoá trị nên phản ứng thường xảy ra chậm, tạo hỗn hợp sản phẩm.',
    difficulty: 'ThongHieu',
    source: 'SGK Hoá học 11 - Bài 10'
  }
];
