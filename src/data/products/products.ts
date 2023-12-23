import { IProductDatas } from './types';
import { ICategoryPriority } from './types';

const productsData: Array<IProductDatas> = [
  { title: 'The Shawshank Redemption', year: 1994, category: 'ilk' },
  { title: 'The Godfather', year: 1972, category: 'ilk' },
  { title: 'The Godfather', year: 1972, category: 'ikinci' },
  { title: 'The Godfather 2', year: 1972, category: 'ilk' },
  { title: 'The Godfather 2', year: 1972, category: 'üçüncü' },
  { title: 'The Godfather 3', year: 1972, category: 'ikinci' },
];

export const categoryPriority: ICategoryPriority = {
  ilk: 1,
  ikinci: 2,
  üçüncü: 3,
};

const sortCategory: IProductDatas[] = productsData.toSorted((a, b) => {
  const priorityA = categoryPriority[a.category] || Object.keys(categoryPriority).length++;
  const priorityB = categoryPriority[b.category] || Object.keys(categoryPriority).length++;

  return priorityA - priorityB;
});

export default sortCategory;
