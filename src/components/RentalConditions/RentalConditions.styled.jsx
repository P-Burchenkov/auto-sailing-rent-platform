import styled from '@emotion/styled';
import colors from 'utils/colorsVariables';

export const Container = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 24px;
`;

export const RentalCondition = styled.span`
  display: inline-block;
  padding: 7px 14px;
  border-radius: 35px;

  font-size: 12px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.24px;
  background-color: ${colors.modalTextBackground};
`;

export const DataWrapper = styled.span`
  color: ${colors.accentColor};
`;
