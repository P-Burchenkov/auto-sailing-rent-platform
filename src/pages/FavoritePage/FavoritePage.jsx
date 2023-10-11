import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Grid from 'components/Grid';
import Card from 'components/Card';
import { selectIsFavorite } from 'redux/adverts/selectors';
import { Notification } from './FavoritePage.styled';
import Button from 'components/Button';

const FavoritePage = () => {
  const cars = useSelector(selectIsFavorite);
  const navigate = useNavigate();

  return (
    <>
      {cars.length === 0 ? (
        <>
          <Notification>
            Ooops!!! There is not any cars in your favorite list!!!
          </Notification>

          <Button
            type="button"
            title="Get Started"
            width="300px"
            onClick={() => navigate('/catalog')}
          />
        </>
      ) : (
        <Grid>
          {cars.map(car => {
            return <Card data={car} key={car.id} />;
          })}
        </Grid>
      )}
    </>
  );
};

export default FavoritePage;
