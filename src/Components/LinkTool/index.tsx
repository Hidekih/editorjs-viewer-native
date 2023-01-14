import { TouchableOpacity, View, Text, Image } from 'react-native';
import { useCallback, useState } from 'react';

import { styles } from './styles';
import { LinkToolProps } from './types';
import { WebViewWithControl } from '../WebViewWithControl';

const LinkTool = ({ data: { link, meta } }: LinkToolProps) => {
  const [ isWebViewOpen, setIsWebViewOpen ] = useState(false);

  const toggleWebViewIsOpen = useCallback(() => {
    setIsWebViewOpen(prevState => !prevState);
  }, []);

  return (
    <>
      <WebViewWithControl
        uri={link}
        isOpenWebView={isWebViewOpen}
        toggleWebViewIsOpen={toggleWebViewIsOpen}
      />

      <TouchableOpacity
        accessible
        accessibilityRole='link'
        accessibilityLabel="Bookmark"
        accessibilityHint="Clique para abrir o link"
        activeOpacity={0.2}
        style={styles.wrapper}
        onPress={() => toggleWebViewIsOpen()}
      >
        <View style={styles.container}>
          <View style={styles.dataContainer}>
            { (meta.title || meta.site_name) && (
              <Text
                style={styles.title}
                numberOfLines={1}
                ellipsizeMode='tail'
              >
                {meta.title || meta.site_name }
              </Text>
            )}

            { meta.description && (
              <Text style={styles.description} numberOfLines={2} ellipsizeMode='tail'>
                {meta.description}
              </Text>
            )}

            { link && (
              <Text style={styles.link} numberOfLines={1} ellipsizeMode='tail'>
                {link}
              </Text>
            )}
          </View>

          <View style={styles.imageContainer}>
            { meta?.image?.url && (
              <Image
                source={{
                  uri: meta.image.url,
                }}
                style={styles.image}
              />
            )}
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};

export { LinkTool };