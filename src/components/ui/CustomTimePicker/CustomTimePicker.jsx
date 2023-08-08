import PropTypes from 'prop-types';

import { useState } from 'react';

import * as SWMIconPack from 'react-swm-icon-pack';

import { Divider, TimeButton, Wrapper, CloseBtn } from './CustomTimePicker.styled';

const CustomTimePicker = ({ setSelectedTime, onClose }) => {
  const [hour, setHour] = useState('1');
  const [minute, setMinute] = useState('00');
  const [format, setFormat] = useState('am');

  const handleHourClick = e => {
    setHour(e.target.name);
    const time = `${e.target.name}:${minute} ${format}`;
    setSelectedTime('time', time, false);
  };

  const handleMinuteClick = e => {
    setMinute(e.target.name);
    const time = `${hour}:${e.target.name} ${format}`;
    setSelectedTime('time', time, false);
  };

  const handleFormatClick = e => {
    setFormat(e.target.name);
    const time = `${hour}:${minute} ${e.target.name}`;
    setSelectedTime('time', time, false);
  };

  return (
    <Wrapper>
      <CloseBtn type="button" onClick={() => onClose(false)}>
        <SWMIconPack.CrossSmall set="outline" size={24} color="#3F3F3F" />
      </CloseBtn>
      <ul>
        {Array.from({ length: 12 }, (_, i) => i + 1).map(h => (
          <li key={h}>
            <TimeButton
              type="button"
              name={h}
              color={hour === h.toString() ? 'text' : 'divider'}
              onClick={handleHourClick}
            >
              {h}
            </TimeButton>
          </li>
        ))}
      </ul>
      <Divider $position="top" />
      <span>:</span>
      <ul>
        {Array.from({ length: 60 }, (_, i) => i).map(m => (
          <li key={m}>
            <TimeButton
              type="button"
              name={m.toString().padStart(2, '0')}
              color={minute === m.toString().padStart(2, '0') ? 'text' : 'divider'}
              onClick={handleMinuteClick}
            >
              {m.toString().padStart(2, '0')}
            </TimeButton>
          </li>
        ))}
      </ul>
      <Divider $position="bottom" />
      <ul>
        <li>
          <TimeButton
            type="button"
            name="am"
            color={format === 'am' ? 'text' : 'divider'}
            onClick={handleFormatClick}
          >
            AM
          </TimeButton>
        </li>
        <li>
          <TimeButton
            type="button"
            name="pm"
            color={format === 'pm' ? 'text' : 'divider'}
            onClick={handleFormatClick}
          >
            PM
          </TimeButton>
        </li>
      </ul>
    </Wrapper>
  );
};

export default CustomTimePicker;

CustomTimePicker.propTypes = {
  setSelectedTime: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};
