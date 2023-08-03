import { useMedia } from 'react-use';
import { styled } from 'styled-components';

import EventList from '../components/EventList/EventList';
import HomeTools from '../components/HomeTools/HomeTools';
import Title from '../components/ui/Title/Title';
import { useState } from 'react';
import { example } from '../constants/eventCategories';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
`;

const Home = () => {
  const [data, setData] = useState(example);

  const isMobile = useMedia('(max-width:767px)');
  const isTablet = useMedia('(max-width:1279px)');
  const isDesktop = useMedia('(min-width:1280px)');

  return (
    <>
      {!isDesktop && <HomeTools data={data} setData={setData} />}
      {!isMobile && isTablet && <Title>My events</Title>}
      {isDesktop && (
        <Wrapper>
          <Title>My events</Title>
          <HomeTools data={data} setData={setData} />
        </Wrapper>
      )}
      <EventList data={data} />
    </>
  );
};

export default Home;
