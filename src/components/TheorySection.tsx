import React, { useState } from 'react';
import { 
  CheckCircle2, 
  AlertTriangle, 
  Lightbulb, 
  BookMarked, 
  Sparkles, 
  ChevronDown, 
  ChevronUp,
  Layers,
  HelpCircle,
  Calculator,
  Compass
} from 'lucide-react';
import { TheorySectionData, LessonId } from '../types';
import { LatexRenderer } from './LatexRenderer';

interface TheorySectionProps {
  theoryData: TheorySectionData;
  onGoToFlashcards: (lessonId: LessonId) => void;
  onGoToQuiz: (lessonId: LessonId) => void;
}

export const TheorySection: React.FC<TheorySectionProps> = ({
  theoryData,
  onGoToFlashcards,
  onGoToQuiz,
}) => {
  const [openSections, setOpenSections] = useState<Record<number, boolean>>({
    0: true,
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
  });

  const toggleSection = (idx: number) => {
    setOpenSections((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  return (
    <div className="space-y-6 animate-fadeIn pb-12">
      {/* Lesson Header Banner */}
      <div className="bg-gradient-to-r from-[#ECFEFF] to-white dark:from-[#164E63]/30 dark:to-[#1F2937] p-5 sm:p-6 rounded-2xl border border-[#CFFAFE] dark:border-[#06B6D4]/20 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0F172A] dark:text-[#F8FAFC]">
              <LatexRenderer text={theoryData.title} />
            </h1>
          </div>

          {/* Action shortcuts - Single row */}
          <div className="flex flex-row items-center gap-2 sm:gap-3 shrink-0">
            <button
              onClick={() => onGoToFlashcards(theoryData.id as LessonId)}
              className="flex-1 sm:flex-none flex items-center justify-center space-x-1.5 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-white dark:bg-[#1E293B] border border-[#06B6D4] text-[#0891B2] dark:text-[#38BDF8] hover:bg-[#ECFEFF] dark:hover:bg-[#06B6D4]/10 transition-colors shadow-xs cursor-pointer"
            >
              <Layers className="w-4 h-4 text-[#06B6D4]" />
              <span>Flashcard</span>
            </button>
            <button
              onClick={() => onGoToQuiz(theoryData.id as LessonId)}
              className="flex-1 sm:flex-none flex items-center justify-center space-x-1.5 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-[#06B6D4] text-white hover:bg-[#0891B2] transition-colors shadow-xs shadow-[#06B6D4]/20 cursor-pointer"
            >
              <HelpCircle className="w-4 h-4" />
              <span>Trắc nghiệm</span>
            </button>
          </div>
        </div>

        {/* Objectives */}
        <div className="mt-5 pt-4 border-t border-[#E2E8F0] dark:border-[#334155]/60">
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#164E63] dark:text-[#38BDF8] mb-2 flex items-center gap-1.5">
            <Compass className="w-4 h-4" /> Mục tiêu cần đạt
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs sm:text-sm text-[#334155] dark:text-[#CBD5E1]">
            {theoryData.objectives.map((obj, i) => (
              <li key={i} className="flex items-start space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0 mt-0.5" />
                <div className="flex-1 text-justify">
                  <LatexRenderer text={obj} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Quick Summary Card */}
      <div className="bg-white dark:bg-[#1F2937] p-5 sm:p-6 rounded-2xl border border-[#E2E8F0] dark:border-[#334155] shadow-xs">
        <div className="flex items-center space-x-2 mb-3">
          <div className="p-1.5 rounded-lg bg-[#F6E7B2] dark:bg-[#D4A017]/20 text-[#D4A017]">
            <Sparkles className="w-5 h-5" />
          </div>
          <h2 className="text-lg font-bold text-[#0F172A] dark:text-[#F8FAFC]">
            Tóm tắt khái quát
          </h2>
        </div>
        <div className="bg-[#F8FAFC] dark:bg-[#111827] p-4 sm:p-5 rounded-xl border border-[#E2E8F0]/60 dark:border-[#334155]/60 space-y-3">
          {theoryData.summary
            .split('\n')
            .flatMap((line) => line.split(/(?<=\.)\s+(?=[A-ZĐỨĂÂÊÔƠƯÁÀẢÃẠÉÈẺẼẸÍÌỈĨỊÓÒỎÕỌÚÙỦŨỤÝỲỶỸỴ$0-9])/g))
            .map((s) => s.trim())
            .filter(Boolean)
            .map((item, i) => (
              <div key={i} className="flex items-start space-x-2.5 text-sm sm:text-base text-[#334155] dark:text-[#CBD5E1]">
                <span className="inline-block w-2 h-2 rounded-full bg-[#06B6D4] mt-2 shrink-0" />
                <div className="flex-1 text-justify leading-relaxed">
                  <LatexRenderer text={item} />
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Core Knowledge Modules */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-[#0F172A] dark:text-[#F8FAFC] flex items-center gap-2">
            <BookMarked className="w-5 h-5 text-[#06B6D4]" />
            Kiến thức cốt lõi chi tiết
          </h2>
        </div>

        {theoryData.coreKnowledge.map((section, idx) => {
          const isOpen = openSections[idx] !== false;
          return (
            <div
              key={idx}
              className="bg-white dark:bg-[#1F2937] rounded-2xl border border-[#E2E8F0] dark:border-[#334155] overflow-hidden shadow-xs transition-all"
            >
              <button
                onClick={() => toggleSection(idx)}
                className="w-full px-5 py-4 flex items-center justify-between text-left bg-white dark:bg-[#1F2937] hover:bg-[#F8FAFC] dark:hover:bg-[#1E293B] transition-colors cursor-pointer"
              >
                <span className="font-bold text-base sm:text-lg text-[#0F172A] dark:text-[#F8FAFC]">
                  <LatexRenderer text={section.heading} />
                </span>
                {isOpen ? (
                  <ChevronUp className="w-5 h-5 text-[#64748B]" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-[#64748B]" />
                )}
              </button>

              {isOpen && (
                <div className="px-5 pb-5 pt-1 space-y-3 border-t border-[#F1F5F9] dark:border-[#334155]/60">
                  <ul className="space-y-3">
                    {section.points.map((pt, pIdx) => {
                      const lines = pt.split('\n').map((l) => l.trim()).filter(Boolean);
                      if (lines.length > 1) {
                        return (
                          <li key={pIdx} className="space-y-2 text-sm sm:text-base text-[#334155] dark:text-[#CBD5E1]">
                            {lines.map((line, lIdx) => {
                              const isSub = line.startsWith('-') || line.startsWith('+') || line.startsWith('•');
                              const cleanLine = isSub ? line.replace(/^[-+•]\s*/, '') : line;
                              return (
                                <div
                                  key={lIdx}
                                  className={`flex items-start space-x-2.5 ${
                                    isSub ? 'ml-3 sm:ml-5' : ''
                                  }`}
                                >
                                  <span
                                    className={`inline-block shrink-0 ${
                                      isSub
                                        ? 'w-1.5 h-1.5 rounded-full bg-[#0891B2] mt-2'
                                        : 'w-2 h-2 rounded-full bg-[#06B6D4] mt-2'
                                    }`}
                                  />
                                  <div className="flex-1 text-justify leading-relaxed">
                                    <LatexRenderer text={cleanLine} />
                                  </div>
                                </div>
                              );
                            })}
                          </li>
                        );
                      }
                      return (
                        <li key={pIdx} className="flex items-start space-x-2.5 text-sm sm:text-base text-[#334155] dark:text-[#CBD5E1]">
                          <span className="inline-block w-2 h-2 rounded-full bg-[#06B6D4] mt-2 shrink-0" />
                          <div className="flex-1 text-justify leading-relaxed">
                            <LatexRenderer text={pt} />
                          </div>
                        </li>
                      );
                    })}
                  </ul>

                  {section.latexEquations && section.latexEquations.length > 0 && (
                    <div className="mt-3 p-3.5 rounded-xl bg-[#ECFEFF]/60 dark:bg-[#06B6D4]/5 border border-[#CFFAFE] dark:border-[#06B6D4]/20">
                      <div className="text-xs font-semibold text-[#164E63] dark:text-[#38BDF8] uppercase tracking-wider mb-2">
                        Phương trình hoá học / Phương trình điện li:
                      </div>
                      <div className="space-y-2">
                        {section.latexEquations.map((eq, eqIdx) => (
                          <div key={eqIdx} className="bg-white dark:bg-[#111827] px-3 py-2 rounded-lg text-center font-medium shadow-2xs overflow-x-auto">
                            <LatexRenderer text={eq} displayMode={true} />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Important Formulas Grid */}
      {theoryData.formulas && theoryData.formulas.length > 0 && (
        <div className="bg-white dark:bg-[#1F2937] p-5 sm:p-6 rounded-2xl border border-[#E2E8F0] dark:border-[#334155] shadow-xs">
          <div className="flex items-center space-x-2 mb-4">
            <div className="p-1.5 rounded-lg bg-[#CFFAFE] dark:bg-[#06B6D4]/20 text-[#06B6D4]">
              <Calculator className="w-5 h-5" />
            </div>
            <h2 className="text-lg font-bold text-[#0F172A] dark:text-[#F8FAFC]">
              Công thức trọng tâm cần nhớ
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {theoryData.formulas.map((form, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[#F8FAFC] dark:bg-[#111827] border border-[#E2E8F0] dark:border-[#334155] flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-semibold text-sm text-[#0F172A] dark:text-[#F8FAFC] mb-2">
                    <LatexRenderer text={form.name} />
                  </h3>
                  <div className="py-2.5 px-3 rounded-lg bg-white dark:bg-[#1F2937] border border-[#E2E8F0] dark:border-[#334155] text-center my-2 overflow-x-auto space-y-1.5">
                    {form.latex.split('\n').filter(Boolean).map((line, eqI) => (
                      <LatexRenderer key={eqI} text={line} displayMode={true} />
                    ))}
                  </div>
                  <div className="text-xs sm:text-sm text-[#64748B] dark:text-[#94A3B8] mt-2">
                    <LatexRenderer text={form.description} />
                  </div>
                </div>
                {form.notes && (
                  <div className="mt-3 text-xs text-[#D4A017] font-medium bg-[#F6E7B2]/30 dark:bg-[#D4A017]/10 p-2 rounded-lg">
                    <span>Lưu ý: </span>
                    <LatexRenderer text={form.notes} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Practical Examples */}
      {theoryData.examples && theoryData.examples.length > 0 && (
        <div className="bg-white dark:bg-[#1F2937] p-5 sm:p-6 rounded-2xl border border-[#E2E8F0] dark:border-[#334155] shadow-xs">
          <div className="flex items-center space-x-2 mb-4">
            <div className="p-1.5 rounded-lg bg-[#22C55E]/20 text-[#22C55E]">
              <Sparkles className="w-5 h-5" />
            </div>
            <h2 className="text-lg font-bold text-[#0F172A] dark:text-[#F8FAFC]">
              Ví dụ minh hoạ & bài toán điển hình
            </h2>
          </div>

          <div className="space-y-4">
            {theoryData.examples.map((ex, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-xl bg-[#F8FAFC] dark:bg-[#111827] border border-[#E2E8F0] dark:border-[#334155]"
              >
                <h3 className="font-bold text-base text-[#164E63] dark:text-[#38BDF8] mb-2">
                  <LatexRenderer text={ex.title} />
                </h3>
                <div className="text-sm sm:text-base text-[#334155] dark:text-[#CBD5E1] whitespace-pre-line leading-relaxed text-justify">
                  <LatexRenderer text={ex.content} />
                </div>
                {ex.solution && (
                  <div className="mt-3 pt-3 border-t border-[#E2E8F0] dark:border-[#334155] text-xs sm:text-sm text-[#0891B2] dark:text-[#38BDF8] text-justify leading-relaxed">
                    <strong>Hướng dẫn giải:</strong> <LatexRenderer text={ex.solution} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Common Mistakes vs Tips Side-by-side */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Common Mistakes */}
        <div className="bg-white dark:bg-[#1F2937] p-5 sm:p-6 rounded-2xl border border-[#EF4444]/30 dark:border-[#EF4444]/20 shadow-xs">
          <div className="flex items-center space-x-2 mb-3">
            <AlertTriangle className="w-5 h-5 text-[#EF4444]" />
            <h2 className="text-base sm:text-lg font-bold text-[#EF4444]">
              Sai sót dễ mắc phải
            </h2>
          </div>
          <div className="space-y-3">
            {theoryData.commonMistakes.map((item, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-[#FEF2F2] dark:bg-[#EF4444]/10 text-xs sm:text-sm space-y-1">
                <div className="text-[#991B1B] dark:text-[#FCA5A5] font-semibold flex items-start gap-1.5">
                  <span className="text-[#EF4444]">✗</span>
                  <LatexRenderer text={item.mistake} />
                </div>
                <div className="text-[#15803D] dark:text-[#86EFAC] font-medium flex items-start gap-1.5">
                  <span>✓</span>
                  <LatexRenderer text={item.correction} />
                </div>
                <div className="text-[#64748B] dark:text-[#94A3B8] text-xs pt-1 border-t border-[#FCA5A5]/30">
                  <em>Lý do:</em> <LatexRenderer text={item.why} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Memory Tips */}
        <div className="bg-white dark:bg-[#1F2937] p-5 sm:p-6 rounded-2xl border border-[#D4A017]/30 dark:border-[#D4A017]/20 shadow-xs">
          <div className="flex items-center space-x-2 mb-3">
            <Lightbulb className="w-5 h-5 text-[#D4A017]" />
            <h2 className="text-base sm:text-lg font-bold text-[#D4A017]">
              Mẹo ghi nhớ nhanh
            </h2>
          </div>
          <ul className="space-y-3">
            {theoryData.memoryTips.map((tip, idx) => (
              <li key={idx} className="p-3.5 rounded-xl bg-[#FEFCE8] dark:bg-[#D4A017]/10 text-xs sm:text-sm text-[#854D0E] dark:text-[#FDE047] flex items-start space-x-2">
                <Sparkles className="w-4 h-4 text-[#D4A017] shrink-0 mt-0.5" />
                <div className="flex-1">
                  <LatexRenderer text={tip} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Review Checklist */}
      <div className="bg-[#F8FAFC] dark:bg-[#1E293B] p-5 sm:p-6 rounded-2xl border border-[#E2E8F0] dark:border-[#334155]">
        <h3 className="font-bold text-sm sm:text-base text-[#0F172A] dark:text-[#F8FAFC] mb-3 flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-[#22C55E]" />
          Checklist tự đánh giá kiến thức
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-[#334155] dark:text-[#CBD5E1]">
          {theoryData.reviewChecklist.map((item, idx) => (
            <label key={idx} className="flex items-center space-x-2 p-2 rounded-lg bg-white dark:bg-[#111827] border border-[#E2E8F0] dark:border-[#334155] cursor-pointer hover:border-[#06B6D4] transition-colors">
              <input type="checkbox" className="rounded text-[#06B6D4] focus:ring-[#06B6D4] w-4 h-4 cursor-pointer" />
              <span className="flex-1">
                <LatexRenderer text={item} />
              </span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};
