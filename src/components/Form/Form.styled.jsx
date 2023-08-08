import { Form } from 'formik';

import { styled } from 'styled-components';
import DEVICE from '../../constants/mediaSizes';
import theme from '../../constants/theme';

export const StyledForm = styled(Form)`
  background-color: ${p => p.theme.white};
  border-radius: 8px;
  box-shadow: ${p => p.theme.boxShadow};

  padding: 40px 16px;

  margin-top: 24px;

  @media ${DEVICE.tablet} {
    padding: 40px 24px;
  }

  @media ${DEVICE.desktop} {
    padding: 40px;
  }

  & label {
    color: ${p => p.theme.accent};
    margin-bottom: 8px;
    font-size: 16px;
    letter-spacing: 0.4px;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media ${DEVICE.tablet} {
    display: flex;
    flex-flow: column wrap;
    height: 510px;
    align-items: center;

    & > div {
      width: 308px;
    }
  }

  @media ${DEVICE.desktop} {
    height: 308px;

    & > div {
      width: 372px;
    }
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  padding-bottom: 20px;

  input,
  textarea {
    width: 100%;

    padding: 16px 12px;

    border-radius: 8px;
    border: 1px solid ${p => p.theme.divider};
    outline: none;

    font-size: 16px;
    font-family: inherit;
    line-height: 1.33;
    color: ${p => (p.color ? p.theme[p.color] : p.theme.text)};

    background-color: ${p => p.theme.white};
    text-align: left;

    cursor: ${p => (p.type === 'select' ? 'pointer' : 'crosshair')};
  }

  textarea {
    resize: none;
    height: 158px;
    overflow-y: scroll;
  }
`;

export const ClearButton = styled.button`
  position: absolute;
  top: 40px;
  right: 12px;
`;

export const ToggleButton = styled.button`
  position: absolute;
  top: 40px;
  right: 12px;
`;

export const Error = styled.p`
  position: absolute;
  bottom: 0;
  right: 19px;

  font-size: 12px;
  line-height: 1.33;

  color: ${p => p.theme.high};
`;

export const DropDownList = styled.ul`
  margin-top: 18px;

  border-radius: 8px;
  padding: 0px 16px;

  background-color: ${(p => p, theme.white)};
  box-shadow: ${p => p.theme.boxShadow};

  @media ${DEVICE.tablet} {
    position: absolute;
    width: 100%;
    z-index: 1;
  }

  li {
    padding: 16px 0;
    border-bottom: 1px solid ${p => p.theme.divider};

    &:last-child {
      border-bottom: none;
    }

    button {
      width: 100%;
      text-align: left;
      font-size: 16px;
      line-height: 1.33;
      color: ${p => p.theme.text};

      transition: color ${p => p.theme.transition};

      &:hover,
      &:focus {
        color: ${p => p.theme.accent};
      }
    }
  }
`;

export const AddButton = styled.button`
  display: block;

  padding: 16px 12px;
  margin-top: 20px;
  width: 100%;

  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;

  background-color: ${p => p.theme.accent};
  color: ${p => p.theme.white};
  border-radius: 8px;

  box-shadow: ${p => p.theme.boxShadow};

  transition: opacity ${p => p.theme.transition};

  @media ${DEVICE.tablet} {
    width: 193px;
    margin-top: 20px;
    margin-left: auto;
    margin-right: 7px;
  }

  @media ${DEVICE.desktop} {
    margin-top: 60px;
    margin-right: 14px;
  }

  &:hover,
  &:focus {
    opacity: 0.9;
  }
`;
