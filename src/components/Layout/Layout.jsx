import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Container from '../ui/Container/Container';
import { Background } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <Header />
      <Background>
        <Container paddingTop="true" paddingBottom="true">
          <Outlet />
        </Container>
      </Background>
    </>
  );
};

export default Layout;