import { Lesson, LessonId } from '../types';
import { bai1Data } from './bai1';
import { bai2Data } from './bai2';
import { bai3Data } from './bai3';
import { bai4Data } from './bai4';

export const lessonsData: Lesson[] = [
  bai1Data,
  bai2Data,
  bai3Data,
  bai4Data,
];

export function getLessonById(id: LessonId): Lesson {
  return lessonsData.find(lesson => lesson.id === id) || bai1Data;
}

export const totalChapterFlashcards = lessonsData.reduce(
  (acc, lesson) => acc + lesson.flashcards.length,
  0
);

export const totalChapterQuestions = lessonsData.reduce(
  (acc, lesson) => acc + lesson.quizQuestions.length,
  0
);
