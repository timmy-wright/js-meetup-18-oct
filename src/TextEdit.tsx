
import * as React from "react";

interface TextEditProps {
    onChange?: (username: string) => void;
    onChangeComplete: (username: string) => void;
    hintText: string;
}

interface TextEditState {
    contents: string;
}

export class TextEdit extends React.Component<TextEditProps, TextEditState> {
    static displayName = "TextEdit";

    public render() {
        return (
            <div>This component is not yet implemented</div>
        );
    }
}
