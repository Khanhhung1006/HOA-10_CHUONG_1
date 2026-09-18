import { TheorySectionData, Flashcard, QuizQuestion } from '../../types';

export const lesson13Theory: TheorySectionData = {
  id: 'bai-13',
  chapterId: 'chuong-3',
  title: 'Bài 13: Cấu tạo hoá học hợp chất hữu cơ',
  objectives: [
    'Trình bày được nội dung thuyết cấu tạo hoá học trong hoá học hữu cơ (A.M. Butlerov).',
    'Giải thích được hiện tượng đồng phân trong hoá học hữu cơ.',
    'Nêu được khái niệm chất đồng đẳng và dãy đồng đẳng.',
    'Viết được công thức cấu tạo của một số hợp chất hữu cơ đơn giản (đầy đủ, thu gọn).',
    'Nêu được chất đồng đẳng, chất đồng phân dựa vào công thức cấu tạo cụ thể.'
  ],
  summary: 'Thuyết cấu tạo hoá học giải thích sự tồn tại của hàng triệu hợp chất hữu cơ. Nguyên tử carbon có hoá trị IV, liên kết với nhau tạo mạch hở hoặc mạch vòng. Các chất có cùng CTPT nhưng cấu tạo khác nhau là đồng phân; các chất có tính chất tương tự và hơn kém nhau một hay nhiều nhóm $-CH_2-$ là đồng đẳng.',
  coreKnowledge: [
    {
      heading: '1. Thuyết cấu tạo hoá học (A.M. Butlerov - 1861)',
      points: [
        'Nội dung 1: Trong phân tử hợp chất hữu cơ, các nguyên tử liên kết với nhau theo đúng hoá trị và theo một thứ tự nhất định. Thứ tự liên kết đó được gọi là cấu tạo hoá học. Sự thay đổi thứ tự liên kết đó sẽ tạo ra chất mới.',
        'Nội dung 2: Trong hợp chất hữu cơ, carbon có hoá trị IV. Các nguyên tử carbon không những liên kết với nguyên tử của nguyên tố khác mà còn liên kết trực tiếp với nhau tạo thành mạch carbon (mạch hở không phân nhánh, mạch hở phân nhánh, mạch vòng).',
        'Nội dung 3: Tính chất của các chất phụ thuộc vào thành phần phân tử (bản chất và số lượng nguyên tử) và cấu tạo hoá học (thứ tự liên kết và ảnh hưởng qua lại giữa các nguyên tử).'
      ]
    },
    {
      heading: '2. Công thức cấu tạo (CTCT)',
      points: [
        'Công thức cấu tạo biểu diễn cách thức và thứ tự liên kết giữa các nguyên tử trong phân tử.',
        'Các cách biểu diễn CTCT:',
        '- Dạng đầy đủ: Biểu diễn tất cả các liên kết giữa các nguyên tử.',
        '- Dạng thu gọn: Chỉ biểu diễn liên kết giữa các nguyên tử carbon hoặc nhóm chức. Ví dụ: $CH_3-CH_2-CH_2-CH_3$ hoặc $CH_3CH_2CH_2CH_3$.',
        '- Dạng khung carbon (khung xương): Mỗi góc gấp hoặc đầu đường thẳng tương ứng 1 nguyên tử carbon kèm đủ $H$.'
      ]
    },
    {
      heading: '3. Đồng phân (Isomerism)',
      points: [
        'Khái niệm: Các hợp chất hữu cơ khác nhau nhưng có cùng công thức phân tử được gọi là các chất đồng phân của nhau.',
        'Các loại đồng phân cấu tạo:',
        '- Đồng phân mạch carbon: Khác nhau về mạch carbon (mạch thẳng, mạch nhánh). Ví dụ $C_4H_{10}$ có $CH_3-CH_2-CH_2-CH_3$ (butane) và $CH_3-CH(CH_3)-CH_3$ (2-methylpropane).',
        '- Đồng phân loại nhóm chức: Khác nhau về loại nhóm chức. Ví dụ $C_2H_6O$ có $CH_3-CH_2-OH$ (alcohol) và $CH_3-O-CH_3$ (ether).',
        '- Đồng phân vị trí nhóm chức / vị trí liên kết bội: Ví dụ $C_3H_8O$ có $CH_3-CH_2-CH_2-OH$ (propan-1-ol) và $CH_3-CH(OH)-CH_3$ (propan-2-ol).'
      ]
    },
    {
      heading: '4. Đồng đẳng (Homology)',
      points: [
        'Khái niệm: Các chất hữu cơ có tính chất hoá học tương tự nhau và thành phần phân tử hơn kém nhau một hay nhiều nhóm $-CH_2-$ được gọi là các chất đồng đẳng của nhau, hợp thành một dãy đồng đẳng.',
        'Ví dụ về các dãy đồng đẳng:',
        '- Dãy đồng đẳng alkane: $CH_4, C_2H_6, C_3H_8, C_4H_{10},..., C_nH_{2n+2}$ ($n \\ge 1$).',
        '- Dãy đồng đẳng alcohol no, đơn chức, mạch hở: $CH_3OH, C_2H_5OH, C_3H_7OH,..., C_nH_{2n+1}OH$ ($n \\ge 1$).'
      ]
    }
  ],
  formulas: [
    {
      name: 'Công thức chung Dãy đồng đẳng Alkane',
      latex: 'C_nH_{2n+2} \\ (n \\ge 1)',
      description: 'Dãy đồng đẳng gồm CH4, C2H6, C3H8,...'
    },
    {
      name: 'Công thức chung Dãy đồng đẳng Alcohol no đơn chức',
      latex: 'C_nH_{2n+1}OH \\ (n \\ge 1)',
      description: 'Dãy đồng đẳng gồm CH3OH, C2H5OH,...'
    }
  ],
  keyConcepts: [
    {
      term: 'Cấu tạo hoá học',
      definition: 'Thứ tự và cách thức liên kết giữa các nguyên tử trong phân tử.'
    },
    {
      term: 'Đồng phân',
      definition: 'Các chất hữu cơ khác nhau có cùng công thức phân tử.'
    },
    {
      term: 'Đồng đẳng',
      definition: 'Các chất có tính chất tương tự nhau, thành phần phân tử hơn kém nhau một hay nhiều nhóm -CH2-.'
    }
  ],
  examples: [
    {
      title: 'Ví dụ 1: Viết các đồng phân cấu tạo của $C_4H_{10}$',
      content: 'Viết công thức cấu tạo thu gọn của các chất có cùng công thức phân tử $C_4H_{10}$.',
      solution: 'Ứng với CTPT $C_4H_{10}$ có 2 đồng phân cấu tạo mạch carbon:\n1. Mạch thẳng: $CH_3-CH_2-CH_2-CH_3$ (butane)\n2. Mạch nhánh: $CH_3-CH(CH_3)-CH_3$ (2-methylpropane)'
    },
    {
      title: 'Ví dụ 2: Phân biệt đồng đẳng và đồng phân',
      content: 'Cho các cặp chất: (a) $CH_3-OH$ và $CH_3-CH_2-OH$; (b) $CH_3-CH_2-OH$ và $CH_3-O-CH_3$. Cặp nào là đồng đẳng, cặp nào là đồng phân?',
      solution: '(a) $CH_3-OH$ và $CH_3-CH_2-OH$ cùng là alcohol, thành phần hơn kém 1 nhóm $-CH_2- \\Rightarrow$ Là cặp đồng đẳng.\n(b) $CH_3-CH_2-OH$ và $CH_3-O-CH_3$ có cùng CTPT $C_2H_6O$ nhưng khác loại nhóm chức $\\Rightarrow$ Là cặp đồng phân.'
    }
  ],
  commonMistakes: [
    {
      mistake: 'Coi hai chất hơn kém nhau 1 nhóm $-CH_2-$ luôn là đồng đẳng của nhau.',
      correction: 'Cần chú ý hai chất đó phải có TÍNH CHẤT HOÁ HỌC TƯƠNG TỰ NHAU (cùng loại nhóm chức, cùng cấu trúc mạch đặc trưng).',
      why: 'Ví dụ $CH_3-CH_2-OH$ (alcohol) và $CH_3-O-CH_2-CH_3$ (ether) hơn kém nhau 1 nhóm $-CH_2-$ nhưng KHÔNG là đồng đẳng vì khác lớp chất.'
    }
  ],
  memoryTips: [
    'Đồng phân = Cùng phân tử ($CTPT$), Khác cấu tạo ($CTCT$).',
    'Đồng đẳng = Cùng tính chất, Khác nhau một hay nhiều nhóm $-CH_2-$.'
  ],
  glossary: [
    {
      term: 'Mạch carbon',
      meaning: 'Chuỗi các nguyên tử C liên kết trực tiếp với nhau (mạch hở thẳng, mạch hở nhánh, mạch vòng).'
    }
  ],
  reviewChecklist: [
    'Phát biểu đúng 3 nội dung của Thuyết cấu tạo hoá học Butlerov.',
    'Biết biểu diễn CTCT ở dạng đầy đủ, thu gọn và khung carbon.',
    'Viết được các đồng phân mạch carbon và đồng phân nhóm chức đơn giản.',
    'Nhận biết chính xác cặp chất đồng đẳng và cặp chất đồng phân.'
  ]
};

export const lesson13Flashcards: Flashcard[] = [
  {
    id: 'fc-13-1',
    lessonId: 'bai-13',
    category: 'cau-tao',
    front: 'Trong hợp chất hữu cơ, Carbon ($C$) luôn thể hiện hoá trị mấy?',
    back: 'Hoá trị IV.'
  },
  {
    id: 'fc-13-2',
    lessonId: 'bai-13',
    category: 'cau-tao',
    front: 'Cấu tạo hoá học là gì?',
    back: 'Thứ tự và cách thức liên kết giữa các nguyên tử trong phân tử.'
  },
  {
    id: 'fc-13-3',
    lessonId: 'bai-13',
    category: 'cau-tao',
    front: 'Có mấy loại mạch carbon phổ biến?',
    back: '3 loại: Mạch hở không phân nhánh (mạch thẳng), mạch hở phân nhánh và mạch vòng.'
  },
  {
    id: 'fc-13-4',
    lessonId: 'bai-13',
    category: 'cau-tao',
    front: 'Chất đồng phân là gì?',
    back: 'Các chất khác nhau có CÙNG công thức phân tử.'
  },
  {
    id: 'fc-13-5',
    lessonId: 'bai-13',
    category: 'cau-tao',
    front: 'Chất đồng đẳng là gì?',
    back: 'Các chất có tính chất hoá học tương tự nhau và thành phần phân tử hơn kém nhau một hay nhiều nhóm $-CH_2-$.'
  },
  {
    id: 'fc-13-6',
    lessonId: 'bai-13',
    category: 'cau-tao',
    front: 'Các loại đồng phân cấu tạo gồm những loại nào?',
    back: 'Đồng phân mạch carbon, đồng phân loại nhóm chức, đồng phân vị trí nhóm chức / vị trí liên kết bội.'
  },
  {
    id: 'fc-13-7',
    lessonId: 'bai-13',
    category: 'cau-tao',
    front: 'Ứng với CTPT $C_4H_{10}$ có bao nhiêu đồng phân cấu tạo?',
    back: '2 đồng phân: $CH_3CH_2CH_2CH_3$ (butane) và $CH_3CH(CH_3)CH_3$ (2-methylpropane).'
  },
  {
    id: 'fc-13-8',
    lessonId: 'bai-13',
    category: 'cau-tao',
    front: '$C_2H_6O$ có mấy đồng phân cấu tạo?',
    back: '2 đồng phân: $CH_3-CH_2-OH$ (alcohol) và $CH_3-O-CH_3$ (ether).'
  },
  {
    id: 'fc-13-9',
    lessonId: 'bai-13',
    category: 'cau-tao',
    front: 'Cặp chất $CH_3OH$ và $C_2H_5OH$ có quan hệ gì với nhau?',
    back: 'Là hai chất đồng đẳng của nhau (cùng dãy đồng đẳng alcohol no, đơn chức).'
  },
  {
    id: 'fc-13-10',
    lessonId: 'bai-13',
    category: 'cau-tao',
    front: 'Tác giả của Thuyết cấu tạo hoá học (1861) là ai?',
    back: 'Nhà hoá học Nga A.M. Butlerov (Bút-lê-rốp).'
  },
  {
    id: 'fc-13-11',
    lessonId: 'bai-13',
    category: 'cau-tao',
    front: 'Nội dung thứ 3 của thuyết cấu tạo hoá học nói về yếu tố nào?',
    back: 'Tính chất của các chất phụ thuộc vào thành phần phân tử và cấu tạo hoá học.'
  },
  {
    id: 'fc-13-12',
    lessonId: 'bai-13',
    category: 'cau-tao',
    front: 'Công thức khung carbon biểu diễn điều gì?',
    back: 'Chỉ vẽ đường gấp khúc thể hiện liên kết $C-C$, lược bỏ kí hiệu nguyên tử $C$ và $H$ liên kết với $C$.'
  },
  {
    id: 'fc-13-13',
    lessonId: 'bai-13',
    category: 'cau-tao',
    front: '$CH_3-CH_2-CH_2-OH$ và $CH_3-CH(OH)-CH_3$ là loại đồng phân gì?',
    back: 'Đồng phân vị trí nhóm chức (vị trí nhóm $-OH$).'
  },
  {
    id: 'fc-13-14',
    lessonId: 'bai-13',
    category: 'cau-tao',
    front: 'Hợp chất $C_3H_6$ có mấy loại mạch carbon?',
    back: '2 loại: mạch hở có 1 liên kết đôi ($CH_2=CH-CH_3$) và mạch vòng ($cyclopropane$).'
  },
  {
    id: 'fc-13-15',
    lessonId: 'bai-13',
    category: 'cau-tao',
    front: 'Đồng đẳng của Methane ($CH_4$) có công thức tổng quát là gì?',
    back: '$C_nH_{2n+2}$ ($n \\ge 1$).'
  }
];

export const lesson13Quizzes: QuizQuestion[] = [
  {
    id: 'q-13-1',
    lessonId: 'bai-13',
    question: 'Trong hợp chất hữu cơ, nguyên tử Carbon luôn có hoá trị mấy?',
    options: [
      { id: 'A', text: 'II' },
      { id: 'B', text: 'III' },
      { id: 'C', text: 'IV' },
      { id: 'D', text: 'I' }
    ],
    correctAnswer: 'C',
    explanation: 'Theo thuyết cấu tạo hoá học, trong các hợp chất hữu cơ nguyên tử carbon luôn có hoá trị IV.',
    difficulty: 'NhanBiet',
    source: 'SGK Hoá học 11 - Bài 13'
  },
  {
    id: 'q-13-2',
    lessonId: 'bai-13',
    question: 'Các chất hữu cơ có cùng công thức phân tử nhưng có công thức cấu tạo khác nhau được gọi là:',
    options: [
      { id: 'A', text: 'Các chất đồng vị.' },
      { id: 'B', text: 'Các chất đồng đẳng.' },
      { id: 'C', text: 'Các chất đồng phân.' },
      { id: 'D', text: 'Các chất đồng hình.' }
    ],
    correctAnswer: 'C',
    explanation: 'Định nghĩa SGK: Các hợp chất hữu cơ khác nhau nhưng có cùng công thức phân tử gọi là các chất đồng phân.',
    difficulty: 'NhanBiet',
    source: 'SGK Hoá học 11 - Bài 13'
  },
  {
    id: 'q-13-3',
    lessonId: 'bai-13',
    question: 'Dãy các chất nào sau đây là đồng đẳng của nhau?',
    options: [
      { id: 'A', text: '$CH_4, C_2H_6, C_3H_8$' },
      { id: 'B', text: '$CH_3OH, CH_3OCH_3, C_2H_5OH$' },
      { id: 'C', text: '$CH_3COOH, HCOOCH_3, C_2H_5COOH$' },
      { id: 'D', text: '$C_2H_4, C_3H_6, C_4H_{10}$' }
    ],
    correctAnswer: 'A',
    explanation: '$CH_4, C_2H_6, C_3H_8$ đều thuộc dãy đồng đẳng alkane (hơn kém nhau các nhóm $-CH_2-$ và có tính chất tương tự).',
    difficulty: 'ThongHieu',
    source: 'SBT Hoá học 11 - Bài 13'
  },
  {
    id: 'q-13-4',
    lessonId: 'bai-13',
    question: 'Số lượng đồng phân cấu tạo ứng với công thức phân tử $C_4H_{10}$ là:',
    options: [
      { id: 'A', text: '1' },
      { id: 'B', text: '2' },
      { id: 'C', text: '3' },
      { id: 'D', text: '4' }
    ],
    correctAnswer: 'B',
    explanation: '$C_4H_{10}$ có 2 đồng phân mạch carbon: $CH_3-CH_2-CH_2-CH_3$ (butane) và $CH_3-CH(CH_3)-CH_3$ (2-methylpropane).',
    difficulty: 'ThongHieu',
    source: 'SGK Hoá học 11 - Bài 13'
  },
  {
    id: 'q-13-5',
    lessonId: 'bai-13',
    question: 'Ứng với công thức phân tử $C_2H_6O$ có bao nhiêu đồng phân cấu tạo?',
    options: [
      { id: 'A', text: '1' },
      { id: 'B', text: '2' },
      { id: 'C', text: '3' },
      { id: 'D', text: '4' }
    ],
    correctAnswer: 'B',
    explanation: '$C_2H_6O$ có 2 đồng phân nhóm chức: $CH_3-CH_2-OH$ (alcohol) và $CH_3-O-CH_3$ (ether).',
    difficulty: 'ThongHieu',
    source: 'SBT Hoá học 11 - Bài 13'
  },
  {
    id: 'q-13-6',
    lessonId: 'bai-13',
    question: 'Hai chất $CH_3-CH_2-OH$ và $CH_3-O-CH_3$ có đặc điểm gì chung?',
    options: [
      { id: 'A', text: 'Có cùng công thức cấu tạo.' },
      { id: 'B', text: 'Có cùng công thức phân tử.' },
      { id: 'C', text: 'Thuộc cùng một dãy đồng đẳng.' },
      { id: 'D', text: 'Có nhiệt độ sôi bằng nhau.' }
    ],
    correctAnswer: 'B',
    explanation: 'Hai chất có cùng CTPT là $C_2H_6O$ nhưng thuộc 2 lớp chất khác nhau (alcohol và ether) nên là đồng phân nhóm chức.',
    difficulty: 'ThongHieu',
    source: 'SBT Hoá học 11 - Bài 13'
  },
  {
    id: 'q-13-7',
    lessonId: 'bai-13',
    question: 'Phát biểu nào sau đây KHÔNG đúng theo thuyết cấu tạo hoá học?',
    options: [
      { id: 'A', text: 'Thứ tự liên kết giữa các nguyên tử gọi là cấu tạo hoá học.' },
      { id: 'B', text: 'Các nguyên tử carbon có thể liên kết trực tiếp với nhau tạo thành mạch carbon.' },
      { id: 'C', text: 'Tính chất của hợp chất hữu cơ chỉ phụ thuộc vào số lượng nguyên tử trong phân tử.' },
      { id: 'D', text: 'Trong phân tử hợp chất hữu cơ, các nguyên tử liên kết với nhau theo đúng hoá trị.' }
    ],
    correctAnswer: 'C',
    explanation: 'Tính chất của chất phụ thuộc cả vào thành phần phân tử (bản chất và số lượng nguyên tử) lẫn cấu tạo hoá học (thứ tự liên kết).',
    difficulty: 'ThongHieu',
    source: 'SGK Hoá học 11 - Bài 13'
  },
  {
    id: 'q-13-8',
    lessonId: 'bai-13',
    question: 'Hai chất $CH_3-CH_2-CH_2-OH$ và $CH_3-CH(OH)-CH_3$ là cặp chất:',
    options: [
      { id: 'A', text: 'Đồng đẳng của nhau' },
      { id: 'B', text: 'Đồng phân vị trí nhóm chức' },
      { id: 'C', text: 'Đồng phân mạch carbon' },
      { id: 'D', text: 'Là cùng một chất' }
    ],
    correctAnswer: 'B',
    explanation: 'Cả hai đều có mạch 3C và chứa nhóm $-OH$, chỉ khác vị trí gắn nhóm $-OH$ (C1 và C2) nên là đồng phân vị trí nhóm chức.',
    difficulty: 'ThongHieu',
    source: 'SBT Hoá học 11 - Bài 13'
  },
  {
    id: 'q-13-9',
    lessonId: 'bai-13',
    question: 'Số lượng đồng phân cấu tạo ứng với CTPT $C_5H_{12}$ là:',
    options: [
      { id: 'A', text: '2' },
      { id: 'B', text: '3' },
      { id: 'C', text: '4' },
      { id: 'D', text: '5' }
    ],
    correctAnswer: 'B',
    explanation: '$C_5H_{12}$ có 3 đồng phân mạch alkane: pentane ($CH_3[CH_2]_3CH_3$), 2-methylbutane ($CH_3CH(CH_3)CH_2CH_3$) và 2,2-dimethylpropane ($C(CH_3)_4$).',
    difficulty: 'VanDung',
    source: 'SGK Hoá học 11 - Bài 13'
  },
  {
    id: 'q-13-10',
    lessonId: 'bai-13',
    question: 'Chất nào sau đây là đồng đẳng của Ethane ($C_2H_6$)?',
    options: [
      { id: 'A', text: '$C_2H_4$' },
      { id: 'B', text: '$C_3H_8$' },
      { id: 'C', text: '$C_2H_2$' },
      { id: 'D', text: '$C_6H_6$' }
    ],
    correctAnswer: 'B',
    explanation: 'Ethane ($C_2H_6$) thuộc dãy đồng đẳng alkane $C_nH_{2n+2}$. $C_3H_8$ (propane) cùng thuộc dãy alkane này.',
    difficulty: 'NhanBiet',
    source: 'SBT Hoá học 11 - Bài 13'
  }
];
