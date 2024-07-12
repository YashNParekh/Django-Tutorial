import Form from '../components/Form'
import { useNavigate } from 'react-router-dom';



function Register(){

  const navigate = useNavigate();
    

    return (
    <>
        <Form route='/api/user/register/' method='register'  />
        <span style={{color:'white',display:'block' , textAlign:'center'}}>  Don't have an account?
        <button style={{background:'red',color:'white',margin:'0px 40px '}}   
          onClick ={(e)=>{
            navigate('/login');
            }
          }
          >Sign up</button>
      </span>)
    </>)

}

export default Register