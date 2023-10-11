import { Svg, Btn } from './ButtonClose.styled';
import sprite from '../../assets/sprite.svg';

const ButtonClose = ({ onClick }) => {
  return (
    <Btn onClick={onClick}>
      <Svg>
        <use href={sprite + `#icon-close`}></use>
      </Svg>
    </Btn>
  );
};

export default ButtonClose;
