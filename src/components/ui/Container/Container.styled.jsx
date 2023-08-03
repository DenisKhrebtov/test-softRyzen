import { styled } from 'styled-components';
import DEVICE from '../../../constants/mediaSizes';

export const StyledContainer = styled.div`
  margin: 0 auto;

  padding: ${p => (p.pt ? '44px' : '0px')} 24px ${p => (p.pb ? '50px' : '0px')};
  min-width: 320px;

  @media ${DEVICE.tablet} {
    padding: ${p => (p.pt ? '40px' : '0px')} 40px ${p => (p.pb ? '125px' : '0px')};
    max-width: 768px;
  }
  @media ${DEVICE.desktop} {
    padding: ${p => (p.pt ? '60px' : '0px')} 80px ${p => (p.pb ? '77px' : '0px')};
    max-width: 1440px;
  }
`;
