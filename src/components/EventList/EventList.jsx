import PropTypes from 'prop-types';

import EventItem from '../EventItem/EventItem';
import { GridContainer } from './EventList.styled';

const EventList = ({ data }) => {
  return (
    <GridContainer>
      {data.map(({ id, title, location, image, time, date, description, priority, category }) => (
        <EventItem
          key={id}
          id={id}
          title={title}
          location={location}
          image={image}
          time={time}
          date={date}
          description={description}
          priority={priority}
          category={category}
        />
      ))}
    </GridContainer>
  );
};

export default EventList;

EventList.propTypes = {
  data: PropTypes.array,
};
