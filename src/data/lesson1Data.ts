import { TheorySectionData, Flashcard, QuizQuestion } from '../types';

export const lesson1Theory: TheorySectionData = {
  id: 'bai-1',
  title: 'Bài 1: Khái niệm về cân bằng hoá học',
  objectives: [
    'Trình bày được khái niệm phản ứng thuận nghịch và trạng thái cân bằng của phản ứng thuận nghịch.',
    'Viết được biểu thức hằng số cân bằng ($K_c$) của phản ứng thuận nghịch.',
    'Thực hiện được thí nghiệm nghiên cứu ảnh hưởng của nhiệt độ tới chuyển dịch cân bằng ($2NO_2 \\rightleftharpoons N_2O_4$; phản ứng thuỷ phân sodium acetate).',
    'Vận dụng được nguyên lí chuyển dịch cân bằng Le Chatelier để giải thích ảnh hưởng của nhiệt độ, nồng độ, áp suất đến cân bằng hoá học.'
  ],
  summary: 'Phản ứng thuận nghịch xảy ra theo hai chiều ngược nhau trong cùng điều kiện. Trạng thái cân bằng hoá học là cân bằng động, tại đó tốc độ phản ứng thuận bằng tốc độ phản ứng nghịch ($v_{thuận} = v_{nghịch}$), nồng độ các chất trong hệ không đổi. Hằng số cân bằng $K_c$ chỉ phụ thuộc vào nhiệt độ và bản chất phản ứng. Nguyên lí Le Chatelier cho biết khi chịu tác động từ bên ngoài (nồng độ, nhiệt độ, áp suất), cân bằng sẽ chuyển dịch theo chiều làm giảm tác động đó.',
  coreKnowledge: [
    {
      heading: '1. Phản ứng một chiều và phản ứng thuận nghịch',
      points: [
        'Phản ứng một chiều: là phản ứng chỉ xảy ra một chiều từ chất đầu tạo thành sản phẩm. Biểu diễn bằng mũi tên một chiều $\\rightarrow$. Ví dụ: $NaOH + HCl \\rightarrow NaCl + H_2O$, $CH_4 + 2O_2 \\xrightarrow{t^o} CO_2 + 2H_2O$.',
        'Phản ứng thuận nghịch: là phản ứng xảy ra theo hai chiều trái ngược nhau trong cùng điều kiện. Biểu diễn bằng hai nửa mũi tên ngược chiều $\\rightleftharpoons$. Chiều từ trái sang phải là chiều thuận, chiều từ phải sang trái là chiều nghịch.',
        'Trong thực tế, phản ứng thuận nghịch xảy ra không hoàn toàn vì các chất sinh ra lại tác dụng với nhau tạo lại chất ban đầu.'
      ],
      latexEquations: [
        'H_2(g) + I_2(g) \\rightleftharpoons 2HI(g)',
        'Cl_2(g) + H_2O(l) \\rightleftharpoons HCl(aq) + HClO(aq)'
      ]
    },
    {
      heading: '2. Trạng thái cân bằng hoá học',
      points: [
        'Trạng thái cân bằng của phản ứng thuận nghịch là trạng thái tại đó tốc độ phản ứng thuận bằng tốc độ phản ứng nghịch ($v_{thuận} = v_{nghịch}$).',
        'Cân bằng hoá học là một cân bằng động: các chất tham gia phản ứng liên tục phản ứng với nhau để tạo thành sản phẩm và các chất sản phẩm cũng liên tục phản ứng với nhau để tạo thành các chất đầu nhưng với tốc độ bằng nhau nên ở trạng thái cân bằng, nồng độ các chất không thay đổi.'
      ]
    },
    {
      heading: '3. Hằng số cân bằng ($K_c$)',
      points: [
        'Xét phản ứng thuận nghịch tổng quát: $aA + bB \\rightleftharpoons cC + dD$. Biểu thức hằng số cân bằng nồng độ: $K_c = \\frac{[C]^c[D]^d}{[A]^a[B]^b}$.',
        'Trong đó: $[A], [B], [C], [D]$ là nồng độ mol của các chất ở trạng thái cân bằng; $a, b, c, d$ là hệ số tỉ lượng trong phương trình hoá học.',
        'Quy ước: Chất rắn không biểu diễn trong biểu thức hằng số cân bằng $K_c$. Ví dụ với $C(s) + CO_2(g) \\rightleftharpoons 2CO(g)$ thì $K_c = \\frac{[CO]^2}{[CO_2]}$.',
        'Đặc điểm của $K_c$: $K_c$ chỉ phụ thuộc vào nhiệt độ và bản chất của phản ứng, không phụ thuộc vào nồng độ ban đầu của các chất.',
        'Ý nghĩa của $K_c$: Cho biết mức độ xảy ra của phản ứng. $K_c$ càng lớn thì phản ứng thuận càng chiếm ưu thế và ngược lại.'
      ]
    },
    {
      heading: '4. Các yếu tố ảnh hưởng đến chuyển dịch cân bằng hoá học',
      points: [
        'Nguyên lí chuyển dịch cân bằng Le Chatelier: Một phản ứng thuận nghịch đang ở trạng thái cân bằng, khi chịu một tác động bên ngoài làm thay đổi nồng độ, nhiệt độ, áp suất thì cân bằng sẽ chuyển dịch theo chiều làm giảm tác động bên ngoài đó.',
        'Ảnh hưởng của nhiệt độ: Khi tăng nhiệt độ, cân bằng chuyển dịch theo chiều thu nhiệt ($\\Delta_r H_{298}^o > 0$). Khi giảm nhiệt độ, cân bằng chuyển dịch theo chiều toả nhiệt ($\\Delta_r H_{298}^o < 0$).',
        'Ảnh hưởng của nồng độ: Khi tăng nồng độ một chất, cân bằng chuyển dịch theo chiều làm giảm nồng độ chất đó (tiêu thụ chất đó) và ngược lại.',
        'Ảnh hưởng của áp suất: Khi tăng áp suất chung của hệ, cân bằng chuyển dịch theo chiều làm giảm áp suất, tức là chiều làm giảm số mol khí và ngược lại. Nếu phản ứng có tổng hệ số tỉ lượng của các chất khí ở 2 vế bằng nhau, áp suất không làm chuyển dịch cân bằng.',
        'Vai trò của chất xúc tác: Chất xúc tác làm tăng tốc độ phản ứng thuận và phản ứng nghịch với số lần bằng nhau, giúp hệ phản ứng nhanh đạt tới trạng thái cân bằng chứ KHÔNG làm chuyển dịch cân bằng và không làm thay đổi giá trị $K_c$.'
      ]
    }
  ],
  formulas: [
    {
      name: 'Hằng số cân bằng nồng độ ($K_c$)',
      latex: 'K_c = \\frac{[C]^c[D]^d}{[A]^a[B]^b}',
      description: 'Áp dụng cho phản ứng $aA + bB \\rightleftharpoons cC + dD$ ở trạng thái cân bằng.',
      notes: 'Quy ước không đưa nồng độ các chất rắn vào biểu thức tính $K_c$.'
    },
    {
      name: 'Điều kiện động học của trạng thái cân bằng',
      latex: 'v_{\\text{thuận}} = v_{\\text{nghịch}} \\quad (v_{\\text{thuận}} = v_{\\text{nghịch}} \\ne 0)',
      description: 'Tốc độ phản ứng thuận bằng tốc độ phản ứng nghịch tại thời điểm cân bằng.'
    },
    {
      name: 'Biến thiên Enthalpy chuẩn và Chiều phản ứng',
      latex: '\\Delta_r H_{298}^o < 0 \\text{ (Toả nhiệt)}, \\quad \\Delta_r H_{298}^o > 0 \\text{ (Thu nhiệt)}',
      description: 'Xác định chiều tỏa / thu nhiệt để vận dụng nguyên lí Le Chatelier khi biến đổi nhiệt độ.'
    }
  ],
  keyConcepts: [
    { term: 'Phản ứng thuận nghịch', definition: 'Phản ứng xảy ra theo hai chiều trái ngược nhau trong cùng điều kiện xác định.' },
    { term: 'Cân bằng động', definition: 'Trạng thái mà phản ứng thuận và nghịch vẫn tiếp tục diễn ra với tốc độ bằng nhau ($v_{\\text{thuận}} = v_{\\text{nghịch}}$).' },
    { term: 'Hằng số $K_c$', definition: 'Tỉ số tích nồng độ sản phẩm với lũy thừa hệ số tương ứng chia tích nồng độ chất đầu tại trạng thái cân bằng.' },
    { term: 'Nguyên lí Le Chatelier', definition: 'Cân bằng chuyển dịch theo chiều chống lại tác động bên ngoài làm biến đổi trạng thái cân bằng.' }
  ],
  examples: [
    {
      title: 'Thí nghiệm nhiệt độ với khí $NO_2 / N_2O_4$',
      content: 'Cân bằng: $2NO_2(g) \\text{ (nâu đỏ)} \\rightleftharpoons N_2O_4(g) \\text{ (không màu)} \\quad \\Delta_r H_{298}^o < 0$.\n- Ngâm vào nước đá (hạ nhiệt độ): Cân bằng chuyển dịch theo chiều toả nhiệt (chiều thuận) $\\rightarrow$ màu nâu đỏ nhạt dần.\n- Ngâm vào nước nóng (tăng nhiệt độ): Cân bằng chuyển dịch theo chiều thu nhiệt (chiều nghịch) $\\rightarrow$ màu nâu đỏ đậm dần.'
    },
    {
      title: 'Sản xuất Ammonia trong công nghiệp (Haber-Bosch)',
      content: 'Phản ứng: $N_2(g) + 3H_2(g) \\rightleftharpoons 2NH_3(g) \\quad \\Delta_r H_{298}^o = -91,8\\text{ kJ}$.\n- Tăng áp suất (~200 bar): Chuyển dịch chiều thuận (từ 4 mol khí sang 2 mol khí) tăng hiệu suất.\n- Nhiệt độ thích hợp (~450 °C): Dung hòa giữa chuyển dịch cân bằng và tốc độ phản ứng.\n- Xúc tác: Bột sắt ($Fe$) giúp hệ nhanh đạt cân bằng.'
    }
  ],
  commonMistakes: [
    {
      mistake: 'Cho rằng khi đạt cân bằng hoá học thì phản ứng dừng lại hoàn toàn.',
      correction: 'Cân bằng hoá học là cân bằng động, hai phản ứng thuận và nghịch vẫn liên tục diễn ra với tốc độ bằng nhau ($v_{\\text{thuận}} = v_{\\text{nghịch}}$).',
      why: 'Nồng độ các chất không đổi là do lượng sinh ra bằng lượng mất đi trong cùng khoảng thời gian.'
    },
    {
      mistake: 'Đưa nồng độ chất rắn (như $C(s), CaCO_3(s), Fe(s)$) vào biểu thức $K_c$.',
      correction: 'Quy ước không đưa nồng độ chất rắn vào biểu thức tính $K_c$.',
      why: 'Nồng độ hoạt độ của chất rắn nguyên chất được coi là hằng số.'
    },
    {
      mistake: 'Nghĩ rằng chất xúc tác làm tăng hiệu suất tạo sản phẩm hoặc thay đổi $K_c$.',
      correction: 'Chất xúc tác chỉ làm tăng tốc độ thuận và nghịch như nhau, không làm chuyển dịch cân bằng và không thay đổi $K_c$.',
      why: 'Xúc tác chỉ hạ năng lượng hoạt hóa của cả 2 chiều với mức độ như nhau.'
    }
  ],
  memoryTips: [
    'Thần chú nhiệt độ: "Tăng Thu - Giảm Toả" (Tăng nhiệt độ cân bằng chuyển dịch theo chiều Thu nhiệt; Giảm nhiệt độ chuyển dịch theo chiều Toả nhiệt).',
    'Thần chú nồng độ: "Thêm chất nào thì cân bằng chạy trốn khỏi chất đó, Bớt chất nào thì cân bằng chạy về phía chất đó".',
    'Thần chú áp suất: "Tăng áp suất $\\rightarrow$ chuyển dịch về phía ít mol khí hơn; Giảm áp suất $\\rightarrow$ chuyển dịch về phía nhiều mol khí hơn".',
    'Chất rắn và chất xúc tác KHÔNG làm chuyển dịch cân bằng theo nguyên lí áp suất hay xúc tác.'
  ],
  glossary: [
    { term: 'Phản ứng một chiều', meaning: 'Phản ứng hoá học chỉ xảy ra theo một chiều từ chất tham gia tạo thành chất sản phẩm.' },
    { term: 'Phản ứng thuận nghịch', meaning: 'Phản ứng hoá học xảy ra theo cả hai chiều thuận và nghịch dưới cùng một điều kiện xác định.' },
    { term: 'Cân bằng hoá học', meaning: 'Trạng thái của hệ phản ứng thuận nghịch khi tốc độ phản ứng thuận bằng tốc độ phản ứng nghịch.' },
    { term: 'Hằng số cân bằng ($K_c$)', meaning: 'Đại lượng đặc trưng cho trạng thái cân bằng nồng độ của một phản ứng thuận nghịch ở nhiệt độ xác định.' }
  ],
  reviewChecklist: [
    'Phân biệt được phản ứng một chiều và phản ứng thuận nghịch.',
    'Nắm vững bản chất cân bằng động ($v_{thuận} = v_{nghịch}$).',
    'Viết chính xác biểu thức $K_c$ (loại bỏ chất rắn).',
    'Vận dụng nguyên lí Le Chatelier cho nồng độ, nhiệt độ, áp suất.',
    'Hiểu rõ vai trò của chất xúc tác trong hệ cân bằng.'
  ]
};

export const lesson1Flashcards: Flashcard[] = [
  {
    id: 'fc-1-1',
    lessonId: 'bai-1',
    category: 'khai-niem',
    front: 'Thế nào là phản ứng một chiều? Cho ví dụ minh họa.',
    back: 'Phản ứng một chiều là phản ứng chỉ xảy ra theo một chiều từ chất đầu tạo thành sản phẩm. Kí hiệu mũi tên $\\rightarrow$.\nVí dụ: $NaOH + HCl \\rightarrow NaCl + H_2O$ hoặc $CH_4 + 2O_2 \\xrightarrow{t^o} CO_2 + 2H_2O$.'
  },
  {
    id: 'fc-1-2',
    lessonId: 'bai-1',
    category: 'khai-niem',
    front: 'Thế nào là phản ứng thuận nghịch? Kí hiệu như thế nào?',
    back: 'Phản ứng thuận nghịch là phản ứng xảy ra theo hai chiều trái ngược nhau trong cùng điều kiện.\nBiểu diễn bằng hai nửa mũi tên ngược chiều $\\rightleftharpoons$.\nVí dụ: $H_2(g) + I_2(g) \\rightleftharpoons 2HI(g)$.'
  },
  {
    id: 'fc-1-3',
    lessonId: 'bai-1',
    category: 'khai-niem',
    front: 'Định nghĩa trạng thái cân bằng hoá học của phản ứng thuận nghịch.',
    back: 'Là trạng thái của phản ứng thuận nghịch tại đó tốc độ phản ứng thuận bằng tốc độ phản ứng nghịch ($v_{thuận} = v_{nghịch}$).'
  },
  {
    id: 'fc-1-4',
    lessonId: 'bai-1',
    category: 'khai-niem',
    front: 'Tại sao nói cân bằng hoá học là một "cân bằng động"?',
    back: 'Vì tại trạng thái cân bằng, các phản ứng thuận và nghịch vẫn liên tục diễn ra với tốc độ bằng nhau ($v_{thuận} = v_{nghịch} \\ne 0$), không phải phản ứng dừng lại.'
  },
  {
    id: 'fc-1-5',
    lessonId: 'bai-1',
    category: 'cong-thuc',
    front: 'Viết biểu thức hằng số cân bằng $K_c$ tổng quát cho phản ứng: $aA + bB \\rightleftharpoons cC + dD$.',
    back: 'Biểu thức: $$K_c = \\frac{[C]^c[D]^d}{[A]^a[B]^b}$$\nTrong đó $[A], [B], [C], [D]$ là nồng độ mol của các chất ở trạng thái cân bằng.'
  },
  {
    id: 'fc-1-6',
    lessonId: 'bai-1',
    category: 'cong-thuc',
    front: 'Chất ở trạng thái nào KHÔNG được biểu diễn trong biểu thức $K_c$?',
    back: 'Chất rắn (solid - s) không được biểu diễn trong biểu thức hằng số cân bằng $K_c$.\nVí dụ: $C(s) + CO_2(g) \\rightleftharpoons 2CO(g) \\Rightarrow K_c = \\frac{[CO]^2}{[CO_2]}$.'
  },
  {
    id: 'fc-1-7',
    lessonId: 'bai-1',
    category: 'cong-thuc',
    front: 'Hằng số cân bằng $K_c$ phụ thuộc vào những yếu tố nào?',
    back: 'Hằng số cân bằng $K_c$ CHỈ phụ thuộc vào nhiệt độ và bản chất của phản ứng. $K_c$ KHÔNG phụ thuộc vào nồng độ ban đầu của các chất hay chất xúc tác.'
  },
  {
    id: 'fc-1-8',
    lessonId: 'bai-1',
    category: 'cong-thuc',
    front: 'Ý nghĩa của độ lớn giá trị $K_c$ đối với phản ứng thuận nghịch là gì?',
    back: '- $K_c$ càng lớn: phản ứng thuận xảy ra càng triệt để, lượng sản phẩm ở trạng thái cân bằng càng nhiều.\n- $K_c$ càng nhỏ: phản ứng thuận xảy ra càng ít, lượng sản phẩm ở trạng thái cân bằng càng nhỏ.'
  },
  {
    id: 'fc-1-9',
    lessonId: 'bai-1',
    category: 'chuyen-dich',
    front: 'Phát biểu nguyên lí chuyển dịch cân bằng Le Chatelier.',
    back: 'Một phản ứng thuận nghịch đang ở trạng thái cân bằng, khi chịu một tác động bên ngoài làm thay đổi nồng độ, nhiệt độ, áp suất thì cân bằng sẽ chuyển dịch theo chiều làm giảm tác động bên ngoài đó.'
  },
  {
    id: 'fc-1-10',
    lessonId: 'bai-1',
    category: 'chuyen-dich',
    front: 'Khi tăng nhiệt độ, cân bằng chuyển dịch theo chiều nào? Khi giảm nhiệt độ?',
    back: '- Tăng nhiệt độ: Cân bằng chuyển dịch theo chiều thu nhiệt ($\\Delta_r H_{298}^o > 0$).\n- Giảm nhiệt độ: Cân bằng chuyển dịch theo chiều toả nhiệt ($\\Delta_r H_{298}^o < 0$).'
  },
  {
    id: 'fc-1-11',
    lessonId: 'bai-1',
    category: 'chuyen-dich',
    front: 'Khi tăng áp suất chung của hệ, cân bằng chuyển dịch theo chiều nào?',
    back: 'Khi tăng áp suất chung, cân bằng chuyển dịch theo chiều làm giảm số mol phân tử khí của hệ (chiều có tổng hệ số tỉ lượng khí nhỏ hơn) để làm giảm áp suất.'
  },
  {
    id: 'fc-1-12',
    lessonId: 'bai-1',
    category: 'chuyen-dich',
    front: 'Trường hợp nào sự thay đổi áp suất KHÔNG làm chuyển dịch cân bằng?',
    back: 'Khi phản ứng không có chất khí tham gia hoặc có tổng số mol chất khí ở hai vế phương trình bằng nhau ($\\Delta n_{khí} = 0$).\nVí dụ: $H_2(g) + I_2(g) \\rightleftharpoons 2HI(g)$ (2 mol khí $\\rightleftharpoons$ 2 mol khí).'
  },
  {
    id: 'fc-1-13',
    lessonId: 'bai-1',
    category: 'chuyen-dich',
    front: 'Chất xúc tác có làm chuyển dịch cân bằng hoá học không? Vì sao?',
    back: 'KHÔNG. Chất xúc tác làm tăng tốc độ phản ứng thuận và phản ứng nghịch với số lần bằng nhau, chỉ giúp hệ nhanh đạt trạng thái cân bằng chứ không làm thay đổi nồng độ cân bằng và không làm thay đổi $K_c$.'
  },
  {
    id: 'fc-1-14',
    lessonId: 'bai-1',
    category: 'thuc-tien',
    front: 'Hiện tượng khi ngâm ống nghiệm chứa hỗn hợp khí $2NO_2 (nâu đỏ) \\rightleftharpoons N_2O_4 (không màu)$ vào nước nóng và nước đá?',
    back: 'Phản ứng toả nhiệt ($\\Delta_r H_{298}^o < 0$):\n- Ngâm nước đá (giảm T): chuyển dịch chiều thuận (toả nhiệt) $\\rightarrow$ màu nâu đỏ nhạt dần.\n- Ngâm nước nóng (tăng T): chuyển dịch chiều nghịch (thu nhiệt) $\\rightarrow$ màu nâu đỏ đậm dần.'
  },
  {
    id: 'fc-1-15',
    lessonId: 'bai-1',
    category: 'thuc-tien',
    front: 'Để tăng hiệu suất tạo $NH_3$ trong phản ứng: $N_2(g) + 3H_2(g) \\rightleftharpoons 2NH_3(g) \\; (\\Delta_r H_{298}^o = -91,8\\text{ kJ})$, cần tác động ra sao?',
    back: '- Tăng áp suất (hệ chuyển dịch theo chiều giảm số mol khí: 4 mol $\\rightarrow$ 2 mol).\n- Giảm nhiệt độ (hệ chuyển dịch theo chiều toả nhiệt).\n- Tăng nồng độ $N_2$ hoặc $H_2$, hoặc tách $NH_3$ ra khỏi hệ.'
  },
  {
    id: 'fc-1-16',
    lessonId: 'bai-1',
    category: 'thuc-tien',
    front: 'Quá trình hình thành thạch nhũ trong hang động liên quan đến cân bằng thuận nghịch nào?',
    back: 'Phương trình: $$CaCO_3(s) + CO_2(aq) + H_2O(l) \\rightleftharpoons Ca(HCO_3)_2(aq)$$\n- Chiều thuận: $CO_2$ hoà tan đá vôi tạo hang động.\n- Chiều nghịch: $Ca(HCO_3)_2$ phân huỷ tái tạo $CaCO_3$ tạo thành thạch nhũ, măng đá.'
  }
];

export const lesson1Quizzes: QuizQuestion[] = [
  {
    id: 'q1-1',
    lessonId: 'bai-1',
    question: 'Phản ứng nào sau đây là phản ứng thuận nghịch?',
    options: [
      { id: 'A', text: '$Mg + 2HCl \\rightarrow MgCl_2 + H_2$' },
      { id: 'B', text: '$2SO_2 + O_2 \\rightleftharpoons 2SO_3$' },
      { id: 'C', text: '$C_2H_5OH + 3O_2 \\xrightarrow{t^o} 2CO_2 + 3H_2O$' },
      { id: 'D', text: '$2KClO_3 \\xrightarrow{t^o} 2KCl + 3O_2$' }
    ],
    correctAnswer: 'B',
    explanation: 'Phản ứng thuận nghịch xảy ra theo hai chiều trái ngược nhau trong cùng điều kiện và được biểu diễn bằng mũi tên thuận nghịch $\\rightleftharpoons$. Phản ứng $2SO_2 + O_2 \\rightleftharpoons 2SO_3$ là phản ứng thuận nghịch.',
    difficulty: 'NhanBiet',
    source: 'SBT Bài 1.1'
  },
  {
    id: 'q1-2',
    lessonId: 'bai-1',
    question: 'Cho 5 mol $H_2$ và 5 mol $I_2$ vào bình kín dung tích 1 lít và nung nóng đến 227 °C. Tại trạng thái cân bằng thấy nồng độ $H_2$ và $I_2$ giảm đến 0,68 M. Nồng độ của $HI$ ở trạng thái cân bằng là:',
    options: [
      { id: 'A', text: '0,68 M' },
      { id: 'B', text: '5,00 M' },
      { id: 'C', text: '3,38 M' },
      { id: 'D', text: '8,64 M' }
    ],
    correctAnswer: 'D',
    explanation: 'Ban đầu nồng độ $[H_2] = [I_2] = 5$ M. Lượng phản ứng: $\\Delta [H_2] = 5 - 0,68 = 4,32$ M. Theo PTHH $H_2 + I_2 \\rightleftharpoons 2HI$, lượng $HI$ sinh ra ở cân bằng là $[HI] = 2 \\times 4,32 = 8,64$ M.',
    difficulty: 'NhanBiet',
    source: 'SBT Bài 1.2'
  },
  {
    id: 'q1-3',
    lessonId: 'bai-1',
    question: 'Cho phản ứng hoá học sau: $Br_2(g) + H_2(g) \\rightleftharpoons 2HBr(g)$. Biểu thức hằng số cân bằng ($K_c$) của phản ứng trên là:',
    options: [
      { id: 'A', text: '$K_c = \\frac{2[HBr]}{[Br_2][H_2]}$' },
      { id: 'B', text: '$K_c = \\frac{[HBr]^2}{[H_2][Br_2]}$' },
      { id: 'C', text: '$K_c = \\frac{[H_2][Br_2]}{[HBr]^2}$' },
      { id: 'D', text: '$K_c = \\frac{[H_2][Br_2]}{2[HBr]}$' }
    ],
    correctAnswer: 'B',
    explanation: 'Theo định luật tác dụng khối lượng, biểu thức hằng số cân bằng $K_c$ bằng tích nồng độ sản phẩm với số mũ bằng hệ số tỉ lượng chia cho tích nồng độ chất phản ứng với số mũ tương ứng: $K_c = \\frac{[HBr]^2}{[H_2][Br_2]}$.',
    difficulty: 'NhanBiet',
    source: 'SBT Bài 1.3'
  },
  {
    id: 'q1-4',
    lessonId: 'bai-1',
    question: 'Cho phản ứng: $PCl_3(g) + Cl_2(g) \\rightleftharpoons PCl_5(g)$. Ở $T\\;^o\\text{C}$, nồng độ các chất ở trạng thái cân bằng: $[PCl_5] = 0,059\\text{ mol/L}$; $[PCl_3] = [Cl_2] = 0,035\\text{ mol/L}$. Hằng số cân bằng ($K_c$) của phản ứng tại $T\\;^o\\text{C}$ là:',
    options: [
      { id: 'A', text: '1,68' },
      { id: 'B', text: '48,16' },
      { id: 'C', text: '0,02' },
      { id: 'D', text: '16,95' }
    ],
    correctAnswer: 'B',
    explanation: '$K_c = \\frac{[PCl_5]}{[PCl_3][Cl_2]} = \\frac{0,059}{0,035 \\times 0,035} \\approx 48,16$.',
    difficulty: 'ThongHieu',
    source: 'SBT Bài 1.4'
  },
  {
    id: 'q1-5',
    lessonId: 'bai-1',
    question: 'Cho phản ứng hoá học sau: $N_2(g) + 3H_2(g) \\rightleftharpoons 2NH_3(g) \\quad \\Delta_r H_{298}^o = -92\\text{ kJ}$. Yếu tố nào sau đây cần tác động để cân bằng trên chuyển dịch sang phải (chiều thuận)?',
    options: [
      { id: 'A', text: 'Thêm chất xúc tác.' },
      { id: 'B', text: 'Giảm nồng độ $N_2$ hoặc $H_2$.' },
      { id: 'C', text: 'Tăng áp suất.' },
      { id: 'D', text: 'Tăng nhiệt độ.' }
    ],
    correctAnswer: 'C',
    explanation: 'Phía trái có $1 + 3 = 4$ mol khí, phía phải có 2 mol khí. Khi tăng áp suất, cân bằng chuyển dịch theo chiều giảm số mol khí (chiều thuận sang phải). Chiều thuận là toả nhiệt ($\\Delta_r H_{298}^o < 0$) nên tăng nhiệt độ sẽ chuyển dịch chiều nghịch (sang trái).',
    difficulty: 'ThongHieu',
    source: 'SBT Bài 1.5'
  },
  {
    id: 'q1-6',
    lessonId: 'bai-1',
    question: 'Cân bằng hoá học nào sau đây KHÔNG bị chuyển dịch khi thay đổi áp suất?',
    options: [
      { id: 'A', text: '$2SO_2(g) + O_2(g) \\rightleftharpoons 2SO_3(g)$' },
      { id: 'B', text: '$C(s) + H_2O(g) \\rightleftharpoons CO(g) + H_2(g)$' },
      { id: 'C', text: '$PCl_3(g) + Cl_2(g) \\rightleftharpoons PCl_5(g)$' },
      { id: 'D', text: '$3Fe(s) + 4H_2O(g) \\rightleftharpoons Fe_3O_4(s) + 4H_2(g)$' }
    ],
    correctAnswer: 'D',
    explanation: 'Ở phản ứng D, số mol khí ở chất đầu là $4H_2O(g)$ và ở sản phẩm là $4H_2(g)$ (tổng số mol khí 2 vế bằng nhau là 4 mol). Do $\\Delta n_{khí} = 4 - 4 = 0$ nên thay đổi áp suất không làm chuyển dịch cân bằng.',
    difficulty: 'ThongHieu',
    source: 'SBT Bài 1.6'
  },
  {
    id: 'q1-7',
    lessonId: 'bai-1',
    question: 'Cho cân bằng: $4NH_3(g) + 5O_2(g) \\rightleftharpoons 4NO(g) + 6H_2O(g) \\quad \\Delta_r H_{298}^o = -905\\text{ kJ}$. Yếu tố nào sau đây cần tác động để cân bằng chuyển dịch sang phải?',
    options: [
      { id: 'A', text: 'Giảm nhiệt độ.' },
      { id: 'B', text: 'Tăng áp suất.' },
      { id: 'C', text: 'Giảm nồng độ của $O_2$.' },
      { id: 'D', text: 'Thêm xúc tác Pt.' }
    ],
    correctAnswer: 'A',
    explanation: 'Chiều thuận là chiều toả nhiệt ($\\Delta_r H_{298}^o = -905\\text{ kJ} < 0$). Theo nguyên lí Le Chatelier, khi giảm nhiệt độ, cân bằng sẽ chuyển dịch theo chiều toả nhiệt để bù lại lượng nhiệt mất đi (chiều thuận sang phải).',
    difficulty: 'ThongHieu',
    source: 'SBT Bài 1.7'
  },
  {
    id: 'q1-8',
    lessonId: 'bai-1',
    question: 'Cho phản ứng: $N_2O_4(g) \\rightleftharpoons 2NO_2(g) \\quad K_c = 4,84 \\cdot 10^{-3}$. Phương án nào sau đây là nồng độ của các chất tại thời điểm cân bằng?',
    options: [
      { id: 'A', text: '$[N_2O_4(g)] = 4,84 \\cdot 10^{-1}\\text{ M}; [NO_2(g)] = 1,0 \\cdot 10^{-4}\\text{ M}$' },
      { id: 'B', text: '$[N_2O_4(g)] = 1,0 \\cdot 10^{-1}\\text{ M}; [NO_2(g)] = 4,84 \\cdot 10^{-4}\\text{ M}$' },
      { id: 'C', text: '$[N_2O_4(g)] = 1,0 \\cdot 10^{-1}\\text{ M}; [NO_2(g)] = 2,20 \\cdot 10^{-2}\\text{ M}$' },
      { id: 'D', text: '$[N_2O_4(g)] = 5,0 \\cdot 10^{-2}\\text{ M}; [NO_2(g)] = 1,10 \\cdot 10^{-2}\\text{ M}$' }
    ],
    correctAnswer: 'C',
    explanation: 'Biểu thức $K_c = \\frac{[NO_2]^2}{[N_2O_4]}$. Kiểm tra phương án C: $\\frac{(2,20 \\cdot 10^{-2})^2}{1,0 \\cdot 10^{-1}} = \\frac{4,84 \\cdot 10^{-4}}{0,1} = 4,84 \\cdot 10^{-3}$ (chính xác bằng $K_c$).',
    difficulty: 'ThongHieu',
    source: 'SBT Bài 1.8'
  },
  {
    id: 'q1-9',
    lessonId: 'bai-1',
    question: 'Cho các phản ứng: (1) $2NO(g) + O_2(g) \\rightleftharpoons 2NO_2(g) \\; (\\Delta_r H_{298}^o = -115\\text{ kJ})$; (2) $2SO_2(g) + O_2(g) \\rightleftharpoons 2SO_3(g) \\; (\\Delta_r H_{298}^o = -198\\text{ kJ})$; (3) $N_2(g) + 3H_2(g) \\rightleftharpoons 2NH_3(g) \\; (\\Delta_r H_{298}^o = -92\\text{ kJ})$; (4) $C(s) + H_2O(g) \\rightleftharpoons CO(g) + H_2(g) \\; (\\Delta_r H_{298}^o = 130\\text{ kJ})$. Các phản ứng toả nhiệt là:',
    options: [
      { id: 'A', text: '(1); (2) và (3).' },
      { id: 'B', text: '(1) và (3).' },
      { id: 'C', text: '(1); (2); (4).' },
      { id: 'D', text: '(1); (2); (3) và (4).' }
    ],
    correctAnswer: 'A',
    explanation: 'Phản ứng toả nhiệt có $\\Delta_r H_{298}^o < 0$. Do đó (1) $\\Delta_r H_{298}^o = -115$ kJ, (2) $-198$ kJ, (3) $-92$ kJ là các phản ứng toả nhiệt.',
    difficulty: 'NhanBiet',
    source: 'SBT Bài 1.9a'
  },
  {
    id: 'q1-10',
    lessonId: 'bai-1',
    question: 'Khi tăng nhiệt độ, các cân bằng nào sau đây sẽ chuyển dịch theo chiều thuận?\n(1) $2NO + O_2 \\rightleftharpoons 2NO_2 \\; (\\Delta_r H^o < 0)$\n(2) $2SO_2 + O_2 \\rightleftharpoons 2SO_3 \\; (\\Delta_r H^o < 0)$\n(3) $N_2 + 3H_2 \\rightleftharpoons 2NH_3 \\; (\\Delta_r H^o < 0)$\n(4) $C(s) + H_2O(g) \\rightleftharpoons CO(g) + H_2(g) \\; (\\Delta_r H^o = 130\\text{ kJ})$\n(5) $CaCO_3(s) \\rightleftharpoons CaO(s) + CO_2(g) \\; (\\Delta_r H^o = 178\\text{ kJ})$',
    options: [
      { id: 'A', text: '(1); (2) và (3).' },
      { id: 'B', text: '(1); (2) và (5).' },
      { id: 'C', text: '(4) và (5).' },
      { id: 'D', text: '(3) và (5).' }
    ],
    correctAnswer: 'C',
    explanation: 'Khi tăng nhiệt độ, cân bằng chuyển dịch theo chiều thu nhiệt ($\\Delta_r H^o > 0$). Các phản ứng (4) và (5) có $\\Delta_r H^o > 0$ nên chiều thuận là chiều thu nhiệt.',
    difficulty: 'ThongHieu',
    source: 'SBT Bài 1.9b'
  },
  {
    id: 'q1-11',
    lessonId: 'bai-1',
    question: 'Khi tăng áp suất, các cân bằng hoá học nào chuyển dịch theo chiều thuận?\n(1) $2NO(g) + O_2(g) \\rightleftharpoons 2NO_2(g)$\n(2) $2SO_2(g) + O_2(g) \\rightleftharpoons 2SO_3(g)$\n(3) $N_2(g) + 3H_2(g) \\rightleftharpoons 2NH_3(g)$\n(4) $C(s) + H_2O(g) \\rightleftharpoons CO(g) + H_2(g)$\n(5) $CaCO_3(s) \\rightleftharpoons CaO(s) + CO_2(g)$',
    options: [
      { id: 'A', text: '(1); (2) và (3).' },
      { id: 'B', text: '(1); (3) và (5).' },
      { id: 'C', text: '(2); (3) và (4).' },
      { id: 'D', text: '(3); (4) và (5).' }
    ],
    correctAnswer: 'A',
    explanation: 'Khi tăng áp suất, cân bằng chuyển dịch theo chiều giảm số mol khí: (1) 3 mol khí $\\rightarrow$ 2 mol; (2) 3 mol khí $\\rightarrow$ 2 mol; (3) 4 mol khí $\\rightarrow$ 2 mol khí. Cả 3 cân bằng này đều giảm số mol khí theo chiều thuận.',
    difficulty: 'ThongHieu',
    source: 'SBT Bài 1.9c'
  },
  {
    id: 'q1-12',
    lessonId: 'bai-1',
    question: 'Chất xúc tác có tác dụng nào sau đây đối với một phản ứng thuận nghịch?',
    options: [
      { id: 'A', text: 'Làm cân bằng chuyển dịch theo chiều thuận.' },
      { id: 'B', text: 'Làm tăng giá trị của hằng số cân bằng $K_c$.' },
      { id: 'C', text: 'Làm tăng tốc độ phản ứng thuận và nghịch như nhau, giúp hệ nhanh đạt cân bằng.' },
      { id: 'D', text: 'Làm giảm nồng độ chất phản ứng ở trạng thái cân bằng.' }
    ],
    correctAnswer: 'C',
    explanation: 'Chất xúc tác làm tăng tốc độ của cả phản ứng thuận và phản ứng nghịch với số lần bằng nhau, giúp phản ứng nhanh đạt tới trạng thái cân bằng mà không làm thay đổi vị trí cân bằng hay $K_c$.',
    difficulty: 'NhanBiet',
    source: 'SGK Bài 1'
  },
  {
    id: 'q1-13',
    lessonId: 'bai-1',
    question: 'Cân bằng hoá học: $C_6H_5CH_2CH_3(g) \\rightleftharpoons C_6H_5CH=CH_2(g) + H_2(g) \\quad \\Delta_r H_{298}^o = 123\\text{ kJ}$. Cân bằng sẽ chuyển dịch theo chiều thuận khi:',
    options: [
      { id: 'A', text: 'Tăng áp suất của bình phản ứng.' },
      { id: 'B', text: 'Tăng nhiệt độ của phản ứng.' },
      { id: 'C', text: 'Giảm nồng độ $C_6H_5CH_2CH_3$.' },
      { id: 'D', text: 'Thêm chất xúc tác.' }
    ],
    correctAnswer: 'B',
    explanation: 'Vì $\\Delta_r H_{298}^o = 123\\text{ kJ} > 0$ (chiều thuận là thu nhiệt), nên khi tăng nhiệt độ thì cân bằng chuyển dịch theo chiều thuận.',
    difficulty: 'ThongHieu',
    source: 'SBT Bài 1.11'
  },
  {
    id: 'q1-14',
    lessonId: 'bai-1',
    question: 'Ở trạng thái cân bằng hoá học, phát biểu nào sau đây luôn ĐÚNG?',
    options: [
      { id: 'A', text: 'Tốc độ phản ứng thuận bằng tốc độ phản ứng nghịch.' },
      { id: 'B', text: 'Nồng độ các chất phản ứng bằng nồng độ các chất sản phẩm.' },
      { id: 'C', text: 'Phản ứng hoá học đã dừng lại hoàn toàn.' },
      { id: 'D', text: 'Nồng độ các chất sản phẩm luôn lớn hơn nồng độ các chất đầu.' }
    ],
    correctAnswer: 'A',
    explanation: 'Định nghĩa trạng thái cân bằng: $v_{thuận} = v_{nghịch}$. Nồng độ các chất không đổi nhưng không nhất thiết phải bằng nhau.',
    difficulty: 'NhanBiet',
    source: 'SGK Bài 1'
  },
  {
    id: 'q1-15',
    lessonId: 'bai-1',
    question: 'Biểu thức hằng số cân bằng $K_c$ của phản ứng: $CaCO_3(s) \\rightleftharpoons CaO(s) + CO_2(g)$ là:',
    options: [
      { id: 'A', text: '$K_c = [CO_2]$' },
      { id: 'B', text: '$K_c = \\frac{[CaO][CO_2]}{[CaCO_3]}$' },
      { id: 'C', text: '$K_c = \\frac{[CO_2]}{[CaCO_3]}$' },
      { id: 'D', text: '$K_c = [CaO][CO_2]$' }
    ],
    correctAnswer: 'A',
    explanation: 'Vì $CaCO_3(s)$ và $CaO(s)$ là các chất rắn nên không được đưa vào biểu thức $K_c$. Do đó $K_c = [CO_2]$.',
    difficulty: 'NhanBiet',
    source: 'SGK Bài 1'
  },
  {
    id: 'q1-16',
    lessonId: 'bai-1',
    question: 'Trong bình kín xảy ra cân bằng: $H_2(g) + I_2(g) \\rightleftharpoons 2HI(g)$. Cho 1 mol $H_2$ và 1 mol $I_2$ vào bình kín dung tích 2 lít. Tại cân bằng có 1,5 mol $HI$ tạo thành. Hằng số cân bằng $K_c$ của phản ứng ở nhiệt độ đó là:',
    options: [
      { id: 'A', text: '36' },
      { id: 'B', text: '49' },
      { id: 'C', text: '16' },
      { id: 'D', text: '64' }
    ],
    correctAnswer: 'A',
    explanation: 'Số mol $HI$ tạo thành là 1,5 mol $\\Rightarrow$ số mol $H_2$ và $I_2$ đã phản ứng là $\\frac{1,5}{2} = 0,75$ mol. Tại cân bằng: $n_{H_2} = n_{I_2} = 1 - 0,75 = 0,25$ mol. Bình 2 lít: $[HI] = \\frac{1,5}{2} = 0,75$ M; $[H_2] = [I_2] = \\frac{0,25}{2} = 0,125$ M. $K_c = \\frac{(0,75)^2}{(0,125)^2} = 36$.',
    difficulty: 'VanDung',
    source: 'SBT Bài 1.13'
  }
];
