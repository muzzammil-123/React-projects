import React, { useContext, useEffect, useState } from 'react'
import Back from './Back'
import HomeSectiona from './HomeSection-a'
import HomeSectionB from './HomeSection-b'
import HomeSectio_c from './HomeSection-c'
import style from './home.module.css'
import HomeSection_d from './Home_Section-d'
import HomeSectionE from './HomeSection-E'
export default function Home() {

  let [showHome, setShowHome] = useState(true)
  useEffect(() => {
    let timer = setTimeout(() => {
      setShowHome(false)
    }, 2000);

    return () => {
      clearTimeout(timer)
    }
  })
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
          <HomeSection_d />
          <HomeSectionE />
        </>
      )}
    </>
  )
}
