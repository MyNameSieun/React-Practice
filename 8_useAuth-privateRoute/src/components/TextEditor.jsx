import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import styled from 'styled-components';
import { CustomToolbar } from 'styles/CustomToolbar';

const TextEditor = () => {
  const [value, setValue] = useState('');

  // 툴바 설정
  const modules = {
    toolbar: {
      container: '#toolbar' // CustomToolbar의 id
    }
  };

  // 포맷 설정
  const formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'video',
    'color',
    'background '
  ];

  return (
    <div>
      <CustomToolbar />
      <StReactQuill
        theme="snow"
        modules={modules}
        formats={formats}
        value={value}
        onChange={setValue}
        style={{ height: '70vh' }}
      />
    </div>
  );
};

export default TextEditor;

const StReactQuill = styled(ReactQuill)`
  /* 폰트 */
  & .ql-editor {
    font-family: inherit;
    font-size: inherit;
  }

  /* 텍스트 굵기 */
  & .ql-editor strong {
    font-weight: bold;
  }

  /* 기울임 */
  & .ql-editor em {
    font-style: italic;
  }

  /* 밑줄 */
  & .ql-editor u {
    text-decoration: underline;
  }
`;
