import { ConnectButton } from "@rainbow-me/rainbowkit";
import { signIn, signOut, useSession } from "next-auth/react"
import Link from "next/link";
import Image from "next/image";
import Lollipop from '../images/lollipop.png';
import styles from "./Menu.module.css"

const Menu = () =>{
  const { data: session, status } = useSession()
  const loading = status === "loading"

    return(
      <nav className="navbar fixed-top navbar-inverse navbar-expand-lg navbar-light border-bottom " id='navbar'>
        
      
      <div className="container-fluid">
        <h2 className="navbar-brand mt-3 text-white" ><b> LolliBlocks </b></h2>
        <Image 
        src={Lollipop}
        width = {50}
        height = {50}
        alt=''
        />
        
        <svg className="bi bi-menu-button-wide navbar-toggler mt-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" xmlns="http://www.w3.org/2000/svg" width="55" height="55" fill="white"  viewBox="0 0 16 16">
          <path d="M0 1.5A1.5 1.5 0 0 1 1.5 0h13A1.5 1.5 0 0 1 16 1.5v2A1.5 1.5 0 0 1 14.5 5h-13A1.5 1.5 0 0 1 0 3.5v-2zM1.5 1a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-13z"/>
          <path d="M2 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm10.823.323-.396-.396A.25.25 0 0 1 12.604 2h.792a.25.25 0 0 1 .177.427l-.396.396a.25.25 0 0 1-.354 0zM0 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V8zm1 3v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2H1zm14-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2h14zM2 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"/>
        </svg>
      
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
      
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item m-1 ">
              <a className="nav-link shadowmenu rounded-3  btn btn-light mt-1 mx-2 text-black" aria-current="page" href="/"><b>Home</b></a>
            </li>
            <li className="nav-item m-1  ">
              <a className="nav-link shadowmenu rounded-3 btn btn-light  mt-1 mx-2 text-black" href="/user"><b>User</b></a>
            </li>
            <li className="nav-item m-1  ">
              <a className="nav-link shadowmenu rounded-3 btn btn-light  mt-1 mx-2 text-black" href="/currentblock"><b>Current Block</b></a>
            </li>
            <li className="nav-item m-1  ">
              <a className="nav-link shadowmenu rounded-3 btn btn-light  mt-1 mx-2 text-black" href="#"><b>Snapshots</b></a>
            </li>
            <li className="nav-item m-1  dropdown">
              <a className="nav-link shadowmenu rounded-3 dropdown-toggle btn btn-light mt-1 mx-2 text-black" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <b>Premium</b>
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item hoverable" href="#">Lorem</a></li>
                <li><a className="dropdown-item" href="#">Ipsum</a></li>
                <li><hr className="dropdown-divider"/></li>
                <li><a className="dropdown-item hoverable" href="#">Ipsum Lorem</a></li>
              </ul>
            </li>
            <li className="nav-item  m-1  ">
          <div
          
        >
          {!session && (
            <>
              
              <a
                href={`/api/auth/signin`}
                className={`nav-link shadowmenu rounded-3 btn btn-light  mt-1 mx-2 text-black `}
                onClick={(e) => {
                  e.preventDefault()
                  signIn()
                }}
              >
                <b>Sign in</b>
              </a>
            </>
          )}
          {session?.user && (
            <>
              {session.user.image && (
                <span
                  style={{ backgroundImage: `url('${session.user.image}')` }}
                  className={`${styles.avatar} `}
                />
              )}
              <span className="mx-2 d-inline-block">
                <small className="text-white">Signed in as</small>
                <br/>
                <strong className="text-white ">{session.user.email ?? session.user.name}</strong>
                <a
                href={`/api/auth/signout`}
                
                onClick={(e) => {
                  e.preventDefault()
                  signOut()
                }}
              >
                <b className={` shadowmenu rounded-3 btn btn-light mx-2 pb-1 fw-bold`}>Sign out</b>
              </a>
              </span>

            </>
          )}
        </div>
          </li>

    
          </ul>
          
          <ConnectButton />
          
        </div>
      </div>
    </nav>
    );
}

export default Menu;