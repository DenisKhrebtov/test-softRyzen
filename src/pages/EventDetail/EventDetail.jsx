import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getEventById } from '../../api/api';

import EventDetailItem from '../../components/EventDetailItem/EventDetailItem';
import GoBackLink from '../../components/GoBackLink/GoBackLink';
import Title from '../../components/ui/Title/Title';

import { Wrapper } from './EventDetail.styled';

const EventDetail = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    getEventById(eventId).then(setEvent);
  }, [eventId]);

  return (
    <>
      <GoBackLink to="/" />

      {event ? (
        <Wrapper>
          <Title>{event.title}</Title>
          <EventDetailItem
            id={event.id}
            title={event.title}
            image={event.image}
            description={event.description}
            date={event.date}
            time={event.time}
            location={event.location}
            priority={event.priority}
            category={event.category}
          />
        </Wrapper>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default EventDetail;
