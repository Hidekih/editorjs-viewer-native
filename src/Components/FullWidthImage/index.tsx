import React, { useCallback, useState } from 'react';
import { Image, LayoutChangeEvent, View } from 'react-native';

import style from './styles';
import { IFullWidthImageProps } from './types';

const FullWidthImage = ({ uri, ...props }: IFullWidthImageProps) => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [hasErrorOnSize, setHasErrorOnSize] = useState(false);

  const onLayout = useCallback((event: LayoutChangeEvent) => {
    const containerWidth = event.nativeEvent.layout.width;

    Image.getSize(uri, (w, h) => {
      setWidth(containerWidth);
      setHeight(containerWidth * h / w);
    }, () => {
      setHasErrorOnSize(true);
    });
  }, [uri]);

  return (
    <View onLayout={onLayout} style={style.container}>
      {hasErrorOnSize ? (
        <Image
          style={style.defaultImage}
          { ...props }
        />
      ) : (
        <Image
          style={{ width, height }}
          { ...props }
        />
      )}
    </View>
  );
};

export { FullWidthImage };
