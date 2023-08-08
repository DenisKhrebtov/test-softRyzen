import { useState } from 'react';

import * as SWMIconPack from 'react-swm-icon-pack';

import PropTypes from 'prop-types';

import { ChevronBtn, DropDownList, LangSelect } from './CustomSelect.styled';

const CustomSelect = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState({ value: 'uk', label: 'UK' });

  const handleClick = (value, label) => {
    setCurrentLang({ value, label });
    setIsOpen(false);
  };

  return (
    <LangSelect open={isOpen}>
      <p>{currentLang.label}</p>
      <ChevronBtn type="button" onClick={() => setIsOpen(prev => !prev)}>
        <SWMIconPack.ChevronSmallDown set="outline" size={24} />
      </ChevronBtn>
      {isOpen && (
        <DropDownList>
          {data.map(({ value, label }) => (
            <li key={value}>
              <button type="button" onClick={() => handleClick(value, label)}>
                {label}
              </button>
            </li>
          ))}
        </DropDownList>
      )}
    </LangSelect>
  );
};

export default CustomSelect;

CustomSelect.propTypes = {
  data: PropTypes.array.isRequired,
};
