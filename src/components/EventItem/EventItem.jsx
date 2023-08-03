import PropTypes from 'prop-types';

import SubTitle from '../ui/SubTitle/SubTitle';
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
  return (
    <Item>
      <ImageWrapper>
        <TagsWrapper>
          <Tag>{category}</Tag>
          <Tag priority={priority}>{priority}</Tag>
        </TagsWrapper>
        <img src={image} alt={title} />
        <Overlay>
          <span>
            {date} at {time}
          </span>
          <span>{location}</span>
        </Overlay>
      </ImageWrapper>
      <InfoWrapper>
        <SubTitle>{title}</SubTitle>
        <p>{description}</p>

        <ReadMoreLink to={`event/${id}`}>More info</ReadMoreLink>
      </InfoWrapper>
    </Item>
  );
};

export default EventItem;

EventItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  priority: PropTypes.string.isRequired,
};
