import PropTypes from 'prop-types';
import { StyledContainer } from './Container.styled';

const Container = ({ children, paddingTop, paddingBottom, height }) => (
  <StyledContainer pt={paddingTop} pb={paddingBottom} height={height}>
    {children}
  </StyledContainer>
);

export default Container;

Container.propTypes = {
  children: PropTypes.node,
  paddingTop: PropTypes.string,
  paddingBottom: PropTypes.string,
  height: PropTypes.string,
};
