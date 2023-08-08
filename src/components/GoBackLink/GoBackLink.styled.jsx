import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import DEVICE from '../../constants/mediaSizes';

export const StyledBackLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;

  color: ${p => p.theme.accent};
  font-size: 14px;
  font-weight: 500;
  transition: opacity ${p => p.theme.transition};

  margin-bottom: 24px;

  @media ${DEVICE.desktop} {
    margin-bottom: 17px;
  }

  &:hover,
  &:focus {
    opacity: 0.9;
  }
`;
