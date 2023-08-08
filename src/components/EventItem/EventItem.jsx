import PropTypes from 'prop-types';

import SubTitle from '../ui/SubTitle/SubTitle';

import dummy from '/images/dummyS.png';

import {
  Item,
  ImageWrapper,
  TagsWrapper,
  Tag,
  Overlay,
  InfoWrapper,
  ReadMoreLink,
} from './EventItem.styled';

const EventItem = ({ id, title, location, description, date, time, image, priority, category }) => {
  const normalizeDescription = description =>
    description.length > 100 ? description.slice(0, 99) + '...' : description;

  return (
    <Item>
      <ImageWrapper>
        <TagsWrapper>
          <Tag>{category}</Tag>
          <Tag $priority={priority.toLowerCase()}>{priority}</Tag>
        </TagsWrapper>
        <img src={image ? image : dummy} alt={title} />
        <Overlay>
          <span>
            {date.slice(0, 5).replaceAll('/', '.')} at {time}
          </span>
          <span>{location}</span>
        </Overlay>
      </ImageWrapper>
      <InfoWrapper>
        <SubTitle>{title}</SubTitle>
        <p>{normalizeDescription(description)}</p>

        <ReadMoreLink to={`event/${id}`}>More info</ReadMoreLink>
      </InfoWrapper>
    </Item>
  );
};

export default EventItem;

EventItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  priority: PropTypes.string.isRequired,
};
