
import * as React from "react";
import * as ReactDOM from "react-dom";
import {TextEdit} from "./TextEdit";

(() => {

    ReactDOM.render(
        <TextEdit
            onChange={(value: string) => {console.log(value);}}
            hintText="hint here"
            onChangeComplete={(username => {console.log("complete: " + username)})}
        />,
        document.getElementById("markup")
    );
})();
