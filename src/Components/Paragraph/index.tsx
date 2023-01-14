import { useMemo } from 'react';
import { Text } from 'react-native';

import { useParseHtmlTags } from '../../hooks/useParseHtmlTags';
import { ParagraphProps } from './types';
import { styles } from './styles';

const Paragraph = ({ data, fontFamily }: ParagraphProps) => {
  const { parseHtmlTag, defaultListTags } = useParseHtmlTags();

  const parsedText = useMemo(() => parseHtmlTag(defaultListTags, data.text), []);

  return (
    <Text
      accessible
      accessibilityRole="text"
      allowFontScaling={true}
      style={{ ...styles.paragraph, fontFamily }}
    >
      {parsedText}
    </Text>
  );
};

export { Paragraph };
