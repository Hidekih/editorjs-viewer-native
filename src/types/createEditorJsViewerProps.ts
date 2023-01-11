import { HeaderProps } from '../components/Header/types';
import { ImageFrameProps } from '../components/ImageFrame/types';
import { BookmarkProps } from '../components/Bookmark/types';
import { ListProps } from '../components/List/types';
import { ParagraphProps } from '../components/Paragraph/types';
import { SimpleImageProps } from '../components/SimpleImage/types';

export type CreateEditorJsViewerProps = {
  toolsParser: {
    header?: {
      /**
       * A component with type {@link HeaderProps}
      */
      CustomComponent?: (prop: HeaderProps) => JSX.Element
      disabled?: boolean;
    }
    image?: {
      /**
       * A component with type {@link ImageFrameProps}
      */
      CustomComponent?: (prop: ImageFrameProps) => JSX.Element
      disabled?: boolean;
    }
    linkTool?: {
      /**
       * A component with type {@link BookmarkProps}
      */
      CustomComponent?: (prop: BookmarkProps) => JSX.Element
      disabled?: boolean;
    }
    /**
     * Is not recommended to replace this component because he need a html parser to RN JSX
    */
    list?: {
      /**
       * A component with type {@link ListProps}
      */
      CustomComponent?: (prop: ListProps) => JSX.Element
      disabled?: boolean;
    }
    /**
     * Is not recommended to replace this component because he need a html parser to RN JSX
    */
    paragraph?: {
      /**
       * A component with type {@link ParagraphProps}
      */
      CustomComponent?: (prop: ParagraphProps) => JSX.Element
      disabled?: boolean;
    }
    simpleImage?: {
      /**
       * A component with type {@link SimpleImageProps }
      */
      CustomComponent?: (prop: SimpleImageProps) => JSX.Element
      disabled?: boolean;
    }
  };
}

