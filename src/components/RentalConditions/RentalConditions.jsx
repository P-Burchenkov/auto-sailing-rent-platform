import {
  Container,
  DataWrapper,
  RentalCondition,
} from './RentalConditions.styled';

const RentalConditions = ({ rentalConditions, mileage, price }) => {
  const rentCondArray = rentalConditions.split('\n');

  const age = rentCondArray[0].split(':')[1];
  const elemToChange = rentCondArray[0].split(':')[0];
  rentCondArray.splice(0, 1, elemToChange);

  const milArray = mileage.toString().split('');

  milArray.splice(milArray.length - 3, 0, ',');

  const milWithComa = milArray.join('');

  return (
    <Container>
      {rentCondArray.map((condition, i) => {
        if (i === 0) {
          return (
            <RentalCondition key={condition}>
              {condition}:<DataWrapper>{age}</DataWrapper>{' '}
            </RentalCondition>
          );
        }
        return <RentalCondition key={condition}>{condition}</RentalCondition>;
      })}
      <RentalCondition>
        Mileage: <DataWrapper>{milWithComa}</DataWrapper>
      </RentalCondition>
      <RentalCondition>
        Price: <DataWrapper>{price}</DataWrapper>
      </RentalCondition>
    </Container>
  );
};

export default RentalConditions;
