import { TheorySectionData, Flashcard, QuizQuestion } from '../../types';

export const lesson17Theory: TheorySectionData = {
  id: 'bai-17',
  chapterId: 'chuong-4',
  title: 'Bài 17: Arene (Hydrocarbon thơm)',
  objectives: [
    'Nêu được khái niệm về arene, đặc điểm liên kết và hình học phân tử benzene.',
    'Gọi tên thay thế và tên thông thường một số arene (benzene, toluene, o-xylene, m-xylene, p-xylene, styrene, naphthalene) và nhóm gốc aryl (phenyl, benzyl).',
    'Trình bày tính chất vật lí và tính chất hoá học của arene: phản ứng thế ở vòng thơm (halogen hoá, nitro hoá, quy tắc thế), phản ứng cộng ($Cl_2, H_2$), phản ứng oxi hoá (cháy, oxi hoá nhóm alkyl bằng $KMnO_4$).',
    'Trình bày ứng dụng, tác hại, cách sử dụng an toàn arene và phương pháp điều chế arene trong công nghiệp.'
  ],
  summary: 'Arene (hydrocarbon thơm) là các hydrocarbon trong phân tử chứa một hay nhiều vòng benzene. Benzene ($C_6H_6$) có cấu trúc lục giác đều phẳng với các góc liên kết $120^\\circ$ và độ dài liên kết $C-C$ đều bằng $139\\text{ pm}$. Tính chất hoá học đặc trưng của nhân thơm là "dễ thế, khó cộng, bền với chất oxi hoá". Nhóm alkyl gắn vào vòng làm tăng khả năng thế và định hướng thế tiếp theo vào các vị trí ortho và para. Toluene làm mất màu dung dịch $KMnO_4$ khi đun nóng tạo potassium benzoate.',
  coreKnowledge: [
    {
      heading: '1. Khái niệm, CTTQ & Cấu tạo benzene',
      points: [
        'Khái niệm: Arene là hydrocarbon trong phân tử có chứa một hay nhiều vòng benzene.',
        'Công thức tổng quát của dãy đồng đẳng benzene: $C_n H_{2n-6}$ ($n \\ge 6$).',
        'Cấu tạo phân tử benzene ($C_6H_6$): 6 nguyên tử carbon liên kết với nhau tạo thành hình lục giác đều phẳng, tất cả 6C và 6H đều nằm trên một mặt phẳng, các góc liên kết $H-C-C$ và $C-C-C$ đều bằng $120^\\circ$. Độ dài liên kết carbon-carbon đều bằng nhau ($139\\text{ pm}$).',
        'Gốc aryl: Gốc phenyl ($-C_6H_5$), gốc benzyl ($-CH_2-C_6H_5$).'
      ]
    },
    {
      heading: '2. Đồng phân & Danh pháp',
      points: [
        'Danh pháp thay thế: Tên nhóm thế + "benzene". Ví dụ: methylbenzene (toluene), vinylbenzene (styrene).',
        'Đồng phân vị trí nhóm thế trên vòng benzene (di-thế): Vị trí 1,2 gọi là ortho- (o-); vị trí 1,3 gọi là meta- (m-); vị trí 1,4 gọi là para- (p-).',
        'Ví dụ: 1,2-dimethylbenzene (o-xylene), 1,3-dimethylbenzene (m-xylene), 1,4-dimethylbenzene (p-xylene).',
        'Naphthalene ($C_{10}H_8$): Hydrocarbon thơm gồm 2 vòng benzene ngưng tụ.'
      ]
    },
    {
      heading: '3. Tính chất vật lí',
      points: [
        'Ở điều kiện thường, benzene, toluene, xylene, styrene là chất lỏng không màu, có mùi đặc trưng, nhẹ hơn nước, không tan trong nước, tan tốt trong dung môi hữu cơ.',
        'Naphthalene là chất rắn màu trắng, có mùi đặc trưng (măng xông/băng phiến).'
      ]
    },
    {
      heading: '4. Tính chất hoá học',
      points: [
        'Đặc điểm tính chất: Vòng benzene rất bền vững, thể hiện đặc tính thơm: "Dễ thế, khó cộng, bền với các chất oxi hoá".',
        'a) Phản ứng thế ở vòng thơm:',
        '  - Quy tắc thế: Các alkylbenzene (như toluene) phản ứng thế halogen hoặc nitro vào vòng thơm dễ dàng hơn benzene và ưu tiên thế vào vị trí ortho và para.',
        '  - Thế Halogen: $C_6H_6 + Br_2 \\xrightarrow{FeBr_3, t^\\circ} C_6H_5Br + HBr$. Toluene thế $Br_2$ ($FeBr_3, t^\\circ$) thu được hỗn hợp o-bromotoluene và p-bromotoluene.',
        '  - Phản ứng Nitro hoá: $C_6H_6 + HNO_3 \\text{ đặc} \\xrightarrow{H_2SO_4 \\text{ đặc}, \\le 50^\\circ C} C_6H_5NO_2 (nitrobenzene, \\text{chất lỏng màu vàng nhạt, sánh}) + H_2O$. Toluene phản ứng với $HNO_3$ dư thu được 2,4,6-trinitrotoluene (TNT, thuốc nổ).',
        'b) Phản ứng cộng:',
        '  - Cộng $Cl_2$: $C_6H_6 + 3Cl_2 \\xrightarrow{\\text{ánh sáng UV, } t^\\circ} C_6H_6Cl_6$ (1,2,3,4,5,6-hexachlorocyclohexane / thuốc trừ sâu 666).',
        '  - Cộng $H_2$: $C_6H_6 + 3H_2 \\xrightarrow{Ni, t^\\circ, p} C_6H_{12}$ (cyclohexane).',
        'c) Phản ứng oxi hoá:',
        '  - Phản ứng với $KMnO_4$: Benzene KHÔNG làm mất màu dung dịch $KMnO_4$ kể cả khi đun nóng. Toluene KHÔNG phản ứng ở nhiệt độ thường, nhưng LÀM MẤT MÀU $KMnO_4$ KHI ĐUN NÓNG:',
        '    $C_6H_5CH_3 + 2KMnO_4 \\xrightarrow{t^\\circ} C_6H_5COOK (potassium benzoate) + 2MnO_2\\downarrow + KOH + H_2O$. Axit hoá dung dịch thu được $C_6H_5COOH\\downarrow$ (benzoic acid).',
        '  - Phản ứng cháy: Các arene dễ cháy trong không khí toả nhiều nhiệt: $C_n H_{2n-6} + \\frac{3n-3}{2} O_2 \\xrightarrow{t^\\circ} n CO_2 + (n-3) H_2O$. Do tỉ lệ C cao nên khi cháy trong thiếu O2 tạo nhiều muội than.'
      ],
      latexEquations: [
        'C_6H_6 + Br_2 \\xrightarrow{FeBr_3, t^\\circ} C_6H_5Br + HBr',
        'C_6H_6 + HNO_3 \\xrightarrow{H_2SO_4 \\text{ đặc}, t^\\circ} C_6H_5NO_2 + H_2O',
        'C_6H_6 + 3Cl_2 \\xrightarrow{\\text{UV}} C_6H_6Cl_6',
        'C_6H_5CH_3 + 2KMnO_4 \\xrightarrow{t^\\circ} C_6H_5COOK + 2MnO_2\\downarrow + KOH + H_2O'
      ]
    },
    {
      heading: '5. Ứng dụng, tác hại & Điều chế',
      points: [
        'Ứng dụng: Nguyên liệu tổng hợp polymer (styrene $\\rightarrow$ PS), dược phẩm, phẩm nhuộm, thuốc trừ sâu, thuốc nổ (TNT), dung môi pha sơn.',
        'Tác hại: Benzene độc, có thể gây ung thư máu. Cần tuân thủ quy tắc an toàn khi làm việc với arene, hạn chế tiếp xúc trực tiếp.',
        'Điều chế: Khai thác từ quá trình reforming phân đoạn dầu mỏ chứa $C6-C8$, chưng cất nhựa than đá.'
      ]
    }
  ],
  formulas: [
    {
      name: 'Công thức chung Dãy đồng đẳng Benzene',
      latex: 'C_n H_{2n-6} \\quad (n \\ge 6)',
      description: 'Công thức tổng quát của các alkylbenzene đơn vòng.'
    }
  ],
  keyConcepts: [
    {
      term: 'Arene (Hydrocarbon thơm)',
      definition: 'Hydrocarbon trong phân tử có chứa một hay nhiều vòng benzene.'
    },
    {
      term: 'Đặc tính thơm',
      definition: 'Khả năng dễ tham gia phản ứng thế ở vòng, khó tham gia phản ứng cộng và bền vững trước các chất oxi hoá thông thường.'
    },
    {
      term: 'Quy tắc thế vào vòng benzene',
      definition: 'Khi vòng đã có sẵn nhóm alkyl (-CH3, -C2H5), phản ứng thế tiếp theo diễn ra dễ hơn và ưu tiên định hướng vào vị trí ortho (1,2) và para (1,4).'
    }
  ],
  examples: [
    {
      title: 'Ví dụ 1: Phân biệt benzene, toluene và styrene',
      content: 'Chỉ dùng một hoá chất duy nhất, làm thế nào để phân biệt 3 mẫu lỏng không màu gồm benzene, toluene và styrene?',
      solution: 'Dùng dung dịch $KMnO_4$:\n1. Ở nhiệt độ thường, dẫn từng mẫu thử vào dung dịch $KMnO_4$:\n- Styrene ($C_6H_5-CH=CH_2$) có liên kết đôi ở nhánh nên làm mất màu dung dịch $KMnO_4$ ngay ở nhiệt độ thường.\n2. Đun nóng 2 mẫu thử còn lại với dung dịch $KMnO_4$:\n- Toluene ($C_6H_5CH_3$) làm mất màu dung dịch $KMnO_4$ khi đun nóng và xuất hiện kết tủa nâu đen $MnO_2$.\n- Benzene ($C_6H_6$) không làm mất màu $KMnO_4$ ngay cả khi đun nóng.'
    }
  ],
  commonMistakes: [
    {
      mistake: 'Cho rằng benzene làm mất màu dung dịch nước bromine $Br_2$ ở nhiệt độ thường.',
      correction: 'Benzene không làm mất màu dung dịch nước bromine $Br_2$. Benzene chỉ phản ứng thế với $Br_2$ nguyên chất (khan) khi có xúc tác bột sắt $FeBr_3$ đun nóng.',
      why: 'Vòng benzene có hệ liên kết $\\pi$ liên hợp kín rất bền vững, không phản ứng cộng với nước bromine ở điều kiện thường.'
    }
  ],
  memoryTips: [
    'Mẹo nhớ vị trí nhóm thế trên vòng benzene: "O - M - P" tương ứng với vị trí "1,2 - 1,3 - 1,4" (Ortho - Meta - Para).',
    'Mẹo phân biệt bằng KMnO4: "Styrene nhạt tím ở thường - Toluene nhạt tím đun nóng - Benzene trơ lơ không đổi màu".'
  ],
  glossary: [
    { term: 'Nitrobenzene', meaning: 'Chất lỏng màu vàng nhạt, sánh, có mùi hạnh nhân đắng, thu được khi nitro hoá benzene.' },
    { term: 'TNT', meaning: '2,4,6-trinitrotoluene, hợp chất tinh thể màu vàng dùng làm thuốc nổ.' }
  ],
  reviewChecklist: [
    'Viết đúng công thức cấu tạo và tên gọi o-xylene, m-xylene, p-xylene, styrene, naphthalene.',
    'Nắm vững quy tắc định hướng thế ortho/para của alkylbenzene.',
    'Nhớ hiện tượng và phương trình phản ứng giữa toluene với KMnO4 khi đun nóng.'
  ]
};

export const lesson17Flashcards: Flashcard[] = [
  {
    id: 'fc-17-1',
    lessonId: 'bai-17',
    front: 'Công thức tổng quát của dãy đồng đẳng benzene là gì?',
    back: '$C_n H_{2n-6}$ ($n \\ge 6$).',
    category: 'arene'
  },
  {
    id: 'fc-17-2',
    lessonId: 'bai-17',
    front: 'Đặc điểm cấu tạo hình học phân tử benzene ($C_6H_6$) là gì?',
    back: 'Phân tử có dạng hình lục giác đều phẳng, tất cả 6C và 6H nằm trên một mặt phẳng, các góc liên kết bằng $120^\\circ$, độ dài các liên kết $C-C$ đều bằng $139\\text{ pm}$.',
    category: 'arene'
  },
  {
    id: 'fc-17-3',
    lessonId: 'bai-17',
    front: 'Tên gốc $C_6H_5-$ và gốc $C_6H_5-CH_2-$ là gì?',
    back: '- $C_6H_5-$: Gốc phenyl.\n- $C_6H_5-CH_2-$: Gốc benzyl.',
    category: 'arene'
  },
  {
    id: 'fc-17-4',
    lessonId: 'bai-17',
    front: 'Sự khác nhau giữa các vị trí ortho, meta, para trên vòng benzene di-thế là gì?',
    back: '- Ortho (o-): Vị trí 1,2.\n- Meta (m-): Vị trí 1,3.\n- Para (p-): Vị trí 1,4.',
    category: 'arene'
  },
  {
    id: 'fc-17-5',
    lessonId: 'bai-17',
    front: 'Khái quát đặc tính hoá học "thơm" của vòng benzene là gì?',
    back: '"Dễ thế, khó cộng, bền vững với các chất oxi hoá thông thường".',
    category: 'arene'
  },
  {
    id: 'fc-17-6',
    lessonId: 'bai-17',
    front: 'Quy tắc định hướng thế vào vòng benzene có sẵn nhóm alkyl (như $-CH_3$) là gì?',
    back: 'Phản ứng thế xảy ra dễ dàng hơn so với benzene và ưu tiên định hướng nhóm thế tiếp theo vào các vị trí ortho và para.',
    category: 'arene'
  },
  {
    id: 'fc-17-7',
    lessonId: 'bai-17',
    front: 'Điều kiện và sản phẩm của phản ứng brom hoá benzene là gì?',
    back: 'Tác dụng với $Br_2$ nguyên chất khan, xúc tác $FeBr_3$ đun nóng tạo bromobenzene ($C_6H_5Br$) và $HBr$. Benzene không phản ứng với dung dịch nước bromine.',
    category: 'arene'
  },
  {
    id: 'fc-17-8',
    lessonId: 'bai-17',
    front: 'Sản phẩm và hiện tượng khi nitro hoá benzene bằng $HNO_3$ đặc / $H_2SO_4$ đặc ở $\\le 50^\\circ C$ là gì?',
    back: 'Tạo nitrobenzene ($C_6H_5NO_2$), chất lỏng màu vàng nhạt, sánh, mùi hạnh nhân đắng, không tan trong nước.',
    category: 'arene'
  },
  {
    id: 'fc-17-9',
    lessonId: 'bai-17',
    front: 'Thuốc nổ TNT có tên hoá học đầy đủ là gì và viết từ chất nào?',
    back: '2,4,6-trinitrotoluene, thu được khi cho toluene tác dụng với hỗn hợp $HNO_3$ đặc dư và $H_2SO_4$ đặc đun nóng.',
    category: 'arene'
  },
  {
    id: 'fc-17-10',
    lessonId: 'bai-17',
    front: 'Thuốc trừ sâu "666" thu được từ phản ứng nào của benzene?',
    back: 'Phản ứng cộng $3Cl_2$ vào benzene dưới tác dụng của ánh sáng tử ngoại (UV) tạo $C_6H_6Cl_6$ (1,2,3,4,5,6-hexachlorocyclohexane).',
    category: 'arene'
  },
  {
    id: 'fc-17-11',
    lessonId: 'bai-17',
    front: 'Benzene và Toluene phản ứng với dung dịch $KMnO_4$ như thế nào?',
    back: '- Benzene: Không làm mất màu $KMnO_4$ kể cả khi đun nóng.\n- Toluene: Không phản ứng ở đk thường, nhưng làm mất màu $KMnO_4$ khi đun nóng tạo $C_6H_5COOK$.',
    category: 'arene'
  },
  {
    id: 'fc-17-12',
    lessonId: 'bai-17',
    front: 'Styrene ($C_6H_5-CH=CH_2$) có đặc điểm phản ứng hoá học gì khác toluene?',
    back: 'Styrene có liên kết đôi $C=C$ ở nhánh nên làm mất màu dung dịch $Br_2$ và dung dịch $KMnO_4$ ngay ở nhiệt độ thường, có phản ứng trùng hợp tạo polystyrene (PS).',
    category: 'arene'
  },
  {
    id: 'fc-17-13',
    lessonId: 'bai-17',
    front: 'Naphthalene có công thức phân tử và trạng thái vật lí thế nào?',
    back: 'CTPT $C_{10}H_8$, là chất rắn màu trắng, có mùi măng xông/băng phiến đặc trưng.',
    category: 'arene'
  },
  {
    id: 'fc-17-14',
    lessonId: 'bai-17',
    front: 'Tác hại đối với sức khoẻ của benzene là gì?',
    back: 'Benzene là chất độc, tiếp xúc lâu ngày có thể gây ung thư máu và tổn thương tủy xương. Cần hạn chế tiếp xúc trực tiếp.',
    category: 'arene'
  },
  {
    id: 'fc-17-15',
    lessonId: 'bai-17',
    front: 'Trong công nghiệp, arene được điều chế chủ yếu từ nguồn nào?',
    back: 'Từ quá trình reforming phân đoạn dầu mỏ chứa các alkane/cycloalkane $C_6-C_8$ và chưng cất nhựa than đá.',
    category: 'arene'
  }
];

export const lesson17Quizzes: QuizQuestion[] = [
  {
    id: 'q-17-1',
    lessonId: 'bai-17',
    question: 'Công thức tổng quát của dãy đồng đẳng benzene là gì?',
    options: [
      { id: 'A', text: '$C_n H_{2n+2}$ ($n \\ge 1$)' },
      { id: 'B', text: '$C_n H_{2n}$ ($n \\ge 2$)' },
      { id: 'C', text: '$C_n H_{2n-2}$ ($n \\ge 2$)' },
      { id: 'D', text: '$C_n H_{2n-6}$ ($n \\ge 6$)' }
    ],
    correctAnswer: 'D',
    explanation: 'Dãy đồng đẳng của benzene có CTTQ là $C_n H_{2n-6}$ ($n \\ge 6$).',
    difficulty: 'NhanBiet',
    source: 'SGK Hoá học 11 - Bài 17'
  },
  {
    id: 'q-17-2',
    lessonId: 'bai-17',
    question: 'Tên gọi của gốc $C_6H_5-CH_2-$ là gì?',
    options: [
      { id: 'A', text: 'Phenyl' },
      { id: 'B', text: 'Benzyl' },
      { id: 'C', text: 'Methyl' },
      { id: 'D', text: 'Vinyl' }
    ],
    correctAnswer: 'B',
    explanation: 'Gốc $C_6H_5-$ gọi là phenyl; gốc $C_6H_5-CH_2-$ gọi là benzyl.',
    difficulty: 'NhanBiet',
    source: 'SGK Hoá học 11 - Bài 17'
  },
  {
    id: 'q-17-3',
    lessonId: 'bai-17',
    question: 'Chất nào sau đây làm mất màu dung dịch $KMnO_4$ khi đun nóng nhưng không làm mất màu ở nhiệt độ thường?',
    options: [
      { id: 'A', text: 'Benzene' },
      { id: 'B', text: 'Toluene' },
      { id: 'C', text: 'Styrene' },
      { id: 'D', text: 'Ethene' }
    ],
    correctAnswer: 'B',
    explanation: 'Toluene ($C_6H_5CH_3$) không làm mất màu $KMnO_4$ ở đk thường, nhưng làm mất màu $KMnO_4$ khi đun nóng tạo $C_6H_5COOK$.',
    difficulty: 'ThongHieu',
    source: 'SGK Hoá học 11 - Bài 17'
  },
  {
    id: 'q-17-4',
    lessonId: 'bai-17',
    question: 'Cho toluene tác dụng với $Br_2$ khan tỉ lệ 1:1 xúc tác $FeBr_3, t^\\circ$, sản phẩm chính thu được là gì?',
    options: [
      { id: 'A', text: 'm-bromotoluene' },
      { id: 'B', text: 'o-bromotoluene và p-bromotoluene' },
      { id: 'C', text: 'Benzyl bromide' },
      { id: 'D', text: 'Bromobenzene' }
    ],
    correctAnswer: 'B',
    explanation: 'Nhóm alkyl ($-CH_3$) định hướng phản ứng thế tiếp theo vào các vị trí ortho và para $\\Rightarrow$ Thu được hỗn hợp o-bromotoluene và p-bromotoluene.',
    difficulty: 'ThongHieu',
    source: 'SGK Hoá học 11 - Bài 17'
  },
  {
    id: 'q-17-5',
    lessonId: 'bai-17',
    question: 'Thuốc nổ TNT được điều chế trực tiếp từ phản ứng nitro hoá chất nào?',
    options: [
      { id: 'A', text: 'Benzene' },
      { id: 'B', text: 'Toluene' },
      { id: 'C', text: 'Styrene' },
      { id: 'D', text: 'Naphthalene' }
    ],
    correctAnswer: 'B',
    explanation: 'TNT (2,4,6-trinitrotoluene) được điều chế bằng phản ứng nitro hoá toluene với dung dịch $HNO_3$ đặc dư có mặt $H_2SO_4$ đặc.',
    difficulty: 'NhanBiet',
    source: 'SGK Hoá học 11 - Bài 17'
  },
  {
    id: 'q-17-6',
    lessonId: 'bai-17',
    question: 'Chất nào sau đây ở trạng thái rắn ở điều kiện thường?',
    options: [
      { id: 'A', text: 'Benzene' },
      { id: 'B', text: 'Toluene' },
      { id: 'C', text: 'Styrene' },
      { id: 'D', text: 'Naphthalene' }
    ],
    correctAnswer: 'D',
    explanation: 'Naphthalene ($C_{10}H_8$) là chất rắn màu trắng có mùi đặc trưng.',
    difficulty: 'NhanBiet',
    source: 'SBT Hoá học 11 - Bài 17'
  },
  {
    id: 'q-17-7',
    lessonId: 'bai-17',
    question: 'Phản ứng cộng $3Cl_2$ vào benzene dưới tác dụng của ánh sáng tử ngoại (UV) thu được hợp chất nào?',
    options: [
      { id: 'A', text: 'Chlorobenzene' },
      { id: 'B', text: '1,2-dichlorobenzene' },
      { id: 'C', text: '1,2,3,4,5,6-hexachlorocyclohexane' },
      { id: 'D', text: 'Hexachlorobenzene' }
    ],
    correctAnswer: 'C',
    explanation: 'Cộng $3Cl_2$ làm đứt hệ liên kết $\\pi$ trong vòng benzene tạo $C_6H_6Cl_6$ (1,2,3,4,5,6-hexachlorocyclohexane).',
    difficulty: 'ThongHieu',
    source: 'SGK Hoá học 11 - Bài 17'
  },
  {
    id: 'q-17-8',
    lessonId: 'bai-17',
    question: 'Styrene có công thức phân tử là gì?',
    options: [
      { id: 'A', text: '$C_6H_6$' },
      { id: 'B', text: '$C_7H_8$' },
      { id: 'C', text: '$C_8H_8$' },
      { id: 'D', text: '$C_{10}H_8$' }
    ],
    correctAnswer: 'C',
    explanation: 'Styrene (vinylbenzene) có công thức $C_6H_5-CH=CH_2$, CTPT là $C_8H_8$.',
    difficulty: 'NhanBiet',
    source: 'SGK Hoá học 11 - Bài 17'
  },
  {
    id: 'q-17-9',
    lessonId: 'bai-17',
    question: 'Ứng dụng chính của styrene trong công nghiệp là để sản xuất vật liệu gì?',
    options: [
      { id: 'A', text: 'Thuốc trừ sâu' },
      { id: 'B', text: 'Polystyrene (PS)' },
      { id: 'C', text: 'Phân bón' },
      { id: 'D', text: 'Thuốc nổ' }
    ],
    correctAnswer: 'B',
    explanation: 'Styrene trùng hợp tạo polymer polystyrene (PS) làm chất dẻo và xốp cách nhiệt.',
    difficulty: 'NhanBiet',
    source: 'SGK Hoá học 11 - Bài 17'
  },
  {
    id: 'q-17-10',
    lessonId: 'bai-17',
    question: 'Số đồng phân chứa vòng benzene ứng với công thức phân tử $C_8H_{10}$ là bao nhiêu?',
    options: [
      { id: 'A', text: '2' },
      { id: 'B', text: '3' },
      { id: 'C', text: '4' },
      { id: 'D', text: '5' }
    ],
    correctAnswer: 'C',
    explanation: '$C_8H_{10}$ có 4 đồng phân arene: ethylbenzene, o-xylene, m-xylene và p-xylene.',
    difficulty: 'ThongHieu',
    source: 'SBT Hoá học 11 - Bài 17'
  }
];
