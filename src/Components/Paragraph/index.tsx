import { memo, useMemo } from 'react';
import { Text } from 'react-native';

import { useParseHtmlTags } from '../../hooks/useParseHtmlTags';
import { ParagraphProps } from './types';
import { styles } from './styles';

const Paragraph = ({ data }: ParagraphProps) => {
  const { parseHtmlTag, defaultListTags } = useParseHtmlTags();

  const parsedText = useMemo(() => parseHtmlTag(defaultListTags, data.text), []);

  return (
    <Text
      accessible
      accessibilityRole="text"
      allowFontScaling={true}
      style={styles.paragraph}
    >
      {parsedText}
    </Text>
  );
};

export default memo(Paragraph);
