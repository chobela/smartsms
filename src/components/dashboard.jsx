import React, {useContext, useState} from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import {xContext} from './UserContext';



const Dashboard = () => {

    const [title, setTitle] = useState('');
    const [mtitle, setMtitle] = useState('');
    const [phone, setPhone] = useState('260******');
    const [message, setMessage] = useState('');
     const [mmessage, setmMessage] = useState('');
    const [maxlength] = useState(640);
    const [newlength, setNewLength] = useState();
     const [mnewlength, setmNewLength] = useState();
     const ctx = useContext(xContext);

     

     const myupdate = ()=>{
           ctx.updateUser();
     } 
     

        const changeLength = (e)=>{
           setMessage(e.target.value)
           let newl = maxlength - e.target.value.length
           setNewLength(newl)  
     } 

          const changemLength = (e)=>{
           setmMessage(e.target.value)
           let newl = maxlength - e.target.value.length
           setmNewLength(newl) 
        
     } 

        const handlemSubmit = (e) => {
        e.preventDefault();

        axios.get(process.env.REACT_APP_SERVER + "/checkBalance")
       .then((response)=>{

        if (response.data > ctx.balance){

           Swal.fire({
    
                    title: 'Failed',
                    text: 'Insufficient credit',
                    type: 'error',
                    
                  }) ;

        } else {

        axios
        .post(process.env.REACT_APP_SERVER + "/bulk",{
         title : mtitle, type : 0, dir:1, source : process.env.REACT_APP_SENDER, message :mmessage, username : 'chobela12', password : 'theresa1'
        })
        .then(res => {
             Swal.fire({
    
                    title: 'Sent',
                    text: 'Messages Sent',
                    type: 'success',
                    
                  });
            setMtitle('');
            setmMessage('');
            myupdate();
        }
                       
    )
        .catch(err => {

            Swal.fire({
                title: 'Oops!',
                text: 'Something went wrong',
                type: 'error'
              })

        setMtitle('');
        setmMessage('');
            }
        ); 

          Swal.fire({
    
                    title: 'Sending',
                    text: 'Sending Messages',
                    type: 'success',
                    
                  });

            setMtitle('');
            setmMessage('');
            myupdate();

        }

      })    
   
    }


      const handleSubmit = (e) => {
        e.preventDefault();


        if(ctx.balance < 1){

           Swal.fire({
    
                    title: 'Failed',
                    text: 'Insufficient credit',
                    type: 'error',
                    
                  }) ;
        } else {

            axios
        .post(process.env.REACT_APP_SERVER + "/sendsms",{
         title : title, type : 0, dir:1, destination : phone, source : process.env.REACT_APP_SENDER, message :message, username : 'chobela12', password : 'theresa1'
        })
        .then(res => {
          
            if (res.data === 1701){
    
                Swal.fire({
    
                    title: 'Sent',
                    text: 'Message Delivered',
                    type: 'success',
                    
                  });
    
            setTitle('');
            setPhone('');
            setMessage('');
            myupdate();
    
            } else {
    
                Swal.fire({
    
                    title: 'Failed',
                    text: res.data,
                    type: 'error',
                    
                  }) ;
                   setTitle('');
                    setPhone('');
                    setMessage('');
    
            }
        }
                       
    )
        .catch(err => {

            Swal.fire({
                title: 'Oops!',
                text: 'Something went wrong',
                type: 'error',
                
              })
               setTitle('');
        setPhone('');
        setMessage('');}
        ); 
          
        }
       
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
                  <h3 className="mb-0">Bulk SMS</h3>
                </div>
                <div className="col-4 text-right">
                                </div>
              </div>
            </div>
            <div className="card-body">
                <form onSubmit={handlemSubmit}>
                <h6 className="heading-small text-muted mb-4">To All contacts</h6>
                <div className="pl-lg-12">
                  <div className="row">
                    <div className="col">
                      <div className="form-group">
                        <label className="form-control-label" for="input-username">Title</label>
                        <input type="text" id="input-username"  onChange={(e)=>setMtitle(e.target.value)} className="form-control" placeholder="" autocomplete="off" value={mtitle} required></input>
                      </div>
                    </div>
                    
                  </div>
                  <div className="row">
                     <div className="col">
                    <div className="form-group">
                     
                    <label className="form-control-label">Message</label>
                    <textarea rows="4" className="form-control" maxlength={maxlength} onChange={(e)=>changemLength(e)} value={mmessage} autocomplete="off" placeholder="" required></textarea>
                  </div>
                </div>
               
                  </div>
                   <p className="" >Remaining : {mnewlength}</p>
                </div>
          

                <div className="form-footer"> <button type="submit" className="btn btn-primary float-right">Send</button></div>
             
           
              </form>
            </div>
          </div>
        </div>
        </div>
   <div className="col-xl-6">
       <div>
          <div className="card">
            <div className="card-header">
              <div className="row align-items-center">
                <div className="col-8">
                  <h3 className="mb-0">Single SMS</h3>
                </div>
                <div className="col-4 text-right">
                                </div>
              </div>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <h6 className="heading-small text-muted mb-4">To Single contact</h6>
                <div className="pl-lg-12">
                  <div className="row">
                    <div className="col">
                      <div className="form-group">
                        <label className="form-control-label" for="input-username">Title</label>
                        <input type="text" id="title" onChange={(e)=>setTitle(e.target.value)} className="form-control" placeholder="" autocomplete="off" value={title} required></input>
                      </div>
                    </div>
                  </div>
<div className="row">
                        <div className="col">
                      <div className="form-group">
                        <label className="form-control-label" for="input-username">Number</label>
                        <input type="number" id="number" className="form-control" placeholder={phone} onChange={(e)=>setPhone(e.target.value)} autocomplete="off" value={phone} required></input>
                      </div>
                    </div>
                    
                  </div>
                  <div className="row">
                     <div className="col">
                    <div className="form-group">
                     
                    <label className="form-control-label">Message</label>
                    <textarea rows="4" className="form-control" maxlength={maxlength} onChange={(e)=>changeLength(e)} value={message} autocomplete="off" placeholder="" required></textarea>
                  </div>
                </div>
               
                  </div>
                  <p className="" >Remaining : {newlength}</p>
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
 
export default Dashboard;