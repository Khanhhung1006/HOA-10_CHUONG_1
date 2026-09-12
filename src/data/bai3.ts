import { Lesson } from '../types';

export const bai3Data: Lesson = {
  id: 'bai3',
  number: 3,
  title: 'Cấu trúc lớp vỏ electron nguyên tử',
  subtitle: 'Chương 1: Cấu tạo nguyên tử',
  description: 'Mô hình nguyên tử, orbital nguyên tử (AO), các lớp và phân lớp electron, 3 nguyên lý - quy tắc viết cấu hình e và dự đoán tính chất.',
  pageRange: 'Trang 21 - 26 (SGK Hóa học 10 - Kết nối tri thức)',
  sections: [
    {
      id: 'sec3-1',
      title: '1. Chuyển động của electron trong nguyên tử - Orbital nguyên tử (AO)',
      content: [
        'a) Mô hình chuyển động của electron trong nguyên tử:',
        '• Mô hình Rutherford - Bohr (hành tinh nguyên tử): Cho rằng các electron chuyển động xung quanh hạt nhân theo những quỹ đạo tròn hay bầu dục xác định, giống như quỹ đạo các hành tinh quay quanh Mặt Trời.',
        '• Mô hình hiện đại: Trong nguyên tử, electron chuyển động rất nhanh (tốc độ hàng nghìn km/s), không theo quỹ đạo xác định. Người ta chỉ xác định được vùng không gian xung quanh hạt nhân mà ở đó xác suất tìm thấy electron là lớn nhất (khoảng 90%), gọi là đám mây electron hay orbital nguyên tử (kí hiệu là AO - Atomic Orbital).',
        'b) Hình dạng các orbital nguyên tử (AO):',
        '• Orbital s (AO s): Có dạng hình cầu.',
        '• Orbital p (AO p): Có dạng hình số 8 nổi, gồm 3 AO p định hướng theo 3 trục tọa độ vuông góc trong không gian: px (theo trục x), py (theo trục y), pz (theo trục z).',
        'c) Ô orbital (ô AO):',
        'Một AO được biểu diễn bằng một ô vuông (□), gọi là ô orbital.',
        'Trong 1 AO chỉ chứa tối đa 2 electron và 2 electron này có chiều tự quay ngược nhau (Nguyên lý loại trừ Pauli).',
        '• Nếu AO chứa 1 e: Biểu diễn bằng 1 mũi tên đi lên (↑) - gọi là electron độc thân.',
        '• Nếu AO chứa 2 e: Biểu diễn bằng 2 mũi tên ngược chiều nhau (↑↓) - gọi là cặp electron ghép đôi.'
      ],
      keyPoints: [
        'AO (Atomic Orbital): Vùng không gian xung quanh hạt nhân có xác suất tìm thấy electron lớn nhất (khoảng 90%).',
        'AO s có dạng hình cầu; AO p có dạng hình số 8 nổi (px, py, pz).',
        'Một AO chứa tối đa 2 electron có chiều tự quay ngược nhau (↑↓).'
      ],
      callout: {
        type: 'remember',
        title: 'Mô hình hiện đại về chuyển động e',
        text: 'Electron chuyển động rất nhanh không theo quỹ đạo xác định. AO s có hình cầu, AO p có hình số 8 nổi.'
      }
    },
    {
      id: 'sec3-2',
      title: '2. Lớp và phân lớp electron',
      content: [
        'a) Lớp electron:',
        'Trong nguyên tử, các electron được sắp xếp thành từng lớp từ gần hạt nhân ra xa hạt nhân theo mức năng lượng từ thấp đến cao.',
        'Các electron thuộc cùng một lớp có mức năng lượng GẦN BẰNG NHAU.',
        'Kí hiệu các lớp electron tương ứng với số thứ tự lớp n (n = 1, 2, 3, 4, 5, 6, 7):',
        '• n = 1: Lớp K',
        '• n = 2: Lớp L',
        '• n = 3: Lớp M',
        '• n = 4: Lớp N',
        '• n = 5: Lớp O, n = 6: Lớp P, n = 7: Lớp Q.',
        'b) Phân lớp electron:',
        'Mỗi lớp electron lại chia thành các phân lớp kí hiệu bằng các chữ cái viết thường: s, p, d, f.',
        'Các electron trên cùng một phân lớp có mức năng lượng BẰNG NHAU.',
        'Số phân lớp trong một lớp bằng số thứ tự của lớp đó (với n ≤ 4):',
        '• Lớp K (n = 1): Có 1 phân lớp (1s).',
        '• Lớp L (n = 2): Có 2 phân lớp (2s, 2p).',
        '• Lớp M (n = 3): Có 3 phân lớp (3s, 3p, 3d).',
        '• Lớp N (n = 4): Có 4 phân lớp (4s, 4p, 4d, 4f).',
        'c) Số lượng AO và số electron tối đa trong một phân lớp và trong một lớp:',
        '• Phân lớp s: Có 1 AO s ⟹ Chứa tối đa 2e (s²).',
        '• Phân lớp p: Có 3 AO p (px, py, pz) ⟹ Chứa tối đa 6e (p⁶).',
        '• Phân lớp d: Có 5 AO d ⟹ Chứa tối đa 10e (d¹⁰).',
        '• Phân lớp f: Có 7 AO f ⟹ Chứa tối đa 14e (f¹⁴).',
        '• Số AO trong lớp thứ n (n ≤ 4) là n² AO.',
        '• Số electron tối đa trong lớp thứ n (n ≤ 4) là 2n² electron.',
        '  - Lớp K (n = 1): 1² = 1 AO ⟹ Tối đa 2e.',
        '  - Lớp L (n = 2): 2² = 4 AO (1s + 3p) ⟹ Tối đa 8e.',
        '  - Lớp M (n = 3): 3² = 9 AO (1s + 3p + 5d) ⟹ Tối đa 18e.',
        '  - Lớp N (n = 4): 4² = 16 AO (1s + 3p + 5d + 7f) ⟹ Tối đa 32e.'
      ],
      keyPoints: [
        'Cùng lớp: mức năng lượng GẦN BẰNG NHAU. Cùng phân lớp: mức năng lượng BẰNG NHAU.',
        'Số phân lớp trong lớp n = n (n ≤ 4). Số AO trong lớp n = n². Số e tối đa trong lớp n = 2n².'
      ],
      tableData: {
        headers: ['Tên phân lớp', 'Số lượng AO', 'Số electron tối đa'],
        rows: [
          ['s', '1 AO', '2e (s²)'],
          ['p', '3 AO', '6e (p⁶)'],
          ['d', '5 AO', '10e (d¹⁰)'],
          ['f', '7 AO', '14e (f¹⁴)']
        ]
      }
    },
    {
      id: 'sec3-3',
      title: '3. Cấu hình electron nguyên tử',
      content: [
        'a) Cấu hình electron nguyên tử biểu diễn sự phân bố electron trên các phân lớp thuộc các lớp khác nhau.',
        'Các nguyên tắc và quy tắc điền electron vào AO:',
        '1. Nguyên lý vững bền: Trong nguyên tử ở trạng thái cơ bản, các electron lần lượt chiếm các orbital có mức năng lượng từ thấp đến cao:',
        '1s 2s 2p 3s 3p 4s 3d 4p 5s 4d 5p 6s...',
        '2. Nguyên lý Pauli: Trong một orbital chỉ chứa tối đa 2 electron có chiều tự quay ngược nhau.',
        '3. Quy tắc Hund: Trong cùng một phân lớp, các electron sẽ phân bố trên các orbital sao cho số electron độc thân là tối đa và các electron này có chiều tự quay giống nhau.',
        'b) Các bước viết cấu hình electron nguyên tử:',
        '• Bước 1: Xác định tổng số electron của nguyên tử (bằng số hiệu Z).',
        '• Bước 2: Viết thứ tự các phân lớp electron theo chiều tăng dần của mức năng lượng (1s 2s 2p 3s 3p 4s...).',
        '• Bước 3: Điền các electron vào các phân lớp theo nguyên lý vững bền cho đến hết.',
        '• Bước 4: Sắp xếp lại thứ tự các phân lớp theo từng lớp (từ trong ra ngoài) nếu có chèn mức năng lượng.',
        'Ví dụ:',
        '• Oxygen (Z = 8): 1s² 2s² 2p⁴ (Viết gọn: [He] 2s² 2p⁴).',
        '• Sodium (Z = 11): 1s² 2s² 2p⁶ 3s¹ (Viết gọn: [Ne] 3s¹).',
        '• Potassium (Z = 19): 1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹ (Viết gọn: [Ar] 4s¹).',
        '• Calcium (Z = 20): 1s² 2s² 2p⁶ 3s² 3p⁶ 4s² (Viết gọn: [Ar] 4s²).',
        'c) Biểu diễn cấu hình electron theo ô orbital:',
        'Sử dụng các ô vuông đại diện cho AO, điền các mũi tên ↑ và ↓ đại diện cho electron theo nguyên lý Pauli và quy tắc Hund.',
        'd) Dự đoán tính chất hoá học cơ bản dựa vào đặc điểm electron lớp ngoài cùng:',
        '• Nguyên tử có 8 electron ở lớp ngoài cùng (hoặc 2e ở lớp ngoài cùng đối với He): Rất bền vững, đó là nguyên tử KHÍ HIẾM.',
        '• Nguyên tử có 1, 2, 3 electron ở lớp ngoài cùng: Dễ nhường e, đó là nguyên tử KIM LOẠI (trừ H, He, B).',
        '• Nguyên tử có 5, 6, 7 electron ở lớp ngoài cùng: Dễ nhận e, đó là nguyên tử PHI KIM.',
        '• Nguyên tử có 4 electron ở lớp ngoài cùng: Có thể là KIM LOẠI (như Sn, Pb) hoặc PHI KIM (như C, Si).'
      ],
      keyPoints: [
        'Thứ tự mức năng lượng: 1s 2s 2p 3s 3p 4s 3d...',
        '1 - 3e ngoài cùng ⟹ Kim loại. 5 - 7e ngoài cùng ⟹ Phi kim. 8e ngoài cùng (He 2e) ⟹ Khí hiếm.'
      ],
      callout: {
        type: 'remember',
        title: 'Phân loại nguyên tố s, p, d, f',
        text: 'Nguyên tố s, p, d, f là những nguyên tố mà nguyên tử có electron cuối cùng được điền vào phân lớp s, p, d, f tương ứng.'
      }
    }
  ],
  flashcards: [
    {
      id: 'fc3-1',
      lessonId: 'bai3',
      question: 'Mô hình nguyên tử hiện đại mô tả sự chuyển động của electron như thế nào?',
      answer: 'Electron chuyển động rất nhanh xung quanh hạt nhân không theo quỹ đạo xác định, tạo thành đám mây electron.',
      tag: 'Mô hình hiện đại'
    },
    {
      id: 'fc3-2',
      lessonId: 'bai3',
      question: 'Orbital nguyên tử (AO) là gì?',
      answer: 'Là vùng không gian xung quanh hạt nhân mà tại đó xác suất tìm thấy electron là lớn nhất (khoảng 90%).',
      tag: 'Khái niệm AO'
    },
    {
      id: 'fc3-3',
      lessonId: 'bai3',
      question: 'AO s và AO p có hình dạng như thế nào trong không gian?',
      answer: 'AO s có dạng hình cầu; AO p có dạng hình số 8 nổi định hướng theo 3 trục px, py, pz.',
      tag: 'Hình dạng AO'
    },
    {
      id: 'fc3-4',
      lessonId: 'bai3',
      question: 'Một ô orbital (ô AO) chứa tối đa bao nhiêu electron? Hai electron đó có đặc điểm gì?',
      answer: 'Một AO chứa tối đa 2 electron có chiều tự quay ngược nhau (tạo thành cặp e ghép đôi ↑↓).',
      tag: 'Ô orbital'
    },
    {
      id: 'fc3-5',
      lessonId: 'bai3',
      question: 'Phát biểu Nguyên lý loại trừ Pauli.',
      answer: 'Trong một orbital nguyên tử chỉ chứa tối đa 2 electron và 2 electron này có chiều tự quay ngược nhau.',
      tag: 'Nguyên lý Pauli'
    },
    {
      id: 'fc3-6',
      lessonId: 'bai3',
      question: 'So sánh mức năng lượng của các electron thuộc cùng một lớp và thuộc cùng một phân lớp.',
      answer: 'Các electron cùng một lớp có mức năng lượng GẦN BẰNG NHAU. Các electron cùng một phân lớp có mức năng lượng BẰNG NHAU.',
      tag: 'Mức năng lượng'
    },
    {
      id: 'fc3-7',
      lessonId: 'bai3',
      question: 'Số thứ tự lớp n (n = 1, 2, 3, 4) tương ứng với tên gọi các lớp electron nào?',
      answer: 'n = 1 (lớp K), n = 2 (lớp L), n = 3 (lớp M), n = 4 (lớp N).',
      tag: 'Tên lớp e'
    },
    {
      id: 'fc3-8',
      lessonId: 'bai3',
      question: 'Số phân lớp electron trong lớp thứ n (với n ≤ 4) bằng bao nhiêu?',
      answer: 'Bằng n (Lớp K có 1 phân lớp 1s; Lớp L có 2 phân lớp 2s, 2p; Lớp M có 3 phân lớp 3s, 3p, 3d; Lớp N có 4 phân lớp 4s, 4p, 4d, 4f).',
      tag: 'Số phân lớp'
    },
    {
      id: 'fc3-9',
      lessonId: 'bai3',
      question: 'Cho biết số AO trong các phân lớp s, p, d, f.',
      answer: 'Phân lớp s có 1 AO; Phân lớp p có 3 AO; Phân lớp d có 5 AO; Phân lớp f có 7 AO.',
      tag: 'Số AO phân lớp'
    },
    {
      id: 'fc3-10',
      lessonId: 'bai3',
      question: 'Số AO tối đa và số electron tối đa trong lớp thứ n (n ≤ 4) được tính theo công thức nào?',
      answer: 'Số AO tối đa = n² AO; Số electron tối đa = 2n² electron.',
      tag: 'Số e tối đa lớp'
    },
    {
      id: 'fc3-11',
      lessonId: 'bai3',
      question: 'Số electron tối đa có trong các lớp K, L, M, N là bao nhiêu?',
      answer: 'Lớp K (n=1): 2e; Lớp L (n=2): 8e; Lớp M (n=3): 18e; Lớp N (n=4): 32e.',
      tag: 'Số e lớp K,L,M,N'
    },
    {
      id: 'fc3-12',
      lessonId: 'bai3',
      question: 'Nêu dãy sắp xếp mức năng lượng các phân lớp theo Nguyên lý vững bền.',
      answer: '1s 2s 2p 3s 3p 4s 3d 4p 5s 4d 5p 6s...',
      tag: 'Thứ tự năng lượng'
    },
    {
      id: 'fc3-13',
      lessonId: 'bai3',
      question: 'Phát biểu Quy tắc Hund.',
      answer: 'Trong cùng một phân lớp, các electron phân bố trên các AO sao cho số e độc thân là tối đa và các e này có chiều tự quay giống nhau.',
      tag: 'Quy tắc Hund'
    },
    {
      id: 'fc3-14',
      lessonId: 'bai3',
      question: 'Thế nào là nguyên tố s, nguyên tố p, nguyên tố d, nguyên tố f?',
      answer: 'Là nguyên tố mà nguyên tử có electron cuối cùng được điền vào phân lớp s, p, d hay f tương ứng.',
      tag: 'Phân loại nguyên tố'
    },
    {
      id: 'fc3-15',
      lessonId: 'bai3',
      question: 'Viết cấu hình electron nguyên tử của Chlorine (Z = 17). Chlorine là nguyên tố kim loại, phi kim hay khí hiếm?',
      answer: '1s² 2s² 2p⁶ 3s² 3p⁵. Có 7e ở lớp ngoài cùng (lớp 3) ⟹ Chlorine là nguyên tố PHI KIM.',
      tag: 'Cấu hình e Cl'
    },
    {
      id: 'fc3-16',
      lessonId: 'bai3',
      question: 'Viết cấu hình electron của Calcium (Z = 20). Cho biết tính chất hóa học cơ bản của Ca.',
      answer: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² (viết gọn [Ar] 4s²). Có 2e ở lớp ngoài cùng (lớp 4) ⟹ Ca là nguyên tố KIM LOẠI.',
      tag: 'Cấu hình e Ca'
    },
    {
      id: 'fc3-17',
      lessonId: 'bai3',
      question: 'Dựa vào số electron lớp ngoài cùng, làm sao để dự đoán nguyên tố là Kim loại, Phi kim hay Khí hiếm?',
      answer: '1, 2, 3e ngoài cùng ⟹ Kim loại (trừ H, He, B); 5, 6, 7e ngoài cùng ⟹ Phi kim; 8e ngoài cùng (He 2e) ⟹ Khí hiếm; 4e ⟹ Kim loại hoặc Phi kim.',
      tag: 'Dự đoán tính chất'
    }
  ],
  quizQuestions: [
    {
      id: 'q3-1',
      lessonId: 'bai3',
      question: 'Mô hình hiện đại mô tả sự chuyển động của electron trong nguyên tử như thế nào?',
      options: [
        'Chuyển động theo những quỹ đạo tròn xác định như hành tinh quay quanh Mặt Trời',
        'Chuyển động rất nhanh xung quanh hạt nhân không theo quỹ đạo xác định',
        'Đứng yên tại các vị trí cố định ở vỏ nguyên tử',
        'Chuyển động theo đường thẳng từ ngoài vào tâm hạt nhân'
      ],
      correctAnswerIndex: 1,
      explanation: 'Theo mô hình hiện đại, các electron chuyển động cực nhanh xung quanh hạt nhân không theo quỹ đạo xác định nào, tạo thành vùng đám mây electron.',
      topicTag: 'Mô hình nguyên tử'
    },
    {
      id: 'q3-2',
      lessonId: 'bai3',
      question: 'Orbital nguyên tử (AO) là vùng không gian xung quanh hạt nhân mà ở đó xác suất tìm thấy electron khoảng bao nhiêu %?',
      options: [
        '50%',
        '75%',
        '90%',
        '100%'
      ],
      correctAnswerIndex: 2,
      explanation: 'SGK trang 21 định nghĩa: Orbital nguyên tử (AO) là vùng không gian xung quanh hạt nhân mà ở đó xác suất tìm thấy (mặt) electron là lớn nhất, khoảng 90%.',
      topicTag: 'Khái niệm AO'
    },
    {
      id: 'q3-3',
      lessonId: 'bai3',
      question: 'Orbital s và orbital p có hình dạng lần lượt là:',
      options: [
        'Hình bầu dục và hình cầu',
        'Hình cầu và hình số 8 nổi',
        'Hình tròn và hình vuông',
        'Hình số 8 nổi và hình cầu'
      ],
      correctAnswerIndex: 1,
      explanation: 'Các AO s có dạng hình cầu. Các AO p có dạng hình số 8 nổi (định hướng theo 3 trục x, y, z).',
      topicTag: 'Hình dạng AO'
    },
    {
      id: 'q3-4',
      lessonId: 'bai3',
      question: 'Theo Nguyên lý loại trừ Pauli, số electron tối đa trong một ô orbital (AO) là:',
      options: [
        '1',
        '2',
        '6',
        '8'
      ],
      correctAnswerIndex: 1,
      explanation: 'Trong 1 orbital nguyên tử chỉ chứa tối đa 2 electron và 2 electron này có chiều tự quay ngược nhau (↑↓).',
      topicTag: 'Nguyên lý Pauli'
    },
    {
      id: 'q3-5',
      lessonId: 'bai3',
      question: 'Phát biểu nào sau đây đúng khi so sánh mức năng lượng của các electron?',
      options: [
        'Các electron thuộc cùng một lớp có mức năng lượng hoàn toàn bằng nhau',
        'Các electron thuộc cùng một phân lớp có mức năng lượng bằng nhau',
        'Electron ở lớp K có mức năng lượng cao hơn electron ở lớp L',
        'Các electron ở phân lớp 2p có mức năng lượng thấp hơn phân lớp 2s'
      ],
      correctAnswerIndex: 1,
      explanation: 'Các electron trên CÙNG MỘT PHÂN LỚP có mức năng lượng BẰNG NHAU. Các electron cùng lớp thì có mức năng lượng gần bằng nhau.',
      topicTag: 'Mức năng lượng'
    },
    {
      id: 'q3-6',
      lessonId: 'bai3',
      question: 'Số phân lớp electron có trong lớp M (n = 3) là:',
      options: [
        '1',
        '2',
        '3',
        '4'
      ],
      correctAnswerIndex: 2,
      explanation: 'Lớp M tương ứng n = 3 có đúng 3 phân lớp kí hiệu là 3s, 3p, 3d.',
      topicTag: 'Số phân lớp'
    },
    {
      id: 'q3-7',
      lessonId: 'bai3',
      question: 'Số lượng orbital (AO) lần lượt có trong các phân lớp s, p, d, f là:',
      options: [
        '1, 2, 3, 4',
        '1, 3, 5, 7',
        '2, 6, 10, 14',
        '1, 4, 9, 16'
      ],
      correctAnswerIndex: 1,
      explanation: 'Phân lớp s có 1 AO; phân lớp p có 3 AO; phân lớp d có 5 AO; phân lớp f có 7 AO.',
      topicTag: 'Số AO phân lớp'
    },
    {
      id: 'q3-8',
      lessonId: 'bai3',
      question: 'Số electron tối đa chứa trong lớp L (n = 2) là:',
      options: [
        '2',
        '8',
        '18',
        '32'
      ],
      correctAnswerIndex: 1,
      explanation: 'Công thức số e tối đa trong lớp n là 2n². Với lớp L (n = 2) ⟹ số e tối đa = 2 × 2² = 8 electron (gồm 2s² + 2p⁶).',
      topicTag: 'Số e tối đa lớp'
    },
    {
      id: 'q3-9',
      lessonId: 'bai3',
      question: 'Dãy sắp xếp các phân lớp theo chiều TĂNG DẦN của mức năng lượng (Nguyên lý vững bền) nào sau đây đúng?',
      options: [
        '1s < 2s < 2p < 3s < 3p < 3d < 4s',
        '1s < 2s < 2p < 3s < 3p < 4s < 3d',
        '1s < 2s < 3s < 2p < 3p < 4s < 3d',
        '1s < 2s < 2p < 3s < 3d < 3p < 4s'
      ],
      correctAnswerIndex: 1,
      explanation: 'Thứ tự mức năng lượng tăng dần là: 1s 2s 2p 3s 3p 4s 3d 4p... Chú ý phân lớp 4s có mức năng lượng thấp hơn 3d nên e điền vào 4s trước 3d.',
      topicTag: 'Thứ tự năng lượng'
    },
    {
      id: 'q3-10',
      lessonId: 'bai3',
      question: 'Cấu hình electron nguyên tử của Sodium (Na, Z = 11) là:',
      options: [
        '1s² 2s² 2p⁵ 3s²',
        '1s² 2s² 2p⁶ 3s¹',
        '1s² 2s² 2p⁶ 3p¹',
        '1s² 2s² 2p⁴ 3s³'
      ],
      correctAnswerIndex: 1,
      explanation: 'Na có Z = 11 e. Lần lượt điền e vào phân lớp: 1s² (2e) 2s² (2e) 2p⁶ (6e) 3s¹ (1e). Tổng = 11e. Viết gọn là [Ne] 3s¹.',
      topicTag: 'Cấu hình e Na'
    },
    {
      id: 'q3-11',
      lessonId: 'bai3',
      question: 'Nguyên tử Phosphorus (P) có Z = 15. Số electron độc thân của nguyên tử P ở trạng thái cơ bản là:',
      options: [
        '1',
        '2',
        '3',
        '5'
      ],
      correctAnswerIndex: 2,
      explanation: 'Cấu hình e của P (Z = 15) là 1s² 2s² 2p⁶ 3s² 3p³. Ở phân lớp 3p³, có 3 e điền vào 3 ô AO 3p (px, py, pz). Theo quy tắc Hund, cả 3 e này đều là electron độc thân (↑ ↑ ↑).',
      topicTag: 'Electron độc thân'
    },
    {
      id: 'q3-12',
      lessonId: 'bai3',
      question: 'Nguyên tử của nguyên tố X có cấu hình electron 1s² 2s² 2p⁶ 3s² 3p⁴. Khẳng định nào sau đây ĐÚNG về X?',
      options: [
        'X là kim loại vì có 2e lớp ngoài cùng',
        'X là phi kim vì có 6e lớp ngoài cùng',
        'X là khí hiếm vì phân lớp p đã bão hòa',
        'X là kim loại vì thuộc lớp M'
      ],
      correctAnswerIndex: 1,
      explanation: 'Lớp ngoài cùng của X là lớp thứ 3 (n = 3) gồm phân lớp 3s² 3p⁴ ⟹ Có 2 + 4 = 6 electron lớp ngoài cùng. Vì có 6e ngoài cùng nên X là nguyên tố PHI KIM (Sulfur S, Z = 16).',
      topicTag: 'Dự đoán tính chất'
    },
    {
      id: 'q3-13',
      lessonId: 'bai3',
      question: 'Nguyên tử Calcium (Ca, Z = 20) có cấu hình electron kết thúc ở phân lớp nào và thuộc loại nguyên tố gì?',
      options: [
        'Kết thúc ở 3p⁶, là nguyên tố p',
        'Kết thúc ở 4s², là nguyên tố s',
        'Kết thúc ở 3d², là nguyên tố d',
        'Kết thúc ở 4p², là nguyên tố p'
      ],
      correctAnswerIndex: 1,
      explanation: 'Cấu hình e đầy đủ của Ca (Z = 20) là 1s² 2s² 2p⁶ 3s² 3p⁶ 4s². Electron cuối cùng điền vào phân lớp 4s nên Ca là nguyên tố s.',
      topicTag: 'Nguyên tố s'
    },
    {
      id: 'q3-14',
      lessonId: 'bai3',
      question: 'Tổng số orbital (AO) có chứa electron của nguyên tử Oxygen (O, Z = 8) ở trạng thái cơ bản là:',
      options: [
        '3',
        '4',
        '5',
        '8'
      ],
      correctAnswerIndex: 2,
      explanation: 'Oxygen (Z = 8) có cấu hình e: 1s² 2s² 2p⁴. Biểu diễn ô AO: 1s (1 AO chứa 2e), 2s (1 AO chứa 2e), 2p⁴ (3 AO p chứa 4e: 1 AO chứa 2e ghép đôi + 2 AO chứa 1e độc thân). Tổng số AO chứa e = 1 + 1 + 3 = 5 AO.',
      topicTag: 'Số AO chứa e'
    },
    {
      id: 'q3-15',
      lessonId: 'bai3',
      question: 'Thế nào là lớp electron bão hòa?',
      options: [
        'Là lớp electron có chứa số electron bằng số proton',
        'Là lớp electron đã chứa số electron tối đa theo quy định (2n²)',
        'Là lớp electron có đúng 8 electron ngoài cùng',
        'Là lớp electron có số AO chưa đầy'
      ],
      correctAnswerIndex: 1,
      explanation: 'Lớp electron bão hòa là lớp đã chứa số electron đạt giá trị tối đa (Lớp K bão hòa có 2e, Lớp L bão hòa có 8e, Lớp M bão hòa có 18e,...).',
      topicTag: 'Lớp bão hòa'
    },
    {
      id: 'q3-16',
      lessonId: 'bai3',
      question: 'Dựa vào đặc điểm cấu hình electron lớp ngoài cùng, các nguyên tử nguyên tố Khí hiếm (trừ Helium) đều có bao nhiêu electron ở lớp ngoài cùng?',
      options: [
        '2e',
        '6e',
        '8e',
        '18e'
      ],
      correctAnswerIndex: 2,
      explanation: 'Các nguyên tử khí hiếm (Ne, Ar, Kr, Xe, Rn...) đều có 8 electron ở lớp ngoài cùng (dạng ns² np⁶) rất bền vững. Trừ Helium (He) chỉ có 2e ở lớp 1s².',
      topicTag: 'Khí hiếm'
    },
    {
      id: 'q3-17',
      lessonId: 'bai3',
      question: 'Cấu hình electron của nguyên tử Silicon (Si, Z = 14) được viết đầy đủ là:',
      options: [
        '1s² 2s² 2p⁶ 3s² 3p²',
        '1s² 2s² 2p⁶ 3s⁴',
        '1s² 2s² 2p⁶ 3s¹ 3p³',
        '1s² 2s² 2p⁵ 3s² 3p³'
      ],
      correctAnswerIndex: 0,
      explanation: 'Si có Z = 14 e. Lần lượt phân bố: 1s² (2e), 2s² (2e), 2p⁶ (6e), 3s² (2e), 3p² (2e). Cấu hình e: 1s² 2s² 2p⁶ 3s² 3p².',
      topicTag: 'Cấu hình e Si'
    }
  ]
};
