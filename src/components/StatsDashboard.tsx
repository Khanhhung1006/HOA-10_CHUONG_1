import React, { useState } from 'react';
import { 
  BarChart3, 
  Award, 
  Layers, 
  Clock, 
  CheckCircle2, 
  RotateCcw, 
  Sparkles,
  TrendingUp,
  Flame,
  BookOpen,
  Filter
} from 'lucide-react';
import { UserStudyStats, LessonId, ChapterId } from '../types';
import { CHAPTERS, LESSONS, getAllFlashcards, getAllQuizzes } from '../data';

interface StatsDashboardProps {
  stats: UserStudyStats;
  onResetStats: () => void;
  onNavigateToTab: (tab: 'theory' | 'flashcards' | 'quiz' | 'final-exam', lessonId?: LessonId, chapterId?: ChapterId) => void;
}

export const StatsDashboard: React.FC<StatsDashboardProps> = ({
  stats,
  onResetStats,
  onNavigateToTab,
}) => {
  const [selectedChapterFilter, setSelectedChapterFilter] = useState<'all' | ChapterId>('all');

  const allCards = getAllFlashcards();
  const allQuizzes = getAllQuizzes();

  const totalCardsCount = allCards.length;
  const learnedCardsCount = stats.learnedCardIds.length;
  const flashcardPercent = totalCardsCount > 0 ? Math.round((learnedCardsCount / totalCardsCount) * 100) : 0;

  const totalQuizzesTaken = stats.quizHistory.length;
  const averageScore = totalQuizzesTaken > 0
    ? Number((stats.quizHistory.reduce((acc, curr) => acc + curr.score, 0) / totalQuizzesTaken).toFixed(1))
    : 0;

  const highestScore = totalQuizzesTaken > 0
    ? Math.max(...stats.quizHistory.map((s) => s.score))
    : 0;

  const totalStudyMinutes = Math.round(
    stats.quizHistory.reduce((acc, curr) => acc + curr.timeSpentSeconds, 0) / 60
  );

  const displayedChapters = selectedChapterFilter === 'all' 
    ? CHAPTERS 
    : CHAPTERS.filter(c => c.id === selectedChapterFilter);

  return (
    <div className="max-w-5xl mx-auto space-y-6 animate-fadeIn pb-12">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#ECFEFF] to-white dark:from-[#164E63]/30 dark:to-[#1F2937] p-6 rounded-3xl border border-[#CFFAFE] dark:border-[#06B6D4]/20 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#06B6D4] text-white mb-2">
              <BarChart3 className="w-3.5 h-3.5" />
              <span>Thống Kê Tiến Độ Toàn Diện</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-[#0F172A] dark:text-[#F8FAFC]">
              Báo cáo tiến độ & Kết quả ôn luyện
            </h1>
            <p className="text-xs sm:text-sm text-[#475569] dark:text-[#94A3B8] mt-1">
              Theo dõi mức độ hoàn thành bài học, tỉ lệ nhớ thẻ Flashcard và lịch sử điểm số các bài kiểm tra trắc nghiệm Hoá học 11.
            </p>
          </div>

          <button
            onClick={onResetStats}
            className="flex items-center space-x-1.5 px-3.5 py-2 rounded-xl border border-[#E2E8F0] dark:border-[#334155] bg-white dark:bg-[#1F2937] text-xs text-[#64748B] hover:text-[#EF4444] hover:border-[#EF4444] transition-colors cursor-pointer self-start sm:self-auto"
            title="Xóa dữ liệu thống kê để bắt đầu lại từ đầu"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Đặt lại tiến độ</span>
          </button>
        </div>
      </div>

      {/* Top 4 Metric Highlights */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Flashcards Progress */}
        <div className="bg-white dark:bg-[#1F2937] p-5 rounded-2xl border border-[#E2E8F0] dark:border-[#334155] shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs text-[#64748B] dark:text-[#94A3B8]">Thẻ đã thuộc</span>
            <span className="p-2 rounded-xl bg-[#CFFAFE] dark:bg-[#06B6D4]/20 text-[#06B6D4]">
              <Layers className="w-4 h-4" />
            </span>
          </div>
          <div className="mt-3">
            <span className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] dark:text-[#F8FAFC]">
              {learnedCardsCount}
            </span>
            <span className="text-xs text-[#64748B] ml-1">/ {totalCardsCount} thẻ</span>
          </div>
          <div className="mt-2 w-full h-1.5 rounded-full bg-[#E2E8F0] dark:bg-[#334155] overflow-hidden">
            <div
              className="h-full bg-[#06B6D4] rounded-full transition-all"
              style={{ width: `${flashcardPercent}%` }}
            />
          </div>
        </div>

        {/* Average Score */}
        <div className="bg-white dark:bg-[#1F2937] p-5 rounded-2xl border border-[#E2E8F0] dark:border-[#334155] shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs text-[#64748B] dark:text-[#94A3B8]">Điểm trung bình</span>
            <span className="p-2 rounded-xl bg-[#F6E7B2] dark:bg-[#D4A017]/20 text-[#D4A017]">
              <Award className="w-4 h-4" />
            </span>
          </div>
          <div className="mt-3">
            <span className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] dark:text-[#F8FAFC]">
              {averageScore}
            </span>
            <span className="text-xs text-[#64748B] ml-1">/ 10 điểm</span>
          </div>
          <div className="mt-2 text-[11px] text-[#22C55E] flex items-center gap-1 font-medium">
            <TrendingUp className="w-3 h-3" />
            <span>Cao nhất: {highestScore}/10</span>
          </div>
        </div>

        {/* Total Quizzes Completed */}
        <div className="bg-white dark:bg-[#1F2937] p-5 rounded-2xl border border-[#E2E8F0] dark:border-[#334155] shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs text-[#64748B] dark:text-[#94A3B8]">Số lần luyện tập</span>
            <span className="p-2 rounded-xl bg-[#DCFCE7] dark:bg-[#22C55E]/20 text-[#22C55E]">
              <CheckCircle2 className="w-4 h-4" />
            </span>
          </div>
          <div className="mt-3">
            <span className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] dark:text-[#F8FAFC]">
              {totalQuizzesTaken}
            </span>
            <span className="text-xs text-[#64748B] ml-1">phiên nộp bài</span>
          </div>
          <div className="mt-2 text-[11px] text-[#64748B]">
            {totalQuizzesTaken > 0 ? 'Đã lưu lịch sử chi tiết' : 'Chưa có phiên làm bài nào'}
          </div>
        </div>

        {/* Study Time */}
        <div className="bg-white dark:bg-[#1F2937] p-5 rounded-2xl border border-[#E2E8F0] dark:border-[#334155] shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs text-[#64748B] dark:text-[#94A3B8]">Thời gian ôn luyện</span>
            <span className="p-2 rounded-xl bg-[#FEF3C7] text-[#D97706]">
              <Clock className="w-4 h-4" />
            </span>
          </div>
          <div className="mt-3">
            <span className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] dark:text-[#F8FAFC]">
              {totalStudyMinutes}
            </span>
            <span className="text-xs text-[#64748B] ml-1">phút làm bài</span>
          </div>
          <div className="mt-2 text-[11px] text-[#0891B2] dark:text-[#38BDF8] flex items-center gap-1 font-medium">
            <Flame className="w-3 h-3 text-[#F59E0B]" />
            <span>Duy trì đều đặn mỗi ngày</span>
          </div>
        </div>
      </div>

      {/* Chapter Filter Controls */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Filter className="w-4 h-4 text-[#06B6D4]" />
          <span className="text-xs font-semibold text-[#475569] dark:text-[#94A3B8]">Lọc theo chương:</span>
          <div className="flex space-x-1">
            <button
              onClick={() => setSelectedChapterFilter('all')}
              className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                selectedChapterFilter === 'all'
                  ? 'bg-[#06B6D4] text-white'
                  : 'bg-white dark:bg-[#1F2937] text-[#475569] dark:text-[#94A3B8] border border-[#E2E8F0] dark:border-[#334155]'
              }`}
            >
              Tất cả các chương
            </button>
            {CHAPTERS.map(ch => (
              <button
                key={ch.id}
                onClick={() => setSelectedChapterFilter(ch.id)}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                  selectedChapterFilter === ch.id
                    ? 'bg-[#06B6D4] text-white'
                    : 'bg-white dark:bg-[#1F2937] text-[#475569] dark:text-[#94A3B8] border border-[#E2E8F0] dark:border-[#334155]'
                }`}
              >
                Chương {ch.number}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Breakdown By Chapters and Lessons */}
      {displayedChapters.map((chapter) => (
        <div key={chapter.id} className="bg-white dark:bg-[#1F2937] p-6 rounded-3xl border border-[#E2E8F0] dark:border-[#334155] shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-[#0F172A] dark:text-[#F8FAFC] flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-[#06B6D4]" />
              {chapter.title}
            </h2>
            <span className="text-xs text-[#64748B] dark:text-[#94A3B8]">
              {chapter.lessons.length} bài học
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {chapter.lessons.map((lesson) => {
              const lessonCards = allCards.filter((c) => c.lessonId === lesson.id);
              const lessonLearned = stats.learnedCardIds.filter((id) =>
                lessonCards.some((c) => c.id === id)
              ).length;
              const cardPercent = lessonCards.length > 0 ? Math.round((lessonLearned / lessonCards.length) * 100) : 0;

              const lessonQuizzes = stats.quizHistory.filter((s) => s.lessonId === lesson.id);
              const bestScore = lessonQuizzes.length > 0
                ? Math.max(...lessonQuizzes.map((s) => s.score))
                : null;

              return (
                <div
                  key={lesson.id}
                  className="p-4 rounded-2xl bg-[#F8FAFC] dark:bg-[#111827] border border-[#E2E8F0] dark:border-[#334155] flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#CFFAFE] text-[#164E63] dark:bg-[#06B6D4]/20 dark:text-[#38BDF8]">
                        Bài {lesson.number}
                      </span>
                      {bestScore !== null && (
                        <span className="text-xs font-bold text-[#22C55E]">
                          Điểm cao: {bestScore}/10
                        </span>
                      )}
                    </div>
                    <h3 className="font-bold text-sm text-[#0F172A] dark:text-[#F8FAFC] line-clamp-1">
                      {lesson.title}
                    </h3>
                    <p className="text-xs text-[#64748B] dark:text-[#94A3B8] mt-1 line-clamp-2">
                      {lesson.subtitle}
                    </p>

                    <div className="mt-4 space-y-1.5">
                      <div className="flex justify-between text-xs text-[#64748B] dark:text-[#94A3B8]">
                        <span>Thẻ ghi nhớ:</span>
                        <strong>{lessonLearned}/{lessonCards.length} ({cardPercent}%)</strong>
                      </div>
                      <div className="w-full h-1.5 rounded-full bg-[#E2E8F0] dark:bg-[#334155] overflow-hidden">
                        <div
                          className="h-full bg-[#06B6D4] rounded-full"
                          style={{ width: `${cardPercent}%` }}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#E2E8F0] dark:border-[#334155] flex items-center justify-between gap-2">
                    <button
                      onClick={() => onNavigateToTab('flashcards', lesson.id, lesson.chapterId)}
                      className="flex-1 py-1.5 rounded-lg bg-white dark:bg-[#1F2937] border border-[#06B6D4] text-xs font-medium text-[#0891B2] dark:text-[#38BDF8] hover:bg-[#ECFEFF] transition-colors cursor-pointer text-center"
                    >
                      Ôn Thẻ
                    </button>
                    <button
                      onClick={() =>
                        lesson.id === 'bai-3'
                          ? onNavigateToTab('final-exam', lesson.id, lesson.chapterId)
                          : onNavigateToTab('quiz', lesson.id, lesson.chapterId)
                      }
                      className="flex-1 py-1.5 rounded-lg bg-[#06B6D4] text-xs font-medium text-white hover:bg-[#0891B2] transition-colors cursor-pointer text-center"
                    >
                      Làm Đề
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}

      {/* Quiz History Log */}
      <div className="bg-white dark:bg-[#1F2937] p-6 rounded-3xl border border-[#E2E8F0] dark:border-[#334155] shadow-xs space-y-4">
        <h2 className="text-lg font-bold text-[#0F172A] dark:text-[#F8FAFC] flex items-center gap-2">
          <Award className="w-5 h-5 text-[#D4A017]" />
          Lịch sử các phiên làm bài trắc nghiệm ({stats.quizHistory.length})
        </h2>

        {stats.quizHistory.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-[#E2E8F0] dark:border-[#334155] text-[#64748B] dark:text-[#94A3B8]">
                  <th className="pb-3 font-semibold">Tên Đề / Bài</th>
                  <th className="pb-3 font-semibold text-center">Số Câu Đúng</th>
                  <th className="pb-3 font-semibold text-center">Điểm Số</th>
                  <th className="pb-3 font-semibold text-center">Thời Gian</th>
                  <th className="pb-3 font-semibold text-right">Ngày Giờ</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F1F5F9] dark:divide-[#334155]/60">
                {stats.quizHistory.slice().reverse().map((session) => {
                  const dateStr = new Date(session.timestamp).toLocaleDateString('vi-VN', {
                    day: '2-digit',
                    month: '2-digit',
                    hour: '2-digit',
                    minute: '2-digit',
                  });
                  return (
                    <tr key={session.id} className="hover:bg-[#F8FAFC] dark:hover:bg-[#111827] transition-colors">
                      <td className="py-3 font-medium text-[#0F172A] dark:text-[#F8FAFC]">
                        {session.title}
                      </td>
                      <td className="py-3 text-center text-[#22C55E] font-semibold">
                        {session.correctCount} / {session.totalQuestions}
                      </td>
                      <td className="py-3 text-center">
                        <span
                          className={`px-2.5 py-0.5 rounded-full font-bold ${
                            session.score >= 8.0
                              ? 'bg-[#DCFCE7] text-[#15803D] dark:bg-[#22C55E]/20 dark:text-[#86EFAC]'
                              : session.score >= 5.0
                              ? 'bg-[#FEF9C3] text-[#A16207] dark:bg-[#D4A017]/20 dark:text-[#FDE047]'
                              : 'bg-[#FEE2E2] text-[#B91C1C] dark:bg-[#EF4444]/20 dark:text-[#FCA5A5]'
                          }`}
                        >
                          {session.score}/10
                        </span>
                      </td>
                      <td className="py-3 text-center text-[#64748B] dark:text-[#94A3B8]">
                        {Math.floor(session.timeSpentSeconds / 60)}p {session.timeSpentSeconds % 60}s
                      </td>
                      <td className="py-3 text-right text-[#94A3B8] font-mono text-xs">
                        {dateStr}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center py-8 text-[#64748B] dark:text-[#94A3B8] bg-[#F8FAFC] dark:bg-[#111827] rounded-2xl">
            <p className="text-sm">Chưa có phiên trắc nghiệm nào được lưu.</p>
            <p className="text-xs mt-1">Hãy chuyển sang tab Trắc Nghiệm hoặc Đề Cuối Chương để bắt đầu làm bài nhé!</p>
          </div>
        )}
      </div>
    </div>
  );
};
