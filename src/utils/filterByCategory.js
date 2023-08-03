export const filterByCategory = (selectedCategory, array) => {
  if (!selectedCategory) return array;

  const filteredItems = [...array].filter(
    item => item.category.toLowerCase() === selectedCategory.toLowerCase()
  );

  return filteredItems;
};
