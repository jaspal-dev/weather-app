export const cleanObject = (obj) => {
  return Object.entries(obj)
    .filter(([_, value]) => value != null)
    .reduce((filteredObj, currentValue) => {
      filteredObj[currentValue[0]] = currentValue[1];
      return filteredObj;
    }, {});
};
