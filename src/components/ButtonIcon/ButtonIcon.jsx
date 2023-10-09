import { Svg, BtnIcon } from './ButtonIcon.styled';
import sprite from '../../assets/sprite.svg';

const ButtonIcon = ({ onClick, ...props }) => {
  //   console.log(isFavorite);
  return (
    <BtnIcon onClick={onClick} {...props}>
      <Svg>
        <use href={sprite + `#icon-heart`}></use>
      </Svg>
    </BtnIcon>
  );
};

export default ButtonIcon;
