import styled from 'styled-components';

export const ButtonWrapper = styled.TouchableOpacity`
  padding: 16px;
  margin: 4px;
  background-color: ${({ primary }) => (primary ? '#d418b6' : '#2B6ED1')};
  justify-content: center;
  align-items: center;

  ${({ outline }) => outline && `
    background-color: transparent;
  `}
`;
export const ButtonText = styled.Text`
  color: ${({ outline }) => (outline ? '#1653B0' : '#fff')};
  font-weight: 700;
`;
