import PropTypes from 'prop-types';
import { StyledContainer } from './Container.styled';

const Container = ({ children, paddingTop, paddingBottom }) => (
  <StyledContainer pt={paddingTop} pb={paddingBottom}>
    {children}
  </StyledContainer>
);

export default Container;

Container.propTypes = {
  children: PropTypes.node,
  paddingTop: PropTypes.string,
  paddingBottom: PropTypes.string,
};
