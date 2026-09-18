import { TheorySectionData, Flashcard, QuizQuestion } from '../../types';

export const lesson16Theory: TheorySectionData = {
  id: 'bai-16',
  chapterId: 'chuong-4',
  title: 'Bài 16: Hydrocarbon không no',
  objectives: [
    'Nêu được khái niệm, công thức tổng quát, đặc điểm liên kết và hình học phân tử của alkene và alkyne.',
    'Gọi tên thay thế một số alkene, alkyne đơn giản (C2 - C5), viết CTCT và nhận biết đồng phân hình học (cis-trans).',
    'Trình bày đặc điểm tính chất vật lí và tính chất hoá học: phản ứng cộng ($H_2, Br_2, HX, H_2O$), quy tắc Markovnikov, phản ứng trùng hợp, phản ứng thế của alk-1-yne với $AgNO_3/NH_3$, phản ứng oxi hoá.',
    'Nêu các ứng dụng thực tiễn và phương pháp điều chế ethylene, acetylene trong phòng thí nghiệm và công nghiệp.'
  ],
  summary: 'Hydrocarbon không no là các hydrocarbon mạch hở trong phân tử có chứa liên kết đôi $C=C$ (alkene) hoặc liên kết ba $C\\equiv C$ (alkyne). CTTQ của alkene là $C_n H_{2n}$ ($n \\ge 2$) và alkyne là $C_n H_{2n-2}$ ($n \\ge 2$). Trung tâm phản ứng là liên kết $\\pi$ kém bền, tham gia các phản ứng cộng ($H_2, Br_2, HX, H_2O$), phản ứng trùng hợp (alkene), phản ứng thế kim loại ($AgNO_3/NH_3$ với alk-1-yne) và phản ứng oxi hoá (làm mất màu $KMnO_4$).',
  coreKnowledge: [
    {
      heading: '1. Khái niệm, công thức tổng quát & Danh pháp',
      points: [
        'Alkene: Hydrocarbon không no mạch hở chứa 1 liên kết đôi $C=C$. CTTQ: $C_n H_{2n}$ ($n \\ge 2$). Phân tử $C_2H_4$ có dạng phẳng, góc liên kết xấp xỉ $120^\\circ$, gồm $1\\sigma + 1\\pi$.',
        'Alkyne: Hydrocarbon không no mạch hở chứa 1 liên kết ba $C\\equiv C$. CTTQ: $C_n H_{2n-2}$ ($n \\ge 2$). Phân tử $C_2H_2$ có dạng thẳng, góc liên kết $180^\\circ$, gồm $1\\sigma + 2\\pi$.',
        'Danh pháp thay thế: Tên nhánh (nếu có) + Tên phần nền + Số chỉ vị trí liên kết bội + "ene" (alkene) hoặc "yne" (alkyne). Đánh số C mạch chính từ phía gần liên kết bội hơn. Ví dụ: ethene ($C_2H_4$), propene ($C_3H_6$), but-1-ene, prop-1-yne, ethyne/acetylene ($C_2H_2$), pent-1-yne.',
        'Đồng phân cấu tạo: Alkene và alkyne từ C4 trở lên có đồng phân vị trí liên kết bội và đồng phân mạch carbon.',
        'Đồng phân hình học (cis - trans): Xuất hiện ở alkene dạng $abC=Ccd$ với $a \\ne b$ và $c \\ne d$. Dạng `cis-` có mạch chính nằm cùng một phía đối với liên kết đôi; dạng `trans-` có mạch chính nằm ở hai phía khác nhau đối với liên kết đôi. Ví dụ: cis-but-2-ene và trans-but-2-ene.'
      ]
    },
    {
      heading: '2. Tính chất vật lí',
      points: [
        'Trạng thái: Ở điều kiện thường, từ C2 đến C4 ($C_2H_4, C_3H_6, C_4H_8, C_2H_2, C_3H_4, C_4H_6$) là chất khí; từ C5 đến C17 là chất lỏng; C18 trở lên là chất rắn.',
        'Không màu, nhẹ hơn nước, không tan trong nước nhưng tan tốt trong các dung môi hữu cơ.',
        'Độ tan của acetylene trong acetone ở $20^\\circ C$ là $2,79\\text{ g} / 100\\text{ g}$ dung môi.'
      ]
    },
    {
      heading: '3. Tính chất hoá học',
      points: [
        'a) Phản ứng cộng Hydrogen ($H_2$): Alkene $+ H_2 \\xrightarrow{Ni/Pt, t^\\circ, p} \\text{Alkane}$. Alkyne $+ H_2 \\xrightarrow{Pd/PbCO_3, t^\\circ} \\text{Alkene}$; Alkyne $+ 2H_2 \\xrightarrow{Ni, t^\\circ, p} \\text{Alkane}$.',
        'b) Phản ứng cộng Halogen ($Br_2, Cl_2$): Alkene và alkyne làm mất màu dung dịch nước bromine $Br_2$ màu nâu đỏ ở điều kiện thường (phản ứng dùng để nhận biết hydrocarbon không no). $CH_2=CH_2 + Br_2 \\rightarrow CH_2Br-CH_2Br$ (1,2-dibromoethane). $CH\\equiv CH + 2Br_2 \\rightarrow CHBr_2-CHBr_2$.',
        'c) Phản ứng cộng $HX$ ($HCl, HBr, H_2O$) & Quy tắc Markovnikov: Trong phản ứng cộng $HX$ vào liên kết bội bất đối xứng, nguyên tử H ưu tiên cộng vào C có nhiều H hơn, nguyên tử/nhóm X cộng vào C có ít H hơn để tạo sản phẩm chính. Hydrate hoá $C_2H_2$ tạo acetaldehyde ($CH_3-CHO$).',
        'd) Phản ứng trùng hợp alkene: Các phân tử alkene kết hợp liên tiếp tạo polymer. $n CH_2=CH_2 \\xrightarrow{xt, p, t^\\circ} \\{-CH_2-CH_2-\\}_n$ (Polyethylene - PE). $n CH_2=CH(CH_3) \\xrightarrow{xt, p, t^\\circ} \\{-CH_2-CH(CH_3)-\\}_n$ (Polypropylene - PP).',
        'e) Phản ứng thế kim loại của alk-1-yne: Alkyne có liên kết ba ở đầu mạch (alk-1-yne) phản ứng với dung dịch $AgNO_3$ trong $NH_3$ tạo kết tủa màu vàng nhạt. Ví dụ: $HC\\equiv CH + 2AgNO_3 + 2NH_3 \\rightarrow Ag-C\\equiv C-Ag\\downarrow + 2NH_4NO_3$. Dùng để phân biệt alk-1-yne với alkene và alk-2-yne.',
        'f) Phản ứng oxi hoá: Làm mất màu dung dịch $KMnO_4$ ở nhiệt độ thường (oxi hoá không hoàn toàn). $3CH_2=CH_2 + 2KMnO_4 + 4H_2O \\rightarrow 3HO-CH_2-CH_2-OH (ethylene glycol) + 2MnO_2\\downarrow + 2KOH$. Phản ứng cháy hoàn toàn toả nhiều nhiệt, ngọn lửa đèn xì oxygen - acetylene đạt trên $3000^\\circ C$.'
      ],
      latexEquations: [
        'CH_2=CH_2 + H_2 \\xrightarrow{Ni, t^\\circ} CH_3-CH_3',
        'CH\\equiv CH + H_2 \\xrightarrow{Pd/PbCO_3, t^\\circ} CH_2=CH_2',
        'CH_2=CH_2 + Br_2 \\rightarrow CH_2Br-CH_2Br',
        'CH_3-CH=CH_2 + HBr \\rightarrow CH_3-CHBr-CH_3 \\text{ (SP chính)}',
        'HC\\equiv CH + 2AgNO_3 + 2NH_3 \\rightarrow Ag-C\\equiv C-Ag\\downarrow + 2NH_4NO_3'
      ]
    },
    {
      heading: '4. Điều chế & Ứng dụng',
      points: [
        'Điều chế ethylene trong phòng thí nghiệm: Đun nóng ethanol với $H_2SO_4$ đặc ở $170^\\circ C$: $C_2H_5OH \\xrightarrow{H_2SO_4 \\text{ đặc}, 170^\\circ C} C_2H_4 + H_2O$.',
        'Điều chế acetylene trong phòng thí nghiệm: Cho đất đèn ($CaC_2$) tác dụng với nước: $CaC_2 + 2H_2O \\rightarrow C_2H_2 + Ca(OH)_2$. Trong công nghiệp: Nhiệt phân methane ở $1500^\\circ C$ rồi làm lạnh nhanh: $2CH_4 \\xrightarrow{1500^\\circ C} C_2H_2 + 3H_2$.',
        'Ứng dụng: Ethylene giúp kích thích quả mau chín; sản xuất chất dẻo PE, PP, PVC, sợi tổng hợp, ethylene glycol, dung môi và hoá chất.'
      ]
    }
  ],
  formulas: [
    {
      name: 'Công thức chung Alkene',
      latex: 'C_n H_{2n} \\quad (n \\ge 2)',
      description: 'Chứa 1 liên kết đôi C=C mạch hở.'
    },
    {
      name: 'Công thức chung Alkyne',
      latex: 'C_n H_{2n-2} \\quad (n \\ge 2)',
      description: 'Chứa 1 liên kết ba C≡C mạch hở.'
    }
  ],
  keyConcepts: [
    {
      term: 'Hydrocarbon không no',
      definition: 'Hydrocarbon trong phân tử có chứa liên kết đôi C=C hoặc liên kết ba C≡C (gọi chung là liên kết bội) mạch hở.'
    },
    {
      term: 'Quy tắc Markovnikov',
      definition: 'Khi cộng HX vào liên kết bội bất đối xứng, H ưu tiên cộng vào C có nhiều H hơn, X cộng vào C có ít H hơn.'
    },
    {
      term: 'Phản ứng trùng hợp',
      definition: 'Quá trình cộng hợp liên tiếp nhiều phân tử nhỏ giống nhau hoặc tương tự nhau (monomer) tạo thành phân tử lớn (polymer).'
    },
    {
      term: 'Alk-1-yne',
      definition: 'Alkyne có liên kết ba nằm ở vị trí đầu mạch (C1), có khả năng phản ứng với dung dịch AgNO3/NH3 tạo kết tủa vàng nhạt.'
    }
  ],
  examples: [
    {
      title: 'Ví dụ 1: Áp dụng quy tắc Markovnikov',
      content: 'Xác định công thức cấu tạo của sản phẩm chính khi cho propene ($CH_3-CH=CH_2$) tác dụng với $HCl$.',
      solution: 'Theo quy tắc Markovnikov, H sẽ cộng vào $CH_2$ (C có 2H) và Cl cộng vào $CH$ (C có 1H).\nSản phẩm chính thu được là $CH_3-CHCl-CH_3$ (2-chloropropane).'
    },
    {
      title: 'Ví dụ 2: Phân biệt propane, propene và propyne bằng phương pháp hoá học',
      content: 'Trình bày phương pháp hoá học để phân biệt 3 bình khí mất nhãn chứa propane, propene và propyne.',
      solution: '1. Dẫn lần lượt từng khí qua dung dịch $AgNO_3$ trong $NH_3$:\n- Khí tạo kết tủa vàng nhạt $Ag-C\\equiv C-CH_3\\downarrow$ là propyne.\n- Khí không có hiện tượng là propane và propene.\n2. Dẫn 2 khí còn lại qua dung dịch nước $Br_2$ màu nâu đỏ:\n- Khí làm mất màu dung dịch $Br_2$ là propene.\n- Khí không làm mất màu $Br_2$ là propane.'
    }
  ],
  commonMistakes: [
    {
      mistake: 'Nhầm lẫn phản ứng thế của alk-1-yne với dung dịch $AgNO_3/NH_3$ là phản ứng tráng bạc của aldehyde.',
      correction: 'Phản ứng của alk-1-yne với $AgNO_3/NH_3$ tạo kết tủa màu vàng nhạt $Ag-C\\equiv C-R$, không tạo lớp bạc sáng bóng (tráng bạc).',
      why: 'Đây là phản ứng thế nguyên tử H linh động ở C mang liên kết ba đầu mạch bằng cation $Ag^+$, không phải phản ứng oxi hoá - khử tráng gương.'
    },
    {
      mistake: 'Quên xúc tác $Pd/PbCO_3$ khi dừng phản ứng cộng $H_2$ của alkyne ở giai đoạn alkene.',
      correction: 'Nếu dùng xúc tác $Ni, t^\\circ$, alkyne cộng $2H_2$ tạo alkane. Để dừng ở alkene, bắt buộc dùng xúc tác $Pd/PbCO_3, t^\\circ$.',
      why: 'Xúc tác $Pd/PbCO_3$ giảm hoạt tính của Palladium khiến phản ứng dừng lại sau khi cộng 1 mol $H_2$.'
    }
  ],
  memoryTips: [
    'Mẹo Markovnikov: "Giàu càng giàu thêm" (Carbon nào có nhiều H hơn thì H tiếp tục lao vào carbon đó).',
    'Mẹo nhận biết alk-1-yne: "Liên kết ba đầu mạch - Kết tủa vàng nhạt với Ag+".'
  ],
  glossary: [
    { term: 'Polyethylene (PE)', meaning: 'Chất dẻo phổ biến thu được từ phản ứng trùng hợp ethene (ethylene).' },
    { term: 'Ethylene glycol', meaning: 'HO-CH2-CH2-OH, rượu 2 chức thu được khi oxi hoá ethene bằng KMnO4.' }
  ],
  reviewChecklist: [
    'Phân biệt điều kiện xuất hiện đồng phân hình học cis-trans.',
    'Phát biểu chính xác và áp dụng quy tắc Markovnikov.',
    'Nhớ phương trình phản ứng thế kim loại của alk-1-yne với AgNO3/NH3.',
    'Nêu hiện tượng khi cho alkene/alkyne vào dung dịch bromine hoặc KMnO4.'
  ]
};

export const lesson16Flashcards: Flashcard[] = [
  {
    id: 'fc-16-1',
    lessonId: 'bai-16',
    front: 'Công thức tổng quát của alkene và alkyne mạch hở là gì?',
    back: '- Alkene: $C_n H_{2n}$ ($n \\ge 2$).\n- Alkyne: $C_n H_{2n-2}$ ($n \\ge 2$).',
    category: 'alkene-alkyne'
  },
  {
    id: 'fc-16-2',
    lessonId: 'bai-16',
    front: 'Đặc điểm liên kết trong phân tử ethylene ($C_2H_4$) và acetylene ($C_2H_2$) là gì?',
    back: '- $C_2H_4$: Liên kết đôi $C=C$ gồm $1\\sigma + 1\\pi$, cấu tạo phẳng ($120^\\circ$).\n- $C_2H_2$: Liên kết ba $C\\equiv C$ gồm $1\\sigma + 2\\pi$, cấu tạo thẳng ($180^\\circ$).',
    category: 'alkene-alkyne'
  },
  {
    id: 'fc-16-3',
    lessonId: 'bai-16',
    front: 'Điều kiện để một alkene có đồng phân hình học cis-trans là gì?',
    back: 'Alkene có dạng $abC=Ccd$ với $a \\ne b$ và $c \\ne d$. Dạng `cis-` có mạch chính ở cùng một phía, `trans-` ở 2 phía khác nhau.',
    category: 'alkene-alkyne'
  },
  {
    id: 'fc-16-4',
    lessonId: 'bai-16',
    front: 'Hiện tượng xảy ra khi dẫn ethene hoặc acetylene qua dung dịch nước bromine $Br_2$ là gì?',
    back: 'Dung dịch nước bromine màu nâu đỏ bị mất màu (chuyển thành trong suốt) do phản ứng cộng halogen vào liên kết $\\pi$.',
    category: 'alkene-alkyne'
  },
  {
    id: 'fc-16-5',
    lessonId: 'bai-16',
    front: 'Phát biểu quy tắc Markovnikov khi cộng $HX$ vào alkene bất đối xứng.',
    back: 'Khi cộng $HX$ vào liên kết đôi bất đối xứng, H ưu tiên cộng vào C có nhiều H hơn (tạo sản phẩm chính), X cộng vào C có ít H hơn.',
    category: 'alkene-alkyne'
  },
  {
    id: 'fc-16-6',
    lessonId: 'bai-16',
    front: 'Để hiđro hoá alkyne dừng lại ở giai đoạn alkene cần dùng xúc tác gì?',
    back: 'Dùng xúc tác $Pd/PbCO_3$ đun nóng ($R-C\\equiv C-R\' + H_2 \\xrightarrow{Pd/PbCO_3, t^\\circ} R-CH=CH-R\'$).',
    category: 'alkene-alkyne'
  },
  {
    id: 'fc-16-7',
    lessonId: 'bai-16',
    front: 'Sản phẩm chính của phản ứng cộng $H_2O$ vào acetylene ($CH\\equiv CH$) là chất gì?',
    back: 'Acetaldehyde ($CH_3-CHO$), phản ứng thực hiện với xúc tác $HgSO_4/H_2SO_4$ ở $80^\\circ C$.',
    category: 'alkene-alkyne'
  },
  {
    id: 'fc-16-8',
    lessonId: 'bai-16',
    front: 'Monomer và phương trình trùng hợp tạo Polyethylene (PE) là gì?',
    back: 'Monomer là ethene ($CH_2=CH_2$).\n$n CH_2=CH_2 \\xrightarrow{xt, p, t^\\circ} \\{-CH_2-CH_2-\\}_n$.',
    category: 'alkene-alkyne'
  },
  {
    id: 'fc-16-9',
    lessonId: 'bai-16',
    front: 'Các alkyne nào có phản ứng tạo kết tủa vàng nhạt với dung dịch $AgNO_3/NH_3$?',
    back: 'Các alk-1-yne (alkyne có liên kết ba ở đầu mạch như $CH\\equiv CH, CH\\equiv C-CH_3$). Cation $Ag^+$ thế nguyên tử H ở C mang liên kết ba.',
    category: 'alkene-alkyne'
  },
  {
    id: 'fc-16-10',
    lessonId: 'bai-16',
    front: 'Hiện tượng khi sục ethene vào dung dịch $KMnO_4$ ở nhiệt độ thường là gì?',
    back: 'Dung dịch $KMnO_4$ màu tím bị mất màu và xuất hiện kết tủa nâu đen $MnO_2\\downarrow$. Sản phẩm hữu cơ thu được là $HO-CH_2-CH_2-OH$ (ethylene glycol).',
    category: 'alkene-alkyne'
  },
  {
    id: 'fc-16-11',
    lessonId: 'bai-16',
    front: 'Phương trình điều chế ethene ($C_2H_4$) trong phòng thí nghiệm là gì?',
    back: '$C_2H_5OH \\xrightarrow{H_2SO_4 \\text{ đặc}, 170^\\circ C} C_2H_4 + H_2O$.',
    category: 'alkene-alkyne'
  },
  {
    id: 'fc-16-12',
    lessonId: 'bai-16',
    front: 'Phương trình điều chế acetylene ($C_2H_2$) từ đất đèn ($CaC_2$) là gì?',
    back: '$CaC_2 + 2H_2O \\rightarrow C_2H_2\\uparrow + Ca(OH)_2$.',
    category: 'alkene-alkyne'
  },
  {
    id: 'fc-16-13',
    lessonId: 'bai-16',
    front: 'Nhiệt độ ngọn lửa đèn xì oxygen - acetylene đạt bao nhiêu và ứng dụng là gì?',
    back: 'Đạt trên $3000^\\circ C$, dùng để hàn và cắt kim loại trong kĩ thuật.',
    category: 'alkene-alkyne'
  },
  {
    id: 'fc-16-14',
    lessonId: 'bai-16',
    front: 'Chất khí nào sinh ra tự nhiên trong quá trình hô hấp của quả chín giúp kích thích quả mau chín?',
    back: 'Khí ethylene ($C_2H_4$).',
    category: 'alkene-alkyne'
  },
  {
    id: 'fc-16-15',
    lessonId: 'bai-16',
    front: 'Nêu cách phân biệt but-1-yne và but-2-yne bằng phương pháp hoá học.',
    back: 'Dùng dung dịch $AgNO_3$ trong $NH_3$:\n- But-1-yne ($HC\\equiv C-CH_2-CH_3$) tạo kết tủa vàng nhạt $AgC\\equiv C-CH_2-CH_3\\downarrow$.\n- But-2-yne ($CH_3-C\\equiv C-CH_3$) không có phản ứng.',
    category: 'alkene-alkyne'
  }
];

export const lesson16Quizzes: QuizQuestion[] = [
  {
    id: 'q-16-1',
    lessonId: 'bai-16',
    question: 'Công thức tổng quát của alkene mạch hở là gì?',
    options: [
      { id: 'A', text: '$C_n H_{2n+2}$ ($n \\ge 1$)' },
      { id: 'B', text: '$C_n H_{2n}$ ($n \\ge 2$)' },
      { id: 'C', text: '$C_n H_{2n-2}$ ($n \\ge 2$)' },
      { id: 'D', text: '$C_n H_{2n-6}$ ($n \\ge 6$)' }
    ],
    correctAnswer: 'B',
    explanation: 'Alkene mạch hở chứa 1 liên kết đôi C=C có CTTQ là $C_n H_{2n}$ ($n \\ge 2$).',
    difficulty: 'NhanBiet',
    source: 'SGK Hoá học 11 - Bài 16'
  },
  {
    id: 'q-16-2',
    lessonId: 'bai-16',
    question: 'Chất nào sau đây có đồng phân hình học (cis - trans)?',
    options: [
      { id: 'A', text: 'Ethene ($CH_2=CH_2$)' },
      { id: 'B', text: 'Propene ($CH_2=CH-CH_3$)' },
      { id: 'C', text: 'But-1-ene ($CH_2=CH-CH_2-CH_3$)' },
      { id: 'D', text: 'But-2-ene ($CH_3-CH=CH-CH_3$)' }
    ],
    correctAnswer: 'D',
    explanation: 'But-2-ene có dạng $CH_3-CH=CH-CH_3$ với mỗi C mang liên kết đôi gắn với 2 nhóm khác nhau ($-H$ và $-CH_3$), do đó có đồng phân cis-but-2-ene và trans-but-2-ene.',
    difficulty: 'ThongHieu',
    source: 'SGK Hoá học 11 - Bài 16'
  },
  {
    id: 'q-16-3',
    lessonId: 'bai-16',
    question: 'Dẫn khí ethene vào dung dịch nước bromine $Br_2$, hiện tượng quan sát được là gì?',
    options: [
      { id: 'A', text: 'Dung dịch xuất hiện kết tủa trắng' },
      { id: 'B', text: 'Dung dịch bromine bị mất màu' },
      { id: 'C', text: 'Dung dịch chuyển sang màu tím' },
      { id: 'D', text: 'Không có hiện tượng gì' }
    ],
    correctAnswer: 'B',
    explanation: 'Ethene phản ứng cộng với $Br_2$ tạo 1,2-dibromoethane không màu, làm mất màu nâu đỏ của dung dịch bromine.',
    difficulty: 'NhanBiet',
    source: 'SBT Hoá học 11 - Bài 16'
  },
  {
    id: 'q-16-4',
    lessonId: 'bai-16',
    question: 'Sản phẩm chính của phản ứng cộng $HCl$ vào propene ($CH_3-CH=CH_2$) theo quy tắc Markovnikov là gì?',
    options: [
      { id: 'A', text: '1-chloropropane' },
      { id: 'B', text: '2-chloropropane' },
      { id: 'C', text: '1,2-dichloropropane' },
      { id: 'D', text: 'Propane' }
    ],
    correctAnswer: 'B',
    explanation: 'Theo quy tắc Markovnikov, H cộng vào $CH_2$ (nhiều H hơn) và Cl cộng vào $CH$ (ít H hơn) $\\Rightarrow$ Sản phẩm chính là $CH_3-CHCl-CH_3$ (2-chloropropane).',
    difficulty: 'ThongHieu',
    source: 'SGK Hoá học 11 - Bài 16'
  },
  {
    id: 'q-16-5',
    lessonId: 'bai-16',
    question: 'Chất nào sau đây phản ứng với dung dịch $AgNO_3$ trong $NH_3$ tạo kết tủa màu vàng nhạt?',
    options: [
      { id: 'A', text: 'Ethane' },
      { id: 'B', text: 'Ethene' },
      { id: 'C', text: 'Propyne' },
      { id: 'D', text: 'But-2-yne' }
    ],
    correctAnswer: 'C',
    explanation: 'Propyne ($HC\\equiv C-CH_3$) là alk-1-yne có liên kết ba đầu mạch nên phản ứng thế $Ag^+$ tạo kết tủa vàng nhạt $AgC\\equiv C-CH_3\\downarrow$.',
    difficulty: 'ThongHieu',
    source: 'SBT Hoá học 11 - Bài 16'
  },
  {
    id: 'q-16-6',
    lessonId: 'bai-16',
    question: 'Trùng hợp ethene thu được polymer nào có ứng dụng làm chất dẻo?',
    options: [
      { id: 'A', text: 'Polypropylene (PP)' },
      { id: 'B', text: 'Polyethylene (PE)' },
      { id: 'C', text: 'Poly(vinyl chloride) (PVC)' },
      { id: 'D', text: 'Polystyrene (PS)' }
    ],
    correctAnswer: 'B',
    explanation: 'Trùng hợp ethene ($CH_2=CH_2$) thu được polyethylene $\\{-CH_2-CH_2-\\}_n$ (PE).',
    difficulty: 'NhanBiet',
    source: 'SGK Hoá học 11 - Bài 16'
  },
  {
    id: 'q-16-7',
    lessonId: 'bai-16',
    question: 'Trong phòng thí nghiệm, khí acetylene được điều chế bằng cách cho chất nào tác dụng với nước?',
    options: [
      { id: 'A', text: '$Al_4C_3$' },
      { id: 'B', text: '$CaC_2$' },
      { id: 'C', text: '$C_2H_5OH$' },
      { id: 'D', text: '$CH_4$' }
    ],
    correctAnswer: 'B',
    explanation: 'Cho đất đèn ($CaC_2$) tác dụng với nước thu được khí acetylene: $CaC_2 + 2H_2O \\rightarrow C_2H_2 + Ca(OH)_2$.',
    difficulty: 'NhanBiet',
    source: 'SGK Hoá học 11 - Bài 16'
  },
  {
    id: 'q-16-8',
    lessonId: 'bai-16',
    question: 'Xúc tác thích hợp để hiđro hoá propyne thành propene là gì?',
    options: [
      { id: 'A', text: '$Ni, t^\\circ$' },
      { id: 'B', text: '$Pd/PbCO_3, t^\\circ$' },
      { id: 'C', text: '$Fe, t^\\circ$' },
      { id: 'D', text: '$H_2SO_4 \\text{ đặc}, 170^\\circ C$' }
    ],
    correctAnswer: 'B',
    explanation: 'Dùng xúc tác $Pd/PbCO_3, t^\\circ$ phản ứng cộng $H_2$ vào alkyne dừng lại ở giai đoạn alkene.',
    difficulty: 'ThongHieu',
    source: 'SBT Hoá học 11 - Bài 16'
  },
  {
    id: 'q-16-9',
    lessonId: 'bai-16',
    question: 'Cho 0,1 mol ethene phản ứng hoàn toàn với dung dịch $Br_2$ dư. Khối lượng $Br_2$ đã phản ứng là bao nhiêu?',
    options: [
      { id: 'A', text: '8,0 g' },
      { id: 'B', text: '16,0 g' },
      { id: 'C', text: '32,0 g' },
      { id: 'D', text: '160,0 g' }
    ],
    correctAnswer: 'B',
    explanation: '$n_{Br_2} = n_{C_2H_4} = 0,1 \\text{ mol} \\Rightarrow m_{Br_2} = 0,1 \\times 160 = 16,0 \\text{ g}$.',
    difficulty: 'VanDung',
    source: 'SBT Hoá học 11 - Bài 16'
  },
  {
    id: 'q-16-10',
    lessonId: 'bai-16',
    question: 'Số đồng phân alkene ứng với công thức phân tử $C_4H_8$ (tính cả đồng phân hình học) là bao nhiêu?',
    options: [
      { id: 'A', text: '3' },
      { id: 'B', text: '4' },
      { id: 'C', text: '5' },
      { id: 'D', text: '6' }
    ],
    correctAnswer: 'B',
    explanation: '$C_4H_8$ có các alkene: but-1-ene, methylpropene, cis-but-2-ene và trans-but-2-ene (tổng cộng 4 đồng phân).',
    difficulty: 'ThongHieu',
    source: 'SBT Hoá học 11 - Bài 16'
  }
];
