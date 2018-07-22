import styled from 'styled-components';

export const Wrapper = styled.View`
  padding: 16px;
  margin: 4px;
  background-color: ${({ isSuccess }) => (isSuccess ? '#09BD1B' : '#E50000')};
  justify-content: center;
  align-items: center;
`;
export const BannerText = styled.Text`
  color: #fff;
  font-weight: 500;
`;
