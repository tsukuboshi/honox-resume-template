import { SectionHeader } from '../ui/SectionHeader';

// トグルボタンコンポーネント
interface ToggleButtonProps {
  title: string;
  level: number;
  isOpen: boolean;
  onClick: () => void;
}

export const ToggleButton = ({ title, level, isOpen, onClick }: ToggleButtonProps) => (
  <button
    onClick={onClick}
    className="flex items-center gap-3 w-full text-left p-4 hover:bg-gray-50 transition-colors rounded-lg"
  >
    <span className={`transform transition-transform text-gray-500 ${isOpen ? 'rotate-90' : ''}`}>
      ▶
    </span>
    <SectionHeader title={title} level={level} />
  </button>
);
