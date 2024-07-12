import Form from "../components/Form";
import { Link, Navigate } from 'react-router-dom';
import { useState } from "react";

import { useNavigate } from 'react-router-dom';
 

function Login() {

  const routes = {"login":'/api/user/login/',"register":'/api/user/register/'}
  
  const [method,setMethode] = useState('login')
  const [route,setroute] = useState('/api/token/')
  
  const navigate = useNavigate();

  return (
    <div>
  
      <Form route={route} method={method}  />;
      <span style={{color:'white',display:'block' , textAlign:'center'}}>  Don't have an account?
      <button style={{background:'red',color:'white',margin:'0px 40px '}}   
          onClick ={(e)=>{
            navigate('/register');
            }
          }
          >Sign up</button>
      </span>)
    </div>
)

}

export default Login