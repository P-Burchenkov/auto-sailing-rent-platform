import styled from '@emotion/styled';
import colors from 'utils/colorsVariables';

export const HeaderWrapper = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.buttonColor};
  padding: 12px 24px;
  margin: 0px auto;
`;

export const Title = styled.h1`
  font-size: 28px;
  clolor: ${colors.white};
`;
