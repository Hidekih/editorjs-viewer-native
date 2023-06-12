import { StyleProp, ViewStyle } from 'react-native';
import type {
  IDelimiterProps,
  IHeaderProps,
  IImageFrameProps,
  ILinkToolProps,
  IListProps,
  IParagraphProps,
  IPersonalityProps,
  ISimpleImageProps,
  IQuoteProps
} from '../components';
import { OutputBlockData } from './editorJsDataProps';

export interface IComponentBlockProps<Data extends object = any> {
  block: OutputBlockData<string, Data>;
  containerStyle: StyleProp<ViewStyle>;
}

export interface IComponentObject {
  [key: string]: (param: IComponentBlockProps) => JSX.Element;
}

export interface ICreateEditorJsViewerProps {
  tools?: IToolsParser;
  customTools?: ICustomToolsParser;
  /** Show a fallback Component when type of block is `unknown`. Default is `false`*/
  showBlockFallback?: boolean;
}

export interface IToolsParser {
  delimiter?: {
    /**
     * A component with type {@link IDelimiterProps} or any for your custom header tool
    */
    Component?: (props: IDelimiterProps | any ) => JSX.Element;
  },
  header?: {
    /**
     * A component with type {@link IHeaderProps} or any for your custom header tool
    */
    Component?: (props: IHeaderProps | any ) => JSX.Element;
    /**
     * This prop will be ignored if you use a CustomComponent
    */
    fontFamily?: string;
  }
  image?: {
    /**
     * A component with type {@link IImageFrameProps} or any for your custom image tool
    */
    Component: (props: IImageFrameProps | any ) => JSX.Element;
    /**
     * This prop will be ignored if you use a CustomComponent
    */
    captionFontFamily?: string;
  }
  linkTool?: {
    /**
     * A component with type {@link ILinkToolProps} or any for your custom linkTool tool
    */
    Component?: (props: ILinkToolProps | any ) => JSX.Element;
  }
  /**
   * Is not recommended to replace this component because he need a html parser to RN JSX
  */
  list?: {
    /**
     * A component with type {@link IListProps} or any for your custom list tool
    */
    Component?: (prop: IListProps | any ) => JSX.Element;
    /**
     * This prop will be ignored if you use a CustomComponent
    */
    fontFamily?: string;
  }
  /**
   * Is not recommended to replace this component because he need a html parser to RN JSX
  */
  paragraph?: {
    /**
     * A component with type {@link IParagraphProps} or any for your custom paragraph tool
    */
    Component?: (props: IParagraphProps | any ) => JSX.Element;
     /**
     * This prop will be ignored if you use a CustomComponent
    */
    fontFamily?: string;
  }
  personality?: {
    /**
     * A component with type {@link IPersonalityProps} or any for your custom paragraph tool
    */
    Component?: (props: IPersonalityProps | any ) => JSX.Element;
  }
  simpleImage?: {
    /**
     * A component with type {@link ISimpleImageProps } or any for your custom simpleImage tool
    */
    Component?: (props: ISimpleImageProps | any ) => JSX.Element;
    /**
     * This prop will be ignored if you use a CustomComponent
    */
    captionFontFamily?: string;
  }
  quote?: {
    /**
     * A component with type {@link IQuoteProps } or any for your custom simpleImage tool
    */
    Component?: (props: IQuoteProps | any ) => JSX.Element;
    /**
     * This prop will be ignored if you use a CustomComponent
    */
    quoteFontFamily?: string;
    /**
     * This prop will be ignored if you use a CustomComponent
    */
    captionFontFamily?: string;
  }
}

export interface ICustomToolsParser {
  [key: string]: {
    Component?: (param: IComponentBlockProps) => JSX.Element;
  }
}
