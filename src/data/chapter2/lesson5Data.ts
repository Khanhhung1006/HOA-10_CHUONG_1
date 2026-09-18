import { TheorySectionData, Flashcard, QuizQuestion } from '../../types';

export const lesson5Theory: TheorySectionData = {
  id: 'bai-5',
  chapterId: 'chuong-2',
  title: 'Bài 5: Ammonia • Muối Ammonium',
  objectives: [
    'Mô tả được công thức Lewis và dạng hình học của phân tử ammonia.',
    'Từ cấu tạo của phân tử ammonia, giải thích được tính tan, tính base, tính khử. Viết được phương trình hoá học minh hoạ.',
    'Vận dụng được kiến thức về cân bằng hoá học, tốc độ phản ứng, enthalpy cho phản ứng tổng hợp ammonia từ nitrogen và hydrogen trong quá trình Haber.',
    'Trình bày được tính chất cơ bản của muối ammonium và nhận biết ion ammonium trong dung dịch.',
    'Trình bày được ứng dụng của ammonia; ammonium nitrate và một số muối ammonium tan.'
  ],
  summary: 'Phân tử $NH_3$ có dạng hình học chóp tam giác, còn một cặp electron không liên kết trên nguyên tử nitrogen, liên kết $N-H$ phân cực. Ammonia có tính tan rất lớn trong nước và tạo liên kết hydrogen liên phân tử, có tính base yếu và tính khử (số oxi hoá $-3$). Các muối ammonium đều dễ tan, phân li hoàn toàn thành ion và kém bền nhiệt, tác dụng với kiềm giải phóng khí $NH_3$ có mùi khai đặc trưng.',
  coreKnowledge: [
    {
      heading: 'I. Ammonia ($NH_3$)',
      points: [
        'Cấu tạo phân tử: Phân tử $NH_3$ gồm 1 nguyên tử nitrogen liên kết với 3 nguyên tử hydrogen bằng 3 liên kết cộng hoá trị có cực, dạng hình học chóp tam giác. Nguyên tử nitrogen còn 1 cặp electron không liên kết (tạo vùng mật độ điện tích âm). Năng lượng liên kết $N-H$ là $386\\text{ kJ/mol}$.',
        'Tính chất vật lí: Khí không màu, nhẹ hơn không khí ($d = 17/29$), mùi khai và xốc. Tan rất nhiều trong nước (1 lít nước hoà tan được khoảng 700 lít khí $NH_3$ ở điều kiện thường do tạo liên kết hydrogen với nước). Dễ hoá lỏng (ở $-33,3\\;^\\circ\\text{C}$) và dễ hoá rắn (ở $-77,7\\;^\\circ\\text{C}$).',
        'Tính chất hoá học - Tính base:\n- Trong dung dịch: Nhận proton của nước tạo ion ammonium ($NH_4^+$) và $OH^-$, làm quỳ tím hoá xanh, phenolphthalein hoá hồng: $NH_3 + H_2O \\rightleftharpoons NH_4^+ + OH^-$.\n- Tác dụng với acid tạo muối ammonium: $NH_3(g) + HCl(g) \\rightarrow NH_4Cl(s)$ (khói trắng), $2NH_3 + H_2SO_4 \\rightarrow (NH_4)_2SO_4$.\n- Tác dụng với dung dịch muối tạo kết tủa hydroxide: $AlCl_3 + 3NH_3 + 3H_2O \\rightarrow Al(OH)_3\\downarrow + 3NH_4Cl$.',
        'Tính chất hoá học - Tính khử (số oxi hoá của N là $-3$, mức thấp nhất):\n- Đốt cháy trong oxygen (không xúc tác): $4NH_3 + 3O_2 \\xrightarrow{t^o} 2N_2 + 6H_2O$ (ngọn lửa màu vàng).\n- Oxi hoá bởi oxygen có xúc tác $Pt$ ở $800 - 900\\;^\\circ\\text{C}$ (phương pháp Ostwald): $4NH_3 + 5O_2 \\xrightarrow{Pt, t^o} 4NO + 6H_2O$.',
        'Ứng dụng: Sản xuất phân đạm, nitric acid, tác nhân làm lạnh, dung môi hoá học.'
      ],
      latexEquations: [
        'NH_3 + H_2O \\rightleftharpoons NH_4^+ + OH^-',
        'NH_3(g) + HCl(g) \\rightarrow NH_4Cl(s) \\text{ (khói trắng)}',
        '4NH_3 + 3O_2 \\xrightarrow{t^o} 2N_2 + 6H_2O',
        '4NH_3 + 5O_2 \\xrightarrow{Pt, 800 - 900\\;^\\circ\\text{C}} 4NO + 6H_2O'
      ]
    },
    {
      heading: 'II. Muối Ammonium',
      points: [
        'Tính tan và sự điện li: Hầu hết các muối ammonium ($NH_4Cl, NH_4NO_3, (NH_4)_2SO_4, NH_4HCO_3,...$) đều là hợp chất ion, rất dễ tan trong nước và phân li hoàn toàn thành ion: $NH_4Cl \\rightarrow NH_4^+ + Cl^-$. Dạng hình học của ion $NH_4^+$ là tứ diện.',
        'Tác dụng với dung dịch kiềm - Nhận biết ion $NH_4^+$:\nKhi đun nóng muối ammonium với dung dịch kiềm, sinh ra khí ammonia có mùi khai, làm xanh giấy quỳ tím ẩm:\n$$(NH_4)_2SO_4 + 2NaOH \\xrightarrow{t^o} Na_2SO_4 + 2NH_3\\uparrow + 2H_2O$$\nPhương trình ion rút gọn: $NH_4^+ + OH^- \\xrightarrow{t^o} NH_3\\uparrow + H_2O$',
        'Tính chất kém bền nhiệt (dễ bị nhiệt phân):\n- $NH_4Cl(s) \\xrightarrow{t^o} NH_3(g) + HCl(g)$\n- $NH_4HCO_3(s) \\xrightarrow{t^o} NH_3(g) + CO_2(g) + H_2O(g)$ (dùng làm bột nở làm xốp bánh)\n- $NH_4NO_3(s) \\xrightarrow{t^o} N_2O(g) + 2H_2O(g)$ (ở nhiệt độ cao/cháy nổ: $2NH_4NO_3 \\xrightarrow{t^o} 2N_2 + O_2 + 4H_2O$).',
        'Ứng dụng: Dùng làm phân bón hoá học (phân đạm), bột nở làm bánh ($NH_4HCO_3$), thuốc long đờm, thuốc bổ sung chất điện giải, chất đánh sạch bề mặt kim loại.'
      ],
      latexEquations: [
        'NH_4^+ + OH^- \\xrightarrow{t^o} NH_3\\uparrow + H_2O',
        'NH_4Cl(s) \\xrightarrow{t^o} NH_3(g) + HCl(g)',
        'NH_4HCO_3(s) \\xrightarrow{t^o} NH_3(g) + CO_2(g) + H_2O(g)',
        'NH_4NO_3(s) \\xrightarrow{t^o} N_2O(g) + 2H_2O(g)'
      ]
    }
  ],
  formulas: [
    {
      name: 'Cân bằng ion của dung dịch Ammonia trong nước',
      latex: 'K_b = \\frac{[NH_4^+][OH^-]}{[NH_3]} = 1,74 \\cdot 10^{-5} \\quad (\\text{ở } 25\\;^\\circ\\text{C})',
      description: 'Hằng số cân bằng biểu thị lực base yếu của dung dịch ammonia.'
    },
    {
      name: 'Phương trình ion thuỷ phân nhận biết ion Ammonium',
      latex: 'NH_4^+ + OH^- \\xrightarrow{t^o} NH_3\\uparrow + H_2O',
      description: 'Phản ứng đặc trưng dùng dung dịch kiềm ($NaOH, Ba(OH)_2$) nhận biết muối ammonium qua khí mùi khai.'
    }
  ],
  keyConcepts: [
    {
      term: 'Hình học chóp tam giác của $NH_3$',
      definition: 'Nguyên tử N ở đỉnh chóp liên kết với 3 nguyên tử H ở đáy tam giác, trên N còn 1 cặp electron tự do không liên kết.'
    },
    {
      term: 'Tính base theo thuyết Brønsted – Lowry của $NH_3$',
      definition: 'Phân tử $NH_3$ có khả năng nhận proton ($H^+$) nhờ cặp electron tự do trên nguyên tử nitrogen.'
    },
    {
      term: 'Liên kết hydrogen của Ammonia',
      definition: 'Khả năng tạo liên kết hydrogen liên phân tử mạnh giữa các phân tử $NH_3$ với nhau và với phân tử nước, làm $NH_3$ có nhiệt độ sôi cao hơn dự đoán và tan vô cùng nhiều trong nước.'
    },
    {
      term: 'Khói trắng Ammonium chloride ($NH_4Cl$)',
      definition: 'Hiện tượng các hạt tinh thể $NH_4Cl$ rắn màu trắng li ti lơ lửng khi cho 2 đũa thuỷ tinh nhúng dung dịch $HCl$ đặc và dung dịch $NH_3$ đặc lại gần nhau.'
    }
  ],
  examples: [
    {
      title: 'Ví dụ 1: Phân biệt dung dịch phân đạm chứa $NH_4^+$ và $NO_3^-$',
      content: 'Bằng phương pháp hoá học, hãy trình bày cách phân biệt 3 dung dịch mất nhãn: $NH_4NO_3$, $KNO_3$, $NH_4Cl$.',
      solution: '1. Dùng dung dịch $NaOH$ đun nhẹ: mẫu không có hiện tượng là $KNO_3$; 2 mẫu xuất hiện khí có mùi khai bay ra làm xanh quỳ tím ẩm là $NH_4NO_3$ và $NH_4Cl$.\n2. Nhỏ dung dịch $AgNO_3$ vào 2 mẫu có khí mùi khai: mẫu xuất hiện kết tủa trắng ($AgCl$) là $NH_4Cl$, mẫu không có kết tủa là $NH_4NO_3$.'
    },
    {
      title: 'Ví dụ 2: Giải thích vai trò của bột nở $NH_4HCO_3$',
      content: 'Vì sao muối $NH_4HCO_3$ được dùng làm bột nở trong sản xuất bánh bao, bánh quy?',
      solution: 'Khi nướng bánh ở nhiệt độ cao, $NH_4HCO_3$ phân huỷ hoàn toàn thành các chất khí: $NH_4HCO_3 \\xrightarrow{t^o} NH_3\\uparrow + CO_2\\uparrow + H_2O\\uparrow$. Các chất khí này thoát ra làm bánh phồng xốp và không để lại cặn bã trong bánh.'
    }
  ],
  commonMistakes: [
    {
      mistake: 'Cho rằng muối ammonium là hợp chất cộng hoá trị.',
      correction: 'Muối ammonium là hợp chất ion, gồm cation $NH_4^+$ và anion gốc acid liên kết với nhau bằng liên kết ion.',
      why: 'Cation $NH_4^+$ đóng vai trò tương tự như một cation kim loại kiềm trong mạng tinh thể.'
    },
    {
      mistake: 'Nghĩ rằng $NH_3$ hoà tan được kết tủa $Al(OH)_3$ khi dùng dư.',
      correction: '$NH_3$ trong nước chỉ là base yếu nên không thể hoà tan được kết tủa hydroxide lưỡng tính $Al(OH)_3$.',
      why: 'Chỉ các base mạnh ($NaOH, KOH$) mới hoà tan được $Al(OH)_3$.'
    }
  ],
  memoryTips: [
    'Ammonia: Chóp tam giác - Base yếu (quỳ xanh) - Tính khử (tác dụng $O_2$).',
    'Khói trắng: $NH_3(g) + HCl(g) \\rightarrow NH_4Cl(s)$.',
    'Muối ammonium: Dễ tan - Kém bền nhiệt - Gặp kiềm ra khí khai ($NH_3$).'
  ],
  glossary: [
    { term: 'Ammonia', meaning: 'Hợp chất khí không màu, mùi khai xốc, tan cực nhiều trong nước, công thức $NH_3$.' },
    { term: 'Muối Ammonium', meaning: 'Hợp chất ion chứa cation $NH_4^+$ và anion gốc acid.' },
    { term: 'Ammophos', meaning: 'Phân bón phức hợp chứa hỗn hợp muối $NH_4H_2PO_4$ và $(NH_4)_2HPO_4$.' }
  ],
  reviewChecklist: [
    'Vẽ công thức Lewis và mô tả hình học chóp tam giác của $NH_3$.',
    'Giải thích tính tan nhiều của $NH_3$ bằng liên kết hydrogen.',
    'Viết phương trình thể hiện tính base và tính khử của $NH_3$.',
    'Nêu phương pháp dùng kiềm để nhận biết ion $NH_4^+$.',
    'Viết phương trình nhiệt phân các muối $NH_4Cl, NH_4HCO_3, NH_4NO_3$.'
  ]
};

export const lesson5Flashcards: Flashcard[] = [
  {
    id: 'fc-5-1',
    chapterId: 'chuong-2',
    lessonId: 'bai-5',
    category: 'cong-thuc',
    front: 'Dạng hình học của phân tử ammonia ($NH_3$) là gì?',
    back: 'Dạng **hình học chóp tam giác** (với nguyên tử N ở đỉnh và 3 nguyên tử H ở đáy tam giác).'
  },
  {
    id: 'fc-5-2',
    chapterId: 'chuong-2',
    lessonId: 'bai-5',
    category: 'khai-niem',
    front: 'Tại sao khí ammonia tan rất nhiều trong nước?',
    back: 'Do phân tử $NH_3$ phân cực và có khả năng tạo **liên kết hydrogen liên phân tử mạnh** với các phân tử nước.'
  },
  {
    id: 'fc-5-3',
    chapterId: 'chuong-2',
    lessonId: 'bai-5',
    category: 'nitrogen',
    front: 'Dung dịch ammonia làm giấy quỳ tím và dung dịch phenolphthalein đổi màu như thế nào?',
    back: 'Làm quỳ tím chuyển sang **màu xanh**, phenolphthalein chuyển sang **màu hồng** (do có tính base yếu).'
  },
  {
    id: 'fc-5-4',
    chapterId: 'chuong-2',
    lessonId: 'bai-5',
    category: 'nitrogen',
    front: 'Hiện tượng "khói trắng" xuất hiện khi đưa đũa thuỷ tinh dính dung dịch $HCl$ đặc lại gần đũa dính dung dịch $NH_3$ đặc là do chất nào?',
    back: 'Do hình thành các hạt tinh thể rắn màu trắng của **$NH_4Cl$ (ammonium chloride)**:\n$$NH_3(g) + HCl(g) \\rightarrow NH_4Cl(s)$$'
  },
  {
    id: 'fc-5-5',
    chapterId: 'chuong-2',
    lessonId: 'bai-5',
    category: 'nitrogen',
    front: 'Viết phương trình phản ứng oxi hoá ammonia bằng oxygen có xúc tác platinum ($Pt$) ở $800 - 900\\;^\\circ\\text{C}$ (phương pháp Ostwald).',
    back: '$$4NH_3 + 5O_2 \\xrightarrow{Pt, 800 - 900\\;^\\circ\\text{C}} 4NO + 6H_2O$$'
  },
  {
    id: 'fc-5-6',
    chapterId: 'chuong-2',
    lessonId: 'bai-5',
    category: 'nitrogen',
    front: 'Đốt cháy khí ammonia trong oxygen không có xúc tác sinh ra sản phẩm gì?',
    back: 'Sinh ra khí **nitrogen ($N_2$)** và hơi nước (ngọn lửa màu vàng):\n$$4NH_3 + 3O_2 \\xrightarrow{t^o} 2N_2 + 6H_2O$$'
  },
  {
    id: 'fc-5-7',
    chapterId: 'chuong-2',
    lessonId: 'bai-5',
    category: 'khai-niem',
    front: 'Dạng hình học của ion ammonium ($NH_4^+$) là gì?',
    back: 'Dạng **hình học tứ diện**.'
  },
  {
    id: 'fc-5-8',
    chapterId: 'chuong-2',
    lessonId: 'bai-5',
    category: 'nitrogen',
    front: 'Thuốc thử dùng để nhận biết ion ammonium ($NH_4^+$) trong dung dịch là gì? Nêu hiện tượng.',
    back: 'Dùng dung dịch **kiềm ($NaOH, KOH$)** và đun nóng nhẹ. Hiện tượng: Sinh ra **khí mùi khai ($NH_3$)** làm xanh giấy quỳ tím ẩm.'
  },
  {
    id: 'fc-5-9',
    chapterId: 'chuong-2',
    lessonId: 'bai-5',
    category: 'nitrogen',
    front: 'Viết phương trình nhiệt phân muối $NH_4Cl$ và $NH_4HCO_3$.',
    back: '$$NH_4Cl(s) \\xrightarrow{t^o} NH_3(g) + HCl(g)$$\n$$NH_4HCO_3(s) \\xrightarrow{t^o} NH_3(g) + CO_2(g) + H_2O(g)$$'
  },
  {
    id: 'fc-5-10',
    chapterId: 'chuong-2',
    lessonId: 'bai-5',
    category: 'nitrogen',
    front: 'Viết phương trình nhiệt phân muối $NH_4NO_3$ ở nhiệt độ thường/vừa phải.',
    back: '$$NH_4NO_3(s) \\xrightarrow{t^o} N_2O(g) + 2H_2O(g)$$'
  },
  {
    id: 'fc-5-11',
    chapterId: 'chuong-2',
    lessonId: 'bai-5',
    category: 'thuc-tien',
    front: 'Tại sao ammonium nitrate ($NH_4NO_3$) phải được bảo quản nghiêm ngặt phòng chống cháy nổ?',
    back: 'Vì ở nhiệt độ cao $NH_4NO_3$ có thể phân huỷ nổ rất mạnh sinh lượng lớn khí và nhiệt:\n$$2NH_4NO_3 \\xrightarrow{t^o} 2N_2 + O_2 + 4H_2O$$'
  },
  {
    id: 'fc-5-12',
    chapterId: 'chuong-2',
    lessonId: 'bai-5',
    category: 'thuc-tien',
    front: 'Phân bón Ammophos chứa những muối nào?',
    back: 'Chứa hỗn hợp hai muối **$NH_4H_2PO_4$** và **$(NH_4)_2HPO_4$**.'
  },
  {
    id: 'fc-5-13',
    chapterId: 'chuong-2',
    lessonId: 'bai-5',
    category: 'thuc-tien',
    front: 'Nêu các ứng dụng chính của ammonia trong công nghiệp.',
    back: 'Sản xuất phân đạm, sản xuất nitric acid ($HNO_3$), làm tác nhân làm lạnh và dung môi hoá học.'
  },
  {
    id: 'fc-5-14',
    chapterId: 'chuong-2',
    lessonId: 'bai-5',
    category: 'nitrogen',
    front: 'Khi cho từ từ dung dịch $NH_3$ đến dư vào dung dịch $AlCl_3$, hiện tượng quan sát được là gì?',
    back: 'Xuất hiện **kết tủa keo trắng $Al(OH)_3$**, kết tủa không tan khi dung dịch $NH_3$ dư.'
  },
  {
    id: 'fc-5-15',
    chapterId: 'chuong-2',
    lessonId: 'bai-5',
    category: 'khai-niem',
    front: 'Theo thuyết Brønsted – Lowry, trong nước ion $NH_4^+$ thể hiện vai trò là acid hay base?',
    back: 'Là **acid** vì có khả năng nhường proton ($H^+$):\n$$NH_4^+ + H_2O \\rightleftharpoons NH_3 + H_3O^+$$'
  }
];

export const lesson5Quizzes: QuizQuestion[] = [
  {
    id: 'c2-b5-q1',
    chapterId: 'chuong-2',
    lessonId: 'bai-5',
    question: 'Ở trạng thái lỏng nguyên chất, phân tử chất nào sau đây tạo được liên kết hydrogen với nhau?',
    options: [
      { id: 'A', text: 'Nitrogen.' },
      { id: 'B', text: 'Ammonia.' },
      { id: 'C', text: 'Oxygen.' },
      { id: 'D', text: 'Hydrogen.' }
    ],
    correctAnswer: 'B',
    explanation: 'Phân tử $NH_3$ có nguyên tử H liên kết với nguyên tử N có độ âm điện lớn và còn cặp electron tự do nên tạo được liên kết hydrogen liên phân tử. (Câu 5.1 SBT)',
    difficulty: 'NhanBiet',
    source: 'SBT Hóa học 11 - Bài 5 (Câu 5.1)'
  },
  {
    id: 'c2-b5-q2',
    chapterId: 'chuong-2',
    lessonId: 'bai-5',
    question: 'Khí nào sau đây dễ tan trong nước do tạo được liên kết hydrogen với nước?',
    options: [
      { id: 'A', text: 'Nitrogen.' },
      { id: 'B', text: 'Hydrogen.' },
      { id: 'C', text: 'Ammonia.' },
      { id: 'D', text: 'Oxygen.' }
    ],
    correctAnswer: 'C',
    explanation: 'Khí ammonia ($NH_3$) tạo được liên kết hydrogen mạnh với các phân tử nước nên tan cực kì nhiều trong nước (1 lít nước hoà tan được 700 lít $NH_3$). (Câu 5.2 SBT)',
    difficulty: 'NhanBiet',
    source: 'SBT Hóa học 11 - Bài 5 (Câu 5.2)'
  },
  {
    id: 'c2-b5-q3',
    chapterId: 'chuong-2',
    lessonId: 'bai-5',
    question: 'Nhận định nào sau đây về phân tử ammonia KHÔNG đúng?',
    options: [
      { id: 'A', text: 'Phân cực mạnh.' },
      { id: 'B', text: 'Có một cặp electron không liên kết.' },
      { id: 'C', text: 'Có độ bền nhiệt rất cao.' },
      { id: 'D', text: 'Có khả năng nhận proton.' }
    ],
    correctAnswer: 'C',
    explanation: '$NH_3$ không có độ bền nhiệt rất cao, ở nhiệt độ cao nó bị phân huỷ thành $N_2$ và $H_2$. (Câu 5.3 SBT)',
    difficulty: 'NhanBiet',
    source: 'SBT Hóa học 11 - Bài 5 (Câu 5.3)'
  },
  {
    id: 'c2-b5-q4',
    chapterId: 'chuong-2',
    lessonId: 'bai-5',
    question: 'Khi tác dụng với nước và hydrochloric acid, ammonia đóng vai trò là',
    options: [
      { id: 'A', text: 'acid.' },
      { id: 'B', text: 'base.' },
      { id: 'C', text: 'chất oxi hoá.' },
      { id: 'D', text: 'chất khử.' }
    ],
    correctAnswer: 'B',
    explanation: '$NH_3$ nhận proton ($H^+$) từ nước và $HCl$ nên đóng vai trò là base theo thuyết Brønsted – Lowry. (Câu 5.4 SBT)',
    difficulty: 'NhanBiet',
    source: 'SBT Hóa học 11 - Bài 5 (Câu 5.4)'
  },
  {
    id: 'c2-b5-q5',
    chapterId: 'chuong-2',
    lessonId: 'bai-5',
    question: 'Trong phương pháp Ostwald, ammonia bị oxi hoá bởi oxygen không khí (xúc tác Pt) tạo thành sản phẩm chính là',
    options: [
      { id: 'A', text: '$NO$.' },
      { id: 'B', text: '$N_2$.' },
      { id: 'C', text: '$N_2O$.' },
      { id: 'D', text: '$NO_2$.' }
    ],
    correctAnswer: 'A',
    explanation: 'Phản ứng: $4NH_3 + 5O_2 \\xrightarrow{Pt, t^o} 4NO + 6H_2O$. (Câu 5.5 SBT)',
    difficulty: 'NhanBiet',
    source: 'SBT Hóa học 11 - Bài 5 (Câu 5.5)'
  },
  {
    id: 'c2-b5-q6',
    chapterId: 'chuong-2',
    lessonId: 'bai-5',
    question: 'Cho dung dịch $NH_3$ vào dung dịch chất nào sau đây thu được kết tủa trắng?',
    options: [
      { id: 'A', text: '$HCl$.' },
      { id: 'B', text: '$H_2SO_4$.' },
      { id: 'C', text: '$H_3PO_4$.' },
      { id: 'D', text: '$AlCl_3$.' }
    ],
    correctAnswer: 'D',
    explanation: 'Phản ứng tạo kết tủa keo trắng: $AlCl_3 + 3NH_3 + 3H_2O \\rightarrow Al(OH)_3\\downarrow + 3NH_4Cl$. (Câu 5.6 SBT)',
    difficulty: 'NhanBiet',
    source: 'SBT Hóa học 11 - Bài 5 (Câu 5.6)'
  },
  {
    id: 'c2-b5-q7',
    chapterId: 'chuong-2',
    lessonId: 'bai-5',
    question: 'Cho vài giọt dung dịch phenolphthalein vào dung dịch $NH_3$, phenolphthalein chuyển sang màu nào sau đây?',
    options: [
      { id: 'A', text: 'Hồng.' },
      { id: 'B', text: 'Xanh.' },
      { id: 'C', text: 'Không màu.' },
      { id: 'D', text: 'Vàng.' }
    ],
    correctAnswer: 'A',
    explanation: 'Dung dịch $NH_3$ có tính base yếu do ion $OH^-$, làm phenolphthalein chuyển sang màu hồng. (Câu 5.7 SBT)',
    difficulty: 'NhanBiet',
    source: 'SBT Hóa học 11 - Bài 5 (Câu 5.7)'
  },
  {
    id: 'c2-b5-q8',
    chapterId: 'chuong-2',
    lessonId: 'bai-5',
    question: 'Nhiệt phân hoàn toàn muối nào sau đây thu được sản phẩm chỉ gồm chất khí và hơi?',
    options: [
      { id: 'A', text: '$NaCl$.' },
      { id: 'B', text: '$CaCO_3$.' },
      { id: 'C', text: '$KClO_3$.' },
      { id: 'D', text: '$(NH_4)_2CO_3$.' }
    ],
    correctAnswer: 'D',
    explanation: '$(NH_4)_2CO_3 \\xrightarrow{t^o} 2NH_3\\uparrow + CO_2\\uparrow + H_2O\\uparrow$ (toàn bộ sản phẩm đều ở thể khí và hơi). (Câu 5.8 SBT)',
    difficulty: 'NhanBiet',
    source: 'SBT Hóa học 11 - Bài 5 (Câu 5.8)'
  },
  {
    id: 'c2-b5-q9',
    chapterId: 'chuong-2',
    lessonId: 'bai-5',
    question: 'Phân biệt được dung dịch $NH_4Cl$ và $NaCl$ bằng thuốc thử là dung dịch',
    options: [
      { id: 'A', text: '$KCl$.' },
      { id: 'B', text: '$KNO_3$.' },
      { id: 'C', text: '$KOH$.' },
      { id: 'D', text: '$K_2SO_4$.' }
    ],
    correctAnswer: 'C',
    explanation: 'Dùng kiềm $KOH$ đun nóng: ống nghiệm chứa $NH_4Cl$ giải phóng khí có mùi khai ($NH_3$), còn $NaCl$ không phản ứng. (Câu 5.9 SBT)',
    difficulty: 'NhanBiet',
    source: 'SBT Hóa học 11 - Bài 5 (Câu 5.9)'
  },
  {
    id: 'c2-b5-q10',
    chapterId: 'chuong-2',
    lessonId: 'bai-5',
    question: 'Trong nước, phân tử/ion nào sau đây thể hiện vai trò là acid Brønsted?',
    options: [
      { id: 'A', text: '$NH_3$.' },
      { id: 'B', text: '$NH_4^+$.' },
      { id: 'C', text: '$NO_3^-$.' },
      { id: 'D', text: '$N_2$.' }
    ],
    correctAnswer: 'B',
    explanation: '$NH_4^+$ có khả năng nhường proton cho nước: $NH_4^+ + H_2O \\rightleftharpoons NH_3 + H_3O^+$ nên là acid Brønsted. (Câu 5.10 SBT)',
    difficulty: 'NhanBiet',
    source: 'SBT Hóa học 11 - Bài 5 (Câu 5.10)'
  },
  {
    id: 'c2-b5-q11',
    chapterId: 'chuong-2',
    lessonId: 'bai-5',
    question: 'Cho các nhận định sau: Phân tử ammonia và ion ammonium đều\n(1) chứa liên kết cộng hoá trị;\n(2) là base Brønsted trong nước;\n(3) là acid Brønsted trong nước;\n(4) chứa nguyên tử N có số oxi hoá là $-3$.\nSố nhận định đúng là',
    options: [
      { id: 'A', text: '2.' },
      { id: 'B', text: '1.' },
      { id: 'C', text: '4.' },
      { id: 'D', text: '3.' }
    ],
    correctAnswer: 'A',
    explanation: 'Các nhận định đúng là (1) và (4). Nhận định (2) sai vì $NH_4^+$ là acid; nhận định (3) sai vì $NH_3$ là base. (Câu 5.11 SBT)',
    difficulty: 'ThongHieu',
    source: 'SBT Hóa học 11 - Bài 5 (Câu 5.11)'
  },
  {
    id: 'c2-b5-q12',
    chapterId: 'chuong-2',
    lessonId: 'bai-5',
    question: 'Phát biểu nào sau đây KHÔNG đúng?',
    options: [
      { id: 'A', text: 'Ammonia là base Brønsted khi tác dụng với nước.' },
      { id: 'B', text: 'Ammonia được sử dụng là chất làm lạnh.' },
      { id: 'C', text: 'Muối ammonium là tinh thể ion, dễ tan trong nước.' },
      { id: 'D', text: 'Các muối ammonium đều rất bền với nhiệt.' }
    ],
    correctAnswer: 'D',
    explanation: 'Các muối ammonium đều kém bền với nhiệt và dễ bị phân huỷ khi nung nóng. (Câu 5.13 SBT)',
    difficulty: 'ThongHieu',
    source: 'SBT Hóa học 11 - Bài 5 (Câu 5.13)'
  },
  {
    id: 'c2-b5-q13',
    chapterId: 'chuong-2',
    lessonId: 'bai-5',
    question: 'Tiến hành các thí nghiệm trộn từng cặp dung dịch sau: (a) $NH_3$ và $AlCl_3$; (b) $(NH_4)_2SO_4$ và $Ba(OH)_2$; (c) $NH_4Cl$ và $AgNO_3$; (d) $NH_3$ và $HCl$. Sau khi phản ứng kết thúc, số thí nghiệm thu được kết tủa là',
    options: [
      { id: 'A', text: '1.' },
      { id: 'B', text: '3.' },
      { id: 'C', text: '2.' },
      { id: 'D', text: '4.' }
    ],
    correctAnswer: 'B',
    explanation: 'Có 3 thí nghiệm thu được kết tủa:\n(a) tạo kết tủa $Al(OH)_3$;\n(b) tạo kết tủa $BaSO_4$;\n(c) tạo kết tủa $AgCl$.\nThí nghiệm (d) tạo muối $NH_4Cl$ tan trong dung dịch. (Câu 5.14 SBT)',
    difficulty: 'ThongHieu',
    source: 'SBT Hóa học 11 - Bài 5 (Câu 5.14)'
  },
  {
    id: 'c2-b5-q14',
    chapterId: 'chuong-2',
    lessonId: 'bai-5',
    question: 'Xét cân bằng hoá học: $NH_3 + H_2O \\rightleftharpoons NH_4^+ + OH^-$. Cân bằng sẽ chuyển dịch theo chiều thuận khi cho thêm vài giọt dung dịch nào sau đây?',
    options: [
      { id: 'A', text: '$NH_4Cl$.' },
      { id: 'B', text: '$NaOH$.' },
      { id: 'C', text: '$HCl$.' },
      { id: 'D', text: '$NaCl$.' }
    ],
    correctAnswer: 'C',
    explanation: 'Khi thêm $HCl$, $H^+$ tác dụng với $OH^-$ làm giảm nồng độ $OH^-$, cân bằng chuyển dịch theo chiều thuận để bù lại $OH^-$. (Câu 5.15 SBT)',
    difficulty: 'ThongHieu',
    source: 'SBT Hóa học 11 - Bài 5 (Câu 5.15)'
  },
  {
    id: 'c2-b5-q15',
    chapterId: 'chuong-2',
    lessonId: 'bai-5',
    question: 'Hằng số cân bằng ($K_C$) của phản ứng $NH_3 + H_2O \\rightleftharpoons NH_4^+ + OH^-$ được biểu diễn bằng biểu thức nào sau đây (chất lỏng nguyên chất $H_2O$ không có mặt trong biểu thức)?',
    options: [
      { id: 'A', text: '$K_C = \\frac{[NH_4^+][OH^-]}{[NH_3]}$.' },
      { id: 'B', text: '$K_C = \\frac{[NH_4^+][OH^-]}{[NH_3][H_2O]}$.' },
      { id: 'C', text: '$K_C = \\frac{[NH_4^+][OH^-]}{[H_2O]}$.' },
      { id: 'D', text: '$K_C = \\frac{[NH_4^+]}{[NH_3]}$.' }
    ],
    correctAnswer: 'A',
    explanation: 'Trong dung dịch loãng, nồng độ của nước là hằng số nên không xuất hiện trong biểu thức $K_C$: $K_C = \\frac{[NH_4^+][OH^-]}{[NH_3]}$. (Câu 5.16 SBT)',
    difficulty: 'ThongHieu',
    source: 'SBT Hóa học 11 - Bài 5 (Câu 5.16)'
  }
];
