import { useSelector } from 'react-redux';

import Grid from 'components/Grid';
import Card from 'components/Card';
import { selectIsFavorite } from 'redux/adverts/selectors';
import { Notification } from './FavoritePage.styled';

const FavoritePage = () => {
  const cars = useSelector(selectIsFavorite);

  return (
    <>
      <Grid>
        {cars.length === 0 ? (
          <Notification>
            Ooops!!! There is not any cars in your favorite list!!!
          </Notification>
        ) : (
          cars.map(car => {
            return <Card data={car} key={car.id} />;
          })
        )}
      </Grid>
    </>
  );
};

export default FavoritePage;
