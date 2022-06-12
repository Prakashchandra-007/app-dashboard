import React from 'react';

function LoginForm(props){
    const customStyles = {
        display:'flex',
      }
return(
    <div className="login-form" style={customStyles}>
            <h1>Log in</h1>
            <button onClick={()=>{
              props.setSigned(true);
            }} type="button" className="Socail-logins"><h2>Google</h2></button>
        </div> 
)
}
export default LoginForm;