declare module 'katex/dist/contrib/auto-render' {
  interface AutoRenderOptions {
    delimiters?: Array<{
      left: string;
      right: string;
      display: boolean;
    }>;
    ignoredTags?: string[];
    ignoredClasses?: string[];
    errorCallback?: (msg: string, err: Error) => void;
    preProcess?: (math: string) => string;
    throwOnError?: boolean;
    errorColor?: string;
    macros?: Record<string, string>;
    colorIsTextColor?: boolean;
    maxSize?: number;
    maxExpand?: number;
    allowedProtocols?: string[];
    strict?: boolean | string | ((errorCode: string) => string);
    trust?: boolean | ((context: Record<string, unknown>) => boolean);
    output?: 'html' | 'mathml' | 'htmlAndMathml';
    leqno?: boolean;
    fleqn?: boolean;
    minRuleThickness?: number;
  }

  function renderMathInElement(
    elem: HTMLElement,
    options?: AutoRenderOptions
  ): void;

  export default renderMathInElement;
}
