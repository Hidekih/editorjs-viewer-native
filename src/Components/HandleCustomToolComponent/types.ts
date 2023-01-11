import { ReactNode } from 'react';

import { OutputBlockData } from '../../types/editorJsDataProps';

export type HandleCustomToolComponentProps = {
  block: OutputBlockData<string, any>;
  disabled?: boolean;
  defaultComponent: ReactNode;
  customComponent?: ReactNode;
}
