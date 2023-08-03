import { styled } from 'styled-components';
import DEVICE from '../../../constants/mediaSizes';

export const StyledTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  line-height: 1.5;

  @media ${DEVICE.tablet} {
    font-size: 32px;
    margin-bottom: 24px;
  }
  @media ${DEVICE.desktop} {
    font-size: 32px;
    margin-bottom: 0px;
  }
`;
