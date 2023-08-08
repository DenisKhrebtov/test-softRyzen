import { styled } from 'styled-components';
import DEVICE from '../../../constants/mediaSizes';

export const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;

  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.5);
`;

export const Modal = styled.div`
  position: relative;

  border-radius: 8px;

  padding: 40px 16px;

  background-color: ${p => p.theme.white};
  width: 272px;

  @media ${DEVICE.tablet} {
    width: 300px;
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 20px;
  right: 16px;

  opacity: 0.7;

  transition: opacity ${p => p.theme.transition};

  &:hover,
  &:focus {
    opacity: 1;
  }
`;

export const Content = styled.div`
  margin-top: 16px;

  p {
    text-align: center;
    font-weight: 500;
    margin-bottom: 16px;
  }

  div {
    display: flex;
    justify-content: center;
    gap: 24px;
  }
`;

export const ConfirmButton = styled.button`
  color: ${p => p.theme.accent};
  background-color: transparent;
  border: 1px solid ${p => p.theme.accent};
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;
  padding: 8px 16px;
  border-radius: 4px;
  width: 108px;
  transition: background-color ${p => p.theme.transition}, color ${p => p.theme.transition};

  &:hover,
  &:focus {
    color: ${p => p.theme.white};
    background-color: ${p => p.theme.accent};
  }
`;

export const RejectButton = styled.button`
  color: ${p => p.theme.white};
  background-color: ${p => p.theme.accent};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 108px;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;
  padding: 8px 16px;
  border-radius: 4px;

  transition: opacity ${p => p.theme.transition};

  &:hover,
  &:focus {
    opacity: 0.9;
  }
`;
