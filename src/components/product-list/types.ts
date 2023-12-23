import { IProductDatas } from '@data/products/types';

export interface IRootParams {
  data: IProductDatas[];
  locale: string;
}

export interface IRenderProductCard {
  product: IProductDatas;
  load?: boolean;
}
