import React, { Component, createContext } from 'react';
import axios from 'axios'


export const xContext = createContext();


class UserContext extends Component {

   

   state = {
     contacts : '',
     tasks : '',
     success : '',
     failed : ''
   };
   
 

    setUserObject = user => {
        this.setState(user);
    }
    


    updateUser = ()=>{

    axios.get(process.env.REACT_APP_SERVER + '/getupdate')

    .then((response)=>{    

      this.setState(response.data);  
      console.log(this.state)

     }).catch(error => console.error('axios error: ' + error));
       
    }

      componentDidMount() {
        this.updateUser();
    }
 
    render() { 
        return ( 

            <React.Fragment>
            
            <xContext.Provider value={{...this.state, updateUser : this.updateUser}}>
              
               {this.props.children}
           
            </xContext.Provider>
         
           </React.Fragment>

         );
    }
}
 
export default UserContext;