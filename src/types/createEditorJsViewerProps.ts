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

export interface ICreateEditorJsViewerProps {
  toolsParser?: IToolsParser;
  /**
   * Show a fallback block when type of block is unknown. Default is `false`
   */
  unknownBlockFallback?: boolean;
}

export interface IToolsParser {
  delimiter?: {
    /**
     * A component with type {@link IDelimiterProps} or any for your custom header tool
    */
    CustomComponent?: (props: IDelimiterProps | any ) => JSX.Element;
  },
  header?: {
    /**
     * A component with type {@link IHeaderProps} or any for your custom header tool
    */
    CustomComponent?: (props: IHeaderProps | any ) => JSX.Element;
    /**
     * This prop will be ignored if you use a CustomComponent
    */
    fontFamily?: string;
  }
  image?: {
    /**
     * A component with type {@link IImageFrameProps} or any for your custom image tool
    */
    CustomComponent: (props: IImageFrameProps | any ) => JSX.Element;
    /**
     * This prop will be ignored if you use a CustomComponent
    */
    captionFontFamily?: string;
  }
  linkTool?: {
    /**
     * A component with type {@link ILinkToolProps} or any for your custom linkTool tool
    */
    CustomComponent?: (props: ILinkToolProps | any ) => JSX.Element;
  }
  /**
   * Is not recommended to replace this component because he need a html parser to RN JSX
  */
  list?: {
    /**
     * A component with type {@link IListProps} or any for your custom list tool
    */
    CustomComponent?: (prop: IListProps | any ) => JSX.Element;
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
    CustomComponent?: (props: IParagraphProps | any ) => JSX.Element;
     /**
     * This prop will be ignored if you use a CustomComponent
    */
    fontFamily?: string;
  }
  personality?: {
    /**
     * A component with type {@link IPersonalityProps} or any for your custom paragraph tool
    */
    CustomComponent?: (props: IPersonalityProps | any ) => JSX.Element;
  }
  simpleImage?: {
    /**
     * A component with type {@link ISimpleImageProps } or any for your custom simpleImage tool
    */
    CustomComponent?: (props: ISimpleImageProps | any ) => JSX.Element;
    /**
     * This prop will be ignored if you use a CustomComponent
    */
    captionFontFamily?: string;
  }
  quote?: {
    /**
     * A component with type {@link IQuoteProps } or any for your custom simpleImage tool
    */
    CustomComponent?: (props: IQuoteProps | any ) => JSX.Element;
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
