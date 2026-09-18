import { TheorySectionData, Flashcard, QuizQuestion } from '../../types';

export const lesson22Theory: TheorySectionData = {
  id: 'bai-22',
  chapterId: 'chuong-5',
  title: 'Bài 22: Ôn tập & Tổng kết Chương 5 (Dẫn xuất Halogen - Alcohol - Phenol)',
  objectives: [
    'Hệ thống hoá kiến thức về cấu tạo, tính chất vật lí và tính chất hoá học của Dẫn xuất halogen, Alcohol và Phenol.',
    'So sánh sự giống và khác nhau giữa Alcohol và Phenol về đặc điểm cấu tạo và tính chất hoá học.',
    'Nắm vững mối liên hệ chuyển hoá giữa Dẫn xuất halogen, Alcohol, Phenol và các hợp chất hydrocarbon, aldehyde, ketone.',
    'Vận dụng giải các bài tập trắc nghiệm và tự luận tổng hợp chương 5.'
  ],
  summary: 'Chương 5 bao gồm 3 nhóm hợp chất hữu cơ chứa nhóm chức quan trọng: Dẫn xuất halogen ($R-X$), Alcohol ($R-OH$) và Phenol ($C_6H_5OH$). Dẫn xuất halogen đặc trưng bởi phản ứng thế halogeno (thuỷ phân) và phản ứng tách $HX$ tạo alkene. Alcohol có liên kết hydrogen liên phân tử mạnh nên nhiệt độ sôi cao, phản ứng với $Na$, tạo ether ($140^\\circ C$), tách nước alkene ($170^\\circ C$), oxi hoá tạo aldehyde/ketone và polyalcohol kề nhau hoà tan $Cu(OH)_2$. Phenol có nhóm -OH gắn trực tiếp vòng thơm nên có tính acid yếu (tác dụng với $NaOH$) và phản ứng thế vòng thơm cực kỳ dễ dàng với nước $Br_2$ (tủa trắng) và $HNO_3$ đặc (tủa vàng).',
  coreKnowledge: [
    {
      heading: '1. Sơ đồ hệ thống hoá mối liên hệ các chất Chương 5',
      points: [
        'Dẫn xuất halogen ($R-X$) $\\xrightarrow{NaOH, H_2O, t^\\circ} R-OH \\text{ (Alcohol)}$.',
        'Dẫn xuất halogen ($R-X, R \\ge 2C$) $\\xrightarrow{NaOH, C_2H_5OH, t^\\circ} \\text{Alkene} + HX$.',
        'Alcohol no đơn chức ($R-OH$) $\\xrightarrow{Na} R-ONa + H_2\\uparrow$.',
        'Alcohol no đơn chức ($R-OH$) $\\xrightarrow{H_2SO_4 \\text{ đặc}, 140^\\circ C} R-O-R \\text{ (Ether)}$.',
        'Alcohol no đơn chức ($R-OH$) $\\xrightarrow{H_2SO_4 \\text{ đặc}, 170^\\circ C} \\text{Alkene} + H_2O \\text{ (Quy tắc Zaitsev)}$.',
        'Alcohol bậc I $\\xrightarrow{CuO, t^\\circ} \\text{Aldehyde} + Cu + H_2O$.',
        'Alcohol bậc II $\\xrightarrow{CuO, t^\\circ} \\text{Ketone} + Cu + H_2O$.',
        'Polyalcohol kề nhau + $Cu(OH)_2 \\rightarrow \\text{Dung dịch phức màu xanh lam đậm}$.',
        'Phenol ($C_6H_5OH$) $\\xrightarrow{NaOH} C_6H_5ONa + H_2O$.',
        'Sodium phenolate ($C_6H_5ONa$) $\\xrightarrow{CO_2 + H_2O} C_6H_5OH\\downarrow \\text{ (đục)} + NaHCO_3$.',
        'Phenol ($C_6H_5OH$) + $3Br_2 \\rightarrow 2,4,6\\text{-tribromophenol}\\downarrow \\text{ (trắng)} + 3HBr$.',
        'Phenol ($C_6H_5OH$) + $3HNO_3 \\xrightarrow{H_2SO_4 \\text{ đặc}, t^\\circ} 2,4,6\\text{-trinitrophenol}\\downarrow \\text{ (vàng - picric acid)} + 3H_2O$.'
      ]
    },
    {
      heading: '2. Bảng so sánh chi tiết Alcohol và Phenol',
      points: [
        'Giống nhau: Đều chứa nhóm hydroxy ($-OH$) trong phân tử, phản ứng được với kim loại kiềm ($Na, K$) giải phóng $H_2$.',
        'Khác nhau về Cấu tạo: Alcohol có nhóm -OH gắn với C no. Phenol có nhóm -OH gắn trực tiếp với C của vòng thơm.',
        'Khác nhau về Phản ứng với kiềm: Alcohol KHÔNG phản ứng với dung dịch $NaOH$. Phenol phản ứng DỄ DÀNG với dung dịch $NaOH$ tạo muối sodium phenolate.',
        'Khác nhau về Phản ứng với nước Bromine: Alcohol KHÔNG phản ứng với nước bromine ở điều kiện thường. Phenol phản ứng NGAY với nước bromine tạo kết tủa trắng 2,4,6-tribromophenol.',
        'Khác nhau về Phản ứng tách nước: Alcohol có phản ứng tách nước tạo alkene/ether. Phenol KHÔNG có phản ứng tách nước tạo alkene.'
      ]
    }
  ],
  formulas: [
    {
      name: 'Mối liên hệ Alcohol - Phenol - Dẫn xuất Halogen',
      latex: 'RX \\xrightarrow{NaOH/H_2O, t^\\circ} ROH \\quad \\text{và} \\quad C_6H_5OH + NaOH \\rightarrow C_6H_5ONa + H_2O',
      description: 'Phản ứng chuyển hoá đặc trưng của dẫn xuất halogen và phenol.'
    }
  ],
  keyConcepts: [
    {
      term: 'Liên kết Hydrogen liên phân tử',
      definition: 'Nguyên nhân làm cho Alcohol có nhiệt độ sôi cao hơn Hydrocarbon và Dẫn xuất Halogen tương đương.'
    },
    {
      term: 'Ảnh hưởng nhóm chức',
      definition: 'Nhóm -OH và vòng thơm tương tác làm tăng tính acid của nhóm -OH đồng thời làm tăng khả năng thế của vòng thơm tại vị trí o-, p-.'
    }
  ],
  examples: [
    {
      title: 'Ví dụ: Phân biệt 3 chất lỏng mất nhãn',
      content: 'Trình bày phương pháp hoá học để phân biệt 3 chất lỏng riêng biệt: hexane, ethanol và phenol.',
      solution: '- Trích mẫu thử và thử lần lượt:\n- Cho nước bromine dư vào 3 mẫu thử:\n  + Mẫu thử xuất hiện kết tủa màu trắng là phenol ($C_6H_5OH + 3Br_2 \\rightarrow C_6H_2Br_3OH\\downarrow + 3HBr$).\n  + Hai mẫu còn lại không hiện tượng.\n- Cho miếng kim loại $Na$ nhỏ vào 2 mẫu còn lại:\n  + Mẫu xuất hiện sủi bọt khí không màu là ethanol ($2C_2H_5OH + 2Na \\rightarrow 2C_2H_5ONa + H_2\\uparrow$).\n  + Mẫu không hiện tượng là hexane.'
    }
  ],
  commonMistakes: [
    {
      mistake: 'Quên rằng $CO_2 + H_2O$ chỉ đẩy được Phenol ra khỏi muối Phenolate mà không đẩy được Alcohol.',
      correction: 'Phenol có tính acid mạnh hơn $HCO_3^-$ nên bị $H_2CO_3$ đẩy ra khỏi sodium phenolate tạo $NaHCO_3$. Alcohol không có tính acid đủ để tạo muối với NaOH.',
      why: 'Sự chênh lệch tính acid giữa alcohol, phenol và carbonic acid.'
    }
  ],
  memoryTips: [
    'Thứ tự nhiệt độ sôi: Hydrocarbon < Ether < Dẫn xuất Halogen < Alcohol < Carboxylic acid.',
    'Nhận biết nhanh: Polyalcohol kề nhau $\\rightarrow Cu(OH)_2$ xanh thẫm; Phenol $\\rightarrow$ Nước $Br_2$ tủa trắng.'
  ],
  glossary: [
    { term: 'R32', meaning: 'Chất làm lạnh HFC ($CH_2F_2$) an toàn với tầng ozone.' },
    { term: 'Cumene', meaning: 'Nguyên liệu chính sản xuất phenol và acetone trong công nghiệp.' }
  ],
  reviewChecklist: [
    'Phân biệt được đặc điểm cấu tạo và tính chất của Dẫn xuất Halogen, Alcohol, Phenol.',
    'Viết thành thạo sơ đồ chuyển hoá giữa các hợp chất hữu cơ Chương 5.',
    'Hoàn thành đề kiểm tra tổng hợp Chương 5.'
  ]
};

export const lesson22Flashcards: Flashcard[] = [
  {
    id: 'fc-22-1',
    lessonId: 'bai-22',
    front: 'Sắp xếp theo chiều TĂNG DẦN nhiệt độ sôi của: $C_2H_6, C_2H_5Cl, C_2H_5OH, CH_3OCH_3$.',
    back: '$C_2H_6 < CH_3OCH_3 < C_2H_5Cl < C_2H_5OH$.',
    category: 'chuong-5'
  },
  {
    id: 'fc-22-2',
    lessonId: 'bai-22',
    front: 'Sắp xếp theo chiều TĂNG DẦN tính acid của: $C_2H_5OH, C_6H_5OH, H_2CO_3, CH_3COOH$.',
    back: '$C_2H_5OH < C_6H_5OH < H_2CO_3 < CH_3COOH$.',
    category: 'chuong-5'
  },
  {
    id: 'fc-22-3',
    lessonId: 'bai-22',
    front: 'Nêu thuốc thử hoá học để phân biệt ngay ethanol và glycerol.',
    back: 'Dung dịch $Cu(OH)_2$ ở nhiệt độ thường (Glycerol hoà tan $Cu(OH)_2$ tạo dung dịch xanh lam đậm, ethanol không phản ứng).',
    category: 'chuong-5'
  },
  {
    id: 'fc-22-4',
    lessonId: 'bai-22',
    front: 'Nêu thuốc thử hoá học để phân biệt ngay ethanol và phenol.',
    back: 'Dung dịch $NaOH$ hoặc dung dịch nước bromine $Br_2$ (Phenol phản ứng tạo kết tủa trắng với nước $Br_2$, ethanol không phản ứng).',
    category: 'chuong-5'
  },
  {
    id: 'fc-22-5',
    lessonId: 'bai-22',
    front: 'Viết sản phẩm oxi hoá của propan-1-ol và propan-2-ol với $CuO, t^\\circ$.',
    back: '- Propan-1-ol $\\rightarrow$ Propanal ($CH_3CH_2CHO$).\n- Propan-2-ol $\\rightarrow$ Propanone ($CH_3COCH_3$).',
    category: 'chuong-5'
  },
  {
    id: 'fc-22-6',
    lessonId: 'bai-22',
    front: 'Số alkene tối đa tạo thành khi tách nước 2-butan-2-ol ở $170^\\circ C$ ($H_2SO_4$ đặc) tính cả đồng phân hình học là bao nhiêu?',
    back: '3 alkene (but-1-ene, cis-but-2-ene, trans-but-2-ene).',
    category: 'chuong-5'
  },
  {
    id: 'fc-22-7',
    lessonId: 'bai-22',
    front: 'Số ether tạo thành tối đa khi đun hỗn hợp $CH_3OH$ và $C_2H_5OH$ với $H_2SO_4$ đặc ở $140^\\circ C$ là bao nhiêu?',
    back: '3 ether ($CH_3OCH_3, C_2H_5OC_2H_5, CH_3OC_2H_5$).',
    category: 'chuong-5'
  },
  {
    id: 'fc-22-8',
    lessonId: 'bai-22',
    front: 'Phương trình chứng minh phenol có tính acid yếu hơn $H_2CO_3$ là gì?',
    back: '$C_6H_5ONa + CO_2 + H_2O \\rightarrow C_6H_5OH\\downarrow + NaHCO_3$.',
    category: 'chuong-5'
  },
  {
    id: 'fc-22-9',
    lessonId: 'bai-22',
    front: 'Nêu sản phẩm của phản ứng thế thuỷ phân bromoethane ($C_2H_5Br$) với dung dịch $NaOH$ đun nóng.',
    back: 'Ethanol ($C_2H_5OH$) và $NaBr$.',
    category: 'chuong-5'
  },
  {
    id: 'fc-22-10',
    lessonId: 'bai-22',
    front: 'Quy tắc Zaitsev được áp dụng cho những loại phản ứng nào trong Chương 5?',
    back: 'Phản ứng tách $HX$ từ dẫn xuất halogen và phản ứng tách $H_2O$ từ alcohol tạo alkene.',
    category: 'chuong-5'
  },
  {
    id: 'fc-22-11',
    lessonId: 'bai-22',
    front: 'Tại sao phenol tan ít trong nước lạnh nhưng tan tốt trong dung dịch $NaOH$?',
    back: 'Vì phenol phản ứng với $NaOH$ tạo muối $C_6H_5ONa$ (sodium phenolate) thuộc hợp chất ion dễ tan trong nước.',
    category: 'chuong-5'
  },
  {
    id: 'fc-22-12',
    lessonId: 'bai-22',
    front: 'Chất $C_6H_5CH_2OH$ thuộc loại hợp chất nào và có tác dụng với $NaOH$ không?',
    back: 'Thuộc loại ALCOHOL THƠM (benzyl alcohol), KHÔNG tác dụng với $NaOH$.',
    category: 'chuong-5'
  },
  {
    id: 'fc-22-13',
    lessonId: 'bai-22',
    front: 'Thành phần chính của xăng E5 chứa bao nhiêu % thể tích ethanol sinh học?',
    back: '5% thể tích ethanol nguyên chất (95% còn lại là xăng RON 92).',
    category: 'chuong-5'
  },
  {
    id: 'fc-22-14',
    lessonId: 'bai-22',
    front: 'Nguyên liệu chính và các phản ứng cốt lõi sản xuất phenol trong công nghiệp hiện nay?',
    back: 'Oxi hoá Cumene (isopropylbenzene) bằng $O_2$ rồi thuỷ phân acid $\\rightarrow$ Phenol + Acetone.',
    category: 'chuong-5'
  },
  {
    id: 'fc-22-15',
    lessonId: 'bai-22',
    front: 'Phản ứng nhận biết tính acid yếu của phenol với $Na_2CO_3$ sinh ra muối nào?',
    back: 'Sinh ra $C_6H_5ONa$ và $NaHCO_3$ ($C_6H_5OH + Na_2CO_3 \\rightleftharpoons C_6H_5ONa + NaHCO_3$).',
    category: 'chuong-5'
  }
];

export const lesson22Quizzes: QuizQuestion[] = [
  {
    id: 'q-22-1',
    lessonId: 'bai-22',
    question: 'Trong các chất sau: hexane, bromoethane, ethanol, phenol. Chất có độ tan tốt nhất trong nước ở điều kiện thường là:',
    options: [
      { id: 'A', text: 'Hexane' },
      { id: 'B', text: 'Bromoethane' },
      { id: 'C', text: 'Ethanol' },
      { id: 'D', text: 'Phenol' }
    ],
    correctAnswer: 'C',
    explanation: 'Ethanol tan vô hạn trong nước nhờ khả năng tạo liên kết hydrogen mạnh với nước. Hexane, bromoethane hầu như không tan, phenol ít tan ở $25^\\circ C$.',
    difficulty: 'NhanBiet',
    source: 'SBT Hoá học 11 - Bài 22'
  },
  {
    id: 'q-22-2',
    lessonId: 'bai-22',
    question: 'Phản ứng thuỷ phân dẫn xuất halogen trong môi trường kiềm thuộc loại phản ứng nào?',
    options: [
      { id: 'A', text: 'Phản ứng thế' },
      { id: 'B', text: 'Phản ứng cộng' },
      { id: 'C', text: 'Phản ứng tách' },
      { id: 'D', text: 'Phản ứng oxi hoá - khử' }
    ],
    correctAnswer: 'A',
    explanation: '$R-X + OH^- \\xrightarrow{t^\\circ} R-OH + X^-$ là phản ứng thế nguyên tử halogen bằng nhóm hydroxy $-OH$.',
    difficulty: 'NhanBiet',
    source: 'SBT Hoá học 11 - Bài 22'
  },
  {
    id: 'q-22-3',
    lessonId: 'bai-22',
    question: 'Cho các phát biểu sau về phenol:\n(a) Phenol có nhiệt độ sôi cao hơn ethanol.\n(b) Phenol tác dụng được với dung dịch $NaOH$.\n(c) Phenol phản ứng được với dung dịch $Na_2CO_3$.\n(d) Phản ứng thế vào vòng thơm của phenol dễ hơn thế vào vòng benzene.\nSố phát biểu đúng là:',
    options: [
      { id: 'A', text: '1' },
      { id: 'B', text: '2' },
      { id: 'C', text: '3' },
      { id: 'D', text: '4' }
    ],
    correctAnswer: 'D',
    explanation: 'Cả 4 phát biểu (a), (b), (c), (d) đều hoàn toàn chính xác theo nội dung SGK.',
    difficulty: 'ThongHieu',
    source: 'SBT Hoá học 11 - Bài 22'
  },
  {
    id: 'q-22-4',
    lessonId: 'bai-22',
    question: 'Cho ba ống nghiệm chứa riêng biệt 3 hợp chất: ethanol, glycerol, phenol. Dùng chuỗi thuốc thử nào dưới đây để phân biệt được cả 3 chất?',
    options: [
      { id: 'A', text: 'Quỳ tím, dung dịch $NaOH$' },
      { id: 'B', text: 'Dung dịch $Cu(OH)_2$, dung dịch nước $Br_2$' },
      { id: 'C', text: 'Kim loại $Na$, dung dịch $AgNO_3$' },
      { id: 'D', text: 'Dung dịch $NaOH$, kim loại $Na$' }
    ],
    correctAnswer: 'B',
    explanation: 'Cho $Cu(OH)_2$ phân biệt được glycerol (dung dịch xanh lam đậm). Dùng nước $Br_2$ thử 2 chất còn lại phân biệt được phenol (kết tủa trắng), còn lại là ethanol.',
    difficulty: 'ThongHieu',
    source: 'SBT Hoá học 11 - Bài 22'
  },
  {
    id: 'q-22-5',
    lessonId: 'bai-22',
    question: 'Hợp chất $X$ phản ứng với $Na$ sinh ra khí $H_2$, phản ứng với $NaOH$ tạo muối $Y$, nhưng không làm đổi màu giấy quỳ tím. $X$ là chất nào?',
    options: [
      { id: 'A', text: '$C_2H_5OH$' },
      { id: 'B', text: '$C_6H_5OH$' },
      { id: 'C', text: '$CH_3COOH$' },
      { id: 'D', text: '$C_6H_5CH_2OH$' }
    ],
    correctAnswer: 'B',
    explanation: 'Phenol ($C_6H_5OH$) có tính acid yếu: phản ứng với Na, NaOH nhưng quá yếu để làm đổi màu quỳ tím.',
    difficulty: 'ThongHieu',
    source: 'SGK Hoá học 11 - Bài 22'
  },
  {
    id: 'q-22-6',
    lessonId: 'bai-22',
    question: 'Đun nóng alcohol $X$ với $H_2SO_4$ đặc ở $170^\\circ C$ thu được duy nhất một alkene là but-2-ene. Công thức cấu tạo của $X$ là:',
    options: [
      { id: 'A', text: '$CH_3-CH_2-CH_2-CH_2OH$' },
      { id: 'B', text: '$CH_3-CH(OH)-CH_2-CH_3$' },
      { id: 'C', text: '$(CH_3)_3C-OH$' },
      { id: 'D', text: '$CH_3-CH(CH_3)-CH_2OH$' }
    ],
    correctAnswer: 'B',
    explanation: 'Butan-2-ol ($CH_3-CH(OH)-CH_2-CH_3$) tách nước theo Zaitsev tạo but-2-ene là sản phẩm chính duy nhất đối xứng.',
    difficulty: 'ThongHieu',
    source: 'SBT Hoá học 11 - Bài 22'
  },
  {
    id: 'q-22-7',
    lessonId: 'bai-22',
    question: 'Chất $X$ có công thức phân tử $C_8H_{10}O$, chứa vòng benzene, tác dụng được với $Na$ nhưng không tác dụng với $NaOH$. Khi oxi hoá $X$ bằng $CuO, t^\\circ$ thu được ketone $Z$. Công thức cấu tạo của $X$ là:',
    options: [
      { id: 'A', text: '$C_6H_5-CH_2-CH_2OH$' },
      { id: 'B', text: '$C_6H_5-CH(OH)-CH_3$' },
      { id: 'C', text: '$CH_3-C_6H_4-CH_2OH$' },
      { id: 'D', text: '$C_6H_3(CH_3)_2OH$' }
    ],
    correctAnswer: 'B',
    explanation: '$X$ tác dụng Na nhưng không tác dụng NaOH $\\rightarrow X$ là alcohol thơm. $X$ bị $CuO$ oxi hoá ra ketone $\\rightarrow X$ phải là alcohol bậc II: $C_6H_5-CH(OH)-CH_3$.',
    difficulty: 'VanDung',
    source: 'SBT Hoá học 11 - Bài 22'
  },
  {
    id: 'q-22-8',
    lessonId: 'bai-22',
    question: 'Cho 0,1 mol hỗn hợp $X$ gồm $C_2H_5OH$ và $C_6H_5OH$ tác dụng vừa đủ với 100 mL dung dịch $NaOH$ 0,5M. Phần trăm số mol của $C_2H_5OH$ trong $X$ là:',
    options: [
      { id: 'A', text: '20%' },
      { id: 'B', text: '50%' },
      { id: 'C', text: '60%' },
      { id: 'D', text: '80%' }
    ],
    correctAnswer: 'B',
    explanation: 'Chỉ có phenol tác dụng $NaOH$: $n_{\\text{phenol}} = n_{NaOH} = 0,1 \\cdot 0,5 = 0,05 \\text{ mol}$. $n_{C_2H_5OH} = 0,1 - 0,05 = 0,05 \\text{ mol} \\Rightarrow \\%n_{C_2H_5OH} = 50\\%$.',
    difficulty: 'VanDung',
    source: 'SBT Hoá học 11 - Bài 22'
  },
  {
    id: 'q-22-9',
    lessonId: 'bai-22',
    question: 'Khi đo nồng độ cồn của người điều khiển phương tiện giao thông qua hơi thở, thiết bị dựa trên phản ứng oxi hoá ethanol bằng hoá chất chứa $K_2Cr_2O_7$ trong môi trường $H_2SO_4$. Hiện tượng quan sát được khi có cồn là:',
    options: [
      { id: 'A', text: 'Chuyển từ màu da cam sang màu xanh lá cây của ion $Cr^{3+}$.' },
      { id: 'B', text: 'Xuất hiện kết tủa màu vàng tươi.' },
      { id: 'C', text: 'Dung dịch hoá thành màu tím thẫm.' },
      { id: 'D', text: 'Có bọt khí $CO_2$ thoát ra mãnh liệt.' }
    ],
    correctAnswer: 'A',
    explanation: 'Potassium dichromate ($K_2Cr_2O_7$) màu da cam bị $C_2H_5OH$ khử thành muối $Cr^{3+}$ ($Cr_2(SO_4)_3$) màu xanh lá cây.',
    difficulty: 'ThongHieu',
    source: 'SBT Hoá học 11 - Bài 22'
  },
  {
    id: 'q-22-10',
    lessonId: 'bai-22',
    question: 'Hiện nay, để giảm nguy cơ cháy nổ và bảo vệ môi trường, các hợp chất CFC từng làm chất làm lạnh đã bị cấm theo Nghị định thư Montréal và được thay thế bằng hợp chất nào?',
    options: [
      { id: 'A', text: 'Hydrofluorocarbon (HFC) và Hydrofluoroolefin (HFO)' },
      { id: 'B', text: 'Carbon tetrachloride ($CCl_4$)' },
      { id: 'C', text: 'Chloroform ($CHCl_3$)' },
      { id: 'D', text: 'Dẫn xuất Polychlorinated biphenyl (PCB)' }
    ],
    correctAnswer: 'A',
    explanation: 'HFC và HFO không chứa chlorine nên không gây suy giảm tầng ozone.',
    difficulty: 'NhanBiet',
    source: 'SGK Hoá học 11 - Bài 22'
  }
];

export const finalChapter5ExamQuizzes: QuizQuestion[] = [
  {
    id: 'c5-exam-1',
    chapterId: 'chuong-5',
    lessonId: 'final-exam-c5',
    question: 'Dẫn xuất halogen nào sau đây thuộc loại hợp chất $C_n H_{2n+1}X$?',
    options: [
      { id: 'A', text: 'Vinyl chloride ($CH_2=CHCl$)' },
      { id: 'B', text: 'Ethyl chloride ($CH_3CH_2Cl$)' },
      { id: 'C', text: 'Chlorobenzene ($C_6H_5Cl$)' },
      { id: 'D', text: 'Allyl chloride ($CH_2=CHCH_2Cl$)' }
    ],
    correctAnswer: 'B',
    explanation: '$CH_3CH_2Cl$ là dẫn xuất monohalogen no mạch hở ($C_2H_5Cl$).',
    difficulty: 'NhanBiet',
    source: 'SGK Hoá học 11 - Bài 19'
  },
  {
    id: 'c5-exam-2',
    chapterId: 'chuong-5',
    lessonId: 'final-exam-c5',
    question: 'Tên thay thế IUPAC của dẫn xuất halogen $CH_3-CH(Br)-CH(CH_3)_2$ là:',
    options: [
      { id: 'A', text: '2-bromo-3-methylbutane' },
      { id: 'B', text: '3-bromo-2-methylbutane' },
      { id: 'C', text: '2-methyl-3-bromobutane' },
      { id: 'D', text: 'Isopropylbromide' }
    ],
    correctAnswer: 'A',
    explanation: 'Đánh số từ trái sang phải: $C_1H_3-C_2H(Br)-C_3H(CH_3)-C_4H_3 \\Rightarrow$ 2-bromo-3-methylbutane.',
    difficulty: 'NhanBiet',
    source: 'SGK Hoá học 11 - Bài 19'
  },
  {
    id: 'c5-exam-3',
    chapterId: 'chuong-5',
    lessonId: 'final-exam-c5',
    question: 'Sản phẩm chính của phản ứng tách $HCl$ từ 2-chlorobutane ($CH_3-CH(Cl)-CH_2-CH_3$) đun nóng với $KOH/C_2H_5OH$ là:',
    options: [
      { id: 'A', text: 'But-1-ene' },
      { id: 'B', text: 'But-2-ene' },
      { id: 'C', text: 'Methylpropene' },
      { id: 'D', text: 'But-2-yne' }
    ],
    correctAnswer: 'B',
    explanation: 'Theo quy tắc Zaitsev, H ưu tiên tách ở C3 (bậc 2, chứa ít H hơn C1) $\\rightarrow$ But-2-ene.',
    difficulty: 'ThongHieu',
    source: 'SGK Hoá học 11 - Bài 19'
  },
  {
    id: 'c5-exam-4',
    chapterId: 'chuong-5',
    lessonId: 'final-exam-c5',
    question: 'Hợp chất nào sau đây có nhiệt độ sôi CAO NHẤT trong các chất có cùng số nguyên tử carbon?',
    options: [
      { id: 'A', text: '$C_2H_6$' },
      { id: 'B', text: '$CH_3-O-CH_3$' },
      { id: 'C', text: '$C_2H_5Cl$' },
      { id: 'D', text: '$C_2H_5OH$' }
    ],
    correctAnswer: 'D',
    explanation: '$C_2H_5OH$ hình thành liên kết hydrogen liên phân tử bền vững nên có nhiệt độ sôi cao nhất ($78,3^\\circ C$).',
    difficulty: 'ThongHieu',
    source: 'SGK Hoá học 11 - Bài 20'
  },
  {
    id: 'c5-exam-5',
    chapterId: 'chuong-5',
    lessonId: 'final-exam-c5',
    question: 'Số đồng phân alcohol no, đơn chức, mạch hở ứng với công thức phân tử $C_3H_8O$ là:',
    options: [
      { id: 'A', text: '1' },
      { id: 'B', text: '2' },
      { id: 'C', text: '3' },
      { id: 'D', text: '4' }
    ],
    correctAnswer: 'B',
    explanation: '$C_3H_8O$ có 2 đồng phân alcohol: $CH_3CH_2CH_2OH$ (propan-1-ol) và $CH_3CH(OH)CH_3$ (propan-2-ol).',
    difficulty: 'NhanBiet',
    source: 'SGK Hoá học 11 - Bài 20'
  },
  {
    id: 'c5-exam-6',
    chapterId: 'chuong-5',
    lessonId: 'final-exam-c5',
    question: 'Khi oxi hoá propan-1-ol ($CH_3CH_2CH_2OH$) bằng $CuO$ đun nóng, sản phẩm hữu cơ thu được là chất nào?',
    options: [
      { id: 'A', text: 'Propanal ($CH_3CH_2CHO$)' },
      { id: 'B', text: 'Propanone ($CH_3COCH_3$)' },
      { id: 'C', text: 'Propanoic acid ($CH_3CH_2COOH$)' },
      { id: 'D', text: 'Propene ($CH_3CH=CH_2$)' }
    ],
    correctAnswer: 'A',
    explanation: 'Oxi hoá không hoàn toàn alcohol bậc I bằng $CuO$ thu được aldehyde tương ứng.',
    difficulty: 'ThongHieu',
    source: 'SGK Hoá học 11 - Bài 20'
  },
  {
    id: 'c5-exam-7',
    chapterId: 'chuong-5',
    lessonId: 'final-exam-c5',
    question: 'Polyhydric alcohol nào sau đây phản ứng với $Cu(OH)_2$ ở nhiệt độ thường tạo dung dịch phức màu xanh lam đậm?',
    options: [
      { id: 'A', text: 'Propane-1,3-diol' },
      { id: 'B', text: 'Glycerol (propane-1,2,3-triol)' },
      { id: 'C', text: 'Ethanol' },
      { id: 'D', text: 'Butan-1,4-diol' }
    ],
    correctAnswer: 'B',
    explanation: 'Glycerol có 3 nhóm -OH liên tiếp kề nhau nên có phản ứng đặc trưng hoà tan $Cu(OH)_2$ ở nhiệt độ thường.',
    difficulty: 'ThongHieu',
    source: 'SGK Hoá học 11 - Bài 20'
  },
  {
    id: 'c5-exam-8',
    chapterId: 'chuong-5',
    lessonId: 'final-exam-c5',
    question: 'Chất nào dưới đây thuộc loại phenol?',
    options: [
      { id: 'A', text: '$C_6H_5-CH_2-OH$' },
      { id: 'B', text: '$o-CH_3-C_6H_4-OH$' },
      { id: 'C', text: '$C_6H_5-O-CH_3$' },
      { id: 'D', text: '$C_6H_5-CH_2-CH_2-OH$' }
    ],
    correctAnswer: 'B',
    explanation: '$o-CH_3-C_6H_4-OH$ (o-cresol) có nhóm -OH liên kết trực tiếp với nguyên tử C thơm của vòng benzene.',
    difficulty: 'NhanBiet',
    source: 'SGK Hoá học 11 - Bài 21'
  },
  {
    id: 'c5-exam-9',
    chapterId: 'chuong-5',
    lessonId: 'final-exam-c5',
    question: 'Phenol ($C_6H_5OH$) phản ứng được với tất cả các dung dịch hoá chất nào dưới đây?',
    options: [
      { id: 'A', text: '$NaOH, Na_2CO_3$, nước $Br_2, HNO_3$ đặc' },
      { id: 'B', text: '$HCl, NaOH, NaHCO_3, Br_2$' },
      { id: 'C', text: '$NaOH, NaCl, AgNO_3, Br_2$' },
      { id: 'D', text: '$Cu(OH)_2, NaOH, Na_2CO_3, HCl$' }
    ],
    correctAnswer: 'A',
    explanation: 'Phenol tác dụng với $NaOH, Na_2CO_3$ (tính acid) và thế ở vòng thơm với nước $Br_2, HNO_3$ đặc.',
    difficulty: 'ThongHieu',
    source: 'SGK Hoá học 11 - Bài 21'
  },
  {
    id: 'c5-exam-10',
    chapterId: 'chuong-5',
    lessonId: 'final-exam-c5',
    question: 'Sản phẩm của phản ứng giữa phenol với dung dịch nước $Br_2$ dư là kết tủa màu gì và có tên gọi là gì?',
    options: [
      { id: 'A', text: 'Kết tủa vàng, 2-bromophenol' },
      { id: 'B', text: 'Kết tủa trắng, 2,4,6-tribromophenol' },
      { id: 'C', text: 'Kết tủa vàng, 2,4,6-trinitrophenol' },
      { id: 'D', text: 'Kết tủa trắng, 4-bromophenol' }
    ],
    correctAnswer: 'B',
    explanation: '$C_6H_5OH + 3Br_2 \\rightarrow C_6H_2Br_3OH\\downarrow \\text{ (kết tủa trắng 2,4,6-tribromophenol)} + 3HBr$.',
    difficulty: 'NhanBiet',
    source: 'SGK Hoá học 11 - Bài 21'
  },
  {
    id: 'c5-exam-11',
    chapterId: 'chuong-5',
    lessonId: 'final-exam-c5',
    question: 'Trong công nghiệp, phản ứng oxi hoá cumene rồi thuỷ phân trong môi trường acid dùng để sản xuất đồng thời hai hoá chất quan trọng nào?',
    options: [
      { id: 'A', text: 'Phenol và Ethanol' },
      { id: 'B', text: 'Phenol và Acetone' },
      { id: 'C', text: 'Benzene và Formaldehyde' },
      { id: 'D', text: 'Toluene và Acetic acid' }
    ],
    correctAnswer: 'B',
    explanation: 'Cumene process: $\\text{Cumene} \\xrightarrow{1. O_2, 2. H^+} \\text{Phenol} + \\text{Acetone}$.',
    difficulty: 'NhanBiet',
    source: 'SGK Hoá học 11 - Bài 21'
  },
  {
    id: 'c5-exam-12',
    chapterId: 'chuong-5',
    lessonId: 'final-exam-c5',
    question: 'Tách nước từ $C_2H_5OH$ ở $140^\\circ C$ ($H_2SO_4$ đặc) thu được hợp chất hữu cơ nào?',
    options: [
      { id: 'A', text: 'Ethene ($CH_2=CH_2$)' },
      { id: 'B', text: 'Diethyl ether ($C_2H_5OC_2H_5$)' },
      { id: 'C', text: 'Dimethyl ether ($CH_3OCH_3$)' },
      { id: 'D', text: 'Ethanol dư' }
    ],
    correctAnswer: 'B',
    explanation: 'Ở $140^\\circ C$ xảy ra phản ứng tách nước liên phân tử tạo ether ($C_2H_5OC_2H_5$).',
    difficulty: 'NhanBiet',
    source: 'SGK Hoá học 11 - Bài 20'
  },
  {
    id: 'c5-exam-13',
    chapterId: 'chuong-5',
    lessonId: 'final-exam-c5',
    question: 'Cho phản ứng: $C_6H_5ONa + CO_2 + H_2O \\rightarrow C_6H_5OH\\downarrow + NaHCO_3$. Phản ứng chứng minh điều gì?',
    options: [
      { id: 'A', text: 'Phenol có tính acid mạnh hơn $H_2CO_3$.' },
      { id: 'B', text: 'Phenol có tính acid yếu hơn $H_2CO_3$.' },
      { id: 'C', text: 'Phenol có tính base mạnh hơn $NaHCO_3$.' },
      { id: 'D', text: 'Phenol không có tính acid.' }
    ],
    correctAnswer: 'B',
    explanation: 'Acid mạnh hơn ($H_2CO_3$) đẩy acid yếu hơn (phenol) ra khỏi dung dịch muối phenolate.',
    difficulty: 'ThongHieu',
    source: 'SGK Hoá học 11 - Bài 21'
  },
  {
    id: 'c5-exam-14',
    chapterId: 'chuong-5',
    lessonId: 'final-exam-c5',
    question: 'Số ether tối đa thu được khi đun nóng hỗn hợp 2 alcohol $CH_3OH$ và $C_2H_5OH$ với $H_2SO_4$ đặc ở $140^\\circ C$ là bao nhiêu?',
    options: [
      { id: 'A', text: '1' },
      { id: 'B', text: '2' },
      { id: 'C', text: '3' },
      { id: 'D', text: '4' }
    ],
    correctAnswer: 'C',
    explanation: 'Thu được $\\frac{n(n+1)}{2} = \\frac{2 \\times 3}{2} = 3$ ether: $CH_3OCH_3, C_2H_5OC_2H_5, CH_3OC_2H_5$.',
    difficulty: 'ThongHieu',
    source: 'SBT Hoá học 11 - Bài 20'
  },
  {
    id: 'c5-exam-15',
    chapterId: 'chuong-5',
    lessonId: 'final-exam-c5',
    question: 'Thực hiện phản ứng tách $HBr$ từ 2-bromo-2-methylbutane ($CH_3-C(CH_3)(Br)-CH_2-CH_3$) với $KOH/C_2H_5OH, t^\\circ$. Sản phẩm chính của phản ứng là:',
    options: [
      { id: 'A', text: '2-methylbut-1-ene' },
      { id: 'B', text: '2-methylbut-2-ene' },
      { id: 'C', text: '3-methylbut-1-ene' },
      { id: 'D', text: '2-methylbut-3-ene' }
    ],
    correctAnswer: 'B',
    explanation: 'Br tách cùng H ở C3 (bậc 2, chứa 2H) ưu tiên hơn C1 (chứa 3H) $\\rightarrow CH_3-C(CH_3)=CH-CH_3$ (2-methylbut-2-ene).',
    difficulty: 'VanDung',
    source: 'SBT Hoá học 11 - Bài 19'
  },
  {
    id: 'c5-exam-16',
    chapterId: 'chuong-5',
    lessonId: 'final-exam-c5',
    question: 'Cho 0,1 mol chất hữu cơ $X$ phản ứng vừa đủ với kim loại $Na$ thu được 0,1 mol khí $H_2$ (đkc). $X$ thuộc loại hợp chất nào?',
    options: [
      { id: 'A', text: 'Alcohol đơn chức' },
      { id: 'B', text: 'Alcohol hai chức (hoặc phenol hai chức)' },
      { id: 'C', text: 'Alcohol ba chức' },
      { id: 'D', text: 'Ether hai chức' }
    ],
    correctAnswer: 'B',
    explanation: '$n_{H_2} / n_X = 1 \\Rightarrow X$ chứa 2 nhóm $-OH$ linh động trong phân tử.',
    difficulty: 'VanDung',
    source: 'SBT Hoá học 11 - Bài 20'
  },
  {
    id: 'c5-exam-17',
    chapterId: 'chuong-5',
    lessonId: 'final-exam-c5',
    question: 'Dẫn xuất halogen nào được dùng làm nguyên liệu để trùng hợp tạo ra Teflon - chất chống dính chịu nhiệt?',
    options: [
      { id: 'A', text: '$CH_2=CHCl$' },
      { id: 'B', text: '$CF_2=CF_2$' },
      { id: 'C', text: '$CH_2=CH-CH_2Cl$' },
      { id: 'D', text: '$CH_2=CHF$' }
    ],
    correctAnswer: 'B',
    explanation: 'Trùng hợp $CF_2=CF_2$ (tetrafluoroethene) tạo ra polytetrafluoroethene (Teflon).',
    difficulty: 'NhanBiet',
    source: 'SGK Hoá học 11 - Bài 19'
  },
  {
    id: 'c5-exam-18',
    chapterId: 'chuong-5',
    lessonId: 'final-exam-c5',
    question: 'Đốt cháy hoàn toàn 1 mol alcohol no, đơn chức, mạch hở $X$ thu được $CO_2$ và $H_2O$ có tỉ lệ $n_{H_2O} - n_{CO_2} = 1 \\text{ mol}$. Khẳng định nào đúng?',
    options: [
      { id: 'A', text: 'Mọi alcohol no đơn chức mạch hở khi đốt cháy đều cho $n_{H_2O} - n_{CO_2} = n_{alcohol}$.' },
      { id: 'B', text: 'Chỉ có methanol mới thoả mãn.' },
      { id: 'C', text: 'Chỉ có ethanol mới thoả mãn.' },
      { id: 'D', text: '$X$ phải là polyalcohol.' }
    ],
    correctAnswer: 'A',
    explanation: 'Đốt cháy alcohol no đơn chức mạch hở $C_n H_{2n+2}O$: $n_{H_2O} = (n+1) n_X$, $n_{CO_2} = n \\cdot n_X \\Rightarrow n_{H_2O} - n_{CO_2} = n_X$.',
    difficulty: 'ThongHieu',
    source: 'SGK Hoá học 11 - Bài 20'
  },
  {
    id: 'c5-exam-19',
    chapterId: 'chuong-5',
    lessonId: 'final-exam-c5',
    question: 'Cho 4,7 gram phenol tác dụng vừa đủ với $V$ mL dung dịch $NaOH$ 1M. Giá trị của $V$ là bao nhiêu?',
    options: [
      { id: 'A', text: '25 mL' },
      { id: 'B', text: '50 mL' },
      { id: 'C', text: '100 mL' },
      { id: 'D', text: '200 mL' }
    ],
    correctAnswer: 'B',
    explanation: '$n_{\\text{phenol}} = \\frac{4,7}{94} = 0,05 \\text{ mol}$. $n_{NaOH} = n_{\\text{phenol}} = 0,05 \\text{ mol} \\Rightarrow V = \\frac{0,05}{1} = 0,05 \\text{ lít} = 50 \\text{ mL}$.',
    difficulty: 'VanDung',
    source: 'SBT Hoá học 11 - Bài 21'
  },
  {
    id: 'c5-exam-20',
    chapterId: 'chuong-5',
    lessonId: 'final-exam-c5',
    question: 'Phát biểu nào sau đây KHÔNG đúng về hoá học các hợp chất Chương 5?',
    options: [
      { id: 'A', text: 'Các dẫn xuất halogen phân cực nên có nhiệt độ sôi cao hơn hydrocarbon tương đương.' },
      { id: 'B', text: 'Alcohol bậc III không bị oxi hoá bởi $CuO$ ở điều kiện thường.' },
      { id: 'C', text: 'Phenol tác dụng với dung dịch $NaOH$ sinh ra muối tan và nước.' },
      { id: 'D', text: 'Glycerol và ethanol đều có phản ứng tạo phức màu xanh lam với $Cu(OH)_2$.' }
    ],
    correctAnswer: 'D',
    explanation: 'Ethanol là alcohol đơn chức nên KHÔNG có phản ứng hoà tan $Cu(OH)_2$ tạo dung dịch xanh lam đậm.',
    difficulty: 'ThongHieu',
    source: 'SBT Hoá học 11 - Bài 22'
  }
];
