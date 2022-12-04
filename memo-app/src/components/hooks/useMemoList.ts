import { useCallback, useState} from "react";

export const useMemoList = () => {
  // メモ一覧のState
  const [memos, setMemos] = useState<string[]>([]);

    // 追加ボタン押下時
    const addTodo = useCallback((text:string) => {
        // State変更を検知
        const newMemos = [...memos];

        // テキストボックスの入力内容をメモ配列に追加
        newMemos.push(text);
        setMemos(newMemos);

      },[memos]);

    // 削除ボタン押下時
    const deleteTodo = useCallback((index: number) => {

        // State変更を検知
    const newMemos = [...memos];

    // memo配列から該当箇所を削除
    newMemos.splice(index, 1);
    setMemos(newMemos);
    },[memos]);

    return {memos, addTodo, deleteTodo};
};
