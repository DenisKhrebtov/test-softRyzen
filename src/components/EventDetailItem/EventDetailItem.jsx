import PropTypes from 'prop-types';

import { useState } from 'react';

import ConfirmModal from '../ui/ConfirmModal/ConfirmModal';

import {
  Item,
  DeleteButton,
  EditLink,
  TagList,
  ButtonWrapper,
  InfoWrapper,
  ImageWrapper,
  Tag,
} from './EventDetailItem.styled';

const EventDetailItem = ({ id, title, description, category, priority, location, date, time }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onDelete = async () => {
    setIsModalOpen(true);
  };

  return (
    <Item>
      <ImageWrapper>
        <img src="/images/dummy.jpg" alt="photo" />
      </ImageWrapper>
      <InfoWrapper>
        <p>{description}</p>
        <TagList>
          <Tag>{category}</Tag>
          <Tag priority={priority.toLowerCase()}>{priority}</Tag>
          <Tag>{location}</Tag>
          <Tag>
            {date} at {time} am
          </Tag>
        </TagList>
        <ButtonWrapper>
          <EditLink>Edit</EditLink>
          <DeleteButton onClick={onDelete}>Delete event</DeleteButton>
        </ButtonWrapper>
      </InfoWrapper>
      {isModalOpen && (
        <ConfirmModal
          text={`Are you sure you want to delete the ${title} event?`}
          onClose={setIsModalOpen}
          eventId={id}
        />
      )}
    </Item>
  );
};

export default EventDetailItem;

EventDetailItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  priority: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};
