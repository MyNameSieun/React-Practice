import useInput from 'hooks/useInput';

const Input = () => {
  const [title, setTitlehandler] = useInput();
  const [content, setContenthandler] = useInput();

  return (
    <form>
      <input type="text" value={title} onChange={setTitlehandler} placeholder="제목을 입력하세요" />
      <input type="text" value={content} onChange={setContenthandler} placeholder="내용을 입력하세요" />
    </form>
  );
};

export default Input;
