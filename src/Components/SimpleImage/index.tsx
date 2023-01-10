import { memo } from 'react';
import { Image, View, Text } from 'react-native';

import { IMAGEHEIGHT } from '../../constants/sizes';
import { SimpleImageProps } from './types';
import { styles } from './styles';

const SimpleImage = ({ data }: SimpleImageProps) => {
  return (
    <View
      accessible
      accessibilityLabel={data.caption}
      style={{
        ...styles.container,
        height: data.caption ? IMAGEHEIGHT + 24 : IMAGEHEIGHT,
      }}
    >
      <Image
        accessibilityRole='image'
        source={{
          uri: data.url,
          cache: 'force-cache',
        }}
        style={styles.image}
      />
      {data.caption && <Text style={styles.caption}>{data.caption}</Text> }
    </View>
  );
};

export default memo(SimpleImage);
