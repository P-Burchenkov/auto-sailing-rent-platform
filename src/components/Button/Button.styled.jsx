import styled from '@emotion/styled';
import colors from 'utils/colorsVariables';

export const Btn = styled.button`
  width: ${props => props?.width || '100%'};
  border-radius: 12px;
  border: none;
  padding: 12px 24px;

  font-size: 14px;
  font-weight: 600;
  line-height: 143%;
  color: ${colors.white};
  background-color: ${colors.buttonColor};
  transition: background-color 0.25s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: ${colors.accentColor};
  }
`;
