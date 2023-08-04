import { useState } from 'react';

import PropTypes from 'prop-types';

import * as SWMIconPack from 'react-swm-icon-pack';

import ToolItem from '../ToolItem/ToolItem';

import { ToolsList, CreateLink } from './HomeTools.styled';

const HomeTools = ({ getCategory, getSortType }) => {
  const [category, setCategory] = useState('');
  const [categoryListIsOpen, setCategoryListIsOpen] = useState(false);
  const [sort, setSort] = useState('');
  const [sortListIsOpen, setSortListIsOpen] = useState(false);

  const selectCategory = selectedCategory => {
    setCategory(selectedCategory);
    setCategoryListIsOpen(false);
    getCategory(selectedCategory);
  };

  const selectSortType = (sortType, icon) => {
    setSort(sortType);
    getSortType(sortType, icon);
    setSortListIsOpen(false);
  };

  return (
    <ToolsList>
      <ToolItem
        type="category"
        category={category}
        setCategory={setCategory}
        categoryListIsOpen={categoryListIsOpen}
        setCategoryListIsOpen={setCategoryListIsOpen}
        selectCategory={selectCategory}
        sortListIsOpen={sortListIsOpen}
      />
      <ToolItem
        type="sort"
        sort={sort}
        setSort={setSort}
        sortListIsOpen={sortListIsOpen}
        setSortListIsOpen={setSortListIsOpen}
        selectSortType={selectSortType}
        categoryListIsOpen={categoryListIsOpen}
      />
      <li>
        <CreateLink to="/create">
          <SWMIconPack.Plus set="outline" size={24} color="#FFFFFF" />
          <span>Add new event</span>
        </CreateLink>
      </li>
    </ToolsList>
  );
};

export default HomeTools;

HomeTools.propTypes = {
  data: PropTypes.array,
  setData: PropTypes.func,
  getCategory: PropTypes.func,
  getSortType: PropTypes.func,
};
