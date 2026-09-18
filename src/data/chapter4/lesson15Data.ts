import { TheorySectionData, Flashcard, QuizQuestion } from '../../types';

export const lesson15Theory: TheorySectionData = {
  id: 'bai-15',
  chapterId: 'chuong-4',
  title: 'Bài 15: Alkane',
  objectives: [
    'Nêu được khái niệm về alkane, nguồn alkane trong tự nhiên và công thức chung của alkane.',
    'Trình bày được quy tắc gọi tên theo danh pháp thay thế cho các alkane mạch không nhánh (C1 - C10) và mạch nhánh (không quá 5C).',
    'Giải thích đặc điểm tính chất vật lí, đặc điểm liên kết hoá học (mô hình $CH_4$, $C_2H_6$) và phản ứng hoá học của alkane.',
    'Nắm vững phản ứng thế halogen, cracking, reforming, phản ứng cháy và ứng dụng thực tiễn của alkane.'
  ],
  summary: 'Alkane là các hydrocarbon no, mạch hở có công thức chung $C_n H_{2n+2}$ ($n \\ge 1$). Phân tử chỉ chứa các liên kết đơn $\\sigma$ ($C-C$ và $C-H$) bền vững và kém phân cực, khiến alkane tương đối trơ ở nhiệt độ thường. Phản ứng đặc trưng của alkane bao gồm phản ứng thế halogen (chiếu sáng/đun nóng), phản ứng cracking bẻ gãy mạch, phản ứng reforming biến đổi cấu trúc mạch, và phản ứng cháy toả nhiều nhiệt.',
  coreKnowledge: [
    {
      heading: '1. Khái niệm, công thức chung và danh pháp alkane',
      points: [
        'Khái niệm: Alkane là các hydrocarbon no mạch hở, trong phân tử chỉ chứa các liên kết đơn $\\sigma$ ($C-C$ và $C-H$).',
        'Công thức chung: $C_n H_{2n+2}$ ($n \\ge 1, n \\in \\mathbb{N}$). Ví dụ: $CH_4, C_2H_6, C_3H_8, C_4H_{10}, C_5H_{12},...$',
        'Danh pháp thay thế alkane không phân nhánh: Phần nền (chỉ số C) + "ane". Ví dụ: methane ($CH_4$), ethane ($C_2H_6$), propane ($C_3H_8$), butane ($C_4H_{10}$), pentane ($C_5H_{12}$), hexane ($C_6H_{14}$), heptane ($C_7H_{16}$), octane ($C_8H_{18}$), nonane ($C_9H_{20}$), decane ($C_{10}H_{22}$).',
        'Gốc alkyl ($C_n H_{2n+1}-$): Tên phần nền + "yl". Ví dụ: methyl ($-CH_3$), ethyl ($-C_2H_5$), propyl ($-C_3H_7$), butyl ($-C_4H_9$).',
        'Quy tắc gọi tên alkane mạch nhánh: Số chỉ vị trí nhánh - tên nhánh + tên alkane mạch chính. Đánh số C mạch chính từ phía gần nhánh hơn sao cho tổng số chỉ vị trí là nhỏ nhất. Nếu có nhiều nhánh giống nhau, dùng tiền tố di- (2), tri- (3), tetra- (4); xếp tên các nhánh theo thứ tự bảng chữ cái. Ví dụ: 2-methylbutane, 2,2-dimethylpropane (neopentane).',
        'Chỉ số octane của xăng: Đại lượng đặc trưng cho khả năng chống kích nổ của nhiên liệu. Isooctane (2,2,4-trimethylpentane) quy ước chỉ số 100, heptane không nhánh quy ước chỉ số 0.'
      ]
    },
    {
      heading: '2. Cấu tạo phân tử & Tính chất vật lí',
      points: [
        'Đặc điểm cấu tạo: Góc liên kết $H-C-H$ và $C-C-H$ trong phân tử alkane xấp xỉ $109,5^\\circ$. Phân tử $CH_4$ có dạng tứ diện đều với 4 liên kết $\\sigma$ $C-H$ giống nhau.',
        'Trạng thái: Ở điều kiện thường, các alkane từ C1 đến C4 và neopentane ở trạng thái khí; từ C5 đến C17 (trừ neopentane) ở trạng thái lỏng; từ C18 trở lên ở trạng thái rắn (sáp paraffin).',
        'Nhiệt độ sôi và khối lượng riêng: Khi phân tử khối tăng, nhiệt độ sôi và khối lượng riêng của alkane tăng dần. Phân tử có nhánh có diện tích tiếp xúc bề mặt nhỏ hơn nên nhiệt độ sôi thấp hơn đồng phân mạch thẳng.',
        'Độ tan: Alkane không tan trong nước (nhẹ hơn nước), tan tốt trong các dung môi hữu cơ không phân cực.'
      ]
    },
    {
      heading: '3. Tính chất hoá học',
      points: [
        'Phản ứng thế halogen (Chlorine hoá, Bromine hoá): Do liên kết $\\sigma$ bền vững, alkane phản ứng thế H bằng halogen khi đun nóng hoặc chiếu sáng ($h\\nu$). Thế H ưu tiên xảy ra ở nguyên tử carbon bậc cao hơn (carbon liên kết với nhiều C khác hơn).',
        'Phản ứng cracking: Bẻ gãy mạch carbon $C-C$ ở nhiệt độ cao và có xúc tác, biến alkane mạch dài thành hỗn hợp alkane và alkene mạch ngắn hơn.',
        'Phản ứng reforming: Biến đổi cấu trúc mạch carbon từ không nhánh thành mạch nhánh hoặc vòng/arene không làm thay đổi số nguyên tử C, giúp nâng cao chỉ số octane của xăng.',
        'Phản ứng oxi hoá: Phản ứng cháy hoàn toàn toả nhiều nhiệt: $C_n H_{2n+2} + \\frac{3n+1}{2} O_2 \\xrightarrow{t^\\circ} n CO_2 + (n+1) H_2O$. Luôn có $n_{H_2O} > n_{CO_2}$. Phản ứng oxi hoá không hoàn toàn với $O_2$ (xúc tác) dùng sản xuất carboxylic acid.',
        'Phản ứng với $KMnO_4$: Alkane không phản ứng với dung dịch $KMnO_4$ ở điều kiện thường.'
      ],
      latexEquations: [
        'CH_4 + Cl_2 \\xrightarrow{\\text{ánh sáng}} CH_3Cl + HCl',
        'CH_3-CH_2-CH_3 + Cl_2 \\xrightarrow{\\text{ánh sáng}} CH_3-CHCl-CH_3 (55\\%) + CH_3-CH_2-CH_2Cl (45\\%)',
        'C_9H_{20} \\xrightarrow{\\text{cracking}} C_2H_4 + C_7H_{16}',
        'C_n H_{2n+2} + \\frac{3n+1}{2} O_2 \\xrightarrow{t^\\circ} n CO_2 + (n+1) H_2O'
      ]
    },
    {
      heading: '4. Ứng dụng & Điều chế',
      points: [
        'Ứng dụng: Làm nhiên liệu đun nấu, chạy động cơ (LPG, LNG, xăng, diesel, nhiên liệu phản lực); nguyên liệu tổng hợp phân bón urea, hydrogen, ammonia ($CH_4$); vaseline, sáp, nến, chất bôi trơn.',
        'Điều chế: Trong công nghiệp, alkane được khai thác từ khí thiên nhiên, khí mỏ dầu và quá trình chưng cất cất phân đoạn dầu mỏ.'
      ]
    }
  ],
  formulas: [
    {
      name: 'Công thức chung Alkane',
      latex: 'C_n H_{2n+2} \\quad (n \\ge 1)',
      description: 'Công thức tổng quát của dãy đồng đẳng alkane mạch hở.'
    },
    {
      name: 'Phản ứng cháy Alkane',
      latex: 'C_n H_{2n+2} + \\frac{3n+1}{2} O_2 \\xrightarrow{t^\\circ} n CO_2 + (n+1) H_2O',
      description: 'Số mol nước luôn lớn hơn số mol $CO_2$ ($n_{H_2O} > n_{CO_2}$). Số mol alkane $n_{\\text{alkane}} = n_{H_2O} - n_{CO_2}$.'
    }
  ],
  keyConcepts: [
    {
      term: 'Alkane',
      definition: 'Hydrocarbon no mạch hở chỉ chứa các liên kết đơn C-C và C-H trong phân tử, có công thức chung CnH2n+2 (n ≥ 1).'
    },
    {
      term: 'Phản ứng thế Halogen',
      definition: 'Phản ứng trong đó nguyên tử hydrogen của alkane bị thay thế bởi nguyên tử halogen (Cl, Br) khi có ánh sáng hoặc nhiệt độ.'
    },
    {
      term: 'Cracking',
      definition: 'Quá trình phân cắt liên kết C-C của alkane mạch dài ở nhiệt độ cao và xúc tác để tạo thành hỗn hợp alkane và alkene mạch ngắn hơn.'
    },
    {
      term: 'Reforming',
      definition: 'Quá trình tái cấu trúc mạch carbon của alkane (tạo nhánh hoặc tạo vòng/arene) không làm thay đổi số nguyên tử C nhằm nâng cao chỉ số octane.'
    }
  ],
  examples: [
    {
      title: 'Ví dụ 1: Xác định CTPT của alkane qua phản ứng cháy',
      content: 'Đốt cháy hoàn toàn 0,1 mol một alkane X thu được 0,3 mol $CO_2$ và 0,4 mol $H_2O$. Xác định công thức phân tử và tên thay thế của X.',
      solution: 'Số nguyên tử C trong phân tử alkane $n = \\frac{n_{CO_2}}{n_X} = \\frac{0,3}{0,1} = 3$.\nVậy CTPT của X là $C_3H_8$. Tên thay thế là propane.'
    },
    {
      title: 'Ví dụ 2: Sản phẩm thế monochlorine hoá propane',
      content: 'Cho propane tác dụng với $Cl_2$ theo tỉ lệ mol 1 : 1 có chiếu sáng. Viết công thức cấu tạo và gọi tên các sản phẩm monochlorine thu được.',
      solution: 'Propane có công thức $CH_3-CH_2-CH_3$.\n- Thế H ở C bậc 1 (C1 hoặc C3): $CH_3-CH_2-CH_2Cl$ (1-chloropropane, chiếm 45%).\n- Thế H ở C bậc 2 (C2): $CH_3-CHCl-CH_3$ (2-chloropropane, sản phẩm chính chiếm 55%).'
    }
  ],
  commonMistakes: [
    {
      mistake: 'Chọn sai mạch chính khi gọi tên alkane có nhánh.',
      correction: 'Phải chọn mạch carbon dài nhất chứa nhiều nhánh nhất làm mạch chính, không nhất thiết là mạch nằm ngang.',
      why: 'Mạch nằm ngang có thể ngắn hơn mạch gấp khúc chứa nhiều nguyên tử carbon hơn.'
    },
    {
      mistake: 'Cho rằng alkane phản ứng thế bromine ở nhiệt độ thường không cần đun nóng.',
      correction: 'Phản ứng thế bromine vào alkane bắt buộc phải có chiếu sáng hoặc đun nóng.',
      why: 'Liên kết C-H và Br-Br cần năng lượng hoạt hoá (ánh sáng hν hoặc nhiệt độ) để khơi mào phản ứng thế.'
    }
  ],
  memoryTips: [
    'Mẹo nhớ tên 10 alkane không nhánh đầu tiên: "Mẹ (Methane) Em (Ethane) Phải (Propane) Bún (Butane) Phở (Pentane) Hóa (Hexane) Học (Heptane) Ôi (Octane) Nóng (Nonane) Quá (Decane)".',
    'Mẹo thế halogen: "Ưu tiên thế H ở C bậc cao" (C bậc 2, bậc 3 tạo sản phẩm chính).'
  ],
  glossary: [
    { term: 'Isooctane', meaning: '2,2,4-trimethylpentane, chất chuẩn có khả năng chống kích nổ quy ước là 100.' },
    { term: 'LPG', meaning: 'Liquefied Petroleum Gas - Khí dầu mỏ hoá lỏng chứa chủ yếu propane và butane.' },
    { term: 'LNG', meaning: 'Liquefied Natural Gas - Khí thiên nhiên hoá lỏng chứa thành phần chính là methane.' }
  ],
  reviewChecklist: [
    'Thuộc lòng tên gọi thay thế 10 alkane không phân nhánh đầu tiên.',
    'Nắm vững quy tắc chọn mạch chính và đánh số khi gọi tên alkane mạch nhánh.',
    'Viết đúng phương trình phản ứng thế $Cl_2, Br_2$ và xác định sản phẩm chính.',
    'Phân biệt khái niệm cracking và reforming trong công nghiệp lọc dầu.'
  ]
};

export const lesson15Flashcards: Flashcard[] = [
  {
    id: 'fc-15-1',
    lessonId: 'bai-15',
    front: 'Alkane là gì? Công thức tổng quát của alkane mạch hở là gì?',
    back: 'Alkane là các hydrocarbon no mạch hở, trong phân tử chỉ chứa các liên kết đơn $\\sigma$ ($C-C$ và $C-H$).\nCTTQ: $C_n H_{2n+2}$ ($n \\ge 1$).',
    category: 'alkane'
  },
  {
    id: 'fc-15-2',
    lessonId: 'bai-15',
    front: 'Đặc điểm liên kết hoá học và hình học phân tử methane ($CH_4$) là gì?',
    back: 'Phân tử $CH_4$ chứa 4 liên kết $\\sigma$ $C-H$ đơn bền vững, không phân cực. Phân tử có dạng tứ diện đều với góc liên kết $H-C-H$ xấp xỉ $109,5^\\circ$.',
    category: 'alkane'
  },
  {
    id: 'fc-15-3',
    lessonId: 'bai-15',
    front: 'Tên thay thế của 10 alkane không nhánh từ C1 đến C10 là gì?',
    back: '1C: methane, 2C: ethane, 3C: propane, 4C: butane, 5C: pentane, 6C: hexane, 7C: heptane, 8C: octane, 9C: nonane, 10C: decane.',
    category: 'alkane'
  },
  {
    id: 'fc-15-4',
    lessonId: 'bai-15',
    front: 'Nêu quy tắc chọn mạch chính và đánh số khi gọi tên alkane mạch nhánh.',
    back: '1. Chọn mạch carbon dài nhất và có nhiều nhánh nhất làm mạch chính.\n2. Đánh số nguyên tử C mạch chính từ phía gần nhánh hơn.',
    category: 'alkane'
  },
  {
    id: 'fc-15-5',
    lessonId: 'bai-15',
    front: 'Ở điều kiện thường, những alkane nào ở trạng thái khí?',
    back: 'Các alkane từ C1 đến C4 ($CH_4, C_2H_6, C_3H_8, C_4H_{10}$) và neopentane ($2,2-dimethylpropane$) ở trạng thái khí.',
    category: 'alkane'
  },
  {
    id: 'fc-15-6',
    lessonId: 'bai-15',
    front: 'Tương tác van der Waals và nhiệt độ sôi biến đổi thế nào trong dãy alkane?',
    back: 'Khi phân tử khối M tăng, tương tác van der Waals tăng làm nhiệt độ sôi và nhiệt độ nóng chảy tăng. Alkane mạch nhánh có nhiệt độ sôi thấp hơn đồng phân mạch thẳng.',
    category: 'alkane'
  },
  {
    id: 'fc-15-7',
    lessonId: 'bai-15',
    front: 'Quy tắc thế halogen vào alkane xảy ra như thế nào?',
    back: 'Phản ứng thế halogen ($Cl_2, Br_2$) xảy ra khi chiếu sáng hoặc đun nóng. Nguyên tử halogen ưu tiên thế vào nguyên tử hydrogen ở carbon bậc cao hơn.',
    category: 'alkane'
  },
  {
    id: 'fc-15-8',
    lessonId: 'bai-15',
    front: 'Sản phẩm chính khi monochlorine hoá propane ($CH_3-CH_2-CH_3$) là gì?',
    back: '$CH_3-CHCl-CH_3$ (2-chloropropane, chiếm 55%), do H bị thế ở C bậc 2.',
    category: 'alkane'
  },
  {
    id: 'fc-15-9',
    lessonId: 'bai-15',
    front: 'Phản ứng cracking alkane là gì?',
    back: 'Quá trình bẻ gãy liên kết $C-C$ của alkane mạch dài ở nhiệt độ cao có xúc tác để tạo ra hỗn hợp alkane và alkene mạch ngắn hơn.',
    category: 'alkane'
  },
  {
    id: 'fc-15-10',
    lessonId: 'bai-15',
    front: 'Phản ứng reforming alkane nhằm mục đích gì?',
    back: 'Biến đổi cấu trúc mạch carbon (tạo nhánh, tạo vòng hoặc arene) không làm thay đổi số C để tăng chỉ số octane của xăng.',
    category: 'alkane'
  },
  {
    id: 'fc-15-11',
    lessonId: 'bai-15',
    front: 'Đặc điểm của phản ứng đốt cháy hoàn toàn alkane là gì?',
    back: '$C_n H_{2n+2} + \\frac{3n+1}{2} O_2 \\xrightarrow{t^\\circ} n CO_2 + (n+1) H_2O$.\nSố mol $H_2O > n_{CO_2}$ và $n_{\\text{alkane}} = n_{H_2O} - n_{CO_2}$. Phản ứng toả nhiệt mạnh.',
    category: 'alkane'
  },
  {
    id: 'fc-15-12',
    lessonId: 'bai-15',
    front: 'Alkane có làm mất màu dung dịch $KMnO_4$ ở điều kiện thường không?',
    back: 'Không. Alkane không phản ứng với dung dịch $KMnO_4$ ở điều kiện thường hay khi đun nóng.',
    category: 'alkane'
  },
  {
    id: 'fc-15-13',
    lessonId: 'bai-15',
    front: 'Chỉ số octane đặc trưng cho tính chất gì của xăng?',
    back: 'Đặc trưng cho khả năng chống kích nổ của nhiên liệu. Isooctane có chỉ số 100, heptane không nhánh có chỉ số 0.',
    category: 'alkane'
  },
  {
    id: 'fc-15-14',
    lessonId: 'bai-15',
    front: 'LPG và LNG chứa thành phần chính là những alkane nào?',
    back: '- LPG (Khí dầu mỏ hoá lỏng): Propane ($C_3H_8$) và butane ($C_4H_{10}$).\n- LNG (Khí thiên nhiên hoá lỏng): Methane ($CH_4$).',
    category: 'alkane'
  },
  {
    id: 'fc-15-15',
    lessonId: 'bai-15',
    front: 'Sáp paraffin và vaseline gồm các alkane có số nguyên tử C trong khoảng nào?',
    back: '- Vaseline: Các alkane từ $C_{11}$ đến $C_{20}$.\n- Sáp paraffin: Các alkane từ $C_{20}$ đến $C_{35}$.',
    category: 'alkane'
  }
];

export const lesson15Quizzes: QuizQuestion[] = [
  {
    id: 'q-15-1',
    lessonId: 'bai-15',
    question: 'Công thức tổng quát của alkane mạch hở là gì?',
    options: [
      { id: 'A', text: '$C_n H_{2n}$ ($n \\ge 2$)' },
      { id: 'B', text: '$C_n H_{2n+2}$ ($n \\ge 1$)' },
      { id: 'C', text: '$C_n H_{2n-2}$ ($n \\ge 2$)' },
      { id: 'D', text: '$C_n H_{2n-6}$ ($n \\ge 6$)' }
    ],
    correctAnswer: 'B',
    explanation: 'Alkane là các hydrocarbon no mạch hở có CTTQ là $C_n H_{2n+2}$ với $n \\ge 1$.',
    difficulty: 'NhanBiet',
    source: 'SGK Hoá học 11 - Bài 15'
  },
  {
    id: 'q-15-2',
    lessonId: 'bai-15',
    question: 'Tên thay thế của alkane có công thức phân tử $C_4H_{10}$ mạch không phân nhánh là gì?',
    options: [
      { id: 'A', text: 'Methane' },
      { id: 'B', text: 'Propane' },
      { id: 'C', text: 'Butane' },
      { id: 'D', text: 'Pentane' },
    ],
    correctAnswer: 'C',
    explanation: 'Alkane không nhánh $C_4H_{10}$ ($CH_3-CH_2-CH_2-CH_3$) có tên thay thế là butane.',
    difficulty: 'NhanBiet',
    source: 'SBT Hoá học 11 - Bài 15'
  },
  {
    id: 'q-15-3',
    lessonId: 'bai-15',
    question: 'Tên thay thế của hợp chất có công thức cấu tạo $(CH_3)_2CH-CH_2-CH_3$ là gì?',
    options: [
      { id: 'A', text: '2-methylbutane' },
      { id: 'B', text: '3-methylbutane' },
      { id: 'C', text: 'Pentane' },
      { id: 'D', text: '2,2-dimethylpropane' }
    ],
    correctAnswer: 'A',
    explanation: 'Mạch chính dài nhất chứa 4C (butane), đánh số từ trái sang phải để nhánh $-CH_3$ ở vị trí C2 $\\Rightarrow$ Tên gọi là 2-methylbutane.',
    difficulty: 'ThongHieu',
    source: 'SGK Hoá học 11 - Bài 15'
  },
  {
    id: 'q-15-4',
    lessonId: 'bai-15',
    question: 'Ở điều kiện thường, alkane nào sau đây ở trạng thái khí?',
    options: [
      { id: 'A', text: 'Hexane' },
      { id: 'B', text: 'Pentane' },
      { id: 'C', text: 'Isobutane ($2-methylpropane$)' },
      { id: 'D', text: 'Octane' }
    ],
    correctAnswer: 'C',
    explanation: 'Các alkane từ C1 đến C4 (bao gồm isobutane $C_4H_{10}$) ở trạng thái khí ở điều kiện thường.',
    difficulty: 'NhanBiet',
    source: 'SBT Hoá học 11 - Bài 15'
  },
  {
    id: 'q-15-5',
    lessonId: 'bai-15',
    question: 'Sản phẩm chính thu được khi cho propane tác dụng với $Cl_2$ (tỉ lệ mol 1 : 1) có chiếu sáng là gì?',
    options: [
      { id: 'A', text: '1-chloropropane' },
      { id: 'B', text: '2-chloropropane' },
      { id: 'C', text: '1,2-dichloropropane' },
      { id: 'D', text: '2,2-dichloropropane' }
    ],
    correctAnswer: 'B',
    explanation: 'Phản ứng thế ưu tiên xảy ra ở C bậc 2 (C trung tâm của propane) tạo sản phẩm chính là 2-chloropropane ($CH_3-CHCl-CH_3$).',
    difficulty: 'ThongHieu',
    source: 'SGK Hoá học 11 - Bài 15'
  },
  {
    id: 'q-15-6',
    lessonId: 'bai-15',
    question: 'Phản ứng bẻ gãy mạch carbon $C-C$ của alkane ở nhiệt độ cao và xúc tác được gọi là gì?',
    options: [
      { id: 'A', text: 'Phản ứng thế' },
      { id: 'B', text: 'Phản ứng reforming' },
      { id: 'C', text: 'Phản ứng cracking' },
      { id: 'D', text: 'Phản ứng trùng hợp' }
    ],
    correctAnswer: 'C',
    explanation: 'Cracking là quá trình phân cắt liên kết C-C của alkane mạch dài tạo thành hỗn hợp alkane và alkene mạch ngắn hơn.',
    difficulty: 'NhanBiet',
    source: 'SGK Hoá học 11 - Bài 15'
  },
  {
    id: 'q-15-7',
    lessonId: 'bai-15',
    question: 'Đốt cháy hoàn toàn 1 mol alkane X thu được 4 mol $CO_2$. Công thức phân tử của X là gì?',
    options: [
      { id: 'A', text: '$CH_4$' },
      { id: 'B', text: '$C_2H_6$' },
      { id: 'C', text: '$C_3H_8$' },
      { id: 'D', text: '$C_4H_{10}$' }
    ],
    correctAnswer: 'D',
    explanation: 'Số nguyên tử C trong X $= \\frac{n_{CO_2}}{n_X} = \\frac{4}{1} = 4 \\Rightarrow$ CTPT là $C_4H_{10}$.',
    difficulty: 'ThongHieu',
    source: 'SBT Hoá học 11 - Bài 15'
  },
  {
    id: 'q-15-8',
    lessonId: 'bai-15',
    question: 'Chất nào sau đây được quy ước có chỉ số octane bằng 100?',
    options: [
      { id: 'A', text: 'Heptane' },
      { id: 'B', text: 'Methane' },
      { id: 'C', text: '2,2,4-trimethylpentane' },
      { id: 'D', text: 'Hexane' }
    ],
    correctAnswer: 'C',
    explanation: '2,2,4-trimethylpentane (isooctane) có khả năng chống kích nổ cực tốt, quy ước chỉ số octane bằng 100.',
    difficulty: 'NhanBiet',
    source: 'SGK Hoá học 11 - Bài 15'
  },
  {
    id: 'q-15-9',
    lessonId: 'bai-15',
    question: 'Khí gas đun nấu LPG dùng trong hộ gia đình chứa thành phần chính là các alkane nào?',
    options: [
      { id: 'A', text: '$CH_4$ và $C_2H_6$' },
      { id: 'B', text: '$C_3H_8$ và $C_4H_{10}$' },
      { id: 'C', text: '$C_5H_{12}$ và $C_6H_{14}$' },
      { id: 'D', text: '$C_2H_4$ và $C_2H_2$' }
    ],
    correctAnswer: 'B',
    explanation: 'LPG (Liquefied Petroleum Gas) là khí dầu mỏ hoá lỏng chứa thành phần chính là propane ($C_3H_8$) và butane ($C_4H_{10}$).',
    difficulty: 'NhanBiet',
    source: 'SGK Hoá học 11 - Bài 15'
  },
  {
    id: 'q-15-10',
    lessonId: 'bai-15',
    question: 'Số đồng phân cấu tạo alkane ứng với công thức phân tử $C_5H_{12}$ là bao nhiêu?',
    options: [
      { id: 'A', text: '2' },
      { id: 'B', text: '3' },
      { id: 'C', text: '4' },
      { id: 'D', text: '5' }
    ],
    correctAnswer: 'B',
    explanation: '$C_5H_{12}$ có 3 đồng phân alkane: pentane, 2-methylbutane (isopentane) và 2,2-dimethylpropane (neopentane).',
    difficulty: 'ThongHieu',
    source: 'SBT Hoá học 11 - Bài 15'
  }
];
