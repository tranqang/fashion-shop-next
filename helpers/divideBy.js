const divideBy = (key, inputArray) => {
  if (!inputArray) {
    return [];
  }
  const result = [];
  inputArray.forEach(current => {
    if (!result.includes(current[key])) {
      result.push(current[key]);
    }
  });
  return result;
};
export default divideBy;
