import { GET_CUSTOMERS, SELECT_CUSTOMER, UPDATE_CUSTOMERS } from './actionType';
import _ from 'lodash'

const initialState={
    customers:[],
    selectedCustomer: null  
}

const customerReducer=(state = _.cloneDeep(initialState), action)=>{
    switch(action.type){

        case UPDATE_CUSTOMERS:
            return {...state,customers: action.payload }

        case GET_CUSTOMERS: 
            return {...state}
        
        case SELECT_CUSTOMER:
            return {...state, selectedCustomer:action.payload}

        default:
            return {...state}
    }
}

export default customerReducer;