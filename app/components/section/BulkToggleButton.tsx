// 一括トグルボタンコンポーネント
interface BulkToggleButtonProps {
  allOpen: boolean;
  onClick: () => void;
}

export const BulkToggleButton = ({ allOpen, onClick }: BulkToggleButtonProps) => (
  <button
    onClick={onClick}
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
);
