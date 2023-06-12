import { TouchableOpacity, Linking, View, Text, Image, Alert } from 'react-native';
import { useCallback } from 'react';

import { styles } from './styles';
import { ILinkToolProps } from './types';

const LinkTool = ({ data, containerStyle, ...rest }: ILinkToolProps) => {
  const { link, meta } = data;

  const handleOpenLink = useCallback(async (link: string) => {
    if (!link) {
      Alert.alert('Missing link');
      return;
    }

    try {
      await Linking.openURL(link);
    } catch {
      Alert.alert(`Don't know how to open this URL: ${link}`);
    }
  }, []);

  return (
    <TouchableOpacity
      accessible
      accessibilityRole='link'
      accessibilityLabel="Bookmark"
      accessibilityHint="Clique para abrir o link"
      activeOpacity={0.2}
      style={[ styles.wrapper, containerStyle ]}
      onPress={() => handleOpenLink(link)}
      {...rest}
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
            <Text
              style={styles.description}
              numberOfLines={2}
              ellipsizeMode='tail'
            >
              {meta.description}
            </Text>
          )}

          { link && (
            <Text
              style={styles.link}
              numberOfLines={1}
              ellipsizeMode='tail'
            >
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
  );
};

export { LinkTool };
