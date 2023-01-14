import { Image, View, Text } from 'react-native';

import { IMAGEHEIGHT } from '../../constants/sizes';
import { IImageFrameProps } from './types';
import { styles } from './styles';

const ImageFrame = ({ data, captionFontFamily, style, ...rest }: IImageFrameProps) => {
  return (
    <View
      style={[
        style,
        {
          ...styles.container,
          height: data.caption ? IMAGEHEIGHT + 24 : IMAGEHEIGHT,
        }
      ]}
      {...rest}
    >
      <Image
        accessible
        accessibilityHint={`${data.caption} image`}
        accessibilityRole="image"
        source={{ uri: data.file.url }}
        style={styles.image}
      />

      {data.caption && (
        <Text
          aria-hidden
          style={{ ...styles.caption, fontFamily: captionFontFamily }}
        >
          {data.caption}
        </Text>
      ) }
    </View>
  );
};

export { ImageFrame };
