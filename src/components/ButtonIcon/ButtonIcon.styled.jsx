import styled from '@emotion/styled';
import colors from 'utils/colorsVariables';

export const BtnIcon = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  margin: 0;
  padding: 0;
  border: none;
  background-color: transparent;
  stroke: ${props => (props?.isFavorite ? colors.accentColor : colors.white)};
  fill: ${props => (props?.isFavorite ? colors.accentColor : 'transparent')};
`;

export const Svg = styled.svg`
  width: 18px;
  height: 18px;
`;
