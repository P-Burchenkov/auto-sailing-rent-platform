import {
  ImageWrapper,
  Container,
  Image,
  Title,
  ModelWrapper,
  CarInfo,
  Svg,
  CarDescription,
  TextTitle,
  LinkButton,
} from 'components/CarDetails/CarDetails.styled';

import RentalConditions from '../RentalConditions';

import sprite from '../../assets/sprite.svg';

const CarDetails = ({ data }) => {
  const {
    year,
    make,
    model,
    type,
    img,
    description,
    accessories,
    functionalities,
    rentalPrice,
    rentalCompany,
    address,
    rentalConditions,
    mileage,
  } = data;

  return (
    <Container>
      <ImageWrapper>
        <Image src={img} alt={`${make}${model}`} />{' '}
      </ImageWrapper>
      <Title>
        {make}
        <ModelWrapper>{model}</ModelWrapper>, {year}
      </Title>
      <CarInfo mb={14}>
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
        {functionalities}
      </CarInfo>
      <CarDescription>{description}</CarDescription>
      <TextTitle mb={8}>Accessories and functionalities:</TextTitle>
      <CarInfo mb={24}>
        {accessories.map(accesory => {
          return (
            <span key={accesory}>
              {accesory}
              <Svg>
                <use href={sprite + `#icon-Vector`}></use>
              </Svg>
            </span>
          );
        })}
        {functionalities.map(func => {
          return (
            <span key={func}>
              {func}
              <Svg>
                <use href={sprite + `#icon-Vector`}></use>
              </Svg>
            </span>
          );
        })}
      </CarInfo>
      <TextTitle mb={8}>Rental Conditions:</TextTitle>
      <RentalConditions
        rentalConditions={rentalConditions}
        mileage={mileage}
        price={rentalPrice}
      />
      <LinkButton
        href="tel:+380730000000"
        target="_blank"
        rel="noreferrer noopener"
      >
        Rental car
      </LinkButton>
    </Container>
  );
};

export default CarDetails;
