const { Btn } = require('./Button.styled');

const Button = ({ type, title, onclick }) => {
  return (
    <Btn type={type} onClick={onclick}>
      {title}
    </Btn>
  );
};

export default Button;
