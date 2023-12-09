import { useEffect } from "react";
import { Outlet,Link, useNavigate } from "react-router-dom";

export default function AuthLayout(){
    const navegate =useNavigate()

    useEffect(()=>{
        if (!window.localStorage.getItem('ACCSESS_TOKEN')) {
            navegate("/login");
        }
    },[])
    return(
        <>
        <header>
            <nav className="navbar navbar-expand-lg" style={{background:"#cdd0d3"}}>
                <div className="container">
                <a className="navbar-brand" href="/">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Logout</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/register">Register</Link>
                    </li>
                    </ul>
                </div>
                </div>
            </nav>
        </header>
        <main><Outlet/></main>
        <footer>footer</footer>
        </>
    )
}