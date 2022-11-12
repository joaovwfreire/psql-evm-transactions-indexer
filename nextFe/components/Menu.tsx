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
      <nav className="navbar fixed-top navbar-inverse navbar-expand-lg navbar-light border-bottom  navbar-custom-bg" id='navbar'>
        
      
      <div className="container-fluid">
        <h2 className="navbar-brand mt-3 main-text-menu " ><b> LolliBlocks </b></h2>
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
              <a className="nav-link border-danger shadowmenu rounded-0 btn btn-light mx-2 text-black" aria-current="page" href="/"><b>Home</b></a>
            </li>
            <li className="nav-item m-1  ">
              <a className="nav-link border-danger shadowmenu rounded-0 btn btn-light   mx-2 text-black" href="/user"><b>User</b></a>
            </li>
            <li className="nav-item m-1  ">
              <a className="nav-link border-danger shadowmenu rounded-0 btn btn-light   mx-2 text-black" href="/currentblock"><b>Current Block</b></a>
            </li>
            <li className="nav-item m-1  ">
              <a className="nav-link border-danger shadowmenu rounded-0 btn btn-light  mx-2 text-black" href="#"><b>Snapshots</b></a>
            </li>
            <li className="nav-item m-1  dropdown">
              <a className="nav-link border-danger shadowmenu rounded-0 dropdown-toggle btn btn-light  mx-2 text-black" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <b>Premium</b>
              </a>
              <ul className="dropdown-menu bg-danger" aria-labelledby="navbarDropdown">
                <li><a className="nav-link border-danger shadowmenu rounded-0 btn btn-light  mx-2 text-black mt-2" href="#"><b>Lorem</b></a></li>
                <li><a className="nav-link border-danger shadowmenu rounded-0 btn btn-light  mx-2 text-black mt-1 mb-2" href="#"><b>Ipsum</b></a></li>

              </ul>
            </li>
            <li className="nav-item  mt-1 ">
          <div
          
        >
          {!session && (
            <>
              
              <a
                href={`/api/auth/signin`}
                className={`nav-link border-danger shadowmenu rounded-0 btn btn-light   mx-2 text-black `}
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
                  className={`${styles.avatar} mx-4`}
                />
              )}
              <span className="mx-2 mt-1  d-inline-block">
            
                <a
                href={`/api/auth/signout`}
                
                onClick={(e) => {
                  e.preventDefault()
                  signOut()
                }}
              >
                <b className={` border-danger shadowmenu rounded-0 btn btn-light fw-bold`}>Sign out</b>
              </a>
              </span>

            </>
          )}
        </div>
          </li>

    
          </ul>
          
          <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted && authenticationStatus !== 'loading';
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus ||
            authenticationStatus === 'authenticated');

        return (
          <div
            {...(!ready && {
              'aria-hidden': true,
              'style': {
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none',
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <button onClick={openConnectModal} className='border-danger shadowmenu rounded-0 btn btn-light mx-3 pb-1 fw-bold'>
                    Connect Wallet
                  </button>
                );
              }

              if (chain.unsupported) {
                return (
                  <button onClick={openChainModal}  className='border-danger shadowmenu rounded-0 btn btn-light mx-3 pb-1 fw-bold'>
                    Wrong network
                  </button>
                );
              }

              return (
                <div style={{ display: 'flex', gap: 12 }}>
                  <button
                    onClick={openChainModal}
                    style={{ display: 'flex', alignItems: 'center' }}
                    type="button"
                    className='border-danger shadowmenu rounded-0 btn btn-light mx-3 pb-1 fw-bold'
                  >
                    {chain.hasIcon && (
                      <div
                        style={{
                          background: chain.iconBackground,
                          width: 24,
                          height: 24,
                          borderRadius: 999,
                          overflow: 'hidden',
                          marginRight: 4,
                        }}
                      >
                        {chain.iconUrl && (
                          <Image
                            alt={chain.name ?? 'Chain icon'}
                            src={chain.iconUrl}
                            style={{ width: 24, height: 24 }}
                            width={24}
                            height={24}
                          />
                        )}
                      </div>
                    )}
                    {chain.name}
                  </button>

                  <button onClick={openAccountModal} type="button" className='border-danger shadowmenu rounded-0 btn btn-light mx-2 pb-1 fw-bold '>
                    {account.displayName}
                    {account.displayBalance
                      ? ` (${account.displayBalance})`
                      : ''}
                      
                  </button>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
          
        </div>
      </div>
    </nav>
    );
}

export default Menu;