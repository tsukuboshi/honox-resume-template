import { LoadingSpinner, MarkdownIcon, PdfIcon } from '../ui/Icon';

// ダウンロードボタンコンポーネント
interface DownloadButtonProps {
  type: 'markdown' | 'pdf';
  isLoading: boolean;
  onClick: () => void;
}

export const DownloadButton = ({ type, isLoading, onClick }: DownloadButtonProps) => {
  const isPdf = type === 'pdf';
  const baseClasses = "flex items-center justify-center gap-2 px-6 py-3 text-white font-medium rounded-lg shadow-md transition-colors duration-200 w-[280px]";
  const colorClasses = isPdf
    ? "bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300"
    : "bg-slate-500 hover:bg-slate-600 disabled:bg-slate-300";

  return (
    <button
      onClick={onClick}
      disabled={isLoading}
      className={`${baseClasses} ${colorClasses}`}
    >
      {isLoading ? (
        <>
          <LoadingSpinner />
          <span>ダウンロード中...</span>
        </>
      ) : (
        <>
          {isPdf ? <PdfIcon /> : <MarkdownIcon />}
          <span>{isPdf ? 'PDFをダウンロード' : 'Markdownをダウンロード'}</span>
        </>
      )}
    </button>
  );
};
