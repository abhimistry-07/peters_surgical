import { DATA_FAILURE, DATA_REQUEST, DATA_SUCCESS } from "./actionTypes";

const initialState = {
    isLoading: false,
    isError: false,
    data2022: [],
    data2023: []
}

export const reducer = (state = initialState, {
    type, payload }) => {
    switch (type) {
        case DATA_REQUEST:
            return { ...state, isLoading: true }

        case DATA_SUCCESS:
            return { ...state, isLoading: false, data: payload }

        case DATA_FAILURE:
            return { ...state, isLoading: false, isError: true }

        default:
            return state;
    }
}