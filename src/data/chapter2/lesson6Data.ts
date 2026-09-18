import { TheorySectionData, Flashcard, QuizQuestion } from '../../types';

export const lesson6Theory: TheorySectionData = {
  id: 'bai-6',
  chapterId: 'chuong-2',
  title: 'Bài 6: Một số hợp chất của nitrogen với oxygen',
  objectives: [
    'Phân tích được nguồn gốc các oxide của nitrogen trong không khí và nguyên nhân gây hiện tượng mưa acid.',
    'Nêu được cấu tạo của $HNO_3$, tính acid, tính oxi hoá mạnh trong một số ứng dụng thực tiễn quan trọng của nitric acid.',
    'Giải thích được nguyên nhân, hệ quả của hiện tượng phú dưỡng.'
  ],
  summary: 'Các oxide của nitrogen ($NO_x$ gồm $N_2O, NO, NO_2, N_2O_4$) phát sinh từ nguồn nhiệt, nhiên liệu và tức thời, là tác nhân chính gây mưa acid và phú dưỡng. Nitric acid ($HNO_3$) có liên kết cho - nhận, số oxi hoá $+5$, là một acid mạnh và có tính oxi hoá mạnh (oxi hoá được hầu hết các kim loại trừ $Au, Pt$, nhiều phi kim và hợp chất). Hiện tượng phú dưỡng sinh ra do dư thừa các chất dinh dưỡng nitrate và phosphate trong môi trường nước.',
  coreKnowledge: [
    {
      heading: 'I. Các Oxide của Nitrogen ($NO_x$)',
      points: [
        'Công thức & tên gọi: Các oxide của nitrogen được kí hiệu chung là $NO_x$, gồm $N_2O$ (dinitrogen oxide), $NO$ (nitrogen monoxide), $NO_2$ (nitrogen dioxide), $N_2O_4$ (dinitrogen tetroxide).',
        'Nguồn gốc hình thành $NO_x$ trong không khí:\n- $NO_x$ nhiệt (thermal - $NO_x$): Hình thành ở nhiệt độ rất cao (trên $3000\\;^\\circ\\text{C}$) hoặc tia lửa điện do nitrogen phản ứng với oxygen: $N_2 + O_2 \\rightleftharpoons 2NO$.\n- $NO_x$ nhiên liệu (fuel - $NO_x$): Hình thành khi nguyên tố nitrogen trong nhiên liệu/sinh khối kết hợp với oxygen dư thừa.\n- $NO_x$ tức thời (prompt - $NO_x$): Hình thành khi nitrogen trong không khí tác dụng với các gốc tự do (như gốc hydrocarbon, gốc hydroxyl,...).',
        'Hiện tượng Mưa acid:\n- Nước mưa thông thường có $\\text{pH} \\approx 5,6$ do $CO_2$ hoà tan. Khi nước mưa có $\\text{pH} < 5,6$ thì gọi là hiện tượng mưa acid.\n- Tác nhân chính gây mưa acid: $SO_2$ và $NO_x$ phát thải từ các hoạt động công nghiệp, giao thông vận tải, đốt nhiên liệu hoá thạch.\n- Phương trình tạo acid:\n$$4NO_2 + O_2 + 2H_2O \\xrightarrow{xt} 4HNO_3$$\n$$2SO_2 + O_2 + 2H_2O \\xrightarrow{xt} 2H_2SO_4$$'
      ],
      latexEquations: [
        'N_2 + O_2 \\overset{t^o}{\\rightleftharpoons} 2NO',
        '4NO_2 + O_2 + 2H_2O \\xrightarrow{xt} 4HNO_3'
      ]
    },
    {
      heading: 'II. Nitric Acid ($HNO_3$)',
      points: [
        'Cấu tạo phân tử: Trong phân tử $HNO_3$, nguyên tử nitrogen có số oxi hoá $+5$ và hoá trị bằng 4. Liên kết $O-H$ phân cực mạnh về phía oxygen. Liên kết $N \\rightarrow O$ là liên kết cho - nhận.',
        'Tính chất vật lí: Nitric acid tinh khiết là chất lỏng không màu, khối lượng riêng $D = 1,53\\text{ g/mL}$, sôi ở $83\\;^\\circ\\text{C}$, bốc khói mạnh trong không khí ẩm và tan vô hạn trong nước. Axit $HNO_3$ đặc để lâu thường có màu vàng do bị quang phân huỷ tạo $NO_2$ tan lại vào dung dịch.',
        'Tính acid mạnh: Là một acid mạnh, phân li hoàn toàn trong nước: $HNO_3 \\rightarrow H^+ + NO_3^-$. Tác dụng với base, basic oxide, muối carbonate tạo muối nitrate: $CaCO_3 + 2HNO_3 \\rightarrow Ca(NO_3)_2 + CO_2\\uparrow + H_2O$.',
        'Tính oxi hoá mạnh (do nguyên tử N có số oxi hoá $+5$ cao nhất):\n- Tác dụng với kim loại: Oxi hoá được hầu hết các kim loại (trừ vàng $Au$, platinum $Pt$), không giải phóng khí $H_2$ mà tạo sản phẩm khử ($NO_2, NO, N_2O, N_2, NH_4NO_3$). Ví dụ: $3Cu + 8HNO_3\\text{ (loãng)} \\rightarrow 3Cu(NO_3)_2 + 2NO\\uparrow + 4H_2O$, $Ag + 2HNO_3\\text{ (đặc)} \\rightarrow AgNO_3 + NO_2\\uparrow + H_2O$.\n- Nước cường toan (Aqua regia): Hỗn hợp gồm $HNO_3$ đặc và $HCl$ đặc theo tỉ lệ thể tích $1:3$ có khả năng hoà tan cả vàng và platinum:\n$$Au + HNO_3 + 3HCl \\xrightarrow{t^o} AuCl_3 + NO\\uparrow + 2H_2O$$\n- Thụ động hoá: Kim loại $Al, Fe, Cr$ bị thụ động hoá trong $HNO_3$ đặc, nguội.',
        'Ứng dụng: Sản xuất phân bón ($NH_4NO_3, Ca(NO_3)_2$), thuốc nổ TNT, nitroglycerin, thuốc súng không khói cellulose trinitrate, phá mẫu quặng trong nghiên cứu.'
      ],
      latexEquations: [
        'HNO_3 \\rightarrow H^+ + NO_3^-',
        '3Cu + 8HNO_3 \\rightarrow 3Cu(NO_3)_2 + 2NO\\uparrow + 4H_2O',
        'Ag + 2HNO_3 \\rightarrow AgNO_3 + NO_2\\uparrow + H_2O',
        'Au + HNO_3 + 3HCl \\xrightarrow{t^o} AuCl_3 + NO\\uparrow + 2H_2O'
      ]
    },
    {
      heading: 'III. Hiện tượng Phú dưỡng (Eutrophication)',
      points: [
        'Khái niệm: Hiện tượng dư thừa chất dinh dưỡng (chủ yếu là các ion nitrate $NO_3^-$ và phosphate $PO_4^{3-}$) trong các nguồn nước tĩnh (ao, hồ, đầm phá).',
        'Ngưỡng phú dưỡng: Khi hàm lượng nitrogen tổng $\\ge 300\\;\\mu\\text{g/L}$ và hàm lượng phosphorus $\\ge 20\\;\\mu\\text{g/L}$ sẽ gây ra hiện tượng phú dưỡng.',
        'Nguồn gốc: Nước thải sinh hoạt, nước thải chăn nuôi, nông nghiệp (dư thừa phân bón) theo dòng chảy đổ vào ao hồ.',
        'Hệ quả: Rong, tảo phát triển mạnh mẽ che phủ mặt nước, ngăn cản ánh sáng mặt trời; khi tảo chết bị phân huỷ tiêu thụ lượng lớn dissolved oxygen ($DO$) làm cá tôm chết ngạt hàng loạt, bốc mùi hôi thối.'
      ]
    }
  ],
  formulas: [
    {
      name: 'Phản ứng hoà tan vàng bằng Nước cường toan (Aqua regia)',
      latex: 'Au + HNO_3 + 3HCl \\xrightarrow{t^o} AuCl_3 + NO\\uparrow + 2H_2O',
      description: 'Hỗn hợp 1 thể tích $HNO_3$ đặc và 3 thể tích $HCl$ đặc.'
    },
    {
      name: 'Điều kiện nồng độ gây Hiện tượng Phú dưỡng',
      latex: '[N] \\ge 300\\;\\mu\\text{g/L} \\quad \\text{và} \\quad [P] \\ge 20\\;\\mu\\text{g/L}',
      description: 'Nồng độ nitrogen và phosphorus vượt ngưỡng cho phép trong nguồn nước ao hồ.'
    }
  ],
  keyConcepts: [
    {
      term: 'Nước cường toan (Aqua regia)',
      definition: 'Hỗn hợp $HNO_3$ đặc và $HCl$ đặc theo tỉ lệ thể tích $1 : 3$, có tính oxi hoá cực kì mạnh, hoà tan được kim loại quý như $Au, Pt$.'
    },
    {
      term: 'Hiện tượng phú dưỡng',
      definition: 'Sự ô nhiễm ao hồ do dư thừa hàm lượng nitrate và phosphate, làm bùng phát tảo nở hoa và suy kiệt oxygen hoà tan trong nước.'
    },
    {
      term: 'Mưa acid',
      definition: 'Nước mưa có $\\text{pH} < 5,6$, do khí thải $SO_2$ và $NO_x$ hoà tan trong nước tạo thành các acid tương ứng.'
    },
    {
      term: 'Thụ động hoá',
      definition: 'Hiện tượng bề mặt các kim loại $Fe, Al, Cr$ tạo màng oxide bảo vệ đặc khít không bị tan trong dung dịch $HNO_3$ đặc, nguội.'
    }
  ],
  examples: [
    {
      title: 'Ví dụ 1: Phân biệt các dung dịch $HNO_3, NaNO_3, HCl$',
      content: 'Trình bày phương pháp hoá học phân biệt ba dung dịch: $HNO_3$, $NaNO_3$, $HCl$.',
      solution: '1. Dùng giấy quỳ tím: mẫu không làm đổi màu quỳ tím là $NaNO_3$; hai mẫu làm quỳ tím hoá đỏ là $HNO_3$ và $HCl$.\n2. Nhỏ dung dịch $AgNO_3$ vào hai mẫu làm đỏ quỳ tím: mẫu xuất hiện kết tủa trắng ($AgCl$) là $HCl$, mẫu không có kết tủa là $HNO_3$:\n$$AgNO_3 + HCl \\rightarrow AgCl\\downarrow + HNO_3$$'
    },
    {
      title: 'Ví dụ 2: Tách vàng ($Au$) từ hợp kim vàng - bạc ($Au - Ag$)',
      content: 'Nêu các bước xác định hàm lượng vàng trong hợp kim $Au - Ag$ bằng dung dịch $HNO_3$.',
      solution: '1. Cân khối lượng mẫu hợp kim ban đầu ($m_1$).\n2. Ngâm hợp kim vào cốc đựng dung dịch $HNO_3$ dư để hoà tan hoàn toàn bạc ($Ag$), vàng ($Au$) không phản ứng và không tan:\n$$3Ag + 4HNO_3 \\rightarrow 3AgNO_3 + NO\\uparrow + 2H_2O$$\n3. Lọc lấy phần chất rắn không tan ($Au$), rửa sạch và sấy khô.\n4. Cân khối lượng vàng thu được ($m_2$). Hàm lượng vàng: $\\%Au = \\frac{m_2}{m_1} \\cdot 100\\%$.'
    }
  ],
  commonMistakes: [
    {
      mistake: 'Nghĩ rằng $HNO_3$ phản ứng với kim loại giải phóng khí $H_2$.',
      correction: 'Nitric acid phản ứng với kim loại không giải phóng khí $H_2$ mà tạo ra các sản phẩm khử của nitrogen ($NO_2, NO, N_2O, N_2, NH_4NO_3$).',
      why: 'Do nguyên tử nitrogen ($+5$) có tính oxi hoá mạnh hơn ion $H^+$.'
    },
    {
      mistake: 'Cho rằng nước mưa bình thường có $\\text{pH} = 7$.',
      correction: 'Nước mưa bình thường tự nhiên có $\\text{pH} \\approx 5,6$ do hoà tan khí carbon dioxide ($CO_2$) từ khí quyển. Chỉ khi $\\text{pH} < 5,6$ mới gọi là mưa acid.',
      why: '$CO_2 + H_2O \\rightleftharpoons H_2CO_3 \\rightleftharpoons H^+ + HCO_3^-$.'
    }
  ],
  memoryTips: [
    'NOx: Nhiệt ($N_2+O_2$), Nhiên liệu (cháy sinh khối), Tức thời (gốc tự do).',
    '$HNO_3$: Acid mạnh + Oxi hoá mạnh (hoà tan Cu, Ag, Fe; không ra $H_2$).',
    'Nước cường toan: $1\\text{ thể tích } HNO_3 + 3\\text{ thể tích } HCl$ (hoà tan Au).',
    'Phú dưỡng: Dư Nitrate & Phosphate $\\rightarrow$ Tảo nở hoa $\\rightarrow$ Thiếu oxygen.'
  ],
  glossary: [
    { term: 'Nitric acid', meaning: 'Hợp chất acid vô cơ $HNO_3$, chất lỏng không màu, bốc khói mạnh trong không khí ẩm, có tính acid mạnh và tính oxi hoá mạnh.' },
    { term: 'Phú dưỡng', meaning: 'Hiện tượng ao hồ bị phú dưỡng dinh dưỡng nitrate và phosphate làm bùng phát sinh vật thuỷ sinh.' },
    { term: 'Aqua regia', meaning: 'Nước cường toan (hỗn hợp $HNO_3$ đặc và $HCl$ đặc tỉ lệ thể tích $1:3$).' }
  ],
  reviewChecklist: [
    'Nêu tên và nguồn gốc các loại $NO_x$ (nhiệt, nhiên liệu, tức thời).',
    'Giải thích cơ chế hình thành mưa acid và tác hại của nó.',
    'Viết công thức cấu tạo và nêu các tính chất hoá học của $HNO_3$.',
    'Giải thích vì sao $HNO_3$ hoà tan được $Cu, Ag$ nhưng không sinh ra khí $H_2$.',
    'Nêu nguyên nhân và ngưỡng nồng độ nitrogen, phosphorus gây hiện tượng phú dưỡng.'
  ]
};

export const lesson6Flashcards: Flashcard[] = [
  {
    id: 'fc-6-1',
    chapterId: 'chuong-2',
    lessonId: 'bai-6',
    category: 'nitrogen',
    front: '$NO_x$ nhiệt (thermal - $NO_x$) được hình thành từ nguồn nào?',
    back: 'Hình thành ở **nhiệt độ rất cao (trên $3000\\;^\\circ\\text{C}$)** hoặc tia lửa điện khi nitrogen trong không khí bị oxi hoá:\n$$N_2 + O_2 \\rightleftharpoons 2NO$$'
  },
  {
    id: 'fc-6-2',
    chapterId: 'chuong-2',
    lessonId: 'bai-6',
    category: 'nitrogen',
    front: '$NO_x$ nhiên liệu (fuel - $NO_x$) và $NO_x$ tức thời (prompt - $NO_x$) hình thành như thế nào?',
    back: '- **$NO_x$ nhiên liệu**: khi nguyên tố nitrogen trong nhiên liệu kết hợp với oxygen dư thừa.\n- **$NO_x$ tức thời**: khi nitrogen trong không khí tác dụng với các gốc tự do.'
  },
  {
    id: 'fc-6-3',
    chapterId: 'chuong-2',
    lessonId: 'bai-6',
    category: 'thuc-tien',
    front: 'Hiện tượng mưa acid được định nghĩa là nước mưa có giá trị pH bằng bao nhiêu? Hai tác nhân chính gây ra là gì?',
    back: 'Nước mưa có **$\\text{pH} < 5,6$**. Hai tác nhân chính gây mưa acid là **$SO_2$** và **$NO_x$**.'
  },
  {
    id: 'fc-6-4',
    chapterId: 'chuong-2',
    lessonId: 'bai-6',
    category: 'cong-thuc',
    front: 'Trong phân tử $HNO_3$, nguyên tử nitrogen có số oxi hoá và hoá trị bằng bao nhiêu?',
    back: 'Số oxi hoá là **$+5$** và hoá trị bằng **4** (có 1 liên kết cho - nhận $N \\rightarrow O$).'
  },
  {
    id: 'fc-6-5',
    chapterId: 'chuong-2',
    lessonId: 'bai-6',
    category: 'nitrogen',
    front: 'Tại sao dung dịch nitric acid ($HNO_3$) đặc để lâu thường chuyển sang màu vàng?',
    back: 'Do nitric acid bị quang phân huỷ một phần dưới tác dụng của ánh sáng tạo ra khí **$NO_2$** màu nâu đỏ tan lại vào acid:\n$$4HNO_3 \\xrightarrow{h\\nu, t^o} 4NO_2 + O_2 + 2H_2O$$'
  },
  {
    id: 'fc-6-6',
    chapterId: 'chuong-2',
    lessonId: 'bai-6',
    category: 'nitrogen',
    front: 'Kim loại nào sau đây KHÔNG tan được trong dung dịch $HNO_3$ đặc hoặc loãng?',
    back: 'Vàng (**$Au$**) và platinum (**$Pt$**).'
  },
  {
    id: 'fc-6-7',
    chapterId: 'chuong-2',
    lessonId: 'bai-6',
    category: 'thuc-tien',
    front: 'Nước cường toan (Aqua regia) có thành phần tỉ lệ thể tích như thế nào? Nêu ứng dụng.',
    back: 'Gồm hỗn hợp **1 thể tích $HNO_3$ đặc** và **3 thể tích $HCl$ đặc**, có khả năng **hoà tan vàng ($Au$) và platinum ($Pt$)**.'
  },
  {
    id: 'fc-6-8',
    chapterId: 'chuong-2',
    lessonId: 'bai-6',
    category: 'nitrogen',
    front: 'Những kim loại nào bị thụ động hoá trong dung dịch $HNO_3$ đặc, nguội?',
    back: 'Nhôm (**$Al$**), sắt (**$Fe$**), chromium (**$Cr$**).'
  },
  {
    id: 'fc-6-9',
    chapterId: 'chuong-2',
    lessonId: 'bai-6',
    category: 'thuc-tien',
    front: 'Hiện tượng phú dưỡng xảy ra chủ yếu do dư thừa các ion nào trong nguồn nước?',
    back: 'Do dư thừa hàm lượng các ion **nitrate ($NO_3^-$)** và **phosphate ($PO_4^{3-}$)**.'
  },
  {
    id: 'fc-6-10',
    chapterId: 'chuong-2',
    lessonId: 'bai-6',
    category: 'thuc-tien',
    front: 'Ngưỡng nồng độ của nitrogen và phosphorus trong nước gây ra hiện tượng phú dưỡng là bao nhiêu?',
    back: 'Hàm lượng nitrogen đạt **$300\\;\\mu\\text{g/L}$** và hàm lượng phosphorus đạt **$20\\;\\mu\\text{g/L}$**.'
  },
  {
    id: 'fc-6-11',
    chapterId: 'chuong-2',
    lessonId: 'bai-6',
    category: 'thuc-tien',
    front: 'Nêu hậu quả của hiện tượng phú dưỡng đối với hệ sinh thái ao hồ.',
    back: 'Rong tảo bùng phát che phủ mặt nước $\\rightarrow$ khi chết xác tảo phân huỷ làm cạn kiệt nguồn oxygen hoà tan $\\rightarrow$ thuỷ sản (cá, tôm) chết ngạt hàng loạt.'
  },
  {
    id: 'fc-6-12',
    chapterId: 'chuong-2',
    lessonId: 'bai-6',
    category: 'nitrogen',
    front: 'Viết phương trình phản ứng giữa lá đồng ($Cu$) với dung dịch $HNO_3$ loãng.',
    back: '$$3Cu + 8HNO_3\\text{ (loãng)} \\rightarrow 3Cu(NO_3)_2 + 2NO\\uparrow + 4H_2O$$'
  },
  {
    id: 'fc-6-13',
    chapterId: 'chuong-2',
    lessonId: 'bai-6',
    category: 'thuc-tien',
    front: 'Nêu 3 ứng dụng nổi bật của nitric acid trong công nghiệp.',
    back: 'Sản xuất phân đạm ($NH_4NO_3, Ca(NO_3)_2$), sản xuất thuốc nổ ($TNT$, nitroglycerin), phá mẫu quặng trong phân tích hoá học.'
  },
  {
    id: 'fc-6-14',
    chapterId: 'chuong-2',
    lessonId: 'bai-6',
    category: 'nitrogen',
    front: 'Phản ứng nào thể hiện tính acid của $HNO_3$ khi tác dụng với hợp chất vô cơ?',
    back: '$$CaCO_3 + 2HNO_3 \\rightarrow Ca(NO_3)_2 + CO_2\\uparrow + H_2O$$\n$$NH_3 + HNO_3 \\rightarrow NH_4NO_3$$'
  },
  {
    id: 'fc-6-15',
    chapterId: 'chuong-2',
    lessonId: 'bai-6',
    category: 'nitrogen',
    front: 'Trong công nghiệp sản xuất $HNO_3$ (phương pháp Ostwald), giai đoạn 1 oxi hoá $NH_3$ cần xúc tác gì và ở nhiệt độ nào?',
    back: 'Xúc tác là **hợp kim $Pt - Rh$ (platinum)** ở nhiệt độ khoảng **$800 - 900\\;^\\circ\\text{C}$**.'
  }
];

export const lesson6Quizzes: QuizQuestion[] = [
  {
    id: 'c2-b6-q1',
    chapterId: 'chuong-2',
    lessonId: 'bai-6',
    question: 'Oxide của nitrogen được tạo thành ở nhiệt độ rất cao, khi nitrogen có trong không khí bị oxi hoá được gọi là',
    options: [
      { id: 'A', text: '$NO_x$ tức thời.' },
      { id: 'B', text: '$NO_x$ nhiệt.' },
      { id: 'C', text: '$NO_x$ nhiên liệu.' },
      { id: 'D', text: '$NO_x$ tự nhiên.' }
    ],
    correctAnswer: 'B',
    explanation: '$NO_x$ tạo ra do nitrogen trong không khí bị oxi hoá ở nhiệt độ rất cao ($>3000\\;^\\circ\\text{C}$) hoặc do tia sét được gọi là $NO_x$ nhiệt (thermal - $NO_x$). (Câu 6.1 SBT)',
    difficulty: 'NhanBiet',
    source: 'SBT Hóa học 11 - Bài 6 (Câu 6.1)'
  },
  {
    id: 'c2-b6-q2',
    chapterId: 'chuong-2',
    lessonId: 'bai-6',
    question: 'Oxide của nitrogen được tạo thành khi nguyên tố nitrogen trong nhiên liệu hoặc sinh khối kết hợp với oxygen dư thừa trong không khí được gọi là',
    options: [
      { id: 'A', text: '$NO_x$ nhiên liệu.' },
      { id: 'B', text: '$NO_x$ tự nhiên.' },
      { id: 'C', text: '$NO_x$ tức thời.' },
      { id: 'D', text: '$NO_x$ nhiệt.' }
    ],
    correctAnswer: 'A',
    explanation: '$NO_x$ phát sinh từ thành phần nitrogen trong nhiên liệu hoá thạch/sinh khối được gọi là $NO_x$ nhiên liệu (fuel - $NO_x$). (Câu 6.2 SBT)',
    difficulty: 'NhanBiet',
    source: 'SBT Hóa học 11 - Bài 6 (Câu 6.2)'
  },
  {
    id: 'c2-b6-q3',
    chapterId: 'chuong-2',
    lessonId: 'bai-6',
    question: 'Oxide của nitrogen được tạo thành khi nitrogen trong không khí tác dụng với các gốc tự do được gọi là',
    options: [
      { id: 'A', text: '$NO_x$ nhiệt.' },
      { id: 'B', text: '$NO_x$ tức thời.' },
      { id: 'C', text: '$NO_x$ tự nhiên.' },
      { id: 'D', text: '$NO_x$ nhiên liệu.' }
    ],
    correctAnswer: 'B',
    explanation: '$NO_x$ hình thành qua phản ứng của $N_2$ với các gốc tự do được gọi là $NO_x$ tức thời (prompt - $NO_x$). (Câu 6.3 SBT)',
    difficulty: 'NhanBiet',
    source: 'SBT Hóa học 11 - Bài 6 (Câu 6.3)'
  },
  {
    id: 'c2-b6-q4',
    chapterId: 'chuong-2',
    lessonId: 'bai-6',
    question: 'Nitrogen monoxide được tạo thành khi mưa dông kèm theo sấm sét do phản ứng giữa nitrogen và oxygen trong không khí được gọi là',
    options: [
      { id: 'A', text: '$NO_x$ nhiên liệu.' },
      { id: 'B', text: '$NO_x$ tức thời.' },
      { id: 'C', text: '$NO_x$ tự nhiên.' },
      { id: 'D', text: '$NO_x$ nhiệt.' }
    ],
    correctAnswer: 'D',
    explanation: 'Tia lửa điện sấm sét tạo nhiệt độ cực cao kích hoạt phản ứng $N_2 + O_2 \\rightleftharpoons 2NO$ nên thuộc loại $NO_x$ nhiệt. (Câu 6.4 SBT)',
    difficulty: 'NhanBiet',
    source: 'SBT Hóa học 11 - Bài 6 (Câu 6.4)'
  },
  {
    id: 'c2-b6-q5',
    chapterId: 'chuong-2',
    lessonId: 'bai-6',
    question: 'Mưa acid là hiện tượng nước mưa có pH thấp hơn 5,6. Hai tác nhân chính gây mưa acid là',
    options: [
      { id: 'A', text: '$Cl_2, HCl$.' },
      { id: 'B', text: '$N_2, NH_3$.' },
      { id: 'C', text: '$SO_2, NO_x$.' },
      { id: 'D', text: '$S, H_2S$.' }
    ],
    correctAnswer: 'C',
    explanation: '$SO_2$ và $NO_x$ là hai tác nhân chính bị oxi hoá và hoà tan vào nước mưa tạo thành $H_2SO_4$ và $HNO_3$. (Câu 6.5 SBT)',
    difficulty: 'NhanBiet',
    source: 'SBT Hóa học 11 - Bài 6 (Câu 6.5)'
  },
  {
    id: 'c2-b6-q6',
    chapterId: 'chuong-2',
    lessonId: 'bai-6',
    question: 'Phân tử nào sau đây có chứa một liên kết cho - nhận?',
    options: [
      { id: 'A', text: '$NH_3$.' },
      { id: 'B', text: '$N_2$.' },
      { id: 'C', text: '$HNO_3$.' },
      { id: 'D', text: '$H_2$.' }
    ],
    correctAnswer: 'C',
    explanation: 'Trong phân tử $HNO_3$, nguyên tử nitrogen tạo một liên kết cho - nhận $N \\rightarrow O$ với một nguyên tử oxygen. (Câu 6.7 SBT)',
    difficulty: 'NhanBiet',
    source: 'SBT Hóa học 11 - Bài 6 (Câu 6.7)'
  },
  {
    id: 'c2-b6-q7',
    chapterId: 'chuong-2',
    lessonId: 'bai-6',
    question: 'Acid nào sau đây thể hiện tính oxi hoá mạnh khi tác dụng với chất khử?',
    options: [
      { id: 'A', text: '$HCl$.' },
      { id: 'B', text: '$HNO_3$.' },
      { id: 'C', text: '$HBr$.' },
      { id: 'D', text: '$H_3PO_4$.' }
    ],
    correctAnswer: 'B',
    explanation: '$HNO_3$ chứa nitrogen có số oxi hoá cao nhất ($+5$) nên có tính oxi hoá mạnh. (Câu 6.8 SBT)',
    difficulty: 'NhanBiet',
    source: 'SBT Hóa học 11 - Bài 6 (Câu 6.8)'
  },
  {
    id: 'c2-b6-q8',
    chapterId: 'chuong-2',
    lessonId: 'bai-6',
    question: 'Kim loại nào sau đây KHÔNG tác dụng với nitric acid?',
    options: [
      { id: 'A', text: '$Zn$.' },
      { id: 'B', text: '$Cu$.' },
      { id: 'C', text: '$Ag$.' },
      { id: 'D', text: '$Au$.' }
    ],
    correctAnswer: 'D',
    explanation: 'Vàng ($Au$) và platinum ($Pt$) trơ về mặt hoá học, không tác dụng với dung dịch $HNO_3$. (Câu 6.9 SBT)',
    difficulty: 'NhanBiet',
    source: 'SBT Hóa học 11 - Bài 6 (Câu 6.9)'
  },
  {
    id: 'c2-b6-q9',
    chapterId: 'chuong-2',
    lessonId: 'bai-6',
    question: 'Hiện tượng phú dưỡng là một biểu hiện của môi trường ao, hồ bị ô nhiễm do dư thừa các chất dinh dưỡng. Sự dư thừa dinh dưỡng chủ yếu do hàm lượng các ion nào sau đây vượt quá mức cho phép?',
    options: [
      { id: 'A', text: 'Sodium, potassium.' },
      { id: 'B', text: 'Calcium, magnesium.' },
      { id: 'C', text: 'Nitrate, phosphate.' },
      { id: 'D', text: 'Chloride, sulfate.' }
    ],
    correctAnswer: 'C',
    explanation: 'Hàm lượng ion nitrate ($NO_3^-$) và phosphate ($PO_4^{3-}$) vượt ngưỡng cho phép là nguyên nhân chính gây phú dưỡng ao hồ. (Câu 6.10 SBT)',
    difficulty: 'NhanBiet',
    source: 'SBT Hóa học 11 - Bài 6 (Câu 6.10)'
  },
  {
    id: 'c2-b6-q10',
    chapterId: 'chuong-2',
    lessonId: 'bai-6',
    question: 'Cho các nhận định sau về tính chất hoá học của nitric acid: (1) có tính acid mạnh; (2) có tính acid yếu; (3) có tính oxi hoá mạnh; (4) có tính khử mạnh. Số nhận định đúng là',
    options: [
      { id: 'A', text: '1.' },
      { id: 'B', text: '2.' },
      { id: 'C', text: '3.' },
      { id: 'D', text: '4.' }
    ],
    correctAnswer: 'B',
    explanation: 'Có 2 nhận định đúng là (1) và (3): $HNO_3$ vừa là acid mạnh, vừa có tính oxi hoá mạnh. (Câu 6.11 SBT)',
    difficulty: 'ThongHieu',
    source: 'SBT Hóa học 11 - Bài 6 (Câu 6.11)'
  },
  {
    id: 'c2-b6-q11',
    chapterId: 'chuong-2',
    lessonId: 'bai-6',
    question: 'Cho các nhận định sau về cấu tạo phân tử nitric acid:\n(a) Liên kết $O-H$ phân cực về phía oxygen.\n(b) Nguyên tử N có số oxi hoá là $+5$.\n(c) Nguyên tử N có hoá trị bằng 4.\n(d) Liên kết cho – nhận $N \\rightarrow O$ kém bền.\nSố nhận định đúng là',
    options: [
      { id: 'A', text: '1.' },
      { id: 'B', text: '2.' },
      { id: 'C', text: '3.' },
      { id: 'D', text: '4.' }
    ],
    correctAnswer: 'D',
    explanation: 'Cả 4 nhận định (a), (b), (c), (d) đều đúng theo cấu tạo phân tử $HNO_3$. (Câu 6.16 SBT)',
    difficulty: 'ThongHieu',
    source: 'SBT Hóa học 11 - Bài 6 (Câu 6.16)'
  },
  {
    id: 'c2-b6-q12',
    chapterId: 'chuong-2',
    lessonId: 'bai-6',
    question: 'Nitric acid dễ bị phân huỷ bởi ánh sáng hoặc nhiệt độ, tạo thành các sản phẩm là',
    options: [
      { id: 'A', text: '$NO_2, H_2O$.' },
      { id: 'B', text: '$NO_2, O_2, H_2O$.' },
      { id: 'C', text: '$N_2, O_2, H_2O$.' },
      { id: 'D', text: '$N_2, H_2O$.' }
    ],
    correctAnswer: 'B',
    explanation: 'Phương trình phân huỷ: $4HNO_3 \\xrightarrow{h\\nu, t^o} 4NO_2 + O_2 + 2H_2O$. (Câu 6.17 SBT)',
    difficulty: 'ThongHieu',
    source: 'SBT Hóa học 11 - Bài 6 (Câu 6.17)'
  },
  {
    id: 'c2-b6-q13',
    chapterId: 'chuong-2',
    lessonId: 'bai-6',
    question: 'Để điều chế silver nitrate ($AgNO_3$) từ một mẫu silver (bạc) tinh khiết, cần hoà tan mẫu silver vào dung dịch nào sau đây?',
    options: [
      { id: 'A', text: '$Cu(NO_3)_2$.' },
      { id: 'B', text: '$HNO_3$.' },
      { id: 'C', text: '$NaNO_3$.' },
      { id: 'D', text: '$KNO_3$.' }
    ],
    correctAnswer: 'B',
    explanation: 'Bạc tác dụng trực tiếp với $HNO_3$: $3Ag + 4HNO_3 \\rightarrow 3AgNO_3 + NO\\uparrow + 2H_2O$. (Câu 6.18 SBT)',
    difficulty: 'ThongHieu',
    source: 'SBT Hóa học 11 - Bài 6 (Câu 6.18)'
  },
  {
    id: 'c2-b6-q14',
    chapterId: 'chuong-2',
    lessonId: 'bai-6',
    question: 'Trong công nghiệp, quá trình sản xuất $Ca(NO_3)_2$ dùng làm phân bón được thực hiện bằng phản ứng giữa dung dịch $HNO_3$ với hợp chất phổ biến, giá rẻ nào sau đây?',
    options: [
      { id: 'A', text: '$CaO$.' },
      { id: 'B', text: '$Ca(OH)_2$.' },
      { id: 'C', text: '$CaCO_3$.' },
      { id: 'D', text: '$CaSO_4$.' }
    ],
    correctAnswer: 'C',
    explanation: 'Người ta dùng đá vôi $CaCO_3$ giá rẻ và dồi dào trong tự nhiên: $CaCO_3 + 2HNO_3 \\rightarrow Ca(NO_3)_2 + CO_2\\uparrow + H_2O$. (Câu 6.19 SBT)',
    difficulty: 'ThongHieu',
    source: 'SBT Hóa học 11 - Bài 6 (Câu 6.19)'
  },
  {
    id: 'c2-b6-q15',
    chapterId: 'chuong-2',
    lessonId: 'bai-6',
    question: 'Cho dung dịch $HNO_3$ tác dụng với các chất sau: $NH_3, CaCO_3, Ag, NaOH$. Số phản ứng trong đó $HNO_3$ đóng vai trò acid Brønsted (nhường proton) là',
    options: [
      { id: 'A', text: '4.' },
      { id: 'B', text: '1.' },
      { id: 'C', text: '3.' },
      { id: 'D', text: '2.' }
    ],
    correctAnswer: 'C',
    explanation: 'Có 3 phản ứng đóng vai trò acid Brønsted (nhường $H^+$): với $NH_3, CaCO_3, NaOH$. Phản ứng với $Ag$ là phản ứng oxi hoá - khử (thể hiện tính oxi hoá). (Câu 6.20 SBT)',
    difficulty: 'ThongHieu',
    source: 'SBT Hóa học 11 - Bài 6 (Câu 6.20)'
  }
];
