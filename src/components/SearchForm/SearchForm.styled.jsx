import { styled } from 'styled-components';
import DEVICE from '../../constants/mediaSizes';

export const StyledForm = styled.form`
  display: flex;
  align-items: center;

  padding: 12px;

  border-radius: 8px;
  box-shadow: ${p => p.theme.boxShadow};

  @media ${DEVICE.tablet} {
    width: 368px;
  }

  @media ${DEVICE.desktop} {
    width: 410px;
  }

  button {
    display: flex;
    margin-right: 12px;
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
