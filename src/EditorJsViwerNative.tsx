import { Text, View } from 'react-native';
import { memo } from 'react';

import Paragraph from './components/Paragraph';
import Header from './components/Header';
import List from './components/List';
import SimpleImage from './components/SimpleImage';

import { EditorJsViwerNativeProps } from './types';

const EditorJsViwerNative = memo(({ data, ...rest }: EditorJsViwerNativeProps) => {
  return (
    <View style={{ width: '100%' }} {...rest}>
      {data.blocks.map((block) => {
        if (block.type == 'image' && block.data?.file == null) {
          block.type = 'simpleImage';
        }

        switch (block.type) {
          case 'paragraph': return (
            <Paragraph key={block.id} data={block.data} />
          );

          case 'header': return (
            <Header key={block.id} data={block.data} />
          );

          case 'list': return (
            <List key={block.id} data={block.data}/>
          );

          case 'simpleImage': return (
            <SimpleImage key={block.id} data={block.data}/>
          );

          default: return (
            <Text>
              O tipo &quot;{block.type}&quot; ainda não é suportado pelo EditorJs Viwer Native
            </Text>
          );
        }
      })}
    </View>
  );
});

EditorJsViwerNative.displayName = 'EditorJsViwerNative';

export { EditorJsViwerNative };
