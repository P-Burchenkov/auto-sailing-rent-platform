import { useDispatch } from 'react-redux';
import { useState } from 'react';

import Button from 'components/Button';
import ButtonIcon from 'components/ButtonIcon';
import ButtonClose from 'components/ButtonClose';
import BasicModal from 'components/BasicModal';
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
import CarDetails from 'components/CarDetails';
import sprite from '../../assets/sprite.svg';

import errorImage from '../../assets/images/errorImage.jpg';

import {
  addToFavoriteCars,
  changeFavorite,
  removeFromFavorite,
} from 'redux/adverts/slice';
import { togleFavorite } from 'httpRequests';

const Card = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isError, setIsError] = useState(false);

  const {
    id,
    year,
    make,
    model,
    type,
    img,
    functionalities,
    rentalPrice,
    rentalCompany,
    address,
    mileage,
    isFavorite,
  } = data;

  const dispatch = useDispatch();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
        <Image
          src={isError ? errorImage : img}
          alt={`${make} ${model}`}
          width={274}
          onError={e => {
            setIsError(true);
          }}
        />
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
      <Button title="Learn more" type="button" onClick={openModal} />
      <ButtonIcon onClick={onTogleFavorite} isFavorite={isFavorite} />
      <BasicModal open={isModalOpen} handleClose={closeModal}>
        <CarDetails data={data} />
        <ButtonClose onClick={closeModal} />
      </BasicModal>
    </CardContainer>
  );
};

export default Card;
