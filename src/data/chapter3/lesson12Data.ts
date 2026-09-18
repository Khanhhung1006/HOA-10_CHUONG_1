import { TheorySectionData, Flashcard, QuizQuestion } from '../../types';

export const lesson12Theory: TheorySectionData = {
  id: 'bai-12',
  chapterId: 'chuong-3',
  title: 'Bài 12: Công thức phân tử hợp chất hữu cơ',
  objectives: [
    'Nêu được khái niệm về công thức phân tử hợp chất hữu cơ.',
    'Sử dụng được kết quả phổ khối lượng (MS) để xác định phân tử khối của hợp chất hữu cơ.',
    'Lập được công thức phân tử hợp chất hữu cơ từ dữ liệu phân tích nguyên tố và phân tử khối.'
  ],
  summary: 'Công thức phân tử (CTPT) biểu thị số lượng nguyên tử của mỗi nguyên tố trong phân tử. Phân tử khối ($M$) được xác định chính xác nhờ peak ion phân tử $[M^+]$ trên phổ khối lượng (MS). CTPT được thiết lập dựa vào công thức đơn giản nhất (CTĐGN) và phân tử khối $M$.',
  coreKnowledge: [
    {
      heading: '1. Khái niệm Công thức phân tử',
      points: [
        'Công thức phân tử (CTPT) cho biết thành phần nguyên tố và số lượng nguyên tử của mỗi nguyên tố trong phân tử hợp chất hữu cơ.',
        'Ví dụ: Methane có CTPT là $CH_4$, Ethanol có CTPT là $C_2H_6O$, Acetic acid có CTPT là $C_2H_4O_2$.'
      ]
    },
    {
      heading: '2. Mối quan hệ giữa CTPT và Công thức đơn giản nhất (CTĐGN)',
      points: [
        'Công thức đơn giản nhất (CTĐGN) cho biết tỉ lệ số nguyên tử của các nguyên tố có trong phân tử hợp chất hữu cơ (tỉ lệ các số nguyên tối giản).',
        'Mối quan hệ: CTPT = $(CTĐGN)_n$ (với $n$ là số nguyên dương).',
        'Ví dụ: Acetylene có CTPT là $C_2H_2 \\Rightarrow$ CTĐGN là $CH$ ($n=2$). Glucose có CTPT $C_6H_{12}O_6 \\Rightarrow$ CTĐGN là $CH_2O$ ($n=6$).'
      ]
    },
    {
      heading: '3. Xác định phân tử khối bằng phương pháp phổ khối lượng (MS)',
      points: [
        'Trên phổ khối lượng (Mass Spectrometry - MS), mảnh ion phân tử kí hiệu là $[M^+]$.',
        'Giá trị $m/z$ của mảnh ion phân tử $[M^+]$ (thường là peak có giá trị $m/z$ lớn nhất trên phổ) chính bằng giá trị phân tử khối ($M$) của chất hữu cơ nghiên cứu.',
        'Ví dụ: Phổ MS của ethanol có peak ion phân tử $[C_2H_6O^+]$ tại $m/z = 46 \\Rightarrow M = 46\ g/mol$. Phổ MS của benzene có peak tại $m/z = 78 \\Rightarrow M = 78\ g/mol$.'
      ]
    },
    {
      heading: '4. Lập công thức phân tử hợp chất hữu cơ',
      points: [
        'Bước 1: Tìm tỉ lệ số nguyên tử từ thành phần % khối lượng các nguyên tố:',
        '$$x : y : z = \\frac{\\%C}{12} : \\frac{\\%H}{1} : \\frac{\\%O}{16} = p : q : r$$',
        'Trong đó $p, q, r$ là các số nguyên tối giản $\\Rightarrow$ Công thức đơn giản nhất là $C_pH_qO_r$.',
        'Bước 2: Dựa vào phân tử khối $M$ xác định từ phổ MS để tính $n$:',
        '$$n = \\frac{M}{M_{(C_pH_qO_r)}} = \\frac{M}{12p + q + 16r}$$',
        'Bước 3: Suy ra CTPT $C_xH_yO_z = (C_pH_qO_r)_n$.'
      ]
    }
  ],
  formulas: [
    {
      name: 'Tỉ lệ lập CTĐGN',
      latex: 'x : y : z = \\frac{\\%C}{12} : \\frac{\\%H}{1} : \\frac{\\%O}{16}',
      description: 'Lập tỉ lệ số mol các nguyên tử C, H, O'
    },
    {
      name: 'Mối quan hệ CTPT và CTĐGN',
      latex: 'CTPT = (CTĐGN)_n \\Rightarrow n = \\frac{M}{M_{CTĐGN}}',
      description: 'Tìm hệ số n dựa vào phân tử khối M'
    }
  ],
  keyConcepts: [
    {
      term: 'Công thức phân tử (CTPT)',
      definition: 'Biểu thị chính xác số lượng nguyên tử của mỗi nguyên tố trong phân tử.'
    },
    {
      term: 'Công thức đơn giản nhất (CTĐGN)',
      definition: 'Biểu thị tỉ lệ số nguyên tử tối giản của các nguyên tố trong phân tử.'
    },
    {
      term: 'Peak ion phân tử [M+]',
      definition: 'Peak trên phổ khối lượng MS có giá trị m/z tương ứng với phân tử khối của chất.'
    }
  ],
  examples: [
    {
      title: 'Ví dụ 1: Lập CTPT của Ethanol',
      content: 'Kết quả phân tích nguyên tố cho thấy ethanol chứa $52,17\\%C$, $13,04\\%H$ và $34,79\\%O$ về khối lượng. Phổ MS của ethanol cho thấy peak ion phân tử $[M^+]$ có $m/z = 46$. Xác định CTPT của ethanol.',
      solution: 'Tỉ lệ $x : y : z = \\frac{52,17}{12} : \\frac{13,04}{1} : \\frac{34,79}{16} = 4,35 : 13,04 : 2,17 = 2 : 6 : 1$.\nCông thức đơn giản nhất là $C_2H_6O$.\nKhối lượng CTĐGN là $12 \\cdot 2 + 6 + 16 = 46$.\nTừ phổ MS có $M = 46 \\Rightarrow n = \\frac{46}{46} = 1$.\nVậy CTPT của ethanol là $C_2H_6O$.'
    },
    {
      title: 'Ví dụ 2: Tìm CTPT từ CTĐGN và phân tử khối',
      content: 'Hợp chất X có công thức đơn giản nhất là $CH_2O$ và phân tử khối $M = 60$. Tìm công thức phân tử của X.',
      solution: 'CTPT của X có dạng $(CH_2O)_n$.\nKhối lượng $M = (12 + 2 + 16) \\cdot n = 30n = 60 \\Rightarrow n = 2$.\nVậy CTPT của X là $C_2H_4O_2$.'
    }
  ],
  commonMistakes: [
    {
      mistake: 'Nhầm lẫn giữa $m/z$ của peak ion phân tử $[M^+]$ với các peak fragment nhỏ hơn trên phổ MS.',
      correction: 'Phân tử khối $M$ của chất luôn tương ứng với $m/z$ của peak ion phân tử $[M^+]$ (thường nằm ở vùng $m/z$ lớn nhất).',
      why: 'Các peak có $m/z$ nhỏ hơn là do phân tử bị bẻ gãy thành các mảnh nhỏ (fragment).'
    }
  ],
  memoryTips: [
    'CTPT = $(CTĐGN)_n$.',
    'Nhìn phổ MS: Tìm m/z của $[M^+] \\Rightarrow$ Đó chính là $M$ (g/mol).'
  ],
  glossary: [
    {
      term: 'Phổ MS',
      meaning: 'Phổ khối lượng thu được từ máy Mass Spectrometer dùng để xác định phân tử khối M.'
    }
  ],
  reviewChecklist: [
    'Phân biệt được Công thức phân tử và Công thức đơn giản nhất.',
    'Đọc được phân tử khối M từ peak [M+] trên phổ khối lượng MS.',
    'Tính tỉ lệ % khối lượng và lập CTPT thành thạo.'
  ]
};

export const lesson12Flashcards: Flashcard[] = [
  {
    id: 'fc-12-1',
    lessonId: 'bai-12',
    category: 'ctpt',
    front: 'Công thức phân tử (CTPT) cho biết điều gì?',
    back: 'Cho biết thành phần nguyên tố và số lượng nguyên tử của mỗi nguyên tố trong phân tử.'
  },
  {
    id: 'fc-12-2',
    lessonId: 'bai-12',
    category: 'ctpt',
    front: 'Công thức đơn giản nhất (CTĐGN) cho biết điều gì?',
    back: 'Cho biết tỉ lệ số nguyên tử các nguyên tố ở dạng số nguyên tối giản.'
  },
  {
    id: 'fc-12-3',
    lessonId: 'bai-12',
    category: 'ctpt',
    front: 'Mối liên hệ giữa CTPT và CTĐGN là gì?',
    back: 'CTPT = $(CTĐGN)_n$ với $n$ là số nguyên dương.'
  },
  {
    id: 'fc-12-4',
    lessonId: 'bai-12',
    category: 'ctpt',
    front: 'CTĐGN của Benzene ($C_6H_6$) là gì?',
    back: 'Là $CH$ ($n=6$).'
  },
  {
    id: 'fc-12-5',
    lessonId: 'bai-12',
    category: 'ctpt',
    front: 'CTĐGN của Acetic acid ($C_2H_4O_2$) là gì?',
    back: 'Là $CH_2O$ ($n=2$).'
  },
  {
    id: 'fc-12-6',
    lessonId: 'bai-12',
    category: 'ctpt',
    front: 'Phương pháp phổ khối lượng (MS) giúp xác định đại lượng nào?',
    back: 'Xác định chính xác phân tử khối ($M$) của hợp chất hữu cơ.'
  },
  {
    id: 'fc-12-7',
    lessonId: 'bai-12',
    category: 'ctpt',
    front: 'Peak ion phân tử $[M^+]$ trên phổ MS tương ứng với giá trị m/z bằng bao nhiêu?',
    back: 'Bằng chính phân tử khối ($M$) của chất hữu cơ đó.'
  },
  {
    id: 'fc-12-8',
    lessonId: 'bai-12',
    category: 'ctpt',
    front: 'Nếu phổ MS của Ethanol có peak $[M^+]$ ở $m/z = 46$, phân tử khối là bao nhiêu?',
    back: 'Phân tử khối $M = 46\ g/mol$.'
  },
  {
    id: 'fc-12-9',
    lessonId: 'bai-12',
    category: 'ctpt',
    front: 'Biểu thức tính tỉ lệ $x : y : z$ từ phần trăm khối lượng $\%C, \%H, \%O$?',
    back: '$x : y : z = \\frac{\\%C}{12} : \\frac{\\%H}{1} : \\frac{\\%O}{16}$.'
  },
  {
    id: 'fc-12-10',
    lessonId: 'bai-12',
    category: 'ctpt',
    front: 'Hợp chất nào có CTPT trùng với CTĐGN?',
    back: 'Methane ($CH_4$), Ethanol ($C_2H_6O$), Propane ($C_3H_8$),...'
  },
  {
    id: 'fc-12-11',
    lessonId: 'bai-12',
    category: 'ctpt',
    front: 'Nếu chất X có CTĐGN là $C_2H_4O$ và $M = 88$, CTPT của X là gì?',
    back: '$(C_2H_4O)_n = 44n = 88 \\Rightarrow n = 2 \\Rightarrow C_4H_8O_2$.'
  },
  {
    id: 'fc-12-12',
    lessonId: 'bai-12',
    category: 'ctpt',
    front: 'Chất X có $85,7\\%C$ và $14,3\\%H$, CTĐGN là gì?',
    back: '$\\frac{85,7}{12} : \\frac{14,3}{1} = 7,14 : 14,3 = 1 : 2 \\Rightarrow CH_2$.'
  },
  {
    id: 'fc-12-13',
    lessonId: 'bai-12',
    category: 'ctpt',
    front: 'Formaldehyde ($HCHO$) có CTĐGN là gì?',
    back: '$CH_2O$ (trùng với CTPT).'
  },
  {
    id: 'fc-12-14',
    lessonId: 'bai-12',
    category: 'ctpt',
    front: 'Glucose ($C_6H_{12}O_6$) và Acetic acid ($C_2H_4O_2$) có điểm gì chung?',
    back: 'Có cùng công thức đơn giản nhất là $CH_2O$.'
  },
  {
    id: 'fc-12-15',
    lessonId: 'bai-12',
    category: 'ctpt',
    front: 'Mảng $m/z$ trên phổ MS có đơn vị là gì?',
    back: 'Tỉ số giữa khối lượng mảnh ion ($m$) và điện tích ion ($z$).'
  }
];

export const lesson12Quizzes: QuizQuestion[] = [
  {
    id: 'q-12-1',
    lessonId: 'bai-12',
    question: 'Công thức đơn giản nhất của hợp chất $C_4H_8O_2$ là:',
    options: [
      { id: 'A', text: '$C_2H_4O$' },
      { id: 'B', text: '$CH_2O$' },
      { id: 'C', text: '$C_4H_8O_2$' },
      { id: 'D', text: '$C_2H_4O_2$' }
    ],
    correctAnswer: 'A',
    explanation: 'Tỉ lệ các nguyên tử $C : H : O = 4 : 8 : 2 = 2 : 4 : 1 \\Rightarrow$ CTĐGN là $C_2H_4O$.',
    difficulty: 'NhanBiet',
    source: 'SGK Hoá học 11 - Bài 12'
  },
  {
    id: 'q-12-2',
    lessonId: 'bai-12',
    question: 'Trên phổ khối lượng (MS) của hợp chất hữu cơ, peak ion phân tử $[M^+]$ giúp xác định thông tin nào?',
    options: [
      { id: 'A', text: 'Cấu tạo các nhóm chức có trong phân tử.' },
      { id: 'B', text: 'Phân tử khối $M$ của hợp chất hữu cơ.' },
      { id: 'C', text: 'Nhiệt độ sôi của chất hữu cơ.' },
      { id: 'D', text: 'Độ tan của hợp chất hữu cơ trong nước.' }
    ],
    correctAnswer: 'B',
    explanation: 'Peak ion phân tử $[M^+]$ trên phổ MS có giá trị $m/z$ tương ứng với phân tử khối $M$ của chất.',
    difficulty: 'NhanBiet',
    source: 'SGK Hoá học 11 - Bài 12'
  },
  {
    id: 'q-12-3',
    lessonId: 'bai-12',
    question: 'Cặp chất nào sau đây có CTPT KHÁC nhau nhưng có CÙNG công thức đơn giản nhất?',
    options: [
      { id: 'A', text: '$CH_4$ và $C_2H_6$' },
      { id: 'B', text: '$C_2H_2$ và $C_6H_6$' },
      { id: 'C', text: '$C_2H_4$ và $C_3H_8$' },
      { id: 'D', text: '$C_2H_6O$ và $C_2H_4O_2$' }
    ],
    correctAnswer: 'B',
    explanation: '$C_2H_2$ và $C_6H_6$ đều có công thức đơn giản nhất là $CH$.',
    difficulty: 'ThongHieu',
    source: 'SBT Hoá học 11 - Bài 12'
  },
  {
    id: 'q-12-4',
    lessonId: 'bai-12',
    question: 'Một hợp chất hữu cơ X chứa $80\\%C$ và $20\\%H$ về khối lượng. Công thức đơn giản nhất của X là:',
    options: [
      { id: 'A', text: '$CH_2$' },
      { id: 'B', text: '$CH_3$' },
      { id: 'C', text: '$CH_4$' },
      { id: 'D', text: '$C_2H_3$' }
    ],
    correctAnswer: 'B',
    explanation: 'Tỉ lệ $x : y = \\frac{80}{12} : \\frac{20}{1} = 6,67 : 20 = 1 : 3 \\Rightarrow$ CTĐGN là $CH_3$.',
    difficulty: 'ThongHieu',
    source: 'SGK Hoá học 11 - Bài 12'
  },
  {
    id: 'q-12-5',
    lessonId: 'bai-12',
    question: 'Hợp chất Y có công thức đơn giản nhất là $CH_2O$ và có phân tử khối bằng 60. Công thức phân tử của Y là:',
    options: [
      { id: 'A', text: '$CH_2O$' },
      { id: 'B', text: '$C_2H_4O_2$' },
      { id: 'C', text: '$C_3H_6O_3$' },
      { id: 'D', text: '$C_4H_8O_4$' }
    ],
    correctAnswer: 'B',
    explanation: 'CTPT có dạng $(CH_2O)_n \\Rightarrow M = 30n = 60 \\Rightarrow n = 2 \\Rightarrow C_2H_4O_2$.',
    difficulty: 'ThongHieu',
    source: 'SBT Hoá học 11 - Bài 12'
  },
  {
    id: 'q-12-6',
    lessonId: 'bai-12',
    question: 'Phổ khối lượng MS của benzene cho thấy giá trị $m/z$ của peak ion phân tử $[M^+]$ là 78. Công thức phân tử của benzene là gì biết công thức đơn giản nhất là $CH$?',
    options: [
      { id: 'A', text: '$C_6H_6$' },
      { id: 'B', text: '$C_4H_4$' },
      { id: 'C', text: '$C_5H_5$' },
      { id: 'D', text: '$C_8H_8$' }
    ],
    correctAnswer: 'A',
    explanation: '$M = 78$. CTPT là $(CH)_n \\Rightarrow 13n = 78 \\Rightarrow n = 6 \\Rightarrow C_6H_6$.',
    difficulty: 'ThongHieu',
    source: 'SGK Hoá học 11 - Bài 12'
  },
  {
    id: 'q-12-7',
    lessonId: 'bai-12',
    question: 'Hợp chất hữu cơ Z chứa $40,0\\%C, 6,7\\%H$ và $53,3\\%O$ về khối lượng. Công thức đơn giản nhất của Z là:',
    options: [
      { id: 'A', text: '$CHO$' },
      { id: 'B', text: '$CH_2O$' },
      { id: 'C', text: '$C_2H_4O$' },
      { id: 'D', text: '$CH_3O$' }
    ],
    correctAnswer: 'B',
    explanation: '$x : y : z = \\frac{40,0}{12} : \\frac{6,7}{1} : \\frac{53,3}{16} = 3,33 : 6,7 : 3,33 = 1 : 2 : 1 \\Rightarrow CH_2O$.',
    difficulty: 'ThongHieu',
    source: 'SBT Hoá học 11 - Bài 12'
  },
  {
    id: 'q-12-8',
    lessonId: 'bai-12',
    question: 'Khi phân tích chất hữu cơ A thu được tỉ lệ khối lượng $m_C : m_H : m_O = 6 : 1 : 8$. Công thức đơn giản nhất của A là:',
    options: [
      { id: 'A', text: '$CH_2O$' },
      { id: 'B', text: '$C_2H_4O$' },
      { id: 'C', text: '$C_3H_6O_2$' },
      { id: 'D', text: '$CHO_2$' }
    ],
    correctAnswer: 'A',
    explanation: '$n_C : n_H : n_O = \\frac{6}{12} : \\frac{1}{1} : \\frac{8}{16} = 0,5 : 1 : 0,5 = 1 : 2 : 1 \\Rightarrow CH_2O$.',
    difficulty: 'VanDung',
    source: 'SBT Hoá học 11 - Bài 12'
  },
  {
    id: 'q-12-9',
    lessonId: 'bai-12',
    question: 'Ascorbic acid (vitamin C) chứa $40,92\\%C; 4,58\\%H; 54,50\\%O$. Phổ MS xuất hiện peak ion phân tử ở $m/z = 176$. CTPT của vitamin C là:',
    options: [
      { id: 'A', text: '$C_3H_4O_3$' },
      { id: 'B', text: '$C_6H_8O_6$' },
      { id: 'C', text: '$C_4H_6O_4$' },
      { id: 'D', text: '$C_6H_{12}O_6$' }
    ],
    correctAnswer: 'B',
    explanation: '$n_C : n_H : n_O = \\frac{40,92}{12} : \\frac{4,58}{1} : \\frac{54,50}{16} = 3,41 : 4,58 : 3,41 = 3 : 4 : 3 \\Rightarrow$ CTĐGN $C_3H_4O_3$ ($M=88$). $n = \\frac{176}{88} = 2 \\Rightarrow C_6H_8O_6$.',
    difficulty: 'VanDung',
    source: 'SGK Hoá học 11 - Bài 12'
  },
  {
    id: 'q-12-10',
    lessonId: 'bai-12',
    question: 'Hợp chất hữu cơ nào sau đây có công thức đơn giản nhất TRÙNG với công thức phân tử?',
    options: [
      { id: 'A', text: '$C_2H_4$' },
      { id: 'B', text: '$C_2H_6O$' },
      { id: 'C', text: '$C_6H_{12}O_6$' },
      { id: 'D', text: '$C_2H_4O_2$' }
    ],
    correctAnswer: 'B',
    explanation: '$C_2H_6O$ có tỉ lệ $2 : 6 : 1$ đã tối giản nên CTĐGN chính là CTPT $C_2H_6O$.',
    difficulty: 'NhanBiet',
    source: 'SBT Hoá học 11 - Bài 12'
  }
];
