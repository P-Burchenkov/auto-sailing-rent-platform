import { Drawer, Toolbar, Box } from '@mui/material';
import { MainNav, SideBarWrapper } from './SideBar.styled';
import { NavLink } from 'react-router-dom';

const drawerWidth = 240;
const SideBar = () => {
  return (
    <SideBarWrapper>
      <MainNav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/catalog">Catalog</NavLink>
        <NavLink to="/favorite">Favorite</NavLink>
      </MainNav>
    </SideBarWrapper>
  );
};

export default SideBar;
