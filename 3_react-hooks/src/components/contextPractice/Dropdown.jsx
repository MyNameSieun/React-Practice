import { DropdownContext } from 'context/DropdownContext';
import { useContext } from 'react';

const Dropdown = ({ items }) => {
  // 버튼 컴포넌트
  const DropdownButton = () => {
    const { toggleDropdown, selectedItem } = useContext(DropdownContext);

    return <button onClick={toggleDropdown}>{selectedItem || '아이템을 선택하세요'}</button>;
  };

  // 메뉴 컴포넌트
  const DropdownMenu = () => {
    const { isOpen, selectItem } = useContext(DropdownContext);

    return (
      <>
        {isOpen && (
          <ul>
            {items.map((item) => (
              <li key={item} onClick={() => selectItem(item)}>
                {item}
              </li>
            ))}
          </ul>
        )}
      </>
    );
  };

  return (
    <>
      <DropdownButton />
      <DropdownMenu items={items} />
    </>
  );
};

export default Dropdown;
