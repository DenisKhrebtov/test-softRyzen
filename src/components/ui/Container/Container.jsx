import PropTypes from 'prop-types';

import { StyledContainer } from './Container.styled';

const Container = ({ children, type, height }) => (
  <StyledContainer type={type} height={height}>
    {children}
  </StyledContainer>
);

export default Container;

Container.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  height: PropTypes.string,
};
