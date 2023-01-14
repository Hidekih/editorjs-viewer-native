/* eslint-disable react/display-name */
import { memo } from 'react';
import { View } from 'react-native';

import { FallbackBlock } from '../components/FallbackBlock';
import { Paragraph } from '../components/Paragraph';
import { Header } from '../components/Header';
import { List } from '../components/List';
import { SimpleImage } from '../components/SimpleImage';
import { ImageFrame } from '../components/ImageFrame';
import { Bookmark } from '../components/Bookmark';
import { Quote } from '../components/Quote';

import { EditorJsViwerNativeProps } from '../types';
import { ICreateEditorJsViewerProps } from '../types/createEditorJsViewerProps';

export const createEditorJsViewer = ({
  toolsParser,
  unknownBlockFallback = true
}: ICreateEditorJsViewerProps) => {
  const {
    header,
    image,
    linkTool,
    list,
    paragraph,
    simpleImage,
    quote,
  } = toolsParser ?? {};

  return memo(({ data, ...rest }: EditorJsViwerNativeProps) => (
    <View style={{ width: '100%' }} {...rest}>
      {data.blocks.map((block) => {
        if (block.type == 'image' && block.data?.file == null) {
          block.type = 'simpleImage';
        }

        switch (block.type) {
          case 'header': {
            const CustomHeader = header?.CustomComponent;

            return (
              <>
                {CustomHeader ? (
                  <CustomHeader key={block.id} data={block.data} />
                ) : (
                  <Header key={block.id} data={block.data} />
                )}
              </>
            );
          }

          case 'image': {
            const CustomImage = image?.CustomComponent;

            return (
              <>
                {CustomImage ? (
                  <CustomImage key={block.id} data={block.data} />
                ) : (
                  <ImageFrame key={block.id} data={block.data} />
                )}
              </>
            );
          }

          case 'linkTool': {
            const CustomLinkTool = linkTool?.CustomComponent;

            return (
              <>
                {CustomLinkTool ? (
                  <CustomLinkTool key={block.id} data={block.data} />
                ) : (
                  <Bookmark key={block.id} data={block.data} />
                )}
              </>
            );
          }

          case 'list': {
            const CustomList = list?.CustomComponent;

            return (
              <>
                {CustomList ? (
                  <CustomList key={block.id} data={block.data} />
                ) : (
                  <List key={block.id} data={block.data} />
                )}
              </>
            );
          }

          case 'paragraph': {
            const CustomParagraph = paragraph?.CustomComponent;

            return (
              <>
                {CustomParagraph ? (
                  <CustomParagraph key={block.id} data={block.data} />
                ) : (
                  <Paragraph key={block.id} data={block.data} />
                )}
              </>
            );
          }

          case 'simpleImage': {
            const CustomSimpleImage = simpleImage?.CustomComponent;

            return (
              <>
                {CustomSimpleImage ? (
                  <CustomSimpleImage key={block.id} data={block.data} />
                ) : (
                  <SimpleImage key={block.id} data={block.data} />
                )}
              </>
            );
          }

          case 'quote': {
            const CustomQuote = quote?.CustomComponent ?? Quote;

            return (
              <>
                {CustomQuote ? (
                  <CustomQuote key={block.id} data={block.data} />
                ) : (
                  <Quote key={block.id} data={block.data} />
                )}
              </>
            );
          }

          // TODO
          // case 'customBlockType': {
          //   return <></>;
          // }

          default: return (
            <>
              {unknownBlockFallback ? (
                <FallbackBlock key={block.id} blockType={block.type} />
              ) : (
                null
              ) }
            </>
          );
        }
      })}
    </View>
  ));
};
