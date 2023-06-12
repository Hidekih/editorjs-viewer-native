import { View, Text } from 'react-native';

import { FullWidthImage } from '../FullWidthImage';
import { IImageFrameProps } from './types';
import { styles } from './styles';

const ImageFrame = ({ data, captionFontFamily, containerStyle, ...rest }: IImageFrameProps) => {
  return (
    <View style={[ styles.container, containerStyle ]} {...rest} >
      <FullWidthImage
        accessible
        accessibilityHint={`${data.caption} image`}
        accessibilityRole="image"
        source={{ uri: data.file.url }}
        uri={data.file.url}
      />

      {data.caption && (
        <Text aria-hidden style={{ ...styles.caption, fontFamily: captionFontFamily }} >
          {data.caption}
        </Text>
      ) }
    </View>
  );
};

export { ImageFrame };
