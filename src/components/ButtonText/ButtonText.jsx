import { Btn } from './ButtonText.styled';

const ButtonText = ({ onClick, type, title, margin, disabled }) => {
  return (
    <Btn onClick={onClick} type={type} margin={margin} disabled={disabled}>
      {title}
    </Btn>
  );
};

export default ButtonText;
