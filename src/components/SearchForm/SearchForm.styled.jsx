import { styled } from 'styled-components';
import DEVICE from '../../constants/mediaSizes';

export const StyledInput = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  padding: 12px;

  position: relative;

  border-radius: 8px;
  box-shadow: ${p => p.theme.boxShadow};

  @media ${DEVICE.tablet} {
    width: 368px;
  }

  @media ${DEVICE.desktop} {
    width: 410px;
  }

  input {
    width: 100%;

    border: none;
    outline: none;
    background-color: transparent;

    font-size: 14px;
    font-weight: 300;
    color: #888888;

    &::placeholder {
      color: #888888;
      font-size: 14px;
      font-weight: 300;
    }
  }
`;

export const CleanButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
`;
