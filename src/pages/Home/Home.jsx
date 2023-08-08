import PropTypes from 'prop-types';

import { useEffect, useState } from 'react';
import { useMedia } from 'react-use';

import { fetchEvents } from '../../api/api';

import { filterByCategory } from '../../utils/filterByCategory';
import { sortList } from '../../utils/sortList';

import EventList from '../../components/EventList/EventList';
import HomeTools from '../../components/HomeTools/HomeTools';
import Title from '../../components/ui/Title/Title';

import { Wrapper } from './Home.styled';

const Home = ({ events, setEvents, formatList, setFormatList }) => {
  const [sort, setSort] = useState('');
  const [icon, setIcon] = useState('');
  const isMobile = useMedia('(max-width:767px)');
  const isTablet = useMedia('(max-width:1279px)');
  const isDesktop = useMedia('(min-width:1280px)');

  useEffect(() => {
    fetchEvents().then(data => {
      setEvents(data);
      setFormatList(data);
    });
  }, [setEvents, setFormatList]);

  const getSortType = (selectedType, icon, array = formatList) => {
    if (selectedType === '') {
      const sortedEvents = sortList(selectedType, icon, events);
      setFormatList(sortedEvents);
    } else {
      const sortedEvents = sortList(selectedType, icon, array);
      setFormatList(sortedEvents);
    }
    setSort(selectedType);
    setIcon(icon);
  };

  const getCategory = selectedCategory => {
    if (selectedCategory === '' && sort) {
      getSortType(sort, icon, events);
      return;
    }

    const filteredEvents = filterByCategory(selectedCategory, events);
    setFormatList(filteredEvents);
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
