import styled from '@emotion/styled';

import image from '../../assets/images/mercedes.jpg';
import colors from 'utils/colorsVariables';

export const BGContainer = styled.div`
  width: 100vw;
  height: 100vh;
  padding-top: 60px;
  padding-left: 100px;

  background-image: url(${image});
  background-size: contain;
  background-repeat: no-repeat;
`;

export const SubTitle = styled.p`
  max-width: 700px;
  margin-bottom: 48px;

  color: ${colors.white};
  font-size: 32px;
`;
