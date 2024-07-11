import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN,REFRESH_TOKEN } from "../constants";
import '../styles/Form.css'
import Loading  from '../components/LoadingIndicator';
import LoadingIndicator from "../components/LoadingIndicator";

function Form({route,method}){

    const [username,setUsername] = useState('')
    const [password,setUpassword] = useState('')
    const [loading,setLoading] = useState(false)
    const navigate = useNavigate()

    const name =  method === 'login' ? 'Login' : "Register";

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();

        try {
            const res = await api.post(route, { username, password })
            if (method === 'login') {
                localStorage.setItem(ACCESS_TOKEN,res.data.access)
                localStorage.setItem(REFRESH_TOKEN,res.data.refresh)
                navigate('/')
            } else {
                navigate('/login')
            }
        } catch (error) {
            alert(error)
        } finally {
            setLoading(false)
        }
    };

    return (
    <div style={{padding:'0 auto', height:'100vh' ,width:'100vw',textAlign:'center'}}>
    <form onSubmit={handleSubmit} className="form-container">

            <h1>{name}</h1>
            <input 
            className="form-input"
            type="text"
            value={username}
            onChange={(e)=> {setUsername(e.target.value)}}
            placeholder="Username"   
            />      
            <input 
            type="password"
            className="form-input"
            value={password}
            onChange={(e)=> {setUpassword(e.target.value)}}
            placeholder="Password"   
            />
            {
                loading && <LoadingIndicator />
            }
            <button className="form-button" type="submit">

                {name}

            </button>

    </form> 
    </div>
    
)
}

export default Form 
