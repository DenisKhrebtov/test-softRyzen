import PropTypes from 'prop-types';

import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Container from '../ui/Container/Container';
import { Background } from './Layout.styled';

const Layout = ({ events, setFormatList }) => {
  return (
    <>
      <Header events={events} setFormatList={setFormatList} />
      <Background>
        <Container paddingTop="true" paddingBottom="true" height="100%">
          <Outlet />
        </Container>
      </Background>
    </>
  );
};

export default Layout;

Layout.propTypes = {
  events: PropTypes.array,
  setFormatList: PropTypes.func,
};
