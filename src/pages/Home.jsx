import { useEffect, useState } from 'react';
import { useMedia } from 'react-use';

import { styled } from 'styled-components';

import { fetchEvents } from '../api/api';

import EventList from '../components/EventList/EventList';
import HomeTools from '../components/HomeTools/HomeTools';
import Title from '../components/ui/Title/Title';
import { filterByCategory } from '../utils/filterByCategory';
import { sortList } from '../utils/sortList';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
`;

const Home = () => {
  const [events, setEvents] = useState(null);
  const [formatList, setFormatList] = useState(null);

  const isMobile = useMedia('(max-width:767px)');
  const isTablet = useMedia('(max-width:1279px)');
  const isDesktop = useMedia('(min-width:1280px)');

  useEffect(() => {
    fetchEvents().then(data => {
      setEvents(data);
      setFormatList(data);
    });
  }, []);

  const getCategory = selectedCategory => {
    const filteredEvents = filterByCategory(selectedCategory, events);
    setFormatList(filteredEvents);
  };

  const getSortType = (selectedType, icon) => {
    const sortedEvents = sortList(selectedType, icon, events);
    setFormatList(sortedEvents);
  };

  return (
    <>
      {!isDesktop && <HomeTools getCategory={getCategory} getSortType={getSortType} />}
      {!isMobile && isTablet && <Title>My events</Title>}
      {isDesktop && (
        <Wrapper>
          <Title>My events</Title>
          <HomeTools getCategory={getCategory} getSortType={getSortType} />
        </Wrapper>
      )}
      {formatList ? <EventList data={formatList} /> : <p>Loading...</p>}
    </>
  );
};

export default Home;
