import React, {useState} from 'react'
import PropTypes from 'prop-types';


async function loginUser(credentials) {

  
 return fetch(process.env.REACT_APP_SERVER + '/login', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json'
   },
   body: JSON.stringify(credentials)
 })
   .then(data => data.json())
}

const Login = ({ setToken }) => {


  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
     
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }




  return ( 
    <body className="bg-default">

  <div className="main-content">

    <div className="header bg-gradient-primary py-7 py-lg-8 pt-lg-9">
      <div className="container">
        <div className="header-body text-center mb-7">
          <div className="row justify-content-center">
            <div className="col-xl-5 col-lg-6 col-md-8 px-5">
              <h1 className="text-white">Welcome!</h1>
              <p className="text-lead text-white">Send scheduled, personalized SMS with unique branded Sender ID.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="separator separator-bottom separator-skew zindex-100">
        <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <polygon className="fill-default" points="2560 0 2560 100 0 100"></polygon>
        </svg>
      </div>
    </div>
    
    <div className="container mt--8 pb-5">
      <div className="row justify-content-center">
        <div className="col-lg-5 col-md-7">
          <div className="card bg-secondary border-0 mb-0">
            
            <div className="card-body px-lg-5 py-lg-5">
              <div className="text-center text-muted mb-4">
                <large>Sign In</large>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                  <div className="input-group input-group-merge input-group-alternative">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><i className="ni ni-email-83"></i></span>
                    </div>
                    <input className="form-control" onChange={e => setUsername(e.target.value)} type="text"></input>
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group input-group-merge input-group-alternative">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><i className="ni ni-lock-circle-open"></i></span>
                    </div>
                    <input className="form-control" onChange={e => setPassword(e.target.value)} type="password"></input>
                  </div>
                </div>
                <div className="custom-control custom-control-alternative custom-checkbox">
                  <input className="custom-control-input" id=" customCheckLogin" type="checkbox"></input>
                  <label className="custom-control-label" for=" customCheckLogin">
                    <span className="text-muted">Remember me</span>
                  </label>
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary my-4">Sign in</button>
                </div>
              </form>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-6">
             
            </div>
            <div className="col-6 text-right">
              <a href="#" className="text-light"><small>Forgot password?</small></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>

   );
}
 
export default Login;

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}


