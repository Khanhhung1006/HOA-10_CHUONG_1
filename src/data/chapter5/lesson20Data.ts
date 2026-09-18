import { TheorySectionData, Flashcard, QuizQuestion } from '../../types';

export const lesson20Theory: TheorySectionData = {
  id: 'bai-20',
  chapterId: 'chuong-5',
  title: 'Bài 20: Alcohol',
  objectives: [
    'Nêu được khái niệm về alcohol, công thức tổng quát của alcohol no đơn chức mạch hở, khái niệm về bậc của alcohol.',
    'Viết công thức cấu tạo và gọi tên theo danh pháp thay thế, tên thông thường của một số alcohol thường gặp.',
    'Trình bày đặc điểm tính chất vật lí (nhiệt độ sôi, độ tan) và giải thích sự hình thành liên kết hydrogen liên phân tử.',
    'Trình bày tính chất hoá học: thế H nhóm -OH với Na, tạo ether ($140^\\circ C$), tách nước tạo alkene ($170^\\circ C$), oxi hoá không hoàn toàn bởi CuO và phản ứng riêng của polyalcohol kề nhau với $Cu(OH)_2$.',
    'Trình bày ứng dụng, phương pháp điều chế ethanol (lên men, hydrate hoá ethene) và tác hại của việc lạm dụng đồ uống có cồn.'
  ],
  summary: 'Alcohol là hợp chất hữu cơ chứa nhóm hydroxy ($-OH$) liên kết trực tiếp với nguyên tử carbon no. Do có liên kết hydrogen liên phân tử, alcohol có nhiệt độ sôi cao hơn hẳn hydrocarbon và dẫn xuất halogen tương đương. Alcohol thể hiện tính chất thế H nhóm -OH với kim loại kiềm, phản ứng thế -OH tạo ether hoặc tách nước tạo alkene (quy tắc Zaitsev), phản ứng oxi hoá phân biệt bậc alcohol (bậc I ra aldehyde, bậc II ra ketone) và polyalcohol kề nhau hoà tan $Cu(OH)_2$ tạo dung dịch xanh lam đậm.',
  coreKnowledge: [
    {
      heading: '1. Khái niệm, Phân loại & Bậc alcohol',
      points: [
        'Khái niệm: Alcohol là những hợp chất hữu cơ trong phân tử có chứa nhóm hydroxy ($-OH$) liên kết trực tiếp với nguyên tử carbon no.',
        'Công thức tổng quát alcohol no, đơn chức, mạch hở: $C_n H_{2n+1}OH$ ($n \\ge 1$). Ví dụ: $CH_3OH$ (methanol), $C_2H_5OH$ (ethanol).',
        'Polyalcohol (alcohol đa chức): Chứa nhiều nhóm $-OH$ trong phân tử. Ví dụ: $HO-CH_2-CH_2-OH$ (ethylene glycol), $HO-CH_2-CH(OH)-CH_2-OH$ (glycerol).',
        'Bậc alcohol: Là bậc của nguyên tử carbon no liên kết với nhóm $-OH$ (bậc I, bậc II, bậc III).',
        '  - Bậc I: Nhóm $-OH$ gắn với C bậc 1 ($R-CH_2-OH$). Ví dụ: $CH_3-CH_2-OH$, $C_6H_5-CH_2-OH$.',
        '  - Bậc II: Nhóm $-OH$ gắn với C bậc 2 ($R-CH(OH)-R\'$). Ví dụ: $CH_3-CH(OH)-CH_3$ (propan-2-ol).',
        '  - Bậc III: Nhóm $-OH$ gắn với C bậc 3 ($R_3C-OH$). Ví dụ: $(CH_3)_3C-OH$ (2-methylpropan-2-ol).'
      ]
    },
    {
      heading: '2. Danh pháp',
      points: [
        'Danh pháp thay thế Monoalcohol: Tên hydrocarbon tương ứng (bỏ "e" ở cuối) - [vị trí nhóm -OH] - ol. Đánh số C mạch chính ưu tiên từ phía gần nhóm $-OH$ hơn. Ví dụ: $CH_3OH$ (methanol), $CH_3CH_2CH_2OH$ (propan-1-ol), $CH_3-CH(OH)-CH_3$ (propan-2-ol), $CH_3-CH(OH)-CH(CH_3)_2$ (3-methylbutan-2-ol).',
        'Danh pháp thay thế Polyalcohol: Tên hydrocarbon tương ứng + vị trí các nhóm $-OH$ + diol/triol/ol. Ví dụ: $HO-CH_2-CH_2-OH$ (ethane-1,2-diol), $HO-CH_2-CH(OH)-CH_2-OH$ (propane-1,2,3-triol).',
        'Tên thông thường: Tên gốc alkyl + alcohol. Ví dụ: $CH_3OH$ (methyl alcohol), $C_2H_5OH$ (ethyl alcohol), $CH_3CH_2CH_2OH$ (propyl alcohol), $CH_3CH(OH)CH_3$ (isopropyl alcohol).'
      ]
    },
    {
      heading: '3. Tính chất vật lí & Liên kết hydrogen',
      points: [
        'Trạng thái: Ở điều kiện thường, các monoalcohol từ C1 đến C12 là chất lỏng, C13 trở lên là chất rắn. Các polyalcohol như ethylene glycol và glycerol là chất lỏng sánh, vị ngọt.',
        'Nhiệt độ sôi: Alcohol có nhiệt độ sôi cao hơn hẳn so với hydrocarbon, ether hay dẫn xuất halogen có phân tử khối tương đương. Nguyên nhân do các phân tử alcohol tạo được liên kết hydrogen liên phân tử với nhau ($R-O-H \\dots O(H)-R$).',
        'Độ tan: $CH_3OH, C_2H_5OH, C_3H_7OH$ tan vô hạn trong nước do tạo liên kết hydrogen với phân tử nước ($R-O-H \\dots O(H)-H$). Khi số C tăng, độ tan giảm do phần gốc hydrocarbon kị nước phình to.'
      ]
    },
    {
      heading: '4. Tính chất hoá học',
      points: [
        'a) Phản ứng thế H của nhóm -OH: Alcohol tác dụng với kim loại kiềm ($Na, K$) giải phóng khí $H_2$: $2R-OH + 2Na \\rightarrow 2R-ONa + H_2\\uparrow$. Phản ứng chứng tỏ H nhóm $-OH$ linh động.',
        'b) Phản ứng thế nhóm -OH tạo ether: Đun nóng alcohol với $H_2SO_4$ đặc ở $140^\\circ C$: $2R-OH \\xrightarrow{H_2SO_4 \\text{ đặc}, 140^\\circ C} R-O-R + H_2O$. Ví dụ: $2C_2H_5OH \\rightarrow C_2H_5-O-C_2H_5 \\text{ (diethyl ether)} + H_2O$.',
        'c) Phản ứng tách nước tạo alkene (dehydrate hoá): Đun nóng alcohol no đơn chức mạch hở chứa từ 2 C trở lên với $H_2SO_4$ đặc ở $170^\\circ C$: $C_n H_{2n+1}OH \\xrightarrow{H_2SO_4 \\text{ đặc}, 170^\\circ C} C_n H_{2n} + H_2O$. Tuân theo quy tắc Zaitsev: nhóm $-OH$ ưu tiên tách cùng H ở C bên cạnh có bậc cao hơn.',
        'd) Phản ứng oxi hoá không hoàn toàn với $CuO, t^\\circ$:',
        '  - Alcohol bậc I bị oxi hoá thành aldehyde: $R-CH_2OH + CuO \\xrightarrow{t^\\circ} R-CHO + Cu\\downarrow \\text{ (đỏ)} + H_2O$.',
        '  - Alcohol bậc II bị oxi hoá thành ketone: $R-CH(OH)-R\' + CuO \\xrightarrow{t^\\circ} R-CO-R\' + Cu\\downarrow + H_2O$.',
        '  - Alcohol bậc III không bị oxi hoá bởi $CuO$ ở điều kiện thường.',
        'e) Phản ứng riêng của polyalcohol kề nhau: Các polyalcohol có ít nhất 2 nhóm $-OH$ kề nhau tác dụng với $Cu(OH)_2$ ở nhiệt độ thường tạo phức chất màu xanh lam đậm (xanh thẫm). Phản ứng này dùng để nhận biết ethylene glycol và glycerol.'
      ],
      latexEquations: [
        '2C_2H_5OH + 2Na \\rightarrow 2C_2H_5ONa + H_2\\uparrow',
        '2C_2H_5OH \\xrightarrow{H_2SO_4 \\text{ đặc}, 140^\\circ C} C_2H_5-O-C_2H_5 + H_2O',
        'C_2H_5OH \\xrightarrow{H_2SO_4 \\text{ đặc}, 170^\\circ C} C_2H_4 + H_2O',
        'CH_3CH_2OH + CuO \\xrightarrow{t^\\circ} CH_3CHO + Cu + H_2O',
        'CH_3CH(OH)CH_3 + CuO \\xrightarrow{t^\\circ} CH_3COCH_3 + Cu + H_2O',
        '2C_3H_5(OH)_3 + Cu(OH)_2 \\rightarrow [C_3H_5(OH)_2O]_2Cu + 2H_2O'
      ]
    },
    {
      heading: '5. Điều chế & Ứng dụng',
      points: [
        'Điều chế Ethanol:',
        '  - Trong công nghiệp: Hydrate hoá ethene với xúc tác $H_3PO_4$: $CH_2=CH_2 + H_2O \\xrightarrow{H_3PO_4, t^\\circ} C_2H_5OH$.',
        '  - Phương pháp sinh hoá (lên men): Tinh bột/xenlulozo $\\rightarrow$ Glucose $\\xrightarrow{\\text{men rượu}} 2C_2H_5OH + 2CO_2\\uparrow$.',
        'Ứng dụng: Ethanol dùng làm dung môi, nhiên liệu sinh học (xăng E5), đồ uống có cồn, chất sát trùng y tế (cồn $70^\\circ$). Methanol rất độc, dùng làm hoá chất công nghiệp. Lạm dụng đồ uống có cồn ảnh hưởng nghiêm trọng tới thần kinh, gan và gây tai nạn giao thông.'
      ]
    }
  ],
  formulas: [
    {
      name: 'Công thức Alcohol no, đơn chức, mạch hở',
      latex: 'C_n H_{2n+1}OH \\quad (n \\ge 1)',
      description: 'Chứa 1 nhóm -OH liên kết với gốc alkyl no.'
    },
    {
      name: 'Phản ứng tách nước tạo Alkene (170°C)',
      latex: 'C_n H_{2n+1}OH \\xrightarrow{H_2SO_4 \\text{ đặc}, 170^\\circ C} C_n H_{2n} + H_2O',
      description: 'Đun alcohol với H2SO4 đặc ở 170°C tạo alkene theo quy tắc Zaitsev.'
    },
    {
      name: 'Phản ứng tạo Ether (140°C)',
      latex: '2ROH \\xrightarrow{H_2SO_4 \\text{ đặc}, 140^\\circ C} R-O-R + H_2O',
      description: 'Đun alcohol với H2SO4 đặc ở 140°C tạo ether.'
    }
  ],
  keyConcepts: [
    {
      term: 'Alcohol',
      definition: 'Hợp chất hữu cơ trong phân tử có nhóm hydroxy (-OH) liên kết trực tiếp với nguyên tử carbon no.'
    },
    {
      term: 'Bậc alcohol',
      definition: 'Bậc của nguyên tử C no liên kết với nhóm -OH.'
    },
    {
      term: 'Liên kết hydrogen liên phân tử',
      definition: 'Tương tác tĩnh điện giữa nguyên tử H mang điện tích dương partial với nguyên tử O mang điện tích âm partial của phân tử lân cận, làm tăng nhiệt độ sôi và độ tan.'
    }
  ],
  examples: [
    {
      title: 'Ví dụ 1: Oxi hoá không hoàn toàn bằng CuO',
      content: 'Cho propan-1-ol và propan-2-ol lần lượt tác dụng với CuO đun nóng. Viết phương trình phản ứng và xác định sản phẩm.',
      solution: '- Propan-1-ol ($CH_3CH_2CH_2OH$, alcohol bậc I) $\\xrightarrow{CuO, t^\\circ} CH_3CH_2CHO \\text{ (propanal, aldehyde)} + Cu + H_2O$.\n- Propan-2-ol ($CH_3CH(OH)CH_3$, alcohol bậc II) $\\xrightarrow{CuO, t^\\circ} CH_3COCH_3 \\text{ (propanone, ketone)} + Cu + H_2O$.'
    }
  ],
  commonMistakes: [
    {
      mistake: 'Cho rằng tất cả các hợp chất chứa nhóm -OH đều thuộc loại alcohol.',
      correction: 'Chỉ những hợp chất có nhóm -OH gắn trực tiếp với C no mới là alcohol. Nếu -OH gắn trực tiếp với C thơm là phenol, gắn với C vinylic không bền sẽ chuyển hoá thành aldehyde/ketone.',
      why: 'Tính chất hoá học của nhóm -OH phụ thuộc vào bản chất của nguyên tử C liên kết với nó.'
    }
  ],
  memoryTips: [
    'Mẹo oxi hoá CuO: Bậc I ra Aldehyde, Bậc II ra Ketone, Bậc III Không phản ứng!',
    'Mẹo nhiệt độ tách nước: $140^\\circ C$ ra Ether (2 phân tử ghép lại), $170^\\circ C$ ra Alkene (1 phân tử tách $H_2O$).'
  ],
  glossary: [
    { term: 'Ethylene glycol', meaning: '$HO-CH_2-CH_2-OH$ (ethane-1,2-diol), chất lỏng sánh, dùng làm chất chống đông trong động cơ.' },
    { term: 'Glycerol', meaning: '$HO-CH_2-CH(OH)-CH_2-OH$ (propane-1,2,3-triol), dùng làm chất giữ ẩm mỹ phẩm, thuốc nổ nitroglycerin.' }
  ],
  reviewChecklist: [
    'Phân biệt bậc alcohol và gọi tên alcohol theo danh pháp thay thế.',
    'Giải thích tại sao alcohol có nhiệt độ sôi cao hơn hydrocarbon tương đương.',
    'Viết các phương trình thế Na, tạo ether ($140^\\circ C$), tách nước alkene ($170^\\circ C$) và oxi hoá $CuO$.',
    'Nêu thuốc thử $Cu(OH)_2$ dùng nhận biết polyalcohol có các nhóm -OH kề nhau.'
  ]
};

export const lesson20Flashcards: Flashcard[] = [
  {
    id: 'fc-20-1',
    lessonId: 'bai-20',
    front: 'Định nghĩa alcohol và viết CTTQ của alcohol no, đơn chức, mạch hở.',
    back: 'Alcohol là hợp chất hữu cơ có chứa nhóm hydroxy ($-OH$) liên kết trực tiếp với C no.\nCTTQ: $C_n H_{2n+1}OH$ ($n \\ge 1$).',
    category: 'alcohol'
  },
  {
    id: 'fc-20-2',
    lessonId: 'bai-20',
    front: 'Bậc alcohol được xác định như thế nào? Nêu ví dụ về alcohol bậc I, II, III.',
    back: 'Bậc alcohol là bậc của nguyên tử C no liên kết với nhóm $-OH$.\n- Bậc I: $CH_3CH_2OH$.\n- Bậc II: $CH_3CH(OH)CH_3$.\n- Bậc III: $(CH_3)_3COH$.',
    category: 'alcohol'
  },
  {
    id: 'fc-20-3',
    lessonId: 'bai-20',
    front: 'Gọi tên thay thế của $CH_3CH_2CH_2OH$ và $CH_3-CH(OH)-CH_3$.',
    back: '- $CH_3CH_2CH_2OH$: Propan-1-ol.\n- $CH_3-CH(OH)-CH_3$: Propan-2-ol.',
    category: 'alcohol'
  },
  {
    id: 'fc-20-4',
    lessonId: 'bai-20',
    front: 'Gọi tên danh pháp thay thế của ethylene glycol và glycerol.',
    back: '- Ethylene glycol ($HO-CH_2-CH_2-OH$): Ethane-1,2-diol.\n- Glycerol ($HO-CH_2-CH(OH)-CH_2-OH$): Propane-1,2,3-triol.',
    category: 'alcohol'
  },
  {
    id: 'fc-20-5',
    lessonId: 'bai-20',
    front: 'Vì sao alcohol có nhiệt độ sôi cao hơn hẳn so với hydrocarbon hay dẫn xuất halogen có phân tử khối tương đương?',
    back: 'Vì giữa các phân tử alcohol tạo được **liên kết hydrogen liên phân tử** bền vững.',
    category: 'alcohol'
  },
  {
    id: 'fc-20-6',
    lessonId: 'bai-20',
    front: 'Viết phương trình phản ứng của ethanol với sodium ($Na$).',
    back: '$2C_2H_5OH + 2Na \\rightarrow 2C_2H_5ONa + H_2\\uparrow$.',
    category: 'alcohol'
  },
  {
    id: 'fc-20-7',
    lessonId: 'bai-20',
    front: 'Sản phẩm tạo thành khi đun nóng ethanol với $H_2SO_4$ đặc ở $140^\\circ C$ là gì?',
    back: 'Diethyl ether ($C_2H_5-O-C_2H_5$) và nước $H_2O$.',
    category: 'alcohol'
  },
  {
    id: 'fc-20-8',
    lessonId: 'bai-20',
    front: 'Sản phẩm tạo thành khi đun nóng ethanol với $H_2SO_4$ đặc ở $170^\\circ C$ là gì?',
    back: 'Ethene ($CH_2=CH_2$) và nước $H_2O$.',
    category: 'alcohol'
  },
  {
    id: 'fc-20-9',
    lessonId: 'bai-20',
    front: 'Sản phẩm chính thu được khi tách nước từ butan-2-ol ở $170^\\circ C$ theo quy tắc Zaitsev là chất gì?',
    back: 'But-2-ene ($CH_3-CH=CH-CH_3$).',
    category: 'alcohol'
  },
  {
    id: 'fc-20-10',
    lessonId: 'bai-20',
    front: 'Alcohol bậc I và alcohol bậc II bị oxi hoá bởi $CuO, t^\\circ$ sinh ra sản phẩm thuộc loại chất nào?',
    back: '- Alcohol bậc I $\\rightarrow$ Aldehyde ($R-CHO$).\n- Alcohol bậc II $\\rightarrow$ Ketone ($R-CO-R\'$).',
    category: 'alcohol'
  },
  {
    id: 'fc-20-11',
    lessonId: 'bai-20',
    front: 'Hiện tượng gì xảy ra khi cho $Cu(OH)_2$ vào glycerol ($C_3H_5(OH)_3$)?',
    back: '$Cu(OH)_2$ tan ra tạo dung dịch phức chất màu xanh lam đậm (xanh thẫm).',
    category: 'alcohol'
  },
  {
    id: 'fc-20-12',
    lessonId: 'bai-20',
    front: 'Viết phương trình hydrate hoá ethene điều chế ethanol trong công nghiệp.',
    back: '$CH_2=CH_2 + H_2O \\xrightarrow{H_3PO_4, t^\\circ} C_2H_5OH$.',
    category: 'alcohol'
  },
  {
    id: 'fc-20-13',
    lessonId: 'bai-20',
    front: 'Phương pháp sinh hoá điều chế ethanol từ tinh bột dựa trên phản ứng gì?',
    back: 'Phản ứng lên men rượu (nhờ enzyme) biến đổi glucose thành ethanol và $CO_2$.',
    category: 'alcohol'
  },
  {
    id: 'fc-20-14',
    lessonId: 'bai-20',
    front: 'Vì sao methanol ($CH_3OH$) cực kỳ nguy hiểm nếu uống nhầm?',
    back: 'Methanol vào cơ thể bị chuyển hoá thành formaldehyde và formic acid gây nhiễm độc, mù mắt hoặc tử vong.',
    category: 'alcohol'
  },
  {
    id: 'fc-20-15',
    lessonId: 'bai-20',
    front: 'Sát trùng y tế thường dùng cồn ethanol ở độ cồn bao nhiêu % thể tích?',
    back: 'Cồn $70^\\circ$ ($70\\%$ thể tích ethanol trong nước).',
    category: 'alcohol'
  }
];

export const lesson20Quizzes: QuizQuestion[] = [
  {
    id: 'q-20-1',
    lessonId: 'bai-20',
    question: 'Hợp chất nào sau đây thuộc loại alcohol no, đơn chức, mạch hở?',
    options: [
      { id: 'A', text: '$CH_2=CH-CH_2OH$' },
      { id: 'B', text: '$C_2H_5OH$' },
      { id: 'C', text: '$C_6H_5OH$' },
      { id: 'D', text: '$HO-CH_2-CH_2-OH$' }
    ],
    correctAnswer: 'B',
    explanation: '$C_2H_5OH$ chứa 1 nhóm -OH liên kết với gốc alkyl no $C_2H_5-$, thuộc loại alcohol no đơn chức mạch hở.',
    difficulty: 'NhanBiet',
    source: 'SGK Hoá học 11 - Bài 20'
  },
  {
    id: 'q-20-2',
    lessonId: 'bai-20',
    question: 'Tên thay thế theo danh pháp IUPAC của alcohol $CH_3-CH(OH)-CH_3$ là gì?',
    options: [
      { id: 'A', text: 'Propan-1-ol' },
      { id: 'B', text: 'Propan-2-ol' },
      { id: 'C', text: 'Isopropyl alcohol' },
      { id: 'D', text: 'Propanol' }
    ],
    correctAnswer: 'B',
    explanation: 'Mạch chính 3 carbon, nhóm -OH gắn ở C2 $\\rightarrow$ Propan-2-ol.',
    difficulty: 'NhanBiet',
    source: 'SGK Hoá học 11 - Bài 20'
  },
  {
    id: 'q-20-3',
    lessonId: 'bai-20',
    question: 'Bậc của alcohol $(CH_3)_3C-OH$ là bậc mấy?',
    options: [
      { id: 'A', text: 'Bậc I' },
      { id: 'B', text: 'Bậc II' },
      { id: 'C', text: 'Bậc III' },
      { id: 'D', text: 'Bậc IV' }
    ],
    correctAnswer: 'C',
    explanation: 'Nhóm -OH liên kết với nguyên tử carbon bậc 3 (liên kết với 3 nhóm $-CH_3$) $\\Rightarrow$ alcohol bậc III.',
    difficulty: 'NhanBiet',
    source: 'SGK Hoá học 11 - Bài 20'
  },
  {
    id: 'q-20-4',
    lessonId: 'bai-20',
    question: 'Nguyên nhân chính khiến ethanol ($C_2H_5OH$) có nhiệt độ sôi ($78,3^\\circ C$) cao hơn hẳn so với dimethyl ether ($CH_3-O-CH_3, -24,9^\\circ C$) có cùng phân tử khối là do:',
    options: [
      { id: 'A', text: 'Ethanol có khối lượng phân tử lớn hơn.' },
      { id: 'B', text: 'Ethanol chứa liên kết cộng hoá trị bền hơn.' },
      { id: 'C', text: 'Ethanol tạo được liên kết hydrogen liên phân tử.' },
      { id: 'D', text: 'Dimethyl ether phân cực mạnh hơn.' }
    ],
    correctAnswer: 'C',
    explanation: 'Nhóm -OH phân cực tạo liên kết hydrogen giữa các phân tử ethanol làm tăng nhiệt độ sôi.',
    difficulty: 'ThongHieu',
    source: 'SGK Hoá học 11 - Bài 20'
  },
  {
    id: 'q-20-5',
    lessonId: 'bai-20',
    question: 'Đun nóng ethanol với dung dịch $H_2SO_4$ đặc ở $140^\\circ C$ thu được sản phẩm chính là chất nào?',
    options: [
      { id: 'A', text: '$CH_2=CH_2$' },
      { id: 'B', text: '$CH_3-O-CH_3$' },
      { id: 'C', text: '$C_2H_5-O-C_2H_5$' },
      { id: 'D', text: '$CH_3CHO$' }
    ],
    correctAnswer: 'C',
    explanation: 'Ở $140^\\circ C$ xảy ra phản ứng tách nước giữa 2 phân tử alcohol tạo ether: $2C_2H_5OH \\rightarrow C_2H_5-O-C_2H_5 + H_2O$.',
    difficulty: 'NhanBiet',
    source: 'SGK Hoá học 11 - Bài 20'
  },
  {
    id: 'q-20-6',
    lessonId: 'bai-20',
    question: 'Oxi hoá propan-2-ol ($CH_3-CH(OH)-CH_3$) bằng $CuO$ đun nóng thu được hợp chất hữu cơ nào?',
    options: [
      { id: 'A', text: 'Propanal ($CH_3CH_2CHO$)' },
      { id: 'B', text: 'Propanone ($CH_3COCH_3$)' },
      { id: 'C', text: 'Propanoic acid ($CH_3CH_2COOH$)' },
      { id: 'D', text: 'Propene ($CH_3CH=CH_2$)' }
    ],
    correctAnswer: 'B',
    explanation: 'Oxi hoá alcohol bậc II bằng $CuO, t^\\circ$ sinh ra ketone tương ứng: $CH_3CH(OH)CH_3 + CuO \\xrightarrow{t^\\circ} CH_3COCH_3 + Cu + H_2O$.',
    difficulty: 'ThongHieu',
    source: 'SGK Hoá học 11 - Bài 20'
  },
  {
    id: 'q-20-7',
    lessonId: 'bai-20',
    question: 'Hoá chất nào dùng để phân biệt hai chất lỏng mất nhãn ethanol ($C_2H_5OH$) và glycerol ($C_3H_5(OH)_3$)?',
    options: [
      { id: 'A', text: 'Kim loại $Na$' },
      { id: 'B', text: 'Dung dịch $Cu(OH)_2$ ở nhiệt độ thường' },
      { id: 'C', text: 'Dung dịch $AgNO_3/NH_3$' },
      { id: 'D', text: 'Quỳ tím' }
    ],
    correctAnswer: 'B',
    explanation: 'Glycerol có 3 nhóm -OH kề nhau nên hoà tan $Cu(OH)_2$ tạo dung dịch xanh lam đậm, còn ethanol không có phản ứng này.',
    difficulty: 'ThongHieu',
    source: 'SGK Hoá học 11 - Bài 20'
  },
  {
    id: 'q-20-8',
    lessonId: 'bai-20',
    question: 'Sản phẩm chính của phản ứng tách nước từ 2-methylbutan-2-ol ($CH_3-C(CH_3)(OH)-CH_2-CH_3$) khi đun với $H_2SO_4$ đặc ở $170^\\circ C$ là:',
    options: [
      { id: 'A', text: '2-methylbut-1-ene' },
      { id: 'B', text: '2-methylbut-2-ene' },
      { id: 'C', text: '3-methylbut-1-ene' },
      { id: 'D', text: '2-methylbut-3-ene' }
    ],
    correctAnswer: 'B',
    explanation: 'Theo quy tắc Zaitsev, nhóm -OH tách cùng H ở C3 (C bậc 2, chứa 2H) ưu tiên hơn C1 (chứa 3H) $\\rightarrow CH_3-C(CH_3)=CH-CH_3$ (2-methylbut-2-ene).',
    difficulty: 'VanDung',
    source: 'SBT Hoá học 11 - Bài 20'
  },
  {
    id: 'q-20-9',
    lessonId: 'bai-20',
    question: 'Trong phương pháp lên men tinh bột điều chế ethanol, chất trung gian trực tiếp sinh ra trước khi chuyển hoá thành ethanol là chất nào?',
    options: [
      { id: 'A', text: 'Sucrose' },
      { id: 'B', text: 'Fructose' },
      { id: 'C', text: 'Glucose' },
      { id: 'D', text: 'Maltose' }
    ],
    correctAnswer: 'C',
    explanation: 'Tinh bột thuỷ phân thành glucose ($C_6H_{12}O_6$), sau đó glucose lên men rượu tạo $2C_2H_5OH + 2CO_2$.',
    difficulty: 'ThongHieu',
    source: 'SGK Hoá học 11 - Bài 20'
  },
  {
    id: 'q-20-10',
    lessonId: 'bai-20',
    question: 'Cho 9,2 gram ethanol ($C_2H_5OH$) tác dụng hoàn toàn với kim loại $Na$ dư. Thể tích khí $H_2$ (đkc) thu được là bao nhiêu?',
    options: [
      { id: 'A', text: '1,2395 lit' },
      { id: 'B', text: '2,479 lit' },
      { id: 'C', text: '4,958 lit' },
      { id: 'D', text: '2,24 lit' }
    ],
    correctAnswer: 'A',
    explanation: '$n_{C_2H_5OH} = \\frac{9,2}{46} = 0,2 \\text{ mol}$. $n_{H_2} = 0,5 \\cdot n_{C_2H_5OH} = 0,1 \\text{ mol}$. $V_{H_2\\text{ (đkc)}} = 0,1 \\cdot 24,79 = 1,2395 \\text{ lít}$.',
    difficulty: 'VanDung',
    source: 'SBT Hoá học 11 - Bài 20'
  }
];
