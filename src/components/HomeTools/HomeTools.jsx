import { useState } from 'react';

import PropTypes from 'prop-types';

import * as SWMIconPack from 'react-swm-icon-pack';
import ToolItem from '../ToolItem/ToolItem';

import { ToolsList, CreateLink } from './HomeTools.styled';
import { sortList } from '../../utils/sortList';
import { filterByCategory } from '../../utils/filterByCategory';

const HomeTools = ({ setData, data }) => {
  const [category, setCategory] = useState('');
  const [categoryListIsOpen, setCategoryListIsOpen] = useState(false);
  const [sort, setSort] = useState('');
  const [sortListIsOpen, setSortListIsOpen] = useState(false);

  const selectCategory = selectedCategory => {
    setCategory(selectedCategory);
    setCategoryListIsOpen(false);

    const filteredArr = filterByCategory(selectedCategory, data);
    setData(filteredArr);
  };

  const selectSortType = (sortType, icon) => {
    setSort(sortType);
    const newArr = sortList(sortType, icon, data);
    setData(newArr);
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
};
