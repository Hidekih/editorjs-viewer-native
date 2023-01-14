import { HeaderProps } from '../components/Header/types';
import { ImageFrameProps } from '../components/ImageFrame/types';
import { BookmarkProps } from '../components/Bookmark/types';
import { ListProps } from '../components/List/types';
import { ParagraphProps } from '../components/Paragraph/types';
import { SimpleImageProps } from '../components/SimpleImage/types';
import { QuoteProps } from '../components/Quote/types';

export interface ICreateEditorJsViewerProps {
  toolsParser?: IToolsParser;
  /**
   * Show a fallbac block when type block type is unknown. Default is `true`
   */
  unknownBlockFallback?: boolean;
}

export interface IToolsParser {
  header?: {
    /**
     * A component with type {@link HeaderProps} or any for your custom header tool
    */
    CustomComponent?: (props: HeaderProps | any ) => JSX.Element
  }
  image?: {
    /**
     * A component with type {@link ImageFrameProps} or any for your custom image tool
    */
    CustomComponent: (props: ImageFrameProps | any ) => JSX.Element
  }
  linkTool?: {
    /**
     * A component with type {@link BookmarkProps} or any for your custom linkTool tool
    */
    CustomComponent?: (props: BookmarkProps | any ) => JSX.Element
  }
  /**
   * Is not recommended to replace this component because he need a html parser to RN JSX
  */
  list?: {
    /**
     * A component with type {@link ListProps} or any for your custom list tool
    */
    CustomComponent?: (prop: ListProps | any ) => JSX.Element
  }
  /**
   * Is not recommended to replace this component because he need a html parser to RN JSX
  */
  paragraph?: {
    /**
     * A component with type {@link ParagraphProps} or any for your custom paragraph tool
    */
    CustomComponent?: (props: ParagraphProps | any ) => JSX.Element
  }
  simpleImage?: {
    /**
     * A component with type {@link SimpleImageProps } or any for your custom simpleImage tool
    */
    CustomComponent?: (props: SimpleImageProps | any ) => JSX.Element
  }
  quote?: {
    /**
     * A component with type {@link QuoteProps } or any for your custom simpleImage tool
    */
    CustomComponent?: (props: QuoteProps | any ) => JSX.Element
  }
}
