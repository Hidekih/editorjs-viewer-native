import { ViewProps } from 'react-native';

import { IEditorJsData } from './editorJsDataProps';

export type IEditorJsViwerNativeProps = {
  data: IEditorJsData;
} & Pick<ViewProps, 'style'>;

