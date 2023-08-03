import { styled } from 'styled-components';
import DEVICE from '../../constants/mediaSizes';

export const GridContainer = styled.ul`
  display: grid;
  grid-gap: 24px;
  justify-content: center;

  @media ${DEVICE.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${DEVICE.desktop} {
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 24px;
    grid-row-gap: 40px;
  }
`;
