import axios from "axios"
import { DATA_FAILURE, DATA_REQUEST, DATA_SUCCESS2022, DATA_SUCCESS2023 } from "./actionTypes"


export const getData = () => (dispatch) => {
    dispatch({ type: DATA_REQUEST })
    // console.log("Hello");

    const url1 = 'https://peters-surgical.onrender.com/allData2023';
    const url2 = 'https://peters-surgical.onrender.com/allData2022';

    axios.all([
        axios.get(url1),
        axios.get(url2)
    ])
        .then(axios.spread((response1, response2) => {
            dispatch({ type: DATA_SUCCESS2023, payload: response1 })
            dispatch({ type: DATA_SUCCESS2022, payload: response2 })
        }))
        .catch((err) => {
            dispatch({ type: DATA_FAILURE })
        })
}