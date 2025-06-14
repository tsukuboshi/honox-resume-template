import { useEffect, useState } from "hono/jsx";
import { SectionItem } from "../lib/markdown";

// 一括トグル状態管理カスタムフック
export const useBulkToggleState = (subsections: SectionItem[]) => {
  const [toggleStates, setToggleStates] = useState<{ [key: string]: boolean }>(
    {}
  );
  const [allOpen, setAllOpen] = useState(false);

  // 初期状態で全てのサブセクションを閉じた状態にする
  useEffect(() => {
    const initialStates: { [key: string]: boolean } = {};
    subsections.forEach((sub) => {
      initialStates[sub.id] = false;
    });
    setToggleStates(initialStates);
  }, [subsections]);

  // サブセクションの開閉状態をチェックして一括ボタンの状態を更新
  useEffect(() => {
    const openCount = Object.values(toggleStates).filter(Boolean).length;
    setAllOpen(openCount === subsections.length && subsections.length > 0);
  }, [toggleStates, subsections.length]);

  // 個別のトグル状態を更新
  const handleToggle = (id: string) => {
    setToggleStates((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // 一括でオープン/クローズ
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
