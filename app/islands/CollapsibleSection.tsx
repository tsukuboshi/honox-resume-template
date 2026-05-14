import { useState } from "hono/jsx";
import { ToggleButton } from "@/app/components/section/ToggleButton";
import { SectionHeader } from "@/app/components/ui/SectionHeader";
import { renderMarkdownContent } from "@/app/lib/markdown";
import type { CollapsibleSectionProps } from "@/types";

export default function CollapsibleSection({
	title,
	content,
	level,
	defaultOpen = false,
}: CollapsibleSectionProps) {
	const [isOpen, setIsOpen] = useState(defaultOpen);

	if (level !== 4) {
		return (
			<div className="mb-6">
				<SectionHeader title={title} level={level} className="mb-4" />
				<div
					className="prose max-w-none"
					dangerouslySetInnerHTML={{
						__html: renderMarkdownContent(content, title),
					}}
				/>
			</div>
		);
	}

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
						dangerouslySetInnerHTML={{
							__html: renderMarkdownContent(content, title),
						}}
					/>
				</div>
			)}
		</div>
	);
}
