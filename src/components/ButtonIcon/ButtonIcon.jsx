import { Svg, BtnIcon } from './ButtonIcon.styled';
import sprite from '../../assets/sprite.svg';

const ButtonIcon = ({ onClick, ...props }) => {
  return (
    <BtnIcon onClick={onClick} {...props}>
      <Svg>
        <use href={sprite + `#icon-heart`}></use>
      </Svg>
    </BtnIcon>
  );
};

export default ButtonIcon;
