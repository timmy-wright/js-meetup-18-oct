
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

    constructor() {
        super();
        this.state = {
            contents: ""
        };
    }

    textChanged(event: React.FormEvent) {
        const newValue: string = (event.target as any).value;

        this.setState({
            contents: newValue
        });

        if (this.props.onChange) {
            this.props.onChange(newValue);
        }
    }

    keyUp(event: React.KeyboardEvent) {
        if (event.key === "Enter") {
            this.props.onChangeComplete(this.state.contents);
        }
    }

    public render() {
        return (
            <div>
                <div data-id="hintText" className={this.state.contents ? "smallHint" : "largeHint"}>{this.props.hintText}</div>
                <input type="text"
                       onChange={(e) => this.textChanged(e)}
                       onKeyUp={(e) => this.keyUp(e)}/>
            </div>
        );
    }
}
