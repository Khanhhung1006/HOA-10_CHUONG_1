import { TheorySectionData, Flashcard, QuizQuestion } from '../../types';

export const lesson7Theory: TheorySectionData = {
  id: 'bai-7',
  chapterId: 'chuong-2',
  title: 'Bài 7: Sulfur và sulfur dioxide',
  objectives: [
    'Nêu được các trạng thái tự nhiên của nguyên tố sulfur.',
    'Trình bày được cấu tạo, tính chất vật lí, hoá học cơ bản và ứng dụng của sulfur đơn chất.',
    'Thực hiện được thí nghiệm chứng minh sulfur đơn chất vừa có tính oxi hoá vừa có tính khử.',
    'Trình bày được tính oxi hoá, tính khử và ứng dụng của sulfur dioxide.',
    'Trình bày được sự hình thành sulfur dioxide do tác động của con người, tự nhiên, tác hại của sulfur dioxide và một số biện pháp giảm thiểu sulfur dioxide thải vào không khí.'
  ],
  summary: 'Sulfur là nguyên tố phi kim phổ biến (chiếm 0,03 - 0,1% khối lượng vỏ Trái Đất), phân tử dạng vòng $S_8$. Đơn chất sulfur có tính oxi hoá (tác dụng với kim loại, $H_2$) và tính khử (tác dụng với $O_2, F_2$), có ứng dụng nổi bật là dùng bột sulfur thu gom thuỷ ngân rơi vãi ở nhiệt độ thường. Sulfur dioxide ($SO_2$) là chất khí mùi hắc, độc, vừa có tính oxi hoá (tác dụng $H_2S$) vừa có tính khử (tác dụng $NO_2, KMnO_4$), là chất tẩy trắng, khử nấm mốc nhưng cũng là tác nhân chính gây mưa acid.',
  coreKnowledge: [
    {
      heading: 'I. Sulfur (Lưu huỳnh)',
      points: [
        'Trạng thái tự nhiên: Là nguyên tố phổ biến thứ 17 trên vỏ Trái Đất (0,03 - 0,1% khối lượng). Tồn tại ở dạng đơn chất (mỏ sulfur vùng núi lửa) và dạng hợp chất (quặng sulfide như pyrite $FeS_2$, chalcopyrite $CuFeS_2$, cinnabar chu sa/thần sa $HgS$; quặng sulfate như thạch cao $CaSO_4 \\cdot 2H_2O$, $BaSO_4$; trong cơ thể động vật chứa khoảng 0,2% khối lượng trong protein và enzyme). Bốn đồng vị bền: $^{32}S$ (94,98%), $^{33}S$ (0,76%), $^{34}S$ (4,22%), $^{36}S$ (0,02%).',
        'Cấu tạo nguyên tử & phân tử: Ô số 16, chu kì 3, nhóm VIA. Cấu hình e lớp ngoài cùng: $3s^2 3p^4$. Các số oxi hoá trong hợp chất: $-2, 0, +4, +6$. Phân tử sulfur gồm 8 nguyên tử ($S_8$) có dạng mạch vòng khép kín. Trong phương trình phản ứng được viết đơn giản là $S$.',
        'Tính chất vật lí: Chất rắn màu vàng, không tan trong nước, ít tan trong alcohol, tan nhiều trong dung môi không phân cực như $CS_2$ (carbon disulfide). Nóng chảy ở $113\\;^\\circ\\text{C}$ và sôi ở $445\\;^\\circ\\text{C}$. Có 2 dạng thù hình: sulfur tà phương ($S_\\alpha$, bền ở nhiệt độ thường) và sulfur đơn tà ($S_\\beta$, bền $>95,5\\;^\\circ\\text{C}$).',
        'Tính chất hoá học của Sulfur:\n- Tính oxi hoá (khi tác dụng với kim loại và hydrogen):\n  + Với thuỷ ngân ($Hg$): Phản ứng xảy ra ngay ở nhiệt độ thường: $Hg + S \\rightarrow HgS$ (ứng dụng xử lí thuỷ ngân rơi vãi khi vỡ nhiệt kế).\n  + Với sắt ($Fe$): $Fe + S \\xrightarrow{t^o} FeS$.\n  + Với nhôm ($Al$): $2Al + 3S \\xrightarrow{t^o} Al_2S_3$.\n  + Với hydrogen ($H_2$): $H_2 + S \\xrightarrow{t^o} H_2S \\quad \\Delta_r H_{298}^\\circ = -20,6\\text{ kJ}$.\n- Tính khử (khi tác dụng với phi kim có độ âm điện lớn hơn):\n  + Với fluorine ($F_2$): $S + 3F_2 \\rightarrow SF_6 \\quad \\Delta_r H_{298}^\\circ = -1220,5\\text{ kJ}$.\n  + Với oxygen ($O_2$): $S + O_2 \\xrightarrow{t^o} SO_2 \\quad \\Delta_r H_{298}^\\circ = -296,8\\text{ kJ}$ (cháy trong không khí với ngọn lửa màu xanh nhạt).',
        'Ứng dụng của Sulfur: Sản xuất sulfuric acid ($H_2SO_4$, chiếm phần lớn lượng sulfur khai thác), lưu hoá cao su tự nhiên, sản xuất diêm, thuốc nổ đen, thuốc trừ sâu và thuốc diệt nấm mốc.'
      ],
      latexEquations: [
        'Hg + S \\rightarrow HgS \\text{ (nhiệt độ thường)}',
        'Fe + S \\xrightarrow{t^o} FeS',
        'S + O_2 \\xrightarrow{t^o} SO_2 \\quad \\Delta_r H_{298}^\\circ = -296,8\\text{ kJ}',
        'S + 3F_2 \\rightarrow SF_6 \\quad \\Delta_r H_{298}^\\circ = -1220,5\\text{ kJ}'
      ]
    },
    {
      heading: 'II. Sulfur Dioxide ($SO_2$)',
      points: [
        'Tính chất vật lí: Chất khí không màu, nặng hơn không khí ($d = 64/29 \\approx 2,2$), mùi hắc, độc (gây ho, viêm đường hô hấp), tan nhiều trong nước (ở $20\\;^\\circ\\text{C}$, 1 lít nước hoà tan được 40 lít khí $SO_2$).',
        'Tính chất hoá học:\n- Là một acidic oxide: $SO_2 + H_2O \\rightleftharpoons H_2SO_3$ (dung dịch sulfurous acid làm đỏ quỳ tím), tác dụng với dung dịch kiềm ($NaOH, Ca(OH)_2$).\n- Tính oxi hoá (khi gặp chất khử mạnh hơn như $H_2S$):\n$$SO_2 + 2H_2S \\rightarrow 3S\\downarrow + 2H_2O \\text{ (thu hồi lưu huỳnh trong khí thiên nhiên)}$$\n- Tính khử (khi gặp chất oxi hoá như $NO_2, O_2, KMnO_4, Br_2$):\n$$SO_2 + NO_2 \\xrightarrow{xt} SO_3 + NO$$\n$$2SO_2 + O_2 \\overset{V_2O_5, 450\\;^\\circ\\text{C}}{\\rightleftharpoons} 2SO_3$$\n$$5SO_2 + 2KMnO_4 + 2H_2O \\rightarrow K_2SO_4 + 2MnSO_4 + 2H_2SO_4 \\text{ (làm mất màu thuốc tím)}$$',
        'Nguồn phát sinh & Tác hại: Sinh ra từ khí thải núi lửa (tự nhiên) và đốt cháy nhiên liệu hoá thạch chứa sulfur (than đá, dầu mỏ), luyện kim quặng sulfide (nhân tạo). Là tác nhân chính gây mưa acid, ăn mòn công trình đá và kim loại, phá huỷ rừng cây.',
        'Ứng dụng: Chất trung gian quan trọng sản xuất $H_2SO_4$, tẩy trắng bột giấy, khử màu đường mía, diệt nấm mốc trong bảo quản đồ mây tre đan.'
      ],
      latexEquations: [
        'SO_2 + 2H_2S \\rightarrow 3S\\downarrow + 2H_2O',
        'SO_2 + NO_2 \\xrightarrow{xt} SO_3 + NO',
        '2SO_2 + O_2 \\overset{V_2O_5, t^o}{\\rightleftharpoons} 2SO_3 \\quad \\Delta_r H_{298}^\\circ = -198\\text{ kJ}'
      ]
    }
  ],
  formulas: [
    {
      name: 'Phản ứng thu hồi thuỷ ngân rơi vãi bằng bột Sulfur',
      latex: 'Hg + S \\rightarrow HgS',
      description: 'Phản ứng xảy ra ở nhiệt độ phòng tạo chất rắn $HgS$ không độc, không bay hơi.'
    },
    {
      name: 'Phản ứng Clasu thu hồi lưu huỳnh từ $H_2S$',
      latex: 'SO_2 + 2H_2S \\rightarrow 3S\\downarrow + 2H_2O',
      description: 'Phản ứng chứng minh tính oxi hoá của $SO_2$.'
    }
  ],
  keyConcepts: [
    {
      term: 'Phân tử Sulfur ($S_8$)',
      definition: 'Dạng phân tử hình vòng gồm 8 nguyên tử sulfur liên kết cộng hoá trị không phân cực.'
    },
    {
      term: 'Lưu hoá cao su',
      definition: 'Quá trình trộn cao su thiên nhiên với bột sulfur ở nhiệt độ thích hợp tạo cầu nối disulffide ($-S-S-$) giúp tăng độ bền và tính đàn hồi của cao su.'
    },
    {
      term: 'Thu gom thuỷ ngân bằng bột lưu huỳnh',
      definition: 'Rắc bột sulfur ($S$) lên thuỷ ngân rơi vãi để phản ứng tạo $HgS$ rắn không bay hơi, không độc, dễ quét dọn.'
    },
    {
      term: 'Tính chất oxi hoá - khử trung gian của $S$ và $SO_2$',
      definition: 'Do có số oxi hoá trung gian ($0$ ở $S$ và $+4$ ở $SO_2$), chúng vừa có khả năng nhận electron (thể hiện tính oxi hoá) vừa có khả năng nhường electron (thể hiện tính khử).'
    }
  ],
  examples: [
    {
      title: 'Ví dụ 1: Xử lí thuỷ ngân rơi vãi khi nhiệt kế thuỷ ngân bị vỡ',
      content: 'Hãy mô tả cách xử lí an toàn khi nhiệt kế thuỷ ngân bị vỡ trong phòng thí nghiệm hoặc gia đình.',
      solution: 'Khi nhiệt kế bị vỡ, thuỷ ngân ($Hg$) phân tán thành các hạt lỏng li ti rất dễ bay hơi và cực kì độc hại.\nCách xử lí: Rắc ngay bột sulfur ($S$) phủ kín lên các hạt thuỷ ngân. Phản ứng xảy ra ngay ở nhiệt độ thường:\n$$Hg + S \\rightarrow HgS$$\nSản phẩm $HgS$ là chất rắn không tan, không bay hơi và không độc, dễ dàng gom lại bằng chổi và xẻng nhỏ.'
    },
    {
      title: 'Ví dụ 2: Chứng minh tính khử của $SO_2$ trong phòng thí nghiệm',
      content: 'Nêu hiện tượng khi sục khí $SO_2$ vào dung dịch thuốc tím ($KMnO_4$). Viết phương trình hoá học.',
      solution: 'Hiện tượng: Dung dịch thuốc tím bị mất màu tím đặc trưng và chuyển thành dung dịch không màu. Phương trình:\n$$5SO_2 + 2KMnO_4 + 2H_2O \\rightarrow K_2SO_4 + 2MnSO_4 + 2H_2SO_4$$\nKhí $SO_2$ đã khử $Mn^{+7}$ (màu tím) xuống $Mn^{+2}$ (không màu), chứng tỏ $SO_2$ có tính khử.'
    }
  ],
  commonMistakes: [
    {
      mistake: 'Cho rằng lưu huỳnh chỉ có tính khử.',
      correction: 'Lưu huỳnh đơn chất ($S$) vừa có tính oxi hoá (khi tác dụng với kim loại, $H_2$) vừa có tính khử (khi tác dụng với phi kim $O_2, F_2$).',
      why: 'Nguyên tử S có số oxi hoá $0$ trung gian giữa mức thấp nhất ($-2$) và các mức cao ($+4, +6$).'
    },
    {
      mistake: 'Nghĩ rằng phản ứng giữa bột $S$ và bột $Fe$ xảy ra tự phát ở nhiệt độ thường.',
      correction: 'Phản ứng giữa bột sắt và bột sulfur chỉ xảy ra khi được đun nóng khơi mào trên ngọn lửa đèn cồn, sau đó toả nhiều nhiệt tiếp tục tự cháy sáng.',
      why: 'Liên kết $S_8$ cần năng lượng kích hoạt ban đầu để phân cắt.'
    }
  ],
  memoryTips: [
    'Sulfur: Vòng $S_8$ - Rắn vàng - Oxi hoá ($Fe, Hg$) & Khử ($O_2, F_2$).',
    'Vỡ thuỷ ngân: Rắc bột sulfur $S \\rightarrow HgS$ rắn an toàn ở nhiệt độ thường.',
    '$SO_2$: Mùi hắc - Tẩy trắng mây tre - Khử ($KMnO_4, NO_2$) & Oxi hoá ($H_2S$).'
  ],
  glossary: [
    { term: 'Sulfur', meaning: 'Nguyên tố phi kim nhóm VIA, đơn chất rắn màu vàng, tên dân gian là diêm sinh, công thức $S$.' },
    { term: 'Sulfur dioxide', meaning: 'Khí không màu, mùi hắc độc hại, công thức $SO_2$.' },
    { term: 'Pyrite', meaning: 'Khoáng vật sulfide sắt tự nhiên có công thức $FeS_2$.' },
    { term: 'Thạch cao sống', meaning: 'Khoáng vật sulfate tự nhiên của calcium có công thức $CaSO_4 \\cdot 2H_2O$.' }
  ],
  reviewChecklist: [
    'Nêu các trạng thái tự nhiên của sulfur (đơn chất, quặng sulfide, sulfate, protein).',
    'Viết các phương trình chứng minh sulfur vừa có tính oxi hoá vừa có tính khử.',
    'Giải thích phương pháp dùng bột sulfur thu gom thuỷ ngân ($Hg$).',
    'Viết các phản ứng chứng minh $SO_2$ vừa có tính oxi hoá vừa có tính khử.',
    'Trình bày nguồn gốc phát sinh và các tác hại của $SO_2$ đối với môi trường.'
  ]
};

export const lesson7Flashcards: Flashcard[] = [
  {
    id: 'fc-7-1',
    chapterId: 'chuong-2',
    lessonId: 'bai-7',
    category: 'khai-niem',
    front: 'Tên gọi dân gian của đơn chất sulfur là gì?',
    back: 'Tên dân gian là **diêm sinh**.'
  },
  {
    id: 'fc-7-2',
    chapterId: 'chuong-2',
    lessonId: 'bai-7',
    category: 'khai-niem',
    front: 'Trong tự nhiên, đồng vị nào của sulfur chiếm thành phần nhiều nhất?',
    back: 'Đồng vị **$^{32}S$** (chiếm khoảng **94,98%**).'
  },
  {
    id: 'fc-7-3',
    chapterId: 'chuong-2',
    lessonId: 'bai-7',
    category: 'cong-thuc',
    front: 'Công thức hoá học của khoáng vật thạch cao sống trong tự nhiên là gì?',
    back: 'Công thức là **$CaSO_4 \\cdot 2H_2O$**.'
  },
  {
    id: 'fc-7-4',
    chapterId: 'chuong-2',
    lessonId: 'bai-7',
    category: 'cong-thuc',
    front: 'Ở điều kiện thường, phân tử sulfur tồn tại ở dạng tinh thể tạo nên từ các phân tử có bao nhiêu nguyên tử?',
    back: 'Tạo nên từ các phân tử **$S_8$** (gồm 8 nguyên tử sulfur dạng mạch vòng khép kín).'
  },
  {
    id: 'fc-7-5',
    chapterId: 'chuong-2',
    lessonId: 'bai-7',
    category: 'thuc-tien',
    front: 'Trong công nghiệp, phần lớn lượng sulfur đơn chất sau khi khai thác được dùng làm nguyên liệu để làm gì?',
    back: 'Dùng để **sản xuất sulfuric acid ($H_2SO_4$)**.'
  },
  {
    id: 'fc-7-6',
    chapterId: 'chuong-2',
    lessonId: 'bai-7',
    category: 'sulfur',
    front: 'Chất bột nào được rắc lên thuỷ ngân rơi vãi khi nhiệt kế bị vỡ để chuyển hoá thành hợp chất an toàn?',
    back: 'Rắc **bột lưu huỳnh / sulfur ($S$)** để tạo $HgS$ rắn không bay hơi, không độc:\n$$Hg + S \\rightarrow HgS$$'
  },
  {
    id: 'fc-7-7',
    chapterId: 'chuong-2',
    lessonId: 'bai-7',
    category: 'sulfur',
    front: 'Viết phương trình phản ứng giữa bột sắt ($Fe$) và bột sulfur ($S$) khi đun nóng.',
    back: '$$Fe + S \\xrightarrow{t^o} FeS$$'
  },
  {
    id: 'fc-7-8',
    chapterId: 'chuong-2',
    lessonId: 'bai-7',
    category: 'sulfur',
    front: 'Sulfur thể hiện tính khử khi tác dụng với những chất nào? Cho ví dụ phương trình.',
    back: 'Tác dụng với các phi kim có độ âm điện lớn hơn như **$O_2$** và **$F_2$**:\n$$S + O_2 \\xrightarrow{t^o} SO_2$$\n$$S + 3F_2 \\rightarrow SF_6$$'
  },
  {
    id: 'fc-7-9',
    chapterId: 'chuong-2',
    lessonId: 'bai-7',
    category: 'sulfur',
    front: 'Khí sulfur dioxide ($SO_2$) có màu và mùi gì? Độ tan trong nước như thế nào?',
    back: 'Là chất khí **không màu, mùi hắc, độc**, **tan nhiều trong nước** (ở $20\\;^\\circ\\text{C}$, 1 lít nước hoà tan được 40 lít $SO_2$).'
  },
  {
    id: 'fc-7-10',
    chapterId: 'chuong-2',
    lessonId: 'bai-7',
    category: 'sulfur',
    front: 'Viết phương trình chứng minh sulfur dioxide ($SO_2$) có tính oxi hoá.',
    back: 'Tác dụng với khí $H_2S$:\n$$SO_2 + 2H_2S \\rightarrow 3S\\downarrow + 2H_2O$$'
  },
  {
    id: 'fc-7-11',
    chapterId: 'chuong-2',
    lessonId: 'bai-7',
    category: 'sulfur',
    front: 'Viết phương trình chứng minh sulfur dioxide ($SO_2$) có tính khử.',
    back: 'Tác dụng với khí $NO_2$ hoặc oxi hoá thành $SO_3$:\n$$SO_2 + NO_2 \\xrightarrow{xt} SO_3 + NO$$\n$$2SO_2 + O_2 \\overset{V_2O_5, t^o}{\\rightleftharpoons} 2SO_3$$'
  },
  {
    id: 'fc-7-12',
    chapterId: 'chuong-2',
    lessonId: 'bai-7',
    category: 'thuc-tien',
    front: 'Vì sao người ta dùng sulfur dioxide ($SO_2$) trong chế biến mây tre đan?',
    back: 'Vì $SO_2$ có khả năng **tẩy trắng và diệt nấm mốc** hiệu quả cho các sản phẩm mây tre đan.'
  },
  {
    id: 'fc-7-13',
    chapterId: 'chuong-2',
    lessonId: 'bai-7',
    category: 'thuc-tien',
    front: 'Để khử khí $SO_2$ thoát ra trong phòng thí nghiệm, người ta thường nút miệng bình bằng bông tẩm dung dịch gì?',
    back: 'Tẩm **dung dịch kiềm (như nước vôi trong $Ca(OH)_2$ hoặc dung dịch $NaOH$)** để phản ứng giữ lại $SO_2$.'
  },
  {
    id: 'fc-7-14',
    chapterId: 'chuong-2',
    lessonId: 'bai-7',
    category: 'cong-thuc',
    front: 'Nêu tên và công thức của 3 khoáng vật sulfide quan trọng của sulfur trong tự nhiên.',
    back: '- Pyrite: **$FeS_2$**\n- Chalcopyrite: **$CuFeS_2$**\n- Cinnabar (chu sa/thần sa): **$HgS$**'
  },
  {
    id: 'fc-7-15',
    chapterId: 'chuong-2',
    lessonId: 'bai-7',
    category: 'khai-niem',
    front: 'Tính tan của đơn chất sulfur trong nước và trong dung môi hữu cơ ($CS_2$) như thế nào?',
    back: '**Không tan trong nước**, ít tan trong alcohol, nhưng **tan nhiều trong $CS_2$ (carbon disulfide)** và benzene.'
  }
];

export const lesson7Quizzes: QuizQuestion[] = [
  {
    id: 'c2-b7-q1',
    chapterId: 'chuong-2',
    lessonId: 'bai-7',
    question: 'Sulfur được dân gian sử dụng để pha chế vào thuốc trị các bệnh ngoài da. Tên gọi dân gian của sulfur là',
    options: [
      { id: 'A', text: 'Diêm sinh.' },
      { id: 'B', text: 'Đá vôi.' },
      { id: 'C', text: 'Phèn chua.' },
      { id: 'D', text: 'Giấm ăn.' }
    ],
    correctAnswer: 'A',
    explanation: 'Dân gian thường gọi đơn chất lưu huỳnh là diêm sinh. (Câu 7.1 SBT)',
    difficulty: 'NhanBiet',
    source: 'SBT Hóa học 11 - Bài 7 (Câu 7.1)'
  },
  {
    id: 'c2-b7-q2',
    chapterId: 'chuong-2',
    lessonId: 'bai-7',
    question: 'Trong tự nhiên, đồng vị của sulfur chiếm thành phần nhiều nhất là',
    options: [
      { id: 'A', text: '$^{34}S$.' },
      { id: 'B', text: '$^{32}S$.' },
      { id: 'C', text: '$^{36}S$.' },
      { id: 'D', text: '$^{33}S$.' }
    ],
    correctAnswer: 'B',
    explanation: 'Đồng vị $^{32}S$ chiếm 94,98% tổng lượng sulfur trong tự nhiên. (Câu 7.2 SBT)',
    difficulty: 'NhanBiet',
    source: 'SBT Hóa học 11 - Bài 7 (Câu 7.2)'
  },
  {
    id: 'c2-b7-q3',
    chapterId: 'chuong-2',
    lessonId: 'bai-7',
    question: 'Thạch cao sống là một dạng tồn tại phổ biến của sulfur trong tự nhiên. Công thức của thạch cao sống là',
    options: [
      { id: 'A', text: '$BaSO_4$.' },
      { id: 'B', text: '$CaSO_4 \\cdot 2H_2O$.' },
      { id: 'C', text: '$MgSO_4$.' },
      { id: 'D', text: '$CuSO_4 \\cdot 5H_2O$.' }
    ],
    correctAnswer: 'B',
    explanation: 'Thạch cao sống có công thức $CaSO_4 \\cdot 2H_2O$. (Câu 7.3 SBT)',
    difficulty: 'NhanBiet',
    source: 'SBT Hóa học 11 - Bài 7 (Câu 7.3)'
  },
  {
    id: 'c2-b7-q4',
    chapterId: 'chuong-2',
    lessonId: 'bai-7',
    question: 'Ở điều kiện thường, sulfur tồn tại ở dạng tinh thể, được tạo nên từ các phân tử sulfur. Số nguyên tử trong mỗi phân tử sulfur là',
    options: [
      { id: 'A', text: '2.' },
      { id: 'B', text: '4.' },
      { id: 'C', text: '6.' },
      { id: 'D', text: '8.' }
    ],
    correctAnswer: 'D',
    explanation: 'Phân tử sulfur gồm 8 nguyên tử ($S_8$) liên kết vòng khép kín. (Câu 7.4 SBT)',
    difficulty: 'NhanBiet',
    source: 'SBT Hóa học 11 - Bài 7 (Câu 7.4)'
  },
  {
    id: 'c2-b7-q5',
    chapterId: 'chuong-2',
    lessonId: 'bai-7',
    question: 'Trong công nghiệp, phần lớn lượng sulfur đơn chất sau khi khai thác ở các mỏ được dùng làm nguyên liệu để',
    options: [
      { id: 'A', text: 'lưu hoá cao su tự nhiên.' },
      { id: 'B', text: 'sản xuất sulfuric acid.' },
      { id: 'C', text: 'điều chế thuốc bảo vệ thực vật.' },
      { id: 'D', text: 'bào chế thuốc đông y.' }
    ],
    correctAnswer: 'B',
    explanation: 'Phần lớn sulfur đơn chất được sử dụng làm nguyên liệu trực tiếp để sản xuất sulfuric acid ($H_2SO_4$). (Câu 7.5 SBT)',
    difficulty: 'NhanBiet',
    source: 'SBT Hóa học 11 - Bài 7 (Câu 7.5)'
  },
  {
    id: 'c2-b7-q6',
    chapterId: 'chuong-2',
    lessonId: 'bai-7',
    question: 'Quá trình đốt than sinh ra nhiều loại khí thải, trong đó có khí $SO_2$. Tên gọi của khí $SO_2$ là',
    options: [
      { id: 'A', text: 'Sulfur trioxide.' },
      { id: 'B', text: 'Sulfuric acid.' },
      { id: 'C', text: 'Sulfur dioxide.' },
      { id: 'D', text: 'Hydrogen sulfide.' }
    ],
    correctAnswer: 'C',
    explanation: '$SO_2$ có tên gọi là sulfur dioxide. (Câu 7.6 SBT)',
    difficulty: 'NhanBiet',
    source: 'SBT Hóa học 11 - Bài 7 (Câu 7.6)'
  },
  {
    id: 'c2-b7-q7',
    chapterId: 'chuong-2',
    lessonId: 'bai-7',
    question: 'Tác nhân chính tạo ra hiện tượng mưa acid tàn phá rừng cây và ăn mòn công trình là',
    options: [
      { id: 'A', text: '$SO_2$.' },
      { id: 'B', text: '$H_2S$.' },
      { id: 'C', text: '$CO_2$.' },
      { id: 'D', text: '$CO$.' }
    ],
    correctAnswer: 'A',
    explanation: '$SO_2$ (cùng với $NO_x$) là các tác nhân chính tạo nên mưa acid. (Câu 7.7 SBT)',
    difficulty: 'NhanBiet',
    source: 'SBT Hóa học 11 - Bài 7 (Câu 7.7)'
  },
  {
    id: 'c2-b7-q8',
    chapterId: 'chuong-2',
    lessonId: 'bai-7',
    question: 'Trong số các chất khí: $SO_2, CO_2, O_2, N_2$, khí tan tốt nhất trong nước ở điều kiện thường là',
    options: [
      { id: 'A', text: '$O_2$.' },
      { id: 'B', text: '$CO_2$.' },
      { id: 'C', text: '$SO_2$.' },
      { id: 'D', text: '$N_2$.' }
    ],
    correctAnswer: 'C',
    explanation: 'Ở $20\\;^\\circ\\text{C}$, 1 lít nước hoà tan được khoảng 40 lít khí $SO_2$, lớn hơn nhiều so với $CO_2, O_2, N_2$. (Câu 7.8 SBT)',
    difficulty: 'NhanBiet',
    source: 'SBT Hóa học 11 - Bài 7 (Câu 7.8)'
  },
  {
    id: 'c2-b7-q9',
    chapterId: 'chuong-2',
    lessonId: 'bai-7',
    question: 'Sulfur đóng vai trò chất khử khi tác dụng với đơn chất nào sau đây?',
    options: [
      { id: 'A', text: '$Fe$.' },
      { id: 'B', text: '$O_2$.' },
      { id: 'C', text: '$H_2$.' },
      { id: 'D', text: '$Hg$.' }
    ],
    correctAnswer: 'B',
    explanation: 'Khi tác dụng với $O_2$, số oxi hoá của sulfur tăng từ $0$ lên $+4$ ($S + O_2 \\xrightarrow{t^o} SO_2$) nên $S$ là chất khử. (Câu 7.9 SBT)',
    difficulty: 'NhanBiet',
    source: 'SBT Hóa học 11 - Bài 7 (Câu 7.9)'
  },
  {
    id: 'c2-b7-q10',
    chapterId: 'chuong-2',
    lessonId: 'bai-7',
    question: 'Ở điều kiện thích hợp, sulfur dioxide đóng vai trò là chất oxi hoá khi tham gia phản ứng với chất nào sau đây?',
    options: [
      { id: 'A', text: '$NO_2$.' },
      { id: 'B', text: '$H_2S$.' },
      { id: 'C', text: '$NaOH$.' },
      { id: 'D', text: '$Ca(OH)_2$.' }
    ],
    correctAnswer: 'B',
    explanation: 'Trong phản ứng $SO_2 + 2H_2S \\rightarrow 3S\\downarrow + 2H_2O$, số oxi hoá của S trong $SO_2$ giảm từ $+4$ xuống $0$ nên đóng vai trò là chất oxi hoá. (Câu 7.10 SBT)',
    difficulty: 'NhanBiet',
    source: 'SBT Hóa học 11 - Bài 7 (Câu 7.10)'
  },
  {
    id: 'c2-b7-q11',
    chapterId: 'chuong-2',
    lessonId: 'bai-7',
    question: 'Khi nhiệt kế thuỷ ngân bị vỡ, rắc chất bột nào sau đây lên thuỷ ngân rơi vãi sẽ chuyển hoá chúng thành hợp chất bền, ít độc hại?',
    options: [
      { id: 'A', text: 'Than đá.' },
      { id: 'B', text: 'Đá vôi.' },
      { id: 'C', text: 'Muối ăn.' },
      { id: 'D', text: 'Sulfur.' }
    ],
    correctAnswer: 'D',
    explanation: 'Rắc bột sulfur ($S$) phản ứng tạo $HgS$ rắn không độc ở ngay nhiệt độ thường: $Hg + S \\rightarrow HgS$. (Câu 7.11 SBT)',
    difficulty: 'ThongHieu',
    source: 'SBT Hóa học 11 - Bài 7 (Câu 7.11)'
  },
  {
    id: 'c2-b7-q12',
    chapterId: 'chuong-2',
    lessonId: 'bai-7',
    question: 'Cho các loại khoáng vật sau: blend ($ZnS$), chalcopyrite ($CuFeS_2$), thạch cao ($CaSO_4 \\cdot 2H_2O$), pyrite ($FeS_2$). Số khoáng vật có thành phần chính chứa muối sulfide là',
    options: [
      { id: 'A', text: '2.' },
      { id: 'B', text: '4.' },
      { id: 'C', text: '1.' },
      { id: 'D', text: '3.' }
    ],
    correctAnswer: 'D',
    explanation: 'Có 3 khoáng vật sulfide là blend ($ZnS$), chalcopyrite ($CuFeS_2$) và pyrite ($FeS_2$). Thạch cao là muối sulfate. (Câu 7.12 SBT)',
    difficulty: 'ThongHieu',
    source: 'SBT Hóa học 11 - Bài 7 (Câu 7.12)'
  },
  {
    id: 'c2-b7-q13',
    chapterId: 'chuong-2',
    lessonId: 'bai-7',
    question: 'Cho các phản ứng:\n(a) $S + O_2 \\xrightarrow{t^o} SO_2$;\n(b) $S + 3F_2 \\rightarrow SF_6$;\n(c) $Hg + S \\rightarrow HgS$;\n(d) $H_2 + \\frac{1}{8}S_8 \\rightarrow H_2S$.\nSố phản ứng trong đó sulfur đơn chất đóng vai trò chất khử là',
    options: [
      { id: 'A', text: '1.' },
      { id: 'B', text: '2.' },
      { id: 'C', text: '3.' },
      { id: 'D', text: '4.' }
    ],
    correctAnswer: 'B',
    explanation: 'Có 2 phản ứng sulfur là chất khử là (a) và (b) khi số oxi hoá của S tăng từ $0$ lên $+4$ và $+6$. Ở (c) và (d), S là chất oxi hoá (giảm số oxi hoá xuống $-2$). (Câu 7.13 SBT)',
    difficulty: 'ThongHieu',
    source: 'SBT Hóa học 11 - Bài 7 (Câu 7.13)'
  },
  {
    id: 'c2-b7-q14',
    chapterId: 'chuong-2',
    lessonId: 'bai-7',
    question: 'Một bạn học sinh thu khí $SO_2$ vào bình tam giác và đậy miệng bình bằng bông tẩm dung dịch E (để giữ không cho khí $SO_2$ bay ra môi trường). Để hiệu quả nhất, dung dịch E nên là',
    options: [
      { id: 'A', text: 'Giấm ăn.' },
      { id: 'B', text: 'Muối ăn.' },
      { id: 'C', text: 'Nước vôi.' },
      { id: 'D', text: 'Nước máy.' }
    ],
    correctAnswer: 'C',
    explanation: 'Nước vôi trong chứa $Ca(OH)_2$ có tính base sẽ phản ứng hấp thụ triệt để khí acidic oxide $SO_2$: $SO_2 + Ca(OH)_2 \\rightarrow CaSO_3\\downarrow + H_2O$. (Câu 7.15 SBT)',
    difficulty: 'ThongHieu',
    source: 'SBT Hóa học 11 - Bài 7 (Câu 7.15)'
  },
  {
    id: 'c2-b7-q15',
    chapterId: 'chuong-2',
    lessonId: 'bai-7',
    question: 'Cho các ứng dụng sau: (1) sản xuất sulfuric acid; (2) tẩy trắng bột giấy; (3) diệt nấm mốc, thuốc đông y; (4) diệt trùng nước sinh hoạt. Số ứng dụng của khí sulfur dioxide ($SO_2$) là',
    options: [
      { id: 'A', text: '1.' },
      { id: 'B', text: '2.' },
      { id: 'C', text: '3.' },
      { id: 'D', text: '4.' }
    ],
    correctAnswer: 'C',
    explanation: 'Có 3 ứng dụng là (1), (2), (3). Diệt trùng nước sinh hoạt người ta thường dùng chlorine ($Cl_2$) hoặc ozone ($O_3$), không dùng $SO_2$. (Câu 7.18 SBT)',
    difficulty: 'ThongHieu',
    source: 'SBT Hóa học 11 - Bài 7 (Câu 7.18)'
  }
];
