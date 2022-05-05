import { ADD_TO_CART, INDIVIDUAL_ITEM, RANGE_VALUE, SEARCHED_ITEM, SEARCH_INPUT_VALUE, SET_MAIN_CATAGORY, SET_PHONE, SET_TRENDING } from "./actionType";
import { initialState } from "./initialState";

export const reducer = (store = initialState, {type, payload}) => {
    switch(type) {
        case SET_TRENDING: {
            return {
                ...store,
                trending: payload
            }
        }
        case SET_PHONE: {
            return {
                ...store,
                phone: payload
            }
        }
        case SET_MAIN_CATAGORY: {
            return {
                ...store,
                mainCatagory: payload
            }
        }
        case SEARCH_INPUT_VALUE: {
            return {
                ...store,
                searchInputValue: payload
            }
        }
        case SEARCHED_ITEM: {
            return {
                ...store,
                searchedItem: payload
            }
        }
        case RANGE_VALUE: {
            return {
                ...store,
                rangeFilterValue: payload
            }
        }
        case INDIVIDUAL_ITEM: {
            return {
                ...store,
                individualItem: payload
            }
        }
        case ADD_TO_CART: {
            return {
                ...store,
                cart: [...store.cart, payload]
            }
        }
        default: {
            return store
        }
    }
}