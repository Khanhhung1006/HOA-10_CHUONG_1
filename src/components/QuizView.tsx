import React, { useState } from 'react';
import { Lesson, QuizQuestion } from '../types';
import { 
  CheckCircle2, 
  XCircle, 
  RotateCw, 
  Award, 
  ChevronRight, 
  ChevronLeft, 
  Sparkles,
  Check
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { soundEffects } from '../utils/audio';

interface QuizViewProps {
  lesson: Lesson;
  onSaveQuizResult: (lessonId: any, score: number, total: number, userAnswers: Record<number, number>) => void;
  bestScore?: number;
}

export const QuizView: React.FC<QuizViewProps> = ({
  lesson,
  onSaveQuizResult,
  bestScore = 0,
}) => {
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [currentQIndex, setCurrentIndex] = useState(0);
  const [showExplanation, setShowExplanation] = useState<Record<number, boolean>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const questions: QuizQuestion[] = lesson.quizQuestions;
  const currentQuestion = questions[currentQIndex];

  const handleSelectOption = (questionIdx: number, optionIdx: number) => {
    if (isSubmitted) return;
    
    soundEffects.playClick();
    setUserAnswers(prev => ({
      ...prev,
      [questionIdx]: optionIdx,
    }));

    setShowExplanation(prev => ({
      ...prev,
      [questionIdx]: true,
    }));

    const q = questions[questionIdx];
    if (optionIdx === q.correctAnswerIndex) {
      soundEffects.playCorrect();
    } else {
      soundEffects.playWrong();
    }
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach((q, idx) => {
      if (userAnswers[idx] === q.correctAnswerIndex) {
        score += 1;
      }
    });
    return score;
  };

  const handleSubmitQuiz = () => {
    const finalScore = calculateScore();
    setIsSubmitted(true);
    soundEffects.playSuccess();

    onSaveQuizResult(lesson.id, finalScore, questions.length, userAnswers);

    if ((finalScore / questions.length) >= 0.8) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  const handleRestartQuiz = () => {
    soundEffects.playClick();
    setUserAnswers({});
    setCurrentIndex(0);
    setShowExplanation({});
    setIsSubmitted(false);
  };

  const answeredCount = Object.keys(userAnswers).length;
  const currentScore = calculateScore();

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 space-y-6 animate-in fade-in duration-300">
      {/* Quiz Top Header */}
      <div className="bg-[#FFFDF9] rounded-2xl border border-amber-200/80 p-5 shadow-xs flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-1.5 bg-cyan-100 text-cyan-800 rounded-lg">
              <CheckCircle2 className="w-5 h-5" />
            </span>
            <h2 className="text-lg font-bold text-amber-950">
              Trắc Nghiệm - Bài {lesson.number}: {lesson.title}
            </h2>
          </div>
          <p className="text-xs text-amber-800/80 mt-1">
            Tổng số: {questions.length} câu trắc nghiệm chuẩn SGK • Đáp án có giải thích chi tiết
          </p>
        </div>

        <div className="flex items-center gap-3">
          {bestScore > 0 && (
            <div className="text-right hidden sm:block">
              <div className="text-[11px] text-amber-800/70 font-semibold">Điểm cao nhất</div>
              <div className="text-sm font-extrabold text-amber-700">{bestScore}/{questions.length}</div>
            </div>
          )}

          {!isSubmitted ? (
            <button
              onClick={handleSubmitQuiz}
              disabled={answeredCount === 0}
              className="px-5 py-2.5 bg-cyan-700 hover:bg-cyan-600 text-white font-extrabold text-xs sm:text-sm rounded-xl shadow-xs transition cursor-pointer select-none active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Nộp Bài ({answeredCount}/{questions.length})
            </button>
          ) : (
            <button
              onClick={handleRestartQuiz}
              className="flex items-center gap-1.5 px-4 py-2 bg-amber-100 hover:bg-amber-200 text-amber-950 font-bold text-xs sm:text-sm rounded-xl transition cursor-pointer select-none active:scale-95"
            >
              <RotateCw className="w-4 h-4 text-cyan-700" />
              <span>Làm lại bài</span>
            </button>
          )}
        </div>
      </div>

      {/* Question Number Quick Grid Bar */}
      <div className="bg-[#FFFDF9] p-3 rounded-xl border border-amber-200/80 shadow-2xs overflow-x-auto no-scrollbar">
        <div className="flex items-center gap-1.5 min-w-max">
          <span className="text-xs font-semibold text-amber-900/80 mr-1">Danh sách câu:</span>
          {questions.map((q, idx) => {
            const isAnswered = userAnswers[idx] !== undefined;
            const isSelected = idx === currentQIndex;
            const isCorrect = userAnswers[idx] === q.correctAnswerIndex;

            let btnBg = 'bg-amber-100/60 text-amber-900 border-amber-200/80';
            if (isSubmitted) {
              if (isCorrect) btnBg = 'bg-cyan-700 text-white border-cyan-800 font-bold';
              else if (isAnswered) btnBg = 'bg-rose-500 text-white border-rose-600 font-bold';
              else btnBg = 'bg-amber-200/50 text-amber-800/60';
            } else if (isAnswered) {
              btnBg = 'bg-cyan-700 text-white font-bold border-cyan-800';
            }

            return (
              <button
                key={q.id}
                onClick={() => {
                  soundEffects.playClick();
                  setCurrentIndex(idx);
                }}
                className={`w-8 h-8 rounded-lg text-xs font-bold border flex items-center justify-center transition cursor-pointer select-none ${btnBg} ${
                  isSelected ? 'ring-2 ring-cyan-600 ring-offset-1 scale-105' : ''
                }`}
              >
                {idx + 1}
              </button>
            );
          })}
        </div>
      </div>

      {/* Quiz Results Card if Submitted */}
      {isSubmitted && (
        <div className="bg-gradient-to-br from-[#2D2115] via-[#0F3A3E] to-[#0A272A] text-white rounded-3xl p-6 sm:p-8 shadow-md text-center space-y-4 animate-in zoom-in-95 duration-300 border border-amber-900/40">
          <Award className="w-16 h-16 text-amber-400 mx-auto" />
          <h3 className="text-2xl font-extrabold text-white">Kết Quả Bài Trắc Nghiệm</h3>
          <div className="text-4xl font-extrabold text-amber-300">
            {currentScore} / {questions.length}
            <span className="text-base font-normal text-cyan-200 ml-2">
              ({Math.round((currentScore / questions.length) * 100)}%)
            </span>
          </div>

          <p className="text-sm text-cyan-100 max-w-md mx-auto">
            {currentScore === questions.length 
              ? 'Xuất sắc! Bạn đã trả lời đúng 100% tất cả câu hỏi chương này!' 
              : currentScore >= questions.length * 0.8 
              ? 'Rất tốt! Bạn đã nắm vững các kiến thức trọng tâm.' 
              : 'Hãy xem lại các câu trả lời và lời giải chi tiết bên dưới để bổ sung kiến thức.'}
          </p>

          <div className="pt-2 flex justify-center gap-3">
            <button
              onClick={handleRestartQuiz}
              className="flex items-center gap-2 px-5 py-2.5 bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-sm rounded-xl shadow-xs transition cursor-pointer select-none active:scale-95 border border-cyan-400/40"
            >
              <RotateCw className="w-4 h-4" />
              <span>Làm lại bài này</span>
            </button>
          </div>
        </div>
      )}

      {/* Main Single Question Card */}
      <div className="bg-[#FFFDF9] rounded-2xl border border-amber-200/80 p-6 sm:p-8 shadow-2xs space-y-6">
        {/* Question Header */}
        <div className="flex items-start justify-between gap-3 border-b border-amber-100 pb-4">
          <div className="space-y-1">
            <span className="px-3 py-1 bg-cyan-100/80 text-cyan-800 text-xs font-extrabold rounded-full border border-cyan-200">
              Câu {currentQIndex + 1} / {questions.length} • {currentQuestion.topicTag || 'Trắc nghiệm'}
            </span>
            <h3 className="text-base sm:text-lg font-bold text-amber-950 leading-snug pt-2">
              {currentQuestion.question}
            </h3>
          </div>
        </div>

        {/* Options List */}
        <div className="grid grid-cols-1 gap-3">
          {currentQuestion.options.map((option, optIdx) => {
            const isSelected = userAnswers[currentQIndex] === optIdx;
            const isCorrectAnswer = currentQuestion.correctAnswerIndex === optIdx;

            let optionStyle = 'bg-amber-50/50 border-amber-200 text-amber-950 hover:bg-amber-100/60 hover:border-amber-300';

            if (userAnswers[currentQIndex] !== undefined) {
              if (isCorrectAnswer) {
                optionStyle = 'bg-cyan-50 border-cyan-600 text-cyan-950 font-semibold ring-1 ring-cyan-500';
              } else if (isSelected) {
                optionStyle = 'bg-rose-50 border-rose-500 text-rose-900 font-semibold ring-1 ring-rose-400';
              } else {
                optionStyle = 'bg-amber-50/30 border-amber-200/50 text-amber-800/40 opacity-60';
              }
            }

            return (
              <button
                key={optIdx}
                onClick={() => handleSelectOption(currentQIndex, optIdx)}
                disabled={isSubmitted}
                className={`p-4 rounded-xl border text-left text-sm sm:text-base transition-all flex items-start justify-between gap-3 cursor-pointer select-none active:scale-[0.99] ${optionStyle}`}
              >
                <div className="flex items-start gap-3">
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 ${
                    isSelected ? 'bg-cyan-700 text-white' : 'bg-amber-200/80 text-amber-900'
                  }`}>
                    {String.fromCharCode(65 + optIdx)}
                  </span>
                  <span className="leading-snug">{option}</span>
                </div>

                {userAnswers[currentQIndex] !== undefined && isCorrectAnswer && (
                  <CheckCircle2 className="w-5 h-5 text-cyan-700 shrink-0 mt-0.5" />
                )}
                {userAnswers[currentQIndex] !== undefined && isSelected && !isCorrectAnswer && (
                  <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                )}
              </button>
            );
          })}
        </div>

        {/* DETAILED EXPLANATION BOX */}
        {showExplanation[currentQIndex] && (
          <div className="bg-cyan-50/90 border border-cyan-200 rounded-2xl p-5 space-y-2 animate-in fade-in duration-300">
            <div className="flex items-center gap-2 text-cyan-950 font-extrabold text-sm">
              <Sparkles className="w-4 h-4 text-cyan-700" />
              <span>Giải thích chi tiết đáp án:</span>
            </div>
            <p className="text-xs sm:text-sm text-cyan-950 leading-relaxed font-medium whitespace-pre-line pl-1">
              {currentQuestion.explanation}
            </p>
          </div>
        )}

        {/* Question Footer Controls */}
        <div className="flex items-center justify-between pt-4 border-t border-amber-100">
          <button
            onClick={() => {
              soundEffects.playClick();
              setCurrentIndex(prev => Math.max(0, prev - 1));
            }}
            disabled={currentQIndex === 0}
            className="flex items-center gap-1.5 px-4 py-2 bg-amber-100/80 hover:bg-amber-200 text-amber-950 font-bold text-xs sm:text-sm rounded-xl transition cursor-pointer select-none disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Câu trước</span>
          </button>

          <span className="text-xs text-amber-800/70 font-semibold">
            {currentQIndex + 1} / {questions.length}
          </span>

          <button
            onClick={() => {
              soundEffects.playClick();
              setCurrentIndex(prev => Math.min(questions.length - 1, prev + 1));
            }}
            disabled={currentQIndex === questions.length - 1}
            className="flex items-center gap-1.5 px-4 py-2 bg-cyan-700 hover:bg-cyan-600 text-white font-bold text-xs sm:text-sm rounded-xl shadow-xs transition cursor-pointer select-none disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <span>Câu tiếp</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
