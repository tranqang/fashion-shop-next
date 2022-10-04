const convertPrice = price => {
  return (price * 1000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') + '₫';
};
export default convertPrice;
