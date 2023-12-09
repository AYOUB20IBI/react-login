import { Link,useNavigate} from 'react-router-dom';
import { useState } from 'react';
import { axiosClient } from '../../api/axios';
export default function Register(){
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [password_confirmation,setPasswordConfirmation]=useState("")
    const [name,setName]=useState("")

    // const navigate = useNavigate();

    const changeemail =()=>{
        setEmail(document.getElementById('email').value)
    }
    const changepassword =()=>{
        setPassword(document.getElementById('password').value)
    }
    const changepasswordC =()=>{
        setPasswordConfirmation(document.getElementById('password_confirmation').value)
    }
    const changename =()=>{
        setName(document.getElementById('name').value)
    }

    const handelRegister=async (e)=>{
        e.preventDefault();
        
        try {
            await axiosClient.get('/sanctum/csrf-cookie')
            const data =await axiosClient.post('/register',{
                name:name,
                email:email, 
                password:password,
                password_confirmation:password_confirmation
            })
            console.log(data);
            // setEmail("");
            // setPassword("");
            // setName("");
            // setPasswordConfirmation("");
            // navigate("/");
        } catch (error) {
            console.error(error);
        }
    }
    return(
        <>
            <section className='container p-5' style={{justifyContent: 'center',display: 'flex'}}>
                <div className="form-container">
                    <form className="form" onSubmit={handelRegister}>
                        <input type="text" className="input" id='name' placeholder="Name" value={name} onChange={changename}/>
                        <span style={{color:'red'}}>error</span>
                        <input type="email" className="input" id='email' placeholder="Email" value={email} onChange={changeemail}/>
                        <span style={{color:'red'}}>error</span>
                        <input type="password" className="input" id='password' placeholder="Password" value={password} onChange={changepassword}/>
                        <span style={{color:'red'}}>error</span>
                        <input type="password" className="input" id='password_confirmation' value={password_confirmation} placeholder="Password Confirmation" onChange={changepasswordC}/>
                        <p className="page-link">
                        <Link to="/forgot-password"><span className="page-link-label">Forgot Password?</span></Link>
                        </p>
                        <button className="form-btn">Register</button>
                    </form>
                    <p className="sign-up-label">
                        I have an account?<Link className="sign-up-link" to="/login">Log In</Link>
                    </p>
                </div>
            </section>
        </>
    )
}