import React, {useState, useEffect} from 'react'
import axios from 'axios'


const Reports = () => {

const [mreports, setReports] = useState([]);


      useEffect(()=>{

        axios.get(process.env.REACT_APP_SERVER + "/reports")
    .then((response)=>{    

      
      console.log(response.data);
      setReports(response.data);  
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
              <h3 className="mb-0">Report</h3>
            </div>
          
          
              <table id="myexample" className="table table-striped table-bordered" style={{width:'100%'}}>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Message</th>
                    <th scope="col">Status</th>
                     <th scope="col">Number</th>
                    <th scope="col">Date</th>
                 
                  </tr>
                </thead>
                <tbody className="list">

              {mreports.map((t)=>{
    
                    return <tr>
                        <td>{t.title}</td>
                        <td>{t.msg.substring(0,30) + "..."}</td>
                        <td>{
                        t.status === '1701' ? <span class="badge badge-dot mr-4">
                        <i class="bg-success"></i>
                        <span class="status">Delivered</span>
                      </span> : <span class="badge badge-dot mr-4">
                        <i class="bg-danger"></i>
                        <span class="status">Failed</span>
                      </span> }</td>
                      <td>{t.destination}</td>
                        <td>{t.createdAt}</td>
                        
                      
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
 
export default Reports;