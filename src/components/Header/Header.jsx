import Logo from 'components/Logo';
import { HeaderWrapper, Title } from './Header.styled';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <HeaderWrapper>
      <Logo onClick={() => navigate('/')} />
      <Title style={{ color: '#fff' }}>Rent your Car</Title>
    </HeaderWrapper>
  );
};

export default Header;
