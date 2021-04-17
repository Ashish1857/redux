import {
    GET_CUSTOMERS,
    SELECT_CUSTOMER,
    UPDATE_CUSTOMERS
} from './actionType';

export const getCustomers = () => ({
    type: GET_CUSTOMERS
});

export const fetchAndUpdateCustomers = () =>
    async (dispatch) => fetch(`http://localhost:3000/customers`).then(response => response.json()).then(json => {
        dispatch({
            type: UPDATE_CUSTOMERS,
            payload: json
        });
    });

export const selectCustomer = (payload) => ({
    type: SELECT_CUSTOMER,
    payload: payload
})