import React, {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import {xContext} from './UserContext'


const Tasks = () => {

  const ctx = useContext(xContext);
const [mtasks, setTasks] = useState([]);

  const myupdate = ()=>{
           ctx.updateUser();
     } 

 const handleDelete = (_id) => {
      
    const tasks = mtasks.filter(t => t._id !== _id);
    setTasks(tasks)

      axios.post(process.env.REACT_APP_SERVER + "/deleteTask",{
         _id : _id
        })
        .then((res) => {
          if(res.data === 1){
             myupdate();
          }
          
        })
        .then((err)=>{
          console.log(err)
        })
     }

      useEffect(()=>{

        axios.get(process.env.REACT_APP_SERVER + "/tasks")
    .then((response)=>{    

      
      console.log(response.data);
      setTasks(response.data);  
      const script = document.createElement("script");
      script.src = "/js/mytable.js";
      script.async = true;
      document.body.appendChild(script);
      

     }).catch(error => console.error('axios error: ' + error));


    },[]);



  return ( 

     <div className="container-fluid mt--6">
      <div className="row">
        <div className="col">
          <div className="card">
           
            <div className="card-header border-0">
              <h3 className="mb-0">Scheduled</h3>
            </div>
          
          
              <table id="myexample" className="table table-striped table-bordered" style={{width:'100%'}}>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Month</th>
                    <th scope="col">Day</th>
                    <th scope="col">Hour</th>
                    <th scope="col">Type</th>
                    <th scope="col">Delete</th>
                 
                  </tr>
                </thead>
                <tbody className="list">

              {mtasks.map((t)=>{
    
                    return <tr>
                        <td>{t.title}</td>
                        <td>{t.month + 1}</td>
                        <td>{t.day}</td>
                        <td>{t.hour + 2}</td>
                        <td>{t.phone === '000000' ? 'All' : 'Single'}</td>
                        <td><button onClick={()=>handleDelete(t._id)} type="button" className="btn btn-sm btn-outline-warning">Remove</button></td>
                      
                    </tr>
                            
                    })}
                                  
                  
                </tbody>
              </table>
            
           

          </div>
        </div>
      </div>
    </div>
     
     );
}
 
export default Tasks;