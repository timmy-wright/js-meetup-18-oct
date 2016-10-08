"use strict";
var React = require("react");
var ReactDOM = require("react-dom");
var TextEdit_1 = require("./TextEdit");
(function () {
    ReactDOM.render(React.createElement(TextEdit_1.TextEdit, {onChange: function (value) { console.log(value); }, hintText: "hint here", onChangeComplete: (function (username) { console.log("complete: " + username); })}), document.getElementById("markup"));
})();
//# sourceMappingURL=index.js.map