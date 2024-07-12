import Form from "../components/Form";
import { Link } from 'react-router-dom';
import { useState } from "react";


function Login() {

  const routes = {"login":'/api/user/login/',"register":'/api/user/register/'}
  
  const [method,setMethode] = useState('login')
  const [route,setroute] = useState('/api/token/')
  
  const methode_tochange  = () =>
   { return (
  <span style={{margin:'0px 10px 0px 40px'}}>  Don't have an account?
      <button style={{background:'red',color:'white',margin:'0px 40px '}}   
          onClick ={(e)=>{
            
            if (method=='login') setMethode('register')
            else setMethode('login')
            console.log(method)

            setroute(routes[method]) 
            }
          }
          >Sign up</button>
      </span>)}
  return (
    <div>
  
      <Form route={route} method={method} ChnageMethode={methode_tochange} />;

    </div>
)

}

export default Login