import { memo } from 'react';
import { Image, View, Text } from 'react-native';

import { IMAGEHEIGHT } from '../../constants/sizes';
import { ImageFrameProps } from './types';
import { styles } from './styles';

const ImageFrame = ({ data }: ImageFrameProps) => {
  return (
    <View style={{
      ...styles.container,
      height: data.caption ? IMAGEHEIGHT + 24 : IMAGEHEIGHT,
    }}>
      <Image
        source={{
          uri: data.file.url,
          cache: 'force-cache',
        }}
        style={styles.image}
      />
      {data.caption && <Text style={styles.caption}>{data.caption}</Text> }
    </View>
  );
};

export default memo(ImageFrame);
