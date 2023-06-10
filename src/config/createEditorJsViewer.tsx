/* eslint-disable react/display-name */
import { memo } from 'react';
import { View } from 'react-native';

import type { IEditorJsViwerNativeProps, ICreateEditorJsViewerProps } from '../types';
import {
  Delimiter,
  FallbackBlock,
  Header,
  ImageFrame,
  LinkTool,
  List,
  Paragraph,
  Personality,
  Quote,
  SimpleImage
} from '../components';

export const createEditorJsViewer = (props?: ICreateEditorJsViewerProps) => {
  const {
    delimiter,
    header,
    image,
    linkTool,
    list,
    paragraph,
    personality,
    simpleImage,
    quote,
  } = props?.toolsParser ?? {};

  return memo(({ data, ...rest }: IEditorJsViwerNativeProps) => (
    <View style={{ width: '100%' }} {...rest}>
      {data.blocks.map((block, index) => {
        // SimpleImage type can be named as `image`
        if (block.type == 'image' && block.data?.file == null) {
          block.type = 'simpleImage';
        }

        const isFirstBlock = index == 0;
        const isLastBlock = index == data.blocks.length - 1;

        // Removing default margin top/bottom from first/last element
        const fixMarginIfIsFirstOrLast = {
          marginTop: isFirstBlock ? 0 : undefined,
          marginBottom: isLastBlock ? 0 : undefined
        };

        switch (block.type) {
          case 'delimiter': {
            const CustomHeader = delimiter?.CustomComponent;

            return CustomHeader ? (
                <CustomHeader key={block.id} data={block.data} />
              ) : (
                <Delimiter
                  key={block.id}
                  data={block.data}
                  style={fixMarginIfIsFirstOrLast}
                />
              );
          }

          case 'header': {
            const CustomHeader = header?.CustomComponent;

            return CustomHeader ? (
                <CustomHeader key={block.id} data={block.data} />
              ) : (
                <Header
                  key={block.id}
                  data={block.data}
                  style={fixMarginIfIsFirstOrLast}
                  fontFamily={header?.fontFamily}
                />
              );
          }

          case 'image': {
            const CustomImage = image?.CustomComponent;

            return CustomImage ? (
                <CustomImage key={block.id} data={block.data} />
              ) : (
                <ImageFrame
                  key={block.id}
                  data={block.data}
                  captionFontFamily={image?.captionFontFamily}
                  style={fixMarginIfIsFirstOrLast}
                />
            );
          }

          case 'linkTool': {
            const CustomLinkTool = linkTool?.CustomComponent;

            return CustomLinkTool ? (
                  <CustomLinkTool key={block.id} data={block.data} />
                ) : (
                  <LinkTool
                    key={block.id}
                    data={block.data}
                    style={fixMarginIfIsFirstOrLast}
                  />
                );
          }

          case 'list': {
            const CustomList = list?.CustomComponent;

            return CustomList ? (
                  <CustomList key={block.id} data={block.data} />
                ) : (
                  <List
                    key={block.id}
                    data={block.data}
                    fontFamily={list?.fontFamily}
                    style={fixMarginIfIsFirstOrLast}
                  />
                );
          }

          case 'paragraph': {
            const CustomParagraph = paragraph?.CustomComponent;

            return CustomParagraph ? (
                  <CustomParagraph key={block.id} data={block.data} />
                ) : (
                  <Paragraph
                    key={block.id}
                    data={block.data}
                    fontFamily={paragraph?.fontFamily}
                    style={fixMarginIfIsFirstOrLast}
                  />
                );
          }

          case 'personality': {
            const CustomPersonality = personality?.CustomComponent;

            return CustomPersonality ? (
                  <CustomPersonality key={block.id} data={block.data} />
                ) : (
                  <Personality
                    key={block.id}
                    data={block.data}
                    style={fixMarginIfIsFirstOrLast}
                  />
                );
          }

          case 'simpleImage': {
            const CustomSimpleImage = simpleImage?.CustomComponent;

            return CustomSimpleImage ? (
                  <CustomSimpleImage key={block.id} data={block.data} />
                ) : (
                  <SimpleImage
                    key={block.id}
                    data={block.data}
                    captionFontFamily={simpleImage?.captionFontFamily}
                    style={fixMarginIfIsFirstOrLast}
                  />
                );
          }

          case 'quote': {
            const CustomQuote = quote?.CustomComponent ?? Quote;

            return CustomQuote ? (
                  <CustomQuote key={block.id} data={block.data} />
                ) : (
                  <Quote
                    key={block.id}
                    data={block.data}
                    quoteFontFamily={quote?.quoteFontFamily}
                    captionFontFamily={quote?.captionFontFamily}
                    style={fixMarginIfIsFirstOrLast}
                  />
                );
          }

          // TODO
          // case 'customBlockType': {
          //   return <></>;
          // }

          default: return props?.unknownBlockFallback ? (
                <FallbackBlock key={block.id} blockType={block.type} />
            ) : (
              null
            );
        }
      })}
    </View>
  ));
};
