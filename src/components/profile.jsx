import React, {useContext, useState, useEffect} from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import {xContext} from './UserContext';
import { v4 as uuidv4 } from 'uuid';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';

const Profile = () => {

    const ctx = useContext(xContext);
    const [username, setUsername] = useState(ctx.username);
    const [password, setPassword] = useState('');
    const [values, setValues] = useState({
    showPassword: false,
  });

     const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  

     const myupdate = ()=>{
           ctx.updateUser();
     } 
     

      const handleSubmit = (e) => {
        e.preventDefault();

        axios
        .post(process.env.REACT_APP_SERVER + "/updateCredentials",{
         username : username, password : password
        })
        .then(res => {
           
            if (res.data === 1){
    
                Swal.fire({
    
                    title: 'Credentials',
                    text: 'Updated',
                    type: 'success',
                    
                  });
    
            } else {
    
             Swal.fire({
    
                    title: 'Credentials',
                    text: 'Update Failed',
                    type: 'success',
                    
                  });
                 
    
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
      
            myupdate();
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
                  <h3 className="mb-0">Upsdate credntials</h3>
                </div>
                <div className="col-4 text-right">
                                </div>
              </div>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <h6 className="heading-small text-muted mb-4">Update credentials</h6>
                <div className="pl-lg-12">

               
                   <div className="row">
                    <div className="col">
                      <div className="form-group">
                        <label className="form-control-label" for="username">Username</label>
                        <input type="text" onChange={(e)=>setUsername(e.target.value)} className="form-control" placeholder="" autocomplete="off" value={username} required></input>
                      </div>
                    </div>
                  </div>

                   <div className="row">
                    <div className="col">
                      <div className="form-group">
                        <label className="form-control-label" for="password">Password</label>
                        <input endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            } type="password" min="6" max="10" id="password" onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder="" autocomplete="off" value={password} required></input>
                      </div>
                    </div>
                  </div>
                
               
                  </div>
                
                <div className="form-footer"> <button type="submit" className="btn btn-primary float-right">Update</button></div>
             
           
              </form>
            </div>
          </div>
        </div>
        </div>
      </div>
    
      
    </div>
     );
}
 
export default Profile;