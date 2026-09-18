import React, { useState, useEffect, useRef } from 'react';
import { 
  Search, 
  X, 
  BookOpen, 
  Layers, 
  HelpCircle, 
  Calculator,
  ArrowRight
} from 'lucide-react';
import { LessonId } from '../types';
import { searchContent, SearchResultItem } from '../data';
import { LatexRenderer } from './LatexRenderer';

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectResult: (type: 'theory' | 'flashcard' | 'quiz' | 'formula', lessonId: LessonId | 'final-exam') => void;
}

export const GlobalSearchModal: React.FC<GlobalSearchModalProps> = ({
  isOpen,
  onClose,
  onSelectResult,
}) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResultItem[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    } else {
      setQuery('');
      setResults([]);
    }
  }, [isOpen]);

  useEffect(() => {
    if (query.trim().length > 0) {
      const found = searchContent(query);
      setResults(found);
    } else {
      setResults([]);
    }
  }, [query]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Open handled by parent
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/50 backdrop-blur-xs animate-fadeIn">
      <div 
        className="w-full max-w-2xl bg-white dark:bg-[#1E293B] rounded-3xl border border-[#E2E8F0] dark:border-[#334155] shadow-2xl overflow-hidden flex flex-col max-h-[80vh] transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Header */}
        <div className="flex items-center px-4 py-3.5 border-b border-[#E2E8F0] dark:border-[#334155]">
          <Search className="w-5 h-5 text-[#06B6D4] shrink-0 mr-3" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Tìm kiếm lý thuyết, công thức (Kc, pH, Kw), thẻ nhớ, câu hỏi trắc nghiệm..."
            className="w-full bg-transparent text-sm sm:text-base text-[#0F172A] dark:text-[#F8FAFC] placeholder-[#94A3B8] outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-[#94A3B8] hover:text-[#0F172A] dark:hover:text-white mr-1 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs px-2 py-1 rounded-md bg-[#F1F5F9] dark:bg-[#111827] text-[#64748B] dark:text-[#94A3B8] hover:bg-[#E2E8F0] cursor-pointer"
          >
            ESC
          </button>
        </div>

        {/* Results Body */}
        <div className="overflow-y-auto p-4 space-y-2 flex-1 scrollbar-thin">
          {query.trim().length === 0 ? (
            <div className="py-10 text-center text-xs sm:text-sm text-[#64748B] dark:text-[#94A3B8] space-y-3">
              <p>Gợi ý từ khóa phổ biến:</p>
              <div className="flex flex-wrap items-center justify-center gap-2 max-w-md mx-auto">
                {['Kc', 'pH', 'Le Chatelier', 'Chất điện li', 'Brønsted - Lowry', 'Chuẩn độ', 'Thuỷ phân ion', 'Thạch nhũ'].map((kw) => (
                  <button
                    key={kw}
                    onClick={() => setQuery(kw)}
                    className="px-2.5 py-1 rounded-lg bg-[#F1F5F9] dark:bg-[#111827] text-[#0891B2] dark:text-[#38BDF8] hover:bg-[#ECFEFF] text-xs font-medium cursor-pointer"
                  >
                    {kw}
                  </button>
                ))}
              </div>
            </div>
          ) : results.length > 0 ? (
            results.map((item) => {
              let icon = <BookOpen className="w-4 h-4 text-[#06B6D4]" />;
              let badge = 'Lý Thuyết';
              let badgeColor = 'bg-[#ECFEFF] text-[#0891B2] dark:bg-[#06B6D4]/20 dark:text-[#38BDF8]';

              if (item.type === 'flashcard') {
                icon = <Layers className="w-4 h-4 text-[#22C55E]" />;
                badge = 'Thẻ Nhớ';
                badgeColor = 'bg-[#DCFCE7] text-[#15803D] dark:bg-[#22C55E]/20 dark:text-[#86EFAC]';
              } else if (item.type === 'quiz') {
                icon = <HelpCircle className="w-4 h-4 text-[#D4A017]" />;
                badge = 'Trắc Nghiệm';
                badgeColor = 'bg-[#FEF9C3] text-[#A16207] dark:bg-[#D4A017]/20 dark:text-[#FDE047]';
              } else if (item.type === 'formula') {
                icon = <Calculator className="w-4 h-4 text-[#8B5CF6]" />;
                badge = 'Công Thức';
                badgeColor = 'bg-[#EDE9FE] text-[#6D28D9] dark:bg-[#8B5CF6]/20 dark:text-[#C4B5FD]';
              }

              return (
                <div
                  key={item.id}
                  onClick={() => {
                    onSelectResult(item.type, item.lessonId);
                    onClose();
                  }}
                  className="p-3 rounded-2xl bg-[#F8FAFC] dark:bg-[#111827] border border-[#E2E8F0] dark:border-[#334155] hover:border-[#06B6D4] hover:bg-white dark:hover:bg-[#1E293B] transition-all cursor-pointer group flex items-start justify-between gap-3"
                >
                  <div className="space-y-1 flex-1">
                    <div className="flex items-center space-x-2">
                      <span className="p-1 rounded-md bg-white dark:bg-[#1F2937] shadow-2xs">
                        {icon}
                      </span>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${badgeColor}`}>
                        {badge}
                      </span>
                      <span className="text-xs text-[#94A3B8]">
                        {item.lessonTitle}
                      </span>
                    </div>
                    <div className="font-semibold text-xs sm:text-sm text-[#0F172A] dark:text-[#F8FAFC]">
                      <LatexRenderer text={item.title} />
                    </div>
                    <div className="text-xs text-[#64748B] dark:text-[#94A3B8] line-clamp-2">
                      <LatexRenderer text={item.snippet} />
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#94A3B8] group-hover:text-[#06B6D4] group-hover:translate-x-0.5 transition-all mt-2 shrink-0" />
                </div>
              );
            })
          ) : (
            <div className="py-12 text-center text-[#64748B] dark:text-[#94A3B8]">
              <p className="text-sm font-semibold">Không tìm thấy nội dung phù hợp cho "{query}"</p>
              <p className="text-xs mt-1">Hãy thử tìm theo tên công thức hoặc khái niệm trong Chương 1.</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-4 py-2.5 bg-[#F1F5F9] dark:bg-[#111827] border-t border-[#E2E8F0] dark:border-[#334155] flex items-center justify-between text-[11px] text-[#64748B] dark:text-[#94A3B8]">
          <span>Gõ từ khóa để tra cứu toàn bộ nội dung Chương 1</span>
          <span>Nhấn ESC để đóng</span>
        </div>
      </div>
    </div>
  );
};
