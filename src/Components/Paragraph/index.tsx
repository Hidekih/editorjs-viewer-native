import { useMemo } from 'react';
import { Text } from 'react-native';

import { useParseHtmlTags } from '../../hooks/useParseHtmlTags';
import { IParagraphProps } from './types';
import { styles } from './styles';

const Paragraph = ({ data, fontFamily, style, ...rest }: IParagraphProps) => {
  const { parseHtmlTag, defaultListTags } = useParseHtmlTags();

  const parsedText = useMemo(() => parseHtmlTag(defaultListTags, data.text), []);

  return (
    <Text
      accessible
      accessibilityRole="text"
      allowFontScaling={true}
      style={[ styles.paragraph, style, { fontFamily } ]}
      {...rest}
    >
      {parsedText}
    </Text>
  );
};

export { Paragraph };
