import { styled } from 'styled-components';
import EventDetailItem from '../components/EventDetailItem/EventDetailItem';
import GoBackLink from '../components/GoBackLink/GoBackLink';
import Title from '../components/ui/Title/Title';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getEventById } from '../api/api';

export const Wrapper = styled.div`
  margin: 0 auto;
  width: fit-content;
`;

const EventDetail = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    getEventById(eventId).then(setEvent);
  }, [eventId]);

  return (
    <>
      <GoBackLink />

      {event ? (
        <Wrapper>
          <Title>{event.title}</Title>
          <EventDetailItem
            id={event.id}
            title={event.title}
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
