import styled from '@emotion/styled';

import colors from 'utils/colorsVariables';

export const SideBarWrapper = styled.div`
  width: 240px;
  min-height: 100%;
  background-color: ${colors.secondaryText01};
`;

export const MainNav = styled.nav`
  padding: 24px 0px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  justify-content: center;
`;
