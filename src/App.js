export const hello = () => {
  //test function return hello
  return "hello";
};

export const add = (x, y) => {
  if (typeof x != "number" || typeof y != "number") {
    return null;
  }
  return x + y;
};
