import { useNavigate } from 'react-router-dom';

import { BGContainer, SubTitle } from './HomePage.styled';
import Button from 'components/Button';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <BGContainer>
        <SubTitle>Wellcome to our service for renting cars!!!</SubTitle>
        <Button
          type="button"
          title="Get Started"
          width="300px"
          onClick={() => navigate('/catalog')}
        />
      </BGContainer>
    </>
  );
};

export default HomePage;
