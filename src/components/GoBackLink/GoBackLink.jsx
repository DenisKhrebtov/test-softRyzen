import PropTypes from 'prop-types';

import * as SWMIconPack from 'react-swm-icon-pack';

import { StyledBackLink } from './GoBackLink.styled';

const GoBackLink = ({ to }) => (
  <StyledBackLink to={to}>
    <SWMIconPack.ArrowLeft set="outline" size={24} color="#7B61FF" />
    Back
  </StyledBackLink>
);

export default GoBackLink;

GoBackLink.propTypes = {
  to: PropTypes.string,
};
