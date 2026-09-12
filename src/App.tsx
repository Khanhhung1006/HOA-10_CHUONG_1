import React, { useState } from 'react';
import { LessonId, ViewMode } from './types';
import { lessonsData, getLessonById, totalChapterFlashcards } from './data';
import { useProgress } from './utils/useProgress';
import { Navbar } from './components/Navbar';
import { TheoryView } from './components/TheoryView';
import { FlashcardView } from './components/FlashcardView';
import { QuizView } from './components/QuizView';
import { ProgressDashboard } from './components/ProgressDashboard';
import { PeriodicTableModal } from './components/PeriodicTableModal';
import { BookOpen, BrainCircuit, CheckCircle2, Atom, Sparkles } from 'lucide-react';

export default function App() {
  const [currentLessonId, setCurrentLessonId] = useState<LessonId>('bai1');
  const [currentView, setCurrentView] = useState<ViewMode>('theory');
  const [isPeriodicTableOpen, setIsPeriodicTableOpen] = useState(false);

  const {
    progress,
    toggleCardLearned,
    saveQuizAttempt,
    resetLessonFlashcards,
    resetAllProgress,
  } = useProgress();

  const currentLesson = getLessonById(currentLessonId);

  // Compute next/prev lesson IDs
  const lessonIds: LessonId[] = ['bai1', 'bai2', 'bai3', 'bai4'];
  const currentIndex = lessonIds.indexOf(currentLessonId);
  const prevLessonId = currentIndex > 0 ? lessonIds[currentIndex - 1] : undefined;
  const nextLessonId = currentIndex < lessonIds.length - 1 ? lessonIds[currentIndex + 1] : undefined;

  const totalLearnedCards = progress.learnedFlashcardIds.length;

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-amber-950 flex flex-col font-sans selection:bg-cyan-500 selection:text-white pb-12">
      {/* Sticky Top Navbar */}
      <Navbar
        currentLessonId={currentLessonId}
        onSelectLesson={id => setCurrentLessonId(id)}
        currentView={currentView}
        onSelectView={view => setCurrentView(view)}
        learnedCount={totalLearnedCards}
        totalCards={totalChapterFlashcards}
        onOpenPeriodicTable={() => setIsPeriodicTableOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentView === 'theory' && (
          <TheoryView
            lesson={currentLesson}
            onSelectView={view => setCurrentView(view)}
            onSelectLesson={id => setCurrentLessonId(id)}
            prevLessonId={prevLessonId}
            nextLessonId={nextLessonId}
          />
        )}

        {currentView === 'flashcards' && (
          <FlashcardView
            lesson={currentLesson}
            learnedCardIds={progress.learnedFlashcardIds}
            onToggleLearned={cardId => toggleCardLearned(cardId)}
            onResetLessonCards={cardIds => resetLessonFlashcards(currentLessonId, cardIds)}
          />
        )}

        {currentView === 'quiz' && (
          <QuizView
            lesson={currentLesson}
            onSaveQuizResult={(lessonId, score, total, userAnswers) =>
              saveQuizAttempt(lessonId, score, total, userAnswers)
            }
            bestScore={progress.quizProgress[currentLessonId]?.bestScore || 0}
          />
        )}

        {currentView === 'progress' && (
          <ProgressDashboard
            progress={progress}
            onSelectLesson={id => setCurrentLessonId(id)}
            onSelectView={view => setCurrentView(view)}
            onResetAllProgress={resetAllProgress}
          />
        )}
      </main>

      {/* Tra cứu 20 Nguyên tố Modal */}
      <PeriodicTableModal
        isOpen={isPeriodicTableOpen}
        onClose={() => setIsPeriodicTableOpen(false)}
      />

      {/* Footer */}
      <footer className="mt-12 border-t border-amber-200/80 bg-[#FFFDF9] py-6 text-center text-xs text-amber-800/80 space-y-1">
        <div className="flex items-center justify-center gap-2 font-bold text-amber-950 text-sm">
          <Atom className="w-4 h-4 text-cyan-700" />
          <span>ÔN TẬP CHƯƠNG 1 - HÓA 10</span>
        </div>
        <p className="text-cyan-800 font-extrabold text-sm pt-1">
          Thầy Quân - 0989292342
        </p>
      </footer>
    </div>
  );
}
