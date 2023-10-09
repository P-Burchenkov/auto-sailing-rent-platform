import styled from '@emotion/styled';
import mq from 'utils/mediaQuery';

export const Container = styled.div`
  position: relative;
  margin: 0px auto;

  ${mq.mobile} {
    width: 375px;
  }

  ${mq.tablet} {
    width: 768px;
  }

  ${mq.desktop} {
    width: 100vw;
  }
`;

export const Main = styled.main`
  width: 100%;
  min-height: 100vh;
  display: flex;
`;

export const ContentPageWrapper = styled.div`
  flex-shrink: shrink;
  width: 1224px;
  padding: 24px;
`;
