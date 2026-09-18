import { ChapterInfo } from '../../types';
import { lesson19Theory, lesson19Flashcards, lesson19Quizzes } from './lesson19Data';
import { lesson20Theory, lesson20Flashcards, lesson20Quizzes } from './lesson20Data';
import { lesson21Theory, lesson21Flashcards, lesson21Quizzes } from './lesson21Data';
import { lesson22Theory, lesson22Flashcards, lesson22Quizzes, finalChapter5ExamQuizzes } from './lesson22Data';

export {
  lesson19Theory, lesson19Flashcards, lesson19Quizzes,
  lesson20Theory, lesson20Flashcards, lesson20Quizzes,
  lesson21Theory, lesson21Flashcards, lesson21Quizzes,
  lesson22Theory, lesson22Flashcards, lesson22Quizzes,
  finalChapter5ExamQuizzes
};

export const chapter5Data: ChapterInfo = {
  id: 'chuong-5',
  number: 5,
  title: 'Dẫn xuất Halogen - Alcohol - Phenol',
  subtitle: 'Chương 5 - Hoá học 11 (Kết nối tri thức)',
  description: 'Khám phá cấu tạo, danh pháp, tính chất vật lí, tính chất hoá học và ứng dụng của Dẫn xuất Halogen, Alcohol (C2H5OH, Glycerol) và Phenol (C6H5OH).',
  lessons: [
    {
      id: 'bai-19',
      chapterId: 'chuong-5',
      number: 19,
      title: 'Bài 19: Dẫn xuất halogen',
      subtitle: 'Khái niệm, Danh pháp & Quy tắc Zaitsev',
      description: 'Khái niệm, danh pháp thay thế/gốc-chức, liên kết C-X phân cực, phản ứng thế halogeno, phản ứng tách HX theo quy tắc Zaitsev và vấn đề bảo vệ tầng ozone.',
      iconName: 'Atom',
      flashcardCount: lesson19Flashcards.length,
      quizCount: lesson19Quizzes.length
    },
    {
      id: 'bai-20',
      chapterId: 'chuong-5',
      number: 20,
      title: 'Bài 20: Alcohol',
      subtitle: 'Cấu tạo, Bậc alcohol & Phản ứng đặc trưng',
      description: 'Cấu tạo nhóm -OH, liên kết hydrogen, nhiệt độ sôi, phản ứng thế Na, tạo ether (140°C), tách nước alkene (170°C), oxi hoá CuO ra aldehyde/ketone và tác dụng của Cu(OH)2 với polyalcohol kề nhau.',
      iconName: 'Beaker',
      flashcardCount: lesson20Flashcards.length,
      quizCount: lesson20Quizzes.length
    },
    {
      id: 'bai-21',
      chapterId: 'chuong-5',
      number: 21,
      title: 'Bài 21: Phenol',
      subtitle: 'Cấu tạo Vòng thơm, Tính acid & Thế nhân thơm',
      description: 'Cấu tạo phenol C6H5OH, tính acid yếu (tác dụng với NaOH, đẩy bởi CO2), phản ứng thế vòng thơm với nước Br2 (tủa trắng) và HNO3 đặc (tủa vàng), điều chế từ cumene.',
      iconName: 'FlaskConical',
      flashcardCount: lesson21Flashcards.length,
      quizCount: lesson21Quizzes.length
    },
    {
      id: 'bai-22',
      chapterId: 'chuong-5',
      number: 22,
      title: 'Bài 22: Ôn tập & Tổng kết Chương 5',
      subtitle: 'Dẫn xuất Halogen - Alcohol - Phenol',
      description: 'Hệ thống hoá tính chất, bảng so sánh alcohol và phenol, sơ đồ chuyển hoá hoá học và bài tập trắc nghiệm tổng hợp Chương 5.',
      iconName: 'GraduationCap',
      flashcardCount: lesson22Flashcards.length,
      quizCount: lesson22Quizzes.length
    }
  ]
};
