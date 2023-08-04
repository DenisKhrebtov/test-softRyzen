import { styled } from 'styled-components';
import DEVICE from '../../constants/mediaSizes';
import theme from '../../constants/theme';

export const StyledForm = styled.form`
  background-color: ${p => p.theme.white};
  border-radius: 8px;
  box-shadow: ${p => p.theme.boxShadow};

  padding: 40px 16px;

  margin-top: 24px;

  display: flex;
  flex-direction: column;

  @media ${DEVICE.tablet} {
    padding: 40px 24px;

    /* flex-direction: row; */
    flex-wrap: wrap;
    /* justify-content: space-between; */
    gap: 24px;

    & > div {
      width: 50%;
    }
  }

  @media ${DEVICE.desktop} {
    margin-top: 25px;
  }

  & label {
    color: ${p => p.theme.accent};
    margin-bottom: 8px;
    font-size: 16px;
    letter-spacing: 0.4px;
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
    line-height: 1.33;
    color: ${p => (p.color ? p.theme[p.color] : p.theme.text)};

    background-color: ${p => p.theme.white};
    text-align: left;

    cursor: ${p => (p.type === 'select' ? 'pointer' : 'rosshair')};
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
  top: 16px;
  right: 12px;
`;

export const ErrorMessage = styled.p`
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
    /* top: 0;
    left: 0; */
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

      transition: color 300ms ease-in-out;

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

  transition: opacity 300ms ease-in-out;

  @media ${DEVICE.tablet} {
    width: 193px;
    margin-top: 120px;
    margin-left: auto;
  }

  &:hover,
  &:focus {
    opacity: 0.9;
  }
`;
