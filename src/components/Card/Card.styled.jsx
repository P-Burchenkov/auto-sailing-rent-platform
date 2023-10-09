import styled from '@emotion/styled';
import colors from 'utils/colorsVariables';

export const CardContainer = styled.li`
  position: relative;
  width: 274px;
  min-height: 426px;
`;

export const ImageComtainer = styled.div`
  width: 100%;
  height: 268px;
  margin-bottom: 14px;
  border-radius: 14px;
  overflow: hidden;
  background-color: ${colors.secondaryText02};
`;

export const Image = styled.img`
  width: 274px;
  height: 100%;
  object-fit: contain;
  object-position: 50% 50%;
`;

export const CardTitleWrapper = styled.div`
  display: flex;
  height: 24px;
  overflow: hidden;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const CardTitle = styled.p`
  line-height: 150%;
`;

export const Model = styled.span`
  margin: 0px 4px;
  color: ${colors.buttonColor};
`;

export const Price = styled.span``;

export const CardDescription = styled.p`
  margin-bottom: 28px;
  height: 40px;
  overflow: hidden;

  font-size: 12px;
  font-weight: 400;
  line-height: 150%;
  color: ${colors.secondaryText05};
`;

export const Svg = styled.svg`
  width: 14px;
  height: 16px;
  stroke: ${colors.secondaryText01};
`;
