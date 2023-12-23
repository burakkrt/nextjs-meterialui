import { IProductDatas } from './types';
import { ICategoryPriority } from './types';

const productsData: Array<IProductDatas> = [
  {
    title: 'Sprinkler Söndürme Sistemleri',
    category: 'Sulu Söndürme Sistemleri',
    path: '',
    imageUrl: '/images/products/f1.jpg',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quos reprehenderit,minus velit autem fugiat odit nostrum, dolores vel expedita, officiis optio mollitia eaque labore delectus eveniet recusandae rerum distinctio?',
  },
  {
    title: 'Yangın Pompaları',
    category: 'Sulu Söndürme Sistemleri',
    path: '',
    imageUrl: '/images/products/f2.jpg',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quos reprehenderit,minus velit autem fugiat odit nostrum, dolores vel expedita, officiis optio mollitia eaque labore delectus eveniet recusandae rerum distinctio?',
  },
  {
    title: 'Yangın Dolapları',
    category: 'Sulu Söndürme Sistemleri',
    path: '',
    imageUrl: '/images/products/f3.jpg',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quos reprehenderit,minus velit autem fugiat odit nostrum, dolores vel expedita, officiis optio mollitia eaque labore delectus eveniet recusandae rerum distinctio?',
  },
  {
    title: 'Yangın Hidrant Sistemleri',
    category: 'Sulu Söndürme Sistemleri',
    path: '',
    imageUrl: '/images/products/f4.jpg',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quos reprehenderit,minus velit autem fugiat odit nostrum, dolores vel expedita, officiis optio mollitia eaque labore delectus eveniet recusandae rerum distinctio?',
  },
  {
    title: 'Water Mist (Su Sisi) Söndürme Sistemleri',
    category: 'Sulu Söndürme Sistemleri',
    path: '',
    imageUrl: '/images/products/f5.jpg',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quos reprehenderit,minus velit autem fugiat odit nostrum, dolores vel expedita, officiis optio mollitia eaque labore delectus eveniet recusandae rerum distinctio?',
  },
];

export const categoryPriority: ICategoryPriority = {
  'Sulu Söndürme Sistemleri': 1,
  'Manuel Söndürme Sistemleri': 2,
  'Manuel Söndürme Sistemleri2': 3,
  'Manuel Söndürme Sistemleri3': 4,
  'Manuel Söndürme Sistemleri4': 5,
};

const sortCategory: IProductDatas[] = productsData.toSorted((a, b) => {
  const priorityA = categoryPriority[a.category] || Object.keys(categoryPriority).length++;
  const priorityB = categoryPriority[b.category] || Object.keys(categoryPriority).length++;

  return priorityA - priorityB;
});

export default sortCategory;
