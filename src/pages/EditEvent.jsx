import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import GoBackLink from '../components/GoBackLink/GoBackLink';
import Title from '../components/ui/Title/Title';

import { getEventById } from '../api/api';
import Form from '../components/Form/Form';

const EditEvent = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    getEventById(eventId).then(setEvent);
  }, [eventId]);

  return (
    <>
      <GoBackLink to={`/event/${eventId}`} />

      <Title>Edit event</Title>

      {event ? <Form event={event} type="Edit" /> : <p>Loading...</p>}
    </>
  );
};

export default EditEvent;
