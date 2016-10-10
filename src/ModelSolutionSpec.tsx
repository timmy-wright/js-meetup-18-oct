

import {TextEdit} from "./TextEdit";
import * as React from "react";
import {mount} from "enzyme";

describe("The TextEdit component", () => {
    // structural tests
    it("contains a input component", () => {
        const component = mount(<TextEdit hintText="" onChangeComplete={() => {}}/>);
        expect(component.find("input").length).toEqual(1);
    });

    it("contains a ‘div’ for the hint text’", () => {
        const component = mount(<TextEdit hintText="" onChangeComplete={() => {}}/>);
        expect(component.find("[data-id=\"hintText\"]").length).toEqual(1);
    });

    // behavioural tests
    it("renders the hint text into that div", () => {
        const component = mount(<TextEdit hintText="Here is a hint" onChangeComplete={() => {}}/>);
        expect(component.find("[data-id=\"hintText\"]").text()).toEqual("Here is a hint");
    });

    it("calls the ‘onChange’ prop when the text is changed", () => {
        const onChangeSpy = jasmine.createSpy("onChangeSpy");
        const event: React.FormEvent = {
            target: {
                value: "here is a value"
            }
        } as any;

        const component = mount(<TextEdit hintText="Here be a hint" onChangeComplete={() => {}} onChange={onChangeSpy}/>);
        component.find("input").simulate("change", event);
        expect(onChangeSpy).toHaveBeenCalledWith("here is a value");
    });



    it("calls the ‘onChangeComplete’ property when the enter key is pressed", () => {
        const onChangeCompleteSpy = jasmine.createSpy("onChangeCompleteSpy");
        const event: React.KeyboardEvent = {
            target: {
                value: "here is a value"
            },
            key: "Enter"
        } as any;

        const component = mount(<TextEdit hintText="Here be a hint" onChangeComplete={onChangeCompleteSpy} onChange={ () => {}}/>);
        component.find("input").simulate("change", event);
        component.find("input").simulate("keyUp", event);
        expect(onChangeCompleteSpy).toHaveBeenCalledWith("here is a value");
    });


    it("adds the class ‘smallHint’ to the hint when the text box has contents", () => {
        const onChangeSpy = jasmine.createSpy("onChangeSpy");
        const event: React.FormEvent = {
            target: {
                value: "here is a value"
            }
        } as any;

        const component = mount(<TextEdit hintText="Here be a hint" onChangeComplete={() => {}} onChange={onChangeSpy}/>);
        component.find("input").simulate("change", event);

        expect(component.find("[data-id=\"hintText\"]").hasClass("smallHint")).toEqual(true);
    });

});