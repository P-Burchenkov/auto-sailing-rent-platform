import { useSelector } from 'react-redux';

import Grid from 'components/Grid';
import Card from 'components/Card';
import { selectIsFavorite } from 'redux/adverts/selectors';

const FavoritePage = () => {
  const cars = useSelector(selectIsFavorite);

  return (
    <>
      <Grid>
        {cars.length === 0 ? (
          <div>There is not any cars in your favorite list</div>
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
