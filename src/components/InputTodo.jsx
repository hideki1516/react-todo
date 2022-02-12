import React from "react";

// input-areaのstyleはこのコンポーネントでしか使用していない
// styleをオブジェクト化して適用させる
const style = {
  backgroundColor: "#c1ffff",
  width: "400px",
  height: "30px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px"
};

export const InputTodo = (props) => {
  const { todoText, onChange, onClick, disabled } = props; // 渡されたpropsを分割代入で取り出す
  return (
    <div style={style} className="input-area">
      <input
        disabled={disabled}
        placeholder="TODOを入力"
        value={todoText}
        onChange={onChange}
      />
      <button disabled={disabled} onClick={onClick}>
        追加
      </button>
    </div>
  );
};
