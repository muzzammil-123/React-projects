import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { auth, provider } from '../firebase' // Ensure these imports are correct
import { signInWithPopup } from 'firebase/auth' // Ensure this import is correct

export default function Header() {

  let [user, setUser] = useState(false)
  let [value, setValue] = useState(``)
  let [userImage, setUserImage] = useState(``)
  let handleAuth = () => {
    if(!user){

      signInWithPopup(auth, provider).then((result) => {
        setValue(result.user.email)
        setUser(true)
        localStorage.setItem(`email`, result.user.name)
        setUserImage(result.user.photoURL)
        window.location.href = '/home'
      }).catch((error) => {
        console.log(error)
      })
    } else if (user){
      auth.signOut().then(()=>{
        window.location.href = '/'
      }).catch((err)=>alert(err))
    }
  }


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setValue(user.email);
        console.log(value)
        setUser(true);
        localStorage.setItem('email', user.name);
        setUserImage(user.photoURL);
      }
    });

    return () => unsubscribe();
  }, []);



  return (
    <>
      <Nav>
        <Logo>
          <img src='/images/logo.svg' />
        </Logo>
        {!user ? (<Login onClick={() => { handleAuth() }}>Login</Login>) :
          <>
            <NavMenu>
              <a href="/home">
                <img src="/images/home-icon.svg" alt="" />
                <span>HOME</span>
              </a>
              <a>
                <img src="/images/search-icon.svg" alt="" />
                <span>SEARCH</span>
              </a>
              <a>
                <img src="/images/watchlist-icon.svg" alt="" />
                <span>WATCHLIST</span>
              </a>
              <a>
                <img src="/images/original-icon.svg" alt="" />
                <span>ORIGINALS</span>
              </a>
              <a>
                <img src="/images/movie-icon.svg" alt="" />
                <span>MOVIES</span>
              </a>
              <a>
                <img src="/images/series-icon.svg" alt="" />
                <span>SERIES</span>
              </a>
            </NavMenu>
            <SignOut>
              <UserImg mg src={userImage} alt="" />
              <Dropdown>
                <span onClick={() => handleAuth()}>Sign out</span>
              </Dropdown>
            </SignOut>
          </>

        }

      </Nav>
    </>
  )
}

let Nav = styled.nav`
position: fixed;
top: 0;
left: 0;
right: 0;
height: 70px;
background-color: #090b13;
display: flex;
justify-content: space-between;
align-items: center;
padding : 0 36px;
letter-spacing: 16px;
z-index: 3;
`

let Logo = styled.a`
padding:0;
width:80px;
margin-top: 4px;
max-height: 70px;
font-size: 0;
display:inline-block;
img{
  display:block;
  width:100%;
}
`

let NavMenu = styled.div`
align-items: center;
display: flex;
flex-flow: row nowrap;
height: 100%;
justify-content: flex-end;
margin:0;
padding:0;
position:relative;
margin-right:auto;
margin-left:25px;
a{
  display:flex;
  align-items:center;
  padding:0 12px;

  img{
    height: 20px;
    min-width:20px;
    width:40px;
    z-index:auto;
  }

  span{
    color: rgb(249, 249 249);
    font-size:13px;
    letter-spacing:1.42px;
    line-height: 1.08;
    padding: 2px 0;
    white-space: nowrap;
    position:relative;
    &:before{
      background-color:rgb(249, 249, 249);
      border-radius:0px 0px 4px 4px;
      bottom:-6px;
      content:"";
      height:2px;
      left:0px;
      opacity:0;
      position:absolute;
      right:0px;
      transform-origin:left center;
      transform:scaleX(0);
      transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      visibility:hidden;
      width:auto;
    }
  }
  
  &:hover{
    span:before{
      transform:scaleX(1);
      visibility:visible;
      z-index:1;
      opacity:1 !important;
    }
  }
}
  
@media(max-width: 768px){
  display:none;
}
`

let Login = styled.a`
background-color:black;
padding: 8px 16px;
text-transform: uppercase;
letter-spacing:1.5px;
border: 1px solid #f9f9f9;
border-radius:4px;
transition: all 200ms ease-out;
&:hover{
  background-color:#f9f9f9;
  color:#000;
  border-color:transparent;
}
`

let UserImg = styled.img`
height: 100%;

`


let Dropdown = styled.div`
position: absolute;
top: 51px;
right: 29px;
border-radius:4px;
border : 1px solid black;
box-shadow:rgb(0 0 0 / 50%) 0px 0px 18px 0px;
padding:10px;
font-size:14px;
letter-spacing:3px;

opacity:0;
background-color: black;
`

let SignOut = styled.div`
position:realtive;
height:48px;
width:48px;
display:flex;
cursor:pointer;
align-items:center;
justify-content:center;

${UserImg}{
  border-radius: 50%;
  width:100%;
  height:100%;
}

&:hover{
  ${Dropdown}{
    opacity:1;
    transition-duration: 1s;
  }
}
`