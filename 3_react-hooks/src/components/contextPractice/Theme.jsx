import { ThemeContext } from 'context/ThemeContext';
import { useContext } from 'react';
import styled, { css } from 'styled-components';

const Theme = () => {
  const { isDark, setIsDark } = useContext(ThemeContext);

  const handleToggleThemeButton = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <ThemeLayout $isDark={isDark}>
      <button onClick={handleToggleThemeButton}>{isDark ? '라이트모드' : '다크모드'}</button>
    </ThemeLayout>
  );
};

export default Theme;

const ThemeLayout = styled.main`
  ${(props) =>
    props.$isDark
      ? css`
          background-color: black;
        `
      : css`
          background-color: white;
        `}
`;
