import React from 'react';
import { useSelector } from 'react-redux';
import './Details.css'

const AddressCard=({title , address=''})=>{
    return(
        <div className="card" key={title} style={{width:'18rem'}}>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{address}</p>
                </div>
         </div>
    )
}

const Details = () => {
    const selectedCustomer = useSelector(state => state.selectedCustomer)
    const addressType = selectedCustomer && selectedCustomer.address && Object.keys(selectedCustomer.address);
    const defaultTitle = selectedCustomer === null ?  'Please select a customer ...' : 'No records found ...'

    return(
        <>
            <h1>Address</h1>
            <div className="component address">    
                    {selectedCustomer && selectedCustomer.address ?
                        addressType.map(key => 
                    <>
                        <AddressCard key={key} title={key} address={selectedCustomer.address[key]}/>
                        <br/>
                    </>
                    ):
                        <AddressCard title={defaultTitle}/>
                    }
            </div>
        </>
    )
}

export default Details;