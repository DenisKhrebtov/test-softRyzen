import { styled } from 'styled-components';
import DEVICE from '../../../constants/mediaSizes';

export const StyledContainer = styled.div`
  margin: 0 auto;

  padding: ${p => (p.type === 'container' ? '44px' : '0px')} 24px
    ${p => (p.type === 'container' ? '50px' : '0px')};
  min-width: 320px;

  height: ${p => p.height};

  @media ${DEVICE.tablet} {
    padding: ${p => (p.type === 'container' ? '40px' : '0px')} 40px
      ${p => (p.type === 'container' ? '125px' : '0px')};
    max-width: 768px;
  }
  @media ${DEVICE.desktop} {
    padding: ${p => (p.type === 'container' ? '60px' : '0px')} 80px
      ${p => (p.type === 'container' ? '77px' : '0px')};
    max-width: 1440px;
  }
`;
