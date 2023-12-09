import { Link, useNavigate } from 'react-router-dom';
import './login.css';
import { useState } from 'react';
import { axiosClient } from '../../api/axios';
import { DASHBOARD_USER } from '../../router';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState({
        errorEmail: "",
        errorPass: ""
    });
    const [loading,setLoading]=useState(false)

    const navigate = useNavigate();

    const handelLogin = async (e) => {
        e.preventDefault();
        setLoading(true)
        try {
            await axiosClient.get('/sanctum/csrf-cookie');
            const response = await axiosClient.post('/login', {
                email: email,
                password: password,
            });

            if (response.status === 204) {
                window.localStorage.setItem('ACCSESS_TOKEN','test')
                navigate(DASHBOARD_USER);
            }
        } catch (error) {
            console.log(error.response.data.errors);
            setError({
                errorEmail: error.response.data.errors.email,
                errorPass: error.response.data.errors.password
            });
            setLoading(false)
        }
    };

    return (
        <>
            <section className='container p-5' style={{ justifyContent: 'center', display: 'flex' }}>
                <div className="form-container">
                    <p className="title">Welcome back</p>
                    <form className="form" method='post'>
                        <input type="email" className="input" id='email' placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <span style={{ color: 'red' }}>{error.errorEmail}</span>
                        <input type="text" className="input" placeholder="Password" id='pass' value={password} onChange={(e) => setPassword(e.target.value)} />
                        <span style={{ color: 'red' }}>{error.errorPass}</span>
                        <p className="page-link">
                            <Link to="/forgot-password"><span className="page-link-label">Forgot Password?</span></Link>
                        </p>
                        <button className="form-btn" onClick={handelLogin}>
                            {loading === true ? <span>Please wait...</span> : <span>Log in</span>}
                        </button>
                    </form>
                    <p className="sign-up-label">
                        Dont have an account?<Link className="sign-up-link" to="/register">Sign up</Link>
                    </p>
                </div>
            </section>
        </>
    );
}
