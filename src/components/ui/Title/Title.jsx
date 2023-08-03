import PropTypes from 'prop-types';

import { StyledTitle } from './Title.styled';

const Title = ({ children }) => <StyledTitle>{children}</StyledTitle>;

export default Title;

Title.propTypes = {
  children: PropTypes.string.isRequired,
};
