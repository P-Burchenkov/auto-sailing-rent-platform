import { MainNav, SideBarWrapper, Nav } from './SideBar.styled';

const SideBar = () => {
  return (
    <SideBarWrapper>
      <MainNav>
        <Nav to="/">Home</Nav>
        <Nav to="/catalog">Catalog</Nav>
        <Nav to="/favorite">Favorite</Nav>
      </MainNav>
    </SideBarWrapper>
  );
};

export default SideBar;
