import React, { useContext } from 'react'
// import Nav from './Nav'
import Back from './Back'
import HomeSectiona from './HomeSection-a'
import HomeSectionB from './HomeSection-b'
import HomeSectio_c from './HomeSection-c'
import style from './home.module.css'
import store from '../../sore/Store'
import HomeSection_d from './Home_Section-d'
import HomeSectionE from './HomeSection-E'
// import Nav from './Nav'
export default function Home() {
  let { showHome } = useContext(store)
  return (
    <>
      {showHome && (
        <div className={style.container}>
          <div className={style.home_loading}>
            <div className={style.home_loading_text}>Home</div>
          </div>
        </div>)}
      {!showHome && (
        <>
          <Back />
          <HomeSectiona />
          <HomeSectionB />
          <HomeSectio_c />
          <HomeSection_d/>
          <HomeSectionE/>
        </>
      )}
    </>
  )
}
