import { useState } from "hono/jsx";
import { DownloadButton } from "@/app/components/download/DownloadButton";

export default function DownloadSection() {
	const [isDownloading, setIsDownloading] = useState<string | null>(null);

	const handleDownload = async (fileType: "markdown" | "pdf") => {
		setIsDownloading(fileType);

		try {
			const fileName = fileType === "markdown" ? "README.md" : "README.pdf";
			const url = `${__BASE_PATH__}${fileName}`;

			const link = document.createElement("a");
			link.href = url;
			link.download = fileName;
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
		} catch (error) {
			console.error("Download failed:", error);
		} finally {
			setIsDownloading(null);
		}
	};

	return (
		<div className="flex flex-col sm:flex-row gap-3 items-center justify-center mb-8">
			<DownloadButton
				type="markdown"
				isLoading={isDownloading === "markdown"}
				onClick={() => handleDownload("markdown")}
			/>
			<DownloadButton
				type="pdf"
				isLoading={isDownloading === "pdf"}
				onClick={() => handleDownload("pdf")}
			/>
		</div>
	);
}
