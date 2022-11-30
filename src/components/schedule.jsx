import React, {useContext, useState, useEffect} from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import {xContext} from './UserContext';


const Schedule = () => {

    const [title, setTitle] = useState('');
    const [phone, setPhone] = useState('');
    const [month, setMonth] = useState('');
    const [day, setDay] = useState('');
    const [hour, setHour] = useState('');
    const [mcontacts, setContacts] = useState([]);
    const [message, setMessage] = useState('');
    const [maxlength] = useState(160);
    const [newlength, setNewLength] = useState();
    const ctx = useContext(xContext);


      useEffect(()=>{

        axios.get(process.env.REACT_APP_SERVER + "/contacts")
    .then((response)=>{    

      setContacts(response.data);  
      
           

     }).catch(error => console.error('axios error: ' + error));


    },[]);


     const myupdate = ()=>{
           ctx.updateUser();
     } 
     

        const changeLength = (e)=>{
           setMessage(e.target.value)
           let newl = maxlength - e.target.value.length
           setNewLength(newl) 
          console.log(e.target.value)
     } 

      const handleSubmit = (e) => {
        e.preventDefault();

        axios
        .post(process.env.REACT_APP_SERVER + "/addTask",{
         title : title, message : message, phone : phone, month : month, day :day, hour : hour, source : process.env.REACT_APP_SENDER
        })
        .then(res => {
           
            if (res.data === 0){
    
                Swal.fire({
    
                    title: 'Schedule',
                    text: 'Added',
                    type: 'success',
                    
                  });
    
            setTitle('');
            setPhone('');
            setMessage('');
            setMonth('');
            setDay('');
            setHour('');
            myupdate();
    
            } else {
    
             Swal.fire({
    
                    title: 'Schedule',
                    text: 'Added',
                    type: 'success',
                    
                  });
                   setTitle('');
                    setPhone('');
                    setMessage('');
    
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
      
        setTitle('');
        setPhone('');
        setMessage('');
        setMonth('');
        setDay('');
        setHour('');
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
                  <h3 className="mb-0">Scheduler</h3>
                </div>
                <div className="col-4 text-right">
                                </div>
              </div>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <h6 className="heading-small text-muted mb-4">Scheduler</h6>
                <div className="pl-lg-12">

                   <div className="row">
                    <div className="col">
                       <div className="form-group">
                            <label className="form-control-label" for="input-username">Contact</label>
                        <select  value={phone} onChange={(e)=>setPhone(e.target.value)} type="text" className="form-control js-example-basic-single">
                             <option value="">-- Select --</option>
                            <option value="000000">Send to All</option>
                              {mcontacts.map((t)=>{
                                 return  <option key={t.id} value={t.phone}>{t.reference + " : " + t.phone}</option>
                                
                                   
                              })}
                              
                            
                        </select>
                        </div>
                    </div>
                    </div>

                     <div className="row">
                    <div className="col">
                      <div className="form-group">
                        <label className="form-control-label" for="month">Month</label>
                          <select value={month} onChange={(e)=>setMonth(e.target.value)} type="text" className="form-control">
                                                    <option value="0">January</option>
                                                    <option value="1">February</option>
                                                    <option value="2">March</option>
                                                    <option value="3">April</option>
                                                    <option value="4">May</option>
                                                    <option value="5">June</option>
                                                    <option value="6">July</option>
                                                    <option value="7">August</option>
                                                    <option value="8">September</option>
                                                    <option value="9">October</option>
                                                    <option value="10">November</option>
                                                    <option value="11">December</option>
                                                </select>
                      </div>
                    </div>
                  </div>

                   <div className="row">
                    <div className="col">
                      <div className="form-group">
                        <label className="form-control-label" for="day">Day</label>
                        <input type="number" min="1" max="31" id="day" onChange={(e)=>setDay(e.target.value)} className="form-control" placeholder="" autocomplete="off" value={day} required></input>
                      </div>
                    </div>
                  </div>

                   <div className="row">
                    <div className="col">
                      <div className="form-group">
                        <label className="form-control-label" for="month">Hour</label>
                        <input type="number" min="1" max="24" id="month" onChange={(e)=>setHour(e.target.value)} className="form-control" placeholder="" autocomplete="off" value={hour} required></input>
                      </div>
                    </div>
                  </div>
                

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
                     
                    <label className="form-control-label">Message</label>
                    <textarea rows="4" className="form-control" maxlength={maxlength} onChange={(e)=>changeLength(e)} value={message} autocomplete="off" placeholder="" required></textarea>
                  </div>
                </div>
               
                  </div>
                  <p className="" >Remaining : {newlength}</p>
                </div>
          

                <div className="form-footer"> <button type="submit" className="btn btn-primary float-right">Save</button></div>
             
           
              </form>
            </div>
          </div>
        </div>
        </div>
      </div>
    
      
    </div>
     );
}
 
export default Schedule;