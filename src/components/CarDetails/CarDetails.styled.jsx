import styled from '@emotion/styled';
import colors from 'utils/colorsVariables';

export const Container = styled.div`
  width: 541px;
  padding: 40px;
`;

export const ImageWrapper = styled.div`
  width: 469px;
  height: 248px;
  margin-bottom: 14px;
  border-radius: 14px;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 469px;
  height: 100%;
  object-fit: contain;
  object-position: 50% 50%;
`;

export const Title = styled.h3`
  margin-bottom: 8px;
  font-size: 18px;
  font-weight: 500;
  line-height: 133%;
`;

export const ModelWrapper = styled.span`
  color: ${colors.accentColor};
  margin-left: 4px;
`;

export const CarInfo = styled.p`
  margin-bottom: ${props => props?.mb || 0}px;
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

export const CarDescription = styled.p`
  margin-bottom: 24px;
  font-size: 14px;
  font-weight: 400;
  line-height: 143%;
`;

export const TextTitle = styled.p`
  margin-bottom: ${props => props?.mb || 0}px
  font-size: 14px;
  line-height: 143%;
`;

export const LinkButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 168px;

  border-radius: 12px;
  border: none;
  padding: 12px 24px;

  font-size: 14px;
  font-weight: 600;
  line-height: 143%;
  color: ${colors.white};
  background-color: ${colors.buttonColor};

  &:hover {
    background-color: ${colors.accentColor};
  }
`;
