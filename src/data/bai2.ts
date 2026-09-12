import { Lesson } from '../types';

export const bai2Data: Lesson = {
  id: 'bai2',
  number: 2,
  title: 'Nguyên tố hoá học',
  subtitle: 'Chương 1: Cấu tạo nguyên tử',
  description: 'Khái niệm nguyên tố hóa học, kí hiệu nguyên tử, đồng vị, nguyên tử khối và cách tính nguyên tử khối trung bình.',
  pageRange: 'Trang 17 - 21 (SGK Hóa học 10 - Kết nối tri thức)',
  sections: [
    {
      id: 'sec2-1',
      title: '1. Nguyên tố hoá học',
      content: [
        'Nguyên tố hoá học là tập hợp các nguyên tử có cùng số đơn vị điện tích hạt nhân (cùng số proton Z).',
        'Trong nguyên tử, số đơn vị điện tích hạt nhân bằng số electron ở vỏ nguyên tử. Các electron ở vỏ quyết định tính chất hoá học của nguyên tử, nên các nguyên tử của cùng một nguyên tố hoá học có tính chất hoá học giống nhau.',
        'Ví dụ: Tất cả các nguyên tử có cùng số đơn vị điện tích hạt nhân Z = 6 đều thuộc nguyên tố Carbon (C), dù chúng có thể có số neutron khác nhau.',
        'Hiện nay, con người đã biết 118 nguyên tố hoá học, trong đó có 94 nguyên tố hoá học tồn tại trong tự nhiên và 24 nguyên tố được tạo ra trong phòng thí nghiệm (nguyên tố nhân tạo).'
      ],
      keyPoints: [
        'Đặc trưng cơ bản của một nguyên tố hoá học là số hiệu nguyên tử Z (số proton).',
        'Các nguyên tử thuộc cùng một nguyên tố hoá học thì có cùng số p, cùng số e và tính chất hoá học giống nhau.'
      ]
    },
    {
      id: 'sec2-2',
      title: '2. Kí hiệu nguyên tử',
      content: [
        'Số đơn vị điện tích hạt nhân nguyên tử của một nguyên tố hoá học còn được gọi là số hiệu nguyên tử (Z) của nguyên tố đó.',
        'Số hiệu nguyên tử (Z) và số khối (A) là những đặc trưng cơ bản của một nguyên tử.',
        'Khi viết kí hiệu nguyên tử, đặt hai chỉ số đặc trưng ở bên trái kí hiệu nguyên tố X, trong đó số hiệu nguyên tử Z ở phía dưới và số khối A ở phía trên:',
        'Dạng kí hiệu:  A_Z X  (hay  _Z^A X)',
        'Ví dụ: Kí hiệu  4_2 He  cho biết: nguyên tử helium có kí hiệu He; số hiệu nguyên tử Z = 2 (hạt nhân có 2 proton, vỏ có 2 electron); số khối A = 4 (hạt nhân có số neutron N = 4 - 2 = 2).'
      ],
      keyPoints: [
        'X: Kí hiệu hóa học của nguyên tố.',
        'Z: Số hiệu nguyên tử (phía dưới bên trái) = Số p = Số e.',
        'A: Số khối (phía trên bên trái) = Z + N.'
      ],
      callout: {
        type: 'formula',
        title: 'Kí hiệu nguyên tử đầy đủ',
        text: 'A_Z X (Hoặc _Z^A X) ⟹ Số p = Z, Số e = Z, Số n = A - Z'
      }
    },
    {
      id: 'sec2-3',
      title: '3. Đồng vị',
      content: [
        'Một số nguyên tử có cùng số đơn vị điện tích hạt nhân (cùng số proton Z) nhưng có số neutron (N) khác nhau. Những nguyên tử như thế gọi là các đồng vị của một nguyên tố hoá học.',
        'Ví dụ: Nguyên tố Hydrogen có 3 đồng vị:',
        '• Protium (1_1 H): 1 proton, 0 neutron, 1 electron.',
        '• Deuterium (2_1 H hay D): 1 proton, 1 neutron, 1 electron.',
        '• Tritium (3_1 H hay T): 1 proton, 2 neutron, 1 electron.',
        'Các đồng vị khác nhau về số neutron nên khác nhau về khối lượng hạt nhân nguyên tử, đồng thời khác nhau về một số tính chất vật lí. Ví dụ: đơn chất 37_17 Cl có tỉ khối lớn hơn, nhiệt độ nóng chảy và nhiệt độ sôi cao hơn 35_17 Cl.',
        'Ngoài các đồng vị bền, các nguyên tố hoá học còn có một số đồng vị không bền gọi là đồng vị phóng xạ (ví dụ: 14_6 C, 131_53 I,...), được ứng dụng rộng rãi trong y học, nông nghiệp, nghiên cứu khoa học.'
      ],
      keyPoints: [
        'Các đồng vị có CÙNG số proton Z nhưng KHÁC số neutron N (dẫn đến khác số khối A).',
        'Các đồng vị có tính chất HÓA HỌC giống nhau, nhưng tính chất VẬT LÝ khác nhau.'
      ]
    },
    {
      id: 'sec2-4',
      title: '4. Nguyên tử khối và Nguyên tử khối trung bình',
      content: [
        'a) Nguyên tử khối: Là khối lượng tương đối của nguyên tử. Nguyên tử khối của một nguyên tử cho biết khối lượng của nguyên tử đó nặng gấp bao nhiêu lần đơn vị khối lượng nguyên tử (amu). Coi nguyên tử khối xấp xỉ bằng số khối A của hạt nhân.',
        'Ví dụ: Nguyên tử Potassium (K) có Z = 19, N = 20 nên nguyên tử khối A = 19 + 20 = 39.',
        'b) Nguyên tử khối trung bình:',
        'Hầu hết các nguyên tố trong tự nhiên là hỗn hợp của nhiều đồng vị, mỗi đồng vị có tỉ lệ phần trăm số nguyên tử xác định.',
        'Nguyên tử khối của một nguyên tố là nguyên tử khối trung bình (kí hiệu Ā) của hỗn hợp các đồng vị của nguyên tố đó.',
        'Công thức tính nguyên tử khối trung bình:',
        'Ā = (a × A1 + b × A2 + c × A3 + ...) / 100',
        'Trong đó: A1, A2, A3... là số khối của các đồng vị; a, b, c... là phần trăm số nguyên tử tương ứng của mỗi đồng vị (sao cho a + b + c + ... = 100%).',
        'Ví dụ: Chlorine trong tự nhiên có 2 đồng vị bền là 35_17 Cl (chiếm 75,77%) và 37_17 Cl (chiếm 24,23%).',
        'Ā(Cl) = (75,77 × 35 + 24,23 × 37) / 100 = 35,4846 ≈ 35,5 (amu).',
        'c) Phổ khối lượng (Mass Spectrometry): Bằng phương pháp phổ khối lượng, người ta xác định chính xác được các đồng vị và tỉ lệ phần trăm số nguyên tử của từng đồng vị trong tự nhiên.'
      ],
      keyPoints: [
        'Ā = (a · A1 + b · A2 + ...) / 100',
        'Ā được biểu diễn theo đơn vị amu.'
      ],
      callout: {
        type: 'formula',
        title: 'Công thức tính nguyên tử khối trung bình',
        text: 'Ā = (a × A1 + b × A2) / 100 (Với a + b = 100%)'
      }
    }
  ],
  flashcards: [
    {
      id: 'fc2-1',
      lessonId: 'bai2',
      question: 'Khái niệm nguyên tố hóa học là gì?',
      answer: 'Nguyên tố hóa học là tập hợp các nguyên tử có cùng số đơn vị điện tích hạt nhân (cùng số proton Z).',
      tag: 'Khái niệm'
    },
    {
      id: 'fc2-2',
      lessonId: 'bai2',
      question: 'Yếu tố nào quyết định tính chất hóa học của một nguyên tố?',
      answer: 'Số electron ở vỏ nguyên tử (bằng số đơn vị điện tích hạt nhân Z) quyết định tính chất hóa học của nguyên tử.',
      tag: 'Tính chất hóa học'
    },
    {
      id: 'fc2-3',
      lessonId: 'bai2',
      question: 'Hiện nay con người đã biết bao nhiêu nguyên tố hóa học và bao nhiêu nguyên tố có trong tự nhiên?',
      answer: 'Đã biết 118 nguyên tố hóa học, trong đó có 94 nguyên tố tồn tại trong tự nhiên và 24 nguyên tố nhân tạo.',
      tag: 'Số lượng nguyên tố'
    },
    {
      id: 'fc2-4',
      lessonId: 'bai2',
      question: 'Trong kí hiệu nguyên tử A_Z X, Z và A là gì?',
      answer: 'X là kí hiệu hóa học nguyên tố; Z là số hiệu nguyên tử (số p = số e); A là số khối (A = Z + N).',
      tag: 'Kí hiệu nguyên tử'
    },
    {
      id: 'fc2-5',
      lessonId: 'bai2',
      question: 'Cho kí hiệu nguyên tử 23_11 Na. Xác định số p, e, n và số khối A của Na.',
      answer: 'Số p = 11, số e = 11; Số khối A = 23; Số n = 23 - 11 = 12.',
      tag: 'Ví dụ kí hiệu'
    },
    {
      id: 'fc2-6',
      lessonId: 'bai2',
      question: 'Đồng vị là gì?',
      answer: 'Đồng vị là các nguyên tử có cùng số proton Z nhưng khác số neutron N (dẫn đến khác nhau về số khối A).',
      tag: 'Khái niệm đồng vị'
    },
    {
      id: 'fc2-7',
      lessonId: 'bai2',
      question: 'Nguyên tố Hydrogen có mấy đồng vị chính? Tên gọi của chúng là gì?',
      answer: 'Có 3 đồng vị: Protium (1_1 H), Deuterium (2_1 H hay D), Tritium (3_1 H hay T).',
      tag: 'Đồng vị H'
    },
    {
      id: 'fc2-8',
      lessonId: 'bai2',
      question: 'Các đồng vị của cùng một nguyên tố giống và khác nhau ở điểm nào?',
      answer: 'Giống nhau: Số proton Z, số electron e, tính chất hóa học. Khác nhau: Số neutron N, số khối A, khối lượng hạt nhân, tính chất vật lý.',
      tag: 'Đặc điểm đồng vị'
    },
    {
      id: 'fc2-9',
      lessonId: 'bai2',
      question: 'Đồng vị phóng xạ là gì và cho ví dụ?',
      answer: 'Đồng vị phóng xạ là các đồng vị có hạt nhân không bền tự phân rã phóng ra các tia phóng xạ. Ví dụ: 14_6 C, 131_53 I.',
      tag: 'Đồng vị phóng xạ'
    },
    {
      id: 'fc2-10',
      lessonId: 'bai2',
      question: 'Nguyên tử khối là gì?',
      answer: 'Nguyên tử khối là khối lượng tương đối của nguyên tử, cho biết khối lượng nguyên tử nặng gấp bao nhiêu lần đơn vị amu (Coi nguyên tử khối ≈ A).',
      tag: 'Nguyên tử khối'
    },
    {
      id: 'fc2-11',
      lessonId: 'bai2',
      question: 'Nêu công thức tính nguyên tử khối trung bình Ā của nguyên tố có các đồng vị A1, A2 với tỉ lệ % tương ứng a, b.',
      answer: 'Ā = (a × A1 + b × A2) / 100  (với a + b = 100%).',
      tag: 'Công thức Ā'
    },
    {
      id: 'fc2-12',
      lessonId: 'bai2',
      question: 'Phương pháp nào được dùng để xác định các đồng vị và tỉ lệ phần trăm số nguyên tử của chúng trong tự nhiên?',
      answer: 'Phương pháp Phổ khối lượng (Mass Spectrometry).',
      tag: 'Phổ khối lượng'
    },
    {
      id: 'fc2-13',
      lessonId: 'bai2',
      question: 'Tính nguyên tử khối trung bình của Chlorine biết Cl có 2 đồng vị 35_17 Cl (75,77%) và 37_17 Cl (24,23%).',
      answer: 'Ā = (75,77 × 35 + 24,23 × 37) / 100 = 35,4846 ≈ 35,5 amu.',
      tag: 'Tính Ā'
    },
    {
      id: 'fc2-14',
      lessonId: 'bai2',
      question: 'Tại sao nguyên tử khối của các nguyên tố trong Bảng tuần hoàn thường không phải là số nguyên?',
      answer: 'Vì giá trị nguyên tử khối trong Bảng tuần hoàn là giá trị NGUYÊN TỬ KHỐI TRUNG BÌNH của hỗn hợp các đồng vị trong tự nhiên.',
      tag: 'Nguyên tử khối trung bình'
    },
    {
      id: 'fc2-15',
      lessonId: 'bai2',
      question: 'Cu trong tự nhiên có 2 đồng vị 63_29 Cu và 65_29 Cu. Biết Ā = 63,54. Đồng vị nào chiếm tỉ lệ % lớn hơn?',
      answer: 'Đồng vị 63_29 Cu chiếm tỉ lệ lớn hơn (khoảng 73%), vì Ā = 63,54 gần với số khối 63 hơn.',
      tag: 'Đồng vị Cu'
    },
    {
      id: 'fc2-16',
      lessonId: 'bai2',
      question: 'Cho hai nguyên tử X (Z = 8, A = 16) và Y (Z = 8, A = 18). Hai nguyên tử này là gì của nhau?',
      answer: 'X và Y là hai đồng vị của cùng nguyên tố Oxygen (O), vì có cùng số hiệu nguyên tử Z = 8 nhưng khác số khối A.',
      tag: 'Ví dụ đồng vị'
    }
  ],
  quizQuestions: [
    {
      id: 'q2-1',
      lessonId: 'bai2',
      question: 'Yếu tố cốt lõi nào quyết định các nguyên tử thuộc cùng một nguyên tố hóa học?',
      options: [
        'Cùng số khối A',
        'Cùng số neutron N',
        'Cùng số proton Z',
        'Cùng tổng số p + n'
      ],
      correctAnswerIndex: 2,
      explanation: 'Khái niệm: Nguyên tố hóa học là tập hợp các nguyên tử có cùng số đơn vị điện tích hạt nhân (cùng số proton Z).',
      topicTag: 'Khái niệm nguyên tố'
    },
    {
      id: 'q2-2',
      lessonId: 'bai2',
      question: 'Hiện nay, tổng số nguyên tố hóa học đã được con người công nhận là bao nhiêu?',
      options: [
        '94',
        '108',
        '118',
        '120'
      ],
      correctAnswerIndex: 2,
      explanation: 'Theo IUPAC, hiện nay con người đã biết 118 nguyên tố hóa học (trong đó 94 nguyên tố tồn tại tự nhiên và 24 nguyên tố nhân tạo).',
      topicTag: 'Số lượng nguyên tố'
    },
    {
      id: 'q2-3',
      lessonId: 'bai2',
      question: 'Kí hiệu nguyên tử 39_19 K cho biết Potassium có:',
      options: [
        '19 p, 19 e, 39 n',
        '19 p, 19 e, 20 n',
        '39 p, 39 e, 19 n',
        '20 p, 19 e, 19 n'
      ],
      correctAnswerIndex: 1,
      explanation: 'Kí hiệu 39_19 K có Z = 19 và A = 39. Số p = Z = 19, số e = Z = 19, số n = A - Z = 39 - 19 = 20.',
      topicTag: 'Kí hiệu nguyên tử'
    },
    {
      id: 'q2-4',
      lessonId: 'bai2',
      question: 'Đồng vị là những nguyên tử của cùng một nguyên tố hóa học có:',
      options: [
        'Cùng số neutron nhưng khác số proton',
        'Cùng số khối A nhưng khác số proton',
        'Cùng số proton Z nhưng khác số neutron N',
        'Cùng số khối A và số neutron N'
      ],
      correctAnswerIndex: 2,
      explanation: 'Đồng vị là các nguyên tử có cùng số đơn vị điện tích hạt nhân (cùng số proton Z) nhưng có số neutron N khác nhau (dẫn tới số khối A khác nhau).',
      topicTag: 'Khái niệm đồng vị'
    },
    {
      id: 'q2-5',
      lessonId: 'bai2',
      question: 'Cặp nguyên tử nào sau đây thuộc cùng một nguyên tố hóa học (là đồng vị của nhau)?',
      options: [
        'X (Z = 6, A = 12) và Y (Z = 7, A = 14)',
        'E (Z = 8, A = 16) và F (Z = 8, A = 18)',
        'M (Z = 11, A = 23) và N (Z = 12, A = 24)',
        'P (Z = 19, A = 39) và Q (Z = 20, A = 40)'
      ],
      correctAnswerIndex: 1,
      explanation: 'E và F có cùng số proton Z = 8 (nguyên tố Oxygen) nhưng khác số khối (A = 16 và A = 18) nên thuộc cùng nguyên tố hóa học và là hai đồng vị của nhau.',
      topicTag: 'Nhận biết đồng vị'
    },
    {
      id: 'q2-6',
      lessonId: 'bai2',
      question: 'Ba đồng vị tự nhiên của Hydrogen là Protium (1-H1), Deuterium (1-H2) và Tritium (1-H3) khác nhau về:',
      options: [
        'Số electron ở lớp vỏ',
        'Số proton trong hạt nhân',
        'Số neutron trong hạt nhân',
        'Tính chất hóa học cơ bản'
      ],
      correctAnswerIndex: 2,
      explanation: 'Cả 3 đồng vị đều có Z = 1 (1 p, 1 e), do đó có tính chất hóa học giống nhau. Đổi lại Protium có 0 neutron, Deuterium có 1 neutron, Tritium có 2 neutron.',
      topicTag: 'Đồng vị H'
    },
    {
      id: 'q2-7',
      lessonId: 'bai2',
      question: 'Neon (Ne) có 3 đồng vị: 20_10 Ne (90,0%), 21_10 Ne (0,3%) và 22_10 Ne (9,7%). Nguyên tử khối trung bình của Ne là:',
      options: [
        '20,18',
        '20,80',
        '21,00',
        '20,50'
      ],
      correctAnswerIndex: 0,
      explanation: 'Ā = (20 × 90,0 + 21 × 0,3 + 22 × 9,7) / 100 = (1800 + 6,3 + 213,4) / 100 = 2019,7 / 100 = 20,197 ≈ 20,18 amu (Hoặc theo SGK trang 21 là 20,18).',
      topicTag: 'Tính Ā'
    },
    {
      id: 'q2-8',
      lessonId: 'bai2',
      question: 'Copper (Cu) có nguyên tử khối trung bình là 63,546. Trong tự nhiên Cu có 2 đồng vị là 63_29 Cu và 65_29 Cu. Phần trăm số nguyên tử của đồng vị 63_29 Cu là:',
      options: [
        '27,3%',
        '72,7%',
        '50,0%',
        '63,5%'
      ],
      correctAnswerIndex: 1,
      explanation: 'Đặt % đồng vị 63-Cu là x (%), % đồng vị 65-Cu là (100 - x) (%). Ta có: Ā = [63x + 65(100 - x)] / 100 = 63,546 ⇒ 6500 - 2x = 6354,6 ⇒ 2x = 145,4 ⇒ x = 72,7%.',
      topicTag: 'Tính % đồng vị'
    },
    {
      id: 'q2-9',
      lessonId: 'bai2',
      question: 'Kí hiệu nguyên tử 14_7 N cho biết nguyên tử Nitrogen có:',
      options: [
        'Số khối bằng 7, số hiệu nguyên tử bằng 14',
        'Số proton bằng 7, số neutron bằng 14',
        'Số proton bằng 7, số neutron bằng 7, số khối bằng 14',
        'Số electron bằng 14, số proton bằng 7'
      ],
      correctAnswerIndex: 2,
      explanation: 'Z = 7 ⇒ số p = 7, số e = 7. A = 14 ⇒ số n = A - Z = 14 - 7 = 7.',
      topicTag: 'Kí hiệu nguyên tử'
    },
    {
      id: 'q2-10',
      lessonId: 'bai2',
      question: 'Carbon có 2 đồng vị bền là 12_6 C (chiếm 98,89%) và 13_6 C (chiếm 1,11%). Nguyên tử khối trung bình của Carbon là:',
      options: [
        '12,011',
        '12,500',
        '12,110',
        '13,000'
      ],
      correctAnswerIndex: 0,
      explanation: 'Ā = (12 × 98,89 + 13 × 1,11) / 100 = (1186,68 + 14,43) / 100 = 1201,11 / 100 = 12,0111 ≈ 12,011 amu.',
      topicTag: 'Tính Ā'
    },
    {
      id: 'q2-11',
      lessonId: 'bai2',
      question: 'Phương pháp hiện đại nào dùng để xác định sự có mặt của các đồng vị và hàm lượng % tương ứng?',
      options: [
        'Phân tích thể tích',
        'Phổ khối lượng (Mass Spectrometry)',
        'Thí nghiệm phóng điện',
        'Quang phổ hấp thụ nguyên tử'
      ],
      correctAnswerIndex: 1,
      explanation: 'SGK trang 20: Bằng phương pháp phổ khối lượng (Mass Spectrometry), người ta xác định được tỉ lệ phần trăm số nguyên tử của các đồng vị trong tự nhiên.',
      topicTag: 'Phổ khối lượng'
    },
    {
      id: 'q2-12',
      lessonId: 'bai2',
      question: 'Nguyên tố Boron (B) có nguyên tử khối trung bình là 10,81. Boron có 2 đồng vị 10_5 B và 11_5 B. Tỉ lệ % số nguyên tử của đồng vị 11_5 B là:',
      options: [
        '19%',
        '81%',
        '50%',
        '75%'
      ],
      correctAnswerIndex: 1,
      explanation: 'Gọi % của 10-B là x%, % của 11-B là (100 - x)%. Ta có: [10x + 11(100 - x)] / 100 = 10,81 ⇒ 1100 - x = 1081 ⇒ x = 19%. Vậy đồng vị 11-B chiếm 100 - 19 = 81%.',
      topicTag: 'Tính % đồng vị'
    },
    {
      id: 'q2-13',
      lessonId: 'bai2',
      question: 'Các đồng vị của cùng một nguyên tố hóa học KHÁC NHAU ở đặc điểm nào dưới đây?',
      options: [
        'Số hiệu nguyên tử Z',
        'Số proton trong hạt nhân',
        'Khối lượng hạt nhân nguyên tử',
        'Cấu hình electron lớp vỏ'
      ],
      correctAnswerIndex: 2,
      explanation: 'Các đồng vị có cùng Z (cùng số p, cùng số e, cùng cấu hình e) nên chỉ khác nhau về số neutron N, dẫn tới khác nhau về khối lượng hạt nhân nguyên tử (số khối A).',
      topicTag: 'Đặc điểm đồng vị'
    },
    {
      id: 'q2-14',
      lessonId: 'bai2',
      question: 'Biết Argon (Ar) có 3 đồng vị: 36-Ar (0,34%), 38-Ar (0,06%), 40-Ar (99,60%). Nguyên tử khối trung bình của Ar là:',
      options: [
        '39,948',
        '38,000',
        '36,500',
        '40,000'
      ],
      correctAnswerIndex: 0,
      explanation: 'Ā = (36 × 0,34 + 38 × 0,06 + 40 × 99,60) / 100 = (12,24 + 2,28 + 3984) / 100 = 3998,52 / 100 = 39,985 ≈ 39,95 amu.',
      topicTag: 'Tính Ā'
    },
    {
      id: 'q2-15',
      lessonId: 'bai2',
      question: 'Đồng vị phóng xạ 131_53 I thường được ứng dụng trong y học để:',
      options: [
        'Điều trị bệnh lý tuyến giáp (như ung thư tuyến giáp, bướu cổ)',
        'Chụp X-quang xương',
        'Xét nghiệm nhóm máu',
        'Khử trùng dụng cụ phẫu thuật'
      ],
      correctAnswerIndex: 0,
      explanation: 'SGK trang 107 ("Em có biết"): Đồng vị phóng xạ 131-I được dùng trong y học để chẩn đoán và điều trị các bệnh lý tuyến giáp như ung thư tuyến giáp, cường giáp.',
      topicTag: 'Ứng dụng đồng vị'
    },
    {
      id: 'q2-16',
      lessonId: 'bai2',
      question: 'Một mẫu Lithium chứa 2 đồng vị 6_3 Li và 7_3 Li. Biết nguyên tử khối trung bình của Li là 6,94. Tỉ lệ số nguyên tử của 6_3 Li : 7_3 Li là:',
      options: [
        '6 : 94',
        '94 : 6',
        '1 : 1',
        '12 : 88'
      ],
      correctAnswerIndex: 0,
      explanation: 'Gọi % của 6-Li là x ⇒ [6x + 7(100 - x)] / 100 = 6,94 ⇒ 700 - x = 694 ⇒ x = 6%. Đồng vị 7-Li chiếm 94%. Tỉ lệ 6-Li : 7-Li = 6 : 94 (hay 3 : 47).',
      topicTag: 'Tính % đồng vị'
    }
  ]
};
