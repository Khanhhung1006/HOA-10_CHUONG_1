import { TheorySectionData, Flashcard, QuizQuestion } from '../../types';

export const lesson23Theory: TheorySectionData = {
  id: 'bai-23',
  chapterId: 'chuong-6',
  title: 'Bài 23: Hợp chất carbonyl',
  objectives: [
    'Nêu được khái niệm hợp chất carbonyl (aldehyde và ketone).',
    'Gọi được tên theo danh pháp thay thế một số hợp chất carbonyl đơn giản ($C_1 - C_5$), tên thông thường một vài hợp chất carbonyl thường gặp.',
    'Mô tả được đặc điểm liên kết của nhóm chức carbonyl, hình dạng phân tử của methanal, ethanal.',
    'Nêu được đặc điểm về tính chất vật lí (trạng thái, nhiệt độ sôi, tính tan) của hợp chất carbonyl.',
    'Trình bày được tính chất hoá học của aldehyde, ketone: phản ứng khử (với $NaBH_4$ hoặc $LiAlH_4$), phản ứng oxi hoá aldehyde (với nước bromine, thuốc thử Tollens, $Cu(OH)_2/OH^-$), phản ứng cộng vào nhóm carbonyl (với $HCN$), phản ứng tạo iodoform.',
    'Thực hiện được (hoặc quan sát qua video/mô tả) các thí nghiệm: phản ứng tráng bạc, phản ứng với $Cu(OH)_2/OH^-$, phản ứng tạo iodoform từ acetone.',
    'Trình bày được ứng dụng của hợp chất carbonyl và phương pháp điều chế acetaldehyde bằng cách oxi hoá ethylene, điều chế acetone từ cumene.'
  ],
  summary: 'Hợp chất carbonyl gồm aldehyde và ketone, đều chứa nhóm chức $>C=O$ phân cực. Aldehyde vừa có tính oxi hoá (bị khử thành alcohol bậc I) vừa có tính khử (bị oxi hoá bởi $Br_2, Tollens, Cu(OH)_2/OH^-$ thành carboxylic acid/muối). Ketone bị khử thành alcohol bậc II, không bị oxi hoá bởi thuốc thử Tollens hay $Cu(OH)_2$. Cả aldehyde và ketone đều tham gia phản ứng cộng $HCN$; những chất chứa nhóm $CH_3-C(=O)-$ tham gia phản ứng iodoform tạo kết tủa vàng $CHI_3$.',
  coreKnowledge: [
    {
      heading: '1. Khái niệm & Danh pháp hợp chất carbonyl',
      points: [
        'Hợp chất carbonyl là các hợp chất hữu cơ trong phân tử có chứa nhóm chức carbonyl ($>C=O$). Nhóm carbonyl có trong aldehyde, ketone,...',
        'Aldehyde là hợp chất hữu cơ có nhóm $-CHO$ liên kết trực tiếp với nguyên tử carbon (trong gốc hydrocarbon hoặc nhóm $-CHO$) hoặc nguyên tử hydrogen.',
        'Ketone là hợp chất hữu cơ có nhóm $>C=O$ liên kết với hai gốc hydrocarbon.',
        'Danh pháp thay thế của Aldehyde đơn chức: Tên hydrocarbon tương ứng (bỏ e) + "al". Đánh số C bắt đầu từ nhóm $-CHO$. Ví dụ: $HCHO$ (methanal/formaldehyde/formol), $CH_3CHO$ (ethanal/acetaldehyde), $CH_3CH_2CHO$ (propanal), $CH_3CH_2CH_2CHO$ (butanal), $CH_3CH(CH_3)CH_2CHO$ (3-methylbutanal), $C_6H_5CHO$ (benzaldehyde).',
        'Danh pháp thay thế của Ketone đơn chức: Tên hydrocarbon tương ứng (bỏ e) + "vị trí nhóm C=O" + "one". Đánh số C từ phía gần nhóm $>C=O$ hơn. Ví dụ: $CH_3COCH_3$ (propanone/acetone), $CH_3COCH_2CH_3$ (butanone), $CH_3COCH_2CH_2CH_3$ (pentan-2-one).'
      ],
      latexEquations: [
        '\\text{Aldehyde đơn chức: } R-CHO \\quad (R \\text{ là H hoặc gốc hydrocarbon})',
        '\\text{Ketone: } R-CO-R\' \\quad (R, R\' \\text{ là các gốc hydrocarbon})'
      ]
    },
    {
      heading: '2. Đặc điểm cấu tạo & Tính chất vật lí',
      points: [
        'Liên kết đôi $C=O$ gồm một liên kết $\\sigma$ và một liên kết $\\pi$. Liên kết $C=O$ phân cực mạnh về phía nguyên tử oxygen ($\ me{C}^{\\delta+} = \\text{O}^{\\delta-}$). Góc liên kết xung quanh carbon carbonyl khoảng $120^\\circ$.',
        'Trạng thái: $HCHO$ và $CH_3CHO$ là chất khí ở nhiệt độ phòng. Các hợp chất carbonyl khác là chất lỏng hoặc chất rắn.',
        'Tính tan: Các hợp chất carbonyl có mạch carbon ngắn ($HCHO, CH_3CHO, CH_3COCH_3$) tan vô hạn trong nước nhờ khả năng tạo liên kết hydrogen với phân tử nước. Độ tan giảm dần khi số nguyên tử C tăng.',
        'Nhiệt độ sôi: Cao hơn các hydrocarbon có phân tử khối tương đương (do phân tử phân cực) nhưng thấp hơn các alcohol tương ứng (do giữa các phân tử carbonyl không tạo được liên kết hydrogen liên phân tử).'
      ]
    },
    {
      heading: '3. Tính chất hoá học',
      points: [
        'a) Phản ứng khử: Tác nhân khử $NaBH_4$ hoặc $LiAlH_4$ (kí hiệu $[H]$) khử aldehyde thành alcohol bậc I, khử ketone thành alcohol bậc II.',
        'b) Phản ứng oxi hoá aldehyde: Aldehyde dễ bị oxi hoá bởi nước $Br_2$, thuốc thử Tollens ($[Ag(NH_3)_2]OH$) tạo tráng bạc $Ag\\downarrow$, và $Cu(OH)_2/OH^-$ đun nóng tạo kết tủa đỏ gạch $Cu_2O\\downarrow$. Ketone không có các phản ứng này.',
        'c) Phản ứng cộng $HCN$: HCN cộng vào liên kết $C=O$ của aldehyde hoặc ketone tạo sản phẩm cyanohydrin.',
        'd) Phản ứng tạo iodoform: Các aldehyde/ketone có chứa nhóm $CH_3-C(=O)-$ tác dụng với $I_2$ trong môi trường kiềm ($NaOH$) tạo kết tủa vàng iodoform ($CHI_3\\downarrow$) có mùi đặc trưng.'
      ],
      latexEquations: [
        'R-CHO + 2[H] \\xrightarrow{NaBH_4} R-CH_2OH \\quad (\\text{Alcohol bậc I})',
        'R-CO-R\' + 2[H] \\xrightarrow{NaBH_4} R-CH(OH)-R\' \\quad (\\text{Alcohol bậc II})',
        'R-CHO + Br_2 + H_2O \\rightarrow R-COOH + 2HBr',
        'R-CHO + 2[Ag(NH_3)_2]OH \\xrightarrow{t^\\circ} R-COONH_4 + 2Ag\\downarrow + 3NH_3 + H_2O',
        'R-CHO + 2Cu(OH)_2 + NaOH \\xrightarrow{t^\\circ} R-COONa + Cu_2O\\downarrow + 3H_2O',
        'CH_3CHO + 3I_2 + 4NaOH \\rightarrow HCOONa + CHI_3\\downarrow + 3NaI + 3H_2O',
        'R-CO-CH_3 + 3I_2 + 4NaOH \\rightarrow R-COONa + CHI_3\\downarrow + 3NaI + 3H_2O'
      ]
    },
    {
      heading: '4. Ứng dụng & Điều chế',
      points: [
        'Ứng dụng: Formaldehyde dùng sản xuất nhựa (phenol-formaldehyde, melamine), keo dán gỗ, dung dịch formol (37-40%) dùng ngâm xác, bảo quản mẫu sinh học. Acetaldehyde sản xuất acetic acid, acetic anhydride. Acetone làm dung môi công nghiệp hoà tan nhựa, sơn móng tay, sản xuất bisphenol-A.',
        'Điều chế trong công nghiệp: Oxi hoá ethylene bằng oxygen với xúc tác $PdCl_2, CuCl_2$ thu được acetaldehyde. Oxi hoá cumene thu được đồng thời phenol và acetone.'
      ],
      latexEquations: [
        '2CH_2=CH_2 + O_2 \\xrightarrow{PdCl_2, CuCl_2} 2CH_3CHO',
        '\\text{Cumene} \\xrightarrow{1. O_2, 2. H_2SO_4} \\text{Phenol} + \\text{Acetone}'
      ]
    }
  ],
  formulas: [
    {
      name: 'Công thức Aldehyde đơn chức',
      latex: 'C_n H_{2n+1}CHO \\quad (n \\ge 0) \\quad \\text{hoặc} \\quad C_n H_{2n}O \\quad (n \\ge 1)',
      description: 'Aldehyde no, đơn chức, mạch hở'
    },
    {
      name: 'Công thức Ketone đơn chức',
      latex: 'C_n H_{2n+1}COC_m H_{2m+1} \\quad \\text{hoặc} \\quad C_n H_{2n}O \\quad (n \\ge 3)',
      description: 'Ketone no, đơn chức, mạch hở'
    },
    {
      name: 'Phản ứng tráng bạc tỉ lệ Ag',
      latex: 'R-CHO \\xrightarrow{Tollens, t^\\circ} 2Ag\\downarrow \\quad (\\text{Riêng } HCHO \\rightarrow 4Ag\\downarrow)',
      description: '1 mol RCHO cho 2 mol Ag (riêng HCHO cho 4 mol Ag)'
    }
  ],
  keyConcepts: [
    {
      term: 'Hợp chất carbonyl',
      definition: 'Hợp chất hữu cơ trong phân tử chứa nhóm chức carbonyl (>C=O), bao gồm aldehyde và ketone.'
    },
    {
      term: 'Dung dịch Formol (Formalin)',
      definition: 'Dung dịch chứa 37 - 40% formaldehyde trong nước, có tính sát trùng mạnh, dùng ngâm bảo quản mẫu sinh học.'
    },
    {
      term: 'Thuốc thử Tollens',
      definition: 'Dung dịch chứa phức ion [Ag(NH3)2]+ trong môi trường kiềm NH3, dùng để nhận biết aldehyde qua phản ứng tráng bạc.'
    },
    {
      term: 'Phản ứng Iodoform',
      definition: 'Phản ứng của aldehyde/ketone có nhóm CH3-C(=O)- với I2/NaOH tạo kết tủa vàng CHI3.'
    }
  ],
  examples: [
    {
      title: 'Ví dụ 1: Nhận biết Aldehyde và Ketone',
      content: 'Trình bày phương pháp hoá học nhận biết 2 chất lỏng mất nhãn: propanal ($CH_3CH_2CHO$) và propanone ($CH_3COCH_3$).',
      solution: 'Dùng thuốc thử Tollens ($AgNO_3/NH_3$, đun nóng):\n- Mẫu thử xuất hiện lớp bạc sáng bóng bám vào thành ống nghiệm là propanal: $CH_3CH_2CHO + 2[Ag(NH_3)_2]OH \\xrightarrow{t^\\circ} CH_3CH_2COONH_4 + 2Ag\\downarrow + 3NH_3 + H_2O$.\n- Mẫu thử không có hiện tượng là propanone.'
    },
    {
      title: 'Ví dụ 2: Bài toán tráng bạc',
      content: 'Cho 3,0 gam một aldehyde no, đơn chức, mạch hở X phản ứng hoàn toàn với dung dịch $AgNO_3/NH_3$ dư, đun nóng thu được 21,6 gam Ag. Xác định công thức cấu tạo của X.',
      solution: 'Số mol $Ag = \\frac{21,6}{108} = 0,2 \\text{ mol}$.\n- Trường hợp 1: X không phải HCHO. Số mol $X = \\frac{1}{2} n_{Ag} = 0,1 \\text{ mol} \\Rightarrow M_X = \\frac{3,0}{0,1} = 30 \\text{ g/mol}$.\nCông thức $R-CHO \\Rightarrow R + 29 = 30 \\Rightarrow R = 1 \\text{ (H)} \\Rightarrow HCHO$ (Trái với giả thiết X không phải HCHO).\n- Trường hợp 2: X là HCHO ($M = 30 \\text{ g/mol}$). Ta có $n_{HCHO} = \\frac{3,0}{30} = 0,1 \\text{ mol} \\Rightarrow n_{Ag} = 4 \\times 0,1 = 0,4 \\text{ mol} \\Rightarrow m_{Ag} = 43,2 \\text{ g}$ (Không phù hợp).\nVậy phải xét aldehyde $RCHO$ có $M = 30$ chính là $HCHO$ phản ứng theo tỉ lệ $1 : 4$? Không, kiểm tra lại: Nếu $n_X = 0,05 \\text{ mol} \\Rightarrow M_X = \\frac{3,0}{0,05} = 60 \\text{ (propanal } C_2H_5CHO \\text{ có } M = 58)$.\nNhư vậy với $m = 4,4 \\text{ g} \\rightarrow M = 44 \\text{ (CH3CHO)}$. Với $3,0 \\text{ g}$ và $0,2 \\text{ mol Ag} \\Rightarrow M_RCHO = 30 \\text{ (HCHO)}$.'
    }
  ],
  commonMistakes: [
    {
      mistake: 'Cho rằng ketone cũng có phản ứng tráng bạc với thuốc thử Tollens.',
      correction: 'Ketone KHÔNG bị oxi hoá bởi thuốc thử Tollens hay Cu(OH)2/OH-. Chỉ có aldehyde mới tham gia các phản ứng này.',
      why: 'Trong phân tử ketone, nhóm >C=O liên kết với 2 gốc hydrocarbon nên không có nguyên tử H gắn trực tiếp vào carbon carbonyl như aldehyde.'
    },
    {
      mistake: 'Quên trường hợp đặc biệt của HCHO trong phản ứng tráng bạc.',
      correction: '1 mol HCHO phản ứng tráng bạc thu được 4 mol Ag, trong khi các aldehyde đơn chức khác chỉ cho 2 mol Ag.',
      why: 'Sản phẩm đầu tiên (HCOONH4) vẫn chứa nhóm -CHO nên tiếp tục bị oxi hoá bởi thuốc thử Tollens tạo (NH4)2CO3.'
    }
  ],
  memoryTips: [
    'Aldehyde vừa Khử vừa Oxi hoá; Ketone chỉ Khử, không tráng bạc.',
    'Tráng bạc: 1 Aldehyde đơn ra 2 Ag (Riêng HCHO ra 4 Ag).',
    'Iodoform: nhóm CH3-C(=O)- tạo tủa vàng CHI3.'
  ],
  glossary: [
    {
      term: 'Formol',
      meaning: 'Dung dịch formaldehyde 37-40% trong nước.'
    },
    {
      term: 'Cyanohydrin',
      meaning: 'Sản phẩm cộng của HCN vào nhóm carbonyl >C=O.'
    },
    {
      term: 'Iodoform',
      meaning: 'Triiodomethane (CHI3), chất rắn kết tủa màu vàng, có mùi đặc trưng.'
    }
  ],
  reviewChecklist: [
    'Phân biệt được cấu tạo aldehyde ($RCHO$) và ketone ($R-CO-R\').',
    'Gọi đúng tên thay thế của $HCHO, CH_3CHO, CH_3COCH_3$.',
    'Viết đúng phương trình phản ứng khử bởi $NaBH_4$.',
    'Viết đúng phương trình tráng bạc và phản ứng với $Cu(OH)_2/OH^-$.',
    'Nhận biết phản ứng iodoform của các hợp chất có nhóm $CH_3-C(=O)-$.'
  ]
};

export const lesson23Flashcards: Flashcard[] = [
  {
    id: 'fc-23-1',
    lessonId: 'bai-23',
    front: 'Hợp chất carbonyl là gì?',
    back: 'Là hợp chất hữu cơ trong phân tử chứa nhóm chức carbonyl ($>C=O$). Gồm aldehyde và ketone.',
    category: 'carbonyl'
  },
  {
    id: 'fc-23-2',
    lessonId: 'bai-23',
    front: 'Phân biệt Aldehyde và Ketone về mặt cấu tạo?',
    back: 'Aldehyde có nhóm $-CHO$ liên kết với H hoặc gốc hydrocarbon ($R-CHO$). Ketone có nhóm $>C=O$ liên kết với 2 gốc hydrocarbon ($R-CO-R\').',
    category: 'carbonyl'
  },
  {
    id: 'fc-23-3',
    lessonId: 'bai-23',
    front: 'Tên thay thế của $HCHO$ và $CH_3CHO$ là gì?',
    back: '$HCHO$: methanal (tên thông thường: formaldehyde, dung dịch 37-40% là formol).\n$CH_3CHO$: ethanal (acetaldehyde).',
    category: 'carbonyl'
  },
  {
    id: 'fc-23-4',
    lessonId: 'bai-23',
    front: 'Tên thay thế của $CH_3COCH_3$ là gì?',
    back: 'Propanone (tên thông thường: acetone).',
    category: 'carbonyl'
  },
  {
    id: 'fc-23-5',
    lessonId: 'bai-23',
    front: 'Nhiệt độ sôi của hợp chất carbonyl so với alcohol và hydrocarbon tương đương?',
    back: 'Hydrocarbon < Aldehyde/Ketone < Alcohol. (Do carbonyl phân cực nhưng không tạo liên kết hydrogen liên phân tử như alcohol).',
    category: 'carbonyl'
  },
  {
    id: 'fc-23-6',
    lessonId: 'bai-23',
    front: 'Sản phẩm khi khử Aldehyde bằng $NaBH_4$ hoặc $LiAlH_4$?',
    back: 'Tạo thành alcohol bậc I: $R-CHO + 2[H] \\xrightarrow{NaBH_4} R-CH_2OH$.',
    category: 'carbonyl'
  },
  {
    id: 'fc-23-7',
    lessonId: 'bai-23',
    front: 'Sản phẩm khi khử Ketone bằng $NaBH_4$ hoặc $LiAlH_4$?',
    back: 'Tạo thành alcohol bậc II: $R-CO-R\' + 2[H] \\xrightarrow{NaBH_4} R-CH(OH)-R\'.',
    category: 'carbonyl'
  },
  {
    id: 'fc-23-8',
    lessonId: 'bai-23',
    front: 'Hiện tượng phản ứng tráng bạc của Aldehyde với thuốc thử Tollens?',
    back: 'Xuất hiện lớp bạc kim loại $Ag\\downarrow$ sáng bóng bám vào thành ống nghiệm.',
    category: 'carbonyl'
  },
  {
    id: 'fc-23-9',
    lessonId: 'bai-23',
    front: 'Tỉ lệ mol $Ag$ thu được khi tráng bạc 1 mol Aldehyde đơn chức?',
    back: '1 mol $RCHO$ cho 2 mol $Ag\\downarrow$. Riêng 1 mol $HCHO$ cho 4 mol $Ag\\downarrow$.',
    category: 'carbonyl'
  },
  {
    id: 'fc-23-10',
    lessonId: 'bai-23',
    front: 'Ketone có phản ứng tráng bạc không?',
    back: 'Không. Ketone không bị oxi hoá bởi thuốc thử Tollens.',
    category: 'carbonyl'
  },
  {
    id: 'fc-23-11',
    lessonId: 'bai-23',
    front: 'Hiện tượng Aldehyde tác dụng với $Cu(OH)_2$ trong $NaOH$ đun nóng?',
    back: 'Tạo kết tủa màu đỏ gạch $Cu_2O\\downarrow$.',
    category: 'carbonyl'
  },
  {
    id: 'fc-23-12',
    lessonId: 'bai-23',
    front: 'Phản ứng cộng $HCN$ vào nhóm carbonyl tạo ra hợp chất gì?',
    back: 'Tạo ra sản phẩm cyanohydrin chứa nhóm $-OH$ và nhóm $-CN$.',
    category: 'carbonyl'
  },
  {
    id: 'fc-23-13',
    lessonId: 'bai-23',
    front: 'Điều kiện để aldehyde/ketone tham gia phản ứng iodoform?',
    back: 'Phải chứa nhóm $CH_3-C(=O)-$ liên kết trực tiếp với H hoặc C. Tác dụng với $I_2/NaOH$ tạo tủa vàng $CHI_3\\downarrow$.',
    category: 'carbonyl'
  },
  {
    id: 'fc-23-14',
    lessonId: 'bai-23',
    front: 'Ứng dụng chính của Formaldehyde?',
    back: 'Sản xuất nhựa phenol-formaldehyde, keo dán gỗ, dung dịch formol ngâm bảo quản mẫu sinh học.',
    category: 'carbonyl'
  },
  {
    id: 'fc-23-15',
    lessonId: 'bai-23',
    front: 'Phương pháp công nghiệp sản xuất Acetaldehyde từ Ethylene?',
    back: 'Oxi hoá ethylene bằng $O_2$ xúc tác $PdCl_2, CuCl_2$: $2CH_2=CH_2 + O_2 \\rightarrow 2CH_3CHO$.',
    category: 'carbonyl'
  }
];

export const lesson23Quizzes: QuizQuestion[] = [
  {
    id: 'qz-23-1',
    lessonId: 'bai-23',
    question: 'Hợp chất nào sau đây là một aldehyde?',
    options: [
      { id: 'A', text: '$CH_3COOH$' },
      { id: 'B', text: '$CH_3CHO$' },
      { id: 'C', text: '$CH_3COCH_3$' },
      { id: 'D', text: '$CH_3CH_2OH$' }
    ],
    correctAnswer: 'B',
    explanation: '$CH_3CHO$ chứa nhóm $-CHO$ liên kết với gốc $CH_3$, thuộc loại aldehyde (ethanal).',
    difficulty: 'NhanBiet',
    source: 'SGK Hoá 11 - Bài 23'
  },
  {
    id: 'qz-23-2',
    lessonId: 'bai-23',
    question: 'Tên thay thế của chất $CH_3COCH_3$ là',
    options: [
      { id: 'A', text: 'propanal' },
      { id: 'B', text: 'acetone' },
      { id: 'C', text: 'propanone' },
      { id: 'D', text: 'ethyl methyl ether' }
    ],
    correctAnswer: 'C',
    explanation: '$CH_3COCH_3$ gồm 3 carbon, nhóm $>C=O$ ở vị trí 2, tên thay thế là propanone (acetone là tên thông thường).',
    difficulty: 'NhanBiet',
    source: 'SGK Hoá 11 - Bài 23'
  },
  {
    id: 'qz-23-3',
    lessonId: 'bai-23',
    question: 'Tên gọi của aldehyde $HCHO$ là',
    options: [
      { id: 'A', text: 'ethanal' },
      { id: 'B', text: 'methanal' },
      { id: 'C', text: 'propanal' },
      { id: 'D', text: 'butanal' }
    ],
    correctAnswer: 'B',
    explanation: '$HCHO$ chứa 1 carbon, tên thay thế là methanal (tên thông thường là formaldehyde).',
    difficulty: 'NhanBiet',
    source: 'SGK Hoá 11 - Bài 23'
  },
  {
    id: 'qz-23-4',
    lessonId: 'bai-23',
    question: 'Dung dịch formol (formalin) chứa chất nào sau đây?',
    options: [
      { id: 'A', text: '$CH_3CHO$ 37-40%' },
      { id: 'B', text: '$HCHO$ 37-40%' },
      { id: 'C', text: '$CH_3COCH_3$ 10%' },
      { id: 'D', text: '$CH_3COOH$ 5%' }
    ],
    correctAnswer: 'B',
    explanation: 'Formol (formalin) là dung dịch chứa khoảng 37 - 40% formaldehyde ($HCHO$) trong nước.',
    difficulty: 'NhanBiet',
    source: 'SGK Hoá 11 - Bài 23'
  },
  {
    id: 'qz-23-5',
    lessonId: 'bai-23',
    question: 'Khử chất nào sau đây bằng $NaBH_4$ thu được propan-2-ol?',
    options: [
      { id: 'A', text: '$CH_3CH_2CHO$' },
      { id: 'B', text: '$CH_3COCH_3$' },
      { id: 'C', text: '$HCHO$' },
      { id: 'D', text: '$CH_3CHO$' }
    ],
    correctAnswer: 'B',
    explanation: 'Khử ketone $CH_3COCH_3$ (propanone) thu được alcohol bậc II là propan-2-ol ($CH_3CH(OH)CH_3$).',
    difficulty: 'ThongHieu',
    source: 'SGK Hoá 11 - Bài 23'
  },
  {
    id: 'qz-23-6',
    lessonId: 'bai-23',
    question: 'Phản ứng nào sau đây chứng minh aldehyde có tính khử?',
    options: [
      { id: 'A', text: 'Khử aldehyde bằng $NaBH_4$' },
      { id: 'B', text: 'Cộng $HCN$ vào nhóm $-CHO$' },
      { id: 'C', text: 'Oxi hoá aldehyde bằng thuốc thử Tollens' },
      { id: 'D', text: 'Tác dụng của aldehyde với $H_2$' }
    ],
    correctAnswer: 'C',
    explanation: 'Trong phản ứng tráng bạc với thuốc thử Tollens, aldehyde bị oxi hoá thành muối carboxylate ($R-CHO \\rightarrow R-COONH_4$), thể hiện tính khử.',
    difficulty: 'ThongHieu',
    source: 'SBT Hoá 11 - Bài 23'
  },
  {
    id: 'qz-23-7',
    lessonId: 'bai-23',
    question: 'Khi đun nóng $CH_3CHO$ với dung dịch $Cu(OH)_2$ trong $NaOH$, xuất hiện kết tủa màu',
    options: [
      { id: 'A', text: 'xanh thẫm' },
      { id: 'B', text: 'trắng' },
      { id: 'C', text: 'vàng' },
      { id: 'D', text: 'đỏ gạch' }
    ],
    correctAnswer: 'D',
    explanation: 'Phản ứng sinh ra $Cu_2O\\downarrow$ có màu đỏ gạch: $CH_3CHO + 2Cu(OH)_2 + NaOH \\xrightarrow{t^\\circ} CH_3COONa + Cu_2O\\downarrow + 3H_2O$.',
    difficulty: 'NhanBiet',
    source: 'SGK Hoá 11 - Bài 23'
  },
  {
    id: 'qz-23-8',
    lessonId: 'bai-23',
    question: 'Thuốc thử dùng để phân biệt propanal ($CH_3CH_2CHO$) và propanone ($CH_3COCH_3$) là',
    options: [
      { id: 'A', text: 'dung dịch $NaOH$' },
      { id: 'B', text: 'thuốc thử Tollens ($AgNO_3/NH_3$)' },
      { id: 'C', text: 'quỳ tím' },
      { id: 'D', text: 'kim loại $Na$' }
    ],
    correctAnswer: 'B',
    explanation: 'Propanal là aldehyde nên tham gia phản ứng tráng bạc tạo $Ag\\downarrow$, còn propanone là ketone không phản ứng.',
    difficulty: 'ThongHieu',
    source: 'SBT Hoá 11 - Bài 23'
  },
  {
    id: 'qz-23-9',
    lessonId: 'bai-23',
    question: 'Chất nào sau đây THAM GIA phản ứng iodoform tạo kết tủa vàng $CHI_3$?',
    options: [
      { id: 'A', text: '$HCHO$' },
      { id: 'B', text: '$CH_3CHO$' },
      { id: 'C', text: '$CH_3CH_2CHO$' },
      { id: 'D', text: '$C_6H_5CHO$' }
    ],
    correctAnswer: 'B',
    explanation: '$CH_3CHO$ có nhóm $CH_3-C(=O)-$ nên tác dụng với $I_2/NaOH$ tạo kết tủa vàng $CHI_3$.',
    difficulty: 'ThongHieu',
    source: 'SGK Hoá 11 - Bài 23'
  },
  {
    id: 'qz-23-10',
    lessonId: 'bai-23',
    question: 'Cho 4,4 gam acetaldehyde ($CH_3CHO$) tráng bạc hoàn toàn với dung dịch $AgNO_3/NH_3$ dư, khối lượng Ag thu được là',
    options: [
      { id: 'A', text: '10,8 gam' },
      { id: 'B', text: '21,6 gam' },
      { id: 'C', text: '43,2 gam' },
      { id: 'D', text: '32,4 gam' }
    ],
    correctAnswer: 'B',
    explanation: '$n_{CH_3CHO} = \\frac{4,4}{44} = 0,1 \\text{ mol}$. $CH_3CHO \\rightarrow 2Ag\\downarrow \\Rightarrow n_{Ag} = 0,2 \\text{ mol} \\Rightarrow m_{Ag} = 0,2 \\times 108 = 21,6 \\text{ gam}$.',
    difficulty: 'VanDung',
    source: 'SBT Hoá 11 - Bài 23'
  },
  {
    id: 'qz-23-11',
    lessonId: 'bai-23',
    question: 'Công thức phân tử tổng quát của aldehyde no, đơn chức, mạch hở là',
    options: [
      { id: 'A', text: '$C_n H_{2n-2}O$' },
      { id: 'B', text: '$C_n H_{2n}O_2$' },
      { id: 'C', text: '$C_n H_{2n}O \\quad (n \\ge 1)$' },
      { id: 'D', text: '$C_n H_{2n+2}O$' }
    ],
    correctAnswer: 'C',
    explanation: 'Aldehyde no, đơn chức, mạch hở có công thức $C_n H_{2n+1}CHO \\equiv C_n H_{2n}O$ với $n \\ge 1$.',
    difficulty: 'NhanBiet',
    source: 'SGK Hoá 11 - Bài 23'
  },
  {
    id: 'qz-23-12',
    lessonId: 'bai-23',
    question: 'Góc liên kết xung quanh nguyên tử carbon carbonyl trong phân tử hợp chất carbonyl khoảng',
    options: [
      { id: 'A', text: '$109,5^\\circ$' },
      { id: 'B', text: '$120^\\circ$' },
      { id: 'C', text: '$180^\\circ$' },
      { id: 'D', text: '$90^\\circ$' }
    ],
    correctAnswer: 'B',
    explanation: 'Nguyên tử C mang nhóm carbonyl ở trạng thái lai hoá $sp^2$, dạng hình học phẳng với góc liên kết khoảng $120^\\circ$.',
    difficulty: 'NhanBiet',
    source: 'SGK Hoá 11 - Bài 23'
  },
  {
    id: 'qz-23-13',
    lessonId: 'bai-23',
    question: 'Chất nào sau đây có nhiệt độ sôi CAO NHẤT?',
    options: [
      { id: 'A', text: '$C_2H_6$' },
      { id: 'B', text: '$CH_3CHO$' },
      { id: 'C', text: '$C_2H_5OH$' },
      { id: 'D', text: '$HCHO$' }
    ],
    correctAnswer: 'C',
    explanation: '$C_2H_5OH$ có liên kết hydrogen liên phân tử nên nhiệt độ sôi cao nhất ($78,3^\\circ C$).',
    difficulty: 'ThongHieu',
    source: 'SGK Hoá 11 - Bài 23'
  },
  {
    id: 'qz-23-14',
    lessonId: 'bai-23',
    question: 'Tên thay thế của aldehyde $CH_3CH(CH_3)CH_2CHO$ là',
    options: [
      { id: 'A', text: '2-methylbutanal' },
      { id: 'B', text: '3-methylbutanal' },
      { id: 'C', text: '3-methylbutanone' },
      { id: 'D', text: 'pentanal' }
    ],
    correctAnswer: 'B',
    explanation: 'Mạch chính 4 C, đánh số từ nhóm $-CHO$ (C1), nhánh methyl ở C3 $\\rightarrow$ 3-methylbutanal.',
    difficulty: 'ThongHieu',
    source: 'SBT Hoá 11 - Bài 23'
  },
  {
    id: 'qz-23-15',
    lessonId: 'bai-23',
    question: 'Sản phẩm của phản ứng cộng $HCN$ vào ethanal ($CH_3CHO$) là',
    options: [
      { id: 'A', text: '$CH_3CH_2OH$' },
      { id: 'B', text: '$CH_3CH(OH)CN$' },
      { id: 'C', text: '$CH_3COOH$' },
      { id: 'D', text: '$CH_3CN$' }
    ],
    correctAnswer: 'B',
    explanation: '$CH_3CHO + HCN \\rightarrow CH_3CH(OH)CN$ (cyanohydrin).',
    difficulty: 'ThongHieu',
    source: 'SGK Hoá 11 - Bài 23'
  },
  {
    id: 'qz-23-16',
    lessonId: 'bai-23',
    question: 'Khử chất nào sau đây thu được alcohol bậc I?',
    options: [
      { id: 'A', text: '$CH_3COCH_3$' },
      { id: 'B', text: '$CH_3CHO$' },
      { id: 'C', text: '$CH_3COCH_2CH_3$' },
      { id: 'D', text: '$C_6H_5COCH_3$' }
    ],
    correctAnswer: 'B',
    explanation: 'Khử aldehyde ($CH_3CHO$) thu được alcohol bậc I ($CH_3CH_2OH$). Khử ketone thu được alcohol bậc II.',
    difficulty: 'ThongHieu',
    source: 'SGK Hoá 11 - Bài 23'
  },
  {
    id: 'qz-23-17',
    lessonId: 'bai-23',
    question: 'Phương pháp điều chế acetaldehyde trong công nghiệp hiện nay là',
    options: [
      { id: 'A', text: 'Oxi hoá ethanol bằng $CuO, t^\\circ$' },
      { id: 'B', text: 'Hydrate hoá acetylene xúc tác $HgSO_4$' },
      { id: 'C', text: 'Oxi hoá ethylene bằng oxygen với xúc tác $PdCl_2, CuCl_2$' },
      { id: 'D', text: 'Thuỷ phân ester' }
    ],
    correctAnswer: 'C',
    explanation: 'Trong công nghiệp, $CH_3CHO$ được sản xuất hiện đại bằng cách oxi hoá ethylene: $2CH_2=CH_2 + O_2 \\xrightarrow{PdCl_2, CuCl_2} 2CH_3CHO$.',
    difficulty: 'NhanBiet',
    source: 'SGK Hoá 11 - Bài 23'
  },
  {
    id: 'qz-23-18',
    lessonId: 'bai-23',
    question: 'Chất nào sau đây VỪA làm mất màu nước $Br_2$ VỪA tham gia phản ứng tráng bạc?',
    options: [
      { id: 'A', text: 'Propanone' },
      { id: 'B', text: 'Ethanal' },
      { id: 'C', text: 'Ethanol' },
      { id: 'D', text: 'Benzene' }
    ],
    correctAnswer: 'B',
    explanation: 'Ethanal ($CH_3CHO$) là aldehyde nên làm mất màu nước $Br_2$ ($CH_3CHO + Br_2 + H_2O \\rightarrow CH_3COOH + 2HBr$) và tráng bạc với thuốc thử Tollens.',
    difficulty: 'ThongHieu',
    source: 'SBT Hoá 11 - Bài 23'
  },
  {
    id: 'qz-23-19',
    lessonId: 'bai-23',
    question: 'Để nhận biết sự có mặt của nhóm $CH_3-C(=O)-$ trong phân tử acetone, người ta dùng phản ứng với',
    options: [
      { id: 'A', text: 'dung dịch $AgNO_3/NH_3$' },
      { id: 'B', text: 'dung dịch $I_2$ trong $NaOH$' },
      { id: 'C', text: 'dung dịch $Cu(OH)_2$' },
      { id: 'D', text: 'kim loại $Na$' }
    ],
    correctAnswer: 'B',
    explanation: 'Acetone ($CH_3COCH_3$) có nhóm $CH_3-C(=O)-$ nên phản ứng với $I_2/NaOH$ tạo kết tủa vàng $CHI_3\\downarrow$ (iodoform).',
    difficulty: 'ThongHieu',
    source: 'SGK Hoá 11 - Bài 23'
  },
  {
    id: 'qz-23-20',
    lessonId: 'bai-23',
    question: 'Tráng bạc hoàn toàn 0,1 mol $HCHO$ bằng thuốc thử Tollens dư thu được bao nhiêu mol Ag?',
    options: [
      { id: 'A', text: '0,1 mol' },
      { id: 'B', text: '0,2 mol' },
      { id: 'C', text: '0,3 mol' },
      { id: 'D', text: '0,4 mol' }
    ],
    correctAnswer: 'D',
    explanation: 'Riêng formaldehyde $HCHO \\xrightarrow{Tollens} 4Ag\\downarrow$. Do đó 0,1 mol $HCHO$ thu được $0,4 \\text{ mol Ag}$.',
    difficulty: 'VanDung',
    source: 'SBT Hoá 11 - Bài 23'
  },
  {
    id: 'qz-23-21',
    lessonId: 'bai-23',
    question: 'Chất nào sau đây được dùng làm chất đuổi muỗi, chống mối mọt cho đồ gỗ?',
    options: [
      { id: 'A', text: 'Propanone' },
      { id: 'B', text: 'Formaldehyde' },
      { id: 'C', text: 'Ethanol' },
      { id: 'D', text: 'Phenol' }
    ],
    correctAnswer: 'B',
    explanation: 'Khí formaldehyde giải phóng từ gỗ ép bít mùn gỗ có khả năng diệt vi khuẩn, chống mối mọt kiến kiến hăm.',
    difficulty: 'NhanBiet',
    source: 'SBT Hoá 11 - Bài 23'
  },
  {
    id: 'qz-23-22',
    lessonId: 'bai-23',
    question: 'Cho phản ứng: $X + 2[H] \\xrightarrow{NaBH_4} CH_3-CH_2-CH_2-OH$. Chất X là',
    options: [
      { id: 'A', text: 'propan-1-ol' },
      { id: 'B', text: 'propanal' },
      { id: 'C', text: 'propanone' },
      { id: 'D', text: 'ethanal' }
    ],
    correctAnswer: 'B',
    explanation: 'Propanal ($CH_3CH_2CHO$) bị khử bởi $NaBH_4$ tạo alcohol bậc I tương ứng là propan-1-ol ($CH_3CH_2CH_2OH$).',
    difficulty: 'ThongHieu',
    source: 'SGK Hoá 11 - Bài 23'
  },
  {
    id: 'qz-23-23',
    lessonId: 'bai-23',
    question: 'Phát biểu nào sau đây SAI khi nói về acetone ($CH_3COCH_3$)?',
    options: [
      { id: 'A', text: 'Là chất lỏng không màu, dễ bay hơi, tan vô hạn trong nước.' },
      { id: 'B', text: 'Là dung môi tốt cho nhiều chất hữu cơ như sơn, nhựa.' },
      { id: 'C', text: 'Có khả năng tham gia phản ứng tráng bạc với thuốc thử Tollens.' },
      { id: 'D', text: 'Tạo kết tủa vàng $CHI_3$ khi tác dụng với $I_2/NaOH$.' }
    ],
    correctAnswer: 'C',
    explanation: 'Acetone là ketone nên KHÔNG có phản ứng tráng bạc với thuốc thử Tollens.',
    difficulty: 'ThongHieu',
    source: 'SGK Hoá 11 - Bài 23'
  },
  {
    id: 'qz-23-24',
    lessonId: 'bai-23',
    question: 'Cho 0,1 mol aldehyde X tác dụng hoàn toàn với lượng dư $Cu(OH)_2$ trong $NaOH$ đun nóng thu được 14,4 gam $Cu_2O$. X là',
    options: [
      { id: 'A', text: '$HCHO$' },
      { id: 'B', text: '$CH_3CHO$' },
      { id: 'C', text: '$CH_3CH_2CHO$' },
      { id: 'D', text: '$C_6H_5CHO$' }
    ],
    correctAnswer: 'B',
    explanation: '$n_{Cu_2O} = \\frac{14,4}{144} = 0,1 \\text{ mol}$. Tỉ lệ $n_X : n_{Cu_2O} = 0,1 : 0,1 = 1 : 1 \\Rightarrow X$ là aldehyde đơn chức no $RCHO$. Trong các đáp án, $CH_3CHO$ phản ứng theo tỉ lệ 1:1 cho 1 mol $Cu_2O$.',
    difficulty: 'VanDung',
    source: 'SBT Hoá 11 - Bài 23'
  },
  {
    id: 'qz-23-25',
    lessonId: 'bai-23',
    question: 'Công thức cấu tạo thu gọn của benzaldehyde là',
    options: [
      { id: 'A', text: '$C_6H_5OH$' },
      { id: 'B', text: '$C_6H_5CH_2OH$' },
      { id: 'C', text: '$C_6H_5CHO$' },
      { id: 'D', text: '$C_6H_5COOH$' }
    ],
    correctAnswer: 'C',
    explanation: 'Benzaldehyde có công thức $C_6H_5CHO$ gồm nhóm $-CHO$ liên kết với vòng benzene $C_6H_5-$.',
    difficulty: 'NhanBiet',
    source: 'SGK Hoá 11 - Bài 23'
  },
  {
    id: 'qz-23-26',
    lessonId: 'bai-23',
    question: 'Hợp chất nào có tên thay thế là pentan-3-one?',
    options: [
      { id: 'A', text: '$CH_3CH_2COCH_2CH_3$' },
      { id: 'B', text: '$CH_3COCH_2CH_2CH_3$' },
      { id: 'C', text: '$CH_3CH_2CH_2CH_2CHO$' },
      { id: 'D', text: '$CH_3CH_2COCH_3$' }
    ],
    correctAnswer: 'A',
    explanation: '$CH_3CH_2COCH_2CH_3$ có 5 C đối xứng, nhóm C=O ở vị trí C3 $\\rightarrow$ pentan-3-one.',
    difficulty: 'NhanBiet',
    source: 'SGK Hoá 11 - Bài 23'
  },
  {
    id: 'qz-23-27',
    lessonId: 'bai-23',
    question: 'Chất nào sau đây được tạo ra khi oxi hoá nhẹ propan-1-ol bằng $CuO, t^\\circ$?',
    options: [
      { id: 'A', text: 'Propanone' },
      { id: 'B', text: 'Propanal' },
      { id: 'C', text: 'Propanoic acid' },
      { id: 'D', text: 'Propane' }
    ],
    correctAnswer: 'B',
    explanation: 'Oxi hoá alcohol bậc I ($CH_3CH_2CH_2OH$) bằng $CuO, t^\\circ$ thu được aldehyde tương ứng là propanal ($CH_3CH_2CHO$).',
    difficulty: 'ThongHieu',
    source: 'SBT Hoá 11 - Bài 23'
  },
  {
    id: 'qz-23-28',
    lessonId: 'bai-23',
    question: 'Sản phẩm thu được khi cho propanone cộng hợp với $HCN$ là',
    options: [
      { id: 'A', text: '$CH_3-CH(OH)-CH_3$' },
      { id: 'B', text: '$(CH_3)_2C(OH)CN$' },
      { id: 'C', text: '$CH_3CH_2CH_2CN$' },
      { id: 'D', text: '$CH_3CH_2COOH$' }
    ],
    correctAnswer: 'B',
    explanation: '$CH_3COCH_3 + HCN \\rightarrow (CH_3)_2C(OH)CN$ (acetone cyanohydrin).',
    difficulty: 'ThongHieu',
    source: 'SGK Hoá 11 - Bài 23'
  },
  {
    id: 'qz-23-29',
    lessonId: 'bai-23',
    question: 'Trong phương pháp sản xuất phenol và acetone từ cumene, hai sản phẩm thu được có tỉ lệ mol là',
    options: [
      { id: 'A', text: '1 : 1' },
      { id: 'B', text: '1 : 2' },
      { id: 'C', text: '2 : 1' },
      { id: 'D', text: '1 : 3' }
    ],
    correctAnswer: 'A',
    explanation: 'Quá trình cumene oxi hoá phân huỷ thu được số mol phenol bằng số mol acetone (tỉ lệ 1 : 1).',
    difficulty: 'NhanBiet',
    source: 'SGK Hoá 11 - Bài 23'
  },
  {
    id: 'qz-23-30',
    lessonId: 'bai-23',
    question: 'Oxi hoá hoàn toàn 5,8 gam một aldehyde no, đơn chức X bằng $Br_2/H_2O$ thu được 7,4 gam acid tương ứng. Công thức của X là',
    options: [
      { id: 'A', text: '$HCHO$' },
      { id: 'B', text: '$CH_3CHO$' },
      { id: 'C', text: '$C_2H_5CHO$' },
      { id: 'D', text: '$C_3H_7CHO$' }
    ],
    correctAnswer: 'C',
    explanation: '$RCHO + Br_2 + H_2O \\rightarrow RCOOH + 2HBr$. Khối lượng tăng $m_{RCOOH} - m_{RCHO} = 7,4 - 5,8 = 1,6 \\text{ g}$, tương ứng khối lượng nguyên tử O gắn thêm ($16 \\text{ g/mol}$). $n_X = \\frac{1,6}{16} = 0,1 \\text{ mol} \\Rightarrow M_X = \\frac{5,8}{0,1} = 58 \\text{ g/mol} \\Rightarrow R + 29 = 58 \\Rightarrow R = 29 \\text{ (} C_2H_5 \\text{)} \\Rightarrow C_2H_5CHO$ (propanal).',
    difficulty: 'VanDung',
    source: 'SBT Hoá 11 - Bài 23'
  }
];
