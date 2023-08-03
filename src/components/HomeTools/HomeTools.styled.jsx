import { Link } from 'react-router-dom';

import { styled } from 'styled-components';

import DEVICE from '../../constants/mediaSizes';

export const ToolsList = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 24px;

  margin-bottom: 40px;

  @media ${DEVICE.desktop} {
    margin-bottom: 0px;
  }
`;

export const CreateLink = styled(Link)`
  padding: 16px;
  background-color: ${p => p.theme.accent};
  box-shadow: ${p => p.theme.boxShadow};
  display: flex;
  gap: 16px;
  border-radius: 8px;

  transition: opacity 300ms ease-in-out;

  &:hover,
  &:focus {
    opacity: 0.9;
  }

  span {
    display: none;

    @media ${DEVICE.tablet} {
      display: block;

      font-size: 16px;
      font-weight: 500;

      color: #ffffff;
    }
  }
`;
