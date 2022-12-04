import { ChangeEvent, useState, FC, useCallback} from "react";
import { MemoList } from "./MemoList";
import styled from "styled-components";
import { useMemoList } from "./hooks/useMemoList"

export const App: FC = () => {

  // テキストボックスのState
  const [text, setText] = useState<string>("");


  // テキストボックス入力時に入力内容をStateに設定
  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }

  const {memos, addTodo, deleteTodo } = useMemoList();

  // 追加ボタン押下時
  const onClickAdd = () => {
    addTodo(text);

    // テキストボックスを空にする
    setText("");
  };

  // 削除ボタン押下時
  const onClickDelete = useCallback((index: number) => {
    deleteTodo(index);

  },[deleteTodo]);


  return(
    <div>
      <h1>簡単Todoメモ</h1>
      <input type="text" value={text} onChange={onChangeText} />
      <SButton onClick={onClickAdd}>追加</SButton>
      <MemoList memos={memos} onClickDelete={onClickDelete}></MemoList>
    </div>
  );
};

const SButton = styled.button`
  margin-left: 16px;
`;

