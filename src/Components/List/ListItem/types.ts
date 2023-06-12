import { IListProps } from '../types';

export type IItemIListProps = {
  value: string;
  index: number;
  listStyle: IListProps['data']['style'];
  fontFamily?: string
}
