export type ChapterId = 'chuong-1' | 'chuong-2' | 'chuong-3' | 'chuong-4' | 'chuong-5' | 'chuong-6';

export type LessonId = 
  | 'bai-1' | 'bai-2' | 'bai-3' 
  | 'bai-4' | 'bai-5' | 'bai-6' | 'bai-7' | 'bai-8' | 'bai-9'
  | 'bai-10' | 'bai-11' | 'bai-12' | 'bai-13' | 'bai-14'
  | 'bai-15' | 'bai-16' | 'bai-17' | 'bai-18'
  | 'bai-19' | 'bai-20' | 'bai-21' | 'bai-22'
  | 'bai-23' | 'bai-24' | 'bai-25';

export interface Flashcard {
  id: string;
  chapterId?: ChapterId;
  lessonId: LessonId;
  front: string;
  back: string;
  category: 'khai-niem' | 'cong-thuc' | 'chuyen-dich' | 'dien-li' | 'ph' | 'thuc-tien' | 'nitrogen' | 'sulfur' | 'acid-base' | 'huu-co' | 'nhom-chuc' | 'tinh-che' | 'ctpt' | 'cau-tao' | 'alkane' | 'alkene-alkyne' | 'arene' | 'hydrocarbon' | 'dan-xuat-halogen' | 'alcohol' | 'phenol' | 'chuong-5' | 'carbonyl' | 'carboxylic-acid' | 'chuong-6';
  isLearned?: boolean;
}

export interface QuizOption {
  id: 'A' | 'B' | 'C' | 'D';
  text: string;
}

export interface QuizQuestion {
  id: string;
  chapterId?: ChapterId;
  lessonId: LessonId | 'final-exam' | 'final-exam-c1' | 'final-exam-c2' | 'final-exam-c3' | 'final-exam-c4' | 'final-exam-c5' | 'final-exam-c6';
  question: string;
  options: QuizOption[];
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  explanation: string;
  difficulty: 'NhanBiet' | 'ThongHieu' | 'VanDung';
  source?: string;
}

export interface FormulaItem {
  name: string;
  latex: string;
  description: string;
  unit?: string;
  notes?: string;
}

export interface TheorySectionData {
  id: string;
  chapterId?: ChapterId;
  title: string;
  objectives: string[];
  summary: string;
  coreKnowledge: {
    heading: string;
    points: string[];
    latexEquations?: string[];
  }[];
  formulas: FormulaItem[];
  keyConcepts: {
    term: string;
    definition: string;
  }[];
  examples: {
    title: string;
    content: string;
    solution?: string;
  }[];
  commonMistakes: {
    mistake: string;
    correction: string;
    why: string;
  }[];
  memoryTips: string[];
  glossary: {
    term: string;
    meaning: string;
  }[];
  reviewChecklist: string[];
}

export interface LessonInfo {
  id: LessonId;
  chapterId: ChapterId;
  number: number;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  flashcardCount: number;
  quizCount: number;
}

export interface ChapterInfo {
  id: ChapterId;
  number: number;
  title: string;
  subtitle: string;
  description: string;
  lessons: LessonInfo[];
}

export interface QuizSessionResult {
  id: string;
  timestamp: number;
  chapterId?: ChapterId;
  lessonId: LessonId | 'final-exam' | 'final-exam-c1' | 'final-exam-c2' | 'final-exam-c3' | 'final-exam-c4' | 'final-exam-c5' | 'final-exam-c6';
  title: string;
  totalQuestions: number;
  correctCount: number;
  score: number; // Scale 0-10
  timeSpentSeconds: number;
  userAnswers: Record<string, 'A' | 'B' | 'C' | 'D'>;
  incorrectQuestionIds: string[];
}

export interface UserStudyStats {
  learnedCardIds: string[];
  quizHistory: QuizSessionResult[];
  lastStudiedLesson?: LessonId | 'final-exam' | 'final-exam-c1' | 'final-exam-c2' | 'final-exam-c3' | 'final-exam-c4' | 'final-exam-c5' | 'final-exam-c6';
  totalStudySeconds?: number;
  lastActiveTimestamp?: number;
}
