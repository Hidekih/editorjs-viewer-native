import { ListProps } from '../types';

export type ItemListProps = {
  value: string;
  index: number;
  listStyle: ListProps['data']['style'];
  fontFamily?: string
}
