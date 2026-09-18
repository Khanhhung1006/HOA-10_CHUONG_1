import React, { useState, useEffect, useMemo } from 'react';
import confetti from 'canvas-confetti';
import { 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  Clock, 
  RotateCcw, 
  Flag, 
  ChevronLeft, 
  ChevronRight, 
  Award, 
  Sparkles,
  Shuffle,
  Eye,
  Check,
  AlertCircle
} from 'lucide-react';
import { QuizQuestion, LessonId, QuizSessionResult } from '../types';
import { LatexRenderer } from './LatexRenderer';

interface QuizPlayerProps {
  questions: QuizQuestion[];
  lessonId: LessonId | 'final-exam';
  title: string;
  onSaveSession: (result: QuizSessionResult) => void;
  onGoToTheory?: (lessonId: LessonId) => void;
}

export const QuizPlayer: React.FC<QuizPlayerProps> = ({
  questions,
  lessonId,
  title,
  onSaveSession,
}) => {
  const [activeQuestions, setActiveQuestions] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, 'A' | 'B' | 'C' | 'D'>>({});
  const [flaggedIds, setFlaggedIds] = useState<string[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(true);
  const [immediateFeedback, setImmediateFeedback] = useState(false);
  const [resultFilter, setResultFilter] = useState<'all' | 'incorrect' | 'correct'>('all');

  // Initialize questions
  useEffect(() => {
    setActiveQuestions(questions);
    setCurrentIndex(0);
    setUserAnswers({});
    setFlaggedIds([]);
    setIsSubmitted(false);
    setElapsedSeconds(0);
    setIsTimerRunning(true);
  }, [questions, lessonId]);

  // Timer interval
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isTimerRunning && !isSubmitted) {
      interval = setInterval(() => {
        setElapsedSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTimerRunning, isSubmitted]);

  const currentQ = activeQuestions[currentIndex];

  const handleSelectOption = (optionId: 'A' | 'B' | 'C' | 'D') => {
    if (isSubmitted) return;
    if (!currentQ) return;
    setUserAnswers((prev) => ({
      ...prev,
      [currentQ.id]: optionId,
    }));
  };

  const toggleFlag = (qId: string) => {
    setFlaggedIds((prev) =>
      prev.includes(qId) ? prev.filter((id) => id !== qId) : [...prev, qId]
    );
  };

  const handleShuffleQuestions = () => {
    if (isSubmitted) return;
    const shuffled = [...activeQuestions].sort(() => Math.random() - 0.5);
    setActiveQuestions(shuffled);
    setCurrentIndex(0);
  };

  // Submit test
  const handleSubmit = () => {
    setIsSubmitted(true);
    setIsTimerRunning(false);

    // Calculate score
    let correct = 0;
    const incorrectIds: string[] = [];

    activeQuestions.forEach((q) => {
      if (userAnswers[q.id] === q.correctAnswer) {
        correct++;
      } else {
        incorrectIds.push(q.id);
      }
    });

    const score = Number(((correct / activeQuestions.length) * 10).toFixed(1));

    if (score >= 8.0) {
      confetti({
        particleCount: 70,
        spread: 80,
        origin: { y: 0.6 },
      });
    }

    const sessionResult: QuizSessionResult = {
      id: `session-${Date.now()}`,
      timestamp: Date.now(),
      lessonId,
      title,
      totalQuestions: activeQuestions.length,
      correctCount: correct,
      score,
      timeSpentSeconds: elapsedSeconds,
      userAnswers,
      incorrectQuestionIds: incorrectIds,
    };

    onSaveSession(sessionResult);
  };

  // Retry only incorrect
  const handleRetryIncorrect = () => {
    const incorrectQuestions = questions.filter(
      (q) => userAnswers[q.id] !== q.correctAnswer
    );
    if (incorrectQuestions.length === 0) return;

    setActiveQuestions(incorrectQuestions);
    setUserAnswers({});
    setFlaggedIds([]);
    setIsSubmitted(false);
    setCurrentIndex(0);
    setElapsedSeconds(0);
    setIsTimerRunning(true);
  };

  // Restart all questions
  const handleRestartAll = () => {
    setActiveQuestions(questions);
    setUserAnswers({});
    setFlaggedIds([]);
    setIsSubmitted(false);
    setCurrentIndex(0);
    setElapsedSeconds(0);
    setIsTimerRunning(true);
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // Compute test stats for review screen
  const answeredCount = Object.keys(userAnswers).length;
  const correctCount = useMemo(() => {
    return activeQuestions.filter((q) => userAnswers[q.id] === q.correctAnswer).length;
  }, [activeQuestions, userAnswers]);
  const scoreOutOf10 = activeQuestions.length > 0 ? Number(((correctCount / activeQuestions.length) * 10).toFixed(1)) : 0;

  const filteredReviewQuestions = useMemo(() => {
    if (!isSubmitted) return activeQuestions;
    if (resultFilter === 'incorrect') {
      return activeQuestions.filter((q) => userAnswers[q.id] !== q.correctAnswer);
    }
    if (resultFilter === 'correct') {
      return activeQuestions.filter((q) => userAnswers[q.id] === q.correctAnswer);
    }
    return activeQuestions;
  }, [activeQuestions, isSubmitted, resultFilter, userAnswers]);

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-fadeIn pb-12">
      {/* Quiz Header Bar */}
      <div className="bg-white dark:bg-[#1F2937] p-5 rounded-2xl border border-[#E2E8F0] dark:border-[#334155] shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2">
              <span className={`p-1.5 rounded-lg ${lessonId === 'final-exam' ? 'bg-[#F6E7B2] text-[#D4A017]' : 'bg-[#CFFAFE] text-[#06B6D4]'}`}>
                <Award className="w-5 h-5" />
              </span>
              <h2 className="text-xl font-bold text-[#0F172A] dark:text-[#F8FAFC]">
                {title}
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#64748B] dark:text-[#94A3B8] mt-1">
              {activeQuestions.length} câu hỏi trắc nghiệm 4 phương án • 1 đáp án đúng • Giải thích chi tiết
            </p>
          </div>

          {/* Controls: Timer, Mode, Shuffle */}
          <div className="flex items-center space-x-3 self-start sm:self-auto">
            {/* Timer */}
            <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-[#F8FAFC] dark:bg-[#111827] border border-[#E2E8F0] dark:border-[#334155] text-xs font-mono font-bold text-[#164E63] dark:text-[#38BDF8]">
              <Clock className="w-4 h-4 text-[#06B6D4]" />
              <span>{formatTime(elapsedSeconds)}</span>
            </div>

            {/* Instant feedback toggle in practice mode */}
            {!isSubmitted && (
              <button
                onClick={() => setImmediateFeedback((prev) => !prev)}
                className={`text-xs px-2.5 py-1.5 rounded-xl font-medium border transition-colors cursor-pointer ${
                  immediateFeedback
                    ? 'bg-[#ECFEFF] dark:bg-[#06B6D4]/20 border-[#06B6D4] text-[#0891B2] dark:text-[#38BDF8]'
                    : 'bg-white dark:bg-[#111827] border-[#E2E8F0] dark:border-[#334155] text-[#64748B]'
                }`}
                title="Hiện đáp án và giải thích ngay khi chọn"
              >
                {immediateFeedback ? 'Hiện đáp án: Bật' : 'Hiện đáp án: Tắt'}
              </button>
            )}

            {/* Shuffle button */}
            {!isSubmitted && (
              <button
                onClick={handleShuffleQuestions}
                className="p-2 rounded-xl border border-[#E2E8F0] dark:border-[#334155] bg-white dark:bg-[#111827] hover:bg-[#F1F5F9] text-[#64748B] transition-colors cursor-pointer"
                title="Xáo trộn thứ tự câu hỏi"
              >
                <Shuffle className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Progress status */}
        {!isSubmitted && (
          <div className="mt-4 pt-3 border-t border-[#F1F5F9] dark:border-[#334155] flex items-center justify-between text-xs text-[#64748B] dark:text-[#94A3B8]">
            <span>
              Đã làm: <strong>{answeredCount} / {activeQuestions.length}</strong> câu ({Math.round((answeredCount / activeQuestions.length) * 100)}%)
            </span>
            <div className="w-32 sm:w-48 h-2 rounded-full bg-[#E2E8F0] dark:bg-[#334155] overflow-hidden">
              <div
                className="h-full bg-[#06B6D4] transition-all rounded-full"
                style={{ width: `${(answeredCount / activeQuestions.length) * 100}%` }}
              />
            </div>
          </div>
        )}
      </div>

      {/* Main Playing Area (when not submitted) */}
      {!isSubmitted && currentQ && (
        <div className="space-y-6">
          {/* Question Card */}
          <div className="bg-white dark:bg-[#1F2937] p-6 sm:p-8 rounded-3xl border border-[#E2E8F0] dark:border-[#334155] shadow-xs space-y-6">
            {/* Question Top Header */}
            <div className="flex items-center justify-between pb-3 border-b border-[#F1F5F9] dark:border-[#334155]">
              <div className="flex items-center space-x-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#06B6D4] text-white">
                  Câu {currentIndex + 1} / {activeQuestions.length}
                </span>
                {currentQ.source && (
                  <span className="text-xs text-[#64748B] dark:text-[#94A3B8] font-medium hidden sm:inline">
                    Nguồn: {currentQ.source}
                  </span>
                )}
              </div>

              {/* Bookmark Flag */}
              <button
                onClick={() => toggleFlag(currentQ.id)}
                className={`flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-semibold transition-colors cursor-pointer ${
                  flaggedIds.includes(currentQ.id)
                    ? 'bg-[#FEF2F2] dark:bg-[#EF4444]/20 text-[#EF4444] border border-[#EF4444]/40'
                    : 'bg-[#F1F5F9] dark:bg-[#111827] text-[#64748B] hover:text-[#EF4444]'
                }`}
              >
                <Flag className="w-3.5 h-3.5" />
                <span>{flaggedIds.includes(currentQ.id) ? 'Đã đánh dấu' : 'Đánh dấu'}</span>
              </button>
            </div>

            {/* Question Text */}
            <div className="text-base sm:text-lg md:text-xl font-semibold text-[#0F172A] dark:text-[#F8FAFC] leading-relaxed">
              <LatexRenderer text={currentQ.question} />
            </div>

            {/* Options List */}
            <div className="space-y-3 pt-2">
              {currentQ.options.map((opt) => {
                const isSelected = userAnswers[currentQ.id] === opt.id;
                const isCorrect = opt.id === currentQ.correctAnswer;
                const showInstant = immediateFeedback && userAnswers[currentQ.id];

                let optionStyles = 'border-[#E2E8F0] dark:border-[#334155] bg-white dark:bg-[#1E293B] hover:border-[#06B6D4] hover:bg-[#ECFEFF]/40 dark:hover:bg-[#06B6D4]/10';

                if (showInstant) {
                  if (isCorrect) {
                    optionStyles = 'border-[#22C55E] bg-[#F0FDF4] dark:bg-[#22C55E]/15 text-[#15803D] dark:text-[#86EFAC] font-semibold';
                  } else if (isSelected && !isCorrect) {
                    optionStyles = 'border-[#EF4444] bg-[#FEF2F2] dark:bg-[#EF4444]/15 text-[#B91C1C] dark:text-[#FCA5A5]';
                  }
                } else if (isSelected) {
                  optionStyles = 'border-[#06B6D4] bg-[#ECFEFF] dark:bg-[#06B6D4]/20 text-[#0891B2] dark:text-[#38BDF8] font-semibold ring-2 ring-[#06B6D4]/40';
                }

                return (
                  <button
                    key={opt.id}
                    id={`opt-${currentQ.id}-${opt.id}`}
                    onClick={() => handleSelectOption(opt.id)}
                    className={`w-full p-4 rounded-2xl border text-left transition-all flex items-start space-x-3 cursor-pointer ${optionStyles}`}
                  >
                    <span
                      className={`w-7 h-7 rounded-xl text-xs font-bold shrink-0 flex items-center justify-center transition-colors ${
                        showInstant && isCorrect
                          ? 'bg-[#22C55E] text-white'
                          : showInstant && isSelected && !isCorrect
                          ? 'bg-[#EF4444] text-white'
                          : isSelected
                          ? 'bg-[#06B6D4] text-white'
                          : 'bg-[#F1F5F9] dark:bg-[#111827] text-[#475569] dark:text-[#94A3B8]'
                      }`}
                    >
                      {opt.id}
                    </span>
                    <div className="flex-1 text-sm sm:text-base pt-0.5">
                      <LatexRenderer text={opt.text} />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Instant Feedback Explanation Box */}
            {immediateFeedback && userAnswers[currentQ.id] && (
              <div
                className={`p-4 rounded-2xl border text-sm animate-fadeIn space-y-1.5 ${
                  userAnswers[currentQ.id] === currentQ.correctAnswer
                    ? 'bg-[#F0FDF4] dark:bg-[#22C55E]/10 border-[#86EFAC] text-[#166534] dark:text-[#86EFAC]'
                    : 'bg-[#FEF2F2] dark:bg-[#EF4444]/10 border-[#FCA5A5] text-[#991B1B] dark:text-[#FCA5A5]'
                }`}
              >
                <div className="font-bold flex items-center gap-1.5">
                  {userAnswers[currentQ.id] === currentQ.correctAnswer ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-[#22C55E]" />
                      <span>Chính xác! Đáp án đúng là {currentQ.correctAnswer}</span>
                    </>
                  ) : (
                    <>
                      <XCircle className="w-4 h-4 text-[#EF4444]" />
                      <span>Chưa đúng! Đáp án đúng là {currentQ.correctAnswer}</span>
                    </>
                  )}
                </div>
                <div className="text-xs sm:text-sm leading-relaxed text-[#334155] dark:text-[#CBD5E1] pt-1 border-t border-current/20">
                  <strong>Giải thích:</strong> <LatexRenderer text={currentQ.explanation} />
                </div>
              </div>
            )}
          </div>

          {/* Bottom Bar: Prev / Next / Submit */}
          <div className="flex items-center justify-between gap-3">
            <button
              onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
              disabled={currentIndex === 0}
              className="flex-1 flex items-center justify-center space-x-1.5 py-3 px-4 rounded-xl border border-[#E2E8F0] dark:border-[#334155] bg-white dark:bg-[#1F2937] text-sm font-semibold text-[#334155] dark:text-[#CBD5E1] hover:bg-[#F8FAFC] disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer shadow-xs"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Câu Trước</span>
            </button>

            {currentIndex === activeQuestions.length - 1 ? (
              <button
                id="btn-submit-quiz"
                onClick={handleSubmit}
                className="flex-1 flex items-center justify-center space-x-1.5 py-3 px-6 rounded-xl bg-[#22C55E] text-white text-sm font-bold hover:bg-[#16A34A] transition-all cursor-pointer shadow-md shadow-[#22C55E]/30"
              >
                <Check className="w-4 h-4" />
                <span>Nộp Bài ({answeredCount}/{activeQuestions.length})</span>
              </button>
            ) : (
              <button
                onClick={() => setCurrentIndex((prev) => Math.min(activeQuestions.length - 1, prev + 1))}
                className="flex-1 flex items-center justify-center space-x-1.5 py-3 px-4 rounded-xl bg-[#06B6D4] text-white text-sm font-semibold hover:bg-[#0891B2] transition-all cursor-pointer shadow-xs shadow-[#06B6D4]/20"
              >
                <span>Câu Tiếp Theo</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Question Palette Grid */}
          <div className="bg-white dark:bg-[#1F2937] p-5 rounded-2xl border border-[#E2E8F0] dark:border-[#334155]">
            <div className="flex items-center justify-between mb-3 text-xs font-bold text-[#64748B] dark:text-[#94A3B8]">
              <span>Bảng chuyển câu nhanh:</span>
              <div className="flex items-center space-x-3 text-[11px] font-normal">
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#06B6D4]" /> Đã làm
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" /> Đánh dấu
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E2E8F0]" /> Chưa làm
                </span>
              </div>
            </div>

            <div className="grid grid-cols-6 sm:grid-cols-10 md:grid-cols-12 gap-2">
              {activeQuestions.map((q, idx) => {
                const isAnswered = !!userAnswers[q.id];
                const isFlagged = flaggedIds.includes(q.id);
                const isCurrent = idx === currentIndex;

                let btnClass = 'bg-[#F1F5F9] dark:bg-[#111827] text-[#64748B] dark:text-[#94A3B8]';
                if (isCurrent) {
                  btnClass = 'bg-[#06B6D4] text-white font-bold ring-2 ring-[#06B6D4]/50 scale-105';
                } else if (isFlagged) {
                  btnClass = 'bg-[#FEF2F2] dark:bg-[#EF4444]/20 text-[#EF4444] border border-[#EF4444]/50 font-semibold';
                } else if (isAnswered) {
                  btnClass = 'bg-[#CFFAFE] dark:bg-[#06B6D4]/20 text-[#0891B2] dark:text-[#38BDF8] font-semibold';
                }

                return (
                  <button
                    key={q.id}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-9 rounded-xl text-xs flex items-center justify-center transition-all cursor-pointer ${btnClass}`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Review Screen (when submitted) */}
      {isSubmitted && (
        <div className="space-y-6">
          {/* Result Score Card */}
          <div className="bg-gradient-to-br from-[#ECFEFF] via-white to-[#F0FDFA] dark:from-[#164E63]/30 dark:via-[#1F2937] dark:to-[#111827] p-6 sm:p-8 rounded-3xl border border-[#06B6D4]/30 shadow-md text-center space-y-4">
            <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#06B6D4] to-[#22C55E] text-white mx-auto flex items-center justify-center shadow-lg shadow-[#06B6D4]/30">
              <Award className="w-10 h-10" />
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0891B2] dark:text-[#38BDF8]">
                Kết Quả Luyện Tập
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] dark:text-[#F8FAFC] mt-1">
                {scoreOutOf10} <span className="text-xl font-normal text-[#64748B]">/ 10 điểm</span>
              </h2>
            </div>

            {/* Rating description */}
            <p className="text-base font-semibold text-[#164E63] dark:text-[#38BDF8]">
              {scoreOutOf10 >= 9.0
                ? '🌟 Xuất Sắc! Bạn đã nắm cực kỳ vững kiến thức phần này!'
                : scoreOutOf10 >= 7.0
                ? '👍 Rất Tốt! Hãy ôn lại các câu chưa chính xác để đạt điểm tuyệt đối nhé!'
                : scoreOutOf10 >= 5.0
                ? '⚡ Khá! Cần đọc thêm phần tóm tắt lý thuyết và ôn thẻ Flashcard để củng cố!'
                : '💪 Cần nỗ lực hơn! Hãy xem lại giải thích chi tiết từng câu bên dưới nhé!'}
            </p>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-3 max-w-lg mx-auto pt-3">
              <div className="p-3 rounded-2xl bg-white dark:bg-[#111827] border border-[#E2E8F0] dark:border-[#334155]">
                <div className="text-xs text-[#64748B] dark:text-[#94A3B8]">Số câu đúng</div>
                <div className="text-lg font-bold text-[#22C55E]">{correctCount} / {activeQuestions.length}</div>
              </div>
              <div className="p-3 rounded-2xl bg-white dark:bg-[#111827] border border-[#E2E8F0] dark:border-[#334155]">
                <div className="text-xs text-[#64748B] dark:text-[#94A3B8]">Tỉ lệ chính xác</div>
                <div className="text-lg font-bold text-[#06B6D4]">
                  {Math.round((correctCount / activeQuestions.length) * 100)}%
                </div>
              </div>
              <div className="p-3 rounded-2xl bg-white dark:bg-[#111827] border border-[#E2E8F0] dark:border-[#334155]">
                <div className="text-xs text-[#64748B] dark:text-[#94A3B8]">Thời gian</div>
                <div className="text-lg font-bold text-[#D4A017]">{formatTime(elapsedSeconds)}</div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-4 border-t border-[#E2E8F0] dark:border-[#334155]">
              {correctCount < activeQuestions.length && (
                <button
                  id="btn-retry-incorrect"
                  onClick={handleRetryIncorrect}
                  className="flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-[#D4A017] text-white font-bold hover:bg-[#B48512] transition-colors shadow-sm cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Luyện Tập Lại {activeQuestions.length - correctCount} Câu Sai</span>
                </button>
              )}
              <button
                id="btn-restart-all"
                onClick={handleRestartAll}
                className="flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-[#06B6D4] text-white font-bold hover:bg-[#0891B2] transition-colors shadow-sm cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Làm Lại Toàn Bộ Đề</span>
              </button>
            </div>
          </div>

          {/* Filter Bar for Review */}
          <div className="flex items-center justify-between bg-white dark:bg-[#1F2937] p-4 rounded-2xl border border-[#E2E8F0] dark:border-[#334155]">
            <h3 className="font-bold text-sm sm:text-base text-[#0F172A] dark:text-[#F8FAFC] flex items-center gap-2">
              <Eye className="w-4 h-4 text-[#06B6D4]" />
              Xem Lại Chi Tiết Lời Giải ({filteredReviewQuestions.length} câu):
            </h3>

            <div className="flex items-center bg-[#F1F5F9] dark:bg-[#111827] p-1 rounded-xl text-xs">
              <button
                onClick={() => setResultFilter('all')}
                className={`px-2.5 py-1 rounded-lg font-medium transition-colors cursor-pointer ${
                  resultFilter === 'all'
                    ? 'bg-white dark:bg-[#1F2937] text-[#06B6D4] font-bold shadow-2xs'
                    : 'text-[#64748B]'
                }`}
              >
                Tất cả ({activeQuestions.length})
              </button>
              <button
                onClick={() => setResultFilter('incorrect')}
                className={`px-2.5 py-1 rounded-lg font-medium transition-colors cursor-pointer ${
                  resultFilter === 'incorrect'
                    ? 'bg-white dark:bg-[#1F2937] text-[#EF4444] font-bold shadow-2xs'
                    : 'text-[#64748B]'
                }`}
              >
                Câu sai ({activeQuestions.length - correctCount})
              </button>
              <button
                onClick={() => setResultFilter('correct')}
                className={`px-2.5 py-1 rounded-lg font-medium transition-colors cursor-pointer ${
                  resultFilter === 'correct'
                    ? 'bg-white dark:bg-[#1F2937] text-[#22C55E] font-bold shadow-2xs'
                    : 'text-[#64748B]'
                }`}
              >
                Câu đúng ({correctCount})
              </button>
            </div>
          </div>

          {/* Review Questions List */}
          <div className="space-y-4">
            {filteredReviewQuestions.map((q, idx) => {
              const uAns = userAnswers[q.id];
              const isCorrect = uAns === q.correctAnswer;
              return (
                <div
                  key={q.id}
                  className={`p-5 sm:p-6 rounded-2xl border transition-all ${
                    isCorrect
                      ? 'bg-white dark:bg-[#1F2937] border-[#86EFAC]/60 dark:border-[#22C55E]/30'
                      : 'bg-white dark:bg-[#1F2937] border-[#FCA5A5]/60 dark:border-[#EF4444]/30'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center space-x-2">
                      <span
                        className={`w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center ${
                          isCorrect ? 'bg-[#22C55E] text-white' : 'bg-[#EF4444] text-white'
                        }`}
                      >
                        {isCorrect ? '✓' : '✗'}
                      </span>
                      <span className="font-bold text-sm sm:text-base text-[#0F172A] dark:text-[#F8FAFC]">
                        Câu {idx + 1}:
                      </span>
                      {q.source && (
                        <span className="text-xs text-[#94A3B8]">({q.source})</span>
                      )}
                    </div>

                    <span
                      className={`text-xs px-2.5 py-0.5 rounded-full font-semibold ${
                        isCorrect
                          ? 'bg-[#DCFCE7] text-[#15803D] dark:bg-[#22C55E]/20 dark:text-[#86EFAC]'
                          : 'bg-[#FEE2E2] text-[#B91C1C] dark:bg-[#EF4444]/20 dark:text-[#FCA5A5]'
                      }`}
                    >
                      {isCorrect ? 'Trả lời đúng' : uAns ? `Đã chọn: ${uAns}` : 'Chưa trả lời'}
                    </span>
                  </div>

                  {/* Question Content */}
                  <div className="text-sm sm:text-base font-medium text-[#1E293B] dark:text-[#F1F5F9] mb-4">
                    <LatexRenderer text={q.question} />
                  </div>

                  {/* Options */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                    {q.options.map((opt) => {
                      const isThisCorrect = opt.id === q.correctAnswer;
                      const isThisSelected = uAns === opt.id;

                      let optClass = 'bg-[#F8FAFC] dark:bg-[#111827] border-[#E2E8F0] dark:border-[#334155] text-[#475569] dark:text-[#94A3B8]';
                      if (isThisCorrect) {
                        optClass = 'bg-[#F0FDF4] dark:bg-[#22C55E]/15 border-[#22C55E] text-[#15803D] dark:text-[#86EFAC] font-semibold';
                      } else if (isThisSelected && !isThisCorrect) {
                        optClass = 'bg-[#FEF2F2] dark:bg-[#EF4444]/15 border-[#EF4444] text-[#B91C1C] dark:text-[#FCA5A5]';
                      }

                      return (
                        <div
                          key={opt.id}
                          className={`p-3 rounded-xl border text-xs sm:text-sm flex items-start space-x-2 ${optClass}`}
                        >
                          <span className="font-bold shrink-0">{opt.id}.</span>
                          <div className="flex-1">
                            <LatexRenderer text={opt.text} />
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Detailed Explanation */}
                  <div className="p-3.5 rounded-xl bg-[#ECFEFF]/60 dark:bg-[#06B6D4]/10 border border-[#CFFAFE] dark:border-[#06B6D4]/20 text-xs sm:text-sm text-[#164E63] dark:text-[#CBD5E1] space-y-1">
                    <div className="font-bold text-[#0891B2] dark:text-[#38BDF8] flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Hướng dẫn giải chi tiết (Đáp án đúng: {q.correctAnswer}):</span>
                    </div>
                    <div className="leading-relaxed">
                      <LatexRenderer text={q.explanation} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
