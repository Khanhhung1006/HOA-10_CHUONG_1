import { TheorySectionData, Flashcard, QuizQuestion } from '../../types';

export const lesson8Theory: TheorySectionData = {
  id: 'bai-8',
  chapterId: 'chuong-2',
  title: 'Bài 8: Sulfuric acid và muối sulfate',
  objectives: [
    'Trình bày được tính chất vật lí, cách bảo quản, sử dụng và nguyên tắc xử lí sơ bộ khi bỏng acid.',
    'Trình bày được cấu tạo phân tử $H_2SO_4$; tính chất vật lí, tính chất hoá học cơ bản, ứng dụng của dung dịch sulfuric acid loãng, dung dịch sulfuric acid đặc và những lưu ý khi sử dụng sulfuric acid.',
    'Thực hiện được một số thí nghiệm chứng minh tính oxi hoá mạnh và tính háo nước của dung dịch sulfuric acid đặc.',
    'Vận dụng được kiến thức về năng lượng phản ứng, chuyển dịch cân bằng, vấn đề bảo vệ môi trường để giải thích các giai đoạn trong quá trình sản xuất sulfuric acid theo phương pháp tiếp xúc.',
    'Nêu được ứng dụng của một số muối sulfate quan trọng: barium sulfate, ammonium sulfate, calcium sulfate, magnesium sulfate và nhận biết được ion $SO_4^{2-}$ trong dung dịch bằng ion $Ba^{2+}$.'
  ],
  summary: 'Sulfuric acid ($H_2SO_4$) là hoá chất quan trọng hàng đầu trong công nghiệp. Dung dịch loãng có đầy đủ tính chất của acid mạnh. Dung dịch đặc có tính oxi hoá rất mạnh (oxi hoá hầu hết kim loại trừ $Au, Pt$, phi kim, hợp chất) và tính háo nước mãnh liệt (hoá than carbohydrate). Nhận biết ion sulfate ($SO_4^{2-}$) bằng ion $Ba^{2+}$ tạo kết tủa trắng $BaSO_4$ không tan trong acid.',
  coreKnowledge: [
    {
      heading: 'I. Sulfuric Acid ($H_2SO_4$)',
      points: [
        'Cấu tạo phân tử: Gồm 1 nguyên tử S liên kết với 2 nhóm $-OH$ và 2 nguyên tử O. Các nguyên tử H linh động và liên kết $O-H$ phân cực mạnh giúp $H_2SO_4$ tạo nhiều liên kết hydrogen liên phân tử.',
        'Tính chất vật lí & Quy tắc an toàn:\n- Chất lỏng sánh như dầu, không màu, không bay hơi ($t_s = 337\\;^\\circ\\text{C}$), hút ẩm mạnh, khối lượng riêng $D = 1,84\\text{ g/cm}^3$ (dung dịch 98%).\n- Tan vô hạn trong nước và toả rất nhiều nhiệt.\n- Quy tắc pha loãng: Luôn luôn rót từ từ acid đặc vào nước, vừa rót vừa khuấy nhẹ (tuyệt đối không đổ nước vào acid đặc gây sôi bắn acid).\n- Sơ cứu khi bị bỏng acid: Nhanh chóng rửa ngay bằng nước lạnh nhiều lần, sau đó trung hoà bằng dung dịch $NaHCO_3$ loãng (khoảng 2%), băng bó tạm thời rồi chuyển đến cơ sở y tế.',
        'Tính chất của $H_2SO_4$ loãng:\n- Đầy đủ tính chất của một acid mạnh: Đổi màu quỳ tím sang đỏ; tác dụng kim loại đứng trước H ($Fe + H_2SO_4 \\rightarrow FeSO_4 + H_2\\uparrow$); tác dụng basic oxide, base, muối carbonate.',
        'Tính chất của $H_2SO_4$ đặc:\n- Tính acid mạnh và khó bay hơi: Dùng điều chế các acid dễ bay hơi (như $HF$ từ quặng fluorite $CaF_2 + H_2SO_4 \\xrightarrow{250\\;^\\circ\\text{C}} CaSO_4 + 2HF\\uparrow$).\n- Tính oxi hoá rất mạnh (khi đun nóng):\n  + Oxi hoá hầu hết kim loại (trừ $Au, Pt$) lên số oxi hoá cao nhất: $Cu + 2H_2SO_4\\text{ (đặc)} \\xrightarrow{t^o} CuSO_4 + SO_2\\uparrow + 2H_2O$.\n  + Oxi hoá phi kim: $C + 2H_2SO_4\\text{ (đặc)} \\xrightarrow{t^o} CO_2\\uparrow + 2SO_2\\uparrow + 2H_2O$.\n  + Oxi hoá hợp chất: $2KBr + 2H_2SO_4\\text{ (đặc)} \\xrightarrow{t^o} K_2SO_4 + Br_2 + SO_2\\uparrow + 2H_2O$.\n  + $Al, Fe, Cr$ bị thụ động hoá trong $H_2SO_4$ đặc, nguội.\n- Tính háo nước: Chiếm lấy nước hoặc các nguyên tố cấu thành nước ($H$ và $O$) từ các hợp chất hữu cơ carbohydrate (đường mía $C_{12}H_{22}O_{11}$, bông, giấy, tinh bột) biến chúng thành than đen ($C$) xốp dâng cao do khí $CO_2, SO_2$ đẩy lên:\n$$C_{12}H_{22}O_{11} \\xrightarrow{H_2SO_4\\text{ đặc}} 12C + 11H_2O$$'
      ],
      latexEquations: [
        'Cu + 2H_2SO_4\\text{ (đặc)} \\xrightarrow{t^o} CuSO_4 + SO_2\\uparrow + 2H_2O',
        'C + 2H_2SO_4\\text{ (đặc)} \\xrightarrow{t^o} CO_2\\uparrow + 2SO_2\\uparrow + 2H_2O',
        'CaF_2 + H_2SO_4\\text{ (đặc)} \\xrightarrow{250\\;^\\circ\\text{C}} CaSO_4 + 2HF\\uparrow',
        'C_{12}H_{22}O_{11} \\xrightarrow{H_2SO_4\\text{ đặc}} 12C + 11H_2O'
      ]
    },
    {
      heading: 'II. Sản xuất Sulfuric Acid theo Phương pháp tiếp xúc',
      points: [
        'Giai đoạn 1: Sản xuất $SO_2$ từ sulfur hoặc quặng pyrite ($FeS_2$):\n$$S(s) + O_2(g) \\xrightarrow{t^o} SO_2(g)$$\n$$4FeS_2(s) + 11O_2(g) \\xrightarrow{t^o} 2Fe_2O_3(s) + 8SO_2(g)$$\n- Giai đoạn 2: Oxi hoá $SO_2$ thành $SO_3$ (xúc tác $V_2O_5$, $450\\;^\\circ\\text{C}$, $1 - 2\\text{ bar}$, hiệu suất $>98\\%$):\n$$2SO_2(g) + O_2(g) \\overset{V_2O_5, 450\\;^\\circ\\text{C}}{\\rightleftharpoons} 2SO_3(g) \\quad \\Delta_r H_{298}^\\circ = -198\\text{ kJ}$$\n- Giai đoạn 3: Hấp thụ $SO_3$ bằng $H_2SO_4$ đặc ($98\\%$) tạo oleum ($H_2SO_4 \\cdot nSO_3$), sau đó pha loãng oleum bằng nước để thu được sulfuric acid theo nồng độ mong muốn.'
      ],
      latexEquations: [
        '2SO_2(g) + O_2(g) \\overset{V_2O_5, t^o}{\\rightleftharpoons} 2SO_3(g)',
        'H_2SO_4 + nSO_3 \\rightarrow H_2SO_4 \\cdot nSO_3 \\text{ (oleum)}'
      ]
    },
    {
      heading: 'III. Muối Sulfate và Nhận biết ion $SO_4^{2-}$',
      points: [
        'Ứng dụng của muối sulfate:\n- $BaSO_4$ (barium sulfate): Làm chất cản quang trong chụp X-quang đường tiêu hoá, phụ gia sơn, gốm sứ do không tan trong nước và acid.\n- $CaSO_4 \\cdot 2H_2O$ (thạch cao sống): Sản xuất xi măng, bó bột gãy xương, đúc tượng phấn viết bảng.\n- $(NH_4)_2SO_4$ (ammonium sulfate): Làm phân đạm cung cấp nitrogen và sulfur cho cây trồng.\n- $MgSO_4$ (magnesium sulfate): Làm khoáng chất bổ sung trong thức ăn gia súc, sản xuất phân bón vi lượng.',
        'Nhận biết ion Sulfate ($SO_4^{2-}$):\n- Dùng dung dịch muối barium ($BaCl_2, Ba(NO_3)_2$) hoặc $Ba(OH)_2$.\n- Hiện tượng: Tạo kết tủa màu trắng $BaSO_4$, không tan trong nước và không tan trong các acid mạnh ($HCl, HNO_3$):\n$$Ba^{2+} + SO_4^{2-} \\rightarrow BaSO_4\\downarrow$$'
      ],
      latexEquations: [
        'Ba^{2+} + SO_4^{2-} \\rightarrow BaSO_4\\downarrow \\text{ (kết tủa trắng)}'
      ]
    }
  ],
  formulas: [
    {
      name: 'Phương trình ion nhận biết ion Sulfate',
      latex: 'Ba^{2+} + SO_4^{2-} \\rightarrow BaSO_4\\downarrow',
      description: 'Phản ứng đặc trưng nhận biết muối sulfate và sulfuric acid bằng ion barium.'
    },
    {
      name: 'Công thức tổng quát của Oleum',
      latex: 'H_2SO_4 \\cdot nSO_3',
      description: 'Hỗn hợp hình thành khi $H_2SO_4$ đặc hấp thụ khí $SO_3$ trong tháp tiếp xúc.'
    }
  ],
  keyConcepts: [
    {
      term: 'Oleum',
      definition: 'Dạng hỗn hợp tạo thành khi hoà tan khí $SO_3$ vào dung dịch $H_2SO_4$ đặc (98%), có công thức tổng quát $H_2SO_4 \\cdot nSO_3$.'
    },
    {
      term: 'Tính háo nước của $H_2SO_4$ đặc',
      definition: 'Khả năng hút nước mãnh liệt từ không khí ẩm, dung dịch hoặc chiếm lấy nguyên tố H và O từ các hợp chất hữu cơ (đường mía, tinh bột, cellulose) tạo carbon than hoá.'
    },
    {
      term: 'Chất cản quang Barium sulfate ($BaSO_4$)',
      definition: 'Hợp chất không tan trong nước và acid, không bị hấp thụ vào cơ thể và ngăn cản tia X, dùng an toàn trong chẩn đoán y tế chụp X-quang dạ dày - ruột.'
    },
    {
      term: 'Quy tắc pha loãng sulfuric acid',
      definition: 'Luôn luôn rót từ từ acid sulfuric đặc vào cốc đựng sẵn nước và khuấy đều, tuyệt đối không làm ngược lại.'
    }
  ],
  examples: [
    {
      title: 'Ví dụ 1: Nhận biết dung dịch $H_2SO_4$ loãng và $HCl$',
      content: 'Trình bày cách hoá học phân biệt 2 dung dịch mất nhãn: $H_2SO_4$ loãng và $HCl$.',
      solution: 'Lấy mẫu thử và nhỏ vài giọt dung dịch $BaCl_2$ vào 2 mẫu:\n- Mẫu xuất hiện kết tủa trắng không tan là $H_2SO_4$:\n$$BaCl_2 + H_2SO_4 \\rightarrow BaSO_4\\downarrow + 2HCl$$\n- Mẫu không có hiện tượng gì là $HCl$.'
    },
    {
      title: 'Ví dụ 2: Thí nghiệm than hoá đường mía',
      content: 'Mô tả hiện tượng và viết phương trình phản ứng khi nhỏ vài mL dung dịch $H_2SO_4$ đặc vào cốc chứa đường mía ($C_{12}H_{22}O_{11}$).',
      solution: 'Hiện tượng: Đường chuyển dần từ màu trắng sang vàng, nâu rồi hoá thành khối xốp màu đen dâng cao trào lên khỏi miệng cốc, toả nhiều nhiệt và có khói khí mùi hắc thoát ra.\nPhương trình:\n$$C_{12}H_{22}O_{11} \\xrightarrow{H_2SO_4\\text{ đặc}} 12C + 11H_2O$$\n$$C + 2H_2SO_4\\text{ (đặc)} \\xrightarrow{t^o} CO_2\\uparrow + 2SO_2\\uparrow + 2H_2O$$'
    }
  ],
  commonMistakes: [
    {
      mistake: 'Đổ trực tiếp nước vào cốc chứa dung dịch sulfuric acid đặc để pha loãng.',
      correction: 'Cực kì nguy hiểm! Phải rót từ từ acid đặc dọc theo thành đũa thuỷ tinh vào cốc nước và khuấy đều.',
      why: 'Acid sulfuric đặc có khối lượng riêng lớn và toả nhiệt cực mạnh, nếu đổ nước vào acid thì nước nhẹ hơn sẽ nổi lên trên, sôi đột ngột và bắn acid ra xung quanh gây bỏng nặng.'
    },
    {
      mistake: 'Nghĩ rằng $BaSO_4$ bị tan trong dung dịch $HCl$ hoặc $HNO_3$ dư.',
      correction: 'Kết tủa $BaSO_4$ không tan trong nước và không tan trong bất kì acid mạnh nào kể cả khi đun nóng.',
      why: '$H_2SO_4$ là acid mạnh và độ tan của $BaSO_4$ trong nước cực kì nhỏ.'
    }
  ],
  memoryTips: [
    'Pha loãng acid: Rót từ từ ACID VÀO NƯỚC (Acid trước nước sau là sai lầm).',
    'Bỏng acid: Rửa nhiều NƯỚC LẠNH $\\rightarrow$ Đắp dung dịch $NaHCO_3$ 2%.',
    '$H_2SO_4$ đặc: Oxi hoá mạnh (Cu, C) + Háo nước than hoá đường mía.',
    'Nhận biết gốc Sulfate ($SO_4^{2-}$): Dùng ion $Ba^{2+} \\rightarrow$ kết tủa trắng $BaSO_4$.'
  ],
  glossary: [
    { term: 'Sulfuric acid', meaning: 'Acid vô cơ $H_2SO_4$, chất lỏng sánh không màu, háo nước và oxi hoá mạnh khi ở dạng đặc.' },
    { term: 'Oleum', meaning: 'Hỗn hợp $H_2SO_4 \\cdot nSO_3$ tạo thành khi $H_2SO_4$ đặc hấp thụ $SO_3$.' },
    { term: 'Barium sulfate', meaning: 'Muối $BaSO_4$, chất rắn màu trắng không tan, làm chất cản quang X-quang.' }
  ],
  reviewChecklist: [
    'Thuộc quy tắc pha loãng $H_2SO_4$ đặc và quy trình sơ cứu khi bị bỏng acid.',
    'Viết các phương trình chứng minh tính oxi hoá mạnh của $H_2SO_4$ đặc với $Cu, C$.',
    'Giải thích hiện tượng háo nước than hoá carbohydrate.',
    'Nêu 3 giai đoạn của phương pháp tiếp xúc sản xuất $H_2SO_4$.',
    'Sử dụng ion $Ba^{2+}$ để nhận biết ion $SO_4^{2-}$ và nêu các ứng dụng của muối sulfate.'
  ]
};

export const lesson8Flashcards: Flashcard[] = [
  {
    id: 'fc-8-1',
    chapterId: 'chuong-2',
    lessonId: 'bai-8',
    category: 'cong-thuc',
    front: 'Nồng độ phần trăm của dung dịch sulfuric acid thương phẩm thường được bán trên thị trường là bao nhiêu?',
    back: 'Nồng độ **98%** (với khối lượng riêng $D = 1,84\\text{ g/cm}^3$).'
  },
  {
    id: 'fc-8-2',
    chapterId: 'chuong-2',
    lessonId: 'bai-8',
    category: 'thuc-tien',
    front: 'Quy tắc an toàn bất di bất dịch khi pha loãng dung dịch sulfuric acid đặc là gì?',
    back: 'Rót **từ từ dung dịch sulfuric acid đặc vào nước**, vừa rót vừa khuấy nhẹ (tuyệt đối không làm ngược lại).'
  },
  {
    id: 'fc-8-3',
    chapterId: 'chuong-2',
    lessonId: 'bai-8',
    category: 'thuc-tien',
    front: 'Bước sơ cứu đầu tiên cần làm ngay khi một người bị bỏng sulfuric acid là gì?',
    back: 'Nhanh chóng **rửa ngay với nước lạnh nhiều lần** để làm giảm lượng acid bám trên da.'
  },
  {
    id: 'fc-8-4',
    chapterId: 'chuong-2',
    lessonId: 'bai-8',
    category: 'thuc-tien',
    front: 'Sau khi rửa bằng nước sạch, người ta dùng dung dịch nào nồng độ khoảng 2% để trung hoà lượng acid còn lại khi sơ cứu bỏng acid?',
    back: 'Dùng dung dịch **$NaHCO_3$ loãng (khoảng 2%)**.'
  },
  {
    id: 'fc-8-5',
    chapterId: 'chuong-2',
    lessonId: 'bai-8',
    category: 'sulfur',
    front: 'Dung dịch sulfuric acid đặc thể hiện tính chất nào khi lấy nước từ hợp chất carbohydrate và khiến chúng hoá đen?',
    back: 'Thể hiện **tính háo nước**.'
  },
  {
    id: 'fc-8-6',
    chapterId: 'chuong-2',
    lessonId: 'bai-8',
    category: 'sulfur',
    front: 'Viết phương trình phản ứng giữa lá đồng ($Cu$) với dung dịch $H_2SO_4$ đặc khi đun nóng.',
    back: '$$Cu + 2H_2SO_4\\text{ (đặc)} \\xrightarrow{t^o} CuSO_4 + SO_2\\uparrow + 2H_2O$$'
  },
  {
    id: 'fc-8-7',
    chapterId: 'chuong-2',
    lessonId: 'bai-8',
    category: 'sulfur',
    front: 'Viết phương trình phản ứng giữa carbon ($C$) với dung dịch $H_2SO_4$ đặc, nóng.',
    back: '$$C + 2H_2SO_4\\text{ (đặc)} \\xrightarrow{t^o} CO_2\\uparrow + 2SO_2\\uparrow + 2H_2O$$'
  },
  {
    id: 'fc-8-8',
    chapterId: 'chuong-2',
    lessonId: 'bai-8',
    category: 'sulfur',
    front: 'Phân biệt dung dịch $Na_2SO_4$ và $NaCl$ bằng thuốc thử nào? Nêu hiện tượng.',
    back: 'Dùng dung dịch **$BaCl_2$ (hoặc $Ba(OH)_2, Ba(NO_3)_2$)**. $Na_2SO_4$ cho **kết tủa trắng $BaSO_4$** không tan trong acid, $NaCl$ không phản ứng.'
  },
  {
    id: 'fc-8-9',
    chapterId: 'chuong-2',
    lessonId: 'bai-8',
    category: 'thuc-tien',
    front: 'Muối sulfate nào không tan trong nước và acid, được dùng làm chất cản quang trong chụp X-quang đường tiêu hoá?',
    back: 'Muối **$BaSO_4$ (barium sulfate)**.'
  },
  {
    id: 'fc-8-10',
    chapterId: 'chuong-2',
    lessonId: 'bai-8',
    category: 'sulfur',
    front: 'Trong công nghiệp, hai nguồn nguyên liệu chính khai thác từ mỏ để cung cấp nguyên tố sulfur sản xuất $H_2SO_4$ là gì?',
    back: 'Là **sulfur đơn chất ($S$)** và **quặng pyrite ($FeS_2$)**.'
  },
  {
    id: 'fc-8-11',
    chapterId: 'chuong-2',
    lessonId: 'bai-8',
    category: 'sulfur',
    front: 'Trong phương pháp tiếp xúc, khí $SO_3$ được hấp thụ bằng chất nào để tạo oleum?',
    back: 'Được hấp thụ bằng **dung dịch sulfuric acid đặc (98%)** tạo oleum có công thức chung $H_2SO_4 \\cdot nSO_3$.'
  },
  {
    id: 'fc-8-12',
    chapterId: 'chuong-2',
    lessonId: 'bai-8',
    category: 'sulfur',
    front: 'Nhiệt độ và chất xúc tác trong giai đoạn oxi hoá $SO_2$ thành $SO_3$ là gì?',
    back: 'Xúc tác là **$V_2O_5$ (vanadium(V) oxide)** ở nhiệt độ khoảng **$450\\;^\\circ\\text{C}$**.'
  },
  {
    id: 'fc-8-13',
    chapterId: 'chuong-2',
    lessonId: 'bai-8',
    category: 'thuc-tien',
    front: 'Nêu các ứng dụng quan trọng của muối sulfate: $(NH_4)_2SO_4, CaSO_4 \\cdot 2H_2O, MgSO_4$.',
    back: '- $(NH_4)_2SO_4$: Phân đạm cho cây trồng.\n- $CaSO_4 \\cdot 2H_2O$: Xi măng, đúc tượng, bó bột gãy xương.\n- $MgSO_4$: Bổ sung khoáng vi lượng thức ăn gia súc.'
  },
  {
    id: 'fc-8-14',
    chapterId: 'chuong-2',
    lessonId: 'bai-8',
    category: 'sulfur',
    front: 'Những kim loại nào bị thụ động hoá trong dung dịch $H_2SO_4$ đặc, nguội?',
    back: 'Nhôm (**$Al$**), sắt (**$Fe$**) và chromium (**$Cr$**).'
  },
  {
    id: 'fc-8-15',
    chapterId: 'chuong-2',
    lessonId: 'bai-8',
    category: 'sulfur',
    front: 'Viết phương trình điều chế khí $HF$ trong công nghiệp từ quặng fluorite.',
    back: '$$CaF_2 + H_2SO_4\\text{ (đặc)} \\xrightarrow{250\\;^\\circ\\text{C}} CaSO_4 + 2HF\\uparrow$$'
  }
];

export const lesson8Quizzes: QuizQuestion[] = [
  {
    id: 'c2-b8-q1',
    chapterId: 'chuong-2',
    lessonId: 'bai-8',
    question: 'Sulfuric acid đựng trong chai thuỷ tinh thường được bán trên thị trường có nồng độ là',
    options: [
      { id: 'A', text: '98%.' },
      { id: 'B', text: '36%.' },
      { id: 'C', text: '63%.' },
      { id: 'D', text: '8%.' }
    ],
    correctAnswer: 'A',
    explanation: 'Dung dịch sulfuric acid đặc thương phẩm thường có nồng độ 98% ($D = 1,84\\text{ g/cm}^3$). (Câu 8.1 SBT)',
    difficulty: 'NhanBiet',
    source: 'SBT Hóa học 11 - Bài 8 (Câu 8.1)'
  },
  {
    id: 'c2-b8-q2',
    chapterId: 'chuong-2',
    lessonId: 'bai-8',
    question: 'Dung dịch acid nào sau đây có khả năng gây bỏng nặng nhất nếu rơi vào da?',
    options: [
      { id: 'A', text: '$HCl$ 36%.' },
      { id: 'B', text: '$HNO_3$ 63%.' },
      { id: 'C', text: '$H_2SO_4$ 98%.' },
      { id: 'D', text: '$H_3PO_4$ 85%.' }
    ],
    correctAnswer: 'C',
    explanation: 'Dung dịch $H_2SO_4$ 98% vừa có tính acid mạnh, vừa có tính háo nước và toả nhiệt cực mạnh phá huỷ tế bào da gây bỏng sâu nghiêm trọng. (Câu 8.2 SBT)',
    difficulty: 'NhanBiet',
    source: 'SBT Hóa học 11 - Bài 8 (Câu 8.2)'
  },
  {
    id: 'c2-b8-q3',
    chapterId: 'chuong-2',
    lessonId: 'bai-8',
    question: 'Chất nào sau đây không bay hơi ở điều kiện thường do có nhiệt độ sôi rất cao ($337\\;^\\circ\\text{C}$)?',
    options: [
      { id: 'A', text: '$H_2O$.' },
      { id: 'B', text: '$HNO_3$.' },
      { id: 'C', text: '$NH_3$.' },
      { id: 'D', text: '$H_2SO_4$.' }
    ],
    correctAnswer: 'D',
    explanation: '$H_2SO_4$ có nhiệt độ sôi rất cao ($337\\;^\\circ\\text{C}$) do liên kết hydrogen liên phân tử rất mạnh nên là chất lỏng không bay hơi ở điều kiện thường. (Câu 8.3 SBT)',
    difficulty: 'NhanBiet',
    source: 'SBT Hóa học 11 - Bài 8 (Câu 8.3)'
  },
  {
    id: 'c2-b8-q4',
    chapterId: 'chuong-2',
    lessonId: 'bai-8',
    question: 'Quá trình pha loãng dung dịch đậm đặc của acid nào sau đây toả rất nhiều nhiệt nên không được tự ý pha loãng sai quy tắc?',
    options: [
      { id: 'A', text: '$HCl$.' },
      { id: 'B', text: '$H_2SO_4$.' },
      { id: 'C', text: '$CH_3COOH$.' },
      { id: 'D', text: '$HNO_3$.' }
    ],
    correctAnswer: 'B',
    explanation: 'Quá trình hoà tan $H_2SO_4$ đặc vào nước toả lượng nhiệt cực lớn do tạo thành các hydrate. (Câu 8.4 SBT)',
    difficulty: 'NhanBiet',
    source: 'SBT Hóa học 11 - Bài 8 (Câu 8.4)'
  },
  {
    id: 'c2-b8-q5',
    chapterId: 'chuong-2',
    lessonId: 'bai-8',
    question: 'Ở thể lỏng, chất nào sau đây có dạng sánh như dầu do tồn tại liên kết hydrogen rất mạnh giữa các phân tử?',
    options: [
      { id: 'A', text: '$HF$.' },
      { id: 'B', text: '$H_2SO_4$.' },
      { id: 'C', text: '$H_2O$.' },
      { id: 'D', text: '$CH_3COOH$.' }
    ],
    correctAnswer: 'B',
    explanation: 'Sulfuric acid ở thể lỏng có dạng sánh như dầu do mạng lưới liên kết hydrogen liên phân tử dày đặc. (Câu 8.5 SBT)',
    difficulty: 'NhanBiet',
    source: 'SBT Hóa học 11 - Bài 8 (Câu 8.5)'
  },
  {
    id: 'c2-b8-q6',
    chapterId: 'chuong-2',
    lessonId: 'bai-8',
    question: 'Bước sơ cứu đầu tiên cần làm ngay khi một người bị bỏng sulfuric acid là',
    options: [
      { id: 'A', text: 'rửa với nước lạnh nhiều lần.' },
      { id: 'B', text: 'trung hoà acid bằng $NaHCO_3$.' },
      { id: 'C', text: 'băng bó tạm thời vết bỏng.' },
      { id: 'D', text: 'đưa đến cơ sở y tế gần nhất.' }
    ],
    correctAnswer: 'A',
    explanation: 'Bước đầu tiên và quan trọng nhất là nhanh chóng rửa ngay với nước lạnh nhiều lần để cuốn trôi acid và hạ nhiệt độ. (Câu 8.6 SBT)',
    difficulty: 'NhanBiet',
    source: 'SBT Hóa học 11 - Bài 8 (Câu 8.6)'
  },
  {
    id: 'c2-b8-q7',
    chapterId: 'chuong-2',
    lessonId: 'bai-8',
    question: 'Trong công nghiệp, hydrogen fluoride ($HF$) được điều chế từ quặng fluorite theo phản ứng: $CaF_2 + H_2SO_4 \\xrightarrow{250\\;^\\circ\\text{C}} CaSO_4 + 2HF\\uparrow$. Vai trò của sulfuric acid trong phản ứng là',
    options: [
      { id: 'A', text: 'base.' },
      { id: 'B', text: 'chất oxi hoá.' },
      { id: 'C', text: 'acid.' },
      { id: 'D', text: 'chất khử.' }
    ],
    correctAnswer: 'C',
    explanation: '$H_2SO_4$ đóng vai trò là một acid mạnh và khó bay hơi dùng để đẩy acid yếu dễ bay hơi $HF$ ra khỏi muối. (Câu 8.7 SBT)',
    difficulty: 'NhanBiet',
    source: 'SBT Hóa học 11 - Bài 8 (Câu 8.7)'
  },
  {
    id: 'c2-b8-q8',
    chapterId: 'chuong-2',
    lessonId: 'bai-8',
    question: 'Sulfuric acid đặc thể hiện tính chất nào khi lấy nước từ hợp chất carbohydrate và khiến chúng hoá đen?',
    options: [
      { id: 'A', text: 'Tính acid.' },
      { id: 'B', text: 'Tính base.' },
      { id: 'C', text: 'Tính háo nước.' },
      { id: 'D', text: 'Tính dễ tan.' }
    ],
    correctAnswer: 'C',
    explanation: 'Khả năng chiếm nước của các hợp chất hữu cơ thể hiện tính háo nước mãnh liệt của $H_2SO_4$ đặc. (Câu 8.8 SBT)',
    difficulty: 'NhanBiet',
    source: 'SBT Hóa học 11 - Bài 8 (Câu 8.8)'
  },
  {
    id: 'c2-b8-q9',
    chapterId: 'chuong-2',
    lessonId: 'bai-8',
    question: 'Phân biệt được dung dịch $Na_2SO_4$ và $NaCl$ bằng dung dịch nào sau đây?',
    options: [
      { id: 'A', text: '$MgCl_2$.' },
      { id: 'B', text: '$FeCl_2$.' },
      { id: 'C', text: '$HCl$.' },
      { id: 'D', text: '$BaCl_2$.' }
    ],
    correctAnswer: 'D',
    explanation: 'Dung dịch $BaCl_2$ phản ứng với $Na_2SO_4$ tạo kết tủa trắng $BaSO_4$: $Ba^{2+} + SO_4^{2-} \\rightarrow BaSO_4\\downarrow$. (Câu 8.9 SBT)',
    difficulty: 'NhanBiet',
    source: 'SBT Hóa học 11 - Bài 8 (Câu 8.9)'
  },
  {
    id: 'c2-b8-q10',
    chapterId: 'chuong-2',
    lessonId: 'bai-8',
    question: 'Muối X không tan trong nước và các dung môi hữu cơ. Trong y học, X thường được dùng làm chất cản quang trong xét nghiệm X-quang đường tiêu hoá. Công thức của X là',
    options: [
      { id: 'A', text: '$BaSO_4$.' },
      { id: 'B', text: '$Na_2SO_4$.' },
      { id: 'C', text: '$K_2SO_4$.' },
      { id: 'D', text: '$MgSO_4$.' }
    ],
    correctAnswer: 'A',
    explanation: 'Barium sulfate ($BaSO_4$) không tan và cản tia X nên dùng an toàn làm chất cản quang trong y tế. (Câu 8.10 SBT)',
    difficulty: 'NhanBiet',
    source: 'SBT Hóa học 11 - Bài 8 (Câu 8.10)'
  },
  {
    id: 'c2-b8-q11',
    chapterId: 'chuong-2',
    lessonId: 'bai-8',
    question: 'Trong công nghiệp sản xuất sulfuric acid, hai nguồn nguyên liệu được khai thác từ mỏ để cung cấp nguyên tố lưu huỳnh là',
    options: [
      { id: 'A', text: '$ZnS, PbS$.' },
      { id: 'B', text: '$H_2S, SO_2$.' },
      { id: 'C', text: '$CaSO_4, BaSO_4$.' },
      { id: 'D', text: '$S, FeS_2$.' }
    ],
    correctAnswer: 'D',
    explanation: 'Hai nguồn nguyên liệu chính khai thác mỏ là sulfur đơn chất ($S$) và quặng pyrite ($FeS_2$). (Câu 8.11 SBT)',
    difficulty: 'ThongHieu',
    source: 'SBT Hóa học 11 - Bài 8 (Câu 8.11)'
  },
  {
    id: 'c2-b8-q12',
    chapterId: 'chuong-2',
    lessonId: 'bai-8',
    question: 'Khi trộn dung dịch $Na_2SO_4$ với dung dịch $BaCl_2$, phản ứng thực chất xảy ra trong dung dịch là',
    options: [
      { id: 'A', text: '$Ba^{2+} + SO_4^{2-} \\rightarrow BaSO_4\\downarrow$.' },
      { id: 'B', text: '$Na^+ + Cl^- \\rightarrow NaCl$.' },
      { id: 'C', text: '$Ba^{2+} + Na_2SO_4 \\rightarrow BaSO_4\\downarrow + 2Na^+$.' },
      { id: 'D', text: '$BaCl_2 + SO_4^{2-} \\rightarrow BaSO_4\\downarrow + 2Cl^-$.' }
    ],
    correctAnswer: 'A',
    explanation: 'Phương trình ion rút gọn bản chất là sự kết hợp giữa cation $Ba^{2+}$ và anion $SO_4^{2-}$. (Câu 8.12 SBT)',
    difficulty: 'ThongHieu',
    source: 'SBT Hóa học 11 - Bài 8 (Câu 8.12)'
  },
  {
    id: 'c2-b8-q13',
    chapterId: 'chuong-2',
    lessonId: 'bai-8',
    question: 'Cho các hợp chất carbohydrate sau: đường glucose, đường saccharose, bông, bột gỗ. Số hợp chất có khả năng bị hoá đen khi tiếp xúc với sulfuric acid đặc là',
    options: [
      { id: 'A', text: '1.' },
      { id: 'B', text: '2.' },
      { id: 'C', text: '3.' },
      { id: 'D', text: '4.' }
    ],
    correctAnswer: 'D',
    explanation: 'Cả 4 hợp chất carbohydrate trên đều bị $H_2SO_4$ đặc hút nước và than hoá chuyển sang màu đen. (Câu 8.16 SBT)',
    difficulty: 'ThongHieu',
    source: 'SBT Hóa học 11 - Bài 8 (Câu 8.16)'
  },
  {
    id: 'c2-b8-q14',
    chapterId: 'chuong-2',
    lessonId: 'bai-8',
    question: 'Trong công nghiệp sản xuất sulfuric acid, sulfur trioxide được hấp thụ vào dung dịch sulfuric acid đặc tạo thành những hợp chất có công thức chung là',
    options: [
      { id: 'A', text: '$H_2S_2O_7$.' },
      { id: 'B', text: '$H_2SO_4$.' },
      { id: 'C', text: '$H_2SO_4 \\cdot nSO_3$.' },
      { id: 'D', text: '$(SO_3)_n$.' }
    ],
    correctAnswer: 'C',
    explanation: 'Oleum có công thức chung là $H_2SO_4 \\cdot nSO_3$. (Câu 8.17 SBT)',
    difficulty: 'ThongHieu',
    source: 'SBT Hóa học 11 - Bài 8 (Câu 8.17)'
  },
  {
    id: 'c2-b8-q15',
    chapterId: 'chuong-2',
    lessonId: 'bai-8',
    question: 'Cho dung dịch sulfuric acid đặc tác dụng với từng chất rắn sau: $NaCl, NaBr, NaI, NaHCO_3$ ở nhiệt độ thường. Số phản ứng trong đó sulfuric acid đóng vai trò chất oxi hoá là',
    options: [
      { id: 'A', text: '2.' },
      { id: 'B', text: '4.' },
      { id: 'C', text: '1.' },
      { id: 'D', text: '3.' }
    ],
    correctAnswer: 'A',
    explanation: 'Có 2 phản ứng thể hiện tính oxi hoá là với $NaBr$ và $NaI$ (chất khử mạnh, bị oxi hoá thành $Br_2, I_2$). Với $NaCl$ và $NaHCO_3$, $H_2SO_4$ chỉ đóng vai trò acid. (Câu 8.15 SBT)',
    difficulty: 'ThongHieu',
    source: 'SBT Hóa học 11 - Bài 8 (Câu 8.15)'
  }
];
