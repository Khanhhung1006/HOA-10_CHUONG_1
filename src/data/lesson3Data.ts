import { TheorySectionData, Flashcard, QuizQuestion } from '../types';

export const lesson3Theory: TheorySectionData = {
  id: 'bai-3',
  title: 'Bài 3: Ôn tập Chương 1 – Cân bằng hoá học',
  objectives: [
    'Hệ thống hoá toàn bộ kiến thức cốt lõi về Cân bằng hoá học và Cân bằng trong dung dịch nước.',
    'Vận dụng thành thạo hằng số cân bằng $K_c$, nguyên lí Le Chatelier và biểu thức tính pH.',
    'Giải quyết các dạng bài tập định tính và định lượng: tính hằng số cân bằng, tính pH sau pha loãng hoặc trộn lẫn, bài toán chuẩn độ acid – base.'
  ],
  summary: 'Chương 1 trang bị hai nền tảng cốt lõi của Hoá học hiện đại: (1) Cân bằng hoá học của phản ứng thuận nghịch ($v_{thuận} = v_{nghịch}$, hằng số $K_c$, nguyên lí chuyển dịch Le Chatelier theo nồng độ, nhiệt độ, áp suất) và (2) Cân bằng trong dung dịch nước (sự điện li, thuyết acid – base Brønsted – Lowry, tích số ion của nước $K_w = 10^{-14}$, thang đo pH, sự thuỷ phân của ion và phương pháp chuẩn độ acid – base).',
  coreKnowledge: [
    {
      heading: '1. Sơ đồ hệ thống hoá Cân bằng hoá học',
      points: [
        'Phản ứng thuận nghịch: $aA + bB \\rightleftharpoons cC + dD$.',
        'Trạng thái cân bằng: $v_{thuận} = v_{nghịch} \\ne 0$; nồng độ các chất trong hệ không đổi theo thời gian.',
        'Hằng số cân bằng $K_c = \\frac{[C]^c[D]^d}{[A]^a[B]^b}$ (chỉ phụ thuộc nhiệt độ và bản chất phản ứng; không đưa chất rắn vào).',
        'Chuyển dịch cân bằng: Tăng T $\\rightarrow$ Thu nhiệt; Giảm T $\\rightarrow$ Toả nhiệt; Tăng P $\\rightarrow$ Giảm số mol khí; Tăng nồng độ chất $\\rightarrow$ Giảm nồng độ chất đó; Chất xúc tác không làm chuyển dịch cân bằng.'
      ],
      latexEquations: [
        'K_c = \\frac{[C]^c[D]^d}{[A]^a[B]^b}',
        '2NO_2(g) \\rightleftharpoons N_2O_4(g) \\quad (\\Delta_r H_{298}^o < 0)'
      ]
    },
    {
      heading: '2. Sơ đồ hệ thống hoá Cân bằng trong dung dịch nước',
      points: [
        'Chất điện li mạnh: Acid mạnh ($HCl, HNO_3, H_2SO_4$), Base mạnh ($NaOH, Ba(OH)_2$), Hầu hết muối $\\rightarrow$ Phân li hoàn toàn (mũi tên 1 chiều).',
        'Chất điện li yếu: Acid yếu ($CH_3COOH, HF, HCN$), Base yếu ($NH_3, Cu(OH)_2$) $\\rightarrow$ Phân li thuận nghịch (mũi tên $\\rightleftharpoons$).',
        'Thuyết Brønsted – Lowry: Acid cho proton ($H^+$), Base nhận proton ($H^+$).',
        'Thang pH và tích số nước: $K_w = [H^+][OH^-] = 10^{-14}$ ở 25 °C; $pH = -\\lg[H^+]$. Acid có $pH < 7$, Trung tính có $pH = 7$, Base có $pH > 7$.',
        'Thuỷ phân ion: Cation base yếu ($Al^{3+}, Fe^{3+}$) thuỷ phân tạo $H^+$ (acid); Anion acid yếu ($CO_3^{2-}, CH_3COO^-$) thuỷ phân tạo $OH^-$ (base).',
        'Chuẩn độ acid - base: $V_{HCl} \\cdot C_{HCl} = V_{NaOH} \\cdot C_{NaOH}$.'
      ]
    }
  ],
  formulas: [
    {
      name: 'Hằng số cân bằng ($K_c$)',
      latex: 'K_c = \\frac{[C]^c[D]^d}{[A]^a[B]^b}',
      description: 'Tỉ số tích nồng độ sản phẩm chia tích nồng độ chất phản ứng với số mũ tương ứng.'
    },
    {
      name: 'Thang đo pH và Tích số ion của nước ($K_w$)',
      latex: 'K_w = [H^+][OH^-] = 10^{-14}, \\quad pH = -\\lg[H^+], \\quad pH + pOH = 14',
      description: 'Công thức chuyển đổi nồng độ ion và tính pH dung dịch nước ở $25\\;^\\circ\\text{C}$.'
    },
    {
      name: 'Công thức pha loãng và Chuẩn độ dung dịch',
      latex: 'C_1 \\cdot V_1 = C_2 \\cdot V_2, \\quad V_A \\cdot C_A = V_B \\cdot C_B',
      description: 'Áp dụng cho bài toán pha loãng nồng độ và xác định nồng độ bằng phương pháp chuẩn độ.'
    }
  ],
  keyConcepts: [
    { term: 'Cân bằng động', definition: 'Cân bằng hoá học mà ở đó phản ứng thuận và nghịch liên tục tiếp diễn với tốc độ bằng nhau.' },
    { term: 'Chất chỉ thị pH', definition: 'Hợp chất có màu biến đổi phụ thuộc vào giá trị pH của dung dịch (quỳ tím, phenolphthalein).' },
    { term: 'Chuẩn độ thể tích', definition: 'Kĩ thuật định lượng dùng dung dịch chuẩn đã biết nồng độ để xác định nồng độ dung dịch khác.' }
  ],
  examples: [
    {
      title: 'Xác định hằng số cân bằng $K_c$ từ nồng độ cân bằng',
      content: 'Phản ứng: $H_2(g) + I_2(g) \\rightleftharpoons 2HI(g)$ ở 430 °C.\nBiết $[H_2] = [I_2] = 0,107\\text{ M}$, $[HI] = 0,786\\text{ M}$.\n$$K_c = \\frac{[HI]^2}{[H_2][I_2]} = \\frac{(0,786)^2}{0,107 \\times 0,107} \\approx 53,96$$'
    },
    {
      title: 'Tính pH của hỗn hợp sau phản ứng trung hoà',
      content: 'Trộn 5 mL dung dịch $HCl$ 0,1 M ($pH=1$) với 10 mL dung dịch $NaOH$ 0,1 M ($pH=13$).\n- $n_{H^+} = 5 \\cdot 10^{-4}$ mol, $n_{OH^-} = 10 \\cdot 10^{-4}$ mol.\n- $OH^-$ dư: $n_{OH^- \\text{ dư}} = 5 \\cdot 10^{-4}$ mol trong $V = 15$ mL $= 0,015$ L.\n- $[OH^-] = \\frac{5 \\cdot 10^{-4}}{0,015} \\approx 0,0333\\text{ M} \\Rightarrow pOH = 1,48 \\Rightarrow pH = 12,52$.'
    }
  ],
  commonMistakes: [
    {
      mistake: 'Quên trừ lượng proton / hydroxide đã phản ứng khi trộn hai dung dịch acid và base.',
      correction: 'Phải tìm chất dư ($H^+$ hay $OH^-$) rồi chia cho tổng thể tích sau khi trộn để tính nồng độ và pH.',
      why: 'Phản ứng trung hoà diễn ra hoàn toàn: $H^+ + OH^- \\rightarrow H_2O$.'
    },
    {
      mistake: 'Nghĩ rằng $K_c$ thay đổi khi thêm bớt chất phản ứng hoặc nén bình.',
      correction: 'Hằng số $K_c$ là hằng số ở một nhiệt độ xác định, không đổi dù nồng độ hay áp suất thay đổi.',
      why: 'Chỉ có nhiệt độ và bản chất phản ứng làm thay đổi giá trị $K_c$.'
    }
  ],
  memoryTips: [
    'Bảng pH: $pH = 1$ (Acid mạnh), $pH = 7$ (Nước tinh khiết), $pH = 13$ (Base mạnh).',
    'Cặp ion không bị thuỷ phân: Kim loại nhóm IA ($Na^+, K^+$), $Ca^{2+}, Ba^{2+}$, gốc $Cl^-, NO_3^-, SO_4^{2-}$.',
    'Chuẩn độ: Nhỏ từng giọt đến khi màu hồng nhạt bền trong 10-20 giây.'
  ],
  glossary: [
    { term: 'Hằng số cân bằng $K_c$', meaning: 'Tỉ số đặc trưng mức độ hoàn thành phản ứng thuận ở nhiệt độ không đổi.' },
    { term: 'Thuyết Brønsted – Lowry', meaning: 'Mô hình acid cho $H^+$ và base nhận $H^+$.' },
    { term: 'Burette', meaning: 'Ống chuẩn độ chính xác có van khoá.' }
  ],
  reviewChecklist: [
    'Thành thạo lập biểu thức $K_c$ và tính toán nồng độ cân bằng.',
    'Dự đoán chiều chuyển dịch cân bằng theo Le Chatelier.',
    'Tính toán pH của dung dịch acid mạnh, base mạnh, dung dịch sau pha loãng và trộn lẫn.',
    'Giải thích hiện tượng thuỷ phân ion và vai trò trong đời sống.',
    'Hiểu tường tận phương pháp và thao tác chuẩn độ acid - base.'
  ]
};

export const lesson3Flashcards: Flashcard[] = [
  {
    id: 'fc-3-1',
    lessonId: 'bai-3',
    category: 'khai-niem',
    front: 'Hai đặc điểm quan trọng nhất của trạng thái cân bằng hoá học là gì?',
    back: '1. Tốc độ phản ứng thuận bằng tốc độ phản ứng nghịch: $v_{thuận} = v_{nghịch} > 0$ (cân bằng động).\n2. Nồng độ của tất cả các chất trong hệ phản ứng không thay đổi theo thời gian.'
  },
  {
    id: 'fc-3-2',
    lessonId: 'bai-3',
    category: 'cong-thuc',
    front: 'Biểu thức tính $K_c$ của phản ứng: $CH_3COOH(l) + CH_3OH(l) \\rightleftharpoons CH_3COOCH_3(l) + H_2O(l)$ là gì?',
    back: '$$K_c = \\frac{[CH_3COOCH_3][H_2O]}{[CH_3COOH][CH_3OH]}$$\nVì các chất đều ở pha lỏng trong dung dịch đồng thể nên $H_2O$ được tính trong biểu thức $K_c$.'
  },
  {
    id: 'fc-3-3',
    lessonId: 'bai-3',
    category: 'cong-thuc',
    front: 'Biểu thức tính $K_c$ của phản ứng: $3Fe(s) + 4H_2O(g) \\rightleftharpoons Fe_3O_4(s) + 4H_2(g)$ là gì?',
    back: '$$K_c = \\frac{[H_2]^4}{[H_2O]^4}$$\n(Do $Fe$ và $Fe_3O_4$ là chất rắn nên không biểu diễn trong biểu thức $K_c$).'
  },
  {
    id: 'fc-3-4',
    lessonId: 'bai-3',
    category: 'chuyen-dich',
    front: 'Xét phản ứng: $2NO(g) + O_2(g) \\rightleftharpoons 2NO_2(g) \\quad \\Delta_r H_{298}^o = -115\\text{ kJ}$. Tăng áp suất và tăng nhiệt độ thì cân bằng chuyển dịch thế nào?',
    back: '- Tăng áp suất: Chuyển dịch chiều thuận (từ 3 mol khí $\\rightarrow$ 2 mol khí).\n- Tăng nhiệt độ: Chuyển dịch chiều nghịch (chiều thu nhiệt do chiều thuận toả nhiệt $\\Delta_r H_{298}^o < 0$).'
  },
  {
    id: 'fc-3-5',
    lessonId: 'bai-3',
    category: 'chuyen-dich',
    front: 'Hằng số cân bằng $K_c$ có thay đổi khi tăng nồng độ chất phản ứng hoặc tăng áp suất không?',
    back: 'KHÔNG. $K_c$ chỉ thay đổi khi nhiệt độ thay đổi. Biến đổi nồng độ hay áp suất chỉ làm cân bằng chuyển dịch đến vị trí cân bằng mới sao cho tỉ số nồng độ vẫn thoả mãn giá trị $K_c$ tại nhiệt độ đó.'
  },
  {
    id: 'fc-3-6',
    lessonId: 'bai-3',
    category: 'dien-li',
    front: 'Dung dịch $FeCl_3$ có môi trường acid hay base? Viết phương trình ion minh hoạ.',
    back: 'Môi trường acid ($pH < 7$).\nIon $Cl^-$ không bị thuỷ phân, ion $Fe^{3+}$ bị thuỷ phân giải phóng $H^+$:\n$$Fe^{3+} + H_2O \\rightleftharpoons Fe(OH)^{2+} + H^+$$'
  },
  {
    id: 'fc-3-7',
    lessonId: 'bai-3',
    category: 'ph',
    front: 'Sắp xếp thứ tự pH tăng dần của các dung dịch 0,1 M: $HCl, H_2SO_4, CH_3COOH$.',
    back: 'Thứ tự pH tăng dần:\n$$pH(H_2SO_4) < pH(HCl) < pH(CH_3COOH)$$\nGiải thích: $H_2SO_4$ điện li ra 2 ion $H^+$ ($[H^+] = 0,2$ M); $HCl$ điện li hoàn toàn ($[H^+] = 0,1$ M); $CH_3COOH$ điện li yếu ($[H^+] < 0,1$ M).'
  },
  {
    id: 'fc-3-8',
    lessonId: 'bai-3',
    category: 'ph',
    front: 'Dung dịch nào có pH cao nhất trong các dung dịch 0,1 M sau: $H_2SO_4, HCl, NH_3, NaOH$?',
    back: 'Dung dịch $NaOH$ có pH cao nhất ($pH = 13$).\n$NaOH$ là base mạnh điện li hoàn toàn ($[OH^-] = 0,1$ M $\\Rightarrow pOH = 1 \\Rightarrow pH = 13$). $NH_3$ là base yếu ($pH < 13$), $HCl$ và $H_2SO_4$ là acid ($pH \\le 1$).'
  },
  {
    id: 'fc-3-9',
    lessonId: 'bai-3',
    category: 'thuc-tien',
    front: 'Methylamine ($CH_3NH_2$) trong nước nhận proton của nước tạo môi trường gì?',
    back: 'Môi trường base ($pH > 7$).\nPhương trình: $$CH_3NH_2 + H_2O \\rightleftharpoons CH_3NH_3^+ + OH^-$$\n$CH_3NH_2$ nhận $H^+$ từ $H_2O$ nên $CH_3NH_2$ là base, dung dịch có $OH^-$ nên $pH > 7$.'
  },
  {
    id: 'fc-3-10',
    lessonId: 'bai-3',
    category: 'thuc-tien',
    front: 'Trộn 10 mL dung dịch $HCl$ ($pH=1$) với 10 mL dung dịch $NaOH$ ($pH=13$) thì dung dịch thu được có pH bằng bao nhiêu?',
    back: '$pH = 7$ (trung tính).\nVì $n_{H^+} = 0,01 \\times 0,1 = 0,001$ mol và $n_{OH^-} = 0,01 \\times 0,1 = 0,001$ mol vừa đủ phản ứng trung hoà tạo $NaCl$ và $H_2O$.'
  },
  {
    id: 'fc-3-11',
    lessonId: 'bai-3',
    category: 'dien-li',
    front: 'Phương trình điện li của các muối $KNO_3, Na_2CO_3, FeCl_3$ viết như thế nào?',
    back: '- $KNO_3 \\rightarrow K^+ + NO_3^-$\n- $Na_2CO_3 \\rightarrow 2Na^+ + CO_3^{2-}$\n- $FeCl_3 \\rightarrow Fe^{3+} + 3Cl^-$'
  },
  {
    id: 'fc-3-12',
    lessonId: 'bai-3',
    category: 'cong-thuc',
    front: 'Công thức chuyển đổi giữa $[H^+]$ và pH, và công thức tích số ion của nước là gì?',
    back: '$$pH = -\\lg[H^+] \\Leftrightarrow [H^+] = 10^{-pH}$$\n$$K_w = [H^+][OH^-] = 10^{-14} \\quad (25\\;^o\\text{C})$$'
  },
  {
    id: 'fc-3-13',
    lessonId: 'bai-3',
    category: 'thuc-tien',
    front: 'Acid Ascorbic (vitamin C) có công thức đơn giản HAsc. Khi hoà tan 5,0 g vào 250 mL nước tạo dung dịch có tính chất gì?',
    back: 'Dung dịch có tính acid ($pH \\approx 2,5$) do có cân bằng phân li tạo ion $H^+$: $$HAsc \\rightleftharpoons H^+ + Asc^- \\quad K_a = 8 \\cdot 10^{-5}$$'
  },
  {
    id: 'fc-3-14',
    lessonId: 'bai-3',
    category: 'chuyen-dich',
    front: 'Trong công nghiệp tổng hợp $NH_3$, vì sao không thực hiện phản ứng ở nhiệt độ quá thấp dù toả nhiệt?',
    back: 'Ở nhiệt độ quá thấp, tốc độ phản ứng diễn ra vô cùng chậm khiến thời gian phản ứng kéo dài, không đạt hiệu quả kinh tế. Do đó nhiệt độ tối ưu được chọn là khoảng 450 °C kết hợp chất xúc tác bột Fe.'
  },
  {
    id: 'fc-3-15',
    lessonId: 'bai-3',
    category: 'thuc-tien',
    front: 'Tại sao $NaOH$ rắn để lâu ngoài không khí lại có thể làm sai khác nồng độ khi pha dung dịch chuẩn?',
    back: 'Vì $NaOH$ rắn có tính hút ẩm rất mạnh trong không khí và phản ứng hấp thụ một lượng nhỏ khí $CO_2$ tạo $Na_2CO_3$: $$2NaOH + CO_2 \\rightarrow Na_2CO_3 + H_2O$$'
  },
  {
    id: 'fc-3-16',
    lessonId: 'bai-3',
    category: 'cong-thuc',
    front: 'Viết công thức định luật tác dụng khối lượng cho phản ứng thuận: $H_2 + I_2 \\rightarrow 2HI$.',
    back: 'Tốc độ phản ứng thuận: $$v_{thuận} = k_{thuận} \\cdot [H_2] \\cdot [I_2]$$\nTốc độ phản ứng nghịch: $$v_{nghịch} = k_{nghịch} \\cdot [HI]^2$$'
  }
];

export const finalChapterExamQuizzes: QuizQuestion[] = [
  {
    id: 'fe-1',
    lessonId: 'final-exam',
    question: 'Cho phản ứng hoá học sau: $CH_3COOH(l) + CH_3OH(l) \\rightleftharpoons CH_3COOCH_3(l) + H_2O(l)$. Biểu thức hằng số cân bằng của phản ứng trên là:',
    options: [
      { id: 'A', text: '$K_c = \\frac{[CH_3COOCH_3][H_2O]}{[CH_3COOH][CH_3OH]}$' },
      { id: 'B', text: '$K_c = \\frac{[CH_3COOCH_3]}{[CH_3COOH][CH_3OH]}$' },
      { id: 'C', text: '$K_c = \\frac{[CH_3COOH][CH_3OH]}{[CH_3COOCH_3][H_2O]}$' },
      { id: 'D', text: '$K_c = \\frac{[CH_3COOCH_3][H_2O]}{[CH_3COOCH_3]}$' }
    ],
    correctAnswer: 'A',
    explanation: 'Trong phản ứng ester hoá dạng lỏng đồng thể, tất cả các chất kể cả $H_2O$ đều tham gia cấu thành nồng độ dung dịch nên biểu thức $K_c = \\frac{[CH_3COOCH_3][H_2O]}{[CH_3COOH][CH_3OH]}$.',
    difficulty: 'NhanBiet',
    source: 'SBT Bài 3.1'
  },
  {
    id: 'fe-2',
    lessonId: 'final-exam',
    question: 'Cho phản ứng hoá học sau: $3Fe(s) + 4H_2O(g) \\rightleftharpoons Fe_3O_4(s) + 4H_2(g)$. Biểu thức hằng số cân bằng của phản ứng trên là:',
    options: [
      { id: 'A', text: '$K_c = \\frac{[H_2]^4[Fe_3O_4]}{[H_2O]^4[Fe]^3}$' },
      { id: 'B', text: '$K_c = \\frac{[H_2]^4}{[H_2O]^4}$' },
      { id: 'C', text: '$K_c = \\frac{4[H_2]}{4[H_2O]}$' },
      { id: 'D', text: '$K_c = \\frac{4[H_2][Fe_3O_4]}{4[H_2O]3[Fe]}$' }
    ],
    correctAnswer: 'B',
    explanation: 'Các chất rắn $Fe(s)$ và $Fe_3O_4(s)$ không được đưa vào biểu thức hằng số cân bằng $K_c$. Do đó $K_c = \\frac{[H_2]^4}{[H_2O]^4}$.',
    difficulty: 'NhanBiet',
    source: 'SBT Bài 3.2'
  },
  {
    id: 'fe-3',
    lessonId: 'final-exam',
    question: 'Cho phản ứng hoá học sau: $2NO(g) + O_2(g) \\rightleftharpoons 2NO_2(g) \\quad \\Delta_r H_{298}^o = -115\\text{ kJ}$. Nhận xét nào sau đây KHÔNG đúng?',
    options: [
      { id: 'A', text: 'Nếu tăng nhiệt độ thì cân bằng trên chuyển dịch theo chiều nghịch.' },
      { id: 'B', text: 'Nếu tăng áp suất thì cân bằng trên chuyển dịch theo chiều nghịch.' },
      { id: 'C', text: 'Hằng số cân bằng của phản ứng trên chỉ phụ thuộc vào nhiệt độ.' },
      { id: 'D', text: 'Phản ứng thuận là phản ứng toả nhiệt.' }
    ],
    correctAnswer: 'B',
    explanation: 'Vế trái có $2 + 1 = 3$ mol khí, vế phải có 2 mol khí. Khi tăng áp suất, cân bằng chuyển dịch theo chiều giảm số mol khí (chiều thuận từ trái sang phải), do đó nhận định B "chuyển dịch theo chiều nghịch" là SAI.',
    difficulty: 'ThongHieu',
    source: 'SBT Bài 3.3'
  },
  {
    id: 'fe-4',
    lessonId: 'final-exam',
    question: 'Cho cân bằng hoá học: $2CO_2(g) \\rightleftharpoons 2CO(g) + O_2(g)$. Ở $T\\;^o\\text{C}$, nồng độ các chất ở trạng thái cân bằng: $[CO_2] = 1,2\\text{ mol/L}$, $[CO] = 0,35\\text{ mol/L}$, $[O_2] = 0,15\\text{ mol/L}$. Hằng số cân bằng $K_c$ của phản ứng tại $T\\;^o\\text{C}$ là:',
    options: [
      { id: 'A', text: '$1,276 \\cdot 10^{-2}$' },
      { id: 'B', text: '$4,375 \\cdot 10^{-2}$' },
      { id: 'C', text: '78,36' },
      { id: 'D', text: '22,85' }
    ],
    correctAnswer: 'A',
    explanation: '$K_c = \\frac{[CO]^2[O_2]}{[CO_2]^2} = \\frac{(0,35)^2 \\times 0,15}{(1,2)^2} = \\frac{0,1225 \\times 0,15}{1,44} \\approx 1,276 \\cdot 10^{-2}$.',
    difficulty: 'ThongHieu',
    source: 'SBT Bài 3.4'
  },
  {
    id: 'fe-5',
    lessonId: 'final-exam',
    question: 'Trong dung dịch nước, cation kim loại mạnh, gốc acid mạnh không bị thuỷ phân, còn cation kim loại trung bình và yếu bị thuỷ phân tạo môi trường acid, gốc acid yếu bị thuỷ phân tạo môi trường base. Dung dịch muối nào sau đây có $pH < 7$?',
    options: [
      { id: 'A', text: '$FeCl_3$' },
      { id: 'B', text: '$KCl$' },
      { id: 'C', text: '$Na_2CO_3$' },
      { id: 'D', text: '$Na_2SO_4$' }
    ],
    correctAnswer: 'A',
    explanation: '$FeCl_3$ chứa cation $Fe^{3+}$ bị thuỷ phân trong nước tạo ion $H^+$ ($Fe^{3+} + H_2O \\rightleftharpoons Fe(OH)^{2+} + H^+$) làm dung dịch có môi trường acid ($pH < 7$).',
    difficulty: 'NhanBiet',
    source: 'SBT Bài 3.5'
  },
  {
    id: 'fe-6',
    lessonId: 'final-exam',
    question: 'Trong các dung dịch sau có cùng nồng độ 0,1 M, dung dịch nào có pH cao nhất?',
    options: [
      { id: 'A', text: '$H_2SO_4$' },
      { id: 'B', text: '$HCl$' },
      { id: 'C', text: '$NH_3$' },
      { id: 'D', text: '$NaOH$' }
    ],
    correctAnswer: 'D',
    explanation: '$NaOH$ là base mạnh, điện li hoàn toàn ra $[OH^-] = 0,1\\text{ M} \\Rightarrow pOH = 1 \\Rightarrow pH = 13$, là dung dịch có pH cao nhất.',
    difficulty: 'NhanBiet',
    source: 'SBT Bài 3.6'
  },
  {
    id: 'fe-7',
    lessonId: 'final-exam',
    question: 'Hằng số $K_c$ của một phản ứng thuận nghịch phụ thuộc vào yếu tố nào sau đây?',
    options: [
      { id: 'A', text: 'Nồng độ các chất phản ứng' },
      { id: 'B', text: 'Nhiệt độ' },
      { id: 'C', text: 'Áp suất chung của hệ' },
      { id: 'D', text: 'Chất xúc tác' }
    ],
    correctAnswer: 'B',
    explanation: 'Hằng số cân bằng $K_c$ của một phản ứng thuận nghịch chỉ phụ thuộc vào bản chất phản ứng và nhiệt độ.',
    difficulty: 'NhanBiet',
    source: 'SGK Bài 3.1'
  },
  {
    id: 'fe-8',
    lessonId: 'final-exam',
    question: 'Thêm nước vào 10 mL dung dịch $HCl$ 1,0 mol/L để được 1 000 mL dung dịch A. Dung dịch mới thu được có pH thay đổi như thế nào so với dung dịch ban đầu?',
    options: [
      { id: 'A', text: 'pH giảm đi 2 đơn vị.' },
      { id: 'B', text: 'pH giảm đi 0,5 đơn vị.' },
      { id: 'C', text: 'pH tăng gấp đôi.' },
      { id: 'D', text: 'pH tăng 2 đơn vị.' }
    ],
    correctAnswer: 'D',
    explanation: 'Ban đầu $[H^+] = 1,0\\text{ M} \\Rightarrow pH = 0$. Sau pha loãng 100 lần ($10\\text{ mL} \\rightarrow 1000\\text{ mL}$), nồng độ $[H^+] = 0,01\\text{ M} = 10^{-2}\\text{ M} \\Rightarrow pH = 2$. Vậy pH tăng thêm 2 đơn vị.',
    difficulty: 'ThongHieu',
    source: 'SGK Bài 3.2'
  },
  {
    id: 'fe-9',
    lessonId: 'final-exam',
    question: 'Cho cân bằng hoá học: $H_2(g) + I_2(g) \\rightleftharpoons 2HI(g) \\quad \\Delta_r H_{298}^o = -9,6\\text{ kJ}$. Nhận xét nào sau đây KHÔNG đúng?',
    options: [
      { id: 'A', text: 'Khi tăng nhiệt độ, cân bằng trên chuyển dịch theo chiều nghịch.' },
      { id: 'B', text: 'Ở nhiệt độ không đổi, khi tăng áp suất thì cân bằng không bị chuyển dịch.' },
      { id: 'C', text: 'Ở nhiệt độ không đổi, khi tăng nồng độ $H_2$ hoặc $I_2$ thì giá trị hằng số cân bằng tăng.' },
      { id: 'D', text: 'Ở trạng thái cân bằng, tốc độ phản ứng thuận bằng tốc độ phản ứng nghịch.' }
    ],
    correctAnswer: 'C',
    explanation: 'Ở nhiệt độ không đổi, việc thay đổi nồng độ các chất chỉ làm cân bằng chuyển dịch chứ không làm thay đổi giá trị hằng số cân bằng $K_c$. Do đó C sai.',
    difficulty: 'ThongHieu',
    source: 'SGK Bài 3.5'
  },
  {
    id: 'fe-10',
    lessonId: 'final-exam',
    question: 'Cho cân bằng trong lò luyện gang: $Fe_2O_3(s) + 3CO(g) \\rightleftharpoons 2Fe(s) + 3CO_2(g) \\quad \\Delta_r H^o < 0$. Yếu tố nào sau đây làm cân bằng chuyển dịch về bên phải (tăng hiệu suất)?',
    options: [
      { id: 'A', text: 'Tăng nhiệt độ' },
      { id: 'B', text: 'Tăng áp suất' },
      { id: 'C', text: 'Giảm nhiệt độ và tăng nồng độ CO' },
      { id: 'D', text: 'Thêm chất xúc tác' }
    ],
    correctAnswer: 'C',
    explanation: 'Chiều thuận là toả nhiệt ($\\Delta_r H^o < 0$) nên giảm nhiệt độ sẽ làm cân bằng chuyển dịch sang phải. Tăng nồng độ chất phản ứng $CO$ cũng thúc đẩy cân bằng chuyển dịch sang phải. Lưu ý tổng số mol khí 2 vế đều là 3 mol nên áp suất không ảnh hưởng.',
    difficulty: 'ThongHieu',
    source: 'SGK Bài 3.6'
  },
  {
    id: 'fe-11',
    lessonId: 'final-exam',
    question: 'Phản ứng nào sau đây là phản ứng một chiều?',
    options: [
      { id: 'A', text: '$N_2(g) + 3H_2(g) \\rightleftharpoons 2NH_3(g)$' },
      { id: 'B', text: '$2SO_2(g) + O_2(g) \\rightleftharpoons 2SO_3(g)$' },
      { id: 'C', text: '$NaOH(aq) + HCl(aq) \\rightarrow NaCl(aq) + H_2O(l)$' },
      { id: 'D', text: '$CH_3COOH(aq) \\rightleftharpoons CH_3COO^-(aq) + H^+(aq)$' }
    ],
    correctAnswer: 'C',
    explanation: 'Phản ứng trung hoà giữa base mạnh $NaOH$ và acid mạnh $HCl$ xảy ra hoàn toàn một chiều tạo $NaCl$ và $H_2O$.',
    difficulty: 'NhanBiet',
    source: 'SGK Bài 1'
  },
  {
    id: 'fe-12',
    lessonId: 'final-exam',
    question: 'Cho phản ứng: $CO(g) + H_2O(g) \\rightleftharpoons H_2(g) + CO_2(g)$. Ở 700 °C, hằng số cân bằng $K_c = 8,3$. Cho 1 mol $CO$ và 1 mol $H_2O$ vào bình kín 10 lít giữ ở 700 °C. Nồng độ $[CO]$ tại trạng thái cân bằng là:',
    options: [
      { id: 'A', text: '0,0258 M' },
      { id: 'B', text: '0,0742 M' },
      { id: 'C', text: '0,1000 M' },
      { id: 'D', text: '0,0500 M' }
    ],
    correctAnswer: 'A',
    explanation: 'Ban đầu $[CO] = [H_2O] = \\frac{1}{10} = 0,1$ M. Gọi $x$ là nồng độ $CO$ phản ứng. Ở cân bằng: $[CO] = [H_2O] = 0,1 - x$; $[H_2] = [CO_2] = x$. $K_c = \\frac{x^2}{(0,1-x)^2} = 8,3 \\Rightarrow \\frac{x}{0,1-x} = \\sqrt{8,3} \\approx 2,881 \\Rightarrow x \\approx 0,0742$ M. Do đó $[CO]_{\\text{cân bằng}} = 0,1 - 0,0742 = 0,0258$ M.',
    difficulty: 'VanDung',
    source: 'SGK Bài 3.7'
  },
  {
    id: 'fe-13',
    lessonId: 'final-exam',
    question: 'Theo thuyết Brønsted – Lowry, ion nào sau đây là chất lưỡng tính trong dung dịch nước?',
    options: [
      { id: 'A', text: '$CO_3^{2-}$' },
      { id: 'B', text: '$HCO_3^-$' },
      { id: 'C', text: '$SO_4^{2-}$' },
      { id: 'D', text: '$NH_4^+$' }
    ],
    correctAnswer: 'B',
    explanation: '$HCO_3^-$ có thể nhường proton ($HCO_3^- + H_2O \\rightleftharpoons H_3O^+ + CO_3^{2-}$) và nhận proton ($HCO_3^- + H_2O \\rightleftharpoons H_2CO_3 + OH^-$) nên là chất lưỡng tính.',
    difficulty: 'NhanBiet',
    source: 'SGK Bài 2'
  },
  {
    id: 'fe-14',
    lessonId: 'final-exam',
    question: 'Chất nào sau đây không dẫn điện khi tan trong nước tạo dung dịch?',
    options: [
      { id: 'A', text: '$NaCl$' },
      { id: 'B', text: '$HNO_3$' },
      { id: 'C', text: '$C_{12}H_{22}O_{11}$ (đường mía)' },
      { id: 'D', text: '$NaOH$' }
    ],
    correctAnswer: 'C',
    explanation: 'Đường saccharose ($C_{12}H_{22}O_{11}$) khi tan trong nước không phân li ra các ion mang điện tích mà chỉ tồn tại ở dạng phân tử trung hoà điện, do đó là chất không điện li và dung dịch không dẫn điện.',
    difficulty: 'NhanBiet',
    source: 'SGK Bài 2'
  },
  {
    id: 'fe-15',
    lessonId: 'final-exam',
    question: 'Dung dịch acid yếu $CH_3COOH$ 0,1 M có nồng độ $[H^+]$ thỏa mãn điều kiện nào sau đây?',
    options: [
      { id: 'A', text: '$[H^+] = 0,1\\text{ M}$' },
      { id: 'B', text: '$[H^+] < 0,1\\text{ M}$' },
      { id: 'C', text: '$[H^+] > 0,1\\text{ M}$' },
      { id: 'D', text: '$[H^+] = 1,0\\text{ M}$' }
    ],
    correctAnswer: 'B',
    explanation: 'Vì $CH_3COOH$ là chất điện li yếu, chỉ một phần nhỏ số phân tử phân li ra ion $H^+$, nên $[H^+] < 0,1\\text{ M}$ (thực tế khoảng $1,33 \\cdot 10^{-3}$ M, $pH \\approx 2,88$).',
    difficulty: 'ThongHieu',
    source: 'SGK Bài 2'
  },
  {
    id: 'fe-16',
    lessonId: 'final-exam',
    question: 'Trong cơ thể người, dung dịch dịch vị dạ dày có chứa acid $HCl$ với pH trong khoảng 1,5 – 3,5. Để giảm bớt lượng acid thừa gây đau dạ dày, người ta dùng thuốc Nabica có thành phần chính là:',
    options: [
      { id: 'A', text: '$NaOH$' },
      { id: 'B', text: '$NaHCO_3$' },
      { id: 'C', text: '$H_2SO_4$' },
      { id: 'D', text: '$CuSO_4$' }
    ],
    correctAnswer: 'B',
    explanation: 'Thuốc Nabica chứa $NaHCO_3$ có tính kiềm yếu, an toàn cho niêm mạc dạ dày, trung hoà acid dư theo phản ứng: $NaHCO_3 + HCl \\rightarrow NaCl + CO_2\\uparrow + H_2O$.',
    difficulty: 'NhanBiet',
    source: 'SBT Bài 2.13'
  },
  {
    id: 'fe-17',
    lessonId: 'final-exam',
    question: 'Trộn 10 mL dung dịch $HCl$ 0,2 M cho vào 5 mL dung dịch $NH_3$ thu được dung dịch A. Chuẩn độ lượng $HCl$ dư trong dung dịch A bằng dung dịch $NaOH$ 0,1 M thấy phản ứng hết 10,2 mL. Nồng độ ban đầu của dung dịch $NH_3$ là:',
    options: [
      { id: 'A', text: '0,196 M' },
      { id: 'B', text: '0,204 M' },
      { id: 'C', text: '0,098 M' },
      { id: 'D', text: '0,392 M' }
    ],
    correctAnswer: 'A',
    explanation: 'Số mol $HCl$ ban đầu $= 10 \\cdot 10^{-3} \\times 0,2 = 2 \\cdot 10^{-3}$ mol. Số mol $HCl$ dư $= n_{NaOH} = 10,2 \\cdot 10^{-3} \\times 0,1 = 1,02 \\cdot 10^{-3}$ mol. Số mol $HCl$ phản ứng với $NH_3 = 2 \\cdot 10^{-3} - 1,02 \\cdot 10^{-3} = 0,98 \\cdot 10^{-3}$ mol. Vì $NH_3 + HCl \\rightarrow NH_4Cl$ nên $n_{NH_3} = 0,98 \\cdot 10^{-3}$ mol trong 5 mL. Nồng độ $C_M = \\frac{0,98 \\cdot 10^{-3}}{5 \\cdot 10^{-3}} = 0,196$ M.',
    difficulty: 'VanDung',
    source: 'SBT Bài 2.14'
  },
  {
    id: 'fe-18',
    lessonId: 'final-exam',
    question: 'Khi đo pH của một cốc nước chanh được giá trị $pH = 2,4$. Nhận định nào sau đây KHÔNG đúng?',
    options: [
      { id: 'A', text: 'Nước chanh có môi trường acid.' },
      { id: 'B', text: 'Nồng độ ion $H^+$ của nước chanh là $10^{-2,4}\\text{ mol/L}$.' },
      { id: 'C', text: 'Nồng độ ion $H^+$ của nước chanh là $0,24\\text{ mol/L}$.' },
      { id: 'D', text: 'Nồng độ ion $OH^-$ của nước chanh nhỏ hơn $10^{-7}\\text{ mol/L}$.' }
    ],
    correctAnswer: 'C',
    explanation: '$pH = 2,4 \\Rightarrow [H^+] = 10^{-2,4}\\text{ M} \\approx 3,98 \\cdot 10^{-3}\\text{ M} \\ne 0,24\\text{ M}$. Do đó khẳng định C sai.',
    difficulty: 'ThongHieu',
    source: 'SGK Bài 2.6'
  },
  {
    id: 'fe-19',
    lessonId: 'final-exam',
    question: 'Chất chỉ thị tự nhiên nào sau đây đổi từ màu tím sang màu đỏ khi gặp môi trường acid ($pH < 7$) và sang màu xanh sẫm trong môi trường base ($pH > 7$)?',
    options: [
      { id: 'A', text: 'Nước hoa đậu biếc và dịch chiết bắp cải tím (chứa anthocyanin)' },
      { id: 'B', text: 'Nước đường kính' },
      { id: 'C', text: 'Dung dịch cồn $90^o$' },
      { id: 'D', text: 'Dầu ăn' }
    ],
    correctAnswer: 'A',
    explanation: 'Sắc tố anthocyanin có trong hoa đậu biếc và bắp cải tím biến đổi màu theo pH: màu đỏ tím trong môi trường acid và màu xanh thẫm trong môi trường base.',
    difficulty: 'NhanBiet',
    source: 'SGK Bài 2'
  },
  {
    id: 'fe-20',
    lessonId: 'final-exam',
    question: 'Cho phản ứng thuận nghịch: $N_2(g) + O_2(g) \\rightleftharpoons 2NO(g) \\quad \\Delta_r H_{298}^o = 180,6\\text{ kJ}$. Để cân bằng chuyển dịch theo chiều thuận cần:',
    options: [
      { id: 'A', text: 'Giảm nhiệt độ' },
      { id: 'B', text: 'Tăng nhiệt độ' },
      { id: 'C', text: 'Tăng áp suất' },
      { id: 'D', text: 'Giảm nồng độ của $N_2$' }
    ],
    correctAnswer: 'B',
    explanation: 'Vì phản ứng có $\\Delta_r H_{298}^o = 180,6\\text{ kJ} > 0$ (chiều thuận là thu nhiệt), nên khi tăng nhiệt độ cân bằng sẽ chuyển dịch theo chiều thuận.',
    difficulty: 'ThongHieu',
    source: 'SGK Bài 1'
  },
  {
    id: 'fe-21',
    lessonId: 'final-exam',
    question: 'Phương trình phân li nào sau đây viết KHÔNG đúng?',
    options: [
      { id: 'A', text: '$HCl \\rightarrow H^+ + Cl^-$' },
      { id: 'B', text: '$Ba(OH)_2 \\rightarrow Ba^{2+} + 2OH^-$' },
      { id: 'C', text: '$KNO_3 \\rightarrow K^+ + NO_3^-$' },
      { id: 'D', text: '$HF \\rightarrow H^+ + F^-$' }
    ],
    correctAnswer: 'D',
    explanation: '$HF$ là acid yếu, phân li thuận nghịch nên phải dùng mũi tên hai chiều: $HF \\rightleftharpoons H^+ + F^-$. Phương trình D dùng mũi tên một chiều là không chính xác.',
    difficulty: 'NhanBiet',
    source: 'SGK Bài 2'
  },
  {
    id: 'fe-22',
    lessonId: 'final-exam',
    question: 'Trong phương pháp chuẩn độ acid – base bằng dung dịch $NaOH$, chất chỉ thị phenolphthalein chuyển từ không màu sang màu gì tại điểm tương đương?',
    options: [
      { id: 'A', text: 'Màu đỏ đậm' },
      { id: 'B', text: 'Màu hồng nhạt bền trong khoảng 10-20 giây' },
      { id: 'C', text: 'Màu xanh lam' },
      { id: 'D', text: 'Màu vàng tươi' }
    ],
    correctAnswer: 'B',
    explanation: 'Tại điểm tương đương, dung dịch vừa chớm chuyển sang môi trường kiềm rất nhẹ làm phenolphthalein xuất hiện màu hồng nhạt bền trong khoảng 10-20 giây.',
    difficulty: 'NhanBiet',
    source: 'SGK Bài 2'
  },
  {
    id: 'fe-23',
    lessonId: 'final-exam',
    question: 'Cho dung dịch $CH_3COONa$ 0,5 M có nhỏ vài giọt phenolphthalein thấy xuất hiện màu hồng nhạt. Khi đun nóng ống nghiệm, màu hồng của dung dịch sẽ:',
    options: [
      { id: 'A', text: 'Đậm dần lên' },
      { id: 'B', text: 'Nhạt dần đi' },
      { id: 'C', text: 'Mất màu hoàn toàn' },
      { id: 'D', text: 'Không đổi màu' }
    ],
    correctAnswer: 'A',
    explanation: 'Cân bằng thuỷ phân: $CH_3COONa + H_2O \\rightleftharpoons CH_3COOH + NaOH \\quad (\\Delta_r H_{298}^o > 0)$. Phản ứng thu nhiệt nên khi đun nóng (tăng T), cân bằng chuyển dịch theo chiều thuận tạo nhiều $NaOH$ ($OH^-$) hơn $\\Rightarrow$ màu hồng đậm dần lên.',
    difficulty: 'ThongHieu',
    source: 'SGK Bài 1'
  },
  {
    id: 'fe-24',
    lessonId: 'final-exam',
    question: 'Một giọt acid $HCl$ đặc rơi vào quỳ tím thì quỳ tím sẽ chuyển sang màu:',
    options: [
      { id: 'A', text: 'Màu đỏ' },
      { id: 'B', text: 'Màu xanh' },
      { id: 'C', text: 'Màu vàng' },
      { id: 'D', text: 'Không đổi màu' }
    ],
    correctAnswer: 'A',
    explanation: 'Dung dịch $HCl$ có tính acid mạnh ($pH < 6$) làm quỳ tím chuyển sang màu đỏ.',
    difficulty: 'NhanBiet',
    source: 'SGK Bài 2'
  },
  {
    id: 'fe-25',
    lessonId: 'final-exam',
    question: 'Cho phản ứng: $N_2(g) + 3H_2(g) \\rightleftharpoons 2NH_3(g) \\quad \\Delta_r H_{298}^o = -92\\text{ kJ}$. Nếu nung hỗn hợp trong bình kín ở 450 °C có bột Fe xúc tác, hiệu suất chuyển hoá đạt 20%. Nếu tăng nồng độ $H_2$ lên 2 lần thì cân bằng chuyển dịch theo chiều nào?',
    options: [
      { id: 'A', text: 'Chiều thuận' },
      { id: 'B', text: 'Chiều nghịch' },
      { id: 'C', text: 'Không chuyển dịch' },
      { id: 'D', text: 'Không xác định được' }
    ],
    correctAnswer: 'A',
    explanation: 'Theo nguyên lí Le Chatelier, khi tăng nồng độ chất phản ứng ($H_2$), hệ sẽ tự chuyển dịch theo chiều làm giảm nồng độ $H_2$, tức là chiều thuận (tạo thêm $NH_3$).',
    difficulty: 'NhanBiet',
    source: 'SBT Bài 1.5'
  },
  {
    id: 'fe-26',
    lessonId: 'final-exam',
    question: 'Ở 25 °C, tích số ion của nước là $K_w = 10^{-14}$. Trong dung dịch $Ba(OH)_2$ 0,005 M, nồng độ ion $H^+$ là:',
    options: [
      { id: 'A', text: '$10^{-12}\\text{ M}$' },
      { id: 'B', text: '$10^{-2}\\text{ M}$' },
      { id: 'C', text: '$10^{-14}\\text{ M}$' },
      { id: 'D', text: '$10^{-7}\\text{ M}$' }
    ],
    correctAnswer: 'A',
    explanation: '$Ba(OH)_2 \\rightarrow Ba^{2+} + 2OH^- \\Rightarrow [OH^-] = 2 \\times 0,005 = 0,01\\text{ M} = 10^{-2}\\text{ M}$. $[H^+] = \\frac{K_w}{[OH^-]} = \\frac{10^{-14}}{10^{-2}} = 10^{-12}\\text{ M}$.',
    difficulty: 'ThongHieu',
    source: 'SGK Bài 2'
  },
  {
    id: 'fe-27',
    lessonId: 'final-exam',
    question: 'Dung dịch chất nào sau đây có môi trường trung tính ($pH = 7$)?',
    options: [
      { id: 'A', text: '$NaCl$' },
      { id: 'B', text: '$AlCl_3$' },
      { id: 'C', text: '$Na_2CO_3$' },
      { id: 'D', text: '$CH_3COONa$' }
    ],
    correctAnswer: 'A',
    explanation: '$NaCl$ được tạo bởi cation kim loại mạnh $Na^+$ và anion gốc acid mạnh $Cl^-$, cả hai ion đều không bị thuỷ phân nên dung dịch có môi trường trung tính ($pH = 7$).',
    difficulty: 'NhanBiet',
    source: 'SGK Bài 2'
  },
  {
    id: 'fe-28',
    lessonId: 'final-exam',
    question: 'Cho cân bằng trong dung dịch muối $CoCl_2$: $[Co(H_2O)_6]^{2+} (hồng) + 4Cl^- \\rightleftharpoons [CoCl_4]^{2-} (xanh) + 6H_2O \\quad (\\Delta_r H_{298}^o > 0)$. Khi thêm vài giọt dung dịch $AgNO_3$ vào, hiện tượng quan sát được là:',
    options: [
      { id: 'A', text: 'Dung dịch chuyển sang màu xanh đậm hơn' },
      { id: 'B', text: 'Xuất hiện kết tủa trắng $AgCl$ và dung dịch chuyển sang màu hồng' },
      { id: 'C', text: 'Dung dịch mất màu hoàn toàn' },
      { id: 'D', text: 'Không có hiện tượng gì xảy ra' }
    ],
    correctAnswer: 'B',
    explanation: 'Ion $Ag^+$ kết hợp với $Cl^-$ tạo kết tủa trắng $AgCl\\downarrow$, làm giảm nồng độ $Cl^-$. Theo Le Chatelier, cân bằng chuyển dịch theo chiều nghịch (tạo $[Co(H_2O)_6]^{2+}$ màu hồng) để bù lại lượng $Cl^-$ mất đi.',
    difficulty: 'VanDung',
    source: 'SBT Bài 1.15'
  },
  {
    id: 'fe-29',
    lessonId: 'final-exam',
    question: 'Khi lên núi cao, một số người gặp hiện tượng đau đầu, chóng mặt. Nguyên nhân theo cân bằng $Hb + O_2 \\rightleftharpoons HbO_2$ trong máu là do:',
    options: [
      { id: 'A', text: 'Áp suất khí quyển giảm, nồng độ $O_2$ thấp làm cân bằng chuyển dịch sang trái, giảm lượng $HbO_2$ cung cấp cho mô và não.' },
      { id: 'B', text: 'Nồng độ $O_2$ trên núi cao quá lớn làm cân bằng chuyển dịch sang phải.' },
      { id: 'C', text: 'Nhiệt độ trên núi cao làm tăng $K_c$.' },
      { id: 'D', text: 'Lượng hemoglobin tự động phân huỷ ở độ cao lớn.' }
    ],
    correctAnswer: 'A',
    explanation: 'Trên núi cao, không khí loãng, áp suất riêng phần của $O_2$ giảm $\\Rightarrow$ nồng độ $O_2$ hít vào giảm $\\Rightarrow$ cân bằng $Hb + O_2 \\rightleftharpoons HbO_2$ chuyển dịch sang trái $\\Rightarrow$ lượng oxy gắn vào hồng cầu giảm gây thiếu oxy lên não.',
    difficulty: 'ThongHieu',
    source: 'SGK Bài 1.12'
  },
  {
    id: 'fe-30',
    lessonId: 'final-exam',
    question: 'Hòa tan 1,062 g $NaOH$ rắn rồi pha thành 250 mL dung dịch A. Lấy 5,0 mL dung dịch A đem chuẩn độ với dung dịch $HCl$ 0,1 M thì thấy hết 5,2 mL. Nồng độ của dung dịch $NaOH$ xác định được từ kết quả chuẩn độ là:',
    options: [
      { id: 'A', text: '0,104 M' },
      { id: 'B', text: '0,1062 M' },
      { id: 'C', text: '0,052 M' },
      { id: 'D', text: '0,208 M' }
    ],
    correctAnswer: 'A',
    explanation: 'PTHH: $HCl + NaOH \\rightarrow NaCl + H_2O$. Số mol $HCl = 5,2 \\cdot 10^{-3} \\times 0,1 = 5,2 \\cdot 10^{-4}$ mol $\\Rightarrow n_{NaOH} = 5,2 \\cdot 10^{-4}$ mol trong 5 mL. Nồng độ $C_M(NaOH) = \\frac{5,2 \\cdot 10^{-4}}{5 \\cdot 10^{-3}} = 0,104$ M.',
    difficulty: 'VanDung',
    source: 'SBT Bài 3.15'
  },
  {
    id: 'fe-31',
    lessonId: 'final-exam',
    question: 'Ethanol và propanoic acid phản ứng với nhau theo phương trình: $C_2H_5OH(l) + C_2H_5COOH(l) \\rightleftharpoons C_2H_5COOC_2H_5(l) + H_2O(l)$. Ở 50 °C, hằng số cân bằng $K_c = 7,5$. Nếu cho 23,0 g ethanol (0,5 mol) phản ứng với 37,0 g propanoic acid (0,5 mol), khối lượng ester thu được ở trạng thái cân bằng là:',
    options: [
      { id: 'A', text: '37,332 g' },
      { id: 'B', text: '51,000 g' },
      { id: 'C', text: '25,500 g' },
      { id: 'D', text: '18,666 g' }
    ],
    correctAnswer: 'A',
    explanation: 'Gọi $x$ là số mol ester tạo thành. Ở cân bằng: $n_{ester} = n_{H_2O} = x$; $n_{alcohol} = n_{acid} = 0,5 - x$. $K_c = \\frac{x^2}{(0,5-x)^2} = 7,5 \\Rightarrow \\frac{x}{0,5-x} = \\sqrt{7,5} \\approx 2,7386 \\Rightarrow x \\approx 0,366$ mol. Khối lượng ethyl propanoate ($M=102$ g/mol) $= 0,366 \\times 102 = 37,332$ g.',
    difficulty: 'VanDung',
    source: 'SBT Bài 3.12'
  },
  {
    id: 'fe-32',
    lessonId: 'final-exam',
    question: 'Phát biểu nào sau đây về cân bằng hoá học và sự điện li là SAI?',
    options: [
      { id: 'A', text: 'Cân bằng hoá học là cân bằng động, khi phản ứng thuận và nghịch có tốc độ bằng nhau.' },
      { id: 'B', text: 'Chất điện li mạnh phân li hoàn toàn thành ion khi tan trong nước.' },
      { id: 'C', text: 'Độ pH của dung dịch nước luôn lớn hơn 0 và nhỏ hơn 14 ở mọi nhiệt độ.' },
      { id: 'D', text: 'Theo Brønsted – Lowry, acid là chất cho proton và base là chất nhận proton.' }
    ],
    correctAnswer: 'C',
    explanation: 'Thang pH từ 0 đến 14 là quy ước thông dụng ở 25 °C cho các dung dịch loãng. Với dung dịch acid rất đậm đặc (như $HCl$ 2 M), pH có thể mang giá trị âm ($pH = -\\lg 2 \\approx -0,3$), hoặc với kiềm đậm đặc pH có thể $> 14$. Do đó nhận định C là phát biểu sai/chưa chính xác.',
    difficulty: 'ThongHieu',
    source: 'SGK & SBT Chương 1'
  }
];
