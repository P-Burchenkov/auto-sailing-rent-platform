import { Outlet } from 'react-router-dom';
import { Box, Toolbar } from '@mui/material';

import Header from 'components/Header/Header';
import SideBar from 'components/SideBar';

import { Main, ContentPageWrapper } from './SharedLayout.styled';
import {} from 'components/SideBar/SideBar.styled';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Main>
        <SideBar />
        <ContentPageWrapper>
          <Outlet />
        </ContentPageWrapper>
      </Main>
    </>
  );
};

export default SharedLayout;
