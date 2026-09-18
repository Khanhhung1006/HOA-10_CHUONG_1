import React, { useState, useEffect } from 'react';
import { 
  Navbar, 
  ActiveTab 
} from './components/Navbar';
import { TheorySection } from './components/TheorySection';
import { FlashcardDeck } from './components/FlashcardDeck';
import { QuizPlayer } from './components/QuizPlayer';
import { StatsDashboard } from './components/StatsDashboard';
import { GlobalSearchModal } from './components/GlobalSearchModal';
import { 
  ChapterId,
  LessonId, 
  UserStudyStats, 
  QuizSessionResult 
} from './types';
import { 
  CHAPTERS,
  LESSONS, 
  getTheoryData, 
  getFlashcardsByLesson, 
  getQuizQuestionsByLesson, 
  finalChapter1ExamQuizzes,
  finalChapter2ExamQuizzes,
  finalChapter3ExamQuizzes,
  finalChapter4ExamQuizzes,
  finalChapter5ExamQuizzes,
  finalChapter6ExamQuizzes,
  getAllFlashcards
} from './data';
import { GraduationCap } from 'lucide-react';

const STATS_STORAGE_KEY = 'hoa11_c1_c2_user_stats';
const THEME_STORAGE_KEY = 'hoa11_theme';

export default function App() {
  const [selectedChapter, setSelectedChapter] = useState<ChapterId>('chuong-1');
  const [activeTab, setActiveTab] = useState<ActiveTab>('theory');
  const [selectedLesson, setSelectedLesson] = useState<LessonId>('bai-1');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Dark mode state
  const [isDark, setIsDark] = useState<boolean>(() => {
    const saved = localStorage.getItem(THEME_STORAGE_KEY);
    if (saved !== null) {
      return saved === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // User Stats state
  const [stats, setStats] = useState<UserStudyStats>(() => {
    try {
      const saved = localStorage.getItem(STATS_STORAGE_KEY) || localStorage.getItem('hoa11_c1_user_stats');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error('Failed to parse stats from localStorage', e);
    }
    return {
      learnedCardIds: [],
      quizHistory: [],
      lastActiveTimestamp: Date.now(),
    };
  });

  // Persist Dark mode
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem(THEME_STORAGE_KEY, 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem(THEME_STORAGE_KEY, 'light');
    }
  }, [isDark]);

  // Persist Stats
  useEffect(() => {
    try {
      localStorage.setItem(STATS_STORAGE_KEY, JSON.stringify(stats));
    } catch (e) {
      console.error('Failed to save stats', e);
    }
  }, [stats]);

  // When changing lesson, sync selectedChapter if needed
  const handleSelectLesson = (lessonId: LessonId) => {
    setSelectedLesson(lessonId);
    const lessonMeta = LESSONS.find(l => l.id === lessonId);
    if (lessonMeta && lessonMeta.chapterId !== selectedChapter) {
      setSelectedChapter(lessonMeta.chapterId);
    }
  };

  // Flashcard toggle mastered
  const handleToggleLearnedCard = (cardId: string) => {
    setStats((prev) => {
      const exists = prev.learnedCardIds.includes(cardId);
      const updated = exists
        ? prev.learnedCardIds.filter((id) => id !== cardId)
        : [...prev.learnedCardIds, cardId];
      return {
        ...prev,
        learnedCardIds: updated,
        lastActiveTimestamp: Date.now(),
      };
    });
  };

  // Save Quiz Session
  const handleSaveQuizSession = (result: QuizSessionResult) => {
    setStats((prev) => ({
      ...prev,
      quizHistory: [...prev.quizHistory, result],
      lastActiveTimestamp: Date.now(),
    }));
  };

  // Reset Stats
  const handleResetStats = () => {
    if (window.confirm('Bạn có chắc chắn muốn đặt lại toàn bộ tiến độ học tập và lịch sử trắc nghiệm không?')) {
      const initialStats: UserStudyStats = {
        learnedCardIds: [],
        quizHistory: [],
        lastActiveTimestamp: Date.now(),
      };
      setStats(initialStats);
      localStorage.setItem(STATS_STORAGE_KEY, JSON.stringify(initialStats));
    }
  };

  // Navigation handlers
  const handleGoToFlashcards = (lessonId: LessonId) => {
    handleSelectLesson(lessonId);
    setActiveTab('flashcards');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoToQuiz = (lessonId: LessonId) => {
    handleSelectLesson(lessonId);
    setActiveTab('quiz');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearchSelect = (
    type: 'theory' | 'flashcard' | 'quiz' | 'formula',
    lessonId: LessonId | 'final-exam'
  ) => {
    if (lessonId === 'final-exam') {
      setActiveTab('final-exam');
    } else {
      handleSelectLesson(lessonId);
      if (type === 'flashcard') {
        setActiveTab('flashcards');
      } else if (type === 'quiz') {
        setActiveTab('quiz');
      } else {
        setActiveTab('theory');
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Data helpers for current view
  const currentTheory = getTheoryData(selectedLesson);
  const currentLessonCards = getFlashcardsByLesson(selectedLesson);
  const currentLessonQuizzes = getQuizQuestionsByLesson(selectedLesson);
  const currentLessonMeta = LESSONS.find((l) => l.id === selectedLesson) || LESSONS[0];
  const allCards = getAllFlashcards();
  const currentChapterMeta = CHAPTERS.find(c => c.id === selectedChapter) || CHAPTERS[0];

  const currentFinalExamQuizzes = selectedChapter === 'chuong-6'
    ? finalChapter6ExamQuizzes
    : selectedChapter === 'chuong-5'
    ? finalChapter5ExamQuizzes
    : selectedChapter === 'chuong-4'
    ? finalChapter4ExamQuizzes
    : selectedChapter === 'chuong-3'
    ? finalChapter3ExamQuizzes
    : selectedChapter === 'chuong-2' 
    ? finalChapter2ExamQuizzes 
    : finalChapter1ExamQuizzes;

  const currentFinalExamLessonId = selectedChapter === 'chuong-6'
    ? 'final-exam-c6'
    : selectedChapter === 'chuong-5'
    ? 'final-exam-c5'
    : selectedChapter === 'chuong-4'
    ? 'final-exam-c4'
    : selectedChapter === 'chuong-3'
    ? 'final-exam-c3'
    : selectedChapter === 'chuong-2'
    ? 'final-exam-c2'
    : 'final-exam-c1';

  const currentFinalExamTitle = selectedChapter === 'chuong-6'
    ? 'Đề thi trắc nghiệm tổng hợp cuối chương 6: Hợp chất Carbonyl – Carboxylic Acid (20 câu)'
    : selectedChapter === 'chuong-5'
    ? 'Đề thi trắc nghiệm tổng hợp cuối chương 5: Dẫn xuất halogen - Alcohol - Phenol (20 câu)'
    : selectedChapter === 'chuong-4'
    ? 'Đề thi trắc nghiệm tổng hợp cuối chương 4: Hydrocarbon (25 câu)'
    : selectedChapter === 'chuong-3'
    ? 'Đề thi trắc nghiệm tổng hợp cuối chương 3: Đại cương hoá học hữu cơ (20 câu)'
    : selectedChapter === 'chuong-2'
    ? 'Đề thi trắc nghiệm tổng hợp cuối chương 2: Nitrogen – Sulfur (35 câu)'
    : 'Đề thi trắc nghiệm tổng hợp cuối chương 1: Cân bằng hoá học (32 câu)';

  return (
    <div className="min-h-screen bg-[#F7FAFC] dark:bg-[#0F172A] text-[#0F172A] dark:text-[#F8FAFC] flex flex-col font-sans transition-colors duration-200">
      {/* Top Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        selectedChapter={selectedChapter}
        setSelectedChapter={(chId) => {
          setSelectedChapter(chId);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        selectedLesson={selectedLesson}
        setSelectedLesson={(lId) => {
          handleSelectLesson(lId);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        isDark={isDark}
        setIsDark={setIsDark}
        onOpenSearch={() => setIsSearchOpen(true)}
        learnedCardCount={stats.learnedCardIds.length}
        totalCardCount={allCards.length}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {activeTab === 'theory' && (
          <TheorySection
            theoryData={currentTheory}
            onGoToFlashcards={handleGoToFlashcards}
            onGoToQuiz={handleGoToQuiz}
          />
        )}

        {activeTab === 'flashcards' && (
          <FlashcardDeck
            cards={currentLessonCards}
            lessonId={selectedLesson}
            lessonTitle={currentLessonMeta.title}
            learnedCardIds={stats.learnedCardIds}
            onToggleLearned={handleToggleLearnedCard}
          />
        )}

        {activeTab === 'quiz' && (
          <QuizPlayer
            key={`quiz-${selectedLesson}`}
            questions={currentLessonQuizzes}
            lessonId={selectedLesson}
            title={`Trắc Nghiệm: ${currentLessonMeta.title}`}
            onSaveSession={handleSaveQuizSession}
            onGoToTheory={handleGoToFlashcards}
          />
        )}

        {activeTab === 'final-exam' && (
          <QuizPlayer
            key={`final-exam-${selectedChapter}`}
            questions={currentFinalExamQuizzes}
            lessonId={currentFinalExamLessonId}
            title={currentFinalExamTitle}
            onSaveSession={handleSaveQuizSession}
          />
        )}

        {activeTab === 'stats' && (
          <StatsDashboard
            stats={stats}
            onResetStats={handleResetStats}
            onNavigateToTab={(tab, lessonId, chapterId) => {
              if (chapterId) setSelectedChapter(chapterId);
              if (lessonId) handleSelectLesson(lessonId);
              setActiveTab(tab);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}
      </main>

      {/* Global Search Dialog Modal */}
      <GlobalSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectResult={handleSearchSelect}
      />

      {/* Footer */}
      <footer className="mt-auto border-t border-[#E2E8F0] dark:border-[#334155] bg-white dark:bg-[#1E293B] py-6 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748B] dark:text-[#94A3B8]">
          <div className="flex items-center space-x-2">
            <GraduationCap className="w-5 h-5 text-[#06B6D4]" />
            <span className="font-semibold text-[#0F172A] dark:text-[#F8FAFC]">
              Ôn Tập Hoá Học 11 • {currentChapterMeta.title}
            </span>
          </div>
          <div className="flex items-center space-x-1 font-medium text-[#475569] dark:text-[#CBD5E1]">
            <span>Thầy Quân - 0989292342</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
