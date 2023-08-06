import PropTypes from 'prop-types';

import { useMedia } from 'react-use';

import { StyledHeader, Wrapper, Logo, TabletContent } from './Header.styled';
import Container from '../ui/Container/Container';
import CustomSelect from '../ui/CustomSelect/CustomSelect';
import SearchForm from '../SearchForm/SearchForm';
import lang from '../../constants/languages';

const Header = ({ events, setFormatList }) => {
  const isMobile = useMedia('(max-width:767px)');

  return (
    <StyledHeader>
      <Container>
        {isMobile ? (
          <>
            <Wrapper>
              <Logo to="/">Event Planner</Logo>
              <CustomSelect data={lang} />
            </Wrapper>
            <SearchForm events={events} setFormatList={setFormatList} />
          </>
        ) : (
          <TabletContent>
            <Logo to="/">Event Planner</Logo>
            <Wrapper>
              <SearchForm events={events} setFormatList={setFormatList} />
              <CustomSelect data={lang} />
            </Wrapper>
          </TabletContent>
        )}
      </Container>
    </StyledHeader>
  );
};

export default Header;

Header.propTypes = {
  events: PropTypes.array,
  setFormatList: PropTypes.func,
};
