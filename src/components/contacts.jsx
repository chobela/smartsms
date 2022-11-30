import React, {useState, useEffect, useContext} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'
import {xContext} from './UserContext'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


const Contacts = () => {

const [selectedFile, setSelectedFile] = useState('');
const [mcontacts, setContacts] = useState([]);
const ctx = useContext(xContext);
const [refreshKey, setRefreshKey] = useState(0);
const [open, setOpen] = useState(false);
const [openD, setOpenD] = useState(false);
const [ref, setRef] = useState('');
const [phone, setPhone] = useState('');

 const handleSubmit = (e) => {
        e.preventDefault();

         handleClose()
      
      axios
        .post(process.env.REACT_APP_SERVER + "/addContact",{
         ref : ref, phone : phone
        })
        .then((res)=>{

             if (res.data === 1){
    
                Swal.fire({
    
                    title: 'Contact',
                    text: 'Added',
                    type: 'success',
                    
                  });
                setRef('');
                setPhone('');
                myupdate();

                } else {

                    Swal.fire({
    
                    title: 'Failed',
                    text: res.data,
                    type: 'error',
                    
                  }) ;

                setRef('');
                setPhone('');
                myupdate();
                }

        })
         .catch((err)=>{

            Swal.fire({
                title: 'Oops!',
                text: 'Something went wrong',
                type: 'error',
                
              })
          
        })
      
      }


  const handleClickOpen = () => {
    setOpen(true);
  };

  const openDeleteModal = () => {
    setOpenD(true);
  };

    const handleClose = () => {
    setOpen(false);
  };

      const handleCloseD = () => {
    setOpenD(false);
  };

    const myupdate = ()=>{
           ctx.updateUser();
     } 

    const handleDeleteAll = ()=>{


       setOpenD(false);

            axios.post(process.env.REACT_APP_SERVER + "/deleteAllContacts")
        .then((res) => {
          if(res.data === 1){
             myupdate();
          }
          
        })
        .then((err)=>{
          console.log(err)
        })
    }

    const handleDelete = (phone) => {
      
    const tasks = mcontacts.filter(t => t.phone !== phone);
    setContacts(tasks)

      axios.post(process.env.REACT_APP_SERVER + "/deleteContact",{
         phone : phone
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

        axios.get(process.env.REACT_APP_SERVER + "/contacts")
    .then((response)=>{    

      
  
      setContacts(response.data);  
      const script = document.createElement("script");
      script.src = "/js/mytable.js";
      script.async = true;
      document.body.appendChild(script);
      

     }).catch(error => console.error('axios error: ' + error));


    },[refreshKey]);

    const handleFileSubmit = (e) => {
        e.preventDefault();
    
      
        const formdata = new FormData();
        formdata.append('myfile',selectedFile);
     
        axios({
            method: "post",
            url: process.env.REACT_APP_SERVER + "/upload",
            data: formdata,
            headers: { "Content-Type": "multipart/form-data" },
          })
            .then(response => {
              //handle success
          
              if (response.data === 0){
    
                Swal.fire({
    
                    title: 'Upload',
                    text: 'Successful',
                    type: 'success',
                    
                  });
    
                  
                  myupdate();
                  setRefreshKey(oldKey => oldKey +1)
                  
               
            } else {
    
                Swal.fire({
    
                    title: 'Upload',
                    text: 'Failed',
                    type: 'error',
                    
                  });
    
                
                //   myupdate();
                   
                  
            }
        })
            .catch(function (response) {
              //handle error
              Swal.fire({
    
                title: 'Failed',
                text: 'Something whent wrong',
                type: 'error',
                
              });
              
              // myupdate();
              
            });
    }


  return ( 
  <React.Fragment>
    <div className="header bg-primary pb-6">
      <div className="container-fluid bg-primary">
        <div className="header-body">
          <div className="row align-items-center py-4">
            <div className="col-lg-6 col-7">
             <form>
              <div className="custom-file">
                  <input  onChange={(e)=>setSelectedFile(e.target.files[0])} name="myfile" type="file" className="custom-file-input" id="customFileLang" lang="en"></input>
                  <label className="custom-file-label" for="customFileLang">Select file</label>

              </div>
            </form>
            </div>
            <div className="col-lg-6 col-5 text-right">
              <Link onClick={handleFileSubmit} className="btn btn-sm btn-neutral">Bulk Upload</Link>
              <Link onClick={handleClickOpen} className="btn btn-sm btn-neutral">Single Upload</Link>
              <Link onClick={openDeleteModal} className="btn btn-sm btn-danger">Remove All</Link>

               <Dialog
        open={openD}
        onClose={handleCloseD}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Remove All?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            You are about to remove all contacts.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseD} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDeleteAll} color="primary" autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
             
       <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
       <form onSubmit={handleSubmit}>
        <DialogContent>
       
          <TextField
            autoFocus
            onChange={(e)=>setRef(e.target.value)}
            value={ref}
            margin="dense"
            id="ref"
            label="Ref"
            type="text"
            fullWidth
          />

          <TextField
            onChange={(e)=>setPhone(e.target.value)}
            value={phone}
            autoFocus
            margin="dense"
            id="phone"
            label="Phone (260******)"
            type="number"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button type="submit" color="primary">
            Upload
          </Button>
        </DialogActions>
        </form>
      </Dialog>
            </div>
          </div>
        </div>
      </div>
    </div>
       

     <div className="container-fluid mt--6">
      <div className="row">
        <div className="col">
          <div className="card">
           
            <div className="card-header border-0">
              <h3 className="mb-0">Contacts</h3>
            </div>
          
          
              <table id="myexample" className="table table-striped table-bordered" style={{width:'100%'}}>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Reference</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Delete</th>
                 
                  </tr>
                </thead>
                <tbody className="list">

              {mcontacts.map((t)=>{
    
                    return <tr key={t._id}>
                        <td>{t.reference}</td>
                        <td>{t.phone}</td>
                         
                        <td><button onClick={()=>handleDelete(t.phone)} type="button" className="btn btn-sm btn-outline-warning">Remove</button></td>
                      
                    </tr>
                            
                    })}
                                  
                  
                </tbody>
              </table>
            
           

          </div>
        </div>
      </div>
    </div>
     </React.Fragment>
     );
}
 
export default Contacts;