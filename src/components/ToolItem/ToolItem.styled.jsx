import { styled } from 'styled-components';

import DEVICE from '../../constants/mediaSizes';

export const Item = styled.li`
  position: relative;

  display: ${p => p.display};

  @media ${DEVICE.tablet} {
    display: block;
  }
`;

export const ToolButton = styled.button`
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  border-radius: 8px;

  min-width: ${p => (p.open ? '158px' : '')};

  @media ${DEVICE.tablet} {
    min-width: 158px;
    padding: ${p => (p.$padding === 'big' ? '16px 24px' : '16px')};
  }

  background-color: ${p => p.theme.white};
  box-shadow: ${p => p.theme.boxShadow};

  border-bottom-left-radius: ${p => (p.open ? '0px' : '8px')};
  border-bottom-right-radius: ${p => (p.open ? '0px' : '8px')};

  svg g path {
    transition: stroke ${p => p.theme.transition};
    stroke: ${p => (p.open ? p.theme.accent : p.theme.text)};
  }

  &:hover,
  &:focus {
    span {
      color: ${p => p.theme.accent};
    }

    svg g path {
      stroke: ${p => p.theme.accent};
    }
  }

  span {
    display: ${p => (p.open ? 'block' : 'none')};

    font-size: 16px;
    font-weight: 500;
    color: ${p => (p.open ? p.theme.accent : p.theme.text)};

    transition: color ${p => p.theme.transition};

    @media ${DEVICE.tablet} {
      display: block;
    }
  }
`;

export const DropDownList = styled.ul`
  width: 100%;
  position: absolute;
  z-index: 1;
  top: 56px;
  left: 0;

  li {
    background-color: ${p => p.theme.white};
    border-bottom: 1px solid ${p => p.theme.divider};

    &:first-child {
      border-top: 1px solid ${p => p.theme.divider};
    }

    &:last-child {
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;
      border-bottom: none;
    }

    button {
      color: ${p => p.theme.divider};
      transition: color ${p => p.theme.transition};
      display: block;
      padding: 12px 24px 8px;
      text-align: left;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      svg g path {
        stroke: ${p => p.theme.divider};
        transition: stroke ${p => p.theme.transition};
      }
    }

    &:hover button,
    &:focus button {
      color: ${p => p.theme.accent};

      svg g path {
        stroke: ${p => p.theme.accent};
      }
    }
  }
`;
