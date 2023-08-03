import * as SWMIconPack from 'react-swm-icon-pack';

import { StyledBackLink } from './GoBackLink.styled';

const GoBackLink = () => (
  <StyledBackLink to="/">
    <SWMIconPack.ArrowLeft set="outline" size={24} color="#7B61FF" />
    Back
  </StyledBackLink>
);

export default GoBackLink;
