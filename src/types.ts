export type LessonId = 'bai1' | 'bai2' | 'bai3' | 'bai4';

export type ViewMode = 'theory' | 'flashcards' | 'quiz' | 'progress';

export interface TableData {
  headers: string[];
  rows: string[][];
}

export interface TheorySection {
  id: string;
  title: string;
  content: string[];
  keyPoints?: string[];
  tableData?: TableData;
  callout?: {
    type: 'note' | 'remember' | 'formula';
    title: string;
    text: string;
  };
}

export interface Flashcard {
  id: string;
  lessonId: LessonId;
  question: string;
  answer: string;
  tag?: string;
  note?: string;
}

export interface QuizQuestion {
  id: string;
  lessonId: LessonId;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
  topicTag?: string;
}

export interface Lesson {
  id: LessonId;
  number: number;
  title: string;
  subtitle: string;
  description: string;
  pageRange: string;
  sections: TheorySection[];
  flashcards: Flashcard[];
  quizQuestions: QuizQuestion[];
}

export interface QuizAttempt {
  date: string;
  score: number;
  total: number;
  userAnswers: Record<number, number>; // questionIndex -> selectedOptionIndex
}

export interface LessonQuizState {
  bestScore: number;
  totalQuestions: number;
  lastAttemptDate?: string;
  attempts: QuizAttempt[];
}

export interface UserProgress {
  learnedFlashcardIds: string[];
  quizProgress: Record<LessonId, LessonQuizState>;
}
