/* eslint-disable react/display-name */
import { memo, useEffect, useState } from 'react';
import { View } from 'react-native';

import type { IEditorJsViwerNativeProps, ICreateEditorJsViewerProps, IComponentObject, IComponentBlockProps } from '../types';
import { Delimiter } from '../components/Delimiter';
import { FallbackBlock } from '../components/FallbackBlock';
import { Header } from '../components/Header';
import { ImageFrame } from '../components/ImageFrame';
import { LinkTool } from '../components/LinkTool';
import { List } from '../components/List';
import { Paragraph } from '../components/Paragraph';
import { Personality } from '../components/Personality';
import { Quote } from '../components/Quote';
import { SimpleImage } from '../components/SimpleImage';

export const createEditorJsViewer = (props?: ICreateEditorJsViewerProps) => {
  const { tools, customTools, showBlockFallback } = props ?? {};

  return memo(({ data, ...rest }: IEditorJsViwerNativeProps) => {
    const [blockComponents, setBlockComponents] = useState<IComponentObject | null>(null);

    useEffect(() => {
      const componentToolsObj: IComponentObject = {
        delimiter: ({ block, containerStyle }: IComponentBlockProps) => {
          const CustomHeader = tools?.delimiter?.Component;
          return CustomHeader ? (
            <CustomHeader data={block.data} containerStyle={containerStyle} />
          ) : (
            <Delimiter
              data={block.data}
              containerStyle={containerStyle}
            />
          );
        },
        header: ({ block, containerStyle }: IComponentBlockProps) => {
          const CustomHeader = tools?.header?.Component;
          return (CustomHeader ? (
            <CustomHeader data={block.data} containerStyle={containerStyle} />
          ) : (
            <Header
              data={block.data}
              style={containerStyle}
              fontFamily={tools?.header?.fontFamily}
            />
          ));
        },
        image: ({ block, containerStyle }: IComponentBlockProps) => {
          const CustomImage = tools?.image?.Component;
          return CustomImage ? (
            <CustomImage  data={block.data} containerStyle={containerStyle} />
          ) : (
            <ImageFrame
              data={block.data}
              captionFontFamily={tools?.image?.captionFontFamily}
              containerStyle={containerStyle}
            />
          );
        },
        linkTool: ({ block, containerStyle }: IComponentBlockProps) => {
          const CustomLinkTool = tools?.linkTool?.Component;
          return CustomLinkTool ? (
            <CustomLinkTool data={block.data} containerStyle={containerStyle} />
          ) : (
            <LinkTool
              data={block.data}
              containerStyle={containerStyle}
            />
          );
        },
        list: ({ block, containerStyle }: IComponentBlockProps) => {
          const CustomList = tools?.list?.Component;
          return CustomList ? (
            <CustomList data={block.data} containerStyle={containerStyle} />
          ) : (
            <List
              data={block.data}
              fontFamily={tools?.list?.fontFamily}
              containerStyle={containerStyle}
            />
          );
        },
        paragraph: ({ block, containerStyle }: IComponentBlockProps) => {
          const CustomParagraph = tools?.paragraph?.Component;
          return CustomParagraph ? (
            <CustomParagraph data={block.data} containerStyle={containerStyle} />
          ) : (
            <Paragraph
              data={block.data}
              fontFamily={tools?.paragraph?.fontFamily}
              style={containerStyle}
            />
          );
        },
        personality: ({ block, containerStyle }: IComponentBlockProps) => {
          const CustomPersonality = tools?.personality?.Component;
          return CustomPersonality ? (
            <CustomPersonality data={block.data} containerStyle={containerStyle} />
          ) : (
            <Personality
              data={block.data}
              containerStyle={containerStyle}
            />
          );
        },
        simpleImage: ({ block, containerStyle }: IComponentBlockProps) => {
          const CustomSimpleImage = tools?.simpleImage?.Component;
          return CustomSimpleImage ? (
            <CustomSimpleImage data={block.data} containerStyle={containerStyle} />
          ) : (
            <SimpleImage
              data={block.data}
              captionFontFamily={tools?.simpleImage?.captionFontFamily}
              containerStyle={containerStyle}
            />
          );
        },
        quote: ({ block, containerStyle }: IComponentBlockProps) => {
          const CustomQuote = tools?.quote?.Component ?? Quote;

          return CustomQuote ? (
            <CustomQuote data={block.data} containerStyle={containerStyle} />
          ) : (
            <Quote
              data={block.data}
              quoteFontFamily={tools?.quote?.quoteFontFamily}
              captionFontFamily={tools?.quote?.captionFontFamily}
              containerStyle={containerStyle}
            />
          );
        },
      };

      if (customTools) {
        Object.entries(customTools).forEach(([key, value]) => {
          if (value.Component) {
            componentToolsObj[key] = value.Component;
          }
        });
      }

      setBlockComponents(componentToolsObj);
    }, [customTools]);

    if (!blockComponents) return null;

    return (
      <View style={{ width: '100%' }} {...rest}>
        {data.blocks.map((block, index) => {
          // Some simpleImage type can be named as `image` but has a difference betwen 'normal' image
          if (block.type == 'image' && block.data?.file == null) {
            block.type = 'simpleImage';
          }

          const isFirstBlock = index == 0;
          const isLastBlock = index == data.blocks.length - 1;

          // Removing default margin top/bottom from first/last element
          const overrideMarginIfIsFirstOrLastElement = {
            marginTop: isFirstBlock ? 0 : undefined,
            marginBottom: isLastBlock ? 0 : undefined
          };

          const ComponentByType = blockComponents[block.type];

          if (ComponentByType) {
            return (
              <ComponentByType
                key={block.id}
                block={block}
                containerStyle={overrideMarginIfIsFirstOrLastElement}
              />
            );
          }

          return showBlockFallback ? (
            <FallbackBlock
              key={block.id}
              blockType={block.type}
              containerStyle={overrideMarginIfIsFirstOrLastElement}
            />
          ) : (
            null
          );
        })}
      </View>
    );
  });
};
