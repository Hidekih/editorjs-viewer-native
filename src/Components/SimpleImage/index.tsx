import { Image, View, Text } from 'react-native';

import { IMAGEHEIGHT } from '../../constants/sizes';
import { SimpleImageProps } from './types';
import { styles } from './styles';

const SimpleImage = ({ data, captionFontFamily }: SimpleImageProps) => {
  return (
    <View
      style={{
        ...styles.container,
        height: data.caption ? IMAGEHEIGHT + 24 : IMAGEHEIGHT,
      }}
    >
      <Image
        accessible
        accessibilityHint={`${data.caption} image`}
        accessibilityRole='image'
        source={{ uri: data.url }}
        style={styles.image}
      />

      {data.caption && (
        <Text
          aria-hidden
          style={{ ...styles.caption, fontFamily: captionFontFamily }}
        >
          {data.caption}
        </Text>
      )}
    </View>
  );
};

export { SimpleImage };
