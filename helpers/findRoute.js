const findRoute = (route, menu) => {
  let result = false;
  if (menu.url === route) {
    result = menu;
  } else if (menu.children) {
    result = menu.children.find(child => child.url === route);
  }
  if (!result) {
    menu.children.forEach(child => {
      child.children.forEach(item => {
        if (item.url === route) {
          result = item;
        }
      });
    });
  }
  return result;
};
export default findRoute;
