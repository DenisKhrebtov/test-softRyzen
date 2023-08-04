import { styled } from 'styled-components';
import EventDetailItem from '../components/EventDetailItem/EventDetailItem';
import GoBackLink from '../components/GoBackLink/GoBackLink';
import Title from '../components/ui/Title/Title';
import { useParams } from 'react-router-dom';

export const Wrapper = styled.div`
  margin: 0 auto;
  width: fit-content;
`;

const EventDetail = () => {
  const { eventId } = useParams();

  console.log(eventId);
  return (
    <>
      <GoBackLink />
      <Wrapper>
        <Title>Gallery</Title>
        <EventDetailItem />
      </Wrapper>
    </>
  );
};

export default EventDetail;
