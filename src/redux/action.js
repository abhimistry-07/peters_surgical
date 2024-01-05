import axios from "axios"
import { DATA_FAILURE, DATA_REQUEST } from "./actionTypes"


export const getData = () => (dispatch) => {
    dispatch({ type: DATA_REQUEST })
    try {
        axios.get(`http://localhost:8080/allData2023`)
    } catch (error) {
        dispatch({ type: DATA_FAILURE })
    }
}