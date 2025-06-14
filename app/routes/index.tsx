import { parseMarkdownSimple, renderMarkdownContent, SectionItem } from '../lib/markdown';
import CollapsibleSection from '../islands/CollapsibleSection';
import SectionGroup from '../islands/SectionGroup';
import DownloadSection from '../islands/DownloadSection';
// Viteの?rawクエリを使ってビルド時にファイルを読み込む
import markdownContent from '../../public/README.md?raw';

// グループ化されたセクションの型定義
interface GroupedSection {
  type: 'intro' | 'h3-group' | 'regular';
  section: SectionItem;
  subsections?: SectionItem[];
}

export default function Home() {
  const sections = parseMarkdownSimple(markdownContent);

  // セクションをレベルごとにグループ化する関数
  const groupSections = (sections: SectionItem[]): GroupedSection[] => {
    const grouped: GroupedSection[] = [];
    let currentH3: SectionItem | null = null;
    let currentH3Subsections: SectionItem[] = [];

    sections.forEach((section) => {
      if (!section.title && section.level === 0) {
        // イントロセクション
        grouped.push({ type: 'intro', section });
      } else if (section.level === 1 || section.level === 2) {
        // H1, H2は通常のCollapsibleSectionとして処理
        if (currentH3) {
          grouped.push({ type: 'h3-group', section: currentH3, subsections: currentH3Subsections });
          currentH3 = null;
          currentH3Subsections = [];
        }
        grouped.push({ type: 'regular', section });
      } else if (section.level === 3) {
        // 前のH3グループがあれば先に追加
        if (currentH3) {
          grouped.push({ type: 'h3-group', section: currentH3, subsections: currentH3Subsections });
        }
        // 新しいH3グループを開始
        currentH3 = section;
        currentH3Subsections = [];
      } else if (section.level === 4 && currentH3) {
        // H4はcurrentH3のサブセクションとして追加
        currentH3Subsections.push(section);
      } else {
        // その他（H4だがH3がない場合など）
        if (currentH3) {
          grouped.push({ type: 'h3-group', section: currentH3, subsections: currentH3Subsections });
          currentH3 = null;
          currentH3Subsections = [];
        }
        grouped.push({ type: 'regular', section });
      }
    });

    // 最後のH3グループがあれば追加
    if (currentH3) {
      grouped.push({ type: 'h3-group', section: currentH3, subsections: currentH3Subsections });
    }

    return grouped;
  };

  const groupedSections = groupSections(sections);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto py-8 px-4">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">職務経歴書</h1>
          <DownloadSection />
        </header>

        <main className="bg-white rounded-lg shadow-lg p-8">
          {groupedSections.map((group, index) => {
            if (group.type === 'intro') {
              // イントロセクション（タイトルなし）
              return (
                <div
                  key={group.section.id}
                  className="mb-8"
                  dangerouslySetInnerHTML={{
                    __html: `<p class="mb-4">${renderMarkdownContent(group.section.content)}</p>`
                  }}
                />
              );
            } else if (group.type === 'h3-group') {
              // H3セクションとその配下のH4項目
              return (
                <SectionGroup
                  key={group.section.id}
                  section={group.section}
                  subsections={group.subsections || []}
                />
              );
            } else {
              // 通常のセクション（H1, H2など）
              const processedContent = renderMarkdownContent(group.section.content);
              return (
                <CollapsibleSection
                  key={group.section.id}
                  title={group.section.title}
                  content={processedContent}
                  level={group.section.level}
                  defaultOpen={group.section.level <= 2}
                />
              );
            }
          })}
        </main>

        <footer className="text-center mt-12 text-gray-500">
          <p>Built with HonoX on GitHub Pages</p>
        </footer>
      </div>
    </div>
  );
}
