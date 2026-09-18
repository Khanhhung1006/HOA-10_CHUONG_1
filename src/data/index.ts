import { 
  ChapterId, 
  LessonId, 
  LessonInfo, 
  ChapterInfo, 
  TheorySectionData, 
  Flashcard, 
  QuizQuestion 
} from '../types';

import { lesson1Theory, lesson1Flashcards, lesson1Quizzes } from './lesson1Data';
import { lesson2Theory, lesson2Flashcards, lesson2Quizzes } from './lesson2Data';
import { lesson3Theory, lesson3Flashcards, finalChapterExamQuizzes as finalChapter1ExamQuizzes } from './lesson3Data';

import {
  lesson4Theory,
  lesson4Flashcards,
  lesson4Quizzes,
  lesson5Theory,
  lesson5Flashcards,
  lesson5Quizzes,
  lesson6Theory,
  lesson6Flashcards,
  lesson6Quizzes,
  lesson7Theory,
  lesson7Flashcards,
  lesson7Quizzes,
  lesson8Theory,
  lesson8Flashcards,
  lesson8Quizzes,
  lesson9Theory,
  lesson9Flashcards,
  lesson9Quizzes,
  finalChapter2ExamQuizzes
} from './chapter2';

import {
  lesson10Theory,
  lesson10Flashcards,
  lesson10Quizzes,
  lesson11Theory,
  lesson11Flashcards,
  lesson11Quizzes,
  lesson12Theory,
  lesson12Flashcards,
  lesson12Quizzes,
  lesson13Theory,
  lesson13Flashcards,
  lesson13Quizzes,
  lesson14Theory,
  lesson14Flashcards,
  finalChapter3ExamQuizzes
} from './chapter3';

import {
  lesson15Theory,
  lesson15Flashcards,
  lesson15Quizzes,
  lesson16Theory,
  lesson16Flashcards,
  lesson16Quizzes,
  lesson17Theory,
  lesson17Flashcards,
  lesson17Quizzes,
  lesson18Theory,
  lesson18Flashcards,
  finalChapter4ExamQuizzes
} from './chapter4';

import {
  lesson19Theory,
  lesson19Flashcards,
  lesson19Quizzes,
  lesson20Theory,
  lesson20Flashcards,
  lesson20Quizzes,
  lesson21Theory,
  lesson21Flashcards,
  lesson21Quizzes,
  lesson22Theory,
  lesson22Flashcards,
  lesson22Quizzes,
  finalChapter5ExamQuizzes
} from './chapter5';

import {
  lesson23Theory,
  lesson23Flashcards,
  lesson23Quizzes,
  lesson24Theory,
  lesson24Flashcards,
  lesson24Quizzes,
  lesson25Theory,
  lesson25Flashcards,
  lesson25Quizzes,
  finalChapter6ExamQuizzes
} from './chapter6';

export {
  lesson1Theory,
  lesson1Flashcards,
  lesson1Quizzes,
  lesson2Theory,
  lesson2Flashcards,
  lesson2Quizzes,
  lesson3Theory,
  lesson3Flashcards,
  finalChapter1ExamQuizzes,
  lesson4Theory,
  lesson4Flashcards,
  lesson4Quizzes,
  lesson5Theory,
  lesson5Flashcards,
  lesson5Quizzes,
  lesson6Theory,
  lesson6Flashcards,
  lesson6Quizzes,
  lesson7Theory,
  lesson7Flashcards,
  lesson7Quizzes,
  lesson8Theory,
  lesson8Flashcards,
  lesson8Quizzes,
  lesson9Theory,
  lesson9Flashcards,
  lesson9Quizzes,
  finalChapter2ExamQuizzes,
  lesson10Theory,
  lesson10Flashcards,
  lesson10Quizzes,
  lesson11Theory,
  lesson11Flashcards,
  lesson11Quizzes,
  lesson12Theory,
  lesson12Flashcards,
  lesson12Quizzes,
  lesson13Theory,
  lesson13Flashcards,
  lesson13Quizzes,
  lesson14Theory,
  lesson14Flashcards,
  finalChapter3ExamQuizzes,
  lesson15Theory,
  lesson15Flashcards,
  lesson15Quizzes,
  lesson16Theory,
  lesson16Flashcards,
  lesson16Quizzes,
  lesson17Theory,
  lesson17Flashcards,
  lesson17Quizzes,
  lesson18Theory,
  lesson18Flashcards,
  finalChapter4ExamQuizzes,
  lesson19Theory,
  lesson19Flashcards,
  lesson19Quizzes,
  lesson20Theory,
  lesson20Flashcards,
  lesson20Quizzes,
  lesson21Theory,
  lesson21Flashcards,
  lesson21Quizzes,
  lesson22Theory,
  lesson22Flashcards,
  lesson22Quizzes,
  finalChapter5ExamQuizzes,
  lesson23Theory,
  lesson23Flashcards,
  lesson23Quizzes,
  lesson24Theory,
  lesson24Flashcards,
  lesson24Quizzes,
  lesson25Theory,
  lesson25Flashcards,
  lesson25Quizzes,
  finalChapter6ExamQuizzes
};

export const LESSONS: LessonInfo[] = [
  // CHƯƠNG 1: CÂN BẰNG HOÁ HỌC
  {
    id: 'bai-1',
    chapterId: 'chuong-1',
    number: 1,
    title: 'Khái niệm về cân bằng hoá học',
    subtitle: 'Phản ứng thuận nghịch, cân bằng động, hằng số Kc & nguyên lí Le Chatelier',
    description: 'Nắm vững bản chất phản ứng thuận nghịch, lập biểu thức hằng số cân bằng Kc và phân tích các yếu tố chuyển dịch cân bằng.',
    iconName: 'Scale',
    flashcardCount: lesson1Flashcards.length,
    quizCount: lesson1Quizzes.length,
  },
  {
    id: 'bai-2',
    chapterId: 'chuong-1',
    number: 2,
    title: 'Cân bằng trong dung dịch nước',
    subtitle: 'Sự điện li, thuyết Brønsted – Lowry, thang pH, thuỷ phân ion & chuẩn độ',
    description: 'Hiểu rõ phân loại chất điện li, thuyết acid - base hiện đại, tính toán pH và phương pháp chuẩn độ định lượng.',
    iconName: 'FlaskConical',
    flashcardCount: lesson2Flashcards.length,
    quizCount: lesson2Quizzes.length,
  },
  {
    id: 'bai-3',
    chapterId: 'chuong-1',
    number: 3,
    title: 'Ôn tập & Tổng kết Chương 1',
    subtitle: 'Hệ thống hoá kiến thức, bài tập tổng hợp & đề kiểm tra 32 câu chuẩn SGK/SBT',
    description: 'Ôn luyện toàn diện chương 1 qua bảng sơ đồ kiến thức, bộ thẻ ghi nhớ tổng hợp và đề thi thử trắc nghiệm 32 câu đầy đủ lời giải.',
    iconName: 'GraduationCap',
    flashcardCount: lesson3Flashcards.length,
    quizCount: finalChapter1ExamQuizzes.length,
  },
  // CHƯƠNG 2: NITROGEN – SULFUR
  {
    id: 'bai-4',
    chapterId: 'chuong-2',
    number: 4,
    title: 'Nitrogen',
    subtitle: 'Trạng thái tự nhiên, liên kết ba bền vững, tính oxi hoá & tính khử',
    description: 'Tìm hiểu nguồn gốc nguyên tố nitrogen, tính trơ ở nhiệt độ thường, chu trình tạo phân đạm nitrate từ sấm sét và ứng dụng.',
    iconName: 'Atom',
    flashcardCount: lesson4Flashcards.length,
    quizCount: lesson4Quizzes.length,
  },
  {
    id: 'bai-5',
    chapterId: 'chuong-2',
    number: 5,
    title: 'Ammonia • Muối ammonium',
    subtitle: 'Hình học chóp tam giác, liên kết hydrogen, tính base, tính khử & muối ammonium',
    description: 'Khám phá cấu tạo phân tử NH3, độ tan lớn, phản ứng tạo khói trắng, tính chất nhiệt phân và nhận biết ion NH4+.',
    iconName: 'Sparkles',
    flashcardCount: lesson5Flashcards.length,
    quizCount: lesson5Quizzes.length,
  },
  {
    id: 'bai-6',
    chapterId: 'chuong-2',
    number: 6,
    title: 'Một số hợp chất của nitrogen với oxygen',
    subtitle: 'Các oxide NOx, cơ chế mưa acid, tính oxi hoá mạnh của HNO3 & phú dưỡng ao hồ',
    description: 'Phân loại nguồn gốc NOx, tính acid và oxi hoá của nitric acid, nước cường toan và hiện tượng phú dưỡng nguồn nước.',
    iconName: 'CloudRain',
    flashcardCount: lesson6Flashcards.length,
    quizCount: lesson6Quizzes.length,
  },
  {
    id: 'bai-7',
    chapterId: 'chuong-2',
    number: 7,
    title: 'Sulfur và sulfur dioxide',
    subtitle: 'Đơn chất S8, diêm sinh, thu gom thuỷ ngân, tính oxi hoá – khử của SO2',
    description: 'Khám phá thù hình sulfur, phản ứng xử lí thuỷ ngân rơi vãi, tính chất tẩy trắng của SO2 và tác động môi trường.',
    iconName: 'Flame',
    flashcardCount: lesson7Flashcards.length,
    quizCount: lesson7Quizzes.length,
  },
  {
    id: 'bai-8',
    chapterId: 'chuong-2',
    number: 8,
    title: 'Sulfuric acid và muối sulfate',
    subtitle: 'Quy tắc pha loãng an toàn, sơ cứu bỏng, tính oxi hoá & háo nước của H2SO4, muối sulfate',
    description: 'Nắm vững quy tắc pha loãng acid đặc, tính than hoá carbohydrate, 3 giai đoạn sản xuất tiếp xúc và nhận biết ion SO42-.',
    iconName: 'ShieldAlert',
    flashcardCount: lesson8Flashcards.length,
    quizCount: lesson8Quizzes.length,
  },
  {
    id: 'bai-9',
    chapterId: 'chuong-2',
    number: 9,
    title: 'Ôn tập & Tổng kết Chương 2',
    subtitle: 'Hệ thống hoá Nitrogen – Sulfur, đề kiểm tra tổng hợp 35 câu chuẩn SGK/SBT',
    description: 'Tổng kết toàn bộ chu trình, tính chất so sánh giữa nitrogen và sulfur cùng ngân hàng câu hỏi trắc nghiệm ôn luyện.',
    iconName: 'Award',
    flashcardCount: lesson9Flashcards.length,
    quizCount: finalChapter2ExamQuizzes.length,
  },
  // CHƯƠNG 3: ĐẠI CƯƠNG VỀ HOÁ HỌC HỮU CƠ
  {
    id: 'bai-10',
    chapterId: 'chuong-3',
    number: 10,
    title: 'Hợp chất hữu cơ và hoá học hữu cơ',
    subtitle: 'Đặc điểm chung, phân loại hydrocarbon/dẫn xuất, nhóm chức & phổ hồng ngoại (IR)',
    description: 'Nắm vững khái niệm chất hữu cơ, phân loại hydrocarbon - dẫn xuất, các nhóm chức cơ bản và đọc tín hiệu nhóm chức trên phổ IR.',
    iconName: 'Atom',
    flashcardCount: lesson10Flashcards.length,
    quizCount: lesson10Quizzes.length,
  },
  {
    id: 'bai-11',
    chapterId: 'chuong-3',
    number: 11,
    title: 'Phương pháp tách biệt và tinh chế hợp chất hữu cơ',
    subtitle: 'Chưng cất, chiết lỏng-lỏng/lỏng-rắn, kết tinh & sắc kí cột',
    description: 'Nghiên cứu nguyên tắc và quy trình các phương pháp tinh chế chất hữu cơ: chưng cất rượu, chiết tinh dầu, kết tinh đường và sắc kí.',
    iconName: 'FlaskConical',
    flashcardCount: lesson11Flashcards.length,
    quizCount: lesson11Quizzes.length,
  },
  {
    id: 'bai-12',
    chapterId: 'chuong-3',
    number: 12,
    title: 'Công thức phân tử hợp chất hữu cơ',
    subtitle: 'Công thức đơn giản nhất, phổ khối lượng (MS) xác định M & lập CTPT',
    description: 'Hiểu mối quan hệ giữa CTPT và CTĐGN, tra cứu peak [M+] trên phổ khối lượng MS để tìm phân tử khối M và lập CTPT chính xác.',
    iconName: 'Scale',
    flashcardCount: lesson12Flashcards.length,
    quizCount: lesson12Quizzes.length,
  },
  {
    id: 'bai-13',
    chapterId: 'chuong-3',
    number: 13,
    title: 'Cấu tạo hoá học hợp chất hữu cơ',
    subtitle: 'Thuyết cấu tạo Butlerov, công thức cấu tạo, hiện tượng đồng phân & đồng đẳng',
    description: 'Nắm vững 3 nội dung thuyết cấu tạo hoá học, viết CTCT (đầy đủ, thu gọn, khung carbon), phân biệt chất đồng phân và dãy đồng đẳng.',
    iconName: 'Layers',
    flashcardCount: lesson13Flashcards.length,
    quizCount: lesson13Quizzes.length,
  },
  {
    id: 'bai-14',
    chapterId: 'chuong-3',
    number: 14,
    title: 'Ôn tập & Tổng kết Chương 3',
    subtitle: 'Hệ thống hoá Đại cương Hoá hữu cơ, đề kiểm tra tổng hợp 20 câu chuẩn SGK/SBT',
    description: 'Tổng kết toàn bộ kiến thức nhóm chức, phương pháp tinh chế, phổ MS/IR, thuyết cấu tạo, đồng phân, đồng đẳng và đề thi trắc nghiệm.',
    iconName: 'GraduationCap',
    flashcardCount: lesson14Flashcards.length,
    quizCount: finalChapter3ExamQuizzes.length,
  },
  // CHƯƠNG 4: HYDROCARBON
  {
    id: 'bai-15',
    chapterId: 'chuong-4',
    number: 15,
    title: 'Alkane',
    subtitle: 'Hydrocarbon no, danh pháp thay thế, thế halogen, cracking, reforming & cháy',
    description: 'Tìm hiểu dãy đồng đẳng alkane, cấu tạo tứ diện methane, danh pháp IUPAC, phản ứng thế halogen ưu tiên C bậc cao và ứng dụng nhiên liệu.',
    iconName: 'Flame',
    flashcardCount: lesson15Flashcards.length,
    quizCount: lesson15Quizzes.length,
  },
  {
    id: 'bai-16',
    chapterId: 'chuong-4',
    number: 16,
    title: 'Hydrocarbon không no',
    subtitle: 'Alkene, Alkyne, đồng phân cis-trans, phản ứng cộng, Markovnikov & thế Ag+',
    description: 'Nghiên cứu liên kết bội C=C và C≡C, quy tắc Markovnikov, trùng hợp tạo chất dẻo PE/PP và phản ứng thế kim loại của alk-1-yne.',
    iconName: 'Sparkles',
    flashcardCount: lesson16Flashcards.length,
    quizCount: lesson16Quizzes.length,
  },
  {
    id: 'bai-17',
    chapterId: 'chuong-4',
    number: 17,
    title: 'Arene (Hydrocarbon thơm)',
    subtitle: 'Benzene, Toluene, Styrene, Naphthalene, thế vòng thơm & KMnO4',
    description: 'Khám phá đặc tính thơm "dễ thế, khó cộng, bền với KMnO4", quy tắc định hướng ortho/para của nhóm alkyl và ứng dụng vật liệu.',
    iconName: 'Atom',
    flashcardCount: lesson17Flashcards.length,
    quizCount: lesson17Quizzes.length,
  },
  {
    id: 'bai-18',
    chapterId: 'chuong-4',
    number: 18,
    title: 'Ôn tập & Tổng kết Chương 4',
    subtitle: 'Hệ thống hoá Hydrocarbon, đề kiểm tra tổng hợp 25 câu chuẩn SGK/SBT',
    description: 'Tổng kết so sánh Alkane, Alkene, Alkyne, Arene cùng bộ thẻ flashcard tổng hợp và ngân hàng đề thi trắc nghiệm 25 câu đầy đủ lời giải.',
    iconName: 'GraduationCap',
    flashcardCount: lesson18Flashcards.length,
    quizCount: finalChapter4ExamQuizzes.length,
  },
  // CHƯƠNG 5: DẪN XUẤT HALOGEN – ALCOHOL – PHENOL
  {
    id: 'bai-19',
    chapterId: 'chuong-5',
    number: 19,
    title: 'Dẫn xuất halogen',
    subtitle: 'Khái niệm, danh pháp, phản ứng thế OH, tách HX (quy tắc Zaitsev) & tầng ozone',
    description: 'Khái niệm dẫn xuất halogen, danh pháp thay thế/gốc-chức, phản ứng thuỷ phân kiềm, quy tắc tách Zaitsev và các hợp chất HFC/HFO bảo vệ môi trường.',
    iconName: 'Atom',
    flashcardCount: lesson19Flashcards.length,
    quizCount: lesson19Quizzes.length,
  },
  {
    id: 'bai-20',
    chapterId: 'chuong-5',
    number: 20,
    title: 'Alcohol',
    subtitle: 'Nhóm -OH, liên kết hydrogen, thế Na, ether (140°C), alkene (170°C), CuO & Cu(OH)2',
    description: 'Cấu tạo nhóm -OH, liên kết hydrogen liên phân tử, bậc alcohol, phản ứng thế Na, tạo ether, tách nước alkene, oxi hoá CuO và phức Cu(OH)2 xanh thẫm.',
    iconName: 'Beaker',
    flashcardCount: lesson20Flashcards.length,
    quizCount: lesson20Quizzes.length,
  },
  {
    id: 'bai-21',
    chapterId: 'chuong-5',
    number: 21,
    title: 'Phenol',
    subtitle: 'Nhóm -OH thơm, tính acid yếu (NaOH, CO2), thế nhân thơm (nước Br2 tủa trắng, HNO3 tủa vàng)',
    description: 'Cấu tạo phenol C6H5OH, tương tác p-pi, tính acid tác dụng với NaOH, thế dễ dàng ở vòng thơm tạo 2,4,6-tribromophenol và picric acid, sản xuất từ cumene.',
    iconName: 'FlaskConical',
    flashcardCount: lesson21Flashcards.length,
    quizCount: lesson21Quizzes.length,
  },
  {
    id: 'bai-22',
    chapterId: 'chuong-5',
    number: 22,
    title: 'Ôn tập & Tổng kết Chương 5',
    subtitle: 'Hệ thống hoá Dẫn xuất Halogen - Alcohol - Phenol, đề kiểm tra tổng hợp 20 câu chuẩn SGK/SBT',
    description: 'Tổng kết so sánh Dẫn xuất halogen, Alcohol và Phenol, sơ đồ chuyển hoá hoá học cùng ngân hàng câu hỏi kiểm tra trắc nghiệm 20 câu.',
    iconName: 'GraduationCap',
    flashcardCount: lesson22Flashcards.length,
    quizCount: finalChapter5ExamQuizzes.length,
  },
  // CHƯƠNG 6: HỢP CHẤT CARBONYL – CARBOXYLIC ACID
  {
    id: 'bai-23',
    chapterId: 'chuong-6',
    number: 23,
    title: 'Hợp chất carbonyl',
    subtitle: 'Aldehyde, Ketone, phản ứng tráng bạc, iodoform & $NaBH_4$',
    description: 'Nghiên cứu cấu tạo nhóm >C=O, phản ứng tráng bạc $AgNO_3/NH_3$, tạo $Cu_2O$ đỏ gạch, phản ứng iodoform tủa vàng và ứng dụng.',
    iconName: 'Sparkles',
    flashcardCount: lesson23Flashcards.length,
    quizCount: lesson23Quizzes.length,
  },
  {
    id: 'bai-24',
    chapterId: 'chuong-6',
    number: 24,
    title: 'Carboxylic acid',
    subtitle: 'Nhóm -COOH, tính acid, phản ứng ester hoá & lên men giấm',
    description: 'Cấu tạo nhóm -COOH, liên kết hydrogen dimer, tính acid yếu đổi màu quỳ tím, phản ứng ester hoá với alcohol và ứng dụng acetic acid.',
    iconName: 'FlaskRound',
    flashcardCount: lesson24Flashcards.length,
    quizCount: lesson24Quizzes.length,
  },
  {
    id: 'bai-25',
    chapterId: 'chuong-6',
    number: 25,
    title: 'Ôn tập & Tổng kết Chương 6',
    subtitle: 'Hệ thống hoá Hợp chất Carbonyl & Carboxylic Acid, đề kiểm tra tổng hợp 20 câu',
    description: 'Hệ thống hoá mối liên hệ chuyển hoá giữa alcohol, aldehyde, ketone và acid, so sánh nhiệt độ sôi cùng ngân hàng đề kiểm tra 20 câu.',
    iconName: 'GraduationCap',
    flashcardCount: lesson25Flashcards.length,
    quizCount: finalChapter6ExamQuizzes.length,
  },
];

export const CHAPTERS: ChapterInfo[] = [
  {
    id: 'chuong-1',
    number: 1,
    title: 'Chương 1: Cân bằng hoá học',
    subtitle: 'Phản ứng thuận nghịch, hằng số cân bằng Kc, sự điện li & pH',
    description: 'Nghiên cứu về cân bằng động học, độ điện li, thuyết Brønsted – Lowry và các yếu tố chuyển dịch cân bằng.',
    lessons: LESSONS.filter(l => l.chapterId === 'chuong-1'),
  },
  {
    id: 'chuong-2',
    number: 2,
    title: 'Chương 2: Nitrogen – Sulfur',
    subtitle: 'Đơn chất N2, S8, hợp chất NH3, HNO3, SO2, H2SO4 & các muối',
    description: 'Khám phá cấu tạo, tính chất oxi hoá - khử, ứng dụng công nghiệp, môi trường mưa acid và hiện tượng phú dưỡng.',
    lessons: LESSONS.filter(l => l.chapterId === 'chuong-2'),
  },
  {
    id: 'chuong-3',
    number: 3,
    title: 'Chương 3: Đại cương về hoá học hữu cơ',
    subtitle: 'Khái niệm, phương pháp tinh chế, CTPT (MS), CTCT (IR), đồng phân & đồng đẳng',
    description: 'Hệ thống hoá nền tảng hoá học hữu cơ: nhóm chức, tinh chế chất, phổ khối lượng MS, phổ hồng ngoại IR, thuyết Butlerov, đồng phân và đồng đẳng.',
    lessons: LESSONS.filter(l => l.chapterId === 'chuong-3'),
  },
  {
    id: 'chuong-4',
    number: 4,
    title: 'Chương 4: Hydrocarbon',
    subtitle: 'Alkane, Alkene, Alkyne, Arene, phản ứng thế, cộng, trùng hợp & oxi hoá',
    description: 'Hệ thống hoá các họ hydrocarbon chính: alkane no, alkene/alkyne không no, arene thơm, quy tắc Markovnikov, quy tắc thế vòng và ứng dụng nhiên liệu/chất dẻo.',
    lessons: LESSONS.filter(l => l.chapterId === 'chuong-4'),
  },
  {
    id: 'chuong-5',
    number: 5,
    title: 'Chương 5: Dẫn xuất Halogen – Alcohol – Phenol',
    subtitle: 'RX, ROH, C6H5OH, liên kết hydrogen, phản ứng thế, tách Zaitsev, tính acid & thế nhân thơm',
    description: 'Nghiên cứu dẫn xuất halogen, alcohol (ethanol, glycerol) và phenol (C6H5OH), tính acid yếu, phản ứng thế/tách đặc trưng và ứng dụng thực tiễn.',
    lessons: LESSONS.filter(l => l.chapterId === 'chuong-5'),
  },
  {
    id: 'chuong-6',
    number: 6,
    title: 'Chương 6: Hợp chất Carbonyl – Carboxylic Acid',
    subtitle: 'Aldehyde, Ketone, Carboxylic Acid, tráng bạc, iodoform, ester hoá & lên men giấm',
    description: 'Khám phá cấu tạo, danh pháp, tính chất vật lí, tính chất hoá học và ứng dụng của Hợp chất Carbonyl và Carboxylic Acid.',
    lessons: LESSONS.filter(l => l.chapterId === 'chuong-6'),
  },
];

export const ALL_THEORIES: Record<LessonId, TheorySectionData> = {
  'bai-1': lesson1Theory,
  'bai-2': lesson2Theory,
  'bai-3': lesson3Theory,
  'bai-4': lesson4Theory,
  'bai-5': lesson5Theory,
  'bai-6': lesson6Theory,
  'bai-7': lesson7Theory,
  'bai-8': lesson8Theory,
  'bai-9': lesson9Theory,
  'bai-10': lesson10Theory,
  'bai-11': lesson11Theory,
  'bai-12': lesson12Theory,
  'bai-13': lesson13Theory,
  'bai-14': lesson14Theory,
  'bai-15': lesson15Theory,
  'bai-16': lesson16Theory,
  'bai-17': lesson17Theory,
  'bai-18': lesson18Theory,
  'bai-19': lesson19Theory,
  'bai-20': lesson20Theory,
  'bai-21': lesson21Theory,
  'bai-22': lesson22Theory,
  'bai-23': lesson23Theory,
  'bai-24': lesson24Theory,
  'bai-25': lesson25Theory,
};

export const ALL_FLASHCARDS_BY_LESSON: Record<LessonId, Flashcard[]> = {
  'bai-1': lesson1Flashcards,
  'bai-2': lesson2Flashcards,
  'bai-3': lesson3Flashcards,
  'bai-4': lesson4Flashcards,
  'bai-5': lesson5Flashcards,
  'bai-6': lesson6Flashcards,
  'bai-7': lesson7Flashcards,
  'bai-8': lesson8Flashcards,
  'bai-9': lesson9Flashcards,
  'bai-10': lesson10Flashcards,
  'bai-11': lesson11Flashcards,
  'bai-12': lesson12Flashcards,
  'bai-13': lesson13Flashcards,
  'bai-14': lesson14Flashcards,
  'bai-15': lesson15Flashcards,
  'bai-16': lesson16Flashcards,
  'bai-17': lesson17Flashcards,
  'bai-18': lesson18Flashcards,
  'bai-19': lesson19Flashcards,
  'bai-20': lesson20Flashcards,
  'bai-21': lesson21Flashcards,
  'bai-22': lesson22Flashcards,
  'bai-23': lesson23Flashcards,
  'bai-24': lesson24Flashcards,
  'bai-25': lesson25Flashcards,
};

export const ALL_QUIZZES_BY_LESSON: Record<LessonId | 'final-exam' | 'final-exam-c1' | 'final-exam-c2' | 'final-exam-c3' | 'final-exam-c4' | 'final-exam-c5' | 'final-exam-c6', QuizQuestion[]> = {
  'bai-1': lesson1Quizzes,
  'bai-2': lesson2Quizzes,
  'bai-3': finalChapter1ExamQuizzes,
  'bai-4': lesson4Quizzes,
  'bai-5': lesson5Quizzes,
  'bai-6': lesson6Quizzes,
  'bai-7': lesson7Quizzes,
  'bai-8': lesson8Quizzes,
  'bai-9': finalChapter2ExamQuizzes,
  'bai-10': lesson10Quizzes,
  'bai-11': lesson11Quizzes,
  'bai-12': lesson12Quizzes,
  'bai-13': lesson13Quizzes,
  'bai-14': finalChapter3ExamQuizzes,
  'bai-15': lesson15Quizzes,
  'bai-16': lesson16Quizzes,
  'bai-17': lesson17Quizzes,
  'bai-18': finalChapter4ExamQuizzes,
  'bai-19': lesson19Quizzes,
  'bai-20': lesson20Quizzes,
  'bai-21': lesson21Quizzes,
  'bai-22': finalChapter5ExamQuizzes,
  'bai-23': lesson23Quizzes,
  'bai-24': lesson24Quizzes,
  'bai-25': finalChapter6ExamQuizzes,
  'final-exam': finalChapter1ExamQuizzes,
  'final-exam-c1': finalChapter1ExamQuizzes,
  'final-exam-c2': finalChapter2ExamQuizzes,
  'final-exam-c3': finalChapter3ExamQuizzes,
  'final-exam-c4': finalChapter4ExamQuizzes,
  'final-exam-c5': finalChapter5ExamQuizzes,
  'final-exam-c6': finalChapter6ExamQuizzes,
};

export function getTheoryData(lessonId: LessonId): TheorySectionData {
  return ALL_THEORIES[lessonId] || ALL_THEORIES['bai-1'];
}

export function getFlashcardsByLesson(lessonId: LessonId): Flashcard[] {
  return ALL_FLASHCARDS_BY_LESSON[lessonId] || [];
}

export function getQuizQuestionsByLesson(lessonId: LessonId): QuizQuestion[] {
  return ALL_QUIZZES_BY_LESSON[lessonId] || [];
}

export function getAllFlashcards(): Flashcard[] {
  return [
    ...lesson1Flashcards,
    ...lesson2Flashcards,
    ...lesson3Flashcards,
    ...lesson4Flashcards,
    ...lesson5Flashcards,
    ...lesson6Flashcards,
    ...lesson7Flashcards,
    ...lesson8Flashcards,
    ...lesson9Flashcards,
    ...lesson10Flashcards,
    ...lesson11Flashcards,
    ...lesson12Flashcards,
    ...lesson13Flashcards,
    ...lesson14Flashcards,
    ...lesson15Flashcards,
    ...lesson16Flashcards,
    ...lesson17Flashcards,
    ...lesson18Flashcards,
    ...lesson19Flashcards,
    ...lesson20Flashcards,
    ...lesson21Flashcards,
    ...lesson22Flashcards,
    ...lesson23Flashcards,
    ...lesson24Flashcards,
    ...lesson25Flashcards,
  ];
}

export function getAllQuizzes(): QuizQuestion[] {
  return [
    ...lesson1Quizzes,
    ...lesson2Quizzes,
    ...finalChapter1ExamQuizzes,
    ...lesson4Quizzes,
    ...lesson5Quizzes,
    ...lesson6Quizzes,
    ...lesson7Quizzes,
    ...lesson8Quizzes,
    ...finalChapter2ExamQuizzes,
    ...lesson10Quizzes,
    ...lesson11Quizzes,
    ...lesson12Quizzes,
    ...lesson13Quizzes,
    ...finalChapter3ExamQuizzes,
    ...lesson15Quizzes,
    ...lesson16Quizzes,
    ...lesson17Quizzes,
    ...finalChapter4ExamQuizzes,
    ...lesson19Quizzes,
    ...lesson20Quizzes,
    ...lesson21Quizzes,
    ...finalChapter5ExamQuizzes,
    ...lesson23Quizzes,
    ...lesson24Quizzes,
    ...finalChapter6ExamQuizzes,
  ];
}

export interface SearchResultItem {
  id: string;
  type: 'theory' | 'flashcard' | 'quiz' | 'formula';
  title: string;
  snippet: string;
  lessonId: LessonId | 'final-exam';
  lessonTitle: string;
}

export function searchContent(query: string): SearchResultItem[] {
  if (!query || query.trim().length === 0) return [];

  // Normalize query: remove spaces, accents for fuzzy matching, lowercase
  const normalize = (str: string) =>
    str
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[\$\{\}\^\_\\]/g, '')
      .replace(/\s+/g, ' ')
      .trim();

  const qNorm = normalize(query);
  const results: SearchResultItem[] = [];

  // Search in Theories
  Object.values(ALL_THEORIES).forEach((theory) => {
    // Objectives & Summary
    if (normalize(theory.summary).includes(qNorm) || normalize(theory.title).includes(qNorm)) {
      results.push({
        id: `th-sum-${theory.id}`,
        type: 'theory',
        title: `${theory.title}: Tóm tắt cốt lõi`,
        snippet: theory.summary,
        lessonId: theory.id as LessonId,
        lessonTitle: theory.title,
      });
    }

    // Core knowledge points
    theory.coreKnowledge.forEach((sec, idx) => {
      if (normalize(sec.heading).includes(qNorm) || sec.points.some(p => normalize(p).includes(qNorm))) {
        results.push({
          id: `th-sec-${theory.id}-${idx}`,
          type: 'theory',
          title: `${theory.title}: ${sec.heading}`,
          snippet: sec.points.join(' '),
          lessonId: theory.id as LessonId,
          lessonTitle: theory.title,
        });
      }
    });

    // Formulas
    theory.formulas.forEach((form, idx) => {
      if (normalize(form.name).includes(qNorm) || normalize(form.latex).includes(qNorm) || normalize(form.description).includes(qNorm)) {
        results.push({
          id: `th-form-${theory.id}-${idx}`,
          type: 'formula',
          title: `Công thức: ${form.name}`,
          snippet: `${form.latex} - ${form.description}`,
          lessonId: theory.id as LessonId,
          lessonTitle: theory.title,
        });
      }
    });
  });

  // Search in Flashcards
  getAllFlashcards().forEach((fc) => {
    if (normalize(fc.front).includes(qNorm) || normalize(fc.back).includes(qNorm)) {
      const lesson = LESSONS.find(l => l.id === fc.lessonId);
      results.push({
        id: `search-fc-${fc.id}`,
        type: 'flashcard',
        title: `Thẻ nhớ: ${fc.front}`,
        snippet: fc.back,
        lessonId: fc.lessonId,
        lessonTitle: lesson?.title || 'Ôn Tập',
      });
    }
  });

  // Search in Quiz questions
  getAllQuizzes().forEach((q) => {
    if (normalize(q.question).includes(qNorm) || normalize(q.explanation).includes(qNorm) || q.options.some(o => normalize(o.text).includes(qNorm))) {
      const lesson = LESSONS.find(l => l.id === q.lessonId);
      results.push({
        id: `search-q-${q.id}`,
        type: 'quiz',
        title: `Câu hỏi: ${q.question}`,
        snippet: `Đáp án đúng: ${q.correctAnswer}. ${q.explanation}`,
        lessonId: (q.lessonId === 'final-exam-c1' ? 'bai-3' : q.lessonId === 'final-exam-c2' ? 'bai-9' : q.lessonId === 'final-exam-c3' ? 'bai-14' : q.lessonId === 'final-exam-c4' ? 'bai-18' : q.lessonId === 'final-exam-c5' ? 'bai-22' : q.lessonId === 'final-exam-c6' ? 'bai-25' : q.lessonId) as LessonId,
        lessonTitle: lesson?.title || 'Đề Tổng Kết',
      });
    }
  });

  return results.slice(0, 30);
}
