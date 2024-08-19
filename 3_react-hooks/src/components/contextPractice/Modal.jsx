import { ModalContext } from 'context/ModalContext';
import { useContext } from 'react';
import styled from 'styled-components';

const Modal = () => {
  const { openModal, isOpenModal, closeModal } = useContext(ModalContext);

  return (
    <div>
      <>
        <button onClick={openModal}>모달 열기</button>

        {isOpenModal && (
          <StOverlay onClick={closeModal}>
            <StModalBox onClick={(e) => e.stopPropagation()}>
              <button onClick={closeModal}>닫기</button>
              <p>모달 내용입니다!!!💡</p>
            </StModalBox>
          </StOverlay>
        )}
      </>
    </div>
  );
};

export default Modal;

const StOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StModalBox = styled.div`
  border: 2px solid black;
  width: 300px;
  height: 100px;
  background: white;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: relative;
`;
