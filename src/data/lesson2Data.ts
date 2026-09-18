import { TheorySectionData, Flashcard, QuizQuestion } from '../types';

export const lesson2Theory: TheorySectionData = {
  id: 'bai-2',
  title: 'Bài 2: Cân bằng trong dung dịch nước',
  objectives: [
    'Nêu được khái niệm sự điện li, chất điện li, chất không điện li.',
    'Trình bày được thuyết Brønsted – Lowry về acid – base.',
    'Nêu được khái niệm và ý nghĩa của pH trong thực tiễn.',
    'Viết được biểu thức tính pH và biết cách sử dụng các chất chỉ thị (giấy chỉ thị màu, quỳ tím, phenolphthalein,...) để xác định pH.',
    'Nêu được nguyên tắc xác định nồng độ acid, base mạnh bằng phương pháp chuẩn độ.',
    'Trình bày được ý nghĩa thực tiễn cân bằng trong dung dịch nước của các ion $Al^{3+}, Fe^{3+}$ và $CO_3^{2-}$.'
  ],
  summary: 'Sự điện li là quá trình phân li các chất trong nước tạo thành ion. Chất điện li mạnh phân li hoàn toàn (acid mạnh, base mạnh, hầu hết muối). Chất điện li yếu phân li một phần (acid yếu, base yếu). Theo Brønsted - Lowry: Acid là chất cho proton ($H^+$), Base là chất nhận proton ($H^+$). Tích số ion của nước ở 25 °C: $K_w = [H^+][OH^-] = 10^{-14}$. Độ pH đo nồng độ $[H^+]$: $pH = -\\lg[H^+]$. Các ion gốc acid yếu hay base yếu bị thuỷ phân tạo môi trường tương ứng. Chuẩn độ acid - base dựa trên phản ứng trung hoà để xác định chính xác nồng độ dung dịch.',
  coreKnowledge: [
    {
      heading: '1. Sự điện li và chất điện li',
      points: [
        'Sự điện li: là quá trình phân li các chất trong nước tạo thành các ion mang điện tích trái dấu.',
        'Chất điện li: là chất khi tan trong nước phân li ra các ion (ví dụ: acid, base, muối).',
        'Chất không điện li: là chất khi tan trong nước không phân li ra các ion (ví dụ: saccharose $C_{12}H_{22}O_{11}$, ethanol $C_2H_5OH$, glycerol,...). Dung dịch không dẫn điện.',
        'Chất điện li mạnh: khi tan trong nước, hầu hết các phân tử chất tan đều phân li ra ion. Biểu diễn bằng mũi tên 1 chiều $\\rightarrow$. Gồm: các acid mạnh ($HCl, HNO_3, H_2SO_4,...$), base mạnh ($NaOH, KOH, Ba(OH)_2, Ca(OH)_2,...$) và hầu hết các muối.',
        'Chất điện li yếu: khi tan trong nước, chỉ có một phần số phân tử chất tan phân li ra ion, phần còn lại vẫn tồn tại ở dạng phân tử. Biểu diễn bằng mũi tên thuận nghịch $\\rightleftharpoons$. Gồm: các acid yếu ($CH_3COOH, HF, HCN, HClO, H_2CO_3, H_2S,...$) và base yếu ($Cu(OH)_2, Fe(OH)_2, NH_3,...$).'
      ],
      latexEquations: [
        '\\text{Điện li mạnh: } HCl \\rightarrow H^+ + Cl^-, \\quad Na_2CO_3 \\rightarrow 2Na^+ + CO_3^{2-}',
        '\\text{Điện li yếu: } CH_3COOH \\rightleftharpoons CH_3COO^- + H^+, \\quad NH_3 + H_2O \\rightleftharpoons NH_4^+ + OH^-'
      ]
    },
    {
      heading: '2. Thuyết acid – base của Brønsted – Lowry',
      points: [
        'Năm 1923, J. Brønsted và T. Lowry đưa ra định nghĩa tổng quát:',
        'Acid là chất cho proton ($H^+$).',
        'Base là chất nhận proton ($H^+$).',
        'Chất lưỡng tính: là chất vừa có thể cho proton, vừa có thể nhận proton. Ví dụ: ion $HCO_3^-$, phân tử $H_2O$.',
        'Ví dụ: Trong phản ứng $NH_3 + H_2O \\rightleftharpoons NH_4^+ + OH^-$, $NH_3$ nhận $H^+$ từ $H_2O$ nên $NH_3$ là base, $H_2O$ là acid. Ở chiều nghịch, $NH_4^+$ nhường $H^+$ là acid, $OH^-$ nhận $H^+$ là base.'
      ]
    },
    {
      heading: '3. Khái niệm pH và chất chỉ thị',
      points: [
        'Tích số ion của nước: Ở $25\\;^o\\text{C}$, $K_w = [H^+][OH^-] = 10^{-14}$. Với nước tinh khiết: $[H^+] = [OH^-] = 10^{-7}\\text{ mol/L}$.',
        'Khái niệm pH: $pH = -\\lg[H^+]$ hay $[H^+] = 10^{-pH}$.',
        'Môi trường acid: $[H^+] > 10^{-7}\\text{ M} \\Leftrightarrow pH < 7$.',
        'Môi trường trung tính: $[H^+] = 10^{-7}\\text{ M} \\Leftrightarrow pH = 7$.',
        'Môi trường base (kiềm): $[H^+] < 10^{-7}\\text{ M} \\Leftrightarrow pH > 7$.',
        'Chất chỉ thị: Quỳ tím (đỏ khi $pH \\le 6$, tím khi $pH = 7$, xanh khi $pH \\ge 8$); Phenolphthalein (không màu khi $pH < 8$, chuyển màu hồng khi $pH > 8$). Chất chỉ thị tự nhiên: dịch bắp cải tím, nước hoa đậu biếc (chứa anthocyanin).'
      ]
    },
    {
      heading: '4. Sự thuỷ phân của các ion và ứng dụng',
      points: [
        'Cation của base mạnh và anion của acid mạnh không bị thuỷ phân.',
        'Cation của base yếu ($Al^{3+}, Fe^{3+}, Cu^{2+}, NH_4^+$) bị thuỷ phân tạo môi trường acid: $Al^{3+} + H_2O \\rightleftharpoons Al(OH)^{2+} + H^+$. Ứng dụng: Phèn nhôm, phèn sắt dùng làm trong nước sinh hoạt do tạo kết tủa keo $Al(OH)_3, Fe(OH)_3$ cuốn trôi chất bẩn lơ lửng.',
        'Anion của acid yếu ($CO_3^{2-}, CH_3COO^-, S^{2-}$) bị thuỷ phân tạo môi trường base: $CO_3^{2-} + H_2O \\rightleftharpoons HCO_3^- + OH^-$. Ứng dụng: $Na_2CO_3$ làm chất tẩy rửa, dệt nhuộm.',
        'Đất chua ($pH < 7$ do chứa nhiều ion $Al^{3+}, Fe^{3+}, H^+$) được khử chua bằng vôi ($CaO, Ca(OH)_2$).'
      ]
    },
    {
      heading: '5. Chuẩn độ acid – base',
      points: [
        'Nguyên tắc: Dựa vào phản ứng trung hoà giữa acid và base với thể tích xác định để tìm nồng độ chất chưa biết: $V_{HCl} \\cdot C_{HCl} = V_{NaOH} \\cdot C_{NaOH}$.',
        'Dụng cụ: Burette (chứa dung dịch chuẩn nồng độ chính xác), Pipette (lấy chính xác thể tích mẫu), Bình tam giác (erlenmeyer flask).',
        'Điểm tương đương được nhận biết bằng sự đổi màu của chất chỉ thị (ví dụ dung dịch xuất hiện màu hồng nhạt bền trong khoảng 10-20 giây khi dùng phenolphthalein).'
      ]
    }
  ],
  formulas: [
    {
      name: 'Tích số ion của nước ($K_w$)',
      latex: 'K_w = [H^+][OH^-] = 10^{-14} \\quad (\\text{ở } 25\\;^\\circ\\text{C})',
      description: 'Trong mọi dung dịch nước loãng ở $25\\;^\\circ\\text{C}$, tích nồng độ $H^+$ và $OH^-$ luôn là hằng số $10^{-14}$.'
    },
    {
      name: 'Công thức tính pH, pOH và mối liên hệ',
      latex: 'pH = -\\lg[H^+], \\quad pOH = -\\lg[OH^-], \\quad pH + pOH = 14',
      description: 'Mối quan hệ chuyển đổi logarit giữa nồng độ ion $H^+$, $OH^-$ và thang đo pH.'
    },
    {
      name: 'Công thức định lượng chuẩn độ Acid – Base',
      latex: 'V_A \\cdot C_A = V_B \\cdot C_B \\quad \\Leftrightarrow \\quad n_{H^+} = n_{OH^-}',
      description: 'Áp dụng tại điểm tương đương khi chuẩn độ đơn acid mạnh với đơn base mạnh.'
    }
  ],
  keyConcepts: [
    { term: 'Sự điện li', definition: 'Quá trình phân li các chất khi tan trong nước thành các ion mang điện tích.' },
    { term: 'Thuyết Brønsted – Lowry', definition: 'Acid là chất nhường proton ($H^+$), base là chất nhận proton ($H^+$).' },
    { term: 'Độ pH', definition: 'Đại lượng biểu thị mức độ acid hoặc base của dung dịch qua hàm logarit nồng độ ion $H^+$.' },
    { term: 'Sự thuỷ phân ion', definition: 'Phản ứng trao đổi ion giữa ion của chất tan với nước tạo ra dung dịch có môi trường acid hoặc base.' }
  ],
  examples: [
    {
      title: 'Xác định acid/base theo Brønsted – Lowry',
      content: 'Xét phản ứng: $CH_3COOH + H_2O \\rightleftharpoons CH_3COO^- + H_3O^+$\n- $CH_3COOH$ nhường $H^+$ cho $H_2O$ nên $CH_3COOH$ là acid.\n- $H_2O$ nhận $H^+$ từ $CH_3COOH$ nên $H_2O$ là base.\n- Ở chiều nghịch: $H_3O^+$ nhường $H^+$ là acid, $CH_3COO^-$ nhận $H^+$ là base.'
    },
    {
      title: 'Tính pH khi pha loãng dung dịch',
      content: 'Lấy 10 mL dung dịch $NaOH$ 1,0 M thêm nước để được 1 000 mL dung dịch A.\n- Ban đầu: $n_{NaOH} = 0,01 \\times 1 = 0,01$ mol.\n- Sau pha loãng: $[OH^-] = \\frac{0,01}{1} = 0,01\\text{ M} = 10^{-2}\\text{ M}$.\n- $pOH = 2 \\Rightarrow pH = 14 - 2 = 12$.\n- Ban đầu $[OH^-] = 1\\text{ M} \\Rightarrow pH = 14$. Vậy pH giảm đi 2 đơn vị.'
    }
  ],
  commonMistakes: [
    {
      mistake: 'Nhầm lẫn dung dịch đường ($C_{12}H_{22}O_{11}$) hay rượu ($C_2H_5OH$) là chất điện li vì chúng tan tốt trong nước.',
      correction: 'Đường và rượu tan tốt trong nước nhưng tồn tại ở dạng phân tử trung hòa điện, không phân li ra ion nên là chất không điện li.',
      why: 'Tính dẫn điện đòi hỏi các hạt mang điện tự do (ion $H^+, OH^-$, cation, anion).'
    },
    {
      mistake: 'Cho rằng muối nào hoà tan vào nước cũng tạo môi trường trung tính ($pH = 7$).',
      correction: 'Chỉ muối tạo bởi cation base mạnh và anion acid mạnh mới trung tính ($NaCl, KNO_3$). Muối có ion bị thuỷ phân sẽ làm đổi pH ($Na_2CO_3$ có $pH > 7$; $FeCl_3, AlCl_3$ có $pH < 7$).',
      why: 'Sự thuỷ phân của ion sinh ra $H^+$ hoặc $OH^-$ trong dung dịch.'
    },
    {
      mistake: 'Dùng dấu gạch chéo phân số thông thường khi tính $pH$ hoặc $K_w$.',
      correction: 'Cần biểu diễn dạng phân số chuẩn LaTeX $\\frac{a}{b}$ và chỉ số ion đúng dạng $H^+, SO_4^{2-}$.',
      why: 'Đảm bảo tính chính xác sư phạm và chuẩn hoá công thức.'
    }
  ],
  memoryTips: [
    '"Acid nhường - Base nhận" (Acid cho proton $H^+$, Base nhận proton $H^+$).',
    'Thang pH: $pH < 7$ là Acid (Càng nhỏ càng chua), $pH = 7$ là Trung tính, $pH > 7$ là Base (Càng lớn càng kiềm).',
    'Pha loãng acid mạnh 10 lần thì pH tăng 1 đơn vị; Pha loãng base mạnh 10 lần thì pH giảm 1 đơn vị; Pha loãng 100 lần thì biến thiên 2 đơn vị.',
    'Chất chỉ thị: Quỳ gặp Kiềm chuyển Xanh, gặp Acid hoá Đỏ. Phenolphthalein chỉ đổi màu hồng với Base ($pH > 8$).'
  ],
  glossary: [
    { term: 'Chất điện li', meaning: 'Chất khi tan trong nước phân li ra các ion mang điện tích trái dấu.' },
    { term: 'Độ điện li ($\\alpha$)', meaning: 'Tỉ số giữa số phân tử phân li ra ion và tổng số phân tử hoà tan trong dung dịch.' },
    { term: 'Thuyết Brønsted – Lowry', meaning: 'Thuyết acid – base hiện đại dựa trên sự cho và nhận proton ($H^+$).' },
    { term: 'Chuẩn độ acid – base', meaning: 'Phương pháp phân tích thể tích để xác định nồng độ chưa biết của dung dịch acid/base bằng dung dịch chuẩn.' }
  ],
  reviewChecklist: [
    'Phân biệt chất điện li mạnh, điện li yếu, không điện li.',
    'Viết đúng phương trình điện li với mũi tên $\\rightarrow$ hoặc $\\rightleftharpoons$.',
    'Xác định vai trò Acid/Base theo thuyết Brønsted – Lowry.',
    'Tính toán chính xác pH, pOH, $[H^+], [OH^-]$ qua tích số $K_w = 10^{-14}$.',
    'Hiểu bản chất sự thuỷ phân của các ion và ứng dụng làm trong nước, khử chua đất.'
  ]
};

export const lesson2Flashcards: Flashcard[] = [
  {
    id: 'fc-2-1',
    lessonId: 'bai-2',
    category: 'dien-li',
    front: 'Sự điện li là gì? Thế nào là chất điện li?',
    back: '- Sự điện li là quá trình phân li các chất trong nước tạo thành các ion.\n- Chất điện li là chất khi tan trong nước phân li ra các ion mang điện tích trái dấu (acid, base, muối).'
  },
  {
    id: 'fc-2-2',
    lessonId: 'bai-2',
    category: 'dien-li',
    front: 'Chất không điện li là gì? Cho ví dụ tiêu biểu trong SGK.',
    back: 'Là chất khi tan trong nước không phân li ra các ion.\nVí dụ: Nước tinh khiết, đường saccharose ($C_{12}H_{22}O_{11}$), ethanol ($C_2H_5OH$), glycerol.'
  },
  {
    id: 'fc-2-3',
    lessonId: 'bai-2',
    category: 'dien-li',
    front: 'Phân biệt chất điện li mạnh và chất điện li yếu. Cho ví dụ.',
    back: '- Điện li mạnh: phân li hoàn toàn trong nước ($\\rightarrow$). Gồm acid mạnh ($HCl, HNO_3, H_2SO_4$), base mạnh ($NaOH, Ba(OH)_2$), hầu hết muối.\n- Điện li yếu: chỉ một phần phân tử phân li ra ion ($\\rightleftharpoons$). Gồm acid yếu ($CH_3COOH, HF, HCN$), base yếu ($NH_3, Cu(OH)_2$).'
  },
  {
    id: 'fc-2-4',
    lessonId: 'bai-2',
    category: 'khai-niem',
    front: 'Định nghĩa Acid và Base theo thuyết Brønsted – Lowry.',
    back: '- Acid là chất cho (nhường) proton ($H^+$).\n- Base là chất nhận proton ($H^+$).'
  },
  {
    id: 'fc-2-5',
    lessonId: 'bai-2',
    category: 'khai-niem',
    front: 'Chất/ion lưỡng tính theo thuyết Brønsted – Lowry là gì? Cho ví dụ.',
    back: 'Chất lưỡng tính là chất vừa có thể nhường proton ($H^+$), vừa có thể nhận proton ($H^+$).\nVí dụ: Ion $HCO_3^-$, phân tử $H_2O$, ion $HS^-$.'
  },
  {
    id: 'fc-2-6',
    lessonId: 'bai-2',
    category: 'cong-thuc',
    front: 'Tích số ion của nước ($K_w$) ở 25 °C có giá trị là bao nhiêu?',
    back: '$$K_w = [H^+][OH^-] = 1,0 \\cdot 10^{-14}$$\nTrong nước tinh khiết: $[H^+] = [OH^-] = 1,0 \\cdot 10^{-7}\\text{ mol/L}$.'
  },
  {
    id: 'fc-2-7',
    lessonId: 'bai-2',
    category: 'ph',
    front: 'Viết công thức định nghĩa pH và mối liên hệ giữa pH với pOH ở 25 °C.',
    back: '$$pH = -\\lg[H^+] \\Leftrightarrow [H^+] = 10^{-pH}$$\n$$pOH = -\\lg[OH^-]$$\n$$pH + pOH = 14$$'
  },
  {
    id: 'fc-2-8',
    lessonId: 'bai-2',
    category: 'ph',
    front: 'Khoảng giá trị pH tương ứng của môi trường Acid, Trung tính và Base là gì?',
    back: '- Môi trường Acid: $[H^+] > 10^{-7}\\text{ M} \\Rightarrow pH < 7$.\n- Môi trường Trung tính: $[H^+] = 10^{-7}\\text{ M} \\Rightarrow pH = 7$.\n- Môi trường Base (kiềm): $[H^+] < 10^{-7}\\text{ M} \\Rightarrow pH > 7$.'
  },
  {
    id: 'fc-2-9',
    lessonId: 'bai-2',
    category: 'ph',
    front: 'Màu sắc biến đổi của quỳ tím và phenolphthalein theo pH như thế nào?',
    back: '- Quỳ tím: $pH \\le 6$ hoá đỏ; $pH = 7$ màu tím; $pH \\ge 8$ hoá xanh.\n- Phenolphthalein: $pH < 8$ không màu; $pH > 8$ chuyển sang màu hồng.'
  },
  {
    id: 'fc-2-10',
    lessonId: 'bai-2',
    category: 'thuc-tien',
    front: 'Tại sao dịch vị dạ dày có tính acid mạnh ($pH \\approx 1,5 - 3,5$)?',
    back: 'Do dịch vị dạ dày chứa acid $HCl$, có tác dụng tiêu hoá thức ăn, hoạt hoá enzyme pepsin và tiêu diệt vi khuẩn có hại.'
  },
  {
    id: 'fc-2-11',
    lessonId: 'bai-2',
    category: 'thuc-tien',
    front: 'Dung dịch $Na_2CO_3$ có môi trường gì? Viết phương trình thuỷ phân ion minh hoạ.',
    back: 'Môi trường base ($pH > 7$).\nPhương trình: $$CO_3^{2-} + H_2O \\rightleftharpoons HCO_3^- + OH^-$$\nIon $Na^+$ không bị thuỷ phân, ion $CO_3^{2-}$ nhận proton từ nước tạo $OH^-$.'
  },
  {
    id: 'fc-2-12',
    lessonId: 'bai-2',
    category: 'thuc-tien',
    front: 'Dung dịch phèn nhôm $AlCl_3$ hoặc phèn sắt $FeCl_3$ có môi trường gì? Vì sao?',
    back: 'Môi trường acid ($pH < 7$).\nDo các cation $Al^{3+}, Fe^{3+}$ bị thuỷ phân trong nước giải phóng ion $H^+$:\n$$Al^{3+} + H_2O \\rightleftharpoons Al(OH)^{2+} + H^+$$'
  },
  {
    id: 'fc-2-13',
    lessonId: 'bai-2',
    category: 'thuc-tien',
    front: 'Tại sao người ta bón vôi ($CaO, Ca(OH)_2$) để khử chua cho đất trồng trọt?',
    back: 'Đất chua có $pH < 7$ do chứa nhiều ion $H^+, Al^{3+}, Fe^{3+}$. Vôi cung cấp ion $OH^-$ để trung hoà $H^+$, nâng giá trị pH của đất lên mức thích hợp cho cây trồng.'
  },
  {
    id: 'fc-2-14',
    lessonId: 'bai-2',
    category: 'cong-thuc',
    front: 'Nguyên tắc chuẩn độ acid - base là gì? Điểm tương đương được nhận biết thế nào?',
    back: '- Dựa trên phản ứng trung hoà giữa acid và base: $H^+ + OH^- \\rightarrow H_2O$.\n- Công thức: $V_A \\cdot C_A = V_B \\cdot C_B$.\n- Điểm tương đương được nhận biết nhờ sự đổi màu của chất chỉ thị (như phenolphthalein xuất hiện màu hồng nhạt bền trong ~10-20s).'
  },
  {
    id: 'fc-2-15',
    lessonId: 'bai-2',
    category: 'dien-li',
    front: 'Viết phương trình điện li của $Ca(OH)_2, Na_2SO_4, HCN, CH_3COONa$.',
    back: '- $Ca(OH)_2 \\rightarrow Ca^{2+} + 2OH^-$\n- $Na_2SO_4 \\rightarrow 2Na^+ + SO_4^{2-}$\n- $HCN \\rightleftharpoons H^+ + CN^-$\n- $CH_3COONa \\rightarrow Na^+ + CH_3COO^-$'
  },
  {
    id: 'fc-2-16',
    lessonId: 'bai-2',
    category: 'thuc-tien',
    front: 'Khi bị ngộ độc acid dạ dày thừa hoặc trào ngược acid, người ta dùng thuốc Nabica chứa chất gì?',
    back: 'Chứa $NaHCO_3$ (sodium hydrogencarbonate). Phản ứng trung hoà: $$NaHCO_3 + HCl \\rightarrow NaCl + CO_2\\uparrow + H_2O$$'
  },
  {
    id: 'fc-2-17',
    lessonId: 'bai-2',
    category: 'ph',
    front: 'Pha loãng 10 mL dung dịch $HCl$ 1 M thành 1 000 mL thì pH thay đổi như thế nào?',
    back: '- Ban đầu: $[H^+] = 1\\text{ M} \\Rightarrow pH = 0$.\n- Sau khi pha loãng 100 lần: $[H^+] = \\frac{1}{100} = 10^{-2}\\text{ M} \\Rightarrow pH = 2$.\n- Vậy pH tăng 2 đơn vị.'
  },
  {
    id: 'fc-2-18',
    lessonId: 'bai-2',
    category: 'thuc-tien',
    front: 'Nước mưa ở khu vực không ô nhiễm có pH khoảng bao nhiêu? Vì sao?',
    back: 'Nước mưa bình thường có $pH \\approx 5,6$ (môi trường acid yếu) do có khí $CO_2$ trong khí quyển hoà tan tạo $H_2CO_3$. Nếu $pH < 5,6$ thì được gọi là hiện tượng mưa acid.'
  }
];

export const lesson2Quizzes: QuizQuestion[] = [
  {
    id: 'q2-1',
    lessonId: 'bai-2',
    question: 'Thêm nước vào 10 mL dung dịch $NaOH$ 1,0 mol/L, thu được 1 000 mL dung dịch A. Dung dịch A có pH thay đổi như thế nào so với dung dịch ban đầu?',
    options: [
      { id: 'A', text: 'pH giảm đi 2 đơn vị.' },
      { id: 'B', text: 'pH giảm đi 1 đơn vị.' },
      { id: 'C', text: 'pH tăng 2 đơn vị.' },
      { id: 'D', text: 'pH tăng gấp đôi.' }
    ],
    correctAnswer: 'A',
    explanation: 'Dung dịch ban đầu: $[OH^-] = 1,0\\text{ M} \\Rightarrow pOH = 0 \\Rightarrow pH = 14$. Sau khi pha loãng 100 lần, thể tích tăng từ 10 mL lên 1000 mL nên nồng độ $[OH^-]$ giảm 100 lần còn $10^{-2}\\text{ M} \\Rightarrow pOH = 2 \\Rightarrow pH = 12$. Vậy pH giảm đi 2 đơn vị.',
    difficulty: 'ThongHieu',
    source: 'SBT Bài 2.1'
  },
  {
    id: 'q2-2',
    lessonId: 'bai-2',
    question: 'Trong dung dịch trung hoà về điện, tổng đại số điện tích của các ion bằng không. Dung dịch A có chứa 0,01 mol $Mg^{2+}$; 0,01 mol $Na^+$; 0,02 mol $Cl^-$ và $x$ mol $SO_4^{2-}$. Giá trị của $x$ là:',
    options: [
      { id: 'A', text: '0,01' },
      { id: 'B', text: '0,02' },
      { id: 'C', text: '0,05' },
      { id: 'D', text: '0,005' }
    ],
    correctAnswer: 'D',
    explanation: 'Theo định luật bảo toàn điện tích: Tổng điện tích dương = Tổng điện tích âm $\\Leftrightarrow 2 \\cdot n_{Mg^{2+}} + 1 \\cdot n_{Na^+} = 1 \\cdot n_{Cl^-} + 2 \\cdot n_{SO_4^{2-}} \\Leftrightarrow 2(0,01) + 0,01 = 0,02 + 2x \\Leftrightarrow 0,03 = 0,02 + 2x \\Leftrightarrow x = 0,005$.',
    difficulty: 'ThongHieu',
    source: 'SBT Bài 2.2'
  },
  {
    id: 'q2-3',
    lessonId: 'bai-2',
    question: 'Trong dung dịch nước, cation kim loại mạnh, gốc acid mạnh không bị thuỷ phân, còn cation kim loại trung bình và yếu bị thuỷ phân tạo môi trường acid, gốc acid yếu bị thuỷ phân tạo môi trường base. Dung dịch muối nào sau đây có $pH > 7$?',
    options: [
      { id: 'A', text: '$KNO_3$' },
      { id: 'B', text: '$K_2SO_4$' },
      { id: 'C', text: '$Na_2CO_3$' },
      { id: 'D', text: '$NaCl$' }
    ],
    correctAnswer: 'C',
    explanation: '$Na_2CO_3$ chứa cation kim loại mạnh $Na^+$ không bị thuỷ phân và anion acid yếu $CO_3^{2-}$ bị thuỷ phân: $CO_3^{2-} + H_2O \\rightleftharpoons HCO_3^- + OH^-$, sinh ra ion $OH^-$ nên dung dịch có môi trường base ($pH > 7$).',
    difficulty: 'NhanBiet',
    source: 'SBT Bài 2.3'
  },
  {
    id: 'q2-4',
    lessonId: 'bai-2',
    question: 'Trong các dung dịch acid sau có cùng nồng độ 0,1 M, dung dịch nào có pH cao nhất?',
    options: [
      { id: 'A', text: 'HF' },
      { id: 'B', text: 'HCl' },
      { id: 'C', text: 'HBr' },
      { id: 'D', text: 'HI' }
    ],
    correctAnswer: 'A',
    explanation: '$HCl, HBr, HI$ là các acid mạnh, điện li hoàn toàn nên $[H^+] = 0,1\\text{ M} \\Rightarrow pH = 1$. Còn $HF$ là acid yếu, điện li không hoàn toàn nên $[H^+] < 0,1\\text{ M} \\Rightarrow pH > 1$ (pH cao nhất).',
    difficulty: 'ThongHieu',
    source: 'SBT Bài 2.4'
  },
  {
    id: 'q2-5',
    lessonId: 'bai-2',
    question: 'Tại khu vực bị ô nhiễm, pH của nước mưa đo được là 4,5 còn pH của nước mưa tại khu vực không bị ô nhiễm là 5,7. Nhận xét nào sau đây KHÔNG đúng?',
    options: [
      { id: 'A', text: 'Nồng độ ion $H^+$ trong dung dịch nước mưa bị ô nhiễm là $10^{-4,5}$.' },
      { id: 'B', text: 'Nồng độ ion $H^+$ trong dung dịch nước mưa không bị ô nhiễm là $10^{-5,7}$.' },
      { id: 'C', text: 'Nồng độ ion $H^+$ trong nước mưa bị ô nhiễm thấp hơn so với trong nước mưa không bị ô nhiễm.' },
      { id: 'D', text: 'Nồng độ ion $OH^-$ trong nước mưa bị ô nhiễm thấp hơn so với trong nước mưa không bị ô nhiễm.' }
    ],
    correctAnswer: 'C',
    explanation: 'Nước mưa ô nhiễm có $pH = 4,5$ nên $[H^+] = 10^{-4,5}\\text{ M}$. Nước mưa không ô nhiễm có $pH = 5,7$ nên $[H^+] = 10^{-5,7}\\text{ M}$. Vì $10^{-4,5} > 10^{-5,7}$ nên nồng độ $H^+$ trong nước mưa bị ô nhiễm cao hơn (chứ không phải thấp hơn). Do đó phát biểu C sai.',
    difficulty: 'ThongHieu',
    source: 'SBT Bài 2.5'
  },
  {
    id: 'q2-6',
    lessonId: 'bai-2',
    question: 'Chất nào sau đây là chất điện li mạnh trong nước?',
    options: [
      { id: 'A', text: '$C_2H_5OH$' },
      { id: 'B', text: '$CH_3COOH$' },
      { id: 'C', text: '$HNO_3$' },
      { id: 'D', text: '$H_2O$' }
    ],
    correctAnswer: 'C',
    explanation: '$HNO_3$ là acid mạnh nên khi tan trong nước phân li hoàn toàn thành ion $H^+$ và $NO_3^-$, là chất điện li mạnh.',
    difficulty: 'NhanBiet',
    source: 'SGK Bài 2'
  },
  {
    id: 'q2-7',
    lessonId: 'bai-2',
    question: 'Theo thuyết Brønsted – Lowry, trong phản ứng: $S^{2-} + H_2O \\rightleftharpoons HS^- + OH^-$, ion $S^{2-}$ đóng vai trò là:',
    options: [
      { id: 'A', text: 'Base vì nhận proton $H^+$.' },
      { id: 'B', text: 'Acid vì nhường proton $H^+$.' },
      { id: 'C', text: 'Chất trung tính.' },
      { id: 'D', text: 'Chất oxi hoá.' }
    ],
    correctAnswer: 'A',
    explanation: '$S^{2-}$ đã nhận proton ($H^+$) từ phân tử nước để tạo thành $HS^-$, do đó theo Brønsted – Lowry, $S^{2-}$ là base.',
    difficulty: 'NhanBiet',
    source: 'SBT Bài 2.7c'
  },
  {
    id: 'q2-8',
    lessonId: 'bai-2',
    question: 'Dung dịch một chất có $[H^+] = 10^{-9}\\text{ M}$. Môi trường của dung dịch này là:',
    options: [
      { id: 'A', text: 'Môi trường acid.' },
      { id: 'B', text: 'Môi trường base.' },
      { id: 'C', text: 'Môi trường trung tính.' },
      { id: 'D', text: 'Không xác định được.' }
    ],
    correctAnswer: 'B',
    explanation: '$pH = -\\lg[H^+] = -\\lg(10^{-9}) = 9 > 7$, do đó dung dịch có môi trường base (kiềm).',
    difficulty: 'NhanBiet',
    source: 'SGK Bài 2'
  },
  {
    id: 'q2-9',
    lessonId: 'bai-2',
    question: 'Dung dịch chất nào sau đây làm quỳ tím chuyển sang màu xanh?',
    options: [
      { id: 'A', text: 'Dung dịch $HCl$' },
      { id: 'B', text: 'Dung dịch $NaCl$' },
      { id: 'C', text: 'Dung dịch $Ba(OH)_2$' },
      { id: 'D', text: 'Dung dịch $H_2SO_4$' }
    ],
    correctAnswer: 'C',
    explanation: '$Ba(OH)_2$ là base mạnh, phân li ra $OH^-$ làm dung dịch có $pH > 7$, quỳ tím chuyển sang màu xanh.',
    difficulty: 'NhanBiet',
    source: 'SGK Bài 2'
  },
  {
    id: 'q2-10',
    lessonId: 'bai-2',
    question: 'Dung dịch phenolphthalein chuyển sang màu hồng khi tiếp xúc với dung dịch nào sau đây?',
    options: [
      { id: 'A', text: 'Dung dịch $CH_3COOH$' },
      { id: 'B', text: 'Dung dịch $KOH$' },
      { id: 'C', text: 'Dung dịch $K_2SO_4$' },
      { id: 'D', text: 'Dung dịch $HNO_3$' }
    ],
    correctAnswer: 'B',
    explanation: 'Phenolphthalein chỉ đổi màu sang hồng trong môi trường base có $pH > 8$. $KOH$ là base mạnh nên làm phenolphthalein chuyển hồng.',
    difficulty: 'NhanBiet',
    source: 'SGK Bài 2'
  },
  {
    id: 'q2-11',
    lessonId: 'bai-2',
    question: 'Hòa tan hoàn toàn $a$ gam $CaO$ vào nước thu được 500 mL dung dịch nước vôi trong A ($Ca(OH)_2$). Chuẩn độ 5 mL dung dịch A bằng $HCl$ 0,1 M thấy hết 12,1 mL. Nồng độ của dung dịch $Ca(OH)_2$ là:',
    options: [
      { id: 'A', text: '0,121 M' },
      { id: 'B', text: '0,242 M' },
      { id: 'C', text: '0,0605 M' },
      { id: 'D', text: '0,500 M' }
    ],
    correctAnswer: 'A',
    explanation: 'PTHH chuẩn độ: $Ca(OH)_2 + 2HCl \\rightarrow CaCl_2 + 2H_2O$. Số mol $HCl = 12,1 \\cdot 10^{-3} \\times 0,1 = 1,21 \\cdot 10^{-3}$ mol. Số mol $Ca(OH)_2 = \\frac{1,21 \\cdot 10^{-3}}{2} = 6,05 \\cdot 10^{-4}$ mol trong 5 mL. Nồng độ $C_M = \\frac{6,05 \\cdot 10^{-4}}{5 \\cdot 10^{-3}} = 0,121$ M.',
    difficulty: 'VanDung',
    source: 'SBT Bài 2.11'
  },
  {
    id: 'q2-12',
    lessonId: 'bai-2',
    question: 'Phèn nhôm $((NH_4)_2SO_4 \\cdot Al_2(SO_4)_3 \\cdot 24H_2O)$ được dùng làm chất keo tụ trong xử lí nước đục là nhờ sự thuỷ phân của ion nào sau đây?',
    options: [
      { id: 'A', text: '$NH_4^+$' },
      { id: 'B', text: '$SO_4^{2-}$' },
      { id: 'C', text: '$Al^{3+}$' },
      { id: 'D', text: '$H_2O$' }
    ],
    correctAnswer: 'C',
    explanation: 'Ion $Al^{3+}$ bị thuỷ phân tạo thành kết tủa dạng keo $Al(OH)_3$ lơ lửng, kéo theo các hạt cặn bẩn lắng xuống đáy: $Al^{3+} + 3H_2O \\rightleftharpoons Al(OH)_3\\downarrow + 3H^+$.',
    difficulty: 'NhanBiet',
    source: 'SGK Bài 2'
  },
  {
    id: 'q2-13',
    lessonId: 'bai-2',
    question: 'Trong phản ứng: $(CH_3)_2NH + H_2O \\rightleftharpoons (CH_3)_2NH_2^+ + OH^-$, phân tử $H_2O$ đóng vai trò là:',
    options: [
      { id: 'A', text: 'Acid vì nhường proton $H^+$.' },
      { id: 'B', text: 'Base vì nhận proton $H^+$.' },
      { id: 'C', text: 'Chất khử.' },
      { id: 'D', text: 'Chất oxi hoá.' }
    ],
    correctAnswer: 'A',
    explanation: 'Phân tử $H_2O$ nhường proton $H^+$ cho $(CH_3)_2NH$ để tạo thành ion $OH^-$, do đó $H_2O$ đóng vai trò là acid theo Brønsted – Lowry.',
    difficulty: 'ThongHieu',
    source: 'SBT Bài 2.7d'
  },
  {
    id: 'q2-14',
    lessonId: 'bai-2',
    question: 'Một dung dịch baking soda ($NaHCO_3$) có $pH = 8,3$. Nồng độ ion $H^+$ của dung dịch trên là:',
    options: [
      { id: 'A', text: '$10^{-8,3}\\text{ M}$' },
      { id: 'B', text: '$10^{-5,7}\\text{ M}$' },
      { id: 'C', text: '$8,3 \\cdot 10^{-7}\\text{ M}$' },
      { id: 'D', text: '$10^{8,3}\\text{ M}$' }
    ],
    correctAnswer: 'A',
    explanation: 'Theo định nghĩa: $[H^+] = 10^{-pH} = 10^{-8,3}\\text{ M}$.',
    difficulty: 'NhanBiet',
    source: 'SBT Bài 2.9'
  },
  {
    id: 'q2-15',
    lessonId: 'bai-2',
    question: 'Một mẫu nước ngọt có $pH = 3$. Dung dịch này có nồng độ ion $OH^-$ là:',
    options: [
      { id: 'A', text: '$10^{-3}\\text{ M}$' },
      { id: 'B', text: '$10^{-11}\\text{ M}$' },
      { id: 'C', text: '$10^{-7}\\text{ M}$' },
      { id: 'D', text: '$10^{-14}\\text{ M}$' }
    ],
    correctAnswer: 'B',
    explanation: '$pH = 3 \\Rightarrow [H^+] = 10^{-3}\\text{ M}$. Tích số ion $K_w = [H^+][OH^-] = 10^{-14} \\Rightarrow [OH^-] = \\frac{10^{-14}}{10^{-3}} = 10^{-11}\\text{ M}$.',
    difficulty: 'ThongHieu',
    source: 'SGK Bài 2'
  },
  {
    id: 'q2-16',
    lessonId: 'bai-2',
    question: 'Dụng cụ nào sau đây được dùng để chứa dung dịch chuẩn và đọc thể tích chính xác trong phương pháp chuẩn độ acid - base?',
    options: [
      { id: 'A', text: 'Burette' },
      { id: 'B', text: 'Cốc thuỷ tinh' },
      { id: 'C', text: 'Bình tam giác' },
      { id: 'D', text: 'Ống nghiệm' }
    ],
    correctAnswer: 'A',
    explanation: 'Burette là ống thuỷ tinh dài có vạch chia thể tích chính xác và khoá xả ở dưới, dùng để chứa dung dịch chuẩn và đọc thể tích dung dịch đã nhỏ giọt vào bình tam giác.',
    difficulty: 'NhanBiet',
    source: 'SGK Bài 2'
  },
  {
    id: 'q2-17',
    lessonId: 'bai-2',
    question: 'Dãy các dung dịch nào sau đây đều là chất điện li yếu?',
    options: [
      { id: 'A', text: '$HCl, NaOH, NaCl$' },
      { id: 'B', text: '$CH_3COOH, HF, HCN$' },
      { id: 'C', text: '$HNO_3, Ba(OH)_2, KNO_3$' },
      { id: 'D', text: '$H_2SO_4, KOH, Na_2CO_3$' }
    ],
    correctAnswer: 'B',
    explanation: '$CH_3COOH$ (acetic acid), $HF$ (hydrofluoric acid), $HCN$ (hydrocyanic acid) đều là các acid yếu, phân li một phần trong nước nên là chất điện li yếu.',
    difficulty: 'NhanBiet',
    source: 'SGK Bài 2'
  },
  {
    id: 'q2-18',
    lessonId: 'bai-2',
    question: 'Lấy 1,0 g vỏ trứng khô sạch hoà tan hoàn toàn trong 50 mL dung dịch $HCl$ 0,4 M. Sau phản ứng thu được 50 mL dung dịch A. Chuẩn độ 10,0 mL dung dịch A bằng dung dịch $NaOH$ 0,1 M thấy hết 5,6 mL. Hàm lượng $\% CaCO_3$ trong vỏ trứng là:',
    options: [
      { id: 'A', text: '86%' },
      { id: 'B', text: '92%' },
      { id: 'C', text: '78%' },
      { id: 'D', text: '80%' }
    ],
    correctAnswer: 'A',
    explanation: 'Số mol $HCl$ dư trong 10 mL A $= 5,6 \\cdot 10^{-3} \\times 0,1 = 5,6 \\cdot 10^{-4}$ mol. Số mol $HCl$ dư trong 50 mL A $= 5,6 \\cdot 10^{-4} \\times 5 = 2,8 \\cdot 10^{-3}$ mol. Số mol $HCl$ ban đầu $= 0,05 \\times 0,4 = 0,02$ mol. Số mol $HCl$ phản ứng với $CaCO_3 = 0,02 - 0,0028 = 0,0172$ mol. PTHH: $CaCO_3 + 2HCl \\rightarrow CaCl_2 + CO_2 + H_2O \\Rightarrow n_{CaCO_3} = \\frac{0,0172}{2} = 8,6 \\cdot 10^{-3}$ mol. Khối lượng $CaCO_3 = 8,6 \\cdot 10^{-3} \\times 100 = 0,86$ g. Hàm lượng $= \\frac{0,86}{1,0} \\times 100\\% = 86\\%$.',
    difficulty: 'VanDung',
    source: 'SBT Bài 2.12'
  }
];
