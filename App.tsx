import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';

import { createEditorJsViewer } from './src/config/createEditorJsViewer';
import data from './data.json';

const EditorJsViewerNative = createEditorJsViewer({
  unknownBlockFallback: true
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
