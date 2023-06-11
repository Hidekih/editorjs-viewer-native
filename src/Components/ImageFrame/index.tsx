import { View, Text } from 'react-native';

import { FullWidthImage } from '../FullWidthImage';
import { IImageFrameProps } from './types';
import { styles } from './styles';

const ImageFrame = ({ data, captionFontFamily, style, ...rest }: IImageFrameProps) => {
  return (
    <View
      style={[
        style,
        { ...styles.container }
      ]}
      {...rest}
    >
      <FullWidthImage
        accessible
        accessibilityHint={`${data.caption} image`}
        accessibilityRole="image"
        source={{ uri: data.file.url }}
        uri={data.file.url}
      />

      {data.caption && (
        <Text
          aria-hidden
          style={{ ...styles.caption, fontFamily: captionFontFamily }}
        >
          {data.caption}a
        </Text>
      ) }
    </View>
  );
};

export { ImageFrame };
