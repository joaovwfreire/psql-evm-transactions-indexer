import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";

const Menu = () =>{
    return(
      <nav className="navbar fixed-top navbar-inverse navbar-expand-lg navbar-light " id='navbar'>
      <div className="container-fluid">
        <h2 className="navbar-brand mt-3 text-white" ><b> jb Explorer</b></h2>
    
        <svg className="bi bi-menu-button-wide navbar-toggler mt-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" xmlns="http://www.w3.org/2000/svg" width="55" height="55" fill="white"  viewBox="0 0 16 16">
          <path d="M0 1.5A1.5 1.5 0 0 1 1.5 0h13A1.5 1.5 0 0 1 16 1.5v2A1.5 1.5 0 0 1 14.5 5h-13A1.5 1.5 0 0 1 0 3.5v-2zM1.5 1a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-13z"/>
          <path d="M2 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm10.823.323-.396-.396A.25.25 0 0 1 12.604 2h.792a.25.25 0 0 1 .177.427l-.396.396a.25.25 0 0 1-.354 0zM0 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V8zm1 3v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2H1zm14-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2h14zM2 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"/>
        </svg>
      
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
      
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item hoverable">
              <a className="nav-link shadow-lg aaa btn btn-light mt-1 mx-2 text-black" aria-current="page" href="/"><b>Home</b></a>
            </li>
            <li className="nav-item hoverable ">
              <a className="nav-link shadow-lg aaa btn btn-light  mt-1 mx-2 text-black" href="/user"><b>User</b></a>
            </li>
            <li className="nav-item hoverable ">
              <a className="nav-link shadow-lg aaa btn btn-light  mt-1 mx-2 text-black" href="#"><b>Snapshots</b></a>
            </li>
            <li className="nav-item dropdown hoverable">
              <a className="nav-link shadow-lg aaa dropdown-toggle btn btn-light mt-1 mx-2 text-black" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <b>Premium</b>
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item hoverable" href="#">Lorem</a></li>
                <li><a className="dropdown-item" href="#">Ipsum</a></li>
                <li><hr className="dropdown-divider"/></li>
                <li><a className="dropdown-item hoverable" href="#">Ipsum Lorem</a></li>
              </ul>
            </li>
    
          </ul>
          <ConnectButton />
        </div>
      </div>
    </nav>
    );
}

export default Menu;