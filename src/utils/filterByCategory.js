export const filterByCategory = (selectedCategory, array) =>
  selectedCategory ? array.filter(({ category }) => category === selectedCategory) : array;
