export const sortList = (type, icon, array) => {
  let sortedArray = [];

  if (type === 'by A-Z' || type === 'by Z-A') {
    icon === 'up'
      ? (sortedArray = [...array].sort((a, b) => a.title.localeCompare(b.title)))
      : (sortedArray = [...array].sort((a, b) => b.title.localeCompare(a.title)));
  }

  if (type === 'by priority') {
    const priorityOrder = { Low: 1, Medium: 2, High: 3 };

    sortedArray =
      icon === 'down'
        ? [...array].sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority])
        : [...array].sort((a, b) => priorityOrder[b.priority] - priorityOrder[a.priority]);
  }

  if (type === 'by date') {
    const compareDatesAndTimes = (eventA, eventB) => {
      const dateTimeA = new Date(eventA.dateUTC);
      const dateTimeB = new Date(eventB.dateUTC);

      return icon === 'down' ? dateTimeA - dateTimeB : dateTimeB - dateTimeA;
    };

    sortedArray = [...array].sort(compareDatesAndTimes);
  }

  return sortedArray.length ? sortedArray : array;
};
