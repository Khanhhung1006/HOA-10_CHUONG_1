import { Lesson } from '../types';

export const bai4Data: Lesson = {
  id: 'bai4',
  number: 4,
  title: 'Ôn tập & Bài tập tổng hợp Chương 1',
  subtitle: 'Chương 1: Cấu tạo nguyên tử',
  description: 'Hệ thống hóa toàn bộ lý thuyết cốt lõi Chương 1 và phương pháp giải bài tập tính số hạt, đồng vị, cấu hình electron.',
  pageRange: 'Trang 26 - 28 (SGK Hóa học 10 - Kết nối tri thức)',
  sections: [
    {
      id: 'sec4-1',
      title: '1. Sơ đồ Hệ thống hóa kiến thức Chương 1',
      content: [
        'a) Cấu tạo nguyên tử:',
        '• Nguyên tử gồm 2 phần: Hạt nhân ở tâm và Lớp vỏ electron xung quanh.',
        '• Hạt nhân gồm: Proton (p, mang điện tích +1, m ≈ 1 amu) và Neutron (n, không mang điện, m ≈ 1 amu).',
        '• Lớp vỏ gồm: Electron (e, mang điện tích -1, m ≈ 0,00055 amu).',
        '• Trong nguyên tử trung hòa điện: Số p = Số e = Z (Số hiệu nguyên tử).',
        '• Số khối: A = Z + N (với N là số neutron).',
        '• Kí hiệu nguyên tử: ᴬ_Z X.',
        'b) Nguyên tố hóa học và Đồng vị:',
        '• Nguyên tố hóa học là tập hợp các nguyên tử có cùng số hiệu nguyên tử Z.',
        '• Đồng vị là các nguyên tử có cùng số p (Z) nhưng khác số n (N) ⟹ khác số khối A.',
        '• Nguyên tử khối trung bình: Ā = (a × A1 + b × A2 + ...) / 100.',
        'c) Cấu trúc lớp vỏ electron:',
        '• Orbital nguyên tử (AO): Vùng không gian xung quanh hạt nhân có xác suất tìm thấy e khoảng 90%. AO s có dạng hình cầu, AO p có dạng hình số 8 nổi.',
        '• Thứ tự mức năng lượng (Nguyên lý vững bền): 1s 2s 2p 3s 3p 4s 3d 4p 5s...',
        '• Lớp n (n ≤ 4) có n phân lớp (s, p, d, f), n² AO và chứa tối đa 2n² electron.',
        '• Số e lớp ngoài cùng: 1-3e (Kim loại), 5-7e (Phi kim), 8e (Khí hiếm, trừ He 2e).'
      ],
      keyPoints: [
        'Công thức cốt lõi: Z = p = e',
        'Công thức số khối: A = Z + N',
        'Công thức nguyên tử khối trung bình: Ā = (aA1 + bA2) / 100',
        'Thứ tự năng lượng: 1s 2s 2p 3s 3p 4s 3d 4p'
      ]
    },
    {
      id: 'sec4-2',
      title: '2. Phương pháp giải các Dạng Bài tập Trọng tâm Chương 1',
      content: [
        '★ Dạng 1: Bài tập lập hệ phương trình xác định số hạt cơ bản (p, n, e)',
        '• Gọi Z là số proton (số e = Z), N là số neutron.',
        '• Tổng số hạt cơ bản trong nguyên tử: S = p + n + e = 2Z + N.',
        '• Số hạt mang điện: 2Z (proton + electron).',
        '• Số hạt không mang điện: N (neutron).',
        '• Hệ phương trình hay gặp:',
        '   [1] 2Z + N = S  (Tổng số hạt)',
        '   [2] 2Z - N = k  (Số hạt mang điện nhiều hơn không mang điện k hạt)',
        '   ⟹ Giải hệ tính được Z và N ⟹ Xác định nguyên tố X và Số khối A = Z + N.',
        '• Lưu ý với các nguyên tố bền (Z ≤ 82):  1 ≤ N/Z ≤ 1,5  ⟹  S/3,5 ≤ Z ≤ S/3.',
        '★ Dạng 2: Bài tập Nguyên tử khối trung bình và Tỉ lệ % Đồng vị',
        '• Áp dụng Ā = (a × A1 + b × A2) / 100 với a + b = 100%.',
        '• Tìm % của đồng vị A1: a = [100 × (Ā - A2)] / (A1 - A2).',
        '• Bài tập tính % khối lượng của một đồng vị trong một hợp chất (ví dụ: % ³⁵Cl trong CuCl₂).',
        '★ Dạng 3: Bài tập Cấu hình Electron và Vị trí - Tính chất',
        '• Từ Z ⟹ Viết cấu hình e ⟹ Xác định số e lớp ngoài cùng ⟹ Kết luận Kim loại/Phi kim/Khí hiếm.',
        '• Từ cấu hình e dạng thu gọn [Khí hiếm]... ⟹ Tính Z ⟹ Xác định nguyên tố.'
      ],
      keyPoints: [
        'Hệ phương trình hạt: 2Z + N = S và 2Z - N = ΔHạt_mang_điện',
        'Đồng vị: Ā = (aA1 + bA2) / 100',
        'Đặc điểm lớp ngoài cùng quyết định tính chất hóa học'
      ],
      callout: {
        type: 'formula',
        title: 'Công thức kẹp nhanh giá trị Z khi chỉ biết Tổng số hạt S',
        text: 'Đối với các nguyên tố thuộc Z ≤ 82, ta luôn có: S / 3,5 ≤ Z ≤ S / 3'
      }
    }
  ],
  flashcards: [
    {
      id: 'fc4-1',
      lessonId: 'bai4',
      question: 'Tổng số hạt cơ bản trong một nguyên tử được tính theo công thức nào?',
      answer: 'S = p + n + e = 2Z + N (vì số p = số e = Z).',
      tag: 'Bài tập hạt'
    },
    {
      id: 'fc4-2',
      lessonId: 'bai4',
      question: 'Số hạt mang điện trong nguyên tử trung hòa là bao nhiêu?',
      answer: 'Là 2Z (gồm Z hạt proton mang điện tích +1 và Z hạt electron mang điện tích -1).',
      tag: 'Bài tập hạt'
    },
    {
      id: 'fc4-3',
      lessonId: 'bai4',
      question: 'Bất đẳng thức kẹp giá trị Z khi biết tổng số hạt S (đối với nguyên tố bền Z ≤ 82) là gì?',
      answer: 'S / 3,5 ≤ Z ≤ S / 3 (dựa vào điều kiện 1 ≤ N/Z ≤ 1,5).',
      tag: 'Mẹo kẹp Z'
    },
    {
      id: 'fc4-4',
      lessonId: 'bai4',
      question: 'Một nguyên tử X có tổng số hạt S = 58, số hạt mang điện nhiều hơn không mang điện là 18. Xác định Z và N của X.',
      answer: 'Hệ: 2Z + N = 58 và 2Z - N = 18 ⟹ 4Z = 76 ⟹ Z = 19 (Potassium K), N = 20.',
      tag: 'Giải bài tập hạt'
    },
    {
      id: 'fc4-5',
      lessonId: 'bai4',
      question: 'Khối lượng nguyên tử tập trung chủ yếu ở đâu và vì sao?',
      answer: 'Tập trung ở hạt nhân vì m(e) quá nhỏ (chỉ ≈ 0,00055 amu), không đáng kể so với m(p) và m(n) (đều ≈ 1 amu).',
      tag: 'Khối lượng nguyên tử'
    },
    {
      id: 'fc4-6',
      lessonId: 'bai4',
      question: 'Nêu công thức tính nguyên tử khối trung bình Ā khi có 2 đồng vị A1 (a%) và A2 (b%).',
      answer: 'Ā = (a × A1 + b × A2) / 100 với a + b = 100%.',
      tag: 'Công thức Ā'
    },
    {
      id: 'fc4-7',
      lessonId: 'bai4',
      question: 'Ví dụ: Chlorine có Ā = 35,5 với 2 đồng vị ³⁵Cl và ³⁷Cl. Tính phần trăm số nguyên tử của đồng vị ³⁵Cl.',
      answer: '75,77% (vì 35,5 = [35a + 37(100 - a)]/100 ⟹ 2a = 151,54 ⟹ a = 75,77%).',
      tag: 'Tính % đồng vị'
    },
    {
      id: 'fc4-8',
      lessonId: 'bai4',
      question: 'Nêu thứ tự điền electron vào các phân lớp theo Nguyên lý vững bền từ Z = 1 đến Z = 20.',
      answer: '1s 2s 2p 3s 3p 4s (chú ý 4s được điền trước 3d do có mức năng lượng thấp hơn).',
      tag: 'Thứ tự điền e'
    },
    {
      id: 'fc4-9',
      lessonId: 'bai4',
      question: 'Số electron tối đa trong các phân lớp s, p, d, f là bao nhiêu?',
      answer: 's² (2e), p⁶ (6e), d¹⁰ (10e), f¹⁴ (14e).',
      tag: 'Phân lớp bão hòa'
    },
    {
      id: 'fc4-10',
      lessonId: 'bai4',
      question: 'Công thức tính số AO tối đa và số electron tối đa trong lớp n (n ≤ 4) là gì?',
      answer: 'Số AO tối đa = n² AO; Số electron tối đa = 2n² electron.',
      tag: 'Công thức lớp e'
    },
    {
      id: 'fc4-11',
      lessonId: 'bai4',
      question: 'Lớp electron thứ 3 (lớp M) chứa tối đa bao nhiêu AO và bao nhiêu electron?',
      answer: 'n = 3 ⟹ Số AO tối đa = 3² = 9 AO; Số electron tối đa = 2 × 3² = 18 electron.',
      tag: 'Lớp M'
    },
    {
      id: 'fc4-12',
      lessonId: 'bai4',
      question: 'Dựa vào e lớp ngoài cùng, phân biệt Kim loại, Phi kim và Khí hiếm như thế nào?',
      answer: '1 - 3e lớp ngoài cùng: Kim loại (trừ H, He, B); 5 - 7e lớp ngoài cùng: Phi kim; 8e lớp ngoài cùng (He 2e): Khí hiếm; 4e: Kim loại hoặc Phi kim.',
      tag: 'Dự đoán tính chất'
    },
    {
      id: 'fc4-13',
      lessonId: 'bai4',
      question: 'Cho cấu hình e nguyên tử X: [Ar] 4s¹. Xác định Z, tên nguyên tố X và tính chất hóa học của X.',
      answer: 'Z = 18 ([Ar]) + 1 = 19 ⟹ Potassium (K). Có 1e lớp ngoài cùng (4s¹) ⟹ K là Kim loại kiềm mạnh.',
      tag: 'Cấu hình e K'
    },
    {
      id: 'fc4-14',
      lessonId: 'bai4',
      question: 'Nguyên tử nào có cấu hình e lớp ngoài cùng là 3s² 3p⁵? Nêu Z và tên nguyên tố.',
      answer: 'Cấu hình e đầy đủ: 1s² 2s² 2p⁶ 3s² 3p⁵ ⟹ Z = 17 ⟹ Chlorine (Cl).',
      tag: 'Cấu hình e Cl'
    },
    {
      id: 'fc4-15',
      lessonId: 'bai4',
      question: 'Ion Na⁺ được tạo thành như thế nào từ nguyên tử Na (Z = 11)? Viết cấu hình e của Na⁺.',
      answer: 'Nguyên tử Na (1s² 2s² 2p⁶ 3s¹) nhường 1e ở lớp ngoài cùng ⟹ Na⁺ có cấu hình e là 1s² 2s² 2p⁶ (giống cấu hình khí hiếm Ne).',
      tag: 'Cấu hình ion Na+'
    },
    {
      id: 'fc4-16',
      lessonId: 'bai4',
      question: 'Ion Cl⁻ được tạo thành như thế nào từ nguyên tử Cl (Z = 17)? Viết cấu hình e của Cl⁻.',
      answer: 'Nguyên tử Cl (1s² 2s² 2p⁶ 3s² 3p⁵) nhận 1e ⟹ Cl⁻ có cấu hình e là 1s² 2s² 2p⁶ 3s² 3p⁶ (giống cấu hình khí hiếm Ar).',
      tag: 'Cấu hình ion Cl-'
    }
  ],
  quizQuestions: [
    {
      id: 'q4-1',
      lessonId: 'bai4',
      question: 'Một nguyên tử X có tổng số hạt cơ bản (p, n, e) là 52, trong đó số hạt mang điện nhiều hơn số hạt không mang điện là 16. Số hiệu nguyên tử Z và số khối A của X lần lượt là:',
      options: [
        'Z = 17, A = 35',
        'Z = 17, A = 37',
        'Z = 18, A = 36',
        'Z = 16, A = 32'
      ],
      correctAnswerIndex: 0,
      explanation: 'Hệ phương trình: 2Z + N = 52 (1) và 2Z - N = 16 (2). Cộng (1) và (2) ⇒ 4Z = 68 ⇒ Z = 17 (Chlorine Cl). N = 52 - 2(17) = 18. Số khối A = Z + N = 17 + 18 = 35.',
      topicTag: 'Bài tập hạt'
    },
    {
      id: 'q4-2',
      lessonId: 'bai4',
      question: 'Tổng số hạt p, n, e trong nguyên tử Y là 34. Biết số hạt không mang điện chiếm khoảng 35,3% tổng số hạt. Nguyên tố Y là:',
      options: [
        'Sodium (Na, Z = 11)',
        'Magnesium (Mg, Z = 12)',
        'Aluminium (Al, Z = 13)',
        'Neon (Ne, Z = 10)'
      ],
      correctAnswerIndex: 0,
      explanation: 'Số hạt không mang điện N = 34 × 35,3% = 12 hạt. Lại có 2Z + N = 34 ⇒ 2Z + 12 = 34 ⇒ 2Z = 22 ⇒ Z = 11. Z = 11 chính là Sodium (Na).',
      topicTag: 'Bài tập hạt'
    },
    {
      id: 'q4-3',
      lessonId: 'bai4',
      question: 'Trong tự nhiên, Bromine (Br) có 2 đồng vị là ⁷⁹Br và ⁸¹Br với tỉ lệ phần trăm số nguyên tử tương ứng là 50,69% và 49,31%. Nguyên tử khối trung bình của Br là:',
      options: [
        '79,986',
        '80,000',
        '79,500',
        '80,500'
      ],
      correctAnswerIndex: 0,
      explanation: 'Ā = (79 × 50,69 + 81 × 49,31) / 100 = (4004,51 + 3994,11) / 100 = 7998,62 / 100 = 79,9862 ≈ 79,986 amu (SGK trang 68 là 79,904).',
      topicTag: 'Tính Ā'
    },
    {
      id: 'q4-4',
      lessonId: 'bai4',
      question: 'Cho cấu hình electron của 4 nguyên tử sau: (1) 1s² 2s² 2p⁶ 3s¹ ; (2) 1s² 2s² 2p⁶ 3s² 3p⁵ ; (3) 1s² 2s² 2p⁶ 3s² 3p⁶ ; (4) 1s² 2s² 2p⁶ 3s² 3p⁶ 4s². Dãy gồm các nguyên tử KIM LOẠI là:',
      options: [
        '(1) và (4)',
        '(2) và (3)',
        '(1) và (2)',
        '(3) và (4)'
      ],
      correctAnswerIndex: 0,
      explanation: '(1) có 1e ngoài cùng (3s¹) ⇒ Kim loại (Na); (2) có 7e ngoài cùng (3s²3p⁵) ⇒ Phi kim (Cl); (3) có 8e ngoài cùng (3s²3p⁶) ⇒ Khí hiếm (Ar); (4) có 2e ngoài cùng (4s²) ⇒ Kim loại (Ca). Vậy (1) và (4) là Kim loại.',
      topicTag: 'Dự đoán tính chất'
    },
    {
      id: 'q4-5',
      lessonId: 'bai4',
      question: 'Ion M²⁺ có cấu hình electron lớp ngoài cùng là 2s² 2p⁶. Số hiệu nguyên tử Z của nguyên tố M là:',
      options: [
        '10',
        '12',
        '8',
        '14'
      ],
      correctAnswerIndex: 1,
      explanation: 'Ion M²⁺ được tạo thành khi nguyên tử M nhường 2 electron. Cấu hình e của M²⁺ là 1s² 2s² 2p⁶ (10e). Do đó nguyên tử M ban đầu có 10 + 2 = 12 electron ⇒ Z = 12 (Magnesium Mg).',
      topicTag: 'Cấu hình e ion'
    },
    {
      id: 'q4-6',
      lessonId: 'bai4',
      question: 'Ion X⁻ có cấu hình electron là 1s² 2s² 2p⁶ 3s² 3p⁶. Tên nguyên tố X và tính chất của X là:',
      options: [
        'Argon (Ar), khí hiếm',
        'Chlorine (Cl), phi kim',
        'Potassium (K), kim loại',
        'Sulfur (S), phi kim'
      ],
      correctAnswerIndex: 1,
      explanation: 'Ion X⁻ thu được khi nguyên tử X nhận 1e. Cấu hình e của X⁻ có 18e ⇒ Nguyên tử X có 18 - 1 = 17e ⇒ Z = 17 (Chlorine Cl). Cl có 7e lớp ngoài cùng nên là Phi kim.',
      topicTag: 'Cấu hình e ion'
    },
    {
      id: 'q4-7',
      lessonId: 'bai4',
      question: 'Nguyên tử X có tổng số electron ở các phân lớp p là 11. Cấu hình electron nguyên tử X và số hiệu Z của X là:',
      options: [
        '1s² 2s² 2p⁶ 3s² 3p⁵ (Z = 17)',
        '1s² 2s² 2p⁶ 3s² 3p⁶ (Z = 18)',
        '1s² 2s² 2p⁵ (Z = 9)',
        '1s² 2s² 2p⁶ 3s² 3p⁴ (Z = 16)'
      ],
      correctAnswerIndex: 0,
      explanation: 'Tổng số e ở các phân lớp p là 11 = 6 (ở 2p) + 5 (ở 3p). Cấu hình e đầy đủ là 1s² 2s² 2p⁶ 3s² 3p⁵ ⟹ Z = 2 + 2 + 6 + 2 + 5 = 17 (Chlorine).',
      topicTag: 'Cấu hình e p'
    },
    {
      id: 'q4-8',
      lessonId: 'bai4',
      question: 'Biết tổng số hạt cơ bản trong nguyên tử X là 36. Tìm kí hiệu nguyên tử của X (biết X thuộc Z ≤ 82).',
      options: [
        '²⁴₁₂Mg',
        '²³₁₁Na',
        '²⁷₁₃Al',
        '¹²₆C'
      ],
      correctAnswerIndex: 0,
      explanation: 'Áp dụng công thức kẹp: S / 3,5 ≤ Z ≤ S / 3 ⇒ 36 / 3,5 ≤ Z ≤ 36 / 3 ⇒ 10,28 ≤ Z ≤ 12. Vì Z nguyên nên Z có thể là 11 hoặc 12.\n- Nếu Z = 11 ⇒ N = 36 - 2(11) = 14 ⇒ A = 25 (Loại ²⁵Na ít gặp).\n- Nếu Z = 12 ⇒ N = 36 - 2(12) = 12 ⇒ A = 12 + 12 = 24 (Thỏa mãn Magnesium ²⁴₁₂Mg).',
      topicTag: 'Bài tập kẹp Z'
    },
    {
      id: 'q4-9',
      lessonId: 'bai4',
      question: 'Nguyên tố Copper (Cu) có Ā = 63,546 gồm 2 đồng vị ⁶³Cu và ⁶⁵Cu. Tính số nguyên tử ⁶³Cu có trong 13,5 gam CuCl₂ (cho Cu = 63,546; Cl = 35,5; N_A = 6,022 × 10²³).',
      options: [
        '4,38 × 10²²',
        '6,02 × 10²²',
        '1,63 × 10²³',
        '2,19 × 10²²'
      ],
      correctAnswerIndex: 0,
      explanation: 'n(CuCl₂) = 13,5 / (63,546 + 71) = 13,5 / 134,546 = 0,1 mol ⟹ Số nguyên tử Cu = 0,1 × 6,022 × 10²³ = 6,022 × 10²² nguyên tử.\n% số nguyên tử ⁶³Cu = [65 - 63,546] / (65 - 63) = 72,7%.\nSố nguyên tử ⁶³Cu = 6,022 × 10²² × 72,7% = 4,378 × 10²² ≈ 4,38 × 10²² nguyên tử.',
      topicTag: 'Bài tập đồng vị nâng cao'
    },
    {
      id: 'q4-10',
      lessonId: 'bai4',
      question: 'Khái niệm nào sau đây mô tả đúng về phân lớp bão hòa?',
      options: [
        'Phân lớp đã chứa tối đa số electron theo quy định (s², p⁶, d¹⁰, f¹⁴)',
        'Phân lớp chứa một nửa số electron tối đa',
        'Phân lớp có chứa ít nhất 1 electron độc thân',
        'Phân lớp thuộc lớp ngoài cùng có đúng 8 electron'
      ],
      correctAnswerIndex: 0,
      explanation: 'Phân lớp bão hòa là phân lớp đã điền đầy đủ số electron tối đa (s², p⁶, d¹⁰, f¹⁴).',
      topicTag: 'Phân lớp bão hòa'
    },
    {
      id: 'q4-11',
      lessonId: 'bai4',
      question: 'Cho biết nguyên tử Phosphorus (P) có Z = 15. Trong hạt nhân P có 16 neutron. Phát biểu nào sau đây SAI?',
      options: [
        'Số khối của P là A = 31',
        'Nguyên tử P có 5 electron ở lớp ngoài cùng',
        'P là nguyên tố kim loại',
        'Trong nguyên tử P có 3 electron độc thân'
      ],
      correctAnswerIndex: 2,
      explanation: 'Cấu hình e của P (Z = 15): 1s² 2s² 2p⁶ 3s² 3p³. Có 5e lớp ngoài cùng (3s² 3p³) nên P là PHI KIM (nhận định C SAI vì bảo P là kim loại).',
      topicTag: 'Dự đoán tính chất'
    },
    {
      id: 'q4-12',
      lessonId: 'bai4',
      question: 'Phát biểu nào đúng đối với các orbital trong cùng một phân lớp p (2px, 2py, 2pz)?',
      options: [
        'Có hình dạng giống nhau nhưng định hướng khác nhau trong không gian',
        'Có mức năng lượng khác nhau',
        'Mỗi orbital chứa tối đa 6 electron',
        'Có hình dạng và kích thước hoàn toàn khác nhau'
      ],
      correctAnswerIndex: 0,
      explanation: 'Các AO px, py, pz trong cùng phân lớp p đều có dạng hình số 8 nổi và có mức năng lượng bằng nhau, chỉ khác nhau về sự định hướng vuông góc theo 3 trục x, y, z trong không gian.',
      topicTag: 'Đặc điểm AO p'
    },
    {
      id: 'q4-13',
      lessonId: 'bai4',
      question: 'Nguyên tử X có tổng số hạt là 28, trong đó số hạt mang điện nhiều hơn hạt không mang điện là 8. Số electron độc thân của X là:',
      options: [
        '0',
        '1',
        '2',
        '3'
      ],
      correctAnswerIndex: 1,
      explanation: '2Z + N = 28 và 2Z - N = 8 ⇒ 4Z = 36 ⇒ Z = 9 (Fluorine F). Cấu hình e của F (Z = 9): 1s² 2s² 2p⁵. Phân lớp 2p⁵ có 5e xếp vào 3 AO p: (↑↓) (↑↓) (↑) ⇒ Có đúng 1 electron độc thân.',
      topicTag: 'Electron độc thân'
    },
    {
      id: 'q4-14',
      lessonId: 'bai4',
      question: 'Cấu hình electron của nguyên tử Iron (Fe, Z = 26) ở trạng thái cơ bản là:',
      options: [
        '1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁸',
        '1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁶ 4s²',
        '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d⁶',
        '1s² 2s² 2p⁶ 3s² 3p⁶ 4s⁸'
      ],
      correctAnswerIndex: 1,
      explanation: 'Theo thứ tự năng lượng: 1s² 2s² 2p⁶ 3s² 3p⁶ 4s² (20e) 3d⁶ (6e). Sắp xếp lại theo từng lớp: 1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁶ 4s² (Viết gọn [Ar] 3d⁶ 4s²).',
      topicTag: 'Cấu hình e Fe'
    },
    {
      id: 'q4-15',
      lessonId: 'bai4',
      question: 'Cho 3 nguyên tử: ¹²₆C, ¹³₇N, ¹⁴₈O. Điểm GIỐNG NHAU giữa 3 nguyên tử này là:',
      options: [
        'Cùng số khối A',
        'Cùng số neutron N = 6',
        'Cùng số proton Z',
        'Cùng số electron ở vỏ'
      ],
      correctAnswerIndex: 1,
      explanation: 'Tính số neutron N = A - Z:\n- ¹²₆C: N = 12 - 6 = 6\n- ¹³₇N: N = 13 - 7 = 6\n- ¹⁴₈O: N = 14 - 8 = 6\nCả 3 nguyên tử này đều có số neutron N = 6.',
      topicTag: 'Tính số n'
    },
    {
      id: 'q4-16',
      lessonId: 'bai4',
      question: 'Nguyên tử khối trung bình của Argon là 39,95 amu. Hỏi trong 1 mol khí Argon ở điều kiện chuẩn có chứa bao nhiêu gam ⁴⁰Ar (biết ⁴⁰Ar chiếm 99,60% số nguyên tử)?',
      options: [
        '39,84 gam',
        '39,95 gam',
        '40,00 gam',
        '35,50 gam'
      ],
      correctAnswerIndex: 0,
      explanation: '1 mol Argon có m = 39,95g (hoặc 1 mol Ar gồm 6,022 × 10²³ nguyên tử Ar). Số mol ⁴⁰Ar = 1 mol × 99,60% = 0,996 mol. Khối lượng của ⁴⁰Ar ≈ 0,996 mol × 40 g/mol = 39,84 gam.',
      topicTag: 'Tính toán đồng vị'
    }
  ]
};
