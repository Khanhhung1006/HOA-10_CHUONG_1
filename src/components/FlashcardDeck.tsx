import React, { useState, useEffect, useCallback } from 'react';
import confetti from 'canvas-confetti';
import { 
  RotateCw, 
  ChevronLeft, 
  ChevronRight, 
  Shuffle, 
  Check, 
  X, 
  Sparkles, 
  Volume2, 
  Play, 
  Pause,
  Layers,
  Filter,
  RefreshCw
} from 'lucide-react';
import { Flashcard, LessonId } from '../types';
import { LatexRenderer } from './LatexRenderer';

interface FlashcardDeckProps {
  cards: Flashcard[];
  lessonId: LessonId;
  lessonTitle: string;
  learnedCardIds: string[];
  onToggleLearned: (cardId: string) => void;
  onResetLessonCards?: () => void;
}

export const FlashcardDeck: React.FC<FlashcardDeckProps> = ({
  cards,
  lessonTitle,
  learnedCardIds,
  onToggleLearned,
}) => {
  const [deck, setDeck] = useState<Flashcard[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [filterMode, setFilterMode] = useState<'all' | 'unlearned' | 'learned'>('all');
  const [isAutoPlay, setIsAutoPlay] = useState(false);

  // Initialize and filter deck
  useEffect(() => {
    let filtered = [...cards];
    if (filterMode === 'unlearned') {
      filtered = cards.filter((c) => !learnedCardIds.includes(c.id));
    } else if (filterMode === 'learned') {
      filtered = cards.filter((c) => learnedCardIds.includes(c.id));
    }
    setDeck(filtered);
    setCurrentIndex(0);
    setIsFlipped(false);
  }, [cards, filterMode, learnedCardIds]);

  const handleFlip = useCallback(() => {
    setIsFlipped((prev) => !prev);
  }, []);

  const handleNext = useCallback(() => {
    if (deck.length === 0) return;
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % deck.length);
  }, [deck.length]);

  const handlePrev = useCallback(() => {
    if (deck.length === 0) return;
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev - 1 + deck.length) % deck.length);
  }, [deck.length]);

  const handleShuffle = () => {
    setIsFlipped(false);
    const shuffled = [...deck].sort(() => Math.random() - 0.5);
    setDeck(shuffled);
    setCurrentIndex(0);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      if (e.code === 'Space') {
        e.preventDefault();
        handleFlip();
      } else if (e.code === 'ArrowRight' || e.code === 'KeyD') {
        e.preventDefault();
        handleNext();
      } else if (e.code === 'ArrowLeft' || e.code === 'KeyA') {
        e.preventDefault();
        handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleFlip, handleNext, handlePrev]);

  // Auto-play timer
  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    if (isAutoPlay && deck.length > 0) {
      timer = setInterval(() => {
        setIsFlipped((prevFlipped) => {
          if (!prevFlipped) {
            return true; // Flip to answer
          } else {
            handleNext(); // Go next and unflip
            return false;
          }
        });
      }, 3500);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isAutoPlay, deck.length, handleNext]);

  const currentCard = deck[currentIndex];
  const isCurrentLearned = currentCard ? learnedCardIds.includes(currentCard.id) : false;
  const learnedInDeckCount = deck.filter((c) => learnedCardIds.includes(c.id)).length;
  const progressPercent = deck.length > 0 ? Math.round(((currentIndex + 1) / deck.length) * 100) : 0;
  const masteredPercent = cards.length > 0 ? Math.round((learnedCardIds.filter(id => cards.some(c => c.id === id)).length / cards.length) * 100) : 0;

  const handleCardMastery = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!currentCard) return;
    onToggleLearned(currentCard.id);
    if (!isCurrentLearned) {
      confetti({
        particleCount: 35,
        spread: 60,
        origin: { y: 0.8 },
      });
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-fadeIn pb-12">
      {/* Header Info */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white dark:bg-[#1F2937] p-5 rounded-2xl border border-[#E2E8F0] dark:border-[#334155] shadow-xs">
        <div>
          <div className="flex items-center space-x-2">
            <span className="p-1 rounded bg-[#CFFAFE] dark:bg-[#06B6D4]/20 text-[#0891B2] dark:text-[#38BDF8]">
              <Layers className="w-4 h-4" />
            </span>
            <h2 className="text-xl font-bold text-[#0F172A] dark:text-[#F8FAFC]">
              Thẻ ghi nhớ flashcard
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#64748B] dark:text-[#94A3B8] mt-0.5">
            {lessonTitle} • Tổng cộng {cards.length} thẻ
          </p>
        </div>

        {/* Filter and Shuffle Controls */}
        <div className="flex items-center space-x-2">
          {/* Filter dropdown */}
          <div className="flex items-center bg-[#F1F5F9] dark:bg-[#111827] p-1 rounded-xl border border-[#E2E8F0] dark:border-[#334155] text-xs">
            <button
              onClick={() => setFilterMode('all')}
              className={`px-2.5 py-1 rounded-lg font-medium transition-colors cursor-pointer ${
                filterMode === 'all'
                  ? 'bg-white dark:bg-[#1F2937] text-[#06B6D4] font-semibold shadow-2xs'
                  : 'text-[#64748B] dark:text-[#94A3B8]'
              }`}
            >
              Tất cả ({cards.length})
            </button>
            <button
              onClick={() => setFilterMode('unlearned')}
              className={`px-2.5 py-1 rounded-lg font-medium transition-colors cursor-pointer ${
                filterMode === 'unlearned'
                  ? 'bg-white dark:bg-[#1F2937] text-[#D4A017] font-semibold shadow-2xs'
                  : 'text-[#64748B] dark:text-[#94A3B8]'
              }`}
            >
              Chưa thuộc ({cards.length - cards.filter(c => learnedCardIds.includes(c.id)).length})
            </button>
            <button
              onClick={() => setFilterMode('learned')}
              className={`px-2.5 py-1 rounded-lg font-medium transition-colors cursor-pointer ${
                filterMode === 'learned'
                  ? 'bg-white dark:bg-[#1F2937] text-[#22C55E] font-semibold shadow-2xs'
                  : 'text-[#64748B] dark:text-[#94A3B8]'
              }`}
            >
              Đã thuộc ({cards.filter(c => learnedCardIds.includes(c.id)).length})
            </button>
          </div>

          {/* Shuffle button */}
          <button
            onClick={handleShuffle}
            className="p-2 rounded-xl border border-[#E2E8F0] dark:border-[#334155] bg-white dark:bg-[#1F2937] hover:bg-[#F1F5F9] dark:hover:bg-[#111827] text-[#64748B] dark:text-[#94A3B8] transition-colors cursor-pointer"
            title="Xáo trộn ngẫu nhiên thứ tự thẻ"
          >
            <Shuffle className="w-4 h-4" />
          </button>

          {/* Auto play button */}
          <button
            onClick={() => setIsAutoPlay((prev) => !prev)}
            className={`p-2 rounded-xl border transition-colors cursor-pointer ${
              isAutoPlay
                ? 'border-[#06B6D4] bg-[#ECFEFF] dark:bg-[#06B6D4]/20 text-[#0891B2]'
                : 'border-[#E2E8F0] dark:border-[#334155] bg-white dark:bg-[#1F2937] text-[#64748B] dark:text-[#94A3B8]'
            }`}
            title={isAutoPlay ? 'Tạm dừng tự động lật thẻ' : 'Tự động trình chiếu thẻ'}
          >
            {isAutoPlay ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="space-y-1.5">
        <div className="flex justify-between items-center text-xs text-[#64748B] dark:text-[#94A3B8]">
          <span>
            Thẻ hiện tại: <strong>{deck.length > 0 ? currentIndex + 1 : 0} / {deck.length}</strong>
          </span>
          <span>
            Tiến độ hoàn thành bài: <strong>{masteredPercent}%</strong> đã thuộc
          </span>
        </div>
        <div className="w-full h-2 rounded-full bg-[#E2E8F0] dark:bg-[#334155] overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#06B6D4] to-[#22C55E] transition-all duration-300 rounded-full"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Flashcard Area */}
      {deck.length > 0 ? (
        <div className="perspective-1000 w-full min-h-[380px] sm:min-h-[420px] flex items-center justify-center">
          <div
            id="flashcard-active"
            onClick={handleFlip}
            className={`relative w-full min-h-[380px] sm:min-h-[420px] p-6 sm:p-10 rounded-3xl cursor-pointer transition-all duration-300 select-none shadow-md hover:shadow-xl hover:scale-[1.015] active:scale-[0.99] flex flex-col justify-between border group ${
              isFlipped
                ? 'bg-gradient-to-br from-[#ECFEFF] via-white to-[#F0FDFA] dark:from-[#164E63]/40 dark:via-[#1F2937] dark:to-[#111827] border-[#06B6D4]/40 hover:border-[#06B6D4] hover:shadow-[#06B6D4]/10'
                : 'bg-white dark:bg-[#1F2937] border-[#E2E8F0] dark:border-[#334155] hover:border-[#06B6D4]/60 hover:shadow-cyan-500/5'
            }`}
          >
            {/* Card Header Tag */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span
                  className={`text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${
                    isFlipped
                      ? 'bg-[#06B6D4] text-white'
                      : 'bg-[#F1F5F9] text-[#164E63] dark:bg-[#111827] dark:text-[#38BDF8]'
                  }`}
                >
                  {isFlipped ? 'Đáp Án / Giải Thích' : 'Khái Niệm / Câu Hỏi'}
                </span>
                <span className="text-xs text-[#94A3B8] font-mono">
                  #{currentCard.id}
                </span>
              </div>

              {/* Mastered Badge */}
              <button
                onClick={handleCardMastery}
                className={`flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  isCurrentLearned
                    ? 'bg-[#22C55E] text-white shadow-xs shadow-[#22C55E]/30'
                    : 'bg-[#F1F5F9] dark:bg-[#111827] text-[#64748B] dark:text-[#94A3B8] hover:bg-[#22C55E]/20 hover:text-[#15803D]'
                }`}
                title={isCurrentLearned ? 'Bấm để đánh dấu cần ôn lại' : 'Bấm để đánh dấu đã thuộc'}
              >
                <Check className="w-3.5 h-3.5" />
                <span>{isCurrentLearned ? 'Đã thuộc' : 'Đánh dấu đã thuộc'}</span>
              </button>
            </div>

            {/* Card Content (Center) */}
            <div className="my-auto py-6 text-center">
              <div
                className={`text-base sm:text-xl md:text-2xl font-medium leading-relaxed ${
                  isFlipped
                    ? 'text-[#164E63] dark:text-[#CFFAFE]'
                    : 'text-[#0F172A] dark:text-[#F8FAFC]'
                }`}
              >
                <LatexRenderer text={isFlipped ? currentCard.back : currentCard.front} />
              </div>
            </div>

            {/* Card Footer Hints */}
            <div className="flex items-center justify-between text-xs text-[#94A3B8] dark:text-[#64748B] pt-4 border-t border-[#E2E8F0]/60 dark:border-[#334155]/60">
              <span className="flex items-center gap-1">
                <RotateCw className="w-3.5 h-3.5 text-[#06B6D4]" />
                Nhấp chuột hoặc phím <strong>Space</strong> để lật mặt thẻ
              </span>
              <span>
                {currentIndex + 1} / {deck.length}
              </span>
            </div>
          </div>
        </div>
      ) : (
        /* Empty Deck Placeholder */
        <div className="bg-white dark:bg-[#1F2937] p-10 rounded-3xl border border-[#E2E8F0] dark:border-[#334155] text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-[#22C55E]/10 text-[#22C55E] mx-auto flex items-center justify-center">
            <Sparkles className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-[#0F172A] dark:text-[#F8FAFC]">
            {filterMode === 'unlearned'
              ? 'Tuyệt vời! Bạn đã thuộc hết tất cả các thẻ trong phần này!'
              : 'Không có thẻ nào phù hợp với bộ lọc hiện tại.'}
          </h3>
          <p className="text-sm text-[#64748B] dark:text-[#94A3B8] max-w-md mx-auto">
            Hãy chọn "Tất cả" để xem lại hoặc chuyển sang phần Trắc nghiệm để kiểm tra mức độ ghi nhớ kiến thức.
          </p>
          <button
            onClick={() => setFilterMode('all')}
            className="px-5 py-2.5 rounded-xl bg-[#06B6D4] text-white font-medium hover:bg-[#0891B2] transition-colors cursor-pointer"
          >
            Xem tất cả thẻ ({cards.length})
          </button>
        </div>
      )}

      {/* Navigation Controls Bar */}
      <div className="flex items-center justify-center gap-3 sm:gap-4 max-w-lg mx-auto w-full">
        <button
          id="btn-prev-card"
          onClick={handlePrev}
          disabled={deck.length <= 1}
          aria-label="Thẻ trước"
          title="Thẻ trước (Phím A hoặc ←)"
          className="flex items-center justify-center w-12 h-12 rounded-xl border border-[#E2E8F0] dark:border-[#334155] bg-white dark:bg-[#1F2937] text-[#334155] dark:text-[#CBD5E1] hover:bg-[#F8FAFC] dark:hover:bg-[#111827] hover:border-[#06B6D4] disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer shadow-xs shrink-0"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          id="btn-flip-card"
          onClick={handleFlip}
          aria-label="Lật mặt thẻ"
          className="flex-1 flex items-center justify-center space-x-2 py-3 px-6 h-12 rounded-xl bg-[#ECFEFF] dark:bg-[#06B6D4]/20 border border-[#CFFAFE] dark:border-[#06B6D4]/40 text-sm font-bold text-[#0891B2] dark:text-[#38BDF8] hover:bg-[#CFFAFE] transition-all cursor-pointer shadow-xs"
        >
          <RotateCw className="w-4 h-4" />
          <span>{isFlipped ? 'Xem Câu Hỏi' : 'Lật Đáp Án (Space)'}</span>
        </button>

        <button
          id="btn-next-card"
          onClick={handleNext}
          disabled={deck.length <= 1}
          aria-label="Thẻ tiếp theo"
          title="Thẻ tiếp theo (Phím D hoặc →)"
          className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#06B6D4] text-white hover:bg-[#0891B2] disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer shadow-xs shadow-[#06B6D4]/20 shrink-0"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Quick Jump Thumbnail Carousel */}
      {deck.length > 0 && (
        <div className="bg-white dark:bg-[#1F2937] p-4 rounded-2xl border border-[#E2E8F0] dark:border-[#334155]">
          <div className="text-xs font-semibold text-[#64748B] dark:text-[#94A3B8] mb-2 flex items-center justify-between">
            <span>Danh sách thẻ bài ({deck.length} thẻ):</span>
            <span className="text-[11px] text-[#22C55E]">
              ● Đã thuộc ({learnedInDeckCount}) | ○ Chưa thuộc ({deck.length - learnedInDeckCount})
            </span>
          </div>
          <div className="flex items-center gap-1.5 overflow-x-auto py-1 scrollbar-thin">
            {deck.map((card, idx) => {
              const isLearned = learnedCardIds.includes(card.id);
              const isActive = idx === currentIndex;
              return (
                <button
                  key={card.id}
                  onClick={() => {
                    setCurrentIndex(idx);
                    setIsFlipped(false);
                  }}
                  className={`w-8 h-8 rounded-lg text-xs font-medium shrink-0 flex items-center justify-center transition-all duration-200 hover:scale-110 hover:shadow-xs active:scale-95 cursor-pointer ${
                    isActive
                      ? 'bg-[#06B6D4] text-white ring-2 ring-[#06B6D4]/50 scale-105 font-bold shadow-xs'
                      : isLearned
                      ? 'bg-[#DCFCE7] dark:bg-[#22C55E]/20 text-[#15803D] dark:text-[#86EFAC] border border-[#86EFAC]/40'
                      : 'bg-[#F1F5F9] dark:bg-[#111827] text-[#64748B] dark:text-[#94A3B8] hover:bg-[#E2E8F0]'
                  }`}
                  title={card.front}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
