import { ChapterInfo } from '../../types';
import { lesson23Theory, lesson23Flashcards, lesson23Quizzes } from './lesson23Data';
import { lesson24Theory, lesson24Flashcards, lesson24Quizzes } from './lesson24Data';
import { lesson25Theory, lesson25Flashcards, lesson25Quizzes, finalChapter6ExamQuizzes } from './lesson25Data';

export {
  lesson23Theory, lesson23Flashcards, lesson23Quizzes,
  lesson24Theory, lesson24Flashcards, lesson24Quizzes,
  lesson25Theory, lesson25Flashcards, lesson25Quizzes,
  finalChapter6ExamQuizzes
};

export const chapter6Data: ChapterInfo = {
  id: 'chuong-6',
  number: 6,
  title: 'Hợp chất Carbonyl - Carboxylic Acid',
  subtitle: 'Chương 6 - Hoá học 11 (Kết nối tri thức)',
  description: 'Khám phá cấu tạo, danh pháp, tính chất vật lí, tính chất hoá học và ứng dụng của Hợp chất Carbonyl (Aldehyde, Ketone) và Carboxylic Acid (Formic, Acetic acid).',
  lessons: [
    {
      id: 'bai-23',
      chapterId: 'chuong-6',
      number: 23,
      title: 'Bài 23: Hợp chất carbonyl',
      subtitle: 'Aldehyde, Ketone & Phản ứng đặc trưng',
      description: 'Cấu tạo nhóm >C=O, danh pháp, tính chất vật lí, phản ứng khử NaBH4, oxi hoá Br2/Tollens/Cu(OH)2, cộng HCN, phản ứng iodoform và ứng dụng.',
      iconName: 'Sparkles',
      flashcardCount: lesson23Flashcards.length,
      quizCount: lesson23Quizzes.length
    },
    {
      id: 'bai-24',
      chapterId: 'chuong-6',
      number: 24,
      title: 'Bài 24: Carboxylic acid',
      subtitle: 'Cấu tạo Nhóm Carboxyl & Phản ứng Ester hoá',
      description: 'Cấu tạo nhóm -COOH, liên kết hydrogen dimer, tính acid yếu (đổi màu quỳ, phản ứng CaCO3, Zn, NaOH), phản ứng ester hoá, lên men giấm và ứng dụng.',
      iconName: 'FlaskRound',
      flashcardCount: lesson24Flashcards.length,
      quizCount: lesson24Quizzes.length
    },
    {
      id: 'bai-25',
      chapterId: 'chuong-6',
      number: 25,
      title: 'Bài 25: Ôn tập & Tổng kết Chương 6',
      subtitle: 'Hợp chất Carbonyl - Carboxylic Acid',
      description: 'Hệ thống hoá tính chất, so sánh nhiệt độ sôi, sơ đồ chuyển hoá hoá học và bài tập trắc nghiệm tổng hợp Chương 6.',
      iconName: 'GraduationCap',
      flashcardCount: lesson25Flashcards.length,
      quizCount: lesson25Quizzes.length
    }
  ]
};
