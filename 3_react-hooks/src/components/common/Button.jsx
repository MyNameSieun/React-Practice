import styled from 'styled-components';
import colors from './theme';

const Button = () => {
  return <StyledButton>버튼 클릭</StyledButton>;
};

export default Button;

const StyledButton = styled.button`
  background-color: ${colors.buttonHoverColor};
`;
