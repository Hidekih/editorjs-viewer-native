import { TouchableOpacity, Linking, View, Text, Image, Alert } from 'react-native';
import { useCallback } from 'react';

import { styles } from './styles';
import { IPersonalityProps } from './types';

const Personality = ({ data: { link, description, name, photo }, style, ...rest }: IPersonalityProps) => {
  const handleOpenLink = useCallback(async (link: string) => {
    try {
      await Linking.openURL(link);
    } catch {
      Alert.alert(`Don't know how to open this URL: ${link}`);
    }
  }, []);

  return (
    <>
      <TouchableOpacity
        accessible
        accessibilityRole='link'
        accessibilityLabel="Bookmark"
        accessibilityHint="Clique para abrir o link"
        activeOpacity={0.2}
        style={[ style, styles.wrapper ]}
        onPress={() => handleOpenLink(link)}
        {...rest}
      >
        <View style={styles.container}>
          <View style={styles.dataContainer}>
            {name && (
              <Text
                style={styles.title}
                numberOfLines={1}
                ellipsizeMode='tail'
              >
                {name}
              </Text>
            )}

            { description && (
              <Text
                style={styles.description}
                numberOfLines={2}
                ellipsizeMode='tail'
              >
                {description}
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
            { photo && (
              <Image
                source={{
                  uri: photo
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

export { Personality };
