export const getTotalPage = (items: Array<unknown>, perPage: number) =>
  Math.ceil(items.length / perPage);
