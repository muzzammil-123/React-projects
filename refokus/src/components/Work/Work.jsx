import React, { useEffect, useState } from 'react'
import style from './work.module.css'
import Work_section_A from './Work_section_A';
import Work_section_B from './Work_section_B';
import Work_section_C from './Work_section_C';
import Work_section_D from './Work_section_D';
import HomeSectionE from '../Home/HomeSection-E';
export default function Work() {
  let [showWork, setShowWork] = useState(true)
  useEffect(()=>{
    let timer = setTimeout(() => {
      setShowWork(false)
    }, 2000);

    return () =>{
      clearTimeout(timer)
    }
  })
  return (
    <>  
    {showWork && (
      <div className={style.container}>
        <div className={style.home_loading}>
          <div className={style.home_loading_text}>Work</div>
        </div>
      </div>
    )}
    {!showWork && (
      <>
      <Work_section_A/>
      <Work_section_B/>
      <Work_section_C/>
      <Work_section_D/>
      <HomeSectionE/>``
      </>
      )}
    </>
  )
}
