import { SEARCHED_ITEM, SEARCH_INPUT_VALUE, SET_MAIN_CATAGORY, SET_PHONE, SET_TRENDING } from "./actionType";

const setTrending = (data) => ({
    type: SET_TRENDING,
    payload: data
})

const setPhone = (data) => ({
    type: SET_PHONE,
    payload: data
})

const setMainCatagory = (data) => ({
    type: SET_MAIN_CATAGORY,
    payload: data
})

export const fetchTrending = () => {
    return (dispatch) => {
        fetch('http://localhost:8080/trending')
        .then(res => res.json())
        .then(data => dispatch(setTrending(data)))
    }
}

export const fetchPhone = () => {
    return (dispatch) => {
        fetch('http://localhost:8080/phone')
        .then(res => res.json())
        .then(data => dispatch(setPhone(data)))
    }
}

export const fetchMainCatagory = () => {
    return (dispatch) => {
        fetch('http://localhost:8080/mainCatagory')
        .then(res => res.json())
        .then(data => dispatch(setMainCatagory(data)))
    }
}

export const SearchInputValue = (data) => ({
    type: SEARCH_INPUT_VALUE,
    payload: data
})

export const fetchSearchedItem = (data) => ({
    type: SEARCHED_ITEM,
    payload: data
})