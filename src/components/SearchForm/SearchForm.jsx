import PropTypes from 'prop-types';

import * as SWMIconPack from 'react-swm-icon-pack';
import { CleanButton, StyledInput } from './SearchForm.styled';
import { useState } from 'react';

const SearchForm = ({ events, setFormatList }) => {
  const [query, setQuery] = useState('');

  const onSearch = event => {
    const value = event.target.value.trim().toLowerCase();
    setQuery(value);

    const filteredEvents = events.filter(
      ({ title, description }) =>
        title.toLowerCase().includes(value) || description.toLowerCase().includes(value)
    );

    setFormatList(filteredEvents);
  };

  return (
    <StyledInput>
      <SWMIconPack.Search set="outline" size={24} color="#7B61FF" />

      <input
        type="text"
        placeholder="Search by keywords"
        value={query}
        onChange={e => onSearch(e)}
      />
      {query && (
        <CleanButton
          type="button"
          onClick={() => {
            setQuery('');
            setFormatList(events);
          }}
        >
          <SWMIconPack.CrossSmall set="outline" size={24} color="#7B61FF" />
        </CleanButton>
      )}
    </StyledInput>
  );
};

export default SearchForm;

SearchForm.propTypes = {
  events: PropTypes.array,
  setFormatList: PropTypes.func,
};
