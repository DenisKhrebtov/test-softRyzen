import PropTypes from 'prop-types';

import { format } from 'date-fns';

import * as SWMIconPack from 'react-swm-icon-pack';

import {
  StyledCalendar,
  CalendarWrapper,
  ButtonWrapper,
  CancelButton,
  SubmitButton,
} from './Calendar.styled';

const Calendar = ({ onClose, setSelectedDate, selectedDate, setDateUTC }) => {
  const handleDateChange = date => {
    setDateUTC(date);
    setSelectedDate('date', format(date, 'dd/MM/yyyy'), false);
  };

  return (
    <CalendarWrapper>
      <StyledCalendar
        calendarType="gregory"
        locale="en-EN"
        prevLabel={<SWMIconPack.ChevronSmallLeft set="outline" size={20} color="#3F3F3F" />}
        prev2Label={null}
        nextLabel={<SWMIconPack.ChevronSmallRight set="outline" size={20} color="#3F3F3F" />}
        next2Label={null}
        value={selectedDate}
        onClickDay={handleDateChange}
      />
      <ButtonWrapper>
        <CancelButton
          type="button"
          onClick={() => {
            onClose(false);
            setSelectedDate('');
          }}
        >
          Cancel
        </CancelButton>
        <SubmitButton type="button" onClick={() => onClose(false)}>
          Choose Date
        </SubmitButton>
      </ButtonWrapper>
    </CalendarWrapper>
  );
};

export default Calendar;

Calendar.propTypes = {
  onClose: PropTypes.func.isRequired,
  setSelectedDate: PropTypes.func.isRequired,
  selectedDate: PropTypes.any.isRequired,
  setDateUTC: PropTypes.func.isRequired,
};
