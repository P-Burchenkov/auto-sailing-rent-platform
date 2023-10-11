import { Btn } from './Button.styled';

const Button = ({ type, title, onClick, width }) => {
  return (
    <Btn type={type} onClick={onClick} width={width}>
      {title}
    </Btn>
  );
};

export default Button;
