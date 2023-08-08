import { styled } from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  left: 0;

  margin-top: 8px;

  z-index: 1;
  display: flex;
  padding: 0 16px;

  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
  background-color: ${p => p.theme.white};
  border-radius: 8px;
  height: 160px;

  width: 100%;

  span {
    position: absolute;
    top: 58px;
    left: 72px;

    color: ${p => p.theme.text};

    font-size: 16px;
    font-weight: 500;
  }

  ul {
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    align-items: center;

    padding-bottom: 16px;

    &:first-child {
      margin-right: 30px;
      padding-right: 16px;
    }

    &:nth-child(2) {
      padding-right: 16px;
    }

    &:last-child {
      align-items: center;
    }
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 16px;

  svg g path {
    transition: stroke ${p => p.theme.transition};
  }

  &:hover,
  &:focus {
    svg g path {
      stroke: ${p => p.theme.accent};
    }
  }
`;

export const TimeButton = styled.button`
  padding: 12px 16px;

  text-align: center;
  font-family: inherit;
  font-size: 16px;
  font-weight: 500;

  color: ${p => p.theme[p.color]};

  transition: color ${p => p.theme.transition};

  &:hover,
  &:focus {
    color: ${p => p.theme.text};
  }
`;

export const Divider = styled.div`
  position: absolute;
  left: 16px;
  top: ${p => (p.$position === 'top' ? '47px' : '94px')};

  border-bottom: 1px solid ${p => p.theme.divider};
  width: 90%;
`;
