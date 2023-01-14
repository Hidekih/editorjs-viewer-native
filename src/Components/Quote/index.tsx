import { View, Text } from 'react-native';

import { useParseHtmlTags } from '../../hooks/useParseHtmlTags';
import { QuoteProps } from './types';
import { styles } from './styles';
import { useMemo } from 'react';

const Quote = ({ data, quoteFontFamily, captionFontFamily }: QuoteProps) => {
  const { parseHtmlTag, defaultListTags } = useParseHtmlTags();

  const parsedText = useMemo(() => parseHtmlTag(defaultListTags, data.text), []);

  return (
    <View accessible style={styles.container}>
      <Text
        accessibilityRole="text"
        allowFontScaling={true}
        style={{
          ...styles.quoteText,
          textAlign: data.alignment ?? 'left',
          fontFamily: quoteFontFamily,
        }}
      >
        {parsedText}
      </Text>

      {data.caption && (
        <Text
          style={{
            ...styles.caption,
            textAlign: data.alignment ?? 'left',
            fontFamily: captionFontFamily
          }}
        >
          -{data.caption}
        </Text>
      )}
    </View>
  );
};

export { Quote };
