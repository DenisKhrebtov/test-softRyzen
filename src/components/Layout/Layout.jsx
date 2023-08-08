import PropTypes from 'prop-types';

import { Outlet } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from '../Header/Header';
import Container from '../ui/Container/Container';

import { Background } from './Layout.styled';

const Layout = ({ events, setFormatList }) => {
  return (
    <>
      <Header events={events} setFormatList={setFormatList} />
      <Background>
        <Container type="container" height="100%">
          <Outlet />
        </Container>
        <ToastContainer />
      </Background>
    </>
  );
};

export default Layout;

Layout.propTypes = {
  events: PropTypes.array,
  setFormatList: PropTypes.func,
};
