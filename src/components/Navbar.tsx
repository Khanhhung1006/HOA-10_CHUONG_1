import React from 'react';
import { 
  BookOpen, 
  Layers, 
  HelpCircle, 
  Award, 
  BarChart3, 
  Search, 
  Moon, 
  Sun,
  GraduationCap,
  Sparkles,
  ChevronDown
} from 'lucide-react';
import { ChapterId, LessonId } from '../types';
import { CHAPTERS, LESSONS } from '../data';

export type ActiveTab = 'theory' | 'flashcards' | 'quiz' | 'final-exam' | 'stats';

interface NavbarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  selectedChapter: ChapterId;
  setSelectedChapter: (chapter: ChapterId) => void;
  selectedLesson: LessonId;
  setSelectedLesson: (lesson: LessonId) => void;
  isDark: boolean;
  setIsDark: (val: boolean | ((prev: boolean) => boolean)) => void;
  onOpenSearch: () => void;
  learnedCardCount: number;
  totalCardCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  selectedChapter,
  setSelectedChapter,
  selectedLesson,
  setSelectedLesson,
  isDark,
  setIsDark,
  onOpenSearch,
  learnedCardCount,
  totalCardCount,
}) => {
  const currentChapter = CHAPTERS.find(c => c.id === selectedChapter) || CHAPTERS[0];
  const chapterLessons = LESSONS.filter(l => l.chapterId === selectedChapter);
  const percentLearned = totalCardCount > 0 ? Math.round((learnedCardCount / totalCardCount) * 100) : 0;

  const handleChapterChange = (chapterId: ChapterId) => {
    setSelectedChapter(chapterId);
    const firstLessonInChapter = LESSONS.find(l => l.chapterId === chapterId);
    if (firstLessonInChapter) {
      setSelectedLesson(firstLessonInChapter.id);
    }
  };

  const isExamTabActive = activeTab === 'final-exam';
  const examTabLabel = selectedChapter === 'chuong-4'
    ? 'Đề cuối chương 4 (25 câu)'
    : selectedChapter === 'chuong-3'
    ? 'Đề cuối chương 3 (20 câu)'
    : selectedChapter === 'chuong-2' 
    ? 'Đề cuối chương 2 (35 câu)' 
    : 'Đề cuối chương 1 (32 câu)';

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#E2E8F0] dark:border-[#334155] bg-[#FFFFFF]/95 dark:bg-[#1E293B]/95 backdrop-blur-md transition-colors duration-200">
      {/* Top Banner / Brand */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & App Name with Chapter Selector */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#06B6D4] to-[#0891B2] flex items-center justify-center text-white shadow-md shadow-[#06B6D4]/20">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-bold text-base sm:text-lg text-[#0F172A] dark:text-[#F8FAFC] tracking-tight leading-none">
                Hoá Học 11
              </span>
              
              {/* Chapter Selector Dropdown / Pill (Row below) */}
              <div className="relative inline-flex items-center mt-1">
                <select
                  id="chapter-select"
                  value={selectedChapter}
                  onChange={(e) => handleChapterChange(e.target.value as ChapterId)}
                  className="appearance-none pl-2.5 pr-7 py-0.5 rounded-lg text-xs font-semibold bg-[#CFFAFE] text-[#164E63] dark:bg-[#06B6D4]/20 dark:text-[#38BDF8] border border-[#06B6D4]/30 cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-[#06B6D4]"
                >
                  {CHAPTERS.map((ch) => (
                    <option key={ch.id} value={ch.id} className="bg-white dark:bg-[#1E293B] text-[#0F172A] dark:text-[#F8FAFC]">
                      {ch.title}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-3.5 h-3.5 absolute right-2 pointer-events-none text-[#164E63] dark:text-[#38BDF8]" />
              </div>
            </div>
          </div>

          {/* Action Tools: Search, Theme Toggle, Overall Progress */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Quick Search Button */}
            <button
              id="global-search-btn"
              onClick={onOpenSearch}
              className="flex items-center space-x-2 px-3 py-1.5 rounded-lg border border-[#E2E8F0] dark:border-[#334155] bg-[#F1F5F9] dark:bg-[#0F172A] text-sm text-[#475569] dark:text-[#94A3B8] hover:border-[#06B6D4] dark:hover:border-[#06B6D4] transition-all cursor-pointer"
              title="Tìm kiếm lý thuyết, công thức, thẻ nhớ (Ctrl+K)"
            >
              <Search className="w-4 h-4 text-[#06B6D4]" />
              <span className="hidden md:inline">Tìm kiếm nhanh...</span>
              <kbd className="hidden md:inline-block text-[10px] font-mono px-1.5 py-0.5 rounded bg-white dark:bg-[#1E293B] border border-[#E2E8F0] dark:border-[#334155]">
                ⌘K
              </kbd>
            </button>

            {/* Progress Badge */}
            <div className="hidden lg:flex items-center space-x-2 px-3 py-1 rounded-lg bg-[#ECFEFF] dark:bg-[#06B6D4]/10 border border-[#CFFAFE] dark:border-[#06B6D4]/20 text-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#D4A017]" />
              <span className="text-[#164E63] dark:text-[#38BDF8] font-medium">
                Đã thuộc: <strong>{learnedCardCount}/{totalCardCount}</strong> thẻ ({percentLearned}%)
              </span>
            </div>

            {/* Theme Toggle Button */}
            <button
              id="theme-toggle-btn"
              onClick={() => setIsDark((prev) => !prev)}
              className="p-2 rounded-lg text-[#475569] dark:text-[#94A3B8] hover:bg-[#F1F5F9] dark:hover:bg-[#0F172A] hover:text-[#06B6D4] transition-colors cursor-pointer"
              title={isDark ? "Chuyển sang Giao diện Sáng" : "Chuyển sang Giao diện Tối"}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-5 h-5 text-[#D4A017]" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Primary Tabs & Lesson Selector */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-2 border-t border-[#E2E8F0] dark:border-[#334155]/60 gap-2">
          {/* Main Navigation Tabs */}
          <nav className="flex items-center space-x-1 sm:space-x-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none" aria-label="Tabs">
            <button
              id="tab-theory"
              onClick={() => setActiveTab('theory')}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all cursor-pointer ${
                activeTab === 'theory'
                  ? 'bg-[#06B6D4] text-white shadow-xs shadow-[#06B6D4]/30'
                  : 'text-[#475569] dark:text-[#94A3B8] hover:bg-[#F1F5F9] dark:hover:bg-[#1F2937]'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Lý thuyết</span>
            </button>

            <button
              id="tab-flashcards"
              onClick={() => setActiveTab('flashcards')}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all cursor-pointer ${
                activeTab === 'flashcards'
                  ? 'bg-[#06B6D4] text-white shadow-xs shadow-[#06B6D4]/30'
                  : 'text-[#475569] dark:text-[#94A3B8] hover:bg-[#F1F5F9] dark:hover:bg-[#1F2937]'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>Flashcard</span>
            </button>

            <button
              id="tab-quiz"
              onClick={() => setActiveTab('quiz')}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all cursor-pointer ${
                activeTab === 'quiz'
                  ? 'bg-[#06B6D4] text-white shadow-xs shadow-[#06B6D4]/30'
                  : 'text-[#475569] dark:text-[#94A3B8] hover:bg-[#F1F5F9] dark:hover:bg-[#1F2937]'
              }`}
            >
              <HelpCircle className="w-4 h-4" />
              <span>Trắc nghiệm</span>
            </button>

            <button
              id="tab-final-exam"
              onClick={() => setActiveTab('final-exam')}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
                isExamTabActive
                  ? 'bg-[#D4A017] text-white shadow-xs shadow-[#D4A017]/30'
                  : 'text-[#D4A017] hover:bg-[#F6E7B2]/30 dark:hover:bg-[#D4A017]/10'
              }`}
            >
              <Award className="w-4 h-4" />
              <span>{examTabLabel}</span>
            </button>

            <button
              id="tab-stats"
              onClick={() => setActiveTab('stats')}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all cursor-pointer ${
                activeTab === 'stats'
                  ? 'bg-[#06B6D4] text-white shadow-xs shadow-[#06B6D4]/30'
                  : 'text-[#475569] dark:text-[#94A3B8] hover:bg-[#F1F5F9] dark:hover:bg-[#1F2937]'
              }`}
            >
              <BarChart3 className="w-4 h-4" />
              <span>Thống Kê Tiến Độ</span>
            </button>
          </nav>

          {/* Lesson Selector for Current Chapter (Visible on Theory, Flashcards, or Lesson Quiz) */}
          {activeTab !== 'final-exam' && activeTab !== 'stats' && (
            <div className="flex items-center space-x-1 self-start sm:self-auto bg-[#F1F5F9] dark:bg-[#0F172A] p-1 rounded-lg border border-[#E2E8F0] dark:border-[#334155] overflow-x-auto max-w-full">
              {chapterLessons.map((lesson) => (
                <button
                  key={lesson.id}
                  id={`select-lesson-${lesson.id}`}
                  onClick={() => setSelectedLesson(lesson.id)}
                  className={`px-2.5 py-1 text-xs rounded-md font-medium whitespace-nowrap transition-colors cursor-pointer ${
                    selectedLesson === lesson.id
                      ? 'bg-white dark:bg-[#1E293B] text-[#06B6D4] dark:text-[#38BDF8] shadow-xs font-semibold'
                      : 'text-[#64748B] dark:text-[#94A3B8] hover:text-[#0F172A] dark:hover:text-white'
                  }`}
                >
                  Bài {lesson.number}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
