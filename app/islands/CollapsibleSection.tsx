import { useState } from 'hono/jsx';
import { renderMarkdownContent } from '../lib/markdown';
import { SectionHeader } from '../components/ui/SectionHeader';
import { ToggleButton } from '../components/section/ToggleButton';

interface CollapsibleSectionProps {
  title: string;
  content: string;
  level: number;
  defaultOpen?: boolean;
}

export default function CollapsibleSection({ title, content, level, defaultOpen = false }: CollapsibleSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  // レベル4以外は通常の表示（トグル機能なし）
  if (level !== 4) {
    return (
      <div className="mb-6">
        <SectionHeader title={title} level={level} className="mb-4" />
        <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: renderMarkdownContent(content, title) }}
        />
      </div>
    );
  }

  // レベル4はトグル機能付き
  return (
    <div className="mb-6 border border-gray-200 rounded-lg">
      <ToggleButton
        title={title}
        level={level}
        isOpen={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      />
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
