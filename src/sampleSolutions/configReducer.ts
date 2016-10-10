/* eslint-disable */

import {Action} from "redux";

export interface CustomerDataSafeToHaveInBrowser {
    customerNumber: string;
    taxRate: number;
    taxIdentifier: string;
}

export interface ConfigReducerState {
    authorisedWithVend: boolean;
    customerData?: CustomerDataSafeToHaveInBrowser;

    [key: string]: any;
}

export interface ConfigReducerAction extends Action {
    type: string;
    key: string;
    value: any;
}

export class ConfigReducer {
    private static defaultState: ConfigReducerState = {
        authorisedWithVend: false
    };

    private static TYPE_SET_VARIABLE = "config.setVariable";

    private static CUSTOMER_DATA = "customerData";
    private static AUTHORISED_WITH_VEND = "authorisedWithVend";

    private static clone<T>(state: T): T {
        return JSON.parse(JSON.stringify(state));
    };

    static reducer(state: ConfigReducerState = ConfigReducer.defaultState, action: ConfigReducerAction) {
        switch (action.type) {
            case ConfigReducer.TYPE_SET_VARIABLE: {
                const newState = ConfigReducer.clone(state);
                newState[action.key] = action.value;
                return newState;
            }

            default:
                return state;
        }
    };


    private static setVariable(key: string, value: any): ConfigReducerAction {
        return {
            type: ConfigReducer.TYPE_SET_VARIABLE,
            key: key,
            value: value
        };
    }

    static authorisedWithVend(state: ConfigReducerState): boolean {
        return state.authorisedWithVend;
    };

    static setAuthorisedWithVend(authorised: boolean): ConfigReducerAction {
        return ConfigReducer.setVariable(ConfigReducer.AUTHORISED_WITH_VEND, authorised);
    };

    static customerData(state: ConfigReducerState): CustomerDataSafeToHaveInBrowser {
        return state.customerData || {
                customerNumber: "T.B.D.",
                taxRate: 0,
                taxIdentifier: ""
            };
    };

    static setCustomerDetails(customer: CustomerDataSafeToHaveInBrowser): ConfigReducerAction {
        return ConfigReducer.setVariable(ConfigReducer.CUSTOMER_DATA, customer);
    };
}
