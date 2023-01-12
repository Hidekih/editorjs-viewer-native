/* eslint-disable react/display-name */
import { memo } from 'react';
import { View } from 'react-native';

import { HandleCustomToolComponent } from '../components/HandleCustomToolComponent';
import { FallbackBlock } from '../components/FallbackBlock';
import { Paragraph } from '../components/Paragraph';
import { Header } from '../components/Header';
import { List } from '../components/List';
import { SimpleImage } from '../components/SimpleImage';
import { ImageFrame } from '../components/ImageFrame';
import { Bookmark } from '../components/Bookmark';

import { EditorJsViwerNativeProps } from '../types';
import { CreateEditorJsViewerProps } from '../types/createEditorJsViewerProps';

export const createEditorJsViewer = ({
  toolsParser: {
    header,
    image,
    linkTool,
    list,
    paragraph,
    simpleImage
  }
}: CreateEditorJsViewerProps) => {
  return memo(({ data, ...rest }: EditorJsViwerNativeProps) => {
    return (
      <View style={{ width: '100%' }} {...rest}>
        {data.blocks.map((block) => {
          if (block.type == 'image' && block.data?.file == null) {
            block.type = 'simpleImage';
          }

          switch (block.type) {
            case 'header': {
              const CustomHeader = header?.CustomComponent;
              return (
                <HandleCustomToolComponent
                  block={block}
                  disabled={header?.disabled}
                  defaultComponent={
                    <Header key={block.id} data={block.data} />
                  }
                  customComponent={
                    CustomHeader && <CustomHeader key={block.id} data={block.data} />
                  }
                />
              );
            }

            case 'image': {
              const CustomImage = image?.CustomComponent;
              return (
                <HandleCustomToolComponent
                  block={block}
                  disabled={image?.disabled}
                  defaultComponent={
                    <ImageFrame key={block.id} data={block.data} />
                  }
                  customComponent={
                    CustomImage && <CustomImage key={block.id} data={block.data} />
                  }
                />
              );
            }

            case 'linkTool': {
              const CustomLinkTool = linkTool?.CustomComponent;
              return (
                <HandleCustomToolComponent
                  block={block}
                  disabled={linkTool?.disabled}
                  defaultComponent={
                    <Bookmark key={block.id} data={block.data} />
                  }
                  customComponent={
                    CustomLinkTool && <CustomLinkTool key={block.id} data={block.data} />
                  }
                />
              );
            }

            case 'list': {
              const CustomList = list?.CustomComponent;
              return (
                <HandleCustomToolComponent
                  block={block}
                  disabled={list?.disabled}
                  defaultComponent={
                    <List key={block.id} data={block.data} />
                  }
                  customComponent={
                    CustomList && <CustomList key={block.id} data={block.data} />
                  }
                />
              );
            }

            case 'paragraph': {
              const CustomParagraph = paragraph?.CustomComponent;
              return (
                <HandleCustomToolComponent
                  block={block}
                  disabled={paragraph?.disabled}
                  defaultComponent={
                    <Paragraph key={block.id} data={block.data} />
                  }
                  customComponent={
                    CustomParagraph && <CustomParagraph key={block.id} data={block.data} />
                  }
                />
              );
            }

            case 'simpleImage': {
              const CustomSimpleImage = simpleImage?.CustomComponent;
              return (
                <HandleCustomToolComponent
                  block={block}
                  disabled={simpleImage?.disabled}
                  defaultComponent={
                    <SimpleImage key={block.id} data={block.data} />
                  }
                  customComponent={
                    CustomSimpleImage && <CustomSimpleImage key={block.id} data={block.data} />
                  }
                />
              );
            }

            case 'customBlockType': {
              // TODO
              return <></>;
            }

            default: return <FallbackBlock key={block.id} blockType={block.type} />;
          }
        })}
      </View>
    );
  });
};
