import React, { useState } from 'react';
import { Lesson, ViewMode } from '../types';
import { 
  BookOpen, 
  BrainCircuit, 
  CheckCircle2, 
  Search, 
  ChevronRight, 
  ChevronLeft, 
  Lightbulb, 
  Info, 
  CheckCircle,
  Bookmark
} from 'lucide-react';
import { soundEffects } from '../utils/audio';

interface TheoryViewProps {
  lesson: Lesson;
  onSelectView: (view: ViewMode) => void;
  onSelectLesson: (id: any) => void;
  nextLessonId?: string;
  prevLessonId?: string;
}

export const TheoryView: React.FC<TheoryViewProps> = ({
  lesson,
  onSelectView,
  onSelectLesson,
  nextLessonId,
  prevLessonId,
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSections = lesson.sections.filter(sec => {
    if (!searchTerm.trim()) return true;
    const term = searchTerm.toLowerCase();
    return (
      sec.title.toLowerCase().includes(term) ||
      sec.content.some(c => c.toLowerCase().includes(term)) ||
      sec.keyPoints?.some(k => k.toLowerCase().includes(term))
    );
  });

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 space-y-8 animate-in fade-in duration-300">
      {/* Lesson Banner in Sand Brown & Cyan Gradient */}
      <div className="bg-gradient-to-br from-[#3D2C1D] via-[#154E54] to-[#0A2D32] text-white rounded-3xl p-6 sm:p-8 shadow-md relative overflow-hidden border border-amber-900/40">
        <div className="absolute -right-8 -bottom-8 w-48 h-48 bg-cyan-500/20 rounded-full blur-2xl pointer-events-none" />
        <div className="relative z-10 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="px-3 py-1 text-xs font-bold bg-amber-500/20 border border-amber-300/40 text-amber-200 rounded-full">
              Bài {lesson.number} • SGK Kết nối tri thức
            </span>
            <span className="text-xs text-amber-100/80 font-medium">
              {lesson.pageRange}
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
            {lesson.title}
          </h1>
          <p className="text-sm sm:text-base text-cyan-100/90 max-w-2xl leading-relaxed">
            {lesson.description}
          </p>

          {/* Practice Action Buttons */}
          <div className="pt-4 flex flex-wrap items-center gap-3">
            <button
              onClick={() => {
                soundEffects.playClick();
                onSelectView('flashcards');
              }}
              className="flex items-center gap-2 px-4 py-2.5 bg-cyan-600 hover:bg-cyan-500 text-white text-xs sm:text-sm font-bold rounded-xl shadow-xs transition cursor-pointer select-none active:scale-95 border border-cyan-400/40"
            >
              <BrainCircuit className="w-4 h-4" />
              <span>Ôn Flashcards ({lesson.flashcards.length} thẻ)</span>
            </button>
            <button
              onClick={() => {
                soundEffects.playClick();
                onSelectView('quiz');
              }}
              className="flex items-center gap-2 px-4 py-2.5 bg-amber-600 hover:bg-amber-500 text-white text-xs sm:text-sm font-bold rounded-xl shadow-xs transition cursor-pointer select-none active:scale-95 border border-amber-400/40"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Làm Trắc nghiệm ({lesson.quizQuestions.length} câu)</span>
            </button>
          </div>
        </div>
      </div>

      {/* Search Filter Bar inside Theory */}
      <div className="flex items-center justify-between gap-4 bg-[#FFFDF9] p-3 rounded-2xl border border-amber-200/80 shadow-2xs">
        <div className="relative flex-1">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-amber-700/60" />
          <input
            type="text"
            placeholder="Tìm kiếm từ khóa (ví dụ: electron, Thomson, Pauli, số khối)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-sm bg-amber-50/50 border border-amber-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-cyan-600 text-amber-950 placeholder-amber-800/50 font-medium"
          />
        </div>
        {searchTerm && (
          <button
            onClick={() => setSearchTerm('')}
            className="text-xs text-cyan-700 font-extrabold hover:underline cursor-pointer select-none px-2"
          >
            Xóa tìm kiếm
          </button>
        )}
      </div>

      {/* Sections List */}
      <div className="space-y-8">
        {filteredSections.length === 0 ? (
          <div className="text-center py-12 bg-[#FFFDF9] rounded-2xl border border-amber-200/80 p-8 space-y-3">
            <Info className="w-10 h-10 text-cyan-600 mx-auto" />
            <p className="text-base font-semibold text-amber-950">Không tìm thấy nội dung phù hợp với "{searchTerm}"</p>
            <button
              onClick={() => setSearchTerm('')}
              className="px-4 py-2 text-xs font-bold bg-cyan-50 text-cyan-800 rounded-xl border border-cyan-200 hover:bg-cyan-100"
            >
              Xem tất cả nội dung
            </button>
          </div>
        ) : (
          filteredSections.map(sec => (
            <article 
              key={sec.id}
              className="bg-[#FFFDF9] rounded-2xl border border-amber-200/80 p-6 sm:p-8 shadow-2xs hover:shadow-xs transition space-y-6"
            >
              {/* Section Header */}
              <div className="flex items-start gap-3 border-b border-amber-100 pb-4">
                <div className="p-2 bg-cyan-100/80 text-cyan-800 rounded-xl mt-0.5">
                  <Bookmark className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-amber-950 leading-snug">
                    {sec.title}
                  </h2>
                </div>
              </div>

              {/* Section Text Paragraphs */}
              <div className="space-y-3 text-amber-900 leading-relaxed text-sm sm:text-base font-normal">
                {sec.content.map((p, idx) => (
                  <p key={idx} className={p.startsWith('•') ? 'pl-4 font-semibold text-amber-950' : ''}>
                    {p}
                  </p>
                ))}
              </div>

              {/* Data Table if available */}
              {sec.tableData && (
                <div className="overflow-x-auto rounded-xl border border-amber-200 shadow-2xs my-4">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse">
                    <thead>
                      <tr className="bg-[#114B53] text-white font-semibold">
                        {sec.tableData.headers.map((h, i) => (
                          <th key={i} className="p-3 border-b border-cyan-800 whitespace-nowrap">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-amber-200/60 bg-amber-50/30">
                      {sec.tableData.rows.map((row, rIdx) => (
                        <tr key={rIdx} className="hover:bg-cyan-50/60 transition-colors">
                          {row.map((cell, cIdx) => (
                            <td key={cIdx} className={`p-3 font-medium whitespace-nowrap ${cIdx === 0 ? 'font-bold text-cyan-950 bg-cyan-50/40' : 'text-amber-900'}`}>
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Key Points Highlight Box in Cyan */}
              {sec.keyPoints && sec.keyPoints.length > 0 && (
                <div className="bg-cyan-50/80 border border-cyan-200/90 rounded-xl p-4 space-y-2">
                  <div className="flex items-center gap-2 text-cyan-950 font-extrabold text-sm">
                    <CheckCircle className="w-4 h-4 text-cyan-700" />
                    <span>Kiến thức trọng tâm:</span>
                  </div>
                  <ul className="space-y-1.5 pl-6 list-disc text-xs sm:text-sm text-cyan-950 font-medium">
                    {sec.keyPoints.map((kp, kIdx) => (
                      <li key={kIdx}>{kp}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Callout Box in Sand Gold */}
              {sec.callout && (
                <div className="bg-amber-100/80 border border-amber-300 rounded-xl p-4 flex items-start gap-3">
                  <Lightbulb className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                  <div className="space-y-1 text-xs sm:text-sm">
                    <h4 className="font-bold text-amber-950">{sec.callout.title}</h4>
                    <p className="text-amber-900 leading-relaxed font-medium">{sec.callout.text}</p>
                  </div>
                </div>
              )}
            </article>
          ))
        )}
      </div>

      {/* Lesson Navigation Footer */}
      <div className="flex items-center justify-between pt-6 border-t border-amber-200/80">
        {prevLessonId ? (
          <button
            onClick={() => {
              soundEffects.playClick();
              onSelectLesson(prevLessonId);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2 px-4 py-2.5 bg-[#FFFDF9] border border-amber-300 text-amber-900 font-extrabold text-xs sm:text-sm rounded-xl hover:bg-amber-100/50 transition cursor-pointer select-none active:scale-95 shadow-2xs"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Bài trước</span>
          </button>
        ) : <div />}

        {nextLessonId ? (
          <button
            onClick={() => {
              soundEffects.playClick();
              onSelectLesson(nextLessonId);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2 px-4 py-2.5 bg-cyan-700 text-white font-extrabold text-xs sm:text-sm rounded-xl hover:bg-cyan-600 transition cursor-pointer select-none active:scale-95 shadow-xs"
          >
            <span>Bài tiếp theo</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        ) : <div />}
      </div>
    </div>
  );
};
