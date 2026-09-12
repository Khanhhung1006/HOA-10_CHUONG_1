import { useState, useEffect } from 'react';
import { UserProgress, LessonId, QuizAttempt } from '../types';

const STORAGE_KEY = 'hoa10_chuong1_progress_v1';

const defaultProgress: UserProgress = {
  learnedFlashcardIds: [],
  quizProgress: {
    bai1: { bestScore: 0, totalQuestions: 16, attempts: [] },
    bai2: { bestScore: 0, totalQuestions: 16, attempts: [] },
    bai3: { bestScore: 0, totalQuestions: 17, attempts: [] },
    bai4: { bestScore: 0, totalQuestions: 16, attempts: [] },
  },
};

export function useProgress() {
  const [progress, setProgress] = useState<UserProgress>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return {
          ...defaultProgress,
          ...parsed,
          quizProgress: {
            ...defaultProgress.quizProgress,
            ...(parsed.quizProgress || {}),
          },
        };
      }
    } catch (e) {
      console.warn('Failed to load progress from localStorage', e);
    }
    return defaultProgress;
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch (e) {
      console.warn('Failed to save progress to localStorage', e);
    }
  }, [progress]);

  const markCardLearned = (cardId: string) => {
    setProgress(prev => {
      if (prev.learnedFlashcardIds.includes(cardId)) return prev;
      return {
        ...prev,
        learnedFlashcardIds: [...prev.learnedFlashcardIds, cardId],
      };
    });
  };

  const unmarkCardLearned = (cardId: string) => {
    setProgress(prev => ({
      ...prev,
      learnedFlashcardIds: prev.learnedFlashcardIds.filter(id => id !== cardId),
    }));
  };

  const toggleCardLearned = (cardId: string) => {
    setProgress(prev => {
      const isLearned = prev.learnedFlashcardIds.includes(cardId);
      return {
        ...prev,
        learnedFlashcardIds: isLearned
          ? prev.learnedFlashcardIds.filter(id => id !== cardId)
          : [...prev.learnedFlashcardIds, cardId],
      };
    });
  };

  const saveQuizAttempt = (
    lessonId: LessonId,
    score: number,
    total: number,
    userAnswers: Record<number, number>
  ) => {
    setProgress(prev => {
      const currentLessonState = prev.quizProgress[lessonId] || {
        bestScore: 0,
        totalQuestions: total,
        attempts: [],
      };

      const newAttempt: QuizAttempt = {
        date: new Date().toLocaleString('vi-VN'),
        score,
        total,
        userAnswers,
      };

      const newBest = Math.max(currentLessonState.bestScore, score);

      return {
        ...prev,
        quizProgress: {
          ...prev.quizProgress,
          [lessonId]: {
            bestScore: newBest,
            totalQuestions: total,
            lastAttemptDate: newAttempt.date,
            attempts: [newAttempt, ...currentLessonState.attempts],
          },
        },
      };
    });
  };

  const resetLessonFlashcards = (lessonId: LessonId, flashcardIds: string[]) => {
    setProgress(prev => ({
      ...prev,
      learnedFlashcardIds: prev.learnedFlashcardIds.filter(
        id => !flashcardIds.includes(id)
      ),
    }));
  };

  const resetAllProgress = () => {
    setProgress(defaultProgress);
  };

  return {
    progress,
    markCardLearned,
    unmarkCardLearned,
    toggleCardLearned,
    saveQuizAttempt,
    resetLessonFlashcards,
    resetAllProgress,
  };
}
