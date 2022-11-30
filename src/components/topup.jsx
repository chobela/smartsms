import React, {useContext, useState} from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import {xContext} from './UserContext';


const Topup = () => {

    const [phone, setPhone] = useState('260******');
    const [amount, setAmount] = useState('');

    const ctx = useContext(xContext);

     const myupdate = ()=>{
           ctx.updateUser();
     } 
     

      const handleSubmit = (e) => {
        e.preventDefault();

        console.log("amount :" + amount)

        axios
        .post(process.env.REACT_APP_SERVER + "/topup",{
         phone : phone, amount : amount
        })
        .then(res => {
           
            if (res.data === 1){
    
                Swal.fire({
    
                    title: 'Credit',
                    text: 'Added',
                    type: 'success',
                    
                  });
    
           
            setPhone('');
            setAmount('');
            myupdate();
    
            } else {
    
             Swal.fire({
    
                    title: 'Credit Topup',
                    text: 'Failed',
                    type: 'error',
                    
                  });
                  
                    setPhone('');
                    setAmount('');
    
            }
        }
                       
    )
        .catch(err => 

            Swal.fire({
                title: 'Oops!',
                text: 'Something went wrong',
                type: 'error',
                
              })
        ); 
      
        setPhone('');
       setAmount('');
    }


    return ( 
        
    <div className="container-fluid mt--6">
      
      <div className="row">
     
       <div className="col-xl-6">
       <div>
          <div className="card">
            <div className="card-header">
              <div className="row align-items-center">
                <div className="col-8">
                  <h3 className="mb-0">Topup</h3>
                </div>
                <div className="col-4 text-right">
                                </div>
              </div>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <h6 className="heading-small text-muted mb-4">Topup with Mobile Money (Airtel | MTN | ZAMTEL)</h6>
                <div className="pl-lg-12">


                <div className="row">
                    <div className="col">
                      <div className="form-group">
                        <label className="form-control-label" for="amount">Bundle</label>
                          <select value={amount} onChange={(e)=>setAmount(e.target.value)} type="text" className="form-control">
                             <option value="0">-- Select --</option>
                            <option value="100">K100 - (200 SMS)</option>
                            <option value="150">K150 - (400 SMS)</option>
                            <option value="250">K250 - (650 SMS)</option>
                            <option value="350">K350 - (1000 SMS)</option>
                            <option value="500">k500 - (1500 SMS)</option>
                            <option value="900">K900 - (3000 SMS)</option>
                            <option value="2000">K2000 - (8000 SMS)</option>
                                                    
                        </select>
                      </div>
                    </div>
                  </div>

          
                  <div className="row">
                        <div className="col">
                      <div className="form-group">
                        <label className="form-control-label" for="input-username">Mobile Money Number</label>
                        <input type="number" id="number" className="form-control" placeholder={phone} onChange={(e)=>setPhone(e.target.value)} autocomplete="off" value={phone} required></input>
                      </div>
                    </div>
                    
                  </div>
                </div>
          

                <div className="form-footer"> <button type="submit" className="btn btn-primary float-right">Send</button></div>
             
           
              </form>
            </div>
          </div>
        </div>
        </div>
      </div>
    
      
    </div>
     );
}
 
export default Topup;