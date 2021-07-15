import React,  { useState } from 'react';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import Header from './components/header';
import Footer from './components/footer';
import Content from './components/content';
import Login from './components/login'
import useToken from './components/useToken';





const App = () => {

   const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return ( 
     <div>
   <Sidebar/>
   <div class="main-content" id="panel">
     <Navbar/>
     <Header/>
     <div class="container-fluid mt--6">
     <Content/>
     </div>
     <Footer/>
   </div>
  </div>
   );
}
 
export default App;
