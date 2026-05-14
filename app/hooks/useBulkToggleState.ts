import { useEffect, useState } from "hono/jsx";
import type { SectionItem } from "@/types";

export const useBulkToggleState = (subsections: SectionItem[]) => {
	const [toggleStates, setToggleStates] = useState<{ [key: string]: boolean }>(
		{},
	);
	const [allOpen, setAllOpen] = useState(false);

	useEffect(() => {
		const initialStates: { [key: string]: boolean } = {};
		subsections.forEach((sub) => {
			initialStates[sub.id] = false;
		});
		setToggleStates(initialStates);
	}, [subsections]);

	useEffect(() => {
		const openCount = Object.values(toggleStates).filter(Boolean).length;
		setAllOpen(openCount === subsections.length && subsections.length > 0);
	}, [toggleStates, subsections.length]);

	const handleToggle = (id: string) => {
		setToggleStates((prev) => ({
			...prev,
			[id]: !prev[id],
		}));
	};

	const handleBulkToggle = () => {
		const newState = !allOpen;
		const newStates: { [key: string]: boolean } = {};
		subsections.forEach((sub) => {
			newStates[sub.id] = newState;
		});
		setToggleStates(newStates);
		setAllOpen(newState);
	};

	return {
		toggleStates,
		allOpen,
		handleToggle,
		handleBulkToggle,
	};
};
