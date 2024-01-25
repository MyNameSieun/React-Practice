import { useState } from "react";

function InputArea({ todos, setTodos }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleAddBtn = () => {
    if (title === "") {
      alert("제목을 입력해주세요");
      return;
    }
    if (content === "") {
      alert("내용을 입력해주세요");
      return;
    }
    const newTodos = { id: crypto.randomUUID(), title, content, isDone: false };
    setTodos([...todos, newTodos]);

    setTitle("");
    setContent("");
  };

  const handleTitleChenge = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChenge = (e) => {
    setContent(e.target.value);
  };

  return (
    <div>
      제목: <input value={title} onChange={handleTitleChenge}></input>
      내용 : <input value={content} onChange={handleContentChenge}></input>
      <button onClick={handleAddBtn}>추가</button>
    </div>
  );
}

export default InputArea;
