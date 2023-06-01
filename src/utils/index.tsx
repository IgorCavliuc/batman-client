export const getReducerType = (type = "", key = "", after = "") => {
  return (
    type.toUpperCase() +
    "_" +
    key.toUpperCase() +
    (after ? "_" + after.toUpperCase() : "")
  );
};
