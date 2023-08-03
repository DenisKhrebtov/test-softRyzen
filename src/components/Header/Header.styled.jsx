import { Link } from 'react-router-dom';

import { styled } from 'styled-components';
import DEVICE from '../../constants/mediaSizes';

export const StyledHeader = styled.header`
  background-color: #fefcff;
  padding: 32px 0 24px;
  border-bottom: 1px solid ${p => p.theme.accent};
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;

  @media ${DEVICE.tablet} {
    margin-bottom: 0px;
    gap: 24px;
    justify-content: flex-start;
  }
`;

export const Logo = styled(Link)`
  font-family: 'Alata', sans-serif;
  font-size: 24px;
  line-height: 1.38;
  color: ${p => p.theme.accent};
`;

export const TabletContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
