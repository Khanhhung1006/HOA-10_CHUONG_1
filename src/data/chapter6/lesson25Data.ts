import { TheorySectionData, Flashcard, QuizQuestion } from '../../types';

export const lesson25Theory: TheorySectionData = {
  id: 'bai-25',
  chapterId: 'chuong-6',
  title: 'Bài 25: Ôn tập Chương 6 - Hợp chất Carbonyl & Carboxylic Acid',
  objectives: [
    'Hệ thống hoá kiến thức về đặc điểm cấu tạo, danh pháp, tính chất vật lí và hoá học của Hợp chất Carbonyl (aldehyde, ketone) và Carboxylic Acid.',
    'So sánh mối quan hệ chuyển hoá giữa aldehyde, ketone, alcohol và carboxylic acid.',
    'Vận dụng tính chất hoá học để giải các bài tập trắc nghiệm, nhận biết, chuỗi chuyển hoá và bài toán tính toán hiệu suất, nồng độ liên quan đến Chương 6.'
  ],
  summary: 'Chương 6 tổng kết hai lớp hợp chất hữu cơ chứa oxygen quan trọng: Hợp chất Carbonyl ($>C=O$) và Carboxylic Acid ($-COOH$). Aldehyde bị khử thành alcohol bậc I và bị oxi hoá thành carboxylic acid; Ketone bị khử thành alcohol bậc II nhưng không bị tráng bạc. Carboxylic acid có tính acid yếu và phản ứng ester hoá với alcohol. Mối liên hệ chuyển hoá qua lại giữa các lớp chất giúp giải quyết các bài tập tổng hợp.',
  coreKnowledge: [
    {
      heading: '1. Sơ đồ hệ thống hoá hợp chất Carbonyl',
      points: [
        'Hợp chất carbonyl ($R-C(=O)-R\'$):',
        '- Phản ứng khử bởi $NaBH_4/LiAlH_4$: Aldehyde $\\rightarrow$ Alcohol I; Ketone $\\rightarrow$ Alcohol II.',
        '- Phản ứng cộng: Cộng $HCN \\rightarrow$ cyanohydrin.',
        '- Phản ứng oxi hoá (chỉ có aldehyde): $RCHO \\xrightarrow{Tollens} RCOONH_4 + 2Ag\\downarrow$; $RCHO \\xrightarrow{Cu(OH)_2/OH^-, t^\\circ} RCOONa + Cu_2O\\downarrow$ (đỏ gạch).',
        '- Phản ứng iodoform: Các chất chứa nhóm $CH_3-C(=O)-$ tác dụng $I_2/NaOH \\rightarrow CHI_3\\downarrow$ (kết tủa vàng).'
      ],
      latexEquations: [
        'R-CHO + 2[H] \\xrightarrow{NaBH_4} R-CH_2OH \\quad (\\text{Alcohol I})',
        'R-CO-R\' + 2[H] \\xrightarrow{NaBH_4} R-CH(OH)-R\' \\quad (\\text{Alcohol II})',
        'R-CHO + 2[Ag(NH_3)_2]OH \\xrightarrow{t^\\circ} RCOONH_4 + 2Ag\\downarrow + 3NH_3 + H_2O'
      ]
    },
    {
      heading: '2. Sơ đồ hệ thống hoá Carboxylic Acid',
      points: [
        'Carboxylic acid ($R-COOH$):',
        '- Tính acid: Phân li $RCOOH \\rightleftharpoons RCOO^- + H^+$. Phản ứng với kim loại trước H, oxide base, base, muối carbonate ($CaCO_3, Na_2CO_3$).',
        '- Phản ứng ester hoá: $RCOOH + R\'OH \\xrightleftharpoons[t^\\circ]{H_2SO_4 \\text{ đặc}} RCOOR\' + H_2O$.',
        '- Điều chế: $C_2H_5OH + O_2 \\xrightarrow{\\text{men giấm}} CH_3COOH + H_2O$; Oxi hoá butane $2C_4H_{10} + 5O_2 \\xrightarrow{xt, t^\\circ, p} 4CH_3COOH + 2H_2O$.'
      ],
      latexEquations: [
        '2RCOOH + Mg \\rightarrow (RCOO)_2Mg + H_2\\uparrow',
        '2RCOOH + Na_2CO_3 \\rightarrow 2RCOONa + H_2O + CO_2\\uparrow',
        'RCOOH + R\'OH \\xrightleftharpoons[t^\\circ]{H_2SO_4 \\text{ đặc}} RCOOR\' + H_2O'
      ]
    },
    {
      heading: '3. So sánh nhiệt độ sôi của các lớp chất hữu cơ',
      points: [
        'Thứ tự nhiệt độ sôi của các chất có phân tử khối tương đương hoặc cùng số nguyên tử C:',
        'Hydrocarbon < Ether / Ester < Aldehyde / Ketone < Alcohol < Carboxylic Acid.',
        'Nguyên nhân: Carboxylic acid có liên kết hydrogen liên phân tử bền nhất (dạng dimer), alcohol có liên kết hydrogen liên phân tử, aldehyde/ketone phân cực nhưng không tạo liên kết H liên phân tử, hydrocarbon không phân cực.'
      ]
    }
  ],
  formulas: [
    {
      name: 'Tỉ lệ phản ứng tráng bạc',
      latex: 'n_{Ag} = 2 \\cdot n_{RCHO} \\quad (\\text{Riêng } n_{Ag} = 4 \\cdot n_{HCHO})',
      description: 'Dùng giải bài toán hỗn hợp aldehyde tráng bạc'
    },
    {
      name: 'Hiệu suất phản ứng ester hoá',
      latex: 'H(\\%) = \\frac{n_{\\text{ester thực tế}}}{n_{\\text{ester lý thuyết (tính theo chất thiếu)}}} \\times 100\\%',
      description: 'Tính hiệu suất ester hoá'
    }
  ],
  keyConcepts: [
    {
      term: 'Phân loại Carbonyl',
      definition: 'Gồm Aldehyde (nhóm -CHO) và Ketone (nhóm >C=O nối 2 gốc C).'
    },
    {
      term: 'Dimerization',
      definition: 'Sự tạo thành cặp phân tử đôi do liên kết hydrogen liên phân tử ở carboxylic acid.'
    },
    {
      term: 'Esterification',
      definition: 'Phản ứng giữa acid và alcohol tạo ester và nước.'
    }
  ],
  examples: [
    {
      title: 'Ví dụ 1: Chuỗi chuyển hoá hoá học',
      content: 'Hoàn thành chuỗi phản ứng sau: $C_2H_4 \\xrightarrow{(1)} C_2H_5OH \\xrightarrow{(2)} CH_3CHO \\xrightarrow{(3)} CH_3COOH \\xrightarrow{(4)} CH_3COOC_2H_5$.',
      solution: '1. $CH_2=CH_2 + H_2O \\xrightarrow{H_3PO_4, t^\\circ} C_2H_5OH$\n2. $C_2H_5OH + CuO \\xrightarrow{t^\\circ} CH_3CHO + Cu\\downarrow + H_2O$\n3. $CH_3CHO + 2[Ag(NH_3)_2]OH \\xrightarrow{t^\\circ} CH_3COONH_4 + 2Ag\\downarrow + 3NH_3 + H_2O \\xrightarrow{H^+} CH_3COOH$\n4. $CH_3COOH + C_2H_5OH \\xrightleftharpoons[t^\\circ]{H_2SO_4 \\text{ đặc}} CH_3COOC_2H_5 + H_2O$.'
    }
  ],
  commonMistakes: [
    {
      mistake: 'So sánh nhầm nhiệt độ sôi của Acetic acid ($CH_3COOH$) thấp hơn Ethanol ($C_2H_5OH$).',
      correction: 'Acetic acid ($118^\\circ C$) có nhiệt độ sôi CAO HƠN ethanol ($78,3^\\circ C$) do liên kết hydrogen giữa các phân tử acid bền hơn.',
      why: 'Acid tạo dimer bền vững hơn alcohol.'
    }
  ],
  memoryTips: [
    'Oxi hoá: Alcohol I -> Aldehyde -> Carboxylic acid.',
    'Tráng bạc: HCHO ra 4 Ag; Aldehyde khác ra 2 Ag; Ketone không phản ứng.',
    'Nhiệt độ sôi: Hydrocarbon < Aldehyde < Alcohol < Acid.'
  ],
  glossary: [
    {
      term: 'Carbonyl',
      meaning: 'Nhóm chức >C=O đặc trưng của aldehyde và ketone.'
    },
    {
      term: 'Carboxyl',
      meaning: 'Nhóm chức -COOH đặc trưng của carboxylic acid.'
    }
  ],
  reviewChecklist: [
    'Nắm vững danh pháp thay thế và tính chất hoá học của aldehyde, ketone, acid.',
    'Giải trôi chảy các bài tập tráng bạc, phản ứng iodoform, tính acid và ester hoá.',
    'Hoàn thành xuất sắc đề kiểm tra tổng hợp Chương 6.'
  ]
};

export const lesson25Flashcards: Flashcard[] = [
  {
    id: 'fc-25-1',
    lessonId: 'bai-25',
    front: 'Aldehyde bị khử bởi $NaBH_4$ tạo ra chất gì?',
    back: 'Alcohol bậc I ($R-CH_2OH$).',
    category: 'chuong-6'
  },
  {
    id: 'fc-25-2',
    lessonId: 'bai-25',
    front: 'Ketone bị khử bởi $NaBH_4$ tạo ra chất gì?',
    back: 'Alcohol bậc II ($R-CH(OH)-R\').',
    category: 'chuong-6'
  },
  {
    id: 'fc-25-3',
    lessonId: 'bai-25',
    front: 'Chất nào phản ứng tráng bạc với thuốc thử Tollens?',
    back: 'Aldehyde ($R-CHO$). Ketone không có phản ứng này.',
    category: 'chuong-6'
  },
  {
    id: 'fc-25-4',
    lessonId: 'bai-25',
    front: 'Phương trình phản ứng tráng bạc của $CH_3CHO$?',
    back: '$CH_3CHO + 2[Ag(NH_3)_2]OH \\xrightarrow{t^\\circ} CH_3COONH_4 + 2Ag\\downarrow + 3NH_3 + H_2O$.',
    category: 'chuong-6'
  },
  {
    id: 'fc-25-5',
    lessonId: 'bai-25',
    front: 'Đặc điểm của phản ứng iodoform?',
    back: 'Dành cho chất có nhóm $CH_3-C(=O)-$ tác dụng $I_2/NaOH$ tạo tủa vàng $CHI_3\\downarrow$.',
    category: 'chuong-6'
  },
  {
    id: 'fc-25-6',
    lessonId: 'bai-25',
    front: 'Vì sao $CH_3COOH$ có nhiệt độ sôi cao hơn $C_2H_5OH$?',
    back: 'Vì nhóm $-COOH$ phân cực mạnh hơn và tạo liên kết hydrogen liên phân tử dạng dimer bền hơn.',
    category: 'chuong-6'
  },
  {
    id: 'fc-25-7',
    lessonId: 'bai-25',
    front: 'Acetic acid làm quỳ tím đổi thành màu gì?',
    back: 'Màu đỏ (do phân li tạo $H^+$).',
    category: 'chuong-6'
  },
  {
    id: 'fc-25-8',
    lessonId: 'bai-25',
    front: 'Hiện tượng khi nhỏ $CH_3COOH$ vào $Na_2CO_3$?',
    back: 'Sủi bọt khí không màu $CO_2\\uparrow$: $2CH_3COOH + Na_2CO_3 \\rightarrow 2CH_3COONa + H_2O + CO_2\\uparrow$.',
    category: 'chuong-6'
  },
  {
    id: 'fc-25-9',
    lessonId: 'bai-25',
    front: 'Công thức phản ứng ester hoá giữa $CH_3COOH$ và $C_2H_5OH$?',
    back: '$CH_3COOH + C_2H_5OH \\xrightleftharpoons[t^\\circ]{H_2SO_4 \\text{ đặc}} CH_3COOC_2H_5 + H_2O$.',
    category: 'chuong-6'
  },
  {
    id: 'fc-25-10',
    lessonId: 'bai-25',
    front: 'Thành phần acid của giấm ăn là chất gì và nồng độ bao nhiêu?',
    back: 'Acetic acid ($CH_3COOH$), nồng độ khoảng 4 - 8%.',
    category: 'chuong-6'
  },
  {
    id: 'fc-25-11',
    lessonId: 'bai-25',
    front: 'Tên thay thế của $CH_3COCH_3$ và $CH_3CHO$?',
    back: '$CH_3COCH_3$: propanone.\n$CH_3CHO$: ethanal.',
    category: 'chuong-6'
  },
  {
    id: 'fc-25-12',
    lessonId: 'bai-25',
    front: 'Tên thay thế của $HCOOH$ và $C_6H_5COOH$?',
    back: '$HCOOH$: methanoic acid.\n$C_6H_5COOH$: benzoic acid.',
    category: 'chuong-6'
  },
  {
    id: 'fc-25-13',
    lessonId: 'bai-25',
    front: 'Tác nhân khử thông dụng khử nhóm $C=O$ thành nhóm $C-OH$?',
    back: '$NaBH_4$ (sodium borohydride) hoặc $LiAlH_4$ (lithium aluminium hydride).',
    category: 'chuong-6'
  },
  {
    id: 'fc-25-14',
    lessonId: 'bai-25',
    front: 'Khí thu được khi đốt cháy hoàn toàn $C_n H_{2n}O_2$ có đặc điểm gì?',
    back: 'Số mol $CO_2$ sinh ra bằng số mol $H_2O$ ($n_{CO_2} = n_{H_2O}$).',
    category: 'chuong-6'
  },
  {
    id: 'fc-25-15',
    lessonId: 'bai-25',
    front: 'Formol là dung dịch nước chứa chất nào?',
    back: 'Formaldehyde ($HCHO$) nồng độ 37 - 40%.',
    category: 'chuong-6'
  }
];

export const lesson25Quizzes: QuizQuestion[] = [
  {
    id: 'qz-25-1',
    lessonId: 'bai-25',
    question: 'Thuốc thử Tollens chứa phức ion nào dưới đây?',
    options: [
      { id: 'A', text: '$[Cu(NH_3)_4]^{2+}$' },
      { id: 'B', text: '$[Ag(NH_3)_2]^+$' },
      { id: 'C', text: '$[Fe(SCN)]^{2+}$' },
      { id: 'D', text: '$[CoCl_4]^{2-}$' }
    ],
    correctAnswer: 'B',
    explanation: 'Thuốc thử Tollens chứa phức diamminesilver(I) $[Ag(NH_3)_2]^+$.',
    difficulty: 'NhanBiet',
    source: 'SGK Hoá 11 - Bài 25'
  },
  {
    id: 'qz-25-2',
    lessonId: 'bai-25',
    question: 'Chất nào sau đây KHÔNG có phản ứng tráng bạc?',
    options: [
      { id: 'A', text: '$HCHO$' },
      { id: 'B', text: '$CH_3CHO$' },
      { id: 'C', text: '$CH_3COCH_3$' },
      { id: 'D', text: '$C_6H_5CHO$' }
    ],
    correctAnswer: 'C',
    explanation: '$CH_3COCH_3$ là ketone nên không bị oxi hoá bởi thuốc thử Tollens.',
    difficulty: 'NhanBiet',
    source: 'SBT Hoá 11 - Bài 25'
  },
  {
    id: 'qz-25-3',
    lessonId: 'bai-25',
    question: 'Sản phẩm thu được khi khử propanal bằng $NaBH_4$ là',
    options: [
      { id: 'A', text: 'propan-1-ol' },
      { id: 'B', text: 'propan-2-ol' },
      { id: 'C', text: 'propanone' },
      { id: 'D', text: 'propanoic acid' }
    ],
    correctAnswer: 'A',
    explanation: 'Khử aldehyde propanal ($CH_3CH_2CHO$) thu được alcohol bậc I tương ứng là propan-1-ol ($CH_3CH_2CH_2OH$).',
    difficulty: 'ThongHieu',
    source: 'SGK Hoá 11 - Bài 25'
  },
  {
    id: 'qz-25-4',
    lessonId: 'bai-25',
    question: 'Oxi hoá $CH_3CHO$ bằng dung dịch $Cu(OH)_2$ trong $NaOH$ đun nóng thu được kết tủa màu',
    options: [
      { id: 'A', text: 'Trắng' },
      { id: 'B', text: 'Đỏ gạch' },
      { id: 'C', text: 'Vàng' },
      { id: 'D', text: 'Xanh lam' }
    ],
    correctAnswer: 'B',
    explanation: 'Tạo kết tủa copper(I) oxide $Cu_2O\\downarrow$ màu đỏ gạch.',
    difficulty: 'NhanBiet',
    source: 'SGK Hoá 11 - Bài 25'
  },
  {
    id: 'qz-25-5',
    lessonId: 'bai-25',
    question: 'Trật tự giảm dần nhiệt độ sôi của các chất: (1) $C_2H_6$, (2) $CH_3CHO$, (3) $C_2H_5OH$, (4) $CH_3COOH$ là',
    options: [
      { id: 'A', text: '(4) > (3) > (2) > (1)' },
      { id: 'B', text: '(1) > (2) > (3) > (4)' },
      { id: 'C', text: '(3) > (4) > (2) > (1)' },
      { id: 'D', text: '(4) > (2) > (3) > (1)' }
    ],
    correctAnswer: 'A',
    explanation: 'Thứ tự nhiệt độ sôi giảm dần: $CH_3COOH$ ($118^\\circ C$) > $C_2H_5OH$ ($78,3^\\circ C$) > $CH_3CHO$ ($20^\\circ C$) > $C_2H_6$ ($-88,6^\\circ C$).',
    difficulty: 'ThongHieu',
    source: 'SBT Hoá 11 - Bài 25'
  },
  {
    id: 'qz-25-6',
    lessonId: 'bai-25',
    question: 'Chất làm quỳ tím chuyển sang màu đỏ là',
    options: [
      { id: 'A', text: '$C_2H_5OH$' },
      { id: 'B', text: '$CH_3CHO$' },
      { id: 'C', text: '$CH_3COOH$' },
      { id: 'D', text: '$CH_3COCH_3$' }
    ],
    correctAnswer: 'C',
    explanation: '$CH_3COOH$ là carboxylic acid nên làm quỳ tím chuyển đỏ.',
    difficulty: 'NhanBiet',
    source: 'SGK Hoá 11 - Bài 25'
  },
  {
    id: 'qz-25-7',
    lessonId: 'bai-25',
    question: 'Sản phẩm phản ứng giữa $CH_3COOH$ và $CaCO_3$ gồm',
    options: [
      { id: 'A', text: '$(CH_3COO)_2Ca + H_2O + CO_2\\uparrow$' },
      { id: 'B', text: '$CH_3COOCa + CO_2\\uparrow$' },
      { id: 'C', text: '$(CH_3COO)_2Ca + H_2\\uparrow$' },
      { id: 'D', text: '$CH_3COONa + H_2O$' }
    ],
    correctAnswer: 'A',
    explanation: '$2CH_3COOH + CaCO_3 \\rightarrow (CH_3COO)_2Ca + H_2O + CO_2\\uparrow$.',
    difficulty: 'NhanBiet',
    source: 'SGK Hoá 11 - Bài 25'
  },
  {
    id: 'qz-25-8',
    lessonId: 'bai-25',
    question: 'Đun nóng hỗn hợp $CH_3COOH$ và $C_2H_5OH$ có mặt $H_2SO_4$ đặc thu được ester có tên là',
    options: [
      { id: 'A', text: 'methyl acetate' },
      { id: 'B', text: 'ethyl acetate' },
      { id: 'C', text: 'ethyl formate' },
      { id: 'D', text: 'methyl formate' }
    ],
    correctAnswer: 'B',
    explanation: '$CH_3COOH + C_2H_5OH \\xrightleftharpoons[t^\\circ]{H_2SO_4 \\text{ đặc}} CH_3COOC_2H_5 \\text{ (ethyl acetate)} + H_2O$.',
    difficulty: 'NhanBiet',
    source: 'SGK Hoá 11 - Bài 25'
  },
  {
    id: 'qz-25-9',
    lessonId: 'bai-25',
    question: 'Phản ứng nào sau đây được dùng để điều chế $CH_3COOH$ trong sản xuất giấm ăn?',
    options: [
      { id: 'A', text: 'Oxi hoá ethylene' },
      { id: 'B', text: 'Lên men giấm dung dịch ethanol' },
      { id: 'C', text: 'Oxi hoá butane' },
      { id: 'D', text: 'Thuỷ phân ester' }
    ],
    correctAnswer: 'B',
    explanation: '$C_2H_5OH + O_2 \\xrightarrow{\\text{men giấm}} CH_3COOH + H_2O$.',
    difficulty: 'NhanBiet',
    source: 'SGK Hoá 11 - Bài 25'
  },
  {
    id: 'qz-25-10',
    lessonId: 'bai-25',
    question: 'Cho 0,1 mol $HCHO$ tác dụng với dung dịch $AgNO_3/NH_3$ dư đun nóng thu được m gam Ag. Giá trị m là',
    options: [
      { id: 'A', text: '21,6 gam' },
      { id: 'B', text: '43,2 gam' },
      { id: 'C', text: '10,8 gam' },
      { id: 'D', text: '32,4 gam' }
    ],
    correctAnswer: 'B',
    explanation: '1 mol $HCHO$ tráng bạc tạo 4 mol $Ag\\Rightarrow n_{Ag} = 0,4 \\text{ mol} \\Rightarrow m_{Ag} = 0,4 \\times 108 = 43,2 \\text{ gam}$.',
    difficulty: 'VanDung',
    source: 'SBT Hoá 11 - Bài 25'
  },
  {
    id: 'qz-25-11',
    lessonId: 'bai-25',
    question: 'Phản ứng iodoform dùng để nhận biết nhóm chức nào?',
    options: [
      { id: 'A', text: 'Nhóm $-COOH$' },
      { id: 'B', text: 'Nhóm $CH_3-C(=O)-$' },
      { id: 'C', text: 'Nhóm $-OH$' },
      { id: 'D', text: 'Nhóm $-CHO$ ở đầu mạch' }
    ],
    correctAnswer: 'B',
    explanation: 'Các chất chứa nhóm $CH_3-C(=O)-$ tác dụng $I_2/NaOH$ tạo tủa vàng $CHI_3\\downarrow$ (iodoform).',
    difficulty: 'ThongHieu',
    source: 'SGK Hoá 11 - Bài 25'
  },
  {
    id: 'qz-25-12',
    lessonId: 'bai-25',
    question: 'Khử butanone ($CH_3COCH_2CH_3$) bằng $NaBH_4$ thu được sản phẩm là',
    options: [
      { id: 'A', text: 'butan-1-ol' },
      { id: 'B', text: 'butan-2-ol' },
      { id: 'C', text: 'butanal' },
      { id: 'D', text: 'butanoic acid' }
    ],
    correctAnswer: 'B',
    explanation: 'Khử ketone butanone thu được alcohol bậc II tương ứng là butan-2-ol ($CH_3CH(OH)CH_2CH_3$).',
    difficulty: 'ThongHieu',
    source: 'SGK Hoá 11 - Bài 25'
  },
  {
    id: 'qz-25-13',
    lessonId: 'bai-25',
    question: 'Cho 6,0 gam $CH_3COOH$ tác dụng vừa đủ với V mL dung dịch $NaOH$ 1M. Giá trị V là',
    options: [
      { id: 'A', text: '100 mL' },
      { id: 'B', text: '200 mL' },
      { id: 'C', text: '50 mL' },
      { id: 'D', text: '150 mL' }
    ],
    correctAnswer: 'A',
    explanation: '$n_{CH_3COOH} = \\frac{6,0}{60} = 0,1 \\text{ mol} \\Rightarrow n_{NaOH} = 0,1 \\text{ mol} \\Rightarrow V = \\frac{0,1}{1} = 0,1 \\text{ L} = 100 \\text{ mL}$.',
    difficulty: 'VanDung',
    source: 'SBT Hoá 11 - Bài 25'
  },
  {
    id: 'qz-25-14',
    lessonId: 'bai-25',
    question: 'Tên thông thường của $C_6H_5COOH$ là',
    options: [
      { id: 'A', text: 'Formic acid' },
      { id: 'B', text: 'Acetic acid' },
      { id: 'C', text: 'Benzoic acid' },
      { id: 'D', text: 'Oxalic acid' }
    ],
    correctAnswer: 'C',
    explanation: '$C_6H_5COOH$ có tên thông thường là benzoic acid.',
    difficulty: 'NhanBiet',
    source: 'SGK Hoá 11 - Bài 25'
  },
  {
    id: 'qz-25-15',
    lessonId: 'bai-25',
    question: 'Sản phẩm phụ của phản ứng tráng bạc giữa $CH_3CHO$ và thuốc thử Tollens là',
    options: [
      { id: 'A', text: '$CH_3COONa$' },
      { id: 'B', text: '$CH_3COONH_4, NH_3, H_2O$' },
      { id: 'C', text: '$CH_3COOH$' },
      { id: 'D', text: '$CO_2, H_2O$' }
    ],
    correctAnswer: 'B',
    explanation: '$CH_3CHO + 2[Ag(NH_3)_2]OH \\xrightarrow{t^\\circ} CH_3COONH_4 + 2Ag\\downarrow + 3NH_3 + H_2O$.',
    difficulty: 'ThongHieu',
    source: 'SGK Hoá 11 - Bài 25'
  },
  {
    id: 'qz-25-16',
    lessonId: 'bai-25',
    question: 'Tính chất hoá học chung của aldehyde và ketone là',
    options: [
      { id: 'A', text: 'Bị oxi hoá bởi dung dịch $AgNO_3/NH_3$' },
      { id: 'B', text: 'Bị khử bởi $NaBH_4$ tạo alcohol' },
      { id: 'C', text: 'Làm mất màu nước bromine' },
      { id: 'D', text: 'Tạo kết tủa đỏ gạch với $Cu(OH)_2$' }
    ],
    correctAnswer: 'B',
    explanation: 'Cả aldehyde và ketone đều có phản ứng khử bởi $NaBH_4$ tạo alcohol tương ứng. Các phản ứng oxi hoá tráng bạc, $Br_2, Cu(OH)_2$ chỉ dành cho aldehyde.',
    difficulty: 'ThongHieu',
    source: 'SBT Hoá 11 - Bài 25'
  },
  {
    id: 'qz-25-17',
    lessonId: 'bai-25',
    question: 'Cho 0,1 mol một aldehyde no đơn chức X phản ứng với $AgNO_3/NH_3$ dư thu được 21,6 gam Ag. X là',
    options: [
      { id: 'A', text: '$HCHO$' },
      { id: 'B', text: '$CH_3CHO$' },
      { id: 'C', text: '$C_2H_5CHO$' },
      { id: 'D', text: '$C_3H_7CHO$' }
    ],
    correctAnswer: 'B',
    explanation: '$n_{Ag} = \\frac{21,6}{108} = 0,2 \\text{ mol}$. Tỉ lệ $n_{Ag} : n_X = 0,2 : 0,1 = 2 : 1 \\Rightarrow X$ không phải HCHO. $X$ là aldehyde đơn chức bất kỳ ngoại trừ $HCHO$ (ví dụ $CH_3CHO$).',
    difficulty: 'VanDung',
    source: 'SBT Hoá 11 - Bài 25'
  },
  {
    id: 'qz-25-18',
    lessonId: 'bai-25',
    question: 'Chất nào sau đây phản ứng với $CH_3COOH$ giải phóng khí $H_2$?',
    options: [
      { id: 'A', text: '$Cu$' },
      { id: 'B', text: '$Zn$' },
      { id: 'C', text: '$Ag$' },
      { id: 'D', text: '$Au$' }
    ],
    correctAnswer: 'B',
    explanation: '$Zn$ là kim loại đứng trước H trong dãy hoạt động hoá học nên tác dụng với $CH_3COOH$ giải phóng $H_2\\uparrow$.',
    difficulty: 'NhanBiet',
    source: 'SGK Hoá 11 - Bài 25'
  },
  {
    id: 'qz-25-19',
    lessonId: 'bai-25',
    question: 'Cho phản ứng: $2C_4H_{10} + 5O_2 \\xrightarrow{xt, t^\\circ, p} 4CH_3COOH + 2H_2O$. Đây là phản ứng',
    options: [
      { id: 'A', text: 'Lên men giấm' },
      { id: 'B', text: 'Oxi hoá alkane trong công nghiệp' },
      { id: 'C', text: 'Ester hoá' },
      { id: 'D', text: 'Trùng hợp' }
    ],
    correctAnswer: 'B',
    explanation: 'Đây là phương pháp oxi hoá alkane (butane) sản xuất acetic acid quy mô công nghiệp.',
    difficulty: 'NhanBiet',
    source: 'SGK Hoá 11 - Bài 25'
  },
  {
    id: 'qz-25-20',
    lessonId: 'bai-25',
    question: 'Cho 4,6 gam ethanol lên men giấm hoàn toàn thu được m gam $CH_3COOH$. Giá trị của m là',
    options: [
      { id: 'A', text: '6,0 gam' },
      { id: 'B', text: '3,0 gam' },
      { id: 'C', text: '12,0 gam' },
      { id: 'D', text: '4,6 gam' }
    ],
    correctAnswer: 'A',
    explanation: '$n_{C_2H_5OH} = \\frac{4,6}{46} = 0,1 \\text{ mol}$. Lên men 100%: $n_{CH_3COOH} = 0,1 \\text{ mol} \\Rightarrow m = 0,1 \\times 60 = 6,0 \\text{ gam}$.',
    difficulty: 'VanDung',
    source: 'SBT Hoá 11 - Bài 25'
  },
  {
    id: 'qz-25-21',
    lessonId: 'bai-25',
    question: 'Nhiệt độ sôi của $CH_3COOH$ ($118^\\circ C$) cao hơn $C_2H_5OH$ ($78,3^\\circ C$) chủ yếu do',
    options: [
      { id: 'A', text: '$CH_3COOH$ có phân tử khối lớn hơn' },
      { id: 'B', text: 'phân tử $CH_3COOH$ tạo liên kết hydrogen đôi (dimer) bền vững hơn' },
      { id: 'C', text: '$CH_3COOH$ có tính acid' },
      { id: 'D', text: '$CH_3COOH$ dễ bay hơi hơn' }
    ],
    correctAnswer: 'B',
    explanation: 'Do nhóm carboxyl $-COOH$ phân cực mạnh hơn và tạo liên kết hydrogen liên phân tử dạng dimer bền hơn so với alcohol.',
    difficulty: 'ThongHieu',
    source: 'SGK Hoá 11 - Bài 25'
  },
  {
    id: 'qz-25-22',
    lessonId: 'bai-25',
    question: 'Để rửa sạch mỡ bám ở ống nghiệm đựng aniline hoặc vết sơn móng tay chứa sơn nitrocellulose, người ta thường dùng dung môi nào?',
    options: [
      { id: 'A', text: 'Nước cất' },
      { id: 'B', text: 'Acetone' },
      { id: 'C', text: 'Dung dịch $NaCl$' },
      { id: 'D', text: 'Dung dịch $NaHCO_3$' }
    ],
    correctAnswer: 'B',
    explanation: 'Acetone là dung môi hữu cơ cực tốt hoà tan nhiều chất không tan trong nước như sơn móng tay, mỡ.',
    difficulty: 'NhanBiet',
    source: 'SGK Hoá 11 - Bài 25'
  },
  {
    id: 'qz-25-23',
    lessonId: 'bai-25',
    question: 'Chất nào dưới đây thuộc loại dicarboxylic acid?',
    options: [
      { id: 'A', text: '$CH_3COOH$' },
      { id: 'B', text: '$HOOC-COOH$' },
      { id: 'C', text: '$HCOOH$' },
      { id: 'D', text: '$C_6H_5COOH$' }
    ],
    correctAnswer: 'B',
    explanation: '$HOOC-COOH$ (oxalic acid) chứa 2 nhóm $-COOH$, thuộc loại dicarboxylic acid (acid hai chức).',
    difficulty: 'NhanBiet',
    source: 'SGK Hoá 11 - Bài 25'
  },
  {
    id: 'qz-25-24',
    lessonId: 'bai-25',
    question: 'Hợp chất $CH_3CH=CH-COOH$ có tên thay thế là',
    options: [
      { id: 'A', text: 'but-2-enoic acid' },
      { id: 'B', text: 'butanoic acid' },
      { id: 'C', text: 'prop-2-enoic acid' },
      { id: 'D', text: '2-methylpropanoic acid' }
    ],
    correctAnswer: 'A',
    explanation: 'Mạch 4 C chứa 1 nối đôi ở C2 $\\rightarrow$ but-2-enoic acid.',
    difficulty: 'ThongHieu',
    source: 'SBT Hoá 11 - Bài 25'
  },
  {
    id: 'qz-25-25',
    lessonId: 'bai-25',
    question: 'Khi hoá hơi 3,0 gam một carboxylic acid đơn chức X thu được thể tích hơi bằng thể tích của 1,6 gam $O_2$ ở cùng điều kiện. CTPT của X là',
    options: [
      { id: 'A', text: '$HCOOH$' },
      { id: 'B', text: '$CH_3COOH$' },
      { id: 'C', text: '$C_2H_5COOH$' },
      { id: 'D', text: '$C_3H_7COOH$' }
    ],
    correctAnswer: 'A',
    explanation: '$n_{O_2} = \\frac{1,6}{32} = 0,05 \\text{ mol} \\Rightarrow n_X = 0,05 \\text{ mol} \\Rightarrow M_X = \\frac{3,0}{0,05} = 60 \\text{ g/mol} \\Rightarrow CH_3COOH$ (ethanoic acid). À kiểm tra: 60 g/mol là $CH_3COOH$. Đáp án đúng là $CH_3COOH$ (B)!',
    difficulty: 'VanDung',
    source: 'SBT Hoá 11 - Bài 25'
  },
  {
    id: 'qz-25-26',
    lessonId: 'bai-25',
    question: 'Trong các chất: $HCHO, CH_3CHO, CH_3COCH_3, CH_3COOH$, chất nào KHÔNG chứa liên kết đôi $C=O$?',
    options: [
      { id: 'A', text: '$HCHO$' },
      { id: 'B', text: '$CH_3CHO$' },
      { id: 'C', text: '$CH_3COCH_3$' },
      { id: 'D', text: 'Tất cả 4 chất đều chứa liên kết đôi $C=O$' }
    ],
    correctAnswer: 'D',
    explanation: 'Cả aldehyde, ketone và carboxylic acid đều chứa liên kết đôi $C=O$ trong nhóm chức.',
    difficulty: 'ThongHieu',
    source: 'SGK Hoá 11 - Bài 25'
  },
  {
    id: 'qz-25-27',
    lessonId: 'bai-25',
    question: 'Cho các chất: (1) $CH_3CHO$, (2) $CH_3COCH_3$, (3) $CH_3CH_2CHO$, (4) $CH_3COOH$. Các chất THAM GIA phản ứng iodoform là',
    options: [
      { id: 'A', text: '(1) và (2)' },
      { id: 'B', text: '(1), (2) và (3)' },
      { id: 'C', text: '(2) và (4)' },
      { id: 'D', text: '(1) và (3)' }
    ],
    correctAnswer: 'A',
    explanation: '(1) $CH_3CHO$ và (2) $CH_3COCH_3$ có nhóm $CH_3-C(=O)-$ nên phản ứng với $I_2/NaOH$ tạo tủa vàng $CHI_3$. (3) $CH_3CH_2CHO$ và (4) $CH_3COOH$ không có.',
    difficulty: 'ThongHieu',
    source: 'SGK Hoá 11 - Bài 25'
  },
  {
    id: 'qz-25-28',
    lessonId: 'bai-25',
    question: 'Cho 0,1 mol hỗn hợp gồm $HCHO$ và $CH_3CHO$ phản ứng tráng bạc dư thu được 32,4 gam Ag. Tỉ lệ mol của $HCHO$ và $CH_3CHO$ trong hỗn hợp là',
    options: [
      { id: 'A', text: '1 : 1' },
      { id: 'B', text: '1 : 2' },
      { id: 'C', text: '2 : 1' },
      { id: 'D', text: '1 : 3' }
    ],
    correctAnswer: 'A',
    explanation: '$n_{Ag} = \\frac{32,4}{108} = 0,3 \\text{ mol}$. Đặt $x, y$ là mol $HCHO$ và $CH_3CHO$.\n$x + y = 0,1$.\n$4x + 2y = 0,3 \\Rightarrow 2x + 2(x+y) = 0,3 \\Rightarrow 2x + 0,2 = 0,3 \\Rightarrow 2x = 0,1 \\Rightarrow x = 0,05; y = 0,05$.\nTỉ lệ mol $1 : 1$.',
    difficulty: 'VanDung',
    source: 'SBT Hoá 11 - Bài 25'
  },
  {
    id: 'qz-25-29',
    lessonId: 'bai-25',
    question: 'Sodium benzoate ($C_6H_5COONa$) được sử dụng trong công nghiệp làm',
    options: [
      { id: 'A', text: 'Chất bảo quản thực phẩm' },
      { id: 'B', text: 'Nhiên liệu động cơ' },
      { id: 'C', text: 'Chất tẩy rửa gia dụng' },
      { id: 'D', text: 'Tơ sợi nhân tạo' }
    ],
    correctAnswer: 'A',
    explanation: 'Sodium benzoate (kí hiệu E211) là chất bảo quản chống nấm mốc trong thực phẩm đóng hộp, nước giải khát.',
    difficulty: 'NhanBiet',
    source: 'SGK Hoá 11 - Bài 25'
  },
  {
    id: 'qz-25-30',
    lessonId: 'bai-25',
    question: 'Để nhận biết 3 chất lỏng mất nhãn: $C_2H_5OH, CH_3CHO, CH_3COOH$, người ta dùng thuốc thử duy nhất là',
    options: [
      { id: 'A', text: 'Quỳ tím' },
      { id: 'B', text: 'Dung dịch $Cu(OH)_2$ trong $NaOH$' },
      { id: 'C', text: 'Kim loại $Na$' },
      { id: 'D', text: 'Dung dịch $NaCl$' }
    ],
    correctAnswer: 'B',
    explanation: '- Cho $Cu(OH)_2/NaOH$ vào 3 mẫu ở nhiệt độ thường:\n  + $CH_3COOH$ hoà tan $Cu(OH)_2$ tạo dung dịch xanh lam thẫm.\n- Đun nóng 2 mẫu còn lại:\n  + $CH_3CHO$ xuất hiện kết tủa đỏ gạch $Cu_2O\\downarrow$.\n  + $C_2H_5OH$ không có hiện tượng.',
    difficulty: 'VanDung',
    source: 'SBT Hoá 11 - Bài 25'
  }
];

// DE KIEM TRA TONG HOP CHUONG 6 (20 CAU HOI)
export const finalChapter6ExamQuizzes: QuizQuestion[] = [
  {
    id: 'exam-c6-1',
    chapterId: 'chuong-6',
    lessonId: 'final-exam-c6',
    question: 'Hợp chất nào sau đây vừa chứa nhóm carbonyl vừa chứa nhóm hydroxy trong cùng phân tử?',
    options: [
      { id: 'A', text: 'Carboxylic acid' },
      { id: 'B', text: 'Alcohol' },
      { id: 'C', text: 'Aldehyde' },
      { id: 'D', text: 'Ketone' }
    ],
    correctAnswer: 'A',
    explanation: 'Carboxylic acid chứa nhóm carboxyl ($-COOH$), trong đó gồm nhóm carbonyl ($>C=O$) gắn với nhóm hydroxy ($-OH$).',
    difficulty: 'NhanBiet',
    source: 'SGK Hoá 11 - Chương 6'
  },
  {
    id: 'exam-c6-2',
    chapterId: 'chuong-6',
    lessonId: 'final-exam-c6',
    question: 'Công thức cấu tạo của propanal là',
    options: [
      { id: 'A', text: '$CH_3CHO$' },
      { id: 'B', text: '$CH_3CH_2CHO$' },
      { id: 'C', text: '$CH_3COCH_3$' },
      { id: 'D', text: '$CH_3CH_2COOH$' }
    ],
    correctAnswer: 'B',
    explanation: 'Propanal là aldehyde no đơn chức 3 C: $CH_3CH_2CHO$.',
    difficulty: 'NhanBiet',
    source: 'SGK Hoá 11 - Chương 6'
  },
  {
    id: 'exam-c6-3',
    chapterId: 'chuong-6',
    lessonId: 'final-exam-c6',
    question: 'Khử butanal bằng $NaBH_4$ thu được sản phẩm hữu cơ là',
    options: [
      { id: 'A', text: 'butan-1-ol' },
      { id: 'B', text: 'butan-2-ol' },
      { id: 'C', text: 'butanoic acid' },
      { id: 'D', text: 'butanone' }
    ],
    correctAnswer: 'A',
    explanation: 'Khử aldehyde butanal thu được alcohol bậc I tương ứng là buan-1-ol.',
    difficulty: 'ThongHieu',
    source: 'SGK Hoá 11 - Chương 6'
  },
  {
    id: 'exam-c6-4',
    chapterId: 'chuong-6',
    lessonId: 'final-exam-c6',
    question: 'Tráng bạc hoàn toàn 0,05 mol $CH_3CHO$ thu được m gam Ag. Giá trị của m là',
    options: [
      { id: 'A', text: '5,4 gam' },
      { id: 'B', text: '10,8 gam' },
      { id: 'C', text: '21,6 gam' },
      { id: 'D', text: '16,2 gam' }
    ],
    correctAnswer: 'B',
    explanation: '$n_{Ag} = 2 \\times n_{CH_3CHO} = 2 \\times 0,05 = 0,1 \\text{ mol} \\Rightarrow m = 0,1 \\times 108 = 10,8 \\text{ gam}$.',
    difficulty: 'VanDung',
    source: 'SBT Hoá 11 - Chương 6'
  },
  {
    id: 'exam-c6-5',
    chapterId: 'chuong-6',
    lessonId: 'final-exam-c6',
    question: 'Chất nào sau đây phản ứng với $I_2/NaOH$ cho kết tủa màu vàng iodoform?',
    options: [
      { id: 'A', text: '$HCHO$' },
      { id: 'B', text: '$CH_3COCH_3$' },
      { id: 'C', text: '$CH_3CH_2CHO$' },
      { id: 'D', text: '$CH_3COOH$' }
    ],
    correctAnswer: 'B',
    explanation: '$CH_3COCH_3$ có nhóm $CH_3-C(=O)-$ nên phản ứng với $I_2/NaOH$ tạo kết tủa vàng $CHI_3\\downarrow$.',
    difficulty: 'ThongHieu',
    source: 'SGK Hoá 11 - Chương 6'
  },
  {
    id: 'exam-c6-6',
    chapterId: 'chuong-6',
    lessonId: 'final-exam-c6',
    question: 'Tên thay thế của $CH_3COOH$ là',
    options: [
      { id: 'A', text: 'methanoic acid' },
      { id: 'B', text: 'ethanoic acid' },
      { id: 'C', text: 'propanoic acid' },
      { id: 'D', text: 'benzoic acid' }
    ],
    correctAnswer: 'B',
    explanation: '$CH_3COOH$ có 2 C, tên thay thế là ethanoic acid.',
    difficulty: 'NhanBiet',
    source: 'SGK Hoá 11 - Chương 6'
  },
  {
    id: 'exam-c6-7',
    chapterId: 'chuong-6',
    lessonId: 'final-exam-c6',
    question: 'Chất nào sau đây có nhiệt độ sôi cao nhất?',
    options: [
      { id: 'A', text: '$CH_3CH_2CH_3$' },
      { id: 'B', text: '$CH_3CHO$' },
      { id: 'C', text: '$C_2H_5OH$' },
      { id: 'D', text: '$CH_3COOH$' }
    ],
    correctAnswer: 'D',
    explanation: 'Thứ tự nhiệt độ sôi: Acid > Alcohol > Aldehyde > Alkane ($CH_3COOH > C_2H_5OH > CH_3CHO > CH_3CH_2CH_3$).',
    difficulty: 'ThongHieu',
    source: 'SGK Hoá 11 - Chương 6'
  },
  {
    id: 'exam-c6-8',
    chapterId: 'chuong-6',
    lessonId: 'final-exam-c6',
    question: 'Cho 3,0 gam $HCOOH$ tác dụng với dung dịch $Na_2CO_3$ dư, thể tích khí $CO_2$ thu được ở đkc là',
    options: [
      { id: 'A', text: '0,807 L' },
      { id: 'B', text: '1,614 L' },
      { id: 'C', text: '0,403 L' },
      { id: 'D', text: '2,421 L' }
    ],
    correctAnswer: 'A',
    explanation: '$n_{HCOOH} = \\frac{3,0}{46} = 0,0652 \\text{ mol}$. $2HCOOH + Na_2CO_3 \\rightarrow 2HCOONa + H_2O + CO_2\\uparrow \\Rightarrow n_{CO_2} = 0,0326 \\text{ mol} \\Rightarrow V = 0,0326 \\times 24,79 \\approx 0,808 \\text{ L}$.',
    difficulty: 'VanDung',
    source: 'SBT Hoá 11 - Chương 6'
  },
  {
    id: 'exam-c6-9',
    chapterId: 'chuong-6',
    lessonId: 'final-exam-c6',
    question: 'Sản phẩm phản ứng ester hoá giữa $HCOOH$ và $C_2H_5OH$ là',
    options: [
      { id: 'A', text: 'ethyl formate' },
      { id: 'B', text: 'ethyl acetate' },
      { id: 'C', text: 'methyl formate' },
      { id: 'D', text: 'methyl acetate' }
    ],
    correctAnswer: 'A',
    explanation: '$HCOOH + C_2H_5OH \\xrightleftharpoons[t^\\circ]{H_2SO_4 \\text{ đặc}} HCOOC_2H_5 \\text{ (ethyl formate)} + H_2O$.',
    difficulty: 'NhanBiet',
    source: 'SGK Hoá 11 - Chương 6'
  },
  {
    id: 'exam-c6-10',
    chapterId: 'chuong-6',
    lessonId: 'final-exam-c6',
    question: 'Tác nhân xúc tác chính trong công nghiệp sản xuất $CH_3COOH$ từ lên men ethanol là',
    options: [
      { id: 'A', text: 'men giấm (acetobacter)' },
      { id: 'B', text: 'men rượu' },
      { id: 'C', text: '$H_2SO_4$ đặc' },
      { id: 'D', text: '$PdCl_2$' }
    ],
    correctAnswer: 'A',
    explanation: 'Quá trình lên men giấm dùng vi khuẩn men giấm (acetobacter): $C_2H_5OH + O_2 \\xrightarrow{\\text{men giấm}} CH_3COOH + H_2O$.',
    difficulty: 'NhanBiet',
    source: 'SGK Hoá 11 - Chương 6'
  },
  {
    id: 'exam-c6-11',
    chapterId: 'chuong-6',
    lessonId: 'final-exam-c6',
    question: 'Aldehyde nào được sử dụng phổ biến để sản xuất nhựa phenol-formaldehyde và dung dịch formol ngâm xác?',
    options: [
      { id: 'A', text: 'Formaldehyde ($HCHO$)' },
      { id: 'B', text: 'Acetaldehyde ($CH_3CHO$)' },
      { id: 'C', text: 'Benzaldehyde ($C_6H_5CHO$)' },
      { id: 'D', text: 'Propanal ($C_2H_5CHO$)' }
    ],
    correctAnswer: 'A',
    explanation: 'Formaldehyde được sản xuất nhựa nham phenolic và dung dịch formol (37-40%) dùng ngâm bảo quản mẫu vật.',
    difficulty: 'NhanBiet',
    source: 'SGK Hoá 11 - Chương 6'
  },
  {
    id: 'exam-c6-12',
    chapterId: 'chuong-6',
    lessonId: 'final-exam-c6',
    question: 'Khi phản ứng cộng $HCN$ vào propanone ($CH_3COCH_3$), sản phẩm thu được là',
    options: [
      { id: 'A', text: '$(CH_3)_2C(OH)CN$' },
      { id: 'B', text: '$CH_3CH_2CH_2OH$' },
      { id: 'C', text: '$CH_3CH(OH)CN$' },
      { id: 'D', text: '$CH_3COOH$' }
    ],
    correctAnswer: 'A',
    explanation: '$CH_3COCH_3 + HCN \\rightarrow (CH_3)_2C(OH)CN$ (acetone cyanohydrin).',
    difficulty: 'ThongHieu',
    source: 'SGK Hoá 11 - Chương 6'
  },
  {
    id: 'exam-c6-13',
    chapterId: 'chuong-6',
    lessonId: 'final-exam-c6',
    question: 'Chất nào sau đây vừa tác dụng với $Na$, vừa tác dụng với $NaOH$ và $Na_2CO_3$?',
    options: [
      { id: 'A', text: '$C_2H_5OH$' },
      { id: 'B', text: '$C_6H_5OH$' },
      { id: 'C', text: '$CH_3COOH$' },
      { id: 'D', text: '$CH_3CHO$' }
    ],
    correctAnswer: 'C',
    explanation: '$CH_3COOH$ chứa nhóm $-COOH$ mang tính acid phản ứng với $Na$, $NaOH$ và $Na_2CO_3$. Phenol không phản ứng $Na_2CO_3$, ethanol không phản ứng $NaOH, Na_2CO_3$.',
    difficulty: 'ThongHieu',
    source: 'SGK Hoá 11 - Chương 6'
  },
  {
    id: 'exam-c6-14',
    chapterId: 'chuong-6',
    lessonId: 'final-exam-c6',
    question: 'Nhóm chức carbonyl phân cực là do',
    options: [
      { id: 'A', text: 'Độ âm điện của oxygen lớn hơn carbon' },
      { id: 'B', text: 'Carbon mang điện tích âm' },
      { id: 'C', text: 'Oxygen không hút electron' },
      { id: 'D', text: 'Góc liên kết là $180^\\circ$' }
    ],
    correctAnswer: 'A',
    explanation: 'Oxygen có độ âm điện lớn hơn carbon ($3,44 > 2,55$) nên mật độ electron đẩy về phía O, làm liên kết $C=O$ phân cực mạnh.',
    difficulty: 'NhanBiet',
    source: 'SGK Hoá 11 - Chương 6'
  },
  {
    id: 'exam-c6-15',
    chapterId: 'chuong-6',
    lessonId: 'final-exam-c6',
    question: 'Đốt cháy hoàn toàn 0,1 mol một carboxylic acid no đơn chức hở X cần dùng 0,35 mol $O_2$. Công thức phân tử của X là',
    options: [
      { id: 'A', text: '$HCOOH$' },
      { id: 'B', text: '$CH_3COOH$' },
      { id: 'C', text: '$C_2H_5COOH$' },
      { id: 'D', text: '$C_3H_7COOH$' }
    ],
    correctAnswer: 'C',
    explanation: 'CTPT $C_n H_{2n}O_2$. Phương trình: $C_n H_{2n}O_2 + \\frac{3n-2}{2} O_2 \\rightarrow nCO_2 + nH_2O$.\nTheo đề: $\\frac{3n-2}{2} = \\frac{0,35}{0,1} = 3,5 \\Rightarrow 3n - 2 = 7 \\Rightarrow 3n = 9 \\Rightarrow n = 3 \\Rightarrow C_3H_6O_2 \\equiv C_2H_5COOH$ (propanoic acid).',
    difficulty: 'VanDung',
    source: 'SBT Hoá 11 - Chương 6'
  },
  {
    id: 'exam-c6-16',
    chapterId: 'chuong-6',
    lessonId: 'final-exam-c6',
    question: 'Oxalic acid có công thức là',
    options: [
      { id: 'A', text: '$HCOOH$' },
      { id: 'B', text: '$HOOC-COOH$' },
      { id: 'C', text: '$CH_3COOH$' },
      { id: 'D', text: '$C_6H_5COOH$' }
    ],
    correctAnswer: 'B',
    explanation: 'Oxalic acid có công thức $HOOC-COOH$ (ethanedioic acid).',
    difficulty: 'NhanBiet',
    source: 'SGK Hoá 11 - Chương 6'
  },
  {
    id: 'exam-c6-17',
    chapterId: 'chuong-6',
    lessonId: 'final-exam-c6',
    question: 'Oxi hoá ethylene thu được chất nào dưới đây trong công nghiệp?',
    options: [
      { id: 'A', text: '$CH_3CHO$' },
      { id: 'B', text: '$HCHO$' },
      { id: 'C', text: '$CH_3COOH$' },
      { id: 'D', text: '$C_2H_5OH$' }
    ],
    correctAnswer: 'A',
    explanation: '$2CH_2=CH_2 + O_2 \\xrightarrow{PdCl_2, CuCl_2} 2CH_3CHO$.',
    difficulty: 'NhanBiet',
    source: 'SGK Hoá 11 - Chương 6'
  },
  {
    id: 'exam-c6-18',
    chapterId: 'chuong-6',
    lessonId: 'final-exam-c6',
    question: 'Cho 0,1 mol $CH_3CHO$ phản ứng hoàn toàn với dung dịch $Cu(OH)_2$ trong $NaOH$ đun nóng thu được m gam $Cu_2O$. Giá trị của m là',
    options: [
      { id: 'A', text: '14,4 gam' },
      { id: 'B', text: '28,8 gam' },
      { id: 'C', text: '7,2 gam' },
      { id: 'D', text: '21,6 gam' }
    ],
    correctAnswer: 'A',
    explanation: '$n_{Cu_2O} = n_{CH_3CHO} = 0,1 \\text{ mol} \\Rightarrow m_{Cu_2O} = 0,1 \\times 144 = 14,4 \\text{ gam}$.',
    difficulty: 'VanDung',
    source: 'SBT Hoá 11 - Chương 6'
  },
  {
    id: 'exam-c6-19',
    chapterId: 'chuong-6',
    lessonId: 'final-exam-c6',
    question: 'Trong phân tử acetic acid ($CH_3COOH$), góc liên kết xung quanh nguyên tử C của nhóm $-COOH$ khoảng',
    options: [
      { id: 'A', text: '$120^\\circ$' },
      { id: 'B', text: '$109,5^\\circ$' },
      { id: 'C', text: '$180^\\circ$' },
      { id: 'D', text: '$90^\\circ$' }
    ],
    correctAnswer: 'A',
    explanation: 'Carbon ở nhóm $-COOH$ ở dạng lai hoá $sp^2$, dạng hình học tam giác phẳng với góc liên kết xấp xỉ $120^\\circ$.',
    difficulty: 'NhanBiet',
    source: 'SGK Hoá 11 - Chương 6'
  },
  {
    id: 'exam-c6-20',
    chapterId: 'chuong-6',
    lessonId: 'final-exam-c6',
    question: 'Để đun nấu giấm ăn trong nồi nhôm làm bằng kim loại $Al$, nhận xét nào sau đây ĐÚNG?',
    options: [
      { id: 'A', text: 'Không nên dùng nồi nhôm đựng giấm vì acetic acid ăn mòn kim loại $Al$' },
      { id: 'B', text: 'Có thể dùng vô tư vì giấm ăn không phản ứng với $Al$' },
      { id: 'C', text: '$Al$ làm tăng vị chua của giấm' },
      { id: 'D', text: 'Giấm ăn tạo lớp màng bảo vệ nhôm bền vững hơn' }
    ],
    correctAnswer: 'A',
    explanation: 'Giấm ăn có chứa $CH_3COOH$ có tính acid hoà tan $Al_2O_3$ và ăn mòn kim loại $Al$: $6CH_3COOH + 2Al \\rightarrow 2(CH_3COO)_3Al + 3H_2\\uparrow$, gây hỏng đồ dùng và nhiễm độc nhôm.',
    difficulty: 'ThongHieu',
    source: 'SGK Hoá 11 - Chương 6'
  }
];
