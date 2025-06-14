import { useState } from 'hono/jsx';
import { renderMarkdownContent } from '../lib/markdown';

interface ToggleSectionProps {
  title: string;
  content: string;
  level: number;
  defaultOpen?: boolean;
}

export default function ToggleSection({ title, content, level, defaultOpen = false }: ToggleSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const headingClass = level === 4
    ? 'text-lg font-semibold text-gray-800'
    : level === 3
    ? 'text-xl font-semibold text-blue-900'
    : level === 2
    ? 'text-2xl font-bold text-gray-800'
    : 'text-3xl font-bold text-gray-900';

  if (level !== 4) {
    return (
      <div className="mb-6">
        <h2
          className={headingClass + ' mb-4'}
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: renderMarkdownContent(content, title) }}
        />
      </div>
    );
  }

  return (
    <div className="mb-6 border border-gray-200 rounded-lg">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 w-full text-left p-4 hover:bg-gray-50 transition-colors rounded-lg"
      >
        <span className={`transform transition-transform text-gray-500 ${isOpen ? 'rotate-90' : ''}`}>
          ▶
        </span>
        <span
          className={headingClass}
          dangerouslySetInnerHTML={{ __html: title }}
        />
      </button>
      {isOpen && (
        <div className="px-4 pb-4 border-t border-gray-100">
          <div
            className="prose max-w-none pt-3"
            dangerouslySetInnerHTML={{ __html: renderMarkdownContent(content, title) }}
          />
        </div>
      )}
    </div>
  );
}
