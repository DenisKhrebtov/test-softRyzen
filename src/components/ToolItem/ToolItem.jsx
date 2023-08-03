import PropTypes from 'prop-types';

import * as SWMIconPack from 'react-swm-icon-pack';

import { eventCategories } from '../../constants/eventCategories';
import { sortTypes } from '../../constants/sortTypes';

import { DropDownList, Item, ToolButton } from './ToolItem.styled';
import { useMedia } from 'react-use';

const ToolItem = ({
  type,
  sortListIsOpen,
  setCategoryListIsOpen,
  setSortListIsOpen,
  categoryListIsOpen,
  category,
  selectCategory,
  sort,
  selectSortType,
}) => {
  const isMobile = useMedia('(max-width:767px)');

  if (type === 'category') {
    return (
      <Item type="category" display={isMobile && sortListIsOpen ? 'none' : 'block'}>
        <ToolButton
          type="button"
          onClick={() => setCategoryListIsOpen(prev => !prev)}
          isOpen={categoryListIsOpen}
        >
          <span>{category ? category : 'Category'}</span>
          {category && !isMobile ? (
            <SWMIconPack.Cross
              set="outline"
              size={24}
              color="#3F3F3F"
              onClick={() => selectCategory('')}
            />
          ) : (
            <SWMIconPack.Filters2 set="outline" size={24} color="#3F3F3F" />
          )}
        </ToolButton>
        {categoryListIsOpen && (
          <DropDownList>
            {eventCategories.map(({ category, id }) => (
              <li key={id}>
                <button type="button" onClick={() => selectCategory(category)}>
                  {category}
                </button>
              </li>
            ))}
          </DropDownList>
        )}
      </Item>
    );
  }
  if (type === 'sort') {
    return (
      <Item type="sort" display={isMobile && categoryListIsOpen ? 'none' : 'block'}>
        <ToolButton
          type="button"
          onClick={() => setSortListIsOpen(prev => !prev)}
          py="big"
          isOpen={sortListIsOpen}
        >
          <span>Sort {sort ? sort : 'by'}</span>
          <SWMIconPack.Filters3 set="outline" size={24} color="#3F3F3F" />
        </ToolButton>
        {sortListIsOpen && (
          <DropDownList>
            {sortTypes.map(({ type, id, icon }) => (
              <li key={id}>
                <button type="button" onClick={() => selectSortType(type, icon)}>
                  {type}
                  {icon === 'down' ? (
                    <SWMIconPack.ArrowSmallDown set="outline" size={24} color="#3F3F3F" />
                  ) : (
                    <SWMIconPack.ArrowSmallUp set="outline" size={24} color="#3F3F3F" />
                  )}
                </button>
              </li>
            ))}
          </DropDownList>
        )}
      </Item>
    );
  }
};

export default ToolItem;

ToolItem.propTypes = {
  type: PropTypes.string.isRequired,
  sort: PropTypes.string,
  setSort: PropTypes.func,
  category: PropTypes.string,
  setCategory: PropTypes.func,
  sortListIsOpen: PropTypes.bool,
  categoryListIsOpen: PropTypes.bool,
  setCategoryListIsOpen: PropTypes.func,
  setSortListIsOpen: PropTypes.func,
  selectCategory: PropTypes.func,
  selectSortType: PropTypes.func,
};
