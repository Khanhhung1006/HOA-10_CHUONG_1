import { TheorySectionData, Flashcard, QuizQuestion } from '../../types';

export const lesson19Theory: TheorySectionData = {
  id: 'bai-19',
  chapterId: 'chuong-5',
  title: 'Bài 19: Dẫn xuất halogen',
  objectives: [
    'Nêu được khái niệm về dẫn xuất halogen, công thức tổng quát và đặc điểm cấu tạo phân tử.',
    'Gọi tên thay thế, tên thông thường và tên gốc - chức của một số dẫn xuất halogen phổ biến.',
    'Trình bày đặc điểm tính chất vật lí và tính chất hoá học đặc trưng: phản ứng thế nguyên tử halogen (thuỷ phân) và phản ứng tách hydrogen halide (quy tắc Zaitsev).',
    'Nêu ứng dụng thực tiễn, tác hại của CFC đối với tầng ozone và xu hướng sử dụng hợp chất thay thế an toàn (HFC, HFO).'
  ],
  summary: 'Dẫn xuất halogen thu được khi thay thế nguyên tử hydrogen trong phân tử hydrocarbon bằng nguyên tử halogen. Công thức tổng quát $RX_n$. Do liên kết $C-X$ phân cực về phía halogen, phản ứng đặc trưng của dẫn xuất halogen là phản ứng thế nguyên tử halogen trong môi trường kiềm (tạo alcohol) và phản ứng tách hydrogen halide $HX$ tạo alkene theo quy tắc Zaitsev. Các hợp chất CFC gây suy giảm tầng ozone hiện đã được thay thế bằng HFC và HFO.',
  coreKnowledge: [
    {
      heading: '1. Khái niệm, danh pháp & Cấu tạo phân tử',
      points: [
        'Khái niệm: Khi thay thế nguyên tử hydrogen trong phân tử hydrocarbon bằng nguyên tử halogen (F, Cl, Br, I), thu được dẫn xuất halogen của hydrocarbon.',
        'Công thức tổng quát: $RX_n$ (với R là gốc hydrocarbon, X là nguyên tử halogen, $n \\ge 1$). CTTQ của dẫn xuất monohalogen no mạch hở là $C_n H_{2n+1}X$ ($n \\ge 1$).',
        'Danh pháp thay thế: Vị trí halogeno - tên halogeno + tên hydrocarbon tương ứng. Tên halogeno: fluoro, chloro, bromo, iodo. Đánh số C mạch chính từ phía gần nhóm thế halogeno hơn (ưu tiên liên kết bội hơn halogeno nếu có). Ví dụ: $CH_3Br$ (bromomethane), $CH_3-CH(Cl)-CH_2-CH_3$ (2-chlorobutane), $CH_2=CH-CH_2F$ (3-fluoroprop-1-ene).',
        'Tên gốc - chức: Tên gốc hydrocarbon + tên halide. Ví dụ: $CH_3CH_2Cl$ (ethyl chloride), $CH_2=CH-Cl$ (vinyl chloride), $C_6H_5-I$ (phenyl iodide), $C_6H_5CH_2Br$ (benzyl bromide).',
        'Tên thông thường: $CHCl_3$ (chloroform), $CHBr_3$ (bromoform), $CHI_3$ (iodoform), $CCl_4$ (carbon tetrachloride).',
        'Đặc điểm cấu tạo: Liên kết $C-X$ phân cực về phía nguyên tử halogen ($C^{\\delta+} - X^{\\delta-}$). Năng lượng liên kết $C-X$ giảm dần theo thứ tự $C-F > C-Cl > C-Br > C-I$, nên khả năng bẻ gãy liên kết $C-X$ tăng dần từ fluorine đến iodine.'
      ]
    },
    {
      heading: '2. Tính chất vật lí',
      points: [
        'Trạng thái: Ở điều kiện thường, một số hợp chất có phân tử khối nhỏ ($CH_3Cl, CH_3F,...$) ở trạng thái khí; các dẫn xuất halogen có phân tử khối lớn hơn ở trạng thái lỏng hoặc rắn.',
        'Nhiệt độ sôi & Độ tan: Nhiệt độ nóng chảy và nhiệt độ sôi của dẫn xuất halogen cao hơn các hydrocarbon có phân tử khối tương đương do sự phân cực của liên kết $C-X$. Dẫn xuất halogen hầu như không tan trong nước, tan tốt trong các dung môi hữu cơ.'
      ]
    },
    {
      heading: '3. Tính chất hoá học',
      points: [
        'a) Phản ứng thế nguyên tử halogen (Thuỷ phân): Dẫn xuất halogen tác dụng với dung dịch kiềm ($NaOH, KOH$) đun nóng, nguyên tử halogen bị thay thế bởi nhóm $-OH$ tạo thành alcohol: $R-X + OH^- \\xrightarrow{t^\\circ} R-OH + X^-$. Ví dụ: $CH_3CH_2CH_2Cl + NaOH \\xrightarrow{t^\\circ} CH_3CH_2CH_2OH + NaCl$. Benzyl chloride thuỷ phân dễ dàng thu được benzyl alcohol ($C_6H_5CH_2OH$).',
        '  - Nhận biết ion $X^-$ sinh ra sau thuỷ phân bằng dung dịch $AgNO_3$ (trong môi trường acid $HNO_3$): $Ag^+ + X^- \\rightarrow AgX\\downarrow$ ($AgCl$ trắng, $AgBr$ vàng nhạt, $AgI$ vàng đậm).',
        'b) Phản ứng tách hydrogen halide ($HX$) & Quy tắc Zaitsev: Khi đun nóng dẫn xuất monohalogen của alkane với base mạnh như $NaOH$ hoặc $KOH$ trong môi trường alcohol ($C_2H_5OH$), xảy ra phản ứng tách $HX$ tạo alkene: $C_n H_{2n+1}X \\xrightarrow{NaOH/C_2H_5OH, t^\\circ} C_n H_{2n} + HX$.',
        '  - Quy tắc Zaitsev (Zai-xép): Nguyên tử halogen bị tách ưu tiên cùng với nguyên tử hydrogen ở carbon bên cạnh có bậc cao hơn (chứa ít hydrogen hơn) để tạo sản phẩm chính.',
        '  - Ví dụ: $CH_3-CH(Br)-CH_2-CH_3 \\xrightarrow{NaOH/C_2H_5OH, t^\\circ} CH_3-CH=CH-CH_3 \\text{ (SP chính, but-2-ene)} + HBr$.'
      ],
      latexEquations: [
        'R-X + NaOH \\xrightarrow{t^\\circ} R-OH + NaX',
        'C_6H_5CH_2Cl + NaOH \\xrightarrow{t^\\circ} C_6H_5CH_2OH + NaCl',
        'CH_3-CH(Br)-CH_2-CH_3 \\xrightarrow{NaOH/C_2H_5OH, t^\\circ} CH_3-CH=CH-CH_3 \\text{ (SP chính)} + HBr'
      ]
    },
    {
      heading: '4. Ứng dụng & Ảnh hưởng môi trường',
      points: [
        'Ứng dụng: Dung môi hữu cơ, tổng hợp vật liệu polymer (Teflon, PVC), dược phẩm, chất kích thích sinh trưởng thực vật, thuốc diệt cỏ (2,4-D, 2,4,5-T), chất làm lạnh.',
        'Ảnh hưởng môi trường: Các chất CFC ($CF_2Cl_2, CFCl_3,...$) phân huỷ dưới ánh sáng mặt trời tạo gốc Cl* phá huỷ tầng ozone. Hiện nay CFC bị cấm và thay thế bằng HFC, HFO (như R32 - $CH_2F_2$) không chứa chlorine gây hại tầng ozone.'
      ]
    }
  ],
  formulas: [
    {
      name: 'Công thức tổng quát Dẫn xuất Halogen no, đơn chức, mạch hở',
      latex: 'C_n H_{2n+1}X \\quad (n \\ge 1)',
      description: 'Chứa 1 nguyên tử halogen gắn vào gốc alkyl no mạch hở.'
    },
    {
      name: 'Phản ứng thuỷ phân Dẫn xuất Halogen',
      latex: 'R-X + NaOH \\xrightarrow{t^\\circ} R-OH + NaX',
      description: 'Chuyển hoá dẫn xuất halogen thành alcohol.'
    }
  ],
  keyConcepts: [
    {
      term: 'Dẫn xuất halogen',
      definition: 'Hợp chất thu được khi thay thế nguyên tử hydrogen trong phân tử hydrocarbon bằng nguyên tử halogen.'
    },
    {
      term: 'Quy tắc Zaitsev',
      definition: 'Trong phản ứng tách HX khỏi dẫn xuất halogen, nguyên tử halogen bị tách ưu tiên cùng với H ở C bên cạnh có bậc cao hơn (chứa ít H hơn) tạo alkene sản phẩm chính.'
    },
    {
      term: 'CFC (Chlorofluorocarbon)',
      definition: 'Hợp chất chứa C, F, Cl từng được dùng làm chất làm lạnh, là nguyên nhân chính phá huỷ tầng ozone và đã bị cấm theo Nghị định thư Montréal.'
    }
  ],
  examples: [
    {
      title: 'Ví dụ 1: Áp dụng quy tắc Zaitsev',
      content: 'Xác định công thức cấu tạo của sản phẩm chính thu được khi đun nóng 2-chloro-3-methylbutane với $KOH$ trong cồn ($C_2H_5OH$).',
      solution: '2-chloro-3-methylbutane có công thức: $CH_3-CH(CH_3)-CH(Cl)-CH_3$.\nHai vị trí C bên cạnh C mang Cl là C1 ($CH_3$, bậc 1) và C3 ($CH$, bậc 3).\nTheo quy tắc Zaitsev, Cl bị tách cùng với H ở C3 (C bậc cao hơn) $\\Rightarrow$ Sản phẩm chính là $CH_3-C(CH_3)=CH-CH_3$ (2-methylbut-2-ene).'
    }
  ],
  commonMistakes: [
    {
      mistake: 'Nhầm lẫn dung môi phản ứng thuỷ phân ($NaOH, t^\\circ$) với dung môi phản ứng tách ($NaOH/C_2H_5OH, t^\\circ$).',
      correction: 'Môi trường nước ($NaOH + H_2O, t^\\circ$) tạo sản phẩm thế alcohol; Môi trường alcohol ($NaOH/C_2H_5OH, t^\\circ$) tạo sản phẩm tách alkene.',
      why: 'Alcohol kiềm làm tăng tính bazo mạnh của $OH^-$ thúc đẩy phản ứng tách $HX$.'
    }
  ],
  memoryTips: [
    'Mẹo Zaitsev: "Tách H ở C ít H hơn (C bậc cao hơn) tạo alkene sản phẩm chính".',
    'Phân biệt phản ứng: NaOH/nước $\\rightarrow$ Thế OH (Alcohol); NaOH/cồn $\\rightarrow$ Tách HX (Alkene).'
  ],
  glossary: [
    { term: 'Chloroform', meaning: '$CHCl_3$, chất lỏng không màu, từng được dùng làm chất gây mê.' },
    { term: 'R32', meaning: 'Difluoromethane ($CH_2F_2$), chất làm lạnh thế hệ mới không gây hại tầng ozone.' }
  ],
  reviewChecklist: [
    'Gọi tên chính xác theo danh pháp thay thế và tên gốc - chức của các dẫn xuất halogen.',
    'Viết phương trình thuỷ phân dẫn xuất halogen và cách nhận biết ion $X^-$ sinh ra.',
    'Phát biểu và áp dụng đúng quy tắc Zaitsev xác định sản phẩm chính phản ứng tách $HX$.'
  ]
};

export const lesson19Flashcards: Flashcard[] = [
  {
    id: 'fc-19-1',
    lessonId: 'bai-19',
    front: 'Dẫn xuất halogen là gì? Viết CTTQ của dẫn xuất monohalogen no mạch hở.',
    back: 'Hợp chất thu được khi thay thế H trong phân tử hydrocarbon bằng nguyên tử halogen.\nCTTQ: $C_n H_{2n+1}X$ ($n \\ge 1$).',
    category: 'dan-xuat-halogen'
  },
  {
    id: 'fc-19-2',
    lessonId: 'bai-19',
    front: 'Gọi tên thay thế của $CH_3-CH(Cl)-CH_2-CH_3$ và $CH_2=CH-CH_2F$.',
    back: '- $CH_3-CH(Cl)-CH_2-CH_3$: 2-chlorobutane.\n- $CH_2=CH-CH_2F$: 3-fluoroprop-1-ene.',
    category: 'dan-xuat-halogen'
  },
  {
    id: 'fc-19-3',
    lessonId: 'bai-19',
    front: 'Tên thông thường của $CHCl_3, CHBr_3, CHI_3, CCl_4$ lần lượt là gì?',
    back: '- $CHCl_3$: Chloroform.\n- $CHBr_3$: Bromoform.\n- $CHI_3$: Iodoform.\n- $CCl_4$: Carbon tetrachloride.',
    category: 'dan-xuat-halogen'
  },
  {
    id: 'fc-19-4',
    lessonId: 'bai-19',
    front: 'Đặc điểm phân cực của liên kết $C-X$ và thứ tự năng lượng liên kết $C-X$ biến đổi như thế nào?',
    back: 'Liên kết $C-X$ phân cực về phía halogen ($C^{\\delta+} - X^{\\delta-}$). Năng lượng liên kết giảm dần: $C-F > C-Cl > C-Br > C-I$. Khả năng phản ứng tăng dần từ F đến I.',
    category: 'dan-xuat-halogen'
  },
  {
    id: 'fc-19-5',
    lessonId: 'bai-19',
    front: 'So sánh nhiệt độ sôi của dẫn xuất halogen với hydrocarbon tương ứng.',
    back: 'Dẫn xuất halogen có nhiệt độ sôi cao hơn hydrocarbon tương ứng do liên kết $C-X$ phân cực tạo tương tác hút phân tử mạnh hơn.',
    category: 'dan-xuat-halogen'
  },
  {
    id: 'fc-19-6',
    lessonId: 'bai-19',
    front: 'Viết phương trình tổng quát phản ứng thuỷ phân dẫn xuất halogen $R-X$ trong dung dịch kiềm đun nóng.',
    back: '$R-X + NaOH \\xrightarrow{t^\\circ} R-OH + NaX$.',
    category: 'dan-xuat-halogen'
  },
  {
    id: 'fc-19-7',
    lessonId: 'bai-19',
    front: 'Làm thế nào để nhận biết ion $X^-$ sinh ra sau phản ứng thuỷ phân bromoethane ($C_2H_5Br$)?',
    back: 'Gạn lấy lớp nước sau thuỷ phân, acid hoá bằng $HNO_3$ rồi nhỏ dung dịch $AgNO_3$, xuất hiện kết tủa vàng nhạt $AgBr\\downarrow$.',
    category: 'dan-xuat-halogen'
  },
  {
    id: 'fc-19-8',
    lessonId: 'bai-19',
    front: 'Điều kiện xảy ra phản ứng tách hydrogen halide ($HX$) khỏi dẫn xuất halogen là gì?',
    back: 'Đun nóng dẫn xuất halogen với base mạnh ($NaOH, KOH$) trong dung môi alcohol ($C_2H_5OH$).',
    category: 'dan-xuat-halogen'
  },
  {
    id: 'fc-19-9',
    lessonId: 'bai-19',
    front: 'Phát biểu quy tắc Zaitsev trong phản ứng tách $HX$.',
    back: 'Nguyên tử halogen bị tách ưu tiên cùng với H ở C bên cạnh có bậc cao hơn (ít H hơn) để tạo alkene sản phẩm chính.',
    category: 'dan-xuat-halogen'
  },
  {
    id: 'fc-19-10',
    lessonId: 'bai-19',
    front: 'Sản phẩm chính khi tách $HBr$ khỏi 2-bromobutane ($CH_3-CH(Br)-CH_2-CH_3$) là chất gì?',
    back: 'But-2-ene ($CH_3-CH=CH-CH_3$).',
    category: 'dan-xuat-halogen'
  },
  {
    id: 'fc-19-11',
    lessonId: 'bai-19',
    front: 'Tác hại đối với môi trường của chất CFC là gì?',
    back: 'CFC bị phân huỷ bởi tia UV tạo gốc tự do Cl* phá huỷ tầng ozone bảo vệ Trái Đất.',
    category: 'dan-xuat-halogen'
  },
  {
    id: 'fc-19-12',
    lessonId: 'bai-19',
    front: 'Chất làm lạnh R32 thay thế CFC có công thức phân tử là gì?',
    back: 'Difluoromethane ($CH_2F_2$), thuộc loại HFC không gây suy giảm tầng ozone.',
    category: 'dan-xuat-halogen'
  },
  {
    id: 'fc-19-13',
    lessonId: 'bai-19',
    front: 'Teflon là vật liệu polymer chịu nhiệt, chống dính được tổng hợp từ chất nào?',
    back: 'Tetrafluoroethene ($CF_2=CF_2$).',
    category: 'dan-xuat-halogen'
  },
  {
    id: 'fc-19-14',
    lessonId: 'bai-19',
    front: 'Tên gốc - chức của $C_6H_5-CH_2-Cl$ và $CH_2=CH-Cl$ là gì?',
    back: '- $C_6H_5-CH_2-Cl$: Benzyl chloride.\n- $CH_2=CH-Cl$: Vinyl chloride.',
    category: 'dan-xuat-halogen'
  },
  {
    id: 'fc-19-15',
    lessonId: 'bai-19',
    front: '2,4-D và 2,4,5-T là dẫn xuất halogen có ứng dụng gì trong nông nghiệp?',
    back: 'Thuốc diệt cỏ và chất kích thích sinh trưởng thực vật.',
    category: 'dan-xuat-halogen'
  }
];

export const lesson19Quizzes: QuizQuestion[] = [
  {
    id: 'q-19-1',
    lessonId: 'bai-19',
    question: 'Công thức tổng quát của dẫn xuất monohalogen no, mạch hở là gì?',
    options: [
      { id: 'A', text: '$C_n H_{2n-1}X$ ($n \\ge 2$)' },
      { id: 'B', text: '$C_n H_{2n+1}X$ ($n \\ge 1$)' },
      { id: 'C', text: '$C_n H_{2n}X_2$ ($n \\ge 1$)' },
      { id: 'D', text: '$C_n H_{2n-5}X$ ($n \\ge 6$)' }
    ],
    correctAnswer: 'B',
    explanation: 'Dẫn xuất monohalogen no mạch hở chứa 1 gốc alkyl no ($C_n H_{2n+1}$) gắn với 1 nguyên tử halogen X.',
    difficulty: 'NhanBiet',
    source: 'SGK Hoá học 11 - Bài 19'
  },
  {
    id: 'q-19-2',
    lessonId: 'bai-19',
    question: 'Tên gọi theo danh pháp thay thế của chất $CH_3-CH(Cl)-CH_2-CH_3$ là gì?',
    options: [
      { id: 'A', text: '1-chlorobutane' },
      { id: 'B', text: '2-chlorobutane' },
      { id: 'C', text: 'sec-butyl chloride' },
      { id: 'D', text: '3-chlorobutane' }
    ],
    correctAnswer: 'B',
    explanation: 'Đánh số C từ trái sang để nhóm thế $-Cl$ ở vị trí C2 $\\Rightarrow$ 2-chlorobutane.',
    difficulty: 'NhanBiet',
    source: 'SGK Hoá học 11 - Bài 19'
  },
  {
    id: 'q-19-3',
    lessonId: 'bai-19',
    question: 'Hợp chất $CHCl_3$ có tên thông thường là gì?',
    options: [
      { id: 'A', text: 'Bromoform' },
      { id: 'B', text: 'Iodoform' },
      { id: 'C', text: 'Chloroform' },
      { id: 'D', text: 'Carbon tetrachloride' }
    ],
    correctAnswer: 'C',
    explanation: 'Trichloromethane ($CHCl_3$) có tên thông thường là chloroform.',
    difficulty: 'NhanBiet',
    source: 'SGK Hoá học 11 - Bài 19'
  },
  {
    id: 'q-19-4',
    lessonId: 'bai-19',
    question: 'Khi đun nóng $CH_3CH_2Cl$ với dung dịch $NaOH$, thu được sản phẩm hữu cơ thuộc loại hợp chất nào?',
    options: [
      { id: 'A', text: 'Alkane' },
      { id: 'B', text: 'Alkene' },
      { id: 'C', text: 'Alcohol' },
      { id: 'D', text: 'Aldehyde' }
    ],
    correctAnswer: 'C',
    explanation: '$CH_3CH_2Cl + NaOH \\xrightarrow{t^\\circ} CH_3CH_2OH \\text{ (ethanol, thuộc loại alcohol)} + NaCl$.',
    difficulty: 'ThongHieu',
    source: 'SGK Hoá học 11 - Bài 19'
  },
  {
    id: 'q-19-5',
    lessonId: 'bai-19',
    question: 'Theo quy tắc Zaitsev, sản phẩm chính của phản ứng tách $HBr$ khỏi 2-bromobutane ($CH_3-CH(Br)-CH_2-CH_3$) bằng $KOH/C_2H_5OH, t^\\circ$ là chất nào?',
    options: [
      { id: 'A', text: 'But-1-ene' },
      { id: 'B', text: 'But-2-ene' },
      { id: 'C', text: 'Butane' },
      { id: 'D', text: 'Methylpropene' }
    ],
    correctAnswer: 'B',
    explanation: 'Br ưu tiên tách cùng H ở C3 (C bậc 2, ít H hơn C1 bậc 1) tạo but-2-ene làm sản phẩm chính.',
    difficulty: 'ThongHieu',
    source: 'SGK Hoá học 11 - Bài 19'
  },
  {
    id: 'q-19-6',
    lessonId: 'bai-19',
    question: 'Dung dịch thuốc thử nào dùng để xác định ion halide $X^-$ gạn ra từ hỗn hợp thuỷ phân dẫn xuất halogen?',
    options: [
      { id: 'A', text: 'Dung dịch $BaCl_2$' },
      { id: 'B', text: 'Dung dịch $AgNO_3$' },
      { id: 'C', text: 'Dung dịch $CuSO_4$' },
      { id: 'D', text: 'Dung dịch $KMnO_4$' }
    ],
    correctAnswer: 'B',
    explanation: 'Cho dung dịch $AgNO_3$ vào môi trường acid $HNO_3$ để tạo kết tủa $AgX\\downarrow$ đặc trưng.',
    difficulty: 'NhanBiet',
    source: 'SBT Hoá học 11 - Bài 19'
  },
  {
    id: 'q-19-7',
    lessonId: 'bai-19',
    question: 'Nguyên nhân chính gây ra hiện tượng suy giảm tầng ozone của các chất CFC là do tác dụng của nguyên tố nào khi bị phân huỷ bởi tia UV?',
    options: [
      { id: 'A', text: 'Gốc Fluorine (F*)' },
      { id: 'B', text: 'Gốc Carbon (C*)' },
      { id: 'C', text: 'Gốc Chlorine (Cl*)' },
      { id: 'D', text: 'Gốc Hydrogen (H*)' }
    ],
    correctAnswer: 'C',
    explanation: 'Tia UV làm đứt liên kết C-Cl tạo gốc tự do Cl*, gốc Cl* phản ứng xúc tác phân huỷ hàng nghìn phân tử ozone $O_3$.',
    difficulty: 'ThongHieu',
    source: 'SGK Hoá học 11 - Bài 19'
  },
  {
    id: 'q-19-8',
    lessonId: 'bai-19',
    question: 'Số đồng phân cấu tạo ứng với công thức phân tử $C_3H_7Cl$ là bao nhiêu?',
    options: [
      { id: 'A', text: '1' },
      { id: 'B', text: '2' },
      { id: 'C', text: '3' },
      { id: 'D', text: '4' }
    ],
    correctAnswer: 'B',
    explanation: '$C_3H_7Cl$ có 2 đồng phân: $CH_3-CH_2-CH_2Cl$ (1-chloropropane) và $CH_3-CH(Cl)-CH_3$ (2-chloropropane).',
    difficulty: 'ThongHieu',
    source: 'SBT Hoá học 11 - Bài 19'
  },
  {
    id: 'q-19-9',
    lessonId: 'bai-19',
    question: 'Đun nóng 2-chloropropane ($CH_3-CHCl-CH_3$) với $NaOH$ trong dung môi ethanol thu được chất khí $Y$. Dẫn $Y$ qua dung dịch $Br_2$, thấy dung dịch bị mất màu. Khí $Y$ là chất gì?',
    options: [
      { id: 'A', text: 'Propane' },
      { id: 'B', text: 'Propene' },
      { id: 'C', text: 'Propyne' },
      { id: 'D', text: 'Ethene' }
    ],
    correctAnswer: 'B',
    explanation: 'Phản ứng tách $HCl$ khỏi 2-chloropropane thu được propene ($CH_3-CH=CH_2$), khí này làm mất màu dung dịch nước $Br_2$.',
    difficulty: 'ThongHieu',
    source: 'SBT Hoá học 11 - Bài 19'
  },
  {
    id: 'q-19-10',
    lessonId: 'bai-19',
    question: 'Chất nào sau đây thuộc loại hợp chất HFC dùng làm chất làm lạnh an toàn cho môi trường?',
    options: [
      { id: 'A', text: '$CF_2Cl_2$' },
      { id: 'B', text: '$CFCl_3$' },
      { id: 'C', text: '$CH_2F_2$ (R32)' },
      { id: 'D', text: '$CCl_4$' }
    ],
    correctAnswer: 'C',
    explanation: '$CH_2F_2$ (difluoromethane) không chứa chlorine nên không phá huỷ tầng ozone, thuộc họ HFC.',
    difficulty: 'NhanBiet',
    source: 'SGK Hoá học 11 - Bài 19'
  }
];
