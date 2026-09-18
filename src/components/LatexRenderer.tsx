import React, { useEffect, useRef } from 'react';
import katex from 'katex';
import renderMathInElement from 'katex/dist/contrib/auto-render';

interface LatexRendererProps {
  text: string;
  className?: string;
  displayMode?: boolean;
}

function fixVietnameseInMathCondition(cond: string): string {
  if (!cond) return '';
  // If the condition already contains \text{...}, return as is
  if (cond.includes('\\text{')) return cond;

  // Wrap non-TeX non-chemical words in \text{...}
  return cond.replace(/([a-zA-ZàáảãạăằắẳẵặâầấẩẫậèéẻẽẹêềếểễệìíỉĩịòóỏõọôồốổỗộơờớởỡợùúủũụưừứửữựỳýỷỹỵđĐ]+)/g, (word) => {
    // Keep chemical formulas, element symbols, math variables
    if (/^(H2SO4|NaOH|KOH|C2H5OH|HgSO4|KMnO4|H3PO4|CuO|Cu|HNO3|Pd|PbCO3|CO2|H2O|O2|H2|t|p|xt)$/i.test(word)) {
      return word;
    }
    // If pure ASCII without Vietnamese accented chars or words like 'đặc'
    if (/^[a-zA-Z0-9_]+$/.test(word) && !/[àáảãạăằắẳẵặâầấẩẫậèéẻẽẹêềếểễệìíỉĩịòóỏõọôồốổỗộơờớởỡợùúủũụưừứửữựỳýỷỹỵđĐ]/.test(word)) {
      return word;
    }
    return `\\text{${word}}`;
  });
}

export function sanitizeLatexText(input: string): string {
  if (!input || typeof input !== 'string') return '';

  let sanitized = input;

  // 1. Convert carriage return followed by LaTeX macro name back to proper LaTeX commands
  sanitized = sanitized.replace(/\r(ightarrow|ightleftharpoons|equires|ight)/gi, (_, p1) => '\\' + p1);
  sanitized = sanitized.replace(/\r/g, '');

  // 2. Fix unescaped Rightarrow, rightarrow, rightleftharpoons, xrightarrow, longrightarrow anywhere in text
  sanitized = sanitized.replace(/(?<!\\)\b(x|xt)rightarrow\b/g, '\\xrightarrow');
  sanitized = sanitized.replace(/(?<!\\)\brightleftharpoons\b/g, '\\rightleftharpoons');
  sanitized = sanitized.replace(/(?<!\\)\brightarrow\b/g, '\\rightarrow');
  sanitized = sanitized.replace(/(?<!\\)\bRightarrow\b/g, '\\Rightarrow');
  sanitized = sanitized.replace(/(?<!\\)\blongrightarrow\b/g, '\\longrightarrow');

  // 3. Convert degree symbol ° or ^o in temperature conditions -> ^\circ
  sanitized = sanitized.replace(/\^o\b/g, '^\\circ');
  sanitized = sanitized.replace(/(\d+|t)\s*°\s*C?/gi, (match, val) => `${val}^\\circ C`);
  sanitized = sanitized.replace(/°/g, '^\\circ');

  // 4. Ensure conditions in \xrightarrow{...} or \xrightarrow[...] handle Vietnamese words safely
  sanitized = sanitized.replace(/\\xrightarrow\s*(\[[^\]]*\])?\s*\{([^}]*)\}/g, (match, optBracket, arg) => {
    let fixedOpt = optBracket;
    if (fixedOpt) {
      const inner = fixedOpt.slice(1, -1);
      fixedOpt = `[${fixVietnameseInMathCondition(inner)}]`;
    }
    const fixedArg = fixVietnameseInMathCondition(arg);
    return `\\xrightarrow${fixedOpt || ''}{${fixedArg}}`;
  });

  // 5. Ensure reaction equations containing \xrightarrow, \rightarrow, \rightleftharpoons are wrapped in $...$ if not inside math delimiters
  if (!sanitized.includes('$') && !sanitized.startsWith('\\[')) {
    if (/\\(xrightarrow|rightarrow|rightleftharpoons|longrightarrow)/.test(sanitized)) {
      sanitized = `$${sanitized}$`;
    }
  }

  return sanitized;
}

/**
 * Official KaTeX Auto-Renderer for Chemical & Mathematical Expressions
 * Accurately renders fractions (\\frac{a}{b}, Kc, Ka, etc.), chemical formulas,
 * reaction equations, superscripts, subscripts, and scientific notations.
 */
export const LatexRenderer: React.FC<LatexRendererProps> = ({
  text,
  className = '',
  displayMode = false,
}) => {
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    if (!text || typeof text !== 'string') {
      el.textContent = '';
      return;
    }

    const trimmed = sanitizeLatexText(text).trim();

    // Check if this is a standalone display formula
    const isExplicitDisplay = trimmed.startsWith('$$') && trimmed.endsWith('$$');
    const isExplicitBracket = trimmed.startsWith('\\[') && trimmed.endsWith('\\]');
    const isDirectFormula = displayMode && !trimmed.includes('\n') && !trimmed.includes('. ') && !trimmed.includes('; ');

    if (displayMode || isExplicitDisplay || isExplicitBracket) {
      let formulaToRender = trimmed;
      if (isExplicitDisplay) {
        formulaToRender = trimmed.slice(2, -2).trim();
      } else if (isExplicitBracket) {
        formulaToRender = trimmed.slice(2, -2).trim();
      } else if (formulaToRender.startsWith('$') && formulaToRender.endsWith('$') && formulaToRender.length > 2) {
        formulaToRender = formulaToRender.slice(1, -1).trim();
      }

      // If it looks like a single formula, try direct katex.render with displayMode: true
      if (isDirectFormula || isExplicitDisplay || isExplicitBracket) {
        try {
          katex.render(formulaToRender, el, {
            displayMode: true,
            throwOnError: false,
            strict: false,
          });
          return;
        } catch {
          // If direct rendering fails, fallback to auto-render below
        }
      }
    }

    // Default: render using KaTeX auto-render on text with mixed prose and formulas
    el.textContent = trimmed;
    try {
      renderMathInElement(el, {
        delimiters: [
          { left: '$$', right: '$$', display: true },
          { left: '\\[', right: '\\]', display: true },
          { left: '\\(', right: '\\)', display: false },
          { left: '$', right: '$', display: false },
        ],
        throwOnError: false,
        strict: false,
      });
    } catch (e) {
      console.error('KaTeX auto-render error:', e);
    }
  }, [text, displayMode]);

  return (
    <span
      ref={containerRef}
      className={`latex-container ${
        displayMode
          ? 'block text-center my-1.5 overflow-x-auto py-1'
          : 'inline whitespace-pre-line'
      } ${className}`}
    />
  );
};
