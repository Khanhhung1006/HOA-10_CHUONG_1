import React, { useState, useEffect } from 'react';
import { LessonId, ViewMode } from '../types';
import { lessonsData } from '../data';
import { 
  BookOpen, 
  BrainCircuit, 
  CheckCircle2, 
  BarChart3, 
  Menu, 
  X, 
  Atom, 
  Table2,
  Sparkles,
  ChevronUp,
  ChevronDown,
  BookMarked,
  Check,
  ZoomIn,
  ZoomOut
} from 'lucide-react';
import { soundEffects } from '../utils/audio';

interface NavbarProps {
  currentLessonId: LessonId;
  onSelectLesson: (id: LessonId) => void;
  currentView: ViewMode;
  onSelectView: (view: ViewMode) => void;
  learnedCount: number;
  totalCards: number;
  onOpenPeriodicTable: () => void;
  zoomLevel: number;
  onIncreaseZoom: () => void;
  onDecreaseZoom: () => void;
  onResetZoom: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLessonId,
  onSelectLesson,
  currentView,
  onSelectView,
  learnedCount,
  totalCards,
  onOpenPeriodicTable,
  zoomLevel,
  onIncreaseZoom,
  onDecreaseZoom,
  onResetZoom,
}) => {
  const [lessonMenuOpen, setLessonMenuOpen] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Scroll listener for auto-hiding header when scrolling down
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY <= 15) {
        setHeaderVisible(true);
      } else if (currentScrollY > lastScrollY + 5 && currentScrollY > 70) {
        setHeaderVisible(false); // Hide when scrolling down
        setLessonMenuOpen(false);
      } else if (currentScrollY < lastScrollY - 5) {
        setHeaderVisible(true);  // Show when scrolling up
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const currentLesson = lessonsData.find(l => l.id === currentLessonId) || lessonsData[0];
  const overallProgressPct = Math.round((learnedCount / Math.max(1, totalCards)) * 100);

  const handleLessonChange = (id: LessonId) => {
    soundEffects.playClick();
    onSelectLesson(id);
    setLessonMenuOpen(false);
  };

  const handleViewChange = (view: ViewMode) => {
    soundEffects.playClick();
    onSelectView(view);
  };

  return (
    <>
      <header className={`sticky top-0 z-40 bg-[#FFFDF9]/95 backdrop-blur-md border-b border-amber-200/80 shadow-xs transition-transform duration-300 ease-in-out ${
        headerVisible ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="max-w-7xl mx-auto px-3 sm:px-6">
          <div className="flex items-center justify-between h-14 sm:h-16 gap-2">
            
            {/* TOP LEFT: Hamburger Menu Icon + App Logo + Current Lesson Pill */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              {/* Dấu Ba Gạch (☰ Hamburger Icon) for Lesson Selection */}
              <button
                onClick={() => {
                  soundEffects.playClick();
                  setLessonMenuOpen(!lessonMenuOpen);
                }}
                className="p-2 text-amber-950 bg-amber-100/80 hover:bg-amber-200/80 rounded-xl border border-amber-300/80 transition cursor-pointer select-none active:scale-95 flex items-center gap-1.5"
                title="Danh sách Bài Học (Dấu 3 Gạch)"
                aria-label="Danh sách Bài Học"
              >
                {lessonMenuOpen ? <X className="w-5 h-5 text-cyan-800" /> : <Menu className="w-5 h-5 text-cyan-800" />}
                <span className="text-xs font-extrabold text-amber-950 hidden sm:inline">Bài học</span>
              </button>

              {/* Logo & App Title */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-tr from-amber-500 via-cyan-500 to-cyan-600 flex items-center justify-center text-white shadow-xs">
                  <Atom className="w-5 h-5 animate-pulse" />
                </div>
                <div className="hidden xs:block">
                  <span className="font-extrabold text-sm sm:text-base text-amber-950 tracking-tight leading-none block">
                    Hóa 10
                  </span>
                  <span className="text-[10px] text-cyan-800 font-bold block">
                    Chương 1
                  </span>
                </div>
              </div>

              {/* Current Selected Lesson Badge Button */}
              <button
                onClick={() => {
                  soundEffects.playClick();
                  setLessonMenuOpen(!lessonMenuOpen);
                }}
                className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-bold bg-cyan-50 text-cyan-900 rounded-xl border border-cyan-200/90 hover:bg-cyan-100 transition cursor-pointer max-w-[130px] sm:max-w-[180px] truncate"
                title="Chuyển bài học"
              >
                <span className="w-4 h-4 rounded-full bg-cyan-700 text-white text-[10px] flex items-center justify-center font-bold shrink-0">
                  {currentLesson.number}
                </span>
                <span className="truncate">{currentLesson.title}</span>
                <ChevronDown className="w-3.5 h-3.5 text-cyan-700 shrink-0" />
              </button>
            </div>

            {/* SLIM / COMPACT MODE SWITCHER ROW ("Thu nhỏ hàng Lý thuyết lại") */}
            <div className="flex items-center gap-1 bg-amber-200/60 p-1 rounded-xl border border-amber-300/60 shrink-0">
              <button
                onClick={() => handleViewChange('theory')}
                className={`flex items-center gap-1 px-2 py-1 text-[11px] sm:text-xs font-bold rounded-lg transition-all select-none cursor-pointer active:scale-95 ${
                  currentView === 'theory'
                    ? 'bg-white text-cyan-800 shadow-2xs'
                    : 'text-amber-950 hover:text-cyan-800'
                }`}
                title="Lý thuyết bài học"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span className="hidden xs:inline">Lý thuyết</span>
              </button>

              <button
                onClick={() => handleViewChange('flashcards')}
                className={`flex items-center gap-1 px-2 py-1 text-[11px] sm:text-xs font-bold rounded-lg transition-all select-none cursor-pointer active:scale-95 ${
                  currentView === 'flashcards'
                    ? 'bg-white text-cyan-800 shadow-2xs'
                    : 'text-amber-950 hover:text-cyan-800'
                }`}
                title="Flashcard ôn tập"
              >
                <BrainCircuit className="w-3.5 h-3.5" />
                <span className="hidden xs:inline">Flashcard</span>
              </button>

              <button
                onClick={() => handleViewChange('quiz')}
                className={`flex items-center gap-1 px-2 py-1 text-[11px] sm:text-xs font-bold rounded-lg transition-all select-none cursor-pointer active:scale-95 ${
                  currentView === 'quiz'
                    ? 'bg-white text-cyan-800 shadow-2xs'
                    : 'text-amber-950 hover:text-cyan-800'
                }`}
                title="Trắc nghiệm chuẩn SGK"
              >
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span className="hidden xs:inline">Trắc nghiệm</span>
              </button>

              <button
                onClick={() => handleViewChange('progress')}
                className={`flex items-center gap-1 px-2 py-1 text-[11px] sm:text-xs font-bold rounded-lg transition-all select-none cursor-pointer active:scale-95 ${
                  currentView === 'progress'
                    ? 'bg-white text-cyan-800 shadow-2xs'
                    : 'text-amber-950 hover:text-cyan-800'
                }`}
                title="Bảng thống kê tiến độ"
              >
                <BarChart3 className="w-3.5 h-3.5" />
                <span className="hidden md:inline">Tiến độ</span>
              </button>
            </div>

            {/* TOP RIGHT: TEXT ZOOM CONTROL + Periodic Table */}
            <div className="flex items-center gap-1.5 shrink-0">
              {/* FEATURE: Zoom chữ dàn trang tự động */}
              <div className="flex items-center gap-0.5 bg-amber-100/90 border border-amber-300/80 p-0.5 rounded-xl shadow-2xs">
                <button
                  onClick={() => {
                    soundEffects.playClick();
                    onDecreaseZoom();
                  }}
                  disabled={zoomLevel <= 90}
                  className="px-2 py-1 text-xs font-extrabold text-amber-950 hover:bg-amber-200 rounded-lg transition cursor-pointer select-none active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-0.5"
                  title="Giảm cỡ chữ (Zoom Out)"
                >
                  <ZoomOut className="w-3.5 h-3.5 text-amber-900" />
                  <span className="text-[10px]">A-</span>
                </button>

                <span 
                  onClick={() => {
                    soundEffects.playClick();
                    onResetZoom();
                  }}
                  className="px-1.5 text-[11px] font-bold text-cyan-800 cursor-pointer hover:underline select-none"
                  title="Bấm để đặt lại cỡ chữ 100%"
                >
                  {zoomLevel}%
                </span>

                <button
                  onClick={() => {
                    soundEffects.playClick();
                    onIncreaseZoom();
                  }}
                  disabled={zoomLevel >= 160}
                  className="px-2 py-1 text-xs font-extrabold text-amber-950 hover:bg-amber-200 rounded-lg transition cursor-pointer select-none active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-0.5"
                  title="Tăng cỡ chữ (Zoom In - Tự động dàn trang)"
                >
                  <span className="text-[10px]">A+</span>
                  <ZoomIn className="w-3.5 h-3.5 text-cyan-800" />
                </button>
              </div>

              {/* Quick Periodic Table Button */}
              <button
                onClick={() => {
                  soundEffects.playClick();
                  onOpenPeriodicTable();
                }}
                className="hidden sm:flex items-center gap-1 px-2.5 py-1 text-xs font-bold text-amber-900 bg-amber-100/70 hover:bg-amber-200/80 border border-amber-300/80 rounded-xl shadow-2xs transition cursor-pointer select-none active:scale-95"
                title="Tra cứu 20 Nguyên tố (Z=1-20)"
              >
                <Table2 className="w-3.5 h-3.5 text-cyan-700" />
                <span className="hidden lg:inline">Bảng 20 NT</span>
              </button>
            </div>

          </div>
        </div>

        {/* DROPDOWN / DRAWER: Lesson Selector Menu (Opened by ☰ Hamburger Icon) */}
        {lessonMenuOpen && (
          <div className="border-t border-amber-200 bg-[#FFFDF9] px-4 py-4 space-y-3 shadow-xl animate-in fade-in slide-in-from-top-2 border-b border-amber-300/80">
            <div className="flex items-center justify-between border-b border-amber-100 pb-2">
              <div className="flex items-center gap-2 text-xs font-extrabold text-amber-900 uppercase tracking-wider">
                <BookMarked className="w-4 h-4 text-cyan-700" />
                <span>Danh Sách Bài Học Chương 1 (Cấu Tạo Nguyên Tử)</span>
              </div>
              <button
                onClick={() => setLessonMenuOpen(false)}
                className="p-1 text-amber-800 hover:text-amber-950 rounded-lg"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {lessonsData.map(lesson => {
                const isSelected = lesson.id === currentLessonId;
                return (
                  <button
                    key={lesson.id}
                    onClick={() => handleLessonChange(lesson.id)}
                    className={`p-3 text-left rounded-xl transition flex items-center justify-between cursor-pointer active:scale-98 ${
                      isSelected
                        ? 'bg-cyan-700 text-white font-bold shadow-xs border border-cyan-800'
                        : 'bg-amber-50/80 text-amber-950 hover:bg-amber-100/70 border border-amber-200/70'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className={`w-7 h-7 rounded-lg text-xs font-extrabold flex items-center justify-center ${
                        isSelected ? 'bg-cyan-900 text-white' : 'bg-amber-200/80 text-amber-950'
                      }`}>
                        {lesson.number}
                      </span>
                      <div>
                        <div className="text-xs sm:text-sm font-bold leading-tight">{lesson.title}</div>
                        <div className={`text-[11px] ${isSelected ? 'text-cyan-200' : 'text-amber-800/70'}`}>
                          {lesson.pageRange} • {lesson.flashcards.length} thẻ Flashcard
                        </div>
                      </div>
                    </div>

                    {isSelected && (
                      <Check className="w-5 h-5 text-white shrink-0 ml-2" />
                    )}
                  </button>
                );
              })}
            </div>

            <div className="pt-2 border-t border-amber-100 flex items-center justify-between text-xs text-amber-900 font-semibold">
              <div className="flex items-center gap-1 text-cyan-800">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Tổng tiến độ thuộc thẻ: {learnedCount}/{totalCards} ({overallProgressPct}%)</span>
              </div>
              <button
                onClick={() => {
                  soundEffects.playClick();
                  onOpenPeriodicTable();
                  setLessonMenuOpen(false);
                }}
                className="text-xs text-cyan-700 underline font-bold"
              >
                Bảng 20 nguyên tố
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Small Floating Unhide Button when header is hidden on scroll */}
      {!headerVisible && (
        <button
          onClick={() => {
            soundEffects.playClick();
            setHeaderVisible(true);
          }}
          className="fixed top-3 right-3 z-50 bg-cyan-700 text-white p-2 rounded-full shadow-lg border border-cyan-500 opacity-80 hover:opacity-100 transition active:scale-95 cursor-pointer flex items-center gap-1 text-xs font-bold px-3"
          title="Mở lại thanh điều hướng"
        >
          <ChevronUp className="w-4 h-4 animate-bounce" />
          <span className="hidden sm:inline">Hiện Menu</span>
        </button>
      )}
    </>
  );
};
