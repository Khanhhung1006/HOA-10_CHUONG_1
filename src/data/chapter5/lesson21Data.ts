import { TheorySectionData, Flashcard, QuizQuestion } from '../../types';

export const lesson21Theory: TheorySectionData = {
  id: 'bai-21',
  chapterId: 'chuong-5',
  title: 'Bài 21: Phenol',
  objectives: [
    'Nêu được khái niệm về phenol, tên gọi, công thức cấu tạo và đặc điểm cấu tạo của phenol ($C_6H_5OH$).',
    'Trình bày tính chất vật lí và mức độ độc hại của phenol đối với sức khoẻ.',
    'Trình bày và giải thích tính chất hoá học đặc trưng của phenol dựa trên sự ảnh hưởng qua lại giữa nhóm -OH và vòng benzene: tính acid yếu (thế H nhóm -OH với Na, NaOH, $Na_2CO_3$), phản ứng thế ở vòng thơm với nước bromine (tạo kết tủa trắng) và $HNO_3$ đặc (tạo picric acid kết tủa vàng).',
    'Trình bày ứng dụng và phương pháp điều chế phenol từ cumene.'
  ],
  summary: 'Phenol là hợp chất hữu cơ có nhóm -OH liên kết trực tiếp với nguyên tử C của vòng benzene. Do sự tương tác giữa cặp electron của nguyên tử O và hệ electron $\\pi$ của vòng thơm, phenol có tính acid yếu (mạnh hơn alcohol nhưng yếu hơn $H_2CO_3$, tác dụng với $NaOH$ nhưng không làm đổi màu quỳ tím) và dễ tham gia phản ứng thế ở các vị trí ortho, para hơn benzene (tạo kết tủa trắng 2,4,6-tribromophenol với nước bromine và kết tủa vàng picric acid với $HNO_3$ đặc). Phenol được điều chế chủ yếu từ cumene.',
  coreKnowledge: [
    {
      heading: '1. Khái niệm, Cấu tạo phân tử & Danh pháp',
      points: [
        'Khái niệm: Phenol là những hợp chất hữu cơ trong phân tử có chứa nhóm hydroxy ($-OH$) liên kết trực tiếp với nguyên tử carbon của vòng benzene.',
        'Sự khác biệt với alcohol thơm: $C_6H_5OH$ (phenol, nhóm -OH gắn trực tiếp vòng benzene) vs $C_6H_5CH_2OH$ (benzyl alcohol, nhóm -OH gắn vào C no của nhánh $\\rightarrow$ thuộc loại alcohol thơm).',
        'Cấu tạo phân tử: Cặp electron p chưa liên kết trên nguyên tử O liên hợp với hệ electron $\\pi$ của vòng thơm ($p-\\pi$). Tương tác này gây ra 2 hiệu quả kép:',
        '  - Vòng benzene hút electron làm liên kết $O-H$ phân cực hơn $\\rightarrow$ H nhóm -OH linh động hơn so với alcohol.',
        '  - Nhóm -OH đẩy electron làm tăng mật độ electron trong vòng thơm ở các vị trí ortho (o-) và para (p-) $\\rightarrow$ Phản ứng thế nhân thơm diễn ra dễ dàng hơn benzene.',
        'Tên gọi: $C_6H_5OH$ có tên riêng là phenol (hydroxybenzene). Các cresol: 2-methylphenol (o-cresol), 3-methylphenol (m-cresol), 4-methylphenol (p-cresol).'
      ]
    },
    {
      heading: '2. Tính chất vật lí',
      points: [
        'Trạng thái: Ở điều kiện thường, phenol là chất rắn tinh thể không màu, nóng chảy ở $43^\\circ C$, sôi ở $181,8^\\circ C$. Để lâu trong không khí bị oxi hoá chậm chuyển thành màu hồng nhạt.',
        'Độ tan: Ít tan trong nước ở điều kiện thường ($8,42 \\text{ g}/100 \\text{ g } H_2O \\text{ ở } 25^\\circ C$), tan vô hạn ở $66^\\circ C$. Tan tốt trong các dung môi hữu cơ (ethanol, ether, acetone).',
        'Độc tính: Phenol có tính độc, gây bỏng nặng khi tiếp xúc với da.'
      ]
    },
    {
      heading: '3. Tính chất hoá học',
      points: [
        'a) Tính acid của phenol (Phản ứng thế H ở nhóm -OH):',
        '  - Trong dung dịch nước, phenol phân li yếu tạo ion phenolate: $C_6H_5OH + H_2O \\rightleftharpoons C_6H_5O^- + H_3O^+$. Phenol không làm đổi màu giấy quỳ tím.',
        '  - Tác dụng với kim loại kiềm ($Na$): $2C_6H_5OH + 2Na \\rightarrow 2C_6H_5ONa + H_2\\uparrow$.',
        '  - Tác dụng với dung dịch $NaOH$: $C_6H_5OH + NaOH \\rightarrow C_6H_5ONa \\text{ (sodium phenolate)} + H_2O$. (Giải thích phản ứng: Phenol ban đầu vẩn đục, nhỏ NaOH vào trở nên trong suốt).',
        '  - So sánh tính acid: Tính acid của phenol mạnh hơn alcohol nhưng yếu hơn carbonic acid ($H_2CO_3$). Vì vậy khi sục khí $CO_2$ vào dung dịch sodium phenolate, phenol bị đẩy ra làm dung dịch vẩn đục:',
        '    $C_6H_5ONa + CO_2 + H_2O \\rightarrow C_6H_5OH\\downarrow \\text{ (vẩn đục)} + NaHCO_3$.',
        '  - Phản ứng với $Na_2CO_3$: $C_6H_5OH + Na_2CO_3 \\rightleftharpoons C_6H_5ONa + NaHCO_3$.',
        'b) Phản ứng thế nguyên tử H ở vòng thơm (vị trí o- và p-):',
        '  - Phản ứng với nước bromine: Phenol tác dụng dễ dàng với dung dịch nước bromine ở nhiệt độ thường tạo kết tủa trắng 2,4,6-tribromophenol. Phản ứng dùng để nhận biết phenol.',
        '    $C_6H_5OH + 3Br_2 \\rightarrow C_6H_2Br_3OH\\downarrow \\text{ (trắng)} + 3HBr$.',
        '  - Phản ứng nitro hoá: Phenol phản ứng với dung dịch $HNO_3$ đặc có xúc tác $H_2SO_4$ đặc đun nóng tạo 2,4,6-trinitrophenol (picric acid) kết tủa màu vàng:',
        '    $C_6H_5OH + 3HNO_3 \\xrightarrow{H_2SO_4 \\text{ đặc}, t^\\circ} C_6H_2(NO_2)_3OH\\downarrow \\text{ (vàng)} + 3H_2O$.'
      ],
      latexEquations: [
        'C_6H_5OH + NaOH \\rightarrow C_6H_5ONa + H_2O',
        'C_6H_5ONa + CO_2 + H_2O \\rightarrow C_6H_5OH + NaHCO_3',
        'C_6H_5OH + 3Br_2 \\rightarrow C_6H_2Br_3OH\\downarrow + 3HBr',
        'C_6H_5OH + 3HNO_3 \\xrightarrow{H_2SO_4 \\text{ đặc}, t^\\circ} C_6H_2(NO_2)_3OH\\downarrow + 3H_2O'
      ]
    },
    {
      heading: '4. Điều chế & Ứng dụng',
      points: [
        'Điều chế từ Cumene (isopropylbenzene) trong công nghiệp:',
        '  - Bước 1: Oxi hoá cumene bằng $O_2$ hình thành cumene hydroperoxide.',
        '  - Bước 2: Thuỷ phân trong môi trường $H_2SO_4$ thu được đồng thời phenol và acetone ($CH_3COCH_3$).',
        '  - Ngoài ra phenol còn thu được từ quá trình chưng cất nhựa than đá.',
        'Ứng dụng: Sản xuất nhựa phenol-formaldehyde (dùng trong keo dán, vật liệu cách điện), bisphenol A (sản xuất polycarbonate), tơ sợi synthetic, thuốc sát trùng, dược phẩm (aspirin), phẩm nhuộm.'
      ]
    }
  ],
  formulas: [
    {
      name: 'Công thức Phenol',
      latex: 'C_6H_5OH',
      description: 'Phân tử khối M = 94 g/mol.'
    },
    {
      name: 'Phản ứng nhận biết Phenol bằng nước Bromine',
      latex: 'C_6H_5OH + 3Br_2 \\rightarrow C_6H_2Br_3OH\\downarrow \\text{ (trắng)} + 3HBr',
      description: 'Tạo kết tủa trắng 2,4,6-tribromophenol ngay điều kiện thường.'
    }
  ],
  keyConcepts: [
    {
      term: 'Phenol',
      definition: 'Hợp chất hữu cơ chứa nhóm -OH liên kết trực tiếp với nguyên tử C của vòng benzene.'
    },
    {
      term: 'Picric acid',
      definition: '2,4,6-trinitrophenol ($C_6H_2(NO_2)_3OH$), chất rắn kết tủa màu vàng, trước đây từng được dùng làm thuốc nổ.'
    },
    {
      term: 'Tính acid của Phenol',
      definition: 'Mạnh hơn alcohol nhưng yếu hơn $H_2CO_3$. Tác dụng với NaOH nhưng không làm đổi màu quỳ tím, bị $CO_2 + H_2O$ đẩy khỏi muối phenolate.'
    }
  ],
  examples: [
    {
      title: 'Ví dụ 1: Hiện tượng phản ứng giữa Sodium Phenolate và CO2',
      content: 'Nêu hiện tượng và viết phương trình hoá học khi dẫn từ từ khí $CO_2$ đến dư vào dung dịch sodium phenolate ($C_6H_5ONa$) trong suốt.',
      solution: 'Hiện tượng: Dung dịch từ trong suốt chuyển sang vẩn đục do phenol ($C_6H_5OH$) ít tan trong nước bị đẩy ra khỏi muối.\nPhương trình: $C_6H_5ONa + CO_2 + H_2O \\rightarrow C_6H_5OH\\downarrow + NaHCO_3$.'
    }
  ],
  commonMistakes: [
    {
      mistake: 'Cho rằng phenol làm quỳ tím hoá đỏ vì có tính acid.',
      correction: 'Phenol có tính acid RẤT YẾU ($K_a = 10^{-10}$), yếu hơn $H_2CO_3$ nên KHÔNG làm đổi màu quỳ tím.',
      why: 'Mức độ phân li $H^+$ của phenol quá nhỏ để thay đổi màu chỉ thị quỳ tím.'
    },
    {
      mistake: 'Lầm tưởng Benzyl alcohol ($C_6H_5CH_2OH$) thuộc loại phenol.',
      correction: 'Benzyl alcohol có nhóm -OH gắn vào C no của nhánh alkyl nên thuộc loại ALCOHOL THƠM, không phải phenol.',
      why: 'Điều kiện bắt buộc của phenol là nhóm -OH phải gắn TRỰC TIẾP vào C thơm của vòng benzene.'
    }
  ],
  memoryTips: [
    'Mẹo nhớ tính acid: Alcohol < Phenol < H2CO3 < Carboxylic acid.',
    'Phenol + Nước Br2 $\\rightarrow$ Kết tủa TRẮNG (2,4,6-tribromophenol); Phenol + HNO3 đặc $\\rightarrow$ Kết tủa VÀNG (Picric acid).'
  ],
  glossary: [
    { term: 'Cumene', meaning: 'Isopropylbenzene ($C_6H_5-CH(CH_3)_2$), nguyên liệu chính sản xuất phenol và acetone.' },
    { term: 'o-Cresol', meaning: '2-methylphenol ($CH_3-C_6H_4-OH$ vị trí 1,2).' }
  ],
  reviewChecklist: [
    'Phân biệt phenol và alcohol thơm.',
    'Giải thích tác động qua lại giữa nhóm -OH và vòng thơm.',
    'Viết các phương trình hoá học thế H nhóm -OH ($NaOH, CO_2+H_2O$) và thế vòng thơm ($Br_2$, $HNO_3$ đặc).',
    'Nêu phương pháp điều chế phenol từ cumene.'
  ]
};

export const lesson21Flashcards: Flashcard[] = [
  {
    id: 'fc-21-1',
    lessonId: 'bai-21',
    front: 'Định nghĩa hợp chất phenol. Phân biệt phenol ($C_6H_5OH$) và benzyl alcohol ($C_6H_5CH_2OH$).',
    back: '- Phenol: nhóm -OH gắn TRỰC TIẾP vào C vòng thơm.\n- $C_6H_5OH$ là phenol, còn $C_6H_5CH_2OH$ có nhóm -OH gắn vào C no nên thuộc loại alcohol thơm.',
    category: 'phenol'
  },
  {
    id: 'fc-21-2',
    lessonId: 'bai-21',
    front: 'Nêu hiện tượng xảy ra khi để phenol trong không khí một thời gian.',
    back: 'Phenol bị oxi hoá chậm và chuyển từ không màu sang màu hồng nhạt.',
    category: 'phenol'
  },
  {
    id: 'fc-21-3',
    lessonId: 'bai-21',
    front: 'Giải thích tại sao H nhóm -OH của phenol linh động hơn của alcohol.',
    back: 'Do cặp electron p của O liên hợp với hệ electron $\\pi$ của vòng benzene ($p-\\pi$), làm liên kết $O-H$ phân cực mạnh hơn.',
    category: 'phenol'
  },
  {
    id: 'fc-21-4',
    lessonId: 'bai-21',
    front: 'Phenol có làm quỳ tím hoá đỏ không? Viết phương trình phân li của phenol trong nước.',
    back: 'Phenol KHÔNG làm đổi màu quỳ tím vì tính acid rất yếu.\n$C_6H_5OH + H_2O \\rightleftharpoons C_6H_5O^- + H_3O^+$.',
    category: 'phenol'
  },
  {
    id: 'fc-21-5',
    lessonId: 'bai-21',
    front: 'So sánh tính acid của ethanol, phenol và carbonic acid ($H_2CO_3$).',
    back: 'Tính acid tăng dần: Ethanol ($C_2H_5OH$) < Phenol ($C_6H_5OH$) < $H_2CO_3$.',
    category: 'phenol'
  },
  {
    id: 'fc-21-6',
    lessonId: 'bai-21',
    front: 'Nêu hiện tượng và viết phương trình phản ứng khi nhỏ dung dịch $NaOH$ vào ống nghiệm chứa phenol đục.',
    back: 'Hiện tượng: Dung dịch từ vẩn đục trở nên trong suốt do tạo muối sodium phenolate tan trong nước.\n$C_6H_5OH + NaOH \\rightarrow C_6H_5ONa + H_2O$.',
    category: 'phenol'
  },
  {
    id: 'fc-21-7',
    lessonId: 'bai-21',
    front: 'Nêu hiện tượng và viết phương trình khi sục khí $CO_2$ vào dung dịch sodium phenolate trong suốt.',
    back: 'Hiện tượng: Dung dịch vẩn đục trở lại do $H_2CO_3$ đẩy phenol ($C_6H_5OH$) ít tan ra.\n$C_6H_5ONa + CO_2 + H_2O \\rightarrow C_6H_5OH\\downarrow + NaHCO_3$.',
    category: 'phenol'
  },
  {
    id: 'fc-21-8',
    lessonId: 'bai-21',
    front: 'Giải thích tại sao phenol phản ứng thế ở vòng thơm dễ dàng hơn benzene.',
    back: 'Nhóm -OH đẩy electron vào vòng thơm làm tăng mật độ electron ở các vị trí ortho và para, giúp phản ứng thế xảy ra dễ dàng hơn.',
    category: 'phenol'
  },
  {
    id: 'fc-21-9',
    lessonId: 'bai-21',
    front: 'Nêu hiện tượng và viết phương trình phản ứng của phenol với nước bromine.',
    back: 'Xuất hiện kết tủa màu trắng 2,4,6-tribromophenol.\n$C_6H_5OH + 3Br_2 \\rightarrow C_6H_2Br_3OH\\downarrow \\text{ (trắng)} + 3HBr$.',
    category: 'phenol'
  },
  {
    id: 'fc-21-10',
    lessonId: 'bai-21',
    front: 'Tên gọi và màu sắc kết tủa tạo thành khi đun nóng phenol với $HNO_3$ đặc ($H_2SO_4$ đặc) là gì?',
    back: '2,4,6-trinitrophenol (picric acid), kết tủa màu vàng.',
    category: 'phenol'
  },
  {
    id: 'fc-21-11',
    lessonId: 'bai-21',
    front: 'Hai sản phẩm chính của quá trình sản xuất phenol từ cumene trong công nghiệp là những chất nào?',
    back: 'Phenol ($C_6H_5OH$) và Acetone ($CH_3COCH_3$).',
    category: 'phenol'
  },
  {
    id: 'fc-21-12',
    lessonId: 'bai-21',
    front: 'Phenol được sử dụng làm nguyên liệu sản xuất loại keo dán/nhựa công nghiệp quan trọng nào?',
    back: 'Nhựa phenol-formaldehyde (nhựa bakelite, keo dán gỗ).',
    category: 'phenol'
  },
  {
    id: 'fc-21-13',
    lessonId: 'bai-21',
    front: 'Cách sơ cứu ban đầu khi không may bị phenol dính vào da gây bỏng?',
    back: 'Rửa ngay bằng dung dịch cồn (ethanol) hoặc rửa nhiều lần bằng nước sạch rồi đến cơ sở y tế.',
    category: 'phenol'
  },
  {
    id: 'fc-21-14',
    lessonId: 'bai-21',
    front: 'Tên IUPAC thay thế của o-cresol ($CH_3-C_6H_4-OH$) là gì?',
    back: '2-methylphenol.',
    category: 'phenol'
  },
  {
    id: 'fc-21-15',
    lessonId: 'bai-21',
    front: 'Tại sao phenol vừa phản ứng được với $Na$, vừa phản ứng được với $NaOH$, trong khi ethanol chỉ phản ứng được với $Na$?',
    back: 'Vì phenol có tính acid mạnh hơn ethanol rất nhiều nhờ sự ảnh hưởng của vòng thơm làm H nhóm -OH phân cực mạnh hơn.',
    category: 'phenol'
  }
];

export const lesson21Quizzes: QuizQuestion[] = [
  {
    id: 'q-21-1',
    lessonId: 'bai-21',
    question: 'Hợp chất nào sau đây thuộc loại phenol?',
    options: [
      { id: 'A', text: '$C_6H_5-CH_2OH$' },
      { id: 'B', text: '$C_6H_5-OH$' },
      { id: 'C', text: '$C_6H_5-OCH_3$' },
      { id: 'D', text: '$C_6H_5-CH_2-CH_2OH$' }
    ],
    correctAnswer: 'B',
    explanation: '$C_6H_5-OH$ có nhóm -OH liên kết trực tiếp với nguyên tử carbon của vòng benzene.',
    difficulty: 'NhanBiet',
    source: 'SGK Hoá học 11 - Bài 21'
  },
  {
    id: 'q-21-2',
    lessonId: 'bai-21',
    question: 'Thuốc thử nào dùng để nhận biết nhanh phenol trong dung dịch nhờ tạo kết tủa màu trắng ở nhiệt độ thường?',
    options: [
      { id: 'A', text: 'Dung dịch $NaOH$' },
      { id: 'B', text: 'Dung dịch nước $Br_2$' },
      { id: 'C', text: 'Quỳ tím' },
      { id: 'D', text: 'Dung dịch $Cu(OH)_2$' }
    ],
    correctAnswer: 'B',
    explanation: 'Phenol tác dụng với nước bromine tạo kết tủa trắng 2,4,6-tribromophenol.',
    difficulty: 'NhanBiet',
    source: 'SGK Hoá học 11 - Bài 21'
  },
  {
    id: 'q-21-3',
    lessonId: 'bai-21',
    question: 'Phát biểu nào sau đây đúng khi nói về tính acid của phenol?',
    options: [
      { id: 'A', text: 'Phenol làm quỳ tím hoá đỏ.' },
      { id: 'B', text: 'Phenol có tính acid mạnh hơn $H_2SO_4$.' },
      { id: 'C', text: 'Phenol có tính acid mạnh hơn $C_2H_5OH$ nhưng yếu hơn $H_2CO_3$.' },
      { id: 'D', text: 'Phenol không phản ứng được với dung dịch $NaOH$.' }
    ],
    correctAnswer: 'C',
    explanation: 'Tính acid: $C_2H_5OH < C_6H_5OH < H_2CO_3$. Phenol yếu hơn $H_2CO_3$ nên không làm đổi màu quỳ tím nhưng đủ mạnh để tác dụng với $NaOH$.',
    difficulty: 'ThongHieu',
    source: 'SGK Hoá học 11 - Bài 21'
  },
  {
    id: 'q-21-4',
    lessonId: 'bai-21',
    question: 'Cho các chất: (1) $C_2H_5OH$, (2) $C_6H_5OH$, (3) $C_6H_5CH_2OH$. Chất nào phản ứng được với dung dịch $NaOH$?',
    options: [
      { id: 'A', text: 'Chỉ có (2)' },
      { id: 'B', text: '(1) và (2)' },
      { id: 'C', text: '(2) và (3)' },
      { id: 'D', text: 'Cả (1), (2) và (3)' }
    ],
    correctAnswer: 'A',
    explanation: 'Chỉ có phenol (2) có nhóm -OH gắn trực tiếp vòng thơm mới có tính acid đủ để tác dụng với $NaOH$. (1) và (3) là alcohol không phản ứng với $NaOH$.',
    difficulty: 'ThongHieu',
    source: 'SBT Hoá học 11 - Bài 21'
  },
  {
    id: 'q-21-5',
    lessonId: 'bai-21',
    question: 'Nhiệt độ đun nóng hỗn hợp phenol với $HNO_3$ đặc (xúc tác $H_2SO_4$ đặc) thu được sản phẩm hữu cơ $X$ có màu vàng. Công thức của $X$ là gì?',
    options: [
      { id: 'A', text: '2-nitrophenol' },
      { id: 'B', text: '4-nitrophenol' },
      { id: 'C', text: '2,4,6-trinitrophenol (picric acid)' },
      { id: 'D', text: 'Trinitrotoluene (TNT)' }
    ],
    correctAnswer: 'C',
    explanation: '$C_6H_5OH + 3HNO_3 \\xrightarrow{H_2SO_4 \\text{ đặc}, t^\\circ} C_6H_2(NO_2)_3OH\\downarrow \\text{ (vàng)} + 3H_2O$.',
    difficulty: 'NhanBiet',
    source: 'SGK Hoá học 11 - Bài 21'
  },
  {
    id: 'q-21-6',
    lessonId: 'bai-21',
    question: 'Dẫn khí $CO_2$ đến dư vào dung dịch $C_6H_5ONa$ (sodium phenolate) thu được dung dịch vẩn đục. Chất gây ra sự vẩn đục là gì?',
    options: [
      { id: 'A', text: '$Na_2CO_3$' },
      { id: 'B', text: '$NaHCO_3$' },
      { id: 'C', text: '$C_6H_5OH$' },
      { id: 'D', text: 'Benzene' }
    ],
    correctAnswer: 'C',
    explanation: '$C_6H_5ONa + CO_2 + H_2O \\rightarrow C_6H_5OH\\downarrow \\text{ (ít tan nên vẩn đục)} + NaHCO_3$.',
    difficulty: 'ThongHieu',
    source: 'SGK Hoá học 11 - Bài 21'
  },
  {
    id: 'q-21-7',
    lessonId: 'bai-21',
    question: 'Trong công nghiệp, phương pháp hiện đại nhất để sản xuất đồng thời phenol và acetone là oxi hoá chất nào?',
    options: [
      { id: 'A', text: 'Benzene' },
      { id: 'B', text: 'Toluene' },
      { id: 'C', text: 'Cumene (isopropylbenzene)' },
      { id: 'D', text: 'Chlorobenzene' }
    ],
    correctAnswer: 'C',
    explanation: 'Cumene được oxi hoá rồi thuỷ phân acid thu được phenol và acetone.',
    difficulty: 'NhanBiet',
    source: 'SGK Hoá học 11 - Bài 21'
  },
  {
    id: 'q-21-8',
    lessonId: 'bai-21',
    question: 'Số đồng phân chứa vòng benzene ứng với công thức phân tử $C_7H_8O$ phản ứng được với dung dịch $NaOH$ là bao nhiêu?',
    options: [
      { id: 'A', text: '1' },
      { id: 'B', text: '2' },
      { id: 'C', text: '3' },
      { id: 'D', text: '4' }
    ],
    correctAnswer: 'C',
    explanation: 'Để tác dụng với $NaOH$, chất đó phải là phenol $\\rightarrow$ có 3 đồng phân cresol: o-cresol, m-cresol, p-cresol.',
    difficulty: 'VanDung',
    source: 'SBT Hoá học 11 - Bài 21'
  },
  {
    id: 'q-21-9',
    lessonId: 'bai-21',
    question: 'Cho 9,4 gram phenol tác dụng hoàn toàn với dung dịch $Br_2$ dư. Khối lượng kết tủa 2,4,6-tribromophenol thu được là bao nhiêu?',
    options: [
      { id: 'A', text: '33,1 gram' },
      { id: 'B', text: '16,55 gram' },
      { id: 'C', text: '23,1 gram' },
      { id: 'D', text: '31,1 gram' }
    ],
    correctAnswer: 'A',
    explanation: '$n_{\\text{phenol}} = \\frac{9,4}{94} = 0,1 \\text{ mol}$. $M_{C_6H_2Br_3OH} = 331 \\text{ g/mol}$. $m = 0,1 \\cdot 331 = 33,1 \\text{ g}$.',
    difficulty: 'VanDung',
    source: 'SBT Hoá học 11 - Bài 21'
  },
  {
    id: 'q-21-10',
    lessonId: 'bai-21',
    question: 'Ứng dụng nào sau đây KHÔNG phải của phenol?',
    options: [
      { id: 'A', text: 'Sản xuất nhựa phenol-formaldehyde' },
      { id: 'B', text: 'Sản xuất phẩm nhuộm, chất sát trùng' },
      { id: 'C', text: 'Làm chất bảo quản thực phẩm trực tiếp trong bánh mì' },
      { id: 'D', text: 'Tổng hợp bisphenol A sản xuất nhựa polycarbonate' }
    ],
    correctAnswer: 'C',
    explanation: 'Phenol có độc tính cao nên không được dùng làm chất bảo quản thực phẩm trực tiếp.',
    difficulty: 'ThongHieu',
    source: 'SGK Hoá học 11 - Bài 21'
  }
];
