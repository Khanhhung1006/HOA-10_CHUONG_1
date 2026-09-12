import React, { useState, useEffect } from 'react';
import { LessonId, ViewMode } from './types';
import { lessonsData, getLessonById, totalChapterFlashcards } from './data';
import { useProgress } from './utils/useProgress';
import { Navbar } from './components/Navbar';
import { TheoryView } from './components/TheoryView';
import { FlashcardView } from './components/FlashcardView';
import { QuizView } from './components/QuizView';
import { ProgressDashboard } from './components/ProgressDashboard';
import { PeriodicTableModal } from './components/PeriodicTableModal';
import { Atom } from 'lucide-react';

const ZOOM_LEVELS = [90, 100, 110, 125, 140, 160];

export default function App() {
  const [currentLessonId, setCurrentLessonId] = useState<LessonId>('bai1');
  const [currentView, setCurrentView] = useState<ViewMode>('theory');
  const [isPeriodicTableOpen, setIsPeriodicTableOpen] = useState(false);
  
  // Font Zoom state (persisted in localStorage)
  const [zoomLevel, setZoomLevel] = useState<number>(() => {
    try {
      const saved = localStorage.getItem('hoa10_zoom_level');
      if (saved) return parseInt(saved, 10) || 100;
    } catch (e) {
      // ignore
    }
    return 100;
  });

  useEffect(() => {
    try {
      localStorage.setItem('hoa10_zoom_level', zoomLevel.toString());
    } catch (e) {
      // ignore
    }
  }, [zoomLevel]);

  // Touch Pinch Gesture (Dùng 2 ngón tay chụm / xòe để zoom chữ tự động dàn trang)
  useEffect(() => {
    let initialPinchDistance = 0;
    let initialZoom = zoomLevel;

    const getDistance = (touches: TouchList) => {
      const dx = touches[0].clientX - touches[1].clientX;
      const dy = touches[0].clientY - touches[1].clientY;
      return Math.sqrt(dx * dx + dy * dy);
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 2) {
        initialPinchDistance = getDistance(e.touches);
        initialZoom = zoomLevel;
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 2 && initialPinchDistance > 0) {
        const currentDistance = getDistance(e.touches);
        const ratio = currentDistance / initialPinchDistance;
        let newZoom = Math.round((initialZoom * ratio) / 5) * 5;
        if (newZoom < 90) newZoom = 90;
        if (newZoom > 160) newZoom = 160;
        setZoomLevel(newZoom);
      }
    };

    const handleTouchEnd = () => {
      initialPinchDistance = 0;
    };

    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [zoomLevel]);

  const handleIncreaseZoom = () => {
    const currentIdx = ZOOM_LEVELS.indexOf(zoomLevel);
    if (currentIdx < ZOOM_LEVELS.length - 1) {
      setZoomLevel(ZOOM_LEVELS[currentIdx + 1]);
    } else if (zoomLevel < 160) {
      setZoomLevel(160);
    }
  };

  const handleDecreaseZoom = () => {
    const currentIdx = ZOOM_LEVELS.indexOf(zoomLevel);
    if (currentIdx > 0) {
      setZoomLevel(ZOOM_LEVELS[currentIdx - 1]);
    } else if (zoomLevel > 90) {
      setZoomLevel(90);
    }
  };

  const handleResetZoom = () => {
    setZoomLevel(100);
  };

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
    <div className="min-h-screen bg-[#FAF7F2] text-amber-950 flex flex-col font-sans selection:bg-cyan-500 selection:text-white pb-12 w-full max-w-full overflow-x-hidden">
      {/* Sticky Top Navbar */}
      <Navbar
        currentLessonId={currentLessonId}
        onSelectLesson={id => setCurrentLessonId(id)}
        currentView={currentView}
        onSelectView={view => setCurrentView(view)}
        learnedCount={totalLearnedCards}
        totalCards={totalChapterFlashcards}
        onOpenPeriodicTable={() => setIsPeriodicTableOpen(true)}
        zoomLevel={zoomLevel}
        onIncreaseZoom={handleIncreaseZoom}
        onDecreaseZoom={handleDecreaseZoom}
        onResetZoom={handleResetZoom}
      />

      {/* Main Content Area with Dynamic Proportional Font Scaler & Auto-Flow Layout */}
      <main 
        className="flex-1 w-full max-w-full overflow-x-hidden break-words transition-all duration-200 dynamic-text-scaler"
        style={{ 
          fontSize: `${zoomLevel / 100}rem`,
          '--text-scale': zoomLevel / 100
        } as React.CSSProperties}
      >
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
      <footer className="mt-12 border-t border-amber-200/80 bg-[#FFFDF9] py-6 text-center text-xs text-amber-800/80 space-y-1 w-full">
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
