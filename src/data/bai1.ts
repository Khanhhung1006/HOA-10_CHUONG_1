import { Lesson } from '../types';

export const bai1Data: Lesson = {
  id: 'bai1',
  number: 1,
  title: 'Thành phần của nguyên tử',
  subtitle: 'Chương 1: Cấu tạo nguyên tử',
  description: 'Khám phá cấu tạo nguyên tử, vỏ nguyên tử, hạt nhân, khối lượng và điện tích các hạt proton, neutron, electron.',
  pageRange: 'Trang 13 - 17 (SGK Hóa học 10 - Kết nối tri thức)',
  sections: [
    {
      id: 'sec1-1',
      title: '1. Các loại hạt cấu tạo nên nguyên tử',
      content: [
        'Nguyên tử là hạt vô cùng nhỏ bé và trung hòa về điện. Nguyên tử được cấu tạo gồm 2 phần chính: Hạt nhân ở tâm và lớp vỏ electron xung quanh.',
        'Lịch sử phát minh ra các hạt cấu tạo nên nguyên tử:',
        '• Năm 1897, J. J. Thomson (Anh) thực hiện thí nghiệm phóng điện qua không khí loãng đã phát hiện ra chùm tia âm cực bị hút lệch về phía cực dương của điện trường. Đóng chính là chùm các hạt electron (e).',
        '• Năm 1911, E. Rutherford (New Zealand) thực hiện thí nghiệm bắn phá lá vàng rất mỏng bằng chùm hạt alpha (α - hạt nhân helium mang điện tích +2). Kết quả cho thấy hầu hết các hạt α đều xuyên thẳng qua lá vàng, chứng tỏ nguyên tử có cấu tạo rỗng, ở tâm chứa hạt nhân mang điện tích dương rất nhỏ.',
        '• Năm 1918, E. Rutherford và cộng sự dùng hạt α bắn phá nitrogen đã phát hiện ra hạt proton (p).',
        '• Năm 1932, J. Chadwick (Anh), cộng sự của Rutherford, phát hiện ra hạt neutron (n) khi bắn phá beryllium bằng hạt α.'
      ],
      keyPoints: [
        'Hạt nhân (nucleus): ở tâm nguyên tử, gồm các hạt proton (p) mang điện tích dương và neutron (n) không mang điện.',
        'Vỏ nguyên tử: chứa các electron (e) mang điện tích âm, chuyển động rất nhanh xung quanh hạt nhân.',
        'Trong nguyên tử: Số proton (p) = Số electron (e) = Z (Số đơn vị điện tích hạt nhân).'
      ],
      tableData: {
        headers: ['Hạt', 'Kí hiệu', 'Khối lượng (kg)', 'Khối lượng (amu)', 'Điện tích (C)', 'Điện tích tương đối'],
        rows: [
          ['Proton', 'p', '1,672 × 10⁻²⁷', '≈ 1', '+1,602 × 10⁻¹⁹', '+1'],
          ['Neutron', 'n', '1,675 × 10⁻²⁷', '≈ 1', '0', '0'],
          ['Electron', 'e', '9,109 × 10⁻³¹', '≈ 0,00055 (1/1837)', '-1,602 × 10⁻¹⁹', '-1']
        ]
      },
      callout: {
        type: 'remember',
        title: 'Khối lượng nguyên tử tập trung ở hạt nhân',
        text: 'Do khối lượng của electron rất nhỏ (chỉ bằng 1/1837 amu) không đáng kể so với khối lượng proton và neutron, nên khối lượng nguyên tử tập trung hầu hết ở hạt nhân.'
      }
    },
    {
      id: 'sec1-2',
      title: '2. Kích thước và khối lượng của nguyên tử',
      content: [
        'Kích thước nguyên tử là khoảng không gian tạo bởi sự chuyển động của các electron. Nếu coi nguyên tử như một khối cầu thì đường kính của nó chỉ khoảng 10⁻¹⁰ m.',
        'Đơn vị đo kích thước nhỏ: Đơn vị picomet (pm) hay Angström (Å):',
        '1 pm = 10⁻¹² m ;  1 Å = 10⁻¹⁰ m (1 Å = 100 pm).',
        'Ví dụ: Nguyên tử Hydrogen có bán kính khoảng 53 pm.',
        'Hạt nhân nguyên tử có đường kính khoảng 10⁻² pm (khoảng 10⁻¹⁴ m), kích thước nhỏ hơn nguyên tử khoảng 10 000 lần.',
        'Khối lượng nguyên tử được biểu diễn theo đơn vị khối lượng nguyên tử, kí hiệu amu (atomic mass unit):',
        '1 amu được định nghĩa bằng 1/12 khối lượng 1 nguyên tử carbon-12 (carbon-12 có m = 19,926 × 10⁻²⁷ kg).',
        '1 amu = (19,926 × 10⁻²⁷ kg) / 12 = 1,661 × 10⁻²⁷ kg.'
      ],
      keyPoints: [
        '1 amu = 1,661 × 10⁻²⁷ kg = 1,661 × 10⁻²⁴ g.',
        'Đường kính nguyên tử xấp xỉ 10⁻¹⁰ m (1 Å), gấp khoảng 10.000 lần đường kính hạt nhân (10⁻¹⁴ m).'
      ],
      callout: {
        type: 'formula',
        title: 'Đổi đơn vị amu sang kg',
        text: 'm (nguyên tử) = Khối lượng (amu) × 1,661 × 10⁻²⁷ kg'
      }
    },
    {
      id: 'sec1-3',
      title: '3. Điện tích hạt nhân và số khối',
      content: [
        'Số proton trong hạt nhân nguyên tử bằng số đơn vị điện tích hạt nhân, kí hiệu là Z.',
        'Ví dụ: Hạt nhân nguyên tử Na có 11 proton nên số đơn vị điện tích hạt nhân là Z = 11, điện tích hạt nhân là +11.',
        'Tổng số proton (Z) và số neutron (N) trong hạt nhân của một nguyên tử được gọi là số khối (hay số nucleon), kí hiệu là A.',
        'Công thức số khối: A = Z + N (với Z = số p, N = số n).'
      ],
      keyPoints: [
        'Số đơn vị điện tích hạt nhân: Z = p = e',
        'Số khối: A = Z + N',
        'Trong nguyên tử trung hòa điện: Số p = Số e = Z'
      ]
    }
  ],
  flashcards: [
    {
      id: 'fc1-1',
      lessonId: 'bai1',
      question: 'Nguyên tử được cấu tạo từ những phần nào và gồm những loại hạt cơ bản nào?',
      answer: 'Nguyên tử gồm 2 phần: Hạt nhân ở tâm (gồm hạt proton và neutron) và lớp vỏ nguyên tử (gồm các hạt electron).',
      tag: 'Cấu tạo nguyên tử'
    },
    {
      id: 'fc1-2',
      lessonId: 'bai1',
      question: 'Ai là người đã phát hiện ra hạt electron và vào năm nào?',
      answer: 'J. J. Thomson (người Anh) phát hiện ra hạt electron vào năm 1897 qua thí nghiệm phóng điện trong ống không khí loãng.',
      tag: 'Lịch sử phát minh'
    },
    {
      id: 'fc1-3',
      lessonId: 'bai1',
      question: 'Thí nghiệm bắn phá lá vàng mỏng bằng chùm hạt alpha (α) của Rutherford (1911) đã chứng minh điều gì?',
      answer: 'Chứng minh nguyên tử có cấu tạo rỗng, ở tâm chứa hạt nhân mang điện tích dương và có kích thước rất nhỏ so với nguyên tử.',
      tag: 'Thí nghiệm lá vàng'
    },
    {
      id: 'fc1-4',
      lessonId: 'bai1',
      question: 'Hạt proton và neutron được ai phát hiện và vào năm nào?',
      answer: 'Proton (p) do E. Rutherford phát hiện năm 1918. Neutron (n) do J. Chadwick phát hiện năm 1932.',
      tag: 'Lịch sử phát minh'
    },
    {
      id: 'fc1-5',
      lessonId: 'bai1',
      question: 'Hãy cho biết điện tích tương đối và điện tích theo Coulomb (C) của hạt proton, neutron, electron.',
      answer: 'Proton: điện tích tương đối +1 (+1,602 × 10⁻¹⁹ C). Electron: điện tích tương đối -1 (-1,602 × 10⁻¹⁹ C). Neutron: 0 C (không mang điện).',
      tag: 'Điện tích hạt'
    },
    {
      id: 'fc1-6',
      lessonId: 'bai1',
      question: 'Khối lượng tương đối (theo amu) của proton, neutron và electron bằng bao nhiêu?',
      answer: 'Proton ≈ 1 amu; Neutron ≈ 1 amu; Electron ≈ 0,00055 amu (bằng khoảng 1/1837 amu).',
      tag: 'Khối lượng hạt'
    },
    {
      id: 'fc1-7',
      lessonId: 'bai1',
      question: 'Tại sao coi khối lượng của nguyên tử tập trung hầu hết ở hạt nhân?',
      answer: 'Vì khối lượng của electron rất nhỏ (chỉ khoảng 0,00055 amu, bằng 1/1837 khối lượng proton hay neutron), không đáng kể so với khối lượng hạt nhân.',
      tag: 'Khối lượng nguyên tử'
    },
    {
      id: 'fc1-8',
      lessonId: 'bai1',
      question: 'Tại sao nguyên tử trung hòa về điện?',
      answer: 'Vì trong nguyên tử luôn có số hạt proton mang điện tích dương bằng số hạt electron mang điện tích âm (Số p = Số e = Z).',
      tag: 'Trung hòa điện'
    },
    {
      id: 'fc1-9',
      lessonId: 'bai1',
      question: 'Kích thước đường kính nguyên tử xấp xỉ bao nhiêu m, Å, pm?',
      answer: 'Đường kính nguyên tử khoảng 10⁻¹⁰ m = 1 Å = 100 pm.',
      tag: 'Kích thước nguyên tử'
    },
    {
      id: 'fc1-10',
      lessonId: 'bai1',
      question: 'Đường kính hạt nhân nhỏ hơn đường kính nguyên tử khoảng bao nhiêu lần?',
      answer: 'Đường kính hạt nhân (khoảng 10⁻¹⁴ m hay 10⁻² pm) nhỏ hơn đường kính nguyên tử khoảng 10 000 lần.',
      tag: 'Kích thước nguyên tử'
    },
    {
      id: 'fc1-11',
      lessonId: 'bai1',
      question: '1 amu (đơn vị khối lượng nguyên tử) được định nghĩa như thế nào và bằng bao nhiêu kg?',
      answer: '1 amu bằng 1/12 khối lượng của một nguyên tử carbon-12. 1 amu = 1,661 × 10⁻²⁷ kg.',
      tag: 'Đơn vị amu'
    },
    {
      id: 'fc1-12',
      lessonId: 'bai1',
      question: 'Số đơn vị điện tích hạt nhân (Z) cho biết những thông tin gì trong nguyên tử?',
      answer: 'Z cho biết số đơn vị điện tích hạt nhân, số proton trong hạt nhân và số electron ở lớp vỏ nguyên tử (Z = p = e).',
      tag: 'Số hiệu Z'
    },
    {
      id: 'fc1-13',
      lessonId: 'bai1',
      question: 'Số khối (A) của nguyên tử được tính bằng công thức nào?',
      answer: 'A = Z + N (trong đó Z là số proton, N là số neutron).',
      tag: 'Số khối A'
    },
    {
      id: 'fc1-14',
      lessonId: 'bai1',
      question: 'Nguyên tử Aluminium (Al) có Z = 13 và A = 27. Cho biết số hạt p, n, e trong Al.',
      answer: 'Số p = 13, số e = 13, số n = A - Z = 27 - 13 = 14.',
      tag: 'Ví dụ số hạt'
    },
    {
      id: 'fc1-15',
      lessonId: 'bai1',
      question: 'Mối liên hệ giữa 1 Å và 1 pm là gì?',
      answer: '1 Å = 10⁻¹⁰ m; 1 pm = 10⁻¹² m ⇒ 1 Å = 100 pm.',
      tag: 'Đơn vị đo'
    },
    {
      id: 'fc1-16',
      lessonId: 'bai1',
      question: 'Cho nguyên tử Sodium (Na) có 11 proton và 12 neutron. Điện tích hạt nhân và số khối của Na là bao nhiêu?',
      answer: 'Điện tích hạt nhân là +11 (số đơn vị điện tích hạt nhân Z = 11); Số khối A = 11 + 12 = 23.',
      tag: 'Ví dụ tính toán'
    }
  ],
  quizQuestions: [
    {
      id: 'q1-1',
      lessonId: 'bai1',
      question: 'Các hạt cấu tạo nên hầu hết các nguyên tử là gì?',
      options: [
        'Proton và electron',
        'Neutron và electron',
        'Proton, neutron và electron',
        'Proton và neutron'
      ],
      correctAnswerIndex: 2,
      explanation: 'Hầu hết các nguyên tử đều được cấu tạo từ 3 loại hạt cơ bản: proton (p) và neutron (n) nằm trong hạt nhân, cùng các electron (e) ở lớp vỏ. (Ngoại lệ duy nhất là đồng vị Protium ¹₁H hạt nhân không có neutron).',
      topicTag: 'Cấu tạo nguyên tử'
    },
    {
      id: 'q1-2',
      lessonId: 'bai1',
      question: 'Nhà khoa học nào đã phát hiện ra electron vào năm 1897?',
      options: [
        'E. Rutherford',
        'J. J. Thomson',
        'J. Chadwick',
        'N. Bohr'
      ],
      correctAnswerIndex: 1,
      explanation: 'Năm 1897, J. J. Thomson (người Anh) làm thí nghiệm phóng điện qua ống không khí loãng và tìm ra chùm hạt âm cực, chính là các hạt electron (kí hiệu e, mang điện tích âm).',
      topicTag: 'Lịch sử phát minh'
    },
    {
      id: 'q1-3',
      lessonId: 'bai1',
      question: 'Thí nghiệm bắn phá lá vàng mỏng bằng hạt alpha (α) của Rutherford (1911) dẫn đến kết luận nào?',
      options: [
        'Nguyên tử là một khối đặc mang điện tích dương',
        'Nguyên tử có cấu tạo rỗng, ở tâm có hạt nhân mang điện tích dương rất nhỏ',
        'Electron phân bố đều khắp trong nguyên tử',
        'Hạt nhân nguyên tử gồm các hạt neutron không mang điện'
      ],
      correctAnswerIndex: 1,
      explanation: 'Vì hầu hết các hạt alpha xuyên thẳng qua lá vàng mỏng chứng tỏ nguyên tử có cấu tạo rỗng. Một số rất ít hạt bị lệch hướng hoặc bật ngược lại chứng minh hạt nhân ở tâm mang điện tích dương và có kích thước vô cùng nhỏ.',
      topicTag: 'Thí nghiệm lá vàng'
    },
    {
      id: 'q1-4',
      lessonId: 'bai1',
      question: 'Hạt neutron được phát hiện bởi nhà khoa học nào vào năm 1932?',
      options: [
        'E. Rutherford',
        'J. J. Thomson',
        'J. Chadwick',
        'A. Lavoisier'
      ],
      correctAnswerIndex: 2,
      explanation: 'Năm 1932, J. Chadwick (người Anh), học trò của Rutherford, khi bắn phá beryllium bằng hạt alpha đã phát hiện ra hạt neutron (n) không mang điện.',
      topicTag: 'Lịch sử phát minh'
    },
    {
      id: 'q1-5',
      lessonId: 'bai1',
      question: 'Trong nguyên tử trung hòa về điện, phát biểu nào sau đây luôn ĐÚNG?',
      options: [
        'Số proton = Số neutron',
        'Số neutron = Số electron',
        'Số proton = Số electron',
        'Số khối = 2 × Số proton'
      ],
      correctAnswerIndex: 2,
      explanation: 'Nguyên tử trung hòa về điện vì tổng điện tích dương của hạt nhân (do proton mang) bằng tổng điện tích âm của vỏ (do electron mang). Do đó số p = số e = Z.',
      topicTag: 'Trung hòa điện'
    },
    {
      id: 'q1-6',
      lessonId: 'bai1',
      question: 'Phát biểu nào sau đây về khối lượng hạt cấu tạo nên nguyên tử là CHÍNH XÁC?',
      options: [
        'Khối lượng hạt proton xấp xỉ bằng khối lượng hạt electron',
        'Khối lượng hạt electron xấp xỉ bằng khối lượng hạt neutron',
        'Khối lượng hạt proton xấp xỉ bằng khối lượng hạt neutron (≈ 1 amu)',
        'Khối lượng hạt neutron gấp 1000 lần khối lượng hạt proton'
      ],
      correctAnswerIndex: 2,
      explanation: 'Khối lượng của proton (1,672 × 10⁻²⁷ kg) và neutron (1,675 × 10⁻²⁷ kg) xấp xỉ bằng nhau và đều xấp xỉ 1 amu. Trong khi khối lượng electron rất nhỏ (9,109 × 10⁻³¹ kg ≈ 0,00055 amu).',
      topicTag: 'Khối lượng hạt'
    },
    {
      id: 'q1-7',
      lessonId: 'bai1',
      question: 'Khối lượng của 1 amu tính theo kg có giá trị bằng bao nhiêu?',
      options: [
        '1,661 × 10⁻²⁴ kg',
        '1,661 × 10⁻²⁷ kg',
        '9,109 × 10⁻³¹ kg',
        '1,602 × 10⁻¹⁹ kg'
      ],
      correctAnswerIndex: 1,
      explanation: '1 amu được định nghĩa là 1/12 khối lượng nguyên tử C-12, có giá trị chuẩn là 1,661 × 10⁻²⁷ kg (hoặc 1,661 × 10⁻²⁴ g).',
      topicTag: 'Đơn vị amu'
    },
    {
      id: 'q1-8',
      lessonId: 'bai1',
      question: 'Mối quan hệ giữa Angström (Å) và picomet (pm) là:',
      options: [
        '1 Å = 10 pm',
        '1 Å = 100 pm',
        '1 Å = 1000 pm',
        '1 pm = 100 Å'
      ],
      correctAnswerIndex: 1,
      explanation: '1 Å = 10⁻¹⁰ m, 1 pm = 10⁻¹² m. Do đó 1 Å = 10⁻¹⁰ / 10⁻¹² = 100 pm.',
      topicTag: 'Đơn vị đo'
    },
    {
      id: 'q1-9',
      lessonId: 'bai1',
      question: 'Nếu đường kính nguyên tử khoảng 10⁻¹⁰ m thì đường kính hạt nhân xấp xỉ khoảng bao nhiêu?',
      options: [
        '10⁻¹² m',
        '10⁻¹⁴ m',
        '10⁻⁸ m',
        '10⁻¹⁶ m'
      ],
      correctAnswerIndex: 1,
      explanation: 'Kích thước đường kính hạt nhân nhỏ hơn kích thước nguyên tử khoảng 10 000 lần. Vì vậy nếu nguyên tử khoảng 10⁻¹⁰ m (100 pm) thì hạt nhân khoảng 10⁻¹⁴ m (10⁻² pm).',
      topicTag: 'Kích thước nguyên tử'
    },
    {
      id: 'q1-10',
      lessonId: 'bai1',
      question: 'Công thức tính số khối A của nguyên tử là:',
      options: [
        'A = Z + e',
        'A = p + e',
        'A = Z + N',
        'A = N - Z'
      ],
      correctAnswerIndex: 2,
      explanation: 'Số khối A bằng tổng số proton (Z) và số neutron (N) trong hạt nhân nguyên tử: A = Z + N.',
      topicTag: 'Số khối A'
    },
    {
      id: 'q1-11',
      lessonId: 'bai1',
      question: 'Nguyên tử Aluminium (Al) có số hiệu nguyên tử Z = 13 và số khối A = 27. Số hạt neutron trong hạt nhân nguyên tử Al là bao nhiêu?',
      options: [
        '13',
        '14',
        '27',
        '40'
      ],
      correctAnswerIndex: 1,
      explanation: 'Áp dụng công thức A = Z + N ⇒ Số neutron N = A - Z = 27 - 13 = 14 hạt.',
      topicTag: 'Tính số hạt'
    },
    {
      id: 'q1-12',
      lessonId: 'bai1',
      question: 'Một nguyên tử X có tổng số hạt cơ bản (p, n, e) là 40, trong đó số hạt mang điện nhiều hơn số hạt không mang điện là 12. Điện tích hạt nhân của X là bao nhiêu?',
      options: [
        '+13',
        '+12',
        '+14',
        '+26'
      ],
      correctAnswerIndex: 0,
      explanation: 'Hệ phương trình: 2Z + N = 40 (1) và 2Z - N = 12 (2). Cộng (1) và (2) ⇒ 4Z = 52 ⇒ Z = 13. Vậy điện tích hạt nhân là +13 (nguyên tố Aluminium Al).',
      topicTag: 'Bài tập hạt'
    },
    {
      id: 'q1-13',
      lessonId: 'bai1',
      question: 'Hạt nhân nguyên tử Potassium (K) chứa 19 proton và 20 neutron. Số khối của Potassium là:',
      options: [
        '19',
        '20',
        '39',
        '58'
      ],
      correctAnswerIndex: 2,
      explanation: 'Số khối A = Z + N = 19 + 20 = 39.',
      topicTag: 'Số khối A'
    },
    {
      id: 'q1-14',
      lessonId: 'bai1',
      question: 'Nhận định nào sau đây SAI về vỏ nguyên tử?',
      options: [
        'Chứa các hạt electron mang điện tích âm',
        'Các electron chuyển động rất nhanh quanh hạt nhân',
        'Khối lượng lớp vỏ quyết định hầu hết khối lượng của nguyên tử',
        'Số electron ở vỏ bằng số proton trong hạt nhân'
      ],
      correctAnswerIndex: 2,
      explanation: 'Nhận định C SAI vì khối lượng của các electron ở vỏ rất nhỏ (xấp xỉ 1/1837 amu), nên khối lượng nguyên tử tập trung hầu hết ở HẠT NHÂN, không phải lớp vỏ.',
      topicTag: 'Cấu tạo nguyên tử'
    },
    {
      id: 'q1-15',
      lessonId: 'bai1',
      question: 'Một nguyên tử Iron (Fe) có 26 proton và 30 neutron. Tổng số hạt mang điện trong nguyên tử Fe là:',
      options: [
        '26',
        '30',
        '52',
        '56'
      ],
      correctAnswerIndex: 2,
      explanation: 'Các hạt mang điện gồm proton (+1) và electron (-1). Vì nguyên tử Fe có Z = 26 nên số p = 26 và số e = 26. Tổng số hạt mang điện là 26 + 26 = 52 hạt.',
      topicTag: 'Bài tập hạt'
    },
    {
      id: 'q1-16',
      lessonId: 'bai1',
      question: 'Phát biểu nào đúng khi nói về điện tích của hạt proton và electron?',
      options: [
        'Proton mang điện tích +1,602 × 10⁻¹⁹ C; electron mang điện tích -1,602 × 10⁻¹⁹ C',
        'Proton mang điện tích -1,602 × 10⁻¹⁹ C; electron mang điện tích +1,602 × 10⁻¹⁹ C',
        'Cả proton và electron đều mang điện tích +1,602 × 10⁻¹⁹ C',
        'Proton có điện tích bằng 0, electron có điện tích -1 C'
      ],
      correctAnswerIndex: 0,
      explanation: 'Hạt proton mang điện tích dương +1,602 × 10⁻¹⁹ C (điện tích tương đối +1). Hạt electron mang điện tích âm -1,602 × 10⁻¹⁹ C (điện tích tương đối -1).',
      topicTag: 'Điện tích hạt'
    }
  ]
};
