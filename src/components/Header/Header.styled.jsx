import styled from '@emotion/styled';
import colors from 'utils/colorsVariables';

export const HeaderWrapper = styled.header`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.buttonColor};
  padding: 12px 72px;
  margin: 0px auto;
`;

export const Title = styled.h1`
  font-size: 28px;
  clolor: ${colors.white};
`;
