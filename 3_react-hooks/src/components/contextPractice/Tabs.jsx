import { TabContext } from 'context/TabsContext';
import { useContext } from 'react';
import styled, { css } from 'styled-components';

function Tabs() {
  const { activeTab, setActiveTab } = useContext(TabContext);

  const tabItems = ['토토로', '키키', '포뇨', '치히로', '소피', '가오나시'];

  return (
    <TabsList>
      <TabsTitle>누구에게 보내실 건가요?</TabsTitle>
      {tabItems.map((item, index) => (
        <TabsItem key={index} $isActive={item === activeTab} onClick={() => setActiveTab(item)}>
          {item}
        </TabsItem>
      ))}
    </TabsList>
  );
}

const TabsList = styled.ul`
  background-color: #ffffff;
  width: 390px;
  border-radius: 13px;
  padding: 45px;
  margin-right: 30px;
`;

const TabsTitle = styled.h1`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 30px;
`;

const TabsItem = styled.li`
  border-radius: 8px;
  border: 2px solid #bababa;
  height: 65px;
  margin-bottom: 15px;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  ${(props) =>
    props.$isActive
      ? css`
          border: 2px solid black;
          font-weight: bold;
        `
      : css`
          border: 2px solid #bababa;
          font-weight: normal;
        `}
`;
export default Tabs;
