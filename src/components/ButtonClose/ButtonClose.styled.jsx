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
  transition: stroke 0.25s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    stroke: ${colors.accentColor};
  }
`;

export const Svg = styled.svg`
  width: 24px;
  height: 24px;
`;
