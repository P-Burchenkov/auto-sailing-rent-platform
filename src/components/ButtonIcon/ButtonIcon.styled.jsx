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
  transition: stroke 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  stroke: ${props => (props?.isFavorite ? colors.accentColor : colors.white)};
  color: ${props => (props?.isFavorite ? colors.accentColor : 'transparent')};

  &:hover,
  &:focus {
    stroke: ${props => (props?.isFavorite ? colors.white : colors.accentColor)};
  }
`;

export const Svg = styled.svg`
  width: 18px;
  height: 18px;
`;
