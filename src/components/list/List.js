import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAndUpdateCustomers, selectCustomer } from '../../redux/actionCreator';
import './List.css';

const List = ()=>{
    const customers = useSelector(state=> state.customers);
    const selectedCustomer = useSelector(state=> state.selectedCustomer);
    const dispatch = useDispatch();

    useEffect(()=>{
       dispatch(fetchAndUpdateCustomers());
    },[])

    return(
        <div className={'component customer'}>
            <h1>Customers | Count: {customers && customers.length}</h1>
            <table className="table">
                <thead className="thead-dark">
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Age</th>
                    <th scope="col">Gender</th>
                </tr>
                </thead>
                <tbody>
                    {
                     customers && customers.map(customer =>
                        <tr className={selectedCustomer && (selectedCustomer.id === customer.id) ? 'active':'inactive'}  key={`customer-${customer.id}`} onClick={()=> dispatch(selectCustomer(customer))}>
                            <td>{customer.id}</td>
                            <td>{customer.name}</td>
                            <td>{customer.age}</td>
                            <td>{customer.sex}</td>
                        </tr>
                     )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default List;