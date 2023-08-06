import * as SWMIconPack from 'react-swm-icon-pack';

import { format } from 'date-fns';

import { eventCategories } from '../../constants/eventCategories';
import priorityTypes from '../../constants/priorityTypes';
import {
  StyledForm,
  InputWrapper,
  ErrorMessage,
  DropDownList,
  ClearButton,
  ToggleButton,
  AddButton,
} from './Form.styled';
// import TimePicker from 'react-time-picker';
import { useState } from 'react';

import Calendar from '../ui/Calendar/Calendar';

const Form = () => {
  const [categoryListIsOpen, setCategoryListIsOpen] = useState(false);
  const [priorityListIsOpen, setPriorityListIsOpen] = useState(false);
  const [calendarIsOpen, setCalendarIsOpen] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedPriority, setSelectedPriority] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

  const onCategory = category => {
    setSelectedCategory(category);
    setCategoryListIsOpen(false);
  };

  const onPriority = priority => {
    setSelectedPriority(priority);
    setPriorityListIsOpen(false);
  };

  return (
    <StyledForm>
      <InputWrapper>
        <label htmlFor="title">
          Title
          <input id="title" name="title" type="text" />
        </label>
        <ClearButton type="button">
          <SWMIconPack.CrossSmall set="outline" size={24} color="#7B61FF" />
        </ClearButton>
        <ErrorMessage>Invalid input</ErrorMessage>
      </InputWrapper>

      <InputWrapper>
        <label htmlFor="description">
          Description
          <textarea id="description" name="description" type="text" />
        </label>
        <ErrorMessage>Invalid input</ErrorMessage>
      </InputWrapper>

      <div>
        <label htmlFor="date">Select date</label>
        <InputWrapper>
          <input
            id="date"
            name="date"
            type="button"
            value={selectedDate ? format(selectedDate, 'dd/MM/yyyy') : 'Select'}
            onClick={() => setCalendarIsOpen(prev => !prev)}
          />

          <ToggleButton type="button" onClick={() => setCalendarIsOpen(prev => !prev)}>
            {categoryListIsOpen ? (
              <SWMIconPack.ChevronSmallUp set="outline" size={24} color="#7B61FF" />
            ) : (
              <SWMIconPack.ChevronSmallDown set="outline" size={24} color="#7B61FF" />
            )}
          </ToggleButton>
          {calendarIsOpen && (
            <Calendar
              onClose={setCalendarIsOpen}
              setSelectedDate={setSelectedDate}
              selectedDate={selectedDate}
            />
          )}
        </InputWrapper>
      </div>
      <InputWrapper>
        <label htmlFor="time">
          Select date
          <input
            id="time"
            name="time"
            type="time"
            placeholder="Select time"
            onChange={e => console.log(e.target.value)}
          />
        </label>
      </InputWrapper>

      <InputWrapper>
        <label htmlFor="location">
          Location
          <input id="location" name="location" type="text" />
          <ErrorMessage>Invalid input</ErrorMessage>
        </label>
      </InputWrapper>

      <div>
        <label htmlFor="category">Category</label>
        <InputWrapper color={categoryListIsOpen ? 'accent' : 'text'} type="select">
          <input
            id="category"
            name="category"
            type="button"
            value={selectedCategory ? selectedCategory : 'Select'}
            onClick={() => setCategoryListIsOpen(prev => !prev)}
          />
          {selectedCategory ? (
            <ClearButton type="button" onClick={() => setSelectedCategory('')}>
              <SWMIconPack.CrossSmall set="outline" size={24} color="#7B61FF" />
            </ClearButton>
          ) : (
            <ToggleButton type="button" onClick={() => setCategoryListIsOpen(prev => !prev)}>
              {categoryListIsOpen ? (
                <SWMIconPack.ChevronSmallUp set="outline" size={24} color="#7B61FF" />
              ) : (
                <SWMIconPack.ChevronSmallDown set="outline" size={24} color="#7B61FF" />
              )}
            </ToggleButton>
          )}

          {categoryListIsOpen && (
            <DropDownList>
              {eventCategories.map(({ id, category }) => (
                <li key={id}>
                  <button type="button" onClick={() => onCategory(category)}>
                    {category}
                  </button>
                </li>
              ))}
            </DropDownList>
          )}
        </InputWrapper>
      </div>
      {/* <select defaultValue="Choose category">
        <option disabled>Choose category</option>
        {eventCategories.map(({ id, category }) => (
          <option key={id} value={category}>
            {category}
          </option>
        ))}
      </select> */}

      <InputWrapper>
        <label htmlFor="image">
          Add picture
          <input id="image" name="image" type="file" />
        </label>
      </InputWrapper>

      <div>
        <label htmlFor="priority">Priority</label>
        <InputWrapper color={priorityListIsOpen ? 'accent' : 'text'} type="select">
          <input
            id="priority"
            name="priority"
            type="button"
            value={selectedPriority ? selectedPriority : 'Select'}
            onClick={() => setPriorityListIsOpen(prev => !prev)}
          />

          <ToggleButton type="button" onClick={() => setPriorityListIsOpen(prev => !prev)}>
            {priorityListIsOpen ? (
              <SWMIconPack.ChevronSmallUp set="outline" size={24} color="#7B61FF" />
            ) : (
              <SWMIconPack.ChevronSmallDown set="outline" size={24} color="#7B61FF" />
            )}
          </ToggleButton>

          {priorityListIsOpen && (
            <DropDownList>
              {priorityTypes.map(priority => (
                <li key={priority}>
                  <button type="button" onClick={() => onPriority(priority)}>
                    {priority}
                  </button>
                </li>
              ))}
            </DropDownList>
          )}
        </InputWrapper>
      </div>
      {/* <TimePicker
        format="h:mm a" // Формат "часы:минуты a.m./p.m."
        clearIcon={null} // Убираем иконку для очистки значения
        value="12:00 AM"
      /> */}
      <AddButton type="button">Add event</AddButton>
    </StyledForm>
  );
};

export default Form;
