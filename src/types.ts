import { ViewProps } from "react-native";

import { EditorJsData } from "./types/editorJsDataProps";

export type EditorJsViwerNativeProps = {
    data: EditorJsData;
} & Pick<ViewProps, "style">;

export default EditorJsViwerNativeProps;