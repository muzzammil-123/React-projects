import React, { useEffect, useState } from 'react'
import style from './career.module.css'
import Section_A from './Section_A'
import Section_B from './Section_B'
import Section_C from './Section_C'
export default function Career() {
  let [showCareer, setShowCareer] = useState(true)

  useEffect(() => {
    let timer = setTimeout(() => {
      setShowCareer(false)
    }, 2000);
    return () => {
      clearTimeout(timer)
    }
  })
  return (
    <>
      {showCareer && (
        <div className={style.container1}>
          <div className={style.home_loading}>
            <div className={style.home_loading_text}>career</div>
          </div>
        </div>
      )}
      {!showCareer && (
        <div className={style.container}>
          <Section_A />
          <Section_B />
          <Section_C />
        </div>

      )}
    </>
  )
}
