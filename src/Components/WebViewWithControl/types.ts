import { WebViewProps } from 'react-native-webview';

export type WebViewWithControlProps = {
  uri: string;
  isOpenWebView: boolean;
  toggleWebViewIsOpen: () => void
} & WebViewProps;
