import React from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';

import { createEditorJsViewer } from './src/config/createEditorJsViewer';
import { IComponentBlockProps } from './src/types/createEditorJsViewerProps';
import data from './data.json';

interface IPopcornBlockData {
  text: string;
  emoji: string;
}

const PopcornBlock = ({ block, containerStyle }: IComponentBlockProps<IPopcornBlockData>) => {
  return (
    <View style={[containerStyle, { marginVertical: 8 }]}>
      <Text style={{ fontSize: 20 }}>{block.data.emoji}</Text>
      <Text style={{ color: 'green', fontSize: 20 }}>{block.data.text}</Text>
    </View>
  );
};

interface IRandomColeredTextData {
  text: string;
}

const RandomColeredTextBlock = ({ block, containerStyle }: IComponentBlockProps<IRandomColeredTextData>) => {
  const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
  return (
    <Text style={[containerStyle, { marginVertical: 8, fontSize: 20, color: randomColor }]}>{block.data.text}</Text>
  );
};

const EditorJsViewerNative = createEditorJsViewer({
  customTools: {
    // popcorn: { // This can be any name
    //   Component: PopcornBlock
    // },
    // randomColeredText: { // This can be any name
    //   Component: RandomColeredTextBlock
    // },
  }
});

export default function App() {
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.container}>
        <EditorJsViewerNative data={data} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
