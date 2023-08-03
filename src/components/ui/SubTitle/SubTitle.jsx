import PropTypes from 'prop-types';

import { StyledSubTitle } from './SubTitle.styled';

const SubTitle = ({ children }) => <StyledSubTitle>{children}</StyledSubTitle>;

export default SubTitle;

SubTitle.propTypes = {
  children: PropTypes.string.isRequired,
};
