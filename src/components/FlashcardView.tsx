import React, { useState, useEffect } from 'react';
import { Lesson, Flashcard } from '../types';
import { 
  BrainCircuit, 
  RotateCw, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle, 
  Check, 
  Shuffle, 
  Award
} from 'lucide-react';
import { soundEffects } from '../utils/audio';

interface FlashcardViewProps {
  lesson: Lesson;
  learnedCardIds: string[];
  onToggleLearned: (cardId: string) => void;
  onResetLessonCards: (flashcardIds: string[]) => void;
}

export const FlashcardView: React.FC<FlashcardViewProps> = ({
  lesson,
  learnedCardIds,
  onToggleLearned,
  onResetLessonCards,
}) => {
  const [cards, setCards] = useState<Flashcard[]>(lesson.flashcards);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [filterMode, setFilterMode] = useState<'all' | 'unlearned' | 'learned'>('all');

  useEffect(() => {
    setCards(lesson.flashcards);
    setCurrentIndex(0);
    setIsFlipped(false);
  }, [lesson.id]);

  const filteredCards = cards.filter(card => {
    const isLearned = learnedCardIds.includes(card.id);
    if (filterMode === 'unlearned') return !isLearned;
    if (filterMode === 'learned') return isLearned;
    return true;
  });

  const currentCard = filteredCards[currentIndex] || filteredCards[0];
  const isCurrentLearned = currentCard ? learnedCardIds.includes(currentCard.id) : false;

  const lessonCardIds = lesson.flashcards.map(c => c.id);
  const learnedInLessonCount = lessonCardIds.filter(id => learnedCardIds.includes(id)).length;
  const lessonTotal = lesson.flashcards.length;
  const progressPercent = Math.round((learnedInLessonCount / Math.max(1, lessonTotal)) * 100);

  const handleFlip = () => {
    soundEffects.playFlip();
    setIsFlipped(prev => !prev);
  };

  const handleNext = () => {
    if (filteredCards.length <= 1) return;
    soundEffects.playClick();
    setIsFlipped(false);
    setCurrentIndex(prev => (prev + 1) % filteredCards.length);
  };

  const handlePrev = () => {
    if (filteredCards.length <= 1) return;
    soundEffects.playClick();
    setIsFlipped(false);
    setCurrentIndex(prev => (prev - 1 + filteredCards.length) % filteredCards.length);
  };

  const handleToggleLearnedClick = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!currentCard) return;

    if (!isCurrentLearned) {
      soundEffects.playCorrect();
    } else {
      soundEffects.playClick();
    }

    onToggleLearned(currentCard.id);

    if (filterMode === 'unlearned' && filteredCards.length > 1) {
      setTimeout(() => {
        setIsFlipped(false);
        setCurrentIndex(prev => prev % (filteredCards.length - 1));
      }, 300);
    }
  };

  const handleShuffle = () => {
    soundEffects.playClick();
    setIsFlipped(false);
    const shuffled = [...cards].sort(() => Math.random() - 0.5);
    setCards(shuffled);
    setCurrentIndex(0);
  };

  const handleReset = () => {
    soundEffects.playClick();
    setIsFlipped(false);
    onResetLessonCards(lessonCardIds);
    setCurrentIndex(0);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      if (e.code === 'Space') {
        e.preventDefault();
        handleFlip();
      } else if (e.code === 'ArrowRight') {
        e.preventDefault();
        handleNext();
      } else if (e.code === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      } else if (e.code === 'ArrowUp') {
        e.preventDefault();
        handleToggleLearnedClick();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, filteredCards, isFlipped, isCurrentLearned]);

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 space-y-6 animate-in fade-in duration-300">
      {/* Header Info & Progress Bar */}
      <div className="bg-[#FFFDF9] rounded-2xl border border-amber-200/80 p-5 shadow-xs space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="p-1.5 bg-cyan-100 text-cyan-800 rounded-lg">
                <BrainCircuit className="w-5 h-5" />
              </span>
              <h2 className="text-lg font-bold text-amber-950">
                Ôn Tập Flashcards - Bài {lesson.number}
              </h2>
            </div>
            <p className="text-xs text-amber-800/80 mt-0.5">{lesson.title}</p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-amber-900">Đã thuộc:</span>
            <span className="text-sm font-extrabold text-cyan-800 bg-cyan-50 px-2.5 py-1 rounded-full border border-cyan-200">
              {learnedInLessonCount} / {lessonTotal} ({progressPercent}%)
            </span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-amber-200/50 rounded-full h-2.5 overflow-hidden">
          <div 
            className="bg-gradient-to-r from-amber-500 via-cyan-500 to-cyan-600 h-2.5 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center justify-between gap-2 pt-1 border-t border-amber-100">
          <div className="flex items-center gap-1 bg-amber-100/70 p-1 rounded-xl text-xs font-semibold text-amber-900">
            <button
              onClick={() => { setFilterMode('all'); setCurrentIndex(0); setIsFlipped(false); }}
              className={`px-3 py-1.5 rounded-lg transition cursor-pointer select-none ${
                filterMode === 'all' ? 'bg-[#FFFDF9] text-cyan-800 shadow-2xs font-bold' : 'hover:text-cyan-800'
              }`}
            >
              Tất cả ({cards.length})
            </button>
            <button
              onClick={() => { setFilterMode('unlearned'); setCurrentIndex(0); setIsFlipped(false); }}
              className={`px-3 py-1.5 rounded-lg transition cursor-pointer select-none ${
                filterMode === 'unlearned' ? 'bg-[#FFFDF9] text-amber-900 shadow-2xs font-bold' : 'hover:text-cyan-800'
              }`}
            >
              Chưa thuộc ({lessonTotal - learnedInLessonCount})
            </button>
            <button
              onClick={() => { setFilterMode('learned'); setCurrentIndex(0); setIsFlipped(false); }}
              className={`px-3 py-1.5 rounded-lg transition cursor-pointer select-none ${
                filterMode === 'learned' ? 'bg-[#FFFDF9] text-cyan-800 shadow-2xs font-bold' : 'hover:text-cyan-800'
              }`}
            >
              Đã thuộc ({learnedInLessonCount})
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShuffle}
              className="flex items-center gap-1 px-3 py-1.5 text-xs font-bold text-amber-900 bg-amber-100 hover:bg-amber-200/80 rounded-lg transition cursor-pointer select-none active:scale-95"
              title="Xáo trộn thứ tự các thẻ"
            >
              <Shuffle className="w-3.5 h-3.5 text-cyan-700" />
              <span>Xáo trộn</span>
            </button>
            <button
              onClick={handleReset}
              className="flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-amber-800 hover:text-amber-950 hover:bg-amber-100 rounded-lg transition cursor-pointer select-none"
              title="Lập lại trạng thái thẻ bài học này"
            >
              <RotateCw className="w-3.5 h-3.5" />
              <span>Đặt lại</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Flashcard Interactive Stage */}
      {filteredCards.length === 0 ? (
        <div className="bg-[#FFFDF9] rounded-3xl border border-amber-200/80 p-12 text-center space-y-4 shadow-sm">
          <Award className="w-16 h-16 text-cyan-600 mx-auto animate-bounce" />
          <h3 className="text-xl font-bold text-amber-950">
            {filterMode === 'unlearned' ? 'Tuyệt vời! Bạn đã thuộc tất cả thẻ bài học này 🎉' : 'Chưa có thẻ nào trong chế độ này'}
          </h3>
          <p className="text-sm text-amber-800/80 max-w-md mx-auto">
            Hãy tiếp tục sang phần Bài tập trắc nghiệm hoặc chuyển chế độ xem để ôn lại.
          </p>
          <button
            onClick={() => { setFilterMode('all'); setCurrentIndex(0); }}
            className="px-5 py-2.5 bg-cyan-700 text-white text-sm font-bold rounded-xl hover:bg-cyan-600 shadow-md cursor-pointer select-none active:scale-95"
          >
            Xem tất cả thẻ
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {/* Card Counter */}
          <div className="flex items-center justify-between text-xs text-amber-800/80 px-2">
            <span className="font-semibold">
              Thẻ {currentIndex + 1} / {filteredCards.length}
            </span>
            <span className="text-amber-700/60 hidden sm:inline">
              Nhấn phím [Space] để lật • [← →] để chuyển • [↑] để bỏ qua/đánh dấu đã thuộc
            </span>
          </div>

          {/* 3D Flip Card Container */}
          <div 
            onClick={handleFlip}
            className="relative w-full min-h-[320px] sm:min-h-[360px] cursor-pointer select-none perspective-1000 group"
          >
            <div className={`w-full h-full min-h-[320px] sm:min-h-[360px] rounded-3xl transition-transform duration-500 transform-style-3d shadow-md hover:shadow-lg border border-amber-200/80 relative ${
              isFlipped ? 'rotate-y-180 bg-gradient-to-br from-[#2D2115] via-[#0F3A3E] to-[#0A272A] text-white' : 'bg-[#FFFDF9] text-amber-950'
            }`}>
              
              {/* CARD FRONT (Question) */}
              <div className="absolute inset-0 w-full h-full p-6 sm:p-8 flex flex-col justify-between backface-hidden rounded-3xl bg-[#FFFDF9]">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-cyan-100/80 text-cyan-800 text-xs font-bold rounded-full border border-cyan-200">
                    {currentCard.tag || 'Lý thuyết'}
                  </span>

                  {/* Feature: Skip / Mark as Learned button */}
                  <button
                    onClick={handleToggleLearnedClick}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all shadow-xs cursor-pointer select-none active:scale-95 ${
                      isCurrentLearned
                        ? 'bg-cyan-700 text-white hover:bg-cyan-600'
                        : 'bg-amber-100/80 text-amber-900 hover:bg-cyan-50 hover:text-cyan-800 border border-amber-300/80'
                    }`}
                    title="Tính năng bỏ qua thẻ khi đã nhớ"
                  >
                    <CheckCircle className="w-4 h-4" />
                    <span>{isCurrentLearned ? 'Đã nhớ (Đã thuộc)' : 'Đánh dấu đã nhớ'}</span>
                  </button>
                </div>

                <div className="my-auto text-center space-y-3 py-4">
                  <h3 className="text-lg sm:text-2xl font-bold text-amber-950 leading-snug px-2">
                    {currentCard.question}
                  </h3>
                  <p className="text-xs text-cyan-700 font-bold flex items-center justify-center gap-1">
                    <RotateCw className="w-3.5 h-3.5" />
                    <span>Chạm hoặc nhấn Space để xem đáp án</span>
                  </p>
                </div>

                <div className="flex items-center justify-between text-xs text-amber-800/60 border-t border-amber-100 pt-3">
                  <span>Mặt câu hỏi</span>
                  <span>Bài {lesson.number}</span>
                </div>
              </div>

              {/* CARD BACK (Answer) */}
              <div className="absolute inset-0 w-full h-full p-6 sm:p-8 flex flex-col justify-between backface-hidden rotate-y-180 rounded-3xl bg-gradient-to-br from-[#2D2115] via-[#0F3A3E] to-[#0A272A] text-white">
                <div className="flex items-center justify-between border-b border-cyan-800/60 pb-3">
                  <span className="px-3 py-1 bg-cyan-500/30 text-cyan-200 text-xs font-bold rounded-full border border-cyan-400/30">
                    Đáp án & Giải thích
                  </span>

                  <button
                    onClick={handleToggleLearnedClick}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer select-none active:scale-95 ${
                      isCurrentLearned
                        ? 'bg-cyan-500 text-white'
                        : 'bg-cyan-900/60 text-cyan-200 hover:bg-cyan-800 border border-cyan-700'
                    }`}
                  >
                    <CheckCircle className="w-4 h-4" />
                    <span>{isCurrentLearned ? 'Đã thuộc' : 'Đánh dấu đã nhớ'}</span>
                  </button>
                </div>

                <div className="my-auto text-left space-y-4 py-4 px-2">
                  <div className="text-base sm:text-xl font-semibold text-cyan-100 leading-relaxed">
                    {currentCard.answer}
                  </div>
                  {currentCard.note && (
                    <div className="p-3 bg-cyan-950/70 rounded-xl border border-cyan-700/50 text-xs text-cyan-200 leading-relaxed">
                      💡 <strong>Ghi nhớ:</strong> {currentCard.note}
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between text-xs text-cyan-300/70 border-t border-cyan-800/60 pt-3">
                  <span>Mặt đáp án</span>
                  <span>Chạm để quay lại câu hỏi</span>
                </div>
              </div>

            </div>
          </div>

          {/* Flashcard Navigation Controls */}
          <div className="flex items-center justify-between pt-2">
            <button
              onClick={handlePrev}
              disabled={filteredCards.length <= 1}
              className="flex items-center gap-2 px-5 py-2.5 bg-[#FFFDF9] border border-amber-300 hover:bg-amber-100/50 text-amber-900 font-bold rounded-2xl shadow-2xs transition cursor-pointer select-none active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-5 h-5" />
              <span>Thẻ trước</span>
            </button>

            {/* Big "Đã nhớ / Bỏ qua thẻ" button */}
            <button
              onClick={handleToggleLearnedClick}
              className={`flex items-center gap-2 px-6 py-2.5 font-extrabold text-xs sm:text-sm rounded-2xl shadow-sm transition cursor-pointer select-none active:scale-95 ${
                isCurrentLearned
                  ? 'bg-amber-100 text-amber-950 border border-amber-300 hover:bg-amber-200'
                  : 'bg-cyan-700 text-white hover:bg-cyan-600'
              }`}
            >
              <Check className="w-5 h-5" />
              <span>{isCurrentLearned ? 'Đã ghi nhớ (Đã thuộc)' : 'Bỏ qua thẻ này khi đã nhớ'}</span>
            </button>

            <button
              onClick={handleNext}
              disabled={filteredCards.length <= 1}
              className="flex items-center gap-2 px-5 py-2.5 bg-cyan-700 hover:bg-cyan-600 text-white font-bold rounded-2xl shadow-xs transition cursor-pointer select-none active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <span>Thẻ sau</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
