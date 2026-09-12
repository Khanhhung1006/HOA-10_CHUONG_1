import React, { useState } from 'react';
import { UserProgress, LessonId } from '../types';
import { lessonsData } from '../data';
import { 
  Award, 
  BrainCircuit, 
  CheckCircle2, 
  Trash2, 
  AlertTriangle,
  TrendingUp
} from 'lucide-react';
import { soundEffects } from '../utils/audio';

interface ProgressDashboardProps {
  progress: UserProgress;
  onSelectLesson: (id: LessonId) => void;
  onSelectView: (view: any) => void;
  onResetAllProgress: () => void;
}

export const ProgressDashboard: React.FC<ProgressDashboardProps> = ({
  progress,
  onSelectLesson,
  onSelectView,
  onResetAllProgress,
}) => {
  const [showConfirmReset, setShowConfirmReset] = useState(false);

  const totalCards = lessonsData.reduce((acc, l) => acc + l.flashcards.length, 0);
  const learnedCardsCount = progress.learnedFlashcardIds.length;
  const cardPct = Math.round((learnedCardsCount / Math.max(1, totalCards)) * 100);

  const totalQuestions = lessonsData.reduce((acc, l) => acc + l.quizQuestions.length, 0);
  let totalBestQuizScore = 0;
  lessonsData.forEach(l => {
    totalBestQuizScore += progress.quizProgress[l.id]?.bestScore || 0;
  });
  const quizPct = Math.round((totalBestQuizScore / Math.max(1, totalQuestions)) * 100);

  const overallPct = Math.round((cardPct + quizPct) / 2);

  const handleResetConfirm = () => {
    soundEffects.playClick();
    onResetAllProgress();
    setShowConfirmReset(false);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 space-y-8 animate-in fade-in duration-300">
      {/* Overview Banner */}
      <div className="bg-gradient-to-br from-[#2D2115] via-[#0F3A3E] to-[#0A272A] text-white rounded-3xl p-6 sm:p-8 shadow-md relative overflow-hidden border border-amber-900/40">
        <div className="relative z-10 space-y-4">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 bg-amber-500/20 border border-amber-400/30 text-amber-200 text-xs font-bold rounded-full">
              Thống Kê Tiến Độ Bảng Học
            </span>
            <button
              onClick={() => setShowConfirmReset(true)}
              className="flex items-center gap-1 text-xs text-rose-300 hover:text-rose-100 bg-rose-900/40 hover:bg-rose-900/60 px-3 py-1.5 rounded-lg border border-rose-700/50 transition cursor-pointer select-none"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Xóa lịch sử</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            {/* Total Mastery */}
            <div className="bg-[#122A2E]/80 p-4 rounded-2xl border border-cyan-800/60 flex items-center gap-3">
              <div className="p-3 bg-amber-500/20 text-amber-300 rounded-xl">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl font-extrabold text-amber-300">{overallPct}%</div>
                <div className="text-xs text-cyan-100/80">Hoàn Thành Chương 1</div>
              </div>
            </div>

            {/* Flashcards Mastered */}
            <div className="bg-[#122A2E]/80 p-4 rounded-2xl border border-cyan-800/60 flex items-center gap-3">
              <div className="p-3 bg-cyan-500/20 text-cyan-300 rounded-xl">
                <BrainCircuit className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl font-extrabold text-white">{learnedCardsCount} / {totalCards}</div>
                <div className="text-xs text-cyan-100/80">Flashcard Đã Thuộc</div>
              </div>
            </div>

            {/* Quiz Best Score */}
            <div className="bg-[#122A2E]/80 p-4 rounded-2xl border border-cyan-800/60 flex items-center gap-3">
              <div className="p-3 bg-amber-400/20 text-amber-300 rounded-xl">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl font-extrabold text-amber-300">{totalBestQuizScore} / {totalQuestions}</div>
                <div className="text-xs text-cyan-100/80">Điểm Trắc Nghiệm Cao Nhất</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Breakdown per Lesson */}
      <div className="space-y-4">
        <h3 className="text-lg font-extrabold text-amber-950 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-cyan-700" />
          <span>Chi Tiết Tiến Độ Từng Bài Học</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {lessonsData.map(lesson => {
            const lessonFlashcards = lesson.flashcards;
            const learnedCountInLesson = lessonFlashcards.filter(c => progress.learnedFlashcardIds.includes(c.id)).length;
            const flashcardPct = Math.round((learnedCountInLesson / lessonFlashcards.length) * 100);

            const quizState = progress.quizProgress[lesson.id] || { bestScore: 0, totalQuestions: lesson.quizQuestions.length, attempts: [] };
            const quizPctLesson = Math.round((quizState.bestScore / lesson.quizQuestions.length) * 100);

            return (
              <div 
                key={lesson.id}
                className="bg-[#FFFDF9] rounded-2xl border border-amber-200/80 p-5 shadow-2xs hover:shadow-xs transition space-y-4"
              >
                <div className="flex items-center justify-between border-b border-amber-100 pb-3">
                  <div className="flex items-center gap-2.5">
                    <span className="w-7 h-7 bg-cyan-700 text-white rounded-lg text-xs font-extrabold flex items-center justify-center">
                      {lesson.number}
                    </span>
                    <div>
                      <h4 className="font-bold text-amber-950 text-sm">{lesson.title}</h4>
                      <p className="text-[11px] text-amber-800/70">{lesson.pageRange}</p>
                    </div>
                  </div>
                </div>

                {/* Flashcards Progress */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-medium text-amber-900 flex items-center gap-1">
                      <BrainCircuit className="w-3.5 h-3.5 text-cyan-700" />
                      <span>Flashcards đã thuộc:</span>
                    </span>
                    <span className="font-bold text-cyan-700">{learnedCountInLesson}/{lessonFlashcards.length} ({flashcardPct}%)</span>
                  </div>
                  <div className="w-full bg-amber-100/80 rounded-full h-2 overflow-hidden">
                    <div 
                      className="bg-cyan-700 h-2 rounded-full transition-all duration-500" 
                      style={{ width: `${flashcardPct}%` }}
                    />
                  </div>
                </div>

                {/* Quiz Progress */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-medium text-amber-900 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-700" />
                      <span>Điểm trắc nghiệm cao nhất:</span>
                    </span>
                    <span className="font-bold text-amber-700">{quizState.bestScore}/{lesson.quizQuestions.length} ({quizPctLesson}%)</span>
                  </div>
                  <div className="w-full bg-amber-100/80 rounded-full h-2 overflow-hidden">
                    <div 
                      className="bg-amber-600 h-2 rounded-full transition-all duration-500" 
                      style={{ width: `${quizPctLesson}%` }}
                    />
                  </div>
                </div>

                {/* Action Shortcuts */}
                <div className="pt-2 flex items-center gap-2 border-t border-amber-100">
                  <button
                    onClick={() => {
                      soundEffects.playClick();
                      onSelectLesson(lesson.id);
                      onSelectView('flashcards');
                    }}
                    className="flex-1 py-1.5 px-2 bg-cyan-100/80 hover:bg-cyan-200/80 text-cyan-900 text-xs font-bold rounded-lg text-center transition cursor-pointer select-none"
                  >
                    Ôn Flashcards
                  </button>
                  <button
                    onClick={() => {
                      soundEffects.playClick();
                      onSelectLesson(lesson.id);
                      onSelectView('quiz');
                    }}
                    className="flex-1 py-1.5 px-2 bg-amber-100 hover:bg-amber-200/80 text-amber-950 text-xs font-bold rounded-lg text-center transition cursor-pointer select-none"
                  >
                    Làm Trắc nghiệm
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Reset Confirmation Modal */}
      {showConfirmReset && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#FFFDF9] rounded-3xl p-6 sm:p-8 max-w-md w-full space-y-4 shadow-xl border border-amber-200/80 animate-in zoom-in-95">
            <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center mx-auto">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <div className="text-center space-y-2">
              <h3 className="text-lg font-bold text-amber-950">Xóa Tất Cả Tiến Độ Học Tập?</h3>
              <p className="text-xs sm:text-sm text-amber-800/80">
                Thao tác này sẽ đặt lại danh sách các thẻ Flashcard đã thuộc và lịch sử bài kiểm tra trắc nghiệm của bạn. Action không thể hoàn tác.
              </p>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => setShowConfirmReset(false)}
                className="flex-1 py-2.5 bg-amber-100 hover:bg-amber-200 text-amber-950 font-bold text-xs sm:text-sm rounded-xl transition cursor-pointer select-none"
              >
                Hủy bỏ
              </button>
              <button
                onClick={handleResetConfirm}
                className="flex-1 py-2.5 bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs sm:text-sm rounded-xl transition cursor-pointer select-none shadow-xs"
              >
                Xác nhận xóa
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
