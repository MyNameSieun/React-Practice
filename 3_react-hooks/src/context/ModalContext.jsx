import { createContext, useState } from 'react';

export const ModalContext = createContext();

export const ModalContextProvider = ({ children }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const openModal = () => {
    setIsOpenModal(true);
  };
  const closeModal = () => {
    setIsOpenModal(false);
  };

  return (
    <ModalContext.Provider value={{ isOpenModal, setIsOpenModal, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};
