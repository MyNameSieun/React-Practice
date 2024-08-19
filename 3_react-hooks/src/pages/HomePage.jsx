import Dropdown from 'components/contextPractice/Dropdown';
import Modal from 'components/contextPractice/Modal';
import Search from 'components/contextPractice/search/Search';
import Tabs from 'components/contextPractice/Tabs';
import Theme from 'components/contextPractice/Theme';
import Input from 'components/Input';
import { DropdownProvider } from 'context/DropdownContext';
import { ModalContextProvider } from 'context/ModalContext';
import { SearchContextProvider } from 'context/SearchContext';
import { TabContextProvider } from 'context/TabsContext';
import { ThemeContextProvider } from 'context/ThemeContext';

const HomePage = () => {
  const items = ['첫 번째 아이템', '두 번째 아이템', '세 번째 아이템'];

  return (
    <>
      <SearchContextProvider>
        <Search />
      </SearchContextProvider>

      <ModalContextProvider>
        <h1>useContext로 Modal 구현하기</h1>
        <Modal />
      </ModalContextProvider>

      <DropdownProvider>
        <h1>useContext로 Dropdown 구현하기</h1>
        <Dropdown items={items} />
      </DropdownProvider>

      <ThemeContextProvider>
        <Theme />
      </ThemeContextProvider>

      <TabContextProvider>
        <Tabs />
      </TabContextProvider>

      <Input />
    </>
  );
};

export default HomePage;
