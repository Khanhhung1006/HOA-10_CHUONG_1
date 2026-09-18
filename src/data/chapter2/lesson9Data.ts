import { TheorySectionData, Flashcard, QuizQuestion } from '../../types';
import { lesson4Quizzes } from './lesson4Data';
import { lesson5Quizzes } from './lesson5Data';
import { lesson6Quizzes } from './lesson6Data';
import { lesson7Quizzes } from './lesson7Data';
import { lesson8Quizzes } from './lesson8Data';

export const lesson9Theory: TheorySectionData = {
  id: 'bai-9',
  chapterId: 'chuong-2',
  title: 'Bài 9: Ôn tập chương 2 (Nitrogen – Sulfur)',
  objectives: [
    'Hệ thống hoá toàn bộ kiến thức trọng tâm về đơn chất Nitrogen, hợp chất Ammonia, muối Ammonium, các oxide của Nitrogen và Nitric acid.',
    'Hệ thống hoá kiến thức về đơn chất Sulfur, Sulfur dioxide, Sulfuric acid và các muối Sulfate.',
    'So sánh sự tương đồng và khác biệt về tính chất hoá học, cấu tạo và ứng dụng của các hợp chất nitrogen và sulfur.',
    'Vận dụng giải quyết các bài tập lý thuyết, bài toán trắc nghiệm tổng hợp và bài tập thực tiễn liên quan đến chu trình Nitrogen – Sulfur trong tự nhiên và công nghiệp.'
  ],
  summary: 'Chương 2 bao gồm 2 nguyên tố phi kim quan trọng thuộc nhóm VA (Nitrogen) và nhóm VIA (Sulfur). Nitrogen ($N_2$) có liên kết ba bền vững, $NH_3$ là base Brønsted yếu có tính khử, $HNO_3$ là acid mạnh và oxi hoá mạnh. Sulfur ($S_8$) vừa có tính oxi hoá vừa có tính khử, $SO_2$ là acidic oxide có tính oxi hoá và tính khử, $H_2SO_4$ loãng là acid mạnh còn $H_2SO_4$ đặc có tính oxi hoá mạnh và tính háo nước mãnh liệt.',
  coreKnowledge: [
    {
      heading: 'I. Bảng Hệ thống hoá Kiến thức về Nitrogen và Hợp chất',
      points: [
        'Đơn chất Nitrogen ($N_2$):\n- Cấu hình e: $1s^2 2s^2 2p^3$ (ô 7, chu kì 2, nhóm VA). Số oxi hoá thường gặp: $-3, 0, +1, +2, +3, +4, +5$.\n- Phân tử gồm 2 nguyên tử liên kết với nhau bằng liên kết ba bền vững ($N\\equiv N$, $E_b = 945\\text{ kJ/mol}$).\n- Tính chất: Khá trơ ở nhiệt độ thường; ở nhiệt độ cao thể hiện tính oxi hoá (với $H_2, Mg, Ca$) và tính khử (với $O_2$).',
        'Ammonia ($NH_3$) & Muối Ammonium ($NH_4^+$):\n- Phân tử $NH_3$ có dạng chóp tam giác, còn 1 cặp electron tự do; tạo liên kết hydrogen mạnh với nước nên tan cực kì nhiều trong nước.\n- Tính chất của $NH_3$: Có tính base yếu (làm xanh quỳ tím ẩm, tác dụng acid tạo muối ammonium, tác dụng muối $AlCl_3$ tạo kết tủa $Al(OH)_3$) và tính khử (tác dụng $O_2$).\n- Muối ammonium: Đều dễ tan, là chất điện li mạnh, kém bền nhiệt (bị nhiệt phân), tác dụng với kiềm sinh ra khí $NH_3$ có mùi khai đặc trưng.',
        'Các oxide của Nitrogen ($NO_x$) & Nitric acid ($HNO_3$):\n- Các oxide $NO_x$ ($N_2O, NO, NO_2, N_2O_4$) phát sinh từ nguồn nhiệt, nhiên liệu và tức thời; là tác nhân gây mưa acid và phú dưỡng ao hồ.\n- Nitric acid ($HNO_3$): Phân tử có liên kết cho - nhận $N \\rightarrow O$, số oxi hoá $+5$, là chất lỏng không màu, bốc khói mạnh trong không khí ẩm, có tính acid mạnh và tính oxi hoá rất mạnh (oxi hoá được $Cu, Ag, C,...$).'
      ]
    },
    {
      heading: 'II. Bảng Hệ thống hoá Kiến thức về Sulfur và Hợp chất',
      points: [
        'Đơn chất Sulfur ($S$):\n- Cấu hình e: $1s^2 2s^2 2p^6 3s^2 3p^4$ (ô 16, chu kì 3, nhóm VIA). Số oxi hoá thường gặp: $-2, 0, +4, +6$.\n- Phân tử dạng vòng $S_8$, chất rắn màu vàng, không tan trong nước, tan trong $CS_2$.\n- Tính chất: Thể hiện tính oxi hoá (tác dụng với $Hg$ ở nhiệt độ phòng, tác dụng với $Fe, Al, H_2$ khi đun nóng) và tính khử (tác dụng với $O_2, F_2$).',
        'Sulfur dioxide ($SO_2$):\n- Chất khí không màu, mùi hắc, độc, tan nhiều trong nước.\n- Tính chất: Là acidic oxide, vừa có tính oxi hoá (tác dụng $H_2S$ thu hồi $S$), vừa có tính khử (tác dụng $NO_2, O_2, KMnO_4$). Dùng tẩy trắng bột giấy, mây tre đan; là tác nhân chính gây mưa acid.',
        'Sulfuric acid ($H_2SO_4$) & Muối Sulfate ($SO_4^{2-}$):\n- $H_2SO_4$ loãng có đầy đủ tính chất của acid mạnh.\n- $H_2SO_4$ đặc là chất lỏng sánh, có tính oxi hoá mạnh (khi nóng oxi hoá hầu hết kim loại và phi kim) và tính háo nước mãnh liệt (hoá than đường mía, cellulose).\n- Quy tắc pha loãng: Rót từ từ acid đặc vào nước, không làm ngược lại.\n- Muối sulfate: $BaSO_4$ làm chất cản quang; $CaSO_4 \\cdot 2H_2O$ làm thạch cao bó bột, xi măng. Nhận biết ion $SO_4^{2-}$ bằng cation $Ba^{2+}$ (tạo kết tủa trắng $BaSO_4$ không tan trong acid).'
      ]
    }
  ],
  formulas: [
    {
      name: 'Chu trình Nitrogen trong tự nhiên',
      latex: 'N_2 \\xrightarrow{+O_2, \\text{ sét}} NO \\xrightarrow{+O_2} NO_2 \\xrightarrow{+O_2 + H_2O} HNO_3 \\rightarrow NO_3^-',
      description: 'Chuyển hoá nitrogen khí quyển thành phân đạm nitrate tự nhiên.'
    },
    {
      name: 'Sản xuất Sulfuric Acid theo phương pháp tiếp xúc',
      latex: 'FeS_2 / S \\xrightarrow{+O_2, t^o} SO_2 \\xrightarrow{+O_2, V_2O_5, 450\\;^\\circ\\text{C}} SO_3 \\xrightarrow{+H_2SO_4\\text{ đặc}} H_2SO_4 \\cdot nSO_3 \\xrightarrow{+H_2O} H_2SO_4',
      description: 'Ba giai đoạn sản xuất $H_2SO_4$ trong công nghiệp.'
    }
  ],
  keyConcepts: [
    {
      term: 'Tính oxi hoá và khử của Nitrogen và Sulfur',
      definition: 'Cả 2 nguyên tố đều có các số oxi hoá trung gian ($0$ ở đơn chất, $+4$ ở $SO_2$, $-3$ đến $+5$ ở các hợp chất N) nên đều có khả năng vừa nhận vừa nhường electron tuỳ theo đối tác phản ứng.'
    },
    {
      term: 'Mưa acid và Ô nhiễm môi trường',
      definition: 'Khí $SO_2$ và các oxide $NO_x$ hoà tan trong nước mưa sinh ra các dung dịch acid loãng ($H_2SO_4, HNO_3$) có $\\text{pH} < 5,6$, làm suy thoái đất trồng, ăn mòn công trình đá vôi và huỷ hoại sinh vật thuỷ sinh.'
    }
  ],
  examples: [
    {
      title: 'Ví dụ 1: Phân biệt các chất khí $N_2, NH_3, SO_2$',
      content: 'Trình bày phương pháp hoá học đơn giản để nhận biết 3 bình khí mất nhãn riêng biệt: $N_2$, $NH_3$, $SO_2$.',
      solution: '1. Dùng mẩu giấy quỳ tím ẩm đưa vào miệng từng bình khí:\n- Bình làm quỳ tím ẩm hoá xanh là khí $NH_3$ (tính base yếu).\n- Bình làm quỳ tím ẩm hoá đỏ là khí $SO_2$ (acidic oxide).\n- Bình không làm đổi màu quỳ tím ẩm là khí $N_2$ (khí trơ không màu).'
    },
    {
      title: 'Ví dụ 2: Nhận biết 4 dung dịch muối và acid trong chương 2',
      content: 'Nhận biết 4 lọ dung dịch mất nhãn: $HCl$, $H_2SO_4$, $(NH_4)_2SO_4$, $Na_2SO_4$.',
      solution: '1. Dùng quỳ tím: 2 mẫu làm quỳ tím hoá đỏ là $HCl, H_2SO_4$; 2 mẫu không làm đổi màu (hoặc làm quỳ tím hơi đỏ rất nhạt do ion ammonium) là $(NH_4)_2SO_4, Na_2SO_4$.\n2. Ở nhóm acid ($HCl, H_2SO_4$): nhỏ vài giọt dung dịch $BaCl_2$, mẫu có kết tủa trắng không tan là $H_2SO_4$, mẫu không hiện tượng là $HCl$.\n3. Ở nhóm muối: nhỏ dung dịch $NaOH$ đun nhẹ, mẫu có khí mùi khai ($NH_3$) thoát ra làm xanh quỳ tím ẩm là $(NH_4)_2SO_4$, mẫu không hiện tượng là $Na_2SO_4$.'
    }
  ],
  commonMistakes: [
    {
      mistake: 'Nhầm lẫn dung dịch làm mất màu nước bromine giữa $SO_2$ và $CO_2$.',
      correction: 'Khí $SO_2$ có tính khử mạnh làm mất màu nước bromine ($SO_2 + Br_2 + 2H_2O \\rightarrow 2HBr + H_2SO_4$), trong khi $CO_2$ không làm mất màu nước bromine.',
      why: 'Carbon trong $CO_2$ đã ở mức oxi hoá cao nhất ($+4$) không bị oxi hoá tiếp bởi bromine.'
    }
  ],
  memoryTips: [
    'Nhớ cặp đôi phi kim: Nitrogen (liên kết 3 trơ nhiệt) & Sulfur (vòng 8 rắn vàng).',
    'Nhớ cặp acid mạnh: $HNO_3$ (bốc khói, oxi hoá Cu ra NO/NO2) & $H_2SO_4$ (sánh dầu, háo nước than hoá).',
    'Nhận biết ion: $NH_4^+ + OH^- \\xrightarrow{t^o} NH_3\\uparrow$ (mùi khai) & $Ba^{2+} + SO_4^{2-} \\rightarrow BaSO_4\\downarrow$ (kết tủa trắng).'
  ],
  glossary: [
    { term: 'Chương 2: Nitrogen – Sulfur', meaning: 'Chương nghiên cứu các đơn chất và hợp chất chứa nitrogen và sulfur trong chương trình Hoá học 11.' }
  ],
  reviewChecklist: [
    'Hệ thống hoá toàn bộ tính chất vật lí và hoá học của $N_2, NH_3, HNO_3, S, SO_2, H_2SO_4$.',
    'Viết thành thạo các phương trình phản ứng minh hoạ tính oxi hoá - khử của các hợp chất.',
    'Nắm vững phương pháp nhận biết các ion $NH_4^+, NO_3^-, SO_4^{2-}$.',
    'Hoàn thành đề thi tổng hợp trắc nghiệm cuối Chương 2.'
  ]
};

export const lesson9Flashcards: Flashcard[] = [
  {
    id: 'fc-9-1',
    chapterId: 'chuong-2',
    lessonId: 'bai-9',
    category: 'nitrogen',
    front: 'Tỉ lệ phần trăm thể tích của khí nitrogen trong khí quyển Trái Đất là bao nhiêu?',
    back: 'Chiếm **78%** (hoặc 78,1% về thể tích).'
  },
  {
    id: 'fc-9-2',
    chapterId: 'chuong-2',
    lessonId: 'bai-9',
    category: 'thuc-tien',
    front: 'Chất khí nào sau đây được sử dụng làm chất làm lạnh phổ biến trong các hệ thống làm lạnh công nghiệp?',
    back: 'Khí **$NH_3$ (ammonia)**.'
  },
  {
    id: 'fc-9-3',
    chapterId: 'chuong-2',
    lessonId: 'bai-9',
    category: 'thuc-tien',
    front: 'Mưa acid là hiện tượng nước mưa có giá trị pH bằng bao nhiêu?',
    back: 'Nước mưa có **$\\text{pH} < 5,6$**.'
  },
  {
    id: 'fc-9-4',
    chapterId: 'chuong-2',
    lessonId: 'bai-9',
    category: 'nitrogen',
    front: 'Tên gọi của hợp chất khí $NO$ sinh ra khi đánh tia lửa điện trong động cơ là gì?',
    back: 'Tên gọi là **nitrogen monoxide**.'
  },
  {
    id: 'fc-9-5',
    chapterId: 'chuong-2',
    lessonId: 'bai-9',
    category: 'sulfur',
    front: 'Oxide khí có mùi hắc, độc hại, dùng làm chất tẩy trắng bột gỗ và sản xuất sulfuric acid có công thức là gì?',
    back: 'Công thức là **$SO_2$ (sulfur dioxide)**.'
  },
  {
    id: 'fc-9-6',
    chapterId: 'chuong-2',
    lessonId: 'bai-9',
    category: 'sulfur',
    front: 'Nhỏ 1 giọt dung dịch acid đặc nào lên tờ giấy trắng thì tờ giấy bị hoá đen ở chỗ tiếp xúc?',
    back: 'Dung dịch **$H_2SO_4$ đặc** (do tính háo nước than hoá cellulose).'
  },
  {
    id: 'fc-9-7',
    chapterId: 'chuong-2',
    lessonId: 'bai-9',
    category: 'nitrogen',
    front: 'Dung dịch loãng của acid nào sau đây có khả năng hoà tan được lá bạc ($Ag$)?',
    back: 'Dung dịch **$HNO_3$ (nitric acid)**:\n$$3Ag + 4HNO_3 \\rightarrow 3AgNO_3 + NO\\uparrow + 2H_2O$$'
  },
  {
    id: 'fc-9-8',
    chapterId: 'chuong-2',
    lessonId: 'bai-9',
    category: 'sulfur',
    front: 'Trong công nghiệp, quặng pyrite sắt ($FeS_2$) được dùng làm nguyên liệu để làm gì?',
    back: 'Dùng để **sản xuất sulfuric acid ($H_2SO_4$)**.'
  },
  {
    id: 'fc-9-9',
    chapterId: 'chuong-2',
    lessonId: 'bai-9',
    category: 'nitrogen',
    front: 'Khí nào sau đây khi tan trong nước thu được dung dịch có khả năng làm phenolphthalein chuyển sang màu hồng?',
    back: 'Khí **$NH_3$ (ammonia)**.'
  },
  {
    id: 'fc-9-10',
    chapterId: 'chuong-2',
    lessonId: 'bai-9',
    category: 'nitrogen',
    front: 'Muối nào khi nung nóng trên ngọn lửa đèn cồn sau một thời gian thấy không còn chất rắn nào ở đáy ống nghiệm?',
    back: 'Muối **$NH_4Cl$** (nhiệt phân hoàn toàn thành 2 khí $NH_3$ và $HCl$).'
  },
  {
    id: 'fc-9-11',
    chapterId: 'chuong-2',
    lessonId: 'bai-9',
    category: 'nitrogen',
    front: 'Trong phản ứng giữa khí $NH_3$ và khí $HCl$ tạo thành khói trắng $NH_4Cl$, $NH_3$ đóng vai trò là gì?',
    back: 'Đóng vai trò là **base** (nhận proton $H^+$).'
  },
  {
    id: 'fc-9-12',
    chapterId: 'chuong-2',
    lessonId: 'bai-9',
    category: 'nitrogen',
    front: 'Số acid ở dạng đậm đặc trong số: $HCl, HNO_3, H_3PO_4, H_2SO_4$ vừa có tính acid mạnh, vừa có tính oxi hoá mạnh là bao nhiêu?',
    back: 'Có **2 acid** là **$HNO_3$** và **$H_2SO_4$**.'
  },
  {
    id: 'fc-9-13',
    chapterId: 'chuong-2',
    lessonId: 'bai-9',
    category: 'sulfur',
    front: 'Cho dung dịch $H_2SO_4$ loãng tác dụng với: $Mg, NaHCO_3, BaCl_2, CaCO_3$. Thí nghiệm nào xảy ra phản ứng oxi hoá - khử?',
    back: 'Thí nghiệm tác dụng với kim loại **$Mg$**:\n$$Mg + H_2SO_4 \\rightarrow MgSO_4 + H_2\\uparrow$$'
  },
  {
    id: 'fc-9-14',
    chapterId: 'chuong-2',
    lessonId: 'bai-9',
    category: 'thuc-tien',
    front: 'Số chất khí trong số: $H_2S, NO, NO_2, SO_2$ gây ô nhiễm môi trường khi phát thải vào không khí là bao nhiêu?',
    back: 'Cả **4 chất khí** ($H_2S, NO, NO_2, SO_2$) đều là khí gây ô nhiễm môi trường.'
  },
  {
    id: 'fc-9-15',
    chapterId: 'chuong-2',
    lessonId: 'bai-9',
    category: 'sulfur',
    front: 'Xét cân bằng: $2SO_2(g) + O_2(g) \\rightleftharpoons 2SO_3(g) \\quad \\Delta H < 0$. Khi tăng nhiệt độ, cân bằng chuyển dịch theo chiều nào?',
    back: 'Chuyển dịch theo **chiều nghịch** (chiều phản ứng thu nhiệt).'
  }
];

export const lesson9Quizzes: QuizQuestion[] = [
  {
    id: 'c2-b9-q1',
    chapterId: 'chuong-2',
    lessonId: 'bai-9',
    question: 'Trong khí quyển Trái Đất, phần trăm thể tích khí nitrogen chiếm là',
    options: [
      { id: 'A', text: '21%.' },
      { id: 'B', text: '1%.' },
      { id: 'C', text: '78%.' },
      { id: 'D', text: '28%.' }
    ],
    correctAnswer: 'C',
    explanation: 'Khí nitrogen chiếm khoảng 78% (78,1%) thể tích của khí quyển Trái Đất. (Câu 9.1 SBT)',
    difficulty: 'NhanBiet',
    source: 'SBT Hóa học 11 - Bài 9 (Câu 9.1)'
  },
  {
    id: 'c2-b9-q2',
    chapterId: 'chuong-2',
    lessonId: 'bai-9',
    question: 'Chất nào sau đây được sử dụng là chất làm lạnh trong các hệ thống làm lạnh công nghiệp?',
    options: [
      { id: 'A', text: '$N_2$.' },
      { id: 'B', text: '$NH_3$.' },
      { id: 'C', text: '$SO_2$.' },
      { id: 'D', text: '$S$.' }
    ],
    correctAnswer: 'B',
    explanation: '$NH_3$ dễ hoá lỏng và có nhiệt hoá hơi lớn nên được ứng dụng làm chất làm lạnh công nghiệp. (Câu 9.2 SBT)',
    difficulty: 'NhanBiet',
    source: 'SBT Hóa học 11 - Bài 9 (Câu 9.2)'
  },
  {
    id: 'c2-b9-q3',
    chapterId: 'chuong-2',
    lessonId: 'bai-9',
    question: 'Mưa acid là một thảm hoạ thiên nhiên toàn cầu, ảnh hưởng đến sự sống của các sinh vật. Mưa acid là hiện tượng nước mưa có pH',
    options: [
      { id: 'A', text: '$< 5,6$.' },
      { id: 'B', text: '$= 7$.' },
      { id: 'C', text: '$6 - 7$.' },
      { id: 'D', text: '$> 8$.' }
    ],
    correctAnswer: 'A',
    explanation: 'Hiện tượng nước mưa có $\\text{pH} < 5,6$ được định nghĩa là mưa acid. (Câu 9.3 SBT)',
    difficulty: 'NhanBiet',
    source: 'SBT Hóa học 11 - Bài 9 (Câu 9.3)'
  },
  {
    id: 'c2-b9-q4',
    chapterId: 'chuong-2',
    lessonId: 'bai-9',
    question: 'Quá trình đốt cháy hỗn hợp hơi nhiên liệu và không khí trong động cơ khi đánh tia lửa điện sinh ra khí NO. Tên gọi của NO là',
    options: [
      { id: 'A', text: 'Ammonia.' },
      { id: 'B', text: 'Nitrogen dioxide.' },
      { id: 'C', text: 'Nitrogen monoxide.' },
      { id: 'D', text: 'Nitrogen.' }
    ],
    correctAnswer: 'C',
    explanation: '$NO$ có tên gọi là nitrogen monoxide. (Câu 9.4 SBT)',
    difficulty: 'NhanBiet',
    source: 'SBT Hóa học 11 - Bài 9 (Câu 9.4)'
  },
  {
    id: 'c2-b9-q5',
    chapterId: 'chuong-2',
    lessonId: 'bai-9',
    question: 'Oxide X là chất khí, mùi hắc, độc (gây ho, viêm đường hô hấp). Trong công nghiệp, X được dùng làm chất tẩy trắng bột gỗ, sản xuất sulfuric acid. Công thức của X là',
    options: [
      { id: 'A', text: '$CO_2$.' },
      { id: 'B', text: '$H_2S$.' },
      { id: 'C', text: '$SO_2$.' },
      { id: 'D', text: '$P_2O_5$.' }
    ],
    correctAnswer: 'C',
    explanation: 'Khí $SO_2$ có mùi hắc độc, dùng để tẩy trắng bột gỗ và sản xuất $H_2SO_4$. (Câu 9.5 SBT)',
    difficulty: 'NhanBiet',
    source: 'SBT Hóa học 11 - Bài 9 (Câu 9.5)'
  },
  {
    id: 'c2-b9-q6',
    chapterId: 'chuong-2',
    lessonId: 'bai-9',
    question: 'Nhỏ 1 giọt dung dịch acid đặc nào sau đây lên tờ giấy trắng thì tờ giấy bị hoá đen ở chỗ tiếp xúc với acid?',
    options: [
      { id: 'A', text: '$HBr$.' },
      { id: 'B', text: '$HCl$.' },
      { id: 'C', text: '$HNO_3$.' },
      { id: 'D', text: '$H_2SO_4$.' }
    ],
    correctAnswer: 'D',
    explanation: 'Dung dịch $H_2SO_4$ đặc có tính háo nước cực mạnh, than hoá hợp chất cellulose trong giấy thành carbon ($C$) màu đen. (Câu 9.6 SBT)',
    difficulty: 'NhanBiet',
    source: 'SBT Hóa học 11 - Bài 9 (Câu 9.6)'
  },
  {
    id: 'c2-b9-q7',
    chapterId: 'chuong-2',
    lessonId: 'bai-9',
    question: 'Dung dịch loãng của acid nào sau đây hoà tan được lá bạc ($Ag$), tạo thành muối tương ứng?',
    options: [
      { id: 'A', text: '$HNO_3$.' },
      { id: 'B', text: '$HCl$.' },
      { id: 'C', text: '$H_3PO_4$.' },
      { id: 'D', text: '$H_2SO_4$.' }
    ],
    correctAnswer: 'A',
    explanation: '$HNO_3$ loãng oxi hoá được kim loại đứng sau H như bạc: $3Ag + 4HNO_3 \\rightarrow 3AgNO_3 + NO\\uparrow + 2H_2O$. (Câu 9.7 SBT)',
    difficulty: 'NhanBiet',
    source: 'SBT Hóa học 11 - Bài 9 (Câu 9.7)'
  },
  {
    id: 'c2-b9-q8',
    chapterId: 'chuong-2',
    lessonId: 'bai-9',
    question: 'Trong công nghiệp, quặng pyrite sắt ($FeS_2$) được dùng làm nguyên liệu để',
    options: [
      { id: 'A', text: 'luyện gang.' },
      { id: 'B', text: 'sản xuất sulfuric acid.' },
      { id: 'C', text: 'chế tạo nam châm điện.' },
      { id: 'D', text: 'tổng hợp dược phẩm.' }
    ],
    correctAnswer: 'B',
    explanation: 'Đốt cháy quặng pyrite sắt ($FeS_2$) để cung cấp nguồn $SO_2$ sản xuất sulfuric acid. (Câu 9.8 SBT)',
    difficulty: 'NhanBiet',
    source: 'SBT Hóa học 11 - Bài 9 (Câu 9.8)'
  },
  {
    id: 'c2-b9-q9',
    chapterId: 'chuong-2',
    lessonId: 'bai-9',
    question: 'Khí nào sau đây tan trong nước thu được dung dịch có khả năng làm phenolphthalein chuyển màu hồng?',
    options: [
      { id: 'A', text: 'Nitrogen.' },
      { id: 'B', text: 'Ammonia.' },
      { id: 'C', text: 'Sulfur dioxide.' },
      { id: 'D', text: 'Hydrogen chloride.' }
    ],
    correctAnswer: 'B',
    explanation: 'Ammonia tan trong nước tạo môi trường base yếu ($NH_3 + H_2O \\rightleftharpoons NH_4^+ + OH^-$) làm hồng phenolphthalein. (Câu 9.9 SBT)',
    difficulty: 'NhanBiet',
    source: 'SBT Hóa học 11 - Bài 9 (Câu 9.9)'
  },
  {
    id: 'c2-b9-q10',
    chapterId: 'chuong-2',
    lessonId: 'bai-9',
    question: 'Cho một ít tinh thể muối X vào ống nghiệm và đun nóng trên ngọn lửa đèn cồn, sau một thời gian thấy không còn chất rắn nào ở đáy ống nghiệm. Muối X có thể là muối nào sau đây?',
    options: [
      { id: 'A', text: '$NaCl$.' },
      { id: 'B', text: '$CaCO_3$.' },
      { id: 'C', text: '$KClO_3$.' },
      { id: 'D', text: '$NH_4Cl$.' }
    ],
    correctAnswer: 'D',
    explanation: 'Muối $NH_4Cl$ bị nhiệt phân hoàn toàn thành 2 chất khí: $NH_4Cl(s) \\xrightarrow{t^o} NH_3(g) + HCl(g)$. (Câu 9.12 SBT)',
    difficulty: 'ThongHieu',
    source: 'SBT Hóa học 11 - Bài 9 (Câu 9.12)'
  },
  {
    id: 'c2-b9-q11',
    chapterId: 'chuong-2',
    lessonId: 'bai-9',
    question: 'Cho các chất sau: $H_2SO_4, SO_2, N_2, NH_3$. Số chất tan tốt trong nước ở điều kiện thường là',
    options: [
      { id: 'A', text: '4.' },
      { id: 'B', text: '1.' },
      { id: 'C', text: '3.' },
      { id: 'D', text: '2.' }
    ],
    correctAnswer: 'C',
    explanation: 'Có 3 chất tan rất tốt trong nước là $H_2SO_4$ (tan vô hạn), $SO_2$ (40L/L nước) và $NH_3$ (700L/L nước). Khí $N_2$ rất ít tan. (Câu 9.13 SBT)',
    difficulty: 'ThongHieu',
    source: 'SBT Hóa học 11 - Bài 9 (Câu 9.13)'
  },
  {
    id: 'c2-b9-q12',
    chapterId: 'chuong-2',
    lessonId: 'bai-9',
    question: 'Trong phản ứng giữa khí ammonia và khí hydrogen chloride tạo thành ammonium chloride ở dạng khói trắng, ammonia đóng vai trò là',
    options: [
      { id: 'A', text: 'acid.' },
      { id: 'B', text: 'base.' },
      { id: 'C', text: 'chất oxi hoá.' },
      { id: 'D', text: 'chất khử.' }
    ],
    correctAnswer: 'B',
    explanation: 'Phản ứng $NH_3 + HCl \\rightarrow NH_4Cl$, $NH_3$ nhận proton $H^+$ nên là base theo Brønsted – Lowry. (Câu 9.14 SBT)',
    difficulty: 'ThongHieu',
    source: 'SBT Hóa học 11 - Bài 9 (Câu 9.14)'
  },
  {
    id: 'c2-b9-q13',
    chapterId: 'chuong-2',
    lessonId: 'bai-9',
    question: 'Cho các acid ở dạng đậm đặc sau: $HCl, HNO_3, H_3PO_4, H_2SO_4$. Số acid vừa có tính acid mạnh, vừa có tính oxi hoá mạnh là',
    options: [
      { id: 'A', text: '1.' },
      { id: 'B', text: '4.' },
      { id: 'C', text: '3.' },
      { id: 'D', text: '2.' }
    ],
    correctAnswer: 'D',
    explanation: 'Có 2 acid là $HNO_3$ và $H_2SO_4$ đặc. (Câu 9.15 SBT)',
    difficulty: 'ThongHieu',
    source: 'SBT Hóa học 11 - Bài 9 (Câu 9.15)'
  },
  {
    id: 'c2-b9-q14',
    chapterId: 'chuong-2',
    lessonId: 'bai-9',
    question: 'Tiến hành các thí nghiệm cho dung dịch $H_2SO_4$ loãng lần lượt tác dụng với: $Mg, NaHCO_3, BaCl_2, CaCO_3$. Số thí nghiệm xảy ra phản ứng oxi hoá – khử là',
    options: [
      { id: 'A', text: '1.' },
      { id: 'B', text: '2.' },
      { id: 'C', text: '3.' },
      { id: 'D', text: '4.' }
    ],
    correctAnswer: 'A',
    explanation: 'Chỉ có 1 phản ứng oxi hoá - khử là tác dụng với kim loại $Mg$: $Mg + H_2SO_4 \\rightarrow MgSO_4 + H_2\\uparrow$. Các phản ứng còn lại là phản ứng trao đổi ion. (Câu 9.16 SBT)',
    difficulty: 'ThongHieu',
    source: 'SBT Hóa học 11 - Bài 9 (Câu 9.16)'
  },
  {
    id: 'c2-b9-q15',
    chapterId: 'chuong-2',
    lessonId: 'bai-9',
    question: 'Cho các chất khí sau: $H_2S, NO, NO_2, SO_2$. Số khí gây ô nhiễm môi trường khi phát thải vào không khí là',
    options: [
      { id: 'A', text: '1.' },
      { id: 'B', text: '4.' },
      { id: 'C', text: '3.' },
      { id: 'D', text: '2.' }
    ],
    correctAnswer: 'B',
    explanation: 'Cả 4 chất khí $H_2S, NO, NO_2, SO_2$ đều là các khí độc hại gây ô nhiễm môi trường không khí. (Câu 9.17 SBT)',
    difficulty: 'ThongHieu',
    source: 'SBT Hóa học 11 - Bài 9 (Câu 9.17)'
  },
  {
    id: 'c2-b9-q16',
    chapterId: 'chuong-2',
    lessonId: 'bai-9',
    question: 'Cho cân bằng hoá học sau: $2SO_2(g) + O_2(g) \\rightleftharpoons 2SO_3(g) \\quad \\Delta H < 0$. Khi tăng nhiệt độ, phát biểu nào sau đây đúng?',
    options: [
      { id: 'A', text: 'Tổng số mol khí trong hệ giảm.' },
      { id: 'B', text: 'Hiệu suất phản ứng tăng.' },
      { id: 'C', text: 'Cân bằng chuyển dịch theo chiều nghịch.' },
      { id: 'D', text: 'Nồng độ khí sản phẩm tăng.' }
    ],
    correctAnswer: 'C',
    explanation: 'Vì phản ứng thuận toả nhiệt ($\\Delta H < 0$), nên khi tăng nhiệt độ cân bằng sẽ chuyển dịch theo chiều nghịch (chiều thu nhiệt) làm giảm hiệu suất. (Câu 9.18 SBT)',
    difficulty: 'ThongHieu',
    source: 'SBT Hóa học 11 - Bài 9 (Câu 9.18)'
  }
];

export const finalChapter2ExamQuizzes: QuizQuestion[] = [
  ...lesson4Quizzes.map(q => ({ ...q, lessonId: 'final-exam-c2' as const })),
  ...lesson5Quizzes.map(q => ({ ...q, lessonId: 'final-exam-c2' as const })),
  ...lesson6Quizzes.map(q => ({ ...q, lessonId: 'final-exam-c2' as const })),
  ...lesson7Quizzes.map(q => ({ ...q, lessonId: 'final-exam-c2' as const })),
  ...lesson8Quizzes.map(q => ({ ...q, lessonId: 'final-exam-c2' as const })),
  ...lesson9Quizzes.map(q => ({ ...q, lessonId: 'final-exam-c2' as const }))
];
