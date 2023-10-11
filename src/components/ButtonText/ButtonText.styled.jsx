import styled from '@emotion/styled';
import colors from 'utils/colorsVariables';

export const Btn = styled.button`
  display: block;
  padding: 0;
  outline: none;
  border: none;
  margin-top: ${({ margin }) => {
    return `${margin?.top || '0px'}`;
  }};
  margin-bottom: ${({ margin }) => {
    return `${margin?.bottom || '0px'}`;
  }};
  margin-left: ${({ margin }) => {
    return `${margin?.left || '0px'}`;
  }};
  margin-right: ${({ margin }) => {
    return `${margin?.right || '0px'}`;
  }};

  font-size: 16px;
  font-weight: 500;
  line-height: 150%;
  text-decoration-line: underline;
  background-color: transparent;
  transition: color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  color: ${colors.buttonColor};
  &:hover,
  &:focus {
    color: ${colors.accentColor};
  }
  &:disabled {
    color: ${colors.secondaryText05};
  }
`;
