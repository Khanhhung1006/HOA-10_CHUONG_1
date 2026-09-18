import { TheorySectionData, Flashcard, QuizQuestion } from '../../types';

export const lesson4Theory: TheorySectionData = {
  id: 'bai-4',
  chapterId: 'chuong-2',
  title: 'Bài 4: Nitrogen',
  objectives: [
    'Phát biểu được trạng thái tự nhiên của nguyên tố nitrogen.',
    'Giải thích được tính trơ của đơn chất nitrogen ở nhiệt độ thường thông qua liên kết và giá trị năng lượng liên kết.',
    'Trình bày được sự hoạt động của đơn chất nitrogen ở nhiệt độ cao đối với hydrogen, oxygen. Liên hệ quá trình tạo và cung cấp nitrate cho đất từ nước mưa.',
    'Giải thích được các ứng dụng của đơn chất nitrogen khí và lỏng trong sản xuất, trong hoạt động nghiên cứu.'
  ],
  summary: 'Nitrogen là nguyên tố phổ biến nhất trong khí quyển Trái Đất (chiếm 75,5% khối lượng, 78,1% thể tích). Đơn chất nitrogen ($N_2$) có liên kết ba $N\\equiv N$ rất bền (năng lượng liên kết $945\\text{ kJ/mol}$), do đó trơ ở nhiệt độ thường nhưng hoạt động ở nhiệt độ cao, thể hiện cả tính oxi hoá (tác dụng với $H_2$, kim loại) và tính khử (tác dụng với $O_2$).',
  coreKnowledge: [
    {
      heading: '1. Trạng thái tự nhiên',
      points: [
        'Trong khí quyển Trái Đất: nitrogen là nguyên tố phổ biến nhất, chiếm 75,5% về khối lượng (hoặc 78,1% về thể tích) và tập trung chủ yếu ở tầng đối lưu.',
        'Trong vỏ Trái Đất: nguyên tố nitrogen tồn tại tập trung ở một số mỏ khoáng dưới dạng sodium nitrate ($NaNO_3$, thường gọi là diêm tiêu Chile).',
        'Trong sinh vật: có trong tất cả cơ thể động vật và thực vật, là thành phần cấu tạo nên nucleic acid, protein,... Trong cơ thể người, nitrogen chiếm khoảng 3% khối lượng (đứng thứ tư sau oxygen, carbon và hydrogen).',
        'Đồng vị: tồn tại tự nhiên dưới dạng hai đồng vị bền là $^{14}N$ (99,63%) và $^{15}N$ (0,37%).'
      ]
    },
    {
      heading: '2. Cấu tạo nguyên tử và phân tử',
      points: [
        'Vị trí & cấu hình: Nguyên tố nitrogen ở ô số 7, chu kì 2, nhóm VA trong bảng tuần hoàn. Cấu hình electron: $1s^2 2s^2 2p^3$. Độ âm điện lớn ($3,04$), là phi kim điển hình.',
        'Số oxi hoá: Các số oxi hoá thường gặp của nitrogen gồm $-3, 0, +1, +2, +3, +4, +5$. Đơn chất $N_2$ có số oxi hoá $0$ nên vừa có tính oxi hoá vừa có tính khử.',
        'Cấu tạo phân tử: Phân tử $N_2$ gồm hai nguyên tử, liên kết với nhau bằng một liên kết ba $N\\equiv N$ (gồm 1 liên kết $\\sigma$ và 2 liên kết $\\pi$). Phân tử không phân cực, có năng lượng liên kết rất lớn ($945\\text{ kJ/mol}$).'
      ],
      latexEquations: [
        'N \\equiv N \\quad (E_b = 945\\text{ kJ/mol})'
      ]
    },
    {
      heading: '3. Tính chất vật lí',
      points: [
        'Ở điều kiện thường, nitrogen là chất khí không màu, không mùi, không vị, nhẹ hơn không khí ($d_{N_2/\\text{kk}} = \\frac{28}{29} \\approx 0,97$).',
        'Hoá lỏng ở $-196\\;^\\circ\\text{C}$, hoá rắn ở $-210\\;^\\circ\\text{C}$.',
        'Rất ít tan trong nước (1 lít nước hoà tan được 0,012 lít khí nitrogen ở điều kiện thường).',
        'Khí nitrogen không duy trì sự cháy và sự hô hấp.'
      ]
    },
    {
      heading: '4. Tính chất hoá học',
      points: [
        'Đặc điểm chung: Khá trơ về mặt hoá học ở nhiệt độ thường do năng lượng liên kết ba rất lớn ($945\\text{ kJ/mol}$). Ở nhiệt độ cao, nitrogen trở nên hoạt động hơn, thể hiện tính oxi hoá và tính khử.',
        'Tính oxi hoá (Số oxi hoá giảm từ $0$ xuống $-3$):\n- Tác dụng với hydrogen ở nhiệt độ cao, áp suất cao, xúc tác $Fe$ (quá trình Haber - Bosch): $N_2(g) + 3H_2(g) \\overset{t^o, p, xt}{\\rightleftharpoons} 2NH_3(g) \\quad \\Delta_r H^\\circ = -91,8\\text{ kJ}$.\n- Tác dụng với kim loại mạnh ở nhiệt độ cao (ví dụ: $3Mg + N_2 \\xrightarrow{t^o} Mg_3N_2$).',
        'Tính khử (Số oxi hoá tăng từ $0$ lên $+2$):\n- Tác dụng với oxygen ở nhiệt độ trên $3000\\;^\\circ\\text{C}$ hoặc có tia lửa điện: $N_2(g) + O_2(g) \\overset{t^o}{\\rightleftharpoons} 2NO(g) \\quad \\Delta_r H^\\circ = 180,6\\text{ kJ}$.',
        'Quá trình tạo và cung cấp đạm nitrate cho đất từ nước mưa:\n$$N_2 \\xrightarrow{+O_2, \\text{ tia sét}} NO \\xrightarrow{+O_2} NO_2 \\xrightarrow{+O_2 + H_2O} HNO_3 \\rightarrow H^+ + NO_3^-$$'
      ],
      latexEquations: [
        'N_2(g) + 3H_2(g) \\overset{t^o, p, Fe}{\\rightleftharpoons} 2NH_3(g) \\quad \\Delta_r H_{298}^\\circ = -91,8\\text{ kJ}',
        'N_2(g) + O_2(g) \\overset{t^o > 3000\\;^\\circ\\text{C}}{\\rightleftharpoons} 2NO(g) \\quad \\Delta_r H_{298}^\\circ = 180,6\\text{ kJ}',
        '2NO + O_2 \\rightarrow 2NO_2',
        '4NO_2 + O_2 + 2H_2O \\rightarrow 4HNO_3',
        'HNO_3 \\rightarrow H^+ + NO_3^-'
      ]
    },
    {
      heading: '5. Ứng dụng của đơn chất Nitrogen',
      points: [
        'Khí nitrogen: Dùng để tạo khí quyển trơ trong công nghiệp luyện kim, điện tử, bảo quản thực phẩm (làm căng bao bì, chống oxi hoá làm ôi thiu), tổng hợp ammonia.',
        'Nitrogen lỏng: Làm tác nhân làm lạnh nhanh, bảo quản mẫu vật phẩm sinh học, máu, tinh trùng, tế bào gốc trong y học và điều trị mụn cóc da liễu.'
      ]
    }
  ],
  formulas: [
    {
      name: 'Năng lượng liên kết phân tử Nitrogen',
      latex: 'E_b(N \\equiv N) = 945\\text{ kJ/mol}',
      description: 'Năng lượng cần cung cấp để phá vỡ 1 mol liên kết ba trong phân tử $N_2$.'
    },
    {
      name: 'Phản ứng Haber - Bosch tổng hợp Ammonia',
      latex: 'N_2(g) + 3H_2(g) \\overset{t^o, p, Fe}{\\rightleftharpoons} 2NH_3(g) \\quad \\Delta_r H_{298}^\\circ = -91,8\\text{ kJ}',
      description: 'Phản ứng toả nhiệt, giảm số mol khí, thực hiện ở khoảng $400 - 450\\;^\\circ\\text{C}$, $150 - 200\\text{ bar}$, xúc tác $Fe$.'
    },
    {
      name: 'Phản ứng tạo NO từ tia lửa điện / nhiệt độ cao',
      latex: 'N_2(g) + O_2(g) \\overset{t^o}{\\rightleftharpoons} 2NO(g) \\quad \\Delta_r H_{298}^\\circ = +180,6\\text{ kJ}',
      description: 'Phản ứng thu nhiệt, xảy ra trong các cơn mưa dông có sấm sét hoặc buồng đốt động cơ ô tô.'
    }
  ],
  keyConcepts: [
    {
      term: 'Liên kết ba $N\\equiv N$',
      definition: 'Liên kết gồm 1 liên kết $\\sigma$ và 2 liên kết $\\pi$, rất bền vững với năng lượng liên kết $945\\text{ kJ/mol}$, khiến nitrogen trơ hoá học ở nhiệt độ thường.'
    },
    {
      term: 'Diêm tiêu Chile',
      definition: 'Khoáng vật tự nhiên chứa sodium nitrate ($NaNO_3$), là nguồn dự trữ nguyên tố nitrogen trong vỏ Trái Đất.'
    },
    {
      term: 'Quá trình Haber - Bosch',
      definition: 'Quy trình công nghiệp then chốt sản xuất $NH_3$ trực tiếp từ $N_2$ và $H_2$ do Fritz Haber và Carl Bosch phát minh.'
    },
    {
      term: 'Khí quyển trơ',
      definition: 'Môi trường khí không có phản ứng hoá học với chất cần bảo quản, sử dụng khí $N_2$ để ngăn cản sự oxi hoá bởi oxygen không khí.'
    }
  ],
  examples: [
    {
      title: 'Ví dụ 1: Giải thích tính trơ và tính hoạt động của Nitrogen',
      content: 'Tại sao ở nhiệt độ thường khí nitrogen lại rất trơ về mặt hoá học nhưng ở nhiệt độ cao lại phản ứng được với nhiều chất?',
      solution: 'Ở nhiệt độ thường, phân tử $N_2$ có liên kết ba $N\\equiv N$ rất bền với năng lượng liên kết lớn ($945\\text{ kJ/mol}$) nên khó bị bẻ gãy. Ở nhiệt độ cao hoặc có tia lửa điện, năng lượng nhiệt cung cấp đủ để phá vỡ liên kết, các nguyên tử nitrogen trở nên hoạt động và dễ dàng tham gia phản ứng hoá học.'
    },
    {
      title: 'Ví dụ 2: Quá trình tạo phân đạm từ sấm sét',
      content: 'Giải thích câu ca dao: "Lúa chiêm lấp ló đầu bờ / Hễ nghe tiếng sấm phất cờ mà lên".',
      solution: 'Khi có sấm sét (nhiệt độ trên $3000\\;^\\circ\\text{C}$ và tia lửa điện), $N_2$ trong khí quyển phản ứng với $O_2$ tạo $NO$. Khí $NO$ tiếp tục bị oxi hoá thành $NO_2$, sau đó hoà tan cùng oxygen và nước mưa tạo dung dịch $HNO_3$ loãng. $HNO_3$ phân li thành ion nitrate ($NO_3^-$), đây chính là dạng phân đạm nitrate mà cây lúa hấp thụ trực tiếp để sinh trưởng mạnh mẽ.'
    }
  ],
  commonMistakes: [
    {
      mistake: 'Cho rằng nitrogen có tính oxi hoá mạnh ở nhiệt độ phòng.',
      correction: 'Ở điều kiện thường, nitrogen rất trơ về mặt hoá học. Chỉ ở nhiệt độ cao hoặc có tia lửa điện/xúc tác, nitrogen mới thể hiện tính oxi hoá hoặc tính khử.',
      why: 'Do liên kết ba $N\\equiv N$ có năng lượng liên kết rất lớn ($945\\text{ kJ/mol}$).'
    },
    {
      mistake: 'Nhầm lẫn phần trăm khối lượng và phần trăm thể tích của nitrogen trong khí quyển.',
      correction: 'Nitrogen chiếm khoảng 78,1% về thể tích và chiếm 75,5% về khối lượng của khí quyển Trái Đất.',
      why: 'Cần phân biệt rõ thành phần theo thể tích (hoặc số mol) và thành phần theo khối lượng.'
    }
  ],
  memoryTips: [
    'Phân tử $N_2$: Liên kết 3 - Năng lượng 945 kJ/mol - Trơ thường, hoạt cao.',
    'Số oxi hoá của N: $-3, 0, +1, +2, +3, +4, +5$. Khi tác dụng $H_2$/kim loại $\\rightarrow$ số oxh giảm (Tính oxi hoá); khi tác dụng $O_2$ $\\rightarrow$ số oxh tăng (Tính khử).',
    'Chuỗi sấm sét: $N_2 \\rightarrow NO \\rightarrow NO_2 \\rightarrow HNO_3 \\rightarrow NO_3^-$ (phân đạm nitrate).'
  ],
  glossary: [
    { term: 'Nitrogen', meaning: 'Đơn chất khí không màu, không mùi, không vị, chiếm 78,1% thể tích khí quyển Trái Đất.' },
    { term: 'Haber - Bosch', meaning: 'Công nghệ sản xuất ammonia từ nitrogen và hydrogen trong điều kiện $400 - 450\\;^\\circ\\text{C}$, $150 - 200\\text{ bar}$, xúc tác bột Fe.' },
    { term: 'Diêm tiêu Chile', meaning: 'Khoáng chất sodium nitrate $NaNO_3$ tự nhiên.' },
    { term: 'Nitrogen lỏng', meaning: 'Dạng hoá lỏng của nitrogen ở nhiệt độ $-196\\;^\\circ\\text{C}$, ứng dụng làm lạnh sâu.' }
  ],
  reviewChecklist: [
    'Nêu được tỉ lệ thể tích (78,1%) và khối lượng (75,5%) của nitrogen trong khí quyển.',
    'Biết cấu tạo phân tử $N_2$ có liên kết ba $N\\equiv N$ với $E_b = 945\\text{ kJ/mol}$.',
    'Viết và cân bằng phản ứng tổng hợp ammonia ($N_2 + 3H_2 \\rightleftharpoons 2NH_3$).',
    'Viết chuỗi phản ứng hình thành ion $NO_3^-$ trong tự nhiên do sấm sét.',
    'Nêu các ứng dụng của khí nitrogen và nitrogen lỏng trong đời sống và y tế.'
  ]
};

export const lesson4Flashcards: Flashcard[] = [
  {
    id: 'fc-4-1',
    chapterId: 'chuong-2',
    lessonId: 'bai-4',
    category: 'khai-niem',
    front: 'Trong khí quyển Trái Đất, nitrogen chiếm bao nhiêu phần trăm theo thể tích và theo khối lượng?',
    back: 'Chiếm **78,1% về thể tích** (hoặc 75,5% về khối lượng).'
  },
  {
    id: 'fc-4-2',
    chapterId: 'chuong-2',
    lessonId: 'bai-4',
    category: 'khai-niem',
    front: 'Khoáng vật chứa nitrogen trong vỏ Trái Đất có tên gọi là diêm tiêu Chile có công thức là gì?',
    back: 'Công thức hoá học là **$NaNO_3$** (sodium nitrate).'
  },
  {
    id: 'fc-4-3',
    chapterId: 'chuong-2',
    lessonId: 'bai-4',
    category: 'khai-niem',
    front: 'Trong cơ thể người, nguyên tố nitrogen chiếm khoảng bao nhiêu phần trăm khối lượng và đứng thứ mấy?',
    back: 'Chiếm khoảng **3% khối lượng**, đứng thứ **tư** (sau oxygen, carbon và hydrogen).'
  },
  {
    id: 'fc-4-4',
    chapterId: 'chuong-2',
    lessonId: 'bai-4',
    category: 'khai-niem',
    front: 'Hai đồng vị bền của nitrogen trong tự nhiên là gì?',
    back: 'Đồng vị **$^{14}N$** (99,63%) và **$^{15}N$** (0,37%).'
  },
  {
    id: 'fc-4-5',
    chapterId: 'chuong-2',
    lessonId: 'bai-4',
    category: 'cong-thuc',
    front: 'Phân tử $N_2$ gồm bao nhiêu liên kết $\\sigma$ và $\\pi$? Năng lượng liên kết bằng bao nhiêu?',
    back: 'Gồm **1 liên kết $\\sigma$** và **2 liên kết $\\pi$** (liên kết ba $N\\equiv N$). Năng lượng liên kết $E_b = 945\\text{ kJ/mol}$.'
  },
  {
    id: 'fc-4-6',
    chapterId: 'chuong-2',
    lessonId: 'bai-4',
    category: 'khai-niem',
    front: 'Vì sao ở điều kiện thường đơn chất nitrogen rất trơ về mặt hoá học?',
    back: 'Do phân tử $N_2$ có **liên kết ba $N\\equiv N$ rất bền vững** với năng lượng liên kết lớn ($945\\text{ kJ/mol}$).'
  },
  {
    id: 'fc-4-7',
    chapterId: 'chuong-2',
    lessonId: 'bai-4',
    category: 'khai-niem',
    front: 'Ở nhiệt độ nào nitrogen hoá lỏng và hoá rắn?',
    back: 'Hoá lỏng ở **$-196\\;^\\circ\\text{C}$** và hoá rắn ở **$-210\\;^\\circ\\text{C}$**.'
  },
  {
    id: 'fc-4-8',
    chapterId: 'chuong-2',
    lessonId: 'bai-4',
    category: 'nitrogen',
    front: 'Đơn chất nitrogen thể hiện tính oxi hoá khi tác dụng với những chất nào? Cho ví dụ phương trình.',
    back: 'Tác dụng với **hydrogen** và **kim loại mạnh** (ở nhiệt độ cao):\n$$N_2(g) + 3H_2(g) \\overset{t^o, p, Fe}{\\rightleftharpoons} 2NH_3(g)$$\n$$3Mg + N_2 \\xrightarrow{t^o} Mg_3N_2$$'
  },
  {
    id: 'fc-4-9',
    chapterId: 'chuong-2',
    lessonId: 'bai-4',
    category: 'nitrogen',
    front: 'Đơn chất nitrogen thể hiện tính khử khi tác dụng với chất nào? Cho ví dụ phương trình.',
    back: 'Tác dụng với **oxygen** ở nhiệt độ cao ($> 3000\\;^\\circ\\text{C}$) hoặc tia lửa điện:\n$$N_2(g) + O_2(g) \\overset{t^o}{\\rightleftharpoons} 2NO(g) \\quad \\Delta_r H_{298}^\\circ = 180,6\\text{ kJ}$$'
  },
  {
    id: 'fc-4-10',
    chapterId: 'chuong-2',
    lessonId: 'bai-4',
    category: 'thuc-tien',
    front: 'Nêu chuỗi chuyển hoá cung cấp phân đạm nitrate ($NO_3^-$) cho đất từ nước mưa sấm sét.',
    back: '$$N_2 \\xrightarrow{+O_2, \\text{ sét}} NO \\xrightarrow{+O_2} NO_2 \\xrightarrow{+O_2, H_2O} HNO_3 \\rightarrow H^+ + NO_3^-$$'
  },
  {
    id: 'fc-4-11',
    chapterId: 'chuong-2',
    lessonId: 'bai-4',
    category: 'thuc-tien',
    front: 'Quy trình Haber - Bosch dùng để tổng hợp chất gì? Điều kiện phản ứng là gì?',
    back: 'Tổng hợp **$NH_3$** từ $N_2$ và $H_2$ ở nhiệt độ khoảng **$400 - 450\\;^\\circ\\text{C}$**, áp suất **$150 - 200\\text{ bar}$**, xúc tác bột **$Fe$**.'
  },
  {
    id: 'fc-4-12',
    chapterId: 'chuong-2',
    lessonId: 'bai-4',
    category: 'thuc-tien',
    front: 'Tại sao khí nitrogen được dùng để bảo quản thực phẩm (bơm căng túi snack/bánh kẹo)?',
    back: 'Vì khí nitrogen **trơ, không độc**, giúp tạo khí quyển trơ ngăn cản quá trình oxi hoá làm ôi thiu thực phẩm và bảo vệ bánh không bị giập nát.'
  },
  {
    id: 'fc-4-13',
    chapterId: 'chuong-2',
    lessonId: 'bai-4',
    category: 'thuc-tien',
    front: 'Nêu các ứng dụng tiêu biểu của nitrogen lỏng trong y tế.',
    back: 'Bảo quản mẫu phẩm sinh học (tế bào gốc, máu, mô), làm lạnh cục bộ đóng băng điều trị mụn cóc và các bệnh da liễu.'
  },
  {
    id: 'fc-4-14',
    chapterId: 'chuong-2',
    lessonId: 'bai-4',
    category: 'cong-thuc',
    front: 'Các số oxi hoá thường gặp của nitrogen trong các hợp chất là gì?',
    back: '$-3, 0, +1, +2, +3, +4, +5$.'
  },
  {
    id: 'fc-4-15',
    chapterId: 'chuong-2',
    lessonId: 'bai-4',
    category: 'thuc-tien',
    front: 'Hiện tượng "bệnh giảm áp của thợ lặn" liên quan đến khí nitrogen như thế nào?',
    back: 'Khi lặn sâu, áp suất cao làm khí $N_2$ tan nhiều vào máu. Nếu nổi lên mặt nước quá nhanh, áp suất giảm đột ngột khiến $N_2$ thoát ra tạo các bọt khí trong mạch máu gây tắc mạch, đau khớp hoặc tử vong.'
  }
];

export const lesson4Quizzes: QuizQuestion[] = [
  {
    id: 'c2-b4-q1',
    chapterId: 'chuong-2',
    lessonId: 'bai-4',
    question: 'Khí nào phổ biến nhất trong khí quyển Trái Đất?',
    options: [
      { id: 'A', text: 'Oxygen.' },
      { id: 'B', text: 'Nitrogen.' },
      { id: 'C', text: 'Ozone.' },
      { id: 'D', text: 'Argon.' }
    ],
    correctAnswer: 'B',
    explanation: 'Khí nitrogen phổ biến nhất trong khí quyển Trái Đất, chiếm khoảng 78,1% về thể tích (75,5% về khối lượng). (Câu 4.1 SBT)',
    difficulty: 'NhanBiet',
    source: 'SBT Hóa học 11 - Bài 4 (Câu 4.1)'
  },
  {
    id: 'c2-b4-q2',
    chapterId: 'chuong-2',
    lessonId: 'bai-4',
    question: 'Công thức hoá học của diêm tiêu Chile là',
    options: [
      { id: 'A', text: '$Ca(NO_3)_2$.' },
      { id: 'B', text: '$NH_4NO_3$.' },
      { id: 'C', text: '$NH_4Cl$.' },
      { id: 'D', text: '$NaNO_3$.' }
    ],
    correctAnswer: 'D',
    explanation: 'Diêm tiêu Chile là khoáng vật chứa sodium nitrate $NaNO_3$. (Câu 4.2 SBT)',
    difficulty: 'NhanBiet',
    source: 'SBT Hóa học 11 - Bài 4 (Câu 4.2)'
  },
  {
    id: 'c2-b4-q3',
    chapterId: 'chuong-2',
    lessonId: 'bai-4',
    question: 'Vị trí (chu kì, nhóm) của nguyên tố nitrogen trong bảng tuần hoàn là',
    options: [
      { id: 'A', text: 'chu kì 2, nhóm VA.' },
      { id: 'B', text: 'chu kì 3, nhóm VA.' },
      { id: 'C', text: 'chu kì 2, nhóm VIA.' },
      { id: 'D', text: 'chu kì 3, nhóm IVA.' }
    ],
    correctAnswer: 'A',
    explanation: 'Nitrogen ở ô số 7, cấu hình electron $1s^2 2s^2 2p^3$, thuộc chu kì 2, nhóm VA. (Câu 4.3 SBT)',
    difficulty: 'NhanBiet',
    source: 'SBT Hóa học 11 - Bài 4 (Câu 4.3)'
  },
  {
    id: 'c2-b4-q4',
    chapterId: 'chuong-2',
    lessonId: 'bai-4',
    question: 'Trong tự nhiên, nguyên tố nitrogen tồn tại trong hợp chất hữu cơ nào sau đây?',
    options: [
      { id: 'A', text: 'Tinh bột.' },
      { id: 'B', text: 'Cellulose.' },
      { id: 'C', text: 'Protein.' },
      { id: 'D', text: 'Glucose.' }
    ],
    correctAnswer: 'C',
    explanation: 'Protein và nucleic acid là các hợp chất hữu cơ chứa nguyên tố nitrogen trong tế bào sinh vật. (Câu 4.4 SBT)',
    difficulty: 'NhanBiet',
    source: 'SBT Hóa học 11 - Bài 4 (Câu 4.4)'
  },
  {
    id: 'c2-b4-q5',
    chapterId: 'chuong-2',
    lessonId: 'bai-4',
    question: 'Số oxi hoá thấp nhất và cao nhất của nguyên tử nitrogen lần lượt là',
    options: [
      { id: 'A', text: '$0$ và $+5$.' },
      { id: 'B', text: '$-3$ và $0$.' },
      { id: 'C', text: '$-3$ và $+5$.' },
      { id: 'D', text: '$-2$ và $+4$.' }
    ],
    correctAnswer: 'C',
    explanation: 'Nitrogen có 5 electron lớp ngoài cùng, số oxi hoá thấp nhất là $-3$ (nhận 3e) và cao nhất là $+5$ (nhường 5e). (Câu 4.5 SBT)',
    difficulty: 'NhanBiet',
    source: 'SBT Hóa học 11 - Bài 4 (Câu 4.5)'
  },
  {
    id: 'c2-b4-q6',
    chapterId: 'chuong-2',
    lessonId: 'bai-4',
    question: 'Trong tự nhiên, nguyên tố nitrogen tồn tại chủ yếu ở dạng đồng vị nào sau đây?',
    options: [
      { id: 'A', text: '$^{14}N$.' },
      { id: 'B', text: '$^{13}N$.' },
      { id: 'C', text: '$^{15}N$.' },
      { id: 'D', text: '$^{12}N$.' }
    ],
    correctAnswer: 'A',
    explanation: 'Nitrogen tồn tại chủ yếu ở dạng đồng vị $^{14}N$ (chiếm 99,63%), còn lại là $^{15}N$ (0,37%). (Câu 4.6 SBT)',
    difficulty: 'NhanBiet',
    source: 'SBT Hóa học 11 - Bài 4 (Câu 4.6)'
  },
  {
    id: 'c2-b4-q7',
    chapterId: 'chuong-2',
    lessonId: 'bai-4',
    question: 'Trong phản ứng tổng hợp ammonia từ nitrogen và hydrogen ($N_2 + 3H_2 \\rightleftharpoons 2NH_3$), nitrogen đóng vai trò là',
    options: [
      { id: 'A', text: 'chất khử.' },
      { id: 'B', text: 'chất oxi hoá.' },
      { id: 'C', text: 'acid.' },
      { id: 'D', text: 'base.' }
    ],
    correctAnswer: 'B',
    explanation: 'Số oxi hoá của nitrogen giảm từ $0$ trong $N_2$ xuống $-3$ trong $NH_3$, nên $N_2$ là chất oxi hoá. (Câu 4.7 SBT)',
    difficulty: 'NhanBiet',
    source: 'SBT Hóa học 11 - Bài 4 (Câu 4.7)'
  },
  {
    id: 'c2-b4-q8',
    chapterId: 'chuong-2',
    lessonId: 'bai-4',
    question: 'Trong những cơn mưa dông kèm sấm sét, nitrogen kết hợp trực tiếp với oxygen tạo thành sản phẩm là',
    options: [
      { id: 'A', text: '$NO$.' },
      { id: 'B', text: '$N_2O$.' },
      { id: 'C', text: '$NH_3$.' },
      { id: 'D', text: '$NO_2$.' }
    ],
    correctAnswer: 'A',
    explanation: 'Ở nhiệt độ cao do tia lửa điện của sấm sét, phản ứng trực tiếp xảy ra: $N_2 + O_2 \\rightleftharpoons 2NO$. (Câu 4.8 SBT)',
    difficulty: 'NhanBiet',
    source: 'SBT Hóa học 11 - Bài 4 (Câu 4.8)'
  },
  {
    id: 'c2-b4-q9',
    chapterId: 'chuong-2',
    lessonId: 'bai-4',
    question: 'Trong phản ứng hoá hợp với oxygen ($N_2 + O_2 \\rightleftharpoons 2NO$), nitrogen đóng vai trò là',
    options: [
      { id: 'A', text: 'chất oxi hoá.' },
      { id: 'B', text: 'base.' },
      { id: 'C', text: 'chất khử.' },
      { id: 'D', text: 'acid.' }
    ],
    correctAnswer: 'C',
    explanation: 'Số oxi hoá của nitrogen tăng từ $0$ lên $+2$ trong $NO$, nên $N_2$ là chất khử. (Câu 4.9 SBT)',
    difficulty: 'NhanBiet',
    source: 'SBT Hóa học 11 - Bài 4 (Câu 4.9)'
  },
  {
    id: 'c2-b4-q10',
    chapterId: 'chuong-2',
    lessonId: 'bai-4',
    question: 'Trong tự nhiên, phản ứng giữa nitrogen và oxygen (trong cơn mưa dông kèm sấm sét) là khởi đầu cho quá trình tạo và cung cấp loại phân bón nào cho cây?',
    options: [
      { id: 'A', text: 'Phân kali.' },
      { id: 'B', text: 'Phân đạm ammonium.' },
      { id: 'C', text: 'Phân lân.' },
      { id: 'D', text: 'Phân đạm nitrate.' }
    ],
    correctAnswer: 'D',
    explanation: 'Quá trình chuyển hoá tạo $HNO_3$ tan trong nước mưa phân li ra ion nitrate ($NO_3^-$), cung cấp đạm nitrate cho cây trồng. (Câu 4.10 SBT)',
    difficulty: 'NhanBiet',
    source: 'SBT Hóa học 11 - Bài 4 (Câu 4.10)'
  },
  {
    id: 'c2-b4-q11',
    chapterId: 'chuong-2',
    lessonId: 'bai-4',
    question: 'Áp suất riêng phần của khí nitrogen trong khí quyển là khoảng',
    options: [
      { id: 'A', text: '0,21 bar.' },
      { id: 'B', text: '0,01 bar.' },
      { id: 'C', text: '0,78 bar.' },
      { id: 'D', text: '0,28 bar.' }
    ],
    correctAnswer: 'C',
    explanation: 'Vì nitrogen chiếm khoảng 78,1% thể tích khí quyển nên áp suất riêng phần tương ứng khoảng 0,78 bar ở áp suất khí quyển 1 bar. (Câu 4.11 SBT)',
    difficulty: 'ThongHieu',
    source: 'SBT Hóa học 11 - Bài 4 (Câu 4.11)'
  },
  {
    id: 'c2-b4-q12',
    chapterId: 'chuong-2',
    lessonId: 'bai-4',
    question: 'Trong tự nhiên, nguyên tố nitrogen có hai đồng vị bền là $^{14}N$ (99,63%) và $^{15}N$ (0,37%). Nguyên tử khối trung bình của nitrogen là',
    options: [
      { id: 'A', text: '14,000.' },
      { id: 'B', text: '14,004.' },
      { id: 'C', text: '14,037.' },
      { id: 'D', text: '14,063.' }
    ],
    correctAnswer: 'B',
    explanation: '$\\overline{A}_N = \\frac{14 \\cdot 99,63 + 15 \\cdot 0,37}{100} = 14,0037 \\approx 14,004$. (Câu 4.12 SBT)',
    difficulty: 'ThongHieu',
    source: 'SBT Hóa học 11 - Bài 4 (Câu 4.12)'
  },
  {
    id: 'c2-b4-q13',
    chapterId: 'chuong-2',
    lessonId: 'bai-4',
    question: 'Số liên kết sigma ($\\sigma$) và số liên kết pi ($\\pi$) trong phân tử nitrogen lần lượt là',
    options: [
      { id: 'A', text: '2 và 1.' },
      { id: 'B', text: '0 và 3.' },
      { id: 'C', text: '3 và 0.' },
      { id: 'D', text: '1 và 2.' }
    ],
    correctAnswer: 'D',
    explanation: 'Liên kết ba $N\\equiv N$ gồm 1 liên kết $\\sigma$ và 2 liên kết $\\pi$. (Câu 4.13 SBT)',
    difficulty: 'ThongHieu',
    source: 'SBT Hóa học 11 - Bài 4 (Câu 4.13)'
  },
  {
    id: 'c2-b4-q14',
    chapterId: 'chuong-2',
    lessonId: 'bai-4',
    question: 'Bậc liên kết và năng lượng liên kết trong phân tử nitrogen tương ứng là',
    options: [
      { id: 'A', text: '2 và $418\\text{ kJ/mol}$.' },
      { id: 'B', text: '1 và $167\\text{ kJ/mol}$.' },
      { id: 'C', text: '1 và $386\\text{ kJ/mol}$.' },
      { id: 'D', text: '3 và $945\\text{ kJ/mol}$.' }
    ],
    correctAnswer: 'D',
    explanation: 'Phân tử $N_2$ có liên kết ba nên bậc liên kết là 3, năng lượng liên kết $E_b = 945\\text{ kJ/mol}$. (Câu 4.14 SBT)',
    difficulty: 'ThongHieu',
    source: 'SBT Hóa học 11 - Bài 4 (Câu 4.14)'
  },
  {
    id: 'c2-b4-q15',
    chapterId: 'chuong-2',
    lessonId: 'bai-4',
    question: 'Nitrogen thể hiện tính khử trong phản ứng nào sau đây?',
    options: [
      { id: 'A', text: '$N_2 + O_2 \\xrightarrow{t^o} 2NO$.' },
      { id: 'B', text: '$N_2 + 3H_2 \\xrightarrow{t^o, p, xt} 2NH_3$.' },
      { id: 'C', text: '$3Ca + N_2 \\xrightarrow{t^o} Ca_3N_2$.' },
      { id: 'D', text: '$3Mg + N_2 \\xrightarrow{t^o} Mg_3N_2$.' }
    ],
    correctAnswer: 'A',
    explanation: 'Trong phản ứng với $O_2$, số oxi hoá của N tăng từ $0$ lên $+2$ nên $N_2$ là chất khử. Ở các phản ứng B, C, D, N giảm số oxi hoá từ $0$ xuống $-3$ (thể hiện tính oxi hoá). (Câu 4.15 SBT)',
    difficulty: 'ThongHieu',
    source: 'SBT Hóa học 11 - Bài 4 (Câu 4.15)'
  },
  {
    id: 'c2-b4-q16',
    chapterId: 'chuong-2',
    lessonId: 'bai-4',
    question: 'Nhận định nào sau đây về đơn chất nitrogen là SAI?',
    options: [
      { id: 'A', text: 'Không màu và nhẹ hơn không khí.' },
      { id: 'B', text: 'Hoá hợp với oxygen ở nhiệt độ cao hoặc tia lửa điện.' },
      { id: 'C', text: 'Thể hiện tính oxi hoá mạnh ở điều kiện thường.' },
      { id: 'D', text: 'Khó hoá lỏng và ít tan trong nước.' }
    ],
    correctAnswer: 'C',
    explanation: 'Ở điều kiện thường nitrogen trơ về mặt hoá học, không thể hiện tính oxi hoá mạnh. (Câu 4.17 SBT)',
    difficulty: 'ThongHieu',
    source: 'SBT Hóa học 11 - Bài 4 (Câu 4.17)'
  },
  {
    id: 'c2-b4-q17',
    chapterId: 'chuong-2',
    lessonId: 'bai-4',
    question: 'Trong nghiên cứu, khí nitrogen thường được dùng để tạo bầu khí quyển trơ dựa trên cơ sở nào?',
    options: [
      { id: 'A', text: 'Nitrogen có tính oxi hoá mạnh.' },
      { id: 'B', text: 'Nitrogen rất bền với nhiệt.' },
      { id: 'C', text: 'Nitrogen khó hoá lỏng.' },
      { id: 'D', text: 'Nitrogen không có cực.' }
    ],
    correctAnswer: 'B',
    explanation: 'Do liên kết $N\\equiv N$ rất bền với năng lượng liên kết lớn nên $N_2$ rất trơ và bền với nhiệt. (Câu 4.18 SBT)',
    difficulty: 'ThongHieu',
    source: 'SBT Hóa học 11 - Bài 4 (Câu 4.18)'
  },
  {
    id: 'c2-b4-q18',
    chapterId: 'chuong-2',
    lessonId: 'bai-4',
    question: 'Cho sơ đồ chuyển hoá nitrogen trong khí quyển thành phân đạm:\n$$N_2 \\xrightarrow{+O_2} NO \\xrightarrow{+O_2} NO_2 \\xrightarrow{+O_2 + H_2O} HNO_3 \\rightarrow NO_3^-$$\nSố phản ứng thuộc loại oxi hoá - khử trong sơ đồ là',
    options: [
      { id: 'A', text: '3.' },
      { id: 'B', text: '1.' },
      { id: 'C', text: '4.' },
      { id: 'D', text: '2.' }
    ],
    correctAnswer: 'A',
    explanation: '3 phản ứng đầu có sự thay đổi số oxi hoá của N ($0 \\rightarrow +2 \\rightarrow +4 \\rightarrow +5$) nên là phản ứng oxi hoá - khử. Giai đoạn cuối $HNO_3 \\rightarrow H^+ + NO_3^-$ là quá trình phân li (không thay đổi số oxi hoá). (Câu 4.19 SBT)',
    difficulty: 'ThongHieu',
    source: 'SBT Hóa học 11 - Bài 4 (Câu 4.19)'
  }
];
