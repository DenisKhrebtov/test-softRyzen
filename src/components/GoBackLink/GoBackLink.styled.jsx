import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const StyledBackLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;

  color: ${p => p.theme.accent};
  font-size: 14px;
  font-weight: 500;
  transition: opacity 300ms ease-in-out;

  &:hover,
  &:focus {
    opacity: 0.9;
  }
`;
