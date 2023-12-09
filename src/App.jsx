

// import { Link,Route,Routes} from "react-router-dom";
// import Home from "./componenets/pages/Home";
// import Login from "./componenets/pages/Login";
// import Register from "./componenets/pages/Register";
import { RouterProvider } from "react-router-dom"
import { routerh } from "./router/index.jsx"

export default function App(){
  return(
    <>
    <RouterProvider router={routerh}/>
      {/* <nav className="navbar navbar-expand-lg" style={{background:"#cdd0d3"}}>
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
                <Link className="nav-link" to="/login">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">Register</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
        </Routes>
      </div> */}
    </>
  )
}