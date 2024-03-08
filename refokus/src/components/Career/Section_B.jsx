import React from 'react'
import style from './section-b.module.css'
export default function Section_B() {
  return (
    <>
      <div className={style.container}>
        <div className={style.par}>
        <button className={style.btn}>ALL</button>
        <button className={style.btn}>EU</button>
        <button className={style.btn}>US</button>
        </div>
      </div>
    </>
  )
}
