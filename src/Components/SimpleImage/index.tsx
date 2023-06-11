import { View, Text } from 'react-native';

import { ISimpleImageProps } from './types';
import { FullWidthImage } from '../FullWidthImage';
import { styles } from './styles';

const SimpleImage = ({ data, captionFontFamily, style, ...rest }: ISimpleImageProps) => {
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
        source={{ uri: data.url }}
        uri={data.url}
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
