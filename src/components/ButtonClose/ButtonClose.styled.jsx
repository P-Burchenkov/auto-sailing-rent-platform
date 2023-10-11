import styled from '@emotion/styled';
import colors from 'utils/colorsVariables';

export const Btn = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  margin: 0;
  padding: 0;
  border: none;
  background-color: transparent;
  stroke: ${colors.mainText};

  &:hover {
    stroke: ${colors.accentColor};
  }
`;

export const Svg = styled.svg`
  width: 24px;
  height: 24px;
`;
