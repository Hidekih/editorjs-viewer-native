import { SafeAreaView, View, Text, TouchableOpacity, useWindowDimensions } from 'react-native';
import { WebView } from 'react-native-webview';

import { styles } from './styles';
import { WebViewWithControlProps } from './types';

const WebViewWithControl = ({ uri, isOpenWebView, toggleWebViewIsOpen }: WebViewWithControlProps) => {
  const { width } = useWindowDimensions();

  return (
    <>
      {isOpenWebView && (
        <SafeAreaView style={styles.container}>
          <View style={styles.control}>
            <TouchableOpacity onPress={() => toggleWebViewIsOpen() }>
              <Text style={styles.controlClose}>x</Text>
            </TouchableOpacity>

            <Text
              numberOfLines={1}
              ellipsizeMode='tail'
              style={styles.uriPreview}
            >
              {uri}
            </Text>
          </View>

          <WebView
            style={{ width, flex: 1, height: '100%' }}
            source={{ uri: 'https://expo.dev' }}
          />
        </SafeAreaView>
      )}
    </>
  );
};

export { WebViewWithControl };
