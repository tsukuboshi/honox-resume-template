import { useState, useRef, useEffect } from 'hono/jsx';
import { renderMarkdownContent, SectionItem } from '../lib/markdown';

interface SectionWithBulkToggleProps {
  section: SectionItem;
  subsections: SectionItem[];
}

export default function SectionWithBulkToggle({ section, subsections }: SectionWithBulkToggleProps) {
  const [toggleStates, setToggleStates] = useState<{ [key: string]: boolean }>({});
  const [allOpen, setAllOpen] = useState(false);

  // 初期状態で全てのサブセクションを閉じた状態にする
  useEffect(() => {
    const initialStates: { [key: string]: boolean } = {};
    subsections.forEach(sub => {
      initialStates[sub.id] = false;
    });
    setToggleStates(initialStates);
  }, [subsections]);

  // 個別のトグル状態を更新
  const handleToggle = (id: string) => {
    setToggleStates(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // 一括でオープン/クローズ
  const handleBulkToggle = () => {
    const newState = !allOpen;
    const newStates: { [key: string]: boolean } = {};
    subsections.forEach(sub => {
      newStates[sub.id] = newState;
    });
    setToggleStates(newStates);
    setAllOpen(newState);
  };

  // サブセクションの開閉状態をチェックして一括ボタンの状態を更新
  useEffect(() => {
    const openCount = Object.values(toggleStates).filter(Boolean).length;
    setAllOpen(openCount === subsections.length && subsections.length > 0);
  }, [toggleStates, subsections.length]);

  const headingClass = 'text-xl font-semibold text-blue-900';

  return (
    <div className="mb-8">
      {/* H3セクションのヘッダー */}
      <div className="flex items-center justify-between mb-4">
        <h3
          className={headingClass}
          dangerouslySetInnerHTML={{ __html: section.title }}
        />
        {subsections.length > 0 && (
          <button
            onClick={handleBulkToggle}
            className={`px-3 py-1 text-sm rounded-md transition-colors flex items-center gap-2 ${
              allOpen
                ? 'bg-red-100 hover:bg-red-200 text-red-700'
                : 'bg-blue-100 hover:bg-blue-200 text-blue-700'
            }`}
          >
            <span className="text-xs">
              {allOpen ? '全て閉じる' : '全て開く'}
            </span>
            <span className={`transform transition-transform ${allOpen ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </button>
        )}
      </div>

      {/* H3セクションのコンテンツ */}
      {section.content.trim() && (
        <div
          className="prose max-w-none mb-6"
          dangerouslySetInnerHTML={{ __html: renderMarkdownContent(section.content, section.title) }}
        />
      )}

      {/* H4サブセクション（トグル可能） */}
      {subsections.map((subsection) => {
        const isOpen = toggleStates[subsection.id] || false;

        return (
          <div key={subsection.id} className="mb-4 border border-gray-200 rounded-lg">
            <button
              onClick={() => handleToggle(subsection.id)}
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
      })}
    </div>
  );
}
