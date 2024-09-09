const TodoForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">제목: </label>
        <input id="title" type="text" placeholder="제목을 입력하세요." />
      </div>
      <div>
        <label htmlFor="content">내용: </label>
        <input id="content" type="text" placeholder="내용을 입력하세요." />
      </div>
      <button type="submit">추가하기</button>
    </form>
  );
};

export default TodoForm;
