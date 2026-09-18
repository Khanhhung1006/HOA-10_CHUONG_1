import { TheorySectionData, Flashcard, QuizQuestion } from '../../types';

export const lesson18Theory: TheorySectionData = {
  id: 'bai-18',
  chapterId: 'chuong-4',
  title: 'Bài 18: Ôn tập & Tổng kết Chương 4 (Hydrocarbon)',
  objectives: [
    'Hệ thống hoá toàn bộ kiến thức về cấu tạo, danh pháp, tính chất vật lí và tính chất hoá học của Alkane, Alkene, Alkyne và Arene.',
    'So sánh sự giống và khác nhau giữa phản ứng thế của Alkane, Arene với phản ứng cộng của Alkene, Alkyne.',
    'Nắm vững phản ứng thế kim loại của alk-1-yne với $AgNO_3/NH_3$, phản ứng oxi hoá bằng $KMnO_4$ của Alkene/Alkyne/Toluene.',
    'Hoàn thành bộ câu hỏi trắc nghiệm kiểm tra tổng hợp 25 câu chuẩn SGK/SBT Hoá học 11.'
  ],
  summary: 'Chương 4 hệ thống hoá toàn bộ các họ hydrocarbon chính: Alkane (hydrocarbon no), Alkene & Alkyne (hydrocarbon không no), Arene (hydrocarbon thơm). Mối liên hệ giữa cấu tạo và tính chất: liên kết đơn $\\sigma$ trơ hoá học (thế halogen, cracking, reforming), liên kết bội $\\pi$ kém bền dễ phản ứng cộng ($H_2, Br_2, HX, H_2O$), trùng hợp và oxi hoá ($KMnO_4$). Nhân thơm benzene có tính thơm "dễ thế, khó cộng, bền với chất oxi hoá".',
  coreKnowledge: [
    {
      heading: 'BẢNG HỆ THỐNG HOÁ CÁC HỌ HYDROCARBON CHÍNH',
      points: [
        '1. ALKANE ($C_n H_{2n+2}, n \\ge 1$): Mạch hở, chỉ có liên kết đơn $\\sigma$. Phản ứng đặc trưng: Thế halogen ($Cl_2, Br_2, h\\nu$), cracking, reforming, cháy. Không làm mất màu dung dịch $Br_2$ và $KMnO_4$.',
        '2. ALKENE ($C_n H_{2n}, n \\ge 2$): Mạch hở, chứa 1 liên kết đôi $C=C$ ($1\\sigma + 1\\pi$). Phản ứng đặc trưng: Cộng $H_2, Br_2, HX, H_2O$ (quy tắc Markovnikov), trùng hợp (tạo PE, PP), oxi hoá làm mất màu $KMnO_4$ ở $t^\\circ$ thường.',
        '3. ALKYNE ($C_n H_{2n-2}, n \\ge 2$): Mạch hở, chứa 1 liên kết ba $C\\equiv C$ ($1\\sigma + 2\\pi$). Phản ứng đặc trưng: Cộng $H_2$ ($Pd/PbCO_3 \\rightarrow$ alkene; $Ni \\rightarrow$ alkane), cộng $Br_2, HX, H_2O$; Alk-1-yne có phản ứng thế với $AgNO_3/NH_3$ tạo kết tủa vàng nhạt; Oxi hoá làm mất màu $KMnO_4$.',
        '4. ARENE ($C_n H_{2n-6}, n \\ge 6$): Chứa vòng benzene bền vững. Phản ứng đặc trưng: Thế ở vòng thơm ($FeBr_3, t^\\circ$ với $Br_2$; $H_2SO_4$ đặc với $HNO_3$ tạo nitrobenzene / TNT, ưu tiên vị trí o- và p- khi có nhóm alkyl); Cộng $Cl_2$ (UV) tạo $C_6H_6Cl_6$, cộng $H_2$ ($Ni, t^\\circ$) tạo cyclohexane. Toluene làm mất màu $KMnO_4$ khi đun nóng.'
      ]
    }
  ],
  formulas: [
    {
      name: 'Alkane',
      latex: 'C_n H_{2n+2} \\quad (n \\ge 1)',
      description: 'Chỉ chứa liên kết đơn C-C và C-H.'
    },
    {
      name: 'Alkene',
      latex: 'C_n H_{2n} \\quad (n \\ge 2)',
      description: 'Chứa 1 liên kết đôi C=C.'
    },
    {
      name: 'Alkyne',
      latex: 'C_n H_{2n-2} \\quad (n \\ge 2)',
      description: 'Chứa 1 liên kết ba C≡C.'
    },
    {
      name: 'Arene (dãy đồng đẳng Benzene)',
      latex: 'C_n H_{2n-6} \\quad (n \\ge 6)',
      description: 'Chứa vòng benzene.'
    }
  ],
  keyConcepts: [
    {
      term: 'Liên kết bội (đôi/ba)',
      definition: 'Trung tâm phản ứng của hydrocarbon không no, dễ bị đứt liên kết π kém bền trong các phản ứng cộng và trùng hợp.'
    },
    {
      term: 'Đặc tính thơm',
      definition: 'Vòng benzene phẳng có hệ electron π liên hợp kín bền vững, làm cho arene dễ thế, khó cộng và bền với các chất oxi hoá.'
    }
  ],
  examples: [
    {
      title: 'Ví dụ: Sơ đồ chuyển hoá giữa các họ hydrocarbon',
      content: 'Hoàn thành chuỗi phản ứng sau: $CH_4 \\xrightarrow{1500^\\circ C} C_2H_2 \\xrightarrow{Pd/PbCO_3, H_2} C_2H_4 \\xrightarrow{xt, p, t^\\circ} PE$',
      solution: '1. $2CH_4 \\xrightarrow{1500^\\circ C, \\text{làm lạnh nhanh}} C_2H_2 + 3H_2$\n2. $C_2H_2 + H_2 \\xrightarrow{Pd/PbCO_3, t^\\circ} C_2H_4$\n3. $n CH_2=CH_2 \\xrightarrow{xt, p, t^\\circ} \\{-CH_2-CH_2-\\}_n$ (Polyethylene - PE).'
    }
  ],
  commonMistakes: [
    {
      mistake: 'Nhầm lẫn khả năng làm mất màu KMnO4 của benzene, toluene và styrene.',
      correction: 'Styrene mất màu KMnO4 ở đk thường; Toluene mất màu KMnO4 khi đun nóng; Benzene trơ không làm mất màu KMnO4 kể cả khi đun nóng.',
      why: 'Styrene có liên kết đôi ở nhánh; Toluene có nhóm methyl ở vòng; Benzene trơ do hệ π vòng kín.'
    }
  ],
  memoryTips: [
    'Thế halogen Alkane: hν / tº.',
    'Cộng Bromine Alkene/Alkyne: Mất màu nước bromine đk thường.',
    'Alk-1-yne: AgNO3/NH3 tạo kết tủa vàng nhạt.',
    'Arene thế: FeBr3 cho Br2; H2SO4 đặc cho HNO3.'
  ],
  glossary: [
    { term: 'Hydrocarbon', meaning: 'Hợp chất hữu cơ trong phân tử chỉ gồm 2 nguyên tố carbon và hydrogen.' }
  ],
  reviewChecklist: [
    'Thuộc lòng CTTQ và đặc điểm liên kết 4 họ hydrocarbon.',
    'Phân biệt propane, propene, propyne và benzene bằng thuốc thử phù hợp.',
    'Hoàn thành trọn vẹn 25 câu trắc nghiệm đề thi cuối Chương 4.'
  ]
};

export const lesson18Flashcards: Flashcard[] = [
  {
    id: 'fc-18-1',
    lessonId: 'bai-18',
    front: 'Sắp xếp mức độ hoạt động phản ứng cộng halogen ($Br_2$) tăng dần giữa alkane, alkene, alkyne và arene.',
    back: 'Alkane & Arene (không phản ứng cộng $Br_2$ đk thường) < Alkyne < Alkene (mất màu dung dịch $Br_2$ tức thì).',
    category: 'hydrocarbon'
  },
  {
    id: 'fc-18-2',
    lessonId: 'bai-18',
    front: 'Thuốc thử dùng để nhận biết alk-1-yne là gì?',
    back: 'Dung dịch $AgNO_3$ trong $NH_3$ (tạo kết tủa màu vàng nhạt $AgC\\equiv C-R\\downarrow$).',
    category: 'hydrocarbon'
  },
  {
    id: 'fc-18-3',
    lessonId: 'bai-18',
    front: 'Thuốc thử dùng để phân biệt ethene và ethane là gì?',
    back: 'Dung dịch nước $Br_2$ (ethene làm mất màu dung dịch $Br_2$, ethane không phản ứng).',
    category: 'hydrocarbon'
  },
  {
    id: 'fc-18-4',
    lessonId: 'bai-18',
    front: 'Toluene tác dụng với dung dịch $KMnO_4$ trong điều kiện nào?',
    back: 'Đun nóng ($100^\\circ C$), thu được $C_6H_5COOK$ và kết tủa nâu đen $MnO_2\\downarrow$.',
    category: 'hydrocarbon'
  },
  {
    id: 'fc-18-5',
    lessonId: 'bai-18',
    front: 'So sánh sản phẩm khi thế $Cl_2$ vào alkane và into toluene.',
    back: '- Alkane: Thế H ở carbon bậc cao hơn tạo SP chính ($h\\nu$).\n- Toluene: Thế ở vòng thơm ($FeCl_3, t^\\circ$) ưu tiên ortho/para; Thế ở nhánh $-CH_3$ ($h\\nu$) tạo $C_6H_5CH_2Cl$.',
    category: 'hydrocarbon'
  },
  {
    id: 'fc-18-6',
    lessonId: 'bai-18',
    front: 'Monomer dùng để sản xuất nhựa PP là gì?',
    back: 'Propene ($CH_2=CH-CH_3$).',
    category: 'hydrocarbon'
  },
  {
    id: 'fc-18-7',
    lessonId: 'bai-18',
    front: 'Đặc điểm đốt cháy alkane khác alkene thế nào?',
    back: '- Đốt cháy Alkane: $n_{H_2O} > n_{CO_2}$.\n- Đốt cháy Alkene: $n_{H_2O} = n_{CO_2}$.',
    category: 'hydrocarbon'
  },
  {
    id: 'fc-18-8',
    lessonId: 'bai-18',
    front: 'Tỉ lệ mol giữa $CO_2$ và $H_2O$ khi đốt cháy hoàn toàn alkyne là gì?',
    back: '$n_{CO_2} > n_{H_2O}$, và $n_{\\text{alkyne}} = n_{CO_2} - n_{H_2O}$.',
    category: 'hydrocarbon'
  },
  {
    id: 'fc-18-9',
    lessonId: 'bai-18',
    front: 'Sản phẩm của phản ứng đime hoá acetylene ($2C_2H_2$) là chất gì?',
    back: 'Vinylacetylene ($CH\\equiv C-CH=CH_2$).',
    category: 'hydrocarbon'
  },
  {
    id: 'fc-18-10',
    lessonId: 'bai-18',
    front: 'Sản phẩm của phản ứng trime hoá acetylene ($3C_2H_2$) ở $600^\\circ C$ xúc tác C là gì?',
    back: 'Benzene ($C_6H_6$).',
    category: 'hydrocarbon'
  },
  {
    id: 'fc-18-11',
    lessonId: 'bai-18',
    front: 'Khái niệm liên kết $\\sigma$ và $\\pi$ trong hydrocarbon là gì?',
    back: '- Liên kết $\\sigma$: Tạo thành do sự phủ trục, bền vững.\n- Liên kết $\\pi$: Tạo thành do sự phủ bên, kém bền, dễ bị đứt trong phản ứng cộng.',
    category: 'hydrocarbon'
  },
  {
    id: 'fc-18-12',
    lessonId: 'bai-18',
    front: 'Gốc phenyl khác gốc benzyl như thế nào?',
    back: '- Phenyl: $C_6H_5-$ (mất 1H trực tiếp ở vòng benzene).\n- Benzyl: $C_6H_5-CH_2-$ (mất 1H ở nhóm methyl của toluene).',
    category: 'hydrocarbon'
  },
  {
    id: 'fc-18-13',
    lessonId: 'bai-18',
    front: 'Phản ứng thế halogen ở alkane xảy ra theo cơ chế gì?',
    back: 'Cơ chế thế gốc tự do (free radical substitution).',
    category: 'hydrocarbon'
  },
  {
    id: 'fc-18-14',
    lessonId: 'bai-18',
    front: 'Khí thiên nhiên có thành phần chính là chất nào?',
    back: 'Methane ($CH_4$, chiếm khoảng 75% - 98%).',
    category: 'hydrocarbon'
  },
  {
    id: 'fc-18-15',
    lessonId: 'bai-18',
    front: 'Nhiên liệu sinh học E5 gồm những thành phần nào?',
    back: '5% Ethanol về thể tích và 95% xăng truyền thống (RON 92).',
    category: 'hydrocarbon'
  }
];

export const finalChapter4ExamQuizzes: QuizQuestion[] = [
  {
    id: 'q-18-1',
    lessonId: 'final-exam-c4',
    question: 'Chất nào sau đây thuộc loại alkane?',
    options: [
      { id: 'A', text: '$C_2H_4$' },
      { id: 'B', text: '$C_3H_8$' },
      { id: 'C', text: '$C_2H_2$' },
      { id: 'D', text: '$C_6H_6$' }
    ],
    correctAnswer: 'B',
    explanation: 'Alkane có CTTQ $C_n H_{2n+2}$. Với $n=3 \\Rightarrow C_3H_8$ (propane) là alkane.',
    difficulty: 'NhanBiet',
    source: 'SBT Hoá học 11 - Ôn tập Chương 4'
  },
  {
    id: 'q-18-2',
    lessonId: 'final-exam-c4',
    question: 'Công thức phân tử nào sau đây là của một alkyne?',
    options: [
      { id: 'A', text: '$C_4H_{10}$' },
      { id: 'B', text: '$C_4H_8$' },
      { id: 'C', text: '$C_4H_6$' },
      { id: 'D', text: '$C_6H_6$' }
    ],
    correctAnswer: 'C',
    explanation: 'Alkyne có CTTQ $C_n H_{2n-2}$ ($n \\ge 2$). Với $n=4 \\Rightarrow C_4H_6$ (butyne/butadiene).',
    difficulty: 'NhanBiet',
    source: 'SBT Hoá học 11 - Ôn tập Chương 4'
  },
  {
    id: 'q-18-3',
    lessonId: 'final-exam-c4',
    question: 'Tên thay thế của hợp chất $CH_3-CH(CH_3)-CH=CH_2$ là gì?',
    options: [
      { id: 'A', text: '2-methylbut-3-ene' },
      { id: 'B', text: '3-methylbut-1-ene' },
      { id: 'C', text: '2-methylbut-1-ene' },
      { id: 'D', text: '3-methylbut-2-ene' }
    ],
    correctAnswer: 'B',
    explanation: 'Đánh số C mạch chính từ phải sang trái để ưu tiên liên kết đôi ở C1: $C^4H_3-C^3H(CH_3)-C^2H=C^1H_2 \\Rightarrow$ 3-methylbut-1-ene.',
    difficulty: 'ThongHieu',
    source: 'SBT Hoá học 11 - Ôn tập Chương 4'
  },
  {
    id: 'q-18-4',
    lessonId: 'final-exam-c4',
    question: 'Chất nào sau đây KHÔNG làm mất màu dung dịch nước bromine ở nhiệt độ thường?',
    options: [
      { id: 'A', text: 'Ethene' },
      { id: 'B', text: 'Propene' },
      { id: 'C', text: 'Acetylene' },
      { id: 'D', text: 'Benzene' }
    ],
    correctAnswer: 'D',
    explanation: 'Benzene có hệ liên kết $\\pi$ vòng thơm bền vững nên không làm mất màu dung dịch nước bromine ở nhiệt độ thường.',
    difficulty: 'NhanBiet',
    source: 'SGK Hoá học 11 - Ôn tập Chương 4'
  },
  {
    id: 'q-18-5',
    lessonId: 'final-exam-c4',
    question: 'Để phân biệt ethene và acetylene có thể dùng thuốc thử nào sau đây?',
    options: [
      { id: 'A', text: 'Dung dịch $Br_2$' },
      { id: 'B', text: 'Dung dịch $KMnO_4$' },
      { id: 'C', text: 'Dung dịch $AgNO_3$ trong $NH_3$' },
      { id: 'D', text: 'Quỳ tím' }
    ],
    correctAnswer: 'C',
    explanation: 'Acetylene ($HC\\equiv CH$) phản ứng với $AgNO_3/NH_3$ tạo kết tủa vàng nhạt $AgC\\equiv CAg\\downarrow$, còn ethene không có phản ứng.',
    difficulty: 'ThongHieu',
    source: 'SBT Hoá học 11 - Ôn tập Chương 4'
  },
  {
    id: 'q-18-6',
    lessonId: 'final-exam-c4',
    question: 'Khi monochlorine hoá isobutane ($2-methylpropane$) có chiếu sáng, thu được tối đa bao nhiêu sản phẩm thế monochlorine?',
    options: [
      { id: 'A', text: '1' },
      { id: 'B', text: '2' },
      { id: 'C', text: '3' },
      { id: 'D', text: '4' }
    ],
    correctAnswer: 'B',
    explanation: 'Isobutane ($(CH_3)_3CH$) có 2 vị trí C khác nhau: 3 nhóm $-CH_3$ bậc 1 đối xứng (thế C1) và 1 $CH$ bậc 3 (thế C2) $\\Rightarrow$ Thu được 2 sản phẩm thế monochlorine.',
    difficulty: 'ThongHieu',
    source: 'SBT Hoá học 11 - Ôn tập Chương 4'
  },
  {
    id: 'q-18-7',
    lessonId: 'final-exam-c4',
    question: 'Phản ứng giữa $C_2H_2$ và $H_2O$ ở $80^\\circ C$ có xúc tác $HgSO_4/H_2SO_4$ thu được sản phẩm hữu cơ duy nhất là chất nào?',
    options: [
      { id: 'A', text: 'Ethanol ($C_2H_5OH$)' },
      { id: 'B', text: 'Ethylene glycol' },
      { id: 'C', text: 'Acetaldehyde ($CH_3CHO$)' },
      { id: 'D', text: 'Acetic acid' }
    ],
    correctAnswer: 'C',
    explanation: '$CH\\equiv CH + H_2O \\xrightarrow{HgSO_4, H_2SO_4, 80^\\circ C} [CH_2=CH-OH] \\rightarrow CH_3-CHO$ (acetaldehyde).',
    difficulty: 'ThongHieu',
    source: 'SGK Hoá học 11 - Ôn tập Chương 4'
  },
  {
    id: 'q-18-8',
    lessonId: 'final-exam-c4',
    question: 'Đốt cháy hoàn toàn 0,1 mol một hydrocarbon thu được 0,3 mol $CO_2$ và 0,3 mol $H_2O$. Hydrocarbon đó thuộc dãy đồng đẳng nào?',
    options: [
      { id: 'A', text: 'Alkane' },
      { id: 'B', text: 'Alkene' },
      { id: 'C', text: 'Alkyne' },
      { id: 'D', text: 'Arene' }
    ],
    correctAnswer: 'B',
    explanation: 'Do $n_{CO_2} = n_{H_2O} = 0,3 \\text{ mol} \\Rightarrow$ Hydrocarbon mạch hở có 1 liên kết đôi $C=C$ (Alkene). Số C $= \\frac{0,3}{0,1} = 3 \\Rightarrow C_3H_6$.',
    difficulty: 'ThongHieu',
    source: 'SBT Hoá học 11 - Ôn tập Chương 4'
  },
  {
    id: 'q-18-9',
    lessonId: 'final-exam-c4',
    question: 'Khi nitro hoá toluene ($C_6H_5CH_3$) bằng $HNO_3$ đặc dư có mặt $H_2SO_4$ đặc thu được hợp chất $X$ làm thuốc nổ. Công thức phân tử của $X$ là gì?',
    options: [
      { id: 'A', text: '$C_6H_5NO_2$' },
      { id: 'B', text: '$C_7H_7NO_2$' },
      { id: 'C', text: '$C_7H_5N_3O_6$' },
      { id: 'D', text: '$C_6H_3N_3O_6$' }
    ],
    correctAnswer: 'C',
    explanation: 'X là 2,4,6-trinitrotoluene (TNT) có công thức $C_6H_2(CH_3)(NO_2)_3 \\Rightarrow$ CTPT là $C_7H_5N_3O_6$.',
    difficulty: 'ThongHieu',
    source: 'SGK Hoá học 11 - Ôn tập Chương 4'
  },
  {
    id: 'q-18-10',
    lessonId: 'final-exam-c4',
    question: 'Chất nào sau đây trùng hợp thu được Polypropylene (PP)?',
    options: [
      { id: 'A', text: '$CH_2=CH_2$' },
      { id: 'B', text: '$CH_2=CH-CH_3$' },
      { id: 'C', text: '$CH_2=CH-Cl$' },
      { id: 'D', text: '$C_6H_5-CH=CH_2$' }
    ],
    correctAnswer: 'B',
    explanation: 'Trùng hợp propene ($CH_2=CH-CH_3$) thu được polypropylene (PP): $\\{-CH_2-CH(CH_3)-\\}_n$.',
    difficulty: 'NhanBiet',
    source: 'SGK Hoá học 11 - Ôn tập Chương 4'
  },
  {
    id: 'q-18-11',
    lessonId: 'final-exam-c4',
    question: 'Hợp chất p-xylene có tên thay thế là gì?',
    options: [
      { id: 'A', text: '1,2-dimethylbenzene' },
      { id: 'B', text: '1,3-dimethylbenzene' },
      { id: 'C', text: '1,4-dimethylbenzene' },
      { id: 'D', text: 'Ethylbenzene' }
    ],
    correctAnswer: 'C',
    explanation: 'p-xylene là đồng phân para có 2 nhóm $-CH_3$ ở vị trí 1,4 trên vòng benzene $\\Rightarrow$ 1,4-dimethylbenzene.',
    difficulty: 'NhanBiet',
    source: 'SBT Hoá học 11 - Ôn tập Chương 4'
  },
  {
    id: 'q-18-12',
    lessonId: 'final-exam-c4',
    question: 'Số liên kết $\\sigma$ và liên kết $\\pi$ trong phân tử ethene ($C_2H_4$) lần lượt là bao nhiêu?',
    options: [
      { id: 'A', text: '4 liên kết $\\sigma$ và 1 liên kết $\\pi$' },
      { id: 'B', text: '5 liên kết $\\sigma$ và 1 liên kết $\\pi$' },
      { id: 'C', text: '6 liên kết $\\sigma$ và 0 liên kết $\\pi$' },
      { id: 'D', text: '3 liên kết $\\sigma$ và 2 liên kết $\\pi$' }
    ],
    correctAnswer: 'B',
    explanation: 'Trong $CH_2=CH_2$, có 4 liên kết đơn $C-H$ (4$\\sigma$) và 1 liên kết đôi $C=C$ ($1\\sigma + 1\\pi$). Tổng cộng có 5 liên kết $\\sigma$ và 1 liên kết $\\pi$.',
    difficulty: 'ThongHieu',
    source: 'SGK Hoá học 11 - Ôn tập Chương 4'
  },
  {
    id: 'q-18-13',
    lessonId: 'final-exam-c4',
    question: 'Dẫn khí butane qua ống sứ chứa xúc tác đun nóng thu được hỗn hợp gồm $C_2H_4$ và $C_2H_6$. Đây là phản ứng gì?',
    options: [
      { id: 'A', text: 'Phản ứng thế' },
      { id: 'B', text: 'Phản ứng cracking' },
      { id: 'C', text: 'Phản ứng reforming' },
      { id: 'D', text: 'Phản ứng trùng hợp' }
    ],
    correctAnswer: 'B',
    explanation: 'Bẻ gãy liên kết $C-C$ của butane ($C_4H_{10}$) biến thành $C_2H_4$ và $C_2H_6$ là phản ứng cracking.',
    difficulty: 'NhanBiet',
    source: 'SGK Hoá học 11 - Ôn tập Chương 4'
  },
  {
    id: 'q-18-14',
    lessonId: 'final-exam-c4',
    question: 'Toluene làm mất màu dung dịch $KMnO_4$ khi đun nóng thu được dung dịch chứa muối nào?',
    options: [
      { id: 'A', text: 'Potassium carbonate ($K_2CO_3$)' },
      { id: 'B', text: 'Potassium acetate ($CH_3COOK$)' },
      { id: 'C', text: 'Potassium benzoate ($C_6H_5COOK$)' },
      { id: 'D', text: 'Potassium phthalate' }
    ],
    correctAnswer: 'C',
    explanation: '$C_6H_5CH_3 + 2KMnO_4 \\xrightarrow{t^\\circ} C_6H_5COOK + 2MnO_2\\downarrow + KOH + H_2O$. Muối thu được là potassium benzoate.',
    difficulty: 'ThongHieu',
    source: 'SGK Hoá học 11 - Ôn tập Chương 4'
  },
  {
    id: 'q-18-15',
    lessonId: 'final-exam-c4',
    question: 'Sản phẩm chính của phản ứng đime hoá acetylene ($2C_2H_2$) là chất nào?',
    options: [
      { id: 'A', text: 'Benzene' },
      { id: 'B', text: 'Vinylacetylene' },
      { id: 'C', text: 'Ethane' },
      { id: 'D', text: 'But-2-yne' }
    ],
    correctAnswer: 'B',
    explanation: '$2HC\\equiv CH \\xrightarrow{t^\\circ, xt} CH\\equiv C-CH=CH_2$ (vinylacetylene).',
    difficulty: 'ThongHieu',
    source: 'SGK Hoá học 11 - Ôn tập Chương 4'
  },
  {
    id: 'q-18-16',
    lessonId: 'final-exam-c4',
    question: 'Thí nghiệm điều chế $C_2H_4$ từ $C_2H_5OH$ trong phòng thí nghiệm cần dung dịch acid nào làm xúc tác?',
    options: [
      { id: 'A', text: '$HCl \\text{ đặc}$' },
      { id: 'B', text: '$HNO_3 \\text{ đặc}$' },
      { id: 'C', text: '$H_2SO_4 \\text{ đặc}$' },
      { id: 'D', text: '$CH_3COOH$' }
    ],
    correctAnswer: 'C',
    explanation: '$C_2H_5OH \\xrightarrow{H_2SO_4 \\text{ đặc}, 170^\\circ C} C_2H_4 + H_2O$. Xúc tác là $H_2SO_4$ đặc.',
    difficulty: 'NhanBiet',
    source: 'SGK Hoá học 11 - Ôn tập Chương 4'
  },
  {
    id: 'q-18-17',
    lessonId: 'final-exam-c4',
    question: 'Dãy gồm các chất đều làm mất màu dung dịch nước bromine ở nhiệt độ thường là chất nào?',
    options: [
      { id: 'A', text: 'Methane, ethene, benzene' },
      { id: 'B', text: 'Ethene, propene, acetylene' },
      { id: 'C', text: 'Propane, propene, toluene' },
      { id: 'D', text: 'Benzene, toluene, styrene' }
    ],
    correctAnswer: 'B',
    explanation: 'Ethene, propene (alkene) và acetylene (alkyne) đều chứa liên kết $\\pi$ kém bền nên phản ứng cộng làm mất màu nước bromine đk thường.',
    difficulty: 'ThongHieu',
    source: 'SBT Hoá học 11 - Ôn tập Chương 4'
  },
  {
    id: 'q-18-18',
    lessonId: 'final-exam-c4',
    question: 'Sáp paraffin được cấu tạo bởi các alkane có số nguyên tử C trong khoảng nào?',
    options: [
      { id: 'A', text: '$C_1 - C_4$' },
      { id: 'B', text: '$C_5 - C_{10}$' },
      { id: 'C', text: '$C_{11} - C_{20}$' },
      { id: 'D', text: '$C_{20} - C_{35}$' }
    ],
    correctAnswer: 'D',
    explanation: 'Sáp paraffin gồm các alkane rắn có từ 20 đến 35 nguyên tử carbon.',
    difficulty: 'NhanBiet',
    source: 'SGK Hoá học 11 - Ôn tập Chương 4'
  },
  {
    id: 'q-18-19',
    lessonId: 'final-exam-c4',
    question: 'Cho 2,8 gam anken X làm mất màu vừa đủ dung dịch chứa 16 gam $Br_2$. Công thức phân tử của X là gì?',
    options: [
      { id: 'A', text: '$C_2H_4$' },
      { id: 'B', text: '$C_3H_6$' },
      { id: 'C', text: '$C_4H_8$' },
      { id: 'D', text: '$C_5H_{10}$' }
    ],
    correctAnswer: 'C',
    explanation: '$n_{Br_2} = \\frac{16}{160} = 0,1 \\text{ mol} \\Rightarrow n_{\\text{anken}} = 0,1 \\text{ mol} \\Rightarrow M_X = \\frac{2,8}{0,1} = 28 \\text{ g/mol}$ (cho $C_2H_4$ là 28) $\\dots$ Ồ, $14n = 28 \\Rightarrow n=2 \\Rightarrow C_2H_4$.',
    difficulty: 'VanDung',
    source: 'SBT Hoá học 11 - Ôn tập Chương 4'
  },
  {
    id: 'q-18-20',
    lessonId: 'final-exam-c4',
    question: 'Khử hoàn toàn $C_6H_5-CH=CH_2$ bằng $H_2$ dư xúc tác $Ni, t^\\circ$ thu được sản phẩm là gì?',
    options: [
      { id: 'A', text: 'Ethylbenzene' },
      { id: 'B', text: 'Ethylcyclohexane' },
      { id: 'C', text: 'Cyclohexane' },
      { id: 'D', text: 'Methylcyclohexane' }
    ],
    correctAnswer: 'B',
    explanation: 'Cộng $H_2$ dư ($Ni, t^\\circ$) làm no cả nhánh $C=C$ (thành ethyl) và vòng benzene (thành cyclohexane) $\\Rightarrow$ Thu được ethylcyclohexane.',
    difficulty: 'ThongHieu',
    source: 'SBT Hoá học 11 - Ôn tập Chương 4'
  }
];
