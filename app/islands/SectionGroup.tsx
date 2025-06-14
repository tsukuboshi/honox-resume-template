import { renderMarkdownContent, SectionItem } from '../lib/markdown';
import { useBulkToggleState } from '../hooks/useBulkToggleState';
import { BulkToggleButton } from '../components/section/BulkToggleButton';

interface SectionGroupProps {
  section: SectionItem;
  subsections: SectionItem[];
}

// セクションヘッダーコンポーネント
interface SectionHeaderProps {
  title: string;
  hasSubsections: boolean;
  allOpen: boolean;
  onBulkToggle: () => void;
}

const SectionHeader = ({ title, hasSubsections, allOpen, onBulkToggle }: SectionHeaderProps) => (
  <div className="flex items-center justify-between mb-4">
    <h3
      className="text-xl font-semibold text-blue-900"
      dangerouslySetInnerHTML={{ __html: title }}
    />
    {hasSubsections && (
      <BulkToggleButton allOpen={allOpen} onClick={onBulkToggle} />
    )}
  </div>
);

// サブセクションアイテムコンポーネント
interface SubsectionItemProps {
  subsection: SectionItem;
  isOpen: boolean;
  onToggle: () => void;
}

const SubsectionItem = ({ subsection, isOpen, onToggle }: SubsectionItemProps) => (
  <div className="mb-4 border border-gray-200 rounded-lg">
    <button
      onClick={onToggle}
      className="flex items-center gap-3 w-full text-left p-4 hover:bg-gray-50 transition-colors rounded-lg"
    >
      <span className={`transform transition-transform text-gray-500 ${isOpen ? 'rotate-90' : ''}`}>
        ▶
      </span>
      <span
        className="text-lg font-semibold text-gray-800"
        dangerouslySetInnerHTML={{ __html: subsection.title }}
      />
    </button>
    {isOpen && (
      <div className="px-4 pb-4 border-t border-gray-100">
        <div
          className="prose max-w-none pt-3"
          dangerouslySetInnerHTML={{ __html: renderMarkdownContent(subsection.content, subsection.title) }}
        />
      </div>
    )}
  </div>
);

export default function SectionGroup({ section, subsections }: SectionGroupProps) {
  const { toggleStates, allOpen, handleToggle, handleBulkToggle } = useBulkToggleState(subsections);

  return (
    <div className="mb-8">
      {/* H3セクションのヘッダー */}
      <SectionHeader
        title={section.title}
        hasSubsections={subsections.length > 0}
        allOpen={allOpen}
        onBulkToggle={handleBulkToggle}
      />

      {/* H3セクションのコンテンツ */}
      {section.content.trim() && (
        <div
          className="prose max-w-none mb-6"
          dangerouslySetInnerHTML={{ __html: renderMarkdownContent(section.content, section.title) }}
        />
      )}

      {/* H4サブセクション（トグル可能） */}
      {subsections.map((subsection) => (
        <SubsectionItem
          key={subsection.id}
          subsection={subsection}
          isOpen={toggleStates[subsection.id] || false}
          onToggle={() => handleToggle(subsection.id)}
        />
      ))}
    </div>
  );
}
