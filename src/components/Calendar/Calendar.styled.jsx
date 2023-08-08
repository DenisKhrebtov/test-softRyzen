import Calendar from 'react-calendar';

import { styled } from 'styled-components';

export const CalendarWrapper = styled.div`
  margin-top: 8px;
  padding: 20px;
  background-color: ${p => p.theme.white};
  box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.07);
  border-radius: 11px;

  position: absolute;
  z-index: 1;
`;

export const StyledCalendar = styled(Calendar)`
  &.react-calendar {
    width: 100%;
    margin-bottom: 16px;

    & .react-calendar__navigation {
      margin-bottom: 16px;
      display: flex;
      justify-content: space-between;

      span {
        font-weight: 500;
        font-family: 'Poppins', sans-serif;
        font-size: 14px;
        line-height: 1.43;
      }
      button svg g path {
        transition: stroke ${p => p.theme.transition};
      }

      button:hover svg g path,
      button:focus svg g path {
          stroke: ${p => p.theme.accent};
        }
      }
    }
  }

  & .react-calendar__viewContainer {
    margin: 0 auto;

    & .react-calendar__month-view__weekdays {
      font-size: 12px;
      line-height: 1.33;
      margin-bottom: 24px;

      & .react-calendar__month-view__weekdays__weekday {
        text-decoration: none;
        text-align: center;

        abbr {
          text-decoration: none;
        }

        &:first-child,
        &:last-child {
          abbr {
            color: ${p => p.theme.high};
          }
        }
      }
    }

    & .react-calendar__month-view__days {
      row-gap: 4px;

      & .react-calendar__tile--active {
        abbr {
          color: ${p => p.theme.accent};
          font-weight: 600;
        }
      }

      button {
        padding: 8px;
        height: 36px;

        transition: background-color ${p => p.theme.transition};

        abbr {
          color: ${p => p.theme.divider};
          transition: color ${p => p.theme.transition};
        }

        &:hover,
        &:focus {
          background-color: ${p => p.theme.accent};

          abbr {
            color: ${p => p.theme.white};
          }
        }
      }
    }
  
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 16px;

  button {
    padding: 8px 16px;
    border-radius: 4px;
    font-size: 12px;
    line-height: 1.33;
  }
`;

export const CancelButton = styled.button`
  border: 1px solid ${p => p.theme.accent};
  color: ${p => p.theme.accent};

  transition: background-color ${p => p.theme.transition}, color ${p => p.theme.transition};

  &:hover,
  &:focus {
    background-color: ${p => p.theme.accent};
    color: ${p => p.theme.white};
  }
`;

export const SubmitButton = styled.button`
  background-color: ${p => p.theme.accent};
  color: ${p => p.theme.white};

  transition: opacity ${p => p.theme.transition};

  &:hover,
  &:focus {
    opacity: 0.9;
  }
`;
