import { SWMIcon } from 'react-swm-icon-pack';
import { StyledForm } from './SearchForm.styled';

const SearchForm = () => {
  return (
    <StyledForm>
      <button type="submit">
        <SWMIcon name="Search" set="outline" size={24} color="#7B61FF" />
      </button>
      <input type="text" placeholder="Search by keywords" />
    </StyledForm>
  );
};

export default SearchForm;
