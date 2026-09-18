import { TheorySectionData, Flashcard, QuizQuestion } from '../../types';

export const lesson14Theory: TheorySectionData = {
  id: 'bai-14',
  chapterId: 'chuong-3',
  title: 'Bài 14: Ôn tập & Tổng kết Chương 3',
  objectives: [
    'Hệ thống hoá toàn bộ kiến thức đại cương về hoá học hữu cơ: khái niệm, phân loại, nhóm chức, tinh chế, CTPT và cấu tạo hoá học.',
    'So sánh bản chất và ứng dụng của các phương pháp chưng cất, chiết, kết tinh, sắc kí cột.',
    'Vận dụng kết hợp phổ khối lượng (MS) và phổ hồng ngoại (IR) để xác định phân tử khối và nhóm chức chất hữu cơ.',
    'Hoàn thành bài kiểm tra trắc nghiệm tổng hợp Chương 3 với lời giải chi tiết 100% chuẩn SGK/SBT.'
  ],
  summary: 'Chương 3 đặt nền móng cho hoá học hữu cơ lớp 11: Khái niệm hợp chất hữu cơ (chứa C), 4 phương pháp tinh chế chính (chưng cất, chiết, kết tinh, sắc kí), phổ MS xác định phân tử khối M, phổ IR xác định nhóm chức, thuyết cấu tạo Butlerov, đồng phân và đồng đẳng.',
  coreKnowledge: [
    {
      heading: '1. Bảng hệ thống các phương pháp tách biệt và tinh chế',
      points: [
        '• Chưng cất: Dựa vào nhiệt độ sôi khác nhau. Dùng tách các chất lỏng có nhiệt độ sôi khác nhau (như tách ethanol từ bã rượu, chưng cất dầu mỏ).',
        '• Chiết: Dựa vào độ tan khác nhau trong 2 môi trường không trộn lẫn. Dùng phễu chiết để tách chất lỏng (như chiết beta-carotene bằng hexane) hoặc ngâm chiết lỏng - rắn (như ngâm rượu thuốc).',
        '• Kết tinh: Dựa vào sự thay đổi độ tan của chất rắn theo nhiệt độ. Dùng tinh chế chất rắn (như tinh chế đường thô thành đường tinh khiết).',
        '• Sắc kí cột: Dựa vào sự phân bố khác nhau giữa pha động và pha tĩnh. Dùng tách hỗn hợp chất có hàm lượng nhỏ và khó tách.'
      ]
    },
    {
      heading: '2. Sơ đồ xác định Công thức phân tử từ Phổ MS và IR',
      points: [
        '1. Dữ liệu phân tích nguyên tố (%C, %H, %O, %N) $\\rightarrow$ Công thức đơn giản nhất $C_pH_qO_r$.',
        '2. Phổ khối lượng (MS) $\\rightarrow$ Peak ion phân tử $[M^+]$ tại giá trị $m/z \\rightarrow$ Phân tử khối $M$.',
        '3. Thiết lập $CTPT = (CTĐGN)_n \\Rightarrow n = \\frac{M}{M_{CTĐGN}} \\rightarrow C_xH_yO_z$.',
        '4. Phổ hồng ngoại (IR) $\\rightarrow$ Nhận diện nhóm chức đặc trưng ($-OH, -CHO, >C=O, -COOH, -NH_2$) $\\rightarrow$ Công thức cấu tạo.'
      ]
    },
    {
      heading: '3. Phân biệt Đồng phân và Đồng đẳng',
      points: [
        '• Đồng phân: CÙNG công thức phân tử ($CTPT$), KHÁC công thức cấu tạo ($CTCT$). Có đồng phân mạch carbon, đồng phân nhóm chức, đồng phân vị trí nhóm chức.',
        '• Đồng đẳng: CÙNG tính chất hoá học tương tự (cùng dãy), KHÁC THÀNH PHẦN phân tử hơn kém nhau một hay nhiều nhóm $-CH_2-$.'
      ]
    }
  ],
  formulas: [
    {
      name: 'Thiết lập CTPT tổng hợp',
      latex: 'x : y : z = \\frac{\\%C}{12} : \\frac{\\%H}{1} : \\frac{\\%O}{16} \\Rightarrow CTPT = (CTĐGN)_n',
      description: 'Quy trình chuẩn lập CTPT từ phân tích nguyên tố và phổ MS'
    }
  ],
  keyConcepts: [
    {
      term: 'Phổ IR & MS',
      definition: 'IR xác định nhóm chức; MS xác định phân tử khối M.'
    },
    {
      term: 'Đồng phân & Đồng đẳng',
      definition: 'Hai khái niệm cốt lõi phân biệt cấu tạo hợp chất hữu cơ.'
    }
  ],
  examples: [
    {
      title: 'Bài tập tổng hợp: Xác định CTCT chất X',
      content: 'Một chất hữu cơ X chứa $60,0\\%C, 13,3\\%H$ và $26,7\\%O$. Phổ MS có peak $[M^+]$ tại $m/z = 60$. Phổ IR có peak hấp thụ rộng tại $3350\ cm^{-1}$. Xác định CTCT của X.',
      solution: '1. Tỉ lệ $n_C : n_H : n_O = \\frac{60}{12} : \\frac{13,3}{1} : \\frac{26,7}{16} = 5 : 13,3 : 1,67 = 3 : 8 : 1 \\Rightarrow$ CTĐGN là $C_3H_8O$.\n2. Phân tử khối từ MS $M = 60 \\Rightarrow (C_3H_8O)_n = 60n = 60 \\Rightarrow n = 1 \\Rightarrow CTPT: C_3H_8O$.\n3. Phổ IR có $3350\ cm^{-1}$ tù rộng $\\Rightarrow$ Có nhóm $-OH$ (alcohol).\n4. Vậy X có CTCT là $CH_3-CH_2-CH_2-OH$ (propan-1-ol) hoặc $CH_3-CH(OH)-CH_3$ (propan-2-ol).'
    }
  ],
  commonMistakes: [
    {
      mistake: 'Quên kiểm tra nhóm chức từ phổ IR khi đề bài yêu cầu xác định công thức cấu tạo.',
      correction: 'Cần kết hợp peak IR để khẳng định loại nhóm chức (như -OH hay -CHO hay -COOH) trước khi viết công thức cấu tạo.',
      why: 'Nhiều chất có cùng CTPT (đồng phân nhóm chức) nên nếu thiếu dữ liệu IR sẽ không chọn được CTCT đúng.'
    }
  ],
  memoryTips: [
    'Tóm tắt Chương 3: Khái niệm -> Tinh chế -> CTPT (MS) -> CTCT (IR) -> Đồng phân / Đồng đẳng.'
  ],
  glossary: [
    {
      term: 'Sơ đồ liên kết',
      meaning: 'Sơ đồ logic kết hợp phổ MS, phổ IR và phân tích nguyên tố để xác định công thức hợp chất hữu cơ.'
    }
  ],
  reviewChecklist: [
    'Nắm vững 4 phương pháp tách biệt tinh chế.',
    'Đọc hiểu phổ MS tìm M và phổ IR tìm nhóm chức.',
    'Lập CTPT và viết đúng các đồng phân cấu tạo.',
    'Làm hoàn chỉnh đề thi tổng hợp Chương 3.'
  ]
};

export const lesson14Flashcards: Flashcard[] = [
  {
    id: 'fc-14-1',
    lessonId: 'bai-14',
    category: 'huu-co',
    front: 'Phương pháp nào dùng để xác định phân tử khối M của hợp chất hữu cơ?',
    back: 'Phương pháp phổ khối lượng (MS - Mass Spectrometry).'
  },
  {
    id: 'fc-14-2',
    lessonId: 'bai-14',
    category: 'huu-co',
    front: 'Phương pháp nào dùng để nhận biết nhóm chức trong phân tử chất hữu cơ?',
    back: 'Phương pháp phổ hồng ngoại (IR - Infrared Spectroscopy).'
  },
  {
    id: 'fc-14-3',
    lessonId: 'bai-14',
    category: 'tinh-che',
    front: 'Để tách hai chất lỏng có nhiệt độ sôi chênh lệch nhiều, dùng phương pháp nào?',
    back: 'Chưng cất thường.'
  },
  {
    id: 'fc-14-4',
    lessonId: 'bai-14',
    category: 'tinh-che',
    front: 'Để tách hai chất lỏng không tan vào nhau, dùng dụng cụ gì?',
    back: 'Phễu chiết (phương pháp chiết lỏng - lỏng).'
  },
  {
    id: 'fc-14-5',
    lessonId: 'bai-14',
    category: 'tinh-che',
    front: 'Để tinh chế chất rắn dựa trên độ tan theo nhiệt độ, dùng phương pháp nào?',
    back: 'Phương pháp kết tinh.'
  },
  {
    id: 'fc-14-6',
    lessonId: 'bai-14',
    category: 'ctpt',
    front: 'Phần trăm khối lượng các nguyên tố giúp tìm ra công thức nào trước?',
    back: 'Công thức đơn giản nhất (CTĐGN).'
  },
  {
    id: 'fc-14-7',
    lessonId: 'bai-14',
    category: 'cau-tao',
    front: 'Đồng phân nhóm chức của Ethanol ($CH_3-CH_2-OH$) là chất nào?',
    back: 'Dimethyl ether ($CH_3-O-CH_3$).'
  },
  {
    id: 'fc-14-8',
    lessonId: 'bai-14',
    category: 'cau-tao',
    front: 'Chất nào là đồng đẳng kế tiếp của $CH_3OH$?',
    back: '$C_2H_5OH$ (Ethanol).'
  },
  {
    id: 'fc-14-9',
    lessonId: 'bai-14',
    category: 'nhom-chuc',
    front: 'Peak IR ở $1715\ cm^{-1}$ chỉ ra nhóm chức nào?',
    back: 'Nhóm chức carbonyl ($>C=O$) của aldehyde, ketone, acid hoặc ester.'
  },
  {
    id: 'fc-14-10',
    lessonId: 'bai-14',
    category: 'nhom-chuc',
    front: 'Peak IR rộng ở $3300\ cm^{-1}$ chỉ ra nhóm chức nào?',
    back: 'Nhóm hydroxy ($-OH$) của alcohol.'
  },
  {
    id: 'fc-14-11',
    lessonId: 'bai-14',
    category: 'huu-co',
    front: 'Phản ứng hữu cơ thường cần điều kiện gì do tốc độ xảy ra chậm?',
    back: 'Thường cần đun nóng và sử dụng chất xúc tác thích hợp.'
  },
  {
    id: 'fc-14-12',
    lessonId: 'bai-14',
    category: 'cau-tao',
    front: 'Carbon trong chất hữu cơ có mấy hoá trị?',
    back: 'Luôn có hoá trị IV.'
  },
  {
    id: 'fc-14-13',
    lessonId: 'bai-14',
    category: 'ctpt',
    front: 'Chất có CTPT $C_3H_6O_2$ và $M = 74$, CTĐGN là gì?',
    back: '$C_3H_6O_2$ (vì tỉ lệ 3:6:2 không thể rút gọn thêm).'
  },
  {
    id: 'fc-14-14',
    lessonId: 'bai-14',
    category: 'tinh-che',
    front: 'Phương pháp nào tách chất dựa trên sự hấp phụ giữa pha động và pha tĩnh?',
    back: 'Sắc kí cột.'
  },
  {
    id: 'fc-14-15',
    lessonId: 'bai-14',
    category: 'huu-co',
    front: 'Tại sao chất hữu cơ thường có nhiệt độ sôi thấp hơn chất vô cơ?',
    back: 'Vì liên kết giữa các phân tử hữu cơ là lực liên phân tử yếu (hoặc lk hydrogen), liên kết trong phân tử là cộng hoá trị.'
  }
];

export const finalChapter3ExamQuizzes: QuizQuestion[] = [
  {
    id: 'q-14-1',
    lessonId: 'final-exam-c3',
    question: 'Hợp chất nào sau đây KHÔNG thuộc loại hợp chất hữu cơ?',
    options: [
      { id: 'A', text: '$CH_3Cl$' },
      { id: 'B', text: '$CH_3COONa$' },
      { id: 'C', text: '$NaHCO_3$' },
      { id: 'D', text: '$C_2H_2$' }
    ],
    correctAnswer: 'C',
    explanation: '$NaHCO_3$ là muối hydrogen carbonate của kim loại alkali, thuộc hợp chất vô cơ.',
    difficulty: 'NhanBiet',
    source: 'SGK Hoá học 11 - Ôn tập Chương 3'
  },
  {
    id: 'q-14-2',
    lessonId: 'final-exam-c3',
    question: 'Phương pháp chưng cất dùng để tách các chất dựa trên sự khác biệt về:',
    options: [
      { id: 'A', text: 'Độ tan trong dung môi' },
      { id: 'B', text: 'Nhiệt độ sôi' },
      { id: 'C', text: 'Khối lượng riêng' },
      { id: 'D', text: 'Khả năng hấp phụ' }
    ],
    correctAnswer: 'B',
    explanation: 'Chưng cất dựa vào nhiệt độ sôi khác nhau của các chất lỏng trong hỗn hợp.',
    difficulty: 'NhanBiet',
    source: 'SGK Hoá học 11 - Ôn tập Chương 3'
  },
  {
    id: 'q-14-3',
    lessonId: 'final-exam-c3',
    question: 'Dụng cụ dùng để tách hai chất lỏng không trộn lẫn vào nhau trong phương pháp chiết là:',
    options: [
      { id: 'A', text: 'Cốc thuỷ tinh' },
      { id: 'B', text: 'Phễu chiết' },
      { id: 'C', text: 'Ống nghiệm' },
      { id: 'D', text: 'Bình cầu có nhánh' }
    ],
    correctAnswer: 'B',
    explanation: 'Phễu chiết có khoá xả ở đáy dùng để tách hai lớp chất lỏng không tan vào nhau.',
    difficulty: 'NhanBiet',
    source: 'SBT Hoá học 11 - Ôn tập Chương 3'
  },
  {
    id: 'q-14-4',
    lessonId: 'final-exam-c3',
    question: 'Peak ion phân tử $[M^+]$ trên phổ khối lượng MS của chất hữu cơ X có giá trị $m/z = 60$. Phân tử khối của X là:',
    options: [
      { id: 'A', text: '30 g/mol' },
      { id: 'B', text: '60 g/mol' },
      { id: 'C', text: '120 g/mol' },
      { id: 'D', text: '45 g/mol' }
    ],
    correctAnswer: 'B',
    explanation: 'Giá trị $m/z$ của peak ion phân tử $[M^+]$ chính bằng phân tử khối $M = 60\ g/mol$.',
    difficulty: 'NhanBiet',
    source: 'SGK Hoá học 11 - Ôn tập Chương 3'
  },
  {
    id: 'q-14-5',
    lessonId: 'final-exam-c3',
    question: 'Tín hiệu hấp thụ mạnh nhọn ở vùng $1715\ cm^{-1}$ trên phổ hồng ngoại (IR) đặc trưng cho nhóm chức nào?',
    options: [
      { id: 'A', text: 'Nhóm hydroxy ($-OH$)' },
      { id: 'B', text: 'Nhóm amino ($-NH_2$)' },
      { id: 'C', text: 'Nhóm carbonyl ($>C=O$)' },
      { id: 'D', text: 'Nhóm ether ($-O-$)' }
    ],
    correctAnswer: 'C',
    explanation: 'Tín hiệu $1750 - 1650\ cm^{-1}$ đặc trưng cho nhóm carbonyl ($>C=O$).',
    difficulty: 'ThongHieu',
    source: 'SGK Hoá học 11 - Ôn tập Chương 3'
  },
  {
    id: 'q-14-6',
    lessonId: 'final-exam-c3',
    question: 'Trong hợp chất hữu cơ, nguyên tử carbon có hoá trị mấy và có thể tạo nên các loại mạch carbon nào?',
    options: [
      { id: 'A', text: 'Hoá trị II; chỉ tạo mạch hở thẳng.' },
      { id: 'B', text: 'Hoá trị IV; tạo mạch hở không nhánh, mạch hở phân nhánh và mạch vòng.' },
      { id: 'C', text: 'Hoá trị IV; chỉ tạo mạch vòng.' },
      { id: 'D', text: 'Hoá trị III; tạo mạch hở và mạch vòng.' }
    ],
    correctAnswer: 'B',
    explanation: 'Nguyên tử C có hoá trị IV và có khả năng liên kết với nhau tạo mạch hở thẳng, mạch nhánh và mạch vòng.',
    difficulty: 'NhanBiet',
    source: 'SGK Hoá học 11 - Ôn tập Chương 3'
  },
  {
    id: 'q-14-7',
    lessonId: 'final-exam-c3',
    question: 'Cặp chất nào sau đây là đồng phân của nhau?',
    options: [
      { id: 'A', text: '$CH_3-CH_2-OH$ và $CH_3-O-CH_3$' },
      { id: 'B', text: '$CH_3-OH$ và $CH_3-CH_2-OH$' },
      { id: 'C', text: '$CH_4$ và $C_2H_6$' },
      { id: 'D', text: '$CH_3COOH$ và $CH_3CH_2COOH$' }
    ],
    correctAnswer: 'A',
    explanation: 'Cả 2 chất đều có CTPT là $C_2H_6O$ nhưng có CTCT khác nhau $\\Rightarrow$ Là cặp chất đồng phân.',
    difficulty: 'ThongHieu',
    source: 'SBT Hoá học 11 - Ôn tập Chương 3'
  },
  {
    id: 'q-14-8',
    lessonId: 'final-exam-c3',
    question: 'Cặp chất nào sau đây thuộc cùng một dãy đồng đẳng?',
    options: [
      { id: 'A', text: '$CH_3OH$ và $CH_3OCH_3$' },
      { id: 'B', text: '$CH_3COOH$ và $C_2H_5COOH$' },
      { id: 'C', text: '$C_2H_4$ và $C_3H_8$' },
      { id: 'D', text: '$C_6H_6$ và $C_6H_5CH_3$ nhưng không có nhóm $-CH_2-$' }
    ],
    correctAnswer: 'B',
    explanation: '$CH_3COOH$ và $C_2H_5COOH$ cùng là carboxylic acid no, đơn chức, hơn kém nhau 1 nhóm $-CH_2- \\Rightarrow$ Đồng đẳng.',
    difficulty: 'ThongHieu',
    source: 'SBT Hoá học 11 - Ôn tập Chương 3'
  },
  {
    id: 'q-14-9',
    lessonId: 'final-exam-c3',
    question: 'Một chất hữu cơ chứa $85,7\\%C$ và $14,3\\%H$ về khối lượng. Công thức đơn giản nhất của chất đó là:',
    options: [
      { id: 'A', text: '$CH$' },
      { id: 'B', text: '$CH_2$' },
      { id: 'C', text: '$CH_3$' },
      { id: 'D', text: '$C_2H_3$' }
    ],
    correctAnswer: 'B',
    explanation: '$x : y = \\frac{85,7}{12} : \\frac{14,3}{1} = 7,14 : 14,3 = 1 : 2 \\Rightarrow CH_2$.',
    difficulty: 'ThongHieu',
    source: 'SBT Hoá học 11 - Ôn tập Chương 3'
  },
  {
    id: 'q-14-10',
    lessonId: 'final-exam-c3',
    question: 'Hợp chất X có công thức đơn giản nhất là $CH_2O$ và phân tử khối $M = 90$. Công thức phân tử của X là:',
    options: [
      { id: 'A', text: '$C_2H_4O_2$' },
      { id: 'B', text: '$C_3H_6O_3$' },
      { id: 'C', text: '$C_4H_8O_4$' },
      { id: 'D', text: '$C_6H_{12}O_6$' }
    ],
    correctAnswer: 'B',
    explanation: '$(CH_2O)_n = 30n = 90 \\Rightarrow n = 3 \\Rightarrow C_3H_6O_3$ (lactic acid).',
    difficulty: 'ThongHieu',
    source: 'SBT Hoá học 11 - Ôn tập Chương 3'
  },
  {
    id: 'q-14-11',
    lessonId: 'final-exam-c3',
    question: 'Ứng với CTPT $C_3H_8O$ có bao nhiêu đồng phân cấu tạo?',
    options: [
      { id: 'A', text: '1' },
      { id: 'B', text: '2' },
      { id: 'C', text: '3' },
      { id: 'D', text: '4' }
    ],
    correctAnswer: 'C',
    explanation: '$C_3H_8O$ có 3 đồng phân: 2 alcohol ($CH_3CH_2CH_2OH$, $CH_3CH(OH)CH_3$) và 1 ether ($CH_3-O-CH_2CH_3$).',
    difficulty: 'ThongHieu',
    source: 'SBT Hoá học 11 - Ôn tập Chương 3'
  },
  {
    id: 'q-14-12',
    lessonId: 'final-exam-c3',
    question: 'Đun nóng hỗn hợp gồm ethanol ($78,3\ ^o C$) và nước ($100\ ^o C$), chất nào sẽ ngưng tụ thu được trước?',
    options: [
      { id: 'A', text: 'Nước thu được trước' },
      { id: 'B', text: 'Ethanol thu được trước' },
      { id: 'C', text: 'Cả hai cùng bay hơi ngưng tụ đồng thời tỉ lệ 1:1' },
      { id: 'D', text: 'Không chất nào bay hơi' }
    ],
    correctAnswer: 'B',
    explanation: 'Ethanol có nhiệt độ sôi thấp hơn nước nên sẽ sôi và bay hơi trước, đi qua sinh hàn ngưng tụ thu được trước.',
    difficulty: 'NhanBiet',
    source: 'SGK Hoá học 11 - Ôn tập Chương 3'
  },
  {
    id: 'q-14-13',
    lessonId: 'final-exam-c3',
    question: 'Nối tên nhóm chức với công thức cấu tạo tương ứng:\n(1) Carboxylic acid -> (a) $-CHO$\n(2) Aldehyde -> (b) $-OH$\n(3) Alcohol -> (c) $-COOH$',
    options: [
      { id: 'A', text: '(1)-(c), (2)-(a), (3)-(b)' },
      { id: 'B', text: '(1)-(a), (2)-(b), (3)-(c)' },
      { id: 'C', text: '(1)-(b), (2)-(c), (3)-(a)' },
      { id: 'D', text: '(1)-(c), (2)-(b), (3)-(a)' }
    ],
    correctAnswer: 'A',
    explanation: 'Carboxylic acid là $-COOH$; Aldehyde là $-CHO$; Alcohol là $-OH$.',
    difficulty: 'NhanBiet',
    source: 'SGK Hoá học 11 - Ôn tập Chương 3'
  },
  {
    id: 'q-14-14',
    lessonId: 'final-exam-c3',
    question: 'Để làm tinh sạch tinh thể đường cát thô màu vàng thành đường tinh khiết trắng, người ta dùng phương pháp nào?',
    options: [
      { id: 'A', text: 'Chiết lỏng - lỏng bằng hexane' },
      { id: 'B', text: 'Kết tinh lại kết hợp hấp phụ màu bằng than hoạt tính' },
      { id: 'C', text: 'Chưng cất lôi cuốn hơi nước' },
      { id: 'D', text: 'Sắc kí cột' }
    ],
    correctAnswer: 'B',
    explanation: 'Hoà tan đường thô trong nước nóng, dùng than hoạt tính hấp phụ chất màu, lọc nóng rồi làm lạnh cô đặc cho đường kết tinh.',
    difficulty: 'ThongHieu',
    source: 'SGK Hoá học 11 - Ôn tập Chương 3'
  },
  {
    id: 'q-14-15',
    lessonId: 'final-exam-c3',
    question: 'Chất nào sau đây chứa nhóm chức Ester ($-COO-$)?',
    options: [
      { id: 'A', text: '$CH_3COOH$' },
      { id: 'B', text: '$CH_3COOCH_3$' },
      { id: 'C', text: '$CH_3CHO$' },
      { id: 'D', text: '$CH_3OCH_3$' }
    ],
    correctAnswer: 'B',
    explanation: '$CH_3COOCH_3$ (methyl acetate) có nhóm chức $-COO-$ đặc trưng cho ester.',
    difficulty: 'NhanBiet',
    source: 'SBT Hoá học 11 - Ôn tập Chương 3'
  },
  {
    id: 'q-14-16',
    lessonId: 'final-exam-c3',
    question: 'Đốt cháy hoàn toàn 1 mol chất hữu cơ X thu được đúng 1 mol $CO_2$ và 2 mol $H_2O$. Công thức phân tử của X có thể là:',
    options: [
      { id: 'A', text: '$CH_4$' },
      { id: 'B', text: '$C_2H_4$' },
      { id: 'C', text: '$C_2H_6$' },
      { id: 'D', text: '$C_3H_8$' }
    ],
    correctAnswer: 'A',
    explanation: '$n_C = n_{CO_2} = 1 \\Rightarrow$ Có 1 nguyên tử C. $n_H = 2 \\cdot n_{H_2O} = 4 \\Rightarrow$ Có 4 nguyên tử H. Phân tử X là $CH_4$.',
    difficulty: 'VanDung',
    source: 'SBT Hoá học 11 - Ôn tập Chương 3'
  },
  {
    id: 'q-14-17',
    lessonId: 'final-exam-c3',
    question: 'So sánh độ tan trong nước của hợp chất hữu cơ và hợp chất vô cơ, phát biểu nào ĐÚNG?',
    options: [
      { id: 'A', text: 'Đa số chất hữu cơ tan rất tốt trong nước, không tan trong dung môi hữu cơ.' },
      { id: 'B', text: 'Đa số chất hữu cơ không tan hoặc ít tan trong nước, tan tốt trong dung môi hữu cơ.' },
      { id: 'C', text: 'Tất cả các chất hữu cơ đều tan vô hạn trong nước.' },
      { id: 'D', text: 'Độ tan của chất hữu cơ không phụ thuộc vào loại nhóm chức.' }
    ],
    correctAnswer: 'B',
    explanation: 'Các chất hữu cơ thường không phân cực hoặc phân cực yếu nên ít tan trong nước, tan tốt trong các dung môi hữu cơ.',
    difficulty: 'NhanBiet',
    source: 'SGK Hoá học 11 - Ôn tập Chương 3'
  },
  {
    id: 'q-14-18',
    lessonId: 'final-exam-c3',
    question: 'Chất X có công thức phân tử $C_3H_6O_2$. Phổ IR của X xuất hiện tín hiệu ở $1720\ cm^{-1}$ ($>C=O$) và $3000 - 2500\ cm^{-1}$ (rất rộng của $-OH$ acid). Công thức cấu tạo của X là:',
    options: [
      { id: 'A', text: '$CH_3-CO-OCH_3$' },
      { id: 'B', text: '$HCOO-CH_2CH_3$' },
      { id: 'C', text: '$CH_3-CH_2-COOH$' },
      { id: 'D', text: '$HO-CH_2-CH_2-CHO$' }
    ],
    correctAnswer: 'C',
    explanation: 'Peak $1720\ cm^{-1}$ ($C=O$) kết hợp peak tù rộng $3000 - 2500\ cm^{-1}$ ($O-H$ acid) khẳng định nhóm $-COOH$. Chất X là $CH_3CH_2COOH$ (propanoic acid).',
    difficulty: 'VanDung',
    source: 'SBT Hoá học 11 - Ôn tập Chương 3'
  },
  {
    id: 'q-14-19',
    lessonId: 'final-exam-c3',
    question: 'Phương pháp sắc kí cột sử dụng pha tĩnh thường là chất nào sau đây?',
    options: [
      { id: 'A', text: 'Nước cất' },
      { id: 'B', text: 'Silica gel ($SiO_2 \\cdot xH_2O$) hoặc Aluminium oxide' },
      { id: 'C', text: 'Dung môi Hexane' },
      { id: 'D', text: 'Khí Nitrogen' }
    ],
    correctAnswer: 'B',
    explanation: 'Pha tĩnh trong sắc kí cột thường là chất hấp phụ rắn có diện tích bề mặt lớn như bột silica gel hoặc alumina.',
    difficulty: 'NhanBiet',
    source: 'SGK Hoá học 11 - Ôn tập Chương 3'
  },
  {
    id: 'q-14-20',
    lessonId: 'final-exam-c3',
    question: 'Đốt cháy hoàn toàn 4,4 g hợp chất hữu cơ Y (chứa C, H, O) thu được 8,8 g $CO_2$ và 3,6 g $H_2O$. Phân tử khối của Y là 88. Công thức phân tử của Y là:',
    options: [
      { id: 'A', text: '$C_4H_8O_2$' },
      { id: 'B', text: '$C_3H_6O_2$' },
      { id: 'C', text: '$C_2H_4O_2$' },
      { id: 'D', text: '$C_5H_{12}O$' }
    ],
    correctAnswer: 'A',
    explanation: '$n_C = n_{CO_2} = \\frac{8,8}{44} = 0,2\ mol \\Rightarrow m_C = 2,4\ g$.\n$n_H = 2 \\cdot n_{H_2O} = 2 \\cdot \\frac{3,6}{18} = 0,4\ mol \\Rightarrow m_H = 0,4\ g$.\n$m_O = 4,4 - 2,4 - 0,4 = 1,6\ g \\Rightarrow n_O = 0,1\ mol$.\n$n_C : n_H : n_O = 0,2 : 0,4 : 0,1 = 2 : 4 : 1 \\Rightarrow$ CTĐGN $C_2H_4O$ ($M=44$).\nPhân tử khối $M = 88 \\Rightarrow n = \\frac{88}{44} = 2 \\Rightarrow CTPT: C_4H_8O_2$.',
    difficulty: 'VanDung',
    source: 'SBT Hoá học 11 - Ôn tập Chương 3'
  }
];
