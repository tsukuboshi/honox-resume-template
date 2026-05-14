export interface MarkdownSection {
	title: string;
	content: string;
	level: number;
	id: string;
}

export interface SectionItem {
	id: string;
	title: string;
	content: string;
	level: number;
}

export interface DownloadButtonProps {
	type: "markdown" | "pdf";
	isLoading: boolean;
	onClick: () => void;
}

export interface ToggleButtonProps {
	title: string;
	level: number;
	isOpen: boolean;
	onClick: () => void;
}

export interface BulkToggleButtonProps {
	allOpen: boolean;
	onClick: () => void;
}

export interface SectionHeaderProps {
	title: string;
	level: number;
	className?: string;
}

export interface CollapsibleSectionProps {
	title: string;
	content: string;
	level: number;
	defaultOpen?: boolean;
}

export interface SectionGroupProps {
	section: SectionItem;
	subsections: SectionItem[];
}

export interface GroupedSection {
	type: "intro" | "h3-group" | "regular";
	section: SectionItem;
	subsections?: SectionItem[];
}

export interface SubsectionItemProps {
	subsection: SectionItem;
	isOpen: boolean;
	onToggle: () => void;
}

export interface SectionGroupHeaderProps {
	title: string;
	hasSubsections: boolean;
	allOpen: boolean;
	onBulkToggle: () => void;
}
