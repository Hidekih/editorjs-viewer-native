import { View } from 'react-native';
import { memo } from 'react';

import { FallbackBlock } from './components/FallbackBlock';
import { Paragraph } from './components/Paragraph';
import { Header } from './components/Header';
import { List } from './components/List';
import { SimpleImage } from './components/SimpleImage';
import { ImageFrame } from './components/ImageFrame';
import { Bookmark } from './components/Bookmark';

import { EditorJsViwerNativeProps } from './types';

const EditorJsViewerNative = memo(({ data, ...rest }: EditorJsViwerNativeProps) => {
  return (
    <View style={{ width: '100%' }} {...rest}>
      {data.blocks.map((block) => {
        if (block.type == 'image' && block.data?.file == null) {
          block.type = 'simpleImage';
        }

        switch (block.type) {
          case 'header': return (
            <Header key={block.id} data={block.data} />
          );

          case 'image': return (
            <ImageFrame key={block.id} data={block.data}/>
          );

          case 'linkTool': return (
            <Bookmark key={block.id} data={block.data}/>
          );

          case 'list': return (
            <List key={block.id} data={block.data}/>
          );

          case 'paragraph': return (
            <Paragraph key={block.id} data={block.data} />
          );

          case 'simpleImage': return (
            <SimpleImage key={block.id} data={block.data}/>
          );


          default: return <FallbackBlock key={block.id} blockType={block.type}/>;
        }
      })}
    </View>
  );
});

EditorJsViewerNative.displayName = 'EditorJsViewerNative';

export { EditorJsViewerNative };
