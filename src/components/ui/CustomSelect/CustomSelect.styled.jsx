import { styled } from 'styled-components';

export const LangSelect = styled.div`
  position: relative;
  background-color: #ffffff;
  box-shadow: ${p => p.theme.boxShadow};
  padding: 12px 6px 12px 12px;
  border-radius: 8px;
  width: 69px;

  display: flex;
  align-items: center;
  gap: 4px;

  p {
    font-weight: 500;
    font-size: 16px;
  }
`;

export const ChevronBtn = styled.button`
  padding: 0;
  display: flex;
  transform: ${p => (p.isOpen ? 'rotate(180deg)' : null)};

  svg g path {
    stroke: ${p => (p.isOpen ? p.theme.accent : p.theme.text)};
  }
`;

export const DropDownList = styled.ul`
  position: absolute;
  z-index: 1;
  top: 49px;
  left: 0;
  padding: 16px 12px;
  border-radius: 8px;

  width: 69px;

  background-color: #ffffff;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);

  display: flex;
  flex-direction: column;
  gap: 8px;

  li {
    padding-bottom: 4px;
    border-bottom: 1px solid ${p => p.theme.divider};

    button {
      font-size: 16px;
      font-weight: 500;

      color: ${p => p.theme.divider};
      transition: color 300ms ease-in-out;

      &:hover,
      &:focus {
        color: ${p => p.theme.text};
      }
    }
  }
`;
