import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';

import { createEditorJsViewer } from './src/config/createEditorJsViewer';
import outputData from './outputData.json';

const EditorJsViewerNative = createEditorJsViewer({
  unknownBlockFallback: true
});

export default function App() {
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.container}>
        <EditorJsViewerNative data={outputData} />
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
