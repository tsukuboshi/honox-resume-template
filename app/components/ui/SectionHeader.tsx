// セクションヘッダーコンポーネント
interface SectionHeaderProps {
  title: string;
  level: number;
  className?: string;
}

export const SectionHeader = ({ title, level, className }: SectionHeaderProps) => {
  const getHeadingClass = (level: number) => {
    switch (level) {
      case 2: return 'text-2xl font-bold text-gray-800';
      case 3: return 'text-xl font-semibold text-blue-900';
      case 4: return 'text-lg font-semibold text-gray-800';
      default: return 'text-3xl font-bold text-gray-900';
    }
  };

  const headingClass = `${getHeadingClass(level)} ${className || ''}`;

  return (
    <h2
      className={headingClass}
      dangerouslySetInnerHTML={{ __html: title }}
    />
  );
};
