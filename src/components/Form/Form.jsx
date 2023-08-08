import PropTypes from 'prop-types';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Field, Formik } from 'formik';
import * as SWMIconPack from 'react-swm-icon-pack';

import validationSchema from '../../utils/validationSchema';
import eventCategories from '../../constants/eventCategories';
import priorityTypes from '../../constants/priorityTypes';

import CustomTimePicker from '../ui/CustomTimePicker/CustomTimePicker';
import {
  AddButton,
  ClearButton,
  DropDownList,
  Error,
  FormContainer,
  InputWrapper,
  StyledForm,
  ToggleButton,
} from './Form.styled';

import Calendar from '../Calendar/Calendar';

import { editEvent, postEvent } from '../../api/api';

const Form = ({ event, type }) => {
  const navigate = useNavigate();

  const [dateUTC, setDateUTC] = useState('');

  const [categoryListIsOpen, setCategoryListIsOpen] = useState(false);
  const [priorityListIsOpen, setPriorityListIsOpen] = useState(false);
  const [calendarIsOpen, setCalendarIsOpen] = useState(false);
  const [timePickerIsOpen, setTimePickerIsOpen] = useState(false);

  const onCategory = (setCategory, category) => {
    setCategory('category', category, false);
    setCategoryListIsOpen(false);
  };

  const onPriority = (setPriority, priority) => {
    setPriority('priority', priority, false);
    setPriorityListIsOpen(false);
  };

  const handleSubmit = async values => {
    if (type === 'Create') {
      const newEvent = { dateUTC, ...values };
      await postEvent(newEvent);
      navigate(`/`, { replace: true });
      return;
    } else {
      await editEvent(event.id, values);
      navigate(`/event/${event.id}`, { replace: true });
      return;
    }
  };

  return (
    <Formik
      initialValues={{
        title: event?.title || '',
        description: event?.description || '',
        date: event?.dateUTC || 'Select',
        time: event?.time || 'Select',
        location: event?.location || '',
        category: event?.category || 'Select',
        image: event?.image || 'https://picsum.photos/628/646',
        priority: event?.priority || 'Select',
      }}
      validationSchema={validationSchema}
      onSubmit={values => handleSubmit(values)}
    >
      {({ values, setFieldValue, errors }) => (
        <StyledForm>
          <FormContainer>
            <InputWrapper>
              <label htmlFor="title">Title</label>
              <Field id="title" name="title" type="text" />
              {values.title && (
                <ClearButton type="button" onClick={() => setFieldValue('title', '', false)}>
                  <SWMIconPack.CrossSmall set="outline" size={24} color="#7B61FF" />
                </ClearButton>
              )}

              {errors.title && <Error>Invalid input</Error>}
            </InputWrapper>

            <InputWrapper>
              <label htmlFor="description">Description</label>
              <Field component="textarea" id="description" name="description" type="text" />
              {values.description && (
                <ClearButton type="button" onClick={() => setFieldValue('description', '', false)}>
                  <SWMIconPack.CrossSmall set="outline" size={24} color="#7B61FF" />
                </ClearButton>
              )}

              {errors.description && <Error>Invalid input</Error>}
            </InputWrapper>

            <InputWrapper>
              <label htmlFor="date">Select date</label>
              <Field
                id="date"
                name="date"
                type="button"
                onClick={() => setCalendarIsOpen(prev => !prev)}
              />

              <ToggleButton type="button" onClick={() => setCalendarIsOpen(prev => !prev)}>
                {calendarIsOpen ? (
                  <SWMIconPack.ChevronSmallUp set="outline" size={24} color="#7B61FF" />
                ) : (
                  <SWMIconPack.ChevronSmallDown set="outline" size={24} color="#7B61FF" />
                )}
              </ToggleButton>
              {calendarIsOpen && (
                <Calendar
                  onClose={setCalendarIsOpen}
                  setSelectedDate={setFieldValue}
                  selectedDate={values.date === 'Select' ? '' : values.date}
                  setDateUTC={setDateUTC}
                />
              )}
              {errors.date && <Error>Invalid input</Error>}
            </InputWrapper>

            <InputWrapper>
              <label htmlFor="time">Select time</label>
              <Field
                id="time"
                name="time"
                type="button"
                onClick={() => setTimePickerIsOpen(prev => !prev)}
              />
              <ToggleButton type="button" onClick={() => setTimePickerIsOpen(prev => !prev)}>
                {timePickerIsOpen ? (
                  <SWMIconPack.ChevronSmallUp set="outline" size={24} color="#7B61FF" />
                ) : (
                  <SWMIconPack.ChevronSmallDown set="outline" size={24} color="#7B61FF" />
                )}
              </ToggleButton>

              {timePickerIsOpen && (
                <CustomTimePicker
                  setSelectedTime={setFieldValue}
                  selectedTime={values.time}
                  onClose={setTimePickerIsOpen}
                />
              )}
              {errors.time && <Error>Invalid input</Error>}
            </InputWrapper>

            <InputWrapper>
              <label htmlFor="location">Location</label>

              <Field id="location" name="location" type="text" />
              {values.location && (
                <ClearButton type="button" onClick={() => setFieldValue('location', '', false)}>
                  <SWMIconPack.CrossSmall set="outline" size={24} color="#7B61FF" />
                </ClearButton>
              )}
              {errors.location && <Error>Invalid input</Error>}
            </InputWrapper>

            <div>
              <InputWrapper color={categoryListIsOpen ? 'accent' : 'text'} type="select">
                <label htmlFor="category">Category</label>

                <Field
                  id="category"
                  name="category"
                  type="button"
                  onClick={() => setCategoryListIsOpen(prev => !prev)}
                />

                <ToggleButton type="button" onClick={() => setCategoryListIsOpen(prev => !prev)}>
                  {categoryListIsOpen ? (
                    <SWMIconPack.ChevronSmallUp set="outline" size={24} color="#7B61FF" />
                  ) : (
                    <SWMIconPack.ChevronSmallDown set="outline" size={24} color="#7B61FF" />
                  )}
                </ToggleButton>

                {errors.category && <Error>Invalid input</Error>}

                {categoryListIsOpen && (
                  <DropDownList>
                    {eventCategories.map(({ id, category }) => (
                      <li key={id}>
                        <button type="button" onClick={() => onCategory(setFieldValue, category)}>
                          {category}
                        </button>
                      </li>
                    ))}
                  </DropDownList>
                )}
              </InputWrapper>
            </div>

            <InputWrapper>
              <label htmlFor="image">Add picture</label>

              <Field id="image" name="image" type="text" title="put your link here" />
              {values.image && (
                <ClearButton type="button" onClick={() => setFieldValue('image', '', false)}>
                  <SWMIconPack.CrossSmall set="outline" size={24} color="#7B61FF" />
                </ClearButton>
              )}
              {errors.image && <Error>Invalid input</Error>}
            </InputWrapper>

            <div>
              <InputWrapper color={priorityListIsOpen ? 'accent' : 'text'} type="select">
                <label htmlFor="priority">Priority</label>
                <Field
                  id="priority"
                  name="priority"
                  type="button"
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
                        <button type="button" onClick={() => onPriority(setFieldValue, priority)}>
                          {priority}
                        </button>
                      </li>
                    ))}
                  </DropDownList>
                )}
                {errors.priority && <Error>Invalid input</Error>}
              </InputWrapper>
            </div>
          </FormContainer>
          <AddButton type="submit">{`${type} event`}</AddButton>
        </StyledForm>
      )}
    </Formik>
  );
};

export default Form;

Form.propTypes = {
  type: PropTypes.string.isRequired,
  event: PropTypes.object,
};
