import { useDispatch } from 'react-redux';

import Button from 'components/Button';
import sprite from '../../assets/sprite.svg';
import ButtonIcon from 'components/ButtonIcon';
import {
  CardContainer,
  CardDescription,
  CardTitle,
  Image,
  CardTitleWrapper,
  ImageComtainer,
  Model,
  Price,
  Svg,
} from './Card.styled';
import { togleFavorite } from 'httpRequests';
import {
  addToFavoriteCars,
  changeFavorite,
  removeFromFavorite,
} from 'redux/adverts/slice';

const Card = ({ data }) => {
  const {
    id,
    year,
    make,
    model,
    type,
    img,
    description,
    fuelConsumption,
    engineSize,
    accessories,
    functionalities,
    rentalPrice,
    rentalCompany,
    address,
    rentalConditions,
    mileage,
    isFavorite,
  } = data;

  const dispatch = useDispatch();

  const onTogleFavorite = async () => {
    if (!isFavorite) {
      const favoriteCar = await togleFavorite(id, { isFavorite: true });
      dispatch(addToFavoriteCars(favoriteCar));
      dispatch(changeFavorite(favoriteCar));
    } else {
      const car = await togleFavorite(id, { isFavorite: false });
      dispatch(removeFromFavorite(id));
      dispatch(changeFavorite(car));
    }
  };

  return (
    <CardContainer>
      <ImageComtainer>
        <Image src={img} alt={`${make} ${model}`} width={274} />
      </ImageComtainer>
      <CardTitleWrapper>
        <CardTitle>
          {make}
          <Model>{model}</Model>, {year}
        </CardTitle>
        <Price>{rentalPrice}$</Price>
      </CardTitleWrapper>
      <CardDescription>
        {address}{' '}
        <Svg height="16px" width="14px">
          <use href={sprite + `#icon-Vector`}></use>
        </Svg>{' '}
        {rentalCompany}{' '}
        <Svg>
          <use href={sprite + `#icon-Vector`}></use>
        </Svg>{' '}
        {type}{' '}
        <Svg>
          <use href={sprite + `#icon-Vector`}></use>
        </Svg>{' '}
        {make}{' '}
        <Svg>
          <use href={sprite + `#icon-Vector`}></use>
        </Svg>{' '}
        {mileage}{' '}
        <Svg>
          <use href={sprite + `#icon-Vector`}></use>
        </Svg>
        {functionalities[0]}
      </CardDescription>
      <Button title="Learn more" type="button" />
      <ButtonIcon onClick={onTogleFavorite} isFavorite={isFavorite} />
    </CardContainer>
  );
};

export default Card;
