import { createContext, useState } from 'react';

export const DropdownContext = createContext();

export const DropdownProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const selectItem = (item) => {
    setSelectedItem(item);
    setIsOpen(false); // 아이템 선택 후 드롭다운 닫기
  };

  return (
    <DropdownContext.Provider value={{ isOpen, toggleDropdown, selectedItem, selectItem }}>
      {children}
    </DropdownContext.Provider>
  );
};
