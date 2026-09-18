import { TheorySectionData, Flashcard, QuizQuestion } from '../../types';

export const lesson24Theory: TheorySectionData = {
  id: 'bai-24',
  chapterId: 'chuong-6',
  title: 'Bài 24: Carboxylic acid',
  objectives: [
    'Nêu được khái niệm về carboxylic acid.',
    'Viết được công thức cấu tạo và gọi tên một số acid theo danh pháp thay thế ($C_1 - C_5$) và một vài acid thường gặp theo tên thông thường (formic acid, acetic acid, benzoic acid, oxalic acid,...).',
    'Trình bày được đặc điểm cấu tạo và hình dạng phân tử acetic acid.',
    'Nêu và giải thích được đặc điểm về tính chất vật lí (trạng thái, nhiệt độ sôi, tính tan) của carboxylic acid.',
    'Trình bày được tính chất hoá học cơ bản của carboxylic acid: tính acid (phản ứng với chất chỉ thị, kim loại, oxide kim loại, base, muối) và phản ứng ester hoá.',
    'Thực hiện được thí nghiệm về phản ứng của acetic acid với quỳ tím, $Na_2CO_3$ (hoặc $CaCO_3$), $Mg$; điều chế ethyl acetate (hoặc quan sát qua video/mô tả) và giải thích tính chất hoá học của carboxylic acid.',
    'Trình bày được ứng dụng của một số carboxylic acid thông dụng và phương pháp điều chế acetic acid bằng phương pháp lên men giấm và phản ứng oxi hoá alkane.'
  ],
  summary: 'Carboxylic acid chứa nhóm carboxyl ($-COOH$) liên kết với gốc hydrocarbon hoặc H. Nhóm $-COOH$ phân cực mạnh, các phân tử acid tạo liên kết hydrogen bền dạng dimer làm nhiệt độ sôi cao nhất trong số các hợp chất có phân tử khối tương đương. Carboxylic acid có đầy đủ tính chất của một acid yếu (đổi màu quỳ đỏ, phản ứng với Zn/Mg, CuO, NaOH, $Na_2CO_3/CaCO_3$) và tham gia phản ứng ester hoá với alcohol xúc tác $H_2SO_4$ đặc, đun nóng.',
  coreKnowledge: [
    {
      heading: '1. Khái niệm & Danh pháp Carboxylic acid',
      points: [
        'Carboxylic acid là các hợp chất hữu cơ trong phân tử có nhóm carboxyl ($-COOH$) liên kết với nguyên tử carbon (trong gốc hydrocarbon hoặc nhóm $-COOH$) hoặc nguyên tử hydrogen.',
        'Công thức tổng quát đơn chức: $R-COOH$ ($R$ là H hoặc gốc hydrocarbon).',
        'Danh pháp thay thế (đơn chức): Tên hydrocarbon tương ứng (tính cả C của $-COOH$, bỏ e) + "oic acid". Đánh số C bắt đầu từ nhóm $-COOH$.',
        'Một số tên thay thế và tên thông thường quan trọng:',
        '- $HCOOH$: methanoic acid (formic acid - nọc kiến).',
        '- $CH_3COOH$: ethanoic acid (acetic acid - giấm ăn).',
        '- $CH_3CH_2COOH$: propanoic acid (propionic acid).',
        '- $CH_3CH_2CH_2COOH$: butanoic acid (butyric acid - bơ).',
        '- $CH_3[CH_2]_{14}COOH$: hexadecanoic acid (palmitic acid).',
        '- $CH_3[CH_2]_{16}COOH$: octadecanoic acid (stearic acid).',
        '- $C_6H_5COOH$: benzoic acid (benzoic acid).',
        '- $HOOC-COOH$: ethanedioic acid (oxalic acid - quả khế).'
      ],
      latexEquations: [
        '\\text{Carboxylic acid đơn chức: } R-COOH',
        '\\text{Carboxylic acid no, đơn chức, mạch hở: } C_n H_{2n+1}COOH \\quad (n \\ge 0) \\quad \\text{hay } C_n H_{2n}O_2 \\quad (n \\ge 1)'
      ]
    },
    {
      heading: '2. Đặc điểm cấu tạo & Tính chất vật lí',
      points: [
        'Cấu tạo nhóm carboxyl: Nhóm $-COOH$ gồm nhóm hydroxy ($-OH$) liên kết với nhóm carbonyl ($>C=O$). Nhóm $>C=O$ hút electron làm liên kết $O-H$ phân cực mạnh hơn so with alcohol, nguyên tử H linh động hơn nên phân li ra $H^+$ thể hiện tính acid.',
        'Liên kết hydrogen & Dimer: Các phân tử carboxylic acid liên kết hydrogen với nhau rất bền tạo thành dạng dimer (phân tử đôi) hoặc chuỗi liên kết hydrogen liên phân tử.',
        'Nhiệt độ sôi: Cao hơn hẳn hydrocarbon, aldehyde, ketone và alcohol có phân tử khối tương đương (Carboxylic acid > Alcohol > Aldehyde/Ketone > Hydrocarbon).',
        'Tính tan & Vị: $HCOOH, CH_3COOH, CH_3CH_2COOH$ tan vô hạn trong nước. Khi mạch C tăng, độ tan giảm. Các acid có vị chua đặc trưng.'
      ]
    },
    {
      heading: '3. Tính chất hoá học',
      points: [
        'a) Tính acid (Acid yếu): Phân li không hoàn toàn trong nước. Làm quỳ tím chuyển sang màu đỏ.',
        '- Tác dụng với kim loại đứng trước H: $2CH_3COOH + Zn \\rightarrow (CH_3COO)_2Zn + H_2\\uparrow$.',
        '- Tác dụng với oxide base & base: $2CH_3COOH + CuO \\rightarrow (CH_3COO)_2Cu + H_2O$; $CH_3COOH + NaOH \\rightarrow CH_3COONa + H_2O$.',
        '- Tác dụng với muối của acid yếu hơn (muối carbonate): $2CH_3COOH + CaCO_3 \\rightarrow (CH_3COO)_2Ca + H_2O + CO_2\\uparrow$ (Dùng giấm ăn tẩy cặn vôi ở ấm đun nước).',
        'b) Phản ứng ester hoá: Carboxylic acid tác dụng với alcohol có xúc tác $H_2SO_4$ đặc, đun nóng là phản ứng thuận nghịch tạo ester và nước.'
      ],
      latexEquations: [
        'R-COOH + H_2O \\rightleftharpoons R-COO^- + H_3O^+',
        '2CH_3COOH + CaCO_3 \\rightarrow (CH_3COO)_2Ca + H_2O + CO_2\\uparrow',
        'R-COOH + R\'-OH \\xrightleftharpoons[t^\\circ]{H_2SO_4 \\text{ đặc}} R-COO-R\' + H_2O',
        'CH_3COOH + C_2H_5OH \\xrightleftharpoons[t^\\circ]{H_2SO_4 \\text{ đặc}} CH_3COOC_2H_5 + H_2O'
      ]
    },
    {
      heading: '4. Điều chế & Ứng dụng',
      points: [
        'a) Điều chế Acetic acid:',
        '- Lên men giấm từ ethanol: $C_2H_5OH + O_2 \\xrightarrow{\\text{men giấm}} CH_3COOH + H_2O$.',
        '- Oxi hoá alkane (butane) trong công nghiệp: $2CH_3CH_2CH_2CH_3 + 5O_2 \\xrightarrow{xt, t^\\circ, p} 4CH_3COOH + 2H_2O$.',
        'b) Ứng dụng: Chế biến thực phẩm (giấm ăn chứa 4-8% acetic acid), sản xuất dược phẩm (aspirin, thuốc giảm đau), tơ nhân tạo (acetate), chất dẻo, phẩm nhuộm, chất tẩy rửa.'
      ],
      latexEquations: [
        'C_2H_5OH + O_2 \\xrightarrow{\\text{men giấm}} CH_3COOH + H_2O',
        '2C_4H_{10} + 5O_2 \\xrightarrow{xt, t^\\circ, p} 4CH_3COOH + 2H_2O'
      ]
    }
  ],
  formulas: [
    {
      name: 'Công thức Carboxylic acid no, đơn chức, mạch hở',
      latex: 'C_n H_{2n+1}COOH \\quad (n \\ge 0) \\quad \\text{hoặc} \\quad C_n H_{2n}O_2 \\quad (n \\ge 1)',
      description: 'Chứa 1 nhóm -COOH liên kết với gốc alkyl hoặc H'
    },
    {
      name: 'Hằng số phân li acid (Ka)',
      latex: 'K_a = \\frac{[RCOO^-][H^+]}{[RCOOH]}',
      description: 'Giá trị Ka càng lớn thì tính acid càng mạnh (ví dụ HCOOH Ka = 1,8.10^-4 > CH3COOH Ka = 1,8.10^-5)'
    }
  ],
  keyConcepts: [
    {
      term: 'Nhóm Carboxyl',
      definition: 'Nhóm chức -COOH cấu tạo gồm nhóm carbonyl (>C=O) liên kết với nhóm hydroxy (-OH).'
    },
    {
      term: 'Liên kết Hydrogen dạng Dimer',
      definition: 'Dạng phân tử đôi do 2 phân tử carboxylic acid liên kết hydrogen đôi với nhau rất bền vững.'
    },
    {
      term: 'Phản ứng Ester hoá',
      definition: 'Phản ứng giữa carboxylic acid và alcohol có xúc tác H2SO4 đặc, đun nóng tạo ester và nước.'
    },
    {
      term: 'Giấm ăn',
      definition: 'Dung dịch acetic acid CH3COOH nồng độ 4 - 8% trong nước.'
    }
  ],
  examples: [
    {
      title: 'Ví dụ 1: Giải thích sự tẩy cặn vôi bằng giấm ăn',
      content: 'Vì sao dùng giấm ăn có thể làm sạch lớp cặn vôi trắng ($CaCO_3$) bám ở đáy ấm đun nước?',
      solution: 'Trong giấm ăn chứa acetic acid ($CH_3COOH$) là acid. Cặn vôi chứa $CaCO_3$ là muối carbonate của acid yếu. Acetic acid tác dụng với $CaCO_3$ sinh ra muối tan $Ca(CH_3COO)_2$ và khí $CO_2$ thoát ra: $2CH_3COOH + CaCO_3 \\rightarrow (CH_3COO)_2Ca + H_2O + CO_2\\uparrow$, làm tan cặn vôi.'
    },
    {
      title: 'Ví dụ 2: Bài toán phản ứng ester hoá',
      content: 'Trộn 12,0 gam $CH_3COOH$ với 11,5 gam $C_2H_5OH$ rồi đun nóng với $H_2SO_4$ đặc làm xúc tác. Sau phản ứng thu được 11,0 gam $CH_3COOC_2H_5$. Tính hiệu suất phản ứng ester hoá.',
      solution: '$n_{CH_3COOH} = \\frac{12}{60} = 0,2 \\text{ mol}$. $n_{C_2H_5OH} = \\frac{11,5}{46} = 0,25 \\text{ mol}$.\nPhương trình: $CH_3COOH + C_2H_5OH \\xrightleftharpoons[t^\\circ]{H_2SO_4 \\text{ đặc}} CH_3COOC_2H_5 + H_2O$.\nTỉ lệ mol 1:1, do $0,2 < 0,25$ nên tính hiệu suất theo $CH_3COOH$.\n$n_{ester \\text{ lý thuyết}} = 0,2 \\text{ mol} \\Rightarrow m_{ester \\text{ lý thuyết}} = 0,2 \\times 88 = 17,6 \\text{ g}$.\nHiệu suất $H(\\%) = \\frac{11,0}{17,6} \\times 100\\% = 62,5\\%$.'
    }
  ],
  commonMistakes: [
    {
      mistake: 'Cho rằng Carboxylic acid là acid mạnh phân li hoàn toàn.',
      correction: 'Carboxylic acid như CH3COOH, HCOOH là acid YẾU, phân li không hoàn toàn trong nước (K_a khoảng 10^-4 đến 10^-5).',
      why: 'Trong dung dịch 0,1 M CH3COOH chỉ có khoảng 1,3% phân tử phân li thành ion.'
    },
    {
      mistake: 'Nhiệt độ sôi của Carboxylic acid thấp hơn Alcohol có cùng số C.',
      correction: 'Nhiệt độ sôi của Carboxylic acid CAO HƠN Alcohol tương ứng do liên kết hydrogen liên phân tử ở acid bền hơn (tạo dạng dimer).',
      why: 'Acetic acid (M=60) sôi ở 118°C, propan-1-ol (M=60) sôi ở 97,2°C.'
    }
  ],
  memoryTips: [
    'Thứ tự nhiệt độ sôi: Acid > Alcohol > Aldehyde > Alkane.',
    'Giấm ăn: 4 - 8% Acetic acid ($CH_3COOH$).',
    'Ester hoá: Acid + Alcohol -> Ester + Nước (H2SO4 đặc, đun nóng, thuận nghịch).'
  ],
  glossary: [
    {
      term: 'Formic acid',
      meaning: 'Methanoic acid (HCOOH), acid đơn giản nhất có trong nọc kiến.'
    },
    {
      term: 'Esterification',
      meaning: 'Phản ứng ester hoá giữa carboxylic acid và alcohol.'
    },
    {
      term: 'Dimer',
      meaning: 'Dạng kết hợp 2 phân tử thông qua liên kết hydrogen liên phân tử.'
    }
  ],
  reviewChecklist: [
    'Gọi đúng tên thay thế và tên thông thường của $HCOOH, CH_3COOH, C_6H_5COOH, HOOC-COOH$.',
    'So sánh được nhiệt độ sôi của acid, alcohol, aldehyde, alkane.',
    'Viết đúng các phương trình phản ứng thể hiện tính acid của $CH_3COOH$.',
    'Viết phương trình ester hoá và tính hiệu suất phản ứng.',
    'Trình bày phương pháp lên men giấm và oxi hoá alkane điều chế $CH_3COOH$.'
  ]
};

export const lesson24Flashcards: Flashcard[] = [
  {
    id: 'fc-24-1',
    lessonId: 'bai-24',
    front: 'Carboxylic acid là gì?',
    back: 'Là hợp chất hữu cơ trong phân tử chứa nhóm carboxyl ($-COOH$) liên kết với H hoặc gốc hydrocarbon.',
    category: 'carboxylic-acid'
  },
  {
    id: 'fc-24-2',
    lessonId: 'bai-24',
    front: 'Tên thay thế và tên thông thường của $HCOOH$ và $CH_3COOH$ là gì?',
    back: '$HCOOH$: methanoic acid (formic acid).\n$CH_3COOH$: ethanoic acid (acetic acid).',
    category: 'carboxylic-acid'
  },
  {
    id: 'fc-24-3',
    lessonId: 'bai-24',
    front: 'Tên thông thường của $HOOC-COOH$ và $C_6H_5COOH$ là gì?',
    back: '$HOOC-COOH$: oxalic acid (ethanedioic acid).\n$C_6H_5COOH$: benzoic acid.',
    category: 'carboxylic-acid'
  },
  {
    id: 'fc-24-4',
    lessonId: 'bai-24',
    front: 'Vì sao carboxylic acid có nhiệt độ sôi cao hơn alcohol có phân tử khối tương đương?',
    back: 'Do nhóm $-COOH$ phân cực mạnh hơn và tạo liên kết hydrogen liên phân tử bền hơn (dạng dimer) so với nhóm $-OH$ của alcohol.',
    category: 'carboxylic-acid'
  },
  {
    id: 'fc-24-5',
    lessonId: 'bai-24',
    front: 'Carboxylic acid có tính acid mạnh hay yếu?',
    back: 'Là acid yếu, phân li không hoàn toàn trong nước ($R-COOH + H_2O \\rightleftharpoons R-COO^- + H_3O^+$).',
    category: 'carboxylic-acid'
  },
  {
    id: 'fc-24-6',
    lessonId: 'bai-24',
    front: 'Hiện tượng khi cho giấm ăn tác dụng với cặn vôi $CaCO_3$?',
    back: 'Cặn vôi tan ra, có sủi bọt khí $CO_2\\uparrow$: $2CH_3COOH + CaCO_3 \\rightarrow (CH_3COO)_2Ca + H_2O + CO_2\\uparrow$.',
    category: 'carboxylic-acid'
  },
  {
    id: 'fc-24-7',
    lessonId: 'bai-24',
    front: 'Phương trình phản ứng giữa $CH_3COOH$ và $Zn$?',
    back: '$2CH_3COOH + Zn \\rightarrow (CH_3COO)_2Zn + H_2\\uparrow$.',
    category: 'carboxylic-acid'
  },
  {
    id: 'fc-24-8',
    lessonId: 'bai-24',
    front: 'Phản ứng ester hoá là gì?',
    back: 'Là phản ứng giữa carboxylic acid và alcohol xúc tác $H_2SO_4$ đặc, đun nóng: $RCOOH + R\'OH \\xrightleftharpoons[t^\\circ]{H_2SO_4 \\text{ đặc}} RCOOR\' + H_2O$.',
    category: 'carboxylic-acid'
  },
  {
    id: 'fc-24-9',
    lessonId: 'bai-24',
    front: 'Vai trò của $H_2SO_4$ đặc trong phản ứng ester hoá?',
    back: 'Vừa làm xúc tác cho phản ứng, vừa hút nước làm cân bằng chuyển dịch theo chiều thuận tăng hiệu suất.',
    category: 'carboxylic-acid'
  },
  {
    id: 'fc-24-10',
    lessonId: 'bai-24',
    front: 'Nồng độ acetic acid trong giấm ăn là bao nhiêu?',
    back: 'Khoảng 4% - 8%.',
    category: 'carboxylic-acid'
  },
  {
    id: 'fc-24-11',
    lessonId: 'bai-24',
    front: 'Phương trình điều chế $CH_3COOH$ bằng phương pháp lên men giấm?',
    back: '$C_2H_5OH + O_2 \\xrightarrow{\\text{men giấm}} CH_3COOH + H_2O$.',
    category: 'carboxylic-acid'
  },
  {
    id: 'fc-24-12',
    lessonId: 'bai-24',
    front: 'Phương trình điều chế $CH_3COOH$ bằng cách oxi hoá butane?',
    back: '$2C_4H_{10} + 5O_2 \\xrightarrow{xt, t^\\circ, p} 4CH_3COOH + 2H_2O$.',
    category: 'carboxylic-acid'
  },
  {
    id: 'fc-24-13',
    lessonId: 'bai-24',
    front: 'Acid nào có trong nọc kiến gây cảm giác buốt rát?',
    back: 'Formic acid ($HCOOH$, methanoic acid).',
    category: 'carboxylic-acid'
  },
  {
    id: 'fc-24-14',
    lessonId: 'bai-24',
    front: 'Acid nào có trong quả khế?',
    back: 'Oxalic acid ($HOOC-COOH$, ethanedioic acid).',
    category: 'carboxylic-acid'
  },
  {
    id: 'fc-24-15',
    lessonId: 'bai-24',
    front: 'Tên của muối $CH_3COONa$ là gì?',
    back: 'Sodium acetate (hoặc sodium ethanoate).',
    category: 'carboxylic-acid'
  }
];

export const lesson24Quizzes: QuizQuestion[] = [
  {
    id: 'qz-24-1',
    lessonId: 'bai-24',
    question: 'Chất nào sau đây là một carboxylic acid?',
    options: [
      { id: 'A', text: '$CH_3CHO$' },
      { id: 'B', text: '$CH_3COOH$' },
      { id: 'C', text: '$CH_3COOCH_3$' },
      { id: 'D', text: '$CH_3CH_2OH$' }
    ],
    correctAnswer: 'B',
    explanation: '$CH_3COOH$ chứa nhóm $-COOH$, thuộc loại carboxylic acid (acetic acid).',
    difficulty: 'NhanBiet',
    source: 'SGK Hoá 11 - Bài 24'
  },
  {
    id: 'qz-24-2',
    lessonId: 'bai-24',
    question: 'Tên thay thế của acetic acid ($CH_3COOH$) là',
    options: [
      { id: 'A', text: 'methanoic acid' },
      { id: 'B', text: 'ethanoic acid' },
      { id: 'C', text: 'propanoic acid' },
      { id: 'D', text: 'benzoic acid' }
    ],
    correctAnswer: 'B',
    explanation: '$CH_3COOH$ chứa 2 C, tên thay thế là ethanoic acid.',
    difficulty: 'NhanBiet',
    source: 'SGK Hoá 11 - Bài 24'
  },
  {
    id: 'qz-24-3',
    lessonId: 'bai-24',
    question: 'Formic acid ($HCOOH$) có trong loài sinh vật nào dưới đây?',
    options: [
      { id: 'A', text: 'Cây mía' },
      { id: 'B', text: 'Nọc tiết của kiến, ong' },
      { id: 'C', text: 'Quả chanh' },
      { id: 'D', text: 'Sữa chua' }
    ],
    correctAnswer: 'B',
    explanation: 'Formic acid ($HCOOH$) có trong nọc tiêm của kiến, ong gây cảm giác đau buốt khi bị đốt.',
    difficulty: 'NhanBiet',
    source: 'SGK Hoá 11 - Bài 24'
  },
  {
    id: 'qz-24-4',
    lessonId: 'bai-24',
    question: 'Thành phần acid chính có trong giấm ăn là',
    options: [
      { id: 'A', text: 'Formic acid' },
      { id: 'B', text: 'Acetic acid' },
      { id: 'C', text: 'Oxalic acid' },
      { id: 'D', text: 'Citric acid' }
    ],
    correctAnswer: 'B',
    explanation: 'Giấm ăn là dung dịch acetic acid ($CH_3COOH$) có nồng độ 4 - 8%.',
    difficulty: 'NhanBiet',
    source: 'SGK Hoá 11 - Bài 24'
  },
  {
    id: 'qz-24-5',
    lessonId: 'bai-24',
    question: 'Dãy các chất xếp theo chiều NHIỆT ĐỘ SÔI TĂNG DẦN là',
    options: [
      { id: 'A', text: '$C_2H_6 < CH_3CHO < C_2H_5OH < CH_3COOH$' },
      { id: 'B', text: '$CH_3COOH < C_2H_5OH < CH_3CHO < C_2H_6$' },
      { id: 'C', text: '$C_2H_5OH < CH_3COOH < CH_3CHO < C_2H_6$' },
      { id: 'D', text: '$CH_3CHO < C_2H_6 < C_2H_5OH < CH_3COOH$' }
    ],
    correctAnswer: 'A',
    explanation: 'Sắp xếp nhiệt độ sôi: Hydrocarbon ($C_2H_6$) < Aldehyde ($CH_3CHO$) < Alcohol ($C_2H_5OH$) < Carboxylic acid ($CH_3COOH$).',
    difficulty: 'ThongHieu',
    source: 'SGK Hoá 11 - Bài 24'
  },
  {
    id: 'qz-24-6',
    lessonId: 'bai-24',
    question: 'Thuốc thử nào sau đây dùng để phân biệt dung dịch $CH_3COOH$ và $C_2H_5OH$?',
    options: [
      { id: 'A', text: 'Quỳ tím hoặc dung dịch $Na_2CO_3$' },
      { id: 'B', text: 'Dung dịch $NaCl$' },
      { id: 'C', text: 'Dung dịch $KNO_3$' },
      { id: 'D', text: 'Khí $N_2$' }
    ],
    correctAnswer: 'A',
    explanation: '$CH_3COOH$ làm quỳ tím hoá đỏ và phản ứng với $Na_2CO_3$ sủi bọt khí $CO_2\\uparrow$, còn $C_2H_5OH$ không phản ứng.',
    difficulty: 'ThongHieu',
    source: 'SBT Hoá 11 - Bài 24'
  },
  {
    id: 'qz-24-7',
    lessonId: 'bai-24',
    question: 'Hiện tượng xảy ra khi nhỏ vài giọt giấm ăn vào mẫu đá vôi ($CaCO_3$) là',
    options: [
      { id: 'A', text: 'xuất hiện kết tủa đen' },
      { id: 'B', text: 'mẫu đá vôi tan ra và có sủi bọt khí' },
      { id: 'C', text: 'dung dịch chuyển sang màu xanh' },
      { id: 'D', text: 'không có hiện tượng gì' }
    ],
    correctAnswer: 'B',
    explanation: '$2CH_3COOH + CaCO_3 \\rightarrow (CH_3COO)_2Ca + H_2O + CO_2\\uparrow$ làm $CaCO_3$ tan ra và giải phóng khí $CO_2$.',
    difficulty: 'ThongHieu',
    source: 'SGK Hoá 11 - Bài 24'
  },
  {
    id: 'qz-24-8',
    lessonId: 'bai-24',
    question: 'Sản phẩm của phản ứng ester hoá giữa $CH_3COOH$ và $CH_3OH$ là',
    options: [
      { id: 'A', text: 'ethyl acetate' },
      { id: 'B', text: 'methyl acetate' },
      { id: 'C', text: 'methyl formate' },
      { id: 'D', text: 'ethyl formate' }
    ],
    correctAnswer: 'B',
    explanation: '$CH_3COOH + CH_3OH \\xrightleftharpoons[t^\\circ]{H_2SO_4 \\text{ đặc}} CH_3COOCH_3 \\text{ (methyl acetate)} + H_2O$.',
    difficulty: 'ThongHieu',
    source: 'SGK Hoá 11 - Bài 24'
  },
  {
    id: 'qz-24-9',
    lessonId: 'bai-24',
    question: 'Phương pháp điều chế acetic acid từ ethanol trong dân gian là',
    options: [
      { id: 'A', text: 'Oxi hoá alkane' },
      { id: 'B', text: 'Lên men giấm' },
      { id: 'C', text: 'Cộng $H_2O$ vào acetylene' },
      { id: 'D', text: 'Thuỷ phân chất béo' }
    ],
    correctAnswer: 'B',
    explanation: 'Lên men giấm ethanol: $C_2H_5OH + O_2 \\xrightarrow{\\text{men giấm}} CH_3COOH + H_2O$.',
    difficulty: 'NhanBiet',
    source: 'SGK Hoá 11 - Bài 24'
  },
  {
    id: 'qz-24-10',
    lessonId: 'bai-24',
    question: 'Cho 6,0 gam $CH_3COOH$ tác dụng với $NaOH$ dư, khối lượng muối $CH_3COONa$ thu được là',
    options: [
      { id: 'A', text: '8,2 gam' },
      { id: 'B', text: '6,8 gam' },
      { id: 'C', text: '4,1 gam' },
      { id: 'D', text: '12,3 gam' }
    ],
    correctAnswer: 'A',
    explanation: '$n_{CH_3COOH} = \\frac{6,0}{60} = 0,1 \\text{ mol}$. $CH_3COOH + NaOH \\rightarrow CH_3COONa + H_2O \\Rightarrow n_{CH_3COONa} = 0,1 \\text{ mol} \\Rightarrow m = 0,1 \\times 82 = 8,2 \\text{ gam}$.',
    difficulty: 'VanDung',
    source: 'SBT Hoá 11 - Bài 24'
  },
  {
    id: 'qz-24-11',
    lessonId: 'bai-24',
    question: 'Công thức cấu tạo của oxalic acid là',
    options: [
      { id: 'A', text: '$HCOOH$' },
      { id: 'B', text: '$CH_3COOH$' },
      { id: 'C', text: '$HOOC-COOH$' },
      { id: 'D', text: '$C_6H_5COOH$' }
    ],
    correctAnswer: 'C',
    explanation: 'Oxalic acid là dicarboxylic acid đơn giản nhất: $HOOC-COOH$ (ethanedioic acid).',
    difficulty: 'NhanBiet',
    source: 'SGK Hoá 11 - Bài 24'
  },
  {
    id: 'qz-24-12',
    lessonId: 'bai-24',
    question: 'Công thức phân tử tổng quát của carboxylic acid no, đơn chức, mạch hở là',
    options: [
      { id: 'A', text: '$C_n H_{2n}O_2 \\quad (n \\ge 1)$' },
      { id: 'B', text: '$C_n H_{2n-2}O_2 \\quad (n \\ge 2)$' },
      { id: 'C', text: '$C_n H_{2n+2}O \\quad (n \\ge 1)$' },
      { id: 'D', text: '$C_n H_{2n}O \\quad (n \\ge 1)$' }
    ],
    correctAnswer: 'A',
    explanation: 'Carboxylic acid no, đơn chức, mạch hở có dạng $C_n H_{2n+1}COOH \\equiv C_n H_{2n}O_2$ với $n \\ge 1$.',
    difficulty: 'NhanBiet',
    source: 'SGK Hoá 11 - Bài 24'
  },
  {
    id: 'qz-24-13',
    lessonId: 'bai-24',
    question: 'Trong phản ứng ester hoá giữa $CH_3COOH$ và $C_2H_5OH$, xúc tác $H_2SO_4$ đặc có vai trò',
    options: [
      { id: 'A', text: 'vừa làm chất xúc tác vừa hút nước để cân bằng chuyển dịch chiều thuận' },
      { id: 'B', text: 'chỉ làm chất oxi hoá' },
      { id: 'C', text: 'chỉ làm chất giảm nhiệt độ sôi' },
      { id: 'D', text: 'hoà tan ester tạo thành' }
    ],
    correctAnswer: 'A',
    explanation: '$H_2SO_4$ đặc vừa tăng tốc độ phản ứng ester hoá vừa hút nước sinh ra, thúc đẩy cân bằng chuyển dịch sang chiều thuận.',
    difficulty: 'ThongHieu',
    source: 'SGK Hoá 11 - Bài 24'
  },
  {
    id: 'qz-24-14',
    lessonId: 'bai-24',
    question: 'Tên gọi của acid $CH_3CH(CH_3)COOH$ theo danh pháp thay thế là',
    options: [
      { id: 'A', text: '2-methylpropanoic acid' },
      { id: 'B', text: '3-methylpropanoic acid' },
      { id: 'C', text: 'butanoic acid' },
      { id: 'D', text: '2-methylbutanoic acid' }
    ],
    correctAnswer: 'A',
    explanation: 'Mạch chính 3 C, đánh số từ C1 ở nhóm $-COOH$, nhánh methyl ở C2 $\\rightarrow$ 2-methylpropanoic acid.',
    difficulty: 'ThongHieu',
    source: 'SBT Hoá 11 - Bài 24'
  },
  {
    id: 'qz-24-15',
    lessonId: 'bai-24',
    question: 'Đốt cháy hoàn toàn một carboxylic acid no, đơn chức, mạch hở X thu được $CO_2$ và $H_2O$ có tỉ lệ mol',
    options: [
      { id: 'A', text: '1 : 1' },
      { id: 'B', text: '1 : 2' },
      { id: 'C', text: '2 : 1' },
      { id: 'D', text: '3 : 2' }
    ],
    correctAnswer: 'A',
    explanation: 'Acid no, đơn chức, mạch hở có CTPT $C_n H_{2n}O_2$. Phản ứng cháy: $C_n H_{2n}O_2 + \\frac{3n-2}{2}O_2 \\rightarrow nCO_2 + nH_2O \\Rightarrow n_{CO_2} = n_{H_2O}$ (tỉ lệ 1 : 1).',
    difficulty: 'ThongHieu',
    source: 'SBT Hoá 11 - Bài 24'
  },
  {
    id: 'qz-24-16',
    lessonId: 'bai-24',
    question: 'Chất nào sau đây phản ứng với dung dịch $NaHCO_3$ giải phóng khí $CO_2$?',
    options: [
      { id: 'A', text: '$C_2H_5OH$' },
      { id: 'B', text: '$CH_3CHO$' },
      { id: 'C', text: '$CH_3COOH$' },
      { id: 'D', text: '$C_6H_5OH$' }
    ],
    correctAnswer: 'C',
    explanation: '$CH_3COOH + NaHCO_3 \\rightarrow CH_3COONa + H_2O + CO_2\\uparrow$. Phenol ($C_6H_5OH$) yếu hơn $H_2CO_3$ nấc 1 nên không phản ứng với $NaHCO_3$.',
    difficulty: 'ThongHieu',
    source: 'SGK Hoá 11 - Bài 24'
  },
  {
    id: 'qz-24-17',
    lessonId: 'bai-24',
    question: 'Trung hoà 20 mL dung dịch $CH_3COOH$ cần vừa đủ 10 mL dung dịch $NaOH$ 1M. Nồng độ mol/L của dung dịch $CH_3COOH$ là',
    options: [
      { id: 'A', text: '0,5 M' },
      { id: 'B', text: '1,0 M' },
      { id: 'C', text: '2,0 M' },
      { id: 'D', text: '0,25 M' }
    ],
    correctAnswer: 'A',
    explanation: '$n_{NaOH} = 0,01 \\times 1 = 0,01 \\text{ mol} \\Rightarrow n_{CH_3COOH} = 0,01 \\text{ mol} \\Rightarrow C_M = \\frac{0,01}{0,02} = 0,5 \\text{ M}$.',
    difficulty: 'VanDung',
    source: 'SBT Hoá 11 - Bài 24'
  },
  {
    id: 'qz-24-18',
    lessonId: 'bai-24',
    question: 'Oxi hoá butane ($C_4H_{10}$) trong công nghiệp để sản xuất',
    options: [
      { id: 'A', text: 'formic acid' },
      { id: 'B', text: 'acetic acid' },
      { id: 'C', text: 'propionic acid' },
      { id: 'D', text: 'benzoic acid' }
    ],
    correctAnswer: 'B',
    explanation: '$2C_4H_{10} + 5O_2 \\xrightarrow{xt, t^\\circ, p} 4CH_3COOH + 2H_2O$.',
    difficulty: 'NhanBiet',
    source: 'SGK Hoá 11 - Bài 24'
  },
  {
    id: 'qz-24-19',
    lessonId: 'bai-24',
    question: 'Acid nào sau đây có trong cấu tạo của benzoic acid?',
    options: [
      { id: 'A', text: 'Vòng benzene liên kết với nhóm $-COOH$' },
      { id: 'B', text: 'Gốc ethyl liên kết với nhóm $-COOH$' },
      { id: 'C', text: 'Nhóm $-CHO$ liên kết với vòng benzene' },
      { id: 'D', text: 'Hai nhóm $-COOH$ liên kết trực tiếp' }
    ],
    correctAnswer: 'A',
    explanation: 'Benzoic acid có công thức $C_6H_5COOH$ gồm nhóm $-COOH$ gắn trực tiếp vào vòng benzene.',
    difficulty: 'NhanBiet',
    source: 'SGK Hoá 11 - Bài 24'
  },
  {
    id: 'qz-24-20',
    lessonId: 'bai-24',
    question: 'Cho 3,0 gam $CH_3COOH$ phản ứng với $Mg$ dư thu được V mL khí $H_2$ (đkc). Giá trị của V là',
    options: [
      { id: 'A', text: '619,75 mL' },
      { id: 'B', text: '1239,5 mL' },
      { id: 'C', text: '495,8 mL' },
      { id: 'D', text: '247,9 mL' }
    ],
    correctAnswer: 'A',
    explanation: '$n_{CH_3COOH} = \\frac{3,0}{60} = 0,05 \\text{ mol}$. $2CH_3COOH + Mg \\rightarrow (CH_3COO)_2Mg + H_2\\uparrow \\Rightarrow n_{H_2} = 0,025 \\text{ mol} \\Rightarrow V = 0,025 \\times 24,79 = 0,61975 \\text{ L} = 619,75 \\text{ mL}$.',
    difficulty: 'VanDung',
    source: 'SBT Hoá 11 - Bài 24'
  },
  {
    id: 'qz-24-21',
    lessonId: 'bai-24',
    question: 'Palmitic acid có công thức phân tử là',
    options: [
      { id: 'A', text: '$C_{17}H_{35}COOH$' },
      { id: 'B', text: '$C_{15}H_{31}COOH$' },
      { id: 'C', text: '$C_{17}H_{33}COOH$' },
      { id: 'D', text: '$C_3H_7COOH$' }
    ],
    correctAnswer: 'B',
    explanation: 'Palmitic acid có công thức $CH_3[CH_2]_{14}COOH \\equiv C_{15}H_{31}COOH$ (hexadecanoic acid).',
    difficulty: 'NhanBiet',
    source: 'SGK Hoá 11 - Bài 24'
  },
  {
    id: 'qz-24-22',
    lessonId: 'bai-24',
    question: 'Chất nào dưới đây được ứng dụng làm thuốc giảm đau, hạ sốt Aspirin?',
    options: [
      { id: 'A', text: 'Dẫn xuất của salicylic acid' },
      { id: 'B', text: 'Dẫn xuất của formic acid' },
      { id: 'C', text: 'Dẫn xuất của oxalic acid' },
      { id: 'D', text: 'Dẫn xuất của benzoic acid' }
    ],
    correctAnswer: 'A',
    explanation: 'Aspirin (acetylsalicylic acid) được tổng hợp từ salicylic acid và acetic anhydride.',
    difficulty: 'NhanBiet',
    source: 'SGK Hoá 11 - Bài 24'
  },
  {
    id: 'qz-24-23',
    lessonId: 'bai-24',
    question: 'Phản ứng giữa $CH_3COOH$ và $NaOH$ thuộc loại phản ứng',
    options: [
      { id: 'A', text: 'Phản ứng thế' },
      { id: 'B', text: 'Phản ứng trung hoà (acid - base)' },
      { id: 'C', text: 'Phản ứng cộng' },
      { id: 'D', text: 'Phản ứng oxi hoá - khử' }
    ],
    correctAnswer: 'B',
    explanation: '$CH_3COOH + NaOH \\rightarrow CH_3COONa + H_2O$ là phản ứng trung hoà giữa acid và base.',
    difficulty: 'NhanBiet',
    source: 'SGK Hoá 11 - Bài 24'
  },
  {
    id: 'qz-24-24',
    lessonId: 'bai-24',
    question: 'Đun nóng 6,0 gam $CH_3COOH$ và 6,0 gam $C_2H_5OH$ với $H_2SO_4$ đặc thu được 5,28 gam ethyl acetate. Hiệu suất phản ứng ester hoá là',
    options: [
      { id: 'A', text: '60%' },
      { id: 'B', text: '50%' },
      { id: 'C', text: '75%' },
      { id: 'D', text: '80%' }
    ],
    correctAnswer: 'A',
    explanation: '$n_{CH_3COOH} = 0,1 \\text{ mol}; n_{C_2H_5OH} = \\frac{6}{46} = 0,13 \\text{ mol}$. Tính hiệu suất theo $CH_3COOH$.\n$n_{ester \\text{ LT}} = 0,1 \\text{ mol} \\Rightarrow m_{ester \\text{ LT}} = 0,1 \\times 88 = 8,8 \\text{ g}$. $H = \\frac{5,28}{8,8} \\times 100\\% = 60\\%$.',
    difficulty: 'VanDung',
    source: 'SBT Hoá 11 - Bài 24'
  },
  {
    id: 'qz-24-25',
    lessonId: 'bai-24',
    question: 'Gốc $CH_3COO-$ có tên gọi là',
    options: [
      { id: 'A', text: 'Formate' },
      { id: 'B', text: 'Acetate' },
      { id: 'C', text: 'Propionate' },
      { id: 'D', text: 'Benzoate' }
    ],
    correctAnswer: 'B',
    explanation: 'Gốc anion của acetic acid ($CH_3COOH$) là $CH_3COO-$ có tên là acetate (hoặc ethanoate).',
    difficulty: 'NhanBiet',
    source: 'SGK Hoá 11 - Bài 24'
  },
  {
    id: 'qz-24-26',
    lessonId: 'bai-24',
    question: 'Khi so sánh hằng số phân li acid $K_a$ ở $25^\\circ C$: $HCOOH$ ($1,8.10^{-4}$) và $CH_3COOH$ ($1,8.10^{-5}$), kết luận nào đúng?',
    options: [
      { id: 'A', text: '$HCOOH$ có tính acid mạnh hơn $CH_3COOH$' },
      { id: 'B', text: '$CH_3COOH$ có tính acid mạnh hơn $HCOOH$' },
      { id: 'C', text: 'Hai acid có tính acid bằng nhau' },
      { id: 'D', text: 'Cả hai đều là acid mạnh phân li $100\\%$' }
    ],
    correctAnswer: 'A',
    explanation: 'Giá trị $K_a$ của $HCOOH$ ($1,8.10^{-4}$) lớn hơn của $CH_3COOH$ ($1,8.10^{-5}$) khoảng 10 lần, nên $HCOOH$ có tính acid mạnh hơn.',
    difficulty: 'ThongHieu',
    source: 'SGK Hoá 11 - Bài 24'
  },
  {
    id: 'qz-24-27',
    lessonId: 'bai-24',
    question: 'Dung dịch acid nào sau đây được dùng làm chất bảo quản thực phẩm chống nấm mốc (kí hiệu E210)?',
    options: [
      { id: 'A', text: 'Formic acid' },
      { id: 'B', text: 'Benzoic acid' },
      { id: 'C', text: 'Oxalic acid' },
      { id: 'D', text: 'Stearic acid' }
    ],
    correctAnswer: 'B',
    explanation: 'Benzoic acid ($C_6H_5COOH$) và muối sodium benzoate ($C_6H_5COONa$) có khả năng ức chế nấm mốc, làm chất bảo quản thực phẩm (E210/E211).',
    difficulty: 'NhanBiet',
    source: 'SGK Hoá 11 - Bài 24'
  },
  {
    id: 'qz-24-28',
    lessonId: 'bai-24',
    question: 'Cho phản ứng: $2CH_3COOH + CuO \\rightarrow (CH_3COO)_2Cu + H_2O$. Hiện tượng xảy ra là',
    options: [
      { id: 'A', text: 'Bột $CuO$ màu đen tan dần tạo dung dịch màu xanh lam' },
      { id: 'B', text: 'Có sủi bọt khí không màu' },
      { id: 'C', text: 'Xuất hiện kết tủa đỏ gạch' },
      { id: 'D', text: 'Xuất hiện kết tủa trắng' }
    ],
    correctAnswer: 'A',
    explanation: '$CuO$ là chất rắn màu đen tác dụng với $CH_3COOH$ tạo muối $Cu(CH_3COO)_2$ tan có màu xanh lam trong dung dịch.',
    difficulty: 'ThongHieu',
    source: 'SGK Hoá 11 - Bài 24'
  },
  {
    id: 'qz-24-29',
    lessonId: 'bai-24',
    question: 'Đốt cháy hoàn toàn 0,1 mol một carboxylic acid đơn chức no hở X thu được 0,2 mol $CO_2$. Công thức của X là',
    options: [
      { id: 'A', text: '$HCOOH$' },
      { id: 'B', text: '$CH_3COOH$' },
      { id: 'C', text: '$C_2H_5COOH$' },
      { id: 'D', text: '$C_3H_7COOH$' }
    ],
    correctAnswer: 'B',
    explanation: 'Số nguyên tử $C = \\frac{n_{CO_2}}{n_X} = \\frac{0,2}{0,1} = 2 \\Rightarrow C_2H_4O_2 \\equiv CH_3COOH$.',
    difficulty: 'VanDung',
    source: 'SBT Hoá 11 - Bài 24'
  },
  {
    id: 'qz-24-30',
    lessonId: 'bai-24',
    question: 'Chất nào sau đây VỪA có phản ứng với $Na$, VỪA làm quỳ tím hoá đỏ, VỪA tham gia phản ứng ester hoá?',
    options: [
      { id: 'A', text: '$CH_3CH_2OH$' },
      { id: 'B', text: '$CH_3COOH$' },
      { id: 'C', text: '$CH_3CHO$' },
      { id: 'D', text: '$CH_3COCH_3$' }
    ],
    correctAnswer: 'B',
    explanation: '$CH_3COOH$ có nhóm $-COOH$ nên tác dụng $Na$ giải phóng $H_2$, là acid làm quỳ tím hoá đỏ, và ester hoá với alcohol.',
    difficulty: 'ThongHieu',
    source: 'SGK Hoá 11 - Bài 24'
  }
];
