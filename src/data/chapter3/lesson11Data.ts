import { TheorySectionData, Flashcard, QuizQuestion } from '../../types';

export const lesson11Theory: TheorySectionData = {
  id: 'bai-11',
  chapterId: 'chuong-3',
  title: 'Bài 11: Phương pháp tách biệt và tinh chế hợp chất hữu cơ',
  objectives: [
    'Trình bày được nguyên tắc và cách thức tiến hành các phương pháp tách biệt và tinh chế hợp chất hữu cơ: chưng cất, chiết, kết tinh và sơ lược về sắc kí cột.',
    'Thực hiện được các thí nghiệm về chưng cất thường, chiết.',
    'Vận dụng được các phương pháp tách biệt và tinh chế để giải quyết một số vấn đề trong thực tiễn cuộc sống.'
  ],
  summary: 'Tách biệt và tinh chế hợp chất hữu cơ dựa trên sự khác nhau về tính chất vật lí giữa các chất trong hỗn hợp: nhiệt độ sôi (chưng cất), độ tan trong các dung môi (chiết, kết tinh) hoặc khả năng hấp phụ (sắc kí cột).',
  coreKnowledge: [
    {
      heading: '1. Phương pháp Chưng cất (Distillation)',
      points: [
        'Nguyên tắc: Dựa vào sự khác nhau về nhiệt độ sôi của các chất trong hỗn hợp ở một áp suất nhất định.',
        'Cách tiến hành: Đun nóng hỗn hợp lỏng, chất có nhiệt độ sôi thấp hơn sẽ chuyển thành hơi trước. Hơi đi qua ống sinh hàn được làm lạnh ngưng tụ thành chất lỏng thu vào bình hứng.',
        'Các biến thể: Chưng cất thường (tách các chất có nhiệt độ sôi khác nhau nhiều), Chưng cất phân đoạn (tách các chất có nhiệt độ sôi gần nhau như phân đoạn dầu mỏ), Chưng cất lôi cuốn hơi nước (tách các chất không tan trong nước, có nhiệt độ sôi cao như tinh dầu).',
        'Thực tiễn: Nấu rượu thủ công (tách ethanol khỏi bã rượu và nước), chưng cất tinh dầu sả, tràm, chưng cất dầu mỏ.'
      ]
    },
    {
      heading: '2. Phương pháp Chiết (Extraction)',
      points: [
        'Nguyên tắc: Dựa vào sự hoá tan khác nhau của các chất trong hai môi trường không trộn lẫn vào nhau.',
        'Chiết lỏng - lỏng: Dùng để tách các chất hữu cơ hoà tan trong chất lỏng. Sử dụng phễu chiết và dung môi thích hợp (như hexane, ether) có khả năng hoà tan chất cần chiết tốt hơn và không trộn lẫn với dung dịch ban đầu.',
        'Chiết lỏng - rắn: Dùng dung môi lỏng để hoà tan chất hữu cơ ra khỏi hỗn hợp chất rắn (Ví dụ: ngâm rượu thuốc, ngâm trà, ngâm ngâm thảo dược).',
        'Thực tiễn: Chiết $\\beta$-carotene từ nước ép cà rốt bằng hexane; giã lá cây chàm cho vào nước thu chất màu nhuộm vải.'
      ]
    },
    {
      heading: '3. Phương pháp Kết tinh (Crystallization)',
      points: [
        'Nguyên tắc: Dựa vào độ tan khác nhau và sự thay đổi độ tan của các chất rắn theo nhiệt độ.',
        'Cách tiến hành: Hoà tan chất rắn có lẫn tạp chất vào dung môi ở nhiệt độ cao để tạo dung dịch bão hoà. Lọc nóng loại bỏ tạp chất không tan. Để nguội dung dịch cho chất cần tinh chế kết tinh lại, lọc thu được chất rắn tinh khiết.',
        'Thực tiễn: Tinh chế đường đỏ/đường vàng thành đường trắng (dùng than hoạt tính hấp phụ màu rồi cô bớt nước cho kết tinh); làm đường phèn, đường cát từ nước mía.'
      ]
    },
    {
      heading: '4. Phương pháp Sắc kí cột (Column Chromatography)',
      points: [
        'Nguyên tắc: Dựa vào sự phân bố khác nhau của các chất giữa pha động (dung môi chảy qua) và pha tĩnh (chất hấp phụ rắn có diện tích bề mặt lớn như silica gel, aluminium oxide).',
        'Ứng dụng: Dùng để tách biệt và tinh chế các hỗn hợp chất hữu cơ có hàm lượng nhỏ và khó tách biệt bằng các phương pháp khác.'
      ]
    }
  ],
  formulas: [],
  keyConcepts: [
    {
      term: 'Chưng cất',
      definition: 'Phương pháp tách chất lỏng dựa vào sự khác nhau về nhiệt độ sôi.'
    },
    {
      term: 'Chiết',
      definition: 'Phương pháp tách chất dựa vào sự phân bố khác nhau của chất trong hai môi trường không trộn lẫn.'
    },
    {
      term: 'Kết tinh',
      definition: 'Phương pháp tinh chế chất rắn dựa vào sự thay đổi độ tan theo nhiệt độ.'
    },
    {
      term: 'Sắc kí cột',
      definition: 'Phương pháp tách các chất dựa trên sự phân bố khác nhau giữa pha động và pha tĩnh.'
    }
  ],
  examples: [
    {
      title: 'Ví dụ 1: Nấu rượu gạo thủ công',
      content: 'Trong quá trình nấu rượu gạo thủ công, sau khi ủ men người ta thu được hỗn hợp gồm nước, ethanol và bã rượu. Hãy cho biết người ta dùng phương pháp nào để thu lấy rượu?',
      solution: 'Người ta dùng phương pháp chưng cất. Vì ethanol có nhiệt độ sôi ($78,3\ ^o C$) thấp hơn nước ($100\ ^o C$), khi đun nóng ethanol sẽ bay hơi trước, ngưng tụ qua thùng nước lạnh thu được dung dịch rượu.'
    },
    {
      title: 'Ví dụ 2: Tách $\\beta$-carotene từ nước ép cà rốt',
      content: 'Cho $20\ mL$ nước ép cà rốt vào phễu chiết, thêm tiếp $20\ mL$ hexane rồi lắc đều 2 phút. Lớp chất lỏng nào sẽ tách ra ở trên?',
      solution: 'Hexane không tan trong nước và có khối lượng riêng nhẹ hơn nước ($D \\approx 0,66\ g/mL$) nên dung dịch hexane chứa $\\beta$-carotene hoà tan sẽ tách thành lớp màu cam nổi lên phía trên. Nước nằm ở lớp dưới.'
    }
  ],
  commonMistakes: [
    {
      mistake: 'Lầm tưởng chiết lỏng - lỏng dùng dung môi nào cũng được.',
      correction: 'Dung môi chiết bắt buộc phải KHÔNG TRỘN LẪN với dung dịch ban đầu và hoà tan chất cần chiết tốt hơn hẳn.',
      why: 'Nếu dung môi trộn lẫn (như ethanol với nước) thì không thể phân thành 2 lớp để tách bằng phễu chiết.'
    }
  ],
  memoryTips: [
    'Chưng cất = Nhiệt độ sôi.',
    'Chiết = Độ tan trong 2 dung môi không tan vào nhau (dùng phễu chiết).',
    'Kết tinh = Tinh chế chất rắn theo nhiệt độ.',
    'Sắc kí = Pha động & Pha tĩnh hấp phụ.'
  ],
  glossary: [
    {
      term: 'Phễu chiết',
      meaning: 'Dụng cụ thuỷ tinh có khoá xả dùng để tách hai lớp chất lỏng không trộn lẫn.'
    },
    {
      term: 'Pha tĩnh',
      meaning: 'Chất rắn hấp phụ cố định trong cột sắc kí (như silica gel).'
    }
  ],
  reviewChecklist: [
    'Phân biệt được nguyên tắc của 4 phương pháp: chưng cất, chiết, kết tinh, sắc kí cột.',
    'Giải thích được hiện tượng nấu rượu, chiết tinh dầu, ngâm rượu thuốc trong thực tế.',
    'Nêu được chức năng của đá bọt trong thí nghiệm chưng cất (giúp chất lỏng sôi đều, tránh trào bùng).'
  ]
};

export const lesson11Flashcards: Flashcard[] = [
  {
    id: 'fc-11-1',
    lessonId: 'bai-11',
    category: 'tinh-che',
    front: 'Phương pháp chưng cất dựa trên nguyên tắc nào?',
    back: 'Dựa trên sự khác nhau về nhiệt độ sôi của các chất trong hỗn hợp ở một áp suất nhất định.'
  },
  {
    id: 'fc-11-2',
    lessonId: 'bai-11',
    category: 'tinh-che',
    front: 'Trong quá trình nấu rượu dân gian, rượu được tách bằng phương pháp nào?',
    back: 'Phương pháp chưng cất (chưng cất thường).'
  },
  {
    id: 'fc-11-3',
    lessonId: 'bai-11',
    category: 'tinh-che',
    front: 'Phương pháp chiết dựa trên nguyên tắc nào?',
    back: 'Dựa vào sự hoà tan khác nhau của các chất trong hai môi trường không trộn lẫn vào nhau.'
  },
  {
    id: 'fc-11-4',
    lessonId: 'bai-11',
    category: 'tinh-che',
    front: 'Dụng cụ đặc trưng dùng trong phương pháp chiết lỏng - lỏng là gì?',
    back: 'Phễu chiết.'
  },
  {
    id: 'fc-11-5',
    lessonId: 'bai-11',
    category: 'tinh-che',
    front: 'Ngâm rượu thuốc hoặc pha trà thuộc loại chiết nào?',
    back: 'Chiết lỏng - rắn.'
  },
  {
    id: 'fc-11-6',
    lessonId: 'bai-11',
    category: 'tinh-che',
    front: 'Phương pháp kết tinh dựa trên nguyên tắc nào?',
    back: 'Dựa vào độ tan khác nhau và sự thay đổi độ tan của chất rắn theo nhiệt độ.'
  },
  {
    id: 'fc-11-7',
    lessonId: 'bai-11',
    category: 'tinh-che',
    front: 'Phương pháp nào thường dùng để tinh chế đường thô thành đường trắng?',
    back: 'Phương pháp kết tinh (kết hợp tẩy màu bằng than hoạt tính).'
  },
  {
    id: 'fc-11-8',
    lessonId: 'bai-11',
    category: 'tinh-che',
    front: 'Nguyên tắc của phương pháp sắc kí cột?',
    back: 'Dựa trên sự phân bố khác nhau của các chất giữa pha động và pha tĩnh.'
  },
  {
    id: 'fc-11-9',
    lessonId: 'bai-11',
    category: 'tinh-che',
    front: 'Đá bọt thêm vào bình cầu khi chưng cất có tác dụng gì?',
    back: 'Giúp chất lỏng sôi đều và tránh hiện tượng sôi trào bùng đột ngột.'
  },
  {
    id: 'fc-11-10',
    lessonId: 'bai-11',
    category: 'tinh-che',
    front: 'Nhiệt độ sôi của ethanol so với nước như thế nào?',
    back: 'Ethanol ($78,3\ ^o C$) có nhiệt độ sôi thấp hơn nước ($100\ ^o C$).'
  },
  {
    id: 'fc-11-11',
    lessonId: 'bai-11',
    category: 'tinh-che',
    front: 'Để tách tinh dầu sả ra khỏi hỗn hợp với nước, người ta hay dùng phương pháp nào?',
    back: 'Chưng cất lôi cuốn hơi nước rồi dùng phễu chiết.'
  },
  {
    id: 'fc-11-12',
    lessonId: 'bai-11',
    category: 'tinh-che',
    front: 'Pha tĩnh trong sắc kí cột thường là chất gì?',
    back: 'Chất rắn hấp phụ như bột silica gel hoặc aluminium oxide.'
  },
  {
    id: 'fc-11-13',
    lessonId: 'bai-11',
    category: 'tinh-che',
    front: 'Khi tách hỗn hợp gồm dầu ăn và nước, dùng phương pháp nào đơn giản nhất?',
    back: 'Chiết lỏng - lỏng bằng phễu chiết (dầu ăn nổi lên trên).'
  },
  {
    id: 'fc-11-14',
    lessonId: 'bai-11',
    category: 'tinh-che',
    front: 'Thu hỗn hợp phân đoạn dầu mỏ (xăng, dầu hoả, diesel) bằng phương pháp nào?',
    back: 'Chưng cất phân đoạn.'
  },
  {
    id: 'fc-11-15',
    lessonId: 'bai-11',
    category: 'tinh-che',
    front: 'Muốn tinh chế chất rắn A có lẫn tạp chất B không tan ở nhiệt độ cao, bước đầu tiên làm gì?',
    back: 'Hoà tan hỗn hợp trong dung môi nóng rồi tiến hành lọc nóng.'
  }
];

export const lesson11Quizzes: QuizQuestion[] = [
  {
    id: 'q-11-1',
    lessonId: 'bai-11',
    question: 'Chưng cất là phương pháp tách chất dựa vào sự khác nhau về:',
    options: [
      { id: 'A', text: 'Nhiệt độ sôi của các chất trong hỗn hợp.' },
      { id: 'B', text: 'Nhiệt độ nóng chảy của các chất.' },
      { id: 'C', text: 'Độ tan của các chất trong nước.' },
      { id: 'D', text: 'Khối lượng phân tử của các chất.' }
    ],
    correctAnswer: 'A',
    explanation: 'Theo SGK: Chưng cất là phương pháp tách biệt dựa vào sự khác nhau về nhiệt độ sôi của các chất trong hỗn hợp ở áp suất nhất định.',
    difficulty: 'NhanBiet',
    source: 'SGK Hoá học 11 - Bài 11'
  },
  {
    id: 'q-11-2',
    lessonId: 'bai-11',
    question: 'Phương pháp nào sau đây dùng để tách hai chất lỏng không trộn lẫn vào nhau?',
    options: [
      { id: 'A', text: 'Chưng cất' },
      { id: 'B', text: 'Chiết lỏng - lỏng' },
      { id: 'C', text: 'Kết tinh' },
      { id: 'D', text: 'Sắc kí' }
    ],
    correctAnswer: 'B',
    explanation: 'Chiết lỏng - lỏng dùng phễu chiết để tách hai chất lỏng không tan/không trộn lẫn vào nhau tạo thành 2 lớp.',
    difficulty: 'NhanBiet',
    source: 'SBT Hoá học 11 - Bài 11'
  },
  {
    id: 'q-11-3',
    lessonId: 'bai-11',
    question: 'Để tinh chế chất rắn bằng phương pháp kết tinh, yếu tố nào sau đây quyết định?',
    options: [
      { id: 'A', text: 'Độ tan của chất rắn thay đổi đáng kể theo nhiệt độ.' },
      { id: 'B', text: 'Chất rắn có nhiệt độ sôi rất thấp.' },
      { id: 'C', text: 'Chất rắn phải có màu sắc sặc sỡ.' },
      { id: 'D', text: 'Dung môi sử dụng phải bay hơi cực kì chậm.' }
    ],
    correctAnswer: 'A',
    explanation: 'Kết tinh dựa vào độ tan lớn ở nhiệt độ cao và độ tan giảm mạnh khi hạ nhiệt độ để tinh chế chất rắn.',
    difficulty: 'NhanBiet',
    source: 'SGK Hoá học 11 - Bài 11'
  },
  {
    id: 'q-11-4',
    lessonId: 'bai-11',
    question: 'Trong thí nghiệm chưng cất rượu từ hỗn hợp rượu - nước, vài viên đá bọt được thêm vào bình cầu có tác dụng gì?',
    options: [
      { id: 'A', text: 'Tăng nhiệt độ sôi của hỗn hợp.' },
      { id: 'B', text: 'Tránh hiện tượng trào bùng khi dung dịch sôi.' },
      { id: 'C', text: 'Hấp phụ tạp chất màu trong rượu.' },
      { id: 'D', text: 'Giúp rượu bay hơi nhanh hơn hẳn.' }
    ],
    correctAnswer: 'B',
    explanation: 'Đá bọt tạo các tâm bọt khí nhỏ giúp chất lỏng sôi êm dịu, tránh hiện tượng dung dịch sôi trào bùng nổ.',
    difficulty: 'ThongHieu',
    source: 'SGK Hoá học 11 - Bài 11'
  },
  {
    id: 'q-11-5',
    lessonId: 'bai-11',
    question: 'Tách lấy $\\beta$-carotene từ nước ép cà rốt bằng hexane thuộc loại phương pháp nào?',
    options: [
      { id: 'A', text: 'Chưng cất phân đoạn' },
      { id: 'B', text: 'Chiết lỏng - lỏng' },
      { id: 'C', text: 'Sắc kí cột' },
      { id: 'D', text: 'Kết tinh lại' }
    ],
    correctAnswer: 'B',
    explanation: '$\\beta$-carotene tan tốt trong dung môi hexane (không tan trong nước), dùng phễu chiết lắc để chuyển $\\beta$-carotene sang lớp hexane là phương pháp chiết lỏng - lỏng.',
    difficulty: 'ThongHieu',
    source: 'SGK Hoá học 11 - Bài 11'
  },
  {
    id: 'q-11-6',
    lessonId: 'bai-11',
    question: 'Hành động ngâm rượu thuốc (như ngâm đinh lăng, nhân sâm vào rượu) là ứng dụng của phương pháp:',
    options: [
      { id: 'A', text: 'Chiết lỏng - rắn' },
      { id: 'B', text: 'Chưng cất lôi cuốn hơi nước' },
      { id: 'C', text: 'Lọc nóng' },
      { id: 'D', text: 'Sắc kí lớp mỏng' }
    ],
    correctAnswer: 'A',
    explanation: 'Dùng dung môi lỏng (rượu) hoà tan các hợp chất hữu cơ có trong dược liệu rắn gọi là chiết lỏng - rắn.',
    difficulty: 'ThongHieu',
    source: 'SBT Hoá học 11 - Bài 11'
  },
  {
    id: 'q-11-7',
    lessonId: 'bai-11',
    question: 'Phương pháp tách biệt và tinh chế nào dựa trên sự phân bố khác nhau của chất giữa pha động và pha tĩnh?',
    options: [
      { id: 'A', text: 'Chưng cất' },
      { id: 'B', text: 'Chiết' },
      { id: 'C', text: 'Sắc kí cột' },
      { id: 'D', text: 'Kết tinh' }
    ],
    correctAnswer: 'C',
    explanation: 'Sắc kí cột dựa trên sự phân bố khác nhau của các chất cần tách giữa pha động (dung môi) và pha tĩnh (chất hấp phụ).',
    difficulty: 'NhanBiet',
    source: 'SGK Hoá học 11 - Bài 11'
  },
  {
    id: 'q-11-8',
    lessonId: 'bai-11',
    question: 'Làm đường cát trắng từ đường mía thô bằng cách hoà tan đường thô vào nước nóng, thêm than hoạt tính rồi cô đặc làm lạnh thu tinh thể đường thuộc phương pháp nào?',
    options: [
      { id: 'A', text: 'Chiết' },
      { id: 'B', text: 'Kết tinh' },
      { id: 'C', text: 'Chưng cất' },
      { id: 'D', text: 'Sắc kí' }
    ],
    correctAnswer: 'B',
    explanation: 'Đây là quy trình tinh chế chất rắn bằng phương pháp kết tinh (kết hợp lọc hấp phụ màu bằng than hoạt tính).',
    difficulty: 'ThongHieu',
    source: 'SGK Hoá học 11 - Bài 11'
  },
  {
    id: 'q-11-9',
    lessonId: 'bai-11',
    question: 'Khi thực hiện thí nghiệm chưng cất, dòng nước làm lạnh đi vào ống sinh hàn theo chiều nào là ĐÚNG?',
    options: [
      { id: 'A', text: 'Đi vào từ đầu dưới và đi ra ở đầu trên.' },
      { id: 'B', text: 'Đi vào từ đầu trên và đi ra ở đầu dưới.' },
      { id: 'C', text: 'Cho nước đứng yên trong ống sinh hàn không cần chảy.' },
      { id: 'D', text: 'Đi vào hay ra đầu nào cũng giống nhau.' }
    ],
    correctAnswer: 'A',
    explanation: 'Nước làm lạnh đi từ đầu dưới lên đầu trên để ống sinh hàn luôn ngập đầy nước, giúp làm lạnh ngưng tụ hơi đạt hiệu quả tối đa.',
    difficulty: 'ThongHieu',
    source: 'SBT Hoá học 11 - Bài 11'
  },
  {
    id: 'q-11-10',
    lessonId: 'bai-11',
    question: 'Hãy ghép ứng dụng ở cột I với phương pháp thích hợp ở cột II:\n(1) Nấu rượu đế -> (a) Kết tinh\n(2) Ngâm rượu mơ -> (b) Chưng cất\n(3) Tinh chế đường phèn -> (c) Chiết',
    options: [
      { id: 'A', text: '(1)-(b), (2)-(c), (3)-(a)' },
      { id: 'B', text: '(1)-(a), (2)-(b), (3)-(c)' },
      { id: 'C', text: '(1)-(c), (2)-(a), (3)-(b)' },
      { id: 'D', text: '(1)-(b), (2)-(a), (3)-(c)' }
    ],
    correctAnswer: 'A',
    explanation: '(1) Nấu rượu đế = Chưng cất; (2) Ngâm rượu mơ = Chiết lỏng - rắn; (3) Làm đường phèn = Kết tinh.',
    difficulty: 'ThongHieu',
    source: 'SBT Hoá học 11 - Bài 11'
  }
];
