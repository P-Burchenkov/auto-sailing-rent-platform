import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

import colors from 'utils/colorsVariables';

export const SideBarWrapper = styled.div`
  width: 240px;
  min-height: 100%;
  background-color: ${colors.secondaryText02};
`;

export const MainNav = styled.nav`
  padding: 24px 72px;
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

export const Nav = styled(NavLink)`
  box-sizing: border-box;
  font-size: 24px;
  color: ${colors.white};

  &:hover,
  &:focus {
    color: ${colors.accentColor};
  }
  &.active {
    color: ${colors.accentColor};
  }
`;
