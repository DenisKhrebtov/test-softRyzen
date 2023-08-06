import PropTypes from 'prop-types';

import { useEffect } from 'react';
import { useMedia } from 'react-use';

import { fetchEvents } from '../../api/api';

import { filterByCategory } from '../../utils/filterByCategory';
import { sortList } from '../../utils/sortList';

import EventList from '../../components/EventList/EventList';
import HomeTools from '../../components/HomeTools/HomeTools';
import Title from '../../components/ui/Title/Title';

import { Wrapper } from './Home.styled';

const Home = ({ events, setEvents, formatList, setFormatList }) => {
  const isMobile = useMedia('(max-width:767px)');
  const isTablet = useMedia('(max-width:1279px)');
  const isDesktop = useMedia('(min-width:1280px)');

  useEffect(() => {
    if (!events?.length) {
      fetchEvents().then(data => {
        setEvents(data);
        setFormatList(data);
      });
    }
  }, [events, setEvents, setFormatList]);

  const getCategory = selectedCategory => {
    const filteredEvents = filterByCategory(selectedCategory, events);
    setFormatList(filteredEvents);
  };

  const getSortType = (selectedType, icon) => {
    const sortedEvents = sortList(selectedType, icon, events);
    console.log(sortedEvents);
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

Home.propTypes = {
  events: PropTypes.array,
  setEvents: PropTypes.func,
  formatList: PropTypes.array,
  setFormatList: PropTypes.func,
};
